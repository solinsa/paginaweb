---
title: "Análisis de Dioxinas y Furanos por GC-HRMS: Retos y Métodos"
date: "Agosto 2026"
author: "Solinsa — Laboratorio Analítico"
tags: [dioxinas, furanos, GC-HRMS, EPA 1613, TEQ, análisis ambiental]
---

# Análisis de Dioxinas y Furanos por GC-HRMS: Retos y Métodos

## Introducción

Las dioxinas (policlorodibenzo-p-dioxinas, PCDD) y los furanos (policlorodibenzofuranos, PCDF) son contaminantes orgánicos persistentes (COP) que figuran entre las sustancias más tóxicas conocidas por el ser humano. Se generan como subproductos no deseados en procesos de combustión —incineración de residuos, producción de cemento, metalurgia, quema de biomasa— así como en la síntesis de ciertos plaguicidas y en la industria papelera con cloro.

Su relevancia toxicológica radica en su extraordinaria estabilidad química, su capacidad de bioacumulación en cadenas tróficas y su potente acción como disruptores endocrinos, carcinógenos y teratógenos. La exposición crónica, incluso a niveles de partes por billón (ppt), representa un riesgo sanitario significativo.

Analizar estas moléculas a concentraciones traza exige instrumentación de la más alta gama: **cromatografía de gases acoplada a espectrometría de masas de alta resolución (GC-HRMS)** con resolución >10,000, combinada con protocolos rigurosos de muestreo, extracción y clean-up. En este artículo recorremos cada etapa del proceso, los métodos normalizados aplicables (EPA 1613 y EPA 8290), el sistema de toxicidad equivalente (TEQ) y los costos y complejidades que determinan por qué este análisis sigue siendo uno de los más demandantes en el laboratorio ambiental.

---

## 1. Muestreo: la primera fuente de incertidumbre

El muestreo para dioxinas y furanos es, con frecuencia, el eslabón más débil de la cadena analítica. Dado que los límites de detección se encuentran en el orden de femtogramos (10⁻¹⁵ g) a picogramos (10⁻¹² g), cualquier contaminación cruzada, degradación o pérdida durante la recolección invalida el resultado.

### Matrices típicas y estrategias

| Matriz | Método de muestreo representativo | Consideraciones clave |
|---|---|---|
| Aire ambiente / emisiones | Muestreador isocinético con filtro de fibra de cuarzo + sorbente XAD-2 | Muestreo por períodos de 4–8 h; mantener el tren de muestreo a 120 °C para evitar condensación de agua |
| Suelo / sedimento | Muestreo compuesto con barrenos de acero inoxidable | Evitar herramientas de plástico (ftalatos interfieren); homogeneizar y congelar a −20 °C |
| Agua (residual, superficial) | Botellas de vidrio ámbar con tapón de PTFE | Preservar con HCl a pH < 2; extraer dentro de 7 días |
| Tejido biológico / alimentos | Recolección por disección; almacenamiento en ultracongelación (−80 °C) | La lipólisis y la peroxidación degradan los analitos si no se congelan inmediatamente |
| Cenizas / residuos sólidos | Muestreo por cuarteo y trituración criogénica | Homogeneización crítica; usar morteros de ágata o molinos de bolas |

**Regla de oro:** todo material que entre en contacto con la muestra debe ser de vidrio, PTFE, acero inoxidable o aluminio. No usar plásticos comunes (PVC, polietileno, polipropileno) pues pueden liberar ftalatos y otros interferentes que coeluyen en el cromatograma.

---

## 2. Extracción: liberar los analitos de la matriz

La extracción debe transferir cuantitativamente los PCDD/PCDF desde la matriz al disolvente, sin degradación ni pérdida de los congéneres marcados que se añaden como estándares internos isotópicos (³⁷Cl, ¹³C₁₂).

### Técnicas predominantes

- **Extracción Soxhlet** (EPA 1613, 8290): la más tradicional. Usa tolueno durante 16–24 h. Robusta, pero lenta y con alto consumo de disolvente (~300 mL por muestra).
- **Extracción con fluidos presurizados (PFE)** (ASE, Dionex): tolueno a 150 °C y 1500 psi. Reduce el tiempo a 15–30 min y el consumo de disolvente a ~30 mL. Ampliamente aceptada bajo EPA 3545A para la determinación de PCDD/PCDF.
- **Extracción por sonicación**: empleada para matrices sólidas. Menos eficiente que Soxhlet para dioxinas fuertemente adsorbidas.
- **Extracción líquido-líquido** (LLE): para aguas; tres porciones de diclorometano a pH diferentes.

