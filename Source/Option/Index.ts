import type { Option as _Option } from "files-pipe";
import { Default, Merge } from "files-pipe";
import type { Critters } from "./Critters.js";
import _Critters from "./Critters.js";

export interface Option extends _Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	Critters?: boolean | Critters;
}

export default Merge(Default, {
	Critters: _Critters,
	Pipe: {
		Failed: async (On) => `Error: Cannot inline file ${On.Input}!`,
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully inlined a total of ${Plan.Files} HTML ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,
		Accomplished: false,
	},
} satisfies Option) as Option;
