---
title: "Aplicaciones de LC-MS/MS en Estudios de Bioequivalencia y Farmacocinética"
published: 2025-11-06
category: cat-lcms
tags: [LC-MS/MS, bioequivalencia, farmacocinética, COFEPRIS, validación, FDA, EMA, matrices biológicas]
audience: [T1-Farmacéutica]
lang: es-MX
wordcount: ~1500
---

# Aplicaciones de LC-MS/MS en Estudios de Bioequivalencia y Farmacocinética

## Introducción

En la industria farmacéutica mexicana, la demostración de bioequivalencia es un requisito regulatorio indispensable para el registro de medicamentos genéricos y de marca. La cromatografía de líquidos acoplada a espectrometría de masas en tándem (LC-MS/MS) se ha consolidado como la técnica *gold standard* para la cuantificación de fármacos y metabolitos en matrices biológicas como plasma, suero, sangre total y orina. Su sensibilidad, selectividad y rapidez la convierten en la herramienta predilecta en laboratorios de bioanálisis que operan bajo la normativa de COFEPRIS, la FDA y la EMA.

Este artículo técnico explora los fundamentos, el marco regulatorio, los procesos de validación y las mejores prácticas para aplicar LC-MS/MS en estudios de bioequivalencia y farmacocinética, con un enfoque práctico para laboratorios mexicanos.

## ¿Qué es la bioequivalencia y por qué LC-MS/MS?

Dos productos farmacéuticos son bioequivalentes si, administrados en la misma dosis molar y bajo condiciones similares, presentan perfiles de concentración plasmática que no difieren de manera estadísticamente significativa. Esto se traduce en que la velocidad y la magnitud de absorción del principio activo son equivalentes entre el producto de prueba y el producto de referencia.

Para determinar la bioequivalencia, es necesario construir curvas de concentración vs. tiempo (C-t) a partir de muestras de plasma obtenidas en puntos de tiempo predefinidos. Aquí es donde LC-MS/MS juega un papel crítico: permite cuantificar concentraciones del orden de pg/mL con una precisión y exactitud que otras técnicas —como HPLC-UV o ELISA— no logran alcanzar de forma consistente, especialmente en muestras de vida media larga o con interferentes endógenos.

En farmacocinética, los parámetros clave derivados de estas curvas incluyen el área bajo la curva (AUC), la concentración máxima (Cmax), el tiempo hasta la concentración máxima (Tmax) y la vida media de eliminación (t½). Todos ellos dependen críticamente de datos de concentración fiables, y LC-MS/MS proporciona esa fiabilidad.

## Marco regulatorio: COFEPRIS, FDA y EMA

La validación de métodos bioanalíticos para estudios de bioequivalencia debe seguir guías armonizadas internacionalmente. En México, COFEPRIS adopta los lineamientos de la FDA y la EMA adaptándolos al contexto local.

### FDA (2018) — Guidance for Industry: Bioanalytical Method Validation

La guía de la FDA establece los requisitos mínimos para la validación completa de un método bioanalítico: selectividad, efecto matriz, calibración (linealidad), exactitud, precisión, recuperación, estabilidad y dilución de integridad. Exige que al menos el 67% de los controles de calidad (QCs) y el 75% de los calibradores cumplan con ±15% del valor nominal (±20% en el límite inferior de cuantificación o LLOQ).

### EMA (2011, revisión 2022) — Guideline on Bioanalytical Method Validation

La EMA coincide con la FDA en la mayoría de los criterios, pero introduce diferencias sutiles: exige evaluar el efecto matriz en al menos seis lotes de matriz de fuentes individuales y calcular el coeficiente de variación (CV) del factor de matriz normalizado por el estándar interno (IS). Si el CV supera el 15%, el efecto matriz se considera significativo y se requieren acciones correctivas.

### COFEPRIS — NOM-177-SSA1-2013

En México, la NOM-177-SSA1-2013 establece las disposiciones para la realización de estudios de bioequivalencia. Aunque no detalla de forma exhaustiva los criterios bioanalíticos, remite a las guías internacionales (FDA/EMA) para la validación de métodos. COFEPRIS exige que los laboratorios cuenten con un sistema de aseguramiento de la calidad, procedimientos operativos estandarizados (POE) y evidencia documental de la validación completa del método.

## Preparación de la muestra

La preparación de la muestra es la etapa más crítica en el flujo de trabajo de LC-MS/MS. Una preparación inadecuada introduce efecto matriz, suprime la ionización y compromete la sensibilidad. Las técnicas más utilizadas en bioequivalencia son:

### Precipitación de proteínas (PPT)

La precipitación de proteínas es el método más simple y rápido. Se añade un disolvente orgánico —como acetonitrilo o metanol— o un ácido al plasma, se agita y se centrifuga. El sobrenadante se inyecta directamente. Es rápida y económica, pero ofrece menor limpieza de la matriz, lo que puede aumentar el efecto matriz. Se usa típicamente para fármacos de alta potencia donde el LLOQ no es extremadamente bajo.

### Extracción líquido-líquido (LLE)

La LLE aprovecha la partición del analito entre dos fases inmiscibles (por ejemplo, hexano-agua o acetato de etilo-amortiguador). Proporciona extractos más limpios que la PPT y reduce significativamente los fosfolípidos y sales que causan supresión iónica. Es ideal para compuestos lipofílicos y para métodos que requieren LLOQ sub-nanomolares. La desventaja es que es más laboriosa y consume más disolventes.

### Extracción en fase sólida (SPE)

La SPE es la técnica de referencia cuando se necesita la máxima pureza del extracto. Utiliza cartuchos de fase reversa (C18), intercambio iónico o fase mixta para retener selectivamente al analito mientras los interferentes se lavan. Produce extractos extremadamente limpios, minimiza el efecto matriz y permite concentrar la muestra si es necesario. El costo por muestra es mayor, pero la calidad de los datos compensa ampliamente en estudios regulatorios.

## Validación del método bioanalítico según FDA y EMA

La validación completa de un método bioanalítico debe demostrar los siguientes parámetros antes de su uso en corridas de estudio:

### Selectividad

Debe demostrarse que no existen interferencias significativas del analito o el IS por componentes endógenos de la matriz. Se analizan al menos seis lotes de matriz blanca (sin analito ni IS). La respuesta en el tiempo de retención del analito debe ser ≤20% del LLOQ; la del IS, ≤5% de la respuesta media del IS en los calibradores.

### Efecto matriz (Matrix Effect)

La supresión o el realce iónico se evalúan mediante la comparación de la respuesta de analito post-extracción (analito añadido después de la extracción de matriz blanca) vs. analito en disolvente puro. Con la EMA, se requiere calcular el factor de matriz normalizado por IS en seis lotes. Si el CV supera el 15%, se considera un efecto matriz inaceptable.

### Linealidad

La curva de calibración (relación de áreas analito/IS vs. concentración nominal) debe ajustarse a un modelo de regresión —lineal o cuadrático— con ponderación adecuada (1/x o 1/x²). El coeficiente de correlación (R²) debe ser ≥0.99, y cada calibrador debe estar dentro de ±15% del valor nominal (±20% en el LLOQ).

### Precisión y exactitud

Se evalúan con QCs a cuatro niveles: LLOQ, QC bajo (≤3× LLOQ), QC medio (30–50% del rango) y QC alto (≥75% del rango). La precisión intra-día e inter-día debe tener un CV ≤15% (≤20% en LLOQ). La exactitud (sesgo) debe estar dentro de ±15% (±20% en LLOQ). Se requieren al menos tres corridas en días diferentes.

### Recuperación

La recuperación del analito y del IS no necesita ser del 100%, pero debe ser consistente, precisa y reproducible entre niveles de concentración. Se calcula comparando la respuesta de muestras pre-extracción vs. post-extracción.

### Estabilidad

Debe demostrarse la estabilidad del analito en la matriz bajo las condiciones de almacenamiento y procesamiento del estudio: estabilidad a corto plazo (temperatura ambiente, 4–24 h), estabilidad a largo plazo (congelación a -20 °C o -80 °C, típicamente ≥30 días), ciclos de congelación-descongelación (mínimo tres ciclos), estabilidad en matriz procesada (post-preparativa en el automuestreador) y estabilidad de soluciones stock.

## Efecto matriz y supresión iónica en LC-MS/MS

El efecto matriz es el talón de Aquiles de LC-MS/MS. Los componentes endógenos del plasma —fosfolípidos, sales biliares, ácidos grasos— pueden competir con el analito durante la ionización por electrospray (ESI), reduciendo o aumentando artificialmente la señal. Esto es especialmente crítico en los primeros minutos de la corrida cromatográfica, donde eluyen la mayoría de las sales.

Para mitigar el efecto matriz se recomienda:

- Uso de estándares internos deuterados (IS) siempre que sea posible.
- Optimización de la preparación de muestra (SPE > LLE > PPT).
- Separación cromatográfica adecuada para retener los fosfolípidos.
- Análisis post-columna mediante infusión de analito para identificar ventanas de supresión.
- Evaluación rigurosa durante la validación.

