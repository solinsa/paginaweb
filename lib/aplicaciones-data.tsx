// ---------------------------------------------------------------------------
// Datos Detallados de Aplicaciones para Solinsa
// Contenido técnico para páginas individuales de aplicaciones
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface AplicacionDetail {
  slug: string;
  industria: string;
  industriaSlug: string;
  title: string;
  subtitle: string;
  description: string;
  introduccion: string;
  parametros: ParametroAnalizable[];
  metodologia: MetodoAnalitico[];
  equipos: EquipoSugerido[];
  normativas: NormativaDetalle[];
  especificaciones: EspecificacionTecnica[];
  consideraciones: string[];
  imagenes?: { src: string; alt: string }[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface ParametroAnalizable {
  nombre: string;
  descripcion: string;
  tecnica: string;
  limiteDeteccion?: string;
}

export interface MetodoAnalitico {
  nombre: string;
  descripcion: string;
  equipo: string;
  tiempoAnalisis?: string;
}

export interface EquipoSugerido {
  nombre: string;
  descripcion: string;
  justificacion: string;
}

export interface NormativaDetalle {
  codigo: string;
  nombre: string;
  organismo: string;
  descripcion: string;
  url?: string;
}

export interface EspecificacionTecnica {
  categoria: string;
  especificaciones: { parametro: string; valor: string }[];
}

// ---------------------------------------------------------------------------
// Aplicación: Calidad de Agua
// ---------------------------------------------------------------------------

export const calidadAguaData: AplicacionDetail = {
  slug: "calidad-agua",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Análisis de Calidad de Agua por Cromatografía",
  subtitle: "Monitoreo de contaminantes en agua potable, residual y superficial",
  description:
    "Determinación cuantitativa de contaminantes orgánicos e inorgánicos en matrices de agua mediante técnicas cromatográficas validadas según EPA.",
  introduccion:
    "El análisis de calidad de agua es fundamental para proteger la salud pública y los ecosistemas acuáticos. Las normativas ambientales exigen la detección de contaminantes a niveles de ppb (partes por billón), lo que requiere sistemas de cromatografía de alta sensibilidad y selectividad. Nuestros equipos permiten el análisis simultáneo de cientos de compuestos en una sola corrida.",
  parametros: [
    {
      nombre: "Compuestos Orgánicos Volátiles (VOCs)",
      descripcion:
        "Benceno, tolueno, etilbenceno, xilenos (BTEX), cloroformo, tetracloruro de carbono, tricloroetileno",
      tecnica: "GC-MS con Purge & Trap",
      limiteDeteccion: "0.1 - 0.5 μg/L",
    },
    {
      nombre: "Trihalometanos (THMs)",
      descripcion:
        "Cloroformo, bromodiclorometano, dibromoclorometano, bromoformo (subproductos de desinfección)",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.1 μg/L",
    },
    {
      nombre: "Pesticidas Organoclorados",
      descripcion: "DDT, lindano, aldrín, dieldrín, endosulfán, heptacloro",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.001 - 0.01 μg/L",
    },
    {
      nombre: "Pesticidas Organofosforados",
      descripcion:
        "Clorpirifos, malatión, paratión, diazinón, fonofos (usados en agricultura)",
      tecnica: "GC-NPD / GC-MS",
      limiteDeteccion: "0.01 - 0.05 μg/L",
    },
    {
      nombre: "Herbicidas Triazinas",
      descripcion: "Atrazina, simazina, cianazina, propazina (herbicidas comunes en maíz)",
      tecnica: "HPLC-UV / LC-MS/MS",
      limiteDeteccion: "0.1 μg/L",
    },
    {
      nombre: "Semivolátiles (SVOCs)",
      descripcion:
        "Fenoles, ftalatos, PAHs, PCBs en agua superficial y residual",
      tecnica: "GC-MS con SPE",
      limiteDeteccion: "0.1 - 1.0 μg/L",
    },
  ],
  metodologia: [
    {
      nombre: "EPA 524.2: VOCs en Agua",
      descripcion:
        "Extracción por Purge & Trap, transferencia a columna capilar DB-5ms (30m x 0.25mm x 1.4μm), detección por MS en modo scan (35-300 amu)",
      equipo: "GC-MS con Purge & Trap concentrator",
      tiempoAnalisis: "~25 min/muestra",
    },
    {
      nombre: "EPA 525.2: SVOCs en Agua",
      descripcion:
        "Extracción en fase sólida (SPE) con discos C18, elución con acetato de etilo, concentración y análisis por GC-MS",
      equipo: "GC-MS con Autosampler y módulo SPE",
      tiempoAnalisis: "~30 min/muestra + preparación",
    },
    {
      nombre: "EPA 507: Herbicidas en Agua",
      descripcion:
        "Extracción líquido-líquido con diclorometano, intercambio de solvente, análisis por HPLC-UV con columna C18",
      equipo: "HPLC-UV con detector de arreglo de diodos",
      tiempoAnalisis: "~20 min/muestra",
    },
    {
      nombre: "EPA 533: PFAS en Agua Potable",
      descripcion:
        "Extracción SPE con cartuchos WAX (Weak Anion Exchange), elución con metanol/amoniaco, análisis por LC-MS/MS en modo negativo MRM",
      equipo: "LC-MS/MS con fuente ESI",
      tiempoAnalisis: "~15 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "GC-MS con Purge & Trap",
      descripcion:
        "Sistema completo para análisis de VOCs según EPA 524.2 con autosampler de 40 viales.",
      justificacion:
        "Ofrece la sensibilidad requerida (0.1 μg/L) para cumplir con límites regulatorios estrictos en agua potable.",
    },
    {
      nombre: "LC-MS/MS Triple Cuadrupolo",
      descripcion:
        "Sistema de alta sensibilidad para PFAS, pesticidas y contaminantes emergentes.",
      justificacion:
        "Permite el análisis simultáneo de >100 compuestos con límites de detección sub-ppb.",
    },
    {
      nombre: "HPLC-DAD",
      descripcion: "Sistema robusto para herbicidas triazinas y análisis de rutina.",
      justificacion:
        "Solución rentable para laboratorios con alto volumen de muestras de agua.",
    },
  ],
  normativas: [
    {
      codigo: "EPA 524.2",
      nombre: "Measurement of Purgeable Organic Compounds in Water by GC/MS",
      organismo: "EPA (EE.UU.)",
      descripcion:
        "Método aprobado para 84 compuestos orgánicos volátiles en agua potable y superficial.",
    },
    {
      codigo: "EPA 525.2",
      nombre: "Determination of Semivolatile Organic Chemicals in Water",
      organismo: "EPA (EE.UU.)",
      descripcion: "Método para SVOCs incluyendo pesticidas, PAHs y ftalatos.",
    },
    {
      codigo: "EPA 533",
      nombre: "Determination of PFAS in Water by SPE and LC/MS/MS",
      organismo: "EPA (EE.UU.)",
      descripcion: "Método para 29 compuestos PFAS en agua potable (LOD: 1.4 - 17 ng/L).",
    },
    {
      codigo: "NOM-127-SSA1-1994",
      nombre: "Agua para uso y consumo humano",
      organismo: "SSA (México)",
      descripcion:
        "Límites permisibles de calidad y tratamientos a que debe someterse el agua para su potabilización.",
    },
    {
      codigo: "NOM-001-SEMARNAT-2021",
      nombre: "Descargas de aguas residuales",
      organismo: "SEMARNAT (México)",
      descripcion:
        "Límites máximos permisibles de contaminantes en descargas de aguas residuales.",
    },
  ],
  especificaciones: [
    {
      categoria: "GC-MS (VOCs)",
      especificaciones: [
        { parametro: "Columna", valor: "DB-5ms, 30m x 0.25mm x 1.4μm" },
        { parametro: "Rango de masa", valor: "35 - 300 amu" },
        { parametro: "LOD", valor: "0.1 μg/L" },
        { parametro: "Carr. gas", valor: "Helio o Hidrógeno" },
      ],
    },
    {
      categoria: "LC-MS/MS (PFAS)",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 100 x 2.1mm, 1.7μm" },
        { parametro: "Fuente", valor: "ESI negativo" },
        { parametro: "Transiciones", valor: "2 MRM por analito" },
        { parametro: "LOD", valor: "1 - 10 ng/L" },
      ],
    },
  ],
  consideraciones: [
    "Usar material de vidrio libre de PFAS para muestreo y almacenamiento de muestras para PFAS",
    "Preservar muestras de VOCs con HCl (pH<2) y refrigerar a 4°C",
    "Analizar muestras de VOCs dentro de 14 días de recolección",
    "Evitar contaminación cruzada usando blanco de laboratorio en cada lote",
    "Calibrar con estándares trazables NIST para mayor confiabilidad",
  ],
  metadata: {
    title: "Análisis de Calidad de Agua | Solinsa",
    description:
      "Sistemas de cromatografía para análisis de agua según EPA 524.2, 525.2, 533. Determinación de VOCs, pesticidas y PFAS.",
    keywords: [
      "análisis de agua",
      "EPA 524.2",
      "cromatografía de agua",
      "VOCs en agua",
      "PFAS en agua",
      "pesticidas en agua",
      "GC-MS agua",
      "LC-MS/MS agua",
    ],
  },
};

// ---------------------------------------------------------------------------
// Aplicación: Análisis de Suelos
// ---------------------------------------------------------------------------

export const analisisSuelosData: AplicacionDetail = {
  slug: "analisis-suelos",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Cromatografía en Análisis de Suelos y Sedimentos",
  subtitle: "Determinación de contaminantes persistentes en matrices de suelo",
  description:
    "Análisis de pesticidas, PAHs, PCBs y otros contaminantes orgánicos persistentes en suelos, sedimentos y lodos.",
  introduccion:
    "Los suelos contaminados representan un riesgo significativo para la salud humana y el ambiente. La evaluación de sitios contaminados requiere la identificación y cuantificación precisa de una amplia gama de contaminantes, desde pesticidas agrícolas hasta hidrocarburos de petróleo. La cromatografía de gases y líquidas permite detectar estos compuestos a niveles de trazas, fundamental para estudios de remediación y evaluación de riesgo.",
  parametros: [
    {
      nombre: "PAHs (Hidrocarburos Aromáticos Policíclicos)",
      descripcion:
        "Naftaleno, antraceno, fenantreno, pireno, benzo[a]pireno, benzo[a]antraceno (16 EPA PAHs)",
      tecnica: "HPLC-FLD / GC-MS",
      limiteDeteccion: "0.1 - 1 mg/kg",
    },
    {
      nombre: "PCBs (Policlorobifenilos)",
      descripcion: "Mezclas Aroclor: 1016, 1221, 1232, 1242, 1248, 1254, 1260, 1262",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.01 - 0.05 mg/kg",
    },
    {
      nombre: "Pesticidas Organoclorados",
      descripcion:
        "DDT, DDE, DDD, dieldrin, endrin, heptachlor, mirex, toxaphene, clordano",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.01 mg/kg",
    },
    {
      nombre: "Pesticidas Organofosforados",
      descripcion:
        "Diazinon, clorpirifos, paratión, malatión, fonofos, etoprop",
      tecnica: "GC-NPD / GC-MS",
      limiteDeteccion: "0.05 mg/kg",
    },
    {
      nombre: "Herbicidas Clorados",
      descripcion: "Atrazina, simazina, alaclor, metolaclor, acetochlor",
      tecnica: "GC-ECD / LC-MS/MS",
      limiteDeteccion: "0.01 mg/kg",
    },
    {
      nombre: "Dioxinas y Furanos",
      descripcion: "2,3,7,8-TCDD y 17 congéneres de dioxinas/furanos",
      tecnica: "HRGC-HRMS",
      limiteDeteccion: "0.1 - 1 ng/kg (ppt)",
    },
  ],
  metodologia: [
    {
      nombre: "EPA 3540C: Extracción Soxhlet",
      descripcion:
        "Extracción con mezcla acetona:hexano (1:1) durante 16-24 horas, concentración rotavapor y limpieza en columna silica",
      equipo: "Extractor Soxhlet + Rotavapor",
      tiempoAnalisis: "24h extracción + 2h concentración",
    },
    {
      nombre: "EPA 3545A: Extracción Presurizada (ASE)",
      descripcion:
        "Extracción acelerada con solvente a alta presión (1500 psi) y temperatura (100°C), 3 ciclos de 5 min",
      equipo: "Sistema ASE (Accelerated Solvent Extraction)",
      tiempoAnalisis: "~20 min/muestra",
    },
    {
      nombre: "EPA 3546: Extracción por Microondas",
      descripcion:
        "Extracción con microondas usando mezcla acetona:hexano (1:1), 10 min a 100°C, 100 psi",
      equipo: "Sistema de extracción por microondas",
      tiempoAnalisis: "~15 min/muestra",
    },
    {
      nombre: "EPA 8082A: Pesticidas Organoclorados por GC-ECD",
      descripcion:
        "Análisis en columna DB-5 (30m), detector de captura electrónica, calibración externa",
      equipo: "GC-ECD con autosampler",
      tiempoAnalisis: "~30 min/muestra",
    },
    {
      nombre: "EPA 8270E: Semivolátiles por GC-MS",
      descripcion:
        "Análisis en modo SIM (Selected Ion Monitoring) para pesticidas, PAHs, PCBs",
      equipo: "GC-MS con autosampler",
      tiempoAnalisis: "~40 min/muestra",
    },
    {
      nombre: "EPA 8321A: PAHs por HPLC-FLD",
      descripcion:
        "Columna C18, detección por fluorescencia (ex 260nm, em 420nm para PAHs de 4+ anillos)",
      equipo: "HPLC-FLD con autosampler",
      tiempoAnalisis: "~25 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "Sistema ASE con Autoclean",
      descripcion:
        "Extractor de solventes acelerado con capacidad de 24 muestras, colectores automáticos.",
      justificacion:
        "Reduce el tiempo de extracción de 24h (Soxhlet) a 20 min con mejor recuperación (>85%)",
    },
    {
      nombre: "GC-MS Cuádrupole",
      descripcion:
        "Sistema con detector MS y ECD para análisis simultáneo de pesticidas y PCBs.",
      justificacion:
        "Ofrece confirmación de identidad por espectro de masas, reduciendo falsos positivos",
    },
    {
      nombre: "HPLC-FLD",
      descripcion:
        "Cromatógrafo de líquidos con detector de fluorescencia para PAHs.",
      justificacion:
        "Mayor sensibilidad y selectividad para PAHs compared to UV-Vis",
    },
  ],
  normativas: [
    {
      codigo: "EPA 8082A",
      nombre: "Polychlorinated Biphenyls (PCBs) by Gas Chromatography",
      organismo: "EPA (EE.UU.)",
      descripcion:
        "Método para análisis de PCBs en suelo (Aroclors y congéneres individuales).",
    },
    {
      codigo: "EPA 8270E",
      nombre: "Semivolatile Organic Compounds by GC-MS",
      organismo: "EPA (EE.UU.)",
      descripcion:
        "Determinación de pesticidas organoclorados, organofosforados, PAHs y otros SVOCs.",
    },
    {
      codigo: "EPA 8321A",
      nombre: "Polycyclic Aromatic Hydrocarbons (PAHs) by HPLC",
      organismo: "EPA (EE.UU.)",
      descripcion: "Método para los 16 PAHs prioritarios de la EPA por HPLC-FLD.",
    },
    {
      codigo: "NOM-138-SEMARNAT/SS-2003",
      nombre: "Límites máximos permisibles de hidrocarburos en suelos",
      organismo: "SEMARNAT (México)",
      descripcion:
        "Niveles de referencia para hidrocarburos totales de petróleo (HTP) en suelos.",
    },
  ],
  especificaciones: [
    {
      categoria: "Extracción ASE",
      especificaciones: [
        { parametro: "Temperatura", valor: "100°C" },
        { parametro: "Presión", valor: "1500 psi" },
        { parametro: "Ciclos", valor: "3 × 5 min" },
        { parametro: "Solvente", valor: "Acetona:Hexano 1:1" },
      ],
    },
    {
      categoria: "GC-ECD",
      especificaciones: [
        { parametro: "Columna", valor: "DB-5, 30m x 0.25mm x 0.25μm" },
        { parametro: "Temp. inyector", valor: "250°C" },
        { parametro: "Temp. detector", valor: "300°C" },
        { parametro: "Gas make-up", valor: "Nitrógeno o Argón/Metano" },
      ],
    },
  ],
  consideraciones: [
    "Las muestras de suelo deben refrigerarse a 4°C y analizarse dentro de los 14 días de recolección",
    "Usar estándares internos deuterados para compensar variaciones de extracción",
    "Realizar blanco de método con cada lote para detectar contaminación de fondo",
    "El porcentaje de materia orgánica afecta la recuperación - considerar matrix spikes",
    "Para dioxinas, se requiere HRGC-HRMS (Alta Resolución) debido a LOD extremadamente bajos",
  ],
  metadata: {
    title: "Análisis de Suelos por Cromatografía | Solinsa",
    description:
      "Sistemas de cromatografía para análisis de suelos según EPA 8082, 8270, 8321. Determinación de pesticidas, PAHs, PCBs.",
    keywords: [
      "análisis de suelos",
      "cromatografía de suelos",
      "EPA 8082",
      "pesticidas en suelo",
      "PAHs en suelo",
      "PCBs en suelo",
      "extracción ASE",
      "remediación de suelos",
    ],
  },
};

// ---------------------------------------------------------------------------
// Aplicación: VOCs en Aire
// ---------------------------------------------------------------------------

export const vocsAireData: AplicacionDetail = {
  slug: "vocs-aire",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Determinación de VOCs en Aire Ambiente",
  subtitle: "Monitoreo de compuestos orgánicos volátiles en aire atmosférico",
  description:
    "Análisis de benceno, tolueno, xilenos, formaldehído y otros VOCs en aire ambiente, interior y de emisiones industriales.",
  introduccion:
    "Los compuestos orgánicos volátiles (VOCs) son precursores de ozono troposférico y muchos son tóxicos o carcinogénicos. El monitoreo continuo de VOCs en aire es esencial para evaluar la calidad del aire, identificar fuentes de contaminación y verificar el cumplimiento de normativas ambientales.",
  parametros: [
    {
      nombre: "BTEX",
      descripcion:
        "Benceno, tolueno, etilbenceno, o-, m-, p-xilenos (indicadores de tráfico vehicular)",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "0.1 - 0.5 μg/m³",
    },
    {
      nombre: "Hidrocarburos Alifáticos",
      descripcion: "n-hexano, n-heptano, n-octano (producto de combustión incompleta)",
      tecnica: "GC-FID",
      limiteDeteccion: "0.5 μg/m³",
    },
    {
      nombre: "Halogenados",
      descripcion:
        "Cloroformo, tetracloruro de carbono, tricloroetileno, percloroetileno",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.05 μg/m³",
    },
    {
      nombre: "Compuestos Oxigenados",
      descripcion:
        "Acetona, etanol, isopropanol, acetato de etilo (usados industriales)",
      tecnica: "GC-FID",
      limiteDeteccion: "1 μg/m³",
    },
    {
      nombre: "Terpenos",
      descripcion: "α-pineno, β-pineno, limoneno (emisiones naturales)",
      tecnica: "GC-MS",
      limiteDeteccion: "0.5 μg/m³",
    },
  ],
  metodologia: [
    {
      nombre: "EPA TO-15: Canisters",
      descripcion:
        "Muestreo en contenedores evacuated de 6L, preconcentración en criotrapa (-150°C), análisis por GC-MS",
      equipo: "GC-MS con sistema de preconcentración",
      tiempoAnalisis: "~30 min/muestra",
    },
    {
      nombre: "EPA TO-12: Tubos de Adsorción",
      descripcion:
        "Bombeo de aire a través de tubos Carbopack/Carbosieve, desorción térmica, análisis por GC-FID",
      equipo: "GC-FID con desorción térmica",
      tiempoAnalisis: "~20 min/muestra",
    },
    {
      nombre: "Muestreo Activo con Bomba",
      descripcion:
        "Flujo controlado (50-200 mL/min) por 24h, tubo de carbón activado, desorción con CS2",
      equipo: "Bomba de muestreo personal + GC-FID",
      tiempoAnalisis: "24h muestreo + 20 min análisis",
    },
    {
      nombre: "Muestreo Pasivo (Diffusive)",
      descripcion:
        "Badges difusivos para monitoreo de 7-30 días, análisis por GC-MS",
      equipo: "Radielos difusivos + GC-MS",
      tiempoAnalisis: "7-30 días muestreo + 30 min análisis",
    },
  ],
  equipos: [
    {
      nombre: "GC-MS con Preconcentrador",
      descripcion:
        "Sistema con trampa criogénica automática para análisis de canisters de aire.",
      justificacion:
        "Permite detectar VOCs a niveles de ppt (partes por trillón), necesario para aire limpio",
    },
    {
      nombre: "GC-FID con Desorción Térmica",
      descripcion:
        "Sistema para alto volumen de muestras (tubos de adsorción) para monitoreo ocupacional.",
      justificacion:
        "Solución económica para laboratorios de higiene industrial con alto throughput",
    },
  ],
  normativas: [
    {
      codigo: "EPA TO-15",
      nombre: "Determination of Volatile Organic Compounds in Air",
      organismo: "EPA (EE.UU.)",
      descripcion:
        "Método compuesto para 97 VOCs usando canisters y GC-MS.",
    },
    {
      codigo: "EPA TO-12",
      nombre: "Determination of VOCs in Air - GC Method",
      organismo: "EPA (EE.UU.)",
      descripcion: "Método para C2-C10 VOCs usando adsorción y GC-FID.",
    },
    {
      codigo: "NOM-172-SEMARNAT-2019",
      nombre: "Lineamientos para la caracterización de sitios contaminados",
      organismo: "SEMARNAT (México)",
      descripcion: "Incluye monitoreo de VOCs en aire ambiente.",
    },
  ],
  especificaciones: [
    {
      categoria: "GC-MS (TO-15)",
      especificaciones: [
        { parametro: "Columna", valor: "DB-1, 60m x 0.32mm x 1μm" },
        { parametro: "Volumen inyección", valor: "hasta 500 mL (aire)" },
        { parametro: "LOD", valor: "0.1 - 0.5 μg/m³" },
        { parametro: "Rango", valor: "C2 - C16" },
      ],
    },
  ],
  consideraciones: [
    "Calibrar el sistema de muestreo con un gas certificado de concentración conocida",
    "Los canisters deben limpiarse (evacuado y purgado) antes de cada uso",
    "Considerar la humedad del aire al calcular el volumen muestreado",
    "Para aire interior, usar protocolos específicos que consideran factores de ventilación",
  ],
  metadata: {
    title: "Análisis de VOCs en Aire | Solinsa",
    description:
      "Sistemas de cromatografía para análisis de VOCs en aire según EPA TO-15, TO-12. Monitoreo de calidad del aire.",
    keywords: [
      "VOCs en aire",
      "calidad del aire",
      "EPA TO-15",
      "benceno en aire",
      "monitoreo atmosférico",
      "GC-MS aire",
      "canisters de aire",
    ],
  },
};

// ---------------------------------------------------------------------------
// Aplicación: PFAS Forever Chemicals
// ---------------------------------------------------------------------------

export const pfasAnalisisData: AplicacionDetail = {
  slug: "pfas-analisis",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Análisis de PFAS (Forever Chemicals)",
  subtitle: "Determinación de sustancias perfluoroalquiladas y polifluoroalquiladas",
  description:
    "Análisis de PFAS en agua potable, superficial, residual y matrices ambientales mediante LC-MS/MS.",
  introduccion:
    "Los PFAS (Per- and Polyfluoroalkyl Substances) son llamados 'forever chemicals' debido a su persistencia en el ambiente. La EPA ha establecido límites sumamente estrictos para PFAS en agua potable (4 ppt para PFOA y PFOS), requiriendo equipos de ultra alta sensibilidad y protocolos estrictos para evitar contaminación de fondo.",
  parametros: [
    {
      nombre: "PFOA (Ácido Perfluorooctanoico)",
      descripcion: "C8, uno de los PFAS más regulados",
      tecnica: "LC-MS/MS ESI(-)",
      limiteDeteccion: "0.5 - 2 ng/L (ppt)",
    },
    {
      nombre: "PFOS (Ácido Perfluorooctanosulfónico)",
      descripcion: "C8, uno de los PFAS más regulados",
      tecnica: "LC-MS/MS ESI(-)",
      limiteDeteccion: "0.5 - 2 ng/L (ppt)",
    },
    {
      nombre: "GenX (HFPO-DA)",
      descripcion:
        "Sustituto de PFOA, emergente de preocupación",
      tecnica: "LC-MS/MS ESI(-)",
      limiteDeteccion: "1 ng/L",
    },
    {
      nombre: "PFBS, PFHxS, PFNA",
      descripcion: "PFAS de cadena corta y media",
      tecnica: "LC-MS/MS ESI(-)",
      limiteDeteccion: "0.5 - 5 ng/L",
    },
    {
      nombre: "Precursor PFAS",
      descripcion: "Fluorotelómeros, fosfatos de PFAS",
      tecnica: "LC-MS/MS ESI(-)",
      limiteDeteccion: "1 - 10 ng/L",
    },
  ],
  metodologia: [
    {
      nombre: "EPA 533: PFAS en Agua Potable",
      descripcion:
        "Extracción SPE con cartuchos WAX, elución con NH4OH en metanol, análisis LC-MS/MS en negativo",
      equipo: "LC-MS/MS triple quad con fuente ESI",
      tiempoAnalisis: "~15 min/muestra + prep SPE",
    },
    {
      nombre: "EPA 537.1: PFAS en Agua",
      descripcion:
        "Método isótopo dilución, 18 PFAS, SPE WAX, LC-MS/MS con estándares internos marcados",
      equipo: "LC-MS/MS triple quad",
      tiempoAnalisis: "~20 min/muestra",
    },
    {
      nombre: "EPA 1633: PFAS en Suelo/Sedimento",
      descripcion:
        "Extracción con metanol, limpieza ENVI-Carb, análisis LC-MS/MS",
      equipo: "LC-MS/MS + Sistema de extracción",
      tiempoAnalisis: "~30 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "LC-MS/MS Triple Quad Ultra Sensible",
      descripcion:
        "Sistema con fuente ESI de bajo flujo, optimizado para PFAS (tubing PEEK, vials PP)",
      justificacion:
        "Necesario para lograr LODs de 0.5 ppt requeridos por EPA Health Advisories",
    },
    {
      nombre: "Sistema SPE Libre de PFAS",
      descripcion:
        "Módulo de extracción en fase sólida certificado libre de PFAS",
      justificacion:
        "La contaminación de laboratorio es el mayor desafío en análisis de PFAS",
    },
  ],
  normativas: [
    {
      codigo: "EPA 533",
      nombre: "Determination of PFAS in Water by SPE and LC/MS/MS",
      organismo: "EPA (EE.UU.)",
      descripcion:
        "Método para 29 PFAS en agua potable con LODs de 0.02 - 17 ng/L.",
    },
    {
      codigo: "EPA 537.1",
      nombre: "Determination of Selected PFAS in Water by SPE and LC/MS/MS",
      organismo: "EPA (EE.UU.)",
      descripcion: "Método validado para 18 PFAS usando isotope dilution.",
    },
    {
      codigo: "Health Advisory PFOA/PFOS",
      nombre: "EPA Health Advisory",
      organismo: "EPA (EE.UU.)",
      descripcion: "Nivel de referencia: 4 ppt (0.004 μg/L) para PFOA y PFOS.",
    },
  ],
  especificaciones: [
    {
      categoria: "LC-MS/MS",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 100 x 2.1mm, 1.7μm" },
        { parametro: "Fuente", valor: "ESI negativo" },
        { parametro: "Curtain gas", valor: "Nitrógeno, ultra puro" },
        { parametro: "MRM", valor: "2 transiciones por PFAS" },
        { parametro: "LOD", valor: "0.5 - 5 ppt" },
      ],
    },
  ],
  consideraciones: [
    "CRUCIAL: Usar únicamente material certificado libre de PTFE/PFAS (tubing PEEK, vials PP, juntas PTFE-free)",
    "Preparar blancos de laboratorio con cada lote para monitorear contaminación de fondo",
    "Usar agua LC-MS grado y solventes certificados PFAS-free",
    "Evitar ropa repellente a agua (Gore-Tex) en el laboratorio",
    "Separar el área de análisis de PFAS de otros análisis para prevenir contaminación cruzada",
  ],
  metadata: {
    title: "Análisis de PFAS | Solinsa",
    description:
      "Sistemas LC-MS/MS para análisis de PFAS según EPA 533, 537.1. Determinación de forever chemicals en agua.",
    keywords: [
      "PFAS",
      "forever chemicals",
      "PFOA",
      "PFOS",
      "EPA 533",
      "LC-MS/MS PFAS",
      "contaminantes emergentes",
      "agua potable PFAS",
    ],
  },
};

