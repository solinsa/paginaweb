# Cómo Interpretar un Cromatograma: Guía para Analistas que Empiezan

Si estás iniciando en el mundo del análisis cromatográfico, el primer cromatograma que ves puede parecer un gráfico críptico de picos y líneas. Sin embargo, detrás de cada pico hay información valiosa: concentraciones, purezas, eficiencia del sistema y posibles fallas metodológicas. En esta guía desglosamos, en español claro y con rigor técnico, los parámetros esenciales que todo analista debe dominar para leer un cromatograma como un experto.

---

## ¿Qué es un cromatograma y qué nos dice?

Un cromatograma es la representación gráfica de la señal del detector en función del tiempo. Cada componente de la muestra que se separa en la columna genera un pico cuya posición, forma y tamaño contienen información crítica. Los cinco parámetros fundamentales que analizaremos son: **tiempo de retención**, **área**, **altura**, **resolución**, **factor de asimetría** y **platos teóricos**.

---

## 1. Tiempo de retención (tR)

El tiempo de retención es el lapso que transcurre desde la inyección de la muestra hasta que el centro del pico alcanza el detector. Es el parámetro cualitativo por excelencia: en condiciones cromatográficas fijas (columna, fase móvil, temperatura, flujo), cada analito tiene un tR característico.

**Cómo leerlo:** Identifica el tiempo en el eje X donde se encuentra el máximo del pico. Compáralo contra el tR del estándar del mismo compuesto corrido en las mismas condiciones. Una diferencia mayor a ±0.5% sugiere un problema de deriva, cambio en la fase móvil o desgaste de la columna.

**Problemas frecuentes:**
- _Deriva del tR_: Causada por cambios en la composición de la fase móvil, temperatura o flujo.
- _tR inconsistente entre réplicas_: Indica baja precisión en la inyección o deterioro de la columna.

---

## 2. Área y altura del pico

Tanto el área como la altura son parámetros cuantitativos; su magnitud es proporcional a la concentración del analito en la muestra.

- **Área:** Se calcula integrando la señal bajo la curva del pico desde el inicio hasta el final. Es el parámetro más robusto porque es menos sensible a pequeñas variaciones en el ancho del pico.
- **Altura:** Es la distancia vertical desde la línea base hasta el máximo del pico. Se usa en métodos donde el ancho del pico es muy reproducible (p. ej., en CLAR con formas de pico estables).

**Regla práctica:** Usa área para cuantificación general; recurre a altura cuando hay picos que se superponen parcialmente y la integración automática subestima el área real.

**Problemas frecuentes:**
- _Área decreciente en secuencias largas_: Indica degradación del analito, adsorción en el inyector o saturación del detector.
- _Picos negativos_: Ocurren cuando el detector está en modo de diferencia o hay un cambio en el índice de refracción.
- _Línea base inestable_: Dificulta la integración correcta; suele deberse a sangrado de la columna o gradientes no condicionados.

---

## 3. Resolución (Rs)

La resolución mide qué tan bien separa la columna dos picos adyacentes. Se calcula como:

**Rs = 2(tR₂ − tR₁) / (w₁ + w₂)**

donde w₁ y w₂ son los anchos de los picos en la línea base.

**Criterio de aceptación:** Una resolución de 1.5 o mayor indica una **separación completa** entre dos picos (resolución base). Valores entre 1.0 y 1.5 sugieren separación parcial; menor a 1.0 implica que los picos se solapan y la cuantificación será inexacta.

**Problemas frecuentes:**
- _Baja resolución con columna nueva_: La fase móvil o el gradiente no son los adecuados.
- _Pérdida progresiva de resolución_: La columna está envejeciendo o hay contaminación acumulada.

---

## 4. Factor de asimetría (As) o factor de cola

Un pico ideal es gaussiano (simétrico). El factor de asimetría mide qué tanto se desvía de esa forma ideal. Se calcula midiendo el ancho del pico al 10% de la altura y dividiendo la mitad posterior entre la mitad anterior:

**As = b / a** (donde a = mitad frontal, b = mitad posterior, medidos al 10% de la altura del pico).

**Criterio de aceptación:** Entre **0.8 y 1.5** para la mayoría de métodos farmacéuticos y ambientales. Valores menores a 0.8 indican _tailing frontal_ (frecuente en sobrecarga de muestra); mayores a 1.5 indican _tailing posterior_ (común por sitios activos en la columna o silanoles libres).

**Problemas frecuentes:**
- _Tailing posterior (As > 1.5)_: Columna sucia, pH inadecuado, o analitos básicos interactuando con silanoles residuales.
- _Fronting (As < 0.8)_: Sobrecarga de masa, volumen de inyección excesivo o temperatura muy baja.

---

## 5. Platos teóricos (N)

El número de platos teóricos es una medida de la eficiencia de la columna. Cuantifica qué tan angosto y definido es un pico para un analito dado. Se calcula como:

**N = 16(tR / w)²** (método de la línea base)  
o **N = 5.54(tR / wh)²** (método de la semialtura, más usado actualmente).

