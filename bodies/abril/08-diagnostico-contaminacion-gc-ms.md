---
title: 'Diagnóstico de contaminación en sistemas GC-MS: fuente de iones, columna y preparación de muestra'
published: 2026-04-23
slug: diagnostico-contaminacion-gc-ms-fuente-columna
category: cat-serv-diag
tags:
  - diagnóstico
  - GC-MS
  - contaminación
  - fuente de iones
  - columna
  - troubleshooting
audience:
  - T1-Industria
  - T2-Aseguramiento
  - T3-Gerencia
---

# Diagnóstico de contaminación en sistemas GC-MS: fuente de iones, columna y preparación de muestra

La cromatografía de gases acoplada a espectrometría de masas (GC-MS) es una de las técnicas analíticas más potentes y versátiles en el laboratorio moderno. Sin embargo, su sensibilidad también la hace vulnerable a contaminación en múltiples puntos del sistema. Un diagnóstico temprano y preciso evita horas de troubleshooting, reduce costos de mantenimiento y prolonga la vida útil del equipo. En este artículo abordamos las fuentes más comunes de contaminación —fuente de iones, columna e inyector—, sus síntomas característicos y un plan de acción para resolverlas.

## Fuente de iones: la pieza más sensible

La fuente de ionización por impacto electrónico (EI) es el corazón del detector de masas. Cualquier residuo no volátil que llegue a ella se ioniza, se deposita en los lentes y electrodos, y degrada progresivamente la señal.

### Contaminantes típicos

- **Aceite de pumpdown de la bomba turbomolecular.** Durante la evacuación inicial o tras un mantenimiento, trazas de aceite de la bomba de respaldo (rotatoria) pueden migrar hacia la fuente si no se usa una trampa adecuada o si la válvula de purga no se opera correctamente.
- **Column bleed (sangrado de columna).** Todas las columnas cromatográficas liberan pequeñas cantidades de fase estacionaria con el tiempo. A altas temperaturas (>300 °C) este sangrado se acelera y produce iones de fondo característicos (m/z 73, 207, 281) que se acumulan en la fuente.
- **Matriz de muestra.** Compuestos no volátiles, sales, carbohidratos, lípidos o pigmentos que pasan por el inyector sin volatilizarse y llegan a la columna y eventualmente a la fuente.

### Síntomas de fuente contaminada

1. Pérdida progresiva de sensibilidad (disminución de la respuesta en el tune del PFTBA).
2. Picos fantasma en el cromatograma de blanco (carryover entre corridas).
3. Líneas de base erráticas o elevadas, especialmente en SCAN.
4. Relaciones isotópicas distorsionadas.
5. Aparición de masas extrañas no correspondientes al analito en el espectro de fondo.

## Columna cromatográfica: el camino crítico

La columna capilar es el componente que separa los analitos. Su integridad es esencial para obtener picos simétricos, tiempos de retención reproducibles y una resolución adecuada.

### Problemas comunes en columna

| Problema | Causa probable | Síntoma |
|----------|----------------|---------|
| Depósitos no volátiles | Muestras sucias, extracción deficiente | Cola en picos, pérdida de eficiencia |
| Degradación de fase estacionaria | Oxígeno en el gas acarreador, temperaturas excesivas | Column bleed elevado, pérdida de retención |
| Cortes o roturas | Instalación incorrecta, desgaste del septum | Caída abrupta de presión, picos partidos |
| Conexiones con fugas | Ferrules gastados o mal apretados | Línea de base inestable, aire en el espectro (m/z 28, 32, 44) |

### Señales de alerta en columna

- **Tailing (cola)** en picos de analitos polares: indica sitios activos en la columna o en el liner.
- **Pico fantasma recurrente** en el mismo tiempo de retención: posible depósito acumulado que se vaporiza cíclicamente.
- **Pérdida de resolución** entre pares críticos: la selectividad de la fase estacionaria se ha alterado.

## Inyector y preparación de muestra

Muchas contaminaciones se originan antes de la columna, en el inyector o en la preparación de la muestra misma.

### Componentes del inyector

- **Septum:** Debe cambiarse periódicamente. Un septum viejo se desintegra y libera partículas que obstruyen el liner.
- **Liner (inserto de vidrio):** Actúa como cámara de vaporización. Si se ensucia con residuos no volátiles, adsorbe analitos activos y produce picos deformados.
- **Lana de vidrio (glass wool):** Cuando está sucia o mal empaquetada, genera sitios activos y adsorción selectiva.

### Errores en preparación de muestra

