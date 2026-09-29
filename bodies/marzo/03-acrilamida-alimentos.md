---
title: "Acrilamida y Furanos en Alimentos Procesados: Análisis por GC-MS/MS"
published: 2026-03-08
category: cat-ind-alimentos
tags: [GC-MS/MS, acrilamida, furanos, alimentos, procesados]
audience: [T1-Alimentos]
lang: es-MX
wordcount: ~1500
---

## Introducción

La **acrilamida** y los **furanos** son contaminantes químicos que se forman durante el procesamiento térmico de alimentos, particularmente cuando se someten a temperaturas superiores a 120 °C. A diferencia de los aditivos o contaminantes externos, estos compuestos son **neoformados** —se generan durante la cocción, fritura, horneado o tostado como consecuencia de reacciones químicas naturales entre los componentes del alimento.

La acrilamida (C₃H₅NO) se forma principalmente a partir de la reacción de **Maillard** entre el aminoácido **asparagina** y **azúcares reductores** (glucosa, fructosa). Los furanos (C₄H₄O), por su parte, se generan por degradación térmica de carbohidratos, ácidos ascórbico, ácidos orgánicos y aminoácidos. Ambos compuestos han sido clasificados como **posiblemente cancerígenos para los humanos** (Grupo 2A y 2B, respectivamente, por la IARC), lo que ha motivado la implementación de regulaciones estrictas y la búsqueda de métodos analíticos sensibles y confiables para su determinación.

La **cromatografía de gases acoplada a espectrometría de masas en tándem (GC-MS/MS)** es la técnica de referencia para el análisis de acrilamida y furanos en matrices alimentarias, ofreciendo la sensibilidad y selectividad necesarias para cuantificar estos compuestos a niveles de partes por billón (ppb).

## Formación de acrilamida: mecanismo y cinética

### Ruta principal: Reacción de Maillard

La formación de acrilamida ocurre predominantemente a través de la reacción entre la **asparagina** (un aminoácido abundante en papas y cereales) y un azúcar reductor a temperaturas entre 120 y 180 °C. El mecanismo implica:

1. **Condensación** del grupo amino de la asparagina con el grupo carbonilo del azúcar reductor, formando una base de Schiff.
2. **Reordenamiento de Amadori** para formar compuestos dicarbonílicos (deoxiosonas).
3. **Descarboxilación y eliminación** de la molécula de asparagina por acción térmica sobre los compuestos dicarbonílicos.
4. **Liberación de acrilamida** tras la ruptura del enlace C-N.

### Factores que influyen en la formación

| Factor | Efecto sobre la formación de acrilamida |
|--------|-----------------------------------------|
| **Temperatura** | Máxima entre 150-180 °C; por debajo de 120 °C la formación es mínima |
| **Tiempo de cocción** | Aumenta con el tiempo hasta alcanzar una meseta o disminuir por degradación |
| **pH** | Máxima en pH 7-8; disminuye en pH ácido |
| **Contenido de asparagina** | Correlación directa con la concentración inicial |
| **Contenido de azúcares reductores** | Correlación directa (glucosa > fructosa > sacarosa) |
| **Actividad de agua (aw)** | Máxima en aw 0.4-0.7; disminuye en aw extremos |
| **Presencia de cationes** | Ca²⁺, Mg²⁺ y K⁺ reducen la formación; Na⁺ tiene efecto variable |

## Regulación UE 2017/2158 y niveles de referencia

El **Reglamento UE 2017/2158** establece **medidas de mitigación y niveles de referencia** para la acrilamida en alimentos. Aunque originalmente es una normativa europea, sus principios han sido adoptados como referencia por autoridades sanitarias en todo el mundo, incluyendo México a través de COFEPRIS.

### Niveles de referencia para acrilamida (UE 2017/2158)

