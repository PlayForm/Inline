import { Options as CritterOptions } from "critters";
export default interface Options extends CritterOptions {
    [key: string]: any;
    /**
     * Astro build path.
     * @default "./dist/"
     */
    path?: string;
}
