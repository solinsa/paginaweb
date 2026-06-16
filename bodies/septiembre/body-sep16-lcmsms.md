Published: 2026-09-16
Category: cat-lcms
Title: "Análisis de Fármacos en Fluidos Biológicos por LC-MS/MS: Configuración y Validación"
Target audience: T1-Farmacéutica (R&D), T1-Academia (PI), T1-Química

## Introducción: El Reto del Análisis Bioanalítico

Determinar la concentración de un fármaco y sus metabolitos en plasma, suero u或ina es uno de los desafíos analíticos más exigentes en la industria farmacéutica. Las matrices biológicas son complejas: contienen proteínas, lípidos, sales y cientos de compuestos endógenos que pueden interferir con la detección del analito de interés. Además, las concentraciones de fármaco suelen estar en el rango de nanogramos por mililitro (ng/mL) o incluso picogramos por mililitro (pg/mL), lo que exige una sensibilidad extrema.

La **cromatografía líquida acoplada a espectrometría de masas en tándem (LC-MS/MS)** se ha convertido en el estándar de oro para los estudios bioanalíticos. La combinación de la separación cromatográfica con la selectividad del triple cuadrupolo (QQQ) operando en modo MRM (Multiple Reaction Monitoring) permite cuantificar con precisión incluso en matrices complejas. Sin embargo, el éxito del método depende de decisiones críticas en cada etapa: preparación de la muestra, optimización de la fuente de ionización, configuración de las transiciones MRM y validación rigurosa según guías regulatorias.

En este artículo recorremos cada una de esas etapas, con énfasis en las guías EMA (European Medicines Agency) y FDA (U.S. Food and Drug Administration) para validación de métodos bioanalíticos.

## Preparación de la Muestra: PPT vs SPE vs LLE

La preparación de la muestra es, sin discusión, el paso que más impacta la calidad de los datos en LC-MS/MS. Una matriz mal limpiada provoca efecto matriz, obstruye la columna y degrada la señal del analito. Existen tres técnicas principales, cada una con fortalezas y limitaciones específicas.

### Precipitación de Proteínas (PPT)

La PPT consiste en agregar un solvente orgánico (acetonitrilo, metanol o una mezcla) al plasma para desnaturalizar y precipitar las proteínas. Tras centrifugar, el sobrenadante se inyecta directamente o después de una dilución.

**Ventajas:**
- Extremadamente rápida y sencilla (< 10 minutos por lote).
- Bajo costo; no requiere cartuchos ni fases estacionarias especializadas.
- Recuperación cercana al 100 % para la mayoría de los fármacos.

**Desventajas:**
- No elimina fosfolípidos ni sales, que son las principales fuentes de efecto matriz.
- Puede diluir demasiado la muestra si el factor de dilución es alto.
- Genera inyectables sucios que acumulan contaminación en la columna y la fuente de iones.

> *"La PPT es ideal para estudios de farmacocinética de alta incidencia donde la velocidad importa más que la matriz ultralimpia. Pero hay que estar preparado para limpiar la fuente de iones con más frecuencia."* — Especialista en espectrometría de masas, CDMO mexicano.

### Extracción en Fase Sólida (SPE)

La SPE utiliza cartuchos con fases estacionarias (C18, polimérica de intercambio iónico mixto, WCX, WAX) que retienen selectivamente al analito mientras los interferentes se eliminan con lavados. Luego se eluye con un solvente apropiado.

**Ventajas:**
- Limpieza excepcional de la matriz; minimiza el efecto matriz.
- Capacidad de preconcentrar la muestra (factor de 5× a 20×).
- Ideal para matrices complejas como plasma lipémico o hemolizado.

**Desventajas:**
- Costo por muestra más elevado ($1–$4 USD por cartucho).
- Mayor tiempo de procesamiento (30–60 minutos por lote de 96 pocillos).
- Requiere optimización del método de carga, lavado y elución para cada analito.

### Extracción Líquido-Líquido (LLE)

La LLE se basa en la partición del analito entre una fase acuosa (plasma) y un solvente orgánico inmiscible (éter terc-butil metílico, acetato de etilo, diclorometano). Tras agitar y centrifugar, la fase orgánica se separa, se evapora y el residuo se reconstituye.

