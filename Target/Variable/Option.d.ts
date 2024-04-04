/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
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
        Read: ({ Input }: any) => Promise<string>;
        Wrote: ({ Buffer }: any) => Promise<any>;
        Passed: (On: any) => Promise<true>;
        Changed: (Plan: any) => Promise<any>;
    }, "__proto__">;
    Exclude: false;
}, "__proto__">;
export default _default;
