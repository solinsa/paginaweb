---
title: "Validación de Métodos en Cromatografía Iónica: Parámetros y Procedimientos según FDA e ISO 17025"
published: 2026-03-14
category: cat-validacion
tags: [cromatografía iónica, validación, IC, ISO 17025, FDA]
audience: [T1-Validación]
lang: es-MX
wordcount: ~1500
---

## Fundamentos de la Cromatografía Iónica

La cromatografía iónica (IC, por sus siglas en inglés *Ion Chromatography*) es una técnica de separación ampliamente utilizada para la determinación cuantitativa de aniones y cationes en disolución. Su principio se basa en la separación de iones mediante intercambio iónico en una fase estacionaria cargada, seguida de detección por conductividad eléctrica, aunque también pueden emplearse detectores amperométricos, UV-Vis o de espectrometría de masas (IC-MS) para aplicaciones más exigentes.

Los analitos típicos incluyen aniones inorgánicos como fluoruro (F⁻), cloruro (Cl⁻), nitrito (NO₂⁻), bromuro (Br⁻), nitrato (NO₃⁻), fosfato (PO₄³⁻) y sulfato (SO₄²⁻), así como cationes como litio (Li⁺), sodio (Na⁺), amonio (NH₄⁺), potasio (K⁺), magnesio (Mg²⁺) y calcio (Ca²⁺). La capacidad de la IC para analizar múltiples iones en una sola corrida, con límites de detección en el orden de partes por mil millones (ppb), la convierte en una herramienta indispensable en laboratorios de control de calidad, ambientales, de alimentos y farmacéuticos.

> La cromatografía iónica es la técnica de referencia para el análisis de aniones y cationes en matrices acuosas, reconocida por agencias regulatorias como la EPA, la FDA y la ISO.

## Parámetros de Validación en Cromatografía Iónica

La validación de un método analítico es el proceso mediante el cual se demuestra, mediante estudios de laboratorio, que el método cumple con los requisitos para su aplicación prevista. De acuerdo con las guías de la FDA (*Food and Drug Administration*), la ISO/IEC 17025 y la ICH Q2(R1), los parámetros esenciales que deben evaluarse en un método de cromatografía iónica son:

### Linealidad

La linealidad se evalúa mediante curvas de calibración con 5 a 7 niveles de concentración, más un blanco. Para cada analito, se preparan soluciones estándar en un rango que cubra al menos del 10 % al 120 % de la concentración esperada en la muestra. Se inyecta cada nivel por duplicado o triplicado y se grafica el área del pico (o altura) contra la concentración.

El coeficiente de correlación (r) debe ser ≥ 0.999 y el coeficiente de determinación (R²) ≥ 0.998. Adicionalmente, se evalúa la desviación de los residuales; ningún punto debe desviarse más del 15 % del valor real (20 % en el límite inferior del rango).

### Precisión

La precisión se divide en dos componentes:

**Repetibilidad (precisión intra-día):** Se analizan al menos 6 réplicas independientes de una muestra a una concentración conocida, en las mismas condiciones de operación, el mismo día, por el mismo analista y el mismo equipo. Se reporta la desviación estándar relativa (RSD) de las concentraciones medidas. El criterio de aceptación típico es RSD ≤ 3 % para matrices sencillas y ≤ 5 % para matrices complejas.

**Precisión intermedia (precisión inter-día):** Se evalúa variando al menos un factor entre días diferentes, por ejemplo, analista, equipo o lote de reactivos. Se analizan las mismas muestras en dos o más días distintos y se calcula la RSD combinada. El criterio de aceptación es RSD ≤ 5 % para la mayoría de las aplicaciones.

### Exactitud (Recuperación)

La exactitud se determina mediante ensayos de recuperación. Se fortifica una matriz blanco (o una muestra de concentración conocida) con cantidades conocidas del analito a tres niveles de concentración (bajo, medio y alto), típicamente al 50 %, 100 % y 150 % del valor esperado. Cada nivel se analiza por triplicado.

El porcentaje de recuperación se calcula como:

**Recuperación (%) = (Concentración medida / Concentración añadida) × 100**

Los criterios de aceptación generales son:

| Nivel de concentración | Recuperación aceptable | RSD máxima |
|---|---|---|
| Trazas (< 10 ppb) | 80 – 120 % | 10 % |
| Bajos (10 – 100 ppb) | 85 – 115 % | 7 % |
| Medios (100 ppb – 10 ppm) | 90 – 110 % | 5 % |
| Altos (> 10 ppm) | 95 – 105 % | 3 % |

Para aplicaciones bajo ISO 17025, se recomienda que la recuperación se encuentre dentro del intervalo de 90 – 110 % para la mayoría de las matrices.

### Límite de Detección (LOD) y Límite de Cuantificación (LOQ)

