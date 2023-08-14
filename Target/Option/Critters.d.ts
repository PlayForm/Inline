import type { Options } from "critters";
export interface Critters extends Options {
    [key: string]: any;
}
declare const _default: {
    preload: string;
    inlineFonts: boolean;
    compress: boolean;
    pruneSource: boolean;
};
export default _default;
