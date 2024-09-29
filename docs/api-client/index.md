---
title: Get Started with api-client
---

# Welcome!

api-client is a library written in [TypeScript](https://typescriptlang.org)
which makes it easier to interact with and use the
[Meower API](../api/rest-api/rest-api). To get started, you need to first
install the library:

::: code-group

```sh [npm]
npx jsr add @meower/api-client
```

```sh [yarn]
yarn dlx jsr add @meower/api-client
```

```sh [pnpm]
pnpm dlx jsr add @meower/api-client
```

```sh [bun]
bunx jsr add @meower/api-client
```

```sh [deno]
deno add @meower/api-client
```

```html [browsers]
<script type="importmap">
	{
		"imports": {
			"@meower/api-client": "https://esm.sh/jsr/@meower/api-client@latest"
		}
	}
</script>
```

:::

Once you install the library, you can import things from it using the following
code:

```ts
import {} from '@meower/api-client';
```

Please see the sidebar for information on doing certain things with api-client.
