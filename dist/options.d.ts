import type { Options as CritterOptions } from "critters";
export interface Options {
    critters?: boolean | CritterOptions;
    removeExternalStylesheets: boolean;
    path?: string | Array<string>;
    exclude?: Array<string>;
    logger?: Number;
}
declare const _default: Options;
export default _default;
