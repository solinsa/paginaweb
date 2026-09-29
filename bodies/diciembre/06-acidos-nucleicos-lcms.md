---
title: "Análisis de Ácidos Nucleicos por LC-MS: Aplicaciones en Terapias Génicas y Biotecnología"
published: 2025-12-18
category: cat-lcms
tags: [LC-MS, ácidos nucleicos, oligonucleótidos, terapias génicas, biotecnología, nucleósidos]
audience: [T1-Academia, T1-Farmacéutica]
lang: es-MX
wordcount: ~1500
---

## Introducción

El análisis de ácidos nucleicos por cromatografía de líquidos acoplada a espectrometría de masas (LC-MS) ha experimentado un crecimiento exponencial impulsado por el desarrollo de terapias génicas, vacunas de ARNm y oligonucleótidos terapéuticos. Desde la caracterización de nucleósidos modificados en ARN terapéutico hasta la cuantificación de oligonucleótidos antisentido en matrices biológicas, LC-MS ofrece la sensibilidad, selectividad y capacidad de identificación estructural que los métodos espectroscópicos tradicionales no pueden proporcionar.

Este artículo describe las estrategias analíticas para el análisis de ácidos nucleicos por LC-MS, incluyendo la separación de nucleósidos, oligonucleótidos y modificaciones epigenéticas.

## Tipos de analitos y desafíos analíticos

| Tipo de analito | Peso molecular | Carga iónica | Desafío principal |
|----------------|---------------|-------------|-------------------|
| Nucleósidos | 200-400 Da | Neutros | Isomería (uridina vs pseudouridina) |
| Nucleótidos | 300-500 Da | -1 a -3 | Polaridad alta, retención pobre en RP |
| Oligonucleótidos (20-60 mer) | 6-20 kDa | -20 a -60 | Múltiples estados de carga, adherencia |
| ARNm (1000+ mer) | 300+ kDa | -1000+ | Degradación, necesita digestión previa |

## Análisis de Nucleósidos y Modificaciones

La reciente explosión en el interés por modificaciones de ARN (especialmente N1-metilpseudouridina en vacunas de ARNm) ha posicionado al LC-MS como el método de referencia para su identificación y cuantificación.

### Preparación de muestra para ARN

1. **Digestión enzimática** del ARN con nucleasa P1 y fosfatasa alcalina.
2. **Incubación** a 37°C por 2 horas.
3. **Filtración** por membrana de 3 kDa para eliminar enzimas.
4. **Inyección directa** en LC-MS.

### Condiciones LC-MS para nucleósidos

| Parámetro | Condición |
|-----------|-----------|
| Columna | C18, 150 × 2.1 mm, 1.7 µm |
| Fase móvil A | Agua con 0.1% ácido fórmico |
| Fase móvil B | Metanol con 0.1% ácido fórmico |
| Gradiente | 2-40% B en 15 minutos |
| Flujo | 0.3 mL/min |
| Temperatura | 30°C |
| MS | Ionización ESI+, full scan + MS/MS (PRM) |

### Modificaciones comunes de ARN

| Modificación | Masa (Da) | TR relativo | Fragmento diagnóstico (m/z) |
|-------------|-----------|-------------|----------------------------|
| Pseudouridina (Ψ) | 244.1 | Similar a U | 179.0 [M+H-Rib]⁺ |
| N1-Metilpseudouridina (m¹Ψ) | 258.1 | > Ψ | 193.1 [M+H-Rib]⁺ |
| 5-Metilcitidina (m⁵C) | 257.1 | > C | 126.1 [M+H-Rib]⁺ |
| N6-Metiladenosina (m⁶A) | 281.1 | > A | 150.1 [M+H-Rib]⁺ |
| 2'-O-Metilación (Nm) | +14 | Similar | — |

## Análisis de Oligonucleótidos Terapéuticos

Los oligonucleótidos (ASO, siRNA, aptámeros) presentan desafíos únicos debido a su tamaño y múltiples cargas negativas.

### IP-RP-HPLC (Ion Pair Reversed Phase)

