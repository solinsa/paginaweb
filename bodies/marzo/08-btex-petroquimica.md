---
title: "Análisis de BTEX en Matrices Petroquímicas: Suelos y Aguas por GC-MS"
published: 2026-03-23
category: cat-ind-petroquimica
tags: [BTEX, GC-MS, petroquímica, suelos, aguas, EPA]
audience: [T1-Petroquímica]
lang: es-MX
wordcount: ~1500
---

## Importancia de los BTEX como Indicadores de Contaminación Petroquímica

Los compuestos aromáticos volátiles conocidos como **BTEX** —benceno, tolueno, etilbenceno y los tres isómeros del xileno (orto, meta y para)— constituyen los indicadores más empleados en la evaluación de contaminación por hidrocarburos en matrices ambientales. Su presencia simultánea en suelos y aguas subterráneas suele asociarse a derrames de combustibles, fugas en tanques de almacenamiento, descargas de efluentes industriales y actividades de refinación.

El benceno merece atención especial por su clasificación como **carcinógeno humano (Grupo 1)** según la IARC. Los xilenos y el etilbenceno presentan toxicidad aguda a nivel del sistema nervioso central, mientras que el tolueno, aunque menos tóxico crónicamente, es un marcador sensible de contaminación reciente. Por estas razones, las agencias regulatorias internacionales y la normativa mexicana exigen su cuantificación con límites de detección muy bajos, comúnmente en el orden de **µg/L (ppb)** en agua y **mg/kg (ppm)** en suelo.

## Métodos Analíticos Normalizados

### EPA 8260D: Compuestos Orgánicos Volátiles por GC-MS

El método **EPA 8260D** (actualización 2018) es el estándar de referencia para la determinación de compuestos orgánicos volátiles (COV), incluidos los BTEX, en una amplia variedad de matrices sólidas y acuosas. Se basa en la introducción de la muestra mediante **purga y trampa (purge-and-trap)** , seguida de separación por cromatografía de gases y detección por espectrometría de masas.

| Parámetro | Condición típica |
|---|---|
| Columna capilar | Rtx-624, DB-624 o equivalente (6% cianopropil-fenil, 94% dimetilpolisiloxano) |
| Longitud x DI x espesor de película | 30 m x 0.25 mm x 1.4 µm |
| Gas acarreador | Helio a 1.0–1.5 mL/min |
| Programa de temperatura | 35 °C (4 min), rampa 5 °C/min hasta 150 °C, rampa 15 °C/min hasta 220 °C (2 min) |
| Inyección | Split (1:20 a 1:50) con liner para COV |
| Detector | MS cuadrupolar en modo SCAN o SIM |
| Límite de detección (agua) | 0.1–0.5 µg/L |
| Límite de detección (suelo) | 0.5–5 µg/kg |

### EPA 8021B: BTEX por GC con Detección Selectiva

El método **EPA 8021B** ofrece una alternativa cuando no se requiere confirmación por espectrometría de masas. Utiliza detectores selectivos como **FID** (ionización de flama) o **PID** (fotoionización) en serie. El PID es particularmente sensible a compuestos aromáticos, proporcionando límites de detección comparables al MS para BTEX. Sin embargo, carece de capacidad de confirmación estructural, por lo que es recomendable utilizarlo como método de cribado o en laboratorios con menor equipamiento.

## Técnicas de Preparación de Muestra

La correcta preparación de la muestra es el factor que más influye en la calidad del resultado analítico. Para BTEX en matrices petroquímicas existen tres enfoques principales:

### Purga y Trampa (Purge-and-Trap)

Es la técnica de elección según EPA 5030C para aguas y EPA 5035A para suelos. Consiste en burbujear helio a través de la muestra acuosa para arrastrar los COV hacia una trampa adsorbente (Tenax, Carboxen o carbón grafitizado). Posteriormente se calienta la trampa y se desorben los analitos hacia el GC.

**Ventajas:** Excelente sensibilidad, automatización completa, mínima manipulación de la muestra.

**Desventajas:** Tiempo de ciclo prolongado (~15–20 min por muestra), posibilidad de carryover entre muestras de alta concentración.

### Headspace Estático (HS)

Se equilibra la muestra en un vial sellado a temperatura controlada (40–80 °C) y se inyecta una alícuota de la fase gaseosa. Es la técnica más simple y de menor costo.

**Ventajas:** No requiere trampa ni gases auxiliares, libre de carryover, ideal para muestras con alto contenido de materia orgánica.

**Desventajas:** Menor sensibilidad que purga y trampa (LODs ~5–10 µg/L en agua), limitado a matrices con buena partición vapor-líquido.

### Microextracción en Fase Sólida (SPME)

Técnica de equilibrio sin solventes que utiliza una fibra recubierta con fase estacionaria (p. ej., PDMS/CAR/DVB para COV). La fibra se expone al headspace o se sumerge directamente en la muestra durante un tiempo controlado y luego se desorbe térmicamente en el inyector del GC.

**Ventajas:** Libre de solventes, portátil, ideal para muestreo en campo con derivación a laboratorio, buena sensibilidad (LODs ~0.05–0.2 µg/L).

**Desventajas:** La fibra tiene vida útil limitada (~50–100 usos), requiere calibración frecuente, el tiempo de extracción puede ser largo (>30 min).

## Parámetros Cromatográficos Críticos

La separación de los ocho compuestos BTEX (considerando los tres isómeros de xileno) presenta desafíos específicos.

### Orden de elución típico en columna Rtx-624

1. Benceno (pico más temprano)
2. Tolueno
3. Etilbenceno
4. *m*-Xileno + *p*-Xileno (coeluyen en la mayoría de columnas)
5. *o*-Xileno (último en eluir)

