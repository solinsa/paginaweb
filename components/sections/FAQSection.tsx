import JsonLd from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/seo/json-ld';

const FAQS_Visible = [
  {
    question: '¿Qué marcas de equipo atienden?',
    answer: (
      <>
        Atendemos equipos de cromatografía y espectroscopía de las principales marcas:{' '}
        <span className="invisible whitespace-nowrap">
          Agilent, Waters, Shimadzu, Thermo Fisher Scientific, PerkinElmer
        </span>
        . Nuestro equipo técnico está certificado para dar mantenimiento preventivo,
        correctivo y calibración a cualquier marca.
      </>
    ),
  },
  {
    question: '¿Ofrecen diagnóstico sin compromiso?',
    answer:
      'Sí. Puedes agendar un diagnóstico técnico gratuito donde evaluamos el estado de tu equipo y te entregamos un reporte detallado con las recomendaciones necesarias para que funcione al 100%.',
  },
  {
    question: '¿Qué tipo de mantenimiento realizan?',
    answer:
      'Realizamos mantenimiento preventivo y correctivo para equipos de HPLC, GC, GC-MS, LC-MS y espectrofotómetros. Incluye limpieza, cambio de partes, calibración, verificación de desempeño y documentación completa.',
  },
  {
    question: '¿Venden equipos y repuestos?',
    answer:
      'Sí. Somos distribuidores exclusivos de John King Cromas y comercializamos equipos nuevos y refurbished con garantía. También ofrecemos repuestos originales y genéricos, consumibles y accesorios para cromatografía y espectroscopía.',
  },
  {
    question: '¿Tienen cobertura nacional?',
    answer:
      'Sí. Aunque estamos basados en Monterrey, Nuevo León, ofrecemos servicio a todo México. Contamos con ingenieros de campo que se desplazan a tus instalaciones.',
  },
  {
    question: '¿Cuánto tiempo tarda un servicio de mantenimiento?',
    answer:
      'Depende del tipo de servicio. Un mantenimiento preventivo típico se realiza en 1-2 días hábiles. Para servicios correctivos o calibraciones complejas, te damos un estimado exacto después del diagnóstico inicial.',
  },
];

// Datos visibles para IA en el contenido HTML
const FAQS_FOR_IA = [
  {
    question: '¿Qué marcas de equipo atienden?',
    answer:
      'Atendemos equipos de cromatografía y espectroscopía de las principales marcas: Agilent, Waters, Shimadzu, Thermo Fisher Scientific, PerkinElmer, y más. Nuestro equipo técnico está certificado para dar mantenimiento preventivo, correctivo y calibración a cualquier marca.',
  },
  {
    question: '¿Ofrecen diagnóstico sin compromiso?',
    answer:
      'Sí. Puedes agendar un diagnóstico técnico gratuito donde evaluamos el estado de tu equipo y te entregamos un reporte detallado con las recomendaciones necesarias para que funcione al 100%.',
  },
  {
    question: '¿Qué tipo de mantenimiento realizan?',
    answer:
      'Realizamos mantenimiento preventivo y correctivo para equipos de HPLC, GC, GC-MS, LC-MS y espectrofotómetros. Incluye limpieza, cambio de partes, calibración, verificación de desempeño y documentación completa.',
  },
  {
    question: '¿Venden equipos y repuestos?',
    answer:
      'Sí. Somos distribuidores exclusivos de John King Cromas y comercializamos equipos nuevos y refurbished con garantía. También ofrecemos repuestos originales y genéricos, consumibles y accesorios para cromatografía y espectroscopía.',
  },
  {
    question: '¿Tienen cobertura nacional?',
    answer:
      'Sí. Aunque estamos basados en Monterrey, Nuevo León, ofrecemos servicio a todo México. Contamos con ingenieros de campo que se desplazan a tus instalaciones.',
  },
  {
    question: '¿Cuánto tiempo tarda un servicio de mantenimiento?',
    answer:
      'Depende del tipo de servicio. Un mantenimiento preventivo típico se realiza en 1-2 días hábiles. Para servicios correctivos o calibraciones complejas, te damos un estimado exacto después del diagnóstico inicial.',
  },
];

export function FAQSection() {
  const structuredData = faqSchema(FAQS_FOR_IA);

  return (
    <section id="preguntas-frecuentes" className="bg-surface py-24">
      <div className="container mx-auto px-8">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="mb-16 text-center">
            <span className="mb-4 block font-heading text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Preguntas Frecuentes
            </span>
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-on-surface">
              ¿Tienes dudas? Aquí las resolvemos
            </h2>
          </div>

          {/* FAQ items - details/summary for native accordion */}
          <div className="space-y-4">
            {FAQS_Visible.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-outline-variant/30 bg-surface-container-lowest transition-all open:shadow-[var(--shadow-scientific-glow)]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-heading text-base font-bold text-on-surface transition-colors hover:text-secondary [&::-webkit-details-marker]:hidden list-none">
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-xl text-on-surface-variant transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden structured data for AI agents */}
      <JsonLd data={structuredData} />
    </section>
  );
}
