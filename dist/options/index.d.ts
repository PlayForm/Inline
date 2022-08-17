import { Options as CritterOptions } from "critters";
export interface Options extends CritterOptions {
    [key: string]: any;
    /**
     * Astro build path.
     * @default "./dist/"
     */
    path?: string;
}
declare const _default: Options;
export default _default;
