---
title: "Análisis de Microplásticos en Agua por FTIR y Técnicas Complementarias"
published: 2025-10-01
category: cat-ind-ambiental
tags: [microplásticos, FTIR, microscopía, agua, contaminación, ambiental, PET, PE, PP]
audience: [T1-Ambiental]
lang: es-MX
wordcount: ~1500
---

## Introducción

Los microplásticos —partículas de plástico menores a 5 mm— se han convertido en uno de los contaminantes emergentes más estudiados en la última década. Presentes en océanos, ríos, lagos, aguas subterráneas e incluso en el agua potable, estos materiales plantean preguntas urgentes sobre su impacto en la salud humana y los ecosistemas. La comunidad científica internacional coincide en que el primer paso para entender y mitigar este problema es contar con métodos analíticos robustos para su identificación y cuantificación.

La **espectroscopía por transformada de Fourier (FTIR)** , particularmente en su modalidad de **microscopía FTIR (µ-FTIR)** , se ha consolidado como la técnica de referencia para el análisis de microplásticos, gracias a su capacidad para identificar la composición química de partículas individuales en el rango de 10 a 500 µm. Combinada con técnicas complementarias como la **espectroscopía Raman** y el análisis térmico, el FTIR permite responder preguntas clave: ¿de qué polímero está hecho este microplástico?, ¿cuántas partículas hay por litro de agua?, ¿cuál es su distribución de tamaños?

> "No se puede gestionar lo que no se mide. El FTIR es la herramienta que está permitiendo a los laboratorios ambientales mexicanos poner números a un problema que antes solo se describía cualitativamente."

En este artículo exploramos el flujo de trabajo completo para el análisis de microplásticos en agua por FTIR y técnicas complementarias, desde la preparación de la muestra hasta la interpretación de resultados utilizando bibliotecas espectrales.

## Tipos de Microplásticos y su Relevancia Ambiental

Los microplásticos se clasifican en dos categorías principales según su origen:

| Tipo | Origen | Ejemplos comunes | Tamaño típico |
|------|--------|------------------|---------------|
| Primarios | Fabricados intencionalmente pequeños | Microesferas en cosméticos, pellets industriales, fibras sintéticas | 10 µm - 1 mm |
| Secundarios | Fragmentación de plásticos grandes | Fragmentos de PET, PE, PP, PS, PVC por degradación UV, mecánica o térmica | 1 µm - 5 mm |

Los polímeros más frecuentemente identificados en muestras de agua a nivel global son:

- **Polietileno (PE):** El más abundante en envases y bolsas; densidad baja (LDPE) y alta (HDPE).
- **Polipropileno (PP):** Tapas de botellas, popotes, envases de alimentos.
- **Tereftalato de polietileno (PET):** Botellas de agua y refrescos; fibras textiles.
- **Poliestireno (PS):** Vasos desechables, empaques de protección (incluyendo EPS).
- **Cloruro de polivinilo (PVC):** Tuberías, películas adhesivas.
- **Poliuretano (PUR):** Espumas, recubrimientos.
- **Poliamida (PA/Nylon):** Fibras textiles, redes de pesca.
- **Caucho sintético (SBR, EPDM):** Partículas de desgaste de neumáticos.

En el contexto mexicano, estudios recientes en la costa de Quintana Roo, el Río Santiago y el Lago de Chapala han reportado concentraciones de microplásticos que van de 0.5 a 120 partículas por litro, con predominancia de PE, PET y PP. La identificación precisa del tipo de polímero es crítica porque cada material tiene diferentes capacidades de adsorción de contaminantes orgánicos (como PCB y PAH) y metales pesados.

## Preparación de Muestra: El Paso Crítico

La preparación de muestra es, sin duda, el paso más determinante en la calidad del análisis de microplásticos. Un error en esta etapa puede generar falsos positivos (contaminación cruzada) o falsos negativos (pérdida de partículas o degradación).

**Flujo de trabajo estándar para muestras de agua:**

