import type { Options } from "beasties";
import type Logger from "./Logger.js";
/**
 * @module Beasties
 *
 */
export default interface Interface extends Options {
    path?: string;
    publicPath?: string;
    external?: boolean;
    inlineThreshold?: number;
    minimumExternalSize?: number;
    pruneSource?: boolean;
    mergeStylesheets?: boolean;
    additionalStylesheets?: string[];
    preload?: "body" | "media" | "swap" | "js" | "js-lazy";
    noscriptFallback?: boolean;
    inlineFonts?: boolean;
    preloadFonts?: boolean;
    fonts?: boolean;
    keyframes?: string;
    compress?: boolean;
    logLevel?: "info" | "warn" | "error" | "trace" | "debug" | "silent";
    reduceInlineStyles?: boolean;
    logger?: Logger;
}