Independientemente de la técnica, **se adicionan estándares internos marcados con ¹³C (15–17 congéneres)** antes de la extracción, que permitirán corregir recuperaciones y verificar la eficiencia de todo el proceso.

---

## 3. Clean-up: eliminar la matriz, preservar los analitos

El extracto crudo contiene una cantidad masiva de interferentes (lípidos, azufre, hidrocarburos aromáticos, bifenilos policlorados, pesticidas organoclorados) que pueden exceder en 10⁶ veces la concentración de dioxinas. El clean-up elimina esos interferentes sin arrastrar los analitos.

### Secuencia típica de clean-up

1. **Clean-up ácido** — tratamiento con H₂SO₄ concentrado (98 %) para destruir lípidos, carbohidratos y materia orgánica oxigenada. La fase orgánica que contiene las dioxinas se separa y neutraliza.
2. **Columna multicapa** (sílice ácida, sílice básica, sílice neutra y Na₂SO₄ anhidro) — elimina compuestos polares, ácidos grasos y trazas de agua.
3. **Columna de alúmina básica** — fracciona los analitos de interés, separando PCDD/PCDF de los PCB similares a dioxinas (dl-PCB) y otros organoclorados.
4. **Columna de carbón activado o Florisil** — retención específica de PCDD/PCDF por interacción π–π entre los anillos aromáticos y el carbón. Se eluyen en sentido inverso con tolueno.

Al final del clean-up, el extracto se concentra a 20–50 µL y se adiciona un **estándar de recuperación (syringe standard)** marcado con ¹³C (p. ej., ¹³C₁₂-1,2,3,4-TCDD) para corregir la variabilidad en la inyección cromatográfica.

---

## 4. GC-HRMS: la técnica de referencia

La cromatografía de gases de alta resolución acoplada a espectrometría de masas de alta resolución (GC-HRMS) es el método confirmatorio indiscutible para PCDD/PCDF, reconocido por la EPA, la UE y la OMS.

### Resolución >10,000: ¿por qué es necesaria?

Las dioxinas y furanos tienen masas nominales muy cercanas a otros contaminantes. Por ejemplo, el TCDD (masa exacta C₁₂H₄Cl₄O₂ = 319.8965 uma) coexiste con el DDE (C₁₄H₈Cl₄ = 319.9325 uma), que difiere solo en 0.036 uma. Un HRMS con resolución **R > 10,000** (definida como M/ΔM al 10 % del valle) separa completamente ambos picos. Resoluciones de 20,000–60,000 son comunes en los instrumentos modernos de sector magnético (DFS, Autospec) o de Orbitrap.

### Condiciones cromatográficas

- Columna capilar de sílice fundida: DB-5MS (60 m × 0.25 mm × 0.25 µm), DB-17MS, o equivalentes.
- Gas acarreador: helio a flujo constante de 1.0 mL/min.
- Programa de temperatura: 140 °C (2 min) → 10 °C/min → 200 °C → 3 °C/min → 310 °C (15 min). Tiempo total ~50–65 min.
- Inyección: splitless, 1–2 µL a 280–300 °C.
- Ionización: impacto electrónico (EI, 70 eV) en modo positivo.
- Adquisición: SIM (Selected Ion Monitoring) de los dos iones más abundantes del clúster isotópico molecular ([M]⁺ y [M+2]⁺ o [M+4]⁺).

### Criterios de identificación

Para aceptar un pico como positivo se deben cumplir:
1. Relación isotópica del clúster dentro de ±15 % del valor teórico.
2. Tiempo de retención dentro de ±2 s respecto al estándar marcado.
3. Relación señal/ruido (S/N) ≥ 10 para cuantificación, ≥ 3 para identificación.
4. Ventana cromatográfica o «lock mass» para asegurar la exactitud de masa < 5 ppm.

---

## 5. Métodos normalizados: EPA 1613 y EPA 8290

### EPA Method 1613

- **Alcance:** aguas, suelos, sedimentos, tejidos biológicos, incineradores.
- **Extracción:** Soxhlet con tolueno o PFE.
- **Clean-up:** secuencia sílice ácida → alúmina → carbón.
- **Determinación:** HRMS con resolución >10,000 y estándares isotópicos ¹³C.
- **Límites de detección:** 0.5–5 pg/L en aguas; 0.1–1 pg/g en suelos.
- **Congéneres:** cuantifica los 17 congéneres tóxicos 2,3,7,8-sustituidos.

