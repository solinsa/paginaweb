---
title: "Análisis de Biocombustibles por GC-FID: Biodiesel, Bioetanol y Cumplimiento ASTM"
published: 2026-01-06
category: cat-ind-petroquimica
tags: [GC-FID, biodiesel, bioetanol, ASTM D6751, EN 14214, glicerina, ésteres metílicos, biocombustibles]
audience: [T1-Petroquímica, T1-Química]
lang: es-MX
wordcount: ~1500
---

## Introducción

Los biocombustibles representan una alternativa creciente a los combustibles fósiles en la transición energética global. El biodiesel y el bioetanol son los biocombustibles más producidos y consumidos en el mundo, con mercados maduros en Estados Unidos, Brasil, la Unión Europea y un crecimiento significativo en México y América Latina. Sin embargo, la calidad de estos combustibles renovables debe ser rigurosamente controlada para garantizar su compatibilidad con motores, su estabilidad durante el almacenamiento y su cumplimiento ambiental.

La cromatografía de gases con detector de ionización de flama (GC-FID) es la técnica analítica de referencia para el control de calidad de biocombustibles. Las normas internacionales ASTM D6751 (para biodiesel) y ASTM D4806 (para bioetanol) establecen los métodos GC-FID como los procedimientos oficiales para la determinación de parámetros críticos como el perfil de ésteres metílicos, el contenido de glicerina libre y total, y el contenido de metanol.

## Biodiesel: composición y parámetros de calidad

El biodiesel se produce mediante la transesterificación de aceites vegetales o grasas animales con un alcohol (generalmente metanol) en presencia de un catalizador, produciendo ésteres metílicos de ácidos grasos (FAME, por sus siglas en inglés) y glicerina como subproducto.

### Perfil de FAME por GC-FID

La composición del biodiesel depende directamente de la materia prima utilizada. Cada aceite produce un perfil característico de FAME que determina las propiedades del combustible:

| Materia prima | Ácido palmítico C16:0 | Ácido esteárico C18:0 | Ácido oleico C18:1 | Ácido linoleico C18:2 | Ácido linolénico C18:3 |
|---|---|---|---|---|---|
| Aceite de palma | 40-48% | 4-6% | 36-44% | 8-12% | <1% |
| Aceite de soya | 10-13% | 3-5% | 20-26% | 50-55% | 6-10% |
| Aceite de canola | 4-5% | 1-3% | 60-70% | 18-22% | 8-12% |
| Aceite de cocina usado | 12-18% | 4-8% | 35-50% | 25-35% | 2-5% |
| Sebo animal | 24-30% | 18-26% | 36-44% | 2-6% | <1% |

La norma **ASTM D6751** establece un límite máximo de 12% para el contenido de ácido linolénico (C18:3), ya que los ésteres poliinsaturados son más susceptibles a la oxidación y pueden generar depósitos en los motores.

### Método ASTM D6584: Glicerina libre y total

Uno de los parámetros de calidad más críticos del biodiesel es el contenido de glicerina. La glicerina libre (no reaccionada) puede formar depósitos en los inyectores y sistemas de combustión, mientras que la glicerina total (libre + enlazada como mono, di y triglicéridos) es un indicador de la eficiencia de la reacción de transesterificación.

| Parámetro | Límite ASTM D6751 | Límite EN 14214 |
|---|---|---|
| Glicerina libre | ≤ 0.020% (m/m) | ≤ 0.02% (m/m) |
| Glicerina total | ≤ 0.240% (m/m) | ≤ 0.25% (m/m) |
| Monoglicéridos | — | ≤ 0.80% (m/m) |
| Diglicéridos | — | ≤ 0.20% (m/m) |
| Triglicéridos | — | ≤ 0.20% (m/m) |
| Metanol | ≤ 0.20% (m/m) | ≤ 0.20% (m/m) |

### Condiciones cromatográficas para glicerina total por GC-FID

El método ASTM D6584 utiliza GC-FID con derivatización por sililación para determinar glicerina libre y total, así como mono, di y triglicéridos.

