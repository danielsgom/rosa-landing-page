import { useState } from 'react'
import { X } from 'lucide-react'

export default function LegalModal({ onAccept, onClose }) {
  const [checked, setChecked] = useState(false)

  const handleAccept = () => {
    if (!checked) return
    onAccept()
  }

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
          <h2 className="text-lg font-bold text-white">⚖️ Bases Legales</h2>
          <button onClick={onClose} className="p-1 rounded-full" style={{ color: '#8a7c72' }}>
            <X size={20} />
          </button>
        </div>

        {/* Content scrollable */}
        <div className="overflow-y-auto px-5 pt-4 scrollbar-hide" style={{ maxHeight: 'calc(85vh - 160px)' }}>
          <div className="space-y-4 text-sm" style={{ color: '#b3a49a' }}>

            <div>
              <h3 className="font-semibold text-white mb-1">🔞 Contenido para Adultos</h3>
              <p>Este sitio contiene material de naturaleza sexual explícita destinado exclusivamente a personas mayores de 18 años. Al proceder, declaras bajo tu responsabilidad que eres mayor de edad en tu país de residencia.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">🤖 Contenido Sintético e IA</h3>
              <p>Todo el contenido visual es sintético y ha sido generado o modificado mediante inteligencia artificial: «Rosa XOXO» es una identidad digital de ficción. Además, las conversaciones de Telegram pueden ser gestionadas por un agente de inteligencia artificial, y no necesariamente por una persona física en tiempo real.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">📋 Condiciones de Suscripción</h3>
              <p>La suscripción mensual se renueva automáticamente cada 30 días. La suscripción anual se renueva cada 365 días. Puedes cancelar en cualquier momento desde tu panel de Stripe y no se realizarán más cargos, pero no hay reembolso del período en curso.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">🔒 Privacidad y Datos</h3>
              <p>Todos los datos recogidos son datos personales, tratados conforme al RGPD y la LOPDGDD. Los datos de pago son gestionados exclusivamente por Stripe, Inc. (no almacenamos tu tarjeta) y nunca cedemos tus datos a terceros salvo obligación legal.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">🚫 Política de No Reembolso</h3>
              <p>Dado el carácter digital e inmediato del contenido, no se realizan reembolsos una vez accedido al contenido o transcurridas 24h desde la compra, salvo obligación legal contraria.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-1">📄 Términos Completos</h3>
              <p>Consulta las{' '}
                <a href="/legal" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#c88596' }} onClick={(e) => e.stopPropagation()}>
                  bases legales completas
                </a>
                {' '}antes de continuar.
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
              Confirmo que soy mayor de 18 años y acepto las{' '}
              <a href="/legal" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#c88596' }} onClick={e => e.stopPropagation()}>
                bases legales
              </a>
              , incluyendo la política de privacidad (RGPD/LOPDGDD), la renovación automática, la política de no reembolso, y que el contenido es sintético/generado por IA y las conversaciones pueden ser gestionadas por un agente de inteligencia artificial.
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
            Continuar al pago →
          </button>
        </div>
      </div>
    </div>
  )
}
