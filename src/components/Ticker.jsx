import React from 'react'

const messages = [
  { text: 'RONIN deploying to macOS...', color: '#0DEEF3' },
  { text: 'SAGE analyzing Q1 data pipeline', color: '#F5A623' },
  { text: 'CIPHER pushing build #847 to prod', color: '#00E676' },
  { text: 'MUSE generating brand assets', color: '#E040FB' },
  { text: 'ATLAS mapping user journey v3', color: '#448AFF' },
  { text: 'FORGE deploying orchestrator v10.8', color: '#FF9100' },
  { text: 'ECHO indexing research corpus', color: '#7C4DFF' },
  { text: 'SPARK running regression suite', color: '#FF5252' },
  { text: 'NEXUS routing incoming requests', color: '#CCDDEE' },
  { text: 'RONIN — taste memory sync complete', color: '#0DEEF3' },
  { text: 'FORGE — zero downtime deploy ✓', color: '#FF9100' },
  { text: 'CIPHER — 2,285 tests passing', color: '#00E676' },
]

const doubled = [...messages, ...messages]

export default function Ticker() {
  return (
    <div style={{
      position: 'fixed', top: 55, left: 0, right: 0, zIndex: 20, pointerEvents: 'none',
      overflow: 'hidden', height: 20,
      opacity: 0, animation: 'fadeUpR 1.2s ease 2s forwards',
    }}>
      <div style={{
        display: 'flex', gap: 40, whiteSpace: 'nowrap', width: 'max-content',
        animation: 'tickerScroll 30s linear infinite',
      }}>
        {doubled.map((m, i) => (
          <span key={i} style={{
            fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: 2,
            textTransform: 'uppercase', color: m.color, marginRight: 40,
          }}>
            ▸ {m.text}
          </span>
        ))}
      </div>
      <style>{`@keyframes tickerScroll { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
    </div>
  )
}
