---
title: "ICP-MS para el Análisis de Metales Traza en Agua Potable: Métodos EPA 200.8 y USP <232>"
published: 2025-11-03
category: cat-icp
tags: [ICP-MS, agua potable, metales traza, EPA 200.8, USP 232, Arsénico, plomo, cadmio, mercurio, NOM-127]
audience: [T1-Ambiental, T1-Farmacéutica]
lang: es-MX
wordcount: ~1500
---

## Introducción

El agua potable es uno de los recursos más vigilados en cuanto a calidad se refiere. En México, la NOM-127-SSA1-2021 establece los límites máximos permisibles de elementos potencialmente tóxicos en el agua de consumo humano, mientras que a nivel internacional la Farmacopea de los Estados Unidos (USP) impone requisitos igualmente estrictos para el agua utilizada en procesos farmacéuticos. Para cumplir con estos estándares, los laboratorios requieren técnicas analíticas con la sensibilidad, selectividad y robustez necesarias para detectar metales y semimetales en concentraciones de partes por billón (ppb) o incluso menores.

La **Espectrometría de Masas con Plasma Acoplado Inductivamente (ICP-MS)** se ha consolidado como la técnica de referencia para el análisis de metales traza en matrices acuosas. Su capacidad para medir múltiples elementos simultáneamente, con límites de detección en el rango de ng/L, la hace indispensable tanto para laboratorios ambientales como para la industria farmacéutica. Este artículo aborda los métodos **EPA 200.8** y **USP \<232\>**, las consideraciones analíticas clave y el papel de la instrumentación moderna en el cumplimiento normativo.

## Método EPA 200.8: Determinación de Elementos Traza en Aguas

### Alcance y aplicaciones

El método **EPA 200.8**, titulado *"Determination of Trace Elements in Waters and Wastes by Inductively Coupled Plasma-Mass Spectrometry"*, es el protocolo oficial de la Agencia de Protección Ambiental de Estados Unidos (EPA) para el análisis de aguas potables, superficiales, subterráneas y residuales mediante ICP-MS. Cubre más de 20 elementos, incluyendo antimonio (Sb), arsénico (As), cadmio (Cd), cromo (Cr), mercurio (Hg), plomo (Pb) y selenio (Se), entre otros.

En México, la NOM-127-SSA1-2021 establece los siguientes límites máximos permisibles (LMP) para metales en agua potable:

| Elemento | LMP NOM-127-SSA1-2021 (mg/L) | Equivalente (µg/L o ppb) |
|----------|------------------------------|--------------------------|
| Arsénico (As) | 0.025 | 25 |
| Cadmio (Cd) | 0.005 | 5 |
| Cromo total (Cr) | 0.05 | 50 |
| Mercurio (Hg) | 0.001 | 1 |
| Plomo (Pb) | 0.010 | 10 |
| Selenio (Se) | 0.040 | 40 |
| Antimonio (Sb) | 0.020 | 20 |

Estos límites son alcanzables sin dificultad mediante ICP-MS, cuyos LOD instrumentales se encuentran típicamente entre 0.001 y 0.1 µg/L para la mayoría de los elementos.

### Preparación de muestra: digestión ácida

El método EPA 200.8 requiere que todas las muestras de agua sean acidificadas con ácido nítrico (HNO₃) ultrapuro a un pH \< 2, utilizando un volumen de 5 mL de HNO₃ concentrado por cada litro de muestra. Para aguas con alto contenido de materia orgánica o partículas en suspensión, se recomienda una **digestión ácida asistida por microondas** basada en el método **EPA 3015A**, que emplea HNO₃ y H₂O₂ en recipientes cerrados a alta presión y temperatura. Este proceso asegura la mineralización completa de la matriz y libera los metales asociados a coloides o material particulado.

Los pasos generales de la preparación son:

1. Recolectar la muestra en frascos de polietileno o PTFE prelavados con HNO₃ al 10 %.
2. Acidificar in situ con HNO₃ concentrado (grado trazabilidad de metales) hasta pH \< 2.
3. Transportar y almacenar a 4 °C con un tiempo máximo de preservación de 6 meses para la mayoría de los metales (el Hg se limita a 28 días).
4. Digestión en microondas: 5 mL de muestra + 2 mL de HNO₃ + 1 mL de H₂O₂, rampa a 180 °C durante 15 min y mantenimiento por 15 min.
5. Enfriar, filtrar (0.45 µm) y aforar a un volumen conocido.

## Control de interferencias en ICP-MS