// ---------------------------------------------------------------------------
// Aplicación: PAH en Sedimentos
// ---------------------------------------------------------------------------

export const pahSedimentosData: AplicacionDetail = {
  slug: "pah-sedimentos",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Hidrocarburos Aromáticos Policíclicos (PAHs)",
  subtitle: "Análisis de PAHs en sedimentos, suelo y muestras ambientales",
  description:
    "Determinación de los 16 PAHs prioritarios de la EPA mediante HPLC-FLD y GC-MS.",
  introduccion:
    "Los PAHs son contaminantes formados durante la combustión incompleta de materia orgánica. Varios son carcinogénicos (benzo[a]pireno) y bioacumulativos. El análisis de PAHs en sedimentos es fundamental para evaluar la contaminación de cuerpos de agua y riesgos ecológicos.",
  parametros: [
    {
      nombre: "PAHs Ligeros (2-3 anillos)",
      descripcion:
        "Naftaleno, acenaftileno, acenafteno, fluoreno, fenantreno, antraceno",
      tecnica: "HPLC-UV / GC-MS",
      limiteDeteccion: "0.1 mg/kg",
    },
    {
      nombre: "PAHs Pesados (4-6 anillos)",
      descripcion:
        "Fluoranteno, pireno, benzo[a]antraceno, criseno, benzo[b]fluoranteno, benzo[k]fluoranteno, benzo[a]pireno, dibenzo[a,h]antraceno, indeno[1,2,3-cd]pireno, benzo[ghi]perileno",
      tecnica: "HPLC-FLD / GC-MS",
      limiteDeteccion: "0.01 - 0.1 mg/kg",
    },
  ],
  metodologia: [
    {
      nombre: "EPA 8321A: PAHs por HPLC-FLD",
      descripcion:
        "Extracción Soxhlet (DCM), limpieza silica gel, columna C18 con gradiente ACN:agua",
      equipo: "HPLC-FLD",
      tiempoAnalisis: "~25 min/muestra",
    },
    {
      nombre: "EPA 8270E: PAHs por GC-MS",
      descripcion:
        "Extracción con DCM, análisis en modo SIM para mayor sensibilidad",
      equipo: "GC-MS",
      tiempoAnalisis: "~30 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "HPLC-FLD",
      descripcion:
        "Sistema con detector de fluorescencia programable para múltiples longitudes de onda",
      justificacion:
        "Mayor sensibilidad y selectividad para PAHs pesados carcinogénicos",
    },
  ],
  normativas: [
    {
      codigo: "EPA 8321A",
      nombre: "PAHs by HPLC",
      organismo: "EPA (EE.UU.)",
      descripcion: "Método para los 16 PAHs prioritarios por HPLC-FLD.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC-FLD",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 250 x 4.6mm, 5μm" },
        { parametro: "Gradiente", valor: "ACN:agua 50:50 → 100:0" },
        { parametro: "FLD programable", valor: "Ex/Em múltiples tiempos" },
      ],
    },
  ],
  consideraciones: [
    "Los PAHs son fotosensibles - proteger muestras de luz durante preparación",
    "Usar vidrio ámbar para almacenamiento de extractos",
  ],
  metadata: {
    title: "Análisis de PAHs | Solinsa",
    description:
      "Sistemas de cromatografía para análisis de PAHs según EPA 8321. Determinación de hidrocarburos aromáticos policíclicos.",
    keywords: [
      "PAHs",
      "hidrocarburos aromáticos",
      "benzo[a]pireno",
      "EPA 8321",
      "HPLC-FLD",
      "sedimentos contaminados",
    ],
  },
};

