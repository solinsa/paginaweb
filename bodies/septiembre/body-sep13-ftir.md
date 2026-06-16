Published: 2026-09-13
Category: cat-ftir
Title: "Espectroscopia FTIR para Control de Calidad en la Industria Química"
Target audience: T1-Farmacéutica (QC), T2-Industrial (QC), T1-Química

## Introducción

En el laboratorio de control de calidad de la industria química y farmacéutica, la confirmación de identidad de materias primas y producto terminado es un paso crítico que no admite ambigüedades. La espectroscopia infrarroja por transformada de Fourier (FTIR) se ha consolidado como la técnica de elección para esta tarea, combinando velocidad, especificidad y bajo costo por análisis. Un espectro FTIR funciona como una **huella digital molecular**: cada compuesto absorbe radiación infrarroja en longitudes de onda características, generando un patrón único que permite identificarlo sin necesidad de ensayos destructivos extensos.

En este artículo exploramos cómo la espectroscopia FTIR —en sus modalidades de reflectancia total atenuada (ATR) y transmisión con pastilla de KBr— se aplica en la rutina de QC mexicana, el valor estratégico de las bibliotecas espectrales, y los requisitos de cumplimiento frente a la Farmacopea de los Estados Unidos Mexicanos (FEUM).

## FTIR en Modo ATR: La Revolución del Muestreo Directo

Durante décadas, la preparación de muestras para FTIR implicaba moler el analito con bromuro de potasio (KBr) de grado espectroscópico y prensarlo hidráulicamente para formar una pastilla transparente al infrarrojo. Aunque el método de **pastilla de KBr** sigue siendo útil para ciertos análisis cuantitativos y para sólidos particularmente duros, presenta desventajas operativas importantes:

- Requiere tiempo y habilidad técnica para preparar pastillas homogéneas.
- El KBr es higroscópico; la humedad residual introduce bandas de agua que interfieren en la región de 3400 cm⁻¹ y 1640 cm⁻¹.
- La pastilla es frágil y no siempre se puede recuperar la muestra.
- El equipo de prensa hidráulica representa un costo adicional y ocupa espacio en el laboratorio.

La llegada del **accesorio ATR (Reflectancia Total Atenuada)** transformó el panorama. En ATR, la muestra se coloca directamente sobre un cristal de diamante, seleniuro de zinc (ZnSe) o germanio, y el haz infrarrojo penetra apenas unos micrómetros en la superficie de la muestra antes de reflejarse hacia el detector. Las ventajas son inmediatas:

- **Cero preparación de muestra** — se analiza el sólido, líquido, pasta o gel tal cual.
- **No necesita KBr** ni prensa hidráulica.
- **Limpieza rápida** entre muestras con alcohol isopropílico o acetona.
- **Repetibilidad superior** al eliminar la variabilidad de la preparación manual.

| Característica | ATR (Diamante) | Pastilla de KBr |
|---|---|---|
| Preparación de muestra | Ninguna | Molienda + prensado (~5 min) |
| Tiempo por análisis | 30 – 60 segundos | 5 – 10 minutos |
| Consumibles | Solo solvente de limpieza | KBr grado IR, mortero |
| Interferencia por humedad | Mínima | Alta (KBr higroscópico) |
| Recuperación de muestra | Completa | No recuperable |
| Costo de accesorio inicial | Alto ($3k – $8k USD) | Bajo (prensa manual) |

> *"El ATR no solo aceleró el QC de materias primas; eliminó la principal fuente de error en FTIR: la preparación de la muestra."* — Ingeniero de aplicaciones, laboratorio farmacéutico mexicano.

Para la mayoría de las aplicaciones de identidad en QC farmacéutico, el modo ATR con cristal de diamante es hoy el estándar de facto.

## Bibliotecas Espectrales: La Base de Datos de tu Laboratorio

Un espectrómetro FTIR produce decenas de miles de puntos de datos por análisis. Interpretar visualmente cada banda de absorción requiere años de experiencia. Por eso, las **bibliotecas espectrales** son el verdadero motor del trabajo rutinario.

Una biblioteca espectral es una base de datos donde cada entrada asocia un espectro de referencia —adquirido bajo condiciones controladas— con la identidad del compuesto, número de lote, fabricante y fecha de registro. Los software modernos de FTIR (como OMNIC, Spectrum, o ResolutionPro) permiten:

- **Buscar automáticamente** el espectro de la muestra contra la biblioteca en milisegundos.
- **Calcular un índice de similitud** (Hit Quality Index, HQI) que va de 0 a 100.
- **Generar un reporte** de "Pasa / No pasa" con criterios configurables.