La técnica de elección para oligonucleótidos utiliza pares iónicos para mejorar la retención en fase reversa:

| Parámetro | Condición |
|-----------|-----------|
| Columna | C18, 100 × 2.1 mm, 1.7 µm (puertas amplias) |
| Fase móvil A | 15 mM TEA (trietilamina) + 400 mM HFIP (hexafluoroisopropanol) en agua |
| Fase móvil B | 15 mM TEA + 400 mM HFIP en metanol |
| Gradiente | 20-50% B en 20 minutos |
| Flujo | 0.2 mL/min |
| Temperatura | 60°C |
| MS | ESI- modo negativo, full scan (500-2000 m/z) |

### Desconvolución de masas

Los oligonucleótidos producen una serie de picos con múltiples estados de carga. La desconvolución del espectro permite obtener la masa neutra con alta precisión:

| Oligonucleótido | Masa calculada | Masa encontrada | Precisión |
|-----------------|---------------|----------------|-----------|
| 20-mer ASO (Ejemplo) | 6374.1 Da | 6374.3 Da | ±0.5 ppm |
| siRNA sentido | 6832.5 Da | 6832.7 Da | ±0.3 ppm |
| siRNA antisentido | 6941.8 Da | 6942.0 Da | ±0.2 ppm |

## Control de Calidad de Vacunas ARNm

Para vacunas de ARNm, el análisis LC-MS se aplica en varias etapas:

| Etapa | Método LC-MS | Parámetro evaluado |
|-------|-------------|-------------------|
| Materia prima (NTPs) | LC-MS (RP, ESI+) | Pureza, contenido de NTPs modificados |
| ARNm transcrito | LC-MS tras digestión | Perfil de nucleósidos, % modificación |
| ARNm intacto | SEC-LC-MS (nativo) | Integridad, agregados |
| LMR (residuales) | LC-MS/MS | NTPs no incorporados, enzimas |

### Perfil de nucleósidos en ARNm — Criterios de aceptación

| Modificación | Especificación típica |
|-------------|----------------------|
| N1-Metilpseudouridina | 100% sustitución de uridina |
| 5-Metilcitosina | < 2% no metilada |
| Cap (m⁷GpppN) | > 80% eficiencia de cap |
| Adenina sin modificar | > 99% |

## Aplicaciones en Epigenética

LC-MS es la herramienta más poderosa para el estudio de modificaciones epigenéticas en ADN y ARN:

| Modificación epigenética | Significado biológico | LOD por LC-MS |
|-------------------------|---------------------|--------------|
| 5-metilcitosina (5mC) | Silenciamiento génico | 0.01% |
| 5-hidroximetilcitosina (5hmC) | Desmetilación activa | 0.005% |
| N6-metiladenosina (m⁶A) | Regulación post-transcripcional | 0.05% |
| 8-oxoguanina (8-oxoG) | Estrés oxidativo | 0.01% |

## Validación de métodos LC-MS para oligonucleótidos

| Parámetro | Criterio |
|-----------|----------|
| Linealidad (relación área vs concentración) | r² ≥ 0.995 |
| Rango | 10-10,000 ng/mL |
| Precisión intra-día | RSD ≤ 10% |
| Precisión inter-día | RSD ≤ 15% |
| Exactitud | 85-115% |
| LOD | 5 ng/mL |

## Conclusión

El análisis de ácidos nucleicos por LC-MS es una técnica indispensable en la industria biofarmacéutica y la investigación biomédica. Desde la caracterización de modificaciones en vacunas de ARNm hasta la cuantificación de oligonucleótidos terapéuticos en matrices biológicas, LC-MS proporciona la sensibilidad y especificidad necesarias para garantizar la calidad y eficacia de estos productos de próxima generación.

En Solinsa ofrecemos equipos LC-MS, columnas especializadas para oligonucleótidos y nucleósidos, y servicios de desarrollo y validación de métodos analíticos para biotecnología y terapias avanzadas. Contáctanos para recibir asesoría técnica.
