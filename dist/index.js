import Critters from "critters";
import { glob } from "glob";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import defaults from "./options.js";
import { Logger } from "./utils/logger.js";
const processFiles = async (dir, options, paths, logger) => {
    logger.info(`Inlining CSS via Critters`);
    if (options.critters === false) {
        logger.info(`Skipping critters due to config`);
        return;
    }
    if (!paths.size) {
        paths.add(fileURLToPath(dir));
    }
    for (const path of paths) {
        const files = await glob(`${path}**/*.html`, {
            ignore: options.exclude
        });
        const critters = new Critters({
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
        });
        for (const file of files) {
            const html = await fs.readFile(file, 'utf-8');
            const inlined = await critters.process(html);
            const postProcessed = options.removeExternalStylesheets
                ? inlined.replace(/(<link[^>]*?href="\/_astro\/.*?".*?>)/gm, '')
                : inlined;
            await fs.writeFile(file, postProcessed);
        }
        logger.success(`Processed ${files.length} files`);
    }
};
export default (options = defaults) => {
    const _options = Object.assign(defaults, options);
    const paths = _options.path instanceof String
        ? new Set([_options.path.toString()])
        : typeof _options?.path?.[Symbol.iterator] === 'function'
            ? new Set([..._options.path])
            : new Set();
    const logger = new Logger("astro-critters", _options.logger || 2);
    return {
        name: "astro-critters",
        hooks: {
            "astro:build:done": ({ dir }) => processFiles(dir, _options, paths, logger)
        },
    };
};
