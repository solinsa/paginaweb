---
title: "Validación de Métodos de Limpieza por HPLC en la Industria Farmacéutica"
published: 2025-11-10
category: cat-validacion
tags: [validación, limpieza, HPLC, HPLC-UV, farmacéutica, FDA, swab, rinse, LOD, LOQ, PDE, MACO, BPF]
audience: [T1-Farmacéutica]
lang: es-MX
wordcount: ~1500
---

# Validación de Métodos de Limpieza por HPLC en la Industria Farmacéutica

## 1. Introducción

En la industria farmacéutica, la validación de limpieza no es un lujo ni un requisito burocrático: es una obligación regulatoria de primer orden y un pilar fundamental de las Buenas Prácticas de Fabricación (BPF o GMP, por sus siglas en inglés). Su objetivo es demostrar, con evidencia documentada, que el equipo de producción queda libre de residuos del producto anterior, agentes de limpieza y contaminantes microbianos por debajo de límites predeterminados, seguros y científicamente justificados.

La FDA, la EMA y la OMS exigen que los fabricantes cuenten con métodos analíticos validados capaces de detectar y cuantificar trazas de principio activo y detergentes en las superficies del equipo después de cada ciclo de limpieza. Entre estos métodos, la cromatografía líquida de alta eficiencia con detector UV-Vis (HPLC-UV) se ha posicionado como el estándar de referencia para moléculas no volátiles, térmicamente lábiles o poco solubles en agua, donde técnicas como TOC (carbono orgánico total) simplemente no son aplicables.

Este artículo explora a fondo qué implica validar un método de limpieza por HPLC, desde la definición de límites aceptables hasta los estudios de recuperación y la documentación requerida, ofreciendo una guía práctica para laboratorios farmacéuticos que buscan cumplir con los más altos estándares regulatorios.

---

## 2. Límites Aceptables: MACO, PDE y Criterios Visuales

El punto de partida de cualquier validación de limpieza es la definición de los límites aceptables de residuo. Sin un límite objetivo, el método analítico no tiene referencia contra la cual validarse.

### 2.1 MACO (Maximum Allowable Carryover)

El **MACO** es la cantidad máxima de principio activo que puede transferirse de un lote anterior al lote siguiente sin representar un riesgo para el paciente. Se calcula típicamente con la fórmula:

\[
MACO = \frac{NOEL \times Peso\;del\;lote\;siguiente}{Factor\;de\;seguridad \times Dosis\;diaria\;máxima\;del\;activo}
\]

En la práctica, la industria también recurre a criterios generales como el límite de **10 ppm** (10 mg de residuo por kg del lote siguiente) o el criterio de **1/1000** de la dosis mínima diaria del activo, adoptando siempre el más restrictivo.

### 2.2 PDE (Permitted Daily Exposure)

Basado en la guía ICH Q3C y Q3D, el **PDE** establece la exposición diaria permitida de un residuo que no causa efectos adversos, incluso con exposición durante toda la vida del paciente. Es el enfoque más robusto desde el punto de vista toxicológico y está siendo cada vez más exigido por las agencias regulatorias, particularmente en plantas que manejan compuestos de alta potencia (HPAPIs).

### 2.3 Límite visual

La FDA también exige que las superficies estén **visualmente limpias**. Aunque es un criterio subjetivo, se usa como complemento de los límites químicos. Un residuo debe ser indetectable visualmente en la superficie del equipo bajo condiciones definidas de iluminación y distancia de inspección, lo que típicamente corresponde a concentraciones de 1–4 µg/cm², dependiendo del compuesto y la superficie.

---

## 3. Métodos de Muestreo: Swab vs. Rinse

La selección del método de muestreo impacta directamente en la validez y representatividad de los resultados.

### 3.1 Swab (hisopo)

Consiste en frotar un área definida de la superficie del equipo (típicamente 10 cm × 10 cm = 100 cm²) con un hisopo impregnado en solvente de extracción. Las ventajas son:

- **Muestreo localizado y cuantitativo** — se sabe exactamente qué superficie se evaluó.
- **Recuperación física del residuo**, ideal para residuos no solubles o incrustados.
- **Capacidad de alcanzar zonas difíciles** como rincones, soldaduras y empaques.

La principal desventaja es la variabilidad introducida por el operador (presión, ángulo, técnica de frotado), por lo que el estudio de recuperación del swab es obligatorio.