### EPA Method 8290

- **Alcance:** específicamente para suelos, sedimentos y residuos sólidos (SW-846).
- **Diferencias clave:** la extracción usa tolueno en Soxhlet por 20 h; el clean-up puede incluir una etapa de sílice ácida en columna abierta; la confirmación por HRMS es idéntica a la 1613.
- **Límites:** típicamente 1–10 ppt para matrices sólidas.

Ambos métodos requieren la demostración periódica de desempeño (calibración de 5 niveles, verificación de resolución, pruebas de retención de la columna de clean-up, blancos de laboratorio por cada lote de 10 muestras).

---

## 6. Toxicidad equivalente (TEQ)

No todos los congéneres de PCDD/PCDF tienen la misma toxicidad. La OMS introdujo el concepto de **factores de equivalencia tóxica (TEF, Toxic Equivalency Factors)** , donde cada congénere se expresa en equivalentes de 2,3,7,8-TCDD (el más tóxico, con TEF = 1).

La concentración total de una muestra se reporta como:

**TEQ (pg/g o pg/L) = Σ (Cᵢ × TEFᵢ)**

donde Cᵢ es la concentración de cada congénere y TEFᵢ su factor correspondiente. La suma considera tanto PCDD como PCDF, y en muchos estudios se incluyen también los PCB similares a dioxinas (dl-PCB) para obtener el TEQ total.

### Tabla de congéneres tóxicos y sus TEF (OMS 2005)

| Congénere | Abreviatura | TEF (OMS 2005) |
|---|---|---|
| **Dioxinas (PCDD)** | | |
| 2,3,7,8-Tetraclorodibenzo-p-dioxina | 2,3,7,8-TCDD | 1.0 |
| 1,2,3,7,8-Pentaclorodibenzo-p-dioxina | 1,2,3,7,8-PeCDD | 1.0 |
| 1,2,3,4,7,8-Hexaclorodibenzo-p-dioxina | 1,2,3,4,7,8-HxCDD | 0.1 |
| 1,2,3,6,7,8-Hexaclorodibenzo-p-dioxina | 1,2,3,6,7,8-HxCDD | 0.1 |
| 1,2,3,7,8,9-Hexaclorodibenzo-p-dioxina | 1,2,3,7,8,9-HxCDD | 0.1 |
| 1,2,3,4,6,7,8-Heptaclorodibenzo-p-dioxina | 1,2,3,4,6,7,8-HpCDD | 0.01 |
| Octaclorodibenzo-p-dioxina | OCDD | 0.0003 |
| **Furanos (PCDF)** | | |
| 2,3,7,8-Tetraclorodibenzofurano | 2,3,7,8-TCDF | 0.1 |
| 1,2,3,7,8-Pentaclorodibenzofurano | 1,2,3,7,8-PeCDF | 0.03 |
| 2,3,4,7,8-Pentaclorodibenzofurano | 2,3,4,7,8-PeCDF | 0.3 |
| 1,2,3,4,7,8-Hexaclorodibenzofurano | 1,2,3,4,7,8-HxCDF | 0.1 |
| 1,2,3,6,7,8-Hexaclorodibenzofurano | 1,2,3,6,7,8-HxCDF | 0.1 |
| 1,2,3,7,8,9-Hexaclorodibenzofurano | 1,2,3,7,8,9-HxCDF | 0.1 |
| 2,3,4,6,7,8-Hexaclorodibenzofurano | 2,3,4,6,7,8-HxCDF | 0.1 |
| 1,2,3,4,6,7,8-Heptaclorodibenzofurano | 1,2,3,4,6,7,8-HpCDF | 0.01 |
| 1,2,3,4,7,8,9-Heptaclorodibenzofurano | 1,2,3,4,7,8,9-HpCDF | 0.01 |
| Octaclorodibenzofurano | OCDF | 0.0003 |

*Nota: En 2022 la OMS publicó una re-evaluación de los TEF, pero los valores de 2005 siguen siendo los adoptados por la mayoría de las agencias regulatorias a nivel global. Se recomienda verificar la versión exigida por la autoridad competente al emitir un reporte.*

---

## 7. Costo y complejidad del análisis

El análisis de dioxinas y furanos por GC-HRMS es, sin exageración, uno de los más costosos en el ámbito del laboratorio ambiental. Los factores que lo determinan son:

