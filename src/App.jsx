import React, { useRef, useEffect, useState, useCallback } from 'react'
import { createOfficeScene } from './scene/OfficeScene'
import HUD from './components/HUD'
import Header from './components/Header'
import InfoPanel from './components/InfoPanel'
import Ticker from './components/Ticker'
import Legend from './components/Legend'

export default function App() {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const [time, setTime] = useState(600)
  const [status, setStatus] = useState('All Agents Online')
  const [inMeeting, setInMeeting] = useState(false)
  const [cyberpunk, setCyberpunk] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    if (!canvasRef.current || sceneRef.current) return

    const scene = createOfficeScene(canvasRef.current, {
      onTimeUpdate: (min) => setTime(min),
      onStatusUpdate: (s) => setStatus(s),
      onMeetingChange: (m) => setInMeeting(m),
    })
    sceneRef.current = scene

    return () => {
      if (sceneRef.current) {
        sceneRef.current.destroy()
        sceneRef.current = null
      }
    }
  }, [])

  const handleTimeChange = useCallback((minutes) => {
    setTime(minutes)
    if (sceneRef.current) sceneRef.current.setTime(minutes)
  }, [])

  const handleCyberpunk = useCallback(() => {
    if (sceneRef.current) {
      sceneRef.current.toggleCyberpunk()
      setCyberpunk(prev => !prev)
    }
  }, [])

  const formatTime = (min) => {
    const h = Math.floor(min / 60)
    const m = Math.floor(min % 60)
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
  }

  return (
    <>
      {/* Three.js Canvas Container */}
      <div ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0 }} />

      {/* Vignette */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 5, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,6,16,0.5) 100%)'
      }} />

      {/* UI Layer */}
      <Header />
      <Ticker />
      <Legend />

      {inMeeting && (
        <div style={{
          position: 'fixed', top: 20, left: 24, zIndex: 20, pointerEvents: 'none',
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: 2,
            textTransform: 'uppercase', color: '#fff',
            background: 'linear-gradient(135deg, #0DEEF3, #448AFF)',
            padding: '4px 12px', borderRadius: 20,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%', background: '#fff',
              animation: 'pulse 1.5s ease infinite'
            }} />
            Meeting in Progress
          </div>
        </div>
      )}

      {/* Credit */}
      <div style={{
        position: 'fixed', top: 20, right: 24, zIndex: 20, pointerEvents: 'none', textAlign: 'right',
        opacity: 0, animation: 'fadeUpR 1.2s ease 1.5s forwards'
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Built by</div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Gaurav</div>
      </div>

      {/* Hint */}
      <div style={{
        position: 'fixed', top: 72, left: '50%', transform: 'translateX(-50%)',
        fontFamily: "'DM Mono', monospace", fontSize: 8, letterSpacing: 3,
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)',
        zIndex: 20, pointerEvents: 'none',
        opacity: 0, animation: 'fadeUp 1s ease 2.5s forwards, fadeOut 1s ease 7s forwards'
      }}>
        drag to orbit · scroll to zoom · slide to change time
      </div>

      <HUD
        time={formatTime(time)}
        timeValue={time}
        status={status}
        cyberpunk={cyberpunk}
        onTimeChange={handleTimeChange}
        onCyberpunk={handleCyberpunk}
      />

      <button
        onClick={() => setShowInfo(!showInfo)}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 25,
          width: 32, height: 32, borderRadius: '50%',
          background: 'rgba(7,24,44,0.75)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: showInfo ? '#0DEEF3' : 'rgba(255,255,255,0.5)',
          fontFamily: "'DM Mono', monospace", fontSize: 12,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >i</button>

      <InfoPanel open={showInfo} />

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateX(-50%) translateY(8px) } to { opacity:1; transform:translateX(-50%) translateY(0) } }
        @keyframes fadeUpR { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeOut { to { opacity:0 } }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:0.4; transform:scale(1.5) } }
      `}</style>
    </>
  )
}
