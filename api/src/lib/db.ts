import mysql from 'mysql2/promise';
export const pool = mysql.createPool({ uri: process.env.DATABASE_URL, waitForConnections: true, connectionLimit: 10 });
/** Ejecuta una consulta con marcadores ? y devuelve las filas. */
export async function q<T = any>(sql: string, params: any[] = []): Promise<T[]> { const [rows] = await pool.query(sql, params); return rows as T[]; }
/** Inserta y devuelve la fila insertada. */
export async function insert(table: string, sql: string, params: any[]): Promise<any> { const [r]: any = await pool.query(sql, params); return (await q(`SELECT * FROM ${table} WHERE id = ?`, [r.insertId]))[0]; }
