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
