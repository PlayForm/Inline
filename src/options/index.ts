import type { Options as CrittersOptions } from "critters";

export interface Options {
	[key: string]: any;
	path?: string;
	critters?: boolean | CrittersOptions;
	logger?: number;
}

export default {
	path: "./dist/",
	critters: {
		preload: "swap",
		inlineFonts: true,
		compress: true,
		pruneSource: true,
	},
	logger: 2,
} satisfies Options;
