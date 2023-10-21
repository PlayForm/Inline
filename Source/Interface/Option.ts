/**
 * @module Option
 *
 */
export default interface Type extends Option {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	Critters?: boolean | Critters;
}

import type Critters from "../Interface/Critters.js";

import type Option from "files-pipe/Target/Interface/Option.js";
