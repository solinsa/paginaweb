import Link from 'next/link'

const WA = 'https://wa.me/522201432743'

type Application = {meta:string,title:string,text:string,href?:string}
type IndustryProfile = {title:string,lead:string,image:string,imageAlt:string,retos:string[],applications:Application[],solutions:string[]}

const profiles: Record<string,IndustryProfile> = {
  'bebidas alcohólicas': {
    title:'Instrumentación y soporte para laboratorios de bebidas alcohólicas.',
    lead:'Furfural, azúcares, alcoholes superiores, perfiles de destilado y aplicaciones de cerveza. Configuramos el sistema, montamos el método y sostenemos la operación del laboratorio.',
    image:'/images/industria-bebidas.png',imageAlt:'Botellas y bebidas para análisis de laboratorio',
    retos:['Liberar lotes sin depender del calendario de un tercero','Comparar resultados entre campañas y líneas','Cumplir método, norma y trazabilidad documental','Mantener sistemas de distintas marcas en operación'],
    applications:[
      {meta:'HPLC · UV + RID',title:'Furfural y azúcares en tequila',text:'Determinación simultánea para control de lote y liberación de producto.',href:'/aplicaciones/furfural-azucares-tequila'},
      {meta:'GC · FID',title:'Alcoholes superiores y congéneres',text:'Perfil de compuestos volátiles para comparación entre lotes.',href:'/aplicaciones/alcoholes-superiores-congeneres'},
      {meta:'GC · Headspace',title:'Metanol en bebidas alcohólicas',text:'Determinación de compuestos volátiles con inyección de espacio de cabeza.',href:'/aplicaciones/metanol-bebidas-alcoholicas'},
    ],
    solutions:['ChroZen HPLC con detección UV y RID','ChroZen GC con FID y headspace','Columnas y consumibles para destilados y bebidas','Montaje de método, capacitación e IQ/OQ'],
  },
  'alimentos y bebidas': {
    title:'Instrumentación y soporte para laboratorios de alimentos y bebidas.',
    lead:'Conservadores, edulcorantes, aromas, colorantes, contaminantes y control de calidad para materias primas y producto terminado.',
    image:'/images/industria-alimentos.png',imageAlt:'Alimentos y bebidas para análisis de laboratorio',
    retos:['Liberar producto con resultados comparables entre lotes','Controlar formulaciones, aditivos y materias primas','Detectar contaminantes o adulteraciones en matrices complejas','Documentar métodos conforme a AOAC, NOM y especificaciones internas'],
    applications:[
      {meta:'HPLC · UV/DAD',title:'Conservadores y edulcorantes',text:'Cuantificación de aditivos para verificación de formulación y liberación.',href:'/aplicaciones/conservadores-edulcorantes'},
      {meta:'GC-MS',title:'Aromas, sabores y compuestos volátiles',text:'Perfil de compuestos volátiles para control sensorial y comparación de lotes.',href:'/aplicaciones/aromas-sabores-volatiles'},
      {meta:'HPLC · GC-MS',title:'Contaminantes y control de calidad',text:'Configuraciones para matrices de alimentos, bebidas y materias primas.',href:'/aplicaciones/contaminantes-control-calidad'},
    ],
    solutions:['HPLC/UHPLC con UV, DAD o RID','GC-MS y preparación de muestra para matrices complejas','Columnas analíticas y consumibles para alimentos','Transferencia de método y soporte documental'],
  },
  'análisis ambiental': {
    title:'Instrumentación y soporte para laboratorios de análisis ambiental.',
    lead:'Compuestos orgánicos volátiles y semivolátiles, aniones, cationes y contaminantes en agua, suelo, aire y residuos, con métodos trazables.',
    image:'/images/industria-ambiental.png',imageAlt:'Muestras ambientales para análisis de laboratorio',
    retos:['Cumplir métodos EPA y límites de detección exigentes','Procesar matrices variables sin perder trazabilidad','Reducir tiempos de preparación y entrega de resultados','Mantener calibraciones, controles y evidencia auditables'],
    applications:[
      {meta:'GC-MS · Purge & Trap',title:'VOCs en agua y matrices ambientales',text:'Preparación automatizada y determinación de compuestos orgánicos volátiles.',href:'/aplicaciones/vocs-ambientales'},
      {meta:'GC-MS',title:'SVOCs y contaminantes orgánicos',text:'Identificación y cuantificación de semivolátiles en muestras ambientales.',href:'/aplicaciones/svocs-contaminantes-organicos'},
      {meta:'IC',title:'Aniones y cationes en agua',text:'Cromatografía iónica para control de agua potable, residual y de proceso.',href:'/aplicaciones/aniones-cationes-agua'},
    ],
    solutions:['GC-MS con sistema de purga y trampa','Automuestreo y preparación para matrices ambientales','Cromatografía iónica para aniones y cationes','Métodos EPA, capacitación y documentación de resultados'],
  },
  'la industria farmacéutica': {
    title:'Instrumentación y soporte para laboratorios farmacéuticos.',
    lead:'Ensayo, impurezas, estabilidad, disolución y transferencia de métodos con control documental para laboratorios de calidad y desarrollo.',
    image:'/images/industria-farmaceutica.png',imageAlt:'Medicamentos y productos farmacéuticos para análisis de laboratorio',
    retos:['Asegurar repetibilidad y trazabilidad en cada resultado','Reducir tiempos de análisis sin comprometer la calidad','Transferir métodos entre equipos y laboratorios','Sostener auditorías, calificaciones y documentación regulatoria'],
    applications:[
      {meta:'HPLC · UHPLC',title:'Ensayo e impurezas',text:'Cuantificación de principio activo y perfiles de impurezas en producto terminado.',href:'/aplicaciones/ensayo-impurezas'},
      {meta:'Disolución',title:'Liberación y desempeño del producto',text:'Configuraciones para comparar perfiles de disolución y especificaciones de calidad.',href:'/aplicaciones/disolucion-producto'},
      {meta:'Estabilidad',title:'Estudios de estabilidad',text:'Seguimiento de degradantes y cambios del producto durante su vida útil.',href:'/aplicaciones/estudios-estabilidad'},
    ],
    solutions:['ChroZen HPLC/UHPLC con UV o DAD','Columnas, viales y consumibles para métodos regulados','Transferencia y verificación de métodos','Protocolos IQ/OQ/PQ y capacitación documental'],
  },
  'academia e investigación': {
    title:'Instrumentación y soporte para academia e investigación.',
    lead:'Equipos, métodos y capacitación para docencia, desarrollo de métodos e investigación aplicada, con configuraciones que pueden crecer con el laboratorio.',
    image:'/images/industria-academia.png',imageAlt:'Laboratorio académico y de investigación',
    retos:['Compartir equipos entre clases, proyectos y grupos de investigación','Enseñar operación segura y buenas prácticas de laboratorio','Desarrollar métodos reproducibles con presupuesto controlado','Conservar continuidad cuando cambian operadores y proyectos'],
    applications:[
      {meta:'HPLC · Docencia',title:'Prácticas de separación y cuantificación',text:'Ejercicios de preparación de muestra, identificación y cuantificación por HPLC.',href:'/aplicaciones/hplc-docencia'},
      {meta:'GC · Investigación',title:'Compuestos volátiles y perfiles de muestra',text:'Análisis de mezclas, desarrollo de métodos y comparación de matrices.',href:'/aplicaciones/compuestos-volatiles-investigacion'},
      {meta:'UV-Vis · Espectroscopía',title:'Métodos instrumentales para enseñanza',text:'Determinaciones accesibles para cursos, tesis y proyectos de investigación.',href:'/aplicaciones/metodos-uv-vis-ensenanza'},
    ],
    solutions:['HPLC modular para docencia y desarrollo de métodos','GC y detectores para investigación aplicada','UV-Vis y consumibles para prácticas de laboratorio','Capacitación de operadores y mantenimiento programado'],
  },
  'la industria y energía': {
    title:'Instrumentación y soporte para industria y energía.',
    lead:'Gases, hidrocarburos, solventes, agua de proceso y materiales. Configuramos sistemas para control de proceso, calidad y continuidad operativa.',
    image:'/images/industria-industrial-energia.png',imageAlt:'Industria y energía para análisis de laboratorio',
    retos:['Obtener resultados a tiempo para decisiones de proceso','Analizar matrices complejas y concentraciones variables','Mantener equipos disponibles en operaciones críticas','Integrar seguridad, trazabilidad y métodos de rutina'],
    applications:[
      {meta:'GC · FID/TCD',title:'Hidrocarburos, gases y solventes',text:'Separación y cuantificación para materias primas, producto y control de proceso.',href:'/aplicaciones/hidrocarburos-gases-solventes'},
      {meta:'GC · PFPD/TEA',title:'Compuestos específicos en proceso',text:'Detección selectiva para azufrados, nitrógeno y otras familias de interés.',href:'/aplicaciones/compuestos-especificos-proceso'},
      {meta:'IC · Agua de proceso',title:'Iones y calidad del agua',text:'Seguimiento de aniones y cationes en agua de proceso y servicios industriales.',href:'/aplicaciones/iones-agua-proceso'},
    ],
    solutions:['ChroZen GC con FID, TCD y detectores selectivos','Preparación y muestreo para gases y solventes','Cromatografía iónica para agua de proceso','Servicio multimarca y mantenimiento de continuidad operativa'],
  },
}

