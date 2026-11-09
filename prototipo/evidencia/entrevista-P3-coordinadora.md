# Entrevista P3 · Marcela · Coordinadora académica

## Datos de la sesión
- **Fecha:** 2026-11-09
- **Duración total:** 41 min (recorrido de tareas 19 min · SUS 6 min · preguntas abiertas 12 min · cierre 4 min)
- **Moderador:** agente analista
- **Modalidad:** recorrido guiado del prototipo v1 (AulaConTexto, `prototipo-v1.html`), sesión moderada con pensamiento en voz alta. La participante opera el prototipo con el rol que trae por defecto («M. Pérez · Docente») y, para T7, observa al moderador actuando como docente en la misma pantalla.
- **Contexto de partida:** el prototipo arranca sin borradores en ningún curso; la «Vista coordinador» está vacía hasta que un docente aprueba algo.

## Transcripción por tarea

### T5 · Encontrar y leer un plan aprobado de un curso desde la vista de coordinador
**Resultado:** Parcial · **Tiempo:** 5 min 10 s

> «Bueno, arriba veo «Mis cursos», «Vista coordinador» y «Ayuda». Voy a «Vista coordinador» porque ese es mi rol.»
> «Dice «Vista coordinador», «Solo planes y retroalimentaciones aprobados.» y abajo… «Ningún plan aprobado todavía.» Entonces no hay nada que leer. ¿Esto es porque nadie ha aprobado o porque no me cargó?»
> *(El moderador indica que aún ningún docente ha aprobado; le pide que observe cómo lo haría la docente y vuelva.)*
> «Ah, entonces desde «Mis cursos» entro a «Matemáticas 8.º B»… veo el tablero verde con «Unidad 3 · Ecuaciones lineales», los objetivos, los temas, «8.º · Aprendizaje basado en problemas», y la rúbrica pegada a la derecha. Eso sí está bien, se parece a lo que reviso en un plan de área.»
> «La docente pulsa «Generar…», deja «Plan de clase» y «Generar». Aparece «Procesando…». Luego el plan con «Objetivo de la sesión», «Inicio (10 min)», «Desarrollo (30 min)», «Cierre (10 min)». Pulsa «Aprobar» y sale «Aprobado y publicado al curso».»
> «Ahora sí, vuelvo a «Vista coordinador». Aparece una tarjeta: «Aprobado», «Plan · Unidad 3 · Ecuaciones lineales», «Matemáticas 8.º B · v1». Perfecto, ya encontré el plan.»
> «Le doy clic para leerlo… no pasa nada. Lo intento otra vez… nada. ¿No se abre?»
> «Entonces desde aquí yo sé que existe un plan aprobado, pero no puedo leerlo. Para leerlo tendría que ir a «Mis cursos», entrar al aula de la docente y abrir la hoja del «Escritorio · borradores». Eso ya no es una vista de coordinadora, es entrar como la profesora.»
> «Si tengo cuarenta cursos, esto se vuelve una lista de tarjetas sin buscador ni filtro por grado o asignatura. Hoy mismo solo hay una, así que no se nota, pero en el colegio sí se notaría.»

**Observación del moderador:** La participante localiza la tarjeta del plan sin dificultad una vez existe un aprobado, pero `renderCoord()` solo pinta estado, título, curso y versión; las tarjetas no tienen manejador de clic (`.coord .hoja{cursor:default}`), por lo que la lectura del contenido es imposible desde esa vista. Completó la lectura solo saliendo al flujo del docente, de ahí el resultado «Parcial». Señaló espontáneamente la ausencia de filtros y buscador.

### T6 · Verificar quién aprobó el plan y cuándo
**Resultado:** Fallida · **Tiempo:** 2 min 35 s

> «En la tarjeta de «Vista coordinador» tengo «Aprobado», el título, «Matemáticas 8.º B · v1». No hay nombre de persona ni fecha.»
> «Pensé que la «v1» podía abrir un historial, pero es solo texto.»
> «Voy a mirar en el resultado, por si allá está. En la columna derecha dice «Estado» y «Aprobado · v1», y abajo «Contexto usado»: «Objetivos: 2 · Temas: 3 · Rúbrica: 4 criterios», «Materiales: Guía de ecuaciones». Tampoco hay quién ni cuándo.»
> «El único dato de identidad que veo en toda la pantalla es arriba a la derecha: «M. Pérez · Docente». Yo puedo *suponer* que fue ella porque es quien está logueada, pero suponer no es verificar. Si rectoría me pregunta quién aprobó el plan de octavo y en qué fecha, con esto no respondo.»
> «Y otra cosa: aquí aprueba la misma persona que genera. En mi colegio el plan lo revisa coordinación antes de considerarse aprobado. Aquí «Aprobar» lo hace la docente y queda «publicado al curso» de una vez.»
> «Concluyo que no es posible con lo que hay. Me falta autor, fecha y hora, y en lo posible un registro de cambios entre v1 y v2.»

