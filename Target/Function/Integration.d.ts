/**
 * @module Integration
 *
 */
<<<<<<< HEAD
declare const _default: (Option: import("../Interface/Option.js").default) => {
    name: string;
    hooks: {
        "astro:build:done": ({ dir }: {
            pages: {
                pathname: string;
            }[];
            dir: URL;
            routes: import("astro").RouteData[];
            logger: import("astro").AstroIntegrationLogger;
            cacheManifest: boolean;
        }) => Promise<void>;
    };
};
export default _default;
=======
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
>>>>>>> aec050d3ae91d44fb4154a86e5cc4ee92e348712
export declare const Default: Omit<{} & {
    Critters: {
        preload: "media";
        inlineFonts: true;
        compress: true;
        pruneSource: true;
    };
    File: string;
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: Omit<{} & {
        Accomplished: false;
        Failed: (On: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Read: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<import("@playform/pipe/Target/Type/Buffer.js").Type>;
        Passed: (On: import("@playform/pipe/Target/Interface/File.js").default) => Promise<true>;
        Changed: (Plan: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<import("@playform/pipe/Target/Interface/Plan.js").default>;
    }, "__proto__">;
    Exclude: false;
}, "__proto__">;
export declare const Search: string;
export declare const Merge: import("../Interface/Merge.js").default<import("../Interface/Merge.js").Generic>;
