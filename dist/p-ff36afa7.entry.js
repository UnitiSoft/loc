import{r as a,c as i,g as s}from"./p-e1afa34d.js";import{u as t}from"./p-78249524.js";import"./p-cf0d344f.js";import{U as r}from"./p-3ab2be91.js";const o=class{constructor(s){a(this,s),this.uniDialogContainerMatInitialized=i(this,"uniDialogContainerMatInitialized",7)}componentDidLoad(){t("uni-dialog-container-mat","default"),this.uniDialogContainerMatInitialized.emit(this.el)}render(){return r({classes:{"mdc-dialog__container":!0}})}get el(){return s(this)}},e=class{constructor(i){a(this,i)}render(){return r({classes:{"mdc-dialog__scrim":!0}})}componentDidLoad(){t("uni-dialog-scrim-mat","defer")}},d=class{constructor(i){a(this,i),this.role="dialog",this.modal="true",this.labelled="uni-dialog-title",this.described="uni-dialog-content"}render(){const{role:a,modal:i,labelled:s,described:t}=this;return r({props:{role:a,"aria-modal":i,"aria-labelledby":s,"aria-describedby":t},classes:{"mdc-dialog__surface":!0}})}componentDidLoad(){t("uni-dialog-surface-mat","header")}};export{o as uni_dialog_container_mat,e as uni_dialog_scrim_mat,d as uni_dialog_surface_mat}