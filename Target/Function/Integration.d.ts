/**
 * @module Integration
 *
 */
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
export declare const Default: {
    Critters: import("../Interface/Critters.js").default;
    Action: {
        Failed: (On: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Accomplished: false;
    };
};
export declare const Search: any;
export declare const Merge: import("../Interface/Merge.js").default<import("../Interface/Merge.js").Generic>;
