import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | SOLINSA',
  description:
    'Aviso de privacidad de SOLINSA S.A. de C.V. Conoce cómo protegemos y tratamos tus datos personales.',
}

export default function AvisoDePrivacidadPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <header className="bg-primary-dark text-white pt-20 pb-20 px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <span className="eyebrow on-dark">Legal</span>
            <h1 className="h1 !text-white mt-5">Aviso de Privacidad</h1>
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
                1. Responsable del tratamiento
              </h2>
              <p>
                SOLINSA S.A. de C.V., con domicilio en Monterrey, Nuevo León, México,
                es responsable del tratamiento de sus datos personales, conforme a lo
                dispuesto por la Ley Federal de Protección de Datos Personales en
                Posesión de los Particulares (LFPDPPP) y su Reglamento.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                2. Datos personales que recopilamos
              </h2>
              <p className="mb-2">Podemos recopilar los siguientes datos personales:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número telefónico</li>
                <li>Nombre de la empresa o institución</li>
                <li>Puesto o cargo</li>
                <li>Datos de facturación (RFC, dirección fiscal)</li>
                <li>Información técnica relacionada con equipos y servicios solicitados</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                3. Finalidades del tratamiento
              </h2>
              <p className="mb-2">Sus datos personales serán utilizados para:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Atender solicitudes de cotización e información sobre productos y servicios</li>
                <li>Brindar soporte técnico y seguimiento a servicios contratados</li>
                <li>Enviar comunicaciones relevantes sobre productos, servicios y novedades</li>
                <li>Elaborar contratos, facturación y documentación fiscal</li>
                <li>Dar cumplimiento a obligaciones legales y regulatorias</li>
                <li>Mejorar nuestros productos, servicios y atención al cliente</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                4. Transferencia de datos
              </h2>
              <p>
                SOLINSA no vende, renta ni comparte sus datos personales con terceros
                para fines comerciales. Podemos transferir sus datos únicamente en los
                siguientes supuestos:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>A proveedores de servicios que colaboran en la entrega de nuestros servicios (transporte, mantenimiento)</li>
                <li>A fabricantes y distribuidores asociados para la instalación y garantía de equipos</li>
                <li>Cuando sea requerido por ley o autoridad competente</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                5. Derechos ARCO
              </h2>
              <p>
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO)
                al tratamiento de sus datos personales. Para ejercer estos derechos, puede
                enviar una solicitud a:
              </p>
              <div className="bg-paper rounded-xl p-5 mt-3 border border-outline">
                <p className="font-mono text-xs uppercase tracking-wider text-technical-blue mb-2">
                  Contacto de privacidad
                </p>
                <p>
                  <strong>Correo:</strong>{' '}
                  <a href="mailto:privacidad@solinsa.mx" className="text-technical-blue hover:underline">
                    privacidad@solinsa.mx
                  </a>
                </p>
                <p>
                  <strong>Teléfono:</strong> +52 81 2355 4766
                </p>
                <p>
                  <strong>Plazo de respuesta:</strong> 20 días hábiles conforme a la LFPDPPP
                </p>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                6. Medidas de seguridad
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas
                para proteger sus datos personales contra daño, pérdida, alteración,
                destrucción o uso, acceso o tratamiento no autorizado. Estas medidas
                incluyen acceso restringido a bases de datos, encriptación de
                comunicaciones y procedimientos internos de control.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                7. Cookies y tecnologías similares
              </h2>
              <p>
                Nuestro sitio web puede utilizar cookies y tecnologías similares para
                mejorar la experiencia de navegación, analizar el tráfico del sitio y
                personalizar contenido. Puede configurar su navegador para rechazar
                cookies, aunque esto podría afectar la funcionalidad del sitio.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                8. Cambios al aviso de privacidad
              </h2>
              <p>
                Nos reservamos el derecho de modificar este aviso de privacidad en
                cualquier momento. Cualquier cambio será publicado en esta página con
                la fecha de actualización correspondiente. Le recomendamos revisar
                periódicamente este documento.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-primary-dark mb-3">
                9. Consentimiento
              </h2>
              <p>
                Al proporcionar sus datos personales a través de nuestros formularios de
                contacto, cotización o comunicación directa, usted acepta los términos
                de este aviso de privacidad. Si no está de acuerdo con alguno de los
                términos aquí descritos, le pedimos que no proporcione sus datos personales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
