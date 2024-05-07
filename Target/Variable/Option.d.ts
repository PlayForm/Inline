/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
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
export default _default;
