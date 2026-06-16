---
title: "Cómo Implementar un Programa de Calibración Efectivo en el Laboratorio"
published: 2025-10-16
category: cat-serv-calib
tags: [calibración, ISO 17025, trazabilidad, estándares, CRM, verificación, incertidumbre]
audience: [T1-Farmacéutica, T1-Ambiental, T1-Alimentos]
lang: es-MX
wordcount: ~1500
---

## Introducción

Un programa de calibración no es una colección de certificados acumulados en un archivo. Es un sistema vivo que garantiza que cada resultado que sale del laboratorio es trazable a un patrón nacional o internacional, con una incertidumbre conocida y documentada. La norma **ISO/IEC 17025:2017** —requisito indispensable para la acreditación de laboratorios de ensayo y calibración en México— dedica las cláusulas 6.4 (equipamiento) y 6.5 (trazabilidad metrológica) a este tema.

Sin embargo,implementar un programa de calibración efectivo va más allá del cumplimiento normativo. Es una herramienta de gestión que reduce riesgos de resultados fuera de especificación, protege la reputación del laboratorio y facilita la toma de decisiones técnicas informadas.

> "La calibración no mejora un instrumento; solo te dice qué tan mal está. Lo que haces con esa información determina la calidad de tus datos."

En este artículo presentamos los elementos clave para diseñar, implementar y mantener un programa de calibración conforme a ISO 17025:2017, con recomendaciones prácticas para laboratorios farmacéuticos, ambientales y de alimentos.

## Fundamentos de Trazabilidad Metrológica

La **trazabilidad metrológica** es la propiedad de un resultado de medición por la cual este puede relacionarse con una referencia establecida (generalmente un patrón nacional o internacional) a través de una cadena ininterrumpida de calibraciones, cada una con su incertidumbre declarada.

### La cadena de trazabilidad

Para instrumentos analíticos en un laboratorio de pruebas, la cadena típica es:

1. **Patrón primario internacional** (ej. BIPM, NIST, PTB) — define la unidad.
2. **Patrón nacional** (CENAM en México, NIST en EE. UU.) — materializa la unidad.
3. **Patrón de referencia del laboratorio** — CRM certificado (certified reference material) utilizado para calibrar el instrumento.
4. **Instrumento analítico** (GC, HPLC, ICP, FTIR, etc.) — calibrado contra el patrón de referencia.
5. **Medición de la muestra** — resultado final trazable.

Cada eslabón de esta cadena debe estar documentado. ISO 17025:2017 exige que el laboratorio demuestre trazabilidad de sus mediciones al Sistema Internacional de Unidades (SI).

### Cómo demostrar trazabilidad en la práctica

- **Balanzas analíticas:** Calibrar con pesas certificadas trazables al CENAM (Clase E1 o E2, según el alcance).
- **Pipetas y micropipetas:** Calibración gravimétrica (pesar agua desionizada a temperatura controlada) contra una balanza calibrada.
- **Cromatógrafos (GC/HPLC):** Verificación de flujo, temperatura de horno y detector usando estándares certificados (CRM) con incertidumbre conocida.
- **Espectrofotómetros (FTIR, UV-Vis):** Verificación de longitud de onda con filtros de referencia certificados y verificación fotométrica con estándares de transmitancia/absorbancia.
- **pHmetros:** Buffer certificados trazables a NIST/SRM con temperatura medida por termómetro calibrado.

## Materiales de Referencia Certificados (CRM)

Los CRM son el corazón del programa de calibración. No todos los estándares son CRM, y la diferencia es crítica.

### CRM vs. estándares de trabajo

| Característica | CRM certificado | Estándar de trabajo (QC) |
|----------------|-----------------|--------------------------|
| Trazabilidad | Directa al SI (CENAM, NIST) | Interna, derivada del CRM |
| Incertidumbre | Declarada en el certificado | Calculada por el laboratorio |
| Costo | Alto | Bajo |
| Uso primario | Calibración del instrumento | Verificación en rutina (CCV, ICV) |
| Periodicidad de recertificación | Definida por el productor | Según programa interno |
| Homogeneidad | Certificada (lote) | Verificada internamente |

### Selección de CRM por tipo de instrumento

