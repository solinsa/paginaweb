## Introducción

La industria del cannabis medicinal en México ha experimentado un crecimiento significativo desde la publicación de los lineamientos de COFEPRIS para el uso de cannabis con fines médicos y de investigación. Esto ha traído consigo la necesidad de laboratorios acreditados capaces de realizar análisis de **potencia (cannabinoides)** y **perfil de terpenos**, dos parámetros fundamentales para el control de calidad, la estandarización de productos y el cumplimiento normativo.

La cromatografía de gases con detector de ionización de flama (GC-FID) es la técnica analítica más utilizada a nivel global para este propósito por su sensibilidad, reproducibilidad y costo operativo accesible. A diferencia de la cromatografía de líquidos de alta resolución (HPLC), el GC-FID permite cuantificar tanto cannabinoides activos (en su forma descarboxilada) como terpenos en una sola inyección, simplificando el flujo de trabajo analítico.

En este artículo presentamos un enfoque metodológico completo para el análisis de cannabinoides y terpenos por GC-FID, desde la configuración instrumental hasta la interpretación de resultados, pasando por la preparación de muestra, calibración y los requisitos regulatorios aplicables en México.

## ¿Qué Analizar? Cannabinoides y Terpenos Clave

### Cannabinoides Mayores

Los cannabinoides son los compuestos activos responsables de los efectos farmacológicos del cannabis. Para un perfil completo de potencia, se deben cuantificar al menos los siguientes:

- **THC (Δ⁹-tetrahidrocannabinol):** El principal psicoactivo. Se expresa como % en peso seco. En flor, los rangos típicos van de 5 % a 30 %.
- **THCA (ácido tetrahidroc cannabinólico):** Precursor ácido del THC. En GC-FID se descarboxila térmicamente en el inyector y se cuantifica como THC total.
- **CBD (cannabidiol):** No psicoactivo, con aplicaciones terapéuticas documentadas. Su demanda ha crecido exponencialmente.
- **CBDA (ácido cannabidiólico):** Precursor ácido del CBD, también se descarboxila en el GC-FID y se reporta como CBD total.
- **CBN (cannabinol):** Producto de degradación del THC, indicador de envejecimiento y mala conservación.
- **CBG (cannabigerol):** Precursor biosintético de otros cannabinoides, presente en bajas concentraciones en la mayoría de las variedades.

> **Nota técnica:** En GC-FID, los cannabinoides ácidos (THCA, CBDA) sufren descarboxilación térmica dentro del inyector a temperaturas > 250 °C. Por ello, el resultado reportado es "THC total" y "CBD total". Si se requiere diferenciar formas ácidas de neutras, debe utilizarse HPLC.

### Terpenos Mayoritarios

Los terpenos son compuestos aromáticos volátiles que contribuyen al perfil organoléptico y, de acuerdo con la teoría del **efecto séquito (entourage effect)**, modulan la actividad de los cannabinoides. Los monoterpenos y sesquiterpenos más relevantes incluyen:

**Monoterpenos (C10H16):**
- **Mirceno:** Aroma a lúpulo y tierra. El más abundante en muchas variedades índica.
- **Limoneno:** Aroma cítrico. Presente en variedades sativa.
- **α-pineno:** Aroma a pino. Posibles efectos broncodilatadores.
- **β-pineno:** Similar al α-pineno, con notas de albahaca y eneldo.
- **Linalool:** Aroma floral a lavanda. Propiedades ansiolíticas reportadas.
- **β-cariofileno:** El único terpeno que interactúa directamente con los receptores CB2.

**Sesquiterpenos (C15H24):**
- **β-cariofileno:** También clasificado como sesquiterpeno.
- **α-humuleno:** Aroma a lúpulo y clavo.
- **Bisabolol:** Aroma floral y dulce, presente en manzanilla.

