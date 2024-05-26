/**
 * @module Option
 *
 */
export default (await import("@Function/Merge.js")).default(
	(await import("@playform/pipe/Target/Variable/Option.js")).default,
	{
		Critters: (await import("@Variable/Critters.js")).default,
		Action: {
			Failed: async (On) => `Error: Cannot inline file ${On.Input}!`,
			Fulfilled: async ({ File }) =>
				File > 0
					? `Successfully inlined a total of ${File} HTML ${
							File === 1 ? "file" : "files"
						}.`
					: false,
			Accomplished: false,
		},
	} satisfies Interface,
);

import type Interface from "../Interface/Option.js";
