# AulaConTexto

Plataforma de inteligencia artificial generativa **contextualizada por el docente** para apoyar la planeación, la evaluación y la retroalimentación en un colegio de Bogotá. Propuesta de trabajo de grado, Ingeniería de Sistemas, Universidad El Bosque.

**Equipo:** Karen Buitrago · Andrés Cañón · Nicolás Mora.

## Prototipo navegable

- **Versión 2 (actual):** [`prototipo/prototipo-v2.html`](prototipo/prototipo-v2.html) · publicado en GitHub Pages: **https://havo-ao.github.io/aulacontexto/** (repositorio: https://github.com/havo-ao/aulacontexto)
- Versión 1 (evaluada con usuarios): [`prototipo/prototipo-v1.html`](prototipo/prototipo-v1.html)
- Informe de diseño, evaluación y rediseño: [`prototipo/informe-ux.md`](prototipo/informe-ux.md)

El prototipo es de alta fidelidad visual y **sin backend**: la generación de texto está simulada a partir del contexto del curso. Cubre el flujo del docente (contexto → generar → validar → exportar) y la vista del coordinador.

## Principio de diseño

La IA no es el centro del sistema: es el mecanismo con el que se aprovecha el contexto que define el docente. Ningún plan ni retroalimentación se publica sin validación docente, y el nombre del estudiante nunca sale del sistema.

## Stack

| Capa | Tecnología |
|---|---|
| Web | React 18 + TypeScript (Vite) |
| API | Node 20 + Express 4 + TypeScript |
| Datos | PostgreSQL 16 |
| Modelo de lenguaje | API de proveedor, detrás de `api/src/lib/llm.ts` (modo `mock` en desarrollo) |
| Infraestructura | Docker Compose · GitHub Actions |

## Ejecutar

```bash
docker compose up --build
# web  → http://localhost:8080
# api  → http://localhost:4000/health
```

Desarrollo local sin Docker: `cd api && npm install && npm run dev` · `cd web && npm install && npm run dev`.

## Estructura

```
api/          Express + TypeScript: auth (JWT, roles), cursos, generación y validación
api/db/       Esquema PostgreSQL (modelo conceptual en docs/diagramas/12-modelo-datos.png)
web/          React + Vite (esqueleto; el diseño de referencia es el prototipo v2)
prototipo/    Prototipos navegables v1 y v2, informe UX y capturas
docs/         Propuesta (formato institucional), informe UX, diagramas draw.io y presentaciones
```

## Documentación

- [Propuesta de trabajo de grado, hito 2](docs/AulaConTexto%20-%20Formato%20Propuesta%20v2.pdf)
- [Diagramas](docs/diagramas/): MBPSC, AS-IS/TO-BE, C4 (contexto, contenedores, componentes), modelo de datos, secuencias, despliegue, cronograma
- Presentaciones: [estado del arte](docs/presentaciones/00-estado-del-arte.html) · [objetivos](docs/presentaciones/01-objetivos.html) · [decisiones de la propuesta](docs/presentaciones/02-decisiones-propuesta.html)

## Metodología

Scrum con hitos. Proyecto de Grado I (2027-1): sprint 0 + seis sprints, R1 en S8 y R2 en S14. Proyecto de Grado II (2027-2): ajustes, indicadores y R3 en S9. GitHub Flow; quality gate: CI en verde, cobertura ≥ 75 %, revisión de otro integrante.

## Licencia

Pendiente de acuerdo de propiedad intelectual (sección 12 de la propuesta).
