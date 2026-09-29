---
title: "Determinación de Cloro Activo y Ozono en Agua: Métodos Instrumentales y Cumplimiento NOM"
published: 2025-12-27
category: cat-ind-ambiental
tags: [cloro, ozono, agua potable, métodos instrumentales, NOM-127, desinfección]
audience: [T1-Ambiental]
lang: es-MX
wordcount: ~1500
---

## Introducción

La desinfección del agua potable es una de las intervenciones de salud pública más importantes de la historia moderna. Tanto el cloro como el ozono son los desinfectantes más utilizados a nivel mundial, y su concentración residual debe mantenerse dentro de rangos específicos para garantizar la inactivación de patógenos sin generar subproductos nocivos para la salud.

La NOM-127-SSA1-2021 establece los límites permisibles de cloro residual libre y la NOM-230-SSA1-2021 regula la calidad del agua tratada con ozono. Este artículo describe los métodos instrumentales para la determinación de estos desinfectantes, comparando técnicas tradicionales con métodos instrumentales modernos.

## Cloro activo residual

### Especiación del cloro en agua

El cloro en agua existe en tres formas principales:

| Forma | Especie química | Poder desinfectante | Persistencia |
|-------|-----------------|-------------------|-------------|
| Cloro libre | HOCl, OCl⁻, Cl₂ | Alto | Horas |
| Cloro combinado | Monocloramina (NH₂Cl) | Moderado | Días |
| Cloro total | Libre + combinado | Variable | Variable |

> El **cloro libre residual** es el parámetro más crítico para el control de la desinfección. La NOM-127 exige un mínimo de 0.2 mg/L en la red de distribución y un máximo de 1.5 mg/L.

### Método DPD (N,N-dietil-p-fenilendiamina)

Es el método colorimétrico más utilizado, tanto en campo como en laboratorio:

| Componente | Principio |
|------------|-----------|
| DPD + Cloro libre | Reacción inmediata → Color rosa/rojo |
| DPD + Cloro combinado | Reacción con KI → Color rosa (diferencia con libre) |
| Lectura | Espectrofotómetro a 515 nm o comparador visual |

#### Procedimiento DPD:

1. **Tomar** 10 mL de muestra en una celda de vidrio.
2. **Agregar** una tableta DPD (o 1 mL de reactivo DPD líquido).
3. **Agitar** hasta disolución completa.
4. **Leer** a 515 nm dentro de los 2 minutos posteriores.
5. **Calcular**: Cloro libre (mg/L) = Abs × factor de calibración.

**Ventaja**: Método oficial EPA 330.5, NOM-127-SSA1-2021.
**Limitación**: Interferencia por cloro combinado si la lectura se retrasa > 2 minutos.

### Método Amperométrico

Ofrece mayor precisión y selectividad que el método DPD:

| Parámetro | Valor |
|-----------|-------|
| Principio | Medición de corriente generada por la reducción de HOCl en un electrodo |
| LOD | 0.01 mg/L |
| Rango | 0.01 - 20 mg/L |
| Interferencias | Ozono, bromo, yodo. MnO₂ puede dar falsos positivos |
| Aplicación | Monitoreo continuo en línea en plantas potabilizadoras |

## Determinación de Ozono

### Principio del método Índigo

El ozono decolora rápidamente el índigo trisulfonato de potasio, permitiendo su cuantificación por espectrofotometría:

| Parámetro | Condición |
|-----------|-----------|
| Longitud de onda | 600 nm |
| Reactivo | Índigo trisulfonato de potasio (índigo carmín) |
| pH | 4.0 (buffer fosfato) |
| Estequiometría | 1 mol de ozono decolora 1 mol de índigo |
| LOD | 0.01 mg/L |
| Rango | 0.01 - 2.0 mg/L |

### Procedimiento Índigo:

1. **Agregar** 5 mL de solución de índigo a un matraz volumétrico de 50 mL.
2. **Aforar** con la muestra de agua (sin burbujeo).
3. **Leer** absorbancia a 600 nm inmediatamente.
4. **Calcular** usando la ley de Beer: O₃ (mg/L) = (ΔAbs × 100) / (0.42 × b), donde b es la longitud de la celda (1 cm).

### Método Instrumental por UV

El ozono absorbe fuertemente en el UV a 254 nm:

| Parámetro | Valor |
|-----------|-------|
| Coeficiente de extinción molar | 3,300 M⁻¹cm⁻¹ (a 254 nm) |
| LOD | 0.005 mg/L |
| Tipo | No destructivo, permite monitoreo en línea |
| Limitación | Interferencia de materia orgánica que absorbe a 254 nm |

## Comparación de métodos

| Método | Cloro LOD | Ozono LOD | Costo por análisis | Tiempo | Aplicación |
|--------|----------|----------|-------------------|--------|------------|
| DPD colorimétrico | 0.02 mg/L | — | Bajo | 2 min | Campo / laboratorio |
| Amperométrico | 0.01 mg/L | 0.01 mg/L | Medio | 30 seg | Monitoreo continuo |
| Índigo | — | 0.01 mg/L | Bajo | 5 min | Laboratorio / campo |
| UV directo (254 nm) | — | 0.005 mg/L | Alto (inversión equipo) | Tiempo real | Monitoreo en línea |
| Tira reactiva | 0.5 mg/L | — | Muy bajo | 1 min | Cribado rápido |

## Límites normativos en México

| Parámetro | NOM-127-SSA1 (agua potable) | NOM-230-SSA1 (ozono) |
|-----------|----------------------------|---------------------|
| Cloro residual libre | 0.2 - 1.5 mg/L | N/A |
| Cloro residual combinado | 1.0 - 2.5 mg/L | N/A |
| Ozono residual | N/A | 0.1 - 0.5 mg/L (salida de reactor) |
| Monitoreo | Diario en red de distribución | Continuo en planta |
| Subproductos | Trihalometanos < 0.2 mg/L | Bromatos < 0.01 mg/L |

## Control de calidad en la medición

| Práctica | Frecuencia |
|----------|-----------|
| Curva de calibración del espectrofotómetro | Mensual |
| Verificación con estándar de referencia | Semanal |
| Blanco de reactivos | Diario (cada lote) |
| Duplicado | Cada 10 muestras |
| Participación en pruebas de competencia | Anual |

### Factores que afectan la precisión

- **Temperatura**: El cloro libre se volatiliza más rápido a T° > 25°C.
- **pH**: La relación HOCl/OCl⁻ varía con el pH (pKa = 7.5 a 25°C).
- **Luz**: El cloro y el ozono son fotosensibles — medir inmediatamente después del muestreo.
- **Materia orgánica**: Puede consumir cloro residual entre el muestreo y la medición.
- **Turbidez**: Interfiere en métodos colorimétricos — filtrar si es necesario.

## Conclusión

La determinación precisa de cloro activo y ozono en agua es esencial para garantizar la eficacia de la desinfección y el cumplimiento de las normas mexicanas. Mientras que el método DPD sigue siendo el estándar por su simplicidad y bajo costo, los métodos amperométricos y UV ofrecen ventajas significativas para monitoreo continuo en plantas de tratamiento. La selección del método debe basarse en el parámetro a medir, la frecuencia de monitoreo, el presupuesto y los requisitos normativos aplicables.

En Solinsa ofrecemos equipos de monitoreo de cloro y ozono, espectrofotómetros calibrados, estándares de referencia certificados y servicios de validación de métodos para laboratorios de agua potable. Contáctanos para recibir asesoría.
