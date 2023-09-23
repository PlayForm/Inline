import type { Type as Critters } from "./Critters.js";
import type { Option as _Option } from "files-pipe";
export interface Type extends _Option {
    [key: string]: any;
    Critters?: boolean | Critters;
}
declare const _default: Omit<{} & {
    Critters: {
        preload: string;
        inlineFonts: boolean;
        compress: boolean;
        pruneSource: boolean;
    };
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Action: Omit<{} & {
        Accomplished: false;
        Read: (On: import("files-pipe").File) => Promise<string>;
        Wrote: (On: import("files-pipe").File) => Promise<import("files-pipe").Buffer>;
        Passed: (On: import("files-pipe").File) => Promise<boolean>;
        Failed: (On: import("files-pipe").File) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").Type) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").Type) => Promise<import("files-pipe/Target/Interface/Plan.js").Type>;
    }, "__proto__">;
    Logger: 2;
}, "__proto__">;
export default _default;
