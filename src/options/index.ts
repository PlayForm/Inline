import deepmerge from "files-pipeline/dist/lib/deepmerge.js";
import defaults from "files-pipeline/dist/options/index.js";

import type CRITTERS from "./critters.js";

import type { Options as OptionsBase } from "files-pipeline/dist/options/index.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	critters?: boolean | CRITTERS;
}

export default deepmerge(defaults, {
	critters: {
		preload: "media",
		inlineFonts: true,
		compress: true,
		pruneSource: true,
	},
	pipeline: {
		failed: async (current) =>
			`Error: Cannot inline file ${current.inputPath}!`,
		fulfilled: async (pipe) =>
			pipe.files > 0
				? `Successfully inlined a total of ${pipe.files} HTML ${
						pipe.files === 1 ? "file" : "files"
				  }.`
				: false,
		accomplished: false,
	},
} satisfies Options) as Options;
