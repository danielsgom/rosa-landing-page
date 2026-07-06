const PLANS = {
  monthly: {
    id: 'monthly',
    badge: 'MENSUAL',
    price: '3,50€',
    period: 'al mes',
    tagline: 'Para empezar a conocernos',
    highlight: false,
    savings: null,
    benefits: [
      { emoji: '🌹', text: 'Mi canal privado, solo para los míos' },
      { emoji: '📸', text: 'Fotos y vídeos íntimos sin censura' },
      { emoji: '💌', text: 'Contenido nuevo y sorpresas cada semana' },
      { emoji: '🔞', text: 'Mi lado más atrevido, sin filtros' },
    ],
    cta: 'Empezar por 3,50€/mes',
  },
  annual: {
    id: 'annual',
    badge: 'ANUAL',
    price: '30€',
    period: 'al año',
    tagline: 'Nuestra conexión más íntima y personal',
    highlight: true,
    savings: 'Ahorras 12€ · menos de 3€/mes',
    benefits: [
      { emoji: '✅', text: 'Todo lo del plan mensual, incluido' },
      { emoji: '💬', text: 'Chats 1 a 1 conmigo · trato totalmente personal' },
      { emoji: '📅', text: '2 citas privadas al mes conmigo (con cita previa)' },
      { emoji: '🎭', text: 'Roleplay y sexting en cada una de nuestras citas' },
      { emoji: '📸', text: 'Fotos íntimas pensadas solo para ti' },
      { emoji: '�', text: 'Nos conocemos de verdad, más allá del contenido' },
    ],
    cta: 'Quiero conocerte a fondo',
  },
}

export default function PlanCard({ plan, onSelect, loading }) {
  const p = PLANS[plan]

  if (p.highlight) {
    return (
      <div className="card-featured relative mx-4">
        {/* Recommended badge */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider"
          style={{ background: 'linear-gradient(135deg, #c6a15f, #e2c281)', color: '#14100f' }}
        >
          ⭐ MÁS POPULAR
        </div>

        <div className="flex justify-between items-start mb-1">
          <span
            className="text-xs font-bold tracking-widest px-2 py-1 rounded-md"
            style={{ background: 'rgba(198,161,95,0.15)', color: '#c6a15f' }}
          >
            {p.badge}
          </span>
          {p.savings && (
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full"
              style={{ background: 'rgba(198,161,95,0.15)', color: '#e2c281' }}
            >
              💰 {p.savings}
            </span>
          )}
        </div>

        <div className="my-3">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black" style={{ color: '#e2c281' }}>
              {p.price}
            </span>
            <span className="text-sm" style={{ color: '#8a7c72' }}>
              /{p.period}
            </span>
          </div>
          <p className="text-sm mt-0.5" style={{ color: '#b3a49a' }}>
            {p.tagline}
          </p>
        </div>

        <ul className="space-y-2.5 mb-5">
          {p.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span className="text-base leading-tight">{b.emoji}</span>
              <span style={{ color: '#e6ddd5' }}>{b.text}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs leading-relaxed mb-4" style={{ color: '#6b5d54', borderTop: '1px solid #332b27', paddingTop: '12px' }}>
          Las citas personalizadas se realizan por chat escrito y con cita previa. No incluyen llamadas, videollamadas, audios ni encuentros presenciales.
        </p>

        <button
          className="btn-primary"
          style={{ background: 'linear-gradient(135deg, #c6a15f, #e2c281)', color: '#14100f' }}
          onClick={() => onSelect(p.id)}
          disabled={loading}
        >
          {loading ? '⏳ Procesando...' : `👑 ${p.cta}`}
        </button>
      </div>
    )
  }

  return (
    <div className="card mx-4">
      <div className="flex justify-between items-start mb-1">
        <span
          className="text-xs font-bold tracking-widest px-2 py-1 rounded-md"
          style={{ background: 'rgba(200,133,150,0.15)', color: '#c88596' }}
        >
          {p.badge}
        </span>
      </div>

      <div className="my-3">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black" style={{ color: '#c88596' }}>
            {p.price}
          </span>
          <span className="text-sm" style={{ color: '#8a7c72' }}>
            /{p.period}
          </span>
        </div>
        <p className="text-sm mt-0.5" style={{ color: '#b3a49a' }}>
          {p.tagline}
        </p>
      </div>

      <ul className="space-y-2.5 mb-5">
        {p.benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <span className="text-base leading-tight">{b.emoji}</span>
            <span style={{ color: '#e6ddd5' }}>{b.text}</span>
          </li>
        ))}
      </ul>

      <button
        className="btn-secondary"
        onClick={() => onSelect(p.id)}
        disabled={loading}
      >
        {loading ? '⏳ Procesando...' : `🔥 ${p.cta}`}
      </button>
    </div>
  )
}
