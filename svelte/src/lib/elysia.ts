import { Elysia } from 'elysia';

export const api = new Elysia().get('/api', () => ({
	vtuber: ['Shirakami Fubuki', 'Inugami Korone']
}));

export type API = typeof api;