**Ventajas:**
- Excelente eliminación de proteínas, sales y compuestos polares.
- Recuperaciones consistentes para analitos lipofílicos.
- Bajo costo por muestra si se usa un solvente económico.

**Desventajas:**
- Trabajosa y difícil de automatizar en formato 96 pozos.
- Genera residuos orgánicos que requieren disposición especial.
- No es adecuada para analitos muy polares que no se extraen en solventes orgánicos.

| Técnica | Tiempo por lote (96 muestras) | Costo por muestra | Eliminación de proteínas | Eliminación de fosfolípidos | Factor de preconcentración |
|---|---|---|---|---|---|
| PPT | 10 – 15 min | $0.10 – $0.30 | Alta | Baja | No (diluye) |
| SPE | 30 – 60 min | $1.00 – $4.00 | Alta | Alta | 5× – 20× |
| LLE | 45 – 90 min | $0.30 – $0.80 | Alta | Media | 5× – 10× |

## Optimización de MRM: Transiciones, Voltajes y Colisión

El modo MRM (Multiple Reaction Monitoring) es lo que le da al triple cuadrupolo su selectividad superior. En MRM, el primer cuadrupolo (Q1) selecciona el ion precursor [M+H]⁺ o [M-H]⁻ del analito. Ese ion pasa a la celda de colisión (q2) donde se fragmenta por colisión con un gas inerte (argón o nitrógeno). El tercer cuadrupolo (Q3) selecciona un **ion producto** específico. La combinación precursor → producto se llama **transición MRM**.

Para cada analito se recomienda optimizar:

- **Transición de cuantificación:** la más intensa y estable. Se usa para construir la curva de calibración.
- **Transición de confirmación:** al menos una transición adicional para confirmar identidad. La relación de abundancia entre ambas debe estar dentro de tolerancias definidas (±20 % según guías FDA).
- **Energía de colisión (CE):** voltaje aplicado en la celda de colisión. Se optimiza realizando un barrido de CE (típicamente 10–50 V) y seleccionando el valor que maximiza la señal del ion producto.
- **Voltaje del cono (cone voltage) / declustering potential (DP):** controla la desolvatación y enfoque de iones antes de Q1. Un valor demasiado alto fragmenta el precursor; demasiado bajo da poca transmisión.
- **Temperatura de la fuente y flujo de gas de desolvatación:** parámetros que afectan la eficiencia de ionización, especialmente para compuestos termolábiles.

> *"Cada compuesto tiene su 'personalidad' en el espectrómetro de masas. Invertir 30 minutos en optimizar manualmente las transiciones MRM de cada analito paga dividendos en sensibilidad y robustez durante toda la vida del método."* — Químico analítico senior, laboratorio de bioequivalencia.

## Efecto Matriz: Cómo Detectarlo y Corregirlo

El **efecto matriz** es la supresión o aumento de la señal del analito debido a co-eluyentes de la matriz biológica que compiten por la ionización en la fuente ESI o APCI. Es la pesadilla de todo método LC-MS/MS.

Se evalúa mediante el experimento de **infusión post-columna**: se infunde continuamente una solución del analito en la corriente de la columna mientras se inyecta un blanco de matriz. Las caídas en la línea base indican zonas de supresión iónica. Alternativamente, se usa el **método del factor de matriz**: se compara el área del analito en matriz post-extracción (fortificada después del procesamiento) contra el área en solvente puro.

**Estrategias para corregir el efecto matriz:**
1. **Estándar interno deuterado (IS):** es la estrategia más efectiva. Un IS con el mismo tiempo de retención que el analito compensa las variaciones en ionización.
2. **Mejorar la limpieza de la muestra:** cambiar de PPT a SPE o LLE reduce drásticamente el efecto matriz.
3. **Optimizar la gradiente cromatográfica:** separar el analito de la zona de supresión ajustando el tiempo de retención.
4. **Cambiar la fuente de ionización:** pasar de ESI a APCI reduce la supresión para compuestos polares.

La FDA exige que el factor de matriz (relación de áreas matriz/solvente) evaluado en al menos 6 lotes de matriz de diferentes fuentes tenga un CV ≤ 15 %.

## Curva de Calibración en Matriz Biológica

