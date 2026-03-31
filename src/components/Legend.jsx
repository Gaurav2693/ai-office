import React from 'react'

const agents = [
  { name: 'RONIN', color: '#0DEEF3' },
  { name: 'SAGE', color: '#F5A623' },
  { name: 'CIPHER', color: '#00E676' },
  { name: 'MUSE', color: '#E040FB' },
  { name: 'ATLAS', color: '#448AFF' },
  { name: 'FORGE', color: '#FF9100' },
  { name: 'ECHO', color: '#7C4DFF' },
  { name: 'SPARK', color: '#FF5252' },
]

export default function Legend() {
  return (
    <div style={{
      position: 'fixed', bottom: 72, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14,
      zIndex: 20, pointerEvents: 'none',
      opacity: 0, animation: 'fadeUp 1.2s ease 1.2s forwards',
    }}>
      {agents.map(a => (
        <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: a.color, boxShadow: `0 0 4px ${a.color}` }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
            {a.name}
          </span>
        </div>
      ))}
    </div>
  )
}
