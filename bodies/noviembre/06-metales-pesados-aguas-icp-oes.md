---
title: "Determinación de Metales Pesados en Aguas Residuales por ICP-OES para Cumplimiento de la NOM-001-SEMARNAT"
published: 2025-11-20
category: cat-ind-ambiental
tags: [ICP-OES, metales pesados, aguas residuales, NOM-001, SEMARNAT, EPA 200.7, descargas, Cd, Pb, Hg, As, Cr, Ni, Zn]
audience: [T1-Ambiental]
lang: es-MX
wordcount: ~1500
---

# Determinación de Metales Pesados en Aguas Residuales por ICP-OES para Cumplimiento de la NOM-001-SEMARNAT

## 1. Introducción

El agua es un recurso estratégico para México, y su protección es una prioridad ambiental y sanitaria. La descarga de aguas residuales de origen industrial, municipal y de servicios representa una de las principales vías de introducción de contaminantes —entre ellos los metales pesados— a los cuerpos receptores del país. Metales como plomo (Pb), cadmio (Cd), mercurio (Hg), arsénico (As), cromo (Cr), níquel (Ni) y zinc (Zn), aún en concentraciones traza, pueden bioacumularse en la cadena trófica y representar riesgos crónicos para la salud humana y los ecosistemas.

Para regular estas descargas, la Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT) publicó la **NOM-001-SEMARNAT-2021**, que establece los límites máximos permisibles (LMP) de contaminantes en las descargas de aguas residuales vertidas a aguas y bienes nacionales. Su cumplimiento exige métodos analíticos robustos, exactos y sensibles. En este contexto, la espectrometría de emisión óptica con plasma acoplado inductivamente (ICP-OES) se ha consolidado como la técnica de elección para la determinación multielemental de metales pesados, combinando alta sensibilidad, amplio rango dinámico y capacidad de análisis simultáneo.

En el presente artículo se aborda el marco regulatorio, el método EPA 200.7 como referencia, la preparación de muestras, los principales interferentes espectrales y las estrategias de control de calidad necesarias para generar resultados confiables y defendibles ante la autoridad.

## 2. Contexto Regulatorio: NOM-001-SEMARNAT-2021

La NOM-001-SEMARNAT-2021 sustituyó a su predecesora de 1996 y entró en vigor plenamente en 2023. Esta norma oficial mexicana establece los LMP de contaminantes básicos, metales pesados y compuestos orgánicos tóxicos en descargas de aguas residuales. Aplica a todas las descargas que se realicen a:

- **Aguas nacionales** (ríos, arroyos, canales, lagos, lagunas, esteros, estuarios, humedales y aguas costeras).
- **Bienes nacionales** (suelos de uso agrícola, zonas de recarga de acuíferos, barrancas, cauces secos).
- **Sistemas de alcantarillado municipal** (solo cuando el municipio lo requiera o el generador descargue directamente a un cuerpo receptor).

El organismo de cuenca de la CONAGUA es la autoridad encargada de verificar el cumplimiento, apoyándose en laboratorios acreditados bajo la NMX-EC-17025-IMNC (ISO/IEC 17025).

## 3. Límites Máximos Permisibles por Tipo de Descarga

La NOM-001-SEMARNAT-2021 establece valores diferenciados según el tipo de cuerpo receptor. La tabla siguiente resume los LMP para los metales pesados más relevantes, expresados en miligramos por litro (mg/L):

| Metal | Símbolo | Alcantarillado (mg/L) | Ríos / Embalses (mg/L) | Suelo (mg/L) | Aguas Costeras (mg/L) |
|-------|---------|-----------------------|------------------------|--------------|------------------------|
| Arsénico | As | 0.2 | 0.1 | 0.2 | 0.1 |
| Cadmio | Cd | 0.1 | 0.05 | 0.1 | 0.05 |
| Cobre | Cu | 4.0 | 2.0 | 4.0 | 2.0 |
| Cromo total | Cr | 0.5 | 0.5 | 1.0 | 0.5 |
| Mercurio | Hg | 0.005 | 0.002 | 0.005 | 0.002 |
| Níquel | Ni | 2.0 | 1.0 | 2.0 | 1.0 |
| Plomo | Pb | 0.5 | 0.2 | 0.5 | 0.2 |
| Zinc | Zn | 6.0 | 4.0 | 6.0 | 4.0 |

*Límites expresados como concentración total (mg/L). Se debe consultar la NOM-001-SEMARNAT-2021 vigente para valores exactos y para metales adicionales como selenio, barío y cianuro.*

## 4. Método EPA 200.7: ICP-OES para Aguas y Descargas

El **Método EPA 200.7 (Revision 4.4)** — *Determination of Metals and Trace Elements in Water and Wastes by Inductively Coupled Plasma-Atomic Emission Spectrometry*— es el método de referencia reconocido internacionalmente para el análisis de metales en aguas naturales, residuales, lixiviados y digestas. La SEMARNAT y la CONAGUA lo aceptan como método de prueba siempre que el laboratorio demuestre competencia técnica.

### Principio del método

