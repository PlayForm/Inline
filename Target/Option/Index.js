import t from "files-pipe/Target/Library/Merge.js";
import i from "files-pipe/Target/Option/Index.js";
import r from "./Critters.js";
var l=t(i,{Critters:r,Pipe:{Failed:async e=>`Error: Cannot inline file ${e.Input}!`,Fulfilled:async e=>e.Files>0?`Successfully inlined a total of ${e.Files} HTML ${e.Files===1?"file":"files"}.`:!1,Accomplished:!1}});export { l as default };

