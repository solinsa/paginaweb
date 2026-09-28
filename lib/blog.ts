export type BlogSection = {
  heading: string
  text: string
  image?: string
  imageAlt?: string
}

export type BlogPost = {
  slug: string
  category: string
  title: string
  summary: string
  date: string
  readTime: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-elegir-columna-analitos-coeluyen',
    category: 'Consumibles',
    title: 'Cómo elegir columna para analitos que coeluyen',
    summary: 'Criterios de selectividad, fase estacionaria y dimensiones antes de cambiar el método.',
    date: '14 agosto 2026',
    readTime: '7 min',
    sections: [
      {heading: 'Empieza por el problema de selectividad', text: 'Cuando dos analitos coeluyen, cambiar de marca no es suficiente. Documenta la resolución actual, la matriz, el modo de elución y qué pico necesitas separar antes de elegir una fase nueva.'},
      {heading: 'La fase estacionaria define la interacción', text: 'C18, fenil, HILIC e intercambio iónico responden a mecanismos distintos. La elección debe partir de la polaridad, la carga y la química de los analitos, no solo de la columna que otro método ya utiliza.'},
      {heading: 'Dimensiones y transferencia al equipo', text: 'Longitud, diámetro interno y tamaño de partícula cambian la presión, el consumo de fase móvil y el tiempo de análisis. Conserva el volumen de inyección y ajusta el flujo con criterio para que el método siga siendo transferible.'},
    ],
  },
  {
    slug: 'iq-oq-pq-calificaciones',
    category: 'Cumplimiento',
    title: 'IQ, OQ y PQ: qué documenta cada calificación',
    summary: 'Qué demuestra cada protocolo y cómo definir el alcance con calidad y operación.',
    date: '05 agosto 2026',
    readTime: '9 min',
    sections: [
      {heading: 'IQ: el equipo quedó instalado como se aprobó', text: 'La calificación de instalación verifica identidad, accesorios, servicios, documentación y condiciones del sitio. El objetivo es demostrar que el sistema está instalado de acuerdo con la especificación aprobada.'},
      {heading: 'OQ: el sistema funciona dentro de sus límites', text: 'La calificación operacional prueba funciones y alarmas en rangos definidos. Incluye los criterios de aceptación que permiten saber si bomba, detector, horno, automuestreador y software responden como se espera.'},
      {heading: 'PQ: el desempeño sirve para tu aplicación', text: 'La calificación de desempeño conecta el equipo con el método y la matriz real. Se documentan repeticiones, precisión, resolución u otros atributos que demuestran que el sistema sostiene la operación prevista.'},
    ],
  },
  {
    slug: 'plan-anual-mantenimiento-equipos',
    category: 'Operación',
    title: 'Plan anual de mantenimiento para seis equipos críticos',
    summary: 'Cómo ordenar intervenciones, consumibles y ventanas sin detener el laboratorio.',
    date: '28 julio 2026',
    readTime: '6 min',
    sections: [
      {heading: 'Clasifica el riesgo operativo', text: 'No todos los equipos requieren la misma frecuencia. Ordena el parque por criticidad, respaldo disponible, impacto en liberación de lote y tiempo de recuperación ante una falla.'},
      {heading: 'Agrupa actividades y consumibles', text: 'Un calendario útil combina inspecciones, limpieza, refacciones de desgaste y pruebas de cierre. Tener sellos, lámparas, filtros y viales definidos con anticipación evita que el mantenimiento se convierta en una parada no planeada.'},
      {heading: 'Reserva ventanas que respeten la operación', text: 'Programa cada intervención alrededor de campañas, auditorías y fechas de entrega. El plan debe indicar responsable, duración, evidencia requerida y criterio para regresar el equipo a servicio.'},
    ],
  },
  {
    slug: 'furfural-azucares-bebidas-hplc',
    category: 'Métodos',
    title: 'Furfural y azúcares en bebidas destiladas por HPLC',
    summary: 'La ruta de detección UV y RID y los datos que definen la configuración.',
    date: '17 julio 2026',
    readTime: '8 min',
    sections: [
      {heading: 'Dos determinaciones con objetivos distintos', text: 'El furfural ayuda a seguir el efecto del proceso térmico y de la madera, mientras que los azúcares residuales aportan información sobre la caracterización del lote. La configuración debe considerar ambos comportamientos.'},
      {heading: 'UV y RID en un mismo sistema', text: 'La detección UV y el índice de refracción requieren condiciones compatibles de flujo, temperatura y preparación de muestra. La columna, el horno y la estabilidad de la línea base son parte de la decisión, no accesorios posteriores.'},
      {heading: 'Qué registrar antes de liberar el método', text: 'Conserva la matriz, concentración de estándares, filtración, tiempos de retención y criterios de aceptación. Esa información permite comparar campañas y detectar cuándo una desviación pertenece al método o al equipo.'},
    ],
  },
  {
    slug: 'presion-hplc-empieza-a-derivar',
    category: 'Mantenimiento',
    title: 'Qué registrar cuando la presión del HPLC empieza a derivar',
    summary: 'Una bitácora breve que convierte una sospecha en evidencia comparable.',
    date: '08 julio 2026',
    readTime: '5 min',
    sections: [
      {heading: 'La presión de referencia es el primer dato', text: 'Registra columna, flujo, composición, temperatura y presión al inicio de cada secuencia. Una presión alta aislada no cuenta la misma historia que una presión que cambia con las mismas condiciones.'},
      {heading: 'Separa el problema de la columna del sistema', text: 'Compara una columna conocida, revisa filtros y observa si la presión se estabiliza. Aire, sellos, válvulas de retención y conexiones pueden producir síntomas parecidos, pero requieren intervenciones distintas.'},
      {heading: 'Decide cuándo programar servicio', text: 'Si la tendencia persiste después de revisar consumibles y purgar correctamente, documenta la evidencia y programa una inspección. Esperar a que el equipo se detenga suele ampliar el alcance y la ventana de recuperación.'},
    ],
  },
  {
    slug: 'como-elegir-septum',
    category: 'Consumibles',
    title: 'Antes de pedir un septum: cinco datos que evitan errores',
    summary: 'Material, temperatura, diámetro, espesor y compatibilidad con la aplicación.',
    date: '29 junio 2026',
    readTime: '4 min',
    sections: [
      {heading: 'Identifica el equipo y el puerto', text: 'La referencia del septum depende del inyector, vial o automuestreador. Confirma marca, modelo y geometría antes de pedir una equivalencia.'},
      {heading: 'Elige el material por temperatura y solvente', text: 'Silicona, PTFE y materiales compuestos tienen límites de temperatura y compatibilidad diferentes. La selección debe considerar el solvente, el tiempo de contacto y la frecuencia de perforación.'},
      {heading: 'Verifica diámetro, espesor y desempeño', text: 'Un septum correcto debe sellar sin deformarse y permitir perforaciones repetidas sin generar partículas ni fugas. Registra la referencia que funciona en tu método para que la reposición sea comparable.'},
    ],
  },
  {
    slug: 'siete-senales-hplc-servicio',
    category: 'Mantenimiento',
    title: 'Siete señales de que tu HPLC necesita servicio antes de detenerse.',
    summary: 'Presión errática, ruido en la línea base y picos que se ensanchan sin haber cambiado la columna.',
    date: '12 agosto 2026',
    readTime: '8 min',
    sections: [
      {heading: '1. La presión ya no regresa al mismo valor', text: 'El primer indicador no es una presión alta, es una presión inestable. Si con la misma columna, el mismo flujo y la misma fase móvil el sistema se estabiliza cada vez en un valor distinto, hay algo cambiando: sellos de pistón, una válvula de retención sucia o aire en la línea. Registra el valor de presión de referencia al iniciar cada secuencia; sin ese dato la deriva se vuelve invisible.', image: '/images/blog/hplc-servicio.png', imageAlt: 'Ingeniero de servicio revisando un sistema HPLC en operación'},
      {heading: '2. La línea base se ensucia siempre a la misma hora', text: 'Cuando el ruido aparece con un patrón horario, el problema casi nunca está en el detector. Revisa temperatura del laboratorio, arranque de otros equipos en la misma línea eléctrica y la calidad del agua del día. Si el patrón persiste con fase móvil recién preparada y celda limpia, entonces sí toca revisar lámpara y celda de flujo.', image: '/images/blog/hplc-linea-base.png', imageAlt: 'Ingeniera de Solinsa revisando un sistema HPLC durante una comprobación de línea base'},
      {heading: '3. Los picos se ensanchan sin haber cambiado nada', text: 'Antes de culpar a la columna, revisa el camino de la muestra: capilares, ferrules, volumen muerto en las conexiones y el estado del asiento de la aguja. Un ensanchamiento progresivo a lo largo de semanas suele ser suciedad acumulada en el frit de entrada, y se documenta comparando el ancho de pico a media altura del mismo estándar entre secuencias. Cuando el laboratorio guarda ese registro, la decisión deja de ser una opinión. Se ve en qué semana empezó el cambio, se ordena la refacción con tiempo y el servicio se programa en la ventana que menos afecta la operación.'},
    ],
  },
]

export const blogPostsBySlug = Object.fromEntries(blogPosts.map(post => [post.slug, post])) as Record<string, BlogPost>