> **Nota importante:** La coelución de *m*-xileno y *p*-xileno es aceptable según EPA 8260D, reportándose como "m+p-xileno". Si se requiere la separación individual de todos los isómeros, se recomienda emplear una columna más polar (p. ej., Rtx-VRX o DB-VRX) o modificar el programa de temperatura con una rampa más lenta en la región de elución de los xilenos.

### Calibración

La calibración debe realizarse con un mínimo de **5 niveles de concentración**, más un blanco. Para muestras de agua, el intervalo típico es de 0.5 a 200 µg/L, y para suelos de 0.1 a 100 mg/kg. Los coeficientes de correlación (R²) deben ser ≥0.995. Se recomienda el uso de un **estándar interno** (p. ej., fluorobenceno o clorobenceno-d5) añadido a cada vial antes del análisis para compensar variaciones en la inyección.

## Interpretación de Perfiles para Diferenciar Fuentes de Contaminación

La distribución relativa de los BTEX ofrece información valiosa sobre el origen del hidrocarburo liberado. A continuación se presentan los patrones característicos observados en laboratorio.

| Combustible | B:T:E:X típico | Marcadores adicionales |
|---|---|---|
| Gasolina | 1:2:0.5:3 | Alto contenido de alquilbencenos C3–C4, presencia de MTBE |
| Diésel | 1:1:0.3:1 | Baja concentración absoluta, presencia de naftalenos |
| Petróleo crudo | Variable según el grado | Relación B:T baja (<0.5), abundancia de alcanos lineales |
| Gasolina de aviación (AvGas) | 1:2:1:4 | Presencia de naftaleno y metilnaftalenos |

**Relaciones diagnósticas útiles:**

- **Relación T/B (tolueno/benceno):** Valores >3 sugieren contaminación reciente por gasolina, ya que el tolueno se degrada más rápido que el benceno. Valores <1 indican intemperismo avanzado.
- **Relación m+p-xileno/etilbenceno:** Una relación >4 es característica de gasolinas comerciales, mientras que relaciones <2 pueden indicar fuentes de petroquímica de alta pureza.
- **Relación (m+p)-xileno/o-xileno:** En gasolinas oscila entre 2.5 y 3.5, mientras que en diésel suele ser mayor de 4.

## Límites de Remediación según la Normativa Mexicana

La **NOM-138-SEMARNAT/SSA1-2012** establece los límites máximos permisibles de hidrocarburos en suelos y lineamientos para la remediación de sitios contaminados. Para BTEX, los valores de referencia son:

| Compuesto | Suelo uso agrícola/residencial (mg/kg) | Suelo uso industrial (mg/kg) | Agua subterránea (mg/L) |
|---|---|---|---|
| Benceno | 0.006 | 0.015 | 0.005 |
| Tolueno | 0.040 | 0.100 | 0.700 |
| Etilbenceno | 0.010 | 0.030 | 0.300 |
| Xilenos totales | 0.040 | 0.100 | 0.500 |

Estos valores aplican para la fracción ligera (C6–C10) de hidrocarburos. Es importante señalar que la NOM-138 se complementa con la **NOM-147-SEMARNAT/SSA1-2004**, que establece criterios para la determinación de concentraciones de fondo en sitios no contaminados.

> **Advertencia:** El benceno presenta los límites más estrictos debido a su potencial carcinogénico. Superar los 0.006 mg/kg en suelo de uso residencial obliga a la implementación inmediata de acciones de remediación conforme al programa de restauración del sitio, de acuerdo con la NOM-138.

En laboratorio, estos niveles requieren métodos analíticos con capacidad de detección por debajo de 0.001 mg/kg. La combinación de purga y trampa con GC-MS en modo SIM (monitoreo de iones seleccionados) es la configuración recomendada para cumplir con estos requisitos. Los iones cuantificadores típicos son: benceno *m/z* 78, tolueno *m/z* 91, etilbenceno *m/z* 91, *m/p*-xileno *m/z* 106 y *o*-xileno *m/z* 106.

## Control de Calidad Analítico

Cada lote analítico debe incluir los siguientes elementos de control de calidad:

- **Blanco de método:** Un blanco por cada 20 muestras, libre de BTEX (todos los analitos <LOD).
- **Duplicados:** La diferencia relativa entre duplicados no debe exceder el 25 % para concentraciones menores a 5 µg/L y del 15 % para concentraciones mayores.
- **Estándares de recuperación (LCS):** Recuperación entre 80–120 % para todos los analitos.
- **Matriz fortificada (MS/MSD):** Se fortifica una muestra representativa del lote con concentraciones conocidas de BTEX. La recuperación debe estar entre 70–130 %.
- **Estándar de calibración de verificación (CCV):** Cada 10 inyecciones se analiza un estándar de calibración intermedio con desviación <20 % del valor esperado.

En Solinsa contamos con el respaldo técnico especializado para la instrumentación analítica requerida en la determinación de BTEX y otros COV en matrices ambientales y petroquímicas. Ofrecemos cromatógrafos de gases acoplados a espectrometría de masas (GC-MS), sistemas de purga y trampa automatizados, columnas capilares Rtx-624 y DB-624, así como consumibles, estándares de calibración y materiales de referencia certificados. Nuestro equipo de ingenieros de aplicación brinda asesoría para la puesta a punto de métodos conforme a EPA 8260D y 8021B, validación de metodologías analíticas y capacitación especializada para su laboratorio. También ofrecemos servicios de calibración y mantenimiento preventivo para garantizar la operación continua de sus equipos. Contáctenos en **www.solinsa.com** o escriba a nuestro departamento técnico para recibir una cotización personalizada y resolver cualquier duda sobre su proyecto analítico.
