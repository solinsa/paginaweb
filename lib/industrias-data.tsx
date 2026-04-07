// ---------------------------------------------------------------------------
// Datos de Industrias para Solinsa
// Estructura de datos para páginas de industrias y aplicaciones
// ---------------------------------------------------------------------------

import {
  IndustryApplication,
  type IndustryLayout,
} from "@/components/sections/IndustrySection";

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface IndustriaData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  detailedDescription: string;
  icon: string;
  badge?: string;
  badgeVariant?: "secondary" | "secondary-container" | "primary";
  layout: IndustryLayout;
  applications: IndustryApplication[];
  equipos: EquipoRecomendado[];
  normativas: Normativa[];
  stats: { icon: string; label: string; value: string }[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface EquipoRecomendado {
  nombre: string;
  tipo: string;
  aplicaciones: string[];
  especificaciones: { label: string; value: string }[];
}

export interface Normativa {
  codigo: string;
  descripcion: string;
  organismo?: string;
}

// ---------------------------------------------------------------------------
// Datos de Aplicaciones Ambientales
// ---------------------------------------------------------------------------

const ambientalApplications: IndustryApplication[] = [
  {
    icon: "water_drop",
    title: "Calidad de Agua",
    description:
      "Análisis de contaminantes orgánicos e inorgánicos en agua potable, residual y superficial mediante GC-MS y LC-MS/MS.",
    noteId: "330",
    slug: "calidad-agua",
  },
  {
    icon: "landscape",
    title: "Análisis de Suelos",
    description:
      "Detección de pesticidas, herbicidas y contaminantes persistentes en matrices de suelo y sedimentos.",
    noteId: "345",
    slug: "analisis-suelos",
  },
  {
    icon: "air",
    title: "VOCs en Aire",
    description:
      "Determinación de compuestos orgánicos volátiles en aire ambiente e interior con GC-FID y GC-MS.",
    noteId: "410",
    slug: "vocs-aire",
  },
  {
    icon: "science",
    title: "PFAS Forever Chemicals",
    description:
      "Análisis de ácidos perfluoroalquilicos y polifluoroalquilicos emergentes mediante LC-MS/MS.",
    noteId: "533",
    slug: "pfas-analisis",
  },
  {
    icon: "oil_barrel",
    title: "Hidrocarburos PAH",
    description:
      "Cuantificación de hidrocarburos aromáticos policíclicos en sedimentos y muestras ambientales.",
    noteId: "550",
    slug: "pah-sedimentos",
  },
  {
    icon: "pest_control_rodent",
    title: "Pesticidas Organoclorados",
    description:
      "Determinación de DDT, lindano, endosulfán y otros COPs en matrices ambientales.",
    noteId: "808",
    slug: "pesticidas-organoclorados",
  },
  {
    icon: "grass",
    title: "Herbicidas Triazinas",
    description:
      "Análisis de atrazina, simazina y otros herbicidas triazinas en agua y suelo.",
    noteId: "507",
    slug: "herbicidas-triazinas",
  },
  {
    icon: "biotech",
    title: "Contaminantes Emergentes",
    description:
      "Detección de fármacos, hormonas y productos de cuidado personal en aguas residuales.",
    noteId: "1694",
    slug: "contaminantes-emergentes",
  },
];

// ---------------------------------------------------------------------------
// Datos de Aplicaciones de Alimentos
// ---------------------------------------------------------------------------

const alimentosApplications: IndustryApplication[] = [
  {
    icon: "eco",
    title: "Residuos de Pesticidas",
    description:
      "Análisis multiresiduo en frutas y hortalizas mediante LC-MS/MS con alta sensibilidad.",
    noteId: "402",
    slug: "pesticidas-alimentos",
  },
  {
    icon: "nutrition",
    title: "Perfil de Aminoácidos",
    description:
      "Cuantificación rápida de aminoácidos en bebidas enriquecidas usando HPLC con detección UV.",
    noteId: "115",
    slug: "aminoacidos-bebidas",
  },
  {
    icon: "bakery_dining",
    title: "Micotoxinas",
    description:
      "Detección de aflatoxinas, ocratoxina y fumonisinas en granos y cereales.",
    noteId: "220",
    slug: "micotoxinas",
  },
  {
    icon: "add_circle",
    title: "Aditivos Alimentarios",
    description:
      "Cuantificación de conservantes, colorantes y edulcorantes en productos procesados.",
    noteId: "180",
    slug: "aditivos-alimentarios",
  },
  {
    icon: "medication",
    title: "Vitaminas",
    description:
      "Determinación de vitaminas liposolubles e hidrosolubles en alimentos fortificados.",
    noteId: "295",
    slug: "vitaminas",
  },
  {
    icon: "warning",
    title: "Contaminantes",
    description:
      "Análisis de bisfenol A, ftalatos y otros contaminantes migrantes desde envases.",
    noteId: "430",
    slug: "contaminantes-alimentos",
  },
];

// ---------------------------------------------------------------------------
// Datos de Aplicaciones Farmacéuticas
// ---------------------------------------------------------------------------

const farmaApplications: IndustryApplication[] = [
  {
    icon: "vaccines",
    title: "Pureza de APIs",
    description:
      "Control de calidad y determinación de impurezas orgánicas en principios activos farmacéuticos.",
    noteId: "881",
    slug: "pureza-apis",
  },
  {
    icon: "science",
    title: "Ensayos de Disolución",
    description:
      "Monitoreo automatizado de liberación controlada mediante HPLC en línea.",
    noteId: "209",
    slug: "ensayos-disolucion",
  },
  {
    icon: "stability",
    title: "Estabilidad",
    description:
      "Estudios de estabilidad acelerada y a largo plazo según ICH Q1A(R2).",
    noteId: "312",
    slug: "estabilidad",
  },
  {
    icon: "biotech",
    title: "Impurezas Genotóxicas",
    description:
      "Detección de impurezas genotóxicas a niveles ppm mediante LC-MS/MS.",
    noteId: "467",
    slug: "impurezas-genotoxicas",
  },
  {
    icon: "bloodtype",
    title: "Bioanálisis",
    description:
      "Cuantificación de fármacos en plasma y orina para estudios bioequivalencia.",
    noteId: "525",
    slug: "bioanalisis",
  },
];

// ---------------------------------------------------------------------------
// Datos de Aplicaciones Petroquímicas
// ---------------------------------------------------------------------------

const petroApplications: IndustryApplication[] = [
  {
    icon: "oil_barrel",
    title: "Fraccionamiento de Petróleo",
    description:
      "Caracterización de crudos mediante cromatografía de gases de alta resolución para optimización de refinería.",
    noteId: "550",
    slug: "fraccionamiento-petroleo",
  },
  {
    icon: "gas_meter",
    title: "Pureza de Etileno",
    description:
      "Detección de impurezas a nivel de trazas (ppb) para procesos de polimerización crítica.",
    noteId: "612",
    slug: "pureza-etileno",
  },
  {
    icon: "propane",
    title: "Gases Naturales",
    description:
      "Análisis de componentes mayoritarios y traza en gas natural por GC-TCD y GC-FID.",
    noteId: "580",
    slug: "gases-naturales",
  },
  {
    icon: "settings_input_component",
    title: "Polímeros",
    description:
      "Caracterización de aditivos y monómeros residuales en materiales plásticos.",
    noteId: "625",
    slug: "polimeros",
  },
];

// ---------------------------------------------------------------------------
// Datos de Aplicaciones de Universidades
// ---------------------------------------------------------------------------

const universidadesApplications: IndustryApplication[] = [
  {
    icon: "school",
    title: "Investigación Básica",
    description:
      "Desarrollo de nuevos métodos analíticos para compuestos novedosos y materiales avanzados.",
    noteId: "101",
    slug: "investigacion-basica",
  },
  {
    icon: "menu_book",
    title: "Docencia",
    description:
      "Equipos robustos y fáciles de operar para laboratorios de enseñanza de cromatografía.",
    noteId: "102",
    slug: "docencia",
  },
  {
    icon: "article",
    title: "Publicaciones",
    description:
      "Soporte técnico para investigación de alto impacto con datos reproducibles.",
    noteId: "103",
    slug: "publicaciones",
  },
];

// ---------------------------------------------------------------------------
// Equipos Recomendados por Industria
// ---------------------------------------------------------------------------

const ambientalEquipos: EquipoRecomendado[] = [
  {
    nombre: "GC-MS Sistema de Alta Resolución",
    tipo: "Cromatografía de Gases",
    aplicaciones: [
      "VOCs en agua (EPA 524.2)",
      "SVOCs en agua (EPA 525.2)",
      "Pesticidas en suelo (EPA 8081)",
    ],
    especificaciones: [
      { label: "Rango de masa", value: "1.5 - 1050 amu" },
      { label: "Sensibilidad", value: "0.1 pg OFN (S/N ≥ 10)" },
      { label: "Resolución", value: "0.7 amu (FWHM)" },
    ],
  },
  {
    nombre: "LC-MS/MS Triple Cuadrupolo",
    tipo: "Cromatografía de Líquidos",
    aplicaciones: [
      "PFAS (EPA 533)",
      "Contaminantes emergentes (EPA 1694)",
      "Herbicidas triazinas",
    ],
    especificaciones: [
      { label: "MZ Gap", value: "0.5 amu" },
      { label: "Canales MRM", value: ">500" },
      { label: "ESI positivo/negativo", value: "Cambio polaridad < 20ms" },
    ],
  },
  {
    nombre: "HPLC-UV/FLD",
    tipo: "Cromatografía Líquida",
    aplicaciones: ["PAHs (EPA 550)", "Herbicidas (EPA 507)"],
    especificaciones: [
      { label: "Rango UV", value: "190 - 800 nm" },
      { label: "FLD excitación", value: "200 - 890 nm" },
      { label: "Volumen inyección", value: "1 - 100 µL" },
    ],
  },
];

const alimentosEquipos: EquipoRecomendado[] = [
  {
    nombre: "LC-MS/MS Triple Quad",
    tipo: "Cromatografía de Líquidos",
    aplicaciones: [
      "Pesticidas multiresiduo",
      "Micotoxinas",
      "Veterinarios",
    ],
    especificaciones: [
      { label: "Límite detección", value: "0.01 ppb" },
      { label: "Matrices", value: ">300 validadas" },
      { label: "Throughput", value: ">200 muestras/día" },
    ],
  },
  {
    nombre: "HPLC-DAD",
    tipo: "Cromatografía Líquida",
    aplicaciones: ["Aditivos", "Colorantes", "Vitaminas"],
    especificaciones: [
      { label: "Canales DAD", value: "8 canales" },
      { label: "Resolución", value: "1.2 nm" },
    ],
  },
];

const farmaEquipos: EquipoRecomendado[] = [
  {
    nombre: "HPLC-UHPLC",
    tipo: "Cromatografía de Líquidos",
    aplicaciones: [
      "Control de calidad API",
      "Disolución",
      "Estabilidad",
    ],
    especificaciones: [
      { label: "Presión máx", value: "1300 bar (18,850 psi)" },
      { label: "Volumen inyección", value: "0.1 - 100 µL" },
      { label: "21 CFR Part 11", value: "Cumple" },
    ],
  },
  {
    nombre: "LC-MS/MS",
    tipo: "Cromatografía de Líquidos",
    aplicaciones: ["Impurezas genotóxicas", "Bioanálisis"],
    especificaciones: [
      { label: "Límite cuantificación", value: "pg/mL" },
      { label: "Linealidad", value: ">6 órdenes" },
    ],
  },
];

const petroEquipos: EquipoRecomendado[] = [
  {
    nombre: "Refinery GC System",
    tipo: "Cromatografía de Gases",
    aplicaciones: [
      "Análisis de crudo",
      "Simulación de destilación",
      "Purity de monómeros",
    ],
    especificaciones: [
      { label: "Inyectores", value: "2 x Split/Splitless" },
      { label: "Detectores", value: "FID + TCD" },
      { label: "Rango temp", value: "-10°C a 450°C" },
    ],
  },
];

const universidadesEquipos: EquipoRecomendado[] = [
  {
    nombre: "HPLC Education System",
    tipo: "Cromatografía de Líquidos",
    aplicaciones: ["Docencia", "Investigación básica"],
    especificaciones: [
      { label: "Modularidad", value: "Configuración flexible" },
      { label: "Software educativo", value: "Incluido" },
      { label: "Costo operativo", value: "Bajo" },
    ],
  },
  {
    nombre: "GC-FID System",
    tipo: "Cromatografía de Gases",
    aplicaciones: ["Prácticas de laboratorio", "Proyectos estudiantiles"],
    especificaciones: [
      { label: "Columnas", value: "Capilares estándar" },
      { label: "Robustez", value: "Alta" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Normativas por Industria
// ---------------------------------------------------------------------------

const ambientalNormativas: Normativa[] = [
  {
    codigo: "EPA 524.2",
    descripcion: "Measurement of Purgeable Organic Compounds in Water by Capillary Column Gas Chromatography/Mass Spectrometry",
    organismo: "EPA",
  },
  {
    codigo: "EPA 525.2",
    descripcion: "Determination of Semivolatile Organic Chemicals in Water by Solid Phase Extraction and Capillary Column Gas Chromatography/Mass Spectrometry",
    organismo: "EPA",
  },
  {
    codigo: "EPA 533",
    descripcion: "Determination of Per- and Polyfluoroalkyl Substances in Water by Solid Phase Extraction and Liquid Chromatography/Tandem Mass Spectrometry (LC/MS/MS)",
    organismo: "EPA",
  },
  {
    codigo: "EPA 8081B",
    descripcion: "Organochlorine Pesticides by Gas Chromatography",
    organismo: "EPA",
  },
  {
    codigo: "EPA TO-15",
    descripcion: "Determination of Volatile Organic Compounds (VOCs) in Air Collected in Specially-Prepared Canisters and Analyzed by Gas Chromatography/Mass Spectrometry (GC/MS)",
    organismo: "EPA",
  },
  {
    codigo: "EPA 1694",
    descripcion: "Pharmaceuticals and Personal Care Products in Water, Soil, Sediment, and Biosolids by HPLC-MS/MS",
    organismo: "EPA",
  },
  {
    codigo: "NOM-001-SEMARNAT",
    descripcion: "Límites máximos permisibles de contaminantes en las descargas de aguas residuales",
    organismo: "SEMARNAT",
  },
];

const alimentosNormativas: Normativa[] = [
  {
    codigo: "FDA Food Safety Modernization Act",
    descripcion: "Normas de inocuidad alimentaria",
    organismo: "FDA",
  },
  {
    codigo: "Commission Regulation (EC) No 1881/2006",
    descripcion: "Contaminantes en productos alimenticios",
    organismo: "UE",
  },
  {
    codigo: "NOM-251-SSA1-2009",
    descripcion: "Prácticas de higiene para el proceso de alimentos",
    organismo: "SSA",
  },
];

const farmaNormativas: Normativa[] = [
  {
    codigo: "USP <467> Residual Solvents",
    descripcion: "Procedimiento para el análisis de disolventes residuales",
    organismo: "USP",
  },
  {
    codigo: "USP <621> Chromatography",
    descripcion: "Capítulos generales de cromatografía",
    organismo: "USP",
  },
  {
    codigo: "ICH Q1A(R2)",
    descripcion: "Estabilidad de nuevos productos y sustancias medicinales",
    organismo: "ICH",
  },
  {
    codigo: "ICH Q3B(R2)",
    descripcion: "Ensayos sobre impurezas en nuevas sustancias medicinales",
    organismo: "ICH",
  },
  {
    codigo: "21 CFR Part 11",
    descripcion: "Regulación de registros electrónicos y firmas electrónicas",
    organismo: "FDA",
  },
  {
    codigo: "COFEPRIS",
    descripcion: "Regulación sanitaria en México",
    organismo: "COFEPRIS",
  },
];

const petroNormativas: Normativa[] = [
  {
    codigo: "ASTM D2892",
    descripcion: "Distillation of Crude Petroleum",
    organismo: "ASTM",
  },
  {
    codigo: "ASTM D5186",
    descripcion: "Analysis of Olefinic Aromatics in Fuels",
    organismo: "ASTM",
  },
  {
    codigo: "ISO 12954",
    descripcion: "Natural gas — Determination of composition",
    organismo: "ISO",
  },
];

const universidadesNormativas: Normativa[] = [
  {
    codigo: "Conacyt",
    descripcion: "Requisitos para proyectos de investigación",
    organismo: "Conacyt",
  },
];

// ---------------------------------------------------------------------------
// Mapa de Industrias
// ---------------------------------------------------------------------------

export const industriasMap: Record<string, IndustriaData> = {
  ambiente: {
    slug: "ambiente",
    title: "Soluciones de Cromatografía para Análisis Ambiental",
    shortTitle: "Medio Ambiente",
    description:
      "Monitoreo de calidad ambiental con la precisión requerida por normativas internacionales. Detecte contaminantes traza en agua, suelo y aire.",
    detailedDescription:
      "Los laboratorios ambientales enfrentan el desafío constante de detectar contaminantes a niveles cada vez más bajos mientras cumplen con normativas estrictas. Nuestros sistemas de cromatografía están validados según métodos EPA e ISO, garantizando resultados confiables para el monitoreo de agua potable, aguas residuales, suelos y aire ambiente.",
    icon: "forest",
    badge: "Regulado por EPA",
    badgeVariant: "secondary",
    layout: "left",
    applications: ambientalApplications,
    equipos: ambientalEquipos,
    normativas: ambientalNormativas,
    stats: [
      { icon: "verified", label: "Métodos EPA", value: "15+ Validados" },
      { icon: "speed", label: "Límite Detección", value: "0.1 ppb" },
      { icon: "public", label: "Cobertura", value: "Normativa Global" },
    ],
    metadata: {
      title: "Soluciones de Cromatografía Ambiental | Solinsa",
      description:
        "Sistemas de cromatografía para análisis ambiental de agua, suelo y aire. Equipos validados según EPA 500, 800, 5000 series y métodos ISO.",
      keywords: [
        "cromatografía ambiental",
        "EPA 524.2",
        "análisis de agua",
        "VOCs",
        "PFAS",
        "LC-MS/MS ambiental",
        "GC-MS ambiental",
        "monitoreo ambiental",
        "SEMARNAT",
      ],
    },
  },

  alimentos: {
    slug: "alimentos",
    title: "Soluciones de Cromatografía para la Industria de Alimentos",
    shortTitle: "Alimentos y Bebidas",
    description:
      "Asegurando la inocuidad alimentaria a través de la detección precisa de contaminantes, análisis nutricional y control de calidad.",
    detailedDescription:
      "La industria de alimentos y bebidas requiere soluciones analíticas robustas para garantizar la inocuidad y cumplir con regulaciones globales. Nuestros sistemas permiten el análisis de pesticidas, micotoxinas, aditivos, vitaminas y contaminantes con la sensibilidad necesaria para límites MRL cada vez más estrictos.",
    icon: "restaurant",
    badge: "FDA/EFSA Ready",
    badgeVariant: "secondary-container",
    layout: "left",
    applications: alimentosApplications,
    equipos: alimentosEquipos,
    normativas: alimentosNormativas,
    stats: [
      { icon: "science", label: "Multiresiduo", value: ">500 pesticidas" },
      { icon: "speed", label: "Throughput", value: "200 muestras/día" },
      { icon: "verified", label: "Validación", value: "SANTE/12682" },
    ],
    metadata: {
      title: "Cromatografía para Alimentos y Bebidas | Solinsa",
      description:
        "Sistemas de análisis para inocuidad alimentaria: pesticidas, micotoxinas, aditivos, vitaminas. Cumplimiento FDA, EFSA, NOM.",
      keywords: [
        "cromatografía alimentos",
        "análisis de pesticidas",
        "micotoxinas",
        "inocuidad alimentaria",
        "LC-MS/MS alimentos",
        "FDA FSMA",
        "SANTE guidelines",
      ],
    },
  },

  farma: {
    slug: "farma",
    title: "Soluciones de Cromatografía para la Industria Farmacéutica",
    shortTitle: "Farmacéutica",
    description:
      "Cumplimiento estricto con farmacopeas internacionales (USP, EP, JP) mediante instrumentación robusta y validada.",
    detailedDescription:
      "La industria farmacéutica requiere sistemas analíticos que cumplan con las exigencias de FDA, EMA y COFEPRIS. Nuestros equipos están diseñados para cumplir con 21 CFR Part 11 y ofrecen la precisión necesaria para control de calidad de APIs, estudios de estabilidad, ensayos de disolución y determinación de impurezas genotóxicas.",
    icon: "medication",
    badge: "21 CFR Part 11",
    badgeVariant: "secondary",
    layout: "right",
    applications: farmaApplications,
    equipos: farmaEquipos,
    normativas: farmaNormativas,
    stats: [
      { icon: "gavel", label: "Farmacopeas", value: "USP, EP, JP" },
      { icon: "shield", label: "Validación", value: "IQ/OQ/PQ" },
      { icon: "lock", label: "Integridad Datos", value: "Audit Trail" },
    ],
    metadata: {
      title: "Cromatografía Farmacéutica | Solinsa",
      description:
        "Sistemas HPLC y LC-MS/MS para control de calidad farmacéutico. Cumplimiento USP, EP, 21 CFR Part 11, ICH Q3B.",
      keywords: [
        "cromatografía farmacéutica",
        "HPLC farma",
        "USP <467>",
        "21 CFR Part 11",
        "control de calidad API",
        "ensayo de disolución",
        "estabilidad",
        "COFEPRIS",
      ],
    },
  },

  petro: {
    slug: "petro",
    title: "Soluciones de Cromatografía para la Industria Petroquímica",
    shortTitle: "Petroquímica",
    description:
      "Análisis de hidrocarburos, gases y derivados con metodologías ASTM y estándares industriales globales.",
    detailedDescription:
      "La industria petroquímica requiere análisis precisos para optimizar procesos y garantizar la calidad de productos finales. Nuestros sistemas de GC permiten la caracterización completa de crudos, análisis de gases naturales, determinación de pureza de monómeros y control de calidad de polímeros y lubricantes.",
    icon: "propane",
    badge: "ASTM Standards",
    badgeVariant: "primary",
    layout: "dark",
    applications: petroApplications,
    equipos: petroEquipos,
    normativas: petroNormativas,
    stats: [
      { icon: "precision_manufacturing", label: "Resolución", value: "Alta Precisión" },
      { icon: "local_fire_department", label: "Temperatura", value: "Hasta 450°C" },
      { icon: "engineering", label: "Robustez", value: "24/7 Operación" },
    ],
    metadata: {
      title: "Cromatografía para Petroquímica | Solinsa",
      description:
        "Sistemas de GC para análisis de crudo, gas natural, olefinas y polímeros. Cumplimiento ASTM D2892, ISO 12954.",
      keywords: [
        "cromatografía petroquímica",
        "GC refinería",
        "ASTM D2892",
        "análisis de crudo",
        "olefinas",
        "gas natural",
        "simulación de destilación",
      ],
    },
  },

  universidades: {
    slug: "universidades",
    title: "Soluciones de Cromatografía para Investigación y Docencia",
    shortTitle: "Universidades e Investigación",
    description:
      "Apoyamos a centros de investigación con tecnologías de vanguardia para el descubrimiento de nuevos materiales y compuestos bioactivos.",
    detailedDescription:
      "Entendemos los desafíos únicos de los laboratorios académicos: presupuestos limitados, necesidad de flexibilidad y formación constante de estudiantes. Nuestros sistemas educativos ofrecen robustez, facilidad de uso y costos operativos bajos, sin sacrificar la calidad de datos necesaria para publicaciones de alto impacto.",
    icon: "school",
    badge: "Academic Support",
    badgeVariant: "secondary-container",
    layout: "bento",
    applications: universidadesApplications,
    equipos: universidadesEquipos,
    normativas: universidadesNormativas,
    stats: [
      { icon: "school", label: "Educación", value: "Software Docente" },
      { icon: "favorite", label: "Soporte", value: "Dedicado" },
      { icon: "payments", label: "Financiamiento", value: "Conacyt Compatible" },
    ],
    metadata: {
      title: "Cromatografía para Universidades e Investigación | Solinsa",
      description:
        "Equipos de cromatografía para laboratorios académicos. Sistemas educativos robustos con soporte especializado para investigación.",
      keywords: [
        "cromatografía universidades",
        "HPLC educativo",
        "laboratorio docente",
        "equipos para investigación",
        "Conacyt",
        "publicaciones científicas",
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Lista ordenada de industrias para navegación
// ---------------------------------------------------------------------------

export const industriasList = Object.values(industriasMap);

// ---------------------------------------------------------------------------
// Helper para obtener industrias por slug
// ---------------------------------------------------------------------------

export function getIndustriaBySlug(slug: string): IndustriaData | undefined {
  return industriasMap[slug];
}

// ---------------------------------------------------------------------------
// Helper para obtener aplicaciones por industria
// ---------------------------------------------------------------------------

export function getAplicacionesByIndustria(
  industriaSlug: string
): IndustryApplication[] {
  const industria = getIndustriaBySlug(industriaSlug);
  return industria?.applications || [];
}
