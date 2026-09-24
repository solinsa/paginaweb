export type ProductFamily = {
  slug: string
  kind: string
  brand: string
  title: string
  eyebrow: string
  lead: string
  whatsappCta: string
  photoAlt: string
  photo?: string
  sectionTitle: string
  features: string[]
  footnote: string
  applications: { source: string; title: string; text: string }[]
  specs: [string, string][]
  faq: { q: string; a: string }[]
}

export const productFamilies: Record<string, ProductFamily> = {
  'hplc-uhplc': {
    slug: 'hplc-uhplc',
    kind: 'HPLC / UHPLC',
    brand: 'Young In Chromass · Sedere',
    title: 'ChroZen HPLC y UHPLC',
    eyebrow: 'Young In Chromass · HPLC / UHPLC',
    lead: 'Plataforma modular para determinaciones cuantitativas de rutina en laboratorios de alimentos, bebidas, ambiental y control de calidad. Se configura por detector y columna según la aplicación.',
    whatsappCta: 'Consultar ChroZen HPLC por WhatsApp',
    photoAlt: 'Sistema ChroZen HPLC configurado con bomba, automuestreador y detectores.',
    sectionTitle: 'Un sistema, distintas rutas de detección.',
    features: [
      'Bombas isocráticas, binarias o cuaternarias',
      'Automuestreador y horno de columnas',
      'Detectores UV, DAD, RID, FL y ELSD',
      'Software de adquisición y procesamiento',
    ],
    footnote: 'La configuración final depende del analito, matriz, objetivo de cuantificación y volumen de muestras.',
    applications: [
      { source: 'Experiencia de Solinsa', title: 'Furfural y azúcares en bebidas destiladas', text: 'Detección UV + RID · Columna de intercambio iónico' },
      { source: 'Referencia de fabricante', title: 'Conservadores y edulcorantes en alimentos', text: 'Detección DAD · Fase reversa C18' },
      { source: 'Referencia de método', title: 'Perfil de aminas en control de proceso', text: 'Detección FL · Derivatización previa' },
    ],
    specs: [
      ['Configuración', 'Modular'],
      ['Bombas', 'Isocrática, binaria o cuaternaria'],
      ['Detectores', 'UV, DAD, RID, FL, ELSD'],
      ['Muestreo', 'Manual o automático'],
      ['Control de temperatura', 'Horno de columnas'],
      ['Software', 'Adquisición, integración y reportes'],
    ],
    faq: [
      { q: '¿Cuál es la diferencia entre HPLC y UHPLC?', a: 'UHPLC opera a presiones más altas con partículas más pequeñas, lo que permite separaciones más rápidas y con mejor resolución. ChroZen ofrece ambas configuraciones.' },
      { q: '¿Puedo migrar métodos existentes a ChroZen?', a: 'Sí. Solinsa realiza la transferencia de métodos, verificando reproducibilidad frente a tu sistema actual.' },
    ],
  },
  'gc-gcms': {
    slug: 'gc-gcms',
    kind: 'GC y GC-MS',
    brand: 'Young In Chromass · QTEK · VUV Analytics · Ellutia · EST Analytical · CDS Analytical',
    title: 'GC y GC-MS: cromatografía de gases',
    eyebrow: 'Young In Chromass · GC / GC-MS',
    lead: 'Cromatógrafos de gases y espectrometría de masas para compuestos volátiles y semivolátiles: congéneres, solventes, COV, hidrocarburos y análisis ambiental. Configurable por inyector, columna y detector.',
    whatsappCta: 'Consultar GC y GC-MS por WhatsApp',
    photoAlt: 'Cromatógrafo de gases configurado con inyector, horno y detectores.',
    sectionTitle: 'Configurable por aplicación: inyección, columna y detección.',
    features: [
      'Inyectores split/splitless, headspace y purga y trampa',
      'Detectores FID, TCD, ECD, FPD/PFPD, TEA y VUV',
      'GC-MS con bibliotecas espectrales (Wiley)',
      'Pirólisis y desorción térmica (CDS Analytical)',
    ],
    footnote: 'La selección del detector y del sistema de introducción depende del analito, la matriz y el límite de cuantificación requerido.',
    applications: [
      { source: 'Experiencia de Solinsa', title: 'Alcoholes superiores y congéneres en destilados', text: 'Detección FID · Inyección directa' },
      { source: 'Referencia de método', title: 'COV en agua por purga y trampa', text: 'EST Analytical · GC-MS' },
      { source: 'Referencia de fabricante', title: 'Análisis espectral con detector VUV', text: 'VUV Analytics · Especificidad sin columnas especiales' },
    ],
    specs: [
      ['Configuración', 'GC o acoplado a MS'],
      ['Inyectores', 'Split/splitless, headspace, purga y trampa, pirólisis'],
      ['Detectores', 'FID, TCD, ECD, FPD/PFPD, TEA, VUV'],
      ['Espectrometría de masas', 'GC-MS (QTEK) con bibliotecas Wiley'],
      ['Control de temperatura', 'Horno con programación de temperatura'],
      ['Software', 'Adquisición, integración y reportes'],
    ],
    faq: [
      { q: '¿Qué detector necesito para mi aplicación?', a: 'Depende del analito: FID para hidrocarburos y alcoholes, ECD para plaguicidas halogenados, MS para identificación estructural. Solinsa revisa tu método y propone la configuración.' },
      { q: '¿Venden sistemas de purga y trampa independientes?', a: 'Sí. Representamos EST Analytical y CDS Analytical, tanto como equipo nuevo integrado a tu GC existente como parte de un sistema completo.' },
    ],
  },
  ic: {
    slug: 'ic',
    photo: '/images/productos/cromatografo-ionico-lab.png',
    kind: 'cromatografía iónica',
    brand: 'Shine',
    title: 'Cromatografía iónica (IC)',
    eyebrow: 'Shine · Cromatografía iónica',
    lead: 'Sistemas de cromatografía iónica para determinación de aniones y cationes en agua, alimentos, matriz ambiental y procesos industriales, con opciones de supresión y detección de conductividad.',
    whatsappCta: 'Consultar cromatografía iónica por WhatsApp',
    photoAlt: 'Sistema de cromatografía iónica con supresor y detector de conductividad.',
    sectionTitle: 'Aniones y cationes con supresión de conductividad.',
    features: [
      'Eluidos isocráticos y por gradiente',
      'Supresores para detección de conductividad',
      'Columnas para aniones y cationes',
      'Aplicaciones en agua potable, residual y proceso',
    ],
    footnote: 'El esquema de elución y la columna se seleccionan según el panel de iones objetivo y su concentración esperada.',
    applications: [
      { source: 'Referencia de método', title: 'Aniones comunes en agua potable', text: 'Fluoruro, cloruro, nitrito, bromuro, nitrato, sulfato' },
      { source: 'Referencia de fabricante', title: 'Cationes de alkali y alcalinotérreos', text: 'Litio, sodio, amonio, potasio, magnesio, calcio' },
      { source: 'Experiencia de Solinsa', title: 'Ácidos orgánicos en bebidas', text: 'Supresión química y detección de conductividad' },
    ],
    specs: [
      ['Configuración', 'Isocrática o con gradiente'],
      ['Supresión', 'Con supresor de conductividad'],
      ['Detectores', 'Conductividad, amperometría, UV-Vis'],
      ['Columnas', 'Aniones y cationes'],
      ['Muestreo', 'Automuestreador opcional'],
      ['Software', 'Adquisición, integración y reportes'],
    ],
    faq: [
      { q: '¿Qué maintenimiento requiere un sistema IC?', a: 'Principalmente la regeneración del supresor, la preparación del eluyente y la verificación de línea base. Solinsa ofrece contratos preventivos para sistemas IC.' },
      { q: '¿Puedo migrar métodos de IC de otra marca?', a: 'Sí. Transferimos métodos verificando resolución, tiempos de retención y límites frente a tu sistema actual.' },
    ],
  },
  consumibles: {
    slug: 'consumibles',
    photo: '/images/productos/consumibles-lab.png',
    kind: 'consumibles y refacciones',
    brand: 'Trajan · Wiley · Young In Chromass',
    title: 'Consumibles y refacciones para cromatografía',
    eyebrow: 'Trajan · Wiley · Refacciones',
    lead: 'Columnas capilares para GC y columnas analíticas HPLC, viales, septas, liners, bibliotecas espectrales y refacciones de desgaste para mantener tu laboratorio operando sin contratiempos.',
    whatsappCta: 'Cotizar consumibles por WhatsApp',
    photoAlt: 'Columnas cromatográficas, viales y consumibles de inyección.',
    sectionTitle: 'Consumibles por técnica, no por catálogo.',
    features: [
      'Columnas capilares GC y guardas (Trajan)',
      'Columnas analíticas HPLC: fase reversa, intercambio iónico, HILIC',
      'Viales, septas, liners y tuercas de inyección',
      'Bibliotecas espectrales MS (Wiley)',
    ],
    footnote: 'Envíanos la referencia, dimensiones y fase actual de tu columna, y te proponemos equivalencias disponibles en México.',
    applications: [
      { source: 'Consumibles', title: 'Selección de columna HPLC', text: 'Fase, dimensiones y tamaño de partícula según tu método' },
      { source: 'Consumibles', title: 'Equivalencias de columna GC', text: 'Fase, diámetro interno, longitud y espesor de película' },
      { source: 'Software', title: 'Bibliotecas espectrales para GC-MS', text: 'Identificación de compuestos contra referencia Wiley' },
    ],
    specs: [
      ['Marcas', 'Trajan, Wiley, Young In Chromass'],
      ['GC', 'Columnas capilares, guardas, liners, septas'],
      ['HPLC', 'Columnas analíticas, pre-columnas, filtros'],
      ['Bibliotecas', 'MS (GC-MS) Wiley'],
      ['Entrega', 'Desde Monterrey a todo México'],
      ['Cotización', 'Por WhatsApp o correo'],
    ],
    faq: [
      { q: '¿Pueden sugerir la columna correcta para mi método?', a: 'Sí. Comparte la referencia actual o las condiciones de tu método y proponemos la columna y guarda adecuadas.' },
      { q: '¿Manejan refacciones de otras marcas de equipos?', a: 'Cotizamos refacciones de desgaste para equipos multimarca; la disponibilidad se confirma por modelo y número de serie.' },
    ],
  },
  reacondicionado: {
    slug: 'reacondicionado',
    kind: 'equipo reacondicionado',
    brand: 'Solinsa',
    title: 'Equipo analítico reacondicionado',
    eyebrow: 'Solinsa · Reacondicionado',
    lead: 'Equipos de cromatografía reacondicionados, verificados en nuestro taller y respaldados con garantía y servicio local: HPLC, GC y detectores con pruebas de cierre documentadas.',
    whatsappCta: 'Consultar equipo reacondicionado por WhatsApp',
    photoAlt: 'Equipo de cromatografía reacondicionado en el taller de Solinsa.',
    sectionTitle: 'Reacondicionado con respaldo técnico, no revenda.',
    features: [
      'Diagnóstico completo y reemplazo de partes desgastadas',
      'Pruebas de funcionamiento documentadas',
      'Garantía y contratos de servicio disponibles',
      'Refacciones disponibles localmente',
    ],
    footnote: 'La disponibilidad de equipos reacondicionados cambia constantemente. Escríbenos para conocer el inventario actual.',
    applications: [
      { source: 'Laboratorio', title: 'Ampliar capacidad con presupuesto acotado', text: 'HPLC o GC adicionales para picos de muestras' },
      { source: 'Docencia', title: 'Instrumentación para académia', text: 'Equipos verificados para prácticas de laboratorio' },
      { source: 'Respaldo', title: 'Equipo de respaldo para producción', text: 'Redundancia ante fallas de sistemas críticos' },
    ],
    specs: [
      ['Proceso', 'Diagnóstico, reacondicionamiento y pruebas'],
      ['Garantía', 'Incluida, con extensión opcional'],
      ['Equipos', 'HPLC, GC y detectores'],
      ['Instalación', 'En sitio, con puesta en marcha'],
      ['Capacitación', 'Para operadores del laboratorio'],
      ['Inventario', 'Variable, confirmar por WhatsApp'],
    ],
    faq: [
      { q: '¿Qué garantía tiene un equipo reacondicionado?', a: 'Todos nuestros equipos reacondicionados incluyen garantía y pruebas de funcionamiento documentadas antes de la entrega.' },
      { q: '¿Qué disponibilidad hay ahora?', a: 'El inventario cambia constantemente. Escríbenos por WhatsApp con la técnica que buscas y confirmamos opciones vigentes.' },
    ],
  },
}

