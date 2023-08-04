import type { AstroIntegration } from "astro";
// @ts-ignore
import Critters from "critters";
import { Files } from "files-pipe";
import Apply from "files-pipe/Target/Library//Apply.js";
import Merge from "files-pipe/Target/Library//Merge.js";
import type { executions, optionPath } from "files-pipe/Target/Options/Index.js";
import { fileURLToPath as Path } from "url";
import type { Options } from "./options/Index.js";
import Defaults from "./options/Index.js";

export default (Options: Options = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = Defaults[Option];
		}
	}

	const _Options = Merge(Defaults, Options);

	const Paths = new Set<optionPath>();

	if (typeof _Options["path"] !== "undefined") {
		if (
			_Options["path"] instanceof Array ||
			_Options["path"] instanceof Set
		) {
			for (const Path of _Options["path"]) {
				Paths.add(Path);
			}
		}
	}

	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!Paths.size) {
					Paths.add(dir);
				}

				if (!_Options["critters"]) {
					return;
				}

				for (const _Path of Paths) {
					const __Path = await Apply(_Path, (url: URL | string) =>
						url instanceof URL ? Path(url) : url
					);

					const critters = new Critters(
						Merge(_Options["critters"], {
							path:
								__Path instanceof Map
									? __Path.keys().next().value
									: __Path,
							logLevel: (() => {
								switch (_Options["logger"]) {
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
						} satisfies Options["Critters"])
					);

					await (
						await (
							await (
								await new Files(_Options["logger"]).in(_Path)
							).By("**/*.html")
						).not(_Options["exclude"])
					).Pipe(
						Merge(Defaults["Pipe"], {
							Wrote: async (ongoing) =>
								critters.process(ongoing.buffer.toString()),
						} satisfies executions)
					);
				}
			},
		},
	};
};
