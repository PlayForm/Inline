/**
 * @module Option
 *
 */
declare const _default: {
    Critters: import("../Interface/Critters.js").default;
    Action: {
        Failed: (On: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Accomplished: false;
    };
};
export default _default;
