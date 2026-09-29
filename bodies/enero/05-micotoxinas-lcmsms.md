---
title: "Cuantificación de Micotoxinas en Alimentos por LC-MS/MS: Aflatoxinas, Ocratoxinas y Fumonisinas"
published: 2026-01-15
category: cat-ind-alimentos
tags: [LC-MS/MS, micotoxinas, aflatoxinas, ocratoxinas, fumonisinas, alimentos, NOM-188, EU 1881/2006, seguridad alimentaria]
audience: [T1-Alimentos]
wordcount: ~1500
---

## Introducción a las Micotoxinas en la Cadena Alimentaria

Las micotoxinas son metabolitos secundarios tóxicos producidos por hongos filamentosos de los géneros *Aspergillus*, *Penicillium* y *Fusarium*. Estos compuestos representan una de las amenazas más significativas para la seguridad alimentaria a nivel mundial, afectando cultivos como maíz, trigo, arroz, cacahuate, café, especias y frutos secos, tanto en campo como durante el almacenamiento.

La exposición crónica a micotoxinas está asociada con efectos carcinogénicos, hepatotóxicos, nefrotóxicos, inmunosupresores y estrogénicos. La aflatoxina B1, por ejemplo, es clasificada por la Agencia Internacional para la Investigación del Cáncer (IARC) como carcinógeno del Grupo 1. Debido a su alta toxicidad y amplia distribución, los organismos reguladores han establecido límites máximos permisibles estrictos en alimentos destinados al consumo humano y animal.

La cromatografía de líquidos acoplada a espectrometría de masas en tándem (LC-MS/MS) se ha consolidado como la técnica de referencia para la cuantificación de micotoxinas, ofreciendo la sensibilidad, selectividad y capacidad multianalito necesarias para cumplir con los exigentes requisitos regulatorios.

## Principales Micotoxinas y sus Características

### Aflatoxinas (B1, B2, G1, G2)

Las aflatoxinas son producidas principalmente por *Aspergillus flavus* y *Aspergillus parasiticus*. Las cuatro variantes naturales más relevantes —B1, B2, G1 y G2— se diferencian por su estructura química y fluorescencia bajo luz UV (azul para B1/B2, verde para G1/G2). La aflatoxina B1 es la más tóxica y prevalente.

| Aflatoxina | Fórmula Molecular | [M+H]+ (m/z) | Límite típico (UE) |
|------------|-------------------|-------------|-------------------|
| B1         | C17H12O6          | 313.1       | 2 µg/kg           |
| B2         | C17H14O6          | 315.1       | —                 |
| G1         | C17H12O7          | 329.1       | —                 |
| G2         | C17H14O7          | 331.1       | —                 |

### Ocratoxina A (OTA)

La ocratoxina A es producida por *Aspergillus ochraceus* y *Penicillium verrucosum*. Es nefrotóxica y ha sido clasificada como posible carcinógeno (Grupo 2B). Se encuentra comúnmente en cereales, café, vino tinto, cerveza y especias. Su límite máximo en cereales según la regulación europea es de 5 µg/kg.

### Fumonisinas (B1, B2)

Las fumonisinas son producidas por *Fusarium verticillioides* y *Fusarium proliferatum*, hongos que infectan el maíz. La fumonisina B1 (FB1) es la más abundante y ha sido clasificada como posible carcinógeno (Grupo 2B). Se asocia con leucoencefalomalacia equina y edema pulmonar porcino. El límite máximo en maíz para consumo humano es de 1000 µg/kg (UE) y de 2000 µg/kg en México (NOM-188).

### Desoxinivalenol (DON) y Zearalenona (ZEA)

El desoxinivalenol (DON o vomitoxina) es un tricoteceno producido por *Fusarium graminearum*, común en trigo y maíz. Causa vómito y rechazo del alimento en animales. La zearalenona (ZEA) es una micotoxina estrogénica que afecta la reproducción porcina. Ambos compuestos están regulados en cereales y derivados.

## Preparación de Muestra

La preparación de muestra es crítica en el análisis de micotoxinas debido a la matriz alimentaria compleja y las concentraciones traza (ng/g o µg/kg). Las dos estrategias más empleadas son:

### QuEChERS (Quick, Easy, Cheap, Effective, Rugged, Safe)

