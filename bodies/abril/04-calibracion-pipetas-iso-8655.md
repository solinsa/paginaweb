---
title: 'Calibración de pipetas y material volumétrico según ISO 8655 y NOM-008-SCFI'
published: 2026-04-09
slug: calibracion-pipetas-material-volumetrico-iso-8655
category: cat-serv-calib
tags:
  - calibración
  - pipetas
  - ISO 8655
  - material volumétrico
  - NOM-008
audience:
  - T1-Industria
  - T2-Aseguramiento
---

# Calibración de pipetas y material volumétrico según ISO 8655 y NOM-008-SCFI

## Introducción

La exactitud en la medición de volúmenes es un requisito fundamental en cualquier laboratorio analítico. Desde la preparación de estándares y reactivos hasta la realización de diluciones seriadas y análisis cuantitativos, la confiabilidad de los resultados depende directamente de la calibración del material volumétrico. Una pipeta descalibrada puede introducir errores sistemáticos que comprometan todo el proceso analítico, con consecuencias que van desde resultados fuera de especificación hasta decisiones regulatorias incorrectas.

La norma ISO 8655 establece los requisitos para la calibración de pipetas de pistón (monocanal y multicanal), mientras que la NOM-008-SCFI es la referencia mexicana para instrumentos de medición volumétrica, incluyendo matraces aforados, probetas y buretas. Ambas normas proporcionan el marco técnico para garantizar la trazabilidad metrológica al Sistema Internacional de Unidades (SI).

En este artículo se describe el procedimiento gravimétrico de calibración, los criterios de aceptación según cada norma, la frecuencia recomendada y los elementos que debe contener un certificado de calibración conforme a la ISO 17025.

## Fundamento del método gravimétrico

El método gravimétrico es el procedimiento de referencia para la calibración de material volumétrico. Se basa en la determinación de la masa de agua destilada dispensada o contenida por el instrumento, corregida por la densidad del agua a la temperatura de trabajo y por el empuje del aire.

### Ecuación fundamental

El volumen corregido V₂₀ a la temperatura de referencia (20 °C) se calcula como:

**V₂₀ = (mL − me) × Z × (1 − ρa / ρp)**

donde:
- mL = masa del agua dispensada (g)
- me = masa del recipiente de pesada vacío (g)
- Z = factor de corrección por densidad del agua y empuje del aire (adimensional)
- ρa = densidad del aire (≈ 0.0012 g/mL)
- ρp = densidad de las pesas de calibración (≈ 8.0 g/mL)

### Factores Z para corrección

Estos factores integran la corrección por densidad del agua a la temperatura de medición y el empuje del aire. Se recomienda usar la tabla publicada en el anexo A de la ISO 8655-2.

| Temperatura (°C) | Presión 1013.25 hPa, humedad 50 % |
|---|---|
| 18.0 | 1.0023 |
| 19.0 | 1.0019 |
| 20.0 | 1.0016 |
| 21.0 | 1.0013 |
| 22.0 | 1.0010 |
| 23.0 | 1.0008 |
| 24.0 | 1.0005 |
| 25.0 | 1.0003 |
| 26.0 | 1.0000 |
| 27.0 | 0.9997 |

## Procedimiento de calibración para pipetas monocanal y multicanal

### Condiciones ambientales

- Temperatura ambiente: 20 ± 2 °C (ideal) o 20 ± 5 °C (aceptable)
- Variación de temperatura durante la calibración: ≤ ±0.5 °C
- Humedad relativa: 50 ± 20 %
- Presión atmosférica registrada
- Balanza analítica con resolución de 0.01 mg (para pipetas ≤ 100 µL) o 0.1 mg (para pipetas > 100 µL)

### Procedimiento paso a paso

1. **Acondicionamiento** — mantener la pipeta, el agua y el recipiente de pesada en el laboratorio durante al menos 2 horas antes de iniciar.
2. **Selección del volumen de prueba** — calibrar al volumen nominal y al 50 % del volumen nominal (y al 10 % para pipetas de volumen variable).
3. **Ciclo de pipeteo** — se realizan 10 mediciones para pipetas monocanal y 10 mediciones por canal para pipetas multicanal (canales 2, 4, 6, 8, 12, 16).
4. **Procedimiento**:
   - Tarar el recipiente de pesada cerrado.
   - Aspirar el agua con la pipeta (pre-enjuague 3 veces con el agua).
   - Dispensar el agua dentro del recipiente, tocando la punta contra la pared interior.
   - Cerrar el recipiente inmediatamente para evitar evaporación.
   - Registrar la masa en la balanza.
   - Repetir hasta completar las 10 réplicas.
5. **Cálculos**:
   - Masa neta = masa bruta − masa del recipiente
   - Volumen corregido = masa neta × Z (omitir el término de empuje del aire si se usa la tabla Z directamente)

## Criterios de aceptación ISO 8655

La ISO 8655-2 especifica los errores máximos permisibles (EMP) para pipetas de pistón:

### Exactitud (error sistemático)

El error sistemático (ES) es la diferencia entre el volumen medio dispensado y el volumen nominal:

**ES = Vmedia − Vnominal**

### Precisión (error aleatorio)

La precisión se expresa como la desviación estándar (s) o el coeficiente de variación (CV) de las réplicas.

### Límites según ISO 8655-2

