import type Critters from "../Interface/Critters.js";

import type Option from "files-pipe/Target/Interface/Option.js";

export default interface Type extends Option {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	Critters?: boolean | Critters;
}
