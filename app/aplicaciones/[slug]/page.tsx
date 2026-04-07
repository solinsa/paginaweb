import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { MethodBento } from "@/components/sections";
import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// Demo data matching Stitch Pesticidas detail page
// ---------------------------------------------------------------------------
const demoApplication = {
  badge: "Aplicación Analítica #772-B",
  title: (
    <>
      Determinación Multiresiduo de{" "}
      <span className="text-secondary">Pesticidas en Alimentos</span>
    </>
  ),
  description:
    "Optimización de flujos de trabajo cromatográficos para la detección de trazas de pesticidas organofosforados y piretroides según normativas internacionales.",
  methodDescription:
    "El método propuesto utiliza una extracción QuEChERS modificada seguida de una separación por Cromatografía de Gases (GC) con detección por espectrometría de masas en tándem (MS/MS). Este enfoque garantiza una selectividad superior en matrices complejas como frutas con alto contenido de lípidos o pigmentos.",
  methodStats: [
    { label: "Límite de Detección", value: "< 0.01 mg/kg" },
    { label: "Tiempo de Corrida", value: "18.5 min" },
  ],
  equipmentItems: [
    {
      title: "GC-MS/MS System",
      description: "Triple Cuadrupolo de alta sensibilidad.",
    },
    {
      title: "Autosampler Robotizado",
      description: "Inyección de espacio de cabeza y líquido.",
    },
  ],
  consumables: [
    { name: "Columna Capilar DB-5ms" },
    { name: "Kits de Extracción QuEChERS" },
    { name: "Viales de Vidrio Ámbar" },
  ],
  visualImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAlE89CYY7Za-pIQAThPE0tFOODCXiDg5GgbSm9xUDGKtVfNOhmacmYtOrp_7fySEXwwOBcs8xG7K0kP3ocKoN--m7G2sfbiXvATiqRZieP-__x70BVisI25RwYd9oUzkM4wDJD6V8Yu78WorqrzjTTnASpdro5Kjsf61_3zx4eEh8CvTboFcUCdGq6gft40h4j10_pyKQTwgKeOuU94D3vAQqxAd52yEq0xhgouF9U7eKnYECzKT1OiVPRPxS8VfDaw0vRYhTiyg",
  visualTitle: "Visualización de Picos",
  visualDescription:
    "Resolución cromatográfica superior incluso en co-eluciones complejas de isómeros.",
};

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Aplicación: ${slug}`,
    description: demoApplication.description,
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto flex max-w-[1440px] gap-0">
      {/* SideNavBar placeholder — static, no client interactivity needed here */}
      <aside className="hidden lg:flex h-screen w-64 sticky top-20 left-0 shrink-0 flex-col gap-4 rounded-xl bg-surface-container-low p-6 text-sm">
        <div className="mb-6">
          <p className="label mb-1 text-secondary">Filtros Técnicos</p>
          <p className="text-sm text-on-surface-variant">Precisión Clínica</p>
        </div>
        <nav className="flex flex-col gap-2">
          {[
            { icon: "factory", label: "Industria", active: true },
            { icon: "science", label: "Método Analítico", active: false },
            { icon: "biotech", label: "HPLC/GC", active: false },
            { icon: "query_stats", label: "Espectrometría", active: false },
            { icon: "verified", label: "Multimarca", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200 ${
                item.active
                  ? "bg-white font-semibold text-secondary shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-container-highest hover:pl-5"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="mt-auto w-full rounded-lg bg-secondary py-3 font-bold text-white transition-all hover:opacity-90">
          Aplicar Filtros
        </button>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 bg-surface px-8 py-12">
        {/* Hero Header */}
        <div className="mb-16 flex flex-col items-end gap-12 md:flex-row">
          <div className="flex-1">
            <Badge
              label={demoApplication.badge}
              variant="secondary-fixed"
              className="mb-6"
            />
            <h1 className="mb-6 font-heading text-5xl font-extrabold leading-none tracking-tighter text-primary">
              {demoApplication.title}
            </h1>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-on-surface-variant">
              {demoApplication.description}
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-primary to-primary-container py-4 px-8 font-bold text-white shadow-lg transition-all hover:opacity-90">
              <span className="material-symbols-outlined">download</span>
              Download Application Note
            </button>
          </div>
        </div>

        {/* Technical Bento Grid */}
        <MethodBento
          methodDescription={demoApplication.methodDescription}
          methodStats={demoApplication.methodStats}
          equipmentItems={demoApplication.equipmentItems}
          consumables={demoApplication.consumables}
          visualImage={demoApplication.visualImage}
          visualTitle={demoApplication.visualTitle}
          visualDescription={demoApplication.visualDescription}
        />

        {/* CTA Section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-8 rounded-3xl bg-secondary-fixed p-12 text-on-secondary-fixed md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 font-heading text-3xl font-black tracking-tight">
              ¿Requiere asesoría técnica especializada?
            </h2>
            <p className="text-lg opacity-80">
              Nuestros ingenieros expertos pueden ayudarle a implementar este
              método en su laboratorio o realizar el mantenimiento preventivo de
              sus sistemas de HPLC/GC.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contacto"
              className="rounded-lg bg-primary px-8 py-4 font-bold text-white shadow-md transition-all hover:opacity-90"
            >
              Agendar Consultoría
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