Originalmente desarrollado para plaguicidas, el método QuEChERS se ha adaptado exitosamente para micotoxinas. El procedimiento general incluye:

1. **Extracción**: La muestra homogénea se extrae con acetonitrilo acidificado (1% ácido acético) o una mezcla acetonitrilo:agua (84:16).
2. **Partición**: Se añaden sales (MgSO4, NaCl, citratos) para inducir la separación de fases.
3. **Limpieza (d-SPE)**: El extracto se limpia con adsorbentes como C18, PSA (amina primaria secundaria) o Z-Sep+ (sílice modificada con zirconio) para eliminar ácidos grasos, pigmentos y azúcares.

### Columnas de Inmunoafinidad (IAC)

Las columnas de inmunoafinidad ofrecen la mayor selectividad al emplear anticuerpos específicos inmovilizados. El procedimiento típico:

1. El extracto acuoso se pasa a través de la columna a flujo controlado.
2. Se lava con agua o PBS para eliminar interferentes.
3. La micotoxina se eluye con metanol puro y se evapora para reconstituir en fase móvil.

Aunque las IAC tienen un mayor costo por muestra, proporcionan extractos más limpios y permiten alcanzar límites de detección más bajos. La elección entre QuEChERS e IAC depende de los límites regulatorios que se deben cumplir y la complejidad de la matriz.

## Condiciones Instrumentales en LC-MS/MS

### Separación Cromatográfica

La separación de micotoxinas se realiza típicamente en fase reversa con columnas C18 (100-150 mm × 2.1 mm, 1.7-3 µm de partícula). La fase móvil consiste en:

- **Fase A**: Agua con 0.1-0.5% de ácido fórmico o 5 mM de acetato de amonio.
- **Fase B**: Metanol o acetonitrilo con el mismo modificador.

Se emplea un gradiente lineal que va de 10% a 95% de B en 8-12 minutos, con un flujo de 0.3-0.4 mL/min. La temperatura de la columna se mantiene a 40 °C.

### Ionización y Condiciones ESI

La ionización por electrospray (ESI) en modo positivo es la más utilizada. Parámetros típicos:

- **Voltaje del capilar**: 3.0-4.5 kV
- **Temperatura de desolvatación**: 300-450 °C
- **Flujo de gas de cono**: 30-50 L/h
- **Flujo de gas de desolvatación**: 600-1000 L/h

### Transiciones MRM

La adquisición por monitoreo de reacciones múltiples (MRM) ofrece la máxima selectividad. Cada micotoxina se identifica mediante una transición de cuantificación (cuantificador) y al menos una transición de confirmación (calificador).

**Ejemplo de transiciones MRM para aflatoxinas:**

| Analito | Transición Cuantificador | CE (eV) | Transición Calificador | CE (eV) |
|---------|------------------------|---------|----------------------|---------|
| AFB1    | 313.1 → 241.1          | 35      | 313.1 → 285.1        | 25      |
| AFB2    | 315.1 → 259.1          | 30      | 315.1 → 287.1        | 28      |
| AFG1    | 329.1 → 243.1          | 30      | 329.1 → 311.1        | 25      |
| AFG2    | 331.1 → 245.1          | 35      | 331.1 → 313.1        | 28      |
| OTA     | 404.1 → 239.0          | 25      | 404.1 → 221.0        | 35      |
| FB1     | 722.4 → 334.4          | 45      | 722.4 → 352.4        | 40      |

La relación entre el área del cuantificador y el calificador debe mantenerse dentro de tolerancias definidas (±20-30% respecto a un estándar) para confirmar la identidad del analito.

## Límites Regulatorios y Normatividad Aplicable

### Regulación Europea (EU 1881/2006 y modificaciones)

El Reglamento (UE) 1881/2006, actualizado mediante Reglamento (UE) 2023/915, establece los contenidos máximos de micotoxinas en alimentos:

| Micotoxina | Alimento | Límite Máximo |
|-----------|----------|---------------|
| Aflatoxina B1 | Cereales | 2 µg/kg |
| Aflatoxinas totales (B1+B2+G1+G2) | Cereales | 4 µg/kg |
| Ocratoxina A | Cereales no procesados | 5 µg/kg |
| Fumonisinas (B1+B2) | Maíz | 1000 µg/kg |
| DON | Trigo (harina) | 750 µg/kg |
| ZEA | Maíz | 200 µg/kg |

