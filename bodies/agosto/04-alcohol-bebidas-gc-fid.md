# Análisis de Contenido de Alcohol en Bebidas por GC-FID: Método Oficial

**Determinación de grado alcohólico (% v/v) por cromatografía de gases con detector de ionización de llama y estándar interno**

---

## 1. Introducción

La determinación precisa del contenido de alcohol etílico en bebidas alcohólicas es un requisito fundamental tanto para el cumplimiento normativo como para el control de calidad en la industria. El porcentaje de alcohol en volumen (% v/v) define la identidad del producto, impacta directamente en el cálculo de impuestos y aranceles, y es un parámetro crítico supervisado por las autoridades sanitarias y fiscales en México y el mundo.

El método oficial para esta cuantificación, adoptado por la mayoría de los laboratorios de control de calidad, es la cromatografía de gases acoplada a un detector de ionización de llama (GC-FID) utilizando estándar interno. Esta técnica ofrece ventajas determinantes frente a métodos tradicionales como la destilación-picnometría o los densímetros electrónicos: mayor selectividad, capacidad de detección de compuestos volátiles interferentes, automatización y trazabilidad metrológica.

En este artículo se presenta el fundamento, la instrumentación, el procedimiento de calibración y los criterios de validación del método, con especial atención a lo establecido en las normas oficiales mexicanas NOM-006-SCFI-2012 (Bebidas alcohólicas — Tequila) y NOM-070-SCFI-2016 (Bebidas alcohólicas — Especificaciones y métodos de prueba).

---

## 2. Fundamento del método

La cromatografía de gases separa los componentes de una muestra volátil basándose en su partición diferencial entre una fase móvil gaseosa (gas acarreador, generalmente helio o hidrógeno) y una fase estacionaria contenida dentro de una columna capilar.

El detector de ionización de llama (FID) genera una señal proporcional al número de átomos de carbono que llegan a la llama hidrógeno-aire. Dado que el etanol tiene una respuesta FID predecible y lineal en el rango de interés (0–100 % v/v diluido a concentraciones de trabajo), el detector es ideal para esta aplicación.

El uso de un **estándar interno** (típicamente *n*-propanol, *terc*-butanol o acetonitrilo) corrige automáticamente las variaciones en el volumen de inyección, la deriva instrumental y los efectos de matriz, lo que se traduce en una exactitud y repetibilidad superiores a las obtenidas por calibración con estándar externo.

---

## 3. Condiciones cromatográficas recomendadas

La siguiente tabla resume las condiciones instrumentales típicas para la determinación de alcohol etílico en bebidas alcohólicas por GC-FID con estándar interno.

| Parámetro | Condición recomendada |
|---|---|
| **Columna capilar** | HP-INNOWax (PEG), 30 m × 0.25 mm d.i. × 0.25 µm de espesor de película, o equivalente tipo DB-WAX / CP-WAX 57 CB |
| **Gas acarreador** | Helio o hidrógeno, grado cromatográfico (≥ 99.999 %) |
| **Flujo** | 1.0 – 1.5 mL/min (modo flujo constante) |
| **Temperatura del inyector** | 200 – 250 °C (split 50:1 a 100:1) |
| **Temperatura del detector (FID)** | 250 – 280 °C |
| **Horno (programación)** | 40 °C (2 – 4 min), rampa 10 – 20 °C/min hasta 180 °C, mantener 1 min |
| **Volumen de inyección** | 0.5 – 1.0 µL |
| **Tiempo total de corrida** | ~ 10 – 12 min |
| **Estándar interno** | *n*-Propanol 2 – 5 % v/v en fase acuosa |
| **Diluyente** | Agua desionizada grado HPLC |

*Nota: Para bebidas con alto contenido de azúcares o extracto (licores, cremas, vodkas saborizados), se recomienda una dilución previa 1:5 o 1:10 y centrifugación antes de la inyección para proteger la columna.*

---

## 4. Preparación de estándares y calibración

### 4.1 Soluciones estándar de calibración

Se prepara una curva de calibración con al menos cinco niveles de concentración de etanol en el rango esperado de la muestra (típicamente 0 – 20 % v/v después de dilución), cada uno conteniendo la misma concentración de estándar interno.

**Ejemplo de preparación (matraz aforado de 25 mL):**

1. Adicionar 2.5 mL de solución de estándar interno (n-propanol al 20 % v/v en agua).
2. Adicionar el volumen correspondiente de etanol absoluto para obtener las concentraciones deseadas (p. ej., 1.25, 2.50, 5.00, 7.50, 10.00 mL de etanol → 5, 10, 20, 30, 40 % v/v en la solución madre; equivalentes a 0.5, 1.0, 2.0, 3.0, 4.0 % v/v después de dilución).
3. Aforar con agua desionizada.
4. Transferir a viales de cromatografía y sellar.

### 4.2 Curva de calibración

Se inyecta cada estándar por duplicado y se calcula la relación de áreas (área etanol / área estándar interno) versus la relación de concentraciones (C etanol / C estándar interno). Se ajusta por mínimos cuadrados lineales. El coeficiente de correlación (R²) debe ser ≥ 0.999.

*Ecuación de la recta:*
> Relación de áreas = m × (Relación de concentraciones) + b

donde *m* es la pendiente (factor de respuesta relativa) y *b* la ordenada al origen, cuyo intervalo de confianza debe incluir al cero (prueba de linealidad).

---

## 5. Procedimiento analítico

