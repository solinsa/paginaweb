---
title: "FTIR y NIR para Identificación Rápida de Materias Primas Farmacéuticas: Buenas Prácticas y Aplicaciones"
published: 2026-01-12
category: cat-calidad
tags: [FTIR, NIR, materias primas, identificación, farmacéutica, ATR, USP, BPF, control de calidad]
audience: [T1-Farmacéutica]
lang: es-MX
wordcount: ~1500
---

## Introducción

La identificación de materias primas es uno de los procesos críticos en la industria farmacéutica. Cada lote de materia prima que ingresa a un laboratorio o planta de producción debe ser verificado antes de su uso para garantizar que el material recibido corresponde al especificado, evitando errores que podrían comprometer la calidad del producto final y la seguridad del paciente. Las Buenas Prácticas de Fabricación (BPF o GMP, por sus siglas en inglés) exigen que esta identificación se realice mediante métodos analíticos confiables, rápidos y documentados.

La espectroscopia infrarroja por transformada de Fourier (FTIR) y la espectroscopia en el infrarrojo cercano (NIR) se han consolidado como las técnicas de elección para la identificación rápida de materias primas. Ambas ofrecen ventajas significativas sobre los métodos tradicionales de identificación química húmeda: son rápidas (segundos a minutos), no destructivas, requieren mínima o ninguna preparación de muestra, y proporcionan una huella espectral única para cada sustancia.

## FTIR-ATR: El estándar de la industria

### Principios del método

La espectroscopia FTIR con accesorio de reflectancia total atenuada (ATR) ha revolucionado la identificación de materias primas. El principio es sencillo: un haz infrarrojo se dirige a través de un cristal de alto índice de refracción (diamante, ZnSe o Ge) en contacto con la muestra. La radiación penetra la muestra a una profundidad de 0.5-5 µm (dependiendo del cristal, el ángulo de incidencia y el número de onda) y es absorbida selectivamente por los enlaces químicos de la muestra, generando un espectro de absorción característico.

| Componente del ATR | Función | Material recomendado |
|---|---|---|
| Cristal (IRE) | Medio de alta refracción donde ocurre la reflexión interna total | Diamante (más robusto y químicamente inerte) |
| Brazo de presión | Asegura contacto íntimo muestra-cristal | Acero inoxidable o polímero de alto rendimiento |
| Sistema óptico | Dirige el haz IR al cristal y al detector | Espejos recubiertos de oro |

### Ventajas del ATR sobre la transmisión tradicional

| Característica | FTIR-ATR | FTIR por transmisión (pastilla KBr) |
|---|---|---|
| Preparación de muestra | Ninguna | Molienda con KBr, prensado |
| Tiempo de análisis | 30-60 segundos | 5-10 minutos |
| Reproducibilidad | Alta (sin variación de espesor) | Media (depende del espesor de la pastilla) |
| Daño a la muestra | No destructivo | Destructivo |
| Limpieza | Limpiar cristal con solvente | No aplica |
| Aplicabilidad | Sólidos, líquidos, pastas, geles | Solo sólidos molidos |
| Mantenimiento | Bajo | Medio (higroscopicidad del KBr) |

### Método USP <197> para identificación por espectroscopia infrarroja

La USP dedica el capítulo general **<197>** a la identificación por espectroscopia infrarroja. Este método establece los lineamientos para la identificación cualitativa de materias primas mediante comparación espectral.

#### Criterio de aceptación USP <197>

> La identidad se confirma cuando el espectro de la muestra, registrado bajo las mismas condiciones que el espectro de referencia (estándar USP o material de referencia), presenta **absorciones a los mismos números de onda y con intensidades relativas comparables**. La concordancia debe evaluarse visualmente considerando que ligeras diferencias en la intensidad de algunas bandas pueden deberse a diferencias en la forma cristalina, el tamaño de partícula o las condiciones de registro.

#### Recomendaciones prácticas para FTIR-ATR cualitativo

| Recomendación | Justificación |
|---|---|
| Limpiar el cristal ATR entre cada muestra con etanol o isopropanol | Evita contaminación cruzada que afecta la identificación |
| Registrar un espectro de background (aire) cada hora o antes de cada sesión | Compensa variaciones en humedad y CO₂ ambiental |
| Asegurar contacto completo de la muestra con el cristal | Garantiza intensidad de señal reproducible |
| Usar resolución de 4 cm⁻¹ | Balance entre resolución espectral y relación señal-ruido |
| Acumular 16-32 escaneos | Mejora la relación señal-ruido sin tiempos excesivos |
| Registrar en el rango 4000-400 cm⁻¹ | Cubre todas las bandas diagnósticas de materiales orgánicos e inorgánicos |

### Construcción de bibliotecas espectrales

Para una identificación confiable, es necesario contar con bibliotecas espectrales de referencia. Una biblioteca bien construida debe incluir:

