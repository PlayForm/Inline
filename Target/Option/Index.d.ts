import type { Type as Critters } from "./Critters.js";
import type { Option as _Option } from "files-pipe";
export default interface Type extends _Option {
    [key: string]: any;
    Critters?: boolean | Critters;
}
declare const _default: any;
export default _default;
