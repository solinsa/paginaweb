---
title: 'Análisis de elementos traza en fertilizantes y suelos agrícolas por ICP-OES'
published: 2026-04-06
slug: elementos-traza-fertilizantes-suelos-icp-oes
category: cat-icp
tags:
  - ICP-OES
  - fertilizantes
  - suelos
  - agricultura
  - metales
  - NOM-021
audience:
  - T1-Industria
  - T2-Aseguramiento
---

# Análisis de elementos traza en fertilizantes y suelos agrícolas por ICP-OES

## Introducción

La productividad agrícola depende críticamente de la disponibilidad de nutrientes esenciales en el suelo y de la correcta formulación de los fertilizantes aplicados. Los macronutrientes (fósforo, potasio, calcio, magnesio) y micronutrientes (hierro, zinc, cobre, manganeso, boro, molibdeno) deben encontrarse en concentraciones adecuadas para garantizar el desarrollo óptimo de los cultivos. Al mismo tiempo, los elementos potencialmente tóxicos (cadmio, plomo, arsénico, mercurio) deben mantenerse por debajo de los límites establecidos por la NOM-021-RECNAT-2000 y las regulaciones internacionales de fertilizantes.

La espectrometría de emisión óptica con plasma acoplado inductivamente (ICP-OES) es la técnica de elección para el análisis multielemental simultáneo de fertilizantes y suelos. Su amplio rango dinámico lineal (hasta 5-6 órdenes de magnitud), su capacidad para detectar simultáneamente hasta 30 elementos por inyección, y su alta sensibilidad (ppm a sub-ppm) la convierten en la herramienta ideal para laboratorios agrícolas y de control de calidad.

## Preparación de muestras: digestión ácida asistida por microondas

La etapa de preparación de la muestra es crítica para obtener resultados representativos. La digestión ácida asistida por microondas es el método preferido por su eficiencia, reproducibilidad y menor riesgo de contaminación en comparación con la digestión en placa caliente.

### Método EPA 3051A para suelos

Para la determinación de metales traza en suelos agrícolas, se sigue el método EPA 3051A:

1. Pesar 0.5 ± 0.01 g de suelo seco y tamizado (malla 200 mesh, < 74 µm).
2. Transferir a un vaso de digestión de PTFE.
3. Añadir 9 mL de HNO₃ concentrado (grado traza) y 3 mL de HCl concentrado.
4. Sellar el vaso y colocar en el horno de microondas.
5. Programa de digestión: rampa a 175 °C en 5.5 min, mantener a 175 °C durante 4.5 min.
6. Enfriar, filtrar a través de papel Whatman 42 y aforar a 50 mL con agua desionizada (18.2 MΩ·cm).

### Método EPA 3052 para fertilizantes

Los fertilizantes requieren una digestión más agresiva por su contenido de materia orgánica, fosfatos y compuestos refractarios:

1. Pesar 0.5 ± 0.01 g de fertilizante homogenizado y molido.
2. Añadir 9 mL de HNO₃ y 3 mL de HF (para disolver silicatos si están presentes).
3. Programa de digestión: rampa a 180 °C en 5.5 min, mantener durante 9.5 min.
4. Después de enfriar, añadir 10 mL de H₃BO₄ al 4 % para neutralizar el HF residual.
5. Filtrar y aforar a 50 mL.

## Parámetros instrumentales del ICP-OES

### Condiciones de operación

| Parámetro | Valor |
|---|---|
| Potencia RF | 1300 W |
| Flujo de plasma (Ar) | 12 L/min |
| Flujo auxiliar (Ar) | 0.5 L/min |
| Flujo de nebulizador (Ar) | 0.7 L/min |
| Tipo de nebulizador | Concéntrico (SeaSpray) |
| Cámara de nebulización | Ciclónica |
| Flujo de bomba | 1.5 mL/min |
| Tiempo de integración | 10–30 s según elemento |
| Réplicas | 3 |
| Modo de visión | Axial (para trazas) / Radial (para altas concentraciones) |

### Líneas de emisión recomendadas