// ---------------------------------------------------------------------------
// Aplicación: Pesticidas Organoclorados
// ---------------------------------------------------------------------------

export const pesticidasOrganocloradosData: AplicacionDetail = {
  slug: "pesticidas-organoclorados",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Pesticidas Organoclorados (COPs)",
  subtitle: "Análisis de plaguicidas organoclorados persistentes",
  description:
    "Determinación de DDT, lindano, endosulfán y otros pesticidas organoclorados en matrices ambientales.",
  introduccion:
    "Los pesticidas organoclorados (COPs) fueron prohibidos internacionalmente por el Convenio de Estocolmo debido a su persistencia, bioacumulación y toxicidad. A pesar de esto, continúan detectándose en suelos y sedimentos décadas después de su aplicación.",
  parametros: [
    {
      nombre: "DDT y Metabolitos",
      descripcion: "p,p'-DDT, p,p'-DDE, p,p'-DDD (o,p'- isómeros también)",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.01 mg/kg",
    },
    {
      nombre: "Ciclodienos",
      descripcion:
        "Aldrín, dieldrín, endrín, heptacloro, heptacloro epóxido",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.01 mg/kg",
    },
    {
      nombre: "Hexaclorociclohexanos",
      descripcion: "α-HCH, β-HCH, γ-HCH (lindano), δ-HCH",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.005 mg/kg",
    },
    {
      nombre: "Otros COPs",
      descripcion: "Endosulfán I, II, sulfato de endosulfán, mirex, toxafeno",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.01 mg/kg",
    },
  ],
  metodologia: [
    {
      nombre: "EPA 8081B: Pesticidas Organoclorados",
      descripcion:
        "Extracción Soxhlet con hexano:acetona (1:1), limpieza Florisil, análisis GC-ECD",
      equipo: "GC-ECD",
      tiempoAnalisis: "~30 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "GC-ECD con Autosampler",
      descripcion:
        "Cromatógrafo de gases con detector de captura electrónica",
      justificacion:
        "El ECD ofrece sensibilidad excepcional para compuestos halogenados (femtogramos)",
    },
  ],
  normativas: [
    {
      codigo: "EPA 8081B",
      nombre: "Organochlorine Pesticides by Gas Chromatography",
      organismo: "EPA (EE.UU.)",
      descripcion: "Método para pesticidas organoclorados en suelo, sedimento y agua.",
    },
  ],
  especificaciones: [
    {
      categoria: "GC-ECD",
      especificaciones: [
        { parametro: "Columna", valor: "DB-5, 30m x 0.25mm x 0.25μm" },
        { parametro: "Temp. detector", valor: "300°C" },
        { parametro: "Makeup gas", valor: "Nitrógeno o Ar/CH4" },
      ],
    },
  ],
  consideraciones: [
    "Los COPs son muy estables - persisten en extractos por semanas si se almacenan apropiadamente",
    "Usar estándares internos deuterados para compensar pérdidas en limpieza Florisil",
  ],
  metadata: {
    title: "Análisis de Pesticidas Organoclorados | Solinsa",
    description:
      "Sistemas de cromatografía para análisis de COPs según EPA 8081. Determinación de pesticidas organoclorados persistentes.",
    keywords: [
      "pesticidas organoclorados",
      "COPs",
      "DDT",
      "lindano",
      "EPA 8081",
      "GC-ECD",
      "Convenio de Estocolmo",
    ],
  },
};

// ---------------------------------------------------------------------------
// Aplicación: Herbicidas Triazinas
// ---------------------------------------------------------------------------

export const herbicidasTriazinasData: AplicacionDetail = {
  slug: "herbicidas-triazinas",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Herbicidas Triazinas en Agua y Suelo",
  subtitle: "Análisis de atrazina, simazina y herbicidas relacionados",
  description:
    "Determinación de herbicidas triazinas en agua superficial, subterránea y suelo.",
  introduccion:
    "Las triazinas (atrazina, simazina, cianazina) son herbicidas ampliamente usados en cultivos de maíz y sorgo. Son móviles en suelo y frecuentemente detectados en agua subterránea. Atrazina está clasificada como posible carcinógeno humano.",
  parametros: [
    {
      nombre: "Clorotriazinas",
      descripcion: "Atrazina, simazina, cianazina, propazina",
      tecnica: "HPLC-UV / LC-MS/MS",
      limiteDeteccion: "0.1 μg/L (agua)",
    },
    {
      nombre: "Metiltiotriazinas",
      descripcion: "Ametrina, prometrina, terbutrina",
      tecnica: "HPLC-UV / LC-MS/MS",
      limiteDeteccion: "0.1 μg/L",
    },
  ],
  metodologia: [
    {
      nombre: "EPA 507: Herbicidas en Agua",
      descripcion:
        "Extracción LLE con diclorometano, intercambio a metanol, HPLC-UV",
      equipo: "HPLC-UV",
      tiempoAnalisis: "~20 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "HPLC-UV",
      descripcion:
        "Sistema con detector UV a 220-254 nm para triazinas",
      justificacion:
        "Solución económica para monitoreo rutinario de triazinas en agua",
    },
  ],
  normativas: [
    {
      codigo: "EPA 507",
      nombre: "Herbicides in Drinking Water by HPLC-UV",
      organismo: "EPA (EE.UU.)",
      descripcion:
        "Método para triazinas y otros herbicidas en agua potable por HPLC-UV.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC-UV",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 250 x 4.6mm, 5μm" },
        { parametro: "Detector UV", valor: "220 nm" },
        { parametro: "Móvil", valor: "ACN:agua con buffer fosfato" },
      ],
    },
  ],
  consideraciones: [
    "Atrazina tiene un MCL (Máximo Nivel Contaminante) de 3 μg/L en agua potable (EPA)",
    "El pH del agua afecta la estabilidad de triazinas - preservar con refrigeración",
  ],
  metadata: {
    title: "Análisis de Herbicidas Triazinas | Solinsa",
    description:
      "Sistemas de cromatografía para análisis de triazinas según EPA 507. Determinación de atrazina, simazina y herbicidas relacionados.",
    keywords: [
      "triazinas",
      "atrazina",
      "simazina",
      "herbicidas",
      "EPA 507",
      "HPLC-UV",
      "agua subterránea",
    ],
  },
};

// ---------------------------------------------------------------------------
// Aplicación: Contaminantes Emergentes
// ---------------------------------------------------------------------------

export const contaminantesEmergentesData: AplicacionDetail = {
  slug: "contaminantes-emergentes",
  industria: "Medio Ambiente",
  industriaSlug: "ambiente",
  title: "Contaminantes Emergentes (ECs)",
  subtitle:
    "Análisis de fármacos, hormonas y productos de cuidado personal en aguas residuales",
  description:
    "Determinación de contaminantes de preocupación emergente (CECs) en aguas residuales y superficiales mediante LC-MS/MS.",
  introduccion:
    "Los contaminantes emergentes incluyen fármacos, hormonas, antibióticos y productos de cuidado personal que no están regulados convencionalmente pero representan riesgos potenciales para ecosistemas y salud humana. Las plantas de tratamiento de aguas residuales no los remueven completamente, terminando en ríos y lagos.",
  parametros: [
    {
      nombre: "Fármacos",
      descripcion:
        "Ibuprofeno, diclofenaco, naproxeno, carbamazepina, diazepam, cafeína",
      tecnica: "LC-MS/MS ESI(+)",
      limiteDeteccion: "1 - 10 ng/L",
    },
    {
      nombre: "Antibióticos",
      descripcion:
        "Sulfonamidas, tetraciclinas, fluoroquinolonas, macrólidos",
      tecnica: "LC-MS/MS ESI(+)",
      limiteDeteccion: "1 - 20 ng/L",
    },
    {
      nombre: "Hormonas",
      descripcion:
        "Estradiol, estrona, estriol, etinilestradiol, testosterona",
      tecnica: "LC-MS/MS ESI(+)",
      limiteDeteccion: "0.1 - 1 ng/L",
    },
    {
      nombre: "PPCPs (Personal Care Products)",
      descripcion:
        "Triclosán, galaxolide, tonalide, filtros UV",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "1 - 10 ng/L",
    },
  ],
  metodologia: [
    {
      nombre: "EPA 1694: Fármacos y PPCPs en Agua",
      descripcion:
        "SPE Oasis HLB, elución con metanol, análisis LC-MS/MS con 2 transiciones MRM por analito",
      equipo: "LC-MS/MS triple quad",
      tiempoAnalisis: "~20 min/muestra + SPE",
    },
  ],
  equipos: [
    {
      nombre: "LC-MS/MS Triple Quad",
      descripcion:
        "Sistema con capacidad de análisis positivo/negativo rápido (<20ms)",
      justificacion:
        "Necesario para análisis simultáneo de cientos de contaminantes con diferentes propiedades",
    },
  ],
  normativas: [
    {
      codigo: "EPA 1694",
      nombre:
        "Pharmaceuticals and Personal Care Products in Water by SPE-LC/MS/MS",
      organismo: "EPA (EE.UU.)",
      descripcion:
        "Método para >200 fármacos y PPCPs en agua, suelo, sedimento, biosólidos.",
    },
  ],
  especificaciones: [
    {
      categoria: "LC-MS/MS",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 100 x 2.1mm, 1.7μm" },
        { parametro: "ESI", valor: "Positivo/Negativo rápido" },
        { parametro: "Canales MRM", valor: "Hasta 500" },
      ],
    },
  ],
  consideraciones: [
    "Usar estándares internos isotopicamente labeled para cuantificación precisa",
    "Las muestras de aguas residuales deben preservarse con NaN3 para prevenir biodegradación",
  ],
  metadata: {
    title: "Análisis de Contaminantes Emergentes | Solinsa",
    description:
      "Sistemas LC-MS/MS para análisis de contaminantes emergentes según EPA 1694. Fármacos, hormonas y PPCPs en agua.",
    keywords: [
      "contaminantes emergentes",
      "ECs",
      "fármacos en agua",
      "EPA 1694",
      "PPCPs",
      "hormonas",
      "antibióticos",
      "LC-MS/MS aguas residuales",
    ],
  },
};

// ---------------------------------------------------------------------------
// APLICACIONES DE ALIMENTOS
// ---------------------------------------------------------------------------

