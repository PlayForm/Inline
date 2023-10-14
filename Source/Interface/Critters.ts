// @ts-expect-error
import type { Options } from "critters";

export default interface Type extends Options {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
