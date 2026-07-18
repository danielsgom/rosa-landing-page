export default function Maintenance() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        gap: '1.25rem',
      }}
    >
      <span style={{ fontSize: '3rem' }}>🌹</span>
      <h1 className="gradient-text" style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>
        Sitio en mantenimiento
      </h1>
      <p style={{ color: '#c9beb8', maxWidth: 420, margin: 0, lineHeight: 1.5 }}>
        Estamos realizando tareas de mantenimiento. Volvemos enseguida, ¡gracias por tu paciencia!
      </p>
      <p style={{ color: '#8a8078', maxWidth: 420, margin: 0, lineHeight: 1.5, fontSize: '0.9rem' }}>
        We're currently under maintenance. We'll be back shortly, thanks for your patience!
      </p>
    </div>
  )
}
