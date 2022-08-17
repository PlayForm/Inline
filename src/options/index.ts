import { Options as CritterOptions } from "critters";

export interface Options extends CritterOptions {
	[key: string]: any;

	/**
	 * Astro build path.
	 * @default "./dist/"
	 */
	path?: string;
}

export default {
	path: "./dist/",
	preload: "swap",
	inlineFonts: true,
	compress: true,
} as Options;
