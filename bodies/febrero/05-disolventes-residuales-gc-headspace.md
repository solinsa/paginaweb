---
title: "Análisis de Disolventes Residuales por GC Headspace según USP <467>"
published: 2026-02-14
category: cat-ind-quimica
tags: [GC, headspace, disolventes residuales, USP 467, farmacopea, control de calidad, farmacéutica]
audience: [T1-Farmacéutica, T1-Química]
lang: es-MX
wordcount: ~1500
---

## Introducción a la USP General Chapter ⟨467⟩

La presencia de disolventes residuales en productos farmacéuticos representa un aspecto crítico de calidad y seguridad que toda planta de producción debe controlar rigurosamente. Estos compuestos orgánicos volátiles, empleados durante los procesos de síntesis y formulación, pueden permanecer en el producto final en cantidades traza si no se eliminan adecuadamente. La **Farmacopea de los Estados Unidos**, en su capítulo general **USP ⟨467⟩**, establece los lineamientos para la determinación y control de estos residuos, convirtiéndose en el estándar de referencia para la industria farmacéutica a nivel global.

El cumplimiento de USP ⟨467⟩ no solo es un requisito regulatorio para la comercialización de medicamentos en Estados Unidos y numerosos países que adoptan sus estándares, sino que también garantiza la seguridad del paciente al mantener la exposición a disolventes dentro de límites toxicológicamente aceptables.

## Clasificación de los Disolventes Residuales

La USP ⟨467⟩ clasifica los disolventes residuales en tres categorías según su nivel de toxicidad:

### Clase 1: Disolventes que deben evitarse

Son aquellos con toxicidad conocida y efectos carcinogénicos comprobados en humanos. Su uso debe evitarse por completo en procesos farmacéuticos. Cuando su presencia es técnicamente inevitable, los límites son extremadamente restrictivos.

| Disolvente | Límite de Concentración (ppm) | PDE (mg/día) |
|---|---|---|
| **Benceno** | 2 | 0.1 |
| **1,2-Dicloroetano** | 5 | 0.25 |
| **1,1-Dicloroeteno** | 8 | 0.4 |
| **Tetracloruro de carbono** | 4 | 0.2 |
| **Tricloroetileno** | 10 | 0.5 |

> **Nota crítica:** La sola detección de un disolvente Clase 1 en un lote farmacéutico puede desencadenar una investigación regulatoria profunda. La mayoría de los fabricantes optan por eliminarlos completamente de sus procesos productivos.

### Clase 2: Disolventes con toxicidad limitada

Son aquellos cuyo uso debe restringirse debido a su potencial toxicológico. Incluyen compuestos ampliamente utilizados en la industria como metanol, acetona, diclorometano y tetrahidrofurano (THF). Para cada uno se establece un **Permitted Daily Exposure (PDE)** específico.

| Disolvente | Límite de Concentración (ppm) | PDE (mg/día) |
|---|---|---|
| **Metanol** | 3000 | 50 |
| **Acetona** | 5000 | 50 |
| **Diclorometano** | 600 | 6 |
| **Tetrahidrofurano** | 720 | 7.2 |
| **Acetonitrilo** | 410 | 4.1 |
| **n-Hexano** | 290 | 2.9 |
| **Etilacetato** | 5000 | 50 |

### Clase 3: Disolventes de baja toxicidad

Compuestos con baja toxicidad aguda y crónica, considerados de menor riesgo. Incluyen etanol, isopropanol, ácido acético y acetona (aunque la acetona también aparece en Clase 2, su clasificación depende del contexto de uso). El límite general es de **5000 ppm (0.5 %)**, a menos que existan restricciones específicas del proceso.

## Principios de la Técnica de Headspace Estático

La cromatografía de gases con **headspace estático** (HS-GC) es la técnica recomendada por USP ⟨467⟩ para el análisis de disolventes residuales. Su fundamento es elegantemente simple:

1. La muestra (sólida o líquida) se coloca en un vial sellado herméticamente.
2. Se termostatiza a una temperatura controlada (generalmente 80–105 °C) durante un tiempo definido (30–60 minutos).
3. Durante este período, los compuestos volátiles se distribuyen entre la fase líquida/sólida y la fase gaseosa (headspace) hasta alcanzar el equilibrio termodinámico.
4. Una alícuota de la fase gaseosa se extrae automáticamente y se inyecta en el cromatógrafo.

La gran ventaja de esta técnica es que **evita la inyección directa de matrices complejas** como polímeros, excipientes o formulaciones sólidas, prolongando la vida útil de la columna y reduciendo la necesidad de mantenimiento. Además, minimiza las interferencias de matriz al transferir selectivamente solo los compuestos volátiles de interés.

> **Fundamento clave:** La concentración en la fase gaseosa es proporcional a la concentración en la muestra original a través del coeficiente de partición K = C_líquido / C_gas. Un K pequeño indica alta volatilidad y, por tanto, mayor sensibilidad en headspace.

## Configuración Instrumental Recomendada

### Automuestreador de Headspace

El corazón del sistema es un automuestreador de headspace estático con las siguientes capacidades:

