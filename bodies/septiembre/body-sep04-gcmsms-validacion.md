---
title: "Validación de Métodos por GC-MS/MS según Guías FDA: Paso a Paso para Laboratorios"
published: 2026-09-04
category: cat-validacion
tags: [GC-MS/MS, validación, FDA, ICH, LOD, LOQ, MRM, multirresiduo]
audience: [T1-Farmacéutica, T1-Alimentos]
lang: es-MX
wordcount: ~2000
---

## Introducción

La validación de un método analítico por GC-MS/MS no es un trámite burocrático: es la evidencia documentada de que su método funciona para el propósito que fue diseñado. Cuando un laboratorio farmacéutico o de alimentos reporta un resultado por debajo del límite máximo de residuos (LMR), ese número debe ser defendible ante una auditoría de la COFEPRIS, la FDA o un cliente internacional.

La guía más referenciada para validación de métodos cromatográficos es la **FDA Guidance for Industry: Bioanalytical Method Validation (2018)**, junto con la **ICH Q2(R1) Validation of Analytical Procedures**. Aunque ambas comparten principios, difieren en énfasis: FDA es más rigurosa en matrices biológicas y estudios de recuperación, mientras que ICH se enfoca en métodos farmacopeicos.

> "Un método no validado es como un instrumento sin calibración: produce números, no datos."

En este artículo presentamos un flujo paso a paso para validar métodos multirresiduo por GC-MS/MS en modo MRM (*Multiple Reaction Monitoring*), con criterios de aceptación prácticos para laboratorios mexicanos.

## Parámetros de Validación según FDA e ICH Q2(R1)

La tabla siguiente resume los parámetros exigidos por cada guía y su aplicabilidad en GC-MS/MS:

| Parámetro | FDA (2018) | ICH Q2(R1) | Relevancia en GC-MS/MS MRM |
|---|---|---|---|
| Selectividad | Exigido | Exigido | Crítica: demostrar que no hay interferencias en las transiciones MRM |
| Linealidad | Exigido | Exigido | Curva de calibración con mínimo 6 niveles |
| Exactitud | Exigido | Exigido | Estudios de recuperación en matriz |
| Precisión | Exigido | Exigido | Repetibilidad y precisión intermedia |
| LOD | No exigido* | Exigido | Señal/ruido ≥ 3:1 |
| LOQ | Exigido | Exigido | Primer punto de la curva con precisión ≤ 20 % RSD |
| Robustez | Recomendado | Exigido | Variaciones deliberadas de temperatura, flujo, columna |
| Estabilidad | Exigido | Recomendado | Estabilidad en inyector, congelación, ciclos de descongelación |

*\*FDA exige reportar LLOQ (lower limit of quantification) pero no LOD como requisito independiente.*

## Selectividad: Demostrando que Mides lo que Crees Medir

En GC-MS/MS en modo MRM, la selectividad se demuestra analizando **blancos de matriz** (matriz libre del analito) y verificando que no haya señales en las ventanas de retención de las transiciones MRM de los analitos.

**Criterio de aceptación FDA:** La respuesta del blanco debe ser ≤ 20 % de la respuesta del LLOQ y ≤ 5 % del estándar interno.

Una trampa común en multirresiduo: cuando dos analitos eluyen muy cerca y comparten una transición MRM (p. ej., isómeros de pesticidas organoclorados). Se debe demostrar que la resolución cromatográfica es suficiente para discriminarlos, o seleccionar transiciones alternativas.

**Recomendación práctica:** Analizar al menos 6 lotes diferentes de matriz blanco (6 aguas diferentes, 6 suelos distintos, etc.) para asegurar que la selectividad es robusta frente a variabilidad natural de la matriz.

## Linealidad y Rango: Curvas de Calibración en MRM

La linealidad en GC-MS/MS no debe darse por sentada. Aunque el detector de masas en modo MRM tiene un rango lineal de 3-5 órdenes de magnitud, la eficiencia de ionización y la supresión de matriz pueden reducir este rango.

**Recomendaciones:**

- **Mínimo 6 niveles de calibración** más el blanco (matriz fortificada o estándar en solvente, según la matriz).
- **Criterio de aceptación ICH:** Coeficiente de correlación r ≥ 0.999 para calibración lineal (o desviación de cada punto de la curva ≤ 15 %, ≤ 20 % en el LOQ).
- **Ponderación:** Usar 1/x o 1/x² para mejorar el ajuste en el nivel bajo.
- **Estándar interno:** Un IS deuterado o análogo estructural para cada analito (o grupos de analitos si hay IS múltiples) corrige derivas instrumentales y variaciones de inyección.

> **Ejemplo:** Para una curva de 16 pesticidas organoclorados por GC-MS/MS en matriz de mango, el rango lineal típico es 0.005-0.500 mg/kg con r ≥ 0.999 usando 1/x² y PCB-209 como estándar interno.

## Exactitud y Precisión: Estudios de Recuperación y Repetibilidad

