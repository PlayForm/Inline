/**
 * It takes a glob, a write function, and a read function, and then it parses all the files in the glob
 * with the write function, and then it writes the result to the file
 * @param {string} glob - The glob pattern to match files.
 * @param write - (data: string) => Promise<string> = async (data) => data,
 * @param read - (file: string) => Promise<string> = async (file) =>
 */
declare const _default: (glob: string, write?: (data: string) => Promise<string>, read?: (file: string) => Promise<string>) => Promise<void>;
export default _default;
