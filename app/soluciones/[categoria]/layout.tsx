import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categoría',
  description:
    'Explora nuestros sistemas analíticos por categoría. Encuentra el equipo ideal para su laboratorio.',
};

export default function CategoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
