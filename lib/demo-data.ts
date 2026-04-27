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

export interface Stat {
  value: string;
  label: string;
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
    title: 'Farmacéutica',
    slug: 'farmaceutica',
    icon: 'medication',
    description: 'Industria farmacéutica',
  },
  {
    _id: 'ind-3',
    title: 'Petroquímica',
    slug: 'petroquimica',
    icon: 'oil_barrel',
    description: 'Petroquímica y refinación',
  },
  {
    _id: 'ind-4',
    title: 'Ambiental',
    slug: 'ambiental',
    icon: 'eco',
    description: 'Monitoreo ambiental',
  },
];

// ---- Services (bento grid) ----

export const demoServices: Service[] = [
  {
    icon: 'build_circle',
    title: 'Mantenimiento Preventivo y Correctivo',
    description:
      'Mantenimiento para equipos de cromatografía de cualquier marca: Agilent, Waters, Shimadzu, Thermo, PerkinElmer.',
    variant: 'light',
    badges: ['Agilent', 'Waters', 'Shimadzu', 'Thermo', 'PerkinElmer'],
    colSpan: 8,
  },
  {
    icon: 'tune',
    title: 'Diagnóstico y Calibración',
    description:
      'Diagnóstico profundo y calibración de equipos.',
    variant: 'dark',
    cta: { label: 'Agendar Diagnóstico', href: '/contacto' },
    colSpan: 4,
  },
  {
    icon: 'psychology',
    title: 'Consultoría Analítica',
    description:
      'Desarrollo de métodos, validación, optimización de procesos.',
    variant: 'surface',
    colSpan: 4,
  },
  {
    icon: 'inventory_2',
    title: 'Repuestos y Consumibles',
    description:
      'Refacciones originales y genéricas para equipos de cromatografía y espectroscopía.',
    variant: 'image',
    colSpan: 8,
  },
];

// ---- Stats ----

export const demoStats: Stat[] = [
  { value: '14+', label: 'Años de Experiencia' },
  { value: '500+', label: 'Equipos Serviceados' },
  { value: '8+', label: 'Marcas Atendidas' },
  { value: '35+', label: 'Industrias Servidas' },
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
      '/images/blog/hplc-calibracion.jpg',
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
      '/images/blog/cofepris-regulaciones.jpg',
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
      '/images/blog/espectrometria-masas.jpg',
    author: 'Equipo Solinsa',
    publishedAt: '2024-10-10',
  },
];

// ---- About section ----

export const demoAbout = {
  image:
    '/images/heroes/about-solinsa.jpg',
  overline: 'Tu Aliado Estratégico',
  title: 'La experiencia y el respaldo que tu laboratorio necesita.',
  description:
    'Solinsa es una empresa comercializadora con más de 14 años de experiencia en cromatografía y espectroscopía. Nuestra ventaja competitiva: atendemos cualquier marca de equipo. No estás atado a un solo proveedor — nosotros te damos el mantenimiento, los repuestos y la consultoría que necesitas, sin importar qué equipo tengas.',
  checkItems: [
    'Soporte técnico multimarca: Agilent, Waters, Shimadzu, Thermo, PerkinElmer y más.',
    'Venta de equipos nuevos y refurbished con garantía.',
    'Cobertura nacional desde Monterrey, NL.',
  ],
  cta: { label: 'Conoce Nuestros Servicios', href: '/servicios' },
  yearsBadge: { value: '14+', label: 'Años de Experiencia' },
};

// ---- CTA Banner ----

export const demoCTA = {
  title: '¿Tu equipo necesita servicio?',
  description:
    'Agenda un diagnóstico técnico sin compromiso. Te decimos exactamente en qué estado está tu equipo y qué necesita para funcionar al 100%.',
  primaryButton: { label: 'Agendar Diagnóstico Gratuito', href: '/contacto' },
  secondaryButton: { label: 'Ver Soluciones', href: '/soluciones' },
};
