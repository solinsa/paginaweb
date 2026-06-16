---
title: "Control Estadístico de Procesos (SPC) en el Laboratorio Analítico: Cartas de Control y su Interpretación"
published: 2026-03-26
category: cat-calidad
tags: [SPC, control estadístico, cartas de control, Shewhart, calidad]
audience: [T1-Calidad]
lang: es-MX
wordcount: ~1500
---

## Fundamentos del SPC Aplicados al Laboratorio

El **Control Estadístico de Procesos (SPC)** es una metodología basada en el uso de herramientas estadísticas para monitorear, controlar y mejorar procesos mediante la reducción de la variabilidad. En el contexto de un laboratorio analítico, el SPC permite distinguir entre la **variación inherente al sistema** (causas comunes) y las **perturbaciones asignables** (causas especiales) que requieren intervención correctiva.

Walter Shewhart, pionero de esta disciplina, estableció en la década de 1920 que todo proceso presenta variación. La clave no es eliminar la variación por completo —objetivo inalcanzable— sino mantenerla dentro de límites que garanticen la calidad del resultado analítico. En un laboratorio acreditado bajo **ISO 17025**, la implementación de SPC es un requisito implícito del numeral 7.7 (aseguramiento de la validez de los resultados), donde se exige el uso de cartas de control como herramienta de monitoreo continuo.

## Cartas de Control para Variables: X-barra y R

La carta **X-barra y R** es la herramienta fundamental cuando se trabaja con datos medibles (variables continuas) y se dispone de subgrupos racionales de tamaño pequeño (n = 2 a 10).

### Construcción paso a paso

1. **Recolección de datos:** Se toman k subgrupos de tamaño n (típicamente n = 3 a 5). Por ejemplo, en un laboratorio de cromatografía se pueden analizar 3 réplicas de un material de referencia en cada corrida analítica.
2. **Cálculo de medias y rangos:** Para cada subgrupo i se calcula la media (X̄ᵢ) y el rango (Rᵢ = Xmax − Xmin).
3. **Línea central:** La gran media X̄ = (ΣX̄ᵢ)/k y el rango promedio R̄ = (ΣRᵢ)/k.
4. **Límites de control para la carta X-barra:**
   - LCS (Límite de Control Superior) = X̄ + A₂·R̄
   - LCI (Límite de Control Inferior) = X̄ − A₂·R̄
5. **Límites de control para la carta R:**
   - LCS = D₄·R̄
   - LCI = D₃·R̄

Los factores A₂, D₃ y D₄ dependen del tamaño del subgrupo y se obtienen de tablas estandarizadas.

| n | A₂ | D₃ | D₄ |
|---|---|---|---|
| 2 | 1.880 | 0 | 3.267 |
| 3 | 1.023 | 0 | 2.574 |
| 4 | 0.729 | 0 | 2.282 |
| 5 | 0.577 | 0 | 2.114 |

### Ejemplo práctico con datos de cromatografía

Supongamos que analizamos un estándar de control de benceno a 50 µg/L en 10 corridas con 3 réplicas cada una:

| Corrida | Réplica 1 | Réplica 2 | Réplica 3 | Media (X̄) | Rango (R) |
|---|---|---|---|---|---|
| 1 | 49.8 | 50.2 | 50.1 | 50.03 | 0.4 |
| 2 | 50.5 | 49.9 | 50.3 | 50.23 | 0.6 |
| 3 | 49.6 | 50.0 | 49.8 | 49.80 | 0.4 |
| 4 | 50.1 | 50.4 | 50.2 | 50.23 | 0.3 |
| 5 | 50.0 | 49.7 | 50.5 | 50.07 | 0.8 |
| 6 | 49.9 | 50.1 | 49.8 | 49.93 | 0.3 |
| 7 | 50.3 | 50.6 | 50.1 | 50.33 | 0.5 |
| 8 | 50.0 | 49.8 | 50.2 | 50.00 | 0.4 |
| 9 | 49.7 | 50.3 | 49.9 | 49.97 | 0.6 |
| 10 | 50.2 | 50.0 | 50.4 | 50.20 | 0.4 |

Gran media X̄ = 50.08 µg/L, Rango promedio R̄ = 0.47. Para n = 3, A₂ = 1.023.

LCS (X-barra) = 50.08 + (1.023 × 0.47) = 50.56 µg/L
LCI (X-barra) = 50.08 − (1.023 × 0.47) = 49.60 µg/L

