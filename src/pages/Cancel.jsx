import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelector from '../components/LanguageSelector.jsx'

export default function Cancel() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div style={{ background: '#0a0807', minHeight: '100vh' }}>
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-10 text-center relative"
      style={{ background: '#14100f', maxWidth: 480, margin: '0 auto' }}
    >
      <LanguageSelector />
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-5"
        style={{ background: 'rgba(200,133,150,0.1)', border: '2px solid rgba(200,133,150,0.2)' }}
      >
        😔
      </div>

      <h1 className="text-2xl font-bold text-white mb-2">
        {t('cancel.title')}
      </h1>
      <p className="text-sm leading-relaxed mb-8" style={{ color: '#b3a49a', maxWidth: 300 }}>
        {t('cancel.body')}
      </p>

      <button
        className="btn-primary mb-3"
        style={{ maxWidth: 320 }}
        onClick={() => navigate('/')}
      >
        {t('cancel.cta')}
      </button>

      <p className="text-xs" style={{ color: '#8a7c72' }}>
        {t('cancel.help')}
      </p>
    </div>
    </div>
  )
}
