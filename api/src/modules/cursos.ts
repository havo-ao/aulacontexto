import { Router } from 'express';
import { pool } from '../lib/db.js';
import { requiereRol } from './auth.js';
export const router = Router();
router.get('/', requiereRol('docente', 'coordinador'), async (req: any, res) => {
  const q = req.user.rol === 'docente' ? pool.query('SELECT * FROM curso WHERE docente_id = $1', [req.user.sub]) : pool.query('SELECT * FROM curso');
  res.json((await q).rows);
});
router.post('/', requiereRol('docente'), async (req: any, res) => {
  const { nombre, grado, asignatura } = req.body ?? {};
  const { rows } = await pool.query('INSERT INTO curso (docente_id, nombre, grado, asignatura) VALUES ($1,$2,$3,$4) RETURNING *', [req.user.sub, nombre, grado, asignatura]);
  res.status(201).json(rows[0]);
});
