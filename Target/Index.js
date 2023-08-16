import c from "critters";
import { Files as m } from "files-pipe";
import h from "files-pipe/Target/Library/Apply.js";
import n from "files-pipe/Target/Library/Merge.js";
import { fileURLToPath as p } from "url";
import s from "./Option/Index.js";
var w=(r={})=>{for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&r[e]===!0&&(r[e]=s[e]);const t=n(s,r),i=new Set;if(typeof t.Path<"u"&&(t.Path instanceof Array||t.Path instanceof Set))for(const e of t.Path)i.add(e);return{name:"astro-critters",hooks:{"astro:build:done":async({dir:e})=>{if(i.size||i.add(e),!!t.Critters)for(const f of i){const a=await h(o=>o instanceof URL?p(o):o,f);await(await(await(await new m(t.Logger).In(f)).By("**/*.html")).Not(t.Exclude)).Pipe(n(s.Pipe,{Wrote:async o=>new c(n(t.Critters,{path:a instanceof Map?a.keys().next().value:a,logLevel:(()=>{switch(t.Logger){case 0:return"silent";case 1:return"silent";case 2:return"info";default:return"info"}})()})).process(o.Buffer.toString())}))}}}}};export { w as default };

