---
title: "Determinación de Edulcorantes no Calóricos en Alimentos y Bebidas por HPLC"
published: 2026-05-07
slug: edulcorantes-no-caloricos-hplc-alimentos-bebidas
category: cat-ind-alimentos
tags: [edulcorantes, HPLC, aspartame, sucralosa, stevia, alimentos, bebidas, control de calidad]
audience: [T1-Industria]
lang: es-MX
wordcount: ~1500
---

## La Demanda de Edulcorantes no Calóricos en la Industria Alimentaria

El mercado mexicano de alimentos y bebidas ha experimentado una transformación significativa en la última década. La implementación de la NOM-051-SCFI/SSA1 (etiquetado frontal de advertencia), los impuestos a bebidas azucaradas y la creciente conciencia del consumidor sobre la relación entre el consumo de azúcar y enfermedades metabólicas han impulsado la reformulación masiva de productos. Los edulcorantes no calóricos —aspartame, sucralosa, acesulfame K, sacarina, ciclamato y glucósidos de esteviol— se han convertido en ingredientes omnipresentes en refrescos, jugos, yogures, postres lácteos, galletas y productos horneados.

Este cambio plantea un desafío analítico importante: los laboratorios de control de calidad deben cuantificar estos edulcorantes de manera precisa, selectiva y simultánea en matrices alimentarias muy diversas, cumpliendo con los límites máximos permitidos establecidos tanto por la regulación mexicana (NOM-051) como por el Codex Alimentarius (CXS 192-1995).

## Edulcorantes Regulados: Propiedades y Límites

Cada edulcorante tiene un perfil fisicoquímico particular que determina su método de análisis, su poder edulcorante y su aplicación en alimentos.

| Edulcorante | Poder edulcorante (vs. sacarosa) | Límite máximo (mg/kg o mg/L) — Codex / NOM | Aplicaciones típicas |
|---|---|---|---|
| Aspartame | 180 – 200 × | Bebidas: 600; Lácteos: 1000; Confitería: 2500 | Refrescos, yogures, chicles |
| Sucralosa | 600 × | Bebidas: 300; Lácteos: 400; Postres: 800 | Bebidas light, productos horneados |
| Acesulfame K | 200 × | Bebidas: 350; Lácteos: 350; Confitería: 500 | Refrescos, mezclas en polvo |
| Sacarina | 300 – 500 × | Bebidas: 80; Alimentos: 200; Edulcorantes de mesa: 1200 | Edulcorantes de mesa, bebidas dietéticas |
| Ciclamato | 30 – 50 × | Bebidas: 400; Alimentos: 500; Edulcorantes de mesa: 800 | Edulcorantes de mesa, bebidas |
| Glucósidos de esteviol | 200 – 300 × | Bebidas: 200; Lácteos: 200; Confitería: 400 | Refrescos, yogures, productos naturales |

*Límites de referencia basados en Codex Alimentarius General Standard for Food Additives (GSFA) y NOM-051-SCFI/SSA1-2010.*

## Método HPLC para Análisis Simultáneo de Edulcorantes

### Fundamentos del método

La cromatografía líquida de alta resolución (HPLC) en fase reversa con columna C18 es el método de referencia para la separación y cuantificación de edulcorantes no calóricos. La detección se realiza típicamente con arreglo de diodos (DAD) o detector de luz dispersante evaporativa (ELSD). La elección del detector depende de los edulcorantes objetivo:

- **DAD (UV-Vis):** Excelente para aspartame (λ = 210 nm), acesulfame K (λ = 227 nm), sacarina (λ = 280 nm) y ciclamato (λ = 210 nm, aunque con menor sensibilidad). No detecta sucralosa ni glucósidos de esteviol con sensibilidad adecuada.
- **ELSD:** Detecta todos los edulcorantes independientemente de su cromóforo. Es la opción recomendada cuando se requiere un método universal que incluya sucralosa y stevia.
- **MS (espectrometría de masas):** La máxima selectividad y sensibilidad. Recomendada para matrices complejas y confirmación de identidad.

