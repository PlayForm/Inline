import type { Type } from "./Option/Index.js";

import type { AstroIntegration } from "astro";
import type { Action, Path } from "files-pipe";

import Files, { Apply, Merge } from "files-pipe";

import { fileURLToPath as __Path } from "url";
// @ts-ignore
import Critters from "critters";

export const Default = await import("./Option/Index.js");

export default (_Option: Type = {}): AstroIntegration => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option as keyof typeof Default];
		}
	}

	const __Option = Merge(Default, _Option);

	const Paths = new Set<Path>();

	if (typeof __Option["Path"] !== "undefined") {
		if (
			__Option["Path"] instanceof Array ||
			__Option["Path"] instanceof Set
		) {
			for (const Path of __Option["Path"]) {
				Paths.add(Path);
			}
		}
	}

	return {
		name: "astro-critters",
		hooks: {
			"astro:build:done": async ({ dir: Dir }) => {
				if (!Paths.size) {
					Paths.add(Dir);
				}

				if (!__Option["Critters"]) {
					return;
				}

				for (const Path of Paths) {
					const _Path = await Apply(
						(_URL: URL | string) =>
							_URL instanceof URL ? __Path(_URL) : _URL,
						Path
					);

					await (
						await (
							await (
								await new Files(
									__Option["Cache"],
									__Option["Logger"]
								).In(Path)
							).By("**/*.html")
						).Not(__Option["Exclude"])
					).Pipe(
						Merge(Default["Action"], {
							Wrote: async (On) =>
								new Critters(
									Merge(__Option["Critters"], {
										path:
											_Path instanceof Map
												? _Path.keys().next().value
												: _Path,
										logLevel: (() => {
											switch (__Option["Logger"]) {
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
									} satisfies Type["Critters"]) as Type["Critters"]
								).process(On.Buffer.toString()),
						} satisfies Action) as Action
					);
				}
			},
		},
	};
};
