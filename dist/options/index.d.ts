import type { CRITTERS } from "./critters.js";
import type { Options as OptionsBase } from "files-pipe/dist/options/index.js";
export interface Options extends OptionsBase {
    [key: string]: unknown;
    critters?: boolean | CRITTERS;
}
declare const _default: Options;
export default _default;
