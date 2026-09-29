# Análisis de Disolución de Formulaciones Farmacéuticas por HPLC

## Introducción

La prueba de disolución es uno de los ensayos más críticos en el control de calidad de formas farmacéuticas sólidas orales. Su objetivo es medir la velocidad y el grado con que un principio activo se libera del producto y se disuelve en un medio específico bajo condiciones controladas. Cuando se combina con la cromatografía de líquidos de alta eficiencia (HPLC) como método de cuantificación, se obtiene un sistema analítico robusto, sensible y selectivo, capaz de resolver mezclas complejas y cuantificar con precisión incluso concentraciones traza del fármaco.

En la industria farmacéutica mexicana, la Farmacopea de los Estados Unidos Mexicanos (FEUM) y la Farmacopea de los Estados Unidos (USP) son los referentes normativos. Ambas describen con detalle los aparatos, condiciones y criterios de aceptación que deben cumplirse en una prueba de disolución. Este artículo aborda los fundamentos técnicos de los aparatos USP 1 a 4, la integración con muestreo automático y HPLC, la validación del método de disolución, y los criterios de aceptación Q.

---

## Aparatos de Disolución USP (1–4)

La USP reconoce actualmente siete aparatos oficiales; sin embargo, los más empleados en la industria son los primeros cuatro. Cada uno está diseñado para un tipo específico de forma farmacéutica y perfil de liberación. La siguiente tabla resume sus características y aplicaciones principales.

| Aparato USP | Nombre | Forma farmacéutica típica | Agitación | Volumen típico | Aplicaciones |
|---|---|---|---|---|---|
| **Aparato 1** | Canastilla (Basket) | Cápsulas, gránulos, comprimidos de liberación inmediata (IR) y algunos de liberación modificada (MR) | Rotación de canastilla (25–150 rpm) | 500–1000 mL | Primera opción para cápsulas y formas que flotan o se adhieren al fondo del vaso |
| **Aparato 2** | Paleta (Paddle) | Comprimidos IR, MR, comprimidos bucales, formas de liberación retardada | Rotación de paleta (25–150 rpm) | 500–1000 mL | Estándar para la mayoría de comprimidos; puede usar sinkers para evitar flotación |
| **Aparato 3** | Cilindro reciprocante (BioDis / Reciprocating Cylinder) | Formas de liberación prolongada (ER), gránulos, pellets, microesferas | Movimiento vertical de cilindros inmersos (5–40 dpm) | 200–300 mL (variable) | Cambio de medio automático; ideal para perfiles de pH variable y liberación pulsátil |
| **Aparato 4** | Celda de flujo continuo (Flow-Through Cell) | Formas de baja solubilidad, implantes, suspensiones, polvos, nanopartículas | Flujo de medio a través de celda (1–50 mL/min) | Variable (recirculación o flujo abierto) | Condiciones sink mantenidas; excelente para fármacos poco solubles y formas de liberación prolongada |

La **elección del aparato** depende de las propiedades fisicoquímicas del principio activo (solubilidad, estabilidad, tamaño de partícula) y de las características de la forma farmacéutica. Por ejemplo, para cápsulas de gelatina blanda que tienden a flotar, el Aparato 1 (canastilla) es preferible al Aparato 2 (paleta). Para productos de liberación prolongada con perfiles que cruzan diferentes pH fisiológicos, el Aparato 3 (cilindro reciprocante) permite cambiar el medio de disolución de forma automatizada sin intervención del analista.

---

## Muestreo Automático en Pruebas de Disolución

El muestreo manual en pruebas de disolución presenta riesgos significativos: variabilidad en el tiempo de muestreo, pérdida de volumen, exposición del analista a disolventes, y limitación en el número de puntos de la curva de disolución. El **muestreo automático** mitiga estos problemas mediante brazos robóticos o bombas peristálticas que extraen alícuotas en intervalos exactos y las transfieren directamente a viales o al inyector del HPLC.

Las ventajas clave del muestreo automático incluyen:

