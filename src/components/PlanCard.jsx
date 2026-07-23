import { useTranslation } from 'react-i18next'

export default function PlanCard({ plan, onSelect, loading }) {
  const { t } = useTranslation()

  if (plan === 'annual') {
    const benefits = [
      { emoji: '✅', text: t('plans.annual.benefit1') },
      { emoji: '💬', text: t('plans.annual.benefit2') },
      { emoji: '🎭', text: t('plans.annual.benefit3') },
      { emoji: '📸', text: t('plans.annual.benefit4') },
      { emoji: '🌹', text: t('plans.annual.benefit5') },
    ]

    return (
      <div className="card-featured relative mx-4">
        {/* Recommended badge */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider"
          style={{ background: 'linear-gradient(135deg, #c6a15f, #e2c281)', color: '#14100f' }}
        >
          {t('common.popularBadge')}
        </div>

        <div className="flex justify-between items-start mb-1">
          <span
            className="text-xs font-bold tracking-widest px-2 py-1 rounded-md"
            style={{ background: 'rgba(198,161,95,0.15)', color: '#c6a15f' }}
          >
            {t('plans.annual.badge')}
          </span>
          <span
            className="text-xs font-bold px-2 py-1 rounded-full"
            style={{ background: 'rgba(220,80,80,0.15)', color: '#ff9d9d', border: '1px solid rgba(220,80,80,0.35)' }}
          >
            {t('plans.annual.discount')}
          </span>
        </div>

        <div className="my-3">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black" style={{ color: '#e2c281' }}>30€</span>
            <span className="text-lg font-semibold line-through" style={{ color: '#6b5d54' }}>50€</span>
            <span className="text-sm" style={{ color: '#8a7c72' }}>/{t('plans.annual.period')}</span>
          </div>
          <p className="text-sm mt-0.5" style={{ color: '#b3a49a' }}>{t('plans.annual.tagline')}</p>
          <p className="text-xs mt-1" style={{ color: '#e2c281' }}>💰 {t('plans.annual.savings')}</p>
        </div>

        <ul className="space-y-2.5 mb-5">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span className="text-base leading-tight">{b.emoji}</span>
              <span style={{ color: '#e6ddd5' }}>{b.text}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs leading-relaxed mb-4" style={{ color: '#6b5d54', borderTop: '1px solid #332b27', paddingTop: '12px' }}>
          {t('plans.annual.disclaimer')}
        </p>

        <button
          className="btn-primary"
          style={{ background: 'linear-gradient(135deg, #c6a15f, #e2c281)', color: '#14100f' }}
          onClick={() => onSelect('annual')}
          disabled={loading}
        >
          {loading ? t('common.processing') : `👑 ${t('plans.annual.cta')}`}
        </button>
      </div>
    )
  }

  // Monthly plan
  const benefits = [
    { emoji: '🌹', text: t('plans.monthly.benefit1') },
    { emoji: '📸', text: t('plans.monthly.benefit2') },
    { emoji: '💌', text: t('plans.monthly.benefit3') },
    { emoji: '🔞', text: t('plans.monthly.benefit4') },
  ]

  return (
    <div className="card mx-4">
      <div className="flex justify-between items-start mb-1">
        <span
          className="text-xs font-bold tracking-widest px-2 py-1 rounded-md"
          style={{ background: 'rgba(200,133,150,0.15)', color: '#c88596' }}
        >
          {t('plans.monthly.badge')}
        </span>
      </div>

      <div className="my-3">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black" style={{ color: '#c88596' }}>3,50€</span>
          <span className="text-sm" style={{ color: '#8a7c72' }}>/{t('plans.monthly.period')}</span>
        </div>
        <p className="text-sm mt-0.5" style={{ color: '#b3a49a' }}>{t('plans.monthly.tagline')}</p>
      </div>

      <ul className="space-y-2.5 mb-5">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <span className="text-base leading-tight">{b.emoji}</span>
            <span style={{ color: '#e6ddd5' }}>{b.text}</span>
          </li>
        ))}
      </ul>

      <button
        className="btn-secondary"
        disabled
        style={{ opacity: 0.6, cursor: 'not-allowed' }}
      >
        {t('plans.monthly.comingSoon')}
      </button>
    </div>
  )
}
