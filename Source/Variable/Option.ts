/**
 * @module Option
 *
 */
export default (
	await import("typescript-esbuild/Target/Function/Merge.js")
).default((await import("files-pipe/Target/Variable/Option.js")).default, {
	Critters: (await import("../Variable/Critters.js")).default,
	Action: {
		Failed: async (On) => `Error: Cannot inline file ${On.Input}!`,
		Fulfilled: async ({ Files }) =>
			Files > 0
				? `Successfully inlined a total of ${Files} HTML ${
						Files === 1 ? "file" : "files"
				  }.`
				: false,
		Accomplished: false,
	},
	Path: ["./_astro"],
} satisfies Type);

import type Type from "../Interface/Option.js";