- Bandeja termostatizada para al menos 40 viales
- Horno de termostatización con control preciso de temperatura (±0.5 °C)
- Sistema de transferencia (loop o línea de transferencia) con calefacción independiente para evitar condensación
- Jeringa caliente con capacidad de 1–5 mL para muestras gaseosas

### Columna Cromatográfica

La columna más ampliamente reportada para análisis de disolventes residuales es la **DB-624** (o equivalentes como Rtx-624, VF-624, HP-624), con las siguientes características:

- **Fase estacionaria:** 6 % cianopropilfenil / 94 % dimetilpolisiloxano
- **Dimensiones típicas:** 30 m × 0.32 mm × 1.8 μm (o 30 m × 0.53 mm × 3.0 μm)
- **Selectividad:** excelente para compuestos volátiles polares y no polares

### Detector FID

El detector de ionización de llama (FID) es el estándar para este análisis gracias a su amplia respuesta lineal, sensibilidad y fiabilidad. Para aplicaciones donde se requiere confirmación de identidad, se recomienda acoplar un detector de espectrometría de masas (MS).

## Condiciones Cromatográficas Típicas

A continuación se presentan las condiciones de operación recomendadas como punto de partida para el desarrollo del método:

| Parámetro | Valor Típico |
|---|---|
| Temperatura del horno de HS | 85–105 °C |
| Tiempo de termostatización | 30–60 min |
| Temperatura del loop/inyector | 110–140 °C |
| Gas carrier | Helio a 1.5–2.0 mL/min |
| Programa de temperatura del horno GC | 40 °C (5 min) → 10 °C/min → 240 °C (5 min) |
| Temperatura del FID | 260 °C |
| Split ratio | 1:10 a 1:50 |
| Volumen de inyección | 1 mL de fase gaseosa |

## Preparación de Estándares y Muestras

### Estándares de disolventes

Se preparan soluciones madre individuales y una mezcla de estándares en un disolvente apropiado (generalmente DMSO o N,N-dimetilacetamida cuando los analitos son solubles). Las curvas de calibración deben cubrir el intervalo de concentraciones esperado, desde el límite de cuantificación hasta el 150 % del límite especificado por USP ⟨467⟩.

### Preparación de muestras

- **Muestras líquidas:** se transfieren 2 mL directamente al vial de headspace.
- **Muestras sólidas:** se pesan 200–500 mg en el vial.
- En ambos casos se añade agua (1–5 mL) como matriz dispersante para favorecer la liberación de disolventes.
- El vial se sella inmediatamente con septo de PTFE/silicona.

## Validación del Método

La validación según USP ⟨467⟩ debe demostrar los siguientes parámetros:

- **Especificidad:** confirmar que cada disolvente se resuelve sin interferencias. La resolución entre picos adyacentes debe ser > 1.5.
- **LOD y LOQ:** el límite de detección debe ser ≤ 50 % del límite especificado; el límite de cuantificación debe ser ≤ 100 % del límite de especificación, con precisión (%CV < 15 %).
- **Linealidad:** R² ≥ 0.999 en el intervalo de calibración.
- **Precisión (repetibilidad):** %CV ≤ 10 % para al menos seis réplicas.
- **Exactitud:** recuperación entre 80–120 % para los niveles evaluados.

### Tiempos de Retención de Referencia

| Disolvente | Tiempo de Retención Aprox. (min) |
|---|---|
| Metanol | 4.2 |
| Etanol | 5.1 |
| Acetona | 5.6 |
| Isopropanol | 6.0 |
| Acetonitrilo | 6.8 |
| Diclorometano | 7.5 |
| n-Hexano | 12.3 |
| Tetrahidrofurano | 13.0 |
| Benceno | 15.5 |
| 1,2-Dicloroetano | 17.2 |

## Interpretación de Resultados y Criterios de Cumplimiento

El criterio principal de cumplimiento bajo USP ⟨467⟩ es que ningún disolvente residual exceda su límite de concentración especificado. Si un disolvente Clase 1 se detecta por encima del límite, el lote es rechazado de forma inmediata. Para disolventes Clase 2, se permite un cálculo ponderado cuando están presentes múltiples disolventes, siempre que la suma de las fracciones (C1/L1 + C2/L2 + ... + Cn/Ln) ≤ 1.

El análisis debe realizarse al menos por duplicado, y los resultados se reportan como el promedio de las determinaciones. En caso de resultados cercanos al límite (dentro del 20 % del valor especificado), se recomienda confirmar con un método ortogonal o con GC-MS.

> **Conclusión analítica:** Un resultado dentro de especificaciones no solo certifica la calidad del lote, sino que valida la eficacia del proceso de secado y purificación empleado durante la fabricación.

## Soluciones Analíticas en Solinsa

En Solinsa contamos con equipos de cromatografía de gases con headspace estático de última generación, configurados y calibrados específicamente para el cumplimiento de USP ⟨467⟩. Nuestro equipo técnico ofrece asesoría integral en la selección de columnas, condiciones cromatográficas y validación de métodos para garantizar que su laboratorio cumpla con los más altos estándares farmacéuticos. Solicite una demostración y conozca cómo podemos optimizar su control de calidad.