**Observación del moderador:** Ni el objeto `hoja` ni las vistas almacenan autor o marca de tiempo; la única «trazabilidad» es el contador de versión `v`. La participante buscó en los dos lugares razonables (tarjeta y panel «Estado»/«Contexto usado») y describió el problema con precisión. Agregó una observación de gobernanza no pedida: el flujo no distingue entre «aprobado por la docente» y «aprobado por coordinación».

### T7 · Observar a un docente generar y aprobar una retroalimentación y evaluar si el proceso protege los datos del estudiante
**Resultado:** Completada con ayuda · **Tiempo:** 7 min 20 s

> «En el estante de «Materiales» veo «Guía de ecuaciones · Guía · en uso», «Plan de área · Matemáticas» y «Trabajo · estudiante A-07 · Trabajo de estudiante». Me gusta que el trabajo esté con código y no con el nombre del niño.»
> «La docente pulsa «Generar…», cambia «Tipo» a «Retroalimentación de un trabajo» y aparece «Trabajo del estudiante» con «Trabajo · estudiante A-07». En «Materiales a usar» solo sale «• Guía de ecuaciones». O sea, ¿el trabajo del estudiante se usa o no? Está seleccionado arriba pero no aparece en la lista de materiales.»
> *(El moderador aclara que la lista muestra lo marcado «en uso» en el estante.)*
> «Vale, pero eso para mí es ambiguo. Pulsa «Generar», sale «Procesando…», y después «Retroalimentación por criterio». Primera línea: «Estudiante A-07 (alias). Trabajo: ejercicios de la guía de ecuaciones.» Bien, insiste en el alias.»
> «Leo los criterios: «Planteamiento (30 %)», «Procedimiento (30 %)», «Resultado (20 %)», «Comunicación (20 %)». Pero el texto es prácticamente el mismo en los cuatro: «se identifica la incógnita, pero falta justificar el paso de despeje en el ejercicio 2». Eso en «Comunicación» no tiene sentido. Si una docente aprueba esto sin leer, le llega al estudiante una retroalimentación repetida.»
> «La leyenda dice «Texto generado por la IA» en morado y «Texto del docente» en negro. La docente edita una frase y se vuelve negra. Eso sí me parece muy claro: se ve qué tocó ella y qué no.»
> «Pulsa «Aprobar». «Aprobado y publicado al curso». Se activa «Exportar PDF». En «Vista coordinador» ahora hay dos tarjetas, la segunda «Retroalimentación · Trabajo · estudiante A-07».»
> «Sobre los datos: lo que yo veo protege con el alias, y eso es correcto. Lo que no veo es qué se envió exactamente, a dónde, y si el texto del trabajo salió del colegio. Al subir material el tipo «Trabajo de estudiante» es un cuadro de texto libre, «Contenido (texto)»; ahí cualquiera pega el nombre completo del niño y nadie lo detiene. No hay aviso ni paso de anonimización.»
> «Y «Editar contexto» dice «Edición de contexto: no implementada en v1». Lo anoto porque si el contexto queda mal, el plan y la retro salen mal.»

**Observación del moderador:** Requirió una aclaración sobre la relación entre el selector «Trabajo del estudiante» y la lista «Materiales a usar» (dos fuentes de verdad distintas en la UI). Identificó por sí sola tres hallazgos: la retroalimentación genera el mismo párrafo para cada criterio de la rúbrica (plantilla fija en `genera('retro')`), la carga de trabajos es texto libre sin control de datos personales, y no hay información sobre el destino de los datos. Valoró positivamente la convención de color IA/docente y el uso de alias.

## Cuestionario SUS

| # | Ítem | Puntaje (1–5) | Justificación |
|---|------|:---:|---|
| 1 | Creo que me gustaría usar este sistema con frecuencia. | 3 | Lo usaría si la vista de coordinación realmente me dejara leer y rastrear; hoy es más útil para la docente que para mí. |
| 2 | Encontré el sistema innecesariamente complejo. | 2 | Al contrario, es sencillo; mi problema es lo que falta, no lo que sobra. |
| 3 | Pensé que el sistema era fácil de usar. | 4 | La metáfora de tablero, estante y escritorio se entiende de inmediato. |
| 4 | Creo que necesitaría el apoyo de un técnico para poder usar este sistema. | 2 | Solo necesité una aclaración sobre qué materiales entran a la generación. |
| 5 | Encontré que las diversas funciones del sistema estaban bien integradas. | 2 | La «Vista coordinador» está desconectada del resultado: muestra que existe pero no lo abre. |
| 6 | Pensé que había demasiada inconsistencia en este sistema. | 3 | El selector de trabajo y «Materiales a usar» cuentan historias distintas; el mismo párrafo en cuatro criterios tampoco ayuda. |
| 7 | Imagino que la mayoría de las personas aprendería a usar este sistema muy rápidamente. | 4 | Mis docentes lo entenderían en una sesión corta. |
| 8 | Encontré el sistema muy engorroso de usar. | 2 | Pocos pasos, respuestas rápidas; nada engorroso. |
| 9 | Me sentí muy segura al usar el sistema. | 2 | Sin autor, fecha ni aviso sobre el destino de los datos del estudiante, no me siento tranquila respondiendo ante rectoría. |
| 10 | Necesité aprender muchas cosas antes de poder manejar el sistema. | 1 | Casi nada; se parece a herramientas que ya uso. |