El ICP-OES utiliza un plasma de argón acoplado inductivamente (aproximadamente 6,000–10,000 K) para atomizar y excitar los elementos de interés. Cada elemento, al regresar a su estado fundamental, emite fotones a longitudes de onda características. La intensidad de la radiación emitida es proporcional a la concentración del elemento en la muestra, de acuerdo con la ley de Lambert-Beer adaptada a emisión.

Una vez calibrado el equipo con estándares multielementales certificados, es posible cuantificar simultáneamente hasta 30 elementos en menos de 3 minutos por muestra, lo que convierte al ICP-OES en una herramienta de alto rendimiento ideal para laboratorios ambientales con altos volúmenes de análisis.

## 5. Preparación de Muestra: Digestión Ácida

La preparación de la muestra es la etapa más crítica del proceso analítico. Las aguas residuales contienen materia orgánica disuelta, sólidos suspendidos y partículas coloidales que pueden atrapar o complejar metales. Sin una digestión adecuada, los resultados subestimarán la concentración real.

### EPA 3005A — Digestión de aguas para meteles totales

Aplica a muestras de agua superficial, residual y lixiviados. Consiste en:

1. Tomar una alícuota homogénea de 100 mL de muestra.
2. Adicionar 2 mL de HNO₃ concentrado (grado traza de metales) y 1 mL de HCl concentrado.
3. Calentar sobre placa a 85–95 °C sin hervir, reduciendo el volumen a ~20 mL.
4. Enfriar, filtrar si es necesario (papel Whatman No. 41 o membrana 0.45 µm), y aforar a 50 mL con agua desionizada tipo I.

### EPA 3010A — Digestión ácida para metales totales en aguas

Similar a la 3005A, pero diseñada para ser usada directamente con ICP-OES. Se emplea solo HNO₃, y la muestra digerida se afora al volumen original, garantizando que no haya pérdidas por evaporación excesiva.

Ambos métodos garantizan que los metales quelados o adsorbidos a partículas queden en solución como iones libres, cuantificables por ICP-OES.

### Recomendaciones prácticas para el laboratorio

- Todos los ácidos deben ser grado traza de metales (≤ 1 ppb de impurezas).
- La cristalería debe lavarse con HNO₃ al 10% v/v y enjuagarse abundantemente con agua desionizada.
- Incluir un blanco de digestión por cada lote de 20 muestras.
- Si la muestra contiene altos sólidos (>1% p/p), realizar una digestión asistida por microondas (EPA 3015A) para asegurar una disolución completa.

## 6. Interferencias Espectrales en ICP-OES para Matrices de Aguas Residuales

Las matrices de aguas residuales presentan desafíos particulares en ICP-OES debido a la presencia de altas concentraciones de elementos mayoritarios (Na, Ca, Mg, Fe, Al) que pueden generar interferencias espectrales y matriciales.

### Tipos de interferencias

**Interferencias espectrales por superposición de líneas:** Ocurren cuando la longitud de onda de emisión de un analito coincide o se solapa con la de otro elemento presente en la muestra. Ejemplo clásico: la línea principal de arsénico (193.696 nm) puede ser interferida por aluminio (193.692 nm) en matrices ricas en este metal.

**Interferencias de fondo:** La emisión de fondo del plasma puede aumentar o disminuir en presencia de altos sólidos disueltos, afectando la exactitud de la medición. Esto es particularmente crítico en aguas residuales con alta salinidad (conductividad > 2,000 µS/cm).

**Interferencias físicas o matriciales:** La presencia de altas concentraciones de sodio, calcio o magnesio modifica las propiedades de transporte de la muestra (viscosidad, tensión superficial, eficiencia del nebulizador), alterando la cantidad de analito que llega al plasma.

### Estrategias de corrección

| Estrategia | Descripción |
|------------|-------------|
| **Corrección de fondo** | El software del ICP-OES mide puntos adyacentes a la línea del analito y sustrae la señal de fondo. Para matrices complejas, se recomienda corrección de fondo dinámica (punto por punto). |
| **Líneas alternativas** | Para As, utilizar la línea 188.979 nm (menos sensible pero libre de interferencia de Al). Para Pb, la línea 220.353 nm en lugar de la 405.783 nm si hay exceso de Fe. |
| **Estandarización interna** | Agregar itrio (Y), lutecio (Lu) o escandio (Sc) a todas las muestras, blancos y estándares compensa variaciones en el transporte, potencia del plasma y deriva instrumental. |
| **Ecuaciones de corrección interelemento (IEC)** | El software del equipo aplica factores matemáticos que corrigen la contribución espectral de interferentes conocidos (p. ej., Fe sobre Cd). |

## 7. Control de Calidad: Confiabilidad y Defendibilidad de los Resultados

El laboratorio que reporta resultados ante SEMARNAT debe demostrar que sus datos son técnicamente válidos. Las siguientes prácticas son indispensables y deben documentarse en el sistema de gestión de calidad:

### Blancos

