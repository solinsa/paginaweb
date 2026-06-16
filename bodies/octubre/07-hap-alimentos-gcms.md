---
title: "Determinación de Hidrocarburos Aromáticos Policíclicos (HAP) en Alimentos por GC-MS"
date: 2025-10-19
category: cat-ind-alimentos
tags: [HAP, PAH, GC-MS, alimentos, ahumados, asados, Benzo[a]pireno, EU 1881/2006, extracción]
audience: [T1-Alimentos]
cover: Polución por HAP en alimentos ahumados y asados — métodos de extracción, análisis por GC-MS y cumplimiento del Reglamento EU 1881/2006.
---

## Introducción: ¿Qué son los HAP y por qué monitorearlos?

Los **hidrocarburos aromáticos policíclicos (HAP**, o PAH por sus siglas en inglés) constituyen una familia de más de cien compuestos orgánicos conformados por dos o más anillos aromáticos fusionados. Se forman durante la combustión incompleta de materia orgánica —carbón, petróleo, gas, madera, tabaco, alimentos— y están presentes de forma ubicua en el medio ambiente.

En el contexto de la industria alimentaria, los HAP adquieren relevancia crítica porque se generan durante procesos térmicos como el ahumado, el asado a la parrilla, el tostado y el secado directo con humo. Algunos de estos compuestos, en particular el **Benzo[a]pireno (BaP)**, han sido clasificados por la Agencia Internacional para la Investigación del Cáncer (IARC) como carcinógenos humanos del Grupo 1. Esto ha llevado a las autoridades regulatorias de todo el mundo a establecer límites máximos permitidos en alimentos.

La **cromatografía de gases acoplada a espectrometría de masas (GC-MS)** se ha consolidado como la técnica de referencia para la determinación cuantitativa de HAP en matrices alimentarias, gracias a su sensibilidad, selectividad y capacidad de confirmación inequívoca de la identidad de cada analito.

## Marco regulatorio: Reglamento UE 1881/2006 y su relevancia en México

El **Reglamento (CE) No 1881/2006** de la Unión Europea fija los contenidos máximos de ciertos contaminantes en los productos alimenticios. Para los HAP, este reglamento —modificado posteriormente por el Reglamento (UE) No 835/2011— establece límites para la suma de cuatro HAP (PAH4) y para el BaP individual:

| Compuesto | Límite en aceites y grasas (μg/kg) | Límite en carnes ahumadas (μg/kg) | Límite en alimentos infantiles (μg/kg) |
|---|---|---|---|
| Benzo[a]pireno (BaP) | 2.0 | 5.0 | 1.0 |
| PAH4 (BaP + Chr + BbF + BaA) | 10.0 | 30.0 | 1.0 |

> **Nota importante:** Aunque este reglamento es europeo, su influencia se extiende globalmente. En México, la COFEPRIS y la industria exportadora de alimentos procesados, cárnicos y lácteos exigen cada vez más controles analíticos alineados con estos estándares internacionales para mantener la competitividad en mercados de exportación.

Los **PAH4** incluyen:
- **Benzo[a]pireno (BaP)** — indicador principal y el más tóxico.
- **Criseno (Chr)** — frecuentemente co-eluido, requiere buena separación cromatográfica.
- **Benzo[b]fluoranteno (BbF)** — isómero del Benzo[k]fluoranteno, difícil de resolver.
- **Benz[a]antraceno (BaA)** — utilizado como marcador adicional de contaminación.

## Preparación de muestra: el paso más crítico

La determinación de HAP en alimentos presenta desafíos analíticos significativos, principalmente por las bajas concentraciones esperadas (μg/kg) y la complejidad de las matrices grasas.

### Extracción Soxhlet

Para matrices sólidas como carnes ahumadas, pescados secos, cereales tostados y especias, la extracción Soxhlet con disolventes orgánicos sigue siendo un método robusto y ampliamente aceptado. El protocolo típico emplea:

1. **Muestra liofilizada o deshidratada** (5–10 g).
2. **Ciclo de extracción con n-hexano/acetona** (80:20 v/v) durante 6–8 horas.
3. **Concentración del extracto** en rotavapor a 40 °C.

### Purificación por SPE (Extracción en Fase Sólida)

Tras la extracción, el extracto crudo contiene una cantidad considerable de coextractivos que pueden interferir con el análisis. La purificación mediante SPE con fases de sílice modificada es obligatoria:

| Etapa | Fase | Disolvente | Objetivo |
|---|---|---|---|
| Acondicionamiento | Sílice o Florisil | n-hexano | Activar la fase |
| Carga de muestra | — | Extracto en hexano | Retener analitos |
| Lavado | Sílice | n-hexano | Eliminar grasas no polares |
| Elución | Sílice | Diclorometano/hexano (20:80) | Recuperar HAP |

> **Consejo práctico:** Para matrices con alto contenido graso (>20%), se recomienda un paso de saponificación previa con KOH metanólica antes de la extracción líquido-líquido, lo que reduce drásticamente la cantidad de lípidos coextraídos y prolonga la vida útil de la columna cromatográfica.

### Alternativas modernas

Técnicas más rápidas como la **extracción asistida por microondas (MAE)** y la **extracción con líquidos presurizados (PLE)** permiten reducir los tiempos de preparación a 20–30 minutos con rendimientos comparables al Soxhlet, aunque requieren una inversión inicial mayor en equipamiento.

## Condiciones cromatográficas para GC-MS

Una vez purificado, el extracto se analiza por GC-MS. Las condiciones típicas para la separación de los 15+1 HAP prioritarios de la UE son las siguientes:

### Columna y programa de temperatura

| Parámetro | Condición recomendada |
|---|---|
| Columna | DB-5MS UI o equivalente (30 m × 0.25 mm × 0.25 μm) |
| Gas portador | Helio (1.0 mL/min, flujo constante) |
| Inyección | Splitless, 1 μL, 280 °C |
| Rampa de temperatura | 60 °C (1 min) → 10 °C/min → 300 °C (10 min) |
| Tiempo total de corrida | ~35 min |

### Detección por espectrometría de masas

| Parámetro | Condición |
|---|---|
| Modo de ionización | EI (70 eV) |
| Modo de adquisición | SIM (Selected Ion Monitoring) |
| Temperatura de fuente | 230 °C |
| Temperatura de cuadrupolo | 150 °C |
| Línea de transferencia | 280 °C |

### Iones monitoreados para los PAH4

| Compuesto | Ion cuantificador (m/z) | Iones cualificadores (m/z) |
|---|---|---|
| Benz[a]antraceno | 228 | 226, 229 |
| Criseno | 228 | 226, 229 |
| Benzo[b]fluoranteno | 252 | 250, 253 |
| Benzo[a]pireno | 252 | 250, 253 |

> **Recomendación:** Verificar periódicamente la resolución entre isómeros críticos —especialmente benzo[b]fluoranteno vs. benzo[k]fluoranteno— utilizando una columna con selectividad mejorada para HAP o una columna de fenil-metilpolisiloxano al 50%.

## LOD, LOQ y parámetros de desempeño

Los límites de detección (LOD) y cuantificación (LOQ) deben establecerse para cada matriz específica, ya que los efectos de matriz pueden variar significativamente:

| Parámetro | Definición | Valor típico en GC-MS (modo SIM) |
|---|---|---|
| LOD (3:1 S/N) | Concentración mínima detectable | 0.05–0.1 μg/kg |
| LOQ (10:1 S/N) | Concentración mínima cuantificable | 0.15–0.3 μg/kg |
| R² de curva de calibración | Linealidad (0.5–50 μg/L) | ≥0.999 |
| Precisión (RSD%) | Repetitividad intra-día (n=6) | <10% |
| Recuperación (%) | Exactitud (fortificación a 3 niveles) | 70–120% |

