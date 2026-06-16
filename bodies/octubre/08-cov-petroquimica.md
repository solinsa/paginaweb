---
title: "Análisis de Compuestos Orgánicos Volátiles (COV) en la Industria Petroquímica por GC-FID y GC-MS"
date: 2025-10-22
category: cat-ind-petroquimica
tags: [COV, VOC, petroquímica, GC-FID, GC-MS, headspace, EPA TO-15, BTEX, monitoreo]
audience: [T1-Petroquímica, T1-Ambiental]
cover: Monitoreo de emisiones de compuestos orgánicos volátiles en la industria petroquímica — métodos GC-FID y GC-MS con headspace y desorción térmica, conforme a EPA TO-15 y EPA 8260.
---

## Introducción: los COV en la industria petroquímica

Los **compuestos orgánicos volátiles (COV** o VOC, por sus siglas en inglés) son sustancias orgánicas que presentan una presión de vapor significativa a temperatura ambiente, lo que les permite evaporarse fácilmente a la atmósfera. En la industria petroquímica, los COV están omnipresentes desde la extracción y refinación del petróleo hasta la producción de polímeros, disolventes, combustibles y productos químicos intermedios.

Entre los COV más relevantes se encuentran los **BTEX** (benceno, tolueno, etilbenceno y xilenos), una familia de hidrocarburos aromáticos monoanillados que son componentes naturales del petróleo crudo y de sus derivados. También destacan los **alcanos ligeros** (C₅–C₁₂), **alquenos** como el etileno y propileno, y compuestos oxigenados como aldehídos, cetonas y alcoholes.

El monitoreo de COV no solo es una exigencia regulatoria —debido al impacto directo en la salud humana y el medio ambiente— sino también una herramienta de control de proceso: las fugas no detectadas representan pérdidas económicas, riesgos de seguridad y sanciones ambientales.

## Marco normativo: EPA TO-15, EPA 8260 y normatividad mexicana

### Estándares internacionales de referencia

| Método | Aplicación | Matriz | Técnica |
|---|---|---|---|
| EPA TO-15 | COV en aire ambiente y emisiones | Aire / gas | GC-MS con preconcentración criogénica o adsorbente |
| EPA 8260 | COV en suelos, aguas y residuos | Sólidos / líquidos | GC-MS con headspace o purga y trampa (P&T) |
| EPA 5021A | COV en suelos por headspace | Suelos | GC-FID / GC-MS con headspace estático |
| EPA 8015 | Hidrocarburos totales (rango gasolina) | Aguas / suelos | GC-FID |

En México, la **NOM-085-SEMARNAT-2011** regula las emisiones de COV en fuentes fijas, mientras que la **NOM-138-SEMARNAT-2012** establece los límites máximos permisibles de hidrocarburos en suelos contaminados. La **PROY-NOM-001-SEMARNAT-2021** actualiza los criterios para la caracterización de COV en descargas industriales, alineándose progresivamente con los estándares de la EPA.

> **Dato relevante:** La NOM-085 establece que las fuentes fijas de la industria petroquímica deben reportar concentraciones de COV totales (expresados como metano equivalente) con límites que oscilan entre 50 y 600 ppmv dependiendo del tipo de fuente y antigüedad de la instalación.

### BTEX: los compuestos estrella del monitoreo petroquímico

El benceno es el más crítico de los BTEX, con un límite de exposición ocupacional (LMPE-PPT) de 0.5 ppm según la NOM-010-STPS-2019. El tolueno, etilbenceno y xilenos, aunque menos tóxicos, son marcadores de contaminación y su presencia indica fugas o derrames en las operaciones.

## Métodos de muestreo y preparación

La elección del método de muestreo depende fundamentalmente de la matriz y del tipo de análisis requerido.

### Headspace estático para muestras líquidas y sólidas

El headspace estático es la técnica más difundida en laboratorios petroquímicos para el análisis de COV en:

- **Aguas de proceso y efluentes industriales.**
- **Suelos contaminados** (siguiendo EPA 5021A).
- **Muestras de crudo y derivados líquidos** diluidos en metanol o hexano.

