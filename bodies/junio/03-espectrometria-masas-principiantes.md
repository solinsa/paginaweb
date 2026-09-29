La espectrometría de masas es una de las técnicas más poderosas en el laboratorio analítico moderno. Este artículo está diseñado para analistas que se inician en la técnica y quieren entender sus fundamentos.

## ¿Qué es un Espectrómetro de Masas?

Un espectrómetro de masas es un instrumento que mide la relación masa-carga (m/z) de iones en fase gaseosa. Produce un espectro de masas — un gráfico de abundancia vs. m/z — que sirve como "huella digital" del compuesto.

## Componentes Principales

### 1. Fuente de Ionización

Convierte moléculas neutras en iones. Las dos más comunes en GC-MS:

- **EI (Impacto Electrónico)**: electrones de 70 eV fragmentan la molécula. Produce espectros reproducibles y comparables con bibliotecas (NIST, Wiley). Es la técnica más usada.
- **CI (Ionización Química)**: gas reactivo (metano, amoniaco) ioniza suavemente. Produce [M+H]⁺ con mínima fragmentación, ideal para determinar masa molecular.

### 2. Analizador de Masas

Separa los iones por su relación m/z. Los tipos principales:

- **Cuadrupolo (Q)**: cuatro barras metálicas con campos eléctricos alternos. Filtra iones de una m/z específica. Robusto, económico, ideal para rutina.
- **Trampa de iones (IT)**: atrapa iones y los expulsa selectivamente. Permite MSⁿ (múltiples etapas de fragmentación).
- **Tiempo de Vuelo (TOF)**: mide el tiempo que tarda un ion en recorrer un tubo. Alta resolución y velocidad. Ideal para huellas dactilares precisas.

### 3. Detector

Convierte la corriente iónica en señal eléctrica. Multiplicador de electrones (EM) es el estándar. Fotomultiplicador (PMT) para aplicaciones de alta sensibilidad.

## Interpretación de un Espectro de Masas

### Elementos Clave

- **Ion molecular (M⁺)**: pico correspondiente a la molécula intacta. Indica la masa molecular. En EI no siempre se observa.
- **Pico base**: el pico más abundante (100% de intensidad relativa).
- **Patrón isotópico**: la abundancia natural de ¹³C, ³⁷Cl, ⁸¹Br genera picos M+1, M+2 característicos.
- **Fragmentos**: iones más pequeños producto de la ruptura de enlaces.

### Reglas Básicas de Fragmentación

- Alcanos: pérdida de fragmentos de 14 Da (CH₂) — serie de fragmentos a m/z 43, 57, 71, 85
- Alcoholes: pérdida de H₂O (-18), fragmento a m/z 31 (CH₂=OH⁺)
- Cetonas: fragmentación alfa, pico a m/z 43 (CH₃CO⁺) para metil-cetonas
- Ésteres: pico a m/z 74 para ésteres metílicos (reordenamiento de McLafferty)
- Aromáticos: pico base intenso del ion molecular, fragmentos a m/z 77, 51

## Tipos de Barrido (Scan)

### Full Scan (Barrido Completo)

Barre todo el rango de masas (ej. 40-500 m/z). Obtienes el espectro completo. Ideal para identificación y screening. Menos sensible.

### SIM (Single Ion Monitoring)

Monitorea solo unos pocos iones seleccionados. Hasta 100× más sensible que full scan. Ideal para cuantificación de trazas.

### MRM (Multiple Reaction Monitoring)

En MS/MS: seleccionas un ion precursor, lo fragmentas, y monitoreas iones producto específicos. La máxima selectividad y sensibilidad.

## Conclusión

La espectrometría de masas es una técnica accesible si se entienden sus fundamentos. Conocer los tipos de ionización, analizadores y modos de barrido te permite elegir la configuración adecuada para cada aplicación. La práctica en la interpretación de espectros viene con la experiencia, pero las reglas básicas de fragmentación son el punto de partida.
