---
title: "Monitoreo de Compuestos Orgánicos Volátiles (COV) Atmosféricos mediante FTIR"
published: 2026-03-05
category: cat-ind-ambiental
tags: [FTIR, COV, atmósfera, ambiental, monitoreo]
audience: [T1-Ambiental]
lang: es-MX
wordcount: ~1500
---

## Introducción

La **contaminación atmosférica por compuestos orgánicos volátiles (COV)** representa uno de los retos ambientales más significativos en zonas urbanas e industriales. Los COV son precursores de la formación de ozono troposférico y partículas secundarias (PM₂.₅), además de que muchos de ellos —como el benceno, el formaldehído y el 1,3-butadieno— son cancerígenos comprobados para el ser humano.

La **espectroscopía infrarroja de transformada de Fourier (FTIR)** ha emergido como una herramienta poderosa para el monitoreo continuo de COV en aire ambiente y emisiones industriales. A diferencia de las técnicas cromatográficas tradicionales, el FTIR permite la detección simultánea y en tiempo real de múltiples compuestos sin necesidad de separación previa, muestreo en adsorbentes o derivatización. En este artículo exploramos los fundamentos del FTIR para monitoreo atmosférico, el método EPA TO-16, los compuestos detectables, las configuraciones de equipo y las ventajas frente a GC-FID y GC-MS.

## Fundamentos del FTIR para análisis de gases

La **espectroscopía FTIR** se basa en la absorción de radiación infrarroja por las moléculas en fase gaseosa. Cada molécula posee un espectro de absorción único que corresponde a sus modos vibracionales y rotacionales característicos. Para compuestos poliatómicos en fase gas, las bandas de absorción son estrechas y altamente específicas, lo que permite la identificación y cuantificación precisa incluso en mezclas complejas.

### Principio de operación

Un espectrómetro FTIR consta de:
1. **Fuente infrarroja** (SiC global o Nernst glower) que emite radiación en el rango de 400 a 4000 cm⁻¹.
2. **Interferómetro de Michelson** que modula la radiación generando un interferograma.
3. **Celda de gas** donde se encuentra la muestra.
4. **Detector** (MCT — Mercury Cadmium Telluride, o DTGS — Deuterated Triglycine Sulfate) que registra la señal transmitida.

La transformada de Fourier convierte el interferograma en un espectro de absorbancia vs número de onda.

### Celdas de paso largo (multipaso)

El desafío fundamental del análisis de COV es que las concentraciones atmosféricas son típicamente del orden de partes por billón (ppb) a partes por millón (ppm). Para alcanzar límites de detección adecuados, se requieren **celdas de gas de paso largo (long-path gas cells)** , también conocidas como **celdas multipaso**.

| Tipo de celda | Longitud de paso | Volumen | Límite de detección típico (benceno) |
|---------------|------------------|---------|--------------------------------------|
| Celda White (2-32 pasos) | 0.5 - 40 m | 0.5 - 5 L | 1 - 10 ppb |
| Celda Herriott (12-100 pasos) | 1 - 100 m | 0.3 - 3 L | 0.5 - 5 ppb |
| Celda multirreflectante | 1 - 200 m | 1 - 10 L | 0.1 - 1 ppb |

La **ley de Beer-Lambert** gobierna la relación entre absorbancia y concentración:

> A = ε × b × c

Donde *A* es la absorbancia medida, *ε* el coeficiente de absortividad molar (propio de cada compuesto a cada número de onda), *b* la longitud de paso óptico y *c* la concentración. Al aumentar *b* mediante celdas multipaso, se incrementa proporcionalmente la absorbancia y, por tanto, la sensibilidad.

## EPA Method TO-16: Open Path FTIR

El **Method TO-16** de la Agencia de Protección Ambiental de Estados Unidos (EPA) establece el protocolo para el monitoreo de COV en aire ambiente mediante **FTIR de trayectoria abierta (open-path FTIR, OP-FTIR)** . Este método es particularmente útil para el monitoreo de perímetros industriales, emisiones fugitivas y zonas de remediación.