### 3.2 Rinse (enjuague)

Se hace circular un volumen conocido de solvente a través del equipo y se analiza el líquido de enjuague. Sus ventajas son:

- **Cubre áreas grandes y complejas** (tuberías, tanques, columnas) inaccesibles con swab.
- **Menor variabilidad operativa**, pues no depende de la técnica de un operador.
- **Fácil de integrar** en ciclos de limpieza automáticos (CIP).

La limitación principal es que asume que el residuo se solubiliza completamente en el enjuague, lo cual no siempre es cierto, especialmente con residuos insolubles o incrustados.

En la práctica cotidiana, la mayoría de las validaciones combinan ambos métodos: swab para superficies accesibles y rinse para circuitos cerrados.

---

## 4. ¿Por qué HPLC-UV es Preferido sobre TOC?

**TOC (Carbono Orgánico Total)** es rápido, sensible y útil para residuos solubles en agua. Sin embargo, tiene limitaciones importantes:

- **No discrimina entre compuestos** — mide todo el carbono orgánico, sin distinguir principio activo de excipiente o detergente.
- **Requiere solubilidad acuosa** — no funciona con solventes orgánicos ni con residuos lipofílicos.
- **Falsa selectividad** — compuestos sin carbono orgánico (como peróxidos o sales inorgánicas) no se detectan.

**HPLC-UV**, en cambio, ofrece:

- **Especificidad** — separa y cuantifica cada analito de interés incluso en mezclas complejas.
- **Selectividad a longitud de onda** — se optimiza la absorbancia máxima del principio activo.
- **Versatilidad de fase móvil** — permite trabajar con solventes orgánicos (acetonitrilo, metanol, etc.).
- **Compatibilidad regulatoria** — la FDA y EMA reconocen HPLC como técnica de referencia en casi todas las guías de validación de limpieza.

Para productos no solubles en agua o con formulaciones complejas, HPLC-UV es la herramienta analítica de elección.

---

## 5. Parámetros de Validación del Método Analítico

Las guías FDA (Guidance for Industry: Validation of Cleaning Processes, 1993), EMA (Annex 15) y USP (Capítulo <1225>) definen los siguientes parámetros como mínimos obligatorios:

### 5.1 Especificidad (Selectividad)

El método debe demostrar que no hay interferencias del solvente de extracción, del material del hisopo, de los detergentes ni de la matriz de la superficie (acero inoxidable 316L, vidrio, Hastelloy, etc.). Se evalúa inyectando blancos de matriz y comparando los tiempos de retención y pureza espectral (DAD) con la señal del analito.

### 5.2 LOD y LOQ

**LOD (Límite de Detección)** — la concentración más baja que puede detectarse (S/N ≥ 3:1).
**LOQ (Límite de Cuantificación)** — la concentración más baja que puede cuantificarse con precisión y exactitud aceptables (S/N ≥ 10:1, RSD ≤ 20% y recuperación 80–120%).

Estos límites deben ser iguales o inferiores al límite de residuo calculado (MACO visual, 10 ppm, etc.). De lo contrario, el método no es adecuado para su propósito.

### 5.3 Linealidad

Se evalúa en el rango de 50% a 150% del límite objetivo (idealmente LOQ hasta 200%). Se requieren al menos 5 concentraciones con 3 réplicas cada una. El coeficiente de correlación (r²) debe ser ≥ 0.999 para métodos cromatográficos.

### 5.4 Precisión

- **Repetibilidad (repeatability):** Mínimo 6 determinaciones al 100% del límite objetivo; RSD ≤ 5% (idealmente ≤ 2%).
- **Precisión intermedia (intermediate precision):** Dos analistas, dos equipos, dos días diferentes; RSD combinado ≤ 10%.

### 5.5 Robustez (Ruggedness)

Variaciones deliberadas en parámetros críticos del método (flujo de fase móvil ± 0.1 mL/min, temperatura de columna ± 5 °C, pH de fase móvil ± 0.1, longitud de onda ± 2 nm) para demostrar que el método no se ve afectado por pequeñas desviaciones operativas.

---

## 6. Estudio de Recuperación del Swab

Este es probablemente el estudio más representativo de una validación de limpieza por HPLC.

### Procedimiento estándar

