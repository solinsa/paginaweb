import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Demo / placeholder data for the Soluciones pages
// These match the Stitch design content and will be replaced by Sanity CMS data
// ---------------------------------------------------------------------------

export interface Product {
  _id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeVariant: 'secondary' | 'secondary-container' | 'on-surface-variant';
  icon: string;
  specs: { label: string; value: string }[];
  primaryAction: string;
  secondaryAction: string;
}

export interface ProductConfig {
  ref: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface CategoryData {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  products: Product[];
  ctaTitle: string;
  ctaDescription: string;
}

export interface ProductDetail {
  slug: string;
  badge: string;
  title: ReactNode;
  description: string;
  images: { src: string; alt: string }[];
  specs: { label: string; value: string; method: string }[];
  configs: ProductConfig[];
}

// ---- Soluciones Overview - Filter Items ----

export interface FilterGroup {
  id: string;
  label: string;
  icon: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  tags: string[];
  category: string;
  highlight: boolean;
}

export const solucionesFilters: FilterGroup[] = [
  { id: 'industria', label: 'Industria', icon: 'factory' },
  { id: 'metodo', label: 'Método Analítico', icon: 'science' },
  { id: 'hplc-gc', label: 'HPLC/GC', icon: 'biotech' },
  { id: 'espectrometria', label: 'Espectrometría', icon: 'query_stats' },
  { id: 'multimarca', label: 'Multimarca', icon: 'verified' },
];

export const solutionItems: SolutionItem[] = [
  {
    id: 'hplc-precision',
    title: 'Sistemas HPLC/UHPLC',
    description:
      'Plataformas analíticas para control de calidad, investigación y desarrollo de métodos.',
    icon: 'science',
    href: '/soluciones/hplc',
    tags: ['hplc-gc', 'metodo', 'multimarca'],
    category: 'hplc',
    highlight: true,
  },
  {
    id: 'gc-analysis',
    title: 'Cromatografía de Gases',
    description:
      'Soluciones para volátiles, semivolátiles y aplicaciones reguladas.',
    icon: 'gas_meter',
    href: '/soluciones/gc',
    tags: ['hplc-gc', 'metodo', 'multimarca'],
    category: 'gc',
    highlight: true,
  },
  {
    id: 'sample-prep',
    title: 'Preparación de Muestra',
    description:
      'Automatización y consumibles para reducir variabilidad y mejorar reproducibilidad.',
    icon: 'biotech',
    href: '/contacto',
    tags: ['metodo', 'multimarca'],
    category: 'sample-prep',
    highlight: false,
  },
  {
    id: 'service-support',
    title: 'Mantenimiento y Calibración',
    description:
      'Cobertura técnica, calibración certificada y capacitación especializada.',
    icon: 'engineering',
    href: '/servicios',
    tags: ['industria', 'multimarca'],
    category: 'service',
    highlight: false,
  },
];

export const filterConfig = {
  industria: 'Applicaciones por industria',
  metodo: 'Soluciones por método',
  'hplc-gc': 'Portafolio principal',
  espectrometria: 'Opciones especializadas',
  multimarca: 'Servicio multimarca',
} as const;

// ---- Specs Table (Overview) ----

export const overviewSpecRows = [
  {
    label: 'Rango de Flujo',
    values: ['0.001 – 10.000 mL/min', '0.0001 – 5.000 mL/min', 'Remoto'],
  },
  {
    label: 'Presión Máxima',
    values: ['600 bar (8,700 psi)', '1300 bar (18,850 psi)', 'En Sitio'],
  },
  {
    label: 'Precisión de Inyección',
    values: ['< 0.25% RSD', '< 0.15% RSD', 'Calibración ISO'],
  },
  {
    label: 'Cross-Contamination',
    values: ['< 0.002% (20ppm)', '< 0.001% (10ppm)', 'Validado'],
  },
];

// ---- HPLC Category Products ----

export const hplcProducts: Product[] = [
  {
    _id: 'hplc-1',
    slug: 'hplc-isocratico-alta-precision',
    title: 'Sistema HPLC Isocrático de Alta Precisión',
    description:
      'Configuración modular optimizada para flujos de trabajo rutinarios con una estabilidad de línea base excepcional.',
    image:
      '/images/productos/hplc-isocratico.jpg',
    badge: 'Premium Performance',
    badgeVariant: 'secondary',
    icon: 'science',
    specs: [
      { label: 'Rango de flujo:', value: '0.001 - 10.000 mL/min' },
      { label: 'Presión máxima:', value: '600 bar (8700 psi)' },
      { label: 'Precisión de flujo:', value: '< 0.07% RSD' },
      { label: 'Compatibilidad:', value: 'Pharma, Food & Bev' },
    ],
    primaryAction: 'Ver Ficha Técnica',
    secondaryAction: 'Configurar Sistema',
  },
  {
    _id: 'hplc-2',
    slug: 'sistema-purificacion-preparativa',
    title: 'Sistema de Purificación Preparativa',
    description:
      'Diseñado para la recuperación de compuestos con alta pureza a gran escala, integrando colectores de fracciones automáticos.',
    image:
      '/images/productos/purificacion-preparativa.jpg',
    badge: 'High Flow',
    badgeVariant: 'secondary-container',
    icon: 'biotech',
    specs: [
      { label: 'Capacidad:', value: 'Hasta 200 mL/min' },
      { label: 'Colector:', value: 'Fraccionado inteligente' },
      { label: 'Sensores:', value: 'UV-Vis Multilongitud' },
      { label: 'Escalabilidad:', value: 'Analítico a Preparativo' },
    ],
    primaryAction: 'Ver Ficha Técnica',
    secondaryAction: 'Solicitar Demo',
  },
  {
    _id: 'hplc-3',
    slug: 'modulo-inyeccion-automatica-autosampler',
    title: 'Módulo de Inyección Automática (Autosampler)',
    description:
      'Automatización de alto rendimiento con carry-over ultrabajo y control térmico de muestras integrado.',
    image:
      '/images/productos/autosampler.jpg',
    badge: 'Automation',
    badgeVariant: 'on-surface-variant',
    icon: 'settings_input_component',
    specs: [
      { label: 'Capacidad:', value: '120 viales standard' },
      { label: 'Volumen:', value: '0.1 a 100 µL' },
      { label: 'Carry-over:', value: '< 0.003%' },
      { label: 'Termostatización:', value: '4°C - 45°C' },
    ],
    primaryAction: 'Ver Ficha Técnica',
    secondaryAction: 'Cotizar Módulo',
  },
];

// ---- Categories Map ----

export const categoriesMap: Record<string, CategoryData> = {
  hplc: {
    slug: 'hplc',
    title: 'Sistemas de Cromatografía de Líquidos',
    description:
      'Soluciones analíticas de alta precisión diseñadas para laboratorios de investigación y control de calidad industrial.',
    breadcrumb: 'Cromatografía de Líquidos (HPLC)',
    products: hplcProducts,
    ctaTitle: '¿No encuentra el sistema exacto para su aplicación?',
    ctaDescription:
      'Nuestros ingenieros especialistas pueden diseñar una configuración modular que se adapte perfectamente a sus necesidades analíticas y presupuesto.',
  },
  gc: {
    slug: 'gc',
    title: 'Cromatografía de Gases',
    description:
      'Sistemas de alta resolución para análisis de volátiles y semivolátiles.',
    breadcrumb: 'Cromatografía de Gases (GC)',
    products: hplcProducts.slice(0, 2),
    ctaTitle: '¿Necesita configurar su sistema GC?',
    ctaDescription:
      'Nuestros especialistas en GC pueden ayudarle a diseñar el sistema ideal para sus aplicaciones analíticas.',
  },
};

// ---- Product Detail (Elite Series) ----

export const eliteSeriesDetail: ProductDetail = {
  slug: 'sistema-hplc-elite-series',
  badge: 'Cromatografía de Líquidos',
  title: (
    <>
      Sistema HPLC <br />
      <span className="text-secondary">Solinsa Elite Series</span>
    </>
  ),
  description:
    'Diseñado para la máxima precisión analítica en entornos farmacéuticos y de investigación avanzada. Rendimiento superior con una arquitectura de hardware modular optimizada para flujos de trabajo críticos.',
  images: [
    {
      src: '/images/productos/elite-series-1.jpg',
      alt: 'Solinsa Elite Series HPLC',
    },
    {
      src: '/images/productos/elite-series-2.jpg',
      alt: 'Close up chromatography equipment',
    },
    {
      src: '/images/productos/elite-series-3.jpg',
      alt: 'Liquid samples in HPLC tray',
    },
    {
      src: '/images/productos/elite-series-4.jpg',
      alt: 'Internal pump components',
    },
  ],
  specs: [
    {
      label: 'Rango de Flujo',
      value: '0.001 – 10.000 mL/min',
      method: 'Increments of 0.001 mL/min',
    },
    {
      label: 'Presión Máxima Operativa',
      value: '1,200 bar (17,400 psi)',
      method: 'Constant Pressure Mode',
    },
    {
      label: 'Exactitud de Flujo',
      value: '± 1% o 10 µL/min',
      method: 'Calibrado NIST',
    },
    {
      label: 'Rango de Temperatura (Horno)',
      value: '4°C a 90°C',
      method: 'Stability ± 0.1°C',
    },
    {
      label: 'Precisión de Inyección',
      value: '< 0.25% RSD',
      method: 'Volume Range 0.1-100 µL',
    },
  ],
  configs: [
    {
      ref: 'ELITE-B',
      icon: 'schema',
      title: 'Bomba Binaria de Alta Presión',
      description:
        'Optimizado para gradientes rápidos y máxima resolución. Ideal para aplicaciones de LC/MS y análisis de alto rendimiento donde el tiempo de ciclo es crítico.',
      features: [
        'Volumen de retraso ultra-bajo (< 100 µL)',
        'Mezcla dinámica de alta eficiencia',
      ],
    },
    {
      ref: 'ELITE-Q',
      icon: 'account_tree',
      title: 'Bomba Cuaternaria de Baja Presión',
      description:
        'Versatilidad inigualable para el desarrollo de métodos. Permite la mezcla automática de hasta cuatro disolventes para optimizar condiciones cromatográficas.',
      features: [
        'Desgasificador de 4 canales integrado',
        'Flexibilidad total en cambio de solventes',
      ],
    },
  ],
};

// ---- Product detail lookup by slug ----

export const productDetailsMap: Record<string, ProductDetail> = {
  'sistema-hplc-elite-series': eliteSeriesDetail,
  'hplc-isocratico-alta-precision': {
    ...eliteSeriesDetail,
    slug: 'hplc-isocratico-alta-precision',
    badge: 'Cromatografía de Líquidos',
    title: (
      <>
        Sistema HPLC Isocrático <br />
        <span className="text-secondary">Alta Precisión</span>
      </>
    ),
    description:
      'Configuración modular optimizada para flujos de trabajo rutinarios con una estabilidad de línea base excepcional. Ideal para análisis farmacéutico y alimentario.',
  },
  'sistema-purificacion-preparativa': {
    ...eliteSeriesDetail,
    slug: 'sistema-purificacion-preparativa',
    badge: 'Cromatografía de Líquidos',
    title: (
      <>
        Sistema de Purificación <br />
        <span className="text-secondary">Preparativa</span>
      </>
    ),
    description:
      'Diseñado para la recuperación de compuestos con alta pureza a gran escala, integrando colectores de fracciones automáticos.',
  },
  'modulo-inyeccion-automatica-autosampler': {
    ...eliteSeriesDetail,
    slug: 'modulo-inyeccion-automatica-autosampler',
    badge: 'Automatización',
    title: (
      <>
        Módulo de Inyección Automática <br />
        <span className="text-secondary">Autosampler</span>
      </>
    ),
    description:
      'Automatización de alto rendimiento con carry-over ultrabajo y control térmico de muestras integrado.',
  },
};
