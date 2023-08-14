import type { Option as _Option } from "files-pipe/Target/Option/Index.js";
import type { Critters } from "./Critters.js";
export interface Option extends _Option {
    [key: string]: any;
    Critters?: boolean | Critters;
}
declare const _default: Option;
export default _default;
