/**
 * @module Critters
 *
 */
export default interface Interface {
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
import type Logger from "../Interface/Logger.js";
