import{r as t,h as s}from"./p-ac3aee25.js";import{u as e}from"./p-8bc8fc2e.js";import{U as i}from"./p-270d5dc7.js";const c=class{constructor(s){t(this,s)}render(){const t=this.selected?JSON.parse(this.selected):{},e=Object.assign({role:"option","data-value":this.dataValue},t.value===this.dataValue?{"aria-selected":!0}:{});return i(s("uni-list-item",Object.assign({},e,{class:{"mdc-list-item":!0,"mdc-list-item--selected":t.value===this.dataValue}}),s("slot",null)))}componentDidLoad(){e("uni-select-list-item","confirm")}};export{c as uni_select_list_item}