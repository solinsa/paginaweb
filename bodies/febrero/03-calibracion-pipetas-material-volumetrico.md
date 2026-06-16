---
title: "Calibración de Pipetas Automáticas y Material Volumétrico según ISO 8655"
published: 2026-02-08
category: cat-serv-calib
tags: [calibración, pipetas, ISO 8655, material volumétrico, trazabilidad, metrología]
audience: [T1-General, T1-Farmacéutica]
lang: es-MX
---

## La Importancia de la Trazabilidad Volumétrica

En el laboratorio analítico moderno, las pipetas automáticas son herramientas cotidianas que rara vez reciben la atención que merecen. Sin embargo, un error de 0.5 µL en una pipeta de 10 µL puede traducirse en una desviación del 5% en el resultado final de un ensayo —suficiente para invalidar un lote de producción o comprometer un estudio de estabilidad. La norma ISO 8655 establece los requisitos metrológicos y los procedimientos de calibración para pipetas de pistón, asegurando que las mediciones volumétricas sean trazables a patrones nacionales e internacionales.

> *"Calibrar una pipeta no es un gasto: es una inversión en la integridad de sus datos analíticos."*

---

### ISO 8655: El Estándar Internacional

La familia ISO 8655 se compone de varias partes que cubren todos los aspectos de las pipetas de pistón:

| Parte | Título | Alcance |
|---|---|---|
| **ISO 8655-1** | Términos, definiciones y requisitos generales | Vocabulario común y clasificación de pipetas |
| **ISO 8655-2** | Pipetas volumétricas | Requisitos para pipetas de volumen fijo y variable |
| **ISO 8655-3** | Pipetas multicanal | Pipetas de 8, 12 o 16 canales |
| **ISO 8655-4** | Dispensadores | Dispensadores de repetición y buretas digitales |
| **ISO 8655-5** | Métodos de prueba gravimétricos | Procedimiento detallado de calibración |
| **ISO 8655-6** | Métodos de prueba colorimétricos | Método alternativo para verificación |
| **ISO 8655-7** | Requisitos para equipos de prueba | Balanzas, termohigrómetros, trampas de evaporación |

---

### Requisitos Metrológicos: Exactitud y Precisión

La ISO 8655 define dos parámetros fundamentales para evaluar el desempeño de una pipeta:

- **Exactitud (E, error sistemático):** la diferencia entre el volumen dispensado promedio y el volumen nominal. Se expresa como porcentaje del volumen nominal (%E) o en unidades de volumen absoluto (µL).
- **Precisión (CV, coeficiente de variación, error aleatorio):** la dispersión de las mediciones individuales alrededor del promedio. Se expresa como desviación estándar relativa (%CV).

Ambos parámetros deben cumplir simultáneamente los límites establecidos en la norma para que la pipeta sea considerada conforme.

#### Factores que Afectan la Calibración

La calibración gravimétrica es sensible a múltiples variables ambientales y de procedimiento:

- **Temperatura del agua y del ambiente:** afecta la densidad del agua y la expansión térmica del pistón y el cilindro.
- **Humedad relativa:** la evaporación del agua durante el pipeteo introduce errores sistemáticos significativos.
- **Presión atmosférica:** altera el volumen de aire desplazado en pipetas de desplazamiento de aire.
- **Tipo de punta:** puntas de baja retención, filtradas o con tratamiento hidrofóbico alteran el volumen dispensado.
- **Velocidad de aspiración y expulsión:** pipeteos demasiado rápidos generan turbulencias que afectan la exactitud.
- **Ángulo de pipeteo:** debe mantenerse vertical (10-20° de inclinación máxima).
- **Prehumectación de la punta:** en pipetas de volumen variable, prehumectar 3-5 veces estabiliza la cámara de aire.

---

### Frecuencia Recomendada de Calibración

| Tipo de uso | Frecuencia recomendada |
|---|---|
| Uso intensivo (análisis rutinario, >1000 ciclos/semana) | Cada 3 meses |
| Uso moderado (laboratorio de I+D, 100–1000 ciclos/semana) | Cada 6 meses |
| Uso ligero (laboratorio académico, controles esporádicos) | Cada 12 meses |
| Después de mantenimiento correctivo o impacto | Inmediatamente |
| Pipetas multicanal | Cada 3 meses independientemente del uso |

Es importante llevar un **registro histórico** de calibraciones para identificar tendencias de desgaste antes de que la pipeta supere los límites de error.

---

### Procedimiento Paso a Paso

La calibración según ISO 8655-5 sigue un protocolo riguroso:

#### 1. Acondicionamiento
- Colocar la pipeta, las puntas y el agua destilada desionizada en el laboratorio de calibración **al menos 2 horas antes** para equilibrar la temperatura.
- Registrar la temperatura del agua y del ambiente con un termómetro calibrado (resolución 0.1 °C).
- Registrar la presión barométrica y la humedad relativa.

#### 2. Selección de volúmenes de prueba
Para una pipeta de volumen variable, se prueban tres puntos:
- **10% del volumen nominal** (mínimo)
- **50% del volumen nominal** (intermedio)
- **100% del volumen nominal** (máximo)

Cada punto se mide por **triplicado** (diez réplicas para métodos estadísticos más robustos, según el nivel de aseguramiento requerido).

#### 3. Pesada
- Usar una balanza analítica con resolución de 0.01 mg o 0.001 mg (según el volumen).
- La balanza debe estar calibrada y con certificado de trazabilidad vigente.
- Colocar un vial tapado sobre el plato de la balanza para minimizar la evaporación.
- Pipetear directamente dentro del vial, registrar el peso, tapar y repetir.
- Se recomienda usar una **trampa de evaporación** (contenedor con agua saturada de vapor) alrededor del vial.

