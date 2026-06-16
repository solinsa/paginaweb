---
title: "Análisis de Plastificantes (Ftalatos) en Alimentos por GC-MS: Método y Control de Calidad"
published: 2026-09-07
category: cat-ind-alimentos
tags: [ftalatos, DEHP, DBP, BBP, DINP, GC-MS, alimentos, contaminación, NOM-187, QuEChERS]
audience: [T1-Alimentos, T1-Ambiental]
lang: es-MX
wordcount: ~1500
---

## Introducción: El Problema de los Ftalatos en la Cadena Alimentaria

Los ftalatos —ésteres del ácido ftálico— son los plastificantes más utilizados del mundo. Se añaden a polímeros como el PVC para impartir flexibilidad, y se encuentran en empaques, mangueras, guantes, sellos, tuberías y recubrimientos de alimentos procesados. El problema es que **no están unidos covalentemente a la matriz polimérica**, por lo que migran con facilidad al contenido del envase, especialmente en alimentos grasos, ácidos o calientes.

La exposición crónica a ciertos ftalatos se ha asociado con disrupción endocrina, toxicidad reproductiva y efectos carcinogénicos. Por esta razón, la Unión Europea (Reglamento REACH) y México (NOM-187-SSA1/SCFI-2021) han establecido límites máximos permisibles para la migración de ftalatos en alimentos y materiales en contacto con alimentos.

> "En un laboratorio que analiza ftalatos, el blanco es su peor enemigo. Estos compuestos están en el aire del laboratorio, en los solventes, en los frascos, en los guantes y hasta en la grasa de los dedos del analista."

El análisis por GC-MS es la técnica de referencia para cuantificar ftalatos, pero presenta un desafío metodológico único: la contaminación ubicua. En este artículo detallamos un método robusto para la determinación de DEHP, DBP, BBP, DINP y otros ftalatos en alimentos.

## ¿Qué Ftalatos Regular y por Qué?

Los ftalatos más relevantes desde el punto de vista regulatorio y toxicológico son:

- **DEHP (di-2-etilhexil ftalato)**: El más utilizado y el más regulado. Disruptor endocrino clase 1B. Límite de migración específico (LME) en la UE: 1.5 mg/kg para alimentos infantiles.
- **DBP (dibutil ftalato)**: Toxico reproductivo. LME en UE: 0.3 mg/kg.
- **BBP (bencil butil ftalato)**: LME en UE: 30 mg/kg (mayor tolerancia).
- **DINP (di-isononil ftalato)**: Mezcla de isómeros, usado como sustituto del DEHP. LME en UE: 9 mg/kg en alimentos generales.
- **DIDP (di-isodecil ftalato)**: Similar al DINP, LME en UE: 9 mg/kg.
- **DnOP (di-n-octil ftalato)**: LME en UE: 1.5 mg/kg.

En México, la NOM-187-SSA1/SCFI-2021 (Productos de la pesca secos-salados) establece límites máximos para DEHP (1.5 mg/kg) y DBP (0.3 mg/kg), armonizados con la legislación europea.

## Preparación de Muestra: El Desafío de la Contaminación Ubicua

La preparación de muestra es el paso más crítico en el análisis de ftalatos. **Estos compuestos están en todas partes**, y un resultado positivo falso por contaminación arruina lotes de producto y genera costos de investigación imposibles de recuperar.

**Protocolo de preparación recomendado:**

1. **Selección de materiales libres de ftalatos:**
   - Evitar cualquier plástico, excepto PTFE o polipropileno de alta pureza.
   - Usar vidrio borosilicato lavado con hexano/acetona y horneado a 400 °C por 4 h.
   - Tapones de PTFE, nunca tapones de plástico negro o rojo.

2. **Extracción:**
   - **Alimentos grasos (>10 % grasa):** Extracción por GPC (*Gel Permeation Chromatography*) para eliminar lípidos, seguida de SPE con sílice. O bien, extracción con acetonitrilo y congelación para precipitar grasas.
   - **Alimentos acuosos y bebidas:** Extracción líquido-líquido con hexano o extracción en fase sólida (SPE C18).
   - **Alimentos sólidos (cereales, pescado seco):** Extracción asistida por ultrasonido con acetonitrilo, seguida de limpieza con PSA (QuEChERS adaptado).

3. **Control de blanco de extracción:**
   - Procesar un blanco con cada lote de 10 muestras.
   - El blanco debe contener todos los solventes y materiales usados en la extracción.
   - **Criterio de aceptación:** Señal del blanco ≤ LOD del método.

> **Regla de oro:** Si su blanco de DEHP tiene más de 0.05 mg/kg equivalente, revise su procedimiento. El origen más común son los guantes de nitrilo y los frascos de vidrio mal lavados.

## Configuración GC-MS para Ftalatos

**Columna:** HP-5MS UI o equivalente (30 m × 0.25 mm × 0.25 µm). Las columnas de baja sangrado ("Ultra Inert") son esenciales para mantener baja la línea base y evitar interferencias en los fragmentos característicos (m/z 149 para la mayoría de ftalatos).

