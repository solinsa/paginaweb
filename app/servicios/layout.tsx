import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios | Soporte Multimarca Especializado',
  description:
    'Soporte técnico especializado, calibración certificada y capacitación para equipos de laboratorio HPLC, GC y espectrometría. Desde Monterrey para todo el territorio nacional.',
  keywords: [
    'mantenimiento preventivo',
    'calibración certificada',
    'capacitación laboratorio',
    'soporte multimarca',
    'HPLC',
    'GC',
    'espectrometría',
    'IQ OQ PQ',
    'ISO 17025',
    'Monterrey',
  ],
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
