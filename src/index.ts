import type { AstroIntegration } from "astro";

import type {
	executions,
	optionPath,
} from "files-pipeline/dist/options/index.js";

import type { Options } from "./options/index.js";

import defaults from "./options/index.js";

import { fileURLToPath } from "url";

import applyTo from "files-pipeline/dist/lib/apply-to.js";
import deepmerge from "files-pipeline/dist/lib/deepmerge.js";

import { files } from "files-pipeline";

// critters
// @ts-ignore
import Critters from "critters";

export default (options: Options = {}): AstroIntegration => {
	for (const option in options) {
		if (
			Object.prototype.hasOwnProperty.call(options, option) &&
			options[option] === true
		) {
			options[option] = defaults[option];
		}
	}

	options = deepmerge(defaults, options);

	const paths = new Set<optionPath>();

	if (typeof options["path"] !== "undefined") {
		if (
			options["path"] instanceof Array ||
			options["path"] instanceof Set
		) {
			for (const path of options["path"]) {
				paths.add(path);
			}
		} else {
			paths.add(options["path"]);
		}
	}

	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async () => {
				for (const path of paths) {
					const _path = await applyTo(path, (url: URL | string) =>
						url instanceof URL ? fileURLToPath(url) : url
					);

					const critters = new Critters(
						deepmerge(options["critters"], {
							path:
								_path instanceof Map
									? _path.keys().next().value
									: _path,
							logLevel: (() => {
								switch (options["logger"]) {
									case 0:
										return "silent";
									// rome-ignore lint/nursery/noPrecisionLoss:
									case 1:
										return "silent";
									// rome-ignore lint/nursery/noPrecisionLoss:
									case 2:
										return "info";
									default:
										return "info";
								}
							})(),
						})
					);

					await (
						await (
							await (
								await new files(options["logger"]).in(path)
							).by("**/*.html")
						).not(options["exclude"])
					).pipeline(
						deepmerge(defaults["pipeline"], {
							wrote: async (current) =>
								critters.process(current.buffer),
						} satisfies executions)
					);
				}
			},
		},
	};
};
