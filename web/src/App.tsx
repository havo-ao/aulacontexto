import { useEffect, useState } from 'react';
const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';
/** Esqueleto: el diseño de referencia es prototipo/prototipo-v2.html (Aula digital). */
export function App() {
  const [health, setHealth] = useState<string>('…');
  useEffect(() => { fetch(`${API}/health`).then(r => r.json()).then(j => setHealth(j.ok ? 'API conectada' : 'API sin respuesta')).catch(() => setHealth('API sin respuesta')); }, []);
  return (
    <main style={{ fontFamily: 'Archivo, Arial, sans-serif', padding: 24 }}>
      <h1>AulaConTexto</h1>
      <p>Esqueleto de la aplicación web. Estado: {health}</p>
      <p>Diseño de referencia: <a href="/prototipo/prototipo-v2.html">prototipo navegable v2</a>.</p>
    </main>
  );
}
