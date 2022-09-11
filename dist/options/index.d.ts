import type { Options as CrittersOptions } from "critters";
export interface Options {
    [key: string]: any;
    path?: string;
    critters?: boolean | CrittersOptions;
    logger?: number;
}
declare const _default: () => Options;
export default _default;
