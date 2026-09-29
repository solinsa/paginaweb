---
title: "Diagnóstico de Problemas en Cromatógrafos de Gases: Guía Práctica de Solución de Fallas"
published: 2025-10-10
category: cat-serv-diag
tags: [GC, diagnóstico, fallas, mantenimiento, inyector, columna, detector, troubleshooting]
audience: [T1-Ambiental, T1-Farmacéutica, T1-Alimentos]
lang: es-MX
wordcount: ~1500
---

## Introducción

El cromatógrafo de gases (GC) es, sin discusión, el caballo de batalla del laboratorio analítico moderno. Una máquina bien calibrada puede operar semanas enteras sin interrupción, produciendo datos confiables turno tras turno. Pero cuando algo falla —y eventualmente falla— el diagnóstico rápido marca la diferencia entre una hora perdida y un día completo de improductividad.

Los problemas más comunes en GC se manifiestan en el cromatograma como **picos fantasmas, cola (tailing), picos partidos (split peaks), deriva de línea base** o **desplazamiento de tiempos de retención**. Detrás de cada uno de estos síntomas hay una causa identificable: un inyector sucio, una columna degradada, un detector fuera de parámetros, fugas en el sistema, o simplemente un septum que debió cambiarse hace 50 inyecciones.

> "En un GC, el 80 % de los problemas están en el inyector y la columna. El detector solo te avisa que ya hay un problema."

Esta guía práctica recorre los síntomas más frecuentes, sus causas probables y las acciones correctivas que puede aplicar su equipo de laboratorio sin necesidad de una llamada de servicio inmediata. Cuando el problema persiste después de estas verificaciones, entonces sí, es momento de contactar al soporte técnico de Solinsa.

## Picos Fantasma y Memoria de Inyector

Los **picos fantasma** son señales que aparecen en el cromatograma sin que se haya inyectado una muestra. Pueden confundirse con analitos reales, distorsionar integraciones y arruinar una secuencia completa.

### Causas principales

| Causa | Síntoma | Diagnóstico |
|-------|---------|-------------|
| Septum degradado | Picos a tiempos de retención variables | El septum lleva >100 inyecciones o está perforado |
| Liner sucio o fracturado | Picos anchos con cola, memoria de muestras anteriores | Inspección visual: el liner tiene residuos carbonizados |
| Silla de inyector contaminada | Picos fantasma consistentes en cada corrida | Inyectar blanco de solvente después de una muestra concentrada |
| Columna con sangrado (bleed) | Línea base ascendente con picos múltiples a alta temperatura | Observar el aumento de señal al final del gradiente de temperatura |
| Contaminación en el carrier gas | Picos que aparecen y desaparecen sin patrón | Verificar la pureza del gas (≥ 99.9995 %) y los filtros |
| Válvula de muestra (si aplica) | Picos del disolvente de lavado o muestra anterior | Realizar ciclos de lavado con solvente limpio |

### Acciones correctivas

1. **Reemplazar el septum** — Es el mantenimiento más barato y el que más problemas resuelve. Cambie el septum cada 100 inyecciones o al primer signo de perforación.
2. **Cambiar el liner** — Un liner de vidrio desactivado con lana de cuarzo retiene no volátiles y evita que lleguen a la columna. Inspecciónelo cada 50 inyecciones; cámbielo si hay oscurecimiento o residuos visibles.
3. **Recortar 10-15 cm de la columna** por el extremo del inyector — La parte inicial de la columna acumula los contaminantes no volátiles que atraviesan el liner.
4. **Baking del inyector** — Programar una secuencia de temperatura del inyector a 300-350 °C por 30 min con flujo alto para volatilizar residuos acumulados.

> **Regla empírica:** Si un blanco de hexano muestra más de 3 picos con área ≥ 0.1 % del área típica de su estándar interno, tiene un problema de contaminación en el inyector que debe limpiarse antes de continuar.

## Problemas de Forma de Pico: Tailing y Split Peaks

La forma del pico cromatográfico es el indicador visual más inmediato de la salud del sistema. Un pico normal es gaussiano simétrico. Cuando no lo es, algo está mal.

### Pico con Cola (Tailing)

