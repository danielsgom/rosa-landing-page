export default function ProfileCard() {
  return (
    /* pt-14 leaves room for the avatar that's positioned absolutely above */
    <div className="flex flex-col items-center pt-14 px-4 pb-2">
      {/* Name */}
      <h1 className="text-2xl font-bold text-white mb-1">Rosa</h1>

      {/* Tagline */}
      <p className="text-sm font-medium mb-2" style={{ color: '#c88596' }}>
        🌹 Tu conexión más íntima y real
      </p>

      {/* Bio */}
      <p className="text-center text-sm leading-relaxed px-4" style={{ color: '#b3a49a', maxWidth: 320 }}>
        Aquí no eres un suscriptor más. Quiero conocerte, ser yo misma contigo y darte lo que nadie más tiene de mí 🌹
      </p>
    </div>
  )
}

