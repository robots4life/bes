### Runtime - Bun

<a href="https://bun.sh/" target="_blank">https://bun.sh/</a>

### Framework - SvelteKit

<a href="https://kit.svelte.dev/" target="_blank">https://kit.svelte.dev/</a>

### API - Elysia

<a href="https://elysiajs.com/" target="_blank">https://elysiajs.com/</a>

### 1.0 Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

```bash
bun create elysia
```

### 2.0 SvelteKit

<a href="https://bun.sh/guides/ecosystem/sveltekit" target="_blank">https://bun.sh/guides/ecosystem/sveltekit</a>

in directory `svelte`

```bash
bun create svelte@latest
```

1. current directory
2. skeleton project
3. typescript
4. eslint & prettier

```bash
bun install
```

### 3.0 Elysia

<a href="https://bun.sh/guides/ecosystem/elysia" target="_blank">https://bun.sh/guides/ecosystem/elysia</a>

in directory `svelte`

```bash
bun add elysia
```

```bash
bun add @elysiajs/eden
```

### 4.0 EdenTreaty with Svelte Fetch ?

:question: :question: How could I use EdenTreaty with the custom Svelte Fetch :question: :question:

<a href="https://github.com/robots4life/bes/tree/master/svelte/src/routes/no-api/+page.server.ts#L20" target="_blank">https://github.com/robots4life/bes/tree/master/svelte/src/routes/no-api/+page.server.ts#L20</a>

```ts
import { edenTreaty } from "@elysiajs/eden";
import type { API } from "$lib/elysia";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ route, fetch }) => {
  //
  console.log("\n");
  console.log("/api load function");
  console.log(new Date());
  console.log(route);

  // const request = await fetch('/api');
  // const response = await request.json();
  // return { response };

  // how could I use EdenTreaty with the custom Svelte Fetch ??
  // https://kit.svelte.dev/docs/web-standards#fetch-apis
  // https://kit.svelte.dev/docs/load#making-fetch-requests
  const client = edenTreaty<API>("/api");

  const request = await client.api.get();
  const response = request;
  return { response };
};
```

<a href="https://kit.svelte.dev/docs/web-standards#fetch-apis" target="_blank">https://kit.svelte.dev/docs/web-standards#fetch-apis</a>

<a href="https://kit.svelte.dev/docs/load#making-fetch-requests" target="_blank">https://kit.svelte.dev/docs/load#making-fetch-requests</a>

```bash
/api load function
2023-10-09T12:09:40.499Z
{"id":"/no-api"}
36 |                    throw new Error(
37 |                            `Cannot use relative URL (${info}) with global fetch — use \`event.fetch\` instead: https://kit.svelte.dev/docs/web-standards#fetch-apis`
38 |                    );
39 |            }
40 |
41 |            return fetch(info, init);
                  ^
error: Cannot use relative URL (/api/api) with global fetch — use `event.fetch` instead: https://kit.svelte.dev/docs/web-standards#fetch-apis

```

:zap: :zap: **Solution** :zap: :zap:

<a href="https://discord.com/channels/1044804142461362206/1044807567022493766/1160931471301824592" target="_blank">https://discord.com/channels/1044804142461362206/1044807567022493766/1160931471301824592</a>

```ts
const client = edenTreaty<API>("/", { fetcher: fetch });
```

**svelte/src/routes/no-api/+page.server.ts**

```ts
import { edenTreaty } from "@elysiajs/eden";
import type { API } from "$lib/elysia";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ route, fetch }) => {
  //
  console.log("\n");
  console.log("/api load function");
  console.log(new Date());
  console.log(route);

  // https://discord.com/channels/1044804142461362206/1044807567022493766/1160931471301824592
  const client = edenTreaty<API>("/", { fetcher: fetch });

  const request = await client.api.get();
  const response = request;
  console.log(response.data);

  return response.data;
};
```

:exclamation: :exclamation: Not quite the solution. :exclamation: :exclamation:

For some reason in

**svelte/src/routes/no-api/+page.svelte**

the `data` property is not typed with above code.

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<a href="/">Home</a>
<hr />
<h1>No API</h1>

{#if Object.keys(data).length !== 0}
<pre>{JSON.stringify(data, null, 2)}</pre>
{/if}
```
