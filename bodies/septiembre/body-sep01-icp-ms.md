---
title: "Espectrometría ICP-MS: Fundamentos y Aplicaciones en Análisis de Trazas"
published: 2026-09-01
category: cat-icp
tags: [ICP-MS, trazas, interferencias, KED, agua, alimentos, farmacéutica]
audience: [T1-Ambiental, T1-Farmacéutica, T1-Alimentos]
lang: es-MX
wordcount: ~1400
---

## Principios de Funcionamiento del ICP-MS

La espectrometría de masas con plasma acoplado inductivamente (ICP-MS) se ha consolidado como la técnica de referencia para el análisis elemental ultratraza. Su principio es elegante en concepto: una muestra líquida se nebuliza y el aerosol resultante se transporta a un plasma de argón a ~6000-10000 K, donde los analitos se atomizan e ionizan casi en su totalidad. Los iones generados se extraen mediante una interfaz de conos (muestreador y skimmer) y se focalizan hacia un analizador de masas que los separa según su relación masa/carga (m/z).

La eficiencia de ionización en el plasma es la clave del éxito del ICP-MS. Elementos como Li, Be, Na, K, Ca, Fe, Cu, Zn, As, Se, Cd, Hg y Pb presentan porcentajes de ionización superiores al 90 %, lo que explica los límites de detección excepcionales de la técnica. A diferencia de la ICP-OES, donde se miden emisiones atómicas, en ICP-MS contamos **iones individuales**, lo que permite alcanzar detectabilidad en el rango de partes por billón (ppb) e incluso partes por cuatrillón (ppt).

> "El ICP-MS no solo mide concentraciones; cuenta átomos. Esa es la diferencia entre saber si hay plomo y saber si hay un solo átomo de plomo en una gota de agua."

El camino del ión desde el plasma hasta el detector pasa por varios componentes críticos: la interfaz de conos de níquel o platino, las lentes iónicas (que pueden operar en modo de celda de colisión/reacción), el analizador de masas y el detector (generalmente un multiplicador de electrones secundarios o una copa de Faraday).

## Celda de Colisión/Reacción (KED): Eliminando Interferencias Poliatómicas

La principal limitación del ICP-MS de cuadrupolo simple son las **interferencias poliatómicas**. Estas ocurren cuando una combinación de dos o más átomos presentes en el plasma (Ar, O, H, N, Cl, C) forma un ión con la misma masa nominal que el analito de interés. Por ejemplo:

- **⁴⁰Ar¹⁶O⁺** interfiere con **⁵⁶Fe⁺** (el isótopo mayoritario del hierro).
- **⁴⁰Ar³⁵Cl⁺** interfiere con **⁷⁵As⁺** (el único isótopo del arsénico).
- **⁴⁰Ar¹²C⁺** interfiere con **⁵²Cr⁺**.
- **³⁸Ar¹H⁺** interfiere con **³⁹K⁺**.

Para resolver este problema se introdujo la **celda de colisión/reacción (CRC)**. El modo más común es KED (*Kinetic Energy Discrimination*). En este modo, se introduce helio en la celda como gas de colisión. Los iones poliatómicos, al tener una sección transversal mayor que los iones atómicos del analito, chocan más veces con el He, pierden más energía cinética y quedan atrapados en el pozo de potencial de la celda. El resultado es una reducción drástica del fondo espectral.

### Interferencias comunes en matrices ambientales

En el análisis de aguas residuales y suelos mexicanos, las matrices suelen contener altas concentraciones de Cl⁻, Ca y Mg. Algunos casos frecuentes:

- **Arsénico en agua**: La interferencia de ⁴⁰Ar³⁵Cl⁺ sobre ⁷⁵As⁺ es particularmente severa cuando la muestra contiene cloruros. La celda KED con He elimina eficazmente esta interferencia, permitiendo cuantificar As a niveles de 0.5 ppb.
- **Hierro en suelos**: La interferencia de ⁴⁰Ar¹⁶O⁺ sobre ⁵⁶Fe⁺ puede inflar los resultados en factores de 2 a 10 si no se corrige. El uso de celda de colisión o la selección del isótopo ⁵⁷Fe (menos abundante pero libre de interferencia) son estrategias complementarias.
- **Vanadio y cromo**: ³⁵Cl¹⁶O⁺ sobre ⁵¹V⁺ y ⁴⁰Ar¹²C⁺ sobre ⁵²Cr⁺ requieren corrección por celda de reacción con amoniaco o simplemente KED con He.

## Analizadores de Masas: Cuadrupolo vs Tiempo de Vuelo (TOF)

La mayoría de los laboratorios en México operan ICP-MS con **analizador cuadrupolar**, que escanea secuencialmente cada m/z. Es robusto, confiable y suficiente para análisis de rutina con hasta ~20-25 analitos. Su resolución unitaria (1 uma) es adecuada para la mayoría de las aplicaciones, siempre que se use celda de colisión/reacción.

