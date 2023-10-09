import { edenTreaty } from '@elysiajs/eden';
import type { API } from '$lib/elysia';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ route, fetch }) => {
	//
	console.log('\n');
	console.log('/no-api load function');
	console.log(new Date());
	console.log(route);

	// https://discord.com/channels/1044804142461362206/1044807567022493766/1160931471301824592
	const client = edenTreaty<API>('/', { fetcher: fetch });

	const request = await client.api.get();

	const response = request;

	return response.data;
};