| Instrumento | CRM recomendado | Parámetros certificados | Proveedores típicos |
|-------------|-----------------|-------------------------|---------------------|
| GC-FID | n-Alcanos en hexano (C7-C40) | Concentración másica, TR de referencia | Restek, Supelco, AccuStandard |
| GC-MS | Decafluorotrifenilfosfina (DFTPP) | Abundancias iónicas relativas | Agilent, Restek |
| HPLC-DAD | Cafeína + ácido benzoico + parabenos | Concentración, pureza, λ max | USP, Sigma-Aldrich, LGC |
| ICP-OES | Solución multielemental (NIST SRM 3100 series) | Concentración másica de cada elemento | NIST, Inorganic Ventures, High-Purity Standards |
| FTIR | Filtro de poliestireno | Longitudes de onda de pico | NIST SRM 1921b, PIKE Technologies |
| pHmetro | Buffer NIST (pH 4.00, 7.00, 10.00) | pH a temperatura específica | NIST SRM 2191/2192, Merck, Hach |

> **Regla fundamental:** Un CRM caducado no es un CRM. Ninguna auditoría aceptará una calibración basada en un material cuya fecha de recertificación ha vencido, por más que el material parezca "todavía bueno".

## Determinación de Intervalos de Calibración

ISO 17025:2017 no prescribe frecuencias fijas de calibración. Delega al laboratorio la responsabilidad de establecer los intervalos con base en criterios técnicos documentados.

### Factores para definir intervalos

1. **Frecuencia de uso:** Un HPLC que opera 24/7 requiere calibración más frecuente que uno usado una vez por semana.
2. **Estabilidad del instrumento:** El historial de verificaciones intermedias indica si el equipo deriva significativamente entre calibraciones.
3. **Criticidad de las mediciones:** Equipos que liberan productos farmacéuticos o certifican cumplimiento normativo requieren intervalos más cortos.
4. **Recomendaciones del fabricante:** Son un punto de partida, pero el laboratorio debe ajustarlos según su experiencia.
5. **Resultados de calibraciones previas:** Si las últimas tres calibraciones mostraron desviaciones crecientes, acorte el intervalo.

### Estrategias de intervalos

| Estrategia | Descripción | Cuándo usarla |
|------------|-------------|---------------|
| Intervalo fijo | Calibrar cada N meses (ej. 6 meses para balanzas, 12 para FTIR) | Equipos estables, historial conocido |
| Intervalo escalonado | Reducir o aumentar según resultados previos (ej. inicial 6 meses, si pasa 3 veces seguidas sin ajuste, pasar a 12) | Equipos con buen desempeño histórico |
| Intervalo basado en uso | Calibrar cada X horas de operación o cada Y inyecciones | GC, HPLC, ICP en laboratorios de alto volumen |
| Calibración bajo demanda | Solo calibrar cuando falla la verificación | No recomendado — altísimo riesgo de datos inválidos |

**Recomendación Solinsa:** Para laboratorios que buscan la acreditación, el enfoque más práctico es combinar **intervalos fijos iniciales** (definidos por el fabricante) con **verificaciones intermedias** frecuentes. Si el histórico muestra que el equipo mantiene la calibración durante el intervalo completo, se puede extender progresivamente.

### Verificaciones intermedias — el complemento indispensable

La verificación intermedia (también llamada "chequeo entre calibraciones") es la herramienta que permite extender intervalos con seguridad. Consiste en medir un estándar de control (no el de calibración) en fechas preestablecidas entre calibraciones formales.

| Equipo | Verificación intermedia | Frecuencia sugerida |
|--------|------------------------|---------------------|
| Balanza | Pesar una pesa de control diariamente | Diario / al inicio de cada turno |
| pHmetro | Medir buffer certificado de pH 4.00 y 7.00 | Diario / antes de cada lote |
| GC | Inyectar un estándar de verificación | Cada 10-20 muestras |
| HPLC | Inyectar un estándar de control de calibración | Cada 10-20 inyecciones |
| ICP-OES | Leer un estándar de verificación independiente (ICV) | Cada 10 muestras |
| FTIR | Medir el pico de poliestireno a 1601.4 cm⁻¹ | Semanal o por lote |

> **Criterio de aceptación típico:** La desviación del valor medido respecto al valor certificado del estándar de verificación debe ser ≤ 5 % (o según el criterio definido en el método analítico). Si se excede, se detiene la corrida, se recalibra y se reanalizan las muestras desde la última verificación exitosa.

