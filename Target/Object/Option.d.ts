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
        Read: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Interface/Buffer.js").Type>;
        Passed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Failed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<import("files-pipe/Target/Interface/Plan.js").default>;
    }, "__proto__">;
    Logger: 2;
}, "__proto__">;
export default _default;
