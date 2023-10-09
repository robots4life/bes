import { edenTreaty } from '@elysiajs/eden';
import type { API } from '$lib/elysia';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ route, fetch }) => {
	//
	console.log('\n');
	console.log('/api load function');
	console.log(new Date());
	console.log(route);

	// const request = await fetch('/api');
	// const response = await request.json();
	// return { response };

	// how could I use EdenTreaty with the custom Svelte Fetch ??
	// https://kit.svelte.dev/docs/web-standards#fetch-apis
	// https://kit.svelte.dev/docs/load#making-fetch-requests
	const client = edenTreaty<API>('/api');

	const request = await client.api.get();
	const response = request;
	return { response };
};