1. Se preparan placas o cupones de la misma superficie del equipo (acero inoxidable 316L, vidrio, PTFE, etc.).
2. Se inocula un volumen conocido de solución del principio activo a **tres niveles de concentración**: típicamente 50%, 100% y 150% del límite objetivo.
3. Se deja secar la superficie para simular las condiciones reales de producción.
4. Cada nivel se prueba con **3 réplicas independientes** (idealmente 6 por nivel).
5. Se realiza el muestreo con hisopo siguiendo el procedimiento escrito (SOP).
6. Se extrae el hisopo en un volumen conocido de solvente y se analiza por HPLC.
7. Se calcula el porcentaje de recuperación: \[ \%Rec = \frac{Concentración\;medida}{Concentración\;inoculada} \times 100 \]

### Criterios de aceptación típicos

- **Recuperación promedio ≥ 70%** (idealmente ≥ 85%).
- **RSD entre réplicas ≤ 15%** para cada nivel.
- **Recuperación consistente** en los tres niveles (sin tendencia decreciente significativa).

Si la recuperación es baja, se debe optimizar el solvente de extracción, la técnica de frotado o el número de pasadas del hisopo.

---

## 7. Estabilidad de la Muestra (Swab Extraction Stability)

Una vez extraído el hisopo en el solvente, la muestra debe permanecer estable durante el tiempo que transcurre entre la toma de muestra y el análisis cromatográfico. Se evalúa:

- Almacenando las muestras extraídas a temperatura ambiente, a 2–8 °C (refrigeración) y, si aplica, congeladas.
- Analizando a tiempo cero, 24 h, 48 h y 72 h.
- Calculando la desviación respecto al tiempo cero. Se acepta una variación ≤ 5–10%.

Este estudio es indispensable cuando las muestras se toman en un área de producción y se analizan en un laboratorio remoto horas o días después.

---

## 8. Documentación Requerida

La validación de limpieza no está completa sin el expediente documental correspondiente. Los documentos mínimos son:

| Documento | Contenido |
|---|---|
| **Protocolo de validación** | Objetivo, alcance, criterios de aceptación, métodos de muestreo, métodos analíticos, plan de muestreo (equipos, superficies, puntos críticos), cronograma y responsabilidades. |
| **Informe de validación** | Resultados de todos los estudios (recuperación, linealidad, LOD/LOQ, precisión, estabilidad), comparación contra criterios de aceptación, desviaciones (si las hay), conclusiones y firmas de aprobación. |
| **SOP de limpieza** | Procedimiento detallado de limpieza del equipo (pasos, solventes, temperatura, tiempo de contacto, velocidad de flujo). |
| **SOP de muestreo** | Técnica de swab (presión, dirección, número de pasadas), área de muestreo, solvente de extracción, almacenamiento y transporte de muestras. |
| **SOP del método analítico** | Condiciones cromatográficas (columna, fase móvil, flujo, temperatura, λ), preparación de estándares y muestras, secuencia de inyección, criterios de sistema suitability. |
| **Entrenamiento del personal** | Evidencia de que los operadores de limpieza y los analistas están capacitados en los SOP correspondientes. |

La tendencia regulatoria actual (FDA 2023, EudraLex Volume 4) exige además que la validación considere el concepto de **"worst case"** : el producto más potente, de menor solubilidad y mayor dificultad de limpieza como representante de toda una familia de productos.

---

## 9. Conclusión

La validación de métodos de limpieza por HPLC es una disciplina transversal que integra química analítica, ingeniería de procesos, toxicología y cumplimiento regulatorio. Un método mal validado —con límites mal definidos, recuperaciones pobres o documentación incompleta— puede traducirse en observaciones regulatorias (483, warning letters), retiros de producto o, peor aún, riesgos reales para la seguridad del paciente.

En Solinsa, entendemos que cada planta farmacéutica enfrenta retos únicos: equipos de geometrías complejas, productos de alta potencia, formulaciones multi-componente y exigencias regulatorias que cambian constantemente. Contamos con un equipo de especialistas en cromatografía y validación que puede acompañarlo en todo el proceso, desde el diseño del protocolo hasta la ejecución de los estudios de recuperación y la elaboración del informe final.

¿Está listo para llevar su validación de limpieza al siguiente nivel? **Contacte a Solinsa** y descubra cómo podemos ayudarle a implementar métodos analíticos robustos, defendibles ante cualquier autoridad sanitaria y, sobre todo, seguros para sus pacientes.

---

*Solinsa — Soluciones Integrales Analíticas y Regulatorias para la Industria Farmacéutica*