El ICP-MS, a pesar de su enorme potencial, es susceptible a interferencias que deben gestionarse cuidadosamente. Las tres categorías principales son:

### Interferencias isobáricas

Ocurren cuando dos isótopos de diferentes elementos tienen la misma masa nominal, por ejemplo, ⁴⁰Ar⁺ (argón del plasma) interfiere con ⁴⁰Ca⁺, o ⁵⁶Fe⁺ (hierro) compite con ⁴⁰Ar¹⁶O⁺. Se corrigen mediante ecuaciones matemáticas de corrección isobárica, selección de isótopos alternativos o usando celdas de colisión/reacción.

### Interferencias poliatómicas

Son las más comunes en matrices acuosas. Se forman por combinaciones de argón, hidrógeno, oxígeno y nitrógeno del plasma con elementos de la matriz. Ejemplos típicos:

- ⁷⁵As⁺ interferido por ⁴⁰Ar³⁵Cl⁺ (cloro presente en el agua potable clorada).
- ⁵¹V⁺ interferido por ³⁵Cl¹⁶O⁺.
- ⁵²Cr⁺ interferido por ⁴⁰Ar¹²C⁺.

### Tecnología de celda de colisión/reacción (CRC)

Para eliminar estas interferencias, los ICP-MS modernos incorporan celdas de colisión/reacción ubicadas entre las lentes iónicas y el cuadrupolo analizador. Se emplean dos modos principales:

- **Modo colisión (He)**: El gas helio colisiona con los iones poliatómicos de mayor sección transversal, disociándolos antes de que alcancen el analizador. Es el método preferido para matrices desconocidas por su carácter no reactivo.
- **Modo reacción (H₂ o NH₃)**: Gases reactivos como hidrógeno o amoniaco reaccionan selectivamente con los interferentes. Por ejemplo, H₂ reduce ⁴⁰Ar³⁵Cl⁺ para liberar la señal de ⁷⁵As⁺ sin afectar el analito.

La selección del modo y el flujo de gas depende de la matriz de la muestra y los elementos de interés. Un método robusto incorpora ambos modos en una misma secuencia analítica.

## USP \<232\>: Límites de Elementos en Agua de Uso Farmacéutico

### Contexto regulatorio

El capítulo **USP \<232\>** —— *Elemental Impurities — Limits* —— establece los límites de exposición diaria permitida (PDE, por sus siglas en inglés) para 24 elementos clasificados en Clase 1, 2A y 2B según su toxicidad. Aunque originalmente enfocado en ingredientes farmacéuticos, su alcance se extiende al agua utilizada en procesos de manufactura, incluyendo el **Agua Purificada (WP)** y el **Agua para Inyección (WFI)** .

Los límites más críticos para el agua farmacéutica, calculados a partir de una ingesta diaria de 2 L, son:

| Clase | Elemento | Límite oral (µg/día) | Concentración equivalente en agua (µg/L) |
|-------|----------|----------------------|-------------------------------------------|
| 1 | Cadmio (Cd) | 5 | 2.5 |
| 1 | Plomo (Pb) | 10 | 5.0 |
| 1 | Arsénico (As) | 15 | 7.5 |
| 1 | Mercurio (Hg) | 3 | 1.5 |
| 2A | Cobalto (Co) | 50 | 25 |
| 2A | Níquel (Ni) | 200 | 100 |
| 2A | Vanadio (V) | 100 | 50 |
| 2B | Selenio (Se) | 150 | 75 |
| 2B | Plata (Ag) | 150 | 75 |

El capítulo complementario **USP \<233\>** —— *Elemental Impurities — Procedures* —— describe los métodos instrumentales aceptables, incluyendo ICP-MS, ICP-OES y técnicas de digestión por microondas (método **USP \<232\>** remite al procedimiento analítico de **USP \<233\>** ).

### Requisitos de validación para USP \<232\>

Para cumplir con USP \<232\> usando ICP-MS, el laboratorio debe demostrar:

- **Límite de detección del método (MDL)** y **límite de cuantificación (LOQ)** menores o iguales al 50 % del límite especificado.
- **Linealidad** en el rango de trabajo (típicamente 50-150 % del límite objetivo), con coeficiente de correlación R² ≥ 0.995.
- **Exactitud** mediante recuperaciones de fortificaciones (spike) en la matriz de agua, aceptando un rango de 70-150 % para elementos en Clase 1.
- **Precisión** expresada como RSD ≤ 20 % en inyecciones repetidas.
- **Robustez** frente a variaciones menores en flujo de gas de celda de colisión, potencia del plasma y flujo de muestra.

