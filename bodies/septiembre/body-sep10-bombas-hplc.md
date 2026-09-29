---
title: "5 Fallas Críticas en Bombas HPLC y Cómo Solucionarlas"
published: 2026-09-10
category: cat-serv-diag
tags: [HPLC, bombas, fallas, diagnóstico, burbujas, pistones, válvulas, presión]
audience: [T1-Todos, T2-Labs]
lang: es-MX
wordcount: ~1200
---

## Introducción

La bomba es el corazón de cualquier sistema HPLC. Sin un flujo constante, preciso y libre de pulsaciones, no hay cromatografía confiable. Cuando la bomba falla, el cromatograma lo refleja de inmediato: tiempos de retención erráticos, líneas de base ruidosas, picos deformados o —simplemente— cero flujo.

Muchas de estas fallas tienen causas comunes que un analista entrenado puede diagnosticar y resolver sin llamar a servicio técnico. En este artículo revisamos las 5 fallas más frecuentes en bombas HPLC, sus síntomas, causas raíz y un árbol de decisión rápido para minimizar el tiempo muerto.

> "El 80 % de las fallas en bombas HPLC se resuelven cambiando un sello, limpiando una válvula o purgando una burbuja. El otro 20 % requiere servicio técnico, pero el diagnóstico correcto lo puede hacer usted."

## 1. Burbujas en la Fase Móvil: El Enemigo Silencioso

**Síntomas:**
- Presión de sistema errática, que cae a cero y vuelve a subir.
- Línea de base con picos negativos agudos (caídas de presión).
- Flujo intermitente o nulo.

**Causa:**
Aire atrapado en la cabeza de la bomba, burbujas en la línea de entrada de solvente o un *degasser* defectuoso. Las burbujas se comprimen y expanden durante el ciclo de la bomba, impidiendo que los pistones desplacen el volumen correcto de fase móvil.

**Solución paso a paso:**

1. **Verifique el degasser:** Si su sistema tiene desgasificador al vacío, confirme que la luz indicadora esté encendida y que la cámara no tenga fugas de aire.
2. **Purgue la bomba:** Abra la válvula de purga (*prime/purge valve*) y opere la bomba a 5-10 mL/min durante 2-3 minutos. Esto arrastra las burbujas fuera del cabezal.
3. **Revise los filtros de entrada:** Un filtro obstruido en la línea de solvente puede generar cavitación. Limpie o reemplace el *solvent inlet filter*.
4. **Use solvente desgasificado:** La mejor prevención es usar fase móvil desgasificada por ultrasonido o helio. Nunca use solvente recién abierto sin desgasificar.

**Solución definitiva:** Si el problema persiste, retire el cabezal de la bomba, sumerja los pistones en metanol y opere manualmente para expulsar el aire atrapado.

## 2. Pistones Rajados o Rayados

**Síntomas:**
- Pérdida de presión gradual durante la corrida.
- Línea de base ruidosa con ondulaciones periódicas.
- Fugas de fase móvil visibles en la parte frontal de la bomba.
- Aparición de partículas en el filtro de la línea de desperdicio.

**Causa:**
Los pistones de zafiro son extremadamente duros pero frágiles. Una rajadura ocurre típicamente por:
- Golpe térmico (lavar con agua fría un cabezal caliente).
- Cristalización de buffer en la superficie del pistón (sales de fosfato, acetato).
- Desgaste natural después de 5000-8000 horas de operación.

**Solución:**
- **Inspección visual:** Retire los pistones y examínelos con una lupa. Una rajadura se ve como una línea fina transversal o longitudinal. Un pistón rayado tiene marcas longitudinales finas.
- **Reemplazo:** Cambie ambos pistones (nunca uno solo). Aproveche para reemplazar también los sellos.
- **Prevención:** Enjuague la bomba con agua desionizada (sin buffer) durante 10 minutos antes de apagar el sistema si usó fase móvil con sales.

> **Dato:** Un pistón de zafiro cuesta entre $150 y $400 USD dependiendo del fabricante. Reemplazarlo a tiempo evita daños en los sellos y en el cabezal de la bomba, cuyo reemplazo cuesta 5-10 veces más.

## 3. Válvulas de Retención Obstruidas

**Síntomas:**
- La bomba no ceba (*no prime*).
- El flujo es errático o inexistente, incluso después de purgar.
- Lectura de presión que no se estabiliza o que es negativa (en sistemas con transductor).

**Causa:**
Las válvulas de retención de entrada y salida de cada cabezal contienen bolas de zafiro o cerámica que sellan contra un asiento. Partículas de 1-5 µm (sales precipitadas, partículas de sellos desgastados, polvo del solvente) se alojan entre la bola y el asiento, rompiendo el sello.

