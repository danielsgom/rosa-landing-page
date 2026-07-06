import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ── CONFIGURA ESTOS LINKS ────────────────────────────────────────────────────
const TELEGRAM_CHANNEL = 'https://t.me/+mIG0yVkeFAVjZmU8'
const TELEGRAM_DIRECT  = 'https://t.me/rosa_comunidad_vip'
const STRIPE_PORTAL    = 'https://billing.stripe.com/p/login/7sYaEP4XUbxYa3pbcC1Fe00'
// ─────────────────────────────────────────────────────────────────────────────

export default function Success() {
  const navigate = useNavigate()
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    const t = setTimeout(() => setShowConfetti(false), 4000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ background: '#0a0807', minHeight: '100vh' }}>
    <div
      className="min-h-screen flex flex-col items-center px-5 py-10 text-center"
      style={{ background: 'linear-gradient(180deg, #14100f 0%, #1c1613 50%, #14100f 100%)', maxWidth: 480, margin: '0 auto' }}
    >
      {/* Animated petals */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {['🌹', '💖', '✨', '🌹', '💫', '🌹'].map((e, i) => (
            <span
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${8 + i * 16}%`,
                animation: `fall ${1.5 + i * 0.3}s ease-in forwards`,
                top: '-40px',
              }}
            >
              {e}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fall {
          to { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(200,133,150,0.4); }
          50% { box-shadow: 0 0 40px rgba(200,133,150,0.7); }
        }
      `}</style>

      {/* Icon */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6 mt-4"
        style={{
          background: 'linear-gradient(135deg, #c88596, #a76370)',
          animation: 'pulse-glow 2s ease-in-out infinite',
        }}
      >
        🌹
      </div>

      <h1 className="text-3xl font-black text-white mb-2">
        ¡Bienvenido a lo nuestro!
      </h1>
      <p className="text-base font-medium mb-1" style={{ color: '#c88596' }}>
        Ya estás dentro de mi mundo
      </p>
      <p className="text-sm leading-relaxed mb-8" style={{ color: '#b3a49a', maxWidth: 300 }}>
        Gracias por dar el paso 🌹 Esto es solo el comienzo. Tienes tres cosas esperándote ahora mismo.
      </p>

      {/* === ACTION CARDS === */}
      <div className="w-full space-y-3 mb-8" style={{ maxWidth: 380 }}>

        {/* 1 — Canal VIP */}
        <a
          href={TELEGRAM_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex items-center gap-4 text-left"
          style={{ textDecoration: 'none', borderColor: 'rgba(198,161,95,0.4)' }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(198,161,95,0.15)' }}
          >
            📲
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight mb-0.5">Acceder al canal VIP privado</p>
            <p className="text-xs leading-relaxed" style={{ color: '#8a7c72' }}>
              Tu espacio exclusivo con todo el contenido íntimo
            </p>
          </div>
          <span className="ml-auto text-lg flex-shrink-0" style={{ color: '#c6a15f' }}>›</span>
        </a>

        {/* 2 — Cita personal + sorpresa */}
        <a
          href={TELEGRAM_DIRECT}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex items-center gap-4 text-left"
          style={{ textDecoration: 'none', background: 'linear-gradient(135deg, rgba(200,133,150,0.12), rgba(167,99,112,0.08))', borderColor: 'rgba(200,133,150,0.35)' }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(200,133,150,0.2)' }}
          >
            💬
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight mb-0.5">Escríbeme — tengo una sorpresa para ti</p>
            <p className="text-xs leading-relaxed" style={{ color: '#c88596' }}>
              Reserva tu cita personal y descubre lo que te tengo preparado 🌹
            </p>
            <p className="text-xs leading-relaxed mt-1" style={{ color: '#6b5d54' }}>
              La cita es por chat escrito, con cita previa. No incluye llamadas, videollamadas, audios ni encuentros presenciales.
            </p>
          </div>
          <span className="ml-auto text-lg flex-shrink-0" style={{ color: '#c88596' }}>›</span>
        </a>

        {/* 3 — Gestión de suscripción */}
        <a
          href={STRIPE_PORTAL}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex items-center gap-4 text-left"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(139,124,114,0.15)' }}
          >
            ⚙️
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight mb-0.5">Gestionar mi suscripción</p>
            <p className="text-xs leading-relaxed" style={{ color: '#8a7c72' }}>
              Consulta, pausa o cancela cuando quieras
            </p>
          </div>
          <span className="ml-auto text-lg flex-shrink-0" style={{ color: '#6b5d54' }}>›</span>
        </a>
      </div>

      <p className="text-xs mb-8" style={{ color: '#6b5d54', maxWidth: 280 }}>
        Si tienes cualquier duda, escríbeme directamente por Telegram. Siempre te respondo yo.
      </p>

      <button
        onClick={() => navigate('/')}
        className="text-xs underline"
        style={{ color: '#6b5d54', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        Volver al inicio
      </button>
    </div>
    </div>
  )
}

