import type Option from "@playform/pipe/Target/Interface/Option.js";
import type Critters from "../Interface/Critters.js";
/**
 * @module Option
 *
 */
export default interface Interface extends Option {
    Critters?: boolean | Critters;
}
