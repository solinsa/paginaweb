import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto y Consultoría Experta',
  description:
    'Contacte a nuestro equipo de especialistas en cromatografía y espectrometría. Consultoría técnica personalizada para laboratorios de alta precisión.',
  keywords: [
    'contacto',
    'consultoría',
    'soporte técnico',
    'cromatografía',
    'HPLC',
    'GC',
    'Monterrey',
  ],
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
