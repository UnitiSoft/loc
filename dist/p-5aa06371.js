import{r as s,c as t,h as a,g as i}from"./p-ac3aee25.js";import{u as r}from"./p-8bc8fc2e.js";import{U as e}from"./p-69a7b0e9.js";import{u as o,a as c}from"./p-6e73b092.js";const l=class{constructor(a){s(this,a),this.uniTabsInitialized=t(this,"uniTabsInitialized",7),this.noScroll=!1}tabsScrollerListen(){this.entity=o(this.el),this.uniTabsInitialized.emit(this.entity)}render(){const s=c(),t=this.noScroll?a("slot",null):a("uni-tabs-scroller",null,a("slot",null));return e({classes:s},t)}componentDidLoad(){r("uni-tabs","destroy")}get el(){return i(this)}};l.style=".mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}";export{l as U}