El principio es simple: la muestra se coloca en un vial sellado con septum y se calienta a temperatura controlada (60–90 °C) hasta que los COV se distribuyen entre la fase líquida/sólida y la fase gaseosa. Una alícuota del vapor se inyecta directamente al GC.

| Parámetro | Condición típica |
|---|---|
| Temperatura de incubación | 80 °C |
| Tiempo de equilibrio | 30 min |
| Volumen de muestra | 5–10 mL (líquidos) o 2–5 g (sólidos) |
| Volumen de inyección | 1 mL de fase gaseosa |

### Desorción térmica (TD) para muestras de aire

Para el monitoreo de aire ambiente y emisiones fugitivas, la desorción térmica acoplada a GC-MS (TD-GC-MS) es el estándar de facto:

1. **Muestreo en campo** con bombas de bajo flujo a través de tubos adsorbentes (Tenax TA, Carbograph, o combinaciones multicapa).
2. **Desorción primaria** a 300–350 °C con flujo de helio para transferir los analitos al foco frío.
3. **Desorción secundaria** desde el foco frío (calentamiento rápido) hacia la columna capilar.

> **Ventaja clave:** La TD elimina por completo el uso de disolventes, mejora los límites de detección (sub-ppbv) y permite muestreos integrados de 8 horas para evaluar la exposición ocupacional.

### Purga y trampa (Purge & Trap)

Para aguas residuales con concentraciones ultra-traza de COV, el método EPA 8260 con P&T es el más sensible:

- **Purga:** burbujeo de helio a través de 5 mL de muestra durante 11 minutos para arrastrar los COV.
- **Trampa:** retención de los analitos en un adsorbente (Tenax + sílica gel + carbón).
- **Desorción térmica:** la trampa se calienta a 180–200 °C para transferir los compuestos al GC.

## Condiciones cromatográficas para GC-FID y GC-MS

### GC-FID para cuantificación de COV totales

El detector de ionización de llama (FID) es el estándar industrial para cuantificar COV totales debido a su robustez, amplio rango lineal y respuesta universal a compuestos orgánicos.

| Parámetro | Condición recomendada |
|---|---|
| Columna | DB-624 (60 m × 0.32 mm × 1.8 μm) — especialmente diseñada para COV |
| Gas portador | Helio o hidrógeno (2.0 mL/min) |
| Inyección | Split 10:1, 200 °C |
| Rampa térmica | 40 °C (5 min) → 8 °C/min → 220 °C (5 min) |
| FID | 250 °C, H₂ 35 mL/min, aire 350 mL/min |

### GC-MS para identificación y cuantificación de COV individuales

Cuando se requiere la identificación inequívoca de cada COV (p. ej., para verificar la presencia de benceno vs. ciclohexano, o para distinguir isómeros de xileno), la GC-MS es indispensable:

| Parámetro | Condición recomendada |
|---|---|
| Columna | DB-5MS (30 m × 0.25 mm × 0.25 μm) o DB-VRX |
| Inyección | Split 20:1, 220 °C |
| Scan modo | Full scan (35–350 m/z) + SIM para cuantificación |
| Temperatura de fuente | 230 °C |

### Programa de temperatura optimizado para BTEX

| Tiempo (min) | Temperatura (°C) | Rampa (°C/min) |
|---|---|---|
| 0 | 35 | — |
| 2 | 35 | Isotérmico |
| 10 | 150 | 15 |
| 14 | 220 | 20 |

> **Nota:** La columna DB-624 está diseñada con una fase de 6% cianopropil-fenil / 94% dimetilpolisiloxano que proporciona una excelente resolución de compuestos volátiles, incluyendo la separación crítica entre benceno y 1,2-dicloroetano.

## Monitoreo de emisiones fugitivas

Las emisiones fugitivas son pérdidas no intencionadas de COV a través de sellos, válvulas, bridas, bombas y compresores. Representan la principal fuente de COV en refinerías y plantas petroquímicas.

### Programa LDAR (Leak Detection and Repair)

Los programas LDAR se basan en:

