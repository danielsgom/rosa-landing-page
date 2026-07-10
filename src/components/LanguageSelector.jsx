import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n/languages.js'

export default function LanguageSelector() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0]

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: 12,
        right: 12,
        zIndex: 50,
      }}
    >
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t('language.select')}
        aria-expanded={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '5px 10px',
          borderRadius: 20,
          border: '1px solid rgba(198,161,95,0.3)',
          background: 'rgba(20,16,15,0.85)',
          backdropFilter: 'blur(8px)',
          color: '#b3a49a',
          fontSize: 13,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        <span>{current.flag}</span>
        <span>{current.nativeName}</span>
        <span style={{ fontSize: 10, opacity: 0.7 }}>{open ? '▲' : '▼'}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label={t('language.select')}
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            minWidth: 160,
            borderRadius: 12,
            border: '1px solid #332b27',
            background: '#1f1a18',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            overflow: 'hidden',
          }}
        >
          {LANGUAGES.map((lang) => {
            const isActive = i18n.language === lang.code
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(lang.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '10px 14px',
                  border: 'none',
                  background: isActive ? 'rgba(198,161,95,0.12)' : 'transparent',
                  color: isActive ? '#e2c281' : '#b3a49a',
                  fontSize: 13,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  dir: lang.dir,
                }}
              >
                <span style={{ fontSize: 18 }}>{lang.flag}</span>
                <span>{lang.nativeName}</span>
                {isActive && <span style={{ marginLeft: 'auto', color: '#c6a15f' }}>✓</span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