#### 4. Corrección por densidad del agua
El volumen real se calcula como:

\[
V = \frac{m}{Z}
\]

Donde:
- **V** = volumen real (µL)
- **m** = masa de agua medida (mg)
- **Z** = factor de corrección adimensional, que depende de la temperatura y la presión

El factor **Z** se obtiene de tablas incluidas en la ISO 8655-5 o de calculadoras metrológicas certificadas. A 20 °C y 101.325 kPa, Z ≈ 1.0030 mg/µL.

#### 5. Cálculo de error sistemático y aleatorio

**Error sistemático (E):**
\[
E(\%) = \frac{\bar{V} - V_{nom}}{V_{nom}} \times 100
\]

**Error aleatorio (CV):**
\[
CV(\%) = \frac{s}{\bar{V}} \times 100
\]

Donde **s** es la desviación estándar de las réplicas y **V̅** el volumen promedio.

---

### Criterios de Aceptación

La ISO 8655-2 establece los límites máximos de error según la clasificación de la pipeta:

| Volumen nominal | Clase A (exactitud ±%) | Clase A (CV%) | Clase D (exactitud ±%) | Clase D (CV%) |
|---|---|---|---|---|
| 0.1 µL | ±5.0 | ≤4.0 | ±8.0 | ≤6.0 |
| 0.5 µL | ±3.0 | ≤2.5 | ±5.0 | ≤4.0 |
| 1 µL | ±2.5 | ≤2.0 | ±4.0 | ≤3.0 |
| 5 µL | ±2.0 | ≤1.5 | ±3.0 | ≤2.5 |
| 10 µL | ±1.5 | ≤1.0 | ±2.5 | ≤2.0 |
| 20 µL | ±1.2 | ≤0.8 | ±2.0 | ≤1.5 |
| 100 µL | ±0.8 | ≤0.4 | ±1.5 | ≤0.8 |
| 200 µL | ±0.6 | ≤0.3 | ±1.2 | ≤0.6 |
| 1000 µL (1 mL) | ±0.5 | ≤0.2 | ±1.0 | ≤0.5 |
| 5000 µL (5 mL) | ±0.5 | ≤0.2 | ±1.0 | ≤0.5 |
| 10000 µL (10 mL) | ±0.5 | ≤0.2 | ±1.0 | ≤0.5 |

> **Nota:** Los límites de la tabla son valores representativos. Consulte la edición vigente de la ISO 8655-2 para los valores exactos según el modelo de pipeta.

---

### Trazabilidad a Patrones Nacionales

Para que una calibración sea válida bajo un sistema de calidad (ISO/IEC 17025, BPL, GMP), debe ser **trazable a patrones nacionales o internacionales**. Esto implica:

1. **La balanza** utilizada debe estar calibrada con patrones trazables al SI (Sistema Internacional) a través del CENAM (Centro Nacional de Metrología) o instituto metrológico equivalente.
2. **El termómetro y el barómetro** deben tener certificados de calibración vigentes.
3. **El factor de corrección Z** debe provenir de una fuente autorizada (ISO 8655-5, tabla oficial del CENAM o del PTB alemán).
4. **El personal** que realiza la calibración debe estar capacitado y demostrar competencia (ensayos interlaboratorio, pruebas de desempeño).

---

### Registros y Certificados

Cada calibración debe generar un **registro completo** que incluya:

- Identificación única del equipo (marca, modelo, número de serie).
- Fecha de calibración y fecha de próxima calibración.
- Condiciones ambientales (temperatura, humedad, presión).
- Volúmenes de prueba y número de réplicas.
- Resultados: masa medida, volumen calculado, error sistemático y CV.
- Criterio de aceptación aplicado y resultado (conforme / no conforme).
- Nombre y firma del técnico calibrador.
- Trazabilidad de los patrones utilizados.

El **certificado de calibración** debe emitirse en formato impreso o digital con firma autorizada. En caso de no conformidad, se debe emitir un informe de fuera de tolerancia con las acciones correctivas recomendadas (recalibración, mantenimiento, reemplazo).

---

### Caso Práctico: Calibración de una Pipeta de 100 µL

Supongamos una pipeta de volumen variable ajustada a 100 µL, Clase A. Tras 10 réplicas:

- Promedio de masa pesada: 99.45 mg
- Temperatura del agua: 22.0 °C → Z = 1.0032
- Volumen corregido: 99.45 / 1.0032 = 99.13 µL
- Error sistemático: (99.13 - 100) / 100 × 100 = **–0.87%**
- Límite Clase A: ±0.8% → **No conforme** (la pipeta está dispensando menos volumen del nominal)
- Desviación estándar de las réplicas: 0.18 µL → CV = 0.18 / 99.13 × 100 = **0.18%**
- Límite Clase A CV: ≤0.4% → **Conforme**

**Acción:** La pipeta requiere recalibración por parte del fabricante o servicio técnico especializado para corregir el error sistemático antes de volver a usarse.

---

En Solinsa contamos con laboratorio de calibración especializado en material volumétrico, con balanzas trazables al CENAM, personal certificado y procedimientos apegados a la ISO 8655. Ofrecemos calibración de pipetas de un canal, multicanal y dispensadores de todos los fabricantes, con emisión de certificados con trazabilidad completa. Además, asesoramos a su laboratorio en la implementación de programas de calibración periódica, selección de patrones y gestión de no conformidades. Contáctenos para cotizar el servicio de calibración de su parque de pipetas.
