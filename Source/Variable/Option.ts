import type Type from "../Interface/Option.js";

export default (
	await import("typescript-esbuild/Target/Function/Merge.js")
).default((await import("files-pipe/Target/Variable/Option.js")).default, {
	Critters: (await import("../Variable/Critters.js")).default,
	Action: {
		Failed: async (On) => `Error: Cannot inline file ${On.Input}!`,
		Fulfilled: async (Plan) =>
			Plan.Files > 0
				? `Successfully inlined a total of ${Plan.Files} HTML ${
						Plan.Files === 1 ? "file" : "files"
				  }.`
				: false,
		Accomplished: false,
	},
} satisfies Type);
