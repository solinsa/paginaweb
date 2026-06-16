---
title: "Estudios de Estabilidad de Fármacos según USP y Guías ICH: Papel de la Cromatografía Líquida"
published: 2026-03-02
category: cat-ind-farma
tags: [HPLC, estabilidad, USP, ICH, farmacéutica]
audience: [T1-Farmacéutica]
lang: es-MX
wordcount: ~1500
---

## Introducción

Los **estudios de estabilidad** representan uno de los pilares fundamentales en el desarrollo y la manufactura de productos farmacéuticos. Sin ellos, es imposible garantizar que un medicamento mantenga su potencia, pureza y calidad a lo largo de su vida útil. La **cromatografía de líquidos de alta eficiencia (HPLC)** acoplada a detectores de arreglo de diodos (DAD) o de fotodiodos (PDA) se ha consolidado como la técnica analítica de referencia para la realización de estos estudios, gracias a su capacidad para separar, identificar y cuantificar principios activos (API) y sus productos de degradación de manera simultánea.

Las guías de la **Conferencia Internacional de Armonización (ICH)** —particularmente la **ICH Q1A(R2)** — y los capítulos generales de la **Farmacopea de los Estados Unidos (USP)** establecen los lineamientos que todo laboratorio farmacéutico debe seguir para diseñar, ejecutar y reportar estudios de estabilidad. En este artículo exploramos las metodologías HPLC-PDA/DAD aplicadas a estos estudios, las condiciones de estrés forzado, la validación de métodos indicadores de estabilidad (SIM) y la interpretación de resultados conforme a la farmacopea.

## Marco regulatorio: ICH Q1A(R2) y USP

### ICH Q1A(R2): Estabilidad de nuevos principios activos y medicamentos

La guía **ICH Q1A(R2)** *Stability Testing of New Drug Substances and Products* es el documento normativo más relevante a nivel internacional para el diseño de estudios de estabilidad. Establece los siguientes tipos de estudio:

- **Estudios de estabilidad a largo plazo**: condiciones de almacenamiento recomendadas (25 °C / 60% HR o 30 °C / 65% HR) con muestreo en intervalos definidos (0, 3, 6, 9, 12, 18, 24, 36 meses).
- **Estudios de estabilidad acelerada**: condiciones más severas (40 °C / 75% HR) durante un mínimo de 6 meses para predecir la cinética de degradación.
- **Estudios de estabilidad intermedia**: 30 °C / 65% HR cuando se observan cambios significativos en condiciones aceleradas.
- **Estudios de fotodegradación**: según ICH Q1B, exposición a luz visible y UV siguiendo las opciones 1 y 2 de la guía.
- **Estudios de estrés forzado (forced degradation)**: condiciones extremas para identificar la ruta de degradación primaria del API.

### USP <671> y <1150>: Contenedores y estabilidad

La USP dedica capítulos específicos al tema. El capítulo **USP <671>** *Containers — Performance Testing* regula los materiales de empaque y su efecto en la estabilidad. El **USP <1150>** *Pharmaceutical Stability* proporciona directrices generales para la interpretación de datos de estabilidad.

> "Un estudio de estabilidad no concluye en el laboratorio; concluye cuando los datos generados demuestran, con respaldo estadístico, que el producto mantiene sus especificaciones durante todo su periodo de vida útil."

## Métodos indicadores de estabilidad (SIM) por HPLC

Un **método indicador de estabilidad (Stability-Indicating Method, SIM)** es aquel capaz de cuantificar selectivamente el API en presencia de sus productos de degradación, impurezas, excipientes y cualquier otra especie química presente en la matriz. Para desarrollar un SIM por HPLC se requieren las siguientes etapas:

1. **Degradación forzada del API** para generar un perfil de impurezas conocido.
2. **Separación cromatográfica** que resuelva el API de todos los picos de degradación.
3. **Detección selectiva** mediante DAD/PDA que confirme la pureza espectral del pico principal.
4. **Validación** del método conforme a ICH Q2(R1) y USP <1225>.

