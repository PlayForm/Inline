# [astro-critters] 🦔

This **[Astro integration][astro-integration]** brings
[critters][@nikolarhristov/critters] to your Astro project.

Critters is a plugin that inlines your app's [critical CSS] and lazy-loads the
rest.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `astro-critters`, run the following from your project directory and
follow the prompts:

```sh
# Using NPM
npx astro add astro-critters
# Using Yarn
yarn astro add astro-critters
# Using PNPM
pnpx astro add astro-critters
```

### Install dependencies manually

First, install the `astro-critters` integration like so:

```
npm install -D -E astro-critters
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

```ts
import critters from "astro-critters";

export default {
	integrations: [critters()],
};
```

## Getting started

Critters should now automatically inline the critical CSS of your HTML files.

You can override any of the default options from the configuration of:

-   [critters](https://github.com/nikolaxhristov/critters#usage)

or disable them entirely:

```ts
import critters from "astro-critters";

export default {
	integrations: [
		critters({
			critters: false,
		}),
	],
};
```

If your path is different than `dist` be sure to update it accordingly:

```ts
import critters from "astro-critters";

export default {
	outDir: "./build",
	integrations: [
		critters({
			path: "./build",
		}),
	],
};
```

You can add multiple paths to inline by specifying an array as the `path`
variable.

**`astro.config.ts`**

```ts
import critters from "astro-critters";

export default {
	integrations: [
		critters({
			path: ["./build", "./dist"],
		}),
	],
};
```

Set logger to 0 if you do not want to see debug messages. Default is 2.

```ts
import critters from "astro-critters";

export default {
	integrations: [
		critters({
			logger: 0,
		}),
	],
};
```

You can provide a filter to exclude files in your build. A filter can be an
array of regexes or a single match. You can use functions, as well to match on
file names.

**`astro.config.ts`**

```ts
import critters from "astro-critters";

export default {
	integrations: [
		critters({
			exclude: [
				"my-awesome.html",
				(file: string) => file === "./dist/index.html",
			],
		}),
	],
};
```

[astro-critters]: https://npmjs.org/astro-critters
[critters]: https://github.com/nikolaxhristov/critters
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/
[critical css]:
	https://www.smashingmagazine.com/2015/08/understanding-critical-css/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.

[![Lightrix logo](https://raw.githubusercontent.com/Lightrix/npm/main/.github/img/favicon.png "Built with Lightrix/npm")](https://github.com/Lightrix/npm)