El LOD es la concentración más baja del analito que puede detectarse, pero no necesariamente cuantificarse con exactitud y precisión. El LOQ es la concentración más baja que puede cuantificarse con exactitud y precisión aceptables.

Existen tres métodos comunes para determinarlos:

1. **Método basado en la relación señal/ruido (S/N):** Se inyecta un blanco y se mide el ruido de la línea base en una ventana de tiempo equivalente a 20 veces el ancho del pico a la altura media. El LOD se define como S/N ≥ 3 y el LOQ como S/N ≥ 10.

2. **Método basado en la desviación estándar de la respuesta y la pendiente:** Se construye una curva de calibración en el rango cercano al LOD estimado. El LOD se calcula como 3.3 × (σ / S) y el LOQ como 10 × (σ / S), donde σ es la desviación estándar de la ordenada al origen y S es la pendiente de la curva.

3. **Método basado en la desviación estándar del blanco:** Se analiza un blanco por réplicas (n ≥ 10) y se calcula la desviación estándar de las respuestas. LOD = 3 × σ_blanco y LOQ = 10 × σ_blanco.

### Robustez

La robustez evalúa la capacidad del método para permanecer inalterado frente a pequeñas variaciones deliberadas en los parámetros del método. En cromatografía iónica, los factores típicos a evaluar incluyen:

- **Caudal de la fase móvil:** ± 0.1 mL/min respecto al valor nominal.
- **Temperatura de la columna:** ± 2 °C.
- **Concentración del eluyente:** ± 1 mM.
- **Volumen de inyección:** ± 5 µL.
- **pH del eluyente:** ± 0.1 unidades.

Se aplica un diseño experimental de Plackett-Burman o factorial fraccionado para identificar los factores críticos. Un método es robusto si la variación en la respuesta (área o tiempo de retención) es inferior al 2 % para todos los factores evaluados.

### Incertidumbre de la Medición

De acuerdo con la ISO/IEC 17025, los laboratorios deben estimar la incertidumbre de la medición para cada método validado. Las fuentes de incertidumbre en IC incluyen:

- Pureza y pesada de los estándares.
- Volumen de las soluciones estándar y de las muestras.
- Precisión de las inyecciones (repetibilidad del autoinyector).
- Linealidad de la curva de calibración.
- Efectos de la matriz.
- Deriva del detector.

Se recomienda utilizar el enfoque *bottom-up* (GUM) o el enfoque *top-down* basado en datos de validación y cartas de control. La incertidumbre expandida se reporta con un factor de cobertura k = 2 (95 % de confianza).

## Matrices Típicas y Desafíos Analíticos

La cromatografía iónica se aplica a una amplia variedad de matrices, cada una con sus propios desafíos:

| Matriz | Analitos comunes | Desafíos principales |
|---|---|---|
| Agua potable | F⁻, Cl⁻, NO₃⁻, SO₄²⁻, Na⁺, Ca²⁺, Mg²⁺ | Baja concentración, interferencia de la materia orgánica |
| Aguas residuales | Cl⁻, NO₂⁻, NO₃⁻, PO₄³⁻, SO₄²⁻, NH₄⁺ | Matriz compleja, altos sólidos disueltos |
| Soluciones electrolíticas | Li⁺, Na⁺, K⁺, Cl⁻, SO₄²⁻ | Altas concentraciones (dilución requerida), efecto de la fuerza iónica |
| Alimentos (bebidas, lácteos, conservas) | NO₃⁻, NO₂⁻, PO₄³⁻, Cl⁻, Na⁺, K⁺ | Pretratamiento de la muestra (digestión, filtración, dilución), interferencia de lípidos y proteínas |
| Productos farmacéuticos | Contraiones de principios activos | Compatibilidad con disolventes orgánicos, sensibilidad |

## Normas Aplicables

### EPA 300.0 y EPA 300.1

El método **EPA 300.0** es el estándar de referencia en Estados Unidos para la determinación de aniones inorgánicos en aguas por cromatografía iónica, utilizando supresión química y detección por conductividad. Cubre siete aniones: F⁻, Cl⁻, NO₂⁻, Br⁻, NO₃⁻, PO₄³⁻ y SO₄²⁻.

La **EPA 300.1** es una actualización que amplía el alcance a un mayor número de aniones y mejora los límites de detección, incorporando columnas de mayor capacidad y optimizando las condiciones cromatográficas.

### ISO 10304-1

La norma **ISO 10304-1** especifica un método para la determinación de aniones disueltos (F⁻, Cl⁻, NO₂⁻, Br⁻, NO₃⁻, PO₄³⁻ y SO₄²⁻) en agua mediante cromatografía iónica líquida. Es ampliamente utilizada en laboratorios europeos y en países que adoptan estándares ISO.

