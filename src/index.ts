import type { AstroIntegration } from "astro";

import { pipeline } from "files-pipeline";
import type { Options } from "files-pipeline/dist/options/lib/critters/index.js";

export default (options: Options = {}): AstroIntegration => ({
	name: "astro-critters",
	hooks: {
		"astro:build:done": async () => {
			await new pipeline(options).critters();
		},
	},
});
