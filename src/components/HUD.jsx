import React from 'react'

const s = {
  hud: {
    position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
    display: 'flex', alignItems: 'center', gap: 16, zIndex: 20,
    background: 'rgba(7,24,44,0.75)', backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.06)', borderRadius: 40, padding: '10px 24px',
    opacity: 0, animation: 'fadeUp 1.2s ease 0.8s forwards',
  },
  clock: { fontFamily: "'Orbitron', sans-serif", fontSize: 13, fontWeight: 500, color: '#0DEEF3', minWidth: 48, textAlign: 'center' },
  div: { width: 1, height: 14, background: 'rgba(255,255,255,0.08)' },
  status: { fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', minWidth: 90, textAlign: 'center' },
}

export default function HUD({ time, timeValue, status, cyberpunk, onTimeChange, onCyberpunk }) {
  return (
    <div style={s.hud}>
      <span style={s.clock}>{time}</span>
      <div style={s.div} />
      <input
        type="range" min="0" max="1440" value={timeValue} step="1"
        onChange={e => onTimeChange(parseInt(e.target.value))}
        style={{
          WebkitAppearance: 'none', appearance: 'none', width: 160, height: 2,
          borderRadius: 1, background: 'rgba(255,255,255,0.1)', outline: 'none', cursor: 'pointer',
        }}
      />
      <div style={s.div} />
      <span style={s.status}>{status}</span>
      <div style={s.div} />
      <button onClick={onCyberpunk} style={{
        background: cyberpunk ? 'rgba(13,238,243,0.15)' : 'none',
        border: `1px solid ${cyberpunk ? '#0DEEF3' : 'rgba(255,255,255,0.15)'}`,
        borderRadius: 20, padding: '4px 12px', color: '#0DEEF3',
        fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: 2,
        textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s',
      }}>
        {cyberpunk ? 'LIGHTS ON' : 'LIGHTS OFF'}
      </button>
    </div>
  )
}