1. **Filtración:** La muestra de agua (típicamente 1-100 L, dependiendo de la turbidez) se filtra a través de una malla de acero inoxidable o filtro de membrana con tamaño de poro de 0.45-10 µm.
2. **Digestión de materia orgánica:** Se elimina la materia orgánica natural (algas, proteínas, humus) mediante oxidación con H₂O₂ al 30 % (50-70 °C, 24-48 h) o digestión enzimática (proteasa, celulasa).
3. **Separación por densidad:** Se utiliza una solución salina densa (NaCl, ZnCl₂ o NaI) para flotar los microplásticos (densidad < 1.5 g/cm³) y separarlos de partículas minerales densas (arena, arcilla).
4. **Filtrado final:** La fracción sobrenadante se filtra en un filtro de membrana compatible con FTIR (p. ej., Anodisc de óxido de aluminio o filtro de oro).
5. **Secado y almacenamiento:** Las partículas se secan en desecador y se almacenan en placas de Petri de vidrio (nunca plástico) para evitar contaminación.

> **Regla de oro:** Todos los procesos deben realizarse en campana de flujo laminar, utilizando material de vidrio (nunca plástico), y con blancos de campo y de laboratorio en cada lote de muestras. La contaminación por fibras de la ropa del analista es la causa #1 de falsos positivos.

## Microscopía FTIR (µ-FTIR): Identificación Química Partícula por Partícula

La microscopía FTIR combina un microscopio óptico con un espectrómetro FTIR, permitiendo obtener el espectro infrarrojo de partículas individuales de hasta 10 µm de diámetro.

**Modalidades de medición:**

- **Transmisión:** La partícula se coloca sobre un sustrato transparente al IR (ZnSe, CaF₂). Ideal para partículas < 100 µm. Mayor relación señal/ruido. Requiere que la partícula sea suficientemente delgada.
- **Reflectancia:** Útil para partículas opacas o gruesas. La calidad del espectro depende de la rugosidad superficial. Requiere corrección Kramers-Kronig.
- **ATR (Reflectancia Total Atenuada):** El cristal de ATR (diamante o Ge) se pone en contacto directo con la partícula. Excelente calidad espectral para partículas > 50 µm. Más lento porque requiere contacto físico con cada partícula.

**Modo automatizado (FPA imaging):** Los sistemas µ-FTIR modernos incorporan detectores de plano focal (FPA) que permiten obtener mapas químicos completos del filtro en horas, identificando automáticamente cientos o miles de partículas por muestra.

| Parámetro | µ-FTIR (FPA) | µ-Raman | TGA-FTIR (térmico) |
|-----------|--------------|---------|---------------------|
| Límite de detección | ~10 µm | ~1 µm | > 500 µm (masa) |
| Tiempo por muestra | 2-8 h (automatizado) | 8-24 h | 1-2 h |
| Información | Composición química | Composición química + cristalinidad | Masa total + descomposición térmica |
| Interferencia por agua | Alta (absorción fuerte) | Baja | Nula |
| Costo de equipo | $$$ | $$$$ | $$ |

## Bibliotecas Espectrales: Clave para la Identificación Automatizada

Una vez adquiridos los espectros, el siguiente paso es compararlos contra bibliotecas espectrales de referencia. La calidad de la identificación depende directamente de la calidad y pertinencia de la biblioteca utilizada.

**Bibliotecas comerciales recomendadas:**

- **KnowItAll (Wiley):** > 250,000 espectros, incluye polímeros, plásticos y aditivos.
- **HR Polymer & Plastic (Thermo Fisher):** Biblioteca especializada con > 1,500 espectros de polímeros comerciales, incluyendo grados específicos de PE, PP, PET y PS.
- **IRUG (Infrared and Raman Users Group):** Biblioteca gratuita especializada en materiales de patrimonio cultural y ambientales.
- **Bibliotecas personalizadas:** Es altamente recomendable que cada laboratorio construya su propia biblioteca con materiales plásticos de referencia locales (p. ej., pellets de la industria mexicana, fragmentos de envases nacionales).

