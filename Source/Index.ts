import type { AstroIntegration } from "astro";
import { fileURLToPath as __Path } from "url";

// @ts-ignore
import Critters from "critters";

import { Files } from "files-pipe";
import Apply from "files-pipe/Target/Library/Apply.js";
import Merge from "files-pipe/Target/Library/Merge.js";
import type { Execution, Path } from "files-pipe/Target/Option/Index.js";

import type { Option } from "./Option/Index.js";
import Default from "./Option/Index.js";

export default (_Option: Option = {}): AstroIntegration => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option];
		}
	}

	const __Option = Merge(Default, _Option);

	const Paths = new Set<Path>();

	if (typeof __Option["Path"] !== "undefined") {
		if (
			__Option["Path"] instanceof Array ||
			__Option["Path"] instanceof Set
		) {
			for (const Path of __Option["Path"]) {
				Paths.add(Path);
			}
		}
	}

	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async ({ dir: Dir }) => {
				if (!Paths.size) {
					Paths.add(Dir);
				}

				if (!__Option["Critters"]) {
					return;
				}

				for (const Path of Paths) {
					const _Path = await Apply(
						(_URL: URL | string) =>
							_URL instanceof URL ? __Path(_URL) : _URL,
						Path
					);

					await (
						await (
							await (
								await new Files(__Option["Logger"]).In(Path)
							).By("**/*.html")
						).Not(__Option["Exclude"])
					).Pipe(
						Merge(Default["Pipe"], {
							Wrote: async (On) =>
								new Critters(
									Merge(__Option["Critters"], {
										path:
											_Path instanceof Map
												? _Path.keys().next().value
												: _Path,
										logLevel: (() => {
											switch (__Option["Logger"]) {
												case 0:
													return "silent";
												case 1:
													return "silent";
												case 2:
													return "info";
												default:
													return "info";
											}
										})(),
									} satisfies Option["Critters"])
								).process(On.Buffer.toString()),
						} satisfies Execution)
					);
				}
			},
		},
	};
};