- **Precisión temporal:** Cada muestra se toma en el tiempo exacto programado, lo que garantiza perfiles de disolución reproducibles.
- **Repetibilidad volumétrica:** Los sistemas automáticos dispensan volúmenes exactos (típicamente 1–5 mL), minimizando la variación en la reposición de medio.
- **Filtración en línea:** El muestreo automático integra filtros (0.45 µm o 0.22 µm) que eliminan partículas no disueltas antes de la inyección al HPLC, evitando obstrucciones en la columna.
- **Integración con HPLC:** Los sistemas modernos permiten el muestreo secuencial de múltiples vasos y la inyección directa al cromatógrafo, reduciendo tiempos de ciclo y error humano.

Un sistema típico de disolución acoplado a HPLC consta de: un baño de disolución con control de temperatura (37 ± 0.5°C), el aparato de disolución (1–4), una bomba de muestreo, un colector de fracciones o inyector automático, y un cromatógrafo HPLC con detector UV-Vis, DAD o de fluorescencia, según las propiedades del analito.

---

## HPLC como Método de Cuantificación

La espectrofotometría UV-Vis directa sigue siendo un método de cuantificación común para pruebas de disolución; sin embargo, presenta limitaciones cuando hay interferencia de excipientes, degradantes o múltiples principios activos. En estos escenarios, el **HPLC** es la técnica de elección.

El HPLC ofrece:

- **Selectividad:** Separa el principio activo de excipientes y productos de degradación mediante la fase estacionaria y la composición de la fase móvil adecuada.
- **Sensibilidad:** Detecta concentraciones en el rango de µg/mL, incluso para fármacos de baja dosis.
- **Precisión y exactitud:** Con un sistema cromatográfico calibrado, la cuantificación por área bajo la curva (AUC) contra un estándar de referencia proporciona resultados altamente confiables.
- **Automatización total:** El acoplamiento directo del muestreador automático de disolución con el HPLC permite correr secuencias completas sin intervención del analista.

**Parámetros cromatográficos típicos para disolución por HPLC:**

- Columna: C18 (150 × 4.6 mm, 5 µm) o equivalentes.
- Fase móvil: Mezcla de buffer (fosfatos, acetatos) y solvente orgánico (acetonitrilo, metanol), usualmente en modo isocrático.
- Flujo: 1.0–2.0 mL/min.
- Detección: UV a la longitud de onda de máxima absorción del analito (λmax).
- Volumen de inyección: 10–100 µL.
- Tiempo de corrida: 5–15 minutos, dependiendo de la retención del analito.

La cuantificación se realiza mediante calibración externa con al menos cinco niveles de concentración, asegurando que la concentración esperada en los puntos de disolución esté dentro del rango lineal del método. El coeficiente de correlación (r²) debe ser ≥ 0.999.

---

## Validación del Método de Disolución

La validación de un método de disolución por HPLC debe cumplir con los lineamientos de la USP <1092> "The Dissolution Procedure: Development and Validation" y la guía ICH Q2(R1). Los parámetros esenciales son:

### 1. Especificidad
El método debe demostrar que no hay interferencia del medio de disolución, los excipientes del placebo ni los productos de degradación en el tiempo de retención del principio activo. Se evalúa inyectando: blanco del medio, placebo, estándar, y muestra de disolución.

### 2. Linealidad
Se evalúa en el rango de concentraciones esperado para la curva de disolución (típicamente de 10% a 150% de la concentración de la etiqueta declarada). El coeficiente de correlación (r²) debe ser ≥ 0.999 y el intercepto debe incluir al cero.

### 3. Precisión
Incluye repetibilidad (mínimo 6 determinaciones al 100% de la concentración objetivo) y precisión intermedia (diferentes días, analistas o equipos). El coeficiente de variación (%CV) debe ser ≤ 2.0% para disolución inmediata y ≤ 5.0% para casos de baja concentración.