## Incertidumbre de la Calibración

La incertidumbre no es un castigo burocrático de ISO 17025:2017. Es una expresión cuantitativa de la calidad del resultado. La cláusula 7.6 exige que el laboratorio evalúe la incertidumbre de medición para todos los ensayos que realiza.

### Componentes típicos de la incertidumbre en calibración

| Componente | Fuente | Contribución típica (%) |
|------------|--------|------------------------|
| CRM | Incertidumbre declarada en el certificado | 20-30 |
| Dilución | Exactitud del volumen de las pipetas y matraces | 10-20 |
| Repetibilidad | Desviación estándar de mediciones repetidas | 15-30 |
| Instrumento | Deriva entre calibraciones, resolución, ruido | 20-40 |
| Temperatura | Variación durante la medición | 5-10 |
| Operador | Técnica de inyección, preparación de diluciones | 5-15 |

### Cálculo simplificado

La incertidumbre combinada (u_c) se calcula como la raíz cuadrada de la suma de cuadrados de las incertidumbres individuales (siguiendo el método GUM —Guide to the Expression of Uncertainty in Measurement—):

> u_c = √(u_CRM² + u_dil² + u_rep² + u_inst² + u_temp² + u_op²)

La incertidumbre expandida (U) se obtiene multiplicando u_c por un factor de cobertura k=2 (para un nivel de confianza del 95 %).

**Ejemplo práctico — Calibración de balanza analítica:**

| Componente | Incertidumbre estándar (mg) | Tipo |
|------------|----------------------------|------|
| Pesas certificadas (Clase E2) | 0.010 | B |
| Deriva de la balanza | 0.020 | B |
| Repetibilidad (n=10, s=0.015 mg) | 0.015 | A |
| Resolución digital (0.01 mg) | 0.0029 | B |
| Efecto de excentricidad | 0.005 | B |
| **Incertidumbre combinada (u_c)** | **0.028** | — |
| **Incertidumbre expandida (U, k=2)** | **0.056 mg** | — |

## Documentación del Programa de Calibración

ISO 17025:2017 exige que el laboratorio mantenga registros de cada calibración. La documentación mínima incluye:

1. **Procedimiento de calibración** (documento controlado) — Describe paso a paso cómo se calibra cada tipo de equipo.
2. **Registro de calibración** — Fecha, instrumento, estándares usados (con número de lote y certificado), resultados, incertidumbre, nombre del responsable.
3. **Etiqueta de calibración** — En cada equipo, con fecha de calibración, fecha de próxima calibración y responsable.
4. **Historial de calibraciones** — Base de datos o archivo que permita rastrear el desempeño del equipo a lo largo del tiempo. Permite identificar tendencias (un equipo que requiere ajustes cada vez más frecuentes probablemente necesita mantenimiento mayor o reemplazo).
5. **Plan maestro de calibración** — Calendario anual con todos los equipos, fechas programadas y estatus de cada uno.

### Lo que buscan los auditores

- **¿Hay trazabilidad documentada de cada calibración al SI?**
- **¿Los CRM están vigentes y almacenados correctamente?**
- **¿Las verificaciones intermedias se realizan y documentan?**
- **¿El laboratorio define y justifica sus intervalos de calibración?**
- **¿Las no conformidades detectadas en calibraciones (equipo fuera de especificación) tienen acción correctiva documentada?**

## Conclusión

Un programa de calibración efectivo no se logra comprando certificados —se construye con procedimientos claros, CRM adecuados, intervalos basados en datos y un sistema de documentación que permita demostrar trazabilidad en cada resultado. La inversión en calibración no es un gasto: es el seguro que protege la validez de cada dato que produce el laboratorio. ISO 17025:2017 no lo exige porque sea un capricho; lo exige porque la calibración es el piso sobre el que se construye toda la calidad analítica.

En **Solinsa** ofrecemos servicios integrales de calibración, verificación y mantenimiento para equipos de laboratorio, incluyendo balanzas, pipetas, pHmetros, cromatógrafos y espectrofotómetros. Todos nuestros servicios son trazables al CENAM con incertidumbre calculada según GUM. Contáctenos para diseñar el programa de calibración que su laboratorio necesita para cumplir con ISO 17025:2017 y alcanzar la acreditación.