| Elemento | Tipo | Longitud de onda (nm) | Modo de visión |
|---|---|---|---|
| P | Macronutriente | 213.618 | Radial |
| K | Macronutriente | 769.896 | Radial |
| Ca | Macronutriente | 317.933 | Radial |
| Mg | Macronutriente | 285.213 | Radial |
| Fe | Micronutriente | 259.940 | Axial |
| Zn | Micronutriente | 206.200 | Axial |
| Cu | Micronutriente | 324.754 | Axial |
| Mn | Micronutriente | 257.610 | Axial |
| B | Micronutriente | 249.677 | Axial |
| Mo | Micronutriente | 202.030 | Axial |
| Cd | Tóxico | 214.438 | Axial |
| Pb | Tóxico | 220.353 | Axial |
| As | Tóxico | 188.980 | Axial |
| Hg | Tóxico | 253.652 | Axial |

## Validación del método

### Linealidad y sensibilidad

Se prepararon curvas de calibración con 6 niveles en matriz acidificada (HNO₃ al 2 %). Todos los elementos presentaron coeficientes de determinación R² > 0.9995.

### Límites de detección (LOD) y cuantificación (LOQ)

| Elemento | LOD (mg/kg) | LOQ (mg/kg) |
|---|---|---|
| Fe | 0.05 | 0.17 |
| Zn | 0.02 | 0.07 |
| Cu | 0.01 | 0.03 |
| Mn | 0.01 | 0.03 |
| B | 0.05 | 0.17 |
| Mo | 0.03 | 0.10 |
| Cd | 0.01 | 0.03 |
| Pb | 0.05 | 0.17 |
| As | 0.10 | 0.33 |
| Hg | 0.05 | 0.17 |

### Precisión y exactitud

La precisión se evaluó mediante análisis de 6 réplicas independientes de un mismo material. Todos los elementos presentaron RSD < 5 %.

La exactitud se verificó mediante el análisis de materiales de referencia certificados:

- **NIST SRM 2709a** (San Joaquin Valley Soil): recuperaciones entre 95 % y 105 %.
- **CRM de fertilizante** (Fertilizer CRM FAPAS): recuperaciones entre 93 % y 104 %.

### Control de calidad analítico

Se incluyen en cada lote:
- Blanco de método
- Muestra duplicada (cada 10 muestras)
- CRM (cada 20 muestras)
- Estándar de verificación (cada 10 muestras)
- Estándar interno (Scandio 50 mg/L)

## Límites normativos según NOM-021-RECNAT-2000

La NOM-021-RECNAT-2000 establece los límites máximos permisibles de elementos potencialmente tóxicos en suelos agrícolas y materiales fertilizantes:

| Elemento | Límite en suelo agrícola (mg/kg) | Límite en fertilizante (mg/kg) |
|---|---|---|
| Cd | 0.5 – 2.0 | 5 – 30 * |
| Pb | 25 – 100 | 50 – 300 * |
| As | 5 – 20 | 15 – 75 * |
| Hg | 0.5 – 2.0 | 0.5 – 5.0 |

* El límite depende del tipo de fertilizante (grado para cultivo alimenticio).

## Estudio de caso: fertilizante comercial vs especificaciones

Un fabricante de fertilizantes foliares recibió un lote de materia prima de zinc (ZnSO₄·H₂O) que sospechaba estaba contaminado con cadmio. Se realizó el análisis por ICP-OES siguiendo el método EPA 3052:

| Analito | Especificación | Resultado | ¿Cumple? |
|---|---|---|---|
| Zn (% p/p) | 33 – 35 % | 34.2 % | Sí |
| Cd (mg/kg) | < 10 mg/kg | 42.3 mg/kg | No |
| Pb (mg/kg) | < 20 mg/kg | 8.1 mg/kg | Sí |
| As (mg/kg) | < 10 mg/kg | < 0.5 mg/kg | Sí |

El contenido de cadmio excedía 4 veces el límite máximo permisible. Se rechazó el lote y se notificó al proveedor. El análisis ICP-OES evitó la contaminación de 50 toneladas de fertilizante terminado, con un ahorro estimado de $250,000 en producto no conforme y posibles sanciones regulatorias.

## Conclusión

El ICP-OES con digestión ácida asistida por microondas es una plataforma analítica robusta y eficiente para la determinación de macro, micro y tóxicos en fertilizantes y suelos agrícolas. La técnica cumple con los requerimientos de la NOM-021-RECNAT-2000 y proporciona resultados de alta calidad analítica para la toma de decisiones en la industria agrícola.

En **Solinsa** somos expertos en instrumentación analítica y cromatografía. Contáctanos para recibir asesoría personalizada, cotización de equipos, refacciones o soporte técnico. Visítanos en solinsa.com.
