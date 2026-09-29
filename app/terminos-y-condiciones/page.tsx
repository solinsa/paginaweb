import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | SOLINSA',
  description:
    'Términos y condiciones de uso del sitio web y servicios de SOLINSA S.A. de C.V.',
}

export default function TerminosYCondicionesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="bg-primary-dark text-white pt-20 pb-20 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <span className="eyebrow on-dark">Legal</span>
            <h1 className="h1 !text-white mt-5">Términos y Condiciones</h1>
            <p className="lead !text-white/70 mt-6">
              Última actualización: junio 2025
            </p>
          </div>
        </div>
      </header>

      {/* ── CONTENIDO ─────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-3xl mx-auto px-margin-desktop">
          <div className="bg-white border border-outline rounded-2xl p-8 md:p-12 space-y-8 text-sm text-muted-blue-grey leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                1. Generalidades
              </h2>
              <p>
                Los presentes términos y condiciones regulan el uso del sitio web
                www.solinsa.mx y los servicios ofrecidos por SOLINSA S.A. de C.V.,
                con domicilio en Monterrey, Nuevo León, México. Al acceder y utilizar
                este sitio, usted acepta quedar vinculado por estos términos.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                2. Servicios
              </h2>
              <p className="mb-2">
                SOLINSA ofrece los siguientes servicios, sujetos a disponibilidad y
                condiciones específicas según cada proyecto:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Venta de equipos de cromatografía e instrumentación analítica (nuevos y reacondicionados)</li>
                <li>Servicio técnico preventivo y correctivo</li>
                <li>Instalación, configuración y puesta en marcha de equipos</li>
                <li>Validación de métodos analíticos y protocolos IQ/OQ/PQ</li>
                <li>Capacitación técnica en sitio</li>
                <li>Venta de consumibles, refacciones y accesorios</li>
                <li>Diagnóstico y calibración de equipos</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                3. Cotizaciones y precios
              </h2>
              <p>
                Las cotizaciones emitidas por SOLINSA tienen una vigencia de 30 días
                naturales a partir de su fecha de emisión, salvo que se indique lo
                contrario. Los precios están expresados en pesos mexicanos (MXN) e
                incluyen IVA cuando así se especifique. Los precios pueden variar sin
                previo aviso debido a fluctuaciones en tipo de cambio o disponibilidad
                de inventario.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                4. Garantías
              </h2>
              <p className="mb-2">
                Los equipos nuevos cuentan con la garantía del fabricante aplicable en
                México. Los equipos reacondicionados cuentan con garantía propia de
                SOLINSA según las condiciones especificadas en cada cotización.
              </p>
              <p>
                La garantía no cubre daños causados por uso indebido, negligencia,
                modificaciones no autorizadas, condiciones ambientales inadecuadas o
                desgaste normal de consumibles y partes sujetas a deterioro.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                5. Servicio técnico
              </h2>
              <p>
                Los servicios técnicos se proporcionan previa solicitud y están sujetos
                a disponibilidad del equipo técnico. Los tiempos de respuesta varían
                según la ubicación geográfica y la naturaleza del servicio requerido.
                Las visitas de servicio técnico en sitio se facturan conforme a las
                tarifas vigentes al momento del servicio, incluyendo viáticos cuando
                aplique.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                6. Propiedad intelectual
              </h2>
              <p>
                Todo el contenido de este sitio web —incluyendo textos, imágenes,
                logotipos, diseños, marcas y cualquier otro material— es propiedad de
                SOLINSA S.A. de C.V. o de sus respectivos titulares, y está protegido
                por las leyes de propiedad intelectual aplicables. Queda prohibida su
                reproducción, distribución o uso sin autorización expresa por escrito.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                7. Uso del sitio web
              </h2>
              <p>
                El usuario se compromete a utilizar este sitio web de manera lícita y
                de conformidad con estos términos. Queda prohibido cualquier uso que
                pueda causar daño, deterioro o sobrecarga en los sistemas de SOLINSA,
                así como la transmisión de código malicioso o contenido ilegal.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                8. Limitación de responsabilidad
              </h2>
              <p>
                SOLINSA no se hace responsable por daños indirectos, incidentales o
                consecuenciales derivados del uso de este sitio web o de sus servicios.
                La información técnica publicada en el sitio es de carácter informativo
                y no constituye una obligación contractual hasta su confirmación por
                escrito en la documentación correspondiente.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                9. Legislación aplicable
              </h2>
              <p>
                Estos términos y condiciones se rigen por las leyes vigentes en los
                Estados Unidos Mexicanos. Cualquier controversia será sometida a los
                tribunales competentes de Monterrey, Nuevo León, México.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                10. Modificaciones
              </h2>
              <p>
                SOLINSA se reserva el derecho de modificar estos términos y condiciones
                en cualquier momento. Las modificaciones entrarán en vigor a partir de
                su publicación en este sitio web. El uso continuado del sitio después
                de cualquier modificación constituye la aceptación de los nuevos términos.
              </p>
            </div>

            {/* Contacto */}
            <div className="bg-paper rounded-xl p-5 border border-outline">
              <p className="font-mono text-xs uppercase tracking-wider text-technical-blue mb-2">
                Contacto
              </p>
              <p>
                Para cualquier duda sobre estos términos, contáctenos en:{' '}
                <a href="mailto:ventas@solinsa.mx" className="text-technical-blue hover:underline">
                  ventas@solinsa.mx
                </a>{' '}
                o al teléfono +52 220 143 2743.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
