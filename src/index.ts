import * as Critters from "critters";
import { writeFileSync } from "fs";
import type { AstroIntegration } from "astro";

export default function createPlugin(
	critterOptions: Critters.Options = {}
): AstroIntegration {
	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async (options) => {
				const defaultOptions = {
					path: "./dist/",
					...critterOptions,
				};

				const critters = new Critters.default(defaultOptions);

				const files = options.pages.map(
					(page) =>
						defaultOptions.path +
						(page.pathname !== "404/"
							? `${page.pathname}index.html`
							: "404.html")
				);

				for (const file of files) {
					const html = await critters.readFile(file);
					const inlined = await critters.process(html);
					writeFileSync(file, inlined, "utf-8");
				}
			},
		},
	};
}
