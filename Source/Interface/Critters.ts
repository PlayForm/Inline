import type { Options } from "critters";

export default interface Type extends Options {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
}
