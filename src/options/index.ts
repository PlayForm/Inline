import type { Options as CrittersOptions } from "critters";
export type filterFn = (file: string) => boolean;

export interface Options {
	// rome-ignore lint:
	[key: string]: any;

	path?: string | string[] | Set<string>;

	exclude?:
		| string
		| RegExp
		| filterFn
		| string[]
		| RegExp[]
		| filterFn[]
		| Set<string>
		| Set<RegExp>
		| Set<filterFn>;

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
