import{r as t}from"./p-ac3aee25.js";import{u as a}from"./p-3dded836.js";import{u as i,U as n,a as e,b as s}from"./p-ff94f218.js";const r=class{constructor(a){t(this,a),this.mini=!1,this.round=!1,this.routing=!1,this.route="lang",this.type="memory",this.feature="uni.store",this.separator=".",this.activePath="app.loc.active",this.translatePath="app.loc.translate",this.languages=[]}onList(t){this.languages=[],i(t).then(((t=[])=>{setTimeout((()=>{this.languages=t,this.lang=t.filter((t=>t.lang===this.select))[0]||t[0]}),100)}))}render(){const{feature:t,separator:a,type:i,mini:r,round:o,routing:u,route:m,activePath:h,translatePath:l,languages:c,lang:g}=this;let p;return this.languages.length&&(p=n({type:i,feature:t,separator:a,activePath:h,mini:r,round:o,routing:u,route:m,languages:c,lang:g})),p?e({feature:t,separator:a,type:i,activePath:h,translatePath:l},p):s({})}componentDidLoad(){a("uni-lang-menu-shadow","input"),this.languages.length||this.onList(this.list)}static get watchers(){return{list:["onList"]}}};r.style=".uni-lang-menu .mdc-button{min-width:0}.uni-lang-menu .mdc-button__icon{margin-left:0;margin-right:0!important;width:auto!important}.uni-lang-menu .mdc-button__icon svg{width:auto!important}.uni-lang-menu .mdc-button__label,.uni-lang-menu .mdc-menu-surface uni-render{margin-left:.5em}.uni-lang-menu .mdc-list{padding:0}";export{r as U}