export const pesticidasAlimentosData: AplicacionDetail = {
  slug: "pesticidas-alimentos",
  industria: "Alimentos y Bebidas",
  industriaSlug: "alimentos",
  title: "Residuos de Pesticidas en Alimentos",
  subtitle: "Análisis multiresiduo de pesticidas en frutas, verduras y granos",
  description:
    "Determinación simultánea de cientos de pesticidas en matrices alimentarias mediante LC-MS/MS y GC-MS according to SANTE/12682 guidelines.",
  introduccion:
    "El análisis multiresiduo de pesticidas es esencial para cumplir con los LMRs (Límites Máximos de Residuos) establecidos por CODEX, FDA y EFSA. Los métodos modernos como QuEChERS permiten la extracción rápida de múltiples clases de pesticidas con una recuperación consistente.",
  parametros: [
    {
      nombre: "Organofosforados",
      descripcion:
        "Clorpirifos, malatión, paratión, diazinón, dimetoato (usados en frutas y verduras)",
      tecnica: "GC-NPD / GC-MS",
      limiteDeteccion: "0.001 - 0.01 mg/kg",
    },
    {
      nombre: "Organoclorados",
      descripcion:
        "DDT, lindano, endosulfán, hexaclorobenceno (persistentes en suelo)",
      tecnica: "GC-ECD / GC-MS",
      limiteDeteccion: "0.001 mg/kg",
    },
    {
      nombre: "Piretroides",
      descripcion:
        "Permetrina, cipermetrina, deltametrina, lambda-cihalotrina (usados en vegetales)",
      tecnica: "GC-MS / LC-MS/MS",
      limiteDeteccion: "0.005 mg/kg",
    },
    {
      nombre: "Neonicotinoides",
      descripcion: "Imidacloprid, tiametoxam, clotianidin (usados en semillas)",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "0.001 mg/kg",
    },
    {
      nombre: "Fungicidas Triazólicos",
      descripcion: "Tebuconazol, propiconazol, difenoconazol (usados en cereales)",
      tecnica: "GC-MS / LC-MS/MS",
      limiteDeteccion: "0.01 mg/kg",
    },
    {
      nombre: "Carbamatos",
      descripcion: "Carbaril, metomil, oxamil (usados en frutas)",
      tecnica: "HPLC-FLD",
      limiteDeteccion: "0.01 mg/kg",
    },
  ],
  metodologia: [
    {
      nombre: "QuEChERS: Quick Easy Cheap Effective Rugged Safe",
      descripcion:
        "Extracción con ACN:agua (1:1), salting-out con MgSO4/NaCl, limpieza dispersive SPE (PSA, C18, GCB)",
      equipo: "HPLC-MS/MS con autosampler",
      tiempoAnalisis: "~15 min/muestra + prep",
    },
    {
      nombre: "SANTE/12682 Multiresiduo",
      descripcion:
        "Validación según guidelines europeos: recoveries 70-120%, RSD <20%, LOD <0.01 mg/kg",
      equipo: "GC-MS + LC-MS/MS",
      tiempoAnalisis: "~20 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "LC-MS/MS Triple Quad con ESI+/-",
      descripcion:
        "Sistema con source switching rápido (<20ms) para máximo coverage",
      justificacion:
        "Permite análisis simultáneo de >500 pesticidas con LODs <0.01 mg/kg",
    },
    {
      nombre: "GC-MS/MS Triple Quad",
      descripcion:
        "Sistema con CI (Chemical Ionization) para pesticidas termolábiles",
      justificacion:
        "Mejor sensibilidad para pesticidas organoclorados y piretroides",
    },
  ],
  normativas: [
    {
      codigo: "SANTE/12682",
      nombre: "Guidance on Analytical Quality Control",
      organismo: "EFSA (UE)",
      descripcion:
        "Guidelines europeos para validación de métodos multiresiduo de pesticidas.",
    },
    {
      codigo: "FDA PAM",
      nombre: "Pesticide Analytical Manual",
      organismo: "FDA (EE.UU.)",
      descripcion:
        "Métodos oficiales de FDA para análisis de pesticidas en alimentos.",
    },
    {
      codigo: "NOM-251-SSA1-2009",
      nombre: "Prácticas de higiene para el proceso de alimentos",
      organismo: "SSA (México)",
      descripcion:
        "Normativa mexicana que incluye límites de pesticidas en alimentos.",
    },
  ],
  especificaciones: [
    {
      categoria: "LC-MS/MS",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 100 x 2.1mm, 1.7μm" },
        { parametro: "ESI", valor: "Positivo/Negativo rápido" },
        { parametro: "MRM", valor: "2 transiciones por analito" },
        { parametro: "Cobertura", valor: ">500 pesticidas" },
      ],
    },
    {
      categoria: "GC-MS/MS",
      especificaciones: [
        { parametro: "Columna", valor: "DB-5MS UI, 30m x 0.25mm x 0.25μm" },
        { parametro: "Inyector", valor: "PTV o Splitless" },
        { parametro: "Temperatura", valor: "Programable hasta 350°C" },
      ],
    },
  ],
  consideraciones: [
    "Usar mezclas de estándares isotópicamente labeled para cada clase de pesticida",
    "Para matrices con alto contenido de clorofila (perejil, espinaca), usar GCB en limpieza d-SPE",
    "Validar el método con al menos 20 matrices diferentes según SANTE guidelines",
    "Los picos matrix-matched pueden variar - usar calibración matrix-matched para cuantificación precisa",
  ],
  metadata: {
    title: "Análisis de Pesticidas en Alimentos | Solinsa",
    description:
      "Sistemas LC-MS/MS y GC-MS/MS para análisis multiresiduo de pesticidas según SANTE/12682. Determinación de >500 pesticidas en alimentos.",
    keywords: [
      "pesticidas en alimentos",
      "análisis multiresiduo",
      "QuEChERS",
      "SANTE/12682",
      "LC-MS/MS pesticidas",
      "LMR",
      "CODEX alimentario",
      "inocuidad alimentaria",
    ],
  },
};

export const aminoacidosBebidasData: AplicacionDetail = {
  slug: "aminoacidos-bebidas",
  industria: "Alimentos y Bebidas",
  industriaSlug: "alimentos",
  title: "Perfil de Aminoácidos en Bebidas",
  subtitle: "Cuantificación de aminoácidos en bebidas enriquecidas y suplementos",
  description:
    "Análisis cuantitativo de aminoácidos libres y proteicos en bebidas nutrimentales, jugos y suplementos mediante HPLC con derivatización pre-columna.",
  introduccion:
    "Los aminoácidos esenciales son componentes importantes en bebidas nutrimentales y suplementos deportivos. El análisis preciso de aminoácidos es crítico para el etiquetado nutricional y verificación de claims de contenido proteico.",
  parametros: [
    {
      nombre: "Aminoácidos Esenciales",
      descripcion:
        "Valina, leucina, isoleucina, lisina, metionina, treonina, triptófano, fenilalanina",
      tecnica: "HPLC-FLD con derivatización OPA",
      limiteDeteccion: "1 - 5 mg/L",
    },
    {
      nombre: "Aminoácidos No Esenciales",
      descripcion:
        "Ácido aspártico, ácido glutámico, serina, glicina, alanina, prolina, tirosina, cisteína",
      tecnica: "HPLC-FLD",
      limiteDeteccion: "1 mg/L",
    },
    {
      nombre: "Aminoácidos Ramificados (BCAAs)",
      descripcion: "Leucina, isoleucina, valina (común en bebidas deportivas)",
      tecnica: "HPLC-UV (220nm)",
      limiteDeteccion: "10 mg/L",
    },
  ],
  metodologia: [
    {
      nombre: "Derivatización OPA/FMOC",
      descripcion:
        "OPA para aminoácidos primarios, FMOC para secundarios, inyección automática en pre-columna",
      equipo: "HPLC-FLD con autosampler y derivatizador on-line",
      tiempoAnalisis: "~30 min/muestra",
    },
    {
      nombre: "HPLC-UV Directo",
      descripcion:
        "Para BCAAs en bebidas claras, sin derivatización, detección UV a 210nm",
      equipo: "HPLC-UV",
      tiempoAnalisis: "~15 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "HPLC-FLD con Autosampler",
      descripcion:
        "Sistema con derivatizador on-line y detector de fluorescencia programable",
      justificacion:
        "Automatización completa de preparación de muestras con sensibilidad femtomolar",
    },
  ],
  normativas: [
    {
      codigo: "AOAC 994.12",
      nombre: "Amino Acids in Foods",
      organismo: "AOAC International",
      descripcion:
        "Método oficial para análisis de aminoácidos en alimentos y bebidas.",
    },
    {
      codigo: "NOM-086-SSA1-1994",
      nombre: "Bebidas y Alimentos",
      organismo: "SSA (México)",
      descripcion: "Especificaciones nutrimentales para alimentos y bebidas.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC-FLD",
      especificaciones: [
        { parametro: "Columna", valor: "C18 AA, 250 x 4.6mm, 5μm" },
        { parametro: "Ex/Em", valor: "340nm/450nm (OPA), 266nm/305nm (FMOC)" },
        { parametro: "Volumen inyección", valor: "1 - 10 μL" },
      ],
    },
  ],
  consideraciones: [
    "OPA-derivados son inestables - análisis inmediato post-derivatización (<2 min)",
    "Usar tampón borato pH 10.2 para óptima reacción de OPA",
    "Para bebidas con alto contenido de azúcar, diluir 1:10 con agua ultrapura antes de inyección",
  ],
  metadata: {
    title: "Análisis de Aminoácidos en Bebidas | Solinsa",
    description:
      "Sistemas HPLC-FLD para análisis de aminoácidos en bebidas. Derivatización OPA/FMOC automática.",
    keywords: [
      "aminoácidos",
      "HPLC-FLD",
      "OPA derivatización",
      "bebidas nutrimentales",
      "suplementos deportivos",
      "perfil de aminoácidos",
      "AOAC 994.12",
    ],
  },
};

export const micotoxinasData: AplicacionDetail = {
  slug: "micotoxinas",
  industria: "Alimentos y Bebidas",
  industriaSlug: "alimentos",
  title: "Micotoxinas en Granos y Cereales",
  subtitle: "Análisis de aflatoxinas, ocratoxina, fumonisinas y tricotecenos",
  description:
    "Determinación de micotoxinas producidas por hongos en granos, nueces, especias y productos derivados mediante HPLC-FLD y LC-MS/MS.",
  introduccion:
    "Las micotoxinas son compuestos tóxicos producidos por hongos del género Aspergillus, Penicillium y Fusarium. Representan un riesgo significativo para la salud pública y están estrictamente reguladas en alimentos a nivel mundial.",
  parametros: [
    {
      nombre: "Aflatoxinas (B1, B2, G1, G2)",
      descripcion:
        "Carcinogénicas, en maíz, maní, pistachos, higos secos. MRL: 2-10 μg/kg",
      tecnica: "HPLC-FLD con derivatización post-columna",
      limiteDeteccion: "0.1 μg/kg",
    },
    {
      nombre: "Ocratoxina A",
      descripcion:
        "Nefrotóxica, en cereales, café, cacao. MRL: 5 μg/kg",
      tecnica: "HPLC-FLD",
      limiteDeteccion: "0.5 μg/kg",
    },
    {
      nombre: "Fumonisinas (B1, B2)",
      descripcion:
        "Leucotóxicas, en maíz. MRL: 1000-4000 μg/kg",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "10 μg/kg",
    },
    {
      nombre: "Tricotecenos (DON, T-2, HT-2, ZEA)",
      descripcion:
        "Inmunosupresoras, en trigo, cebada. MRL: 200-1750 μg/kg",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "5 μg/kg",
    },
    {
      nombre: "Patulina",
      descripcion: "En manzanas, jugos de manzana. MRL: 50 μg/kg",
      tecnica: "HPLC-UV",
      limiteDeteccion: "5 μg/kg",
    },
  ],
  metodologia: [
    {
      nombre: "AOAC 2000.08: Aflatoxinas",
      descripcion:
        "Extracción con metanol:agua, cleanup IAC, derivatización post-columna con KOBr",
      equipo: "HPLC-FLD con derivatizador PC",
      tiempoAnalisis: "~20 min/muestra",
    },
    {
      nombre: "AOAC 2009.01: Ocratoxina A",
      descripcion:
        "Extracción con bicarbonato de sodio, cleanup IAC o HPLC, detección FLD",
      equipo: "HPLC-FLD",
      tiempoAnalisis: "~15 min/muestra",
    },
    {
      nombre: "LC-MS/MS Multi-micotoxinas",
      descripcion:
        "Método multiresiduo para >50 micotoxinas usando SPE Mycosep",
      equipo: "LC-MS/MS triple quad",
      tiempoAnalisis: "~15 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "HPLC-FLD con Derivatizador PC",
      descripcion:
        "Sistema con reactor post-columna (bromo, iodina, ácido) para derivatización en línea",
      justificacion:
        "Máxima sensibilidad y especificidad para aflatoxinas según regulaciones",
    },
  ],
  normativas: [
    {
      codigo: "CE 1881/2006",
      nombre: "Contaminantes en productos alimenticios",
      organismo: "UE",
      descripcion:
        "Reglamento que establece niveles máximos de micotoxinas en alimentos.",
    },
    {
      codigo: "NOM-188-SSA1-2011",
      nombre: "Aflatoxinas en alimentos",
      organismo: "SSA (México)",
      descripcion:
        "Límites máximos permitidos de aflatoxinas M1, B1, B2, G1, G2 en alimentos.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC-FLD PC",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 150 x 4.6mm, 3μm" },
        { parametro: "Temperatura columna", valor: "40°C" },
        { parametro: "Flujo", valor: "1.0 mL/min" },
        { parametro: "Reactivos", valor: "KOBr, ácido trifluoroacético" },
      ],
    },
  ],
  consideraciones: [
    "Las aflatoxinas son fotosensibles - proteger extractos de luz UV",
    "Usar vidrio ámbar para almacenamiento de estándares y muestras",
    "Para alimentos grasos (nueces, maní), añadir paso de defatación previa a la extracción",
  ],
  metadata: {
    title: "Análisis de Micotoxinas | Solinsa",
    description:
      "Sistemas HPLC-FLD para análisis de micotoxinas según AOAC 2000.08, 2009.01. Aflatoxinas, ocratoxina, fumonisinas.",
    keywords: [
      "micotoxinas",
      "aflatoxinas",
      "ocratoxina",
      "fumonisinas",
      "HPLC-FLD",
      "AOAC 2000.08",
      "granos",
      "cereales",
      "maní",
    ],
  },
};

export const aditivosAlimentariosData: AplicacionDetail = {
  slug: "aditivos-alimentarios",
  industria: "Alimentos y Bebidas",
  industriaSlug: "alimentos",
  title: "Aditivos Alimentarios",
  subtitle: "Análisis de conservantes, colorantes y edulcorantes en alimentos procesados",
  description:
    "Determinación cualitativa y cuantitativa de aditivos autorizados en alimentos procesados mediante HPLC-UV y LC-MS/MS.",
  introduccion:
    "Los aditivos alimentarios incluyen conservantes, colorantes artificiales, edulcorantes artificiales y antioxidantes. El análisis es necesario para verificar cumplimiento con normativas de rotulado y límites de uso permitido.",
  parametros: [
    {
      nombre: "Conservantes",
      descripcion:
        "Benzoatos, sorbatos, parabenos, nitritos, sulfitos en bebidas y alimentos procesados",
      tecnica: "HPLC-UV",
      limiteDeteccion: "1 - 10 mg/kg",
    },
    {
      nombre: "Colorantes Artificiales",
      descripcion:
        "Tartrazina (E102), amarillo ocaso (E110), rojo allura (E129), azul brillante (E133)",
      tecnica: "HPLC-UV DAD",
      limiteDeteccion: "0.5 - 5 mg/kg",
    },
    {
      nombre: "Edulcorantes Artificiales",
      descripcion: "Aspartame, sucralosa, acesulfame-K, sacarina en refrescos y postres",
      tecnica: "HPLC-UV / RI",
      limiteDeteccion: "1 - 10 mg/kg",
    },
    {
      nombre: "Antioxidantes",
      descripcion: "BHA, BHT, TBHQ en aceites y grasas",
      tecnica: "HPLC-FLD",
      limiteDeteccion: "1 mg/kg",
    },
  ],
  metodologia: [
    {
      nombre: "Extracción para Conservantes",
      descripcion:
        "Extracción con metanol:agua (80:20), ultrasonido, filtración 0.45μm",
      equipo: "HPLC-UV",
      tiempoAnalisis: "~15 min/muestra",
    },
    {
      nombre: "AOAC 983.30: Colorantes",
      descripcion:
        "Extracción con amonia:etanol, separación por poliamida RP, detección UV-Vis",
      equipo: "HPLC-DAD",
      tiempoAnalisis: "~25 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "HPLC-DAD",
      descripcion:
        "Sistema con detector de arreglo de diodos para identificación por espectro UV-Vis",
      justificacion:
        "Confirmación de identidad de colorantes por fingerprint espectral 190-800nm",
    },
  ],
  normativas: [
    {
      codigo: "CODEX STAN 192-1995",
      nombre: "Food Additives",
      organismo: "CODEX Alimentarius",
      descripcion:
        "Norma internacional del Codex para uso de aditivos alimentarios.",
    },
    {
      codigo: "NOM-051-SCFI-1994",
      nombre: "Aditivos alimentarios",
      organismo: "SCFI (México)",
      descripcion: "Especificaciones de aditivos permitidos en alimentos.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC-DAD",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 250 x 4.6mm, 5μm" },
        { parametro: "DAD rango", valor: "190 - 800 nm" },
        { parametro: "Gradiente", valor: "Fosfato buffer : ACN : MeOH" },
      ],
    },
  ],
  consideraciones: [
    "Los sulfitos requieren análisis específico por Monier-Williams (titrimétrico)",
    "Para edulcorantes en refrescos, desgasificar muestras con ultrasonido antes de inyección",
  ],
  metadata: {
    title: "Análisis de Aditivos Alimentarios | Solinsa",
    description:
      "Sistemas HPLC-UV/DAD para análisis de conservantes, colorantes y edulcorantes en alimentos procesados.",
    keywords: [
      "aditivos alimentarios",
      "conservantes",
      "colorantes artificiales",
      "edulcorantes",
      "HPLC-UV",
      "AOAC 983.30",
      "CODEX STAN 192",
    ],
  },
};

