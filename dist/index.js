import{pipeline as i}from"files-pipeline";var r=(t={})=>({name:"astro-critters",hooks:{"astro:build:done":async()=>{await new i(t).critters()}}});export{r as default};