const Empty = ({image,alt}:{image:string,alt:string}) => <div className="placeholder"><img src={image} alt={alt}/></div>
const Card = ({item}:{item:Application}) => <Link href={item.href ?? '#'} className="card"><span className="badge blue">{item.meta}</span><h4>{item.title}</h4><p>{item.text}</p><span className="text-link">Ver detalle →</span></Link>

export function IndustryDetail({industry='bebidas alcohólicas'}:{industry?:string}){
  const p = profiles[industry] ?? profiles['bebidas alcohólicas']
  return <><header className="page-hero"><div className="container"><span className="breadcrumbs"><Link href="/">Inicio</Link> · Industrias</span><span className="eyebrow">Industria</span><h1>{p.title}</h1><p className="lead">{p.lead}</p><a className="btn btn-wa" style={{width:'max-content'}} href={WA}>Consultar mi laboratorio por WhatsApp</a></div></header><section className="section"><div className="container grid-2"><div className="stack"><h2>Retos del sector</h2><ul className="feature-list">{p.retos.map(item=><li key={item}>{item}</li>)}</ul></div><Empty image={p.image} alt={p.imageAlt}/></div></section><section className="section tint"><div className="container stack-lg"><div className="stack"><span className="eyebrow">Aplicaciones</span><h2>Aplicaciones que puedes implementar en tu laboratorio</h2><p className="lead">La técnica indicada es orientativa. La ficha de cada aplicación establece la ruta, sus fuentes y sus limitaciones.</p></div><div className="grid-3">{p.applications.map(item=><Card item={item} key={item.title}/>)}</div></div></section><section className="section"><div className="container grid-2"><article className="card accent"><h4>Equipos y soluciones asociadas</h4>{p.solutions.map(item=><span className="list-line" key={item}>{item}<b className="text-link">→</b></span>)}</article><article className="card"><h4>Montaje y servicio para este sector</h4><p>Configuración, instalación, montaje de condiciones, capacitación, IQ/OQ y mantenimiento según el alcance del proyecto.</p><Link className="text-link" href="/servicio">Ver todos los servicios →</Link></article></div></section></>
}