El **tailing** se manifiesta como una asimetría hacia el lado derecho del pico: el frente es abrupto y la caída es prolongada. El factor de asimetría (As) debe estar entre 0.9 y 1.3 para un sistema saludable.

**Causas frecuentes:**

- **Sitios activos en el inyector o columna** — Compuestos polares (ácidos, alcoholes, aminas) interactúan con silanoles libres en la fase estacionaria o en el liner de vidrio. Solución: usar liner desactivado con silanización y columnas con fase estacionaria de alta desactivación.
- **Volumen de inyección excesivo** — Si inyecta más de 2 µL en modo splitless, la banda de muestra es demasiado ancha. Reduzca el volumen o aumente la relación de split.
- **Columna obstruida parcialmente** — Recortar 10-20 cm del extremo del detector y verificar que no haya partículas en la ferrule.
- **Temperatura del inyector demasiado baja** — La muestra no se volatiliza instantáneamente. Aumente 10-20 °C la temperatura del inyector (sin exceder la temperatura máxima de la columna).

### Pico Partido (Split Peak)

El **split peak** muestra un pico con un valle en la cresta, como si fueran dos picos superpuestos. Es distintivo y casi siempre apunta a problemas en la columna o el inyector.

**Causas más probables:**

1. **Inserción incorrecta de la columna en el inyector** — La distancia desde la ferrule hasta el final de la columna debe ser exacta (típicamente 4-6 mm en inyectores split/splitless). Si la columna está demasiado dentro, la muestra choca contra las paredes; si está muy afuera, la vaporización es incompleta.
2. **Material particulado en la jeringa o en el puerto** — Una aguja obstruida parcialmente libera la muestra en dos pulsos. Limpie la jeringa con solvente y verifique que el émbolo se deslice suavemente.
3. **Gradiente de temperatura en la columna** — En programaciones de temperatura muy rápidas (>20 °C/min) con columnas de diámetro interno grande (>0.32 mm), el frente de la banda puede no homogenizarse. Reduzca la rampa de temperatura.

### Tabla rápida de diagnóstico visual

| Síntoma | Causa n.º 1 | Causa n.º 2 | Prioridad de acción |
|---------|-------------|-------------|---------------------|
| Cola (tailing) | Liner sucio o mal desactivado | Columna degradada | Cambiar liner → recortar columna |
| Pico partido | Columna mal insertada | Obstrucción en jeringa | Verificar inserción → limpiar jeringa |
| Pico ancho | Flujo incorrecto | Volumen de inyección alto | Verificar flujo → reducir volumen |
| Frente (fronting) | Sobrecarga de columna | Temperatura baja de inyector | Diluir muestra → aumentar T° inyector |

## Deriva de la Línea Base

La línea base es el termómetro del estado del sistema. Una línea base estable (≤ 0.5 mV de deriva en 30 min) es condición necesaria para cuantificar trazas.

### Deriva ascendente

Cuando la línea base sube constantemente durante la corrida, especialmente en la parte final del gradiente de temperatura, la causa casi siempre es **sangrado de columna (column bleed)**. Toda fase estacionaria tiene una temperatura máxima de operación; al acercarse a ese límite, la fase se degrada y libera oligómeros que el detector FID o MS registra como señal.

**Soluciones:**
- Usar columnas con temperatura máxima superior a la temperatura final del método.
- Reducir la temperatura final del horno 20-30 °C por debajo del límite de la columna.
- Columnas de fase estacionaria de baja polaridad (como 100 % dimetilpolisiloxano) sangran menos que las polares (como polietilenglicol).

### Deriva cíclica o ruido excesivo

Si la línea base oscila (ondulaciones) o presenta ruido tipo "sierra", verifique:

- **Flujo de gas:** Una restricción parcial en la línea de gas carrier (trampa, regulador, filtro) causa fluctuaciones de presión. Verifique con el manómetro de entrada que el flujo sea constante.
- **Detector:** En FID, la acumulación de agua en el colector o un flujo incorrecto de H₂/aire produce ruido excesivo. Limpie el jet del FID con solvente y recalibre los flujos.
- **Horno:** Si la puerta del horno no sella correctamente o el ventilador está desbalanceado, la temperatura fluctúa y la línea base lo refleja.

