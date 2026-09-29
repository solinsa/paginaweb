En el laboratorio analítico moderno, la incertidumbre de medición no es solo un requisito de acreditación — es una herramienta fundamental para tomar decisiones informadas sobre la calidad de los resultados.

## ¿Qué es la Incertidumbre de Medición?

La incertidumbre es un parámetro que caracteriza el intervalo de valores dentro del cual se espera que se encuentre el valor verdadero del mensurando, con un nivel de confianza definido (generalmente 95%, k=2). No es un error, sino una estimación cuantitativa de la dispersión razonable del resultado.

## Fuentes de Incertidumbre en un Método Analítico

Las principales fuentes incluyen:

- **Preparación de estándares**: pureza del CRM, pesada, diluciones seriadas
- **Instrumentación**: repetibilidad del equipo, deriva, resolución
- **Volumetría**: calibración de micropipetas y matraces, coeficiente de expansión térmica
- **Ambiente**: temperatura, humedad, presión
- **Operador**: variabilidad en inyección, integración, lectura

## Método de Cálculo Paso a Paso

### 1. Identificar todas las fuentes

Construye un diagrama causa-efecto (Ishikawa) con cada contribución. Para un método HPLC típico, las fuentes incluyen pureza del estándar (u1), preparación de soluciones (u2), curva de calibración (u3), repetibilidad (u4) y precisión intermedia (u5).

### 2. Cuantificar cada contribución

Cada fuente se expresa como incertidumbre estándar (u). Para una distribución normal, u = desviación estándar. Para distribuciones rectangulares (ej. resolución del equipo), u = a/√3 donde a es el semi-intervalo.

### 3. Calcular la incertidumbre combinada

La incertidumbre estándar combinada (uc) se obtiene por suma cuadrática:

uc = √(u1² + u2² + u3² + ...)

Esto asume que las fuentes son independientes, lo cual es válido en la mayoría de los casos analíticos.

### 4. Calcular la incertidumbre expandida

Multiplica uc por el factor de cobertura k (típicamente k=2 para 95% de confianza):

U = uc × k

## Ejemplo Práctico: Determinación de Cafeína por HPLC

Supongamos que medimos cafeína en una bebida energética con un resultado de 32.5 mg/100mL:

- Pureza del CRM: u1 = 0.29 mg (pureza 99.5% ± 0.5%, distribución rectangular)
- Preparación de estándares: u2 = 0.15 mg (combinación de pesada y diluciones)
- Curva de calibración: u3 = 0.41 mg (incertidumbre de la regresión lineal)
- Repetibilidad: u4 = 0.33 mg (desviación estándar de 6 réplicas)
- Precisión intermedia: u5 = 0.38 mg (variación día a día)

uc = √(0.29² + 0.15² + 0.41² + 0.33² + 0.38²) = 0.73 mg

U = 0.73 × 2 = 1.46 mg

Resultado reportado: **32.5 ± 1.5 mg/100mL** (k=2, 95% de confianza)

## Herramientas para el Cálculo

Existen varias opciones para facilitar estos cálculos:

- **Hojas de cálculo**: plantillas Excel con fórmulas preconfiguradas
- **Software especializado**: GUM Workbench, MCM Alchimia
- **Método de Monte Carlo**: simulación numérica para distribuciones complejas (recomendado por JCGM 101:2008)

## Errores Comunes a Evitar

- **Contar dos veces la misma fuente**: la repetibilidad del equipo ya está incluida en la precisión del método
- **Ignorar correlaciones**: cuando dos fuentes no son independientes
- **Confundir incertidumbre con tolerancia**: la tolerancia del fabricante no es incertidumbre de medición
- **No documentar el cálculo**: la trazabilidad del cálculo es tan importante como la trazabilidad del resultado

## Conclusión

Calcular la incertidumbre no es un ejercicio burocrático — es una práctica que mejora la calidad analítica y la confianza en los resultados. Implementar un procedimiento sistemático, documentar cada fuente y revisar periódicamente las estimaciones garantiza que tus reportes cumplan con los requisitos de la ISO/IEC 17025 y generen valor real para tus clientes.
