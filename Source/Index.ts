import type Option from "./Interface/Option.js";

import type Action from "files-pipe/Target/Interface/Action.js";
import type Path from "files-pipe/Target/Interface/Path.js";

import type { AstroIntegration } from "astro";

export const { default: Default } = await import("./Object/Option.js");

export const { default: Merge } = await import(
	"files-pipe/Target/Function/Merge.js"
);

export default (_Option: Option = {}): AstroIntegration => {
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
					const _Path = await (
						await import("files-pipe/Target/Function/Apply.js")
					).default(
						async (_URL: URL | string) =>
							_URL instanceof URL
								? (await import("url")).fileURLToPath(_URL)
								: _URL,
						Path
					);

					await (
						await (
							await (
								await new (await import("files-pipe")).default(
									__Option["Cache"],
									__Option["Logger"]
								).In(Path)
							).By("**/*.html")
						).Not(__Option["Exclude"])
					).Pipe(
						Merge(Default["Action"], {
							Wrote: async (On) =>
								// @ts-expect-error
								new (await import("critters"))(
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
									} satisfies Option["Critters"]) as Option["Critters"]
								).process(On.Buffer.toString()),
						} satisfies Action) as Action
					);
				}
			},
		},
	};
};
