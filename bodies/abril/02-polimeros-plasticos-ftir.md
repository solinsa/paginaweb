---
title: 'Análisis de polímeros y plásticos por espectroscopia FTIR: identificación, degradación y control de calidad'
published: 2026-04-03
slug: analisis-polimeros-plasticos-ftir
category: cat-ftir
tags:
  - FTIR
  - polímeros
  - plásticos
  - ATR
  - identificación
  - control calidad
audience:
  - T1-Industria
  - T2-Aseguramiento
---

# Análisis de polímeros y plásticos por espectroscopia FTIR: identificación, degradación y control de calidad

## Introducción

La industria de los polímeros y plásticos —desde la manufactura de materia prima hasta el reciclaje— requiere herramientas analíticas que permitan identificar materiales, evaluar su estado de degradación y asegurar la calidad del producto final. La espectroscopia infrarroja por transformada de Fourier (FTIR) es la técnica más ampliamente utilizada para estos fines, gracias a su rapidez, su naturaleza no destructiva y la riqueza de información estructural que proporciona.

El advenimiento de los accesorios de reflectancia total atenuada (ATR) ha simplificado aún más el análisis: ya no es necesario preparar pastillas de KBr ni disolver la muestra. El analista coloca directamente el polímero —sólido, película, fibra o incluso líquido viscoso— sobre el cristal de diamante o ZnSe y obtiene un espectro en segundos, con una profundidad de penetración típica de 1-2 µm a 45°.

En este artículo se presentan las aplicaciones fundamentales de FTIR-ATR en la industria de polímeros: identificación de materiales, cuantificación de la degradación, análisis de aditivos y control de calidad de materia prima.

## Identificación de polímeros por FTIR-ATR

Cada polímero posee una huella espectral única en la región infrarroja media (4000–400 cm⁻¹). Las bandas de deformación y tensión de los grupos funcionales característicos permiten identificar el material en segundos, ya sea por inspección visual del espectro o mediante búsqueda automatizada en bibliotecas espectrales.

### Bandas características de polímeros comunes

| Polímero | Abreviatura | Bandas características (cm⁻¹) | Grupos funcionales |
|---|---|---|---|
| Polietileno | PE | 2915, 2848 (C–H tensión), 1473 (deformación CH₂), 719 (balanceo CH₂) | Alcano lineal |
| Polipropileno | PP | 2950, 2915, 2868 (C–H), 1456, 1376 (deformación CH₃), 840, 998 | Alcano ramificado |
| Tereftalato de polietileno | PET | 1720 (C=O éster), 1245, 1095 (C–O–C), 728 (anillo aromático) | Poliéster aromático |
| Poliestireno | PS | 3025 (C–H aromático), 1601, 1493 (C=C), 756, 695 (anillo monosustituido) | Aromático vinílico |
| Cloruro de polivinilo | PVC | 2960, 2910 (C–H), 1433 (deformación CH₂), 1252 (C–H), 966, 614 (C–Cl) | Halogenado |
| Policarbonato | PC | 2968 (C–H), 1775 (C=O carbonato), 1505 (C=C aromático), 1220, 1160 (C–O) | Poliéster carbonato |
| Poliamida 6 | PA6 | 3300 (N–H tensión), 2930 (C–H), 1640 (C=O amida I), 1545 (N–H amida II), 1265 (C–N) | Poliamida |
| Poliuretano | PU | 3330 (N–H), 2940 (C–H), 1725 (C=O uretano), 1530 (N–H + C–N), 1220 (C–O–C) | Poliuretano |

### Estrategia de identificación

El procedimiento recomendado para la identificación de un polímero desconocido es:

1. **Adquisición del espectro ATR** — colocar la muestra en contacto íntimo con el cristal (diamante recomendado por resistencia química y mecánica), 32 escaneos, resolución 4 cm⁻¹, región 4000–400 cm⁻¹.
2. **Corrección** — sustracción de CO₂ atmosférico y línea base automática (o manual si hay dispersión).
3. **Búsqueda en biblioteca** — comparar contra bibliotecas comerciales (Hummel, Sigma-Aldrich, bibliotecas internas) usando algoritmo de correlación. Un factor de matching > 0.95 indica alta confianza.
4. **Confirmación** — verificar bandas de grupos funcionales clave manualmente.

## Evaluación de degradación en polímeros