### Degradación forzada según ICH Q1A(R2)

Las condiciones de estrés deben ser lo suficientemente agresivas para generar entre un 5% y un 20% de degradación del API, sin llegar a degradarlo completamente. A continuación se tabulan las condiciones típicas:

| Condición de estrés | Reactivo/Exposición | Concentración típica | Temperatura | Tiempo |
|---------------------|---------------------|----------------------|-------------|--------|
| Hidrólisis ácida | HCl 0.1 - 1.0 N | 1 mg/mL de API | 60 - 80 °C | 1 - 72 h |
| Hidrólisis alcalina | NaOH 0.1 - 1.0 N | 1 mg/mL de API | 60 - 80 °C | 1 - 72 h |
| Oxidación | H₂O₂ 0.3% - 3.0% | 1 mg/mL de API | Temperatura ambiente | 0.5 - 24 h |
| Térmica (seca) | Estufa | API sólido | 60 - 105 °C | 1 - 14 días |
| Fotólisis | Luz UV/visible (ICH Q1B) | API sólido o solución | Ambiente controlado | Según opción 1 ó 2 |
| Humedad | Cámara de humedad | API sólido | 40 - 80 °C / 75% HR | 1 - 14 días |

Cada condición debe evaluarse por separado y los resultados documentarse con cromatogramas, espectros UV y balances de masa.

## Sistema de adecuación del sistema (System Suitability) según USP

La **USP <621>** *Chromatography* establece los parámetros de **sistema de adecuación (system suitability)** que deben verificarse antes y durante cada corrida analítica. Para estudios de estabilidad donde se busca la separación del API de múltiples productos de degradación, los siguientes parámetros son críticos:

- **Resolución (Rs)**: ≥ 1.5 entre el pico del API y el pico de degradación más cercano. En SIM, se recomienda Rs ≥ 2.0 para mayor confianza.
- **Factor de asimetría (Tailing factor, T)**: ≤ 2.0 para el pico del API.
- **Número de platos teóricos (N)**: ≥ 2000 por metro de columna, aunque depende de la aplicación.
- **Desviación estándar relativa (%RSD)**: ≤ 2.0% para el área del pico del API en inyecciones repetidas (mínimo 5 réplicas). Para estudios de estabilidad con análisis por duplicado en cada punto de tiempo, se recomienda %RSD ≤ 1.0%.

### Ejemplo de prueba de sistema suitability para un SIM

Supongamos un API que se degrada en condiciones ácidas generando tres impurezas (Imp-A, Imp-B, Imp-C). Un método cromatográfico adecuado debe demostrar:

```
Condiciones cromatográficas:
Columna: C18, 150 × 4.6 mm, 3.5 µm
Fase móvil: A: KH₂PO₄ 20 mM pH 3.0; B: ACN
Gradiente: 20% B a 80% B en 30 min
Flujo: 1.0 mL/min
Detección: PDA 220-400 nm
Inyección: 20 µL

Resultados esperados:
- Rs (API - Imp-A) ≥ 2.0
- Rs (Imp-B - Imp-C) ≥ 1.5
- T (API) ≤ 1.5
- %RSD (área API, n=6) ≤ 1.0%
```

## Validación del método indicador de estabilidad

La validación de un SIM sigue los lineamientos de **ICH Q2(R1)** con énfasis especial en los siguientes parámetros:

### Especificidad (Selectividad)

Es el parámetro más crítico en un SIM. Debe demostrarse que el método es selectivo para el API en presencia de:
- Productos de degradación generados en cada condición de estrés.
- Impurezas de proceso conocidas.
- Excipientes de la formulación.
- Posibles impurezas de síntesis.

La pureza de pico mediante DAD (comparación de espectros UV al inicio, máximo y final del pico) es la herramienta principal para confirmar la especificidad.

### Linealidad y rango

Se evalúa con un mínimo de 5 concentraciones del API en el rango de 80% a 120% de la concentración nominal. Para impurezas, el rango debe cubrir desde el límite de reporte hasta el 120% del límite especificado.

