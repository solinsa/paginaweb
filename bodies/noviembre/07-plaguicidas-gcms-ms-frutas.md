---
title: "Análisis de Plaguicidas en Frutas y Verduras por GC-MS/MS: Métodos y Regulaciones"
published: 2025-11-24
category: cat-ind-alimentos
tags: [GC-MS/MS, plaguicidas, frutas, verduras, LMR, COFEPRIS, QuEChERS, EPA, SANCO, seguridad alimentaria, SRM]
audience: [T1-Alimentos]
lang: es-MX
wordcount: ~1500
---

## Introducción: seguridad alimentaria y plaguicidas en la agricultura mexicana

México es uno de los principales exportadores de frutas y verduras frescas a nivel mundial. Según datos de la Secretaría de Agricultura y Desarrollo Rural (SADER), el país exporta anualmente más de 40 mil millones de dólares en productos agroalimentarios, siendo Estados Unidos, Canadá, Japón y la Unión Europea los destinos principales. Este volumen de exportación impone una responsabilidad regulatoria enorme: cada embarque debe cumplir con los Límites Máximos de Residuos (LMR) del país importador.

Los plaguicidas —insecticidas, fungicidas, herbicidas y acaricidas— son herramientas indispensables en la agricultura moderna para garantizar rendimientos y calidad comercial. Sin embargo, su uso indiscriminado o fuera de los periodos de carencia puede dejar residuos que representan riesgos potenciales para la salud del consumidor. Aquí es donde el análisis instrumental juega un papel central: un laboratorio de control de calidad equipado con tecnología GC-MS/MS (cromatografía de gases acoplada a espectrometría de masas en tándem) puede detectar y cuantificar docenas de plaguicidas en una sola corrida, con sensibilidad a nivel de partes por billón (ppb).

Este artículo técnico describe el marco regulatorio, el método de extracción, la instrumentación y los parámetros de validación necesarios para implementar un sistema robusto de análisis de plaguicidas en frutas y verduras por GC-MS/MS.

## Límites Máximos de Residuos (LMR) en México y mercados destino

Cada país o bloque comercial establece sus propios LMR. En México, la COFEPRIS (Comisión Federal para la Protección contra Riesgos Sanitarios) es la autoridad encargada de definirlos a través del Catálogo de Plaguicidas. Para productos de exportación, el laboratorio debe conocer y aplicar los LMR del país destino:

- **Estados Unidos (EPA/FDA):** La EPA establece tolerancias (equivalente a LMR) para cada combinación plaguicida-cultivo. La FDA realiza muestreos anuales a través del _Pesticide Residue Monitoring Program_ y publica los resultados. El incumplimiento puede resultar en la detención del embarque en aduana.

- **Unión Europea:** El Reglamento (CE) 396/2005 define LMR armonizados para todos los estados miembros. La UE aplica el principio de tolerancia cero para plaguicidas no autorizados y usa un factor de incertidumbre que hace sus LMR generalmente más estrictos que los de Estados Unidos.

Un mismo cultivo mexicano —por ejemplo, el aguacate de Michoacán o el jitomate de Sinaloa— puede requerir análisis diferenciados dependiendo del país de destino. Un laboratorio que trabaje con GC-MS/MS y un método multirresiduo validado puede cubrir simultáneamente todos los requisitos regulatorios.

## Método QuEChERS para extracción de plaguicidas

El método QuEChERS (Quick, Easy, Cheap, Effective, Rugged, and Safe), desarrollado por Anastassiades _et al._ en 2003, se ha convertido en el estándar global para la extracción de residuos de plaguicidas en matrices de alto contenido de agua como frutas y verduras. Las dos variantes más utilizadas son:

| Método | Referencia | Aplicación |
|--------|-----------|------------|
| QuEChERS original no buffer | AOAC 2007.01 | Matrices con pH neutro |
| QuEChERS buffer citrato | EN 15662 (CEN) | Plaguicidas pH-sensibles, mayor recuperación |

**Procedimiento general:**

1. **Pesada:** 10 g de muestra homogeneizada (fruta/verdura triturada).
2. **Extracción:** Adición de 10 mL de acetonitrilo y agitación vigorosa.
3. **Partición:** Adición de sales (MgSO₄, NaCl, buffer citrato o acetato según método). Agitación y centrifugación.
4. **Clean-up (DSPE):** Alícuota del extracto superior transferida a tubo con 150 mg MgSO₄ + 25 mg PSA (sorbente de amina primaria secundaria). Para matrices con pigmentos, se añade C18 o carbono grafitizado (GCB).
5. **Filtración y análisis:** El extracto final se filtra (0.22 µm) y se inyecta en el GC-MS/MS.

