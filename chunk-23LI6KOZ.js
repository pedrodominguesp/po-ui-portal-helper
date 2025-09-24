import{o as w,p as We}from"./chunk-QBCDRFNO.js";import{Ba as se,Ca as T,Ea as Ve,Fa as Le,Fb as te,Ga as ce,La as qe,P as ke,R as Oe,Ra as K,Sa as Fe,T as $,V as me,Wa as N,a as re,mb as De,q as pe,sa as de,ta as ee,v as J,yb as y,zb as x}from"./chunk-3RSXW52V.js";import{$a as G,Bb as M,Ca as _,Cc as V,Dc as W,Ec as U,Fc as q,Ga as H,Gc as Q,Jc as we,Ka as o,Kb as X,Kc as _e,L as Se,La as e,M as ie,Ma as l,Ob as ye,Oc as Pe,P as O,Qa as B,Ra as S,Sa as le,T as u,Tc as Me,U as b,Va as Ee,Vc as Te,Xc as ge,Za as I,Zb as Z,_a as A,ab as j,bb as t,cb as ne,db as v,fb as g,gb as h,hb as f,ia as r,ib as Ce,ja as ue,jb as be,kb as P,lb as ve,pa as E,qa as ae,qb as z,rb as R,va as F,za as s,zc as xe}from"./chunk-4WWO4UYO.js";var ot=()=>({value:"Option 1"}),nt=()=>({value:"Option 2"}),it=(a,L)=>[a,L],Ne=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&l(0,"po-combo",0),p&2&&s("p-options",ve(3,it,be(1,ot),be(2,nt)))},dependencies:[T],encapsulation:2})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo Basic"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),e(),o(13,"pre",7),t(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),e(),o(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-basic"),e(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,lt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Ne],encapsulation:2})}return a})();var Be=(()=>{class a{additionalHelpTooltip;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.additionalHelpTooltip="",this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium"}insertGroupIntoSelectInput(d){this.selectedOptionsGroup=d,this.optionsGroupList=[...this.optionsGroupList,{label:d,value:d}]}verifyOptionObject(d,p,n){let{label:m,value:c}=p;if(n){let i=d.findIndex(fe=>fe.label===n&&"options"in fe);return i===-1?(this.insertGroupIntoSelectInput(n),[...d,{label:n,options:[{label:m,value:c}]}]):(d[i].options.push({label:m,value:c}),d)}return[...d,{label:m,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs"]],standalone:!1,decls:44,vars:60,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let m=B();o(0,"po-combo",2),f("ngModelChange",function(i){return u(m),h(n.combo,i)||(n.combo=i),b(i)}),S("p-change",function(){return u(m),b(n.changeEvent("p-change"))})("p-keydown",function(){return u(m),b(n.changeEvent("p-keydown"))}),e(),l(1,"hr"),o(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),o(6,"form",null,0),l(8,"po-divider",6),o(9,"div",3)(10,"po-switch",7),f("ngModelChange",function(i){return u(m),h(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),b(i)}),e(),o(11,"po-select",8),f("ngModelChange",function(i){return u(m),h(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),b(i)}),S("p-change",function(){return u(m),b(n.optionsGroupSelection())}),e(),o(12,"po-input",9),f("ngModelChange",function(i){return u(m),h(n.optionsGroup,i)||(n.optionsGroup=i),b(i)}),e()(),l(13,"po-divider",10),o(14,"div",3)(15,"po-input",11),f("ngModelChange",function(i){return u(m),h(n.option.label,i)||(n.option.label=i),b(i)}),e(),o(16,"po-input",12),f("ngModelChange",function(i){return u(m),h(n.option.value,i)||(n.option.value=i),b(i)}),e()(),o(17,"div",3)(18,"po-button",13),S("p-click",function(){return u(m),b(n.addOption())}),e()()(),l(19,"hr"),o(20,"form",null,1)(22,"po-input",14),f("ngModelChange",function(i){return u(m),h(n.label,i)||(n.label=i),b(i)}),e(),o(23,"po-input",15),f("ngModelChange",function(i){return u(m),h(n.help,i)||(n.help=i),b(i)}),e(),o(24,"po-input",16),f("ngModelChange",function(i){return u(m),h(n.additionalHelpTooltip,i)||(n.additionalHelpTooltip=i),b(i)}),e(),o(25,"po-input",17),f("ngModelChange",function(i){return u(m),h(n.placeholder,i)||(n.placeholder=i),b(i)}),e(),o(26,"po-input",18),f("ngModelChange",function(i){return u(m),h(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),b(i)}),e(),o(27,"div",3)(28,"po-checkbox-group",19),f("ngModelChange",function(i){return u(m),h(n.properties,i)||(n.properties=i),b(i)}),e(),o(29,"po-radio-group",20),f("ngModelChange",function(i){return u(m),h(n.icon,i)||(n.icon=i),b(i)}),e(),o(30,"po-radio-group",21),f("ngModelChange",function(i){return u(m),h(n.filterMode,i)||(n.filterMode=i),b(i)}),e(),o(31,"po-radio-group",22),f("ngModelChange",function(i){return u(m),h(n.size,i)||(n.size=i),b(i)}),e(),o(32,"po-radio-group",23),f("ngModelChange",function(i){return u(m),h(n.listboxPosition,i)||(n.listboxPosition=i),b(i)}),e()(),o(33,"div",3)(34,"po-input",24),f("ngModelChange",function(i){return u(m),h(n.filterService,i)||(n.filterService=i),b(i)}),e(),o(35,"po-input",25),f("ngModelChange",function(i){return u(m),h(n.literals,i)||(n.literals=i),b(i)}),S("p-change",function(){return u(m),b(n.changeLiterals())}),e()(),o(36,"div",3)(37,"po-input",26),f("ngModelChange",function(i){return u(m),h(n.fieldValue,i)||(n.fieldValue=i),b(i)}),e(),o(38,"po-input",27),f("ngModelChange",function(i){return u(m),h(n.fieldLabel,i)||(n.fieldLabel=i),b(i)}),e()(),o(39,"div",3)(40,"po-number",28),f("ngModelChange",function(i){return u(m),h(n.debounceTime,i)||(n.debounceTime=i),b(i)}),e(),o(41,"po-number",29),f("ngModelChange",function(i){return u(m),h(n.filterMinlength,i)||(n.filterMinlength=i),b(i)}),e()(),o(42,"div",3)(43,"po-button",30),S("p-click",function(){return u(m),b(n.restore())}),e()()()}if(p&2){let m=j(7);g("ngModel",n.combo),s("p-additional-help-tooltip",n.additionalHelpTooltip)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-listbox-control-position",n.listboxPosition),r(3),s("p-value",n.combo),r(),s("p-value",n.event),r(6),g("ngModel",n.comboOptionGroupSwitch),r(),g("ngModel",n.selectedOptionsGroup),s("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),r(),g("ngModel",n.optionsGroup),s("p-disabled",!n.comboOptionGroupSwitch),r(3),g("ngModel",n.option.label),r(),g("ngModel",n.option.value),r(2),s("p-disabled",m.form.invalid),r(4),g("ngModel",n.label),r(),g("ngModel",n.help),r(),g("ngModel",n.additionalHelpTooltip),r(),g("ngModel",n.placeholder),r(),g("ngModel",n.fieldErrorMessage),r(2),g("ngModel",n.properties),s("p-options",n.propertiesOptions),r(),g("ngModel",n.icon),s("p-options",n.iconsOptions),r(),g("ngModel",n.filterMode),s("p-options",n.filterModeOptions),r(),g("ngModel",n.size),s("p-options",n.sizeOptions),r(),g("ngModel",n.listboxPosition),s("p-options",n.listboxPositionOptions),r(2),g("ngModel",n.filterService),r(),g("ngModel",n.literals),r(2),g("ngModel",n.fieldValue),r(),g("ngModel",n.fieldLabel),r(2),g("ngModel",n.debounceTime),r(),g("ngModel",n.filterMinlength)}},dependencies:[Q,V,W,q,U,J,re,ke,Oe,T,ce,qe,K,de,N],encapsulation:2})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo Labs"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),e(),o(13,"pre",7),t(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-labs"),e(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,mt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Be],encapsulation:2})}return a})();var he=(()=>{class a{getcities(){return[{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return[{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=Se({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var st=["schedulingForm"];function ct(a,L){if(a&1&&(o(0,"div",3),l(1,"po-avatar",15),o(2,"p",14),t(3),e()()),a&2){let d=le().$implicit,p=le();r(),s("p-src",p.getStateByLabel(d.label)),r(2),ne(d.label)}}function ut(a,L){if(a&1&&(o(0,"div",14),t(1),e()),a&2){let d=le().$implicit;r(),ne(d.label)}}function bt(a,L){if(a&1&&F(0,ct,4,2,"div",3)(1,ut,2,1,"div",14),a&2){let d=L.$implicit;H(d.options?0:1)}}var Ae=(()=>{class a{poNotification=O(ee);schedulingService=O(he);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(d=""){this.poNotification.success(`Great ${d}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(d){return`https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[d]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&I(st,7),p&2){let m;A(m=G())&&(n.form=m.first)}},standalone:!1,features:[Ce([he])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1",2,"background-color","#fbfbfb",3,"p-src"]],template:function(p,n){if(p&1){let m=B();o(0,"div",1)(1,"div",2),t(2,"Pre-appointment scheduling"),e()(),o(3,"form",null,0)(5,"div",3)(6,"po-input",4),f("ngModelChange",function(i){return u(m),h(n.name,i)||(n.name=i),b(i)}),e(),o(7,"po-email",5),f("ngModelChange",function(i){return u(m),h(n.email,i)||(n.email=i),b(i)}),e()(),o(8,"div",3)(9,"po-datepicker",6),f("ngModelChange",function(i){return u(m),h(n.birthday,i)||(n.birthday=i),b(i)}),e(),o(10,"po-input",7),f("ngModelChange",function(i){return u(m),h(n.phone,i)||(n.phone=i),b(i)}),e()(),o(11,"div",3)(12,"po-combo",8),f("ngModelChange",function(i){return u(m),h(n.city,i)||(n.city=i),b(i)}),F(13,bt,2,1,"ng-template",9),e(),o(14,"po-select",10),f("ngModelChange",function(i){return u(m),h(n.typeScheduling,i)||(n.typeScheduling=i),b(i)}),e(),o(15,"po-combo",11),f("ngModelChange",function(i){return u(m),h(n.medicalSpecialty,i)||(n.medicalSpecialty=i),b(i)}),e()(),o(16,"div",3)(17,"po-textarea",12),f("ngModelChange",function(i){return u(m),h(n.informations,i)||(n.informations=i),b(i)}),e()(),o(18,"div",3)(19,"po-button",13),S("p-click",function(){return u(m),b(n.confirmPreAppointment(n.name))}),e()()()}if(p&2){let m=j(4);r(6),g("ngModel",n.name),r(),g("ngModel",n.email),r(2),g("ngModel",n.birthday),r(),g("ngModel",n.phone),r(2),g("ngModel",n.city),s("p-options",n.citiesOptions),r(2),g("ngModel",n.typeScheduling),s("p-options",n.typeSchedulings),r(),g("ngModel",n.medicalSpecialty),s("p-options",n.medicalSpecialtyOptions),r(2),g("ngModel",n.informations),r(2),s("p-disabled",m.invalid)}},dependencies:[Q,V,W,q,U,pe,J,$,T,se,Le,ce,K,Fe],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),Ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Scheduling"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        @if (option.options) {
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1"
              p-size="xs"
              style="background-color: #fbfbfb"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        }
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  providers: [SamplePoComboSchedulingService],
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private schedulingService = inject(SamplePoComboSchedulingService);

  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),e(),o(21,"label",6),t(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),e(),o(23,"pre",9),t(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),e()()()()(),o(25,"div",10),l(26,"sample-po-combo-scheduling"),e(),l(27,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,ht,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Ae],encapsulation:2})}return a})();var St=["transferForm"];function Et(a,L){if(a&1&&(o(0,"div",3),l(1,"po-avatar",15),o(2,"div",16)(3,"div",17),t(4),e(),o(5,"div",18),t(6),e()()()),a&2){let d=L.$implicit;r(4),ne(d.label),r(2),v("Account: ",d.value,"")}}var je=(()=>{class a{poNotification=O(ee);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&(I(St,7),I(me,7)),p&2){let m;A(m=G())&&(n.form=m.first),A(m=G())&&(n.poModal=m.first)}},standalone:!1,decls:23,vars:14,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let m=B();o(0,"div",1)(1,"div",2),t(2,"Banking Transfer"),e()(),o(3,"form",null,0)(5,"div",3)(6,"po-select",4),f("ngModelChange",function(i){return u(m),h(n.typeAccount,i)||(n.typeAccount=i),b(i)}),e(),o(7,"po-combo",5),f("ngModelChange",function(i){return u(m),h(n.contact,i)||(n.contact=i),b(i)}),F(8,Et,7,2,"ng-template",6),e()(),o(9,"div",3)(10,"po-decimal",7),f("ngModelChange",function(i){return u(m),h(n.value,i)||(n.value=i),b(i)}),e(),o(11,"po-datepicker",8),f("ngModelChange",function(i){return u(m),h(n.dateTransfer,i)||(n.dateTransfer=i),b(i)}),e()(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return u(m),b(n.transfer())}),e()()(),o(14,"po-modal",10)(15,"div",3),l(16,"po-info",11)(17,"po-info",12),e(),l(18,"po-divider"),o(19,"div",3),l(20,"po-info",13)(21,"po-info",14),z(22,"date"),e()()}if(p&2){let m=j(4);r(6),g("ngModel",n.typeAccount),s("p-options",n.typeAccounts),r(),g("ngModel",n.contact),r(3),g("ngModel",n.value),r(),g("ngModel",n.dateTransfer),r(2),s("p-disabled",m.invalid),r(),s("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),r(2),s("p-value",n.typeAccount),r(),s("p-value",n.contact),r(3),s("p-value",n.value),r(),Ee("p-value",R(22,12,n.dateTransfer))}},dependencies:[Q,V,W,q,U,pe,J,re,$,T,se,Ve,K,N,me,ye],encapsulation:2})}return a})();var vt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Banking Transfer"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  standalone: false
})
export class SamplePoComboTransferComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-transfer"),e(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,vt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,je],encapsulation:2})}return a})();function xt(a,L){if(a&1&&(o(0,"div",0),l(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),e()),a&2){let d=L;r(),s("p-value",d.name),r(),s("p-value",d.nickname),r(),s("p-value",d.email)}}var Re=(()=>{class a{http=O(Z);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(d){window.open(`http://google.com/search?q=${d}`,"_blank")}onChangeHero(d){this.hero$=this.getHero(d)}getHero(d){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${d}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore(n.heroName)}),o(2,"po-combo",2),f("ngModelChange",function(c){return h(n.heroName,c)||(n.heroName=c),c}),S("p-change",function(c){return n.onChangeHero(c)}),e(),F(3,xt,4,3,"div",0),z(4,"async"),e()()),p&2){let m;r(),s("p-primary-label",n.knowMoreLabel),r(),g("ngModel",n.heroName),r(),H((m=R(4,3,n.hero$))?3:-1,m)}},dependencies:[V,q,T,N,te,X],encapsulation:2})}return a})();var _t=a=>({"docs-sample-code-tabs":a}),Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Heroes"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),e(),o(19,"pre",9),t(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  standalone: false
})
export class SamplePoComboHeroesComponent {
  private http = inject(HttpClient);

  hero$: Observable<any>;
  heroName: string;

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes"),e(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,_t,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Re],encapsulation:2})}return a})();function Mt(a,L){if(a&1&&(o(0,"div",0),l(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),e()),a&2){let d=L;r(),s("p-value",d.name),r(),s("p-value",d.nickname),r(),s("p-value",d.email)}}var Qe=(()=>{class a{http=O(Z);formBuilder=O(Pe);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,xe.required]})}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let d=this.form.get("hero").value;window.open(`http://google.com/search?q=${d}`,"_blank")}onChangeHero(d){this.hero$=this.getHero(d)}getHero(d){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${d}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:!1,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore()}),o(2,"div",2)(3,"po-combo",3),S("p-change",function(c){return n.onChangeHero(c)}),e()(),F(4,Mt,4,3,"div",0),z(5,"async"),e()()),p&2){let m;r(),s("p-primary-label",n.knowMoreLabel),r(),s("formGroup",n.form),r(2),H((m=R(5,3,n.hero$))?4:-1,m)}},dependencies:[V,W,we,_e,T,N,te,X],encapsulation:2})}return a})();var kt=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Heroes Reactive Form"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),e(),o(19,"pre",9),t(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(UntypedFormBuilder);

  form: UntypedFormGroup;
  hero$: Observable<any>;

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes-reactive-form"),e(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,kt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Qe],encapsulation:2})}return a})();function Vt(a,L){if(a&1&&(o(0,"div",0),l(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),e()),a&2){let d=L;r(),s("p-value",d.name),r(),s("p-value",d.nickname),r(),s("p-value",d.email)}}var Ke=(()=>{class a{http=O(Z);peopleName;people$;onChangePeople(d){this.people$=this.getPeople(d)}getPeople(d){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${d}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),f("ngModelChange",function(c){return h(n.peopleName,c)||(n.peopleName=c),c}),S("p-change",function(c){return n.onChangePeople(c)}),e(),F(3,Vt,4,3,"div",0),z(4,"async"),e()()),p&2){let m;r(2),g("ngModel",n.peopleName),s("p-infinite-scroll",!0),r(),H((m=R(4,3,n.people$))?3:-1,m)}},dependencies:[V,q,T,N,te,X],encapsulation:2})}return a})();var qt=a=>({"docs-sample-code-tabs":a}),Ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Inifity Scroll"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    @if (people$ | async; as people) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),e(),o(19,"pre",9),t(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  private http = inject(HttpClient);

  peopleName: string;
  people$: Observable<any>;

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-infinity-scroll"),e(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,qt,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Ke],encapsulation:2})}return a})();var Dt=["bookingForm"],Wt=["datepicker"],Xe=(()=>{class a{poNotification=O(ee);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus()}onChangeParams(d){this.filterParams=d?{category:"Luxo"}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&(I(Dt,7),I(Wt,7)),p&2){let m;A(m=G())&&(n.form=m.first),A(m=G())&&(n.datepickerComponent=m.first)}},standalone:!1,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let m=B();o(0,"div",2)(1,"div",3),t(2,"Booking a Hotel"),e()(),o(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),f("ngModelChange",function(i){return u(m),h(n.checkin,i)||(n.checkin=i),b(i)}),e(),o(8,"po-datepicker",6),f("ngModelChange",function(i){return u(m),h(n.checkout,i)||(n.checkout=i),b(i)}),e(),o(9,"po-switch",7),f("ngModelChange",function(i){return u(m),h(n.category,i)||(n.category=i),b(i)}),S("p-change",function(i){return u(m),b(n.onChangeParams(i))}),e()(),o(10,"div",4)(11,"po-select",8),f("ngModelChange",function(i){return u(m),h(n.rooms,i)||(n.rooms=i),b(i)}),e(),o(12,"po-select",9),f("ngModelChange",function(i){return u(m),h(n.children,i)||(n.children=i),b(i)}),e(),o(13,"po-select",10),f("ngModelChange",function(i){return u(m),h(n.adults,i)||(n.adults=i),b(i)}),e()(),o(14,"div",4)(15,"po-combo",11),f("ngModelChange",function(i){return u(m),h(n.hotel,i)||(n.hotel=i),b(i)}),e()(),o(16,"div",4)(17,"po-button",12),S("p-click",function(){return u(m),b(n.booking())}),e()()()}if(p&2){let m=j(4);r(6),g("ngModel",n.checkin),s("p-max-date",n.checkout),r(2),g("ngModel",n.checkout),s("p-min-date",n.checkin),r(),g("ngModel",n.category),r(2),g("ngModel",n.rooms),s("p-options",n.roomsOptions),r(),g("ngModel",n.children),s("p-options",n.childrenOptions),r(),g("ngModel",n.adults),s("p-options",n.adultsOptions),r(2),g("ngModel",n.hotel),s("p-filter-params",n.filterParams),r(2),s("p-disabled",m.invalid)}},dependencies:[Q,V,W,q,U,J,$,T,K,de],encapsulation:2})}return a})();var Ht=a=>({"docs-sample-code-tabs":a}),Ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),t(3,"PO Combo - Booking Hotel"),e(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),e(),o(13,"pre",7),t(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),e()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),e(),o(19,"pre",9),t(20,`import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  standalone: false
})
export class SamplePoComboHotelsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),e()()()()(),o(21,"div",10),l(22,"sample-po-combo-hotels"),e(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,Ht,n.hideSampleCodeTabs)))},dependencies:[M,w,y,x,Xe],encapsulation:2})}return a})();var $e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-doc"]],standalone:!1,decls:1693,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),o(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),o(7,"blockquote")(8,"p"),t(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),t(11,"FormsModule"),e(),t(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),t(14,"ReactiveFormsModule"),e(),t(15,", ambos nativos do Angular."),e()()(),o(16,"h3",3),t(17,"Componente"),e(),o(18,"h4",4)(19,"code",5),t(20,"PoComboComponent"),e()(),o(21,"div",2)(22,"p"),t(23,"O "),o(24,"code"),t(25,"po-combo"),e(),t(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),e(),o(27,"p"),t(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),e(),o(29,"p"),t(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),o(31,"em"),t(32,"mouse"),e(),t(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),o(34,"em"),t(35,"Enter"),e(),t(36," na op\xE7\xE3o que desejar."),e(),o(37,"p"),t(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),o(39,"code"),t(40,"p-filter-service"),e(),t(41,"."),e(),o(42,"p"),t(43,"Em "),o(44,"code"),t(45,"p-filter-mode"),e(),t(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),e(),o(47,"p"),t(48,"O "),o(49,"code"),t(50,"po-combo"),e(),t(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),o(52,"em"),t(53,"Esc"),e(),t(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),o(55,"em"),t(56,"Enter"),e(),t(57,"."),e(),o(58,"p"),t(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),e(),o(60,"h4"),t(61,"Tokens customiz\xE1veis"),e(),o(62,"p"),t(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),o(64,"blockquote")(65,"p"),t(66,"Para maiores informa\xE7\xF5es, acesse o guia "),o(67,"a",6),t(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(69,"."),e()(),o(70,"table")(71,"thead")(72,"tr")(73,"th"),t(74,"Propriedade"),e(),o(75,"th"),t(76,"Descri\xE7\xE3o"),e(),o(77,"th"),t(78,"Valor Padr\xE3o"),e()()(),o(79,"tbody")(80,"tr")(81,"td")(82,"strong"),t(83,"Default Values"),e()(),l(84,"td")(85,"td"),e(),o(86,"tr")(87,"td")(88,"code"),t(89,"--font-family"),e()(),o(90,"td"),t(91,"Fam\xEDlia tipogr\xE1fica usada"),e(),o(92,"td")(93,"code"),t(94,"var(--font-family-theme)"),e()()(),o(95,"tr")(96,"td")(97,"code"),t(98,"--font-size"),e()(),o(99,"td"),t(100,"Tamanho da fonte"),e(),o(101,"td")(102,"code"),t(103,"var(--font-size-default)"),e()()(),o(104,"tr")(105,"td")(106,"code"),t(107,"--text-color"),e()(),o(108,"td"),t(109,"Cor do texto"),e(),o(110,"td")(111,"code"),t(112,"var(--color-neutral-dark-90)"),e()()(),o(113,"tr")(114,"td")(115,"code"),t(116,"--text-color-placeholder"),e()(),o(117,"td"),t(118,"Cor do texto no placeholder"),e(),o(119,"td")(120,"code"),t(121,"var(--color-neutral-light-30)"),e()()(),o(122,"tr")(123,"td")(124,"code"),t(125,"--color"),e()(),o(126,"td"),t(127,"Cor principal do Combo"),e(),o(128,"td")(129,"code"),t(130,"var(--color-neutral-dark-70)"),e()()(),o(131,"tr")(132,"td")(133,"code"),t(134,"--background"),e()(),o(135,"td"),t(136,"Cor de background"),e(),o(137,"td")(138,"code"),t(139,"var(--color-neutral-light-05)"),e()()(),o(140,"tr")(141,"td")(142,"code"),t(143,"--border-radius"),e()(),o(144,"td"),t(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),o(146,"td")(147,"code"),t(148,"var(--border-width-lg)"),e()()(),o(149,"tr")(150,"td")(151,"code"),t(152,"--min-width"),e()(),o(153,"td"),t(154,"Largura m\xEDnima do combo"),e(),o(155,"td")(156,"code"),t(157,"150px"),e()()(),o(158,"tr")(159,"td")(160,"strong"),t(161,"Hover"),e()(),l(162,"td")(163,"td"),e(),o(164,"tr")(165,"td")(166,"code"),t(167,"--color-hover"),e()(),o(168,"td"),t(169,"Cor principal no estado hover"),e(),o(170,"td")(171,"code"),t(172,"var(--color-action-hover)"),e()()(),o(173,"tr")(174,"td")(175,"code"),t(176,"--background-hover"),e()(),o(177,"td"),t(178,"Cor de background no estado hover"),e(),o(179,"td")(180,"code"),t(181,"var(--color-brand-01-lightest)"),e()()(),o(182,"tr")(183,"td")(184,"strong"),t(185,"Focused"),e()(),l(186,"td")(187,"td"),e(),o(188,"tr")(189,"td")(190,"code"),t(191,"--color-focused"),e()(),o(192,"td"),t(193,"Cor principal no estado de focus"),e(),o(194,"td")(195,"code"),t(196,"var(--color-action-default)"),e()()(),o(197,"tr")(198,"td")(199,"code"),t(200,"--outline-color-focused"),e()(),o(201,"td"),t(202,"Cor do outline do estado de focus"),e(),o(203,"td")(204,"code"),t(205,"var(--color-action-focus)"),e()()(),o(206,"tr")(207,"td")(208,"strong"),t(209,"Error"),e()(),l(210,"td")(211,"td"),e(),o(212,"tr")(213,"td")(214,"code"),t(215,"--color-error"),e()(),o(216,"td"),t(217,"Cor principal no estado de erro"),e(),o(218,"td")(219,"code"),t(220,"var(--color-feedback-negative-base)"),e()()(),o(221,"tr")(222,"td")(223,"strong"),t(224,"Disabled"),e()(),l(225,"td")(226,"td"),e(),o(227,"tr")(228,"td")(229,"code"),t(230,"--color-disabled"),e()(),o(231,"td"),t(232,"Cor principal no estado disabled"),e(),o(233,"td")(234,"code"),t(235,"var(--color-neutral-light-30)"),e()()(),o(236,"tr")(237,"td")(238,"code"),t(239,"--background-disabled"),e()(),o(240,"td"),t(241,"Cor de background no estado disabled"),e(),o(242,"td")(243,"code"),t(244,"var(--color-neutral-light-20)"),e()()(),o(245,"tr")(246,"td")(247,"strong"),t(248,"Suggestion"),e()(),l(249,"td")(250,"td"),e(),o(251,"tr")(252,"td")(253,"code"),t(254,"--text-color-suggestion"),e()(),o(255,"td"),t(256,"Cor do texto no estado suggestion"),e(),o(257,"td")(258,"code"),t(259,"var(--color-neutral-mid-60)"),e()()(),o(260,"tr")(261,"td")(262,"code"),t(263,"--background-suggestion"),e()(),o(264,"td"),t(265,"Cor do background no estado suggestion"),e(),o(266,"td")(267,"code"),t(268,"var(--color-brand-01-lightest)"),e()()()()()(),o(269,"div",7)(270,"h4",8),t(271,"Seletor"),e(),o(272,"pre",9),t(273,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-helper="PoHelperOptions"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),e()(),o(274,"h4",10),t(275,"Propriedades"),e(),o(276,"table",11)(277,"tr",12)(278,"th",13),t(279,"Nome"),e(),o(280,"th",13),t(281,"Tipo"),e(),o(282,"th",13),t(283,"Padr\xE3o"),e(),o(284,"th",13),t(285,"Descri\xE7\xE3o"),e()(),o(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),t(290," (p-additional-help)"),l(291,"br"),e()(),o(292,"div",18),t(293,"Deprecated"),e()(),o(294,"td",19)(295,"code",20),t(296,"EventEmitter"),e()(),o(297,"td",21),t(298,"-"),e(),o(299,"td",22)(300,"em")(301,"strong"),t(302,"(opcional)"),e()(),o(303,"p"),t(304,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(305,"code"),t(306,"p-help"),e(),t(307,"."),e()()(),o(308,"tr",14)(309,"td",15)(310,"div",23)(311,"span",24),t(312," p-additional-help-tooltip"),l(313,"br"),e()(),o(314,"div",18),t(315,"Deprecated"),e()(),o(316,"td",19)(317,"code",25),t(318,"string"),e()(),o(319,"td",21),t(320,"-"),e(),o(321,"td",22)(322,"em")(323,"strong"),t(324,"(opcional)"),e()(),o(325,"p"),t(326,"Exibe um \xEDcone de ajuda adicional ao "),o(327,"code"),t(328,"p-help"),e(),t(329,`, com o texto desta propriedade no tooltip.
Se o evento `),o(330,"code"),t(331,"p-additional-help"),e(),t(332,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(333,"strong"),t(334,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),o(335,"blockquote")(336,"p"),t(337,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),o(338,"tr",14)(339,"td",15)(340,"div",23)(341,"span",24),t(342," p-append-in-body"),l(343,"br"),e()()(),o(344,"td",19)(345,"code",26),t(346,"boolean"),e()(),o(347,"td",21)(348,"p")(349,"code"),t(350,"false"),e()()(),o(351,"td",22)(352,"em")(353,"strong"),t(354,"(opcional)"),e()(),o(355,"p"),t(356,"Define que o "),o(357,"code"),t(358,"listbox"),e(),t(359," e/ou tooltip ("),o(360,"code"),t(361,"p-additional-help-tooltip"),e(),t(362," e/ou "),o(363,"code"),t(364,"p-error-limit"),e(),t(365,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),e(),o(366,"blockquote")(367,"p"),t(368,"Quando utilizado com "),o(369,"code"),t(370,"p-additional-help-tooltip"),e(),t(371,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),o(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),t(376," p-auto-focus"),l(377,"br"),e()()(),o(378,"td",19)(379,"code",26),t(380,"boolean"),e()(),o(381,"td",21)(382,"p")(383,"code"),t(384,"false"),e()()(),o(385,"td",22)(386,"em")(387,"strong"),t(388,"(opcional)"),e()(),o(389,"p"),t(390,"Aplica foco no elemento ao ser iniciado."),e(),o(391,"blockquote")(392,"p"),t(393,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),o(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),t(398," (p-blur)"),l(399,"br"),e()()(),o(400,"td",19)(401,"code",20),t(402,"EventEmitter"),e()(),o(403,"td",21),t(404,"-"),e(),o(405,"td",22)(406,"em")(407,"strong"),t(408,"(opcional)"),e()(),o(409,"p"),t(410,"Evento disparado ao sair do campo."),e()()(),o(411,"tr",14)(412,"td",15)(413,"div",23)(414,"span",24),t(415," p-cache"),l(416,"br"),e()()(),o(417,"td",19)(418,"code",26),t(419,"boolean"),e()(),o(420,"td",21)(421,"p")(422,"code"),t(423,"true"),e()()(),o(424,"td",22)(425,"em")(426,"strong"),t(427,"(opcional)"),e()(),o(428,"p"),t(429,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),e(),o(430,"blockquote")(431,"p"),t(432,"Caso o valor seja "),o(433,"code"),t(434,"false"),e(),t(435,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),e()()()(),o(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),t(440," (p-change)"),l(441,"br"),e()()(),o(442,"td",19)(443,"code",20),t(444,"EventEmitter"),e()(),o(445,"td",21),t(446,"-"),e(),o(447,"td",22)(448,"em")(449,"strong"),t(450,"(opcional)"),e()(),o(451,"p"),t(452,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),e(),o(453,"blockquote")(454,"p"),t(455,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),o(456,"code"),t(457,"p-emit-object-value"),e(),t(458,"."),e()()()(),o(459,"tr",14)(460,"td",15)(461,"div",23)(462,"span",24),t(463," p-change-on-enter"),l(464,"br"),e()()(),o(465,"td",19)(466,"code",26),t(467,"boolean"),e()(),o(468,"td",21)(469,"p")(470,"code"),t(471,"false"),e()()(),o(472,"td",22)(473,"em")(474,"strong"),t(475,"(opcional)"),e()(),o(476,"p"),t(477,"Indica que o evento "),o(478,"code"),t(479,"p-change"),e(),t(480,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),e()()(),o(481,"tr",14)(482,"td",15)(483,"div",23)(484,"span",24),t(485," p-clean"),l(486,"br"),e()()(),o(487,"td",19)(488,"code",26),t(489,"boolean"),e()(),o(490,"td",21),t(491,"-"),e(),o(492,"td",22)(493,"em")(494,"strong"),t(495,"(opcional)"),e()(),o(496,"p"),t(497,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),e()()(),o(498,"tr",14)(499,"td",15)(500,"div",23)(501,"span",24),t(502," p-debounce-time"),l(503,"br"),e()()(),o(504,"td",19)(505,"code",27),t(506,"number"),e()(),o(507,"td",21)(508,"p")(509,"code"),t(510,"400"),e()()(),o(511,"td",22)(512,"em")(513,"strong"),t(514,"(opcional)"),e()(),o(515,"p"),t(516,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),o(517,"code"),t(518,"p-filter-service"),e(),t(519,")."),e()()(),o(520,"tr",14)(521,"td",15)(522,"div",23)(523,"span",24),t(524," p-disabled"),l(525,"br"),e()()(),o(526,"td",19)(527,"code",26),t(528,"boolean"),e()(),o(529,"td",21)(530,"p")(531,"code"),t(532,"false"),e()()(),o(533,"td",22)(534,"em")(535,"strong"),t(536,"(opcional)"),e()(),o(537,"p"),t(538,"Indica que o campo ser\xE1 desabilitado."),e()()(),o(539,"tr",14)(540,"td",15)(541,"div",23)(542,"span",24),t(543," p-disabled-init-filter"),l(544,"br"),e()()(),o(545,"td",19)(546,"code",26),t(547,"boolean"),e()(),o(548,"td",21)(549,"p")(550,"code"),t(551,"false"),e()()(),o(552,"td",22)(553,"em")(554,"strong"),t(555,"(opcional)"),e()(),o(556,"p"),t(557,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),e()()(),o(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),t(562," p-disabled-tab-filter"),l(563,"br"),e()()(),o(564,"td",19)(565,"code",26),t(566,"boolean"),e()(),o(567,"td",21)(568,"p")(569,"code"),t(570,"false"),e()()(),o(571,"td",22)(572,"em")(573,"strong"),t(574,"(opcional)"),e()(),o(575,"p"),t(576,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),e()()(),o(577,"tr",14)(578,"td",15)(579,"div",23)(580,"span",24),t(581," p-emit-object-value"),l(582,"br"),e()()(),o(583,"td",19)(584,"code",26),t(585,"boolean"),e()(),o(586,"td",21)(587,"p")(588,"code"),t(589,"false"),e()()(),o(590,"td",22)(591,"em")(592,"strong"),t(593,"(opcional)"),e()(),o(594,"p"),t(595,"Se verdadeiro, o evento "),o(596,"code"),t(597,"p-change"),e(),t(598," receber\xE1 como argumento o "),o(599,"code"),t(600,"PoComboOption"),e(),t(601," referente \xE0 op\xE7\xE3o selecionada."),e()()(),o(602,"tr",14)(603,"td",15)(604,"div",23)(605,"span",24),t(606," p-error-limit"),l(607,"br"),e()()(),o(608,"td",19)(609,"code",26),t(610,"boolean"),e()(),o(611,"td",21)(612,"p")(613,"code"),t(614,"false"),e()()(),o(615,"td",22)(616,"em")(617,"strong"),t(618,"(opcional)"),e()(),o(619,"p"),t(620,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),o(621,"blockquote")(622,"p"),t(623,"Caso essa propriedade seja definida como "),o(624,"code"),t(625,"true"),e(),t(626,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),o(627,"tr",14)(628,"td",15)(629,"div",23)(630,"span",24),t(631," p-field-error-message"),l(632,"br"),e()()(),o(633,"td",19)(634,"code",25),t(635,"string"),e()(),o(636,"td",21),t(637,"-"),e(),o(638,"td",22)(639,"em")(640,"strong"),t(641,"(opcional)"),e()(),o(642,"p"),t(643,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),o(644,"blockquote")(645,"p"),t(646,"Necess\xE1rio que a propriedade "),o(647,"code"),t(648,"p-required"),e(),t(649," esteja habilitada."),e()()()(),o(650,"tr",14)(651,"td",15)(652,"div",23)(653,"span",24),t(654," p-field-label"),l(655,"br"),e()()(),o(656,"td",19)(657,"code",25),t(658,"string"),e()(),o(659,"td",21)(660,"p")(661,"code"),t(662,"label"),e()()(),o(663,"td",22)(664,"em")(665,"strong"),t(666,"(opcional)"),e()(),o(667,"p"),t(668,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(669,"code"),t(670,"p-options"),e(),t(671,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),o(672,"p"),t(673,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),o(674,"tr",14)(675,"td",15)(676,"div",23)(677,"span",24),t(678," p-field-value"),l(679,"br"),e()()(),o(680,"td",19)(681,"code",25),t(682,"string"),e()(),o(683,"td",21)(684,"p")(685,"code"),t(686,"value"),e()()(),o(687,"td",22)(688,"em")(689,"strong"),t(690,"(opcional)"),e()(),o(691,"p"),t(692,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(693,"code"),t(694,"p-options"),e(),t(695,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),o(696,"p"),t(697,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),o(698,"tr",14)(699,"td",15)(700,"div",23)(701,"span",24),t(702," p-filter-minlength"),l(703,"br"),e()()(),o(704,"td",19)(705,"code",27),t(706,"number"),e()(),o(707,"td",21)(708,"p")(709,"code"),t(710,"0"),e()()(),o(711,"td",22)(712,"em")(713,"strong"),t(714,"(opcional)"),e()(),o(715,"p"),t(716,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),e()()(),o(717,"tr",14)(718,"td",15)(719,"div",23)(720,"span",24),t(721," p-filter-mode"),l(722,"br"),e()()(),o(723,"td",19)(724,"code",28),t(725,"PoComboFilterMode"),e()(),o(726,"td",21)(727,"p")(728,"code"),t(729,"startsWith"),e()()(),o(730,"td",22)(731,"em")(732,"strong"),t(733,"(opcional)"),e()(),o(734,"p"),t(735,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),o(736,"code"),t(737,"startsWith"),e(),t(738,", "),o(739,"code"),t(740,"contains"),e(),t(741," ou "),o(742,"code"),t(743,"endsWith"),e(),t(744,"."),e(),o(745,"blockquote")(746,"p"),t(747,"Quando utilizar a propriedade "),o(748,"code"),t(749,"p-filter-service"),e(),t(750," esta propriedade ser\xE1 ignorada."),e()()()(),o(751,"tr",14)(752,"td",15)(753,"div",23)(754,"span",24),t(755," p-filter-params"),l(756,"br"),e()()(),o(757,"td",19)(758,"code",29),t(759,"any"),e()(),o(760,"td",21),t(761,"-"),e(),o(762,"td",22)(763,"em")(764,"strong"),t(765,"(opcional)"),e()(),o(766,"p"),t(767,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),o(768,"em"),t(769,"PoComboFilter"),e(),t(770,"."),e(),o(771,"blockquote")(772,"p"),t(773,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),e()()()(),o(774,"tr",14)(775,"td",15)(776,"div",23)(777,"span",24),t(778," p-filter-service"),l(779,"br"),e()()(),o(780,"td",19)(781,"code",30),t(782,"PoComboFilter "),e(),o(783,"code",25),t(784," string"),e()(),o(785,"td",21),t(786,"-"),e(),o(787,"td",22)(788,"em")(789,"strong"),t(790,"(opcional)"),e()(),o(791,"p"),t(792,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),e(),o(793,"p"),t(794,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),o(795,"code"),t(796,"p-field-label"),e(),t(797," e "),o(798,"code"),t(799,"p-field-value"),e(),t(800," para a constru\xE7\xE3o da lista de itens."),e(),o(801,"p"),t(802,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),o(803,"pre")(804,"code"),t(805,`url + ?filter=Peter
`),e()(),o(806,"p"),t(807,"Se for definida a propriedade "),o(808,"code"),t(809,"p-filter-params"),e(),t(810,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),o(811,"code"),t(812,"{ age: 23 }"),e(),t(813," a URL ficaria:"),e(),o(814,"pre")(815,"code"),t(816,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),e()()()(),o(817,"tr",14)(818,"td",15)(819,"div",23)(820,"span",24),t(821," p-help"),l(822,"br"),e()()(),o(823,"td",19)(824,"code",25),t(825,"string"),e()(),o(826,"td",21),t(827,"-"),e(),o(828,"td",22)(829,"em")(830,"strong"),t(831,"(opcional)"),e()(),o(832,"p"),t(833,"Texto de apoio para o campo."),e()()(),o(834,"tr",14)(835,"td",15)(836,"div",23)(837,"span",24),t(838," p-icon"),l(839,"br"),e()()(),o(840,"td",19)(841,"code",25),t(842,"string "),e(),o(843,"code",31),t(844," TemplateRef<void>"),e()(),o(845,"td",21),t(846,"-"),e(),o(847,"td",22)(848,"em")(849,"strong"),t(850,"(opcional)"),e()(),o(851,"p"),t(852,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),e(),o(853,"p"),t(854,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),o(855,"a",32),t(856,"Biblioteca de \xEDcones"),e(),t(857,". conforme exemplo abaixo:"),e(),o(858,"pre")(859,"code"),t(860,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),e()(),o(861,"p"),t(862,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),o(863,"em"),t(864,"Font Awesome"),e(),t(865,", da seguinte forma:"),e(),o(866,"pre")(867,"code"),t(868,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),e()(),o(869,"p"),t(870,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),o(871,"code"),t(872,"TemplateRef"),e(),t(873,", conforme exemplo abaixo:"),e(),o(874,"pre")(875,"code"),t(876,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),e()(),o(877,"blockquote")(878,"p"),t(879,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),o(880,"code"),t(881,"font-size: inherit"),e(),t(882," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),o(883,"tr",14)(884,"td",15)(885,"div",23)(886,"span",24),t(887," p-infinite-scroll"),l(888,"br"),e()()(),o(889,"td",19)(890,"code",26),t(891,"boolean"),e()(),o(892,"td",21)(893,"p")(894,"code"),t(895,"false"),e()()(),o(896,"td",22)(897,"em")(898,"strong"),t(899,"(opcional)"),e()(),o(900,"p"),t(901,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),e()()(),o(902,"tr",14)(903,"td",15)(904,"div",23)(905,"span",24),t(906," p-infinite-scroll-distance"),l(907,"br"),e()()(),o(908,"td",19)(909,"code",27),t(910,"number"),e()(),o(911,"td",21),t(912,"-"),e(),o(913,"td",22)(914,"em")(915,"strong"),t(916,"(opcional)"),e()(),o(917,"p"),t(918,"Define o percentual necess\xE1rio para disparar o evento "),o(919,"code"),t(920,"show-more"),e(),t(921,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),e(),o(922,"p")(923,"strong"),t(924,"Exemplos"),e()(),o(925,"ul")(926,"li"),t(927,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),o(928,"code"),t(929,"show-more"),e(),t(930," ser\xE1 disparado."),e()()()(),o(931,"tr",14)(932,"td",15)(933,"div",16)(934,"span",17),t(935," (p-input-change)"),l(936,"br"),e()()(),o(937,"td",19)(938,"code",20),t(939,"EventEmitter"),e()(),o(940,"td",21),t(941,"-"),e(),o(942,"td",22)(943,"em")(944,"strong"),t(945,"(opcional)"),e()(),o(946,"p"),t(947,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),e()()(),o(948,"tr",14)(949,"td",15)(950,"div",16)(951,"span",17),t(952," (p-keydown)"),l(953,"br"),e()()(),o(954,"td",19)(955,"code",20),t(956,"EventEmitter"),e()(),o(957,"td",21),t(958,"-"),e(),o(959,"td",22)(960,"em")(961,"strong"),t(962,"(opcional)"),e()(),o(963,"p"),t(964,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(965,"code"),t(966,"KeyboardEvent"),e(),t(967," com informa\xE7\xF5es sobre a tecla."),e()()(),o(968,"tr",14)(969,"td",15)(970,"div",23)(971,"span",24),t(972," p-label"),l(973,"br"),e()()(),o(974,"td",19)(975,"code",25),t(976,"string"),e()(),o(977,"td",21),t(978,"-"),e(),o(979,"td",22)(980,"em")(981,"strong"),t(982,"(opcional)"),e()(),o(983,"p"),t(984,"Label no componente."),e()()(),o(985,"tr",14)(986,"td",15)(987,"div",23)(988,"span",24),t(989," p-label-text-wrap"),l(990,"br"),e()()(),o(991,"td",19)(992,"code",26),t(993,"boolean"),e()(),o(994,"td",21)(995,"p")(996,"code"),t(997,"false"),e()()(),o(998,"td",22)(999,"em")(1e3,"strong"),t(1001,"(opcional)"),e()(),o(1002,"p"),t(1003,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(1004,"code"),t(1005,"p-label"),e(),t(1006,". Quando "),o(1007,"code"),t(1008,"p-label-text-wrap"),e(),t(1009,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),e()()(),o(1010,"tr",14)(1011,"td",15)(1012,"div",23)(1013,"span",24),t(1014," p-listbox-control-position"),l(1015,"br"),e()()(),o(1016,"td",19)(1017,"code",33),t(1018,"'top' "),e(),o(1019,"code",34),t(1020," 'bottom'"),e()(),o(1021,"td",21)(1022,"p")(1023,"code"),t(1024,"bottom"),e()()(),o(1025,"td",22)(1026,"em")(1027,"strong"),t(1028,"(opcional)"),e()(),o(1029,"p"),t(1030,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),o(1031,"code"),t(1032,"listbox"),e(),t(1033," em rela\xE7\xE3o ao campo ("),o(1034,"code"),t(1035,"top"),e(),t(1036," ou "),o(1037,"code"),t(1038,"bottom"),e(),t(1039,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),e()()(),o(1040,"tr",14)(1041,"td",15)(1042,"div",23)(1043,"span",24),t(1044," p-literals"),l(1045,"br"),e()()(),o(1046,"td",19)(1047,"code",35),t(1048,"PoComboLiterals"),e()(),o(1049,"td",21),t(1050,"-"),e(),o(1051,"td",22)(1052,"em")(1053,"strong"),t(1054,"(opcional)"),e()(),o(1055,"p"),t(1056,"Objeto com as literais usadas no "),o(1057,"code"),t(1058,"po-combo"),e(),t(1059,"."),e(),o(1060,"p"),t(1061,"Para utilizar basta passar a literal que deseja customizar:"),e(),o(1062,"pre")(1063,"code"),t(1064,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),e()(),o(1065,"p"),t(1066,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),e(),o(1067,"pre")(1068,"code"),t(1069,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),e()(),o(1070,"blockquote")(1071,"p"),t(1072,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),o(1073,"a",36)(1074,"code"),t(1075,"PoI18nService"),e()(),t(1076," ou do browser."),e()()()(),o(1077,"tr",14)(1078,"td",15)(1079,"div",23)(1080,"span",24),t(1081," name"),l(1082,"br"),e()()(),o(1083,"td",19)(1084,"code",25),t(1085,"string"),e()(),o(1086,"td",21),t(1087,"-"),e(),o(1088,"td",22)(1089,"p"),t(1090,"Nome do componente."),e()()(),o(1091,"tr",14)(1092,"td",15)(1093,"div",16)(1094,"span",17),t(1095," (ngModelChange)"),l(1096,"br"),e()()(),o(1097,"td",19)(1098,"code",20),t(1099,"EventEmitter"),e()(),o(1100,"td",21),t(1101,"-"),e(),o(1102,"td",22)(1103,"em")(1104,"strong"),t(1105,"(opcional)"),e()(),o(1106,"p"),t(1107,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),o(1108,"p"),t(1109,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(1110,"code"),t(1111,"strictTemplates"),e(),t(1112,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),o(1113,"pre")(1114,"code"),t(1115,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),e()()()(),o(1116,"tr",14)(1117,"td",15)(1118,"div",23)(1119,"span",24),t(1120," p-optional"),l(1121,"br"),e()()(),o(1122,"td",19)(1123,"code",26),t(1124,"boolean"),e()(),o(1125,"td",21)(1126,"p")(1127,"code"),t(1128,"false"),e()()(),o(1129,"td",22)(1130,"em")(1131,"strong"),t(1132,"(opcional)"),e()(),o(1133,"p"),t(1134,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),o(1135,"blockquote")(1136,"p"),t(1137,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),o(1138,"ul")(1139,"li"),t(1140,"O campo conter "),o(1141,"code"),t(1142,"p-required"),e(),t(1143,";"),e(),o(1144,"li"),t(1145,"N\xE3o possuir "),o(1146,"code"),t(1147,"p-help"),e(),t(1148," e/ou "),o(1149,"code"),t(1150,"p-label"),e(),t(1151,"."),e()()()(),o(1152,"tr",14)(1153,"td",15)(1154,"div",23)(1155,"span",24),t(1156," p-options"),l(1157,"br"),e()()(),o(1158,"td",19)(1159,"code",37),t(1160,"Array<PoComboOption "),e(),o(1161,"code",38),t(1162," PoComboOptionGroup "),e(),o(1163,"code",39),t(1164," any>"),e()(),o(1165,"td",21),t(1166,"-"),e(),o(1167,"td",22)(1168,"p"),t(1169,"Nesta propriedade define a lista de op\xE7\xF5es do "),o(1170,"code"),t(1171,"po-combo"),e(),t(1172,"."),e(),o(1173,"blockquote")(1174,"p"),t(1175,"A lista pode ser definida utilizando um array com o valor representando o "),o(1176,"code"),t(1177,"value"),e(),t(1178," e o "),o(1179,"code"),t(1180,"label"),e(),t(1181," das seguintes formas:"),e()(),o(1182,"pre")(1183,"code"),t(1184,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),e()(),o(1185,"pre")(1186,"code"),t(1187,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),e()(),o(1188,"ul")(1189,"li"),t(1190,"Aconselha-se utilizar valores distintos no "),o(1191,"code"),t(1192,"label"),e(),t(1193," e "),o(1194,"code"),t(1195,"value"),e(),t(1196," dos itens."),e()()()(),o(1197,"tr",14)(1198,"td",15)(1199,"div",23)(1200,"span",24),t(1201," p-placeholder"),l(1202,"br"),e()()(),o(1203,"td",19)(1204,"code",25),t(1205,"string"),e()(),o(1206,"td",21),t(1207,"-"),e(),o(1208,"td",22)(1209,"p"),t(1210,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),o(1211,"tr",14)(1212,"td",15)(1213,"div",23)(1214,"span",24),t(1215," p-helper"),l(1216,"br"),e()()(),o(1217,"td",19)(1218,"code",40),t(1219,"PoHelperOptions"),e()(),o(1220,"td",21),t(1221,"-"),e(),o(1222,"td",22)(1223,"em")(1224,"strong"),t(1225,"(opcional)"),e()(),o(1226,"p"),t(1227,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),e(),o(1228,"blockquote")(1229,"p"),t(1230,"Caso o "),o(1231,"code"),t(1232,"p-label"),e(),t(1233,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),o(1234,"code"),t(1235,"p-additional-help-tooltip"),e(),t(1236," e "),o(1237,"code"),t(1238,"p-additional-help"),e(),t(1239,") ser\xE1 ignorado."),e()()()(),o(1240,"tr",14)(1241,"td",15)(1242,"div",23)(1243,"span",24),t(1244," p-remove-initial-filter"),l(1245,"br"),e()()(),o(1246,"td",19)(1247,"code",26),t(1248,"boolean"),e()(),o(1249,"td",21)(1250,"p")(1251,"code"),t(1252,"false"),e()()(),o(1253,"td",22)(1254,"em")(1255,"strong"),t(1256,"(opcional)"),e()(),o(1257,"p"),t(1258,"Define que o filtro no primeiro clique ser\xE1 removido."),e(),o(1259,"blockquote")(1260,"p"),t(1261,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),e()()()(),o(1262,"tr",14)(1263,"td",15)(1264,"div",23)(1265,"span",24),t(1266," p-required"),l(1267,"br"),e()()(),o(1268,"td",19)(1269,"code",26),t(1270,"boolean"),e()(),o(1271,"td",21)(1272,"p")(1273,"code"),t(1274,"false"),e()()(),o(1275,"td",22)(1276,"em")(1277,"strong"),t(1278,"(opcional)"),e()(),o(1279,"p"),t(1280,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),o(1281,"tr",14)(1282,"td",15)(1283,"div",23)(1284,"span",24),t(1285," p-show-required"),l(1286,"br"),e()()(),o(1287,"td",19)(1288,"code",26),t(1289,"boolean"),e()(),o(1290,"td",21),t(1291,"-"),e(),o(1292,"td",22)(1293,"p"),t(1294,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),o(1295,"blockquote")(1296,"p"),t(1297,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),o(1298,"ul")(1299,"li"),t(1300,"N\xE3o possuir "),o(1301,"code"),t(1302,"p-help"),e(),t(1303," e/ou "),o(1304,"code"),t(1305,"p-label"),e(),t(1306,"."),e()()()(),o(1307,"tr",14)(1308,"td",15)(1309,"div",23)(1310,"span",24),t(1311," p-size"),l(1312,"br"),e()()(),o(1313,"td",19)(1314,"code",25),t(1315,"string"),e()(),o(1316,"td",21)(1317,"p")(1318,"code"),t(1319,"medium"),e()()(),o(1320,"td",22)(1321,"em")(1322,"strong"),t(1323,"(opcional)"),e()(),o(1324,"p"),t(1325,"Define o tamanho do componente:"),e(),o(1326,"ul")(1327,"li")(1328,"code"),t(1329,"small"),e(),t(1330,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),o(1331,"li")(1332,"code"),t(1333,"medium"),e(),t(1334,": altura do input como 44px."),e()(),o(1335,"blockquote")(1336,"p"),t(1337,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(1338,"code"),t(1339,"medium"),e(),t(1340,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(1341,"a",41),t(1342,"po-theme"),e(),t(1343,"."),e()()()(),o(1344,"tr",14)(1345,"td",15)(1346,"div",23)(1347,"span",24),t(1348," p-sort"),l(1349,"br"),e()()(),o(1350,"td",19)(1351,"code",26),t(1352,"boolean"),e()(),o(1353,"td",21),t(1354,"-"),e(),o(1355,"td",22)(1356,"p"),t(1357,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),e()()()(),o(1358,"h3",10),t(1359,"M\xE9todos"),e(),o(1360,"table",42)(1361,"tr",14)(1362,"th",43)(1363,"div",23)(1364,"h4")(1365,"span",24),t(1366," focus "),e()()()()(),o(1367,"tr",22)(1368,"td",22)(1369,"p"),t(1370,"Fun\xE7\xE3o que atribui foco ao componente."),e(),o(1371,"p"),t(1372,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),o(1373,"pre")(1374,"code"),t(1375,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),e()()()()(),l(1376,"br"),o(1377,"h3"),t(1378,"Interfaces"),e(),o(1379,"h4",44)(1380,"code",5),t(1381,"PoComboFilter"),e()(),o(1382,"div",2)(1383,"p"),t(1384,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),e()(),o(1385,"h4",10),t(1386,"M\xE9todos"),e(),o(1387,"table",42)(1388,"tr",14)(1389,"th",43)(1390,"div",23)(1391,"h4")(1392,"span",24),t(1393," getFilteredData "),e()()()()(),o(1394,"tr",22)(1395,"td",22)(1396,"p"),t(1397,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),e()()()(),o(1398,"h5")(1399,"b"),t(1400,"Par\xE2metros"),e()(),o(1401,"table",11)(1402,"tr",12)(1403,"th",13),t(1404,"Nome"),e(),o(1405,"th",13),t(1406,"Tipo"),e(),o(1407,"th",13),t(1408,"Descri\xE7\xE3o"),e()(),o(1409,"tr",14)(1410,"td",15),t(1411," params"),e(),o(1412,"td",19)(1413,"code",45),t(1414," any "),e()(),o(1415,"td",22)(1416,"p"),t(1417,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()(),o(1418,"tr",14)(1419,"td",15),t(1420," filterParams"),e(),o(1421,"td",19)(1422,"code",45),t(1423," any "),e()(),o(1424,"td",22)(1425,"p"),t(1426,"Valor informado atrav\xE9s da propriedade "),o(1427,"code"),t(1428,"p-filter-params"),e(),t(1429,"."),e()()()(),l(1430,"br"),o(1431,"table",42)(1432,"tr",14)(1433,"th",43)(1434,"div",23)(1435,"h4")(1436,"span",24),t(1437," getObjectByValue "),e()()()()(),o(1438,"tr",22)(1439,"td",22)(1440,"p"),t(1441,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),e()()()(),o(1442,"h5")(1443,"b"),t(1444,"Par\xE2metros"),e()(),o(1445,"table",11)(1446,"tr",12)(1447,"th",13),t(1448,"Nome"),e(),o(1449,"th",13),t(1450,"Tipo"),e(),o(1451,"th",13),t(1452,"Descri\xE7\xE3o"),e()(),o(1453,"tr",14)(1454,"td",15),t(1455," value"),e(),o(1456,"td",19)(1457,"code",25),t(1458," string "),e(),o(1459,"code",27),t(1460," number "),e()(),o(1461,"td",22)(1462,"p"),t(1463,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),e()()(),o(1464,"tr",14)(1465,"td",15),t(1466," filterParams"),e(),o(1467,"td",19)(1468,"code",45),t(1469," any "),e()(),o(1470,"td",22)(1471,"p"),t(1472,"Valor informado atrav\xE9s da propriedade "),o(1473,"code"),t(1474,"p-filter-params"),e(),t(1475,"."),e()()()(),l(1476,"br"),o(1477,"h4",44)(1478,"code",5),t(1479,"PoComboLiterals"),e()(),o(1480,"div",2)(1481,"p"),t(1482,"Interface para defini\xE7\xE3o das literais usadas no "),o(1483,"code"),t(1484,"po-combo"),e(),t(1485,"."),e()(),o(1486,"h4",10),t(1487,"Propriedades"),e(),o(1488,"table",11)(1489,"tr",12)(1490,"th",13),t(1491,"Nome"),e(),o(1492,"th",13),t(1493,"Tipo"),e(),o(1494,"th",13),t(1495,"Descri\xE7\xE3o"),e()(),o(1496,"tr",14)(1497,"td",15)(1498,"div",23)(1499,"span",24),t(1500," chooseOption"),l(1501,"br"),e()()(),o(1502,"td",19)(1503,"code",25),t(1504,"string"),e()(),o(1505,"td",22)(1506,"em")(1507,"strong"),t(1508,"(opcional)"),e()(),o(1509,"p"),t(1510,"Texto exibido quando o combo estiver vazio."),e()()(),o(1511,"tr",14)(1512,"td",15)(1513,"div",23)(1514,"span",24),t(1515," clean"),l(1516,"br"),e()()(),o(1517,"td",19)(1518,"code",25),t(1519,"string"),e()(),o(1520,"td",22)(1521,"em")(1522,"strong"),t(1523,"(opcional)"),e()(),o(1524,"p"),t(1525,"Texto do aria-label do bot\xE3o de limpar"),e()()(),o(1526,"tr",14)(1527,"td",15)(1528,"div",23)(1529,"span",24),t(1530," noData"),l(1531,"br"),e()()(),o(1532,"td",19)(1533,"code",25),t(1534,"string"),e()(),o(1535,"td",22)(1536,"em")(1537,"strong"),t(1538,"(opcional)"),e()(),o(1539,"p"),t(1540,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),e()()()(),o(1541,"h4",44)(1542,"code",5),t(1543,"PoComboOptionGroup"),e()(),o(1544,"div",2)(1545,"p"),t(1546,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),o(1547,"code"),t(1548,"po-combo"),e(),t(1549,"."),e()(),o(1550,"h4",10),t(1551,"Propriedades"),e(),o(1552,"table",11)(1553,"tr",12)(1554,"th",13),t(1555,"Nome"),e(),o(1556,"th",13),t(1557,"Tipo"),e(),o(1558,"th",13),t(1559,"Descri\xE7\xE3o"),e()(),o(1560,"tr",14)(1561,"td",15)(1562,"div",23)(1563,"span",24),t(1564," label"),l(1565,"br"),e()()(),o(1566,"td",19)(1567,"code",25),t(1568,"string"),e()(),o(1569,"td",22)(1570,"p"),t(1571,"T\xEDtulo para cada grupo de op\xE7\xF5es."),e()()(),o(1572,"tr",14)(1573,"td",15)(1574,"div",23)(1575,"span",24),t(1576," options"),l(1577,"br"),e()()(),o(1578,"td",19)(1579,"code",46),t(1580,"Array<PoComboOption>"),e()(),o(1581,"td",22)(1582,"p"),t(1583,"Lista de itens a serem exibidos."),e()()()(),o(1584,"h4",44)(1585,"code",5),t(1586,"PoComboOption"),e()(),o(1587,"div",2)(1588,"p"),t(1589,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),o(1590,"code"),t(1591,"po-combo"),e(),t(1592,"."),e()(),o(1593,"h4",10),t(1594,"Propriedades"),e(),o(1595,"table",11)(1596,"tr",12)(1597,"th",13),t(1598,"Nome"),e(),o(1599,"th",13),t(1600,"Tipo"),e(),o(1601,"th",13),t(1602,"Descri\xE7\xE3o"),e()(),o(1603,"tr",14)(1604,"td",15)(1605,"div",23)(1606,"span",24),t(1607," label"),l(1608,"br"),e()()(),o(1609,"td",19)(1610,"code",25),t(1611,"string"),e()(),o(1612,"td",22)(1613,"em")(1614,"strong"),t(1615,"(opcional)"),e()(),o(1616,"p"),t(1617,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),e(),o(1618,"blockquote")(1619,"p"),t(1620,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),o(1621,"code"),t(1622,"value"),e(),t(1623,"."),e()()()(),o(1624,"tr",14)(1625,"td",15)(1626,"div",23)(1627,"span",24),t(1628," value"),l(1629,"br"),e()()(),o(1630,"td",19)(1631,"code",25),t(1632,"string "),e(),o(1633,"code",27),t(1634," number"),e()(),o(1635,"td",22)(1636,"p"),t(1637,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),o(1638,"em"),t(1639,"model"),e(),t(1640,"."),e()()()(),o(1641,"h3"),t(1642,"Enums"),e(),o(1643,"h4",4)(1644,"code",5),t(1645,"PoComboFilterMode"),e()(),o(1646,"div",2)(1647,"p"),t(1648,"Define o tipo de busca usado no po-combo."),e()(),o(1649,"h4",10),t(1650,"Propriedades"),e(),o(1651,"table",11)(1652,"tr",12)(1653,"th",13),t(1654,"Nome"),e(),o(1655,"th",13),t(1656,"Descri\xE7\xE3o"),e()(),o(1657,"tr",14)(1658,"td",15)(1659,"div",23)(1660,"span",24),t(1661," startsWith"),l(1662,"br"),e()()(),o(1663,"td",22)(1664,"p"),t(1665,"Verifica se o texto "),o(1666,"em"),t(1667,"inicia"),e(),t(1668," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),e()()(),o(1669,"tr",14)(1670,"td",15)(1671,"div",23)(1672,"span",24),t(1673," contains"),l(1674,"br"),e()()(),o(1675,"td",22)(1676,"p"),t(1677,"Verifica se o texto "),o(1678,"em"),t(1679,"cont\xE9m"),e(),t(1680," o valor pesquisado."),e()()(),o(1681,"tr",14)(1682,"td",15)(1683,"div",23)(1684,"span",24),t(1685," endsWith"),l(1686,"br"),e()()(),o(1687,"td",22)(1688,"p"),t(1689,"Verifica se o texto "),o(1690,"em"),t(1691,"finaliza"),e(),t(1692," com o valor pesquisado."),e()()()()())},dependencies:[w],encapsulation:2})}return a})();var et=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(ue(Me),ue(Te))};static \u0275cmp=E({type:a,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-combo-doc"),e(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),e()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[De,y,x,He,Ie,Ge,ze,Ue,Je,Ye,Ze,$e],encapsulation:2})}return a})();var At=[{path:"",component:et}],tt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=ae({type:a});static \u0275inj=ie({imports:[ge.forChild(At),ge]})}return a})();var on=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=ae({type:a});static \u0275inj=ie({imports:[We,tt]})}return a})();export{on as DocPoComboModule};
