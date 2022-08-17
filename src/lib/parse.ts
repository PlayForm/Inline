import FastGlob from "fast-glob";
import fs from "fs";

/**
 * It takes a glob, a write function, and a read function, and then it parses all the files in the glob
 * with the write function, and then it writes the result to the file
 * @param {string} glob - The glob pattern to match files.
 * @param write - (data: string) => Promise<string> = async (data) => data,
 * @param read - (file: string) => Promise<string> = async (file) =>
 */
export default async (
	glob: string,
	write: (data: string) => Promise<string> = async (data) => data,
	read: (file: string) => Promise<string> = async (file) =>
		await fs.promises.readFile(file, "utf-8")
) => {
	const files = await FastGlob(glob);

	for (const file of files) {
		try {
			const writeBuffer = await write(await read(file));

			if (!writeBuffer) {
				continue;
			}

			await fs.promises.writeFile(file, writeBuffer, "utf-8");
		} catch (error) {
			console.log("Error: Cannot inline file " + file + " CSS!");
		}
	}
};
