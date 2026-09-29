---
title: "Perfil Completo de Cannabinoides y Terpenos en Cannabis por LC-MS/MS"
published: 2026-03-11
category: cat-ind-cannabis
tags: [LC-MS/MS, cannabinoides, terpenos, cannabis, potencia]
audience: [T1-Cannabis]
lang: es-MX
wordcount: ~1500
---

## Introducción

La industria del cannabis medicinal y de uso adulto ha experimentado un crecimiento sin precedentes a nivel global, acompañado de una creciente demanda de **análisis de potencia y pureza** que garanticen productos seguros, consistentes y correctamente etiquetados. El análisis del **perfil completo de cannabinoides** (neutros y ácidos) y de **terpenos** es hoy un requisito indispensable en los mercados regulados, desde América del Norte hasta Europa y América Latina.

La **cromatografía de líquidos acoplada a espectrometría de masas en tándem (LC-MS/MS)** se ha posicionado como la técnica de referencia para la cuantificación simultánea de estos compuestos, superando las limitaciones de la cromatografía de gases (donde los cannabinoides ácidos requieren derivatización) y ofreciendo la sensibilidad necesaria para detectar trazas de cannabinoides minoritarios y terpenos a niveles de partes por millón.

En este artículo presentamos una guía técnica detallada para el análisis de cannabinoides y terpenos por LC-MS/MS, cubriendo desde la preparación de muestra hasta los parámetros MRM y la interpretación de resultados en el contexto regulatorio.

## Cannabinoides: clasificación y propiedades

Los cannabinoides son compuestos terpenofenólicos producidos por la planta de *Cannabis sativa* L. Se clasifican en:

### Cannabinoides neutros y ácidos

| Cannabinoide | Abreviatura | Fórmula | PM (g/mol) | Propiedades principales |
|-------------|-------------|---------|------------|------------------------|
| Δ⁹-Tetrahidrocannabinol | THC | C₂₁H₃₀O₂ | 314.46 | Psicoactivo, analgésico, antiemético |
| Cannabidiol | CBD | C₂₁H₃₀O₂ | 314.46 | No psicoactivo, ansiolítico, antiinflamatorio |
| Cannabigerol | CBG | C₂₁H₃₂O₂ | 316.48 | No psicoactivo, antibacteriano |
| Cannabichromeno | CBC | C₂₁H₃₀O₂ | 314.46 | No psicoactivo, antiinflamatorio |
| Cannabinol | CBN | C₂₁H₂₆O₂ | 310.43 | Levemente psicoactivo, sedante |
| Δ⁸-Tetrahidrocannabinol | Δ⁸-THC | C₂₁H₃₀O₂ | 314.46 | Psicoactivo (menor que Δ⁹-THC) |
| Tetrahidrocannabivarina | THCV | C₁₉H₂₆O₂ | 286.41 | Psicoactivo, supresor del apetito |
| Cannabidivarina | CBDV | C₁₉H₂₆O₂ | 286.41 | No psicoactivo, anticonvulsivante |

### Cannabinoides ácidos

Los cannabinoides se biosintetizan en la planta en su forma ácida, que es precursora de los cannabinoides neutros:

| Ácido cannabinoide | Abreviatura | Fórmula | PM (g/mol) | Precursor de |
|--------------------|-------------|---------|------------|--------------|
| Ácido tetrahidrocannabinólico | THCA | C₂₂H₃₀O₄ | 358.47 | THC |
| Ácido cannabidiólico | CBDA | C₂₂H₃₀O₄ | 358.47 | CBD |
| Ácido cannabigerólico | CBGA | C₂₂H₃₂O₄ | 360.49 | CBG, THCA, CBDA, CBCA |
| Ácido cannabicroménico | CBCA | C₂₂H₃₀O₄ | 358.47 | CBC |
| Ácido cannabinólico | CBNA | C₂₁H₂₆O₄ | 342.43 | CBN |

> "En la planta fresca, los cannabinoides ácidos representan más del 90% del contenido total de cannabinoides. La descarboxilación térmica (calentamiento) convierte los ácidos en sus formas neutras, activando la psicoactividad en el caso del THCA → THC."

## Terpenos mayoritarios en cannabis

Los terpenos son hidrocarburos aromáticos responsables del aroma y sabor del cannabis, pero también contribuyen a los efectos terapéuticos a través del **efecto séquito (entourage effect)** —la sinergia entre cannabinoides y terpenos que modula la respuesta farmacológica.

