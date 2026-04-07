import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluciones Analíticas',
  description:
    'Soluciones integrales en cromatografía y espectrometría. Sistemas HPLC, GC, preparación de muestra y consumibles para laboratorios de alta precisión.',
  keywords: [
    'HPLC',
    'UHPLC',
    'GC',
    'cromatografía',
    'espectrometría',
    'consumibles',
    'laboratorio',
    'análisis químico',
  ],
};

export default function SolucionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