Este método ofrece recuperaciones típicas del 70–120 % para más de 200 plaguicidas, con RSD menores al 20 %, cumpliendo los criterios de la guía SANTE/12682/2019.

## Por qué GC-MS/MS (triple cuadrupolo) vs. GC-MS simple

Un cromatógrafo de gases acoplado a un espectrómetro de masas simple (GC-MS, cuadrupolo simple) opera en modo SCAN o SIM (Selected Ion Monitoring). En matrices complejas como extractos de frutas, los interferentes de matriz generan picos coeluyentes que degradan la relación señal/ruido y comprometen la cuantificación a niveles traza.

**GC-MS/MS (triple cuadrupolo, QqQ)** ofrece dos ventajas fundamentales:

1. **Selectividad superior:** Opera en modo MRM (Multiple Reaction Monitoring). El primer cuadrupolo (Q1) selecciona el _ion precursor_ (ion molecular o fragmento característico del plaguicida). El segundo cuadrupolo (q2, celda de colisión) lo fragmenta con gas argón o nitrógeno. El tercer cuadrupolo (Q3) selecciona un _ion producto_ específico. Esto elimina prácticamente todo el ruido de matriz, ya que es extremadamente improbable que un interferente comparta la misma transición precursor→producto.

2. **Sensibilidad a nivel traza:** La doble selección de masas permite detectar plaguicidas a concentraciones de 0.5–10 µg/kg (ppb), muy por debajo de los LMR típicos (0.01–50 mg/kg).

| Parámetro | GC-MS (SQ) | GC-MS/MS (QqQ) |
|-----------|-----------|----------------|
| Modo de adquisición | SCAN / SIM | MRM |
| Selectividad | Baja-media | Muy alta |
| LOD típico | 10–50 µg/kg | 0.5–5 µg/kg |
| Interferencias de matriz | Altas | Mínimas |
| # compuestos/corrida | ~50 (SIM) | 200+ (MRM) |

## Transiciones MRM: selectividad y sensibilidad

Cada plaguicida requiere al menos dos transiciones MRM para cumplir con criterios de identificación según SANTE:

- **Transición cuantificadora (Quant):** La más intensa, se usa para cuantificación.
- **Transición confirmatoria (Qual):** De intensidad complementaria, se usa para confirmar identidad.

La relación de intensidades (ion ratio) entre ambas debe coincidir con un estándar de referencia dentro de ±30 % (tolerancia SANTE).

**Ejemplos de transiciones MRM para plaguicidas comunes en exportaciones mexicanas:**

| Plaguicida | Clase | Precursor (m/z) | Producto Quant (m/z) | Producto Qual (m/z) | CE (eV) |
|-----------|-------|----------------|---------------------|---------------------|---------|
| Clorpirifos | Organofosforado | 314 | 258 | 286 | 15 |
| Malatión | Organofosforado | 173 | 99 | 127 | 10 |
| Cipermetrina | Piretroide | 181 | 152 | 127 | 20 |
| λ-Cihalotrina | Piretroide | 181 | 152 | 197 | 18 |
| Clorotalonil | Fungicida | 266 | 133 | 168 | 25 |
| Endosulfán α | Organoclorado | 241 | 206 | 170 | 15 |
| Deltametrina | Piretroide | 253 | 93 | 172 | 12 |
| Diazinón | Organofosforado | 179 | 137 | 152 | 15 |
| Paratión metílico | Organofosforado | 263 | 109 | 136 | 20 |
| Permetrina | Piretroide | 183 | 153 | 165 | 15 |

*CE: Energía de colisión (Collision Energy). Los valores pueden variar según instrumento.*

## Parámetros cromatográficos recomendados

Una separación cromatográfica adecuada es prerrequisito para un método MRM robusto. La columna más utilizada para análisis multirresiduo de plaguicidas es la **DB-5ms** (5 % fenil, 95 % dimetilpolisiloxano) o equivalentes como HP-5ms o Rxi-5ms.

**Configuración típica:**

| Parámetro | Valor |
|-----------|-------|
| Columna | DB-5ms (30 m × 0.25 mm ID, 0.25 µm film) |
| Gas acarreador | Helio, flujo constante 1.0 mL/min |
| Volumen de inyección | 1–2 µL (splitless) |
| Temp. inyector | 250 °C |
| Temp. línea de transferencia | 280 °C |
| Temp. fuente de iones | 230 °C (EI, 70 eV) |

**Programa de temperatura del horno:**