> **Protocolo rápido:** Inyecte aire (0.1 µL) con el detector a temperatura máxima de operación. Si la línea base sube >5 mV, tiene sangrado de columna significativo. Si el ruido pico a pico excede 0.5 mV, revise los gases y el detector.

## Desplazamiento de Tiempos de Retención

La repetibilidad del tiempo de retención (TR) es fundamental para la identificación de compuestos. Una variación de TR > 0.05 min (3 segundos) entre corridas sucesivas del mismo compuesto es señal de alerta.

### Causas y soluciones

| Causa | Síntoma | Acción correctiva |
|-------|---------|-------------------|
| Fuga en el sistema | TR aumenta progresivamente | Prueba de fugas con detector electrónico o solución jabonosa en conexiones |
| Flujo de gas carrier incorrecto | TR desplazado repentinamente | Verificar presión de columna y flujo total; reemplazar columnas guarda si el flujo ha bajado |
| Fase estacionaria degradada | TR se reduce con el tiempo (la fase se ha perdido) | Reemplazar columna |
| Temperatura del horno inexacta | TR sistemáticamente fuera de lo esperado | Verificar termopar del horno contra un termómetro de referencia |
| Cambio de lote de columna | TR diferente al método original | Ajustar presiones o temperatura para compensar; documentar en el método |

### La fuga: el enemigo silencioso

Una fuga pequeña (por ejemplo, 0.1 mL/min en la conexión del inyector) no siempre produce un cromatograma visiblemente anormal, pero sí desplaza los TR y reduce la sensibilidad porque el flujo real a través de la columna es menor que el programado.

**Procedimiento de pruebas de fugas recomendado:**

1. Tapar la salida de la columna en el detector.
2. Presurizar el sistema a 50 kPa por encima de la presión de trabajo.
3. Esperar 5 min: la presión no debe caer más de 2 kPa.
4. Aplicar detector electrónico de fugas (o líquido detector) en: septum, conector del inyector-columna, uniones, ferrules del detector.

## Mantenimiento Programado: La Mejor Estrategia

La mayoría de los problemas descritos se pueden prevenir con un programa de mantenimiento preventivo. La tabla siguiente resume las frecuencias recomendadas para GC de rutina en laboratorios que operan turnos de 8 horas:

| Componente | Frecuencia | Acción |
|------------|------------|--------|
| Septum | Cada 100 inyecciones o semanal | Reemplazar |
| Liner | Cada 100-200 inyecciones o al observar tailing | Reemplazar o limpiar con solvente y silanizar |
| Jeringa | Diario | Lavar con solvente pos-corrida; reemplazar aguja cada 500 inyecciones |
| Trampa de gas carrier | Cada 6 meses | Reemplazar (indicador de oxígeno debe estar verde) |
| Filtros de gas | Cada 3 meses | Reemplazar (depende del volumen de gas consumido) |
| Recorte de columna (extremo inyector) | Cada 500-1000 inyecciones | Cortar 15-20 cm |
| Anillo O del inyector | Cada 2000 inyecciones o anual | Reemplazar y engrasar con grasa de alto vacío |
| Jet del FID | Cada 1000 inyecciones o al observar ruido | Limpiar con metanol en baño ultrasónico |
| Fuente del MS | Trimestral a semestral | Limpieza según manual del fabricante |

## Conclusión

Diagnosticar problemas en un cromatógrafo de gases no requiere un doctorado ni equipos sofisticados de diagnóstico. Requiere método, observación disciplinada del cromatograma y un checklist de mantenimiento que se siga sin excepción. El 70 % de las fallas en GC se resuelven con tres acciones: cambiar el septum, cambiar el liner y recortar la columna.

En **Solinsa** entendemos que el tiempo de inactividad de un GC cuesta muestras, resultados y dinero. Por eso ofrecemos no solo equipos, consumibles y columnas de las mejores marcas, sino también servicios de diagnóstico remoto y visitas técnicas programadas. Si después de aplicar esta guía el problema persiste, nuestro equipo de soporte está a una llamada de distancia para ayudarle a identificar la causa raíz y poner su cromatógrafo de nuevo en producción.
