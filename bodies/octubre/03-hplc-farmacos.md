---
title: "Validación de Métodos por HPLC según FEUM para la Industria Farmacéutica"
published: 2025-10-07
category: cat-ind-farma
tags: [HPLC, validación, FEUM, farmacéutica, ICH Q2, precisión, exactitud, robustez]
audience: [T1-Farmacéutica]
lang: es-MX
wordcount: ~1500
---

## Introducción

En la industria farmacéutica mexicana, la **Farmacopea de los Estados Unidos Mexicanos (FEUM)** es el documento normativo que establece los métodos oficiales para el análisis de medicamentos. Cualquier laboratorio farmacéutico —ya sea de manufactura, control de calidad o investigación— que utilice **cromatografía de líquidos de alta eficiencia (HPLC)** debe validar sus métodos analíticos conforme a los lineamientos de la FEUM, los cuales a su vez están alineados con la guía internacional **ICH Q2(R1) Validation of Analytical Procedures**.

La validación no es un ejercicio académico ni un requisito burocrático más. Es la evidencia documentada de que un método analítico produce resultados confiables y reproducibles dentro de un rango específico de aplicación. Sin una validación adecuada, cualquier resultado reportado —desde la potencia de un principio activo hasta el contenido de impurezas— carece de defensa técnica y regulatoria.

> "Un método no validado no es un método; es un experimento. La FEUM exige que cada método analítico esté validado antes de ser utilizado para liberación de lotes o estudios de estabilidad."

En este artículo presentamos una guía práctica para la validación de métodos por HPLC conforme a la FEUM y la ICH Q2(R1), con énfasis en los parámetros de sistema suitability, precisión, exactitud, robustez, LOD y LOQ, y los criterios de aceptación aplicables en laboratorios farmacéuticos mexicanos.

## Marco Regulatorio: FEUM e ICH Q2(R1)

La FEUM, en su edición vigente (FEUM 2025, 13.ª edición), dedica el capítulo **MGA 0061. Validación de Métodos Analíticos** a los lineamientos generales. Este capítulo está armonizado con la guía **ICH Q2(R1)** , aunque con algunas particularidades para el contexto mexicano.

| Parámetro de validación | FEUM MGA 0061 | ICH Q2(R1) | Aplicación en HPLC |
|------------------------|---------------|------------|---------------------|
| Especificidad/Selectividad | Exigido | Exigido | Separación del analito de excipientes, impurezas y productos de degradación |
| Linealidad | Exigido | Exigido | Curva de calibración con mínimo 5 niveles |
| Exactitud | Exigido | Exigido | Estudios de recuperación (fortificación) |
| Precisión | Exigido | Exigido | Repetibilidad (mín. 6 réplicas) y precisión intermedia |
| Límite de detección (LOD) | Exigido (impurezas) | Exigido | Señal/ruido ≥ 3:1 o método estadístico |
| Límite de cuantificación (LOQ) | Exigido (impurezas) | Exigido | S/N ≥ 10:1 o 10 σ/pendiente |
| Robustez | Recomendado | Exigido | Variaciones deliberadas de pH, flujo, temperatura de columna, composición de fase móvil |
| Sistema suitability | Exigido (diario) | No especificado | Placas teóricas, resolución, factor de cola, RSD de áreas |

> **Nota importante:** La FEUM exige que el sistema suitability se verifique **cada vez que se corre el método**, no solo durante la validación. Esto incluye la verificación de placas teóricas (N ≥ 2000), resolución entre picos adyacentes (Rs ≥ 1.5-2.0), factor de cola (T ≤ 2.0) y RSD de inyecciones repetidas (≤ 2.0 % para principio activo, ≤ 5.0 % para impurezas).

## Sistema Suitability: El Primer Filtro

Ningún método por HPLC debe ejecutarse sin antes verificar el sistema suitability. Este conjunto de pruebas asegura que el sistema cromatográfico está funcionando correctamente antes de procesar muestras reales.

**Parámetros y criterios FEUM:**

| Parámetro | Criterio de aceptación FEUM | Cómo se calcula |
|-----------|-----------------------------|-----------------|
| Placas teóricas (N) | ≥ 2000 por metro de columna | N = 5.54 × (tR / W½)² |
| Resolución (Rs) | ≥ 1.5 entre picos adyacentes (≥ 2.0 para impurezas) | Rs = 1.18 × (tR₂ - tR₁) / (W½₁ + W½₂) |
| Factor de cola (T) | ≤ 2.0 | T = W₀.₀₅ / (2 × W₀.₅) |
| RSD de áreas (n ≥ 5 réplicas) | ≤ 2.0 % (principio activo), ≤ 5.0 % (impurezas) | Desviación estándar relativa |
| RSD de tiempos de retención (n ≥ 5) | ≤ 1.0 % | Desviación estándar relativa |