export const vitaminasData: AplicacionDetail = {
  slug: "vitaminas",
  industria: "Alimentos y Bebidas",
  industriaSlug: "alimentos",
  title: "Vitaminas en Alimentos Fortificados",
  subtitle: "Determinación de vitaminas liposolubles e hidrosolubles en alimentos enriquecidos",
  description:
    "Análisis cuantitativo de vitaminas A, D, E, K (liposolubles) y B-complex, C (hidrosolubles) en cereales, leche y suplementos mediante HPLC-UV/FLD.",
  introduccion:
    "El análisis de vitaminas en alimentos fortificados es crítico para verificar claims nutrimentales y cumplimiento con regulaciones de etiquetado. Las vitaminas liposolubles requieren saponificación y extracción, mientras que las hidrosolubles pueden analizarse directamente.",
  parametros: [
    {
      nombre: "Vitamina A (Retinol)",
      descripcion: "En leche fortificada, aceites, suplementos. RDI: 900-3000 μg/d",
      tecnica: "HPLC-FLD / UV",
      limiteDeteccion: "0.1 μg/g",
    },
    {
      nombre: "Vitamina D (D2, D3)",
      descripcion: "En leche, yogur, cereales. RDI: 600-800 IU/d",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "0.1 IU/g",
    },
    {
      nombre: "Vitamina E (Tocoferoles)",
      descripcion: "En aceites vegetales, margarina. RDI: 15 mg/d",
      tecnica: "HPLC-FLD",
      limiteDeteccion: "0.5 μg/g",
    },
    {
      nombre: "Vitamina C (Ácido Ascórbico)",
      descripcion: "En bebidas, jugos, cereales. RDI: 90-120 mg/d",
      tecnica: "HPLC-UV con ion pairing",
      limiteDeteccion: "1 mg/100g",
    },
    {
      nombre: "B-Complex (B1, B2, B3, B5, B6, B7, B9, B12)",
      descripcion: "En cereales, pan, suplementos",
      tecnica: "HPLC-FLD",
      limiteDeteccion: "0.01 mg/100g",
    },
  ],
  metodologia: [
    {
      nombre: "AOAC 992.03: Vitamina A",
      descripcion:
        "Saponificación con KOH etanólico, extracción con hexano, HPLC-UV",
      equipo: "HPLC-UV con detector PDA",
      tiempoAnalisis: "~20 min/muestra",
    },
    {
      nombre: "AOAC 986.19: Vitamina C",
      descripcion:
        "Extracción con ácido metafosfórico, HPLC con ion-pair (TBAHS)",
      equipo: "HPLC-UV",
      tiempoAnalisis: "~15 min/muestra",
    },
    {
      nombre: "EN 12823: Vitamina D",
      descripcion:
        "Saponificación, extracción SPE silica, LC-MS/MS con APCI+",
      equipo: "LC-MS/MS con APCI",
      tiempoAnalisis: "~25 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "LC-MS/MS con APCI+",
      descripcion:
        "Sistema con ionización APCI para vitaminas liposolubles no polares",
      justificacion:
        "Mayor sensibilidad y especificidad para vitaminas D2 vs D3, tómeros de vitamina E",
    },
  ],
  normativas: [
    {
      codigo: "AOAC 992.06",
      nombre: "Vitamins in Foods",
      organismo: "AOAC International",
      descripcion: "Métodos oficiales para análisis de vitaminas en alimentos.",
    },
    {
      codigo: "NOM-086-SSA1-1994",
      nombre: "Bebidas y Alimentos",
      organismo: "SSA (México)",
      descripcion:
        "Especificaciones nutrimentales para alimentos y bebidas fortificadas.",
    },
  ],
  especificaciones: [
    {
      categoria: "LC-MS/MS APCI",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 100 x 2.1mm, 2.6μm" },
        { parametro: "Fuente", valor: "APCI positivo" },
        { parametro: "Corriente de descarga", valor: "5 μA" },
      ],
    },
  ],
  consideraciones: [
    "Las vitaminas son sensibles a luz, calor y oxidación - proteger muestras de luz y almacenar a -20°C",
    "Usar antioxidantes (BHT, piridoxol) durante extracción para prevenir degradación",
    "Para vitamina C, añadir ácido metafosfórico como estabilizador durante extracción",
  ],
  metadata: {
    title: "Análisis de Vitaminas en Alimentos | Solinsa",
    description:
      "Sistemas HPLC-UV/FLD y LC-MS/MS para análisis de vitaminas en alimentos fortificados según AOAC 992.",
    keywords: [
      "vitaminas",
      "vitamina A",
      "vitamina D",
      "vitamina C",
      "HPLC-UV",
      "LC-MS/MS",
      "alimentos fortificados",
      "AOAC 992",
    ],
  },
};

export const contaminantesAlimentosData: AplicacionDetail = {
  slug: "contaminantes-alimentos",
  industria: "Alimentos y Bebidas",
  industriaSlug: "alimentos",
  title: "Contaminantes en Alimentos",
  subtitle: "Migración de envases, PAHs en ahumados, hidrocarburos en aceites",
  description:
    "Determinación de contaminantes como bisfenol A, ftalatos, PAHs, hidrocarburos minerales en alimentos y materiales en contacto con alimentos.",
  introduccion:
    "Los contaminantes en alimentos incluyen compuestos que migran desde empaques, formados durante procesamiento (ahumado, fritura) o presentes en el ambiente. El análisis es necesario para asegurar inocuidad y cumplir con normativas que establecen límites estrictos.",
  parametros: [
    {
      nombre: "Bisfenol A (BPA)",
      descripcion:
        "Migración desde plásticos policarbonato en envases de bebidas y alimentos",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "0.01 mg/kg",
    },
    {
      nombre: "Ftalatos",
      descripcion:
        "DEHP, DBP, BBP, DINP en materiales plásticos flexibles en contacto con alimentos",
      tecnica: "GC-MS",
      limiteDeteccion: "0.1 mg/kg",
    },
    {
      nombre: "PAHs en Ahumados",
      descripcion:
        "Benzo[a]pireno y otros PAHs en pescados, carnes ahumadas",
      tecnica: "HPLC-FLD / GC-MS",
      limiteDeteccion: "0.1 - 1 μg/kg",
    },
    {
      nombre: "Hidrocarburos Minerales",
      descripcion:
        "Aceites minerales (MOSH/MOAH) en aceites vegetales, papel en contacto con alimentos",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "0.1 mg/kg",
    },
  ],
  metodologia: [
    {
      nombre: "Migración de Ftalatos",
      descripcion:
        "Simulación de migración con etanol 10% a 40°C, 10 días, análisis por GC-MS",
      equipo: "GC-MS",
      tiempoAnalisis: "~30 min/muestra + migración",
    },
    {
      nombre: "BPA por LC-MS/MS",
      descripcion:
        "Extracción acetonitrilo, limpieza SPE, LC-MS/MS ESI negativo",
      equipo: "LC-MS/MS",
      tiempoAnalisis: "~10 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "GC-MS para Ftalatos",
      descripcion:
        "Sistema con columnas DB-5MS para análisis de ftalatos de bajo y alto peso molecular",
      justificacion:
        "Mejor separación de isómeros de ftalatos y alta sensibilidad para trazas",
    },
  ],
  normativas: [
    {
      codigo: "EU 10/2011",
      nombre: "Plastic Materials in Contact with Food",
      organismo: "UE",
      descripcion:
        "Regulación europea sobre migración de plásticos en contacto con alimentos.",
    },
    {
      codigo: "NOM-248-SSA1-2010",
      nombre: "Migración de constituyentes",
      organismo: "SSA (México)",
      descripcion:
        "Métodos de prueba para determinar la migración de constituyentes de envases.",
    },
  ],
  especificaciones: [
    {
      categoria: "GC-MS",
      especificaciones: [
        { parametro: "Columna", valor: "DB-5MS UI, 30m x 0.25mm x 0.25μm" },
        { parametro: "Inyector", valor: "Splitless al 280°C" },
        { parametro: "Temp. programa", valor: "60°C a 300°C @ 10°C/min" },
      ],
    },
  ],
  consideraciones: [
    "Para pruebas de migración, usar condiciones que simulen uso real: tiempo, temperatura, matriz alimentaria",
    "Usar blancos de migración (simulante sin alimento) para corregir background del sistema",
    "Evitar contaminación con plásticos de laboratorio (tubos, viales) durante muestreo y preparación",
  ],
  metadata: {
    title: "Análisis de Contaminantes en Alimentos | Solinsa",
    description:
      "Sistemas GC-MS y LC-MS/MS para análisis de bisfenol A, ftalatos, PAHs y otros contaminantes en alimentos.",
    keywords: [
      "contaminantes alimentarios",
      "BPA",
      "ftalatos",
      "migración de envases",
      "PAHs en pescado",
      "GC-MS alimentos",
      "aceites minerales",
    ],
  },
};

// ---------------------------------------------------------------------------
// APLICACIONES FARMACÉUTICAS
// ---------------------------------------------------------------------------

export const purezaApisData: AplicacionDetail = {
  slug: "pureza-apis",
  industria: "Farmacéutica",
  industriaSlug: "farma",
  title: "Pureza de APIs y Determinación de Impurezas",
  subtitle: "Control de calidad de principios activos farmacéuticos y sustancias de referencia",
  description:
    "Análisis de pureza de APIs según ICH Q3A(R2) y USP <467> mediante HPLC-UV y LC-MS/MS para cuantificación de impurezas orgánicas.",
  introduccion:
    "La pureza de APIs es un atributo crítico de calidad según ICH Q3A(R2). Las impurezas orgánicas incluyen intermediarios de síntesis, productos de degradación y contaminantes. Los límites de impurezas se establecen según toxicología, y métodos como LC-MS/MS son necesarios para identificar y cuantificar impurezas a niveles <0.05%.",
  parametros: [
    {
      nombre: "Impurezas Relacionadas",
      descripcion: "Intermediarios de síntesis, subproductos de reacción",
      tecnica: "HPLC-UV / LC-MS/MS",
      limiteDeteccion: "0.05%",
    },
    {
      nombre: "Productos de Degradación",
      descripcion: "Hidrolisis, oxidación, fotodegradación del API",
      tecnica: "LC-MS/MS MS/MS",
      limiteDeteccion: "0.01%",
    },
    {
      nombre: "Enantiómeros",
      descripcion: "Pureza enantiomérica de APIs quirales",
      tecnica: "HPLC quiral",
      limiteDeteccion: "0.1%",
    },
    {
      nombre: "Residuo de Solventes",
      descripcion: "Solventes orgánicos residuales del proceso de síntesis",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "10 - 500 ppm",
    },
  ],
  metodologia: [
    {
      nombre: "ICH Q3A(R2): Impurezas Orgánicas",
      descripcion:
        "Validación con niveles de reporte (0.05%), pruebas de identificación (MS, DAD)",
      equipo: "HPLC-DAD + LC-MS/MS",
      tiempoAnalisis: "~30-60 min/muestra",
    },
    {
      nombre: "USP <467>: Residual Solvents",
      descripcion:
        "Headspace GC para solventes volátiles, GC-FID para cuantificación",
      equipo: "GC-HS",
      tiempoAnalisis: "~20 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "HPLC-UHPLC con DAD",
      descripcion:
        "Sistema de alta resolución con detector de arreglo de diodos para peak purity assessment",
      justificacion:
        "Resolución superior para picos co-eluidos, peak purity index >0.999",
    },
  ],
  normativas: [
    {
      codigo: "ICH Q3A(R2)",
      nombre: "Impurities in New Drug Substances",
      organismo: "ICH",
      descripcion:
        "Guideline para cualificación y umbral de reporte de impurezas orgánicas.",
    },
    {
      codigo: "USP <467>",
      nombre: "Residual Solvents",
      organismo: "USP",
      descripcion:
        "Procedimiento para análisis de disolventes residuales en APIs.",
    },
    {
      codigo: "COFEPRIS",
      nombre: "Control de Calidad API",
      organismo: "COFEPRIS (México)",
      descripcion:
        "Requisitos para control de calidad de principios activos farmacéuticos.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC-UHPLC",
      especificaciones: [
        { parametro: "Presión máx", valor: "1300 bar (18,850 psi)" },
        { parametro: "Volumen iny", valor: "0.1 - 10 μL" },
        { parametro: "DAD rango", valor: "190 - 800 nm" },
        { parametro: "Peak purity", valor: ">0.999" },
      ],
    },
  ],
  consideraciones: [
    "Usar fase reversa C18 para APIs no-polares; fase HILIC para APIs polares",
    "Para APIs con grupos funcionales ionizables, considerar LC-MS/MS con modo negativo",
    "Validar método para especificidad, linealidad (rango 50-150%), precisión, exactitud según ICH Q2(R1)",
  ],
  metadata: {
    title: "Pureza de APIs y Control de Calidad | Solinsa",
    description:
      "Sistemas HPLC-UV/DAD y LC-MS/MS para análisis de impurezas en APIs según ICH Q3A(R2), USP <467>.",
    keywords: [
      "pureza API",
      "impurezas orgánicas",
      "ICH Q3A(R2)",
      "USP <467>",
      "control de calidad farmacéutico",
      "HPLC-DAD",
      "peak purity",
    ],
  },
};

