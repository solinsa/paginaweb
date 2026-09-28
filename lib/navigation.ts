// Destinations for application cards with an existing detail page.
export const applicationLinks: Record<string, string> = {
  'Furfural y azúcares en bebidas destiladas': '/aplicaciones/furfural-azucares-tequila',
  'Conservadores y edulcorantes en alimentos': '/aplicaciones/conservadores-edulcorantes',
  'Alcoholes superiores y congéneres en destilados': '/aplicaciones/alcoholes-superiores-congeneres',
  'COV en agua por purga y trampa': '/aplicaciones/vocs-ambientales',
  'Análisis espectral con detector VUV': '/soluciones/detector-vuv',
  'Aniones comunes en agua potable': '/aplicaciones/aniones-cationes-agua',
  'Cationes de alkali y alcalinotérreos': '/aplicaciones/aniones-cationes-agua',
  'Selección de columna HPLC': '/soluciones/columnas-hplc',
  'Bibliotecas espectrales para GC-MS': '/soluciones/bibliotecas-espectrales',
  'Instrumentación para académia': '/industrias/academia',
}

export const consultationLink = (subject: string) =>
  `https://wa.me/522201432743?text=${encodeURIComponent(`Hola, quisiera información sobre: ${subject}.`)}`
