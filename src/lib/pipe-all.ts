// @ts-ignore
import Critters from "critters";

import type { Options } from "../options/index";
import parse from "./parse.js";

export default async (path: string, settings: Options, debug: number = 2) => {
	for (const files in settings) {
		if (Object.prototype.hasOwnProperty.call(settings, files)) {
			const setting = settings[files];

			if (!setting) {
				continue;
			}

			switch (files) {
				case "critters": {
					await parse(
						`${path}**/*.html`,
						debug,
						"html",
						settings?.exclude,
						async (data) =>
							await new Critters({
								...setting,
								path: setting.path ? setting.path : path,
							}).process(data)
					);

					break;
				}

				default:
					break;
			}
		}
	}
};