| Parámetro | Criterio de aceptación típico |
|-----------|-------------------------------|
| Coeficiente de correlación (r²) | ≥ 0.999 |
| % de desviación del intercepto | ≤ ±2.0% del valor de la respuesta al 100% |
| Residuales | Aleatorios, sin tendencia |

### Precisión y exactitud

- **Repetibilidad**: %RSD ≤ 2.0% para seis determinaciones independientes (n=6) a concentración al 100%.
- **Precisión intermedia**: %RSD ≤ 2.0% entre dos analistas y dos días diferentes.
- **Exactitud**: Recuperación entre 98.0% y 102.0% para el API a tres niveles de concentración (80%, 100%, 120%).

### Límites de detección y cuantificación

Para las impurezas se deben reportar:
- **LOD (Límite de detección)**: señal/ruido ≥ 3, calculado como 3.3 × (σ/S).
- **LOQ (Límite de cuantificación)**: señal/ruido ≥ 10, calculado como 10 × (σ/S), con precisión (%RSD ≤ 20%) y exactitud (±20%) demostradas.

## Estudios de fotodegradación: ICH Q1B

La **ICH Q1B** *Photostability Testing of New Drug Substances and Products* requiere exposición a luz con una fuente que emita en el rango de 320-800 nm. Las especificaciones son:

- **Opción 1**: Lámpara de xenón con filtros que simulan la luz solar (D65/ID65). Exposición de ≥ 1.2 × 10⁶ lux·h y ≥ 200 W·h/m² en el rango UV (320-400 nm).
- **Opción 2**: Combinación de lámpara fluorescente de luz fría blanca y lámpara UV-A (320-400 nm). Misma exposición total.

Los candidatos a degradación por fotólisis suelen ser API con grupos funcionales fotolábiles: nitroaromáticos, N-óxidos, alquenos conjugados, compuestos carbonílicos, entre otros. El análisis por HPLC-DAD permite identificar los fotoproductos formados y cuantificar la pérdida de potencia.

## Monitoreo de estabilidad durante el estudio a largo plazo

Durante un estudio de estabilidad a largo plazo, se analizan muestras en cada punto de tiempo predefinido. Los parámetros evaluados incluyen:

- **Potencia del API** (contenido como % del etiquetado).
- **Productos de degradación** (individuales y totales).
- **pH** (para formas líquidas o semisólidas).
- **Disolución** (para formas sólidas orales).
- **Aspecto físico** (color, olor, textura).
- **Contenido de humedad** (pérdida por secado o Karl Fischer).

El criterio de aceptación típico para potencia es 95.0% - 105.0% del valor etiquetado al inicio del estudio. Degradaciones individuales no deben exceder los límites especificados (comúnmente ≤ 0.5% para impurezas no especificadas y ≤ 1.0-2.0% para impurezas conocidas).

> "Un API que pierde más del 5% de su potencia en condiciones aceleradas (40 °C / 75% HR en 6 meses) probablemente no alcanzará una vida útil de 24 meses en condiciones normales de almacenamiento."

## Manejo de datos y criterios de decisión

Los datos de estabilidad se analizan estadísticamente para determinar la **fecha de vencimiento (expiry date)** . El enfoque estándar es el análisis de regresión lineal del contenido del API versus el tiempo, calculando el intervalo de confianza al 95% para la línea de regresión. La vida útil se define como el tiempo en el cual el límite inferior del intervalo de confianza cruza el límite inferior de la especificación (90.0% del etiquetado para la mayoría de los productos).

En Solinsa contamos con equipos HPLC-PDA/DAD de última generación, columnas cromatográficas especializadas, estándares de referencia certificados y asesoría técnica para el desarrollo y validación de métodos indicadores de estabilidad conforme a USP e ICH. Nuestro equipo de ingenieros químicos te acompaña en cada etapa del estudio, desde el diseño de condiciones de estrés forzado hasta el análisis estadístico de datos de estabilidad. Contáctanos en www.solinsa.com para conocer nuestras soluciones para tu laboratorio farmacéutico.
