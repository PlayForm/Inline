import i from"@nikolarhristov/pipeline";var r=(t={})=>({name:"astro-critters",hooks:{"astro:build:done":async()=>{await new i(t).critters()}}});export{r as default};
