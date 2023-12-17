// @ts-ignore
import __Critters from "critters";

/**
 * @module Integration
 *
 */
export default (((...[_Option = {}]: Parameters<Type>) => {
	Object.entries(_Option).forEach(([Key, Value]) =>
		Object.defineProperty(_Option, Key, {
			value:
				Value === true
					? Default[Key as keyof typeof Default]
					: _Option[Key as keyof typeof _Option],
		}),
	);

	const { Action, Cache, Critters, Exclude, Logger, Path } = Merge(
		Default,
		_Option,
	);

	const Paths = new Set<Path>();

	if (typeof Path !== "undefined") {
		if (Array.isArray(Path) || Path instanceof Set) {
			for (const _Path of Path) {
				Paths.add(_Path);
			}
		}
	}

	return {
		name: "astro-critters",
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

				for (const Path of Paths) {
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
						}),
					);

					await (
						await (
							await (
								await new (
									await import("files-pipe")
								).default(Cache, Logger).In(Path)
							).By("**/*.html")
						).Not(Exclude)
					).Pipe(
						Merge(Action, {
							Wrote: async ({ Buffer }) =>
								_Critters.process(Buffer.toString()),
						} satisfies Action),
					);
				}
			},
		},
	};
}) satisfies Type as Type);

import type Type from "../Interface/Integration.js";
import type Critters from "../Interface/Critters.js";
import type Action from "files-pipe/Target/Interface/Action.js";
import type Path from "files-pipe/Target/Type/Path.js";

export const { default: Default } = await import("../Variable/Option.js");

export const {
	default: { Cache: { Search } },
} = await import("files-pipe/Target/Variable/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);
