---
title: "Análisis de Pesticidas en Agua Potable por GC-MS: Métodos EPA 525.2 y 508"
published: 2025-12-15
category: cat-ind-ambiental
tags: [pesticidas, agua potable, GC-MS, EPA 525, EPA 508, NOM-127]
audience: [T1-Ambiental]
lang: es-MX
wordcount: ~1500
---

## Introducción

La presencia de pesticidas en fuentes de agua potable es una preocupación creciente a nivel global. La NOM-127-SSA1-2021 establece los límites máximos permisibles para plaguicidas en agua para uso y consumo humano en México, mientras que la EPA ha desarrollado métodos estandarizados como el EPA 525.2 y el EPA 508 para su determinación por GC-MS.

Estos métodos permiten la identificación y cuantificación simultánea de docenas de pesticidas organoclorados, organofosforados, piretroides y herbicidas con límites de detección en el rango de partes por billón (µg/L). En este artículo se describen las configuraciones instrumentales, procedimientos de extracción y control de calidad requeridos.

## Métodos EPA 525.2 vs EPA 508

| Característica | EPA 525.2 | EPA 508 |
|---------------|-----------|---------|
| Analitos | 47 compuestos (pesticidas, PCBs, PAHs) | 42 compuestos organoclorados y PCBs |
| Extracción | Extracción en fase sólida (SPE) C18 | Extracción líquido-líquido (LLE) con hexano |
| Volumen de muestra | 1 L | 1 L |
| Detección | GC-MS (full scan o SIM) | GC-ECD o GC-MS |
| LOD típico | 0.1-1.0 µg/L | 0.01-0.5 µg/L |

## Preparación de muestra

### Método EPA 525.2 — Extracción en fase sólida (SPE)

1. **Acondicionar** el cartucho SPE C18 (500 mg / 6 mL) con:
   - 5 mL de acetato de etilo
   - 5 mL de metanol
   - 5 mL de agua libre de orgánicos (tipo I)

2. **Pasar** 1 L de muestra a través del cartucho a 10-15 mL/min.

3. **Lavar** el cartucho con 5 mL de agua tipo I.

4. **Secar** el cartucho al vacío por 10 minutos.

5. **Eluir** con 5 mL de acetato de etilo, recolectando en un vial de 15 mL.

6. **Concentrar** a 0.5 mL bajo corriente de N₂.

7. **Agregar** 10 µL de estándar interno (fluoranteno-d10, 100 µg/mL).

### Método EPA 508 — Extracción líquido-líquido

1. **Colocar** 1 L de muestra en un embudo de separación de 2 L.
2. **Agregar** 60 mL de hexano calidad HPLC.
3. **Agitar** vigorosamente por 2 minutos, con venteo periódico.
4. **Separar** la fase orgánica.
5. **Repetir** la extracción con 60 mL de hexano fresco.
6. **Combinar** las fases orgánicas.
7. **Concentrar** a 1 mL usando rotavapor o corriente de N₂.
8. **Agregar** 10 µL de estándar interno (PCB 30, 100 µg/mL).

## Condiciones instrumentales GC-MS

| Parámetro | Condición EPA 525.2 |
|-----------|--------------------|
| Columna | DB-5MS o equivalente, 30 m × 0.25 mm × 0.25 µm |
| Gas carrier | Helio, 1.0 mL/min |
| Inyector | 270°C, modo splitless, 1 µL |
| Programa T° | 50°C (2 min) → 6°C/min → 290°C (10 min) |
| Tiempo total | 52 min |
| MS | Modo SIM (3 iones por compuesto) o full scan (50-500 m/z) |

### Iones monitoreados para compuestos representativos

| Compuesto | TR (min) | Ión target (m/z) | Ión calif. 1 | Ión calif. 2 |
|-----------|---------|-------------------|-------------|-------------|
| α-BHC | 15.2 | 219 | 183 | 181 |
| Atrazina | 17.5 | 200 | 215 | 173 |
| Clorpirifos | 23.1 | 314 | 258 | 286 |
| p,p'-DDT | 28.8 | 235 | 237 | 165 |
| Endrín | 27.4 | 263 | 265 | 261 |
| Metoxicloro | 30.5 | 227 | 228 | 274 |

## Control de calidad

### Para cada lote de muestras, incluir:

| Control | Frecuencia | Criterio de aceptación |
|---------|-----------|----------------------|
| Blanco de método | 1 por lote (20 muestras) | Analitos < LOD |
| Duplicado | 1 por lote | RPD ≤ 20% |
| Muestra fortificada (LFM) | 1 por lote | Recuperación 70-130% |
| Estándar de calibración de verificación (CCV) | Cada 10 muestras | Recuperación 80-120% |
| Blanco de calibración | Cada 10 muestras | Analitos < LOD |

### Curva de calibración

- **Número de puntos**: mínimo 5 concentraciones (0.5, 1.0, 5.0, 10, 50 µg/L).
- **Criterio**: r² ≥ 0.995.
- **Inyección**: patrón de calibración al inicio del lote.

## Límites permisibles NOM-127 y comparación con EPA

| Parámetro | Límite NOM-127 (mg/L) | Límite EPA MCL (mg/L) |
|-----------|----------------------|----------------------|
| Atrazina | 0.003 | 0.003 |
| Clordano | 0.0002 | 0.002 |
| 2,4-D | 0.03 | 0.07 |
| Lindano | 0.002 | 0.0002 |
| Metoxicloro | 0.02 | 0.04 |
| Toxafeno | 0.005 | 0.003 |
| Aldrín + Dieldrín | 0.00003 | 0.00003 |

> Los límites en México son generalmente equivalentes o más restrictivos que los de EPA. Es fundamental que los LOD del método sean al menos 5 veces menores que el límite permisible.

## Interpretación de resultados y confirmación

### Criterios de identificación positiva

1. **Tiempo de retención**: dentro de ±0.1 min del estándar calibrado.
2. **Relaciones iónicas**: cada ión calificador debe estar dentro del ±20% de la relación esperada del estándar.
3. **Relación S/N**: ≥ 3 para el ión target en el límite de detección.

### Confirmación por GC-MS/MS

En caso de resultados cercanos al límite normativo, se recomienda confirmación por GC-MS/MS (MRM) para eliminar falsos positivos por interferencias de matriz. La transición específica de cada compuesto proporciona selectividad adicional.

## Conclusión

El análisis de pesticidas en agua potable por GC-MS siguiendo los métodos EPA 525.2 y 508 es una técnica robusta y ampliamente aceptada por las autoridades regulatorias. La correcta implementación de estos métodos —incluyendo preparación de muestra, condiciones cromatográficas y control de calidad— garantiza resultados confiables que cumplen con los límites establecidos en la NOM-127 y protegen la salud pública.

En Solinsa ofrecemos equipos GC-MS calibrados y listos para análisis de pesticidas, columnas especializadas, estándares certificados y servicios de validación de métodos. Contáctanos para optimizar tu laboratorio de análisis de agua potable.
