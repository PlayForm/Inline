import Critters from "critters";

import type { Options } from "../options/index";
import parse from "./parse.js";

/**
 * It takes a settings object, creates a new Critters instance, and then parses all HTML files in the
 * given directory, passing each file's contents to the Critters instance
 * @param {Options} settings - Options
 */
export default async (settings: Options) => {
	const critters = new Critters(settings);

	await parse(
		`${settings.path}**/*.html`,
		async (data) => await critters.process(data)
	);
};
