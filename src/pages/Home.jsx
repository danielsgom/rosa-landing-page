import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeroBanner from '../components/HeroBanner.jsx'
import ProfileCard from '../components/ProfileCard.jsx'
import PlanCard from '../components/PlanCard.jsx'
import LegalModal from '../components/LegalModal.jsx'
import LanguageSelector from '../components/LanguageSelector.jsx'
import { useLegalAcceptance } from '../hooks/useLegalAcceptance.js'

// ── TUS IMÁGENES ─────────────────────────────────────────────────────────────
// Coloca tus ficheros en src/assets/ con estos nombres exactos
import heroImage   from '../assets/hero.jpg'
import avatarImage from '../assets/avatar.jpg'
const HERO_IMAGE   = heroImage
const AVATAR_IMAGE = avatarImage
// ─────────────────────────────────────────────────────────────────────────────

const PAYPAL_ANNUAL_URL = 'https://www.paypal.com/ncp/payment/97E4U7MKZS63Q'

export default function Home() {
  const { accepted, accept } = useLegalAcceptance()
  const { t, i18n } = useTranslation()
  const [showModal, setShowModal] = useState(false)
  const [pendingPlan, setPendingPlan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const plansRef = useRef(null)
  const [plansVisible, setPlansVisible] = useState(false)

  // Hide sticky CTA when plans section is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setPlansVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    if (plansRef.current) observer.observe(plansRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSelectPlan = (plan) => {
    setPendingPlan(plan)
    if (!accepted) {
      setShowModal(true)
    } else {
      startCheckout(plan)
    }
  }

  const handleLegalAccept = () => {
    accept()
    setShowModal(false)
    if (pendingPlan) startCheckout(pendingPlan)
  }

  const startCheckout = async (plan) => {
    if (plan === 'annual') {
      window.location.href = PAYPAL_ANNUAL_URL
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, locale: i18n.language }),
      })
      if (!res.ok) throw new Error('checkout error')
      const { url } = await res.json()
      window.location.href = url
    } catch (err) {
      setError(t('home.error'))
      setLoading(false)
    }
  }

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: '#0a0807', minHeight: '100vh' }}>
    <div className="min-h-screen pb-8 relative" style={{ background: '#14100f', maxWidth: 480, margin: '0 auto' }}>
      <LanguageSelector />
      {/* Hero + avatar overlap wrapper */}
      <div className="relative">
        <HeroBanner src={HERO_IMAGE} />

        {/* Avatar — centered, overlaps the bottom of the hero image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <div
            className="rounded-full p-1 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #c88596, #c6a15f)', width: 108, height: 108 }}
          >
            {AVATAR_IMAGE ? (
              <img
                src={AVATAR_IMAGE}
                alt="Rosa"
                className="rounded-full w-full h-full object-cover"
              />
            ) : (
              <div
                className="rounded-full w-full h-full flex items-center justify-center text-5xl"
                style={{ background: '#1f1a18' }}
              >
                🌹
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile info */}
      <ProfileCard />

      {/* Who am I */}
      <section className="px-6 py-4 text-center">
        <p className="text-sm leading-relaxed" style={{ color: '#b3a49a', maxWidth: 340, margin: '0 auto' }}>
          {t('home.intro')}
        </p>
      </section>

      {/* Plans section */}
      <section ref={plansRef} className="pt-4 pb-2">
        <h2 className="text-2xl font-bold text-center text-white mb-1 px-4">
          {t('home.plansTitle')}
        </h2>
        <p className="text-center text-xs mb-5 px-4" style={{ color: '#8a7c72' }}>
          {t('home.plansSubtitle')}
        </p>

        {/* Annual plan first (featured) */}
        <div className="space-y-4 pt-5">
          <PlanCard plan="annual" onSelect={handleSelectPlan} loading={loading} />
          <PlanCard plan="monthly" onSelect={handleSelectPlan} loading={loading} />
        </div>
      </section>

      {/* Trust badges */}
      <div className="flex justify-center gap-6 py-5 px-4">
        {[
          { icon: '🔒', key: 'trust.secure' },
          { icon: '🤫', key: 'trust.discrete' },
          { icon: '✅', key: 'trust.cancel' },
        ].map((b) => (
          <div key={b.key} className="flex flex-col items-center gap-1">
            <span className="text-xl">{b.icon}</span>
            <span className="text-xs text-center" style={{ color: '#8a7c72' }}>{t(`home.${b.key}`)}</span>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="mx-4 mb-4 p-3 rounded-xl text-sm text-center" style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', color: '#ff8080' }}>
          {error}
        </div>
      )}

      {/* Footer */}
      <footer className="px-6 py-6 text-center" style={{ borderTop: '1px solid #241c1a' }}>
        <p className="text-xs mb-2" style={{ color: '#6b5d54' }}>
          {t('home.footer.age')}
        </p>
        <a href="/legal" className="text-xs underline" style={{ color: '#8a7c72' }}>
          {t('home.footer.legal')}
        </a>
      </footer>

      {/* Sticky CTA — comentado, descomentar para reactivar
      <div
        className="fixed bottom-0 z-40 px-4 pb-6 pt-3"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: 480,
          background: 'linear-gradient(to top, #14100f 60%, transparent)',
          transition: 'opacity 0.3s, transform 0.3s',
          opacity: plansVisible ? 0 : 1,
          pointerEvents: plansVisible ? 'none' : 'auto',
          transform: plansVisible
            ? 'translateX(-50%) translateY(8px)'
            : 'translateX(-50%) translateY(0)',
        }}
      >
        <button
          className="btn-primary"
          onClick={scrollToPlans}
          style={{ background: 'linear-gradient(135deg, #c6a15f, #e2c281)', color: '#14100f', maxWidth: 400, margin: '0 auto', display: 'flex' }}
        >
          🌹 Quiero conocerte
        </button>
      </div>
      */}

      {/* Legal modal */}
      {showModal && (
        <LegalModal
          onAccept={handleLegalAccept}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
    </div>
  )
}
