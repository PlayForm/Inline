import type { AstroIntegration } from "astro";

import pipeline from "@nikolarhristov/pipeline";
import type { Options as PipelineOptions } from "@nikolarhristov/pipeline/dist/options/index.js";
import type { Options as CrittersOptions } from "@nikolarhristov/pipeline/dist/options/lib/critters/index.js";

export default (
	_options: PipelineOptions & CrittersOptions = {}
): AstroIntegration => ({
	name: "astro-critters",
	hooks: {
		"astro:config:done": async (options) => {
			_options.path = _options.path
				? _options.path
				: options.config.outDir;
		},
		"astro:build:done": async () => {
			await new pipeline(_options).critters();
		},
	},
});
