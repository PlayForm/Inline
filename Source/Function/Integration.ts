/**
 * @module Integration
 *
 */
export default ((...[_Option = {}]: Parameters<Type>) => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option as keyof typeof Default];
		}
	}

	const { Action, Cache, Critters, Exclude, Logger, Path } = Merge(
		Default,
		_Option
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
					await (
						await (
							await (
								await new (await import("files-pipe")).default(
									Cache,
									Logger
								).In(Path)
							).By("**/*.html")
						).Not(Exclude)
					).Pipe(
						Merge(Action, {
							Wrote: async ({ Buffer }) =>
								new _Critters(
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
								).process(Buffer.toString()),
						} satisfies Action)
					);
				}
			},
		},
	};
}) satisfies Type as Type;

import type Type from "../Interface/Integration.js";

import type Action from "files-pipe/Target/Interface/Action.js";
import type Path from "files-pipe/Target/Type/Path.js";

export const { default: Default } = await import("../Variable/Option.js");

export const {
	default: {
		Cache: { Search },
	},
} = await import("files-pipe/Target/Variable/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);

// @ts-expect-error
export const { default: _Critters } = await import("critters");
