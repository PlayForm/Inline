/**
 * @module Integration
 *
 */
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
export declare const Default: Omit<{} & {
    File: string;
    Cache: {
        Search: string;
        Folder: string;
    };
    Logger: number;
    Action: Omit<{} & {
        Accomplished: boolean;
        Changed: (e: any) => Promise<any>;
        Failed: (On: any) => Promise<string>;
        Fulfilled: ({ File }: {
            File: any;
        }) => Promise<string | false>;
        Passed: (e: any) => Promise<any>;
        Read: ({ Input: e }: {
            Input: any;
        }) => Promise<string>;
        Wrote: ({ Buffer: e }: {
            Buffer: any;
        }) => Promise<any>;
    }, "__proto__">;
    Critters: {
        preload: "media";
        inlineFonts: true;
        compress: true;
        pruneSource: true;
    };
    Path: string;
    Exclude: boolean;
}, "__proto__">;
export declare const Search: string;
export declare const Merge: import("../Interface/Merge.js").default<import("../Interface/Merge.js").Generic>;
