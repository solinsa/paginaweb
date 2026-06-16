---
title: 'Análisis de compuestos orgánicos volátiles (COV) en pinturas y recubrimientos por cromatografía de gases'
published: 2026-04-16
slug: analisis-cov-pinturas-recubrimientos-gc
category: cat-gc
tags:
  - COV
  - GC
  - pinturas
  - recubrimientos
  - NOM-138
  - ASTM D3960
  - headspace
audience:
  - T1-Industria
  - T2-Aseguramiento
---

# Análisis de compuestos orgánicos volátiles (COV) en pinturas y recubrimientos por cromatografía de gases

## Introducción

La determinación de compuestos orgánicos volátiles (COV) en pinturas y recubrimientos es un requisito regulatorio en México, Estados Unidos y la Unión Europea. Los COV contribuyen a la formación de ozono troposférico (smog fotoquímico) y representan riesgos para la salud ocupacional. En México, la NOM-138-SEMARNAT/SCFI establece los límites máximos permisibles de emisión de COV en recubrimientos, mientras que a nivel internacional las guías ASTM D3960 e ISO 11890 definen los métodos analíticos para su cuantificación.

La cromatografía de gases (GC) con detector FID acoplada a headspace estático es la técnica de referencia para esta determinación. En este artículo presentamos el método, las condiciones cromatográficas, el cálculo de resultados y un caso práctico comparativo entre pintura base solvente y base agua.

---

## Marco normativo

| Norma | Alcance | Método analítico | Aplicación en México |
|-------|---------|-----------------|---------------------|
| NOM-138-SEMARNAT/SCFI | Límites de COV en recubrimientos | GC-FID / EPA Method 24 | Obligatoria para fabricantes e importadores |
| ASTM D3960 | Determinación de COV en pinturas | GC-FID con estándar interno | Referencia técnica voluntaria |
| ISO 11890-1 | Método de diferencia (COV total) | Gravimétrico + GC | Método indirecto complementario |
| ISO 11890-2 | Determinación de compuestos COV individuales | GC-FID / GC-MS | Análisis cuantitativo de compuestos específicos |
| EPA Method 24 | Determinación de COV en recubrimientos | GC-FID + horno gravimétrico | Base de la NOM-138 |

---

## Métodos de preparación de muestra

### Headspace estático

Método preferido para matrices complejas como pinturas y recubrimientos, donde los componentes no volátiles (resinas, pigmentos, aditivos) podrían contaminar el sistema de inyección.

**Procedimiento:**
1. Pesar 1.0 ± 0.1 g de muestra en vial de headspace de 20 mL.
2. Agregar 5 mL de solvente diluyente (DMF o DMSO) con estándar interno (1,4-dioxano o isobutanol).
3. Sellar con septo de PTFE/silicón.
4. Equilibrar a 80 °C por 30 min con agitación.
5. Inyectar 500 µL de fase gaseosa (split 20:1).

**Ventajas:** minimiza la contaminación del inlet y la columna; elimina interferencias de matriz; automatizable con muestreador headspace.

### Dilución directa

**Procedimiento:**
1. Pesar 0.5 g de muestra en matraz aforado de 10 mL.
2. Aforar con acetato de etilo (o DMF) conteniendo estándar interno.
3. Agitar en vortex 1 min y sonicación 5 min.
4. Inyectar 1 µL (split 50:1).

**Ventajas:** método más rápido; útil cuando se requiere detectar compuestos de baja volatilidad.

---

## Condiciones cromatográficas recomendadas