| Grupo | Compuesto | Punto de ebullición (°C) | Concentración típica en flor (%) |
|:---|:---|:---:|:---:|
| Monoterpenos | Mirceno | 166 | 0.1 – 2.0 |
| Monoterpenos | Limoneno | 176 | 0.05 – 1.5 |
| Monoterpenos | α-pineno | 155 | 0.02 – 1.0 |
| Monoterpenos | Linalool | 198 | 0.01 – 0.5 |
| Sesquiterpenos | β-cariofileno | 129 | 0.05 – 1.0 |
| Sesquiterpenos | α-humuleno | 122 | 0.01 – 0.5 |
| Sesquiterpenos | Bisabolol | 153 | 0.01 – 0.3 |

## Configuración GC-FID para Perfil Completo

Para obtener una separación adecuada de cannabinoides y terpenos en una sola corrida, se recomienda la siguiente configuración instrumental:

- **Columna:** DB-5 o equivalente (5 % fenil, 95 % metilpolisiloxano), 30 m × 0.25 mm × 0.25 μm de espesor de película. Esta columna ofrece buena separación tanto para compuestos volátiles (terpenos) como semivolátiles (cannabinoides).
- **Inyector:** Split, relación 10:1 a 50:1, a 280 °C. La alta temperatura asegura la descarboxilación completa de cannabinoides ácidos.
- **Gas de arrastre:** Helio, flujo constante de 1.0–1.5 mL/min.
- **Detector FID:** 300 °C. Flujos típicos: H₂ a 30 mL/min, aire a 300 mL/min, gas makeup (N₂ o He) a 25 mL/min.

**Programa de temperatura recomendado:**

| Etapa | Rampa (°C/min) | Temp. inicial (°C) | Temp. final (°C) | Tiempo (min) |
|:---|:---:|:---:|:---:|:---:|
| 1 | – | 40 | 40 | 1.0 |
| 2 | 5 | 40 | 200 | 32.0 |
| 3 | 20 | 200 | 300 | 5.0 |
| 4 | – | 300 | 300 | 5.0 |

Con este programa, los monoterpenos eluyen entre los 3 y 12 minutos, los sesquiterpenos entre 12 y 20 minutos, y los cannabinoides mayores (CBD, THC, CBN, CBG) entre 20 y 30 minutos.

## Preparación de Muestra: Extracción y Dilución

La preparación de muestra es crítica para obtener resultados precisos. Los pasos generales son:

1. **Secado y molienda:** Pesar ~100–500 mg de flor seca cuidadosamente molida (homogénea, tamizada si es necesario).
2. **Extracción:** Agregar 10 mL de solvente orgánico (metanol grado HPLC o isopropanol). Algunos laboratorios añaden un estándar interno (ej. escualeno, colesterol o 5-α-colestano) a concentración conocida.
3. **Sonicación:** 15–20 minutos en baño de ultrasonido a temperatura ambiente.
4. **Filtración:** Pasar el extracto por filtro de jeringa de 0.45 μm de PTFE directamente a un vial de 1.5 mL para cromatografía.
5. **Dilución:** Dependiendo de la concentración esperada de cannabinoides, diluir 1:10 o 1:100 con metanol. Si se satura el detector (> 1,000 pA para THC), la dilución es insuficiente.

> "La muestra representa el 70 % del error analítico potencial. Una molienda homogénea y una extracción completa son la diferencia entre un perfil confiable y uno engañoso."

Para extractos o aceites de cannabis, disolver directamente 50–100 mg en 10 mL de metanol grado HPLC, filtrar y analizar.

## Calibración con Estándares Certificados

La calibración debe realizarse con estándares certificados de cannabinoides y terpenos, idealmente de proveedores acreditados como Cerilliant, Restek, o Cayman Chemical.

