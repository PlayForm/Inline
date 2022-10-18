import e from "critters";
import i from "./parse.js";
var f=async(t,o=2)=>{for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)){const r=t[a];if(!r)continue;switch(a){case"critters":await i(`${t.path}**/*.html`,o,"html",async p=>(r.path=r.path?r.path:t.path,await new e(r).process(p)));break;default:break}}};export { f as default };

