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
    Files: string;
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string[];
    Logger: 2;
    Action: Omit<{} & {
        Accomplished: false;
        Failed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: ({ Files }: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Read: ({ Input }: any) => Promise<string>;
        Wrote: ({ Buffer }: any) => Promise<any>;
        Passed: (On: any) => Promise<true>;
        Changed: (Plan: any) => Promise<any>;
    }, "__proto__">;
    Exclude: false;
}, "__proto__">;
export default _default;
