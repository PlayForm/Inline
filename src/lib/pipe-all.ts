import Critters from "critters";

import type { Options } from "../options/index";
import parse from "./parse.js";

export default async (settings: Options, debug: number = 2) => {
	for (const files in settings) {
		if (Object.prototype.hasOwnProperty.call(settings, files)) {
			const setting = settings[files];

			if (!setting) {
				continue;
			}

			switch (files) {
				case "critters": {
					await parse(
						`${settings.path}**/*.html`,
						debug,
						"html",
						settings?.exclude,
						async (data: any) => {
							setting.path = setting.path
								? setting.path
								: settings.path;

							return await new Critters(setting).process(data);
						}
					);
					break;
				}

				default:
					break;
			}
		}
	}
};
