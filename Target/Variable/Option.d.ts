/**
 * @module Option
 *
 */
declare const _default: {
    Critters: import("../Interface/Critters.js").default;
    Action: {
        Failed: (On: any) => Promise<string>;
        Fulfilled: ({ File }: {
            File: any;
        }) => Promise<string | false>;
        Accomplished: boolean;
    };
};
export default _default;