### Normatividad Mexicana (NOM-188-SSA1-2002)

En México, la NOM-188-SSA1-2002 establece los límites máximos permisibles de aflatoxinas totales en alimentos para consumo humano:

- **Harinas de maíz y trigo**: 20 µg/kg
- **Cacahuate y sus derivados**: 20 µg/kg
- **Frijol, arroz y otros cereales**: 20 µg/kg
- **Leche**: 0.5 µg/kg (aflatoxina M1)

Es importante destacar que la NOM-188 es menos restrictiva que la regulación europea. Sin embargo, las empresas exportadoras mexicanas deben cumplir con límites más estrictos del país destino, lo que hace indispensable contar con métodos analíticos con LOD/LOQ adecuados.

## Validación del Método Analítico

La validación del método LC-MS/MS para micotoxinas debe seguir los lineamientos de la guía SANTE/11312/2021 (UE) o la NMX-EC-17025-IMNC-2018. Los parámetros esenciales son:

### Linealidad
Se evalúa mediante curvas de calibración con estándares en matriz (matrix-matched calibration) en un rango que cubra desde el límite de cuantificación hasta al menos 2-3 veces el límite regulatorio. Se espera un coeficiente de correlación R² ≥ 0.99.

### Límite de Detección (LOD) y Límite de Cuantificación (LOQ)
- **LOD**: Concentración que produce una relación señal/ruido (S/N) ≥ 3:1.
- **LOQ**: Concentración que produce S/N ≥ 10:1, con precisión (RSD) ≤ 20% y exactitud dentro de 80-120%.

### Exactitud y Precisión
- **Exactitud**: Se evalúa mediante ensayos de recuperación a tres niveles de concentración (bajo, medio, alto). La recuperación esperada es de 70-120%.
- **Precisión**: Se mide como repetibilidad (intradía) y reproducibilidad (interdía), expresada como RSD. Se acepta RSD ≤ 20% al nivel del LOQ y ≤ 15% a niveles más altos.

### Efecto de Matriz
El efecto de matriz (supresión o realce de ionización) se evalúa comparando las pendientes de las curvas en solvente vs. en matriz. Se recomienda el uso de estándares internos isotópicamente marcados (¹³C) para corregir este efecto.

## Aplicaciones y Beneficios del LC-MS/MS en el Análisis de Micotoxinas

### Análisis Multianalito
Una de las ventajas más importantes del LC-MS/MS es la capacidad de cuantificar simultáneamente decenas de micotoxinas en una sola corrida analítica de 10-15 minutos. Esto permite a los laboratorios obtener un perfil completo de contaminación sin multiplicar los tiempos de análisis.

### Monitoreo de Materias Primas y Producto Terminado
El análisis regular de micotoxinas es fundamental en industrias de alimentos balanceados, molienda de granos, producción de cereales para desayuno y fabricación de bebidas (cerveza, café). La implementación de programas de monitoreo con LC-MS/MS permite:

- Verificar el cumplimiento normativo de lotes de importación.
- Identificar proveedores con mayor riesgo de contaminación.
- Establecer puntos críticos de control en el proceso productivo.
- Garantizar la seguridad del producto final antes de su liberación.

### Apoyo a la Investigación y Desarrollo
El LC-MS/MS también es una herramienta valiosa en estudios de ocurrencia de micotoxinas, evaluación de estrategias de mitigación (selección de variedades resistentes, manejo de almacenamiento) y desarrollo de nuevos adsorbentes para la descontaminación.

---

**En Solinsa contamos con equipos LC-MS/MS de última generación para el análisis cuantitativo de micotoxinas en matrices alimentarias. Ofrecemos métodos validados para aflatoxinas (B1, B2, G1, G2, M1), ocratoxina A, fumonisinas (B1, B2), desoxinivalenol y zearalenona, con LOD que cumplen los límites más exigentes de la regulación europea y mexicana. Brindamos asesoría en la selección del método de preparación de muestra (QuEChERS o inmunoafinidad) y en la interpretación de resultados conforme a la normatividad aplicable. Para mayor información, contáctenos a través de nuestra página web o directamente en nuestras instalaciones.**