**Cálculo del puntaje SUS**

- Ítems impares (1, 3, 5, 7, 9): se suma (puntaje − 1) → (3−1) + (4−1) + (2−1) + (4−1) + (2−1) = 2 + 3 + 1 + 3 + 1 = **10**
- Ítems pares (2, 4, 6, 8, 10): se suma (5 − puntaje) → (5−2) + (5−2) + (5−3) + (5−2) + (5−1) = 3 + 3 + 2 + 3 + 4 = **15**
- Suma de contribuciones = 10 + 15 = 25
- **SUS = 25 × 2,5 = 62,5 / 100** (por debajo del umbral de referencia de 68: aceptable en facilidad de uso, penalizado por integración y confianza).

## Preguntas abiertas

**(1) ¿Qué le resultó más claro y qué más confuso?**
Lo más claro fue el tablero de contexto: unidad, objetivos, temas, metodología y la rúbrica a la vista, igual a como reviso un plan de área, y la leyenda de colores que separa «Texto generado por la IA» del «Texto del docente». Lo más confuso fue la «Vista coordinador»: me dice que hay un plan «Aprobado» pero no me deja abrirlo, y en el modal «Generar» no queda claro si el trabajo del estudiante que elegí realmente se está usando.

**(2) ¿Permitiría que los docentes de su colegio entreguen retroalimentación generada tras revisarla? ¿Por qué?**
Con condiciones, sí. La revisión obligatoria antes de «Aprobar» y el rastro de qué editó la docente son justo lo que pediría. Pero antes necesito que la herramienta no produzca el mismo párrafo para cuatro criterios distintos, porque eso invita a aprobar sin leer, y necesito saber por escrito qué datos del estudiante salen de la plataforma y hacia dónde. Sin eso no lo autorizo para menores.

**(3) ¿Qué información necesita ver como coordinadora?**
Quién aprobó, fecha y hora, y qué cambió entre versiones. Poder leer el plan o la retro completos desde mi vista, sin entrar como la docente. Filtrar por grado, asignatura y periodo, y comparar de un vistazo que los cursos del mismo grado estén alineados con el plan de área. Y para las retroalimentaciones, confirmación de que el estudiante está anonimizado y de qué materiales se usaron.

**(4) ¿Qué cambiaría del tablero de contexto o de la vista de coordinador?**
Del tablero, que «Editar contexto» funcione y que se pueda vincular el «Plan de área» institucional como fuente, no solo como material opcional. De la vista de coordinador, que las tarjetas abran el documento, que muestren autor y fecha, que exista un paso de «revisado por coordinación» distinto del «Aprobar» de la docente, y un buscador con filtros, porque con decenas de cursos la cuadrícula actual no sirve.

## Síntesis del moderador

- **Alta — Sin trazabilidad de aprobación.** Ningún dato de autor, fecha u hora se registra ni se muestra; solo existe el contador «v1». T6 fue imposible de completar. La participante no puede rendir cuentas ante rectoría con esta información.
- **Alta — Vista de coordinador no permite leer el contenido.** `renderCoord()` muestra estado, título, curso y versión, sin enlace al documento; la lectura exige entrar por el flujo del docente. T5 quedó parcial. Tampoco hay filtros ni buscador, lo que no escala a un colegio real.
- **Media — Retroalimentación con texto idéntico por criterio.** El generador repite el mismo párrafo en los cuatro criterios de la rúbrica (incluido «Comunicación»). Debilita la credibilidad del resultado y fomenta la aprobación sin revisión, justo lo que la coordinadora quiere evitar.
- **Media — Protección de datos solo parcial.** El alias «Estudiante A-07» es un acierto, pero la carga de «Trabajo de estudiante» es texto libre sin advertencia ni anonimización, y no se informa qué se envía ni a dónde. Además, el selector «Trabajo del estudiante» y la lista «Materiales a usar» no coinciden, generando ambigüedad sobre qué datos se usan.
- **Baja — Sin separación de roles ni edición de contexto.** La misma docente genera y aprueba («Aprobado y publicado al curso») sin un paso de revisión por coordinación; «Editar contexto» no está implementado. Ambos se perciben como carencias de v1 esperables, pero condicionan la adopción institucional.
