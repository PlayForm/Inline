import type { executions, optionPath } from "files-pipe/options/index.js";

// @ts-ignore
import Critters from "critters";

import defaults from "./options/index.js";

import { files } from "files-pipe";
import deepmerge from "files-pipe/lib/deepmerge.js";

import { fileURLToPath } from "url";

import applyTo from "files-pipe/lib/apply-to.js";

import type { AstroIntegration } from "astro";

import type { Options } from "./options/index.js";

import * as path from "path";
import * as fs from "fs";

class CrittersAstroPlugin extends Critters {
	constructor(options: Options){
		super(options);
	}

	process(html: string) {
		const out = super.process(html);
		return out
	}

	pruneSource(style: { $$name: string; }, before: string, sheetInverse: string) {
		const isStyleInlined = super.pruneSource(style, before, sheetInverse);
		const name = style.$$name;

		// @ts-ignore
		const abs = path.join(this.options.path, name);

		if (isStyleInlined) {
			fs.rm(abs, () => {});
		} else {
			fs.writeFile(abs, sheetInverse, () => {});
		}

		return isStyleInlined;
	}
}

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

				if (!options["critters"]) {
					return;
				}

				for (const path of paths) {
					const _path = await applyTo(path, (url: URL | string) =>
						url instanceof URL ? fileURLToPath(url) : url
					);

					const critters = new CrittersAstroPlugin(
						deepmerge(options["critters"], {
							path:
								_path instanceof Map
									? _path.keys().next().value
									: _path,
							logLevel: (() => {
								switch (options["logger"]) {
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
								await new files(options["logger"]).in(path)
							).by("**/*.html")
						).not(options["exclude"])
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
