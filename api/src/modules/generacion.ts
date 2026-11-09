import { Router } from 'express';
import { q, insert } from '../lib/db.js';
import { requiereRol } from './auth.js';
import { cliente, anonimizar } from '../lib/llm.js';
export const router = Router();
const arr = (v: any): string[] => Array.isArray(v) ? v : (typeof v === 'string' ? JSON.parse(v) : []);
// Secuencia A: el borrador queda 'pendiente' hasta que el docente aprueba (PUT /planes/:id/aprobar).
router.post('/plan', requiereRol('docente'), async (req: any, res) => {
  const { cursoId, unidad } = req.body ?? {};
  const c = (await q('SELECT * FROM curso WHERE id = ? AND docente_id = ?', [cursoId, req.user.sub]))[0];
  if (!c) return res.status(404).json({ error: 'Curso no encontrado' });
  const rub = await q('SELECT cr.descripcion, cr.peso FROM criterio cr JOIN rubrica r ON r.id = cr.rubrica_id WHERE r.curso_id = ?', [cursoId]);
  const bloques = await cliente().generarPlan({ grado: c.grado, metodologia: c.metodologia, objetivos: arr(c.objetivos), temas: arr(c.temas), rubrica: rub, materiales: c.materiales }, unidad);
  res.status(201).json(await insert('plan', 'INSERT INTO plan (curso_id, unidad, contenido) VALUES (?,?,?)', [cursoId, unidad, JSON.stringify({ bloques })]));
});
router.put('/planes/:id/aprobar', requiereRol('docente'), async (req: any, res) => {
  const { contenido } = req.body ?? {};
  await q("UPDATE plan SET estado='aprobado', aprobado_por=?, aprobado_en=NOW(), contenido=COALESCE(?, contenido) WHERE id=?", [req.user.sub, contenido ? JSON.stringify(contenido) : null, req.params.id]);
  res.json((await q('SELECT * FROM plan WHERE id = ?', [req.params.id]))[0]);
});
// Secuencia B: anonimiza antes de llamar al modelo; nada se entrega sin validación.
router.post('/retroalimentacion', requiereRol('docente'), async (req: any, res) => {
  const { trabajoId, texto } = req.body ?? {};
  const t = (await q('SELECT t.id, t.curso_id, c.objetivos, c.temas FROM trabajo t JOIN curso c ON c.id = t.curso_id WHERE t.id = ? AND c.docente_id = ?', [trabajoId, req.user.sub]))[0];
  if (!t) return res.status(404).json({ error: 'Trabajo no encontrado' });
  const rub = await q('SELECT cr.id, cr.descripcion, cr.peso FROM criterio cr JOIN rubrica r ON r.id = cr.rubrica_id WHERE r.curso_id = ?', [t.curso_id]);
  const salida = await cliente().retroalimentar({ objetivos: arr(t.objetivos), temas: arr(t.temas), rubrica: rub }, anonimizar(texto ?? ''));
  const out = [];
  for (const [i, s] of salida.entries()) out.push(await insert('retroalimentacion', 'INSERT INTO retroalimentacion (trabajo_id, criterio_id, texto_generado) VALUES (?,?,?)', [trabajoId, rub[i].id, s.texto]));
  res.status(201).json(out);
});