| Volumen nominal | Exactitud máxima (%) | Exactitud máxima (µL) | Precisión máxima (%) | Precisión máxima (µL) |
|---|---|---|---|---|
| 1 µL | ± 5.0 % | ± 0.05 µL | ≤ 2.0 % | ≤ 0.02 µL |
| 10 µL | ± 1.2 % | ± 0.12 µL | ≤ 0.6 % | ≤ 0.06 µL |
| 100 µL | ± 0.8 % | ± 0.80 µL | ≤ 0.3 % | ≤ 0.30 µL |
| 1000 µL | ± 0.6 % | ± 6.0 µL | ≤ 0.2 % | ≤ 2.0 µL |
| 5000 µL | ± 0.6 % | ± 30 µL | ≤ 0.2 % | ≤ 10 µL |

### Criterios para pipetas multicanal

Para pipetas multicanal, cada canal individual debe cumplir con los límites de exactitud y precisión. Además, la uniformidad entre canales (diferencia entre el canal de mayor y menor volumen) no debe exceder 1.5 veces el límite de precisión.

## Calibración de material volumétrico según NOM-008-SCFI

La NOM-008-SCFI establece los requisitos para vidrio volumétrico clase A y clase B.

### Matraces aforados

| Capacidad (mL) | Clase A (± mL) | Clase B (± mL) |
|---|---|---|
| 10 | 0.02 | 0.04 |
| 25 | 0.03 | 0.06 |
| 50 | 0.05 | 0.10 |
| 100 | 0.08 | 0.16 |
| 250 | 0.12 | 0.24 |
| 500 | 0.20 | 0.40 |
| 1000 | 0.30 | 0.60 |

### Buretas

| Capacidad (mL) | División mínima (mL) | Clase A (± mL) | Clase B (± mL) |
|---|---|---|---|
| 10 | 0.02 | 0.01 | 0.02 |
| 25 | 0.05 | 0.03 | 0.05 |
| 50 | 0.10 | 0.05 | 0.10 |
| 100 | 0.10 | 0.10 | 0.20 |

### Probetas graduadas

| Capacidad (mL) | División mínima (mL) | Clase A (± mL) | Clase B (± mL) |
|---|---|---|---|
| 10 | 0.1 | 0.10 | 0.20 |
| 50 | 0.5 | 0.25 | 0.50 |
| 100 | 1.0 | 0.50 | 1.0 |
| 500 | 5.0 | 2.5 | 5.0 |
| 1000 | 10.0 | 5.0 | 10.0 |

## Frecuencia de calibración recomendada

La frecuencia de calibración depende del uso, pero se recomienda:

| Tipo de material | Frecuencia recomendada |
|---|---|
| Pipetas de uso diario (PCR, ELISA) | Cada 3 meses |
| Pipetas de uso estándar | Cada 6 meses |
| Pipetas de uso ocasional | Cada 12 meses |
| Matraces aforados (uso frecuente) | Cada 12 meses |
| Buretas | Cada 6–12 meses según uso |
| Probetas | Cada 12–24 meses |

La calibración debe realizarse además:
- Después de cualquier reparación o mantenimiento
- Cuando se sospeche un daño mecánico
- Al cambiar el tipo de líquido dispensado (viscosidad, densidad)
- Cuando los resultados de las verificaciones intermedias (pesadas de control) excedan los límites

## Trazabilidad al SI y certificado de calibración

### Trazabilidad

La trazabilidad metrológica se establece mediante:
- Balanza calibrada con pesas trazables al SI (clase E1 o E2 para pipetas de hasta 100 µL)
- Termómetro calibrado con incertidumbre ≤ 0.1 °C
- Barómetro calibrado con incertidumbre ≤ 0.1 hPa
- Agua de calidad Tipo I (ISO 3696, 18.2 MΩ·cm)

### Contenido del certificado de calibración

Según la ISO 17025, el certificado debe incluir:

1. Identificación del laboratorio y del instrumento
2. Fecha de calibración y fecha de vencimiento recomendada
3. Condiciones ambientales registradas
4. Método de calibración (referencia ISO 8655:2022)
5. Volúmenes probados y número de réplicas
6. Resultados: volumen medio, ES, CV, incertidumbre expandida (k=2, 95 %)
7. Criterio de aceptación aplicado
8. Decisión de conformidad (pasa / no pasa)
9. Trazabilidad de los patrones usados
10. Firma del responsable técnico

## Programa de gestión volumétrica

Un programa integral de gestión volumétrica en el laboratorio debe incluir:

- **Inventario** — registro de todo el material volumétrico con número de identificación único.
- **Cronograma** — calendario de calibraciones con recordatorios automatizados.
- **Verificaciones intermedias** — pesadas de control semanales para pipetas de alta criticidad.
- **Capacitación** — entrenamiento periódico del personal en técnicas de pipeteo (ISO 8655-7:2022).
- **Mantenimiento** — limpieza, lubricación y reemplazo de sellos según programa del fabricante.
- **Acciones correctivas** — protocolo para instrumentos que no pasan la calibración: ajuste, recalibración y evaluación del impacto en resultados emitidos desde la última calibración conforme.

## Conclusión

La calibración de pipetas y material volumétrico según ISO 8655 y NOM-008-SCFI es un pilar de la calidad analítica en cualquier laboratorio. Un programa de calibración bien implementado garantiza la trazabilidad de las mediciones volumétricas al SI, reduce los errores sistemáticos y aleatorios en el análisis, y proporciona la confianza necesaria para la toma de decisiones basadas en datos. La inversión en calibración periódica y en la capacitación del personal se traduce directamente en la calidad y reputación del laboratorio.

En **Solinsa** somos expertos en instrumentación analítica y cromatografía. Contáctanos para recibir asesoría personalizada, cotización de equipos, refacciones o soporte técnico. Visítanos en solinsa.com.