### Condiciones cromatográficas recomendadas

| Parámetro | Condición |
|---|---|
| Columna | C18, 250 × 4.6 mm, 5 µm |
| Fase móvil A | Buffer fosfato de potasio 20 mM, pH 4.5 |
| Fase móvil B | Acetonitrilo |
| Gradiente | 0 min: 5 % B → 10 min: 20 % B → 18 min: 50 % B → 22 min: 5 % B → 25 min: 5 % B |
| Flujo | 1.0 mL/min |
| Temperatura de columna | 30 °C |
| Volumen de inyección | 20 µL |
| Detección DAD | 210 nm, 227 nm, 280 nm |
| Detección ELSD | Nebulizador: 40 °C; Evaporador: 60 °C; Flujo N₂: 1.5 L/min |

### Perfil de elución

Bajo las condiciones descritas, el orden de elución típico es:

1. **Acesulfame K** — tR ≈ 4.2 min (detección a 227 nm)
2. **Sacarina** — tR ≈ 5.8 min (detección a 280 nm)
3. **Ciclamato** — tR ≈ 7.1 min (detección a 210 nm o ELSD)
4. **Aspartame** — tR ≈ 11.5 min (detección a 210 nm)
5. **Glucósidos de esteviol (rebaudiósido A)** — tR ≈ 14.3 min (ELSD o MS)
6. **Sucralosa** — tR ≈ 17.8 min (ELSD o MS)

> El rebaudiósido A y el esteviósido, los principales glucósidos de esteviol, pueden resolverse con un gradiente más lento. La sucralosa no absorbe en UV-Vis, por lo que requiere ELSD o MS para su detección.

## Preparación de Muestra según Matriz

La preparación de muestra es la etapa más crítica del análisis. La diversidad de matrices —bebidas carbonatadas, jugos, yogures, productos horneados— requiere enfoques específicos.

### Bebidas carbonatadas y jugos

1. Degasificar la muestra mediante sonicación durante 5 minutos o agitación suave
2. Filtrar a través de membrana de 0.45 µm (nylon o PVDF)
3. Diluir si es necesario (factor de dilución 1:2 a 1:10 según la concentración esperada)
4. Inyectar directamente en HPLC

*Ventaja: preparación mínima. Desafío: el CO₂ disuelto puede generar burbujas en el sistema.*

### Yogures y productos lácteos

1. Pesar 2.0 g de muestra homogeneizada
2. Añadir 10 mL de solución amortiguadora de fosfato pH 4.5
3. Agitar en vórtex durante 1 minuto
4. Centrifugar a 10 000 rpm durante 10 minutos a 4 °C
5. Recuperar el sobrenadante y filtrar con membrana 0.45 µm
6. Ajustar pH a 4.5 si es necesario

*Desafío: las proteínas lácteas precipitan a pH cercano a su punto isoeléctrico (pH 4.5–4.6), lo que elimina interferencias pero puede atrapar edulcorantes por adsorción.*

### Productos horneados (galletas, panes, pasteles)

1. Pesar 5.0 g de muestra finamente molida
2. Extraer con 25 mL de metanol:agua (70:30, v/v) con agitación durante 15 minutos
3. Centrifugar a 8000 rpm durante 10 minutos
4. Evaporar el sobrenadante a sequedad en rotavapor a 40 °C
5. Reconstituir en 5 mL de fase móvil
6. Filtrar con membrana 0.45 µm
7. Opcional: realizar clean-up con cartucho SPE C18 para eliminar lípidos y pigmentos

### Edulcorantes de mesa (polvo, gotas, tabletas)

1. Pesar o medir una cantidad representativa equivalente a una porción declarada
2. Disolver en 25 mL de agua desionizada
3. Agitar hasta disolución completa
4. Diluir a un volumen conocido (50 o 100 mL)
5. Filtrar con membrana 0.45 µm

