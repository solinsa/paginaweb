import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog y Recursos Técnicos',
  description:
    'Notas de aplicación, webinars y recursos técnicos sobre cromatografía HPLC, GC, espectrometría de masas y análisis químico de alta precisión.',
  keywords: [
    'notas de aplicación',
    'HPLC',
    'GC',
    'cromatografía',
    'espectrometría',
    'webinar',
    'recursos técnicos',
    'laboratorio',
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