1. **Espectros de materiales de referencia**: Registrar espectros de estándares USP/FEUM o materiales de referencia certificados bajo condiciones estandarizadas.
2. **Múltiples lotes**: Incluir espectros de al menos 3 lotes diferentes de cada materia prima para capturar la variabilidad lote a lote.
3. **Múltiples mediciones**: Registrar 5-10 réplicas de cada lote para cubrir variaciones de posicionamiento y presión.
4. **Polimorfos diferentes**: Cuando aplique, incluir espectros de formas polimórficas distintas (por ejemplo, formas I y II de clopidogrel, o formas α y β de manitol).

## NIR: Identificación no destructiva a través del empaque

### Principios del NIR

La espectroscopia en el infrarrojo cercano (NIR) utiliza radiación electromagnética en el rango de 780 a 2500 nm (aproximadamente 12800 a 4000 cm⁻¹). A diferencia del FTIR medio, las bandas NIR corresponden a sobretonos y combinaciones de vibraciones fundamentales de grupos funcionales C-H, O-H, N-H y S-H.

#### Ventajas únicas del NIR

- **Penetración**: La radiación NIR penetra más profundamente en la muestra que el IR medio (hasta varios milímetros), permitiendo mediciones representativas del volumen.
- **A través del empaque**: Puede medir muestras a través de bolsas de polietileno, frascos de vidrio ámbar y otros empaques comunes.
- **Fibra óptica**: Permite mediciones remotas con sondas de fibra óptica, ideal para muestreo en bodegas o recepción.
- **Rapidez**: Un espectro NIR se adquiere en 1-5 segundos.

### Aplicaciones NIR en control de calidad de materias primas

| Aplicación | Modo de medición | Ventaja |
|---|---|---|
| Identificación de sólidos a granel | Sonda de fibra óptica o modulo de reflectancia | Sin contacto, a través del empaque |
| Identificación de líquidos | Transmisión o transflectancia | Sin apertura de envase |
| Verificación de concentración de principios activos | Reflectancia difusa | Cuantitativo y cualitativo simultáneo |
| Clasificación de excipientes de grado farmacéutico | Reflectancia difusa | Detección de lotes fuera de especificación |
| Verificación de limpieza de equipos | Sonda de fibra óptica | Detección de residuos de limpieza |

### Modelos de clasificación en NIR

A diferencia del FTIR medio, donde la identificación puede hacerse por inspección visual directa, el NIR requiere modelos multivariantes debido a la naturaleza ancha y superpuesta de las bandas espectrales.

| Método de clasificación | Descripción | Aplicación típica |
|---|---|---|
| Correlación espectral (SIMCA) | Modela la variabilidad de cada clase | Identificación de clases similares (polimorfos) |
| Distancia de Mahalanobis | Mide la distancia espectral a la media de la clase | Verificación de identidad (pasa/falla) |
| PLS-DA (Partial Least Squares Discriminant Analysis) | Método supervisado de clasificación | Diferenciación de grados (farmacéutico vs. industrial) |
| Machine learning (SVM, Random Forest) | Modelos no lineales para clasificación compleja | Mezclas o materiales con alta variabilidad |

## Comparación FTIR vs NIR para identificación

| Parámetro | FTIR-ATR | NIR |
|---|---|---|
| Naturaleza espectral | Bandas nítidas y específicas (fingerprint region 1500-600 cm⁻¹) | Bandas anchas, sobrepuestas, región de 4000-10000 cm⁻¹ |
| Identificación visual | Posible y recomendada por USP | Difícil, requiere análisis multivariante |
| Preparación de muestra | Contacto físico con el cristal ATR | Ninguna, puede medir a través del empaque |
| Profundidad de penetración | 0.5-5 µm | 0.5-10 mm |
| Límite de detección de impurezas | Bajo (~1-5%) detecta diferencias cualitativas | Mayor (~5-10%), depende del modelo |
| Requiere biblioteca espectral local | Sí, espectros de referencia | Sí, modelos multivariantes desarrollados |
| Tiempo de análisis | 30-60 segundos | 1-10 segundos |
| Costo del equipo | Medio ($15,000-$40,000 USD) | Alto ($30,000-$80,000 USD) |
| Aceptación regulatoria | Método de referencia USP <197> | Aceptado con validación (USP <1119>) |
| Capacidad cuantitativa | Limitada (métodos específicos) | Amplia (composición, humedad, pureza) |

## Validación de métodos de identificación espectroscópica

### Marco regulatorio

Aunque la identificación por FTIR se considera un método cualitativo, su validación debe demostrar que el método es adecuado para su uso previsto. La guía **USP <1225>** y **ICH Q2(R1)** establecen los parámetros aplicables a métodos de identificación:

| Parámetro de validación | Método cualitativo FTIR/NIR | Evidencia requerida |
|---|---|---|
| Especificidad | Capacidad de distinguir la sustancia de otras similares | Demostrar que espectros de sustancias estructuralmente relacionadas no dan falsos positivos |
| Robustez | Insensibilidad a pequeñas variaciones en la medición | Pruebas con variación de presión ATR, tiempo de contacto, orientación de la muestra |
| Reproducibilidad | Mismos resultados con diferentes analistas y equipos | Prueba inter-analista e inter-instrumento |
| Sensibilidad | Capacidad de detectar la sustancia correcta | Confirmar que materiales incorrectos son rechazados |

### Verificación diaria del sistema

Para mantener la confiabilidad del método de identificación, se recomienda implementar un programa de verificación diaria:

| Actividad | Frecuencia | Criterio de aceptación |
|---|---|---|
| Verificación del láser (HeNe) | Semanal | Precisión de número de onda ± 0.1 cm⁻¹ (estándar de poliestireno) |
| Verificación de intensidad | Diaria | Absorbancia máxima del estándar dentro de ± 10% del valor de referencia |
| Blanco (aire) | Cada sesión | Línea base plana, sin picos de agua o CO₂ significativos |
| Control positivo | Cada lote de muestras | Identificación correcta de un material de referencia |
| Control negativo | Semanal | La biblioteca rechaza correctamente un material diferente |

## Flujo de trabajo BPF para identificación de materias primas

### Procedimiento operativo estándar recomendado

1. **Recepción de la materia prima**: Verificar integridad del empaque, etiquetado y documentación del lote.
2. **Muestreo representativo**: Tomar una muestra del contenedor siguiendo procedimientos de muestreo aséptico y representativo.
3. **Medición FTIR-ATR**:
   - Limpiar el cristal ATR con etanol.
   - Registrar el espectro de background.
   - Colocar la muestra sobre el cristal y aplicar presión.
   - Adquirir el espectro (4000-400 cm⁻¹, 4 cm⁻¹ resolución, 32 escaneos).
   - Comparar visualmente con el espectro de referencia.
   - Calcular el índice de correlación si el software lo permite.
4. **Decisión pasa/falla**:
   - **Pasa**: Espectro coincide visualmente con la referencia, correlación ≥ 0.95 (o umbral definido).
   - **Falla**: Espectro no coincide. Investigar causa: error de muestreo, material incorrecto, degradación.
5. **Documentación**: Registrar el resultado en el sistema de gestión de calidad (LIMS o papel), incluyendo el espectro y la decisión.
6. **Liberación**: Si pasa, la materia prima queda disponible para producción. Si falla, se cuarentena y se inicia investigación.

### Errores comunes y cómo evitarlos

| Error | Causa | Solución |
|---|---|---|
| Falso positivo (acepta material incorrecto) | Biblioteca espectral deficiente, espectros de referencia limitados | Incluir múltiples lotes y variaciones en la biblioteca |
| Falso negativo (rechaza material correcto) | Variabilidad lote a lote no capturada | Usar umbral de correlación adecuado (0.90-0.95) |
| Espectro con picos de agua/CO₂ | Background desactualizado | Actualizar background cada 30-60 min |
| Saturación del detector | Excesiva presión sobre el cristal ATR | Usar torque estándar en el brazo de presión |
| Diferencias por polimorfismo | Forma cristalina diferente | Incluir todas las formas polimórficas conocidas |
| Contaminación cruzada | Limpieza insuficiente del ATR | Protocolo de limpieza con 3 solventes de polaridad creciente |

## Conclusión

La espectroscopia FTIR-ATR y NIR son herramientas indispensables para la identificación rápida y confiable de materias primas en la industria farmacéutica. El FTIR-ATR, respaldado por el método USP <197>, ofrece identificación cualitativa directa mediante comparación visual de espectros, con mínima preparación de muestra y resultados en segundos. El NIR, por su parte, permite la identificación no destructiva a través del empaque, ideal para entornos de alta productividad donde la velocidad y la integridad de la muestra son prioritarias.

La implementación exitosa de estas técnicas requiere una inversión cuidadosa en la construcción de bibliotecas espectrales, la validación de los métodos de identificación y la capacitación del personal analítico. Cuando se implementan correctamente dentro de un sistema de gestión de calidad BPF, FTIR y NIR reducen drásticamente los tiempos de liberación de materias primas, minimizan errores de identificación y contribuyen a la eficiencia operativa del laboratorio.

En **Solinsa** somos distribuidores autorizados de equipos FTIR y NIR de las marcas líderes a nivel mundial. Ofrecemos desde espectrómetros FTIR-ATR portátiles para control en recepción, hasta sistemas NIR con sondas de fibra óptica y software de modelado multivariante. Además, brindamos servicios de construcción de bibliotecas espectrales, validación de métodos conforme a USP y capacitación del personal. Visítanos en solinsa.mx y descubre cómo podemos optimizar tu control de calidad de materias primas.