## Control de calidad en el análisis por ICP-MS

Un programa robusto de aseguramiento de la calidad (QA/QC) es indispensable tanto para EPA 200.8 como para USP \<232\>. Los elementos mínimos que deben incluirse son:

### Blancos

- **Blanco de calibración**: solución de HNO₃ al 1 % (grado ultrapuro) usada para establecer la línea base del instrumento.
- **Blanco de método**: agua desionizada (18.2 MΩ·cm) procesada a través de todo el procedimiento de digestión y preparación. Debe analizarse al inicio, cada 10 muestras y al final del lote.
- **Blanco de campo**: agua ultrapura transportada al sitio de muestreo y tratada como una muestra real. Detecta contaminación durante el muestreo y transporte.

### Materiales de referencia certificados (CRM)

Se deben analizar CRM de matriz acuosa certificados por una entidad acreditada (NIST SRM 1643f — Trace Elements in Water, por ejemplo). La recuperación debe encontrarse dentro del intervalo de incertidumbre certificado.

### Fortificaciones (spikes)

Agregar una concentración conocida de los analitos a una muestra real para evaluar la exactitud del método. **Para EPA 200.8**, la recuperación debe estar entre 80 y 120 %. **Para USP \<232\>** , los criterios son los antes mencionados (70-150 % en Clase 1).

### Duplicados

Se analiza una muestra por duplicado al menos cada 20 muestras. La diferencia relativa porcentual (RPD) entre duplicados debe ser ≤ 20 %.

### Estándares de verificación continua (ICV/CCV)

Un estándar de calibración independiente (fuente diferente al estándar de calibración) se analiza cada 10 muestras para verificar que la deriva instrumental no exceda ± 10 %.

## Tabla resumen de rendimiento analítico

La siguiente tabla presenta los LOD instrumentales típicos, LOQ del método (asumiendo un factor de dilución de 1X) y los límites normativos aplicables para los elementos de mayor interés:

| Elemento | Isótopo | LOD instrumental (µg/L) | LOQ del método (µg/L) | LMP NOM-127 (µg/L) | Límite USP <232> (µg/L) |
|----------|---------|-------------------------|------------------------|--------------------|---------------------------|
| Arsénico (As) | ⁷⁵As | 0.005 | 0.02 | 25 | 7.5 |
| Plomo (Pb) | ²⁰⁸Pb | 0.001 | 0.005 | 10 | 5.0 |
| Cadmio (Cd) | ¹¹⁴Cd | 0.003 | 0.01 | 5 | 2.5 |
| Mercurio (Hg) | ²⁰²Hg | 0.01 | 0.05 | 1 | 1.5 |
| Selenio (Se) | ⁸⁰Se | 0.02 | 0.1 | 40 | 75 |
| Antimonio (Sb) | ¹²¹Sb | 0.005 | 0.02 | 20 | N/A |
| Cromo (Cr) | ⁵²Cr | 0.01 | 0.05 | 50 | N/A |

> **Nota:** Los valores de LOD y LOQ dependen de la instrumentación específica, la calidad de los reactivos y las condiciones de operación. Los datos presentados corresponden a equipos ICP-MS con celda de colisión de tercera generación y configuración optimizada para agua potable.

## Conclusión

La espectrometría de masas con plasma acoplado inductivamente es, sin lugar a dudas, la herramienta analítica más potente y versátil para el análisis de metales traza en agua potable. Combinando métodos validados como el EPA 200.8 con los estrictos requisitos de USP \<232\> y las especificaciones de la NOM-127-SSA1-2021, los laboratorios pueden garantizar resultados confiables que protejan la salud pública y cumplan con los más altos estándares regulatorios. La clave del éxito radica en dominar la preparación de muestra, gestionar adecuadamente las interferencias mediante celdas de colisión/reacción y mantener un riguroso programa de control de calidad.

En **Solinsa** contamos con una amplia experiencia en la instrumentación analítica para laboratorios ambientales y farmacéuticos. Como representantes autorizados de **Agilent Technologies** en México, ofrecemos equipos ICP-MS de última generación (serie 7900 y 8900) con tecnología de celda de colisión/reacción ORS⁴, automuestreador integrado y software MassHunter para cumplimiento con EPA 200.8 y USP \<232\>. Además, brindamos asesoría técnica integral, puesta en marcha, capacitación y soporte postventa para asegurar que su laboratorio opere bajo los más exigentes estándares de calidad. **[Contacte a Solinsa]** para una demostración sin compromiso y descubra cómo podemos potenciar su capacidad analítica.