El **ICP-TOF-MS** (tiempo de vuelo) representa un salto cualitativo. En lugar de escanear, el TOF extrae un "paquete" de iones y mide simultáneamente todas las masas presentes. Esto ofrece:

- **Adquisición simultánea de todo el espectro**: Ideal para análisis multielementales con >40 analitos.
- **Resolución isotópica de pico plano**: Permite separar interferencias isobáricas.
- **Velocidad**: Espectros completos en microsegundos, perfecto para acoplamiento con separación por cromatografía líquida (LC-ICP-MS) para especiación elemental.
- **Relación isotópica precisa**: Fundamental en estudios de trazadores isotópicos.

> **¿Cuál elegir?** Para un laboratorio ambiental o farmacéutico que analiza metales pesados según NOM-002-SEMARNAT-1996 o NOM-127-SSA1-2021, un ICP-MS cuadrupolar con celda de colisión KED es la opción más costo-efectiva. El TOF se justifica cuando se requiere especiación, análisis de nanopartículas o determinaciones de relaciones isotópicas en investigación.

## Límites de Detección: ppt y más allá

El ICP-MS de cuadrupolo moderno alcanza límites de detección instrumentales (IDL) en el rango de **0.1-10 ppt** (ng/L) para la mayoría de los elementos, dependiendo del blanco y la matriz. Elementos como U, Tl, Bi, Cs, Rb, Ag, Cd, Pb, Hg y As (en modo libre de interferencia) son detectables a niveles sub-ppt.

Sin embargo, los límites de detección del método (MDL) son más relevantes para el laboratorio. La matriz de la muestra, los blancos de digestión y la contaminación ambiental elevan el MDL típicamente a 0.1-5 ppb para aguas y 0.1-1 ppm para suelos digeridos.

Estrategias para mejorar la detectabilidad:
- **Cámara de nebulización ciclónica** enfriada (reducción de óxidos).
- **Conos de platino** para matrices agresivas (mayor sensibilidad que níquel).
- **Modo de celda de reacción con H₂ o NH₃**: Específico para ciertos elementos problemáticos (Fe, K, Ca, Se).
- **Preconcentración en columna de quelatos**: Para aguas ultralimpas.

## Aplicaciones Clave en México

### Análisis de Agua Potable y Descargas

La NOM-127-SSA1-2021 establece límites máximos permisibles para metales como As (0.025 mg/L), Cd (0.005 mg/L), Cr (0.05 mg/L), Pb (0.01 mg/L) y Hg (0.001 mg/L). El ICP-MS es la única técnica que alcanza la detectabilidad necesaria para Hg (1 ppb) con holgura, y permite la cuantificación simultánea de todos los metales regulados en una misma corrida analítica de menos de 3 minutos.

Para el cumplimiento de la NOM-002-SEMARNAT-1996 (descargas de aguas residuales), el ICP-MS simplifica el monitoreo de metales como Zn, Cu, Ni, Cr hexavalente, As y Pb, con límites de cuantificación muy por debajo de los máximos permisibles.

### Control de Calidad Farmacéutico

La Farmacopea de los Estados Unidos Mexicanos (FEUM) y la ICH Q3D exigen límites de elementos residuales en fármacos que van desde 1.5 ppm (inyectables) hasta 500 ppm (sólidos orales). El ICP-MS es el método de elección para el cumplimiento de estas normativas, ya que permite la determinación de los 24 elementos de la lista USP <232>/<233> en una sola inyección con digestión ácida por microondas.

### Trazas en Alimentos

La NOM-184-SSA1-2002 (productos de la pesca) y normas NMX para alimentos procesados exigen el control de metales pesados como Cd, Pb, Hg y As total. El ICP-MS con celda de colisión y digestión por microondas permite alcanzar los LOD necesarios para cumplir con los límites internacionales del Codex Alimentarius, aportando la velocidad de análisis que los laboratorios de alimentos requieren para liberación de lotes.

## Conclusión

El ICP-MS ha evolucionado de ser una técnica de investigación a una herramienta de rutina indispensable para laboratorios ambientales, farmacéuticos y alimenticios en México. La combinación de celda de colisión/reacción KED, analizador cuadrupolar moderno y un programa robusto de control de calidad permite alcanzar límites de detección en ppt con la confiabilidad necesaria para cumplir con regulaciones nacionales e internacionales.

En **Solinsa** ofrecemos equipos ICP-MS de última generación, soporte técnico especializado, puesta en marcha y capacitación para que su laboratorio aproveche al máximo esta poderosa técnica. Contáctenos para una demostración o para asesoría en la selección del equipo ideal para sus aplicaciones.
