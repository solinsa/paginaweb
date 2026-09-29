---
title: 'Determinación de vitaminas liposolubles (A, D, E, K) en suplementos alimenticios por LC-MS/MS'
published: 2026-04-01
slug: vitaminas-liposolubles-lc-msms
category: cat-lcms
tags:
  - LC-MS/MS
  - vitaminas
  - suplementos
  - alimentos
  - espectrometria de masas
audience:
  - T1-Industria
  - T2-Aseguramiento
---

# Determinación de vitaminas liposolubles (A, D, E, K) en suplementos alimenticios por LC-MS/MS

## Introducción

Las vitaminas liposolubles A, D, E y K desempeñan funciones fisiológicas esenciales: la vitamina A interviene en la visión y el sistema inmunológico; la vitamina D regula la homeostasis del calcio y el metabolismo óseo; la vitamina E actúa como antioxidante lipídico; y la vitamina K es cofactor en la carboxilación de proteínas de la coagulación. En la industria de suplementos alimenticios y alimentos fortificados, la cuantificación precisa de estos analitos es crítica para cumplir con las especificaciones de etiquetado y las regulaciones de la NOM-051-SCFI/SSA1.

Tradicionalmente, la determinación de vitaminas liposolubles se ha realizado mediante cromatografía líquida de alta resolución con detección UV (HPLC-UV). Sin embargo, esta técnica presenta limitaciones importantes: baja sensibilidad para vitamina D (especialmente D₂ y D₃ a niveles traza en alimentos), coeluciones con la matriz lipídica, y falta de selectividad para confirmar la identidad de cada analito. La cromatografía líquida acoplada a espectrometría de masas en tándem (LC-MS/MS) ha emergido como la técnica de referencia para superar estas limitaciones, ofreciendo selectividad inequívoca mediante monitoreo de reacciones múltiples (MRM) y sensibilidad en el orden de partes por billón (ppb).

En este artículo se describe un método LC-MS/MS validado para la cuantificación simultánea de vitaminas A (retinol, acetato y palmitato), D₂ (ergocalciferol), D₃ (colecalciferol), E (α-tocoferol, α-tocoferil acetato) y K₁ (filoquinona) en suplementos alimenticios y alimentos fortificados.

## Preparación de muestras

La naturaleza lipofílica de estos analitos requiere un pretratamiento que libere las vitaminas de la matriz y elimine interferentes lipídicos. El procedimiento general consta de tres etapas:

### Saponificación

Se pesan 2.0 ± 0.1 g de muestra homogeneizada en un tubo de centrífuga de 50 mL. Se añaden 10 mL de etanol absoluto, 2 mL de solución de hidróxido de potasio al 50 % (p/v) y 100 µL de solución de antioxidante (BHT al 0.1 % en etanol). La mezcla se agita en vórtex y se incuba a 60 °C durante 30 minutos en baño de agua con agitación ocasional. La saponificación hidroliza los triglicéridos y libera las vitaminas esterificadas (particularmente acetato de retinol y succinato de α-tocoferol), facilitando su extracción posterior.

### Extracción líquido-líquido

Después de la saponificación, la mezcla se enfría a temperatura ambiente y se añaden 10 mL de agua destilada. La extracción se realiza con 15 mL de hexano:éter etílico (1:1, v/v) agitando vigorosamente durante 2 minutos. Se centrifuga a 3000 rpm durante 5 minutos y se recupera la fase orgánica superior. La extracción se repite dos veces más con 10 mL de la mezcla de solventes. Los extractos orgánicos combinados se lavan con 10 mL de agua destilada y se secan con sulfato de sodio anhidro.

### Evaporación y reconstitución

El extracto se evapora a sequedad en rotavapor a 40 °C o bajo corriente de nitrógeno. El residuo se reconstituye en 1.0 mL de metanol, se filtra a través de una membrana de 0.22 µm y se transfiere a un vial de LC-MS/MS para su análisis.

## Condiciones cromatográficas y espectrométricas

### Cromatografía líquida

| Parámetro | Condición |
|---|---|
| Columna | C18, 100 × 2.1 mm, 1.7 µm |
| Fase móvil A | Agua con formiato de amonio 5 mM |
| Fase móvil B | Metanol con formiato de amonio 5 mM |
| Gradiente | 0 min: 70 % B; 3 min: 95 % B; 8 min: 95 % B; 8.5 min: 70 % B; 10 min: 70 % B |
| Flujo | 0.3 mL/min |
| Temperatura de columna | 40 °C |
| Volumen de inyección | 5 µL |
| Tiempo de corrida | 10 min |

### Parámetros MRM

