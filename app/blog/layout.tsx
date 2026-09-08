import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Blog | SOLINSA',
  description: 'Artículos técnicos sobre cromatografía, espectrometría de masas, validación de métodos y productividad en laboratorio. Recursos para la industria analítica en México.',
  openGraph: {
    title: 'Blog | SOLINSA — Soluciones en Instrumentación',
    description: 'Artículos técnicos sobre cromatografía, espectrometría y productividad en laboratorio.',
    url: 'https://www.solinsa.com.mx/blog',
    siteName: 'Solinsa',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function BlogLayout({children}: {children: React.ReactNode}) {
  return children
}