### Costo por muestra (estimado en México, 2026)

| Componente | Rango de costo |
|---|---|
| **Reactivos y estándares isotópicos** (16–20 estándares ¹³C por muestra) | $3,000 – $5,000 MXN |
| **Disolventes grado ACS/HR-GC** (tolueno, hexano, diclorometano, nonano) | $500 – $1,000 MXN |
| **Consumibles** (columnas cromatográficas, cartuchos de clean-up, liners, filtros) | $1,500 – $3,000 MXN |
| **Mano de obra calificada** (técnico + químico supervisor, 3–5 días hábiles por lote) | $2,000 – $4,000 MXN |
| **Depreciación del equipo** (GC-HRMS sector magnético ~USD $400,000–$600,000) | $2,500 – $5,000 MXN |
| **Control de calidad** (blancos, duplicados, LCS, matriz fortificada — ocupa ~30 % del lote) | $1,000 – $2,000 MXN |
| **Costo total por muestra** | **$10,000 – $20,000 MXN** |

### Complejidad técnica

1. **Instrumentación especializada:** el HRMS de sector magnético requiere criogenia con nitrógeno líquido, sala con temperatura y humedad controladas (±1 °C, <50 % HR), y mantenimiento preventivo cada 3–6 meses.
2. **Personal altamente capacitado:** los operadores deben tener formación en espectrometría de masas, cromatografía y manejo de sustancias tóxicas de referencia. La curva de aprendizaje típica es de 6–12 meses.
3. **Tiempo de análisis:** un lote de 10 muestras —incluyendo extracción, clean-up, análisis por GC-HRMS (~65 min/inyección) y procesamiento de datos— toma entre 3 y 5 días hábiles.
4. **Gestión de residuos:** los extractos contienen tolueno, hexano y diclorometano, y deben manejarse como RPBI químicos.
5. **Acreditación:** los laboratorios requieren acreditación ISO/IEC 17025 con alcance específico para PCDD/PCDF, lo que implica pruebas interlaboratorio (ILC) cada año y revisiones anuales de aseguramiento de la calidad.

---

## 8. Retos actuales y tendencias

- **Transición a GC-MS/MS:** los equipos de triple cuadrupolo (GC-MS/MS) con ionización química están alcanzando sensibilidad cercana al HRMS para muchas matrices, a un costo de adquisición y operación ~40 % menor. Sin embargo, para aplicaciones regulatorias donde se exige resolución >10,000 (p. ej., Reglamento UE 2017/644), el HRMS sigue siendo el estándar de oro.
- **Espectrometría de masas de alta resolución alternativas:** el Orbitrap GC-MS combina resolución >120,000 con estabilidad de masa <1 ppm y facilidad de operación respecto al sector magnético. Su adopción crece rápidamente en Norteamérica y Europa.
- **Automatización del clean-up:** sistemas robóticos (PowerPrep, DioxinPrep) que realizan la secuencia completa de clean-up en 45 min con un 80 % menos de disolvente y una repetibilidad entre lotes de <10 % RSD.
- **Límites regulatorios más estrictos:** en México, la NOM-098-SEMARNAT-2002 para incineración de residuos exige límites de emisión de 0.1 ng TEQ/Nm³. Próximas actualizaciones podrían reducir este valor exigiendo aún mayor sensibilidad.

---

## Conclusión

El análisis de dioxinas y furanos por GC-HRMS representa el estado del arte en cromatografía ambiental. Cada etapa —desde el muestreo hasta el clean-up y la determinación instrumental— exige un rigor metodológico extremo para producir resultados confiables a niveles de ppt y sub-ppt. Los métodos EPA 1613 y 8290 proporcionan el marco probado para lograrlo, y el sistema TEQ ofrece un lenguaje unificado para reportar riesgo toxicológico.

El costo y la complejidad son elevados, pero no existe alternativa técnica igualmente robusta para cumplir con las normativas más exigentes. En Solinsa contamos con la infraestructura de GC-HRMS, el personal certificado y la acreditación necesaria para ofrecer este servicio con la más alta calidad y trazabilidad.

**¿Necesita realizar análisis de dioxinas y furanos en su matriz?** Contáctenos para una cotización personalizada y asesoría técnico-científica en su proyecto.

---

*Solinsa — Laboratorio Analítico. Análisis de dioxinas y furanos, PCB, plaguicidas y contaminantes orgánicos persistentes. Acreditado ISO/IEC 17025.*