La curva de calibración en LC-MS/MS bioanalítico no se prepara en solvente puro —se prepara en la **matriz biológica misma** (plasma, suero, orina) para compensar naturalmente el efecto matriz.

Linealidad, peso y criterios:
- **Rango:** desde el límite inferior de cuantificación (LLOQ) hasta el límite superior (ULOQ). Típicamente 3 a 5 órdenes de magnitud.
- **Número de calibradores:** mínimo 6 niveles no-cero (FDA), más un blanco y un cero (blanco + IS).
- **Peso:** 1/x o 1/x² suele usarse cuando la varianza aumenta con la concentración.
- **Precisión y exactitud en cada calibrador:** desviación < 15 % del valor nominal (< 20 % en el LLOQ).
- **Muestras de control de calidad (QC):** LLOQ, Bajo (3× LLOQ), Medio (30–50 % del rango), Alto (75–85 % del rango). Al menos 2/3 de los QCs deben estar dentro del ±15 %.

| Parámetro | Criterio FDA (2018) | Criterio EMA (2011) |
|---|---|---|
| Precisión (CV) QCs | ≤ 15 % | ≤ 15 % |
| Exactitud QCs | ±15 % del nominal | ±15 % del nominal |
| Precisión LLOQ | ≤ 20 % | ≤ 20 % |
| Exactitud LLOQ | ±20 % del nominal | ±20 % del nominal |
| Niveles de calibración | ≥ 6 no-cero | ≥ 6 no-cero |
| Lotes de matriz para factor matriz | ≥ 6 lotes | ≥ 5 lotes |

## Validación del Método Bioanalítico según EMA/FDA

La validación es el proceso documentado que demuestra que el método es adecuado para su propósito. Tanto la FDA (Guidance for Industry: Bioanalytical Method Validation, 2018) como la EMA (Guideline on Bioanalytical Method Validation, 2011) exigen:

- **Selectividad:** demostrar que no hay interferencias del blanco de matriz (al menos 6 lotes diferentes).
- **Efecto matriz (carryover):** inyectar un blanco después del ULOQ; la señal debe ser < 20 % del LLOQ.
- **Linealidad y rango:** curva de calibración con al menos 6 niveles.
- **Precisión y exactitud intra-día e inter-día:** mínimo 3 días de validación, cada día con 5 réplicas por nivel de QC.
- **Recuperación:** comparar área de muestras preparadas vs. post-extracción fortificada. No necesita ser 100 %, pero sí consistente.
- **Estabilidad:** congelación-descongelación (3 ciclos), estabilidad a corto plazo (temperatura ambiente, 4–24 h), estabilidad a largo plazo (–20 °C o –70 °C, hasta el tiempo de almacenamiento del estudio), estabilidad en el automuestreador (post-procesamiento), estabilidad de la solución madre.
- **Dilución de integridad:** validar que las muestras por encima del ULOQ pueden diluirse con matriz blanca sin pérdida de precisión.

> *"Una validación incompleta es la causa número uno de inspecciones fallidas. Tener los experimentos de estabilidad documentados —incluyendo estabilidad en matriz a largo plazo— puede ser la diferencia entre aprobar y recibir una observación mayor."* — Consultor regulatorio en asuntos bioanalíticos.

## Conclusión

El análisis de fármacos en fluidos biológicos por LC-MS/MS es una disciplina que combina química analítica, ingeniería de instrumentos y cumplimiento regulatorio. La selección de la técnica de preparación de muestra (PPT, SPE o LLE), la optimización cuidadosa de las transiciones MRM, la mitigación del efecto matriz mediante estándares internos deuterados y una validación rigurosa según guías FDA y EMA son los pilares de un método bioanalítico exitoso. Para laboratorios de bioequivalencia, farmacocinética y monitoreo terapéutico, dominar estos fundamentos no solo asegura datos confiables, sino que acelera el tiempo de comercialización de nuevos fármacos.

En **Solinsa** contamos con equipos LC-MS/MS, columnas, estándares internos deuterados y consumibles para preparación de muestra. Además ofrecemos capacitación en validación de métodos bioanalíticos y acompañamiento en inspecciones regulatorias. Escríbenos para conocer cómo podemos apoyar tu laboratorio.
