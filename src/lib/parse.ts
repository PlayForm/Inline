import FastGlob from "fast-glob";
import fs from "fs";

export default async (
	glob: string,
	debug: number = 2,
	type: string = "",
	write: (data: string) => any = async (data) => data,
	read: (file: string) => any = async (file) =>
		await fs.promises.readFile(file, "utf-8")
) => {
	const files = await FastGlob(glob);

	const inlines = {
		files: 0,
		total: 0,
	};

	for (const file of files) {
		try {
			const writeBuffer = await write(await read(file));

			if (!writeBuffer) {
				continue;
			}

			await fs.promises.writeFile(file, writeBuffer, "utf-8");

			inlines.files++;
		} catch (error) {
			console.log("Error: Cannot inline file " + file + "!");
		}
	}

	if (debug > 0 && inlines.files > 0) {
		console.info(
			"\u001b[32mSuccessfully inlined a total of " +
				inlines.files +
				" " +
				type.toUpperCase() +
				" " +
				(inlines.files === 1 ? "file" : "files") +
				".\u001b[39m"
		);
	}
};
