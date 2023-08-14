import type { Options as OptionsBase } from "files-pipe/Target/Option/Index.js";
import type { Critters } from "./Critters.js";
export interface Options extends OptionsBase {
    [key: string]: any;
    Critters?: boolean | Critters;
}
declare const _default: Options;
export default _default;
