import{pipeline as o}from"@nikolarhristov/pipeline";var r=(t={})=>({name:"astro-critters",hooks:{"astro:build:done":async()=>{await new o(t).critters()}}});export{r as default};