### Otras Normas Relevantes

- **ISO 14911:** Determinación de cationes (Li⁺, Na⁺, NH₄⁺, K⁺, Ca²⁺, Mg²⁺) en agua por IC.
- **USP <345>:** Método para la determinación de aniones en agua purificada y agua para inyección en la industria farmacéutica.
- **AOAC 2012.15:** Método para la determinación de nitrato y nitrito en productos cárnicos y vegetales por IC.

## Ejemplo de Protocolo de Validación para Aniones en Agua Potable

A continuación se presenta un ejemplo de protocolo de validación para la determinación de Cl⁻, NO₃⁻ y SO₄²⁻ en agua potable por IC con detección por conductividad suprimida.

**Condiciones instrumentales:**
- Columna: IonPac AS22 (4 × 250 mm) o equivalente.
- Eluyente: 4.5 mM Na₂CO₃ / 1.4 mM NaHCO₃.
- Caudal: 1.2 mL/min.
- Volumen de inyección: 25 µL.
- Detector: Conductividad supresa por supresor auto-regenerante.
- Tiempo de corrida: 12 min.

**Parámetros evaluados y criterios de aceptación:**

| Parámetro | Método de evaluación | Criterio de aceptación |
|---|---|---|
| Linealidad | 6 niveles (0.5, 1.0, 2.0, 5.0, 10.0, 20.0 mg/L), 3 réplicas | r ≥ 0.999, residuales ≤ 15 % |
| Repetibilidad | 6 réplicas a 5.0 mg/L, mismo día | RSD ≤ 3 % |
| Precisión intermedia | 6 réplicas/día × 2 días, analistas diferentes | RSD ≤ 5 % |
| Exactitud (recuperación) | Fortificación a 2.5, 5.0 y 10.0 mg/L | 90 – 110 % |
| LOD | S/N ≥ 3 con inyección de estándar a baja concentración | Reportar valor |
| LOQ | S/N ≥ 10, verificar exactitud y precisión | Reportar valor, RSD ≤ 5 % |
| Robustez | Variación de caudal (±0.1 mL/min) y temperatura (±2 °C) | Variación en área ≤ 2 % |

**Resultados típicos esperados (valores de referencia):**

| Analito | Linealidad (R²) | Repetibilidad (%RSD) | Recuperación (%) | LOD (mg/L) | LOQ (mg/L) |
|---|---|---|---|---|---|
| Cl⁻ | 0.9996 | 0.8 | 99.2 | 0.01 | 0.03 |
| NO₃⁻ | 0.9994 | 1.2 | 101.5 | 0.02 | 0.05 |
| SO₄²⁻ | 0.9998 | 0.6 | 100.3 | 0.01 | 0.04 |

> La implementación de un protocolo de validación riguroso no solo asegura la calidad de los resultados analíticos, sino que es un requisito indispensable para la acreditación ISO 17025 y para auditorías regulatorias.

## Consideraciones Prácticas para la Validación

**Estándares y reactivos:** Utilizar estándares certificados (CRM) o trazables a materiales de referencia nacionales o internacionales. La pureza de los reactivos debe ser ≥ 99.5 % y el agua debe ser Tipo I (18.2 MΩ·cm).

**Pretratamiento de la muestra:** Para matrices con alto contenido de materia orgánica, se recomienda el uso de cartuchos de limpieza (RP, C18) o la filtración a través de membranas de 0.22 o 0.45 µm. En muestras con altas concentraciones de metales pesados, se pueden emplear columnas de intercambio catiónico en línea.

**Verificación de la columna:** Documentar el número de inyecciones, la presión del sistema y la eficiencia de la columna (platos teóricos y factor de asimetría). Se recomienda reemplazar la columna cuando la eficiencia disminuya más del 20 % respecto al valor inicial.

**Control de calidad en rutina:** Incluir un blanco, un estándar de verificación (a una concentración independiente de la curva) y una muestra fortificada al inicio y al final de cada lote de muestras. El estándar de verificación debe tener una recuperación entre 90 – 110 %.

**Documentación:** La validación debe documentarse en un informe escrito que incluya: objetivo del método, descripción del método, parámetros evaluados, resultados, criterios de aceptación, conclusiones y referencias. El informe debe ser revisado y aprobado por la gerencia técnica del laboratorio.

---

En Solinsa contamos con equipos de cromatografía iónica de última generación, columnas, estándares certificados y asesoría especializada para la validación de métodos analíticos conforme a FDA, ISO 17025 y normativas EPA. Nuestro equipo técnico le acompaña en cada etapa del proceso, desde la selección del equipo hasta la implementación y validación completa del método. Contáctenos en **www.solinsa.com** para recibir una consultoría personalizada.
