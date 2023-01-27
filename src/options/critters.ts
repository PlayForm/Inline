// @ts-ignore
import type { Options as CrittersOptions } from "critters";

export interface CRITTERS extends CrittersOptions {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default {
	preload: "media",
	inlineFonts: true,
	compress: true,
	pruneSource: true,
};
