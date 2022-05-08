import { Options as CritterOptions } from "critters";
export default interface Options extends CritterOptions {
    /**
     * Astro build path.
     * Default: "./dist/"
     */
    path?: string;
}