**Criterios de identificación:**

| Índice de coincidencia (Match) | Interpretación |
|-------------------------------|----------------|
| > 0.95 | Identificación excelente — coincidencia casi perfecta |
| 0.85 - 0.95 | Identificación buena — puede requerir verificación visual del espectro |
| 0.70 - 0.84 | Identificación probable — requiere confirmación con otra técnica |
| < 0.70 | No identificado — posible degradación, mezcla de polímeros o interferencia |

> **Nota importante:** Los microplásticos ambientales sufren intemperismo (fotodegradación, oxidación, abrasión) que modifica su espectro FTIR. Un espectro de PE degradado puede tener bandas de carbonilo (C=O, ~1720 cm⁻¹) que no aparecen en la biblioteca comercial. Por eso, el criterio humano sigue siendo indispensable.

## Técnicas Complementarias: Raman, TGA-FTIR y Pirólisis-GC-MS

Ninguna técnica analítica resuelve todos los desafíos del análisis de microplásticos. Por eso, los laboratorios más avanzados combinan múltiples técnicas:

**Espectroscopía Raman:**
- Ventaja principal: límite de detección ~1 µm, ideal para microplásticos muy pequeños (< 10 µm) y partículas opacas.
- No sufre interferencia por agua (útil para analizar partículas en suspensión acuosa).
- Desventaja: fluorescencia de algunos aditivos plásticos puede enmascarar la señal Raman; más lento que FTIR para mapeo de áreas grandes.

**TGA-FTIR (Termogravimetría acoplada a FTIR):**
- No identifica partículas individuales, sino que determina la composición másica total de la muestra.
- Útil para cuantificar la masa total de microplásticos en una muestra (más relevante toxicológicamente que el conteo de partículas).
- Proporciona información sobre aditivos y plastificantes que se liberan durante la pirólisis.

**Pirólisis-GC-MS (Py-GC-MS):**
- Identifica la composición química exacta de polímeros, incluyendo aditivos y productos de degradación.
- Considerada la técnica de referencia para identificación química de microplásticos > 100 µm.
- Desventaja: destructiva y no proporciona información morfológica ni conteo de partículas.

## Recomendaciones para Laboratorios Ambientales en México

1. **Invierta en un sistema µ-FTIR con detector FPA** para automatizar el análisis de microplásticos y aumentar el rendimiento de muestras por día.
2. **Desarrolle protocolos de control de calidad** con blancos de campo en cada muestreo (agua ultrapura transportada y procesada exactamente como las muestras reales).
3. **Participe en intercomparaciones internacionales** como el **NIST Nanoplastic and Microplastic Interlaboratory Study** o los ensayos de **QUASIMEME** para validar su competencia analítica.
4. **Capacite a su personal** en identificación espectral visual: la inspección humana de los espectros sigue siendo necesaria incluso con las mejores bibliotecas.
5. **Comunique sus resultados en unidades estandarizadas** (partículas/L, µg/L o mg/kg) siguiendo las recomendaciones de la **ISO 24187:2023** y la **MSFD Technical Group on Marine Litter**.

## Conclusión

El análisis de microplásticos en agua por FTIR y técnicas complementarias es un campo en rápida evolución, con nuevas metodologías, normativas y herramientas de software que aparecen cada año. En México, la NOM-001-SEMARNAT-2021 para descargas de aguas residuales y la creciente presión regulatoria internacional están impulsando a los laboratorios ambientales a incorporar estos análisis dentro de su cartera de servicios.

En **Solinsa** ofrecemos soluciones completas para el análisis de microplásticos, desde sistemas µ-FTIR con detectores FPA y bibliotecas espectrales especializadas, hasta estaciones de trabajo de preparación de muestra con filtración automatizada y sistemas de pirólisis-GC-MS. Contáctenos para una demostración o para recibir asesoría técnica en la implementación de estos métodos en su laboratorio.
