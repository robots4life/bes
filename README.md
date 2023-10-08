### Runtime - Bun

<a href="https://bun.sh/" target="_blank">https://bun.sh/</a>

### API - Elysia

<a href="https://elysiajs.com/" target="_blank">https://elysiajs.com/</a>

### Framework - SvelteKit

<a href="https://kit.svelte.dev/" target="_blank">https://kit.svelte.dev/</a>

### 1.0 Bun

**`curl -fsSL https://bun.sh/install | bash `**

### 2.0 Elysia

<a href="https://bun.sh/guides/ecosystem/elysia" target="_blank">https://bun.sh/guides/ecosystem/elysia</a>

**`bun create elysia`**

output

```bash
[18.00ms] git
 + bun-types@1.0.5-canary.20231007T140129
 + elysia@0.7.15

 10 packages installed [1.99s]

[2.00s] bun install


[3.45s] bun create elysia

Come hang out in bun's Discord: https://bun.sh/discord

-----

A local git repository was created for you and dependencies were installed automatically.

Created elysia project successfully

# To get started, run:

  cd elysia
  bun run src/index.ts
```

### 3.0 SvelteKit

<a href="https://bun.sh/guides/ecosystem/sveltekit" target="_blank">https://bun.sh/guides/ecosystem/sveltekit</a>

in directory `svelte`

**`bun create svelte@latest`**

1. current directory
2. skeleton project
3. typescript
4. eslint & prettier

output

```bash
create-svelte version 5.1.0

┌  Welcome to SvelteKit!
│
◇  Where should we create your project?
│    (hit Enter to use current directory)
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting
│
└  Your project is ready!

✔ Typescript
  Inside Svelte components, use <script lang="ts">

✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte

✔ Prettier
  https://prettier.io/docs/en/options.html
  https://github.com/sveltejs/prettier-plugin-svelte#options

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: npm install (or pnpm install, etc)
  2: git init && git add -A && git commit -m "Initial commit" (optional)
  3: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```

**`bun install`**

output

```bash
bun install v1.0.4 (745b6b94)
 + @sveltejs/adapter-auto@2.1.0
 + @sveltejs/kit@1.25.1
 + @typescript-eslint/eslint-plugin@6.7.4
 + @typescript-eslint/parser@6.7.4
 + eslint@8.51.0
 + eslint-config-prettier@8.10.0 (v9.0.0 available)
 + eslint-plugin-svelte@2.34.0
 + prettier@2.8.8 (v3.0.3 available)
 + prettier-plugin-svelte@2.10.1 (v3.0.3 available)
 + svelte@4.2.1
 + svelte-check@3.5.2
 + tslib@2.6.2
 + typescript@5.2.2
 + vite@4.4.11

 217 packages installed [3.51s]
```
