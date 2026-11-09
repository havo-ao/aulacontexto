# Entrevista P2 · Daniel · Docente universitario

## Datos de la sesión
- **Fecha:** 2026-11-09
- **Duración total:** 46 min (recorrido de tareas 13 min · SUS 6 min · preguntas abiertas 14 min · introducción y cierre 13 min)
- **Moderador:** agente analista
- **Modalidad:** recorrido guiado del prototipo v1 (HTML navegable "AulaConTexto"), pensamiento en voz alta, sesión moderada
- **Participante:** P2 · Daniel, 38 años, profesor universitario de ingeniería (Bogotá), dicta programación y evalúa con rúbricas en Moodle. Usa ChatGPT y Copilot a diario, Notion y Figma. Perfil crítico y directo.
- **Estado inicial del prototipo:** sesión como «M. Pérez · Docente», pantalla «Mis cursos» con dos cursos de ejemplo («Matemáticas 8.º B» y «Lenguaje 7.º A»).

## Transcripción por tarea

### T1 · Crear un curso nuevo con grado y asignatura
**Resultado:** Completada · **Tiempo:** 4 min 10 s

> «Bien, "Mis cursos", veo dos tarjetas y una punteada que dice «+ Nuevo curso». Obvio, voy ahí.»
> «Se abre un asistente con cuatro barritas arriba, pero no dicen qué es cada paso hasta que llegas. Prefiero ver los nombres de los pasos de una vez, como en cualquier wizard de Notion o de Moodle.»
> «"Paso 1 · Datos del curso". Nombre: le pongo "Programación I". El «Grado» es un desplegable de «6.º» a «11.º»… esto está pensado para colegio. Yo no tengo grado, tengo semestre. Voy a dejar «11.º» por salir del paso, pero anoten eso: no hay opción para educación superior ni campo libre.»
> «Asignatura: "Programación". Metodología… «Aprendizaje basado en problemas», «Clase magistral con taller», «Aprendizaje cooperativo», «Aula invertida». Dejo ABP. No hay "otra".»
> «"Paso 2 · Objetivos de aprendizaje", «uno por línea». Escribo dos: "Implementar estructuras de control en Python" y "Depurar programas sencillos con trazas". Ok, texto plano, sin verbos sugeridos ni taxonomía; en Moodle al menos puedo enlazar con competencias.»
> «"Paso 3 · Temas de la unidad". Nombre: "Unidad 2 · Estructuras de control". Temas: Condicionales, Ciclos, Depuración.»
> «"Paso 4 · Rúbrica", dice «Criterio y peso (%). Debe sumar 100.» Ya vienen Planteamiento 30, Procedimiento 30, Resultado 40. Los cambio: Diseño 30, Implementación 40, Pruebas 20, y con «+ Criterio» agrego Documentación 20.»
> «Le doy «Crear curso»… toast: «La rúbrica debe sumar 100 % (suma 110)». Correcto, mi error, pero ¿por qué no me muestra la suma en vivo? Un contador al lado de los campos me ahorra este viaje. Pongo Documentación 10.»
> ««Curso creado». Y me devuelve a la lista. Esperaba entrar directo al aula del curso recién creado; es un clic extra que no aporta.»

**Observación del moderador:** Completa sin ayuda. Fricciones: el selector «Grado» no contempla educación superior (lo resuelve eligiendo «11.º» con molestia explícita); la rúbrica no muestra suma acumulada y solo valida al final; tras crear, el flujo no lleva al aula. Nota que el asistente no muestra títulos de los pasos en la barra de progreso.

### T2 · Subir un material y dejarlo marcado para que la IA lo use
**Resultado:** Completada con ayuda · **Tiempo:** 1 min 35 s

> «Entro a "Programación I". A la izquierda un estante que dice «Materiales», vacío: «Sin materiales». Abajo «+ Subir material».»
> «Modal «Subir material»: «Título», «Tipo» con «Guía», «Plan de área», «Trabajo de estudiante», «Lectura», y «Contenido (texto)». ¿Texto? ¿No puedo arrastrar un PDF o un .ipynb? Esto para mí es un bloqueador real: mis guías son notebooks.»
> «Pongo "Guía de ciclos en Python", tipo «Guía», pego un párrafo de ejemplo. «Guardar».»
> «Toast: «Material guardado. Haga clic en él para usarlo en el tablero.» Mmm, ¿por qué guardarlo no lo activa? Si lo subí es porque lo quiero usar. Al menos un checkbox en el modal.»
> «El libro aparece en el estante pero sin ninguna señal de que esté activo. El cursor es una manito de agarrar, así que intento arrastrarlo al tablero… no pasa nada.»
> *(Moderador recuerda el texto del toast.)* «Ah, clic simple. Listo, ahora dice «Guía · en uso» en letra pequeñita y le sale un borde claro. Es sutil; si tengo diez materiales no distingo cuáles están activos de un vistazo.»