| Terpeno | Fórmula | PM (g/mol) | Aroma característico | Propiedades | Abundancia típica (% peso seco) |
|---------|---------|------------|----------------------|-------------|---------------------------------|
| Mirceno | C₁₀H₁₆ | 136.23 | Terroso, clavo, herbal | Sedante, analgésico | 0.1 - 3.0% |
| Limoneno | C₁₀H₁₆ | 136.23 | Cítrico, limón | Ansiolítico, antidepresivo | 0.01 - 1.5% |
| β-Cariofileno | C₁₅H₂₄ | 204.35 | Pimienta negra, especiado | Antiinflamatorio, analgésico | 0.01 - 1.0% |
| Linalool | C₁₀H₁₈O | 154.25 | Floral, lavanda | Ansiolítico, sedante | 0.01 - 0.5% |
| α-Pineno | C₁₀H₁₆ | 136.23 | Pino, bosque | Antiinflamatorio, broncodilatador | 0.01 - 0.8% |
| Humuleno | C₁₅H₂₄ | 204.35 | Lúpulo, terroso | Supresor del apetito | 0.01 - 0.5% |
| α-Bisabolol | C₁₅H₂₆O | 222.37 | Floral, manzanilla | Antiinflamatorio | < 0.1% |
| Terpinoleno | C₁₀H₁₆ | 136.23 | Pino, herbal, cítrico | Antioxidante | 0.01 - 0.5% |
| Δ³-Careno | C₁₀H₁₆ | 136.23 | Pino, cedro | Antiinflamatorio | 0.01 - 0.3% |
| Nerolidol | C₁₅H₂₆O | 222.37 | Floral, cítrico, manzana | Sedante | < 0.1% |

## Preparación de muestra

La preparación de muestra es una etapa crítica que determina la precisión y reproducibilidad del análisis.

### Extracción por solvente

Es el método más extendido por su simplicidad y eficiencia:

1. **Pesada**: 100-500 mg de flor seca molida o 50-100 mg de extracto/concentrado.
2. **Adición de estándar interno**: THC-d₃, CBD-d₃, o 5-fluoro-APINACA (para cannabinoides); limoneno-d₃ o mirceno-d₃ (para terpenos).
3. **Solvente de extracción**: Metanol, etanol, acetonitrilo o una mezcla metanol:cloroformo (9:1). Para cannabinoides, el metanol es el solvente más utilizado. Para terpenos, se prefiere hexano o acetato de etilo.
4. **Agitación/vortex**: 5-10 minutos a temperatura ambiente.
5. **Centrifugación**: 10 minutos a 4000-6000 rpm.
6. **Dilución y filtración**: Dilución del sobrenadante 1:10 a 1:1000 (según la concentración esperada) y filtración por membrana de 0.22 µm o 0.45 µm.

### Extracción por ultrasonido

Ofrece ventajas en rendimiento de extracción y tiempo:

> "La extracción asistida por ultrasonido (UAE) ha demostrado rendimientos de extracción entre un 5% y un 15% superiores a la extracción por agitación mecánica para cannabinoides, particularmente para CBDA y THCA, gracias a la cavitación que rompe las paredes celulares de los tricomas glandulares."

| Parámetro | Extracción por solvente (agitación) | Extracción por ultrasonido |
|-----------|------------------------------------|----------------------------|
| Tiempo de extracción | 10-30 min | 5-15 min |
| Temperatura | Ambiente | Ambiente (controlar < 40 °C) |
| Rendimiento THCA | 90-95% | 95-100% |
| Rendimiento terpenos | 80-90% | 85-95% (riesgo de pérdida si T > 40 °C) |
| Reproducibilidad | Buena (RSD 3-8%) | Excelente (RSD 2-5%) |
| Costo de equipo | Bajo | Moderado |

## Condiciones cromatográficas para LC-MS/MS

### Columna y fase móvil

La separación de cannabinoides y terpenos por LC-MS/MS se realiza típicamente en **columnas C18** con fase móvil ácida:

| Parámetro | Condición típica |
|-----------|------------------|
| **Columna** | C18, 100 × 2.1 mm, 1.7-1.9 µm (UPLC) o 150 × 3.0 mm, 2.7 µm (core-shell) |
| **Fase móvil A** | Agua + 0.1% ácido fórmico (o 5 mM formiato de amonio, pH 3.0) |
| **Fase móvil B** | Metanol + 0.1% ácido fórmico (o acetonitrilo para algunos métodos) |
| **Gradiente** | 60-95% B en 8-15 min |
| **Flujo** | 0.2 - 0.4 mL/min |
| **Temperatura de columna** | 40-50 °C |
| **Volumen de inyección** | 1-5 µL |
| **Tiempo total de corrida** | 10-20 min (incluyendo re-equilibración) |

### Parámetros MRM (Multiple Reaction Monitoring)

La detección por MS/MS en modo MRM ofrece la máxima selectividad y sensibilidad. A continuación se presentan las transiciones MRM típicas para los cannabinoides y terpenos más importantes:

