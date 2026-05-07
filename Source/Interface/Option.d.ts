import type Option from "@playform/pipe/Target/Interface/Option.js";
import type Beasties from "./Beasties.js";
/**
 * @module Option
 *
 */
export default interface Interface extends Option {
    Beasties?: boolean | Beasties;
}
