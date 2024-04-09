// @ts-ignore
import __Critters from "critters";

/**
 * @module Integration
 *
 */
export default ((...[_Option = {}]: Parameters<Interface>) => {
	Object.entries(_Option).forEach(([Key, Value]) =>
		Object.defineProperty(_Option, Key, {
			value:
				Value === true
					? Default[Key as keyof typeof Default]
					: _Option[Key as keyof typeof _Option],
		})
	);

	const { Action, Cache, Critters, Exclude, Logger, Path } = Merge(
		Default,
		_Option
	);

	const Paths = new Set<Path>();

	if (typeof Path !== "undefined") {
		if (Array.isArray(Path) || Path instanceof Set) {
			Path.forEach((Path) => Paths.add(Path));
		}
	}

	return {
		name: "@playform/inline",
		hooks: {
			"astro:build:done": async ({ dir }) => {
				if (!Paths.size) {
					Paths.add(dir);
				}

				if (typeof Cache === "object" && Cache.Search === Search) {
					Cache.Search = dir;
				}

				if (!Critters) {
					return;
				}

				for (let Path of Paths) {
					Path = await (
						await import("@playform/pipe/Target/Function/Apply.js")
					).default(
						async (_URL) =>
							_URL instanceof URL
								? (await import("url")).fileURLToPath(_URL)
								: _URL,
						Path
					);

					const _Critters = new __Critters(
						Merge(Critters, {
							path:
								Path instanceof Map
									? Path.keys().next().value
									: Path,
							logLevel: (() => {
								switch (Logger) {
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
						})
					);

					await (
						await (
							await (
								await new (
									await import("@playform/pipe")
								).default(Cache, Logger).In(Path)
							).By("**/*.html")
						).Not(Exclude)
					).Pipe(
						Merge(Action, {
							Wrote: async ({ Buffer }) =>
								_Critters.process(Buffer.toString()),
						} satisfies Action)
					);
				}
			},
		},
	};
}) satisfies Interface as Interface;

import type Action from "@playform/pipe/Target/Interface/Action.js";
import type Path from "@playform/pipe/Target/Type/Path.js";
import type Interface from "@Interface/Integration.js";

export const { default: Default } = await import("@Variable/Option.js");

export const {
	default: {
		Cache: { Search },
	},
} = await import("@playform/pipe/Target/Variable/Option.js");

export const { default: Merge } = await import("@Function/Merge.js");