| Parámetro | Condición |
|-----------|-----------|
| Columna | DB-624 (30 m × 0.32 mm × 1.8 µm) — fase 6% cianopropil-fenil / 94% dimetilpolisiloxano |
| Gas acarreador | Helio 5.0, flujo 1.5 mL/min, velocidad lineal 32 cm/s |
| Horno | 40 °C (4 min) → 8 °C/min → 200 °C (5 min) |
| Inyector | 220 °C, split 20:1 (headspace) o 50:1 (dilución directa) |
| Detector FID | 260 °C, H₂ 40 mL/min, aire 400 mL/min, make-up N₂ 25 mL/min |
| Volumen de inyección | 1 µL (líquido) o 500 µL (headspace) |
| Tiempo total de análisis | 29 min |

---

## Curva de calibración de 16 COV

Se prepara una curva de calibración con 6 niveles (0.5, 1, 5, 10, 50 y 100 µg/mL) en DMF con estándar interno (isobutanol a 25 µg/mL).

### Tiempos de retención y selectividad

| # | Compuesto | RT (min) | Grupo químico | Ión diagnóstico (GC-MS) |
|---|-----------|----------|---------------|------------------------|
| 1 | Acetona | 3.12 | Cetona | 58 |
| 2 | Acetato de metilo | 3.90 | Éster | 74 |
| 3 | Metil etil cetona (MEK) | 4.85 | Cetona | 72 |
| 4 | Etanol | 5.10 | Alcohol | 46 |
| 5 | Acetato de etilo | 6.22 | Éster | 88 |
| 6 | 2-Butanol | 6.90 | Alcohol | 74 |
| 7 | Benceno | 7.80 | Hidrocarburo aromático | 78 |
| 8 | 1-Propanol | 8.15 | Alcohol | 60 |
| 9 | Acetato de isopropilo | 8.60 | Éster | 87 |
| 10 | Tolueno | 10.45 | Hidrocarburo aromático | 91 |
| 11 | Acetato de n-butilo | 11.90 | Éster | 73 |
| 12 | Etilbenceno | 12.80 | Hidrocarburo aromático | 106 |
| 13 | m+p-Xileno | 13.10 | Hidrocarburo aromático | 106 |
| 14 | o-Xileno | 13.55 | Hidrocarburo aromático | 106 |
| 15 | 1,2,4-Trimetilbenceno | 15.30 | Hidrocarburo aromático | 120 |
| 16 | n-Hexano | 16.10 | Alcano | 86 |

**Criterios de aceptación de la curva:**
- R² > 0.999 para todos los analitos.
- Residuales < ±15% para estándares >1 µg/mL; < ±20% para 0.5 µg/mL.
- Precisión de réplicas (n=3) CV < 5% en nivel medio de la curva.

---

## Cálculo del contenido de COV

### Contenido de COV con agua (g/L)

\[
COV_{total} = \frac{\sum (A_i / A_{EI}) \times C_{EI} \times V_{dilución}}{m_{muestra}} \times \rho_{pintura}
\]

Donde:
- \(A_i\) = área del compuesto i
- \(A_{EI}\) = área del estándar interno
- \(C_{EI}\) = concentración del estándar interno (µg/mL)
- \(V_{dilución}\) = volumen de dilución (mL)
- \(m_{muestra}\) = masa de la muestra (g)
- \(\rho_{pintura}\) = densidad de la pintura (g/mL)

### Contenido de COV sin agua (g/L)

\[
COV_{sin agua} = \frac{COV_{total}}{1 - (\%_{agua}/100)}
\]

El porcentaje de agua se determina por Karl Fischer (ASTM D4017) o por el método de la trampa Dean-Stark.

### Cálculo regulatorio según ASTM D3960

\[
VOC_{coating} (g/L) = \frac{VOC_{total} - V_{exempt}}{V_{coating} - V_{water} - V_{exempt}}
\]

Donde \(V_{exempt}\) son compuestos excluidos (ej. acetona en ciertos códigos regulatorios).

---

## Límites regulatorios por tipo de recubrimiento (NOM-138)

