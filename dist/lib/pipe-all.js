import a from"critters";import p from"./parse";var c=async t=>{const r=new a(t);await p(`${t.path}**/*.html`,async o=>await r.process(o))};export{c as default};