### Control de calidad interno (QA/QC)

Un programa robusto de aseguramiento de calidad debe incluir:

- **Blancos de método** — un blanco por cada lote de 10 muestras.
- **Blancos fortificados** — para verificar la recuperación en cada lote.
- **Estándares internos deuterados** — BaP-d12, Criseno-d12 añadidos al inicio de la preparación.
- **Material de referencia certificado (CRM)** — analizado periódicamente para validar la exactitud.
- **Verificación con estándar de calibración** cada 20 inyecciones.

## HAP en alimentos ahumados vs. asados a la parrilla

Existen diferencias importantes en el perfil de HAP según el método de cocción:

| Método | Principales HAP generados | Concentración típica total (μg/kg) |
|---|---|---|
| Ahumado tradicional (leña) | BaP, BbF, BaA, Chr, IcdP | 5–40 |
| Asado a la parrilla (carbón vegetal) | BaP, BaA, Chr | 2–15 |
| Asado a la parrilla (gas) | Principalmente BaA, Chr | 0.5–5 |
| Tostado de café | BaP, DbA | 0.2–2 |
| Horneado convencional | Trazas detectables | <0.5 |

> **Dato clave:** En alimentos ahumados, hasta el 60% de los HAP se encuentra en las capas superficiales (primeros 2 mm), por lo que la preparación homogénea de la muestra —incluyendo el corte fino y la molienda criogénica— es esencial para obtener resultados representativos.

## Consideraciones prácticas para el laboratorio

### Selección del método de extracción

La elección entre Soxhlet, PLE o MAE depende del volumen de muestras, el presupuesto y los requisitos de tiempo de respuesta. Para laboratorios que procesan más de 30 muestras semanales, la inversión en un sistema PLE se amortiza rápidamente gracias a la reducción de disolvente y tiempo.

### Validación del método

Siguiendo la guía EURACHEM y los criterios de la NOM-177-SSA1, la validación debe cubrir:

- Selectividad (identificación inequívoca por tiempos de retención y razones de iones).
- Linealidad y rango de trabajo (mínimo 6 niveles de calibración).
- Precisión (repetitividad y precisión intermedia).
- Exactitud (recuperación con CRM o fortificación).
- Robustez (variación controlada de parámetros críticos).
- Incertidumbre de medición combinada.

### Mantenimiento del sistema GC-MS

Los extractos de HAP —aun después de una purificación cuidadosa— pueden contener residuos que afectan el desempeño del sistema:

- **Cambiar el liner del inyector** cada 50 inyecciones o al observar colas en los picos.
- **Recortar la pre-columna** (si se utiliza guard column) cada 100 inyecciones.
- **Realizar un tune automático** con perfluorotributilamina (PFTBA) al inicio de cada secuencia.
- **Verificar el voltaje de la fuente** y limpiarla cuando la respuesta del estándar interno caiga por debajo del 50% del valor inicial.

## Conclusión

La determinación de HAP en alimentos por GC-MS es un análisis exigente pero perfectamente abordable con la instrumentación, los consumibles y el conocimiento técnico adecuados. La combinación de una preparación de muestra robusta (Soxhlet + SPE), una separación cromatográfica optimizada en columna apolar y la detección por MS en modo SIM permite alcanzar los LOD necesarios para cumplir con los límites regulatorios más estrictos.

En Solinsa ofrecemos asesoría integral para la implementación de métodos de análisis de HAP: desde la selección del equipo GC-MS adecuado y las columnas capilares óptimas, hasta la capacitación del personal en técnicas de extracción, purificación y cuantificación. Contáctanos para recibir una propuesta personalizada para tu laboratorio.

**Solinsa — Soluciones Integrales Analíticas**  
*Cromatografía, espectrometría y servicio para tu laboratorio.*
