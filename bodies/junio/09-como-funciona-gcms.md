El acoplado GC-MS es una de las herramientas más versátiles en el laboratorio analítico. Entender cómo funciona cada componente y cómo se integran es esencial para obtener el máximo rendimiento.

## Del Cromatógrafo al Espectrómetro

El GC-MS funciona en tres etapas: separación cromatográfica, ionización y detección por masas.

### 1. Cromatógrafo de Gases

La muestra se inyecta en el puerto de inyección, se vaporiza y es transportada por el gas acarreador (He o H₂) a través de la columna capilar donde ocurre la separación. Los analitos eluyen en diferentes tiempos (tiempo de retención).

## La Interfase

La interfase conecta la salida de la columna del GC con la fuente de ionización del MS. Debe mantener la integridad de los analitos mientras transfiere la columna desde la presión atmosférica del GC hasta el vacío del MS.

### Tipos de Interfase

- **Interfase directa**: la columna entra directamente a la fuente de ionización. La más común en GC-MS modernos.
- **Interfase con split**: divide el flujo entre el MS y un detector auxiliar (FID, ECD). Útil cuando se requiere detección dual.
- **Interfase abierta (open-split)**: permite purgar el exceso de flujo. Ideal para columnas de diámetro ancho (0.53 mm).

Temperatura típica de la interfase: 280-300°C (similar a la temperatura máxima del horno).

## La Fuente de Ionización

Aquí las moléculas neutras se convierten en iones. En GC-MS, la fuente más común es de impacto electrónico (EI).

### Componentes de la Fuente EI

- **Filamento**: emite electrones (tungsteno o renio), 70 eV
- **Cámara de ionización**: donde chocan electrones y moléculas
- **Lentes de enfoque**: dirigen el haz de iones hacia el analizador
- **Trampa de electrones**: mide la corriente de emisión

### Condiciones de Operación

- Temperatura de fuente: 230°C
- Presión: ~10⁻⁵ Torr
- Corriente de emisión: 35-100 μA

## El Analizador de Masas (Cuadrupolo)

El cuadrupolo tiene cuatro barras metálicas paralelas. Dos barras opuestas tienen voltaje positivo, las otras dos negativo. Los campos eléctricos hacen que los iones oscilen mientras viajan a través del cuadrupolo.

- Solo los iones con una m/z específica tienen una trayectoria estable y llegan al detector
- Los demás chocan contra las barras y se descargan
- Escaneando los voltajes, se barre el rango de masas completo

### Especificaciones Típicas

- Rango de masas: 1.5-1050 m/z
- Resolución: unitaria (distinguir m/z 100 de m/z 101)
- Velocidad de barrido: hasta 20,000 m/z/s (necesario para GC rápida)

## El Detector

El detector más común es el **multiplicador de electrones**:

1. Un ion golpea la superficie del dínodo
2. Emite electrones secundarios
3. Los electrones se multiplican en cascada (10⁶-10⁷ ganancia)
4. La corriente resultante se amplifica y digitaliza

## El Sistema de Vacío

El MS opera a alto vacío (10⁻⁵ - 10⁻⁶ Torr) para:
- Permitir que los iones viajen sin colisiones
- Evitar reacciones no deseadas
- Proteger el filamento

Componentes:
- **Bomba turbomolecular**: vacío primario
- **Bomba rotatoria**: vacío preliminar (backing)

## Flujo de Trabajo: De la Muestra al Resultado

1. La muestra se inyecta y vaporiza en el puerto de inyección
2. Los analitos se separan en la columna capilar
3. Al eluir, pasan por la interfase hacia la fuente EI
4. Se ionizan y fragmentan
5. Los iones son filtrados por el cuadrupolo según su m/z
6. El detector multiplica la señal
7. El software genera un cromatograma (TIC)
8. Cada punto del cromatograma tiene un espectro de masas asociado
9. Los espectros se comparan con bibliotecas (NIST) para identificación

## Conclusión

El GC-MS es un sistema integrado donde cada componente juega un papel crítico. Entender cómo la muestra viaja desde el inyector hasta el detector — pasando por la interfase, la fuente de ionización, el analizador y el sistema de vacío — te permite diagnosticar problemas, optimizar condiciones y obtener la mejor calidad de datos.
