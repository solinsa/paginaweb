import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categorías de Equipos de Cromatografía',
  description:
    'Explora nuestro ecosistema analítico avanzado: HPLC, GC, espectrometría de masas, preparación de muestra y consumibles. Precisión técnica y autoridad científica en cada componente.',
  keywords: [
    'HPLC',
    'UHPLC',
    'cromatografía de líquidos',
    'cromatografía de gases',
    'GC',
    'espectrometría de masas',
    'preparación de muestra',
    'consumibles',
    'columnas cromatográficas',
    'instrumentación analítica',
  ],
};

export default function CategoriasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
