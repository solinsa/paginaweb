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

export const solucionesFilters = [
  { id: 'industria', label: 'Industria', icon: 'factory' },
  { id: 'metodo', label: 'Método Analítico', icon: 'science' },
  { id: 'hplc-gc', label: 'HPLC/GC', icon: 'biotech' },
  { id: 'espectrometria', label: 'Espectrometría', icon: 'query_stats' },
  { id: 'multimarca', label: 'Multimarca', icon: 'verified' },
];

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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQuzOuKmeoe9F1tWdJZl4dTpAOXd7iM8kNtlp2SYi1M94EPQ46x3yaznhYY-ntjcjkHoqEZmvNwu5B2rmNbES4E-HiOOwWQS4mXeZreqDjKSrBJ493gA-y2sO4rw_MVLCmw2JQhu3HVXT6MwX_oRXFB5RIyQNJnLfapKmCL0Uesnd234nwZ8iVgW-23Ht1TFWTYPVWrqq3Np-mk30gPUJbf2bnCWTLR21HURGmY_GVZHRcbiHNj6cjvMBxIB0qWPCwVEzUnSrWMw',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBH1L_OJ6nz2TJelahcUzYm1QlinCAfNUkLyBQXBnyRr3jXWinc1w-VsVqEbuJs-4gExcDbuoONODDrkTmaOihfwMed-501VYgbUgy7FSD2QN3XCfTtlFoomNN4OXRpIsLdbIXDR2uW1p1UqE4KHCi6XrXio4V8KLHklO_HqPDfQyyoTzClWFdS68f8fj-swHdi8I-yxGSz_vtSvySRBGXlKHRwd3RBLbS2VMPpqm4p6iZsLZPMZV9S6bT3YXlorxgRg2qsJlbbYA',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjLW5Uvwg3xr9TnfLtEvPOGseaZS8-CBCp2b_G4paVe9NdZGm7VkwtWMwsuUH2k9FxX72y2wasZ8yZ7qBsANDZfbxEznoODuIbL2Djd7uWwAjst0AepMJ7GJ71PhfXxo68ekc_YCGd0rawQoAUaAZZCjkkd1d381AOcxXkVYeW7CB5aYWKiSvpUR0vMc3plAO60aIEb_W8JpMrhEOG56xUsm0Sylqlkb4C8FyJtxB4MN_JjRidtWy8TbV8OubJ3TxgB5Wb9kkcQA',
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
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDawveJI9yFjB2dpsQklip8lMj2zHagzmY7eXVGRDDL0lGcruXgSn74DWtpctlleonNcq96lDmxf78WByww3WOmNOejUsKXtBHLFGdwV8BcMddUcYoNV1SaXqo3XKk8UfbynBIaynrbxf3dX4HSu955sZnzXqgDoGnhyMTN5nSTXOlw7xahsAIAmCAP835poolr9MGlfG1acW3-TUmSn70BN_TUMQrB9ObYos7OwMC4EPPnOyp8Dt0ansQeNQhrhuK7m6ji6ycERA',
      alt: 'Solinsa Elite Series HPLC',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE-728jSi_mtJaROHF68fOFbcLJo6sepRKO5KnJ7aJ7tsWdxyXwTlTUq738V0d9i7fv2xqEUbo0jPow0s-LVEA792zW1R7UlcIiZV6Nea6jdNrbIvzpxBuhyGYOA4nL85gje-aercbx9h8MAqFMVTc5uyfXgQJrrcQZ8G726THQpKWkJhpl7i77Did0jPnT2xmK4ovNkEZ8_OUoH2xVpap9oshsiIzufcS98yApzm1RJ9dqvlNxYIxxv0lMTx2hyBfXjwYcita-g',
      alt: 'Close up chromatography equipment',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7qGjOzmA_Op1wwsp3nD47RHpVVBqwTyLVHij-A-aJ2Ao94gbD1zBU_PDfXBYYzr0sB2oVmMaXEm2okiCj90m05_sqwQjvSN6hU6EWqqVD4wota3y5v1z6p2Mk0vSHbtq67pw8LsaRoP7WxzKU0uVX3pppxBO0NvIPVctCAeRHksDM4R8IPWwmv6KZbQnEgr5Pnz_4M25_0IVVUhV42RyAX0e4L1H_T7mhkRMV31UXBAKUrpqyME4IMHr5QHp3Z9JDwk6f-v14lA',
      alt: 'Liquid samples in HPLC tray',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsDAl3JOMo-atFS_VhF7nEH-UhRmXGeHtBqJzYidqIWHEmL2IsISJOnHJEpInXx6Rv5gIjYcZLyg4nECNLGiX6XPkfZttFdQKtX2Vjsi0hbEbmPKpZwNGX8PMK0NcggTzyoSz8TSREJYp6sBCyRiQuj-RB8pLWnRP3Qqo3ZLtUl21O_AaaWKiNwXs8js2uGRmFS-n6qMZogCU7fmqwRLq3v-HThtFvJv7ZvJUwfAAhXyt829_Pmj20t8NxWjzchvz6n2QS6kC1HA',
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