### Características del método TO-16

- **Configuración**: Una fuente IR y un detector colocados en extremos opuestos de una trayectoria de hasta 500 m de distancia.
- **Cobertura espectral**: 600 - 4000 cm⁻¹, que abarca la huella dactilar de la mayoría de los COV de interés ambiental.
- **Tiempo de integración**: 1 - 15 minutos por espectro, dependiendo de la sensibilidad requerida.
- **Concentraciones promedio**: El método reporta concentraciones integradas a lo largo de toda la trayectoria óptica, expresadas en ppm·m o convertidas a ppm asumiendo una longitud de trayectoria conocida.

> "El método TO-16 es ideal para la detección de emisiones fugitivas en refinerías, plantas petroquímicas y rellenos sanitarios, donde los COV se dispersan en grandes volúmenes y las técnicas de punto fijo subestiman la exposición real."

## Principales COV detectables por FTIR

El FTIR puede detectar una amplia gama de COV con alta especificidad. A continuación se listan los compuestos más relevantes para el monitoreo ambiental y sus bandas de absorción características:

| Compuesto | Fórmula | Bandas IR principales (cm⁻¹) | LOD típico (ppb, celda 20 m) | Riesgo sanitario |
|-----------|---------|------------------------------|-------------------------------|------------------|
| Benceno | C₆H₆ | 3040, 1480, 1038, 675 | 1 - 5 ppb | Cancerígeno (Grupo 1 IARC) |
| Tolueno | C₇H₈ | 3030, 1605, 1495, 730 | 1 - 5 ppb | Neurotóxico |
| Xilenos (o-m-p) | C₈H₁₀ | 2960, 1465, 740 | 2 - 10 ppb | Irritante, neurotóxico |
| Formaldehído | CH₂O | 2780, 1746, 1167 | 0.5 - 2 ppb | Cancerígeno (Grupo 1 IARC) |
| Metano | CH₄ | 3018, 1306 | 5 - 20 ppb | Asfixiante, GEI |
| 1,3-Butadieno | C₄H₆ | 3090, 1600, 908 | 1 - 3 ppb | Cancerígeno (Grupo 1 IARC) |
| Estireno | C₈H₈ | 3080, 1495, 775 | 1 - 5 ppb | Irritante, sospechoso cancerígeno |
| Acetona | C₃H₆O | 1730, 1365, 1220 | 3 - 10 ppb | Irritante |
| Etanol | C₂H₆O | 2980, 1245, 1050 | 5 - 15 ppb | Irritante |
| Hexano | C₆H₁₄ | 2960, 1465, 1380 | 2 - 10 ppb | Neurotóxico |

## Ventajas del FTIR frente a GC-FID y GC-MS para monitoreo continuo

El monitoreo de COV atmosféricos puede realizarse mediante diversas técnicas analíticas. La siguiente tabla compara el FTIR con las técnicas cromatográficas más utilizadas:

| Aspecto | FTIR (OP-FTIR multipaso) | GC-FID | GC-MS |
|---------|--------------------------|--------|-------|
| **Tiempo de análisis** | Tiempo real (1-15 min por espectro) | 30-60 min por inyección | 30-60 min por inyección |
| **Muestreo** | Sin muestreo previo, remoto | Canister, bolsa Tedlar o tubos adsorbentes | Canister, bolsa Tedlar o tubos adsorbentes |
| **Cobertura espacial** | Hasta 500 m de trayectoria | Puntual | Puntual |
| **Selectividad** | Alta para compuestos con bandas IR únicas | Media (por tiempo de retención) | Alta (por tiempo de retención + espectro de masas) |
| **Identificación de compuestos desconocidos** | Limitada a biblioteca espectral | No posible sin estándares | Posible con bibliotecas NIST |
| **Límites de detección** | 0.1 - 10 ppb (según compuesto y celda) | 0.5 - 5 ppb | 0.1 - 1 ppb |
| **Costo operativo** | Bajo (sin gases ni consumibles cromatográficos) | Medio (gases, columnas) | Alto (gases, columnas, mantenimiento MS) |
| **Mantenimiento** | Bajo (sin partes móviles ni fuentes de ionización) | Medio | Alto |
| **Idoneidad para monitoreo continuo 24/7** | Excelente | Limitada | Limitada |