| Parámetro | Condición |
|---|---|
| Columna | Capilar de dimetilpolisiloxano (100% metil silicona), 15 m × 0.32 mm DI, 0.10 µm de película |
| Gas acarreador | Helio a 1.0 mL/min (flujo constante) |
| Inyector | Split/splitless a 280°C, relación split 50:1 |
| Horno | 50°C (1 min), 15°C/min a 180°C, 7°C/min a 230°C, 30°C/min a 380°C (10 min) |
| Detector FID | 380°C |
| Volumen de inyección | 1.0 µL |
| Tiempo total | Aproximadamente 42 min |

> La derivatización con N-metil-N-(trimetilsilil)trifluoroacetamida (MSTFA) es un paso crítico. Los grupos hidroxilo de la glicerina y los monoglicéridos deben ser completamente sililados para obtener picos simétricos y cuantificación precisa. Un tiempo de reacción insuficiente o la presencia de humedad degradan el derivatizante y comprometen los resultados.

### Método ASTM D6751-15a: Perfil de ésteres metílicos

Para la determinación del perfil individual de FAME, se utiliza el método EN 14103 o ASTM D6751-15a, que emplea una columna polar tipo poli(etilenglicol) o bis(cianopropil)siloxano.

| Parámetro | Condición |
|---|---|
| Columna | Polietilenglicol (PEG), 30 m × 0.25 mm DI, 0.25 µm |
| Gas acarreador | Helio a 1.5 mL/min |
| Inyector | Split 100:1 a 250°C |
| Horno | 60°C (2 min), 10°C/min a 200°C, 5°C/min a 240°C (7 min) |
| Detector FID | 250°C |
| Estándar interno | Metil nonadecanoato (C19:0) o metil heptadecanoato (C17:0) |

## Bioetanol: pureza y contenido de metanol

El bioetanol se produce principalmente por fermentación de biomasa rica en carbohidratos (caña de azúcar, maíz, sorgo, remolacha). La norma **ASTM D4806** establece las especificaciones para el etanol carburante (mezclado con gasolina).

### Parámetros críticos del bioetanol

| Parámetro | Límite ASTM D4806 | Método de prueba |
|---|---|---|
| Pureza (etanol) | ≥ 92.1% (v/v) | ASTM D5501 |
| Contenido de metanol | ≤ 0.5% (v/v) | ASTM D5501 |
| Contenido de agua | ≤ 1.0% (v/v) | ASTM E203 (Karl Fischer) |
| Acidez (como ácido acético) | ≤ 0.007% (m/m) | ASTM D1613 |
| Contenido de gasolina desnaturalizante | 1.96-4.76% (v/v) | ASTM D5501 |
| Contenido de cloruro inorgánico | ≤ 10 mg/L | ASTM D7319 |

### Método ASTM D5501: Análisis de etanol y metanol por GC-FID

El método ASTM D5501 es específico para la determinación de etanol, metanol y otros componentes oxigenados en etanol carburante. Utiliza GC-FID con una columna de alta polaridad.

| Parámetro | Condición |
|---|---|
| Columna | Polietilenglicol (PEG) o fase equivalente, 30 m × 0.53 mm DI, 2.0 µm |
| Gas acarreador | Helio a 5.0 mL/min |
| Inyector | Split 25:1 a 200°C |
| Horno | 35°C (5 min), 15°C/min a 200°C (5 min) |
| Detector FID | 250°C |
| Estándar interno | 1-Butanol o 1-Pentanol |
| Volumen de inyección | 1.0 µL |

La cuantificación se realiza por el método del estándar interno, calculando la concentración de cada analito mediante factores de respuesta relativos. Es fundamental preparar soluciones estándar de calibración con etanol, metanol, isopropanol, acetona y otros posibles componentes oxigenados que puedan estar presentes como desnaturalizantes.

## Control de calidad del biodiesel: validación y monitoreo

Para garantizar resultados confiables en el análisis de biocombustibles, es indispensable implementar un programa de control de calidad que incluya:

### Verificación del sistema cromatográfico

