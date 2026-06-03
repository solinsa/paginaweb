import Link from 'next/link'
import type { Metadata } from 'next'
import ServicioHero from '@/components/sections/ServicioHero'
import ServicioCTA from '@/components/sections/ServicioCTA'

export const metadata: Metadata = {
  title: 'Mantenimiento Correctivo | SOLINSA',
  description: 'Diagnóstico y reparación de equipos de cromatografía GC, HPLC, UHPLC e IC. Bombas, detectores, automuestreadores y electrónicos. Multimarca.',
}

const WA = 'https://wa.me/5218123554766'

const commonIssues = [
  {
    icon: '⚠️',
    symptom: 'Presión alta / baja en bomba',
    causes: ['Sellos de bomba desgastados', 'Filtros obstruidos', 'Válvulas de check dañadas', 'Columna obstruida'],
    solution: 'Reemplazo de sellos, filtros y válvulas. Desobstrucción de línea.',
  },
  {
    icon: '📊',
    symptom: 'Picos deformados o ensanchados',
    causes: ['Columna degradada', 'Conexiones con volumen muerto', 'Injector valve desgastada', 'Temperatura inestable'],
    solution: 'Reemplazo de columna, ajuste de conexiones, cambio de rotor seal.',
  },
  {
    icon: '📉',
    symptom: 'Línea base inestable o ruidosa',
    causes: ['Detector contaminado', 'Lámpara de UV agotada', 'Degassing insuficiente', 'Vibración mecánica'],
    solution: 'Limpieza de celda, reemplazo de lámpara, servicio de degasser.',
  },
  {
    icon: '🔄',
    symptom: 'Automuestreador no inyecta o pierde precisión',
    causes: ['Aguja doblada o obstruida', 'Rotor seal desgastada', 'Motor de jeringa fallido', 'Software desactualizado'],
    solution: 'Reemplazo de aguja, rotor seal, recalibración volumétrica.',
  },
  {
    icon: '💧',
    symptom: 'Fuga de solvente',
    causes: ['Sellos de bomba agrietados', 'Conexiones loosened', 'Tubing dañado', 'Válvula de inyección'],
    solution: 'Reemplazo de sellos, conexiones y tubing afectado.',
  },
  {
    icon: '💻',
    symptom: 'Error de comunicación o software',
    causes: ['Tarjeta de interfaz dañada', 'Firmware corrupto', 'Cable de datos defectuoso', 'Configuración incorrecta'],
    solution: 'Diagnóstico electrónico, actualización de firmware, reemplazo de tarjeta.',
  },
]

const components = [
  { comp: 'Bombas', desc: 'Sellos, pistones, válvulas de check, filtros, motors', repairable: true },
  { comp: 'Detectores UV/DAD', desc: 'Lámparas, celdas de flujo, óptica, electrónica', repairable: true },
  { comp: 'Detectores FL/RI', desc: 'Lámparas, celdas, electrónica de medición', repairable: true },
  { comp: 'Automuestreadores', desc: 'Agujas, jeringas, rotor seals, motors, carruseles', repairable: true },
  { comp: 'Inyectores / válvulas', desc: 'Rotor seals, stator, actuadores', repairable: true },
  { comp: 'Hornos de columna', desc: 'Sensores, heaters, controladores', repairable: true },
  { comp: 'Electrónicos', desc: 'Tarjetas, fuentes de poder, displays, teclados', repairable: true },
  { comp: 'Software / firmware', desc: 'Actualización, diagnóstico remoto, configuración', repairable: true },
]

export default function CorrectivoPage() {
  return (
    <>
      <ServicioHero
        eyebrow="Correctivo"
        title="Diagnóstico y reparación cuando tu equipo falla."
        subtitle="Bombas · Detectores · Automuestreadores · Electrónica"
        description="Reparamos GC, HPLC, UHPLC e IC de cualquier marca. Diagnóstico preciso en sitio o remoto, refacciones originales y pruebas funcionales post-reparación."
        accent="dark"
        ctaLabel="Reportar una falla"
        ctaWhatsappText="Tengo un equipo con fallas, necesito mantenimiento correctivo"
      />

      {/* ── COMMON ISSUES ────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Síntomas comunes</span>
            <h2>¿Qué problema tienes con tu equipo?</h2>
            <p>Estos son los problemas más frecuentes. Si tu síntoma no está aquí, contáctanos — seguro lo conocemos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {commonIssues.map((issue) => (
              <article key={issue.symptom} className="bg-surface border border-outline rounded-2xl p-6 hover:border-energetic-yellow hover:shadow-lg transition-all">
                <span className="text-2xl">{issue.icon}</span>
                <h3 className="font-bold text-primary-dark mt-3 text-sm">{issue.symptom}</h3>

                <div className="mt-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-blue-grey">Causas probables</span>
                  <ul className="mt-1 space-y-1">
                    {issue.causes.map((c) => (
                      <li key={c} className="text-xs text-muted-blue-grey flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-energetic-yellow rounded-full shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 pt-3 border-t border-outline-variant">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-green">Solución</span>
                  <p className="text-xs text-primary-dark mt-1">{issue.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPAIRABLE COMPONENTS ────────────────────────── */}
      <section className="sec bg-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="sec-head center">
            <span className="eyebrow">Componentes</span>
            <h2>Reparamos todos los componentes del sistema.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {components.map((c) => (
              <div key={c.comp} className="bg-paper border border-outline rounded-xl p-5 hover:border-technical-blue transition">
                <div className="flex items-center justify-between">
                  <b className="text-sm text-primary-dark">{c.comp}</b>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.4" className="w-4 h-4"><path d="M5 12l4 4L19 6" /></svg>
                </div>
                <p className="text-xs text-muted-blue-grey mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="sec bg-paper">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="eyebrow">Proceso de reparación</span>
              <h2 style={{ fontSize: 'clamp(27px, 3vw, 40px)', fontWeight: 700 }} className="mt-4">
                Diagnóstico preciso. Reparación definitiva.
              </h2>
              <p className="text-muted-blue-grey text-lg mt-4 leading-relaxed">
                No parchamos. Identificamos la causa raíz y la reparamos con refacciones originales para que el problema no se repita.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { t: 'Reporte de falla', d: 'Nos describes el síntoma por WhatsApp o teléfono. Evaluamos si requiere visita en sitio.' },
                { t: 'Diagnóstico', d: 'Ingeniero identifica la causa raíz con pruebas funcionales y medición de componentes.' },
                { t: 'Cotización', d: 'Te presentamos alcance, refacciones necesarias y costo antes de proceder.' },
                { t: 'Reparación', d: 'Reemplazo de componentes con partes originales. Pruebas funcionales completas.' },
                { t: 'Entrega y reporte', d: 'Verificación de funcionamiento con tus métodos. Reporte con evidencia fotográfica.' },
              ].map((step, i) => (
                <div key={step.t} className="flex gap-4 p-4 bg-surface border border-outline rounded-xl">
                  <span className="text-lg font-bold text-technical-blue w-7 shrink-0">{i + 1}</span>
                  <div>
                    <b className="text-sm text-primary-dark">{step.t}</b>
                    <p className="text-xs text-muted-blue-grey mt-0.5">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicioCTA
        title="¿Un equipo con fallas?"
        description="Cuéntanos la marca, modelo y el síntoma. Te damos un diagnóstico inicial sin compromiso."
        ctaLabel="Reportar falla"
        ctaWhatsappText="Tengo un equipo con fallas, necesito mantenimiento correctivo"
      />
    </>
  )
}