| Rampa | Temp. inicial | Velocidad (°C/min) | Temp. final | Tiempo (min) |
|-------|--------------|--------------------|-------------|--------------|
| - | 70 °C | - | - | 2 min |
| 1 | - | 25 | 150 °C | 0 |
| 2 | - | 5 | 200 °C | 0 |
| 3 | - | 10 | 300 °C | 10 min |

**Tiempo total de corrida:** ~35 minutos (permite resolver más de 100 plaguicidas en ventanas de tiempo MRM).

## Validación del método según guías regulatorias

La validación debe seguir los criterios de la guía **SANTE/12682/2019** (vigente para la UE) o las guías equivalentes de la FDA (USA). Los parámetros mínimos son:

| Parámetro | Criterio SANTE |
|-----------|---------------|
| Linealidad | R² ≥ 0.99 en rango 0.5–2× LMR |
| Rango de trabajo | LOQ – 2× LMR mínimo |
| Precisión (RSD) | ≤ 20 % en nivel de fortificación |
| Recuperación | 70–120 % |
| LOD | S/N ≥ 3 (relación señal/ruido) |
| LOQ | S/N ≥ 10, primer nivel de curva |
| Efecto de matriz | Evaluado con curva matriz-matched vs solvente |
| Ion ratio | ±30 % respecto a estándar |

Un dato clave: en matrices complejas como fresa o aguacate (alto contenido de lípidos y pigmentos), el efecto de matriz puede ser significativo. Se recomienda **curva de calibración matriz-matched** (estándares preparados en extracto de matriz blanco) para compensar supresión o realce de ionización.

### Control de calidad interno

Cada lote de análisis debe incluir:

- **Blanco de reactivos:** Verifica contaminación del material y solventes.
- **Blanco de matriz:** Muestra de matriz libre de plaguicidas.
- **Fortificación a LOQ y 10× LOQ:** Control de recuperación y precisión.
- **Estándar interno (IS):** Por ejemplo, PCB-52 o antraceno-d10, añadido al inicio de la extracción.

## Consideraciones para exportaciones mexicanas

Los productos mexicanos con mayor frecuencia de análisis de plaguicidas incluyen:

- **Fresa** (alta superficie, sensible a hongos): Alto uso de fungicidas (captan, boscalid, ciprodinil).
- **Aguacate** (alto contenido graso): Requiere clean-up adicional con EMR-Lipid o freeze-out.
- **Jitomate** (consumo nacional y exportación): Plaguicidas organofosforados y piretroides.
- **Chile poblano / jalapeño:** Matriz desafiante por alto contenido de pigmentos; requiere GCB en clean-up.
- **Mango y papaya:** Plaguicidas poscosecha como tiabendazol y bifenilo.

## Conclusión

El análisis de plaguicidas en frutas y verduras por GC-MS/MS es hoy el estándar de oro en laboratorios de control de calidad alimentaria, gracias a su sensibilidad a nivel traza, selectividad mediante transiciones MRM, y capacidad multirresiduo. La combinación del método QuEChERS con GC-MS/MS triple cuadrupolo permite a los laboratorios mexicanos cumplir con los exigentes LMR de la UE, EE. UU. y mercados asiáticos en una sola corrida analítica.

En **Solinsa** contamos con una amplia gama de **equipos GC-MS/MS** (Agilent, Shimadzu, Thermo Fisher), **columnas capilares DB-5ms y equivalentes**, **kits QuEChERS** (AOAC y EN), **estándares certificados de plaguicidas**, y **consumibles para preparación de muestras** (tubos DSPE, filtros, viales). Nuestro equipo de aplicación puede apoyarlo en la validación de métodos, selección de columnas y optimización de parámetros MRM para su matriz específica.

**Contáctenos** para recibir una cotización o agenda una visita técnica para conocer cómo podemos fortalecer su laboratorio de residuos de plaguicidas.

---

## Referencias

1. Anastassiades, M., Lehotay, S.J., Štajnbaher, D., & Schenck, F.J. (2003). Fast and Easy Multiresidue Method. _J. AOAC Int._, 86(2), 412–431.
2. European Commission. (2019). SANTE/12682/2019 — Guidance document on analytical quality control and method validation for pesticide residues analysis.
3. AOAC Official Method 2007.01 — Pesticide Residues in Foods by Acetonitrile Extraction and Partitioning with Magnesium Sulfate.
4. CEN Standard Method EN 15662 — Foods of Plant Origin — Multimethod for the Determination of Pesticide Residues Using GC- and LC-Based Analysis.
5. COFEPRIS. (2024). Catálogo de Plaguicidas. Secretaría de Salud, México.
6. FDA. (2023). Pesticide Residue Monitoring Program Report.
7. Reglamento (CE) Nº 396/2005 del Parlamento Europeo — Límites Máximos de Residuos de Plaguicidas.
