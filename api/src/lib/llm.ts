/** Cliente LLM: encapsula al proveedor (ADR-2). En 'mock' devuelve texto de plantilla para desarrollo. */
export interface Contexto { grado?: string; metodologia?: string; objetivos: string[]; temas: string[]; rubrica: { descripcion: string; peso: number }[]; materiales?: string }
export interface Cliente { generarPlan(ctx: Contexto, unidad: string): Promise<string[]>; retroalimentar(ctx: Contexto, trabajoAnonimo: string): Promise<{ criterio: string; texto: string }[]> }

export const mock: Cliente = {
  async generarPlan(ctx, unidad) {
    return [
      `Objetivo de la sesión: al finalizar, el estudiante ${ctx.objetivos[0]?.toLowerCase() ?? 'alcanza el objetivo de la unidad'}.`,
      'Inicio (10 min): situación problema tomada del contexto cotidiano.',
      `Desarrollo (30 min): trabajo guiado sobre ${ctx.temas.slice(0, 2).join(' y ') || 'los temas de la unidad'}.`,
      `Cierre (10 min): socialización y verificación con el criterio «${ctx.rubrica[0]?.descripcion ?? 'Procedimiento'}».`,
    ];
  },
  async retroalimentar(ctx, _trabajo) {
    return ctx.rubrica.map(c => ({ criterio: c.descripcion, texto: `${c.descripcion} parcialmente logrado. Revisar el paso correspondiente.` }));
  },
};

export function cliente(): Cliente {
  // TODO: adaptador del proveedor real (OpenAI/Anthropic) seleccionado en el sprint 0.
  return mock;
}

/** Reemplaza nombres propios por un alias antes de enviar al modelo (ADR-2, Ley 1581). */
export function anonimizar(texto: string, alias = 'Estudiante A'): string {
  return texto.replace(/\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)\b/g, alias);
}
