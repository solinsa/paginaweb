---
title: "Análisis de Metales en la Industria Minera por ICP-OES: Métodos y Preparación de Muestra"
published: 2025-10-13
category: cat-icp
tags: [ICP-OES, minería, metales, digestión, EPA 6010, suelos, rocas, elementos traza]
audience: [T1-Ambiental, T1-Química]
lang: es-MX
wordcount: ~1500
---

## Introducción

La industria minera mexicana —que produce oro, plata, cobre, zinc, plomo y hierro entre los metales principales— depende de análisis elementales precisos para la exploración, el desarrollo de yacimientos, el control metalúrgico y el cumplimiento ambiental. Cada etapa del ciclo minero exige información sobre la composición química del material, desde la roca en el tajo hasta el concentrado final listo para exportación.

La espectrometría de emisión óptica con plasma acoplado inductivamente (ICP-OES) se ha convertido en la técnica de elección para el análisis de metales en minería por tres razones fundamentales: su capacidad multielemental simultánea (hasta 70 elementos en una sola medición), su amplio rango dinámico lineal (de ppb a porcentajes) y su robustez frente a matrices geológicas complejas.

> "En minería no hay segundas oportunidades con la muestra: si el resultado de ley de cabeza está mal, toda la planta de beneficio opera con información incorrecta desde el primer día."

Este artículo cubre los métodos de preparación de muestra, los estándares EPA aplicables, las interferencias típicas y las estrategias de control de calidad que todo laboratorio minero debe dominar para generar resultados confiables por ICP-OES.

## Preparación de Muestra para Matrices Mineras

La preparación de muestra es el paso más crítico en el análisis de metales en minería. Una digestión incompleta produce resultados sistemáticamente bajos que pueden llevar a decisiones erróneas de exploración o valuación de yacimientos.

### Digestión Ácida por Microondas (EPA 3051A / 3052)

El método **EPA 3051A** es el estándar para la digestión de suelos, sedimentos y lodos en horno de microondas. Utiliza ácido nítrico concentrado (HNO₃) a 175-200 °C por 10-15 minutos. Es rápido, seguro y compatible con ICP-OES. Sin embargo, para matrices geológicas complejas (silicatos, óxidos refractarios), el **EPA 3052** con una mezcla de HNO₃ + HF + HCl es más efectivo porque el ácido fluorhídrico disuelve los silicatos.

**Procedimiento típico para muestras de roca y concentrados:**

1. **Molienda:** Reducir la muestra a malla -200 (< 74 µm) para garantizar homogeneidad y ataque ácido completo.
2. **Pesada:** 0.25-0.50 g de muestra en vaso de digestión de PTFE.
3. **Adición de ácidos:** 5 mL HNO₃ + 2 mL HCl + 1 mL HF (para silicatos). Para muestras con alto contenido de materia orgánica, añadir 1 mL de H₂O₂.
4. **Digestión en microondas:** Rampa a 180 °C en 10 min, mantener 15 min.
5. **Filtrado o centrifugación:** Completar a volumen con agua desionizada (típicamente 25 o 50 mL).
6. **Neutralización de HF:** Si se usó HF, añadir ácido bórico al 4 % (10 mL) para neutralizar el exceso y evitar daños al sistema de introducción de muestra del ICP-OES.

| Tipo de muestra | Método EPA | Ácidos | Tiempo de digestión | Elementos recuperados |
|-----------------|------------|--------|---------------------|-----------------------|
| Suelos y sedimentos | 3051A | HNO₃ | 15 min | Ag, Cd, Cu, Pb, Zn, As (parcial en silicatos) |
| Rocas y minerales | 3052 | HNO₃ + HF + HCl | 20 min | Mayoría de metales traza + matriz total |
| Concentrados | 3052 modificado | HNO₃ + HCl + HF + H₂O₂ | 25 min | Au, Ag, Cu, Pb, Zn (recuperación >95 %) |
| Relaves | 3051A o 3052 | Según matriz | 15-20 min | Metales totales y lixiviables |

