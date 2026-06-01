'use client'
import { useState, useEffect } from 'react'

export default function Page() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const t = localStorage.getItem('its-r-theme')
    const isDark = t !== 'light'
    setDark(isDark)
    if (!isDark) document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    if (next) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('its-r-theme', 'dark') }
    else { document.documentElement.setAttribute('data-theme', 'light'); localStorage.setItem('its-r-theme', 'light') }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', display: 'flex', flexDirection: 'column', fontFamily: 'system-ui,sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <a href="https://its-r-portal.vercel.app" style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '1rem' }}>
          ← ITS-R Universe
        </a>
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>📊 Statsig Flags Sdk Example</span>
        <button onClick={toggleTheme} style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.8rem' }}>
          {dark ? '☀️ Day' : '🌙 Night'}
        </button>
      </nav>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text)' }}>Statsig Flags Sdk Example</h1>
          <p style={{ color: 'var(--sub)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Part of ITS-R Universe — a digital civilization of 2,213 services.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://its-r-passport.vercel.app/login" style={{ padding: '0.75rem 1.5rem', background: 'var(--gold)', color: '#000', fontWeight: 700, borderRadius: '0.5rem', fontSize: '0.9rem' }}>
              🛂 Sign in with ITS-R Passport
            </a>
            <a href="https://its-r-portal.vercel.app" style={{ padding: '0.75rem 1.5rem', background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 600, borderRadius: '0.5rem', fontSize: '0.9rem' }}>
              🌐 Back to Portal
            </a>
          </div>
        </div>
      </div>
      <footer style={{ textAlign: 'center', padding: '1.5rem', borderTop: '1px solid var(--border)', color: 'var(--sub)', fontSize: '0.8rem' }}>
        ITS-R Universe | In loving memory of Roshan Ali Sahab 🤲
      </footer>
    </div>
  )
}