
/**
 * @module Critters
*
*/
export default interface Type {
	[key: string]: Value<Type>;
	
	trace?: (message: string) => void;
	debug?: (message: string) => void;
	info?: (message: string) => void;
	warn?: (message: string) => void;
	error?: (message: string) => void;
}

import type Value from "typescript-esbuild/Target/Type/Value.js";
