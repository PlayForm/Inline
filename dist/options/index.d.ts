import type { Options as CrittersOptions } from "critters";
export declare type excludeFn = (file: string) => boolean;
export interface Options {
    [key: string]: any;
    path?: string;
    exclude?: string | RegExp | excludeFn | [string] | [RegExp] | [excludeFn];
    critters?: boolean | CrittersOptions;
    logger?: number;
}
declare const _default: () => Options;
export default _default;
