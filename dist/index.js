import * as Critters from "critters";
import fs from "fs";
function createPlugin(critterOptions = {}) {
  const defaultOptions = Object.assign({ path: "./dist/" }, critterOptions || {});
  const critters = new Critters.default(defaultOptions);
  return {
    name: "astro-critters",
    hooks: {
      "astro:build:done": async (options) => {
        const files = options.pages.map((page) => {
          const pathname = page.pathname.endsWith("/") ? page.pathname : page.pathname + "/";
          const file = pathname === "404/" ? "404.html" : `${pathname}index.html`;
          return defaultOptions.path + file;
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