### Fusión con Peróxido de Sodio (Alkaline Fusion)

Para muestras refractarias (cromita, circón, bauxita, minerales de tierras raras) que no se disuelven completamente con digestión ácida, la **fusión alcalina** es la técnica de referencia.

**Procedimiento:**
1. Mezclar 0.1-0.25 g de muestra con 0.8-1.5 g de peróxido de sodio (Na₂O₂) en crisol de circonio o níquel.
2. Fundir a 500-600 °C por 5-10 min en mufla.
3. Enfriar, disolver el fundido en 10 mL de HNO₃ al 10 %.
4. Calentar suavemente hasta disolución completa y aforar.

**Ventajas:** Disuelve completamente silicatos, óxidos refractarios y minerales de tierras raras. Desventajas: introduce alto contenido de sales (Na) que puede causar efectos de matriz en ICP-OES y requiere enjuagues exhaustivos.

## Métodos EPA Aplicables a Minería

El EPA (Environmental Protection Agency) publica métodos validados que son referencia en todo el continente americano para análisis de suelos, aguas y residuos. Los más relevantes para minería son:

### EPA 6010D — ICP-OES

Es el método general para la determinación de elementos traza en soluciones acuosas y digeridos por ICP-OES. Especifica condiciones instrumentales (potencia de RF: 1.1-1.5 kW, flujo de nebulizador: 0.5-1.0 L/min, flujo de plasma: 12-16 L/min), longitudes de onda de análisis y criterios de control de calidad.

**Elementos prioritarios para minería según EPA 6010D:**

| Elemento | Longitud de onda (nm) | Límite de detección instrumental (µg/L) | Nivel de calibración bajo (mg/L) |
|----------|----------------------|----------------------------------------|----------------------------------|
| Ag | 328.068 | 7 | 0.05 |
| Al | 308.215 | 45 | 0.50 |
| As | 188.980 | 53 | 0.10 |
| Au | 242.795 | 45 | 0.10 |
| Cu | 324.754 | 6 | 0.05 |
| Fe | 259.940 | 7 | 0.10 |
| Pb | 220.353 | 42 | 0.10 |
| Zn | 213.856 | 2 | 0.05 |
| Cd | 214.440 | 3 | 0.02 |
| Cr | 267.716 | 7 | 0.05 |

### EPA 200.7 — Aguas y Descargas

Se usa para el análisis de aguas de proceso, descargas y aguas subterráneas en zonas mineras. Específica digestión con HNO₃/HCl antes del análisis. Es el método de referencia para cumplir con la NOM-001-SEMARNAT-2021 (descargas de aguas residuales) que regula metales como As, Cd, Cu, Cr, Hg, Ni, Pb y Zn.

## Interferencias Espectrales en ICP-OES para Matrices Mineras

Las matrices geológicas presentan interferencias que pueden invalidar los resultados si no se corrigen adecuadamente.

### Interferencias de fondo (background shift)

Las altas concentraciones de hierro (Fe) típicas en minerales (10-50 % Fe₂O₃) generan un fondo espectral elevado en regiones del UV cercano que afecta longitudes de onda de As (188.980, 193.696 nm), Cd (214.440 nm) y Pb (220.353 nm). La corrección se realiza mediante:

- **Corrección de fondo en dos puntos (off-peak):** Se mide la intensidad a ambos lados del pico y se interpola el fondo.
- **Ecuaciones de corrección interferencial (IEC):** El software del ICP-OES aplica factores de corrección específicos basados en la concentración del interferente (Fe, Al, Ca, Mg).

### Interferencias de emisión directa

La superposición de líneas espectrales es un riesgo real cuando hay elementos mayoritarios. Por ejemplo:

- **Cu 324.754 nm** interfiere con **Eu 324.753 nm** (un elemento traza de tierras raras).
- **Fe 238.204 nm** interfiere con **Co 238.892 nm** (separación de solo 0.69 nm, requiriendo resolución espectral alta).
- **Mn 257.610 nm** interfiere con **Fe 257.611 nm**.

