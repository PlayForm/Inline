import type { Options as Option } from "critters";
export default interface Type extends Option {
    [key: string]: any;
}
declare const _default: {
    preload: string;
    inlineFonts: boolean;
    compress: boolean;
    pruneSource: boolean;
};
export default _default;
