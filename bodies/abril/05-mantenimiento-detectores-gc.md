---
title: 'Mantenimiento preventivo de detectores GC: FID, ECD, TCD y espectrometría de masas'
published: 2026-04-13
slug: mantenimiento-detectores-gc-fid-ecd-tcd-ms
category: cat-serv-mtto
tags:
  - mantenimiento
  - GC
  - detectores
  - FID
  - ECD
  - TCD
  - MS
audience:
  - T1-Industria
  - T2-Aseguramiento
---

# Mantenimiento preventivo de detectores GC: FID, ECD, TCD y espectrometría de masas

## Introducción

El detector es el componente más crítico de un cromatógrafo de gases: es el responsable de traducir la separación cromatográfica en una señal cuantificable. Un detector fuera de especificación genera líneas base ruidosas, pérdida de sensibilidad, deriva y, en el peor de los casos, resultados erróneos que comprometen decisiones de calidad, liberación de lotes o cumplimiento normativo.

En el programa Q2 2026 de Solinsa presentamos una guía práctica de mantenimiento preventivo para los cuatro detectores GC más utilizados en la industria mexicana: FID, ECD, TCD y espectrometría de masas (MS). Cada sección incluye procedimientos específicos, periodicidad recomendada e indicadores de desgaste.

---

## 1. Detector de Ionización de Flama (FID)

El FID es el detector universal por excelencia para compuestos orgánicos. Su principio se basa en la ionización de carbono en una flama de hidrógeno/aire.

### Procedimientos de mantenimiento

| Componente | Acción | Frecuencia | Herramientas requeridas |
|------------|--------|------------|------------------------|
| Jet (boquilla) | Limpieza ultrasónica en acetona/metanol | Mensual | Baño ultrasónico, acetona, metanol grado GC |
| Colector | Limpieza con solvente y paño libre de pelusa | Mensual | Hexano, metanol, paño óptico |
| Ignitor (encendedor) | Inspección visual y reemplazo si presenta corrosión o fisuras | Trimestral | Ignitor de repuesto específico del fabricante |
| Flujo H₂/aire | Verificación con medidor de flujo electrónico | Semanal | Medidor de flujo calibrado |

### Indicadores de desgaste en FID

- **Línea base ruidosa** (>0.5 mV pico-pico): indica contaminación del jet o colector.
- **Pérdida de ignición intermitente**: flujo de H₂ incorrecto o ignitor deteriorado.
- **Señal decreciente en estándares de chequeo**: jet parcialmente obstruido.
- **Picos con cola (tailing)**: depósitos de carbono en la boquilla.

### Secuencia de limpieza del jet

1. Apagar el detector y dejar enfriar a temperatura ambiente.
2. Retirar el jet con la herramienta específica del fabricante.
3. Sumergir en acetona grado GC y sonicación por 15 min.
4. Transferir a metanol grado GC, sonicación por 15 min.
5. Secar con flujo de nitrógeno grado 5.0.
6. Revisar con microscopio estereoscópico — el orificio debe estar libre de obstrucciones.
7. Reinstalar y verificar fuga con detector electrónico de fugas.

---

## 2. Detector de Captura de Electrones (ECD)

El ECD es altamente selectivo para compuestos halogenados y se utiliza extensamente en análisis ambientales (pesticidas, PCBs). Contiene una fuente radiactiva de Ni⁶³ que debe manejarse con precaución.

### Procedimientos de mantenimiento

| Componente | Acción | Frecuencia | Notas de seguridad |
|------------|--------|------------|-------------------|
| Gas de make-up (N₂ o Ar/CH₄) | Purga y verificación de flujo (30–60 mL/min) | Semanal | Mantener flujo constante incluso con detector apagado |
| Bloque del detector | Verificación de temperatura de operación (300–400 °C) | Diaria | La temperatura estabiliza la corriente de referencia |
| Liner de entrada | Reemplazo | Trimestral | Usar liner desactivado (silanizado) |
| Celda de Ni⁶³ | Verificación de integridad — no requiere limpieza mecánica | Anual por proveedor autorizado | No tocar, no limpiar; contacto solo con personal autorizado por la CNSNS |

### Consideraciones regulatorias para fuentes radiactivas

En México, el manejo de fuentes de Ni⁶³ está regulado por la Comisión Nacional de Seguridad Nuclear y Salvaguardias (CNSNS). Todo laboratorio debe:

- Mantener un inventario actualizado de fuentes radiactivas.
- Realizar pruebas de fuga (wipe test) cada 6 meses.
- Disponer de un plan de emergencia en caso de daño a la celda.
- Contar con un responsable de protección radiológica.

### Indicadores de desgaste en ECD

| Síntoma | Causa probable | Acción correctiva |
|---------|---------------|-------------------|
| Corriente de referencia baja | Fuga en la celda o agotamiento de la fuente | Prueba de fuga, evaluar reemplazo de celda |
| Línea base con drift ascendente | Contaminación del liner o columna | Reemplazar liner, recortar columna 5 cm |
| Disminución de sensibilidad >50% | Contaminación de la celda | Revisar temperatura — celda contaminada requiere servicio especializado |

---

## 3. Detector de Conductividad Térmica (TCD)

El TCD es un detector universal no destructivo, ideal para gases permanentes (H₂, O₂, N₂, CO, CO₂) y compuestos inorgánicos.

### Procedimientos de mantenimiento

