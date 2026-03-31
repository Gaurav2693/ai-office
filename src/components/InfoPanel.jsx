import React from 'react'

const s = {
  panel: (open) => ({
    position: 'fixed', right: 24, bottom: 68, width: 320, zIndex: 25,
    background: 'rgba(7,24,44,0.92)', backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: 24,
    opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(10px)',
    transition: 'all 0.3s ease', visibility: open ? 'visible' : 'hidden',
    pointerEvents: open ? 'all' : 'none',
  }),
  label: { fontFamily: "'DM Mono', monospace", fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 6 },
  title: { fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: 1 },
  text: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)', marginTop: 4 },
  link: { fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#0DEEF3', textDecoration: 'none', letterSpacing: 1, display: 'block', marginBottom: 6 },
  divider: { height: 1, background: 'rgba(255,255,255,0.06)', margin: '14px 0' },
  badge: {
    display: 'inline-block', fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: 1,
    padding: '2px 8px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)',
    color: 'rgba(255,255,255,0.35)', marginRight: 4, marginBottom: 4,
  },
}

export default function InfoPanel({ open }) {
  return (
    <div style={s.panel(open)}>
      <div style={{ marginBottom: 16 }}>
        <div style={s.label}>Project</div>
        <div style={s.title}>THE <span style={{ color: '#0DEEF3' }}>OFFICE</span></div>
        <div style={s.text}>
          A miniature isometric 3D office where 9 AI agents work — each with a name, role, animated screen, and personality. They walk around, have conversations, and hold meetings. Built entirely with React + Three.js.
        </div>
      </div>

      <div style={s.divider} />

      <div style={{ marginBottom: 16 }}>
        <div style={s.label}>Part of</div>
        <div style={s.title}><span style={{ color: '#0DEEF3' }}>RONIN</span></div>
        <div style={s.text}>
          An AI operating system that remembers your taste. RONIN is a native macOS command center with a two-seat intelligence model, 8-gate build pipeline, and taste memory as its primary moat. This office depicts what happens inside — agents collaborating, building, deploying.
        </div>
      </div>

      <div style={s.divider} />

      <div style={{ marginBottom: 16 }}>
        <div style={s.label}>Built by</div>
        <div style={s.title}>Gaurav Mishra</div>
        <div style={s.text}>
          Senior Product Designer & Design-Engineer. 5+ years building enterprise products. Currently building RONIN — shipping the OS that every design-engineer deserves.
        </div>
        <div style={{ marginTop: 8 }}>
          {['Product Design', 'Design Systems', 'SwiftUI', 'React', 'Three.js', 'AI/LLM'].map(b => (
            <span key={b} style={s.badge}>{b}</span>
          ))}
        </div>
      </div>

      <div style={s.divider} />

      <div>
        <div style={s.label}>Links</div>
        <div style={{ marginTop: 6 }}>
          <a style={s.link} href="https://gauravmishra.design/rooms" target="_blank" rel="noreferrer">↗ gauravmishra.design</a>
          <a style={s.link} href="https://github.com/Gaurav2693" target="_blank" rel="noreferrer">↗ github.com/Gaurav2693</a>
          <a style={s.link} href="https://linkedin.com/in/imgaurav2693" target="_blank" rel="noreferrer">↗ linkedin.com/in/imgaurav2693</a>
          <a style={s.link} href="https://twitter.com/GauravM2693" target="_blank" rel="noreferrer">↗ @GauravM2693</a>
        </div>
      </div>
    </div>
  )
}
