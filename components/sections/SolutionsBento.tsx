import React from 'react';
import Link from 'next/link';

export function SolutionsBento() {
  return (
    <div className="grid grid-cols-12 gap-6 mb-20">
      {/* HPLC Section - col-span-8 */}
      <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-10 rounded-[2rem] flex flex-col justify-between min-h-[400px]">
        <div>
          <div className="flex justify-between items-start mb-8">
            <h2 className="font-heading text-4xl font-bold text-primary tracking-tight">
              Cromatografía de Líquidos (HPLC/UHPLC)
            </h2>
            <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Técnica Principal
            </span>
          </div>
          <p className="text-on-surface-variant max-w-xl mb-8 leading-relaxed">
            Configuraciones modulares para análisis farmacéutico, alimentario y
            ambiental. Sistemas Isocráticos, Cuaternarios y Binarios optimizados
            para flujos de trabajo de alto volumen.
          </p>
          <ul className="grid grid-cols-2 gap-4 mb-8">
            {[
              'Estabilidad de línea base garantizada',
              'Compatibilidad con Agilent, Waters y Shimadzu',
              'Cumplimiento 21 CFR Part 11',
              'Automatización mediante Robótica',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
          <Link
            href="/soluciones/hplc"
            className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Ver Especificaciones Técnicas
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
          <span className="text-[10px] uppercase font-bold text-outline tracking-widest">
            Relacionado: Farma / Alimentos
          </span>
        </div>
      </div>

      {/* GC Section - col-span-4 */}
      <div className="col-span-12 lg:col-span-4 bg-primary text-white p-10 rounded-[2rem] flex flex-col">
        <span className="material-symbols-outlined text-secondary-container text-4xl mb-6">
          gas_meter
        </span>
        <h2 className="font-heading text-3xl font-bold mb-4 leading-tight">
          Cromatografía de Gases (GC)
        </h2>
        <p className="text-blue-100/70 text-sm mb-8 leading-relaxed">
          Control de temperatura de alta precisión y selectividad para el
          análisis de volátiles y semivolátiles.
        </p>
        <div className="space-y-4 mt-auto">
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-[10px] uppercase text-secondary-container font-bold mb-1">
              Detectores
            </p>
            <p className="text-xs">FID, TCD, ECD, FPD, NPD</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <p className="text-[10px] uppercase text-secondary-container font-bold mb-1">
              Inyectores
            </p>
            <p className="text-xs">Split/Splitless, On-column, PTV</p>
          </div>
        </div>
        <button className="mt-8 w-full bg-secondary-container text-on-secondary-container py-3 rounded-lg font-bold">
          Configurar GC
        </button>
      </div>

      {/* Sample Prep Section - col-span-6 */}
      <div className="col-span-12 lg:col-span-6 bg-surface-container-high p-8 rounded-[2rem] flex gap-8 items-center">
        <div className="flex-1">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">
            Preparación de Muestra
          </h3>
          <p className="text-sm text-on-surface-variant mb-6">
            Reduzca la variabilidad analítica con sistemas automatizados de
            extracción y purificación.
          </p>
          <div className="flex flex-wrap gap-2">
            {['SPE', 'QuEChERS', 'Filtración jeringa'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden shadow-inner">
          <img
            alt="Laboratorio"
            className="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl7SfOvMB7J_a7j7kWi7prv2FQezbGUDNpNyHPNzsB8SKpJQ6ET0r0tX8RijvAbs9f0ntYZV32XiaJDdQH80VeKDWHDiOkpUQRzJoeugd7VizU23lftWr65bQZU8OQ6BdwCedEZ3fOo4QXvftkLzZLwtxNxzOWmCc1QY8j1K9WndbPZQyJvQj4V9eXK3hfPD-w5x6tRg7Kr747v-zYbFd6CfD-YUVANd8yXiOqR_rfwIg9EK0nyQvgQYcLHaHYxZR5zI3BsoJ6pQ"
          />
        </div>
      </div>

      {/* Consumables Section - col-span-6 */}
      <div className="col-span-12 lg:col-span-6 border-2 border-surface-container-highest p-8 rounded-[2rem] flex flex-col justify-center">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center rounded-full">
            <span
              className="material-symbols-outlined text-secondary text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              science
            </span>
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              Consumibles y Refacciones
            </h3>
            <p className="text-sm text-on-surface-variant">
              Columnas de fase reversa, viales certificados y lámparas de
              deuterio para todas las marcas.
            </p>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <button className="text-sm font-bold border-b-2 border-primary pb-1">
            Ver Columnas HPLC
          </button>
          <button className="text-sm font-bold border-b-2 border-primary pb-1">
            Kits de Mantenimiento
          </button>
        </div>
      </div>
    </div>
  );
}
