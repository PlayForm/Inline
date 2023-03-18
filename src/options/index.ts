import deepmerge from "files-pipe/lib/deepmerge.js";
import defaults from "files-pipe/options/index.js";

import defaultsCRITTERS from "./critters.js";

import type { CRITTERS } from "./critters.js";

import type { Options as OptionsBase } from "files-pipe/options/index.js";

export interface Options extends OptionsBase {
	[key: string]: unknown;

	critters?: boolean | CRITTERS;
}

export default deepmerge(defaults, {
	critters: defaultsCRITTERS,
	pipe: {
		failed: async (ongoing) =>
			`Error: Cannot inline file ${ongoing.inputPath}!`,
		fulfilled: async (plan) =>
			plan.files > 0
				? `Successfully inlined a total of ${plan.files} HTML ${
						plan.files === 1 ? "file" : "files"
				  }.`
				: false,
		accomplished: false,
	},
} satisfies Options) as Options;