## Cromatografía de fase reversa para separación de analitos

La mayoría de los métodos de LC-MS/MS en bioequivalencia utilizan columnas de fase reversa C18 con fases móviles de agua/metanol o agua/acetonitrilo, aciduladas con ácido fórmico (0.1%) o acetato de amonio (2–5 mM). Los gradientes típicos van de 5–10% de orgánico hasta 80–95% en 3–5 minutos.

La elección de la columna —longitud, diámetro de partícula (1.7–5 µm), diámetro interno (2.1–4.6 mm)— depende de la resolución necesaria y la presión máxima del sistema. Las columnas de núcleo sólido (*core-shell*) ofrecen eficiencia cercana a UPLC sin requerir equipos de ultra-alta presión.

## Ejemplo de método: warfarina en plasma humano

La warfarina es un anticoagulante ampliamente utilizado como fármaco modelo en métodos de bioequivalencia. Un método típico de LC-MS/MS incluye:

**Preparación de muestra**: precipitación de proteínas de 100 µL de plasma con 300 µL de acetonitrilo conteniendo warfarina-d5 como IS. Se agita 1 minuto, se centrifuga a 10,000 rpm por 10 minutos y se inyectan 5 µL del sobrenadante.

**Cromatografía**: columna C18 (50 × 2.1 mm, 1.7 µm), fase móvil A: agua con 0.1% ácido fórmico, fase móvil B: acetonitrilo con 0.1% de ácido fórmico. Gradiente: 30% B a 95% B en 2.5 minutos, flujo 0.3 mL/min. Tiempo de retención de warfarina: 1.8 minutos; IS: 1.8 minutos.

**Detección**: ESI en modo negativo. Transición MRM: warfarina 307 → 161 m/z; IS 312 → 166 m/z. Voltaje de fragmentación y energía de colisión optimizados para cada transición.

**Rango de calibración**: 1–500 ng/mL. LLOQ: 1 ng/mL. Precisión y exactitud intra-día e inter-día dentro de ±12%. Recuperación >85%. Efecto matriz <10% CV en seis lotes.

## Control de calidad en corridas bioanalíticas

En cada corrida de estudio se incluyen:

- Curva de calibración (al menos 8 puntos no cero, incluyendo blanco y estándar cero).
- QCs replicados (n ≥ 5 por nivel): LLOQ, QC bajo, QC medio, QC alto.
- Al menos dos niveles de QCs en cada bloque de 50–100 muestras.
- QCs de estabilidad al inicio y al final de la corrida (para demostrar estabilidad en automuestreador).

El criterio de aceptación de la corrida es que al menos el 67% de los QCs totales (y al menos el 50% por nivel) estén dentro de ±15% del valor nominal. Los calibradores deben cumplir con ±15% (±20% en LLOQ), con al menos el 75% de los puntos aceptables. Si la corrida no cumple, se rechaza y se repite.

## Conclusión

LC-MS/MS es, sin lugar a dudas, la herramienta analítica más potente para estudios de bioequivalencia y farmacocinética. Su sensibilidad, selectividad y velocidad permiten a los laboratorios mexicanos cumplir con los exigentes criterios de COFEPRIS, FDA y EMA, generando datos confiables que respaldan el registro de medicamentos seguros y eficaces.

Sin embargo, el éxito de un método bioanalítico no depende solo del espectrómetro de masas. Una preparación de muestra adecuada —ya sea SPE, LLE o PPT—, una validación rigurosa de todos los parámetros regulatorios y un control de calidad sistemático durante las corridas de estudio son igual de importantes.

En Solinsa ofrecemos una amplia gama de equipos y consumibles para LC-MS/MS: columnas fase reversa y HILIC de última generación, cartuchos SPE Oasis y Strata para purificación de matrices biológicas, solventes y estándares certificados, así como accesorios de cromatografía para sistemas Agilent, Waters, Sciex y Thermo Fisher. Nuestro equipo técnico asesora en la selección del método, la validación y la puesta a punto de los procesos analíticos, garantizando que su laboratorio cumpla con los más altos estándares internacionales.

Contáctenos para conocer nuestras soluciones integrales para bioanálisis y farmacocinética. En Solinsa, impulsamos la ciencia analítica en México.

---

**Palabras clave**: LC-MS/MS, bioequivalencia, farmacocinética, COFEPRIS, validación, FDA, EMA, matrices biológicas, preparación de muestra, efecto matriz, control de calidad.
