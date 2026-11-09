import express from 'express';
import cors from 'cors';
import { router as auth } from './modules/auth.js';
import { router as cursos } from './modules/cursos.js';
import { router as generacion } from './modules/generacion.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.get('/health', (_req, res) => res.json({ ok: true, service: 'aulacontexto-api' }));
app.use('/auth', auth);
app.use('/cursos', cursos);
app.use('/generar', generacion);

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => console.log(`API en :${port}`));