1. **Identificación de componentes** (válvulas, bridas, sellos de bombas) con etiquetado único.
2. **Medición periódica** con analizador portátil de COV (FID o PID) por método EPA 21.
3. **Establecimiento de umbrales** de acción (típicamente 10,000 ppmv para válvulas y bridas en México).
4. **Reparación** dentro de plazos definidos (15–30 días para fugas mayores).
5. **Verificación post-reparación** y documentación.

| Tipo de componente | Frecuencia de monitoreo (refinerías) | Umbral de fuga (ppmv) |
|---|---|---|
| Válvulas de proceso | Trimestral | 10,000 |
| Bridas y conexiones | Semestral | 10,000 |
| Sellos de bombas | Mensual | 5,000 |
| Venteos y drenajes | Mensual | 500 |

### Método de bolsa para emisiones de área

Para medir emisiones de tanques de almacenamiento, lagunas de residuos o áreas abiertas, se emplea el método de **campana de flujo** o **bolsa dinámica**, seguido de análisis por GC-FID o GC-MS.

## Validación de métodos analíticos en matriz petroquímica

La validación de métodos para COV debe considerar los efectos de matriz específicos de muestras petroquímicas:

### Parámetros críticos en matrices complejas

| Parámetro | Desafío en matriz petroquímica | Estrategia |
|---|---|---|
| Linealidad | Supresiones por altas concentraciones de hidrocarburos de fondo | Uso de calibración con matriz equivalente |
| Límite de detección | Interferencias de compuestos co-eluyentes | GC-MS en modo SIM o GC-MS/MS |
| Precisión | Variabilidad en el muestreo de headspace | Estandarización con estándares internos (toluene-d8, 4-bromofluorobenceno) |
| Recuperación | Adsorción de COV en partículas de la matriz | Fortificación a tres niveles con muestras control |

### Indicadores de control de calidad en cada batch

- **Blanco de campo** — debe contener <LOQ de cualquier COV objetivo.
- **Duplicado de campo** — diferencia relativa <30%.
- **Estándar de control (LCS)** — recuperación 70–130%.
- **BFB (4-bromofluorobenceno)** — criterios de abundancia de iones según EPA 8260.

## Aplicaciones específicas en la industria petroquímica

### Control de calidad de materias primas

Las materias primas petroquímicas —nafta, gasolina de pirólisis, gas licuado— requieren un perfil detallado de COV para garantizar la especificación del producto. La GC-FID con columna capilar de alta resolución proporciona el perfil de hidrocarburos totales (simulated distillation), mientras que la GC-MS identifica compuestos no deseados como benceno en gasolina o acetileno en corrientes de etileno.

### Monitoreo de aguas de proceso

Las aguas de proceso en refinerías contienen BTEX, fenoles y otros COV que deben ser removidos antes de la descarga. El análisis por headspace-GC-MS permite cuantificar estos compuestos a nivel de μg/L para verificar la eficiencia de los tratamientos biológicos y de carbón activado.

### Caracterización de suelos contaminados

Los derrames históricos de hidrocarburos en suelos alrededor de refinerías y plantas petroquímicas requieren una caracterización detallada. El método EPA 5021A con GC-MS proporciona datos cuantitativos de BTEX y otros COV, mientras que la GC-FID cuantifica la fracción de hidrocarburos totales en el rango de gasolina (C₆–C₁₂).

## Conclusión

El análisis de COV en la industria petroquímica es un pilar fundamental tanto para el cumplimiento normativo como para la eficiencia operativa. La combinación de técnicas de muestreo apropiadas (headspace, desorción térmica, purga y trampa) con la instrumentación analítica correcta (GC-FID para tamizaje de COV totales, GC-MS para identificación y cuantificación detallada) permite a los laboratorios ofrecer datos confiables que sustentan decisiones críticas.

En Solinsa asesoramos a laboratorios petroquímicos y ambientales en la selección de equipos, columnas capilares, sistemas de headspace y desorción térmica, así como en la validación y puesta a punto de métodos conforme a EPA TO-15, EPA 8260 y normatividad mexicana. Contáctanos para una consultoría técnica gratuita.

**Solinsa — Soluciones Integrales Analíticas**  
*Cromatografía, espectrometría y servicio para tu laboratorio.*
