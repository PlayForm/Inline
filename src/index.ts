import type { AstroIntegration } from "astro";
// @ts-ignore
import Critters from "critters";
import { glob } from "glob";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import type { Options } from "./options.js";
import defaults from "./options.js";
import { Logger } from "./utils/logger.js";

const processFiles = async (dir: URL, options: Options, paths: Set<string>, logger: Logger) => {
	logger.info(`Inlining CSS via Critters`)

	// Option to disable this plugin on the fly
	if (options.critters === false) {
		logger.info(`Skipping critters due to config`)
		return;
	}

	// If no path was provided we use the workDir
	if (!paths.size) {
		paths.add(fileURLToPath(dir));
	}

	for (const path of paths) {
		const files = await glob(`${path}**/*.html`, {
			ignore: options.exclude
		})

		// @ts-ignore
		const critters = new Critters({
			// @ts-ignore
			...options.critters,
			path,
			logger: {
				trace: (msg) => logger.info(msg),
				debug: (msg) => logger.info(msg),
				info: (msg) => logger.info(msg),
				warn: (msg) => logger.warn(msg),
				error: (msg) => logger.error(msg),

			},
			logLevel: options.logger == 2
				? 'debug'
				: options.logger == 1
					? 'info'
					: 'warn'
		})

		for (const file of files) {
			const html = await fs.readFile(file, 'utf-8')
			const inlined = await critters.process(html)
			const postProcessed = options.removeExternalStylesheets
				? inlined.replace(/(<link[^>]*?href="\/_astro\/.*?".*?>)/gm, '')
				: inlined
			await fs.writeFile(file, postProcessed)
		}

		logger.success(`Processed ${files.length} files`)
	}
}

export default (options: Options = defaults): AstroIntegration => {
	// For easier use we merge passed options with defaults
	const _options = Object.assign(defaults, options);
	// Support for single paths, as well as iterable lists of paths
	const paths = _options.path instanceof String
		? new Set<string>([_options.path.toString()])
		: typeof _options?.path?.[Symbol.iterator] === 'function'
			? new Set<string>([..._options.path])
			: new Set<string>();

	const logger = new Logger("astro-critters", _options.logger || 2);

	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": ({ dir }) => processFiles(dir, _options, paths, logger)
		},
	};
};