## Validación del Método

La validación debe cubrir los parámetros establecidos por la guía ICH Q2(R1) y Eurachem:

### Linealidad

| Edulcorante | Rango (mg/L) | R² típico |
|---|---|---|
| Acesulfame K | 5 – 500 | > 0.9995 |
| Sacarina | 2 – 200 | > 0.9998 |
| Ciclamato | 10 – 1000 | > 0.9990 |
| Aspartame | 5 – 500 | > 0.9995 |
| Sucralosa | 10 – 500 | > 0.9990 (ELSD) |
| Rebaudiósido A | 5 – 500 | > 0.9995 (ELSD) |

### Límites de detección y cuantificación

| Edulcorante | LOD (mg/L) | LOQ (mg/L) | Detector |
|---|---|---|---|
| Acesulfame K | 0.3 | 1.0 | DAD 227 nm |
| Sacarina | 0.1 | 0.3 | DAD 280 nm |
| Ciclamato | 1.0 | 3.0 | DAD 210 nm |
| Aspartame | 0.5 | 1.5 | DAD 210 nm |
| Sucralosa | 2.0 | 5.0 | ELSD |
| Rebaudiósido A | 0.5 | 1.5 | ELSD |

### Precisión y exactitud

- **Precisión (repetibilidad):** CV < 5 % para todos los analitos a concentraciones medias y altas; CV < 10 % cerca del LOQ
- **Precisión intermedia:** CV < 10 % (dos analistas, tres días, dos columnas diferentes)
- **Exactitud:** Recuperaciones entre 90 y 107 % mediante adición de estándar a tres niveles de concentración (bajo, medio, alto)

## Desafíos Analíticos y Estrategias de Mitigación

### Matrices complejas

Las matrices alimentarias presentan interferencias que pueden coeluir con los edulcorantes. Los colorantes artificiales (tartrazina, azul brillante), los ácidos orgánicos (ácido cítrico, ácido málico) y los conservadores (benzoato de sodio, sorbato de potasio) son interferentes comunes en HPLC-UV.

**Estrategia:** Utilizar una columna C18 con selectividad optimizada para edulcorantes, gradiente de fase móvil que separe los interferentes, y detección a múltiples longitudes de onda para confirmar pureza de pico. En casos extremos, recurrir a LC-MS/MS para confirmación.

### Edulcorantes múltiples simultáneos

Muchas formulaciones combinan dos o más edulcorantes para aprovechar efectos sinérgicos (por ejemplo, aspartame + acesulfame K, o stevia + sucralosa). La cuantificación simultánea requiere una separación cromatográfica completa de todos los analitos.

**Estrategia:** Optimizar el gradiente para resolver todos los picos en una sola corrida de 25 minutos. Utilizar ELSD como detector universal o DAD con monitoreo a diferentes longitudes de onda.

### Efecto de matriz

Los componentes de la muestra (azúcares residuales, proteínas, lípidos, ácidos) pueden modificar la respuesta del detector, especialmente en ELSD, donde la presencia de compuestos no volátiles altera la nebulización y evaporación.

**Estrategia:** Utilizar curvas de calibración preparadas en matriz blanca (matriz sin edulcorantes, cuando esté disponible), o el método de adición de estándar para muestras críticas.

## Equipo Solinsa para Análisis de Edulcorantes

En Solinsa ofrecemos cromatógrafos HPLC completamente configurados para el análisis de edulcorantes no calóricos, incluyendo sistemas con detector DAD para aspartame, acesulfame K, sacarina y ciclamato, y sistemas con ELSD para la detección universal de todos los edulcorantes incluyendo sucralosa y glucósidos de esteviol. También disponemos de sistemas LC-MS/MS para confirmación y análisis a niveles traza. Nuestro equipo de aplicaciones está a su disposición para desarrollar y validar métodos específicos para su matriz y sus necesidades de control de calidad. Contáctenos en **www.solinsa.com**.