La exactitud se evalúa mediante **estudios de recuperación** a tres niveles de concentración (bajo, medio, alto) dentro del rango de la curva, con un mínimo de 5 réplicas por nivel.

**Criterios FDA:**
- Recuperación media dentro del 85-115 % (80-120 % en el LLOQ).
- Precisión (RSD intra-día) ≤ 15 % (≤ 20 % en el LLOQ).
- Precisión inter-día (repetibilidad entre analistas o días) ≤ 20 %.

**Protocolo recomendado para multirresiduo en alimentos:**

1. Fortificar la matriz blanco con los analitos a 3 niveles (p. ej., 0.5×, 1× y 2× el LMR).
2. Dejar reposar 30 min para que los analitos interactúen con la matriz (equilibrio).
3. Extraer según el método (QuEChERS, SPE, etc.).
4. Inyectar por triplicado cada extracto.
5. Calcular %Recuperación = (concentración medida / concentración fortificada) × 100.

## LOD y LOQ: El Dilema del Blanco y la Señal/Ruido

En GC-MS/MS, el LOD y LOQ se pueden determinar por dos enfoques complementarios:

**Enfoque 1 — Señal/Ruido (S/N):**
- LOD = concentración que produce S/N ≥ 3:1.
- LOQ = concentración que produce S/N ≥ 10:1, con precisión ≤ 20 % RSD.

**Enfoque 2 — Método basado en la curva de calibración (ICH):**
- LOD = 3.3 × (σ / pendiente)
- LOQ = 10 × (σ / pendiente)

Donde σ es la desviación estándar de la respuesta del blanco o la intersección con el eje y.

> **Advertencia:** En matrices complejas, el método S/N sobreestima la capacidad del método si el ruido no es homogéneo a lo largo del cromatograma. El método basado en la curva es más conservador y recomendable para multirresiduo.

**Para matrices mexicanas** como aguas residuales con alto contenido orgánico o alimentos procesados (salsas, lácteos), el LOQ debe confirmarse experimentalmente con al menos 6 fortificaciones independientes a nivel LOQ, verificando exactitud (80-120 %) y precisión (≤ 20 % RSD).

## Robustez en Métodos Multirresiduo

La robustez evalúa la capacidad del método para permanecer inalterado ante pequeñas variaciones deliberadas de los parámetros operativos. En GC-MS/MS se recomienda probar:

- **Variación de flujo de la columna:** ±0.2 mL/min.
- **Temperatura del horno:** ±5 °C en la rampa.
- **Columna:** Lote diferente de la misma fase estacionaria.
- **Temperatura del inyector:** ±10 °C.
- **Energía de ionización:** ±2 eV (en EI).

**Criterio:** El cambio en la recuperación de cada analito no debe exceder ±10 % respecto a las condiciones nominales.

Un método robusto es aquel que puede transferirse entre instrumentos o entre laboratorios sin necesidad de revalidación completa. Para laboratorios de alimentos en México que procesan cientos de muestras por mes, la robustez es un factor crítico de productividad.

## Estabilidad de la Muestra en la Secuencia de Inyección

Un aspecto que a menudo se descuida en la validación es la **estabilidad del extracto final**. Cuando una secuencia de 50-80 muestras se inyecta de corrida (12-18 horas de GC-MS/MS), los primeros y últimos viales pueden dar resultados diferentes si el analito no es estable en el inyector.

**Prueba de estabilidad en inyector:**
1. Preparar un pool de extracto fortificado a concentración media.
2. Inyectar al inicio y al final de la secuencia (o cada 10 muestras durante 24 h).
3. La diferencia entre la primera y última inyección debe ser ≤ 10 %.

**Estabilidad adicional a evaluar:**
- **Estabilidad en matriz** (muestra sin extraer): 24 h a temperatura ambiente, 7 días a 4 °C, 30 días a -20 °C.
- **Ciclos de congelación/descongelación:** 3 ciclos mínimo.

> **Dato práctico:** Los pesticidas organofosforados como clorpirifos y malatión son especialmente sensibles a degradación en extractos que permanecen más de 48 h en el inyector. Planifique secuencias de máximo 40 muestras o reinyecte controles de calidad cada 10 muestras.

## Conclusión

Validar un método por GC-MS/MS según guías FDA e ICH no es solo un requisito regulatorio; es una inversión en la calidad de sus datos. Un método bien validado reduce riesgos de resultados fuera de especificación, facilita auditorías y permite defender cada reporte con evidencia sólida. La clave está en documentar cada paso —selectividad, linealidad, exactitud, precisión, LOD/LOQ, robustez y estabilidad— con criterios de aceptación claros y datos experimentales reales.

En **Solinsa** sabemos que la validación es un proceso continuo, no un evento único. Ofrecemos soporte en el diseño de protocolos de validación, selección de columnas y condiciones cromatográficas, además de equipos GC-MS/MS con el software necesario para automatizar los cálculos de LOD, LOQ, recuperación y precisión. Consulte a nuestro equipo técnico para optimizar sus procesos de validación.