Solinsa recomienda construir una **biblioteca interna** con los materiales que realmente se reciben en la planta, complementada con bibliotecas comerciales (como HR Aldrich FTIR Collection o Sigma-Aldrich) para compuestos de referencia.

## Verificación de Identidad de Materias Primas

Cada lote de materia prima que ingresa a una planta farmacéutica debe ser identificado positivamente antes de liberarse a producción. El procedimiento típico con FTIR es:

1. **Adquirir el espectro** de referencia de un lote certificado y almacenarlo en la biblioteca.
2. **Analizar la muestra entrante** usando exactamente el mismo método (resolución, número de barridos, cristal ATR).
3. **Comparar espectralmente** usando el algoritmo de búsqueda. Un HQI ≥ 95 % confirma identidad.
4. **Revisar visualmente** bandas críticas en caso de HQI marginal (90–94 %).
5. **Generar el reporte** de QC y vincularlo al lote en el LIMS.

Ejemplo típico: paracetamol (acetaminofén) presenta bandas características a 3320 cm⁻¹ (N-H), 1655 cm⁻¹ (C=O amida) y 1610 cm⁻¹ (C=C aromático). Si el espectro de la muestra coincide con la referencia dentro del umbral, se libera el lote. Si no, se activa el protocolo de investigación de no conformidades.

## Detección de Adulteración: Cuando un Espectro no Coincide

Uno de los usos más valiosos del FTIR en QC va más allá de la identidad simple: la **detección de adulteración**. Una materia prima puede estar contaminada con subproductos de síntesis o diluida con excipientes más baratos sin que los ensayos fisicoquímicos convencionales lo revelen. El FTIR, en cambio:

- **Detecta bandas fantasma** — absorciones que no pertenecen al compuesto esperado.
- **Identifica patrones anómalos** en la región de huella digital (1500 – 600 cm⁻¹).
- **Permite análisis de mezclas** mediante sustracción espectral: al restar el espectro del compuesto principal, emerge el espectro del adulterante.

> *"En una ocasión detectamos adulteración de glicerina vegetal con propilenglicol al 15 %. El análisis por FTIR lo reveló en 45 segundos; los métodos de Farmacopea por HPLC hubieran tomado tres horas."* — Supervisor de QC, industria farmacéutica mexicana.

Casos documentados incluyen la adulteración de aceite de oliva con aceites vegetales más baratos, de miel con jarabe de maíz de alta fructosa, y de principios activos farmacéuticos con excipientes inertes para incrementar el volumen aparente.

## Cumplimiento con Farmacopea de los Estados Unidos Mexicanos (FEUM)

La FEUM establece criterios específicos para la identificación por espectroscopia infrarroja. Los laboratorios que operan bajo regulación sanitaria (COFEPRIS) deben asegurar:

- Que el equipo FTIR cuente con **calificación de instalación (IQ), operación (OQ) y desempeño (PQ)** documentada.
- Verificación diaria del desempeño con un **estándar de poliestireno** — la FEUM exige que las bandas del poliestireno a 3027 cm⁻¹, 1601 cm⁻¹, 1028 cm⁻¹ y 907 cm⁻¹ se encuentren dentro de una tolerancia de ±2 cm⁻¹.
- Que el método de preparación de muestra (ATR o KBr) esté **validado** para cada tipo de material.
- Registro y trazabilidad de todos los espectros generados, con firma electrónica cuando aplique (NOM-059-SSA1-2015).

| Requisito FEUM | Frecuencia | Criterio de Aceptación |
|---|---|---|
| Calificación IQ/OQ/PQ | Anual y post-mantenimiento | Documento firmado por responsable |
| Verificación con poliestireno | Diaria | Bandas dentro de ±2 cm⁻¹ |
| Validación de método ATR | Por cada tipo de matriz | Repetibilidad RSD < 2 % |
| Trazabilidad de espectros | Cada análisis | Archivo digital con metadatos |

## Conclusión

La espectroscopia FTIR sigue siendo una de las herramientas más versátiles y rentables en el laboratorio de control de calidad. Con la adopción generalizada del modo ATR, los tiempos de análisis se han reducido de minutos a segundos, mientras que las bibliotecas espectrales y los algoritmos de búsqueda permiten que técnicos con formación básica obtengan resultados confiables y documentables. Para la industria química y farmacéutica mexicana que opera bajo FEUM, contar con un FTIR bien calibrado, métodos validados y una biblioteca espectral actualizada no es un lujo — es un requisito regulatorio y una ventaja competitiva.

En **Solinsa** ofrecemos equipos FTIR, accesorios ATR de diamante, software de bibliotecas espectrales y servicios de calificación IQ/OQ/PQ. Contáctanos para rediseñar tu flujo de trabajo de identidad de materias primas y producto terminado.
