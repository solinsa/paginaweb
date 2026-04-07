import Link from 'next/link';
import type { Industry } from '@/lib/demo-data';

interface HeroHomeProps {
  industries?: Industry[];
}

export function HeroHome({ industries }: HeroHomeProps) {
  const items = industries ?? [];

  return (
    <section className="relative flex min-h-[870px] items-center overflow-hidden bg-surface">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          className="h-full w-full object-cover opacity-20 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI-jwyl2V19FKbCNWXkPoq5VUrjFYoe-PCoPAKVJvYBwNmXblCPF5wcyp0jBcHM9ketVks6IrQ5bMsFhO27HPXrOMPghLINcs9FE0WRT7qLYQ9o25HgXXgpAwqLCtdk1tBlGYKsXpcO03nb5N3lGlV3fJ-pb-q6ZWza-grEnx3r5Oex5o7F39jNjE3Z-P-thePXu_JRKZ05ziGPioiJmB8KBZATfcvL6_V2aISxhwLuHw1A9MqAEMMPsU0ajADYk4dgoFckCGg6Q"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-8 md:grid-cols-2">
        {/* Left column */}
        <div>
          <span className="mb-6 inline-block rounded-full bg-secondary-fixed px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-on-secondary-fixed">
            Excelencia Analítica
          </span>

          <h1 className="mb-8 font-heading text-5xl font-extrabold leading-[1.1] tracking-tighter text-primary md:text-7xl">
            ¿Qué necesitas <br />
            <span className="italic text-secondary">analizar?</span>
          </h1>

          <p className="mb-12 max-w-lg text-lg leading-relaxed text-on-surface-variant">
            Desde 2010 en Monterrey, transformamos datos complejos en decisiones
            críticas mediante consultoría técnica especializada en sistemas
            multimarca.
          </p>

          {/* Industry quick-access buttons */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {items.map((ind) => (
              <Link
                key={ind._id}
                href={`/aplicaciones?industria=${ind.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <span className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110">
                  {ind.icon}
                </span>
                <span className="font-heading text-xs font-bold uppercase tracking-wider">
                  {ind.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right column — hero image with glass card */}
        <div className="relative hidden md:block">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-container-highest shadow-2xl">
            <img
              alt="Profesional de laboratorio analizando resultados"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcmlJubZRXYVmuaaZRNBcMeZrIcXLBJ5X_jfzzQBBudYYSLzKL1SRfUJGbGU7GRIUVzSjYrmvBWQviUTaPpmCbnYblqIijkct_cmZIyn3isk_RgRRMbQSJhypLeBIPsiEvxn25GWCb8ZksjtULWyXyL7alpLihsyn2NfnOHYO928t3Ls7yPxC9mov912nD7a_utxlrz6uJ9Z96G4xeloQ5yosy0pMbx6VEs01If4BYEJ5cH4w1ahjsHq-Q2hYRnL7mGSVE9agr8Q"
            />

            {/* Glass overlay card */}
            <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/20 bg-white/80 p-6 backdrop-blur-[20px]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
                <div>
                  <div className="font-heading text-sm font-bold text-primary">
                    Soporte Multimarca
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant">
                    Precisión Garantizada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