**Observación del moderador:** Requiere recordatorio del moderador para activar el material (intenta arrastrar por el affordance `grab`). Fricciones: subir no equivale a marcar «en uso»; el estado activo se indica con un sufijo de 11 px y un contorno tenue; no hay carga de archivos, solo texto pegado. El participante señala que el tooltip «Clic para usar/quitar del tablero» solo aparece al pasar el mouse.

### T3 · Generar un plan de clase para la unidad
**Resultado:** Completada · **Tiempo:** 1 min 20 s

> «Debajo del tablero hay dos botones: «Generar…» y «Editar contexto». Pruebo primero «Editar contexto» porque quiero corregir el grado… toast: «Edición de contexto: no implementada en v1». Ok, entiendo que es prototipo, pero entonces no lo pongan como botón activo.»
> ««Generar…». Modal titulado «Generar» con «Tipo»: «Plan de clase», «Taller», «Retroalimentación de un trabajo». «Unidad» ya viene llena, bien. «Materiales a usar»: «• Guía de ciclos en Python». Aquí solo lo leo, no puedo marcar o desmarcar; si quisiera cambiar tengo que cancelar y volver al estante.»
> «Y el botón de confirmar también dice «Generar». Tres veces "Generar": el botón, el título del modal y el botón del modal. Redundante.»
> «No veo ningún control de duración, nivel de detalle ni idioma del modelo. En ChatGPT yo escribiría eso en el prompt; aquí estoy a ciegas.»
> ««Procesando…» con un spinner, unos dos o tres segundos. Llego a «Resultado».»
> «Título "Plan de clase · Unidad 2 · Estructuras de control", debajo "11.º · Aprendizaje basado en problemas · 50 min". ¿50 minutos de dónde salió? Yo nunca lo configuré. Mis bloques son de 2 horas.»
> «Leo el «Objetivo de la sesión»: "Al finalizar, el estudiante implementar estructuras de control en python a partir de situaciones cotidianas." Pegó mi objetivo sin conjugar el verbo y me bajó "Python" a minúscula. Eso es una plantilla, no generación.»
> ««Inicio (10 min)»: "Situación problema: el presupuesto de una salida escolar." Nada que ver con programación. «Desarrollo (30 min)» sí usa la guía y mis temas "condicionales y ciclos". «Cierre» menciona el criterio «Implementación» de mi rúbrica. Mitad y mitad.»

**Observación del moderador:** Completa de forma fluida. Fricciones: triple etiqueta «Generar»; la lista de materiales del modal es de solo lectura; el botón «Editar contexto» está activo pero no funcional; el borrador fija «50 min» sin configuración; el participante detecta contenido plantilla no contextualizado («salida escolar») y errores de concordancia derivados de insertar el objetivo literal.

### T4 · Revisar el borrador, editar una frase, regenerar y aprobarlo
**Resultado:** Completada (con pérdida de edición) · **Tiempo:** 5 min 40 s