| Parámetro | Criterio | Frecuencia |
|---|---|---|
| Precisión del inyector | RSD ≤ 2% para área del estándar interno | Diaria |
| Resolución | ≥ 1.5 entre picos de glicerina y pico más cercano | Diaria |
| Linealidad del FID | Lineal en el rango de calibración | Semanal |
| Factor de respuesta | RSD ≤ 5% entre inyecciones | Con cada lote |
| Límite de detección | S/N ≥ 3 para glicerina al LOQ | Trimestral |

### Materiales de referencia

El uso de materiales de referencia certificados (CRM) es esencial para la trazabilidad metrológica. Para biodiesel, se recomiendan los siguientes CRM:

- **Ésteres metílicos individuales**: C14:0, C16:0, C18:0, C18:1, C18:2, C18:3 a concentraciones conocidas.
- **Mezcla de FAME**: De composición certificada, similar al perfil esperado de la materia prima.
- **Glicerina libre y total**: Soluciones certificadas para validación del método ASTM D6584.
- **Monoglicéridos, diglicéridos y triglicéridos**: Patrones individuales para identificación y cuantificación.

## Cumplimiento normativo en México

En México, la regulación de biocombustibles está a cargo de la Secretaría de Energía (SENER) y la Comisión Reguladora de Energía (CRE). Los laboratorios que realizan análisis de biocombustibles para fines regulatorios deben cumplir con:

1. **NMX-EC-17025-IMNC-2018**: Acreditación del laboratorio basada en ISO/IEC 17025 para la competencia técnica en métodos específicos de biocombustibles.
2. **NOM-016-CRE-2016**: Especificaciones de calidad de combustibles fósoles y biocombustibles en México.
3. **NOM-013-ASEA-2020**: Gestión integral de residuos peligrosos generados durante el análisis de muestras de combustibles.
4. **Programas interlaboratorio**: Participación en programas como el CrossCheck Program de ASTM o el NIST Biofuels QA Program.

## Desafíos comunes y solución de problemas

### Biodiesel

| Problema | Causa probable | Solución |
|---|---|---|
| Pico de glicerina con cola | Derivatización incompleta | Aumentar volumen de MSTFA o tiempo de reacción |
| Línea base inestable | Columna contaminada | Condicionar columna a 380°C por 30 min |
| Resolución pobre entre C18:1 y C18:2 | Temperatura del horno inadecuada | Optimizar rampa de temperatura |
| RSD alto en duplicados | Inyección no reproducible | Verificar septum, liner, y purga del split |

### Bioetanol

| Problema | Causa probable | Solución |
|---|---|---|
| Pico de agua ancho que interfiere | Columna polar con retención de agua | Usar columna desactivada para compuestos polares |
| Metanol no se resuelve del etanol | Programa de temperatura muy rápido | Reducir rampa inicial a 5°C/min |
| Deriva de tiempos de retención | Fugas en el sistema de inyección | Verificar conexiones y realizar prueba de fuga |
| Picos fantasmas | Contaminación del inyector | Limpiar liner y reemplazar septum |

## Conclusión

La cromatografía de gases con detector FID sigue siendo la herramienta analítica por excelencia para el control de calidad de biocombustibles. Los métodos ASTM D6584, D6751 y D5501 proporcionan un marco robusto para la determinación de parámetros críticos como perfil de FAME, glicerina libre y total, y pureza del bioetanol. Un laboratorio bien equipado con instrumentos GC-FID calibrados, columnas adecuadas, estándares certificados y personal capacitado puede garantizar resultados confiables que respalden la calidad y seguridad de los biocombustibles.

La tendencia hacia la producción de biocombustibles avanzados (HVO, biomasa celulósica y aceite de algas) presenta nuevos desafíos analíticos que requerirán la evolución de los métodos actuales. Sin embargo, el GC-FID permanecerá como la tecnología fundamental para la caracterización y control de calidad de estos combustibles renovables.

En **Solinsa** ofrecemos soluciones integrales para el análisis de biocombustibles por GC-FID. Desde cromatógrafos de gases con FID de última generación, columnas capilares especializadas para FAME y glicerina, hasta estándares certificados ASTM y servicio de validación de métodos. Nuestro equipo técnico te apoya en la implementación de métodos ASTM D6584, D6751 y D5501 con garantía de resultados. Contáctanos en solinsa.mx para una asesoría personalizada.
