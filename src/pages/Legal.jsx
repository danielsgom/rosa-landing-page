import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'
import LanguageSelector from '../components/LanguageSelector.jsx'

const strong = <strong className="text-white" />

export default function Legal() {
  const navigate = useNavigate()
  const { t } = useTranslation('legal')

  const emailLink = (
    <a href="mailto:rosa.only.1989@gmail.com" style={{ color: '#c88596' }} />
  )
  const aepdLink = (
    <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" style={{ color: '#c88596' }} />
  )

  return (
    <div style={{ background: '#0a0807', minHeight: '100vh' }}>
      <div className="min-h-screen pb-8 relative" style={{ background: '#14100f', maxWidth: 480, margin: '0 auto' }}>
        <LanguageSelector />
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center gap-3 px-4 py-4"
          style={{ background: 'rgba(20,16,15,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #241c1a' }}
        >
          <button onClick={() => navigate(-1)} className="p-1 rounded-full" style={{ color: '#b3a49a' }}>
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-lg font-bold text-white">{t('title')}</h1>
        </div>

        <div className="px-5 py-6 space-y-6 text-sm" style={{ color: '#b3a49a' }}>

          {/* Prevails note for non-ES languages */}
          {t('prevails', '') && (
            <div
              className="rounded-xl p-3 text-xs"
              style={{ background: 'rgba(198,161,95,0.07)', border: '1px solid rgba(198,161,95,0.2)', color: '#c6a15f' }}
            >
              {t('prevails')}
            </div>
          )}

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s1.title')}</h2>
            <p className="leading-relaxed">{t('s1.p1')}</p>
            <p className="leading-relaxed mt-2">{t('s1.p2')}</p>
            <p className="leading-relaxed mt-2">{t('s1.p3')}</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s2.title')}</h2>
            <p className="leading-relaxed">{t('s2.p1')}</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s3.title')}</h2>
            <p className="leading-relaxed"><Trans i18nKey="s3.p1" ns="legal" components={{ strong }} /></p>
            <p className="leading-relaxed mt-2"><Trans i18nKey="s3.p2" ns="legal" components={{ strong }} /></p>
            <p className="leading-relaxed mt-2">{t('s3.p3')}</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s4.title')}</h2>
            <p className="leading-relaxed"><Trans i18nKey="s4.p1" ns="legal" components={{ strong }} /></p>
            <p className="leading-relaxed mt-2"><Trans i18nKey="s4.p2" ns="legal" components={{ strong }} /></p>
            <p className="leading-relaxed mt-2">{t('s4.p3')}</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s5.title')}</h2>
            <ul className="space-y-2 list-disc ps-5">
              {['i1','i2','i3','i4'].map((k) => (
                <li key={k}><Trans i18nKey={`s5.${k}`} ns="legal" components={{ strong }} /></li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s6.title')}</h2>
            <ul className="space-y-2 list-disc ps-5">
              {['i1','i2','i3','i4','i5','i6'].map((k) => (
                <li key={k}>{t(`s6.${k}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s7.title')}</h2>
            <p className="leading-relaxed mb-2"><Trans i18nKey="s7.p1" ns="legal" components={{ strong }} /></p>
            <ul className="space-y-1.5 list-disc ps-5">
              {['i1','i2','i3','i4','i5','i6'].map((k) => (
                <li key={k}>{t(`s7.${k}`)}</li>
              ))}
            </ul>
            <p className="leading-relaxed mt-2">{t('s7.p2')}</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s8.title')}</h2>
            <ul className="space-y-2 list-disc ps-5">
              {['i1','i2','i3','i4'].map((k) => (
                <li key={k}>{t(`s8.${k}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s9.title')}</h2>
            <ul className="space-y-1.5 list-disc ps-5">
              {['i1','i2','i3','i4','i5'].map((k) => (
                <li key={k}>{t(`s9.${k}`)}</li>
              ))}
            </ul>
            <p className="leading-relaxed mt-2">{t('s9.p1')}</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s10.title')}</h2>
            <p className="leading-relaxed">{t('s10.p1')}</p>
            <p className="leading-relaxed mt-2">{t('s10.p2')}</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s11.title')}</h2>
            <p className="leading-relaxed mb-2"><Trans i18nKey="s11.p1" ns="legal" components={{ strong }} /></p>
            <ul className="space-y-2 list-disc ps-5">
              {['i1','i2','i3','i4','i5','i6','i7','i8','i9','i10'].map((k) => (
                <li key={k}><Trans i18nKey={`s11.${k}`} ns="legal" components={{ strong }} /></li>
              ))}
              <li><Trans i18nKey="s11.i11" ns="legal" components={{ strong, emailLink }} /></li>
              <li><Trans i18nKey="s11.i12" ns="legal" components={{ strong, aepdLink }} /></li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">{t('s12.title')}</h2>
            <p className="leading-relaxed">{t('s12.p1')}</p>
          </section>

          {/* Titular */}
          <section
            className="rounded-xl p-4 text-xs space-y-1"
            style={{ background: 'rgba(198,161,95,0.07)', border: '1px solid rgba(198,161,95,0.2)' }}
          >
            <p className="font-semibold text-white mb-1">{t('titular.heading')}</p>
            <p><Trans i18nKey="titular.line1" ns="legal" components={{ strong }} /></p>
            <p><span style={{ color: '#8a7c72' }}>{t('titular.nifLabel')}</span> {t('titular.nifValue')}</p>
            <p><span style={{ color: '#8a7c72' }}>{t('titular.addressLabel')}</span> {t('titular.addressValue')}</p>
            <p>
              <span style={{ color: '#8a7c72' }}>{t('titular.contactLabel')}</span>{' '}
              <a href="mailto:rosa.only.1989@gmail.com" style={{ color: '#c88596' }}>rosa.only.1989@gmail.com</a>
            </p>
            <p className="pt-1" style={{ color: '#6b5d54' }}>{t('titular.updated')}</p>
          </section>

          <div className="pt-2">
            <button className="btn-primary" onClick={() => navigate('/')}>
              {t('backButton')}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
