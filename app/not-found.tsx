import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada | Solinsa',
  description: 'La página que buscas no existe o ha sido movida. Regresa a la página principal.',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-surface">
      <div className="container mx-auto px-8 text-center">
        {/* 404 Heading */}
        <div className="mb-8">
          <h1 className="font-heading text-[12rem] font-extrabold leading-none text-on-surface opacity-10">
            404
          </h1>
          <h2 className="mb-4 font-heading text-4xl font-bold text-on-surface md:text-5xl">
            Página no encontrada
          </h2>
          <p className="text-lg text-on-surface-variant">
            La página que buscas no existe o ha sido movida a otra ubicación.
          </p>
        </div>

        {/* Illustration placeholder */}
        <div className="mx-auto mb-12 max-w-md">
          <div className="relative aspect-square rounded-3xl bg-surface-container p-8">
            <span className="material-symbols-outlined absolute inset-0 m-auto text-9xl text-secondary">
              error_outline
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-heading text-lg font-bold text-white transition-all hover:bg-primary-container"
          >
            <span className="material-symbols-outlined">home</span>
            Ir al Inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-on-surface-variant/30 px-8 py-4 font-heading text-lg font-bold text-on-surface-variant transition-all hover:border-secondary hover:text-secondary"
          >
            <span className="material-symbols-outlined">mail</span>
            Contactar Soporte
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-12">
          <p className="mb-4 text-sm font-semibold text-on-surface-variant">
            PÁGINAS POPULARES
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/soluciones"
              className="text-sm text-secondary hover:underline"
            >
              Soluciones
            </Link>
            <Link
              href="/servicios"
              className="text-sm text-secondary hover:underline"
            >
              Servicios
            </Link>
            <Link
              href="/industrias"
              className="text-sm text-secondary hover:underline"
            >
              Industrias
            </Link>
            <Link
              href="/blog"
              className="text-sm text-secondary hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
