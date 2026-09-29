La espectrometría de masas con plasma acoplado inductivamente (ICP-MS) es la técnica de referencia para el análisis de metales traza y ultratraza en matrices ambientales. Su sensibilidad en el rango de ppt y su capacidad multielemental la hacen indispensable para el monitoreo de calidad del agua.

## Principios del ICP-MS

El ICP-MS combina un plasma de argón (ICP) como fuente de ionización con un espectrómetro de masas (MS) como detector. Las muestras líquidas se nebulizan, se transportan al plasma donde se atomizan e ionizan, y los iones se separan por su relación masa-carga.

### Componentes Clave

| Componente | Función | Especificación Típica |
|-----------|---------|----------------------|
| Nebulizador | Generar aerosol fino | Concéntrico o MicroFlow |
| Cámara de nebulización | Seleccionar gotas < 10 µm | Scott doble paso |
| Antorcha de plasma | Atomizar e ionizar | 1,000 - 1,500 W, 15-18 L/min Ar |
| Interfaz (conos) | Muestreo de iones | Ni o Pt, sampler + skimmer |
| Celda de colisión/reacción | Eliminar interferencias | He o H₂, KED mode |
| Analizador de masas | Separar por m/z | Cuadrupolo o sector magnético |

## Preparación de Muestra para Aguas

### Tipos de Muestra y Pretratamiento

| Tipo de Agua | Pretratamiento | Digestión |
|-------------|---------------|-----------|
| Agua potable | Filtración 0.45 µm | No requiere (directa) |
| Agua superficial | Filtración 0.45 µm, acidificar pH < 2 | Digestión si hay materia orgánica |
| Agua residual | Filtración, homogenización | Digestión ácida (EPA 200.8) |
| Agua de mar | Dilución 1:10 o extracción quelante | Digestión o dilución |

### Método de Digestión (EPA 200.8)

1. **Tomar** 50 mL de muestra homogenizada
2. **Agregar** 2 mL de HNO₃ concentrado (grado traza)
3. **Calentar** a 85-95 °C por 2 horas (sin hervir)
4. **Enfriar**, agregar 0.5 mL de H₂O₂ al 30%
5. **Calentar** 30 minutos más
6. **Aforar** a 50 mL con agua desionizada
7. **Filtrar** si hay precipitado

## Configuración Instrumental

### Parámetros Típicos

| Parámetro | Valor |
|-----------|-------|
| Potencia de RF | 1,550 W |
| Flujo de plasma (Ar) | 15 L/min |
| Flujo auxiliar (Ar) | 1.0 L/min |
| Flujo de nebulizador | 0.9 - 1.1 L/min |
| Velocidad de bomba | 0.3 rps |
| Tiempo de integración | 0.3 - 3 s por masa |
| Modo de adquisición | Peak hopping |
| Repeticiones | 3 por muestra |

## Eliminación de Interferencias

### Interferencias Espectrales

Las interferencias poliatómicas son el mayor reto en ICP-MS:

| Analito | Interferencia | Modo KED (He) | Solución Alternativa |
|---------|--------------|---------------|---------------------|
| ⁵¹V | ³⁵Cl¹⁶O | Efectiva | Usar ⁵¹V sin Cl o celda de reacción |
| ⁵²Cr | ⁴⁰Ar¹²C | Parcial | Usar ⁵³Cr en modo KED |
| ⁵⁵Mn | ⁴⁰Ar¹⁵N | Parcial | Verificar con STD |
| ⁵⁶Fe | ⁴⁰Ar¹⁶O | Efectiva en KED | Usar ⁵⁴Fe o ⁵⁷Fe |
| ⁷⁵As | ⁴⁰Ar³⁵Cl | No efectiva | Celda de reacción O₂ (⁷⁵As¹⁶O) |
| ⁸⁰Se | ⁴⁰Ar₂ | Parcial | Usar ⁷⁸Se o celda de reacción |

### Corrección de Interferencias No Espectrales

| Efecto | Causa | Corrección |
|--------|-------|-----------|
| Supresión de señal | Matriz (sólidos disueltos > 0.2%) | Diluir o usar estándar interno |
| Deriva instrumental | Deposición en conos | Estándar interno (Sc, In, Tb, Bi) |
| Efecto de memoria | Adsorción en línea de muestra | Lavados con HNO₃ 2% entre muestras |

## Curvas de Calibración y Control de Calidad

### Niveles de Calibración

| Nivel | Concentración | Tipo |
|-------|--------------|------|
| Blanco | 0 | HNO₃ 1% v/v |
| CAL 1 | 0.1 - 0.5 ppb | Bajo |
| CAL 2 | 1.0 - 5.0 ppb | Medio |
| CAL 3 | 10 - 50 ppb | Alto |
| CAL 4 | 100 - 500 ppb | Muy alto |
| CAL 5 | 1,000 ppb | Límite superior |

### Criterios de Control de Calidad

| Verificación | Frecuencia | Criterio |
|-------------|-----------|----------|
| Blanco de calibración | Inicio y cada 10 muestras | < LOD |
| Estándar de verificación (ICV) | Cada 10 muestras | 90-110% del valor esperado |
| Duplicado | Cada 10 muestras | RPD < 20% |
| Fortificación (LFM) | Cada 10 muestras | Recuperación 80-120% |
| Estándar interno | Cada muestra | Recuperación 60-125% |

## Límites Regulatorios (Agua Potable)

| Elemento | NOM-127-SSA1 (mg/L) | EPA (mg/L) | LOD ICP-MS Típico (µg/L) |
|---------|---------------------|-----------|-------------------------|
| Arsénico (As) | 0.025 | 0.010 | 0.01 |
| Cadmio (Cd) | 0.005 | 0.005 | 0.005 |
| Cromo (Cr) | 0.05 | 0.10 | 0.01 |
| Mercurio (Hg) | 0.001 | 0.002 | 0.005 |
| Plomo (Pb) | 0.01 | 0.015 | 0.005 |
| Selenio (Se) | 0.01 | 0.05 | 0.05 |

## Conclusión

El ICP-MS ofrece la sensibilidad y selectividad necesarias para cumplir con los límites cada vez más estrictos en el análisis de agua potable y ambiental. Con una preparación de muestra adecuada, control de interferencias y un programa de aseguramiento de calidad riguroso, es posible obtener resultados confiables en el rango de ppt. En Solinsa ofrecemos equipos ICP-MS y servicios de análisis de metales traza con métodos validados.
