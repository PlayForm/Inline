# astro-critters

This **[Astro integration][astro-integration]** brings [critters][critters] to
your Astro project.

Critters is a plugin that inlines your app's [critical CSS] and lazy-loads the
rest.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### (experimental) `astro add` command

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

If you run into any hiccups,
[feel free to log an issue on our GitHub](https://github.com/withastro/astro/issues)
and try the manual installation steps below.

### Install dependencies manually

First, install the `astro-critters` integration like so:

```
npm install astro-critters
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**astro.config.mjs**

```js
import critters from "astro-critters";

export default {
	// ...
	integrations: [critters()],
};
```

## Getting started

Critters should now automatically update your CSS.

Path is "./dist/" by default as in the [Astro
configuration][astro-configuration-outdir]:

Head to [critters](https://github.com/GoogleChromeLabs/critters) for all options
and features available. You can override any of the default options from the
configuration at https://github.com/GoogleChromeLabs/critters#properties. You
can also check the [Astro Integration Documentation][astro-integration] for more
on integrations.

[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/
[astro-configuration-outdir]:
	https://docs.astro.build/en/reference/configuration-reference/#outdir
[astro-ui-frameworks]:
	https://docs.astro.build/en/core-concepts/framework-components/#using-framework-components
[critters]: https://github.com/GoogleChromeLabs/critters
[critical css]:
	https://www.smashingmagazine.com/2015/08/understanding-critical-css/
