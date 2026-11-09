import { Router } from 'express';
import { pool } from '../lib/db.js';
import { requiereRol } from './auth.js';
import { cliente, anonimizar } from '../lib/llm.js';
export const router = Router();
// Secuencia A: el borrador queda 'pendiente' hasta que el docente aprueba (PUT /planes/:id/aprobar).
router.post('/plan', requiereRol('docente'), async (req: any, res) => {
  const { cursoId, unidad } = req.body ?? {};
  const c = (await pool.query('SELECT * FROM curso WHERE id = $1 AND docente_id = $2', [cursoId, req.user.sub])).rows[0];
  if (!c) return res.status(404).json({ error: 'Curso no encontrado' });
  const rub = (await pool.query('SELECT cr.descripcion, cr.peso FROM criterio cr JOIN rubrica r ON r.id = cr.rubrica_id WHERE r.curso_id = $1', [cursoId])).rows;
  const bloques = await cliente().generarPlan({ grado: c.grado, metodologia: c.metodologia, objetivos: c.objetivos, temas: c.temas, rubrica: rub, materiales: c.materiales }, unidad);
  const { rows } = await pool.query('INSERT INTO plan (curso_id, unidad, contenido) VALUES ($1,$2,$3) RETURNING *', [cursoId, unidad, JSON.stringify({ bloques })]);
  res.status(201).json(rows[0]);
});
router.put('/planes/:id/aprobar', requiereRol('docente'), async (req: any, res) => {
  const { contenido } = req.body ?? {};
  const { rows } = await pool.query("UPDATE plan SET estado='aprobado', aprobado_por=$2, aprobado_en=now(), contenido=COALESCE($3, contenido) WHERE id=$1 RETURNING *", [req.params.id, req.user.sub, contenido ? JSON.stringify(contenido) : null]);
  res.json(rows[0]);
});
// Secuencia B: anonimiza antes de llamar al modelo; nada se entrega sin validación.
router.post('/retroalimentacion', requiereRol('docente'), async (req: any, res) => {
  const { trabajoId, texto } = req.body ?? {};
  const t = (await pool.query('SELECT t.*, c.* FROM trabajo t JOIN curso c ON c.id = t.curso_id WHERE t.id = $1 AND c.docente_id = $2', [trabajoId, req.user.sub])).rows[0];
  if (!t) return res.status(404).json({ error: 'Trabajo no encontrado' });
  const rub = (await pool.query('SELECT cr.id, cr.descripcion, cr.peso FROM criterio cr JOIN rubrica r ON r.id = cr.rubrica_id WHERE r.curso_id = $1', [t.curso_id])).rows;
  const salida = await cliente().retroalimentar({ objetivos: t.objetivos, temas: t.temas, rubrica: rub }, anonimizar(texto ?? ''));
  const out = [];
  for (const [i, s] of salida.entries()) out.push((await pool.query('INSERT INTO retroalimentacion (trabajo_id, criterio_id, texto_generado) VALUES ($1,$2,$3) RETURNING *', [trabajoId, rub[i].id, s.texto])).rows[0]);
  res.status(201).json(out);
});
