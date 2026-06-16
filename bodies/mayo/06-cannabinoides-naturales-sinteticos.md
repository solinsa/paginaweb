---
title: "Control de Calidad de Extractos de Cannabis: Cannabinoides Naturales vs. Sintéticos"
published: 2026-05-16
slug: calidad-extractos-cannabis-naturales-sinteticos
category: cat-ind-cannabis
tags:
  - cannabis
  - cannabinoides
  - THC
  - CBD
  - LC-MS/MS
  - extractos
  - sintéticos
  - control de calidad
audience:
  - T1-Industria
lang: es-MX
wordcount: ~1500
---

## Introducción

El mercado de cannabinoides ha experimentado una expansión sin precedentes en los últimos años. Junto con los extractos tradicionales de Cannabis sativa —que contienen el perfil completo de cannabinoides naturales— han emergido compuestos semisintéticos como delta-8 THC, HHC, THC-O y THCV, así como cannabinoides sintéticos diseñados en laboratorio (SPICE, K2). Para un laboratorio de control de calidad, el reto ya no es solo cuantificar los cannabinosos mayoritarios, sino **identificar y distinguir inequívocamente** compuestos naturales, semisintéticos y sintéticos en una misma matriz.

En México, la regulación de COFEPRIS ha comenzado a delinear los requisitos analíticos para productos de cannabis, pero la velocidad de innovación en el mercado —particularmente la proliferación de cannabinoides semisintéticos no declarados— supera con frecuencia la capacidad de respuesta regulatoria. La cromatografía líquida acoplada a espectrometría de masas en tándem (LC-MS/MS) se ha consolidado como la técnica de referencia para este desafío.

## Clasificación de Cannabinoides

### Naturales (Fitocannabinoides)

Los cannabinoides naturales son aquellos sintetizados directamente por la planta de Cannabis sativa. Los más abundantes son el ácido cannabigerólico (CBGA), precursor biosintético del THCA, CBDA y CBCA. Tras descarboxilación —térmica o por envejecimiento— se obtienen las formas neutras activas: THC, CBD y CBC.

### Semisintéticos

Se producen por modificación química de cannabinoides naturales. Ejemplos representativos:

- **Delta-8 THC:** Isómero del delta-9 THC, con doble enlace en la posición 8 del anillo ciclohexenilo. Se produce por isomerización ácida del CBD o delta-9 THC. Presenta menor potencia psicoactiva pero se comercializa ampliamente en productos "legales".
- **HHC (Hexahidrocannabinol):** Producto de la hidrogenación del THC. Es estable frente a oxidación y degradación UV, lo que prolonga su vida útil.
- **THC-O (THC acetato):** Éster acetato del THC, con mayor biodisponibilidad oral. Clasificado como profármaco.
- **THCV (Tetrahidrocannabivarina):** Análogo propílico del THC, presente en trazas en algunas variedades, pero que también se produce sintéticamente para uso comercial.

### Sintéticos (Canabinoides de Diseño)

Son moléculas creadas íntegramente en laboratorio, sin equivalente en la planta. Surgieron originalmente como herramientas de investigación farmacológica para estudiar el sistema endocannabinoide, pero se desviaron hacia el mercado recreativo ("Spice", "K2"). Ejemplos: JWH-018, JWH-073, CP-47,497 y HU-210. Estos compuestos actúan como agonistas completos del receptor CB1, con potencias que pueden superar 100× la del delta-9 THC.

## Metodología LC-MS/MS para Cannabinoides

### Configuración Cromatográfica

La separación de cannabinoides requiere fases estacionarias diseñadas para compuestos moderadamente apolares con grupos ácidos y fenólicos:

| Parámetro | Condición recomendada | Fundamento |
|-----------|----------------------|------------|
| Columna | C18 modificada (2.6 µm, 100 × 2.1 mm) | Alta eficiencia para compuestos de polaridad media |
| Fase móvil A | Agua + 0.1% ácido fórmico + 2 mM acetato de amonio | Supresión de ionización y control de forma de pico |
| Fase móvil B | Metanol + 0.1% ácido fórmico + 2 mM acetato de amonio | Elución de cannabinoides neutros y ácidos |
| Gradiente | 55–95% B en 12 min | Separación de isómeros (delta-8 vs delta-9 THC) |
| Flujo | 0.3–0.4 mL/min | Compatibilidad con fuente ESI |
| Temperatura | 40 °C | Reproducibilidad de tiempos de retención |

### Modo MRM (Multiple Reaction Monitoring)

La espectrometría de masas en tándem opera en modo MRM, donde el primer cuadrupolo (Q1) selecciona el ion precursor [M+H]⁺, el segundo (q2) lo fragmenta por colisión con argón o nitrógeno, y el tercero (Q3) monitorea el ion producto característico. Cada cannabinoide se identifica por dos transiciones: una cuantitativa y otra cualitativa (confirmatoria).

## Tabla de Cannabinoides con Tiempos de Retención e Iones MRM