| Tipo de recubrimiento | Límite máximo COV (g/L) | Ejemplo de aplicación |
|-----------------------|------------------------|-----------------------|
| Recubrimientos arquitectónicos — brillante | 250 | Esmaltes para interiores/exteriores |
| Recubrimientos arquitectónicos — mate | 150 | Pinturas vinílicas para muros |
| Recubrimientos industriales | 420 | Pinturas para maquinaria y equipos |
| Recubrimientos automotrices (refinish) | 580 | Primers, bases y clears |
| Recubrimientos para mantenimiento | 450 | Pinturas anticorrosivas |
| Recubrimientos de tráfico | 600 | Pinturas para señalización vial |
| Adhesivos y selladores | 250 | Aplicaciones en construcción |

**Fuente:** NOM-138-SEMARNAT/SCFI-2012, Tabla 1ª.

---

## Caso práctico: Pintura base solvente vs. base agua

Se analizaron dos muestras comerciales de pintura esmalte blanco (base solvente y base agua) bajo las condiciones descritas.

### Resultados comparativos

| Parámetro | Base solvente | Base agua |
|-----------|---------------|-----------|
| COV total medido (g/L) | 385 ± 12 | 42 ± 3 |
| COV sin agua (g/L) | 398 ± 14 | 87 ± 5 |
| % Agua (Karl Fischer) | 3.2 | 51.6 |
| % Sólidos en volumen | 38 | 35 |
| Compuesto mayoritario | Tolueno (42% del COV total) | Acetato de etilo (38% del COV total) |
| Número de COV detectados | 12 | 5 |
| Cumplimiento NOM-138 (arquitectónico) | No (límite 250 g/L) | Sí (87 g/L < límite 250 g/L) |

### Interpretación

La pintura base solvente excede en 135 g/L el límite de la NOM-138 para recubrimientos arquitectónicos brillantes. El tolueno representa casi la mitad del contenido de COV, lo que además genera preocupaciones de exposición ocupacional (VLE-PPT de 50 ppm). La pintura base agua cumple holgadamente la norma por un factor de 3×, con un perfil de emisión significativamente más limpio.

Sin embargo, no todas las aplicaciones aceptan base agua: en recubrimientos de mantenimiento industrial o automotriz, la performance de la base solvente (dureza, resistencia química, adherencia) sigue siendo superior. La decisión debe balancear cumplimiento regulatorio, desempeño técnico y costo.

---

## Recomendaciones para el laboratorio

1. **Validar el método en matriz propia** — cada formulación de pintura tiene una matriz diferente que afecta la eficiencia de extracción.
2. **Usar estándar interno** — compensa variaciones de inyección y partición en headspace.
3. **Verificar linealidad en el rango de interés** — los COV mayoritarios pueden exceder el rango lineal del FID; diluir si es necesario.
4. **Controlar la temperatura del headspace** — ±1 °C es crítico para la reproducibilidad.
5. **Participar en ejercicios interlaboratorio** — la determinación de COV es notoriamente variable entre laboratorios (CV interlaboratorio típico 10–20%).

---

## Conclusión

La determinación de COV en pinturas y recubrimientos por GC-FID con headspace estático es un método robusto, preciso y alineado con las exigencias regulatorias mexicanas e internacionales. Con una columna DB-624 y una curva de calibración de 16 compuestos, el laboratorio puede cuantificar la mayoría de los COV presentes en formulaciones comerciales, calcular el contenido regulatorio con y sin agua, y evaluar el cumplimiento normativo.

La tendencia global hacia recubrimientos con bajo contenido de COV (base agua, altos sólidos, curado UV) hace que este análisis sea cada vez más relevante tanto para la formulación como para el control de calidad.

En Solinsa somos expertos en instrumentación analítica y cromatografía. Ofrecemos soluciones completas para análisis de COV: cromatógrafos de gases, muestreadores headspace, columnas DB-624, estándares de calibración y capacitación en métodos ASTM y NOM. Contáctanos para recibir asesoría personalizada, cotización de equipos, refacciones o soporte técnico. Visítanos en solinsa.com
