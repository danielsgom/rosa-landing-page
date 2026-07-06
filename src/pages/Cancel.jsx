import { useNavigate } from 'react-router-dom'

export default function Cancel() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#0a0807', minHeight: '100vh' }}>
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-10 text-center"
      style={{ background: '#14100f', maxWidth: 480, margin: '0 auto' }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-5"
        style={{ background: 'rgba(200,133,150,0.1)', border: '2px solid rgba(200,133,150,0.2)' }}
      >
        😔
      </div>

      <h1 className="text-2xl font-bold text-white mb-2">
        Aún no es nuestro momento
      </h1>
      <p className="text-sm leading-relaxed mb-8" style={{ color: '#b3a49a', maxWidth: 300 }}>
        Tranquilo, no se te ha cobrado nada. Aquí estaré esperándote para cuando quieras que nos conozcamos 🌹
      </p>

      <button
        className="btn-primary mb-3"
        style={{ maxWidth: 320 }}
        onClick={() => navigate('/')}
      >
        🌹 Volver a intentarlo
      </button>

      <p className="text-xs" style={{ color: '#8a7c72' }}>
        Si tuviste algún problema con el pago, contacta por Telegram
      </p>
    </div>
    </div>
  )
}
