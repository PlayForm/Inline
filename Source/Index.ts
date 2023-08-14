import type { AstroIntegration } from "astro";
import { fileURLToPath as __Path } from "url";

// @ts-ignore
import Critters from "critters";

import { Files } from "files-pipe";
import Apply from "files-pipe/Target/Library/Apply.js";
import Merge from "files-pipe/Target/Library/Merge.js";
import type { Execution, Path } from "files-pipe/Target/Option/Index.js";

import type { Option as Option } from "./Option/Index.js";
import Default from "./Option/Index.js";

export default (Options: Option = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = Default[Option];
		}
	}

	const _Options = Merge(Default, Options);

	const Paths = new Set<Path>();

	if (typeof _Options["Path"] !== "undefined") {
		if (
			_Options["Path"] instanceof Array ||
			_Options["Path"] instanceof Set
		) {
			for (const Path of _Options["Path"]) {
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

				if (!_Options["Critters"]) {
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
								await new Files(_Options["Logger"]).In(Path)
							).By("**/*.html")
						).Not(_Options["Exclude"])
					).Pipe(
						Merge(Default["Pipe"], {
							Wrote: async (On) =>
								new Critters(
									Merge(_Options["Critters"], {
										path:
											_Path instanceof Map
												? _Path.keys().next().value
												: _Path,
										logLevel: (() => {
											switch (_Options["Logger"]) {
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