| Categoría de alimento | Nivel de referencia (µg/kg) |
|-----------------------|----------------------------|
| Papas fritas (listas para consumo) | 500 |
| Papas a la francesa (congeladas) | 500 |
| Snacks de papas | 750 |
| Pan blanco | 100 |
| Pan integral y de centeno | 150 |
| Cereales para desayuno (salvado, grano entero) | 350 |
| Galletas (dulces y saladas) | 350 |
| Café tostado (grano molido) | 400 |
| Café soluble | 850 |
| Sucedáneos de café (cereales tostados) | 500 |
| Alimentos infantiles (papillas, galletas) | 50 |
| Bizcochos y pasteles | 250 |

> "Los niveles de referencia no son límites máximos de seguridad per se, sino indicadores de que un producto ha sido elaborado siguiendo buenas prácticas de manufactura. Superar estos niveles obliga al productor a revisar y ajustar sus procesos."

## Análisis de acrilamida por GC-MS/MS

### Preparación de muestra

La determinación de acrilamida en alimentos requiere un proceso de preparación de muestra riguroso debido a las matrices complejas y las bajas concentraciones objetivo:

1. **Molienda y homogeneización** de la muestra (liofilización opcional para concentrar).
2. **Extracción con agua** o solución acuosa (la acrilamida es altamente soluble en agua, 215 g/100 mL a 30 °C).
3. **Adición de estándar interno** (acrilamida-¹³C₃ o acrilamida-d₃) para corregir pérdidas durante la preparación.
4. **Desengrasado** con hexano o ciclohexano para eliminar lípidos.
5. **Limpieza por extracción en fase sólida (SPE)**: Columnas de intercambio mixto (C18 + intercambio catiónico fuerte) o columnas de carbón grafitizado.
6. **Derivatización** para mejorar la volatilidad y detectabilidad por GC.

### Derivatización por bromación

El método clásico de derivatización para acrilamida es la **bromación**, que convierte la acrilamida en **2-bromopropenamida** (más volátil y con mejor comportamiento cromatográfico):

```
Acrilamida (C₃H₅NO, PM 71.08) + Br₂ → 2-bromopropenamida (C₃H₄BrNO, PM 150.0)
```

El exceso de bromo se elimina con tiosulfato de sodio y el derivado se extrae con acetato de etilo.

### Condiciones de GC-MS/MS (NCI)

La **ionización química negativa (NCI)** ofrece ventajas significativas para la acrilamida bromada, ya que produce principalmente el ion [M-H]⁻ en lugar de fragmentación extensa:

| Parámetro | Condición típica |
|-----------|------------------|
| Columna | DB-5MS o similar, 30 m × 0.25 mm × 0.25 µm |
| Gas portador | Helio, 1.0 mL/min |
| Programa de temp. | 70 °C (1 min) → 20 °C/min → 280 °C (5 min) |
| Inyección | Splitless, 1 µL, 250 °C |
| Ionización | NCI con metano como gas de reacción |
| MRM transiciones | Acrilamida-2-bromo: m/z 150 → 106 (cuantificación), 150 → 120 (confirmación) |
| Tiempo de retención | ~5.5 min |

### Límites de cuantificación

Con el método descrito, los límites de cuantificación (LOQ) típicos son:

| Matriz | LOQ (µg/kg) |
|--------|-------------|
| Papas fritas | 5 - 10 |
| Café tostado | 10 - 20 |
| Pan y cereales | 5 - 15 |
| Alimentos infantiles | 3 - 5 |
| Galletas | 5 - 10 |

## Análisis de furanos por headspace-GC-MS

### Formación y química de furanos

Los furanos en alimentos se forman por:
- **Degradación térmica de azúcares**: ciclación y deshidratación de carbohidratos.
- **Degradación del ácido ascórbico**: particularmente relevante en jugos y alimentos enlatados.
- **Oxidación de ácidos grasos insaturados**: durante el calentamiento de aceites.
- **Reacciones de Maillard**: degradación de aminoácidos como la treonina y serina.

Los furanos más relevantes para el control de calidad son:

| Compuesto | Fórmula | PM | Punto de ebullición | Potencial tóxico |
|-----------|---------|----|---------------------|------------------|
| Furano | C₄H₄O | 68.07 | 31 °C | Cancerígeno 2B |
| 2-Metilfurano | C₅H₆O | 82.10 | 63 °C | Irritante |
| 2,5-Dimetilfurano | C₆H₈O | 96.13 | 94 °C | Menor toxicidad |
| 2-Etilfurano | C₆H₈O | 96.13 | 93 °C | Menor toxicidad |
| 2-Pentilfurano | C₉H₁₄O | 138.21 | 190 °C | Marcador de oxidación |

### Método de análisis por headspace-GC-MS

Debido a la alta volatilidad del furano (punto de ebullición de 31 °C), la técnica de **headspace estático o dinámico** acoplada a GC-MS es el método de elección:

1. **Pesada de muestra** (1-5 g) en vial de headspace de 20 mL.
2. **Adición de estándar interno** (furano-d₄).
3. **Equilibración** a 80 °C durante 30 minutos.
4. **Inyección** del espacio de cabeza (1-2 mL).
5. **Separación cromatográfica** en columna polar (DB-624, 60 m × 0.32 mm × 1.8 µm).
6. **Detección por GC-MS** en modo SIM (m/z 68, 39 para furano; m/z 72, 42 para furano-d₄).

> "El furano se pierde fácilmente si la muestra no se procesa inmediatamente después de abrir el envase. Se recomienda que la preparación y el análisis se realicen en menos de 30 minutos tras la apertura del empaque."

### Matrices típicas y niveles encontrados

| Matriz | Rango típico de furano (µg/kg) |
|--------|-------------------------------|
| Café tostado (molido, sin preparar) | 500 - 5000 |
| Café soluble | 200 - 600 |
| Papas fritas | 10 - 100 |
| Sopas enlatadas | 10 - 80 |
| Comida para bebés (vegetales) | 10 - 60 |
| Frutas enlatadas | 5 - 30 |
| Galletas | 5 - 25 |
| Pan tostado | 2 - 15 |

## Estrategias para reducir acrilamida en producción

Basándose en el Reglamento UE 2017/2158 y las guías de buenas prácticas de la FoodDrinkEurope, las siguientes estrategias han demostrado ser efectivas:

### Selección de materias primas

- **Variedades de papa con bajo contenido de azúcares reductores** (< 0.5 g/kg peso fresco al momento de la cosecha).
- **Almacenamiento de papas** a temperaturas > 8 °C para evitar la acumulación de azúcares por sweetening inducido por frío.
- **Selección de variedades de trigo** con baja actividad de asparagina sintetasa.

### Modificación de procesos

- **Lavado y remojo** de papas cortadas para eliminar azúcares superficiales (reducción del 30-50% de acrilamida).
- **Blanqueado** de papas y vegetales antes de freír (70-90 °C, 5-10 min).
- **Adición de aminoácidos competitivos** como glicina (compite con la asparagina por los azúcares reductores).
- **Reducción del pH** mediante adición de ácido cítrico o acético (pH ≤ 5.5).
- **Control de temperatura y tiempo** de fritura/horneado: menor temperatura por más tiempo o, mejor aún, monitoreo continuo con sensores infrarrojos.
- **Uso de tecnología de fritura al vacío** (presión reducida → menor temperatura de ebullición del aceite → menor formación de acrilamida).

### Post-proceso

- **Eliminación física** de porciones excesivamente doradas/oscuras (mayor contenido de acrilamida).
- **Evaluación del color** mediante sistemas de visión artificial (correlación color-acrilamida).
- **Adsorción con carbón activado** para productos líquidos (salsas, caldos).

En Solinsa contamos con sistemas de GC-MS/MS de última generación para el análisis de acrilamida, furanos y otros contaminantes neoformados en alimentos. Ofrecemos asesoría integral para la implementación de métodos analíticos conforme a las regulaciones internacionales, incluyendo sistemas de cromatografía de gases con inyectores automáticos, muestreadores de headspace, columnas especializadas y software de procesamiento de datos. Nuestro equipo de especialistas en química de alimentos te acompaña desde el diseño del método hasta la validación y rutina analítica. Contáctenos en www.solinsa.com para conocer nuestras soluciones para tu laboratorio de control de calidad alimentario.
