import { Router } from 'express';
import { q, insert } from '../lib/db.js';
import { requiereRol } from './auth.js';
export const router = Router();
router.get('/', requiereRol('docente', 'coordinador'), async (req: any, res) => {
  res.json(req.user.rol === 'docente' ? await q('SELECT * FROM curso WHERE docente_id = ?', [req.user.sub]) : await q('SELECT * FROM curso'));
});
router.post('/', requiereRol('docente'), async (req: any, res) => {
  const { nombre, grado, asignatura } = req.body ?? {};
  res.status(201).json(await insert('curso', 'INSERT INTO curso (docente_id, nombre, grado, asignatura, objetivos, temas) VALUES (?,?,?,?,JSON_ARRAY(),JSON_ARRAY())', [req.user.sub, nombre, grado, asignatura]));
});
