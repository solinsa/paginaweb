---
title: "Contaminantes Orgánicos Persistentes (POPs) en Suelos por GC-MS/MS"
published: 2026-05-10
slug: pops-suelos-gc-msms
category: cat-ind-ambiental
tags: [POPs, suelos, GC-MS/MS, PCB, dioxinas, plaguicidas, ambiental]
audience: [T1-Industria, T2-Académico]
lang: es-MX
wordcount: ~1500
---

## Qué Son los Contaminantes Orgánicos Persistentes (POPs)

Los contaminantes orgánicos persistentes (POPs, por sus siglas en inglés) son compuestos químicos que presentan cuatro características particularmente preocupantes: persistencia en el medio ambiente, capacidad de bioacumulación en los tejidos de los organismos vivos, potencial de transporte atmosférico a larga distancia, y toxicidad significativa para la salud humana y los ecosistemas. El Convenio de Estocolmo, adoptado en 2001 y ratificado por México en 2003, identifica y regula las doce familias iniciales de POPs, conocidas como la "docena sucia", que incluyen:

- **Plaguicidas organoclorados:** aldrín, clordano, DDT, dieldrín, endrín, heptacloro, hexaclorobenceno (HCB), mirex, toxafeno
- **Productos industriales:** bifenilos policlorados (PCB)
- **Subproductos no intencionales:** dioxinas (PCDD) y furanos (PCDF)

Desde 2009, el Convenio de Estocolmo se ha actualizado en múltiples ocasiones para incluir nuevos POPs, como el hexabromociclododecano (HBCD), los éteres de difenilo polibromados (PBDE), el ácido perfluorooctano sulfónico (PFOS), los naftalenos policlorados (PCN) y el decabromodifeniletano (DBDPE), entre otros. En la actualidad, la lista incluye más de 30 familias de compuestos.

En México, la **NOM-138-SEMARNAT/SSA1-2012** establece los límites máximos permisibles de hidrocarburos en suelos y las especificaciones para su caracterización y remediación, mientras que la **NOM-147-SEMARNAT/SSA1-2004** establece los criterios para determinar las concentraciones de remediación de suelos contaminados por diversos contaminantes, incluyendo algunos POPs.

## Regulaciones Aplicables y Métodos de Referencia

El análisis de POPs en suelos se rige por estándares internacionales ampliamente aceptados:

| Norma / Método | Alcance | Matriz |
|---|---|---|
| EPA Method 8270E (SW-846) | Compuestos orgánicos semivolátiles por GC/MS, incluyendo plaguicidas organoclorados | Suelos, sedimentos, agua |
| EPA Method 1668C | PCB (congéneres individuales) por HRGC/HRMS | Suelos, sedimentos, biota |
| EPA Method 1613B | Dioxinas y furanos (17 congéneres 2,3,7,8-sustituidos) por HRGC/HRMS | Suelos, agua, tejidos |
| EPA Method 8082A | Plaguicidas organoclorados por GC | Suelos, sedimentos |
| EPA Method 3545A | Extracción con disolventes presurizada (ASE) | Suelos, sedimentos |
| NOM-138-SEMARNAT/SSA1-2012 | Hidrocarburos y POPs en suelos | Suelos |

La **GC-MS/MS en modo MRM (monitoreo de reacciones múltiples)** se ha consolidado como una alternativa práctica y de menor costo frente a la HRGC/HRMS (cromatografía de gases de alta resolución con espectrometría de masas de alta resolución) para el análisis de rutina de POPs, ofreciendo selectividad y sensibilidad adecuadas para la mayoría de las aplicaciones regulatorias.

## Preparación de Muestra: La Clave del Éxito Analítico

La preparación de muestra en el análisis de POPs en suelos es probablemente la etapa más laboriosa y crítica del proceso. Los POPs se encuentran típicamente en concentraciones de µg/kg (ppb) o ng/kg (ppt), incrustados en una matriz orgánica compleja que contiene ácidos húmicos, lípidos, azufre elemental y otros interferentes.

### Secado y homogeneización

La muestra de suelo se seca al aire (o con sulfato de sodio anhidro) hasta peso constante, se tamiza a malla 60 (250 µm) o malla 80 (180 µm) y se homogeneiza cuidadosamente. La determinación del contenido de humedad se realiza por separado (gravimetría a 105 °C) para expresar los resultados en peso seco.

### Extracción

Existen tres técnicas principales de extracción:

**Extracción Soxhlet (EPA 3540C):** Es el método clásico y el de referencia histórica. Se colocan 10–30 g de suelo en un dedal de celulosa dentro de un extractor Soxhlet y se extrae con 200–300 mL de hexano:acetona (1:1) o tolueno durante 16–24 horas. Ventaja: método bien establecido, buena recuperación. Desventaja: consume mucho tiempo y grandes volúmenes de disolvente.

**Extracción Acelerada con Disolventes (ASE, EPA 3545A):** Utiliza presión (1500–2000 psi) y temperatura (100–150 °C) para extraer los analitos en ciclos cortos (10–15 minutos por ciclo). Un ciclo típico extrae 10 g de suelo con 30 mL de hexano:acetona (1:1) en aproximadamente 15 minutos. La eficiencia es comparable o superior a Soxhlet en una fracción del tiempo. Es el método preferido en laboratorios de alto rendimiento.

**Extracción por Ultrasonido (EPA 3550C):** Adecuada para lotes pequeños. La muestra se extrae en un baño de ultrasonido con disolvente orgánico durante 3–5 minutos, se filtra y se repite. Menos eficiente que ASE y Soxhlet, pero de bajo costo.

### Clean-up (purificación)

Después de la extracción, el extracto contiene coextractivos que interfieren en el análisis por GC-MS/MS. El clean-up es obligatorio y se realiza típicamente en varias etapas:

| Etapa | Técnica | Interferentes removidos |
|---|---|---|
| Eliminación de azufre | Cobre activado (polvo de Cu + HCl diluido) | Azufre elemental (S₈) |
| Remoción de lípidos | Columna de sílice modificada con H₂SO₄ (44 % p/p) | Lípidos, pigmentos, ácidos húmicos |
| Fraccionamiento | Columna de sílice/alúmina (EPA 3630C) | Separación por polaridad: PCB en fracción 1, plaguicidas en fracción 2 |
| Clean-up adicional | Columna de Florisil (EPA 3620C) | Interferentes polares residuales |

El extracto final se concentra a 0.5–1.0 mL bajo corriente de nitrógeno y se adiciona un patrón interno de recuperación (por ejemplo, PCB 209 o antraceno-d10) antes del análisis.

## Configuración GC-MS/MS para POPs

### Columna cromatográfica

Para la separación de PCB, plaguicidas organoclorados y dioxinas se recomienda una columna capilar de baja polaridad:

- **Fase estacionaria:** 5 % fenil – 95 % dimetilpolisiloxano (DB-5MS, HP-5MS, Rtx-5MS)
- **Dimensiones:** 30 m × 0.25 mm × 0.25 µm
- **Alternativa para confirmación:** Columna de polaridad diferente (DB-17MS, DB-XLB) para verificar resultados positivos

### Programa de temperatura

| Etapa | Temperatura (°C) | Rampa (°C/min) | Tiempo (min) |
|---|---|---|---|
| Inicial | 70 | — | 2 |
| Rampa 1 | 180 | 25 | 0 |
| Rampa 2 | 280 | 5 | 0 |
| Rampa 3 | 310 | 10 | 5 (hold) |
| **Total** | | | **34.6 min** |

### Parámetros del espectrómetro de masas

- **Modo de ionización:** EI (impacto electrónico), 70 eV
- **Temperatura de la fuente:** 280 °C
- **Temperatura del cuadrupolo:** 150 °C
- **Modo de adquisición:** MRM (monitoreo de reacciones múltiples)

## Compuestos Objetivo y Transiciones MRM

La tabla siguiente presenta los compuestos POPs más relevantes en suelos, con sus iones de cuantificación y confirmación en modo MRM:

| Compuesto | tR (min) | Ion precursor (m/z) | Ion cuantificador (m/z) | Ion confirmación (m/z) | CE (eV) |
|---|---|---|---|---|---|
| PCB 28 | 12.5 | 256 | 186 | 151 | 25 |
| PCB 52 | 13.8 | 292 | 222 | 257 | 25 |
| PCB 101 | 16.2 | 326 | 256 | 186 | 25 |
| PCB 138 | 19.1 | 360 | 290 | 255 | 25 |
| PCB 153 | 18.5 | 360 | 290 | 325 | 25 |
| PCB 180 | 21.0 | 394 | 324 | 359 | 25 |
| α-HCH | 8.9 | 219 | 183 | 147 | 15 |
| β-HCH | 9.5 | 219 | 183 | 147 | 15 |
| γ-HCH (Lindano) | 9.8 | 219 | 183 | 147 | 15 |
| Aldrín | 12.0 | 263 | 193 | 191 | 20 |
| Dieldrín | 15.5 | 277 | 241 | 206 | 15 |
| Endrín | 15.8 | 263 | 191 | 173 | 20 |
| 4,4'-DDE | 14.8 | 246 | 176 | 211 | 25 |
| 4,4'-DDD | 16.0 | 235 | 165 | 199 | 25 |
| 4,4'-DDT | 16.8 | 235 | 165 | 199 | 25 |
| Heptacloro | 11.2 | 272 | 237 | 143 | 20 |
| Heptacloro epóxido | 13.5 | 263 | 193 | 191 | 20 |
| 2,3,7,8-TCDD | 20.5 | 322 | 259 | 257 | 20 |
| 1,2,3,7,8-PeCDD | 23.0 | 356 | 293 | 355 | 20 |

*CE: energía de colisión. Los tiempos de retención son orientativos y dependen de las condiciones cromatográficas específicas.*

## Parámetros de Calidad y Criterios de Aceptación

### Límites de detección y cuantificación

| Grupo de compuestos | LOD (µg/kg) | LOQ (µg/kg) |
|---|---|---|
| PCB (congéneres indicadores) | 0.5 – 1.0 | 1.0 – 3.0 |
| Plaguicidas organoclorados | 0.1 – 1.0 | 0.5 – 3.0 |
| Dioxinas (2,3,7,8-TCDD) | 0.001 – 0.01 | 0.003 – 0.03 |
| HCH (isómeros) | 0.2 – 0.5 | 0.5 – 2.0 |

### Criterios de aceptación

- **Recuperación de estándares de control:** 70 – 120 % (idealmente 80 – 110 %)
- **Precisión (RSD de duplicados):** < 20 % para concentraciones > LOQ; < 30 % para concentraciones entre LOD y LOQ
- **Linealidad:** R² ≥ 0.995 (curvas de 5–7 niveles)
- **Blancos de método:** Sin picos por encima del LOD
- **Desviación del tiempo de retención:** ± 0.2 min respecto al estándar
- **Relación isotópica (cuantificador/confirmador):** Dentro del ± 20 % del valor teórico

## Interpretación de Resultados y Criterios de Limpieza de Suelos

La NOM-147-SEMARNAT/SSA1-2004 establece las concentraciones de remediación para suelos contaminados. Para los POPs más relevantes, los criterios son:

| Contaminante | Uso agrícola/residencial (mg/kg) | Uso industrial/comercial (mg/kg) |
|---|---|---|
| Aldrín + Dieldrín | 0.04 | 0.14 |
| Clordano | 0.05 | 0.50 |
| DDT (total) | 0.70 | 7.00 |
| Endrín | 0.05 | 1.70 |
| Heptacloro | 0.02 | 0.15 |
| PCB (totales) | 0.50 | 2.00 |
| HCB | 0.04 | 0.55 |

*La superación de estos límites obliga a implementar programas de remediación del suelo conforme a la normatividad aplicable.*

Cuando los resultados exceden los límites establecidos, el responsable del sitio debe presentar un programa de remediación que incluya técnicas como:

- **Biorremediación:** degradación microbiana de plaguicidas organoclorados
- **Extracción de vapor del suelo (SVE):** para compuestos semivolátiles
- **Lavado de suelos (soil washing):** con surfactantes y disolventes
- **Oxidación química in situ:** con permanganato de potasio, persulfato o Fenton
- **Incineración o desorción térmica:** para concentraciones altas de dioxinas y PCB

## Solinsa: Análisis de POPs y Asesoría Especializada

En Solinsa ofrecemos servicios de análisis de contaminantes orgánicos persistentes en suelos mediante GC-MS/MS con configuración MRM, incluyendo la determinación de PCB, plaguicidas organoclorados y otros POPs según los métodos EPA y las normas mexicanas aplicables. Nuestro laboratorio cuenta con sistemas de extracción ASE, columnas de clean-up automatizadas y personal capacitado en la interpretación de resultados conforme a la NOM-147 y NOM-138. También brindamos asesoría para la implementación de métodos en su laboratorio, desde la selección del equipo hasta la validación y puesta en marcha. Contáctenos en **www.solinsa.com**.
