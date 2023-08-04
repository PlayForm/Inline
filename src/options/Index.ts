import Merge from "files-pipe/dist/lib/Merge.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/Index.js";
import Defaults from "files-pipe/dist/options/Index.js";
import type { CRITTERS } from "./Critters.js";
import _CRITTERS from "./Critters.js";

export interface Options extends OptionsBase {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	Critters?: boolean | CRITTERS;
}

export default Merge(Defaults, {
	Critters: _CRITTERS,
	Pipe: {
		Failed: async (On) =>
			`Error: Cannot inline file ${On.Input}!`,
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully inlined a total of ${Plan.Files} HTML ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,
		accomplished: false,
	},
} satisfies Options) as Options;
