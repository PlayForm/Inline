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
				case "html":
					await parse(
						`${settings.path}**/*.html`,
						debug,
						files,
						async (data) => {
							if (
								typeof setting.path === "undefined" &&
								typeof settings.path !== "undefined"
							) {
								setting.path = settings.path;
							}

							await new Critters(setting).process(data);
						}
					);
					break;

				default:
					break;
			}
		}
	}
};
