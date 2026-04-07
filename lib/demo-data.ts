// ---------------------------------------------------------------------------
// Demo / placeholder data for the Solinsa homepage
// These match the Stitch design content and will be replaced by Sanity CMS data
// ---------------------------------------------------------------------------

export interface Industry {
  _id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  variant: 'light' | 'dark' | 'surface' | 'image';
  badges?: string[];
  cta?: { label: string; href: string };
  colSpan: number;
}

// ---- Industries (hero quick-access buttons) ----

export const demoIndustries: Industry[] = [
  {
    _id: 'ind-1',
    title: 'Alimentos',
    slug: 'alimentos',
    icon: 'restaurant',
    description: 'Análisis de alimentos y bebidas',
  },
  {
    _id: 'ind-2',
    title: 'Farma',
    slug: 'farmaceutica',
    icon: 'medication',
    description: 'Industria farmacéutica',
  },
  {
    _id: 'ind-3',
    title: 'Petro',
    slug: 'petroquimica',
    icon: 'oil_barrel',
    description: 'Petroquímica y refinación',
  },
  {
    _id: 'ind-4',
    title: 'Ambiente',
    slug: 'ambiental',
    icon: 'eco',
    description: 'Monitoreo ambiental',
  },
];

// ---- Services (bento grid) ----

export const demoServices: Service[] = [
  {
    icon: 'build_circle',
    title: 'Soporte Multimarca Especializado',
    description:
      'Capacidad técnica certificada para el mantenimiento y calibración de equipos HPLC y GC de las principales marcas del mercado global.',
    variant: 'light',
    badges: ['Agilent', 'Waters', 'Shimadzu'],
    colSpan: 8,
  },
  {
    icon: 'psychology',
    title: 'Consultoría Experta',
    description:
      'Optimizamos sus flujos de trabajo analíticos y validamos métodos complejos bajo normativas nacionales e internacionales.',
    variant: 'dark',
    cta: { label: 'Solicitar Diagnóstico', href: '/contacto' },
    colSpan: 4,
  },
  {
    icon: 'biotech',
    title: 'Método Analítico',
    description:
      'Desarrollo a medida de protocolos para asegurar la pureza y trazabilidad de sus muestras.',
    variant: 'surface',
    colSpan: 4,
  },
  {
    icon: 'verified_user',
    title: 'Instalación & Calificación',
    description:
      'Protocolos IQ/OQ/PQ para cumplimiento normativo estricto en industrias reguladas.',
    variant: 'image',
    colSpan: 8,
  },
];

// ---- Blog Posts ----

export const demoPosts: BlogPost[] = [
  {
    _id: 'post-1',
    title: '5 Señales de que su HPLC requiere calibración urgente',
    slug: 'senales-hplc-calibracion-urgente',
    category: 'Mantenimiento',
    excerpt:
      'Optimizar el tiempo de respuesta es vital para evitar el paro total de su línea de producción analítica...',
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoiyQikfJd8HqpHms0ZhxS3eZY1hngOEU4ObEu5-TWm6TiKJpxpYHBYYCcQMaoothAWlqdN5h1VpofAvkiXqhdY8wZ6s_RhvUxtWUyGWKnus9R8dHIYXE41-iIpFDotT5ratrA3dAjHqk4vjq1_Kc8MLOyhTNoM5mYyRCIiy0U1eri96mTk71OKfV8SXK8hD7-iBhwV1uPfgEsfbIppEF7Mmny4B33uTsj-jQJNW0FAlV3L2AUNJ_e2Y7COTqiHOH_RmPUy75jHQ',
    author: 'Equipo Solinsa',
    publishedAt: '2024-11-15',
  },
  {
    _id: 'post-2',
    title: 'Nuevas regulaciones COFEPRIS para laboratorios 2024',
    slug: 'regulaciones-cofepris-laboratorios-2024',
    category: 'Normatividad',
    excerpt:
      'Un resumen ejecutivo sobre los cambios clave en los protocolos de validación para la industria farmacéutica...',
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOuyDO49QbYtDkByoIn1FP59r1bsLPx1R7yJulywRwiaAh5Ae4wj-bSQzsX2hTKVk77tvBGH-Zar0DGcqqIQXfhtib_z3uNdR8qgR7_zw0BG5EZNMGu4jdvILLOvyTEXuKfgo0iax7J_kJ45VqI4zczoa9UIaFanWFDox5CCaYU8B8vF7cY-mVoT1HdHb-DJTm_UF7XVqbTx2yxajOiF6SbjcYVUbifoOP62clJewYgQvxRKwCQ-jHKOVLgZi9-nnDNDzl19lALQ',
    author: 'Equipo Solinsa',
    publishedAt: '2024-10-28',
  },
  {
    _id: 'post-3',
    title: 'Migración a sistemas de espectrometría de masas',
    slug: 'migracion-espectrometria-masas',
    category: 'Consultoría',
    excerpt:
      'Cómo elegir la tecnología adecuada sin comprometer el presupuesto operativo ni la precisión de los resultados...',
    featuredImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYWBhDr4xehw84jFwdK0IOdqbCx1PqQxpld8OoIMyxdDgfgcQmkTn5ylRylbG58ELQ5QmrmmG7c5VsknjB1KQK-AOYxI-PwYAeK-ugE-ngvPKjYVbNCkD5bRmJeYRR_C39FplHEgnt8cJW1DA6TWpq2j3mJdTyKE8tkuBDLFdxzLDsmfwld-6mHuEnP_lcimEWEGl_EMD5RdvTJ6PyWKVMbaYwPx2CddSwA5ET6935cx0_ox8NEfVol9hrmLUPUP8b0-utrHddVA',
    author: 'Equipo Solinsa',
    publishedAt: '2024-10-10',
  },
];

// ---- About section ----

export const demoAbout = {
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD--xGLosXStQcArZPfktSmWW_Wy1yZR2HuoImXPTHkG4EjjMgkfJrHuhQls4MbcOLFQRyY3zhs7zNLsTvQvLG9fP1RcCmtVgh_JWnMJbeQO7FlAoLNGfdjFrszEWXxbSThEjg2IoUSrIcouGJD9vAzzM3iiKb7kopudmMmXWEGGlmM4PVBVdp5Nd6Oy-oIN7UZwE047cB1DreDR-C_iZGJ1v8w4EZwYD1WFpq6JIZ1Qf2p7arycCZckx64lw3bIyuMxQwufxtIYA',
  overline: 'Nuestra Historia',
  title: 'Liderazgo desde el corazón industrial de México.',
  description:
    'Fundada en 2010 en Monterrey, Nuevo León, Solinsa nació con el objetivo de elevar el estándar del soporte técnico analítico en el país. Entendemos que en la ciencia no hay margen de error.',
  checkItems: [
    'Basados en Monterrey, Cobertura Nacional.',
    'Especialistas en HPLC y Espectrometría.',
    'Consultores con Certificación Internacional.',
  ],
  cta: { label: 'Nuestra Metodología', href: '/nosotros' },
  yearsBadge: { value: '14+', label: 'Años de Expertise' },
};

// ---- CTA Banner ----

export const demoCTA = {
  title: '¿Listo para elevar la precisión de su laboratorio?',
  description:
    'Agende una consultoría técnica con nuestros expertos hoy mismo. Sin catálogos genéricos, solo soluciones reales.',
  primaryButton: { label: 'Hablar con un Consultor', href: '/contacto' },
  secondaryButton: { label: 'Ver Aplicaciones', href: '/aplicaciones' },
};