export const ensayosDisolucionData: AplicacionDetail = {
  slug: "ensayos-disolucion",
  industria: "Farmacéutica",
  industriaSlug: "farma",
  title: "Ensayos de Disolución",
  subtitle: "Análisis de liberación de formas farmacéuticas sólidas y semisólidas",
  description:
    "Determinación del perfil de disolución de tabletas, cápsulas y formas de liberación controlada según USP <711>, <724>, <729> mediante muestreo automatizado con HPLC.",
  introduccion:
    "Los ensayos de disolución son pruebas críticas in vitro que predicen la liberación in vivo del fármaco. La automatización de estos ensayos con muestreo en línea HPLC incrementa throughput, reduce errores manuales y permite análisis 24/7.",
  parametros: [
    {
      nombre: "Disolución Inmediata (IR)",
      descripcion:
        "Tabletas de liberación inmediata, USP <711>, aparato 2 (pala), 50-75 rpm",
      tecnica: "HPLC-UV",
      limiteDeteccion: "Q = 75-120% a 30 min",
    },
    {
      nombre: "Liberación Modificada",
      descripcion:
        "Tabletas con recubrimiento, cápsulas de gelatina dura, USP <724>",
      tecnica: "HPLC-UV",
      limiteDeteccion: "Q = 60-120% a 45 min",
    },
    {
      nombre: "Liberación Extendida",
      descripcion:
        "Formas de liberación prolongada, USP <711>, aparato 1 (cesta), 100 rpm",
      tecnica: "HPLC-UV",
      limiteDeteccion: "Q por muestreo múltiples puntos",
    },
    {
      nombre: "Disolución Retardada",
      descripcion: "Tabletas con recubrimiento entérico, USP <711> (buffer pH 6.8)",
      tecnica: "HPLC-UV",
      limiteDeteccion: "Lag time <30 min, Q = 60-120%",
    },
  ],
  metodologia: [
    {
      nombre: "USP <711>: Disolución",
      descripcion:
        "900 mL medio acuoso, 37±0.5°C, aparato 2 (pala) o aparato 1 (cesta) según forma",
      equipo: "HPLC con autosampler de disolución",
      tiempoAnalisis: "Variable (30 min - 24 h)",
    },
    {
      nombre: "USP <724>: Modified Release",
      descripcion:
        "Dos etapas: pH 1.2 por 2 h, pH 6.8 por 6 h, muestreo automatizado",
      equipo: "HPLC con switch de medio",
      tiempoAnalisis: "~8 h ensayo completo",
    },
  ],
  equipos: [
    {
      nombre: "Automated Dissolution System",
      descripcion:
        "Baño de disolución 6-8 posiciones con muestreo automatizado y filtración en línea",
      justificacion:
        "Alta throughput con recolección automatizada y análisis inmediato por HPLC",
    },
  ],
  normativas: [
    {
      codigo: "USP <711>",
      nombre: "Dissolution",
      organismo: "USP",
      descripcion:
        "Prácticas generales para ensayos de disolución de formas farmacéuticas orales.",
    },
    {
      codigo: "USP <724>",
      nombre: "Drug Release",
      organismo: "USP",
      descripcion: "Disolución de formas de liberación prolongada y retardada.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC Online",
      especificaciones: [
        { parametro: "Flujo", valor: "0.5 - 2.0 mL/min" },
        { parametro: "Volumen inyección", valor: "10 - 100 μL" },
        { parametro: "Ciclos", valor: "Hasta 300 muestras/hora" },
      ],
    },
  ],
  consideraciones: [
    "Calibrar baño de disolución semestralmente para verificar temperatura uniforme (±0.5°C)",
    "Para formas de liberación controlada, usar stomach vs intestinal USP apparatus según fisiología",
    "USar sinkers (canastas) para optimizar condiciones de sink: <10% de API disuelto",
  ],
  metadata: {
    title: "Ensayos de Disolución | Solinsa",
    description:
      "Sistemas automatizados de disolución con muestreo HPLC en línea según USP <711>, <724>.",
    keywords: [
      "ensayos de disolución",
      "USP <711>",
      "liberación controlada",
      "HPLC automatizado",
      "perfiles de disolución",
      "pharmacokinetics",
    ],
  },
};

export const estabilidadData: AplicacionDetail = {
  slug: "estabilidad",
  industria: "Farmacéutica",
  industriaSlug: "farma",
  title: "Estabilidad de Productos Farmacéuticos",
  subtitle: "Estudios de estabilidad acelerada y a largo plazo según ICH Q1A(R2)",
  description:
    "Análisis de degradación de APIs en formulaciones bajo condiciones de estrés (temperatura, humedad, luz) para determinar vida útil y condiciones de almacenamiento.",
  introduccion:
    "Los estudios de estabilidad son obligatorios para registro farmacéutico y establecen la vida útil y condiciones de almacenamiento. ICH Q1A(R2) define condiciones para estudios acelerados (40°C/75% RH, 30°C/65% RH, 25°C/60% RH) y a largo plazo. El análisis de muestras de estabilidad requiere métodos estables que detecten productos de degradación.",
  parametros: [
    {
      nombre: "Assay de Potencia",
      descripcion: "Porcentaje de API declarado en formulación",
      tecnica: "HPLC-UV",
      limiteDeteccion: "95-110% de etiqueta",
    },
    {
      nombre: "Productos de Degradación",
      descripcion: "Nivel de impurezas de degradación formadas",
      tecnica: "HPLC-MS/MS",
      limiteDeteccion: "NMT",
    },
    {
      nombre: "Disolución",
      descripcion: "Liberación del API de forma farmacéutica",
      tecnica: "HPLC-UV",
      limiteDeteccion: "Q = 75-120%",
    },
    {
      nombre: "Atributos Físicos",
      descripcion: "Dureza, friabilidad, desintegración, color, olor",
      tecnica: "Equipment tests",
      limiteDeteccion: "Especificaciones monográficas",
    },
  ],
  metodologia: [
    {
      nombre: "ICH Q1A(R2): Stability Testing",
      descripcion:
        "Muestras almacenadas a 25°C/60% RH (largo plazo), 30°C/65% RH y 40°C/75% RH (acelerado)",
      equipo: "Cámaras de estabilidad + HPLC",
      tiempoAnalisis: "Variable (3-36 meses)",
    },
    {
      nombre: "Photostability",
      descripcion:
        "Exposición a luz UV-visible (ICH Q1B), análisis de degradantes fotosensibles",
      equipo: "Cámara de luz + HPLC-MS/MS",
      tiempoAnalisis: "Variable (6 meses)",
    },
  ],
  equipos: [
    {
      nombre: "Cámaras de Estabilidad",
      descripcion:
        "Cámaras controladas de temperatura y humedad con monitoreo continuo",
      justificacion:
        "Cumplimiento con ICH Q1A(R2) para condiciones de estudio acelerado",
    },
  ],
  normativas: [
    {
      codigo: "ICH Q1A(R2)",
      nombre: "Stability Testing",
      organismo: "ICH",
      descripcion:
        "Guideline para estudios de estabilidad de nuevos productos farmacéuticos.",
    },
    {
      codigo: "ICH Q1B",
      nombre: "Photostability",
      organismo: "ICH",
      descripcion: "Pruebas de estabilidad fotodegradativa de API y productos.",
    },
  ],
  especificaciones: [
    {
      categoria: "Cámaras de estabilidad",
      especificaciones: [
        { parametro: "Rango temperatura", valor: "4°C - 60°C" },
        { parametro: "Rango humedad", valor: "10% - 90% RH" },
        { parametro: "Cámara luz", valor: "Vis + UV, 1.2M lux-hr" },
      ],
    },
  ],
  consideraciones: [
    "Usar envases de prueba idénticos a envases comerciales (same container closure system)",
    "Muestreo inicial (time 0), luego 3, 6, 9, 12, 18, 24, 36 meses según condición",
    "Para productos con vida útil <12 meses, frecuencia reducida a 3, 6, 9 meses",
  ],
  metadata: {
    title: "Estabilidad Farmacéutica | Solinsa",
    description:
      "Sistemas para estudios de estabilidad según ICH Q1A(R2). Cámaras de estabilidad y análisis por HPLC.",
    keywords: [
      "estabilidad farmacéutica",
      "ICH Q1A(R2)",
      "vida útil",
      "estudios acelerados",
      "degradación API",
      "cámaras de estabilidad",
    ],
  },
};

export const impurezasGenotoxicasData: AplicacionDetail = {
  slug: "impurezas-genotoxicas",
  industria: "Farmacéutica",
  industriaSlug: "farma",
  title: "Impurezas Genotóxicas",
  subtitle: "Determinación de impurezas genotóxicas a niveles de ppm según ICH M7",
  description:
    "Análisis ultra-sensible de impurezas genotóxicas en APIs mediante LC-MS/MS con LODs <0.1 ppm.",
  introduccion:
    "Las impurezas genotóxicas son compuestos que pueden dañar el ADN y están estrictamente reguladas. Según ICH M7, requieren análisis altamente sensibles (threshold of toxicological concern - TTC). Métodos como LC-MS/MS con columnas de alta resolución y MRM son necesarios para detectar impurezas a niveles de ppt.",
  parametros: [
    {
      nombre: "Impurezas GT en APIs",
      descripcion: "Alquilantes, epóxidos, nitrosaminas, hidrazinas",
      tecnica: "LC-MS/MS MRM3",
      limiteDeteccion: "1 ppm (threshold)",
    },
    {
      nombre: "Aflatoxinas como impurezas",
      descripcion: "Aflatoxina B1 contaminación en productos naturales",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "0.1 ppb",
    },
    {
      nombre: "N-Nitrosaminas",
      descripcion: "En aminas secundarias, APIs con grupos nitroso",
      tecnica: "GC-TEA / LC-MS/MS",
      limiteDeteccion: "0.1 ppm",
    },
  ],
  metodologia: [
    {
      nombre: "ICH M7: Genotoxicity Assessment",
      descripcion:
        "Análisis de impurezas genotóxicas con niveles de reporte: 1 ppm (mutagénicos conocidos), 10 ppm (alerta estructural)",
      equipo: "LC-MS/MS triple quad MRM3",
      tiempoAnalisis: "~30 min/muestra",
    },
    {
      nombre: "GC-TEA para Nitrosaminas",
      descripcion:
        "Detector de termoiónización altamente sensible para nitrosaminas volátiles",
      equipo: "GC-TEA",
      tiempoAnalisis: "~25 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "LC-MS/MS con MRM3",
      descripcion:
        "Triple cuadrupolo con habilidad MRM3 para 3 transiciones simultáneas",
      justificacion:
        "Mayor sensibilidad y especificidad para identificación de impurezas a nivel trace",
    },
  ],
  normativas: [
    {
      codigo: "ICH M7(R2)",
      nombre: "Genotoxicity Assessment",
      organismo: "ICH",
      descripcion: "Guideline para evaluación de impurezas genotóxicas en APIs.",
    },
    {
      codigo: "ICH S9(R1)",
      nombre: "Point Mutations",
      organismo: "ICH",
      descripcion: "Requerimientos para estudios de mutagenicidad de impurezas.",
    },
  ],
  especificaciones: [
    {
      categoria: "LC-MS/MS MRM3",
      especificaciones: [
        { parametro: "Límite detección", valor: "0.1 - 1 ppm" },
        { parametro: "Linealidad", valor: "3-4 órdenes" },
        { parametro: "Precisión", valor: "<15% RSD" },
      ],
    },
  ],
  consideraciones: [
    "Validar método con 5-6 puntos de calibración cubriendo rango de reporte",
    "Para APIs con impurezas genotóxicas conocidas, incluir controles positivos",
    "Usar columnas de alta resolución (sub-2μm) para separación de isómeros estructurales",
  ],
  metadata: {
    title: "Análisis de Impurezas Genotóxicas | Solinsa",
    description:
      "Sistemas LC-MS/MS para análisis de impurezas genotóxicas según ICH M7. LODs <1 ppm.",
    keywords: [
      "impurezas genotóxicas",
      "ICH M7",
      "LC-MS/MS MRM3",
      "análisis ultra-sensible",
      "threshold of toxicological concern",
      "nitrosaminas",
    ],
  },
};

export const bioanalisisData: AplicacionDetail = {
  slug: "bioanalisis",
  industria: "Farmacéutica",
  industriaSlug: "farma",
  title: "Bioanálisis en Plasma y Orina",
  subtitle: "Determinación de fármacos en matrices biológicas para estudios bioequivalencia",
  description:
    "Cuantificación de fármacos y metabolitos en plasma, orina y saliva mediante LC-MS/MS según FDA Bioanalytical Method Validation.",
  introduccion:
    "El bioanálisis es fundamental para estudios farmacocinéticos, bioequivalencia y monitoreo terapéutico de drogas. La cuantificación de fármacos a niveles de ng/mL en matrices biológicas complejas como plasma requiere métodos LC-MS/MS con extracción en fase sólida (SPE) y uso de estándares internos marcados.",
  parametros: [
    {
      nombre: "Fármacos en Plasma",
      descripcion:
        "Antibióticos, antidepresivos, antiinflamatorios, antineoplásicos en plasma humano",
      tecnica: "LC-MS/MS ESI+/-",
      limiteDeteccion: "0.1 - 10 ng/mL",
    },
    {
      nombre: "Metabolitos",
      descripcion: "Fase I (oxidación) y Fase II (conjugación) metabolitos",
      tecnica: "LC-MS/MS MRM",
      limiteDeteccion: "0.01 - 1 ng/mL",
    },
    {
      nombre: "Fármacos en Orina",
      descripcion: "Fármacos excretados sin cambio en orina",
      tecnica: "LC-MS/MS",
      limiteDeteccion: "1 - 100 ng/mL",
    },
  ],
  metodologia: [
    {
      nombre: "Protein Precipitación + SPE",
      descripcion:
        "PPT con acetonitrilo, limpieza SPE C18/HCX, reconstitución y análisis LC-MS/MS",
      equipo: "LC-MS/MS con autosampler",
      tiempoAnalisis: "~5 min/muestra",
    },
    {
      nombre: "SPE Directo (96-well)",
      descripcion:
        "Extracción en placa de 96 pozos para alto throughput, LC-MS/MS rápido",
      equipo: "LC-MS/MS + robot de liquid handling",
      tiempoAnalisis: "~2 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "LC-MS/MS con ESI+/-",
      descripcion:
        "Sistema con conmutación rápida polaridad para máximo coverage de fármacos",
      justificacion:
        "Análisis simultáneo de >100 fármacos con LODs sub-ng/mL usando isotope dilution",
    },
  ],
  normativas: [
    {
      codigo: "FDA Bioanalytical Method Validation",
      nombre: "Guidance for Industry",
      organismo: "FDA (EE.UU.)",
      descripcion:
        "Guidelines para validación de métodos bioanalíticos para estudios clínicos.",
    },
    {
      codigo: "EMA Guideline on Bioanalytical Method Validation",
      nombre: "Bioanalytical Validation",
      organismo: "EMA (UE)",
      descripcion: "Requisitos europeos para validación bioanalítica.",
    },
  ],
  especificaciones: [
    {
      categoria: "LC-MS/MS Bioanálisis",
      especificaciones: [
        { parametro: "Columna", valor: "C18, 50 x 2.1mm, 1.7μm" },
        { parametro: "Ciclos", valor: "Hasta 600 muestras/día" },
        { parametro: "Límite cuantificación", valor: "0.1 ng/mL" },
        { parametro: "Matrix effect", valor: "<15% con isotope dilution" },
      ],
    },
  ],
  consideraciones: [
    "Usar estándares internos isotopicamente labeled para cada analito para corregir matrix effect",
    "Validar selectividad analizando 6 lotes de plasma blanco donador diferente",
    "Estabilidad de muestras: plasma a -80°C por 30 días, orina a -20°C",
    "Para estudios de bioequivalencia, usar isótopos estables degradados (deuterados) según FDA",
  ],
  metadata: {
    title: "Bioanálisis por LC-MS/MS | Solinsa",
    description:
      "Sistemas LC-MS/MS para bioanálisis en plasma y orina según FDA Bioanalytical Method Validation.",
    keywords: [
      "bioanálisis",
      "LC-MS/MS plasma",
      "bioequivalencia",
      "farmacocinética",
      "FDA bioanalytical",
      "isotope dilution",
      "extracción SPE",
    ],
  },
};