| Componente | Acción | Frecuencia |
|------------|--------|------------|
| Bloque del TCD | Limpieza de la cavidad con solvente | Trimestral |
| Filamentos | Inspección visual con lupa estereoscópica (10× a 40×) | Trimestral |
| Polaridad | Verificación de conexión (+/-) y balance del puente de Wheatstone | En cada reemplazo de filamento |
| Gas de referencia | Verificación de flujo (30–50 mL/min) y pureza (>99.999%) | Semanal |

### Reemplazo de filamentos

Los filamentos de tungsteno-renio (W-Re) son los más comunes. Señales de que deben reemplazarse:

- **Sensibilidad reducida** >30% respecto al valor inicial.
- **Asimetría en picos positivos/negativos**.
- **Resistencia fuera de especificación** medida con multímetro (±0.5 Ω del valor nominal).
- **Rotura visible** al microscopio (más común después de oxidación por entrada de O₂).

### Verificación de polaridad

Una polaridad invertida produce picos negativos. Después de reemplazar filamentos, verificar con una inyección de prueba de una mezcla de metano al 1% en helio. Todos los picos deben ser positivos.

---

## 4. Espectrometría de Masas (MS)

El detector MS aporta información estructural además de cuantificación. Es el detector más demandante en mantenimiento por su sistema de vacío y componentes de precisión.

### Procedimientos de mantenimiento

| Componente | Acción | Frecuencia |
|------------|--------|------------|
| Fuente de ionización (EI) | Limpieza con alúmina o polvo de diamante | Trimestral o según horas de uso (>500 h) |
| Filamento | Reemplazo preventivo | Semestral o >1000 h de uso |
| Electron multiplier (EM) | Verificación de voltaje de ganancia | Durante la calibración diaria o semanal |
| Prefiltro y lentes iónicos | Limpieza ultrasónica | Anual |
| Bomba turbomolecular | Verificación de velocidad de giro y ruido | Mensual |
| Calibración con PFTBA | Ajuste de masas y resolución | Semanal y después de cada mantenimiento mayor |

### Secuencia de limpieza de fuente EI

1. Ventear el sistema de vacío con N₂ grado 5.0.
2. Retirar la fuente de ionización usando guantes libres de polvo y talco.
3. Desmontar lentes, repeler y filamento.
4. Limpieza mecánica: frotar las superficies metálicas con alúmina (0.3 µm) suspendida en metanol, usando un aplicador de fibra óptica.
5. Sonicación: sumergir piezas en acetona (10 min), luego metanol (10 min), luego hexano (5 min).
6. Secado: estufa a 60 °C por 30 min o flujo de N₂.
7. Ensamble: reinstalar con torque calibrado en tornillos.
8. Bakeout: programar bakeout del sistema a 250 °C por 4 h mínimo.
9. Verificación: inyectar PFTBA y verificar intensidad de iones >10⁶ counts, resolución <0.7 amu FWHM.

### Calibración con PFTBA (perfluorotributilamina)

| Ion (m/z) | Propósito | Especificación |
|-----------|-----------|----------------|
| 69 | Referencia de baja masa | Intensidad >10⁶, FWHM ≤0.6 amu |
| 219 | Referencia de masa media | Exactitud ±0.1 amu |
| 502 | Referencia de alta masa | Relación isotópica correcta |
| 131/132 | Resolución isotópica | Separación >50% valle |

---

## Tabla de frecuencias recomendadas por detector

| Actividad | FID | ECD | TCD | MS |
|-----------|-----|-----|-----|-----|
| Verificación de flujo de gases | Semanal | Semanal | Semanal | Diaria |
| Chequeo de línea base | Diario | Diario | Diario | Diario |
| Inyección de estándar de verificación | Diario | Diario | Diario | Diario |
| Limpieza de jet/bloque/fuente | Mensual | — | Trimestral | Trimestral |
| Reemplazo de liner/sello | Trimestral | Trimestral | Trimestral | Trimestral |
| Reemplazo de filamento | Según horas | — | Según horas | Semestral |
| Calibración (MS: PFTBA) | Anual | Anual | Anual | Semanal |
| Servicio mayor por proveedor | Anual | Anual | Anual | Anual |

---

## Registro de mantenimiento

Recomendamos documentar cada intervención en un formato digital o físico que incluya:

- Fecha y hora de la intervención.
- Nombre del técnico responsable.
- Detalle del procedimiento realizado.
- Número de serie del detector y horas acumuladas.
- Resultados de verificación post-mantenimiento (línea base, sensibilidad, calibración).
- Refacciones utilizadas (número de parte, lote).
- Observaciones y firma.

> **Descarga nuestro formato de checklist de mantenimiento preventivo para GC** — disponible con tu asesor Solinsa.

---

## Conclusión

Un programa de mantenimiento preventivo bien ejecutado extiende la vida útil del detector hasta 3–5 años adicionales, reduce el tiempo fuera de servicio en un 40% y garantiza resultados confiables en cada inyección. La inversión en mantenimiento se recupera al eliminar reinyecciones, evitar paros no programados y mantener la validez de los datos bajo lineamientos de Buenas Prácticas de Laboratorio (BPL) e ISO 17025.

En Solinsa somos expertos en instrumentación analítica y cromatografía. Contamos con técnicos certificados, refacciones originales y programas de mantenimiento preventivo diseñados para cada tipo de detector y marca. Contáctanos para recibir asesoría personalizada, cotización de equipos, refacciones o soporte técnico. Visítanos en solinsa.com
