import deepmerge from "files-pipe/dist/lib/deepmerge.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/Index.js";
import defaults from "files-pipe/dist/options/Index.js";
import type { CRITTERS } from "./Critters.js";
import defaultsCRITTERS from "./Critters.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	critters?: boolean | CRITTERS;
}

export default deepmerge(defaults, {
	critters: defaultsCRITTERS,
	Pipe: {
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