**Programa de temperatura:**
- 60 °C (1 min) → 20 °C/min → 220 °C → 5 °C/min → 280 °C (5 min).
- Tiempo total de corrida: ~22 min.

**Modo de inyección:** Splitless a 250-280 °C. Volumen de inyección: 1-2 µL.

**Detección por MS (SIM/SCAN):**
- **Iones de cuantificación:** m/z 149 (ión base para DEHP, DBP, BBP, DnOP). Para DINP/DIDP se usa m/z 293 y 307 (isómeros específicos).
- **Iones de confirmación:** m/z 167, 279 (DEHP); m/z 205, 223 (BBP); m/z 223 (DBP).
- **Modo SIM** para la mejor sensibilidad y selectividad.

**Estándar interno:** DBP-d4, DEHP-d4 o BBP-d4. El uso de estándares internos deuterados es indispensable para corregir supresión de ionización y variabilidad de inyección.

## Control de Calidad: Blancos y Contaminación de Fondo

El control de calidad en ftalatos tiene capas adicionales que en otros métodos de GC-MS:

1. **Blanco ambiental:** Colocar un vial abierto con hexano en el muestreador automático durante la secuencia. Detecta contaminación ambiental dentro del instrumento.
2. **Blanco de solvente:** Hexano inyectado directamente. Confirma que el solvente y el sistema de inyección están limpios.
3. **Blanco de procedimiento:** Todos los reactivos y material de extracción, sin muestra. El criterio es señal ≤ LOD.
4. **Blanco de matriz:** Matriz certificada libre de ftalatos (o previamente analizada) procesada en paralelo.
5. **Muestra fortificada (LFM):** Fortificar una alícuota de la muestra a 1× LMR para verificar que no hay supresión de matriz.

**Criterios de aceptación para la secuencia:**
- Recuperación del estándar interno: 60-140 % (ideal 80-120 %).
- RSD de los estándares de calibración: ≤ 15 % para cada nivel.
- Diferencia entre duplicados: ≤ 20 %.

## Validación del Método: Recuperación y Límites

Para validar un método de ftalatos en alimentos, los parámetros clave son:

- **Rango de trabajo:** 0.01-5.0 mg/kg (dependiendo del LMR de cada ftalato).
- **Linealidad:** r ≥ 0.999 con 7 niveles de calibración.
- **Recuperación:** 70-120 % para niveles cercanos al LMR.
- **Precisión:** RSD ≤ 15 % intra-día, ≤ 20 % inter-día.
- **LOD instrumental (GC-MS SIM):** ~0.005 mg/kg (inyección en solvente).
- **LOD del método (matriz grasa):** ~0.02-0.05 mg/kg, limitado por el blanco más que por la sensibilidad del instrumento.
- **LOQ del método:** Se fija en el nivel más bajo de fortificación que cumple con exactitud (80-120 %) y precisión (≤ 20 % RSD).

> **Nota importante:** El LOQ real de un método de ftalatos está determinado por la calidad del blanco, no por la sensibilidad instrumental. Un instrumento puede detectar 0.001 mg/kg de DEHP, pero si su blanco tiene 0.02 mg/kg, su LOQ práctico es al menos 0.05 mg/kg.

## Límites Regulatorios: NOM-187 y Reglamentación Europea

| Ftalato | NOM-187-SSA1/SCFI-2021 (México) | Reglamento UE 10/2011 | Codex Alimentarius |
|---|---|---|---|
| DEHP | 1.5 mg/kg* | 1.5 mg/kg (alimentos) | 1.5 mg/kg (recomendado) |
| DBP | 0.3 mg/kg* | 0.3 mg/kg | — |
| BBP | No especificado | 30 mg/kg | — |
| DINP | No especificado | 9 mg/kg | — |
| DIDP | No especificado | 9 mg/kg | — |

*\*Aplica a productos de la pesca secos-salados. Para otros alimentos, se recomienda adoptar los LME de la UE como guía técnica.*

Es importante señalar que la tendencia regulatoria global es reducir progresivamente los límites. La UE ya evalúa bajar el LME del DEHP de 1.5 a 0.6 mg/kg para 2027. Los laboratorios deben anticiparse y validar sus métodos a concentraciones cada vez más bajas.

## Conclusión

El análisis de ftalatos en alimentos por GC-MS es un reto analítico que combina la sensibilidad instrumental con un riguroso control de la contaminación ambiental. La clave del éxito está en tres pilares: un protocolo de preparación de muestra que minimice la exposición a plásticos y ftalatos del entorno, un GC-MS con columna ultra-inerte y detección SIM, y un programa de control de calidad con blancos en cada nivel del proceso.

En **Solinsa** contamos con equipos GC-MS y GC-MS/MS configurados y optimizados para el análisis de ftalatos, así como con accesorios para minimizar la contaminación de fondo (trampas de ftalatos en el gas carrier, *liner* silanizados, columnas de baja sangrado). Nuestro equipo técnico puede ayudarle a implementar un método robusto que cumpla con NOM-187 y regulaciones internacionales. Solicite una cotización o una visita técnica.
