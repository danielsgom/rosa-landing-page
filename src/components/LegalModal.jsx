import { useState } from 'react'
import { X } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

export default function LegalModal({ onAccept, onClose }) {
  const [checked, setChecked] = useState(false)
  const { t } = useTranslation()

  const handleAccept = () => {
    if (!checked) return
    onAccept()
  }

  const legalLinkComponent = (
    <a href="/legal" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#c88596' }} onClick={(e) => e.stopPropagation()} />
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-end"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full rounded-t-3xl pb-8"
        style={{ background: '#1f1a18', border: '1px solid #332b27', borderBottom: 'none', maxHeight: '85vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full" style={{ background: '#3a302b' }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-3" style={{ borderBottom: '1px solid #332b27' }}>
          <h2 className="text-lg font-bold text-white">{t('modal.title')}</h2>
          <button onClick={onClose} className="p-1 rounded-full" style={{ color: '#8a7c72' }}>
            <X size={20} />
          </button>
        </div>

        {/* Content scrollable */}
        <div className="overflow-y-auto px-5 pt-4 scrollbar-hide" style={{ maxHeight: 'calc(85vh - 160px)' }}>
          <div className="space-y-4 text-sm" style={{ color: '#b3a49a' }}>

            <div>
              <h3 className="font-semibold text-white mb-1">{t('modal.adult.title')}</h3>
              <p>{t('modal.adult.text')}</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">{t('modal.ai.title')}</h3>
              <p>{t('modal.ai.text')}</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">{t('modal.subscription.title')}</h3>
              <p>{t('modal.subscription.text')}</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">{t('modal.privacy.title')}</h3>
              <p>{t('modal.privacy.text')}</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">{t('modal.refund.title')}</h3>
              <p>{t('modal.refund.text')}</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">{t('modal.fullTerms.title')}</h3>
              <p>
                <Trans
                  i18nKey="modal.fullTerms.text"
                  components={{ legalLink: legalLinkComponent }}
                />
              </p>
            </div>
          </div>

          {/* Checkbox único */}
          <label
            className="flex items-start gap-3 mt-5 p-4 rounded-xl cursor-pointer"
            style={{ background: checked ? 'rgba(200,133,150,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${checked ? 'rgba(200,133,150,0.35)' : '#332b27'}`, transition: 'all 0.2s' }}
          >
            <div className="relative mt-0.5 flex-shrink-0" onClick={() => setChecked(v => !v)}>
              <input type="checkbox" className="sr-only" checked={checked} onChange={() => setChecked(v => !v)} />
              <div
                className="w-5 h-5 rounded flex items-center justify-center transition-all"
                style={{ background: checked ? '#c88596' : 'transparent', border: `2px solid ${checked ? '#c88596' : '#6b5d54'}` }}
              >
                {checked && <span className="text-white text-xs font-bold">✓</span>}
              </div>
            </div>
            <span className="text-sm leading-relaxed" style={{ color: '#e6ddd5' }}>
              <Trans
                i18nKey="modal.checkboxLabel"
                components={{
                  legalLink: (
                    <a
                      href="/legal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                      style={{ color: '#c88596' }}
                      onClick={e => e.stopPropagation()}
                    />
                  )
                }}
              />
            </span>
          </label>
        </div>

        {/* CTA */}
        <div className="px-5 pt-4">
          <button
            onClick={handleAccept}
            disabled={!checked}
            className="btn-primary"
          >
            {t('modal.cta')}
          </button>
        </div>
      </div>
    </div>
  )
}
