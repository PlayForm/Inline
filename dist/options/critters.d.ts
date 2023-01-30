import type { Options as CrittersOptions } from "critters";
export interface CRITTERS extends CrittersOptions {
    [key: string]: any;
}
declare const _default: {
    preload: string;
    inlineFonts: boolean;
    compress: boolean;
    pruneSource: boolean;
};
export default _default;