| Compuesto | Ion precursor (m/z) | Ion producto — cuant. (m/z) | Ion producto — conf. (m/z) | CE típico (eV) | Polaridad |
|-----------|-------------------|----------------------------|----------------------------|----------------|-----------|
| THCA | 357.2 | 313.2 | 245.1 | 20-25 | Positiva |
| CBDA | 357.2 | 313.2 | 245.1 | 20-25 | Positiva |
| CBGA | 359.2 | 315.2 | 191.1 | 20-25 | Positiva |
| THC | 315.2 | 193.1 | 123.1 | 25-30 | Positiva |
| CBD | 315.2 | 193.1 | 259.2 | 25-30 | Positiva |
| CBG | 317.2 | 193.1 | 259.2 | 25-30 | Positiva |
| CBN | 311.2 | 223.1 | 195.1 | 25-30 | Positiva |
| CBC | 315.2 | 259.2 | 193.1 | 25-30 | Positiva |
| Mirceno | 137.1 | 81.1 | 93.1 | 10-15 | Positiva |
| Limoneno | 137.1 | 81.1 | 95.1 | 10-15 | Positiva |
| β-Cariofileno | 205.2 | 149.1 | 133.1 | 10-15 | Positiva |
| Linalool | 137.1 | 81.1 | 95.1 | 10-15 | Positiva |
| α-Pineno | 137.1 | 81.1 | 121.1 | 10-15 | Positiva |

> "Nota: THCA, CBDA y CBGA comparten la misma transición precursora → producto (357.2 → 313.2) pero se separan cromatográficamente por sus diferentes tiempos de retención en columna C18. Lo mismo ocurre con THC y CBD (315.2 → 193.1). La separación cromatográfica es indispensable para estos isómeros."

## Requisitos de etiquetado de potencia en mercados regulados

El etiquetado correcto de productos de cannabis es un requisito legal en todas las jurisdicciones que han regulado su uso:

### Parámetros típicos requeridos en la etiqueta

- **Contenido total de THC**: (% THC + 0.877 × % THCA) — el factor 0.877 corrige la pérdida del grupo carboxilo (-COOH, PM 44) durante la descarboxilación.
- **Contenido total de CBD**: (% CBD + 0.877 × % CBDA).
- **Cannabinoides totales**: suma de todos los cannabinoides cuantificados.
- **Relación THC:CBD**: parámetro importante para clasificar variedades (Type I: THC-dominante, Type II: balanceado, Type III: CBD-dominante).
- **Contenido de terpenos totales**: expresión en % peso/peso.
- **Perfil de terpenos**: opcional en algunos mercados, obligatorio en otros (como California y Oregón).

### Ejemplo de cálculo de THC total

```
THC total (%) = THC (%) + (THCA (%) × 0.877)

THC en muestra: 1.2%
THCA en muestra: 15.8%
THC total = 1.2 + (15.8 × 0.877) = 1.2 + 13.86 = 15.06%
```

> "El error más común en laboratorios noveles es reportar solo el THC neutro como 'potencia', subestimando drásticamente el contenido psicoactivo real del producto. En flor fresca no descarboxilada, el THCA puede representar más del 90% del THC total."

## El efecto séquito (entourage effect) y su correlación analítica

El **efecto séquito** postula que los cannabinoides y terpenos actúan de manera sinérgica, modulando mutuamente sus efectos farmacológicos. Algunas interacciones documentadas incluyen:

| Combinación | Efecto reportado | Mecanismo propuesto |
|------------|------------------|---------------------|
| THC + Mirceno | Mayor sedación y analgesia | El mirceno aumenta la permeabilidad de la barrera hematoencefálica al THC |
| CBD + Limoneno | Mayor efecto ansiolítico | El limoneno aumenta la biodisponibilidad del CBD |
| THC + β-Cariofileno | Mayor analgesia con menor psicoactividad | El β-cariofileno actúa como agonista CB2 selectivo |
| CBD + Linalool + β-Cariofileno | Efecto antidepresivo sinergético | Activación de receptores 5-HT1A y CB2 |

Para los laboratorios, esto implica que el reporte analítico no debe limitarse a la cuantificación individual de compuestos, sino que debe incluir el **perfil completo** que permita a los productores y consumidores comprender las interacciones potenciales del producto.

En Solinsa ofrecemos soluciones completas de LC-MS/MS para el análisis de cannabinoides y terpenos en cannabis, incluyendo columnas C18 de alta eficiencia, estándares certificados con trazabilidad, y sistemas de cromatografía líquida de última generación acoplados a espectrómetros de masas de triple cuadrupolo. Nuestro equipo de especialistas brinda asesoría técnica para la implementación de métodos conforme a los requisitos regulatorios de COFEPRIS y las normas internacionales, así como programas de validación y capacitación para tu laboratorio. Contáctenos en www.solinsa.com para conocer nuestras soluciones para la industria del cannabis.
