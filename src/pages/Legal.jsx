import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Legal() {
  const navigate = useNavigate()

  return (
    <div style={{ background: '#0a0807', minHeight: '100vh' }}>
      <div className="min-h-screen pb-8" style={{ background: '#14100f', maxWidth: 480, margin: '0 auto' }}>
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center gap-3 px-4 py-4"
          style={{ background: 'rgba(20,16,15,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #241c1a' }}
        >
          <button onClick={() => navigate(-1)} className="p-1 rounded-full" style={{ color: '#b3a49a' }}>
            <ArrowLeft size={22} />
          </button>
          <h1 className="text-lg font-bold text-white">Bases Legales</h1>
        </div>

        <div className="px-5 py-6 space-y-6 text-sm" style={{ color: '#b3a49a' }}>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">1. Objeto del Servicio</h2>
            <p className="leading-relaxed">
              Rosa XOXO es un servicio de suscripción de contenido digital adulto de carácter exclusivo y de entretenimiento. Comprende el acceso a un canal privado de Telegram con fotos, vídeos y contenido íntimo, así como, en el plan anual, chats personalizados escritos de carácter explícito mediante cita previa (máx. 2 al mes).
            </p>
            <p className="leading-relaxed mt-2">
              El servicio es íntegramente digital y por texto escrito. No incluye llamadas de voz, videollamadas, mensajes de audio, encuentros presenciales ni contacto físico de ningún tipo.
            </p>
            <p className="leading-relaxed mt-2">
              El usuario reconoce que tanto el contenido visual como las conversaciones descritas en las presentes bases tienen naturaleza sintética y automatizada, en los términos detallados en las cláusulas 3 y 4.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">2. Mayoría de Edad y Contenido Adulto</h2>
            <p className="leading-relaxed">
              Este sitio contiene material de naturaleza sexual explícita destinado exclusivamente a personas mayores de 18 años. Al suscribirte declaras bajo tu responsabilidad ser mayor de edad en tu país de residencia. El titular se reserva el derecho a suspender cualquier suscripción ante indicios de uso por parte de un menor.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">3. Naturaleza Sintética del Contenido e Inteligencia Artificial</h2>
            <p className="leading-relaxed">
              El usuario reconoce y acepta expresamente que «Rosa XOXO» es una <strong className="text-white">identidad digital de ficción</strong> y que la totalidad del contenido visual del servicio —fotografías, vídeos, imágenes y cualquier otro material gráfico— es <strong className="text-white">contenido sintético</strong> generado, recreado o modificado, total o parcialmente, mediante sistemas de inteligencia artificial y otras herramientas digitales de generación de contenido.
            </p>
            <p className="leading-relaxed mt-2">
              En consecuencia, dicho contenido <strong className="text-white">no se corresponde necesariamente con una persona física real</strong> ni con hechos, lugares o situaciones reales. Cualquier parecido con personas reales es mera coincidencia o resultado del propio proceso de generación.
            </p>
            <p className="leading-relaxed mt-2">
              Esta naturaleza sintética forma parte esencial de la propuesta de valor del servicio. El usuario declara conocerla y aceptarla antes de completar su suscripción, no pudiendo alegar error, desconocimiento o falta de información al respecto, ni reclamar por el hecho de que el contenido haya sido generado mediante inteligencia artificial.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">4. Agente de Inteligencia Artificial en las Conversaciones</h2>
            <p className="leading-relaxed">
              El usuario reconoce y acepta que las conversaciones, mensajes y chats mantenidos a través de Telegram —incluidos los chats personalizados del Plan Anual— pueden ser gestionados, asistidos o respondidos, total o parcialmente, por un <strong className="text-white">agente conversacional de inteligencia artificial</strong>, y no necesariamente por una persona física en tiempo real.
            </p>
            <p className="leading-relaxed mt-2">
              Dicho agente de IA está diseñado para mantener la coherencia del personaje «Rosa XOXO» y generar contenido conversacional de carácter adulto por texto escrito, con fines <strong className="text-white">exclusivamente recreativos y de entretenimiento para adultos</strong>. Las respuestas se generan de forma automatizada, pueden no ser exactas o coherentes y no constituyen asesoramiento profesional, psicológico, médico ni de ningún otro tipo.
            </p>
            <p className="leading-relaxed mt-2">
              En cumplimiento del principio de transparencia establecido en el artículo 50 del Reglamento (UE) 2024/1689 (Reglamento de Inteligencia Artificial), el titular informa de forma clara y previa de que el usuario interactúa con un sistema de inteligencia artificial. Al suscribirte, aceptas expresamente interactuar con dicho sistema.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">5. Planes, Precios y Renovación</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong className="text-white">Plan Mensual (3,50 €/mes):</strong> acceso al canal privado. Renovación automática cada 30 días.</li>
              <li><strong className="text-white">Plan Anual (30 €/año):</strong> incluye lo anterior más chats personalizados escritos con cita previa (máx. 2/mes). Renovación automática cada 365 días.</li>
              <li>El cargo se realiza en el momento de la suscripción.</li>
              <li>El acceso queda condicionado al mantenimiento de la suscripción activa.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">6. Chats Personalizados (Plan Anual)</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Exclusivamente por chat escrito en Telegram.</li>
              <li>Pueden ser generados o asistidos por el agente de inteligencia artificial descrito en la cláusula 4.</li>
              <li>Requieren solicitud previa con al menos 24 h de antelación.</li>
              <li>Máximo 2 citas al mes. No acumulables ni transferibles.</li>
              <li>El titular puede finalizar la sesión ante conductas irrespetuosas.</li>
              <li>No incluyen llamadas, videollamadas, audios ni contenido ilegal.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">7. Límites del Servicio</h2>
            <p className="leading-relaxed mb-2">El servicio Rosa XOXO <strong className="text-white">no incluye</strong>:</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Llamadas de voz.</li>
              <li>Videollamadas o streaming en directo.</li>
              <li>Mensajes de audio.</li>
              <li>Encuentros presenciales.</li>
              <li>Contacto físico ni actividades fuera del ámbito digital.</li>
              <li>Contenido ilegal o que implique menores.</li>
            </ul>
            <p className="leading-relaxed mt-2">Cualquier solicitud fuera de estos límites será rechazada y podrá conllevar la cancelación inmediata sin reembolso.</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">8. Cancelación y No Reembolso</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Puedes cancelar en cualquier momento desde el portal de Stripe.</li>
              <li>La suscripción permanece activa hasta el fin del período ya abonado.</li>
              <li>No se realizan reembolsos una vez iniciado el acceso al servicio, conforme al art. 103.m LGDCU.</li>
              <li>Se valorarán excepciones cuando el servicio no haya podido prestarse por causas imputables al titular.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">9. Prohibiciones del Usuario</h2>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>Reproducir, distribuir o compartir cualquier contenido del servicio sin consentimiento escrito del titular.</li>
              <li>Capturar o grabar conversaciones privadas para su difusión.</li>
              <li>Acosar, amenazar o chantajear al titular.</li>
              <li>Compartir el acceso con terceros.</li>
              <li>Utilizar el servicio con menores o en su presencia.</li>
            </ul>
            <p className="leading-relaxed mt-2">El incumplimiento podrá conllevar responsabilidad civil y penal, además de suspensión inmediata.</p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">10. Propiedad Intelectual</h2>
            <p className="leading-relaxed">
              Todo el contenido de Rosa XOXO —incluido el contenido sintético generado mediante inteligencia artificial— es propiedad exclusiva del titular o cuenta con las licencias correspondientes. El usuario no adquiere ningún derecho de propiedad intelectual sobre el contenido, limitándose su uso al disfrute personal, privado e intransferible durante la vigencia de la suscripción.
            </p>
            <p className="leading-relaxed mt-2">
              Los chats personalizados y las conversaciones con el agente de IA son estrictamente privados y confidenciales para ambas partes.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">11. Protección de Datos (RGPD y LOPDGDD)</h2>
            <p className="leading-relaxed mb-2">
              <strong className="text-white">Todos los datos recogidos</strong> a través del servicio tienen la consideración de datos de carácter personal y son tratados con plena sujeción y compromiso al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong className="text-white">Responsable:</strong> Daniel Santiago Gómez — rosa.only.1989@gmail.com</li>
              <li><strong className="text-white">Datos tratados:</strong> email, datos de facturación facilitados a Stripe y el contenido de las conversaciones mantenidas en Telegram.</li>
              <li><strong className="text-white">Finalidad:</strong> gestión de la suscripción, prestación y mejora del servicio y comunicaciones relacionadas.</li>
              <li><strong className="text-white">Base jurídica:</strong> la ejecución del contrato de suscripción (art. 6.1.b RGPD) y tu consentimiento explícito (arts. 6.1.a y 9.2.a RGPD) para el tratamiento de datos relativos a la vida sexual, considerados categoría especial.</li>
              <li><strong className="text-white">Conversaciones con IA:</strong> los mensajes intercambiados con el agente de inteligencia artificial constituyen datos personales y pueden ser procesados y conservados de forma confidencial para prestar y mejorar el servicio.</li>
              <li><strong className="text-white">Encargados:</strong> Stripe, Inc. (PCI-DSS) y Telegram Messenger. Ningún dato de tarjeta es almacenado por Rosa XOXO.</li>
              <li><strong className="text-white">Conservación:</strong> durante la vigencia de la suscripción y los plazos legales aplicables; posteriormente se suprimen o bloquean.</li>
              <li><strong className="text-white">Medidas de seguridad:</strong> se aplican medidas técnicas y organizativas apropiadas al riesgo del tratamiento.</li>
              <li><strong className="text-white">Transferencias internacionales:</strong> las realizadas por Stripe y Telegram cuentan con las garantías adecuadas previstas en el RGPD.</li>
              <li><strong className="text-white">Cesión:</strong> no se ceden datos a terceros salvo obligación legal.</li>
              <li><strong className="text-white">Derechos:</strong> acceso, rectificación, supresión, oposición, limitación y portabilidad — escribe a <a href="mailto:rosa.only.1989@gmail.com" style={{ color: '#c88596' }}>rosa.only.1989@gmail.com</a>.</li>
              <li><strong className="text-white">Autoridad de control:</strong> <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" style={{ color: '#c88596' }}>AEPD — www.aepd.es</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-white text-base mb-2">12. Jurisdicción</h2>
            <p className="leading-relaxed">
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes del domicilio del consumidor.
            </p>
          </section>

          {/* Titular — al final, según indicación */}
          <section
            className="rounded-xl p-4 text-xs space-y-1"
            style={{ background: 'rgba(198,161,95,0.07)', border: '1px solid rgba(198,161,95,0.2)' }}
          >
            <p className="font-semibold text-white mb-1">Titular del servicio</p>
            <p>Daniel Santiago Gómez, en representación de la marca <strong className="text-white">Rosa XOXO</strong></p>
            <p><span style={{ color: '#8a7c72' }}>NIF:</span> 50477973B</p>
            <p><span style={{ color: '#8a7c72' }}>Domicilio fiscal:</span> C/ La Granja de San Ildefonso 38, 5.ºA, 28051, Madrid, España</p>
            <p><span style={{ color: '#8a7c72' }}>Contacto:</span> <a href="mailto:rosa.only.1989@gmail.com" style={{ color: '#c88596' }}>rosa.only.1989@gmail.com</a></p>
            <p className="pt-1" style={{ color: '#6b5d54' }}>Última actualización: julio de 2026.</p>
          </section>

          <div className="pt-2">
            <button className="btn-primary" onClick={() => navigate('/')}>
              ← Volver y suscribirme
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
