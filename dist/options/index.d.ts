import type { Options as OptionsBase } from "files-pipe/dist/options/Index.js";
import type { CRITTERS } from "./Critters.js";
export interface Options extends OptionsBase {
    [key: string]: any;
    critters?: boolean | CRITTERS;
}
declare const _default: Options;
export default _default;
