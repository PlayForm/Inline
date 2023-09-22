// @ts-ignore
import type { Options as Option } from "critters";

export interface Type extends Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}

export default {
	preload: "media",
	inlineFonts: true,
	compress: true,
	pruneSource: true,
} satisfies Type as Type;
