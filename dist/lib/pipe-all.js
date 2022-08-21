import p from"critters";import i from"./parse.js";var e=async t=>{const o=new p(t);await i(`${t.path}**/*.html`,async r=>await o.process(r))};export{e as default};