**Protocolo de sistema suitability:**

1. Preparar una solución de referencia del principio activo a la concentración de trabajo (100 %).
2. Inyectar 5 réplicas de la solución de referencia.
3. Calcular N, Rs, T y RSD para cada inyección.
4. Si todos los parámetros cumplen los criterios, el sistema es apto para procesar la secuencia de muestras.
5. Si algún parámetro no cumple, investigar la causa: columna deteriorada, fuga en el sistema, burbujas en la fase móvil, detector saturado.

> **Regla práctica:** El sistema suitability debe re-evaluarse al menos cada 10 muestras o si hay un cambio de lote de fase móvil, columna o estándares.

## Precisión: Repetibilidad y Precisión Intermedia

La precisión expresa el grado de concordancia entre mediciones independientes bajo condiciones definidas. La FEUM distingue tres niveles:

**1. Repetibilidad (intra-día, mismo analista, mismo equipo, mismo día):**
- Se preparan 6 determinaciones independientes (6 pesadas/volumetrías) a concentración 100 % del nivel de trabajo.
- Criterio FEUM: RSD ≤ 2.0 % para principio activo; RSD ≤ 5.0 % para impurezas ≥ 0.1 %.

**2. Precisión intermedia (intra-laboratorio, diferentes días, analistas o equipos):**
- Mínimo 6 determinaciones en 2 días diferentes (idealmente 2 analistas × 3 réplicas × 2 días).
- Criterio FEUM: RSD global ≤ 3.0 % para principio activo; ≤ 10.0 % para impurezas.

**3. Reproducibilidad (inter-laboratorio):**
- Se evalúa cuando el método se transferirá a otro laboratorio (p. ej., de I+D a control de calidad, o de un laboratorio maquilador a otro).
- Se analiza la misma muestra en 2-3 laboratorios independientes.
- Criterio: Diferencia entre resultados de distintos laboratorios ≤ 3.0 % para principio activo.

| Nivel de precisión | Réplicas | RSD esperado (principio activo) | RSD esperado (impurezas) |
|-------------------|----------|---------------------------------|---------------------------|
| Repetibilidad | 6 | ≤ 2.0 % | ≤ 5.0 % |
| Precisión intermedia | 12 (2×6) | ≤ 3.0 % | ≤ 10.0 % |
| Reproducibilidad | 18 (3×6) | ≤ 3.0 % | ≤ 10.0 % |

## Exactitud: Estudios de Recuperación

La exactitud demuestra que el método mide el valor verdadero del analito en la muestra. Se evalúa mediante **estudios de recuperación** a tres niveles de concentración dentro del rango del método.

**Protocolo FEUM:**

1. Preparar placebos (matriz sin principio activo) que contengan todos los excipientes de la formulación.
2. Fortificar el placebo con el principio activo a 3 niveles: 80 %, 100 % y 120 % de la concentración de trabajo.
3. Preparar 3 réplicas independientes por cada nivel (total: 9 determinaciones).
4. Calcular el porcentaje de recuperación para cada réplica.

**Criterio de aceptación FEUM:**
- Recuperación media en cada nivel: 98.0 % - 102.0 % para principio activo (95.0 % - 105.0 % para impurezas).
- RSD entre réplicas de cada nivel: ≤ 2.0 %.

**Para formas farmacéuticas complejas** (comprimidos de liberación modificada, cápsulas de gelatina blanda, suspensiones), se recomienda ampliar el rango de fortificación a 50 % - 150 % y evaluar la linealidad de la recuperación mediante regresión lineal (% recuperado vs. % fortificado, pendiente esperada: 1.00 ± 0.02).

## Linealidad y Rango

La linealidad evalúa la capacidad del método para producir resultados proporcionales a la concentración del analito dentro de un rango establecido.

**Requerimientos FEUM:**
- Mínimo 5 niveles de concentración (típicamente 50 %, 75 %, 100 %, 125 % y 150 %).
- 3 réplicas por nivel.
- Análisis por regresión lineal (mínimos cuadrados ordinarios).

**Criterios de aceptación:**
- Coeficiente de correlación (r): ≥ 0.999.
- Coeficiente de determinación (r²): ≥ 0.998.
- Intersección con el eje y (% del valor nominal): ≤ ±2.0 %.
- Residuales aleatorios (prueba visual de homocedasticidad).