const baseEntry = {
  eyebrow: '',
  whatsappCta: 'Consultar por WhatsApp',
  photoAlt: 'Fotografía del equipo pendiente',
  sectionTitle: 'Configurado por aplicación.',
  footnote: 'La configuración final se define con la revisión de tu aplicación: analito, matriz, objetivo y volumen de muestras.',
  applications: [] as { source: string; title: string; text: string }[],
  specs: [] as [string, string][],
  faq: [] as { q: string; a: string }[],
}

type ProductFamilyInput = Partial<ProductFamily> & Pick<ProductFamily, 'slug'|'kind'|'brand'|'title'|'lead'|'features'|'specs'|'faq'>

const productDetails: Record<string, ProductFamilyInput> = {
  'chrozen-hplc': {
    slug:'chrozen-hplc', kind:'HPLC', brand:'Young In Chromass', title:'ChroZen HPLC',
    eyebrow:'Young In Chromass · HPLC',
    photo:'/images/productos/chrozen-hplc-lab.png',
    lead:'Sistema HPLC modular para análisis cuantitativo de rutina. Bombas isocráticas, binarias o cuaternarias, automuestreador y detectores UV, DAD, RID, FL y ELSD.',
    features:['Bombas isocráticas, binarias o cuaternarias','Automuestreador y horno de columnas','Detectores UV, DAD, RID, FL y ELSD','Transferencia de métodos asistida por Solinsa'],
    specs:[['Configuración','Modular'],['Bombas','Isocrática, binaria o cuaternaria'],['Detectores','UV, DAD, RID, FL, ELSD'],['Muestreo','Manual o automático'],['Software','Adquisición e integración']],
    faq:[{q:'¿Puedo migrar métodos existentes a ChroZen?',a:'Sí. Solinsa realiza la transferencia de métodos verificando reproducibilidad frente a tu sistema actual.'}],
  },
  'chrozen-uhplc': {
    slug:'chrozen-uhplc', kind:'UHPLC', brand:'Young In Chromass', title:'ChroZen UHPLC',
    eyebrow:'Young In Chromass · UHPLC',
    photo:'/images/productos/chrozen-uhplc-lab.png',
    lead:'Sistema UHPLC de alta presión para separaciones rápidas y eficientes con partículas sub-2 µm, ideal para alto volumen de muestras y métodos de alta resolución.',
    features:['Operación a alta presión con partículas sub-2 µm','Menor consumo de solvente y tiempo por corrida','Compatible con métodos HPLC existentes','Detectores UV, DAD, RID, FL y ELSD'],
    specs:[['Presión','Operación UHPLC'],['Separaciones','Más rápidas y con mejor resolución'],['Compatibilidad','Migración desde métodos HPLC'],['Software','Adquisición e integración']],
    faq:[{q:'¿Cuál es la diferencia entre HPLC y UHPLC?',a:'UHPLC opera a presiones más altas con partículas más pequeñas, lo que permite separaciones más rápidas y con mejor resolución.'}],
  },
  'chrozen-hplc-preparativo': {
    slug:'chrozen-hplc-preparativo', kind:'HPLC preparativo', brand:'Young In Chromass', title:'ChroZen HPLC preparativo',
    eyebrow:'Young In Chromass · HPLC preparativo',
    photo:'/images/productos/chrozen-hplc-preparativo-lab.png',
    lead:'Purificación a escala preparativa con bombas de alto caudal y colector de fracciones, para aislar compuestos de interés en desarrollo y producción.',
    features:['Bombas de alto caudal para escala preparativa','Colector de fracciones automatizado','Celdas y columnas preparativas','Escalamiento desde métodos analíticos'],
    specs:[['Escala','Preparativa'],['Colector','Fracciones automatizado'],['Caudal','Alto caudal'],['Aplicaciones','Purificación y aislamiento de compuestos']],
    faq:[{q:'¿Puedo escalar un método analítico a preparativo?',a:'Sí. Revisamos el método y proponemos la columna y condiciones equivalentes para escala preparativa.'}],
  },
  'detector-rid': {
    slug:'detector-rid', kind:'Detector RID', brand:'Young In Chromass', title:'Detector de índice de refracción RID',
    eyebrow:'Young In Chromass · Detector RID',
    photo:'/images/productos/detector-rid.png',
    lead:'Detección por índice de refracción para azúcares, polioles y compuestos sin absorción UV ni cromóforo. Compatible con sistemas HPLC ChroZen y otras marcas.',
    features:['Detección universal para compuestos sin UV','Uso típico: azúcares, furfural, polioles y lípidos','Termostato interno para estabilidad de línea base','Compatible con elución isocrática'],
    applications:[{source:'Experiencia de Solinsa',title:'Furfural y azúcares en bebidas destiladas',text:'Detección UV + RID · Columna de intercambio iónico'}],
    specs:[['Técnica','Índice de refracción'],['Aplicaciones','Azúcares y compuestos sin UV'],['Compatibilidad','HPLC ChroZen y multimarca'],['Requisito','Elución isocrática']],
    faq:[{q:'¿El RID funciona con gradiente?',a:'No. El RID requiere elución isocrática porque el índice de refracción del eluyente cambia con la composición. Para gradientes se recomienda ELSD o DAD según el analito.'}],
  },
  'detector-elsd': {
    slug:'detector-elsd', kind:'Detector ELSD', brand:'Sedere', title:'Detector ELSD para LC',
    eyebrow:'Sedere · Detector ELSD',
    photo:'/images/productos/detector-elsd-lab.png',
    lead:'Detector evaporativo de dispersión de luz (ELSD) para compuestos no volátiles sin cromóforo, compatible con elución por gradiente.',
    features:['Detección universal para compuestos no volátiles','Compatible con elución por gradiente','Sin dependencia de cromóforos ni UV','Alto para lípidos, azúcares, surfactantes y polímeros'],
    specs:[['Técnica','Evaporación y dispersión de luz'],['Elución','Compatible con gradiente'],['Aplicaciones','Lípidos, azúcares, surfactantes, polímeros'],['Compatibilidad','HPLC/UHPLC']],
    faq:[{q:'¿Qué diferencia hay entre RID y ELSD?',a:'RID no admite gradiente; ELSD sí. ELSD además ofrece mejor sensibilidad para compuestos no volátiles en elución gradual.'}],
  },
  'chrozen-gc': {
    slug:'chrozen-gc', kind:'GC', brand:'Young In Chromass', title:'ChroZen GC',
    eyebrow:'Young In Chromass · GC',
    photo:'/images/productos/chrozen-gc-lab.png',
    lead:'Cromatógrafo de gases configurable por inyector, columna y detector para análisis de volátiles: congéneres, solventes, hidrocarburos y COV.',
    features:['Inyectores split/splitless, headspace y P&T','Detectores FID, TCD, ECD, FPD/PFPD','Horno con programación de temperatura','Configuración por aplicación'],
    specs:[['Inyectores','Split/splitless, headspace, P&T'],['Detectores','FID, TCD, ECD, FPD/PFPD'],['Horno','Programación de temperatura'],['Software','Adquisición e integración']],
    faq:[{q:'¿Qué detector necesito para mi aplicación?',a:'Depende del analito: FID para hidrocarburos y alcoholes, ECD para plaguicidas halogenados, MS para identificación estructural.'}],
  },
  'gc-ms': {
    slug:'gc-ms', kind:'GC-MS', brand:'QTEK', title:'Sistema GC-MS',
    photo:'/images/productos/gc-ms-lab.png',
    eyebrow:'QTEK · GC-MS',
    lead:'Cromatografía de gases acoplada a espectrometría de masas para identificación y cuantificación de compuestos volátiles y semivolátiles, con bibliotecas espectrales Wiley.',
    features:['Ionización EI con rango de masas amplio','Identificación contra bibliotecas Wiley','Análisis de COV, semivolátiles y contaminantes','Modo scan y SIM'],
    specs:[['Configuración','GC acoplado a MS'],['Bibliotecas','Wiley'],['Modos','Scan y SIM'],['Aplicaciones','COV, semivolátiles, ambiental, forense']],
    faq:[{q:'¿Incluyen biblioteca espectral?',a:'Los sistemas GC-MS QTEK se pueden configurar con bibliotecas Wiley para identificación de compuestos.'}],
  },
  'detector-vuv': {
    slug:'detector-vuv', kind:'Detector VUV', brand:'VUV Analytics', title:'Detector VUV',
    photo:'/images/productos/detector-vuv-lab.png',
    eyebrow:'VUV Analytics · Detector VUV',
    lead:'Detección espectral en ultravioleta de vacío para GC: espectros únicos por compuesto que permiten análisis cualitativo y cuantitativo simultáneo sin columnas especiales.',
    features:['Espectros únicos en rango VUV (125–240 nm)','Identificación y cuantificación en una sola corrida','Co-elución resoluble espectralmente','Sin derivatización ni columnas especiales'],
    specs:[['Técnica','Espectroscopía VUV'],['Rango','125–240 nm'],['Conexión','Coplado a GC'],['Aplicaciones','Hidrocarburos, gases, alcoholes, COV']],
    faq:[{q:'¿Puedo acoplar VUV a mi GC actual?',a:'Sí, el detector VUV se conecta como detector post-columna a la mayoría de los GC del mercado.'}],
  },
  'detector-tea': {
    slug:'detector-tea', kind:'Detector TEA', brand:'Ellutia', title:'Detector TEA',
    photo:'/images/productos/detector-tea-lab.png',
    eyebrow:'Ellutia · Detector TEA',
    lead:'Detección selectiva de compuestos nitrogenados para GC: nitrosaminas, nitrocompuestos y especies nitrogenadas con sensibilidad ultra-traza.',
    features:['Selectividad para compuestos de nitrógeno','Sensibilidad a nivel de traza','Aplicación en nitrosaminas y análisis ambiental','Compatible con GC estándar'],
    specs:[['Técnica','Quimioluminiscencia TEA'],['Selectividad','Compuestos de nitrógeno'],['Aplicaciones','Nitrosaminas, nitrocompuestos, farmacéutica']],
    faq:[{q:'¿Para qué aplicaciones se usa el TEA?',a:'Principalmente nitrosaminas en farmacéutica, análisis de explosivos y compuestos nitrogenados en muestras ambientales e industriales.'}],
  },
  'automuestreador-hta': {
    slug:'automuestreador-hta', kind:'Automuestreador', brand:'HTA', title:'Automuestreador para GC y LC',
    photo:'/images/productos/automuestreador-hta-lab.png',
    eyebrow:'HTA · Automuestreador',
    lead:'Automatización de inyección para GC y HPLC: secuencias analíticas sin supervisión, mayor repetibilidad y opciones de derivatización.',
    features:['Compatible con GC y HPLC','Posiciones configurables por vial','Mayor repetibilidad en inyección','Operación por secuencias desatendidas'],
    specs:[['Compatibilidad','GC y HPLC'],['Capacidad','Viales estándar'],['Operación','Secuencias automatizadas'],['Beneficio','Repetibilidad y trazabilidad']],
    faq:[{q:'¿Es compatible con mi equipo actual?',a:'Los automuestreadores HTA se instalan en la mayoría de GC y HPLC del mercado; confirmamos compatibilidad por marca y modelo.'}],
  },
  'purga-trampa': {
    slug:'purga-trampa', kind:'Purga y trampa', brand:'EST Analytical', title:'Sistema de purga y trampa',
    photo:'/images/productos/purga-trampa-lab.png',
    eyebrow:'EST Analytical · Purga y trampa',
    lead:'Preparación automatizada de muestras para compuestos volátiles (COV) por purga y trampa, acoplable a GC o GC-MS existentes.',
    features:['Concentración de COV para GC-MS','Cumple métodos EPA para agua y suelos','Trampa de adsorción con desorción térmica','Acoplable a GC-MS existente'],
    applications:[{source:'Referencia de método',title:'COV en agua por purga y trampa',text:'EST Analytical · GC-MS'}],
    specs:[['Técnica','Purga y trampa'],['Analitos','Compuestos orgánicos volátiles'],['Métodos','Compatibles con referencias EPA'],['Integración','GC-MS nuevo o existente']],
    faq:[{q:'¿Venden sistemas de purga y trampa independientes?',a:'Sí, como equipo nuevo integrado a tu GC existente o como parte de un sistema completo.'}],
  },
  'pirolisis': {
    slug:'pirolisis', kind:'Pirólisis', brand:'CDS Analytical', title:'Sistema de pirólisis',
    photo:'/images/productos/pirolisis-lab.png',
    eyebrow:'CDS Analytical · Pirólisis',
    lead:'Preparación térmica de muestras para análisis por GC y GC-MS: pirólisis y desorción térmica para polímeros, materiales y sólidos no volátiles.',
    features:['Pirólisis en modo flash y secuencial','Desorción térmica de muestras sólidas','Caracterización de polímeros y materiales','Acoplable a GC o GC-MS'],
    specs:[['Técnica','Pirólisis y desorción térmica'],['Modos','Flash, secuencial'],['Aplicaciones','Polímeros, pinturas, forense, materiales'],['Integración','GC o GC-MS']],
    faq:[{q:'¿Qué tipo de muestras se analizan por pirólisis?',a:'Sólidos no volátiles: polímeros, plásticos, pinturas, fibras y materiales donde la cromatografía convencional no es aplicable.'}],
  },
  'espectrofotometro-uv-vis': {
    slug:'espectrofotometro-uv-vis', kind:'UV-Vis', brand:'Persee', title:'Espectrofotómetro UV-Vis',
    photo:'/images/productos/espectrofotometro-uv-vis-lab.png',
    eyebrow:'Persee · UV-Visible',
    lead:'Espectroscopía UV-Visible para análisis de rutina en control de calidad, agua, alimentos y farmacia, con software de cuantificación.',
    features:['Rango espectral UV y visible','Modos de lectura: absorbancia, transmitancia, concentración','Celdas de flujo y soportes configurables','Software de cuantificación y reportes'],
    specs:[['Técnica','UV-Visible'],['Modos','Absorbancia, transmitancia, concentración'],['Aplicaciones','Calidad, agua, alimentos, farmacia'],['Software','Cuantificación y reportes']],
    faq:[{q:'¿Incluyen calibración y verificación?',a:'Solinsa incluye instalación y verificación de desempeño; calificaciones IQ/OQ/PQ disponibles según alcance documental.'}],
  },
  'espectrometro-aas': {
    slug:'espectrometro-aas', kind:'AAS', brand:'Persee', title:'Espectrómetro de absorción atómica',
    photo:'/images/productos/espectrometro-aas-lab.png',
    eyebrow:'Persee · Absorción atómica',
    lead:'Análisis elemental por absorción atómica para determinación de metales en agua, alimentos, ambiental e industrial, con llama y horno de grafito.',
    features:['Atomización por llama y horno de grafito','Fondo de corrección configurado por elemento','Análisis de metales en matrices acuosas y digestos','Software de cuantificación'],
    specs:[['Técnica','Absorción atómica'],['Atomización','Llama, horno de grafito'],['Aplicaciones','Metales en agua, alimentos, ambiental'],['Software','Cuantificación y reportes']],
    faq:[{q:'¿AAS o ICP para mi laboratorio?',a:'Depende del panel de elementos, límites requeridos y volumen de muestras. Revisamos tu aplicación y te proponemos la técnica adecuada.'}],
  },
  'agua-ultrapura': {
    slug:'agua-ultrapura', kind:'Agua tipo I', brand:'Young In Chromass', title:'Sistema de agua ultrapura',
    photo:'/images/productos/agua-ultrapura-lab.png',
    eyebrow:'Young In Chromass · Agua ultrapura',
    lead:'Producción de agua ultrapura tipo I para aplicaciones analíticas de laboratorio: HPLC, GC-MS, IC y prearación de muestras, con dispensador y monitoreo integrado.',
    features:['Agua tipo I (18.2 MΩ·cm)','Etapas de ósmosis inversa y deionización','Dispensador con monitoreo de calidad','Alimentación directa a equipos analíticos'],
    specs:[['Calidad','Agua tipo I, 18.2 MΩ·cm'],['Etapas','Ósmosis inversa, deionización, filtro UV'],['Salida','Dispensador y alimentación directa'],['Aplicaciones','HPLC, GC-MS, preparación de muestras']],
    faq:[{q:'¿Qué mantenimiento requiere?',a:'Reemplazo programado de cartuchos y monitoreo de conductividad. Solinsa ofrece contratos de consumibles y mantenimiento.'}],
  },
  'columnas-hplc': {
    slug:'columnas-hplc', kind:'Consumibles HPLC', brand:'Trajan', title:'Columnas analíticas HPLC',
    photo:'/images/productos/columnas-hplc-lab.png',
    eyebrow:'Trajan · Consumibles HPLC',
    lead:'Columnas y guardas para separaciones cromatográficas: fase reversa C18, intercambio iónico, HILIC y fases especializadas, con selección por método.',
    features:['Fases C18, C8, fenil, HILIC e intercambio iónico','Guardas y pre-columnas','Selección por referencia o equivalencia','Envíos desde Monterrey a todo México'],
    specs:[['Marcas','Trajan'],['Fases','C18, C8, fenil, HILIC, intercambio iónico'],['Formatos','Analíticas, guardas, pre-columnas'],['Cotización','Por WhatsApp o correo']],
    faq:[{q:'¿Pueden sugerir la columna correcta para mi método?',a:'Sí. Comparte la referencia actual o las condiciones de tu método y proponemos la columna y guarda adecuadas.'}],
  },
  'bibliotecas-espectrales': {
    slug:'bibliotecas-espectrales', kind:'Software y bibliotecas', brand:'Wiley', title:'Bibliotecas espectrales MS',
    eyebrow:'Wiley · Bibliotecas espectrales',
    photo:'/images/productos/bibliotecas-espectrales-ms.png',
    lead:'Bibliotecas de referencia Wiley para identificación espectral en GC-MS, con cientos de miles de espectros documentados y búsqueda integrada al software de adquisición.',
    features:['Identificación de compuestos contra referencia','Integración con software GC-MS','Actualizaciones disponibles','Amplia cobertura de compuestos orgánicos'],
    specs:[['Marca','Wiley'],['Aplicación','Identificación espectral GC-MS'],['Integración','Software de adquisición estándar'],['Licencia','Anual o perpetua, según edición']],
    faq:[{q:'¿Qué edición de biblioteca necesito?',a:'Depende de la cobertura de compuestos de tu aplicación y tu software de GC-MS; confirmamos compatibilidad al cotizar.'}],
  },
}

for (const [slug, detail] of Object.entries(productDetails)) {
  productFamilies[slug] = {...baseEntry, eyebrow: detail.brand, ...detail}
}
