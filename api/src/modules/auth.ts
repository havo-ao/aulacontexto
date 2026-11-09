import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { q } from '../lib/db.js';
export const router = Router();
// Secuencia C (docs/diagramas/10-secuencia-autenticacion.png): JWT con rol, 8 h.
router.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body ?? {};
  const u = (await q('SELECT id, nombre, rol, hash_contrasena FROM usuario WHERE correo = ?', [correo]))[0];
  if (!u || !(await bcrypt.compare(contrasena ?? '', u.hash_contrasena))) return res.status(401).json({ error: 'Credenciales inválidas' });
  const token = jwt.sign({ sub: u.id, rol: u.rol }, process.env.JWT_SECRET ?? 'dev', { expiresIn: '8h' });
  res.json({ token, usuario: { id: u.id, nombre: u.nombre, rol: u.rol } });
});
export function requiereRol(...roles: string[]) {
  return (req: any, res: any, next: any) => {
    try {
      const h = req.headers.authorization ?? '';
      const payload = jwt.verify(h.replace('Bearer ', ''), process.env.JWT_SECRET ?? 'dev') as any;
      if (roles.length && !roles.includes(payload.rol)) return res.status(403).json({ error: 'Sin permiso' });
      req.user = payload; next();
    } catch { res.status(401).json({ error: 'Token inválido' }); }
  };
}
