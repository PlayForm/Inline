import fs from "fs";
import Critters from "critters";
function createPlugin(integrationOptions = {}) {
  var _a;
  const defaultOptions = {
    path: "./dist/"
  };
  const options = Object.assign(defaultOptions, integrationOptions || {});
  options.path = ((_a = options.path) == null ? void 0 : _a.endsWith("/")) ? options.path : `${options.path}/`;
  const critters = new Critters(options);
  return {
    name: "astro-critters",
    hooks: {
      "astro:build:done": async ({ pages }) => {
        const files = pages.map((page) => {
          const pathname = page.pathname.endsWith("/") ? page.pathname : page.pathname + "/";
          const file = pathname === "404/" ? "404.html" : `${pathname}index.html`;
          return options.path + file;
        });
        for (const file of files) {
          const html = await critters.readFile(file);
          const inlined = await critters.process(html);
          await fs.promises.writeFile(file, inlined, "utf-8");
        }
      }
    }
  };
}
export {
  createPlugin as default
};