### Cuándo usar FTIR y cuándo usar GC

El FTIR es la técnica de elección cuando se requiere:
- Monitoreo en tiempo real de emisiones fugitivas o de proceso.
- Cobertura espacial de grandes áreas (perímetros industriales, rellenos sanitarios).
- Detección temprana de fugas (leak detection and repair, LDAR).
- Monitoreo de compuestos inorgánicos como CO, CO₂, NO, NO₂, SO₂, NH₃, HCl y HF (que no son detectables por GC sin derivatización).

Por otro lado, **GC-FID** y **GC-MS** son preferibles cuando:
- Se requiere la máxima sensibilidad (sub-ppb).
- La mezcla contiene múltiples isómeros estructurales que no se distinguen espectralmente.
- Es necesario realizar un análisis cualitativo completo de muestras desconocidas.
- Se necesita cumplir con métodos regulatorios específicos basados en GC (EPA TO-14A, TO-15).

## Configuración de equipo y calibración

### Componentes del sistema FTIR para monitoreo de COV

1. **Espectrómetro FTIR** con resolución de 0.5 - 1 cm⁻¹ (mínimo 4 cm⁻¹ para monitoreo ambiental).
2. **Celda de gas multipaso** de 2 a 100 m de longitud de paso óptico, con ventanas de ZnSe o BaF₂.
3. **Sistema de muestreo** con línea de transferencia calefaccionada (150 - 200 °C) para evitar condensación de COV.
4. **Bomba de muestreo** con control de flujo másico (0.5 - 5 L/min).
5. **Software de análisis espectral** con bibliotecas cuantitativas y algoritmos de deconvolución de bandas superpuestas.

### Calibración con estándares certificados

La calibración de un sistema FTIR para COV requiere:

- **Estándares primarios**: Mezclas certificadas de COV en nitrógeno o aire sintético con trazabilidad NIST (o equivalentes).
- **Curva de calibración**: Mínimo 5 niveles de concentración que cubran el rango de interés.
- **Validación**: Verificación diaria con un estándar de concentración conocida (control de calidad al 80-120% del valor esperado).
- **Blancos**: Aire sintético libre de COV para determinar la línea base espectral.

> "La exactitud de un análisis FTIR de gases depende directamente de la calidad de la biblioteca espectral de calibración. Un modelo de regresión multivariante mal entrenado puede producir errores sistemáticos de hasta el 30% en la cuantificación."

### Mantenimiento predictivo

Los componentes críticos que requieren mantenimiento periódico son:

- **Ventanas de la celda**: Inspección mensual por opacidad o ataque químico; pulido o reemplazo según sea necesario.
- **Desecante del interferómetro**: Reemplazo bimensual para mantener baja humedad interna.
- **Detector MCT**: Enfriamiento con nitrógeno líquido (recarga cada 4-8 horas) o con enfriador Stirling (sin consumibles).
- **Línea de transferencia**: Verificación de temperatura y limpieza trimestral.

En Solinsa ofrecemos sistemas FTIR completos para monitoreo de COV atmosféricos, incluyendo espectrómetros de alta resolución, celdas de gas multipaso de hasta 100 m de longitud óptica, accesorios de muestreo calefaccionado y software de análisis cuantitativo con bibliotecas espectrales certificadas. Nuestro equipo técnico brinda asesoría para la configuración de sistemas OP-FTIR conforme al método EPA TO-16, calibración con estándares trazables y programas de mantenimiento preventivo. Contáctenos en www.solinsa.com para conocer nuestras soluciones de monitoreo ambiental.