**Soluciones:** Seleccionar longitudes de onda alternativas libres de interferencia (p. ej., As 193.696 nm en lugar de 188.980 nm cuando haya alto Fe), usar un espectrómetro con alta resolución (< 0.01 nm), o aplicar corrección por ecuaciones multicomponente.

## Control de Calidad en Análisis Minero por ICP-OES

El control de calidad (QC) en minería no es negociable. Cada lote de muestras debe incluir una batería de controles que aseguren la trazabilidad y exactitud del resultado.

### Estándares y Materiales de Referencia

| Tipo de control | Frecuencia | Criterio de aceptación |
|-----------------|------------|------------------------|
| Blanco de método | 1 por lote (mín. 20 muestras) | Señal menor al LOD |
| Duplicado de digestión | 1 por cada 10 muestras | RPD ≤ 20 % (para concentraciones > 10× LOD) |
| CRM (material de referencia certificado) | 1 por lote | Recuperación dentro del rango certificado ± 2σ |
| Fortificación (spike) | 1 por cada 20 muestras | Recuperación 85-115 % |
| Estándar de verificación (ICV) | Cada 10 muestras en secuencia | Desviación ≤ 5 % del valor esperado |
| Blanco de calibración | Inicio, final y cada 20 muestras | Señal ≤ valor del blanco inicial + 3σ |

### CRM recomendados para minería

- **OREAS 502** (mineral de cobre y oro): Cu, Au, Ag, Fe.
- **NIST 2711a** (suelo con metales traza): As, Cd, Cu, Pb, Zn.
- **NIST 2780** (relave minero): Hg, Pb, Zn, Cd, As.
- **CANMET CCU-1** (concentrado de cobre): Cu, Au, Ag, Se, Te.

> **Lección de campo:** Un laboratorio minero que no incluye un CRM en cada lote está operando a ciegas. Si el CRM no da el valor esperado, la única acción correcta es redigerir y reanalizar todo el lote. No se puede corregir mediante factor de recuperación ni ajuste matemático.

## Selección de Longitudes de Onda para Elementos Clave en Minería

Cada elemento tiene múltiples líneas de emisión en ICP-OES. La selección de la línea correcta depende de la matriz, la concentración esperada y las posibles interferencias. Estas son las recomendaciones prácticas para los metales de interés minero:

| Elemento | Línea primaria (nm) | Línea alternativa (nm) | Notas |
|----------|---------------------|------------------------|-------|
| Au | 242.795 | 267.595 | Interferencia de Fe en 267.595; preferir 242.795 |
| Ag | 328.068 | 338.289 | Alta sensibilidad; usar dilución si la concentración > 10 mg/L |
| Cu | 324.754 | 327.396 | Ambas son sensibles; 327.396 tiene menos interferencia de Fe |
| Zn | 213.856 | 206.200 | 213.856 es más sensible; 206.200 si hay Ni alto |
| Pb | 220.353 | 217.000 | 220.353 sufre interferencia de Al; 217.000 es alternativa |
| Fe | 259.940 | 238.204 | Ambas funcionan; 259.940 tiene menos interferencias espectrales |

## Conclusión

El análisis de metales en la industria minera por ICP-OES exige una combinación de buena preparación de muestra, métodos validados (EPA 6010D, 3051A, 3052), control de interferencias y un programa de QC riguroso. La elección entre digestión ácida por microondas y fusión alcalina depende del tipo de mineral y los elementos de interés. En ambos casos, la inclusión de CRM y controles de verificación es indispensable para generar resultados defendibles.

En **Solinsa** suministramos equipos ICP-OES de última generación con software de corrección interferencial avanzada, consumibles de digestión por microondas, CRM certificados para minería y soporte técnico especializado para el sector minero mexicano. Contáctenos para conocer nuestro programa de puesta en marcha y capacitación en métodos EPA para su laboratorio.