| Error | Consecuencia |
|-------|--------------|
| Extracción inadecuada con solventes de baja pureza | Introducción de artefactos (picos extra) |
| Derivatización incompleta | Múltiples picos para un solo analito (derivados parciales) |
| Filtración insuficiente | Partículas que obstruyen el liner o la jeringa |
| Uso de agua residual en solventes | Degradación de fase estacionaria, línea de base elevada |

## Tabla de troubleshooting: síntoma → causa → solución

| Síntoma | Causa más probable | Solución |
|---------|-------------------|----------|
| Pérdida de sensibilidad, masas altas en fondo | Fuente de iones sucia | Limpiar fuente (protocolo abajo) |
| Pico fantasma a m/z 207, 281 repetitivo | Column bleed excesivo | Cortar 15–30 cm de columna, condicionar |
| Aire en el espectro (m/z 28, 32, 44) | Fuga en conexiones o septum | Ajustar ferrules, cambiar septum, leak check |
| Picos con cola en compuestos polares | Liner sucio o columna activa | Cambiar liner, cortar columna, desactivar |
| Línea de base errática en gradiente de temperatura | Contaminación en fuente o columna dañada | Limpiar fuente, revisar columna |
| Doble pico o pico partido | Corte en columna cerca del inyector | Retirar 10–15 cm y reinstalar |
| Caracterización incorrecta de compuestos | Derivatización incompleta | Optimizar tiempo/temperatura de derivatización |
| Blanco con picos de corrida anterior | Carryover por inyección | Lavar jeringa, aumentar tiempo de post-run |

## Protocolo de limpieza de fuente de iones (paso a paso)

Este procedimiento aplica para fuentes EI de Agilent, Thermo, Shimadzu y PerkinElmer. Consulte siempre el manual del fabricante.

1. **Ventear el sistema.** Apague el filamento, la fuente y la columna. Deje que las temperaturas bajen por debajo de 50 °C. Cierre el flujo de gas acarreador.
2. **Retirar la fuente.** Use guantes sin talco. Desconecte los conectores eléctricos y remueva la fuente con la herramienta adecuada.
3. **Desmontar componentes.** Separe lentes, repeler, extractor, lente de enfoque y lente de entrada. Colóquelos sobre una superficie limpia y antiestática.
4. **Pulir con alúmina.** Prepare una pasta de polvo de alúmina (0.3 µm) con agua desionizada o metanol. Frote suavemente cada pieza metálica con un hisopo de algodón empapado en la pasta. No use lana de acero ni abrasivos gruesos.
5. **Enjuagar.** Lave cada pieza meticulosamente con acetona grado HPLC (3 veces), luego con metanol grado HPLC (3 veces). Seque con nitrógeno suave.
6. **Inspeccionar ópticamente.** Verifique al microscopio que no queden residuos. Las superficies deben tener brillo uniforme.
7. **Reensamblar e instalar.** Siga el orden inverso al desmontaje. Apriete los tornillos al torque especificado.
8. **Bake-out.** Con la columna conectada, lleve la fuente a 200–250 °C con flujo de helio por 2–4 horas antes de encender el filamento.
9. **Verificar con tune.** Realice un autotune y compare la intensidad de m/z 69, 219, 502 contra el valor de referencia. Una mejora >50% es normal después de limpieza.

## Programa de mantenimiento preventivo

Un programa estructurado alarga la vida del GC-MS y reduce paros imprevistos.

| Componente | Frecuencia | Acción |
|------------|-----------|--------|
| Septum | Cada 100–200 inyecciones o semanal | Reemplazar |
| Liner y lana de vidrio | Cada 200–500 inyecciones o mensual | Cambiar |
| Corte de columna | Cada 1–3 meses o ante pérdida de eficiencia | Retirar 15–30 cm del extremo del inyector |
| Fuente de iones | Cada 3–6 meses o ante caída de sensibilidad | Limpieza completa |
| Trampa de gas acarreador | Anual | Reemplazar filtro de oxígeno/humedad |
| Bomba rotatoria | Semestral | Cambiar aceite |
| Bake-out de columna | Semanal (o antes de secuencia crítica) | 30 min a 20 °C por debajo del límite |

## Conclusión

La contaminación en GC-MS es inevitable, pero manejable con vigilancia constante, mantenimiento preventivo y un diagnóstico estructurado. Identificar tempranamente si el problema está en la fuente, la columna, el inyector o la preparación de la muestra ahorra horas de troubleshooting y evita la pérdida de datos valiosos.

En Solinsa somos expertos en instrumentación analítica y cromatografía. Contáctanos para recibir asesoría personalizada, cotización de equipos, refacciones o soporte técnico. Visítanos en solinsa.com.
