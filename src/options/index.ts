import type CrittersOptions from "critters";

export interface Options {
	[key: string]: any;

	path?: string;

	critters?: boolean | CrittersOptions;

	logger?: number;
}

export default (): Options => ({
	path: "./dist/",
	critters: {
		path: "./dist/",
		preload: "swap",
		inlineFonts: true,
		compress: true,
	},
	logger: 1,
});