**Solución:**
1. **Limpieza ultrasónica:** Desmonte cada válvula y sumérjala en metanol o isopropanol en un baño ultrasónico durante 10-15 minutos. Sople con aire seco.
2. **Inversión:** Invierta la válvula y purgue en dirección contraria al flujo normal para desalojar partículas atrapadas.
3. **Reemplazo:** Si la limpieza no resuelve, reemplace la válvula. Se recomienda cambiar ambos pares (entrada y salida de cada cabezal) al mismo tiempo.

**Diagnóstico rápido:** Desconecte la línea de salida de la válvula de retención. Si al purgar la bomba no sale líquido de forma continua y sin burbujas, la válvula está obstruida.

## 4. Fugas en los Sellos de los Pistones

**Síntomas:**
- Fase móvil acumulada debajo de la bomba.
- Manchas blancas de sales cristalizadas alrededor de los cabezales.
- El kit de drenaje del cabezal muestra flujo excesivo.
- Presión ligeramente inferior a lo normal.

**Causa:**
Los sellos de PTFE (o UHMWPE) que rodean a cada pistón se desgastan con el uso. La vida útil típica es de 2000-4000 horas, pero se acelera con:
- Buffer a pH alto (>8) o bajo (<3).
- Presión de operación elevada (>300 bar constantemente).
- Partículas abrasivas en la fase móvil.
- Pistones rayados (se "comen" el sello rápidamente).

**Solución:**
- **Reemplazo programado:** Cambie los sellos cada 6 meses o 3000 horas (± 500 h), lo que ocurra primero. Un sello nuevo cuesta ~$30-80 USD; un cabezal dañado por fuga, >$2000 USD.
- **Lavado del pistón:** Algunas bombas tienen un puerto de lavado trasero. Conecte una jeringa con agua/isopropanol (90:10) y lave continuamente durante la operación para eliminar sales.

## 5. Presión Errática o Fluctuante

**Síntomas:**
- La presión oscila ±5-20 % del valor nominal en un ciclo regular (correspondiente a la frecuencia del pistón).
- Tiempos de retención variables entre inyecciones.
- Picos con áreas inconsistentes.

**Causa:**
- **Fluctuación de baja frecuencia:** Mezclador de gradiente defectuoso o burbujas en la cámara de mezcla.
- **Fluctuación de alta frecuencia (ciclo del pistón):** Desgaste en el mecanismo de leva o *cam follower*; desajuste en la compensación del pistón secundario (en bombas de doble pistón); sello desgastado de un solo cabezal.

**Solución:**
1. **Diagnóstico:** Mida la presión con el sistema en flujo isocrático (sin columna, con un restrictor). Si la fluctuación es cíclica y coincide con el movimiento del pistón, el problema es mecánico.
2. **Verifique el amortiguador de pulsos:** Muchas bombas tienen un amortiguador (*pulse damper*) que se despresuriza. Revisar y recargar según manual.
3. **Reemplace sellos y válvulas de retención:** Un sello desgastado o una válvula que no sella correctamente en un solo cabezal produce fluctuación en cada ciclo.
4. **Calibración de la bomba:** Verifique el flujo real midiendo el volumen desplazado en 5 minutos con una probeta graduada. Si difiere >5 % del setpoint, calibre.

## Árbol de Decisión Rápido

```
¿La bomba no ceba o no tiene presión?
├── ¿Hay burbujas visibles en la línea de entrada?
│   └── Sí → Purgar bomba + verificar degasser + desgasificar solvente (Falla 1)
│   └── No → Revisar filtro de entrada
│       └── ¿Obstruido? → Limpiar o reemplazar
│       └── ¿Limpio? → Revisar válvulas de retención (Falla 3)
│
¿La presión fluctúa cíclicamente?
├── ¿Frecuencia igual al ciclo del pistón?
│   └── Sí → Revisar sellos (Falla 4) y pistones (Falla 2)
│   └── No → Revisar mezclador de gradiente y amortiguador de pulsos (Falla 5)
│
¿Hay fuga visible en el cabezal?
└── Sí → Revisar sellos (Falla 4)
└── No → ¿Partículas en el filtro de drenaje? → Revisar pistones (Falla 2)
│
¿Presión bajo lo normal pero estable?
└── Verificar flujo real con probeta → Si <95 %, calibrar bomba
```

## Conclusión

Las fallas en bombas HPLC son predecibles y, en su mayoría, prevenibles con un mantenimiento programado. Cambiar sellos cada 3000 horas, mantener las válvulas de retención limpias, usar solventes desgasificados y filtrar todas las fases móviles reduce drásticamente el tiempo muerto y alarga la vida útil del equipo. Un buen árbol de decisión y un registro de horas de operación son las herramientas más valiosas del analista.

En **Solinsa** ofrecemos kits de mantenimiento para bombas HPLC de todas las marcas (sellos, pistones, válvulas de retención, filtros, amortiguadores), así como servicio técnico especializado en sitio. Contáctenos para programar un mantenimiento preventivo o para recibir asesoría remota en el diagnóstico de su bomba.
