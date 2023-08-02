import type { AstroIntegration } from "astro";
// @ts-ignore
import Critters from "critters";
import { files } from "files-pipe";
import applyTo from "files-pipe/dist/lib/ApplyTo.js";
import deepmerge from "files-pipe/dist/lib/deepmerge.js";
import type { executions, optionPath } from "files-pipe/dist/options/Index.js";
import { fileURLToPath } from "url";
import type { Options } from "./options/Index.js";
import defaults from "./options/Index.js";

export default (options: Options = {}): AstroIntegration => {
	for (const option in options) {
		if (
			Object.prototype.hasOwnProperty.call(options, option) &&
			options[option] === true
		) {
			options[option] = defaults[option];
		}
	}

	const _options = deepmerge(defaults, options);

	const paths = new Set<optionPath>();

	if (typeof _options["path"] !== "undefined") {
		if (
			_options["path"] instanceof Array ||
			_options["path"] instanceof Set
		) {
			for (const path of _options["path"]) {
				paths.add(path);
			}
		}
	}

	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!paths.size) {
					paths.add(dir);
				}

				if (!_options["critters"]) {
					return;
				}

				for (const path of paths) {
					const _path = await applyTo(path, (url: URL | string) =>
						url instanceof URL ? fileURLToPath(url) : url
					);

					const critters = new Critters(
						deepmerge(_options["critters"], {
							path:
								_path instanceof Map
									? _path.keys().next().value
									: _path,
							logLevel: (() => {
								switch (_options["logger"]) {
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
						} satisfies Options["critters"])
					);

					await (
						await (
							await (
								await new files(_options["logger"]).in(path)
							).by("**/*.html")
						).not(_options["exclude"])
					).pipe(
						deepmerge(defaults["pipe"], {
							wrote: async (ongoing) =>
								critters.process(ongoing.buffer.toString()),
						} satisfies executions)
					);
				}
			},
		},
	};
};
