import FastGlob from "fast-glob";
import * as fs from "fs";
import type { Options } from "../options/index.js";

export default async (
	glob: string,
	debug: number = 2,
	type: string = "",
	exclude: Options["exclude"],
	// rome-ignore lint:
	write: (data: string) => any = async (data) => data,
	// rome-ignore lint:
	read: (file: string) => any = async (file) =>
		await fs.promises.readFile(file, "utf-8")
) => {
	const files = await FastGlob(glob);

	const inlines = {
		files: 0,
		total: 0,
	};

	let filters = new Set();

	if (typeof exclude !== "undefined") {
		if (exclude instanceof Array || exclude instanceof Set) {
			for (const excludes of exclude) {
				filters.add(excludes);
			}
		} else {
			filters.add(exclude);
		}
	}

	for (const filter of filters) {
		if (typeof filter === "string") {
			for (const file of files) {
				if (file.match(filter)) {
					files.splice(files.indexOf(file), 1);
				}
			}
		}

		if (typeof filter === "function") {
			for (const file of files) {
				if (filter(file)) {
					files.splice(files.indexOf(file), 1);
				}
			}
		}
	}

	for (const file of files) {
		try {
			const writeBuffer = await write(await read(file));

			if (!writeBuffer) {
				continue;
			}

			await fs.promises.writeFile(file, writeBuffer, "utf-8");

			inlines.files++;
		} catch (_error) {
			console.log(`Error: Cannot inline file ${file}!`);
		}
	}

	if (debug > 0 && inlines.files > 0) {
		console.info(
			`\u001b[32mSuccessfully inlined a total of ${
				inlines.files
			} ${type.toUpperCase()} ${
				inlines.files === 1 ? "file" : "files"
			}.\u001b[39m`
		);
	}
};
