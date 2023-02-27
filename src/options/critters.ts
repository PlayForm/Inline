// @ts-ignore
import type { Options as CrittersOptions } from "critters";

export interface CRITTERS extends CrittersOptions {
	[key: string]: unknown;
}

export default {
	preload: "media",
	inlineFonts: true,
	compress: true,
	pruneSource: true,
} satisfies CRITTERS;