// ---------------------------------------------------------------------------
// APLICACIONES PETROQUÍMICAS
// ---------------------------------------------------------------------------

export const fraccionamientoPetroleoData: AplicacionDetail = {
  slug: "fraccionamiento-petroleo",
  industria: "Petroquímica",
  industriaSlug: "petro",
  title: "Caracterización de Petróleo Crudo",
  subtitle: "Simulación de destilación TBP y análisis de fracciones por GC",
  description:
    "Análisis detallado de petróleo crudo mediante cromatografía de gases para simulación de destilación atmosférica y al vacío según ASTM D2892.",
  introduccion:
    "La caracterización de crudo es esencial para refinerías para determinar valor comercial y optimizar procesos de destilación. Los métodos de cromatografía simulan la destilación TBP (True Boiling Point) mediante análisis detallado de hidrocarburos desde C1 hasta C40+.",
  parametros: [
    {
      nombre: "Hidrocarburos Ligeros (C1-C4)",
      descripcion: "Metano, etano, propano, butanos (gas natural, LPG)",
      tecnica: "GC-FID / GC-TCD",
      limiteDeteccion: "0.01 - 1%",
    },
    {
      nombre: "Gasolinas (C5-C10)",
      descripcion: "Hidrocarburos ligeros, naftas",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "0.1%",
    },
    {
      nombre: "Kerosene/Diesel (C11-C20)",
      descripcion: "Combustibles medios, destilados",
      tecnica: "GC-FID",
      limiteDeteccion: "0.1%",
    },
    {
      nombre: "Vacuum Gas Oil (C20-C40)",
      descripcion: "Componentes pesados, materia prima para FCC",
      tecnica: "GC-HT (alta temperatura)",
      limiteDeteccion: "0.5%",
    },
    {
      nombre: "Punto de Rocío",
      descripcion: "Temperatura a la cual comienza a evaporarse el crudo",
      tecnica: "GC simulación",
      limiteDeteccion: "Reportado",
    },
    {
      nombre: "Gravedad API",
      descripcion: "Relación peso/especificación para crudos",
      tecnica: "Calculado desde composición GC",
      limiteDeteccion: "Reportado",
    },
  ],
  metodologia: [
    {
      nombre: "ASTM D2892: Distillation",
      descripcion:
        "Simulación de TBP por GC usando columnas de alta resolución, reporte a fracciones ASTM",
      equipo: "GC-FID con muestreo split/splitless",
      tiempoAnalisis: "~60 min/muestra",
    },
    {
      nombre: "ASTM D7169: API Gravity",
      descripcion: "Cálculo de gravedad API desde densidad relativa a 60°F",
      equipo: "Picnómetro + GC",
      tiempoAnalisis: "~10 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "Refinery GC Analyzer",
      descripcion:
        "Sistema con columnas múltiples y detectores FID/TCD para análisis completo de crudo",
      justificacion:
        "Análisis simultáneo de gases, naftas, medios, fracciones pesadas en un solo run",
    },
  ],
  normativas: [
    {
      codigo: "ASTM D2892",
      nombre: "Distillation of Crude Petroleum",
      organismo: "ASTM",
      descripcion: "Método estándar para destilación de petróleo crudo.",
    },
    {
      codigo: "ASTM D7169",
      nombre: "API Gravity",
      organismo: "ASTM",
      descripcion: "Método para determinación de gravedad API de crudo.",
    },
  ],
  especificaciones: [
    {
      categoria: "Refinery GC",
      especificaciones: [
        { parametro: "Columnas", valor: "MXT-1, 60m x 0.25mm + Petrocol DH 150m x 0.25mm" },
        { parametro: "Inyectores", valor: "2 x PTV on-column + Split/splitless" },
        { parametro: "Detectores", valor: "FID x2, TCD" },
        { parametro: "Temperatura máx", valor: "450°C" },
      ],
    },
  ],
  consideraciones: [
    "Para crudos pesados (alta API), usar dilución con CS2 antes de inyección",
    "Calibrar sistema con estándares de hidrocarburos n-alkanes C5-C30 para simulación precisa",
    "Reportar composición en porcentaje peso y volumen para cada fracción",
  ],
  metadata: {
    title: "Caracterización de Petróleo Crudo | Solinsa",
    description:
      "Sistemas GC-FID/TCD para análisis de petróleo crudo según ASTM D2892, D7169. Simulación TBP.",
    keywords: [
      "petróleo crudo",
      "ASTM D2892",
      "simulación destilación",
      "refinery GC",
      "gravedad API",
      "TBP",
      "hidrocarburos",
    ],
  },
};

export const purezaEtilenoData: AplicacionDetail = {
  slug: "pureza-etileno",
  industria: "Petroquímica",
  industriaSlug: "petro",
  title: "Pureza de Etileno y Propileno",
  subtitle: "Análisis de monómeros olefinos a nivel de trazas para polimerización",
  description:
    "Determinación de impurezas a nivel ppb en etileno y propileno feedstocks para polimerización mediante GC-FID y GC-MS.",
  introduccion:
    "La pureza de olefinas como etileno y propileno es crítica para procesos de polimerización. Impurezas como acetileno, propadieno y dienos pueden envenenar catalizadores y afectar la calidad del polímero. Los análisis requieren LODs de 1-10 ppb (0.001-0.01 ppm).",
  parametros: [
    {
      nombre: "Etileno (C2H4)",
      descripcion:
        "Pureza 99.9%+, impurezas: etano, etano, acetileno <1 ppm",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "1 ppb",
    },
    {
      nombre: "Propileno (C3H6)",
      descripcion:
        "Pureza 99.5%+, impurezas: propano, propadieno <5 ppm",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "1 - 5 ppb",
    },
    {
      nombre: "Butadieno (C4H6)",
      descripcion:
        "Pureza 99%+, impurezas: 1,3-butadieno, isobutileno <100 ppm",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "10 ppb",
    },
    {
      nombre: "Olefinas Pesadas",
      descripcion: "1-hexeno, 1-octeno para polimerización especial",
      tecnica: "GC-FID / GC-MS",
      limiteDeteccion: "0.1 - 1 ppm",
    },
  ],
  metodologia: [
    {
      nombre: "ASTM D2505: Purity by GC",
      descripcion:
        "Análisis de olefinas por GC con detector FID, columna PLOT Al2O3/KCl",
      equipo: "GC-FID con muestreo automático de gases",
      tiempoAnalisis: "~15 min/muestra",
    },
    {
      nombre: "ASTM D6159: Trace Impurities",
      descripcion:
        "Análisis de impurezas traza por GC-MS con columna Al2O3/KCl",
      equipo: "GC-MS",
      tiempoAnalisis: "~30 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "Refinery Gas Analyzer",
      descripcion:
        "Sistema con columnas de alúmina capilar y detectores FID ultra-sensibles",
      justificacion:
        "Sensibilidad ppb para impurezas críticas en etileno/propileno",
    },
  ],
  normativas: [
    {
      codigo: "ASTM D2505",
      nombre: "Purity of Olefins by GC",
      organismo: "ASTM",
      descripcion: "Método para análisis de pureza de olefinas por cromatografía de gases.",
    },
    {
      codigo: "ASTM D6159",
      nombre: "Trace Impurities",
      organismo: "ASTM",
      descripcion: "Práctica estándar para análisis de impurezas traza en olefinas.",
    },
  ],
  especificaciones: [
    {
      categoria: "GC-FID Ultra Trace",
      especificaciones: [
        { parametro: "Columna", valor: "Al2O3/KCl PLOT, 50m x 0.53mm" },
        { parametro: "Carrier", valor: "Helio o Hidrógeno ultra puro" },
        { parametro: "LOD", valor: "1 ppb" },
        { parametro: "Rango lineal", valor: "0.1 ppm - 10%" },
      ],
    },
  ],
  consideraciones: [
    "Usar gas carrier ultra-puro (grado 5.0 o 6.0) para minimizar background",
    "Calibrar con estándares trazables a NIST para cuantificación precisa",
    "Para muestreo de gases, usar líneas de muestreo calentadas para evitar condensación",
  ],
  metadata: {
    title: "Análisis de Pureza de Olefinas | Solinsa",
    description:
      "Sistemas GC-FID/GC-MS para análisis de pureza de etileno y propileno según ASTM D2505, D6159. LODs 1 ppb.",
    keywords: [
      "etileno",
      "propileno",
      "ASTM D2505",
      "pureza monómeros",
      "olefinas",
      "GC-FID",
      "polimerización",
    ],
  },
};

export const gasesNaturalesData: AplicacionDetail = {
  slug: "gases-naturales",
  industria: "Petroquímica",
  industriaSlug: "petro",
  title: "Análisis de Gas Natural",
  subtitle: "Composición de hidrocarburos, inertes y contaminantes en gas natural",
  description:
    "Determinación de composición completa de gas natural según GPA 2145 y ISO 6974 mediante GC-TCD/FID.",
  introduccion:
    "El gas natural está compuesto principalmente por metano (70-95%) con etano, propano, butano y pentanos. El análisis es necesario para valoración, transporte y procesos químicos. Los métodos requieren detectar hidrocarburos desde 0.1 ppm hasta 30%.",
  parametros: [
    {
      nombre: "Metano (C1)",
      descripcion: "Componente mayoritario, 70-95% v/v",
      tecnica: "GC-TCD",
      limiteDeteccion: "0.01 - 100%",
    },
    {
      nombre: "Etano, Propano, Butanos (C2-C4)",
      descripcion: "Componentes minoritarios, 1-10% v/v",
      tecnica: "GC-TCD / GC-FID",
      limiteDeteccion: "0.001% - 20%",
    },
    {
      nombre: "Pentanos+ (C5+)",
      descripcion: "Hidrocarburos pesados, <3% v/v",
      tecnica: "GC-FID",
      limiteDeteccion: "0.001% - 5%",
    },
    {
      nombre: "Inertes (N2, CO2)",
      descripcion: "Nitrógeno, dióxido de carbono",
      tecnica: "GC-TCD",
      limiteDeteccion: "0.01 - 20%",
    },
    {
      nombre: "Contaminantes",
      descripcion: "Azufre, mercaptanos, agua, hidrógeno",
      tecnica: "GC-TCD / GC-SCD / GC-PFPD",
      limiteDeteccion: "1 - 1000 ppm",
    },
  ],
  metodologia: [
    {
      nombre: "GPA 2145: Natural Gas",
      descripcion:
        "Análisis extendido usando TCD + FID, columna molecular sieve + Porapak",
      equipo: "GC-TCD/FID",
      tiempoAnalisis: "~15 min/muestra",
    },
    {
      nombre: "ISO 6974: Natural Gas",
      descripcion:
        "Método internacional para análisis de gas natural usando GC",
      equipo: "GC-TCD/FID",
      tiempoAnalisis: "~20 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "Gas Analyzer con TCD/FID",
      descripcion:
        "Sistema con detector de conductividad térmica y FID para análisis completo",
      justificacion:
        "TCD para componentes mayoritarios e inertes, FID para hidrocarburos traza",
    },
  ],
  normativas: [
    {
      codigo: "GPA 2145",
      nombre: "Natural Gas Analysis",
      organismo: "GPA (Gas Processors Association)",
      descripcion:
        "Método extendido para análisis de gas natural y composición extendida.",
    },
    {
      codigo: "ISO 6974",
      nombre: "Natural Gas",
      organismo: "ISO",
      descripcion: "Norma internacional para análisis de gas natural por cromatografía.",
    },
  ],
  especificaciones: [
    {
      categoria: "GC-TCD/FID",
      especificaciones: [
        { parametro: "Columnas", valor: "Molsieve 5Å + Porapak Q" },
        { parametro: "TCD rango", valor: "Hasta 100% respuesta" },
        { parametro: "FID rango", valor: "0.1% - 100%" },
      ],
    },
  ],
  consideraciones: [
    "Usar cromatografía de dos columnas con bypass para análisis simultáneo o secuencial",
    "Calibrar con gases estándar conocidos para cada componente (C1-C5, N2, CO2)",
    "Para muestras de gas natural licuado (LNG), enfriar muestras y usar split injection",
  ],
  metadata: {
    title: "Análisis de Gas Natural | Solinsa",
    description:
      "Sistemas GC-TCD/FID para análisis de composición de gas natural según GPA 2145, ISO 6974.",
    keywords: [
      "gas natural",
      "GPA 2145",
      "ISO 6974",
      "análisis de gas",
      "GC-TCD",
      "hidrocarburos",
      "metano",
      "etano",
    ],
  },
};

