<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/">Home</a>
<hr />
<h1>No API</h1>

{#if Object.keys(data).length !== 0}
	<pre>{JSON.stringify(data, null, 2)}</pre>
{/if}