| Cannabinoide | Fórmula molecular | Origen | TR relativo* | Precursor (m/z) | Producto cuant. (m/z) | Producto cual. (m/z) |
|-------------|------------------|--------|-------------|-----------------|----------------------|----------------------|
| CBDA | C₂₂H₃₀O₄ | Natural | 0.55 | 359.2 | 341.2 | 245.1 |
| CBD | C₂₁H₃₀O₂ | Natural | 0.62 | 315.2 | 193.1 | 259.2 |
| CBGA | C₂₂H₃₂O₄ | Natural | 0.58 | 361.2 | 343.2 | 317.2 |
| CBG | C₂₁H₃₂O₂ | Natural | 0.65 | 317.2 | 193.1 | 259.2 |
| THCA | C₂₂H₃₀O₄ | Natural | 0.78 | 359.2 | 341.2 | 245.1 |
| Delta-9 THC | C₂₁H₃₀O₂ | Natural | 0.85 | 315.2 | 193.1 | 259.2 |
| Delta-8 THC | C₂₁H₃₀O₂ | Semisintético | 0.90 | 315.2 | 193.1 | 259.2 |
| THCV | C₁₉H₂₆O₂ | Natural/Semisintético | 0.72 | 287.2 | 165.1 | 231.2 |
| HHC | C₂₁H₃₂O₂ | Semisintético | 0.88 | 317.2 | 193.1 | 249.2 |
| THC-O | C₂₃H₃₂O₃ | Semisintético | 0.92 | 357.2 | 315.2 | 193.1 |
| CBN | C₂₁H₂₆O₂ | Natural (degradación) | 0.80 | 311.2 | 223.1 | 293.2 |
| JWH-018 | C₂₄H₂₃NO | Sintético | 0.95 | 342.2 | 155.0 | 127.0 |
| JWH-073 | C₂₃H₂₁NO | Sintético | 0.91 | 328.2 | 155.0 | 127.0 |
| CP-47,497 | C₂₁H₃₄O₂ | Sintético | 0.96 | 319.3 | 301.3 | 173.1 |

*Tiempo de retención relativo a delta-9 THC (rango 0–1).

> **Nota importante:** Delta-8 THC y delta-9 THC comparten la misma masa exacta (m/z 315.2 → 193.1), por lo que su diferenciación depende exclusivamente de la resolución cromatográfica. Una columna con selectividad adecuada debe proporcionar Rs > 1.5 entre ambos picos.

## Perfiles Cromatográficos Característicos

### Extracto de Planta Completa (Full Spectrum)

Un extracto full spectrum presenta un cromatograma complejo con más de 20 picos, incluyendo las formas ácidas (THCA, CBDA, CBGA), sus correspondientes formas neutras, y cannabinoides minoritarios como CBC, CBN y THCV. La relación entre picos es característica de la variedad genética y el método de extracción.

### Aislado Sintético

Un aislado de cannabinoide sintético —por ejemplo, delta-8 THC producido por isomerización— debe mostrar un solo pico mayoritario (>95% de área). Sin embargo, es frecuente encontrar subproductos de reacción como:

- Delta-9 THC residual (isomerización incompleta)
- Delta-10 THC (reordenamiento del doble enlace)
- Iso-THC (isómero exocíclico)
- Oligómeros y productos de deshidratación

La presencia de estos subproductos por encima de ciertos umbrales puede constituir evidencia de síntesis química y, por tanto, ser relevante para la clasificación regulatoria del producto.

## Identificación de Adulterantes y Productos No Declarados

Un problema creciente en el mercado latinoamericano es la presencia de cannabinoides sintéticos no declarados en productos etiquetados como naturales. El LC-MS/MS en modo MRM —con una lista amplia de transiciones para compuestos conocidos— permite la detección simultánea de múltiples adulterantes en una sola inyección de 15 minutos.

Escenarios comunes de adulteración:

1. **Aceites "full spectrum" que contienen delta-8 THC sin declarar:** Se detecta por la relación entre delta-9 THC y delta-8 THC, anormalmente sesgada hacia el isómero delta-8.
2. **Productos con potencia inflada mediante adición de HHC:** El HHC no es naturalmente abundante (>1%) en ninguna variedad de Cannabis; su presencia a niveles cuantificables indica adición externa.
3. **Vapes contaminados con JWH-018 o JWH-073:** Estos agonistas sintéticos son 10–100× más potentes que el THC y se detectan a concentraciones sub-ng/mL.

## Límites de Detección y Cuantificación

La sensibilidad del LC-MS/MS para cannabinoides es excepcional. Con una instrumentación moderna y condiciones optimizadas:

| Parámetro | Cannabinoides naturales | Cannabinoides sintéticos |
|-----------|------------------------|--------------------------|
| LOD (S/N > 3) | 0.1–0.5 ng/mL | 0.05–0.2 ng/mL |
| LOQ (S/N > 10, sesgo < 20%) | 0.5–2.0 ng/mL | 0.2–1.0 ng/mL |
| Linealidad (R²) | >0.998 (0.5–500 ng/mL) | >0.997 (0.2–200 ng/mL) |
| Precisión intra-día (CV%) | <5% | <7% |
| Precisión inter-día (CV%) | <10% | <12% |

> Estos niveles de sensibilidad permiten la detección de cannabinoides sintéticos incluso en productos declarados como "libres de THC", donde las concentraciones traza pueden ser indicativas de contaminación cruzada o adulteración intencional.

## Conclusión

La diferenciación entre cannabinoides naturales, semisintéticos y sintéticos mediante LC-MS/MS es una capacidad analítica indispensable para cualquier laboratorio que ofrezca control de calidad de productos de cannabis. La combinación de separación cromatográfica de alta resolución (C18 modificada, fase móvil ácida) con detección por MS/MS en modo MRM proporciona la selectividad y sensibilidad necesarias para identificar más de 15 cannabinoides en una sola corrida, detectar adulterantes no declarados y generar evidencia robusta para fines regulatorios.

En Solinsa ofrecemos sistemas LC-MS/MS completos con columnas optimizadas para cannabinoides, estándares certificados, y asistencia técnica especializada en el desarrollo y validación de métodos. Nuestros especialistas en aplicaciones le ayudarán a configurar las transiciones MRM, optimizar su gradiente cromatográfico e implementar el control de calidad de acuerdo con los lineamientos de COFEPRIS. Solicite una demostración en su laboratorio.
