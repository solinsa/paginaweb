import Link from "next/link";

const WA_LINK = "https://wa.me/522201432743";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    title: "Mantenimiento preventivo",
    description: "Programas calendarizados que evitan paros",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 3 3 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z" />
      </svg>
    ),
    title: "Mantenimiento correctivo",
    description: "Diagnóstico y reparación de bombas, automuestreadores",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    title: "Instalación y calificación",
    description: "Puesta en marcha con protocolos IQ/OQ/PQ",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "Servicio de emergencia",
    description: "Atención prioritaria cuando un sistema crítico se detiene",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Capacitación",
    description: "Entrenamos a tu equipo en operación y troubleshooting",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 2h12M6 2v6l-3 9a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3l-3-9V2" />
        <path d="M9 14h6" />
      </svg>
    ),
    title: "Consumibles y refacciones",
    description: "Columnas, lámparas, jeringas y partes originales",
  },
];

const stats = [
  { value: "< 24 h", label: "Respuesta de soporte" },
  { value: "Multimarca", label: "Cualquier fabricante" },
  { value: "100%", label: "Cobertura nacional" },
];

export default function ServiceBand() {
  return (
    <section className="bg-primary-dark text-white py-24 px-margin-desktop relative overflow-hidden">
      {/* Radial gradient glow at top-right corner */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(8,113,169,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <span className="eyebrow on-dark">Servicio y mantenimiento</span>

            <h2 className="font-headline text-headline-md mt-6 leading-tight">
              El diferenciador no es el equipo. Es quién lo mantiene corriendo.
            </h2>

            <p className="lead !text-white/70 mt-5">
              En Solinsa no entregamos un equipo y desaparecemos. Nuestro
              departamento de servicio está conformado por ingenieros con
              entrenamiento directo de fábrica que conocen cada sistema que
              instalamos —y muchos que no instalamos nosotros.
            </p>

            {/* Blockquote */}
            <div className="border-l-4 border-energetic-yellow bg-white/5 rounded-r-xl p-6 mt-8">
              <p className="text-white/90 text-lg italic leading-relaxed">
                &ldquo;Comprar el equipo es apenas el comienzo. Nosotros lo
                mantenemos produciendo resultados confiables.&rdquo;
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 flex-1 min-w-[120px]"
                >
                  <div className="font-bold text-lg text-white">
                    {stat.value}
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-[#1E3050] p-5 flex flex-col gap-2"
                  >
                    <div className="bg-technical-blue/20 text-blue-300 w-9 h-9 flex items-center justify-center rounded-[9px]">
                      {service.icon}
                    </div>
                    <b>{service.title}</b>
                    <p className="text-sm text-blue-200/70">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA banner */}
              <div className="col-span-2 bg-technical-blue flex justify-between items-center p-5">
                <div>
                  <b>¿Un equipo detenido o con fallas?</b>
                  <br />
                  <small>Cuéntanos la marca y el síntoma</small>
                </div>
                <Link
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-yellow"
                >
                  Solicitar soporte
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