> «Arriba hay una leyenda en gris chiquito: «Texto generado por la IA» en morado y «Texto del docente» en negro. Casi no la veo; si no me fijo, el cambio de color no significa nada.»
> «Hago clic en el texto de «Inicio (10 min)» y sí, es editable, se marca con un borde rojo. Cambio la frase por "Situación problema: calcular el promedio de notas de un grupo con un ciclo". Se vuelve negra. Ese detalle me gusta: trazabilidad de qué puse yo.»
> «A la derecha: «Estado» «Borrador · pendiente de validación», botones «Aprobar», «Regenerar» y «Exportar PDF» deshabilitado. Y «Contexto usado»: "Objetivos: 2 · Temas: 3 · Rúbrica: 4 criterios / Materiales: Guía de ciclos en Python". Esto son conteos. Yo necesito ver el prompt, o al menos qué fragmentos de la guía entraron. Con Copilot al menos veo las referencias.»
> «Ahora «Regenerar», a ver si mejora el inicio. No me pregunta nada, se va directo a «Procesando…».»
> «Vuelve… y es exactamente el mismo texto. Mismo "presupuesto de una salida escolar". Y mi frase desapareció. Estado dice «Borrador · pendiente de validación», en el escritorio hay un "Plan · v2" y un "Plan · v1".»
> «Abro el v1 desde el escritorio para recuperar mi frase… tampoco está. O sea, la edición que hice no se guardó en ningún lado porque no aprobé antes. Eso es pérdida de trabajo sin aviso. Inaceptable en una herramienta de producción; mínimo un diálogo "tienes cambios sin guardar".»
> «Además, regenerar debería permitirme decir qué quiero cambiar, no tirar los dados. Y las dos versiones son idénticas, no hay diff entre v1 y v2.»
> «Vuelvo al v2, reescribo mi frase del inicio y le doy «Aprobar». Sin confirmación: toast «Aprobado y publicado al curso», estado «Aprobado · v2» en verde, «Aprobar» se apaga y se activa «Exportar PDF». ¿"Publicado" a quién? Lo chequeo en «Vista coordinador»: ahí está "Plan · Unidad 2 · Estructuras de control · Programación I · v2". Yo no autoricé eso explícitamente; aprobar y publicar deberían ser pasos separados.»
> ««Exportar PDF»: «PDF exportado (simulado)». Bien.»

**Observación del moderador:** Completa la secuencia, pero la edición se pierde al regenerar (el código genera una hoja nueva v+1 y la hoja anterior nunca almacena las ediciones salvo al aprobar). El participante lo detecta de inmediato y lo califica como fallo grave. Señala además: regeneración determinista sin instrucción de ajuste; aprobación sin confirmación que publica a coordinación; leyenda de colores poco visible; panel «Contexto usado» con conteos y no con contenido.

## Cuestionario SUS

| # | Ítem | Puntaje (1–5) | Justificación |
|---|------|:---:|---------------|
| 1 | Creo que me gustaría usar este sistema con frecuencia. | 3 | «Si guardara mis ediciones y aceptara notebooks, sí. Hoy no reemplaza mi flujo con ChatGPT + Moodle.» |
| 2 | Encontré el sistema innecesariamente complejo. | 2 | «No es complejo, es simple; el problema es que le falta control, no que sobre.» |
| 3 | Pensé que el sistema era fácil de usar. | 4 | «El aula, el estante y el escritorio se entienden en segundos. El wizard es lineal.» |
| 4 | Creo que necesitaría el apoyo de una persona técnica para poder usar este sistema. | 1 | «Para nada. Cualquiera de mis colegas lo opera solo.» |
| 5 | Encontré que las diversas funciones del sistema estaban bien integradas. | 3 | «Estante → tablero → generar está bien hilado, pero «Editar contexto» no hace nada y regenerar rompe la edición.» |
| 6 | Pensé que había demasiada inconsistencia en este sistema. | 3 | «El toast dice "publicado" cuando yo solo aprobé; el material se guarda pero no se usa; el libro parece arrastrable y no lo es.» |
| 7 | Imagino que la mayoría de las personas aprendería a usar este sistema muy rápidamente. | 4 | «Sí, la metáfora del aula ayuda. Solo tropezarían con lo de marcar el material.» |
| 8 | Encontré el sistema muy engorroso de usar. | 2 | «No es engorroso; son pocos clics. Pero el clic extra para activar material y volver a la lista tras crear el curso sobran.» |
| 9 | Me sentí muy seguro al usar el sistema. | 2 | «Perdí una edición sin aviso y no sé qué contexto le llegó al modelo. Eso me quita confianza.» |
| 10 | Necesité aprender muchas cosas antes de poder manejar el sistema. | 1 | «Nada que aprender. Entré y funcionó.» |

**Cálculo del puntaje SUS**

- Ítems impares (1, 3, 5, 7, 9): (puntaje − 1) → (3−1) + (4−1) + (3−1) + (4−1) + (2−1) = 2 + 3 + 2 + 3 + 1 = **11**
- Ítems pares (2, 4, 6, 8, 10): (5 − puntaje) → (5−2) + (5−1) + (5−3) + (5−2) + (5−1) = 3 + 4 + 2 + 3 + 4 = **16**
- Suma de contribuciones = 11 + 16 = 27
- **SUS = 27 × 2,5 = 67,5 / 100** (por debajo del umbral de referencia de 68; percepción de "aceptable con reservas").