> **Advertencia:** Un r² ≥ 0.999 no garantiza linealidad. Es obligatorio inspeccionar visualmente la gráfica de residuales para detectar patrones curvilíneos. La prueba de linealidad pura (lack-of-fit test) es recomendable para métodos que se utilizarán en límites de especificación estrechos (98-102 %).

## LOD y LOQ: Determinación para Impurezas

Para métodos de cuantificación de impurezas, la FEUM exige la determinación del límite de detección (LOD) y el límite de cuantificación (LOQ).

**Método basado en señal/ruido:**
- LOD: Concentración que produce una señal ≥ 3 veces la línea base (S/N ≥ 3:1).
- LOQ: Concentración que produce S/N ≥ 10:1, con precisión ≤ 5.0 % RSD y exactitud 95-105 %.

**Método basado en la curva de calibración (ICH Q2):**
- LOD = 3.3 × (Syₓ / pendiente)
- LOQ = 10 × (Syₓ / pendiente)
- Donde Syₓ es la desviación estándar del residual de la línea de regresión.

**Para impurezas genotóxicas** (ICH M7), el LOQ debe ser ≤ 0.5 µg/g (o ≤ límite de exposición aceptable, calculado como dosis máxima diaria / peso corporal × 10⁻⁵). En estos casos, la FEUM recomienda confirmar el LOQ con 5 fortificaciones independientes a ese nivel.

## Robustez: El Método Frente a Variaciones Deliberadas

La robustez evalúa la capacidad del método para permanecer inalterado ante pequeñas variaciones deliberadas de los parámetros operativos. Este parámetro es fundamental para garantizar que el método sea transferible entre instrumentos, columnas y analistas.

**Variaciones recomendadas en HPLC:**

| Parámetro | Variación típica | Efecto esperado |
|-----------|------------------|-----------------|
| Flujo de fase móvil | ±0.1 mL/min | Cambio en tR, no en área (el detector de UV mide concentración másica) |
| pH de la fase móvil | ±0.1 unidades | Puede afectar la retención de compuestos ionizables |
| Composición de fase móvil (% orgánico) | ±1-2 % | Cambio significativo en k', puede afectar resolución |
| Temperatura de columna | ±2-5 °C |Cambio en tR (aprox. 2 %/°C para compuestos de peso molecular medio) |
| Lote de columna | Misma fase estacionaria, lote diferente | Variación típica en tR < 5 % |

**Criterio de aceptación FEUM:** La desviación en el contenido determinado respecto a las condiciones nominales debe ser ≤ 2.0 % para principio activo y ≤ 5.0 % para impurezas.

**Acción si la robustez falla:** Identificar el parámetro crítico y establecer controles más estrictos (p. ej., si el pH es crítico, la tolerancia durante la preparación de la fase móvil debe reducirse de ±0.1 a ±0.05 unidades).

## Documentación de la Validación

La FEUM exige que toda validación quede documentada en un **protocolo de validación** y un **informe de validación** que incluya:

1. **Protocolo:** Objetivo, alcance, responsabilidades, parámetros a evaluar, criterios de aceptación, método analítico detallado, plan de muestreo, cronograma.
2. **Datos crudos:** Cromatogramas, tablas de áreas, cálculos, gráficas de calibración, residuales.
3. **Informe de validación:** Resumen de resultados, cumplimiento o no cumplimiento de cada criterio, conclusiones, firmas de aprobación.
4. **Sistema suitability de cada corrida:** Evidencia de que el sistema funcionó correctamente durante toda la validación.

## Conclusión

La validación de métodos por HPLC según la FEUM y la ICH Q2(R1) es un requisito ineludible para cualquier laboratorio farmacéutico que busque cumplir con las Buenas Prácticas de Fabricación (BPF/COFEPRIS) y garantizar la calidad de sus productos. Invertir en una validación sólida reduce riesgos regulatorios, minimiza investigaciones de resultados fuera de especificación (OOS) y facilita la transferencia de métodos entre sitios de manufactura.

En **Solinsa** contamos con una amplia gama de sistemas HPLC —desde equipos isocráticos para control de calidad rutinario hasta sistemas UHPLC con detectores de arreglo de diodos (DAD), fluorescencia y espectrometría de masas— así como columnas, estándares de referencia y consumibles certificados. Además, ofrecemos asesoría técnica en la elaboración de protocolos de validación alineados con la FEUM. Contáctenos para una demostración o para recibir una cotización de su próximo sistema HPLC.
