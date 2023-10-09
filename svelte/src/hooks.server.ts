import { api } from '$lib/elysia';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	//
	console.log('\n');
	console.log('hooks handle function');
	console.log(new Date());
	console.log(event.request.url);

	if (event.url.pathname.startsWith('/api')) {
		console.log('elysia returns data');
		return await api.handle(event.request);
	}

	const response = await resolve(event);
	return response;
};