export const polimerosData: AplicacionDetail = {
  slug: "polimeros",
  industria: "Petroquímica",
  industriaSlug: "petro",
  title: "Análisis de Polímeros y Aditivos",
  subtitle: "Caracterización de plásticos, aditivos y monómeros residuales",
  description:
    "Determinación de aditivos en polímeros, monómeros residuales y propiedades fisicoquímicas mediante GC-FID, HPLC y pirólisis-GC/MS.",
  introduccion:
    "El análisis de polímeros incluye: (1) aditivos (antioxidantes, estabilizantes, plastificantes), (2) monómeros residuales, y (3) identificación de tipo de polímero. Técnicas como pirólisis-GC/MS permiten identificar la composición de plásticos complejos.",
  parametros: [
    {
      nombre: "Plastificantes",
      descripcion: "Ftalatos (DEHP, DBP), adipatos, citratos en PVC, otros plásticos",
      tecnica: "GC-MS / HPLC-MS",
      limiteDeteccion: "0.1 - 100 mg/kg",
    },
    {
      nombre: "Antioxidantes",
      descripcion: "Irgafos 168, Irganox 1010, fenol fosfito en poliolefinas",
      tecnica: "HPLC-UV / LC-MS/MS",
      limiteDeteccion: "10 - 500 mg/kg",
    },
    {
      nombre: "Monómeros Residuales",
      descripcion: "Etileno, propileno, estireno, cloruro de vinilo en polietileno, poliestireno, PVC",
      tecnica: "GC-FID / GC-MS de headspace",
      limiteDeteccion: "0.1 - 500 mg/kg",
    },
    {
      nombre: "Identificación de Polímero",
      descripcion: "Tipo de plástico (PE, PP, PS, PVC, PET)",
      tecnica: "Pirólisis-GC/MS",
      limiteDeteccion: "Qualitativo",
    },
  ],
  metodologia: [
    {
      nombre: "Extracción de Plastificantes",
      descripcion:
        "Extracción con THF o diclorometano, disolución en metanol, análisis GC-MS",
      equipo: "GC-MS",
      tiempoAnalisis: "~25 min/muestra + prep",
    },
    {
      nombre: "Headspace GC para Monómeros",
      descripcion:
        "Muestras calentadas a 120-150°C en headspace vial, GC-FID",
      equipo: "GC-HS",
      tiempoAnalisis: "~30 min/muestra",
    },
    {
      nombre: "Pirólisis-GC/MS",
      descripcion:
        "Pirólisis Curcio-Pointer 600°C, GC-MS para identificación de fragmentos",
      equipo: "Pirólisis-GC/MS",
      tiempoAnalisis: "~30 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "GC-MS con Headspace",
      descripcion:
        "Sistema autosampler con calentamiento programable para análisis de volátiles",
      justificacion:
        "Análisis sin destrucción de muestra de monómeros residuales",
    },
  ],
  normativas: [
    {
      codigo: "ASTM D3418",
      nombre: "Additives in Plastics",
      organismo: "ASTM",
      descripcion: "Método para extracción y análisis de aditivos en plásticos.",
    },
  ],
  especificaciones: [
    {
      categoria: "GC-HS",
      especificaciones: [
        { parametro: "Temperatura", valor: "120-150°C" },
        { parametro: "Agitación", valor: "250-500 rpm" },
        { parametro: "Lazo de split", valor: "10:1 a 100:1" },
      ],
    },
  ],
  consideraciones: [
    "Para identificación de polímeros pirólisis, comparar espectros con librería de referencia",
    "Usar blanks de laboratorio para monitorear contaminación de plastificantes ambientales",
    "Para PVC, análisis de HCl residual por titulación y por pirólisis-GC/MS",
  ],
  metadata: {
    title: "Análisis de Polímeros | Solinsa",
    description:
      "Sistemas GC-MS y pirólisis-GC/MS para análisis de aditivos en plásticos, monómeros residuales e identificación de polímeros.",
    keywords: [
      "polímeros",
      "plásticos",
      "ftalatos",
      "aditivos",
      "pirólisis-GC/MS",
      "monómeros residuales",
      "ASTM D3418",
    ],
  },
};

// ---------------------------------------------------------------------------
// APLICACIONES DE UNIVERSIDADES
// ---------------------------------------------------------------------------

export const investigacionBasicaData: AplicacionDetail = {
  slug: "investigacion-basica",
  industria: "Universidades e Investigación",
  industriaSlug: "universidades",
  title: "Investigación Científica Básica",
  subtitle: "Cromatografía para investigación de nuevos compuestos y materiales",
  description:
    "Equipos de cromatografía versátiles para investigación de síntesis orgánica, productos naturales, nanomateriales y materiales avanzados.",
  introduccion:
    "La investigación científica requiere equipos flexibles que puedan adaptarse a diversas necesidades analíticas. Los sistemas de HPLC y GC con modularidad permiten desde análisis rutinarios hasta métodos altamente especializados. El soporte especializado y costos accesibles son consideraciones críticas para laboratorios académicos.",
  parametros: [
    {
      nombre: "Síntesis Orgánica",
      descripcion:
        "Monitoreo de reacciones, purificación de compuestos, análisis de pureza",
      tecnica: "HPLC-UV / GC-MS / LC-MS/MS",
      limiteDeteccion: "Variable según compuesto",
    },
    {
      nombre: "Productos Naturales",
      descripcion:
        "Extracción de metabolitos secundarios de plantas, purificación",
      tecnica: "HPLC-UV / LC-MS/MS",
      limiteDeteccion: "0.1 - 100 μg/mL",
    },
    {
      nombre: "Nanomateriales",
      descripcion: "Nanopartículas, fullerenos, nanotubos de carbono",
      tecnica: "HPLC-SEC / TEM",
      limiteDeteccion: "Caracterización",
    },
    {
      nombre: "Materiales Avanzados",
      descripcion:
        "Catalizadores, MOFs, COFs, perovskitas para energía",
      tecnica: "HPLC-GC / ICP-MS",
      limiteDeteccion: "Variable según material",
    },
  ],
  metodologia: [
    {
      nombre: "Purificación Preparativa",
      descripcion:
        "HPLC preparativo con colector de fracciones para aislamiento de miligramos",
      equipo: "HPLC prep con colector automático",
      tiempoAnalisis: "Variable según escala",
    },
    {
      nombre: "Isomerización",
      descripcion: "Separación de isómeros quirales en columnas de fase quiral",
      equipo: "HPLC quiral",
      tiempoAnalisis: "~30 min/muestra",
    },
  ],
  equipos: [
    {
      nombre: "HPLC Education System",
      descripcion:
        "Sistema modular con componentes educativos para aprendizaje",
      justificacion:
        "Flexibilidad para diferentes cursos: orgánica, analítica, farmacia",
    },
  ],
  normativas: [
    {
      codigo: "Conacyt Guidelines",
      nombre: "Investigación Científica",
      organismo: "Conacyt",
      descripcion:
        "Requisitos para proyectos de investigación en instituciones mexicanas.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC Modular",
      especificaciones: [
        { parametro: "Bombas", valor: "Binaria, Cuaternaria, Isocrática" },
        { parametro: "Detectores", valor: "UV-Vis, FL, RI, ELSD" },
        { parametro: "Autosampler", valor: "120 viales" },
      ],
    },
  ],
  consideraciones: [
    "Ofrecer capacitación técnica incluida con equipos para laboratorios académicos",
    "Mantener stock de consumibles accesible para educación (columnas, standards)",
    "Proporcionar manuales de laboratorio y protocolos de uso para docencia",
  ],
  metadata: {
    title: "Cromatografía para Investigación | Solinsa",
    description:
      "Sistemas HPLC/GC modulares para investigación científica básica en universidades y centros de investigación.",
    keywords: [
      "investigación científica",
      "síntesis orgánica",
      "productos naturales",
      "HPLC académico",
      "LC-MS/MS investigación",
      "Conacyt",
    ],
  },
};

export const docenciaData: AplicacionDetail = {
  slug: "docencia",
  industria: "Universidades e Investigación",
  industriaSlug: "universidades",
  title: "Cromatografía para Docencia",
  subtitle: "Equipos educativos para laboratorios de enseñanza de cromatografía",
  description:
    "Sistemas de cromatografía robustos y fáciles de usar para laboratorios de enseñanza de química analítica.",
  introduccion:
    "La educación en cromatografía requiere equipos que sean robustos, fáciles de operar y que permitan a los estudiantes comprender los principios fundamentales de separación. Los sistemas educativos combinan funcionalidad profesional con accesibilidad académica.",
  parametros: [
    {
      nombre: "Prácticas de HPLC",
      descripcion: "Separación de colorantes, aminoácidos, fármacos simples",
      tecnica: "HPLC-UV / HPLC-RI",
      limiteDeteccion: "Académico",
    },
    {
      nombre: "Prácticas de GC",
      descripcion: "Análisis de volátiles, separación de mezclas de hidrocarburos",
      tecnica: "GC-FID / GC-TCD",
      limiteDeteccion: "Académico",
    },
    {
      nombre: "Demostraciones de Teoría",
      descripcion:
        "Número de platos teóricos vs reales, eficiencia de columnas, resolución",
      tecnica: "Todas las anteriores",
      limiteDeteccion: "Educacional",
    },
  ],
  metodologia: [
    {
      nombre: "Prácticas Integradas",
      descripcion:
        "Protocolos educativos que cubren desde preparación de muestras hasta interpretación de cromatogramas",
      equipo: "HPLC + GC Education systems",
      tiempoAnalisis: "Variable (2-4 horas/práctica)",
    },
  ],
  equipos: [
    {
      nombre: "HPLC Education System",
      descripcion:
        "Kit completo con sistema HPLC, columnas, estándares y manual de prácticas",
      justificacion:
        "Todo incluido para empezar inmediatamente las prácticas de laboratorio",
    },
  ],
  normativas: [
    {
      codigo: "Educational Standards",
      nombre: "Laboratorio Docente",
      organismo: "Instituciones Educativas",
      descripcion:
        "Requisitos para laboratorios de enseñanza de química analítica.",
    },
  ],
  especificaciones: [
    {
      categoria: "HPLC Educativo",
      especificaciones: [
        { parametro: "Simplicidad", valor: "Interfaz amigable, operación guiada" },
        { parametro: "Robustez", valor: "Alta tolerancia a errores de usuario" },
        { parametro: "Costo operativo", valor: "Bajo consumo de solventes" },
      ],
    },
  ],
  consideraciones: [
    "Incluir manual de prácticas con protocolos paso a paso y guías de interpretación",
    "Usar columnas Econosil o equivalentes para reducir costo sin sacrificar calidad educativa",
    "Software educativo con tutoriales interactivos para autodidacta",
  ],
  metadata: {
    title: "Cromatografía para Docencia | Solinsa",
    description:
      "Sistemas de cromatografía educativos para laboratorios de enseñanza de HPLC y GC.",
    keywords: [
      "docencia",
      "HPLC educativo",
      "laboratorio académico",
      "enseñanza de cromatografía",
      "prácticas de laboratorio",
    ],
  },
};

export const publicacionesData: AplicacionDetail = {
  slug: "publicaciones",
  industria: "Universidades e Investigación",
  industriaSlug: "universidades",
  title: "Soporte para Publicaciones Científicas",
  subtitle: "Equipos y métodos para generar datos reproducibles de alta calidad",
  description:
    "Sistemas de cromatografía que generan datos consistentes y reproducibles para publicación en revistas científicas peer-reviewed.",
  introduccion:
    "La publicación de artículos en revistas científicas requiere datos analíticos reproducibles, validación estadística y documentación completa. Los sistemas deben ofrecer sensibilidad adecuada, linealidad, y precisión para cumplir con los estándares de publicación.",
  parametros: [
    {
      nombre: "Validación de Método",
      descripcion:
        "Linealidad, precisión, LOD/LOQ, robustez, selectividad según ICH Q2(R1)",
      tecnica: "Todas las técnicas",
      limiteDeteccion: "Según ICH Q2(R1)",
    },
    {
      nombre: "Análisis Estadístico",
      descripcion: "ANOVA, test t, estudios de equivalencia",
      tecnica: "Software estadístico + HPLC/GC",
      limiteDeteccion: "Según diseño experimental",
    },
    {
      nombre: "Uncertainty Measurement",
      descripcion: "Evaluación de incertidumbre según EURACHEM/ISO 17025",
      tecnica: "Todas las técnicas",
      limiteDeteccion: "Reportado con resultados",
    },
  ],
  metodologia: [
    {
      nombre: "Validación ICH Q2(R1)",
      descripcion:
        "Especificaciones: linealidad (rango 80-120%), precisión (RSD <5%), exactitud (recovery 85-115%)",
      equipo: "Cualquier sistema validado",
      tiempoAnalisis: "Variable",
    },
  ],
  equipos: [
    {
      nombre: "Sistema Validado",
      descripcion:
        "HPLC o GC con IQ/OP instalados, certificados de desempeño",
      justificacion:
        "Cumplimiento con requisitos de journals y organismos reguladores",
    },
  ],
  normativas: [
    {
      codigo: "ICH Q2(R1)",
      nombre: "Validation of Analytical Procedures",
      organismo: "ICH",
      descripcion:
        "Guideline para validación de métodos analíticos en farmacopea.",
    },
  ],
  especificaciones: [
    {
      categoria: "Validación",
      especificaciones: [
        { parametro: "Linealidad", valor: "3-5 niveles, R² >0.99" },
        { parametro: "Precisión", valor: "RSD intra-día <3%, inter-día <5%" },
        { parametro: "Exactitud", valor: "Recovery 85-115%" },
        { parametro: "LOQ", valor: "S/N ≥10" },
      ],
    },
  ],
  consideraciones: [
    "Documentar completamente protocolos en M&M (Materiales y Métodos) para publicación",
    "Usar estadística apropiada: n≥6 para precisión, calibración con 5-7 puntos",
    "Incluir número de certificado de análisis (CoA) de lotes de estándares usados",
  ],
  metadata: {
    title: "Soporte para Publicaciones Científicas | Solinsa",
    description:
      "Sistemas de cromatografía para investigación que generan datos reproducibles según ICH Q2(R1) y estándares de publicación.",
    keywords: [
      "publicaciones científicas",
      "ICH Q2(R1)",
      "validación de métodos",
      "reproducibilidad",
      "investigación",
      "papers científicos",
      "journal peer-reviewed",
    ],
  },
};

// ---------------------------------------------------------------------------
// Mapa de Aplicaciones
// ---------------------------------------------------------------------------

export const aplicacionesMap: Record<string, AplicacionDetail> = {
  "calidad-agua": calidadAguaData,
  "analisis-suelos": analisisSuelosData,
  "vocs-aire": vocsAireData,
  "pfas-analisis": pfasAnalisisData,
  "pah-sedimentos": pahSedimentosData,
  "pesticidas-organoclorados": pesticidasOrganocloradosData,
  "herbicidas-triazinas": herbicidasTriazinasData,
  "contaminantes-emergentes": contaminantesEmergentesData,
  // Alimentos
  "pesticidas-alimentos": pesticidasAlimentosData,
  "aminoacidos-bebidas": aminoacidosBebidasData,
  "micotoxinas": micotoxinasData,
  "aditivos-alimentarios": aditivosAlimentariosData,
  "vitaminas": vitaminasData,
  "contaminantes-alimentos": contaminantesAlimentosData,
  // Farma
  "pureza-apis": purezaApisData,
  "ensayos-disolucion": ensayosDisolucionData,
  "estabilidad": estabilidadData,
  "impurezas-genotoxicas": impurezasGenotoxicasData,
  "bioanalisis": bioanalisisData,
  // Petro
  "fraccionamiento-petroleo": fraccionamientoPetroleoData,
  "pureza-etileno": purezaEtilenoData,
  "gases-naturales": gasesNaturalesData,
  "polimeros": polimerosData,
  // Universidades
  "investigacion-basica": investigacionBasicaData,
  "docencia": docenciaData,
  "publicaciones": publicacionesData,
};

// ---------------------------------------------------------------------------
// Lista de aplicaciones
// ---------------------------------------------------------------------------

export const aplicacionesList = Object.values(aplicacionesMap);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getAplicacionBySlug(slug: string): AplicacionDetail | undefined {
  return aplicacionesMap[slug];
}

export function getAplicacionesByIndustria(
  industriaSlug: string
): AplicacionDetail[] {
  return aplicacionesList.filter((app) => app.industriaSlug === industriaSlug);
}
