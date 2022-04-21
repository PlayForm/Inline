var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import * as Critters from "critters";
import { writeFileSync } from "fs";
function createPlugin(critterOptions = {}) {
  return {
    name: "astro-critters",
    hooks: {
      "astro:build:done": async (options) => {
        const defaultOptions = __spreadValues({
          path: "./dist/"
        }, critterOptions);
        const critters = new Critters.default(defaultOptions);
        const files = options.pages.map((page) => defaultOptions.path + (page.pathname !== "404/" ? `${page.pathname}index.html` : "404.html"));
        for (const file of files) {
          const html = await critters.readFile(file);
          const inlined = await critters.process(html);
          writeFileSync(file, inlined, "utf-8");
        }
      }
    }
  };
}
export {
  createPlugin as default
};