1. **Acondicionamiento del equipo:** Verificar fugas, flujo de gases (H₂ ~ 30 – 40 mL/min, aire ~ 300 – 400 mL/min, make-up N₂ ~ 25 mL/min), encender el detector y estabilizar la línea base.
2. **Blanco de reactivos:** Inyectar agua desionizada con estándar interno. No debe presentar picos interferentes en el tiempo de retención del etanol.
3. **Estándares de calibración:** Inyectar por duplicado los estándares de calibración. Verificar linealidad y repetibilidad de los factores de respuesta.
4. **Preparación de la muestra:**
   - **Cerveza/vino/sidra:** Degasificar por ultrasonido (5 min) o filtración al vacío. Diluir 1:50 o 1:100 con agua desionizada conteniendo estándar interno, según el % v/v nominal.
   - **Destilados (tequila, whisky, vodka, ron):** Diluir 1:10 o 1:20 (para obtener una concentración dentro del rango de la curva).
   - **Licores y cremas:** Diluir 1:20, centrifugar a 4000 rpm (10 min) y filtrar sobre membrana 0.45 µm.
5. **Inyección:** Inyectar la muestra diluida. Registrar el cromatograma y las áreas de los picos de etanol y estándar interno.
6. **Cálculo:**
   
   \[
   \% \text{v/v EtOH} = \frac{(R_m - b)}{m} \times \frac{C_{EI} \times F_d}{100}
   \]
   
   donde:
   - \( R_m \) = Relación de áreas (etanol / estándar interno) en la muestra
   - \( m \) = Pendiente de la curva de calibración
   - \( b \) = Ordenada al origen
   - \( C_{EI} \) = Concentración de estándar interno en la solución inyectada (% v/v)
   - \( F_d \) = Factor de dilución

---

## 6. Cumplimiento con normas oficiales mexicanas

### NOM-006-SCFI-2012 (Tequila)

Esta norma establece que el tequila debe contener un contenido alcohólico de 35 – 55 % v/v a 20 °C (tequila), o 55 – 60 % v/v (tequila extra añejo cuando corresponda). El método de prueba referido es el de GC-FID con estándar interno (apéndice normativo B). Se exige:

- Exactitud: recuperación entre 98 – 102 %.
- Repetibilidad (r): ≤ 0.2 % v/v para el mismo analista, equipo y día.
- Reproducibilidad (R): ≤ 0.5 % v/v entre laboratorios.

### NOM-070-SCFI-2016 (Bebidas alcohólicas)

Aplica a todas las demás bebidas alcohólicas comercializadas en territorio mexicano (cerveza, vino, brandy, ron, vodka, etc.). La norma especifica el GC-FID como método de referencia para controversias y verificación oficial. Los criterios de desempeño incluyen:

- Límite de cuantificación (LOQ): ≤ 0.05 % v/v.
- Linealidad: R² ≥ 0.999.
- Precisión intra-día (CV %): ≤ 2.0 %.
- Precisión inter-día (CV %): ≤ 3.0 %.

Ambas normas exigen que el laboratorio esté acreditado ante la EMA (Entidad Mexicana de Acreditación) y participe en programas de ensayos de aptitud interlaboratorios.

---

## 7. Validación del método

La validación debe realizarse conforme a la Guía de Validación de Métodos de la EMA (NMX-EC-17025-IMNC-2018) y los lineamientos de la AOAC (Appendix F). Los parámetros mínimos a evaluar son:

| Parámetro | Criterio de aceptación |
|---|---|
| Selectividad | Ausencia de interferencias (picos resueltos, Rs ≥ 1.5 entre etanol y EI) |
| Linealidad | R² ≥ 0.999; prueba de falta de ajuste no significativa (p > 0.05) |
| LOD | ≤ 0.01 % v/v (S/N ≥ 3) |
| LOQ | ≤ 0.05 % v/v (S/N ≥ 10; precisión CV ≤ 5 % y sesgo ≤ ± 5 %) |
| Exactitud (recuperación) | 98 – 102 % |
| Repetibilidad (r) | CV ≤ 1.0 % |
| Reproducibilidad (R) | CV ≤ 3.0 % |
| Incertidumbre expandida | ≤ 0.5 % v/v (k = 2, 95 % de confianza) |

---

## 8. Mantenimiento y buenas prácticas

- Verificar diariamente la línea base (ruido pico a pico < 0.1 pA).
- Reemplazar el liner del inyector cada 100 inyecciones o ante pérdida de simetría en los picos.
- Acondicionar la columna al iniciar (40 → 200 °C, 5 °C/min, mantener 30 min) y realizar un *bake-out* semanal (200 °C, 30 min) para eliminar residuos acumulados.
- Monitorear los factores de respuesta con una muestra control en cada lote; recalibrar si el desvío supera ± 5 %.

---

## 9. Conclusión

La cromatografía de gases con detector de ionización de llama y estándar interno es el método oficial, robusto y trazable para la determinación del contenido de alcohol en bebidas alcohólicas. Su adopción garantiza el cumplimiento de las normas NOM-006 y NOM-070, proporciona resultados con alta exactitud y precisión, y permite a los laboratorios enfrentar con confianza auditorías regulatorias, verificaciones fiscales y disputas comerciales.

Un sistema GC-FID correctamente calibrado, con columnas tipo PEG de alta eficiencia y un programa de validación conforme a los lineamientos EMA-AOAC, constituye la columna vertebral del control de calidad en la industria de bebidas alcohólicas en México.

---

*¿Requiere asistencia para la implementación de este método en su laboratorio? En Solinsa ofrecemos consultoría en validación de métodos cromatográficos, selección de columnas y puesta a punto de equipos GC-FID. Contáctenos para una cotización personalizada.*
