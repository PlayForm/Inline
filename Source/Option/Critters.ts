// @ts-ignore
import type { Options } from "critters";

export interface Critters extends Options {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default {
	preload: "media",
	inlineFonts: true,
	compress: true,
	pruneSource: true,
} satisfies Critters;