La detección se realiza en modo de ionización por electrospray positivo (ESI+) con monitoreo de dos transiciones MRM por analito (cuantificador y cualificador).

| Vitamina | Ion precursor (m/z) | Ion producto cuantificador (m/z) | Ion producto cualificador (m/z) | CE (eV) |
|---|---|---|---|---|
| Retinol (A) | 269.4 | 93.1 | 119.1 | 20 |
| Acetato de retinol (A) | 328.5 | 269.3 | 93.1 | 15 |
| Palmitato de retinol (A) | 524.9 | 269.3 | 93.1 | 25 |
| Ergocalciferol (D₂) | 397.6 | 379.4 | 271.3 | 15 |
| Colecalciferol (D₃) | 401.6 | 383.4 | 257.3 | 15 |
| α-Tocoferol (E) | 473.7 | 255.3 | 165.1 | 25 |
| α-Tocoferil acetato (E) | 472.7 | 430.4 | 165.1 | 20 |
| Filoquinona (K₁) | 451.6 | 187.1 | 227.1 | 30 |

CE: energía de colisión.

## Ventajas sobre HPLC-UV

La principal ventaja de LC-MS/MS frente a HPLC-UV radica en la **selectividad**. Mientras que un detector UV registra todas las especies que absorben a una longitud de onda determinada, el MRM aísla una relación masa/carga específica para el precursor y su fragmento característico, eliminando virtualmente cualquier interferencia de la matriz. Esto es particularmente relevante para la vitamina D en matrices complejas como leches fortificadas, fórmulas infantiles y cereales.

En términos de **sensibilidad**, el LC-MS/MS alcanza límites de detección (LOD) entre 0.1 y 5 ng/mL para estos analitos, de 10 a 100 veces menores que los obtenidos por HPLC-UV. Esto permite cuantificar vitamina D₃ a niveles de fortificación típicos (1 µg/100 g en alimentos).

Además, LC-MS/MS proporciona **confianza analítica** mediante la relación de abundancia de las dos transiciones MRM, que confirma inequívocamente la identidad del analito —un requisito en métodos confirmatorios según la guía EURACHEM.

## Validación del método

El método fue validado siguiendo los lineamientos de la Guía Eurachem y el protocolo de la FDA para métodos bioanalíticos.

### Linealidad

Se prepararon curvas de calibración con 8 niveles (rango: 0.5 – 500 ng/mL). Todos los analitos presentaron coeficientes de determinación R² > 0.999.

### Límites de detección y cuantificación

| Vitamina | LOD (ng/mL) | LOQ (ng/mL) |
|---|---|---|
| A (retinol) | 0.5 | 1.5 |
| D₃ | 0.2 | 0.5 |
| E (α-tocoferol) | 1.0 | 3.0 |
| K₁ | 0.3 | 1.0 |

### Precisión y exactitud

La precisión intra-día (n = 6) e inter-día (n = 6, 3 días) se evaluó a tres niveles de concentración (bajo, medio, alto). Los coeficientes de variación (CV) fueron inferiores al 15 % en todos los casos.

La exactitud se determinó mediante análisis de un material de referencia certificado (SRM 1849a — Infant/Adult Nutritional Formula, NIST) con recuperaciones entre 92 % y 105 %.

## Aplicación a matrices reales

El método se aplicó exitosamente a cinco matrices representativas:

1. **Suplemento multivitamínico en tableta** — cuantificación de retinol, α-tocoferol y D₃
2. **Leche entera fortificada** — determinación de vitaminas A y D₃ a niveles traza
3. **Fórmula infantil en polvo** — perfil completo de vitaminas A, D₃, E y K₁
4. **Cereal de desayuno fortificado** — cuantificación de palmitato de retinol y α-tocoferil acetato
5. **Aceite de hígado de bacalao** — perfil de vitaminas A y D₃ en matriz lipídica concentrada

En todos los casos, la recuperación de los analitos estuvo dentro del rango 85–110 % y la relación de transiciones cualificador/cuantificador coincidió dentro del ±20 % con respecto al estándar, confirmando la identidad de cada vitamina.

## Conclusión

El método LC-MS/MS presentado ofrece una solución robusta, selectiva y sensible para la determinación simultánea de vitaminas liposolubles en suplementos y alimentos fortificados. Su capacidad para cuantificar estos analitos en un amplio rango de concentraciones y matrices lo convierte en la herramienta ideal para laboratorios de control de calidad, desarrollo de productos y cumplimiento normativo en la industria alimenticia.

En **Solinsa** somos expertos en instrumentación analítica y cromatografía. Contáctanos para recibir asesoría personalizada, cotización de equipos, refacciones o soporte técnico. Visítanos en solinsa.com.
