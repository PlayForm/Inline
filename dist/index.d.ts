import * as Critters from "critters";
import type { AstroIntegration } from "astro";
export interface Options extends Critters.Options {
}
export default function createPlugin(critterOptions?: Options): AstroIntegration;
