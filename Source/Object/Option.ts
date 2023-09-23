import type Type from "../Interface/Option.js";

export default (await import("files-pipe/Target/Fn/Merge.js")).default(
	(await import("files-pipe/Target/Object/Option.js")).default,
	{
		Critters: (await import("../Object/Critters.js")).default,
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
	} satisfies Type
) as Type;