## Preguntas abiertas

**(1) ¿Qué le resultó más claro y qué más confuso?**
«Lo más claro: la metáfora del aula. Estante de materiales, tablero con objetivos, temas y rúbrica, y el escritorio con borradores marcados «Pendiente» o «Aprobado». Eso lo lee cualquiera. Lo más confuso: que subir un material no lo active, que «Regenerar» descarte lo que edité sin preguntar, y que el panel «Contexto usado» me diga "Objetivos: 2 · Temas: 3" como si eso fuera información. Además «Generar…», «Generar» y «Generar» en tres sitios distintos para la misma acción.»

**(2) ¿Confiaría en entregar a sus estudiantes una retroalimentación generada tras revisarla?**
«Tras revisarla línea por línea, sí, como hago con cualquier salida de ChatGPT. Pero la herramienta no me ayuda a revisar: no me muestra qué partes del trabajo del estudiante leyó el modelo ni en qué fragmento de mi guía se apoyó. Y si mis correcciones se pueden perder con un clic, firmaría con mi nombre algo que quizá no es lo que corregí. La confianza la pongo en mi revisión, no en el sistema; el sistema debería ganársela mostrando sus fuentes.»

**(3) ¿Qué información necesita ver antes de aprobar?**
«Tres cosas. Primero, el prompt efectivo o un resumen expandible: qué objetivos, temas, criterios y qué extractos de los materiales entraron al modelo, no cuántos. Segundo, un diff entre la versión generada y mi versión editada, y entre v1 y v2 si regeneré. Tercero, a quién se publica al aprobar y si puedo revertir; hoy «Aprobar» publica a la «Vista coordinador» sin confirmación y con un toast que me lo informa después del hecho.»

**(4) ¿Qué cambiaría del tablero de contexto?**
«Lo haría editable en sitio, que para eso está el botón «Editar contexto», en vez de un toast de "no implementada". Pondría la duración de la sesión y el nivel educativo como parte del contexto, porque el plan salió con "50 min" y "11.º" sin que yo pudiera tocarlos. Y marcaría con mucha más fuerza qué materiales están «en uso»: una casilla o un color pleno, no un sufijo de 11 píxeles y un borde tenue. De paso, la rúbrica en ese afiche rotado se ve bonita pero yo quiero poder clicarla y ajustar pesos ahí mismo.»

## Síntesis del moderador

- **[Alta] Pérdida silenciosa de ediciones al regenerar.** El participante editó un párrafo, pulsó «Regenerar» y la edición desapareció tanto en la nueva v2 como en la v1 (el contenido solo se persiste al aprobar). No hay aviso de cambios sin guardar ni confirmación previa. Impacta directamente la confianza (SUS ítem 9 = 2).
- **[Alta] Opacidad del contexto enviado al modelo.** El panel «Contexto usado» muestra conteos («Objetivos: 2 · Temas: 3 · Rúbrica: 4 criterios») y nombres de materiales, sin el contenido ni el prompt. El participante exige ver fragmentos usados y un diff entre versiones antes de aprobar; compara desfavorablemente con las referencias que muestra Copilot.
- **[Media] Marcar material «en uso» es un paso separado y poco visible.** Guardar no activa el material; la activación exige un clic adicional, el affordance `grab` sugiere arrastre que no funciona, y el estado activo se señala con texto de 11 px y un contorno tenue. Requirió recordatorio del moderador (T2 "Completada con ayuda").
- **[Media] «Aprobar» publica a coordinación sin confirmación y la regeneración es a ciegas.** El toast «Aprobado y publicado al curso» informa después del hecho; el participante pide separar aprobar de publicar. «Regenerar» no permite indicar qué ajustar y produjo un texto idéntico; además el plan fija «50 min» sin configuración y mezcla contenido plantilla («salida escolar») con el contexto real.
- **[Baja] Redundancias y detalles de alcance del asistente.** Triple etiqueta «Generar…» / «Generar» / «Generar»; «Editar contexto» visible pero no funcional; la rúbrica no muestra suma acumulada y solo valida al final; tras «Crear curso» no se entra al aula; el selector «Grado» (6.º–11.º) excluye educación superior, lo que para este perfil universitario resulta un desajuste de dominio. La leyenda de colores IA/docente es poco visible (12 px, gris) aunque el mecanismo de color por autoría fue valorado positivamente.
