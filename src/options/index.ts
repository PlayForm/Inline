import deepmerge from "files-pipeline/dist/lib/deepmerge.js";
import defaults from "files-pipeline/dist/options/index.js";

import defaultsCRITTERS from "./critters.js";

import type { CRITTERS } from "./critters.js";

import type { Options as OptionsBase } from "files-pipeline/dist/options/index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	critters?: boolean | CRITTERS;
}

export default deepmerge(defaults, {
	critters: defaultsCRITTERS,
	pipeline: {
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
