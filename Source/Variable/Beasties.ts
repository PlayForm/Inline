import type Interface from "../Interface/Beasties.js";

/**
 * @module Beasties
 *
 */
export default {
	preload: "media",
	inlineFonts: true,
	compress: true,
	pruneSource: true,
	reduceInlineStyles: false,
	external: true
} satisfies Interface as Interface;
