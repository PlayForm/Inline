import type { AstroIntegration } from "astro";

import { pipeline } from "@nikolarhristov/pipeline";
import type { Options } from "@nikolarhristov/pipeline/dist/options/lib/critters/index.js";

export default (options: Options = {}): AstroIntegration => ({
	name: "astro-critters",
	hooks: {
		"astro:build:done": async () => {
			await new pipeline(options).critters();
		},
	},
});