- **Blanco de campo:** Agua desionizada expuesta a las mismas condiciones de muestreo (recipiente abierto). Detecta contaminación durante la recolección y transporte.
- **Blanco de equipo:** Agua procesada a través del equipo de filtración/digestión. Detecta contaminación en el material de laboratorio.
- **Blanco de método:** Matriz similar a la muestra sin analitos, sometida a digestión completa. Su señal debe ser menor al límite de detección del método (MDL).

### Materiales de Referencia Certificados (CRM)

Se recomiendan:

- **NIST SRM 1643f** — *Trace Elements in Water* (matriz de agua fresca).
- **ERA QCS Metals in Water** — Material de control comercial con trazabilidad NIST.

El CRM debe analizarse al inicio del lote y cada 10 muestras. El porcentaje de recuperación debe estar entre 85–115% (o 80–120% cerca del LMP).

### Duplicados y Fortificaciones

- **Duplicado de laboratorio:** Tomar una muestra por cada lote de 20 y analizarla por duplicado. La diferencia relativa porcentual (RPD) debe ser ≤ 20%.
- **Fortificación (spike):** Una muestra del lote se fortifica con una concentración conocida de analito. La recuperación debe estar entre 80–120%.

### Verificación de la calibración

- Calibración inicial con al menos 5 estándares y un blanco (coeficiente de correlación > 0.999).
- Verificación de calibración cada 10 muestras con un estándar de concentración intermedia (recuperación 90–110%).
- Reanálisis si la verificación de calibración falla.

## 8. Generación del Reporte para Cumplimiento ante SEMARNAT

Cuando se reportan resultados para la Cédula de Operación Anual (COA) o para un dictamen de cumplimiento de descarga, se deben incluir:

1. **Identificación del permiso de descarga** (registro otorgado por CONAGUA).
2. **Nombre del generador** y ubicación del punto de descarga.
3. **Tipo de cuerpo receptor** (alcantarillado, río, embalse, suelo, agua costera).
4. **Parámetros analizados** con sus respectivos LMP y resultados en mg/L.
5. **Límite de detección del método (MDL)** y límite de cuantificación (LOQ).
6. **Resumen de control de calidad:** resultados de blancos, CRM, duplicados y fortificaciones.
7. **Declaración de cumplimiento** (conforme / no conforme) por cada parámetro.
8. **Firma del responsable técnico** y sello del laboratorio acreditado.

Los resultados fuera de los LMP pueden dar lugar a sanciones económicas (multas de hasta 50,000 UMA), clausura temporal o, en casos graves, suspensión del permiso de descarga. Por ello, la confiabilidad analítica no es solo una cuestión técnica, sino también legal y financiera.

## 9. Conclusión y Recomendaciones

La determinación de metales pesados en aguas residuales mediante ICP-OES es una metodología madura, normalizada y plenamente aceptada por la autoridad ambiental mexicana. Cuando se ejecuta con la preparación de muestra adecuada (digestión con HNO₃/HCl según EPA 3005A o 3010A), con un control de calidad riguroso (CRM, duplicados, fortificaciones, estándares internos) y con la corrección de interferencias apropiada, esta técnica entrega resultados con la exactitud y precisión que exige la NOM-001-SEMARNAT-2021.

Para el laboratorio ambiental mexicano, invertir en un ICP-OES de última generación —con cámara de CCD o detector de estado sólido, corrección de fondo automatizada y librería de líneas alternativas— se traduce en mayor capacidad de respuesta, menores costos por muestra y, sobre todo, la tranquilidad de reportar datos defendibles ante las autoridades.

En **Solinsa** ofrecemos equipos ICP-OES de las marcas líderes, consumibles grado traza (ácidos, estándares multielementales, gases de alta pureza) y CRM trazables NIST. Además, nuestro equipo técnico brinda asesoría en la implementación de los métodos EPA 200.7, EPA 3005A y EPA 3010A, desde la puesta en marcha del método hasta la generación del reporte final de cumplimiento. Contáctenos para recibir una propuesta personalizada para su laboratorio.

---

## Referencias

1. NOM-001-SEMARNAT-2021. *Límites máximos permisibles de contaminantes en las descargas de aguas residuales en aguas y bienes nacionales*. DOF, 11 de marzo de 2021.
2. US EPA Method 200.7, Revision 4.4. *Determination of Metals and Trace Elements in Water and Wastes by Inductively Coupled Plasma-Atomic Emission Spectrometry*. Cincinnati, OH, 1994.
3. US EPA Method 3005A. *Acid Digestion of Waters for Total Recoverable or Dissolved Metals for Analysis by Flame Atomic Absorption (FLAA) or Inductively Coupled Plasma (ICP) Spectroscopy*. 1992.
4. US EPA Method 3010A. *Acid Digestion of Aqueous Samples and Extracts for Total Metals for Analysis by FLAA or ICP Spectroscopy*. 1992.
5. NMX-EC-17025-IMNC-2018. *Requisitos generales para la competencia de los laboratorios de ensayo y de calibración*.
6. NIST SRM 1643f Certificate of Analysis. *Trace Elements in Water*. National Institute of Standards and Technology, 2020.
7. Skoog, D. A., Holler, F. J., & Crouch, S. R. *Principios de Análisis Instrumental*. 7ª ed. Cengage Learning, 2017.