**Recomendaciones:**
- Preparar una **curva de calibración de 5 a 7 niveles** para cada analito.
- Rangos típicos: cannabinoides de 5 a 200 µg/mL; terpenos de 1 a 100 µg/mL.
- Incluir un **estándar de verificación (STM)** a concentración conocida independiente al inicio y final de la secuencia.
- Verificar **linealidad (R² > 0.999)** para cada analito.
- El **estándar interno** compensa variaciones de inyección y de preparación. Usar un compuesto que no esté presente en la muestra y que eluya en una zona limpia del cromatograma.
- Calcular **factores de respuesta relativa (RRF)** para uso continuo.

## Interpretación del Perfil Cromatográfico

Un cromatograma típico de cannabis presenta tres ventanas de elución bien diferenciadas:

1. **Ventana de terpenos (2–18 min):** Picos angostos y simétricos si la columna está en buen estado. Los monoterpenos eluyen primero (mirceno ~6.5 min, limoneno ~7.2 min), seguidos de los sesquiterpenos (β-cariofileno ~14.5 min, α-humuleno ~15.0 min).
2. **Ventana de cannabinoides (19–28 min):** Picos característicos de CBD (~21.0 min), THC (~22.5 min), CBN (~24.0 min) y CBG (~25.5 min). El orden exacto depende del programa de temperatura y la fase estacionaria.
3. **Cola del cromatograma:** Posibles picos tardíos de triglicéridos u otros lípidos de la matriz si la extracción no fue selectiva.

**Indicadores de calidad del método:**
- **Resolución (Rs) entre CBD y THC:** Debe ser ≥ 1.5 para cuantificación precisa. Si es menor, ajustar el programa de temperatura (rampa más lenta entre 200 y 280 °C).
- **Simetría del pico:** Asimetría > 2.0 indica sobrecarga en la columna o degradación de la fase estacionaria.
- **Señal de línea base:** Debe estabilizarse antes de la elución del primer analito y no presentar deriva térmica.

## Normatividad COFEPRIS y Control de Calidad

En México, la **COFEPRIS** (Comisión Federal para la Protección contra Riesgos Sanitarios) regula el cannabis medicinal y los productos derivados a través de diversos lineamientos, entre ellos:

- **Lineamientos para la emisión de autorizaciones sanitarias de investigación y producción de cannabis con fines médicos.**
- **NOM-EM-001-SSA1-2023:** Establece los criterios para el análisis de cannabis y sus derivados.
- **Farmacopea Mexicana (suplemento cannabis):** Define métodos oficiales y especificaciones de calidad.

**Requisitos analíticos comunes:**
- Potencia (THC, CBD, CBN, CBG) reportada en % p/p en base seca.
- Perfil de terpenos con identificación y cuantificación de al menos 8 terpenos mayoritarios.
- Límites de cannabinoides ácidos vs. neutros (cuando aplique, con HPLC).
- Control de humedad y materia extraña.
- Pruebas microbiológicas y de metales pesados (adicionales al perfil químico).

**Implementación de control de calidad:**

- Realizar **inyecciones por duplicado** de cada muestra.
- Incluir **muestras de control de calidad (LCS y LFB)** en cada lote analítico.
- Participar en **programas de intercomparación interlaboratorio** para validar la precisión y exactitud del método.
- Documentar todos los cambios de columna, estándares y condiciones instrumentales en un cuaderno de laboratorio o sistema LIMS.

## Conclusión

El análisis de cannabinoides y terpenos por GC-FID es una herramienta madura, confiable y accesible para laboratorios que buscan incursionar en el control de calidad de cannabis medicinal. Con una columna DB-5, un programa de temperatura optimizado y una calibración rigurosa con estándares certificados, es posible obtener perfiles completos que cumplan con los requisitos de COFEPRIS y las expectativas de la industria.

En **Solinsa** ofrecemos soluciones integrales para laboratorio de cannabis: desde la selección del cromatógrafo, columnas y estándares, hasta la capacitación en métodos y la puesta en marcha de su sistema de gestión de calidad. Contáctenos para acompañarlo en cada paso del camino regulatorio y analítico.
