// @ts-nocheck
import type { Options as CritterOptions } from "critters";

export interface Options {
	critters?: boolean | CritterOptions;
	removeExternalStylesheets: boolean;
	path?: string | Array<string>;
	exclude?: Array<string>;
	logger?: Number;
}

export default {
	critters: undefined,
	removeExternalStylesheets: false,
	path: undefined,
	exclude: [],
	logger: 2,
} as Options;
