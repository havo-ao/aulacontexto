import { describe, it, expect } from 'vitest';
import { anonimizar, mock } from '../src/lib/llm.js';
describe('anonimizar', () => {
  it('reemplaza nombre y apellido por alias', () => {
    expect(anonimizar('Trabajo de Juan Pérez sobre ecuaciones')).toBe('Trabajo de Estudiante A sobre ecuaciones');
  });
});
describe('mock LLM', () => {
  it('genera cuatro bloques de plan', async () => {
    const b = await mock.generarPlan({ objetivos: ['Resolver ecuaciones'], temas: ['Igualdad'], rubrica: [{ descripcion: 'Procedimiento', peso: 100 }] }, 'U1');
    expect(b).toHaveLength(4);
  });
});
