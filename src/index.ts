import type {
	executions,
	optionPath,
} from "files-pipeline/dist/options/index.js";

// @ts-ignore
import Critters from "critters";

import defaults from "./options/index.js";

import { files } from "files-pipeline";
import deepmerge from "files-pipeline/dist/lib/deepmerge.js";

import { fileURLToPath } from "url";

import applyTo from "files-pipeline/dist/lib/apply-to.js";

import type { AstroIntegration } from "astro";

import type { Options } from "./options/index.js";

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
		}
	}

	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!paths.size) {
					paths.add(dir);
				}

				console.log(dir);
				console.log(paths);

				if (!options["critters"]) {
					return;
				}

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
						} satisfies Options["critters"])
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
								critters.process(current.buffer.toString()),
						} satisfies executions)
					);
				}
			},
		},
	};
};
