import{r as a,g as t}from"./p-ac3aee25.js";import{a as s}from"./p-e87a614e.js";import{u as e}from"./p-495ffa9e.js";import{u as o}from"./p-c50d5ec8.js";function r(a){const{params:t,noParams:o,reload:r}=this,i=new URLSearchParams(window.top.location.search),n=new URLSearchParams(t);a&&!r&&a.preventDefault(),s(t)&&n.forEach(((a,t)=>{i.set(t,a)})),s(o)&&o.split("&").forEach((a=>{i.delete(a)}));const c=window.top.location,p=c.search.includes("?")?c.search:`?${c.search}`,h=`${[...i.keys()].length>0?"?":""}${i.toString()}`,w=e(this,"a","href");w===c.href&&p===`?${i.toString()}`||(window.top.history.pushState({},"",`${w||c.href}${h}`),window.top.dispatchEvent(new PopStateEvent("popstate",{state:{href:w}})))}const i=class{constructor(t){a(this,t),this.reload=!1,this.bindStart="{{",this.bindEnd="}}"}connectedCallback(){this.el.addEventListener("click",r)}componentDidLoad(){o("uni-router-link-wrap","while")}disconnectedCallback(){this.el.removeEventListener("click",r)}get el(){return t(this)}};export{i as uni_router_link_wrap}