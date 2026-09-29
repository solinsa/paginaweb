Los compuestos BTEX (benceno, tolueno, etilbenceno y xilenos) son contaminantes prioritarios en la industria petroquímica. Su determinación precisa es crítica para el control de procesos, la seguridad ocupacional y el cumplimiento ambiental.

## ¿Qué son los BTEX?

| Compuesto | Fórmula | Punto de Ebullición (°C) | LMPE (ppm) NOM-010 | Usos Industriales |
|-----------|---------|-------------------------|-------------------|-------------------|
| Benceno | C₆H₆ | 80.1 | 0.5 | Solvente, precursor de estireno |
| Tolueno | C₇H₈ | 110.6 | 50 | Solvente, gasolina, pinturas |
| Etilbenceno | C₈H₁₀ | 136.2 | 100 | Producción de estireno |
| m-Xileno | C₈H₁₀ | 139.1 | 100 | Solvente, producción de tereftalato |
| p-Xileno | C₈H₁₀ | 138.4 | 100 | Producción de PET |
| o-Xileno | C₈H₁₀ | 144.4 | 100 | Producción de anhídrido ftálico |

## Método por GC-FID o GC-MS

### Preparación de Muestra

| Tipo de Muestra | Método | Referencia |
|----------------|--------|-----------|
| Agua (aguas residuales, lixiviados) | Purge & Trap o HS-SPME | EPA 5021 / EPA 8260 |
| Suelo | Metanol extracción + Purge & Trap | EPA 5035 |
| Aire (muestreo pasivo) | Tubos de carbón + CS₂ desorción | NIOSH 1501 |
| Productos petroquímicos | Dilución directa en CS₂ | Método interno |
| Gasolina/diesel | Dilución 1:1000 en CS₂ | Método ASTM |

### Headspace Estático (HS-GC)

Para muestras acuosas, el método más simple es headspace estático:

| Parámetro | Recomendación |
|-----------|--------------|
| Temperatura de equilibrio | 80°C |
| Tiempo de equilibrio | 30 min |
| Volumen de muestra | 10 mL en vial de 20 mL |
| Relación fase gas/líquido | 1:1 |
| Presurización | 15 psi |
| Tiempo de inyección | 0.5 min |

### Condiciones GC

| Parámetro | GC-FID | GC-MS |
|-----------|--------|-------|
| Columna | DB-624 (30 m × 0.25 mm × 1.4 µm) | DB-5MS o DB-624 |
| Gas acarreador | He o H₂ a 1.5 mL/min | He a 1.0 mL/min |
| Inyector | Split 1:50 a 200°C | Split 1:50 a 200°C |
| Horno | 35°C (5 min) → 8°C/min → 200°C (5 min) | Igual |
| Detector | FID a 250°C | MS full scan 35-300 m/z |
| Tiempo total | 27.5 min | 27.5 min |

### Orden de Elución

| Compuesto | TR (min) (DB-624) | Iones Clave (MS) |
|-----------|-------------------|-----------------|
| Benceno | 9.2 | 78, 77, 51 |
| Tolueno | 13.1 | 91, 92, 65 |
| Etilbenceno | 17.5 | 91, 106, 77 |
| m-Xileno | 17.8 | 91, 106, 105 |
| p-Xileno | 17.9 | 91, 106, 105 |
| o-Xileno | 18.9 | 91, 106, 105 |

## Curvas de Calibración

### Niveles Típicos para Agua

| Nivel | Concentración (µg/L) | Aplicación |
|-------|---------------------|-----------|
| CAL 1 | 0.5 | Límite bajo, cerca del LOD |
| CAL 2 | 2.0 | Cercano al límite potable |
| CAL 3 | 10.0 | Nivel medio |
| CAL 4 | 50.0 | Nivel alto |
| CAL 5 | 200.0 | Límite superior |

### Estándar Interno

Usar fluorobenceno o clorobenceno-d₅ como estándar interno agregado a cada vial (50 µg/L).

## Límites Regulatorios

| Matriz | Compuesto | Límite | Norma |
|--------|-----------|-------|-------|
| Agua potable | Benceno | 0.010 mg/L | NOM-127-SSA1 |
| Agua potable | Tolueno | 0.70 mg/L | NOM-127-SSA1 |
| Agua potable | Etilbenceno | 0.70 mg/L | NOM-127-SSA1 |
| Agua potable | Xilenos (total) | 0.50 mg/L | NOM-127-SSA1 |
| Suelo (uso industrial) | Benceno | 15 mg/kg | NOM-138-SEMARNAT |
| Suelo (uso industrial) | Tolueno | 200 mg/kg | NOM-138-SEMARNAT |
| Aire (ocupacional) | Benceno | 0.5 ppm | NOM-010-STPS |
| Aire (ocupacional) | Tolueno | 50 ppm | NOM-010-STPS |

## Control de Calidad

| Verificación | Frecuencia | Criterio |
|-------------|-----------|----------|
| Blanco de método | Diario | < LOD para todos los analitos |
| Blanco de campo | Por lote | < LOD |
| Duplicado de laboratorio | 1 cada 10 muestras | RPD < 25% |
| Fortificación matriz | 1 cada 10 muestras | Recuperación 80-120% |
| Estándar de verificación | Cada 10 muestras | 90-110% |
| Surrogate (estándar interno) | Cada muestra | 70-130% |

## Aplicaciones en la Industria

### Refinerías

- **Aguas de proceso**: monitoreo de BTEX en aguas de desecho
- **Emisiones fugitivas**: muestreo de aire en válvulas y conexiones
- **Producto terminado**: verificación de especificaciones en gasolinas

### Plantas Petroquímicas

- **Materias primas**: pureza de benceno, tolueno, xilenos de alimentación
- **Productos intermedios**: control de proceso en unidades de reformación
- **Aguas residuales**: cumplimiento de límites de descarga

### Monitoreo Ambiental

- **Aguas subterráneas**: detección de plumas de contaminación
- **Suelos**: evaluación de sitios contaminados
- **Aire**: monitoreo de emisiones en zonas industriales

## Conclusión

El análisis de BTEX por GC-FID o GC-MS con headspace estático o Purge & Trap es un método consolidado y confiable. La elección del método de preparación de muestra depende de la matriz y los límites requeridos. Para aguas y suelos, el headspace ofrece simplicidad; para trazas, Purge & Trap proporciona la máxima sensibilidad. En Solinsa ofrecemos equipos GC y servicios de análisis de BTEX con métodos EPA y NOM.