**Criterio de aceptación:** Depende del tipo de columna y del método, pero en general para columnas analíticas de 150—250 mm se esperan valores de **N ≥ 2000** por columna. Una caída significativa con respecto al valor inicial (>30%) es señal inequívoca de que la columna debe reemplazarse.

**Problemas frecuentes:**
- _N bajo_: Columna envejecida, _void_ (espacio muerto) en el _frit_ de entrada, o fase móvil inadecuada.
- _N variable entre inyecciones_: Indica problemas de temperatura (falta de termostatización) o degradación progresiva de la columna.

---

## Tabla de parámetros y criterios de aceptación

| Parámetro | Símbolo | Unidad | Criterio de aceptación típico |
|-----------|---------|--------|-------------------------------|
| Tiempo de retención | tR | min | Reproducibilidad ≤ 0.5% RSD entre réplicas |
| Área | A | uV·s | RSD ≤ 2.0% para exactitud cuantitativa |
| Altura | h | uV | RSD ≤ 2.0% (métodos alternativos) |
| Resolución | Rs | adimensional | ≥ 1.5 (separación base) |
| Factor de asimetría | As | adimensional | 0.8 – 1.5 |
| Platos teóricos | N | adimensional | ≥ 2000 (o según especificación de columna y método) |
| Factor de capacidad | k' | adimensional | 1.0 – 10.0 (retención óptima) |
| Relación señal/ruido | S/N | adimensional | ≥ 10 para cuantificación (LOQ); ≥ 3 para detección (LOD) |

---

## Cómo leer un cromatograma real: paso a paso

1. **Observa la línea base:** ¿Está estable? ¿Hay _drift_ ascendente o descendente? Un _drift_ ascendente sugiere gradiente de elución o sangrado de columna; si es descendente, puede haber fuga o cambio en la sensibilidad del detector.

2. **Identifica el pico del disolvente (tiempo muerto):** En métodos de fase reversa, el primer pico grande corresponde al disolvente (t0). Todo pico antes de t0 debe investigarse (posible inyección de aire o contaminación del inyector).

3. **Ubica tus analitos:** Usa los tR de los estándares para localizar los picos de interés. Marca los picos y verifica que no haya interferencias.

4. **Evalúa la forma de cada pico:** ¿Es simétrico? ¿Presenta _tailing_ o _fronting_? Aplica la fórmula de asimetría en el _software_. Si algún pico excede As > 1.8, considera una limpieza de columna o ajuste del pH de la fase móvil.

5. **Revisa la resolución entre pares críticos:** Busca el par de picos más cercano o el más difícil de separar (p. ej., isómeros o impurezas cercanas al pico principal). Calcula Rs manualmente si el _software_ no lo reporta. Si Rs < 1.5, el método necesita ajuste de gradiente o cambio de columna.

6. **Verifica la eficiencia:** Anota el valor de N para el pico principal. Compáralo con el valor de la columna nueva (certificado incluido con la columna). Si la pérdida es mayor al 30—50%, programa el reemplazo.

7. **Cuantifica:** Integra los picos con los parámetros de integración validados (ancho esperado, umbral de pendiente). Revisa visualmente que cada pico esté correctamente delimitado por la línea base. Corrige manualmente solo si es estrictamente necesario y documenta el cambio.

---

## Problemas comunes y su diagnóstico rápido

| Síntoma en el cromatograma | Posible causa | Acción recomendada |
|----------------------------|---------------|--------------------|
| Picos anchos y bajos | Columna envejecida o _void_ en el _frit_ | Revisar N; reemplazar columna |
| _Tailing_ en todos los picos | pH inadecuado o columna sucia | Ajustar pH; lavar columna con 95:5 ACN/H₂O |
| _Fronting_ en pico principal | Sobrecarga de masa o volumen | Reducir concentración o volumen de inyección |
| Doble pico en un analito puro | Coelución o degradación _on-column_ | Verificar pureza del estándar; cambiar condiciones |
| Línea base ruidosa | Detector sucio, burbujas o fase móvil no degasificada | Limpiar celda del detector; degasificar fase móvil |
| Pico fantasma (sin muestra) | _Carryover_ del inyector o contaminación del vial | Lavar inyector con _needle wash_ adecuado |
| Deriva de tR hacia la derecha | Disminución de flujo o pérdida de fase móvil orgánica | Verificar bomba y composición de fase móvil |

---

## Conclusión

Interpretar un cromatograma no es solo leer números de un reporte. Es una habilidad visual y analítica que se construye con práctica y atención al detalle. Dominar los parámetros que aquí presentamos —tiempo de retención, área, altura, resolución, factor de asimetría y platos teóricos— te permitirá diagnosticar problemas antes de que afecten la calidad de tus resultados, optimizar métodos existentes y comunicarte con confianza con otros analistas y auditores.

Cada cromatograma cuenta una historia. Aprende a leerla y ganarás control sobre cada paso del análisis.

---

*¿Te resultó útil esta guía? En nuestro próximo artículo exploraremos la validación de métodos cromatográficos según la NOM-177-SSA1-2013. No olvides suscribirte al boletín de Solinsa para recibir contenido técnico como este directamente en tu correo.*
