import{r as t,h as s}from"./p-e1afa34d.js";import{u as i}from"./p-78249524.js";import{U as e}from"./p-cf0d344f.js";const o=class{constructor(s){t(this,s)}render(){const t=this.selected?JSON.parse(this.selected):{},i=Object.assign({role:"option","data-value":this.dataValue},t.value===this.dataValue?{"aria-selected":!0}:{});return e(s("uni-list-item-mat",Object.assign({},i,{class:{"mdc-list-item":!0,"mdc-list-item--selected":t.value===this.dataValue}}),s("slot",null)))}componentDidLoad(){i("uni-select-list-item-mat","confirm")}};export{o as uni_select_list_item_mat}