### 4. Exactitud
Se determina mediante recuperación, adicionando cantidades conocidas del principio activo al placebo en tres niveles (bajo, medio, alto, por triplicado cada uno). El % de recuperación debe estar entre 98.0% y 102.0%.

### 5. Robustez
Evalúa la susceptibilidad del método ante variaciones deliberadas: cambio de columna (diferente lote o marca), pH de la fase móvil (±0.1 unidades), temperatura de la columna (±2°C), flujo (±10%). Se evalúa el cambio en el tiempo de retención y la resolución cromatográfica.

### 6. Estabilidad de la solución
Las soluciones de disolución deben ser estables durante al menos el tiempo que dure la secuencia analítica (24–48 horas). Se evalúa comparando la respuesta de soluciones almacenadas a temperatura ambiente y a 4°C contra soluciones recién preparadas.

---

## Criterios de Aceptación Q

El criterio de aceptación **Q** es el porcentaje de principio activo disuelto que debe alcanzarse en un tiempo especificado (generalmente 30 o 45 minutos para formas de liberación inmediata). La USP establece varios niveles de prueba:

| Etapa | Muestras analizadas | Criterio |
|---|---|---|
| **S1** | 6 unidades | Cada unidad debe cumplir con Q + 5% (es decir, si Q = 80%, cada unidad debe tener ≥ 85%) |
| **S2** | 6 unidades adicionales | El promedio de las 12 unidades debe ser ≥ Q (80%), y ninguna unidad debe tener menos de Q − 10% (70%) |
| **S3** | 12 unidades adicionales | El promedio de las 24 unidades debe ser ≥ Q (80%), no más de 2 unidades pueden tener menos de Q − 10% (70%), y ninguna unidad puede tener menos de Q − 20% (60%) |

Para **formas de liberación modificada**, la USP especifica puntos de muestreo múltiples (por ejemplo, 1 h, 4 h, 8 h, 12 h) con criterios de aceptación diferentes para cada punto, reflejando el perfil de liberación esperado. Cada punto tiene un valor Q₁, Q₂, Q₃, etc., y el producto debe cumplir simultáneamente todos los puntos para ser aceptado.

**Puntos clave sobre Q:**

- El valor de Q se define en la monografía oficial de cada producto y depende de su perfil de disolución objetivo.
- Para productos de liberación inmediata, Q suele ser 80% disuelto a los 30 o 45 minutos.
- Para productos de liberación retardada (por ejemplo, comprimidos con recubrimiento entérico), se evalúa primero la resistencia en medio ácido (Q típicamente ≤ 10% disuelto a las 2 horas) y luego la liberación en medio amortiguado (Q ≥ 80% a los 45 minutos).
- Para comprimidos de liberación prolongada, se establecen tres puntos: uno temprano (para detectar dosificación prematura), uno intermedio (para verificar el perfil) y uno final (para asegurar la liberación completa).

---

## Consideraciones Finales

La implementación de un método de disolución por HPLC requiere una cuidadosa selección del aparato, condiciones de disolución y parámetros cromatográficos. La validación completa del método —especificidad, linealidad, precisión, exactitud, robustez y estabilidad— es indispensable para garantizar que los resultados sean confiables y defendibles ante las autoridades regulatorias (COFEPRIS, FDA, EMA).

El muestreo automático acoplado a HPLC no solo incrementa la productividad del laboratorio, sino que también reduce significativamente la variabilidad asociada al factor humano, permitiendo perfiles de disolución más precisos y trazables. En un entorno regulatorio cada vez más exigente, la combinación de disolución automatizada con cuantificación por HPLC se ha convertido en el estándar de oro para el control de calidad de formas farmacéuticas sólidas orales.

*En Solinsa, contamos con equipos de disolución USP de última generación, sistemas de muestreo automático y cromatógrafos HPLC con detectores DAD y MS, además de personal capacitado para el desarrollo y validación de métodos de disolución conforme a los lineamientos de la USP y la FEUM. Para más información sobre nuestros servicios analíticos, contáctenos en **info@solinsa.com**.*