Si en la corrida 11 obtenemos una media de 50.70 µg/L, este valor **excede el LCS**, señalando una causa especial que debe investigarse (posible deriva del detector, contaminación del inyector o deterioro del estándar).

## Carta I-MR para Datos Individuales

Cuando los subgrupos racionales no son prácticos —por ejemplo, cuando se analiza una muestra de control por lote (uno por día) o cuando el ensayo consume la totalidad de la muestra— se emplea la carta **I-MR** (individuales y rango móvil).

- **Carta I (individuales):** Representa cada medición individual. Límites calculados como X̄ ± E₂·R̄m, donde E₂ = 2.66 para rangos móviles de 2 puntos.
- **Carta MR (rango móvil):** Muestra la diferencia absoluta entre mediciones consecutivas (MRᵢ = |Xᵢ − Xᵢ₋₁|). Límite superior = D₄·R̄m, con D₄ = 3.267.

> **Nota:** La carta I-MR es menos sensible que X-barra y R para detectar cambios pequeños en la media, pero es la única opción viable en muchos esquemas de control de calidad donde no se procesan réplicas.

## Cartas para Atributos

En el laboratorio también se manejan datos cualitativos (aprueba/no aprueba, presencia/ausencia). Para estos casos se utilizan las cartas para atributos:

### Carta p (proporción de defectuosos)

Se usa cuando se evalúa la fracción de resultados que excede un límite de especificación. Por ejemplo, el porcentaje de muestras que rebasan el límite máximo permisible de metales pesados en agua potable. La línea central es p̄ (proporción promedio de defectuosos) y los límites se calculan como p̄ ± 3√[p̄(1−p̄)/n].

### Carta np (número de defectuosos)

Similar a la carta p, pero grafica el número de no conformes en lugar de la proporción. Útil cuando el tamaño de subgrupo es constante.

### Carta c (número de defectos)

Se aplica cuando se cuenta el número de no conformidades por unidad de inspección. Por ejemplo, el número de picos fuera de especificación en un cromatograma de calibración, o el número de desviaciones en una auditoría interna.

### Carta u (defectos por unidad)

Similar a c, pero ajusta por unidad de área o volumen cuando el tamaño de inspección varía.

## Criterios de Western Electric y Nelson para Detección de Tendencias

Un punto fuera de los límites de control (±3 sigma) es la señal más obvia de una causa especial, pero existen patrones adicionales que alertan sobre problemas incipientes antes de que ocurra una falla.

### Reglas de Western Electric (AT&T, 1956)

1. **Un punto** fuera de los límites ±3σ.
2. **Dos de tres puntos consecutivos** más allá de ±2σ (misma cara de la línea central).
3. **Cuatro de cinco puntos consecutivos** más allá de ±1σ (misma cara).
4. **Ocho puntos consecutivos** del mismo lado de la línea central (rachas).

### Reglas de Nelson (1984, ampliación de Western Electric)

| Regla | Patrón | Señal posible |
|---|---|---|
| 1 | 1 punto >3σ de la línea central | Causa especial puntual |
| 2 | 9 puntos consecutivos del mismo lado | Cambio en la media |
| 3 | 6 puntos consecutivos aumentando o disminuyendo | Tendencia o deriva |
| 4 | 14 puntos alternando arriba y abajo | Sobrecontrol o mezcla de distribuciones |
| 5 | 2 de 3 puntos >2σ (mismo lado) | Desplazamiento moderado |
| 6 | 4 de 5 puntos >1σ (mismo lado) | Desplazamiento incipiente |
| 7 | 15 puntos consecutivos dentro de ±1σ | Variación menor a la esperada (posible inflado de límites) |
| 8 | 8 puntos consecutivos >±1σ (ambos lados) | Mezcla de dos procesos |

> **Interpretación:** La regla 7 merece atención especial. Aunque parezca deseable tener todos los puntos cerca de la media, una variación excesivamente baja puede indicar que los límites de control se calcularon incorrectamente (con un periodo donde el proceso estaba fuera de control) o que los datos no son independientes.

## Diferencia entre Límites de Control y Límites de Especificación

Un error recurrente en laboratorios noveles es confundir estos dos conceptos:

| Característica | Límites de control | Límites de especificación |
|---|---|---|
| **Definición** | Límites estadísticos del proceso (3σ) | Requisitos del cliente o la norma |
| **Origen** | Datos del propio proceso | Regulatorio o contractual |
| **Actualización** | Periódica (cada 20–25 subgrupos) | Fija hasta que cambie la norma |
| **Propósito** | Detectar causas especiales | Evaluar conformidad del producto |
| **Ubicación** | Siempre dentro o fuera de especificación | Pueden ser más o menos restrictivos |

Un proceso puede estar **bajo control** (puntos dentro de límites de control) pero **fuera de especificación** (no cumple con el requisito). En tal caso, se requiere mejorar el proceso para reducir la variación o cambiar la media, no simplemente ajustar los límites de control.

## Materiales de Referencia como Estándares de Control

La selección del material de referencia es crítica para el éxito del SPC en el laboratorio:

- **Material de Referencia Certificado (CRM):** Ideal como estándar de control. Valor asignado por un organismo acreditado con incertidumbre conocida. Costoso, por lo que se usa principalmente en la validación inicial.
- **Material de Referencia (RM):** Valor asignado pero sin certificación. Adecuado para cartas de control rutinarias.
- **Estándar interno de laboratorio:** Preparado por el propio laboratorio a partir de reactivos de alta pureza. Debe caracterizarse contra un CRM antes de su uso en SPC.
- **Estándar de control comercial:** Soluciones listas para usar de proveedores especializados (p. ej., estándares de calibración para metales por ICP, pesticidas por GC, o pH/conductividad).

La frecuencia de análisis del estándar de control debe definirse en función del volumen de muestras y la criticidad del método. Una práctica común es analizar el control **al inicio y al final de cada lote**, y cada 10 muestras en lotes extensos (>30 muestras).

## Causas Especiales vs. Causas Comunes de Variación

| Causas comunes (inherentes al sistema) | Causas especiales (asignables) |
|---|---|
| Variación aleatoria del detector | Falla del detector (filamento, lámpara) |
| Pequeñas fluctuaciones de temperatura | Falla del sistema de climatización |
| Variación en el volumen de inyección (±0.1 µL) | Jeringa obstruida o con burbujas |
| Envejecimiento normal de la columna | Columna rota o contaminada |
| Variación del operador (técnica) | Error del analista (dilución incorrecta) |

Cuando una carta de control señala una causa especial, el laboratorio debe:

1. **Detener** el análisis de muestras (o retener los resultados).
2. **Identificar** la causa raíz mediante investigación técnica.
3. **Corregir** la desviación (reemplazar columna, recalibrar, cambiar estándar).
4. **Verificar** que el proceso ha vuelto a control con un nuevo análisis del estándar.
5. **Documentar** la acción en el registro de calidad.

## Implementación en Laboratorios ISO 17025

La implementación efectiva de SPC en un laboratorio acreditado requiere:

1. **Definición del proceso crítico:** Identificar los ensayos de mayor impacto en la calidad del resultado.
2. **Selección del tipo de carta:** X-barra y R para cuantificaciones rutinarias con réplicas; I-MR para ensayos sin réplicas; p o c para datos de atributos.
3. **Establecimiento de línea base:** Recolectar 20–25 subgrupos iniciales para calcular límites de control tentativos.
4. **Revisión y actualización:** Los límites deben recalcularse periódicamente (al menos cada 6 meses) o cuando se modifique significativamente el método.
5. **Software de SPC:** Herramientas como Minitab, JMP, R (paquete `qcc`) o módulos integrados en sistemas LIMS. La hoja de cálculo Excel es aceptable para laboratorios pequeños, pero requiere cuidado con los factores de corrección.
6. **Capacitación del personal:** Todos los analistas deben interpretar las cartas de control y conocer el procedimiento ante señales de fuera de control.

En Solinsa contamos con un portafolio completo de soluciones para la implementación de Control Estadístico de Procesos en su laboratorio. Ofrecemos equipos analíticos de alta precisión, software de gestión de calidad para SPC, materiales de referencia certificados y estándares de control para distintas matrices. Nuestro equipo de ingenieros de aplicación brinda capacitación especializada en la construcción e interpretación de cartas de control X-barra y R, I-MR y cartas para atributos, así como asesoría para la integración de SPC en sistemas de gestión bajo ISO 17025. También proveemos servicios de calibración, mantenimiento preventivo y validación de métodos para asegurar la trazabilidad y confiabilidad de sus resultados. Contáctenos en **www.solinsa.com** para solicitar una cotización o agendar una visita técnica en sus instalaciones.