Los polímeros experimentan degradación por exposición a calor, luz UV, oxígeno y esfuerzo mecánico. La espectroscopia FTIR permite monitorear los cambios químicos asociados a la degradación mediante índices específicos.

### Índice de carbonilo

La oxidación térmica y fotoquímica genera grupos carbonilo (C=O) que se manifiestan como una banda en la región 1710–1780 cm⁻¹. El índice de carbonilo (IC) se calcula como:

**IC = A₁₇₁₅ / A₂₉₁₅**

donde A₁₇₁₅ es la absorbancia a 1715 cm⁻¹ (carbonilo) y A₂₉₁₅ es la absorbancia de referencia a 2915 cm⁻¹ (tensión C–H). Valores:

| Estado del polímero | Índice de carbonilo |
|---|---|
| Sin degradar | < 0.05 |
| Degradación incipiente | 0.05 – 0.30 |
| Degradación moderada | 0.30 – 1.00 |
| Degradación severa | > 1.00 |

### Índice de vinilo

La degradación por escisión de cadena genera grupos terminales vinilo (R–CH=CH₂) con bandas a 909 cm⁻¹ y 990 cm⁻¹. El índice de vinilo (IV) se define como:

**IV = A₉₀₉ / A₂₉₁₅**

Este índice es particularmente útil para evaluar la degradación de polietileno durante procesos de extrusión e inyección repetidos.

### Aplicación práctica: envejecimiento acelerado

En un estudio típico de envejecimiento acelerado, probetas de PE expuestas a 80 °C durante 30 días mostraron un incremento del IC de 0.02 a 0.85, evidenciando oxidación severa. El análisis FTIR permitió identificar que la temperatura crítica para la degradación del PE en ese proceso se encontraba por encima de 70 °C, guiando los ajustes de proceso para prolongar la vida útil del producto.

## Cuantificación de aditivos

Los aditivos en plásticos —plastificantes, estabilizantes UV, antioxidantes, retardantes de llama— pueden cuantificarse por FTIR mediante curvas de calibración.

### Plastificantes en PVC

El plastificante más común, el ftalato de dioctilo (DOP), se cuantifica por la banda C=O a 1720 cm⁻¹. Se preparan estándares de PVC con 10-40 % de DOP y se construye una curva de calibración. El límite de cuantificación es aproximadamente 1 % (p/p). El método permite verificar que el contenido de plastificante cumple con la especificación de dureza Shore A del producto.

### Antioxidantes y estabilizantes UV

Los antioxidantes fenólicos presentan banda O–H a 3650 cm⁻¹ (libre) y 3400 cm⁻¹ (enlazado), mientras que los estabilizantes de amina impedida (HALS) muestran banda N–H a 3400 cm⁻¹ y C–N a 1240 cm⁻¹. Con extracción previa con solvente y análisis del extracto por FTIR, se alcanzan LOQ de 0.01 % (p/p).

## Control de calidad de materia prima

Una aplicación crítica del FTIR en la industria es la verificación de la identidad de la materia prima polimérica a la recepción. El procedimiento estándar es:

1. Adquirir espectro ATR de cada lote recibido.
2. Comparar contra un espectro de referencia del material aprobado.
3. Calcular el factor de correlación. Un valor < 0.95 activa una alerta y desencadena análisis complementarios (DSC, TGA, GC-MS).

### Estudio de caso: contaminante polimérico en lote de producción

Un fabricante de piezas de PP para la industria automotriz detectó fallas mecánicas recurrentes en lotes de producción. El análisis FTIR-ATR de la pieza fallada mostró un espectro con bandas de PP superpuestas a bandas de PS (1601 cm⁻¹, 756 cm⁻¹, 695 cm⁻¹). Se identificó que el lote de materia prima contenía 8 % de PS residual por contaminación cruzada en la extrusión. La corrección del proceso de limpieza entre cambios de material resolvió el problema, ahorrando costos de reproceso estimados en $120,000 anuales.

## Conclusión

La espectroscopia FTIR-ATR es una herramienta indispensable para la industria de polímeros, combinando velocidad, versatilidad y confianza analítica. Desde la identificación rápida de materiales hasta la cuantificación de degradación y aditivos, su implementación en el laboratorio de control de calidad permite garantizar la consistencia del producto, prevenir fallas y optimizar procesos.

En **Solinsa** somos expertos en instrumentación analítica y cromatografía. Contáctanos para recibir asesoría personalizada, cotización de equipos, refacciones o soporte técnico. Visítanos en solinsa.com.
