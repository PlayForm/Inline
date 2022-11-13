import type { Options as CrittersOptions } from "critters";
export type excludeFn = (file: string) => boolean;

export interface Options {
	// rome-ignore lint:
	[key: string]: any;

	path?: string | [string];

	exclude?: string | RegExp | excludeFn | [string] | [RegExp] | [excludeFn];

	critters?: boolean | CrittersOptions;

	logger?: number;
}

export default (): Options => ({
	path: "./dist/",
	critters: {
		preload: "media",
		inlineFonts: true,
		compress: true,
		pruneSource: true,
	},
	logger: 2,
});
