import{o as x,p as xe}from"./chunk-QBCDRFNO.js";import{Aa as ve,Ga as fe,Ja as ye,K as Ee,Ka as T,P as ge,R as j,Ra as te,T as $,V as ee,Wa as k,m as Se,mb as Ce,v as L,yb as y,zb as C}from"./chunk-3RSXW52V.js";import{Bb as w,Ca as M,Cc as A,Dc as I,Ec as Z,Fc as O,Ga as K,Gc as z,Jc as de,Ka as i,Kc as ce,L as pe,La as e,M as Q,Ma as l,Ob as X,Oc as ue,P as B,Qa as W,Ra as u,T as b,Tc as be,U as h,Vc as he,Xc as le,Zb as me,a as G,ab as q,bb as t,cb as re,db as P,fb as E,gb as g,hb as v,ia as p,ib as se,ja as ne,kb as _,o as ie,pa as S,qa as Y,qb as N,tb as H,va as oe,za as m,zc as R}from"./chunk-4WWO4UYO.js";var Me=(()=>{class o{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,n){a&1&&l(0,"po-multiselect",0),a&2&&m("p-options",n.options)},dependencies:[T],encapsulation:2})}return o})();var ze=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO Multiselect Basic"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),e(),i(13,"pre",7),t(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),e(),i(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),e()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-basic"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ze,n.hideSampleCodeTabs)))},dependencies:[w,x,y,C,Me],encapsulation:2})}return o})();var _e=(()=>{class o{additionalHelpTooltip;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,G({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.additionalHelpTooltip="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:33,vars:49,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,n){if(a&1){let c=W();i(0,"div",2)(1,"po-multiselect",3),v("ngModelChange",function(r){return b(c),g(n.multiselect,r)||(n.multiselect=r),h(r)}),u("p-change",function(){return b(c),h(n.changeEvent("p-change"))})("p-keydown",function(){return b(c),h(n.changeEvent("p-keydown"))}),e()(),l(2,"hr"),i(3,"div",2),l(4,"po-info",4)(5,"po-info",5),e(),l(6,"hr"),i(7,"form",null,0)(9,"div",2)(10,"po-input",6),v("ngModelChange",function(r){return b(c),g(n.option.label,r)||(n.option.label=r),h(r)}),e(),i(11,"po-input",7),v("ngModelChange",function(r){return b(c),g(n.option.value,r)||(n.option.value=r),h(r)}),e()(),i(12,"div",2)(13,"po-button",8),u("p-click",function(){return b(c),h(n.addOption())}),e()()(),l(14,"hr"),i(15,"form",null,1)(17,"po-input",9),v("ngModelChange",function(r){return b(c),g(n.label,r)||(n.label=r),h(r)}),e(),i(18,"po-input",10),v("ngModelChange",function(r){return b(c),g(n.help,r)||(n.help=r),h(r)}),e(),i(19,"po-input",11),v("ngModelChange",function(r){return b(c),g(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),h(r)}),e(),i(20,"po-input",12),v("ngModelChange",function(r){return b(c),g(n.placeholder,r)||(n.placeholder=r),h(r)}),e(),i(21,"po-input",13),v("ngModelChange",function(r){return b(c),g(n.placeholderSearch,r)||(n.placeholderSearch=r),h(r)}),e(),i(22,"po-input",14),v("ngModelChange",function(r){return b(c),g(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),h(r)}),e(),i(23,"po-input",15),v("ngModelChange",function(r){return b(c),g(n.literals,r)||(n.literals=r),h(r)}),u("p-change",function(){return b(c),h(n.changeLiterals())}),e(),i(24,"po-input",16),v("ngModelChange",function(r){return b(c),g(n.filterService,r)||(n.filterService=r),h(r)}),e(),i(25,"po-input",17),v("ngModelChange",function(r){return b(c),g(n.fieldValue,r)||(n.fieldValue=r),h(r)}),e(),i(26,"po-input",18),v("ngModelChange",function(r){return b(c),g(n.fieldLabel,r)||(n.fieldLabel=r),h(r)}),e(),i(27,"po-checkbox-group",19),v("ngModelChange",function(r){return b(c),g(n.properties,r)||(n.properties=r),h(r)}),e(),i(28,"po-radio-group",20),v("ngModelChange",function(r){return b(c),g(n.filterMode,r)||(n.filterMode=r),h(r)}),e(),i(29,"po-radio-group",21),v("ngModelChange",function(r){return b(c),g(n.size,r)||(n.size=r),h(r)}),e(),i(30,"po-radio-group",22),v("ngModelChange",function(r){return b(c),g(n.listboxPosition,r)||(n.listboxPosition=r),h(r)}),e(),i(31,"div",2)(32,"po-button",23),u("p-click",function(){return b(c),h(n.restore())}),e()()()}if(a&2){let c=q(8);p(),E("ngModel",n.multiselect),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-auto-height",n.properties.includes("autoHeight"))("p-disabled",n.properties.includes("disabled"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-service",n.filterService)("p-filter-mode",n.filterMode)("p-help",n.help)("p-hide-search",n.properties.includes("hideSearch"))("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-placeholder-search",n.placeholderSearch)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-sort",n.properties.includes("sort"))("p-listbox-control-position",n.listboxPosition)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap")),p(3),m("p-value",n.multiselect),p(),m("p-value",n.event),p(5),E("ngModel",n.option.label),p(),E("ngModel",n.option.value),p(2),m("p-disabled",c.form.invalid),p(4),E("ngModel",n.label),p(),E("ngModel",n.help),p(),E("ngModel",n.additionalHelpTooltip),p(),E("ngModel",n.placeholder),p(),E("ngModel",n.placeholderSearch),p(),E("ngModel",n.fieldErrorMessage),p(),E("ngModel",n.literals),p(),E("ngModel",n.filterService),p(),E("ngModel",n.fieldValue),p(),E("ngModel",n.fieldLabel),p(),E("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),E("ngModel",n.filterMode),m("p-disabled",n.properties.includes("hideSearch"))("p-options",n.filterModeOptions),p(),E("ngModel",n.size),m("p-options",n.sizeOptions),p(),E("ngModel",n.listboxPosition),m("p-options",n.listboxPositionOptions)}},dependencies:[z,A,I,O,Z,L,ge,j,fe,T,k],encapsulation:2})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO Multiselect Labs"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),e(),i(13,"pre",7),t(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-additional-help-tooltip]="additionalHelpTooltip"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="properties?.includes('errorLimit')"
    [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  >
  </po-multiselect>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
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
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),e(),i(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
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

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
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
    this.options = [...this.options, { ...this.option }];
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

  restore() {
    this.additionalHelpTooltip = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),e()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-labs"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Je,n.hideSampleCodeTabs)))},dependencies:[w,x,y,C,_e],encapsulation:2})}return o})();var Te=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",null,0)(2,"h3"),t(3,"Collective vacations"),e(),l(4,"hr"),i(5,"div",2)(6,"po-datepicker",3),v("ngModelChange",function(r){return b(c),g(n.initialPeriod,r)||(n.initialPeriod=r),h(r)}),e(),i(7,"po-datepicker",4),v("ngModelChange",function(r){return b(c),g(n.finalPeriod,r)||(n.finalPeriod=r),h(r)}),e()(),i(8,"div",2)(9,"po-radio-group",5),v("ngModelChange",function(r){return b(c),g(n.days,r)||(n.days=r),h(r)}),e()(),i(10,"div",2)(11,"po-multiselect",6),v("ngModelChange",function(r){return b(c),g(n.employeesVacations,r)||(n.employeesVacations=r),h(r)}),e()(),i(12,"div",2)(13,"po-button",7),u("p-click",function(){b(c);let r=q(16);return n.updateNameEmployeesVacations(),h(r.open())}),e(),i(14,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),e()()(),i(15,"po-modal",9,1)(17,"div",2),l(18,"po-info",10),N(19,"date"),l(20,"po-info",11),N(21,"date"),l(22,"po-info",12),e(),l(23,"hr"),i(24,"div",2),l(25,"po-info",13),e()()}if(a&2){let c=q(1);p(6),E("ngModel",n.initialPeriod),p(),E("ngModel",n.finalPeriod),m("p-min-date",n.initialPeriod),p(2),E("ngModel",n.days),m("p-options",n.daysOptions),p(2),E("ngModel",n.employeesVacations),m("p-options",n.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",H(19,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",H(21,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations)}},dependencies:[z,A,I,O,Z,L,j,$,T,k,ee,X],encapsulation:2})}return o})();var Qe=o=>({"docs-sample-code-tabs":o}),Ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO Multiselect - Vacation"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),e(),i(13,"pre",7),t(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),e(),i(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),e()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-vacation"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Qe,n.hideSampleCodeTabs)))},dependencies:[w,x,y,C,Te],encapsulation:2})}return o})();var Ae=(()=>{class o{formBuilder=B(ue);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,R.required],finalPeriod:[null,R.required],days:[null,R.required],employeesVacations:[null,R.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",1)(1,"h3"),t(2,"Collective vacations"),e(),l(3,"hr"),i(4,"div",2),l(5,"po-datepicker",3)(6,"po-datepicker",4),e(),i(7,"div",2),l(8,"po-multiselect",5)(9,"po-radio-group",6),e(),i(10,"div",2)(11,"po-button",7),u("p-click",function(){b(c);let r=q(14);return n.updateEmployeesVacations(),h(r.open())}),e(),i(12,"po-button",8),u("p-click",function(){return b(c),h(n.clean())}),e()()(),i(13,"po-modal",9,0)(15,"div",2),l(16,"po-info",10),N(17,"date"),l(18,"po-info",11),N(19,"date"),l(20,"po-info",12),e(),l(21,"hr"),i(22,"div",2),l(23,"po-info",13),e()()}a&2&&(m("formGroup",n.formCollectiveVacations),p(6),m("p-min-date",n.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",n.employees)("p-required",!0),p(),m("p-options",n.daysOptions)("p-columns",3),p(2),m("p-disabled",n.formCollectiveVacations.invalid),p(5),m("p-value",H(17,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",H(19,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations))},dependencies:[z,A,I,de,ce,L,j,$,T,k,ee,X],encapsulation:2})}return o})();var Xe=o=>({"docs-sample-code-tabs":o}),Oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO Multiselect - Vacation Reactive Form"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),e(),i(13,"pre",7),t(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),e(),i(19,"pre",9),t(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),e()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-vacation-reactive-form"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Xe,n.hideSampleCodeTabs)))},dependencies:[w,x,y,C,Ae],encapsulation:2})}return o})();function $e(o,U){o&1&&l(0,"po-tag",11),o&2&&m("p-icon",!0)}function et(o,U){o&1&&l(0,"po-tag",12),o&2&&m("p-icon",!0)}function tt(o,U){o&1&&l(0,"po-tag",13),o&2&&m("p-icon",!0)}function it(o,U){if(o&1&&(i(0,"div",0)(1,"div",7)(2,"div",8),t(3),e()(),i(4,"div",9)(5,"div",10),oe(6,$e,1,1,"po-tag",11)(7,et,1,1,"po-tag",12)(8,tt,1,1,"po-tag",13),e()()()),o&2){let s=U.$implicit;p(3),re(s.label),p(3),K(s.admin?6:-1),p(),K(s.access?7:-1),p(),K(!s.admin&&!s.access?8:-1)}}var Le=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?G({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-select",1),v("ngModelChange",function(d){return g(n.employee,d)||(n.employee=d),d}),e(),i(2,"po-select",2),v("ngModelChange",function(d){return g(n.typeAccess,d)||(n.typeAccess=d),d}),e(),i(3,"div",3)(4,"po-button",4),u("p-click",function(){return n.changeAccess()}),e()(),i(5,"po-multiselect",5),oe(6,it,9,4,"ng-template",6),e()()),a&2&&(p(),m("p-options",n.employees),E("ngModel",n.employee),p(),m("p-options",n.typeAccessValue),E("ngModel",n.typeAccess),p(2),m("p-disabled",!n.employee||!n.typeAccess),p(),m("p-options",n.options)("p-hide-select-all",!0))},dependencies:[A,O,L,ye,T,te,Se],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return o})();var ot=o=>({"docs-sample-code-tabs":o}),ke=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO Multiselect - Template"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),e(),i(13,"pre",7),t(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            @if (option.admin) {
              <po-tag p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            }
            @if (option.access) {
              <po-tag p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            }
            @if (!option.admin && !option.access) {
              <po-tag p-value="Sem acesso" p-type="danger" [p-icon]="true"> </po-tag>
            }
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),e(),i(19,"pre",9),t(20,`import { Component } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styles: [
    \`
      .containerFlex {
        display: flex;
        align-items: center;
      }

      .containerFlexTag {
        display: flex;
        gap: 2px;
        flex-direction: column;
      }

      .containerButton {
        display: flex;
        align-items: flex-end;
        padding: 8px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),e()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-template"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ot,n.hideSampleCodeTabs)))},dependencies:[w,x,y,C,Le],encapsulation:2})}return o})();var ae=(()=>{class o{http=B(me);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(ie(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(ie(a=>a.items))}static \u0275fac=function(a){return new(a||o)};static \u0275prov=pe({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var De=(()=>{class o{samplePoMultiselectHeroesService=B(ae);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[se([ae])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-multiselect",1),v("ngModelChange",function(d){return g(n.multiselect,d)||(n.multiselect=d),d}),u("p-change",function(d){return n.changeOptions(d)}),e(),i(2,"po-container",2),l(3,"po-table",3),e()()),a&2&&(p(),E("ngModel",n.multiselect),m("p-filter-service",n.filterService)("p-debounce-time",n.debounce),p(2),m("p-columns",n.columns)("p-items",n.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,Ee,T,ve],encapsulation:2})}return o})();var pt=o=>({"docs-sample-code-tabs":o}),qe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO Multiselect - Heroes - using API"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),e(),i(13,"pre",7),t(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),e(),i(19,"pre",9),t(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  samplePoMultiselectHeroesService = inject(SamplePoMultiselectHeroesService);

  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor() {
    const samplePoMultiselectHeroesService = this.samplePoMultiselectHeroesService;

    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),e(),i(21,"label",6),t(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),e(),i(23,"pre",9),t(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  private http = inject(HttpClient);

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),e()()()()(),i(25,"div",10),l(26,"sample-po-multiselect-heroes"),e(),l(27,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,pt,n.hideSampleCodeTabs)))},dependencies:[w,x,y,C,De],encapsulation:2})}return o})();var Fe=(()=>{class o{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"div",1)(2,"po-select",2),v("ngModelChange",function(d){return g(n.fieldLabel,d)||(n.fieldLabel=d),d}),u("p-change",function(d){return n.onChange(d)}),e(),i(3,"po-select",3),v("ngModelChange",function(d){return g(n.fieldValue,d)||(n.fieldValue=d),d}),u("p-change",function(d){return n.onChange(d)}),e()(),i(4,"div",1)(5,"div",0)(6,"po-multiselect",4),v("ngModelChange",function(d){return g(n.company,d)||(n.company=d),d}),e()(),i(7,"div",0),l(8,"po-info",5),e()()()),a&2&&(p(2),m("p-options",n.optionsSelect),E("ngModel",n.fieldLabel),p(),m("p-options",n.optionsSelect),E("ngModel",n.fieldValue),p(3),m("p-options",n.options)("p-field-value",n.fieldValue)("p-field-label",n.fieldLabel),E("ngModel",n.company),p(2),m("p-value",n.company))},dependencies:[A,O,T,te,k],encapsulation:2})}return o})();var mt=o=>({"docs-sample-code-tabs":o}),Be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO Multiselect - Array Any"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),e(),i(13,"pre",7),t(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),e(),i(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),e()()()()(),i(21,"div",10),l(22,"sample-po-multiselect-any-array"),e(),l(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,mt,n.hideSampleCodeTabs)))},dependencies:[w,x,y,C,Fe],encapsulation:2})}return o})();var We=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1353,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),i(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),i(7,"blockquote")(8,"p"),t(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),t(11,"FormsModule"),e(),t(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),t(14,"ReactiveFormsModule"),e(),t(15,", ambos nativos do Angular."),e()()(),i(16,"h3",3),t(17,"Componente"),e(),i(18,"h4",4)(19,"code",5),t(20,"PoMultiselectComponent"),e()(),i(21,"div",2)(22,"p"),t(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),e(),i(24,"p"),t(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),e(),i(26,"p"),t(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),e(),i(28,"p"),t(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),i(30,"code"),t(31,"p-filter-service"),e(),t(32,"."),e(),i(33,"h4"),t(34,"Boas pr\xE1ticas"),e(),i(35,"ul")(36,"li"),t(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),e(),i(38,"li"),t(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),e()(),i(40,"h4"),t(41,"Acessibilidade tratada no componente"),e(),i(42,"p"),t(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),i(44,"ul")(45,"li"),t(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),e(),i(47,"li"),t(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),e(),i(49,"li"),t(50,"Utilize a tecla Esc do teclado para fechar o listbox."),e(),i(51,"li"),t(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),e(),i(53,"li"),t(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),e()(),i(55,"h4"),t(56,"Tokens customiz\xE1veis"),e(),i(57,"p"),t(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),i(59,"blockquote")(60,"p"),t(61,"Para maiores informa\xE7\xF5es, acesse o guia "),i(62,"a",6),t(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(64,"."),e()(),i(65,"table")(66,"thead")(67,"tr")(68,"th"),t(69,"Propriedade"),e(),i(70,"th"),t(71,"Descri\xE7\xE3o"),e(),i(72,"th"),t(73,"Valor Padr\xE3o"),e()()(),i(74,"tbody")(75,"tr")(76,"td")(77,"strong"),t(78,"Default Values"),e()(),l(79,"td")(80,"td"),e(),i(81,"tr")(82,"td")(83,"code"),t(84,"--font-family"),e()(),i(85,"td"),t(86,"Fam\xEDlia tipogr\xE1fica usada"),e(),i(87,"td")(88,"code"),t(89,"var(--font-family-theme)"),e()()(),i(90,"tr")(91,"td")(92,"code"),t(93,"--font-size"),e()(),i(94,"td"),t(95,"Tamanho da fonte"),e(),i(96,"td")(97,"code"),t(98,"var(--font-size-default)"),e()()(),i(99,"tr")(100,"td")(101,"code"),t(102,"--text-color-placeholder"),e(),t(103," \xA0"),e(),i(104,"td"),t(105,"Cor do texto do placeholder"),e(),i(106,"td")(107,"code"),t(108,"var(--color-action-disabled)"),e()()(),i(109,"tr")(110,"td")(111,"code"),t(112,"--color"),e()(),i(113,"td"),t(114,"Cor principal do multiselect"),e(),i(115,"td")(116,"code"),t(117,"var(--color-neutral-dark-70)"),e()()(),i(118,"tr")(119,"td")(120,"code"),t(121,"--background"),e()(),i(122,"td"),t(123,"Cor de background"),e(),i(124,"td")(125,"code"),t(126,"var(--color-neutral-light-05)"),e()()(),i(127,"tr")(128,"td")(129,"strong"),t(130,"Hover"),e()(),l(131,"td")(132,"td"),e(),i(133,"tr")(134,"td")(135,"code"),t(136,"--color-hover"),e()(),i(137,"td"),t(138,"Cor principal no estado hover"),e(),i(139,"td")(140,"code"),t(141,"var(--color-action-hover)"),e()()(),i(142,"tr")(143,"td")(144,"code"),t(145,"--background-hover"),e()(),i(146,"td"),t(147,"Cor de background no estado hover"),e(),i(148,"td")(149,"code"),t(150,"var(--color-brand-01-lighter)"),e()()(),i(151,"tr")(152,"td")(153,"strong"),t(154,"Focused"),e()(),l(155,"td")(156,"td"),e(),i(157,"tr")(158,"td")(159,"code"),t(160,"--color-focused"),e()(),i(161,"td"),t(162,"Cor principal no estado de focus"),e(),i(163,"td")(164,"code"),t(165,"var(--color-action-default)"),e()()(),i(166,"tr")(167,"td")(168,"code"),t(169,"--outline-color-focused"),e(),t(170," \xA0"),e(),i(171,"td"),t(172,"Cor do outline do estado de focus"),e(),i(173,"td")(174,"code"),t(175,"var(--color-action-focus)"),e()()(),i(176,"tr")(177,"td")(178,"strong"),t(179,"Disabled"),e()(),l(180,"td")(181,"td"),e(),i(182,"tr")(183,"td")(184,"code"),t(185,"--color-disabled"),e()(),i(186,"td"),t(187,"Cor principal no estado disabled"),e(),i(188,"td")(189,"code"),t(190,"var(--color-action-disabled)"),e()()(),i(191,"tr")(192,"td")(193,"code"),t(194,"--background-disabled"),e(),t(195," \xA0"),e(),i(196,"td"),t(197,"Cor de background no estado disabled \xA0"),e(),i(198,"td")(199,"code"),t(200,"var(--color-neutral-light-20)"),e()()(),i(201,"tr")(202,"td")(203,"strong"),t(204,"Error"),e()(),l(205,"td")(206,"td"),e(),i(207,"tr")(208,"td")(209,"code"),t(210,"--color-error"),e()(),i(211,"td"),t(212,"Cor principal no estado error"),e(),i(213,"td")(214,"code"),t(215,"var(--color-feedback-negative-base)"),e()()()()()(),i(216,"div",7)(217,"h4",8),t(218,"Seletor"),e(),i(219,"pre",9),t(220,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-helper="PoHelperOptions"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),e()(),i(221,"h4",10),t(222,"Propriedades"),e(),i(223,"table",11)(224,"tr",12)(225,"th",13),t(226,"Nome"),e(),i(227,"th",13),t(228,"Tipo"),e(),i(229,"th",13),t(230,"Padr\xE3o"),e(),i(231,"th",13),t(232,"Descri\xE7\xE3o"),e()(),i(233,"tr",14)(234,"td",15)(235,"div",16)(236,"span",17),t(237," (p-additional-help)"),l(238,"br"),e()(),i(239,"div",18),t(240,"Deprecated"),e()(),i(241,"td",19)(242,"code",20),t(243,"EventEmitter"),e()(),i(244,"td",21),t(245,"-"),e(),i(246,"td",22)(247,"em")(248,"strong"),t(249,"(opcional)"),e()(),i(250,"p"),t(251,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(252,"code"),t(253,"p-help"),e(),t(254,"."),e()()(),i(255,"tr",14)(256,"td",15)(257,"div",23)(258,"span",24),t(259," p-additional-help-tooltip"),l(260,"br"),e()(),i(261,"div",18),t(262,"Deprecated"),e()(),i(263,"td",19)(264,"code",25),t(265,"string"),e()(),i(266,"td",21),t(267,"-"),e(),i(268,"td",22)(269,"em")(270,"strong"),t(271,"(opcional)"),e()(),i(272,"p"),t(273,"Exibe um \xEDcone de ajuda adicional ao "),i(274,"code"),t(275,"p-help"),e(),t(276,`, com o texto desta propriedade no tooltip.
Se o evento `),i(277,"code"),t(278,"p-additional-help"),e(),t(279,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(280,"strong"),t(281,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),i(282,"blockquote")(283,"p"),t(284,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),i(285,"tr",14)(286,"td",15)(287,"div",23)(288,"span",24),t(289," p-append-in-body"),l(290,"br"),e()()(),i(291,"td",19)(292,"code",26),t(293,"boolean"),e()(),i(294,"td",21)(295,"p")(296,"code"),t(297,"false"),e()()(),i(298,"td",22)(299,"em")(300,"strong"),t(301,"(opcional)"),e()(),i(302,"p"),t(303,"Define que o "),i(304,"code"),t(305,"listbox"),e(),t(306," e/ou tooltip ("),i(307,"code"),t(308,"p-additional-help-tooltip"),e(),t(309," e/ou "),i(310,"code"),t(311,"p-error-limit"),e(),t(312,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),e(),i(313,"blockquote")(314,"p"),t(315,"Quando utilizado com "),i(316,"code"),t(317,"p-additional-help-tooltip"),e(),t(318,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),i(319,"tr",14)(320,"td",15)(321,"div",23)(322,"span",24),t(323," p-auto-focus"),l(324,"br"),e()()(),i(325,"td",19)(326,"code",26),t(327,"boolean"),e()(),i(328,"td",21)(329,"p")(330,"code"),t(331,"false"),e()()(),i(332,"td",22)(333,"em")(334,"strong"),t(335,"(opcional)"),e()(),i(336,"p"),t(337,"Aplica foco no elemento ao ser iniciado."),e(),i(338,"blockquote")(339,"p"),t(340,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),i(341,"tr",14)(342,"td",15)(343,"div",23)(344,"span",24),t(345," p-auto-height"),l(346,"br"),e()()(),i(347,"td",19)(348,"code",26),t(349,"boolean"),e()(),i(350,"td",21)(351,"p")(352,"code"),t(353,"false"),e()()(),i(354,"td",22)(355,"em")(356,"strong"),t(357,"(opcional)"),e()(),i(358,"p"),t(359,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),e(),i(360,"blockquote")(361,"p"),t(362,"O valor padr\xE3o ser\xE1 "),i(363,"code"),t(364,"true"),e(),t(365," quando houver servi\xE7o ("),i(366,"code"),t(367,"p-filter-service"),e(),t(368,")."),e()()()(),i(369,"tr",14)(370,"td",15)(371,"div",16)(372,"span",17),t(373," (p-blur)"),l(374,"br"),e()()(),i(375,"td",19)(376,"code",20),t(377,"EventEmitter"),e()(),i(378,"td",21),t(379,"-"),e(),i(380,"td",22)(381,"em")(382,"strong"),t(383,"(opcional)"),e()(),i(384,"p"),t(385,"Evento disparado ao sair do campo."),e()()(),i(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),t(390," (p-change)"),l(391,"br"),e()()(),i(392,"td",19)(393,"code",20),t(394,"EventEmitter"),e()(),i(395,"td",21),t(396,"-"),e(),i(397,"td",22)(398,"em")(399,"strong"),t(400,"(opcional)"),e()(),i(401,"p"),t(402,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),e()()(),i(403,"tr",14)(404,"td",15)(405,"div",23)(406,"span",24),t(407," p-debounce-time"),l(408,"br"),e()()(),i(409,"td",19)(410,"code",27),t(411,"number"),e()(),i(412,"td",21)(413,"p")(414,"code"),t(415,"400"),e()()(),i(416,"td",22)(417,"em")(418,"strong"),t(419,"(opcional)"),e()(),i(420,"p"),t(421,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),e(),i(422,"blockquote")(423,"p"),t(424,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(425,"code"),t(426,"p-filter-service"),e(),t(427,") e somente ser\xE1 aceito valor maior do que "),i(428,"em"),t(429,"zero"),e(),t(430,"."),e()()()(),i(431,"tr",14)(432,"td",15)(433,"div",23)(434,"span",24),t(435," p-disabled"),l(436,"br"),e()()(),i(437,"td",19)(438,"code",26),t(439,"boolean"),e()(),i(440,"td",21)(441,"p")(442,"code"),t(443,"false"),e()()(),i(444,"td",22)(445,"em")(446,"strong"),t(447,"(opcional)"),e()(),i(448,"p"),t(449,"Indica que o campo ser\xE1 desabilitado."),e()()(),i(450,"tr",14)(451,"td",15)(452,"div",23)(453,"span",24),t(454," p-error-limit"),l(455,"br"),e()()(),i(456,"td",19)(457,"code",26),t(458,"boolean"),e()(),i(459,"td",21)(460,"p")(461,"code"),t(462,"false"),e()()(),i(463,"td",22)(464,"em")(465,"strong"),t(466,"(opcional)"),e()(),i(467,"p"),t(468,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),i(469,"blockquote")(470,"p"),t(471,"Caso essa propriedade seja definida como "),i(472,"code"),t(473,"true"),e(),t(474,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),i(475,"tr",14)(476,"td",15)(477,"div",23)(478,"span",24),t(479," p-field-error-message"),l(480,"br"),e()()(),i(481,"td",19)(482,"code",25),t(483,"string"),e()(),i(484,"td",21),t(485,"-"),e(),i(486,"td",22)(487,"em")(488,"strong"),t(489,"(opcional)"),e()(),i(490,"p"),t(491,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),i(492,"blockquote")(493,"p"),t(494,"Necess\xE1rio que a propriedade "),i(495,"code"),t(496,"p-required"),e(),t(497," esteja habilitada."),e()()()(),i(498,"tr",14)(499,"td",15)(500,"div",23)(501,"span",24),t(502," p-field-label"),l(503,"br"),e()()(),i(504,"td",19)(505,"code",25),t(506,"string"),e()(),i(507,"td",21)(508,"p")(509,"code"),t(510,"label"),e()()(),i(511,"td",22)(512,"em")(513,"strong"),t(514,"(opcional)"),e()(),i(515,"p"),t(516,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(517,"code"),t(518,"p-options"),e(),t(519,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),i(520,"p"),t(521,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(522,"code"),t(523,"PoMultiSelectOption"),e(),t(524,"."),e()()(),i(525,"tr",14)(526,"td",15)(527,"div",23)(528,"span",24),t(529," p-field-value"),l(530,"br"),e()()(),i(531,"td",19)(532,"code",25),t(533,"string"),e()(),i(534,"td",21)(535,"p")(536,"code"),t(537,"value"),e()()(),i(538,"td",22)(539,"em")(540,"strong"),t(541,"(opcional)"),e()(),i(542,"p"),t(543,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(544,"code"),t(545,"p-options"),e(),t(546,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),i(547,"p"),t(548,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(549,"code"),t(550,"PoMultiSelectOption"),e(),t(551,"."),e()()(),i(552,"tr",14)(553,"td",15)(554,"div",23)(555,"span",24),t(556," p-filter-mode"),l(557,"br"),e()()(),i(558,"td",19)(559,"code",28),t(560,"PoMultiselectFilterMode"),e()(),i(561,"td",21)(562,"p")(563,"code"),t(564,"startsWith"),e()()(),i(565,"td",22)(566,"em")(567,"strong"),t(568,"(opcional)"),e()(),i(569,"p"),t(570,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),e()()(),i(571,"tr",14)(572,"td",15)(573,"div",23)(574,"span",24),t(575," p-filter-service"),l(576,"br"),e()()(),i(577,"td",19)(578,"code",25),t(579,"string "),e(),i(580,"code",29),t(581," PoMultiselectFilter"),e()(),i(582,"td",21),t(583,"-"),e(),i(584,"td",22)(585,"em")(586,"strong"),t(587,"(opcional)"),e()(),i(588,"p"),t(589,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),e(),i(590,"p"),t(591,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),i(592,"code"),t(593,"PoMultiselectFilter"),e(),t(594,"."),e(),i(595,"p"),t(596,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),i(597,"a",30),t(598,"API PO UI"),e(),t(599," e utilizar as propriedades "),i(600,"code"),t(601,"p-field-label"),e(),t(602," e "),i(603,"code"),t(604,"p-field-value"),e(),t(605," para a constru\xE7\xE3o da lista de itens."),e(),i(606,"p"),t(607,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),i(608,"pre")(609,"code"),t(610,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),e()(),i(611,"p"),t(612,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),e(),i(613,"pre")(614,"code"),t(615,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),e()()()(),i(616,"tr",14)(617,"td",15)(618,"div",23)(619,"span",24),t(620," p-help"),l(621,"br"),e()()(),i(622,"td",19)(623,"code",25),t(624,"string"),e()(),i(625,"td",21),t(626,"-"),e(),i(627,"td",22)(628,"em")(629,"strong"),t(630,"(opcional)"),e()(),i(631,"p"),t(632,"Texto de apoio para o campo."),e()()(),i(633,"tr",14)(634,"td",15)(635,"div",23)(636,"span",24),t(637," p-hide-search"),l(638,"br"),e()()(),i(639,"td",19)(640,"code",26),t(641,"boolean"),e()(),i(642,"td",21)(643,"p")(644,"code"),t(645,"false"),e()()(),i(646,"td",22)(647,"em")(648,"strong"),t(649,"(opcional)"),e()(),i(650,"p"),t(651,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),e()()(),i(652,"tr",14)(653,"td",15)(654,"div",23)(655,"span",24),t(656," p-hide-select-all"),l(657,"br"),e()()(),i(658,"td",19)(659,"code",26),t(660,"boolean"),e()(),i(661,"td",21)(662,"p")(663,"code"),t(664,"false"),e()()(),i(665,"td",22)(666,"em")(667,"strong"),t(668,"(opcional)"),e()(),i(669,"p"),t(670,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),e()()(),i(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),t(675," (p-keydown)"),l(676,"br"),e()()(),i(677,"td",19)(678,"code",20),t(679,"EventEmitter"),e()(),i(680,"td",21),t(681,"-"),e(),i(682,"td",22)(683,"em")(684,"strong"),t(685,"(opcional)"),e()(),i(686,"p"),t(687,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(688,"code"),t(689,"KeyboardEvent"),e(),t(690," com informa\xE7\xF5es sobre a tecla."),e()()(),i(691,"tr",14)(692,"td",15)(693,"div",23)(694,"span",24),t(695," p-label"),l(696,"br"),e()()(),i(697,"td",19)(698,"code",25),t(699,"string"),e()(),i(700,"td",21),t(701,"-"),e(),i(702,"td",22)(703,"em")(704,"strong"),t(705,"(opcional)"),e()(),i(706,"p"),t(707,"Label no componente."),e()()(),i(708,"tr",14)(709,"td",15)(710,"div",23)(711,"span",24),t(712," p-label-text-wrap"),l(713,"br"),e()()(),i(714,"td",19)(715,"code",26),t(716,"boolean"),e()(),i(717,"td",21)(718,"p")(719,"code"),t(720,"false"),e()()(),i(721,"td",22)(722,"em")(723,"strong"),t(724,"(opcional)"),e()(),i(725,"p"),t(726,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(727,"code"),t(728,"p-label"),e(),t(729,". Quando "),i(730,"code"),t(731,"p-label-text-wrap"),e(),t(732,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),e()()(),i(733,"tr",14)(734,"td",15)(735,"div",23)(736,"span",24),t(737," p-listbox-control-position"),l(738,"br"),e()()(),i(739,"td",19)(740,"code",31),t(741,"'top' "),e(),i(742,"code",32),t(743," 'bottom'"),e()(),i(744,"td",21)(745,"p")(746,"code"),t(747,"bottom"),e()()(),i(748,"td",22)(749,"em")(750,"strong"),t(751,"(opcional)"),e()(),i(752,"p"),t(753,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(754,"code"),t(755,"listbox"),e(),t(756," em rela\xE7\xE3o ao campo ("),i(757,"code"),t(758,"top"),e(),t(759," ou "),i(760,"code"),t(761,"bottom"),e(),t(762,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),e()()(),i(763,"tr",14)(764,"td",15)(765,"div",23)(766,"span",24),t(767," p-literals"),l(768,"br"),e()()(),i(769,"td",19)(770,"code",33),t(771,"PoMultiselectLiterals"),e()(),i(772,"td",21),t(773,"-"),e(),i(774,"td",22)(775,"em")(776,"strong"),t(777,"(opcional)"),e()(),i(778,"p"),t(779,"Objeto com as literais usadas no "),i(780,"code"),t(781,"po-multiselect"),e(),t(782,"."),e(),i(783,"p"),t(784,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),i(785,"pre")(786,"code"),t(787,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),e()(),i(788,"p"),t(789,"Ou passando apenas as literais que deseja customizar:"),e(),i(790,"pre")(791,"code"),t(792,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),e()(),i(793,"p"),t(794,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),e(),i(795,"pre")(796,"code"),t(797,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),e()(),i(798,"blockquote")(799,"p"),t(800,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(801,"a",34)(802,"code"),t(803,"PoI18nService"),e()(),t(804," ou do browser."),e()()()(),i(805,"tr",14)(806,"td",15)(807,"div",23)(808,"span",24),t(809," name"),l(810,"br"),e()()(),i(811,"td",19)(812,"code",25),t(813,"string"),e()(),i(814,"td",21),t(815,"-"),e(),i(816,"td",22)(817,"p"),t(818,"Nome do componente."),e()()(),i(819,"tr",14)(820,"td",15)(821,"div",23)(822,"span",24),t(823," p-optional"),l(824,"br"),e()()(),i(825,"td",19)(826,"code",26),t(827,"boolean"),e()(),i(828,"td",21)(829,"p")(830,"code"),t(831,"false"),e()()(),i(832,"td",22)(833,"em")(834,"strong"),t(835,"(opcional)"),e()(),i(836,"p"),t(837,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),i(838,"blockquote")(839,"p"),t(840,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),i(841,"ul")(842,"li"),t(843,"O campo conter "),i(844,"code"),t(845,"p-required"),e(),t(846,";"),e(),i(847,"li"),t(848,"N\xE3o possuir "),i(849,"code"),t(850,"p-help"),e(),t(851," e/ou "),i(852,"code"),t(853,"p-label"),e(),t(854,"."),e()()()(),i(855,"tr",14)(856,"td",15)(857,"div",23)(858,"span",24),t(859," p-options"),l(860,"br"),e()()(),i(861,"td",19)(862,"code",35),t(863,"Array<PoMultiselectOption "),e(),i(864,"code",36),t(865," any>"),e()(),i(866,"td",21),t(867,"-"),e(),i(868,"td",22)(869,"p"),t(870,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),e(),i(871,"blockquote")(872,"p"),t(873,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),i(874,"pre")(875,"code"),t(876,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),e()(),i(877,"blockquote")(878,"p"),t(879,"A lista pode ser definida utilizando um array com o valor representando "),i(880,"code"),t(881,"value"),e(),t(882," e "),i(883,"code"),t(884,"label"),e(),t(885," das seguintes formas:"),e()(),i(886,"pre")(887,"code"),t(888,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),e()(),i(889,"pre")(890,"code"),t(891,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),e()(),i(892,"ul")(893,"li"),t(894,"Aconselha-se utilizar valores distintos no "),i(895,"code"),t(896,"label"),e(),t(897," e "),i(898,"code"),t(899,"value"),e(),t(900," dos itens."),e()()()(),i(901,"tr",14)(902,"td",15)(903,"div",23)(904,"span",24),t(905," p-placeholder"),l(906,"br"),e()()(),i(907,"td",19)(908,"code",25),t(909,"string"),e()(),i(910,"td",21),t(911,"-"),e(),i(912,"td",22)(913,"em")(914,"strong"),t(915,"(opcional)"),e()(),i(916,"p"),t(917,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),i(918,"tr",14)(919,"td",15)(920,"div",23)(921,"span",24),t(922," p-placeholder-search"),l(923,"br"),e()()(),i(924,"td",19)(925,"code",25),t(926,"string"),e()(),i(927,"td",21)(928,"p")(929,"code"),t(930,"Buscar"),e()()(),i(931,"td",22)(932,"em")(933,"strong"),t(934,"(opcional)"),e()(),i(935,"p"),t(936,"Placeholder do campo de pesquisa."),e(),i(937,"blockquote")(938,"p"),t(939,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),e()()()(),i(940,"tr",14)(941,"td",15)(942,"div",23)(943,"span",24),t(944," p-helper"),l(945,"br"),e()()(),i(946,"td",19)(947,"code",37),t(948,"PoHelperOptions"),e()(),i(949,"td",21),t(950,"-"),e(),i(951,"td",22)(952,"em")(953,"strong"),t(954,"(opcional)"),e()(),i(955,"p"),t(956,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),e(),i(957,"blockquote")(958,"p"),t(959,"Caso o "),i(960,"code"),t(961,"p-label"),e(),t(962,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),i(963,"code"),t(964,"p-additional-help-tooltip"),e(),t(965," e "),i(966,"code"),t(967,"p-additional-help"),e(),t(968,") ser\xE1 ignorado."),e()()()(),i(969,"tr",14)(970,"td",15)(971,"div",23)(972,"span",24),t(973," p-required"),l(974,"br"),e()()(),i(975,"td",19)(976,"code",26),t(977,"boolean"),e()(),i(978,"td",21)(979,"p")(980,"code"),t(981,"false"),e()()(),i(982,"td",22)(983,"em")(984,"strong"),t(985,"(opcional)"),e()(),i(986,"p"),t(987,"Define que o campo ser\xE1 obrigat\xF3rio."),e(),i(988,"blockquote")(989,"p"),t(990,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(991,"code"),t(992,"(p-disabled)"),e(),t(993,"."),e()()()(),i(994,"tr",14)(995,"td",15)(996,"div",23)(997,"span",24),t(998," p-show-required"),l(999,"br"),e()()(),i(1e3,"td",19)(1001,"code",26),t(1002,"boolean"),e()(),i(1003,"td",21),t(1004,"-"),e(),i(1005,"td",22)(1006,"p"),t(1007,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),i(1008,"blockquote")(1009,"p"),t(1010,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),i(1011,"ul")(1012,"li"),t(1013,"N\xE3o possuir "),i(1014,"code"),t(1015,"p-help"),e(),t(1016," e/ou "),i(1017,"code"),t(1018,"p-label"),e(),t(1019,"."),e()()()(),i(1020,"tr",14)(1021,"td",15)(1022,"div",23)(1023,"span",24),t(1024," p-size"),l(1025,"br"),e()()(),i(1026,"td",19)(1027,"code",25),t(1028,"string"),e()(),i(1029,"td",21)(1030,"p")(1031,"code"),t(1032,"medium"),e()()(),i(1033,"td",22)(1034,"em")(1035,"strong"),t(1036,"(opcional)"),e()(),i(1037,"p"),t(1038,"Define o tamanho do componente:"),e(),i(1039,"ul")(1040,"li")(1041,"code"),t(1042,"small"),e(),t(1043,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),i(1044,"li")(1045,"code"),t(1046,"medium"),e(),t(1047,": altura do input como 44px."),e()(),i(1048,"blockquote")(1049,"p"),t(1050,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1051,"code"),t(1052,"medium"),e(),t(1053,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1054,"a",38),t(1055,"po-theme"),e(),t(1056,"."),e()()()(),i(1057,"tr",14)(1058,"td",15)(1059,"div",23)(1060,"span",24),t(1061," p-sort"),l(1062,"br"),e()()(),i(1063,"td",19)(1064,"code",26),t(1065,"boolean"),e()(),i(1066,"td",21)(1067,"p")(1068,"code"),t(1069,"false"),e()()(),i(1070,"td",22)(1071,"em")(1072,"strong"),t(1073,"(opcional)"),e()(),i(1074,"p"),t(1075,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),e()()()(),i(1076,"h3",10),t(1077,"M\xE9todos"),e(),i(1078,"table",39)(1079,"tr",14)(1080,"th",40)(1081,"div",23)(1082,"h4")(1083,"span",24),t(1084," focus "),e()()()()(),i(1085,"tr",22)(1086,"td",22)(1087,"p"),t(1088,"Fun\xE7\xE3o que atribui foco ao componente."),e(),i(1089,"p"),t(1090,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),i(1091,"pre")(1092,"code"),t(1093,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),e()()()()(),l(1094,"br"),i(1095,"h3"),t(1096,"Interfaces"),e(),i(1097,"h4",41)(1098,"code",5),t(1099,"PoMultiselectFilter"),e()(),i(1100,"div",2)(1101,"p"),t(1102,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),e()(),i(1103,"h4",10),t(1104,"M\xE9todos"),e(),i(1105,"table",39)(1106,"tr",14)(1107,"th",40)(1108,"div",23)(1109,"h4")(1110,"span",24),t(1111," getFilteredData "),e()()()()(),i(1112,"tr",22)(1113,"td",22)(1114,"p"),t(1115,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),i(1116,"code"),t(1117,"PoMultiselectOption"),e(),t(1118,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),e()()()(),i(1119,"h5")(1120,"b"),t(1121,"Par\xE2metros"),e()(),i(1122,"table",11)(1123,"tr",12)(1124,"th",13),t(1125,"Nome"),e(),i(1126,"th",13),t(1127,"Tipo"),e(),i(1128,"th",13),t(1129,"Descri\xE7\xE3o"),e()(),i(1130,"tr",14)(1131,"td",15),t(1132," params"),e(),i(1133,"td",19)(1134,"code",42),t(1135," { property: string, value: string } "),e()(),i(1136,"td",22)(1137,"p"),t(1138,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()()(),l(1139,"br"),i(1140,"table",39)(1141,"tr",14)(1142,"th",40)(1143,"div",23)(1144,"h4")(1145,"span",24),t(1146," getObjectsByValues "),e()()()()(),i(1147,"tr",22)(1148,"td",22)(1149,"p"),t(1150,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),i(1151,"code"),t(1152,"PoMultiselectOption"),e(),t(1153,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),e()()()(),i(1154,"h5")(1155,"b"),t(1156,"Par\xE2metros"),e()(),i(1157,"table",11)(1158,"tr",12)(1159,"th",13),t(1160,"Nome"),e(),i(1161,"th",13),t(1162,"Tipo"),e(),i(1163,"th",13),t(1164,"Descri\xE7\xE3o"),e()(),i(1165,"tr",14)(1166,"td",15),t(1167," values"),e(),i(1168,"td",19)(1169,"code",43),t(1170," Array<string "),e(),i(1171,"code",44),t(1172," number> "),e()(),i(1173,"td",22)(1174,"p"),t(1175,"Array com os valores a serem buscados."),e()()()(),l(1176,"br"),i(1177,"h4",41)(1178,"code",5),t(1179,"PoMultiselectLiterals"),e()(),i(1180,"div",2)(1181,"p"),t(1182,"Interface para defini\xE7\xE3o das literais usadas no "),i(1183,"code"),t(1184,"po-multiselect"),e(),t(1185,"."),e()(),i(1186,"h4",10),t(1187,"Propriedades"),e(),i(1188,"table",11)(1189,"tr",12)(1190,"th",13),t(1191,"Nome"),e(),i(1192,"th",13),t(1193,"Tipo"),e(),i(1194,"th",13),t(1195,"Descri\xE7\xE3o"),e()(),i(1196,"tr",14)(1197,"td",15)(1198,"div",23)(1199,"span",24),t(1200," noData"),l(1201,"br"),e()()(),i(1202,"td",19)(1203,"code",25),t(1204,"string"),e()(),i(1205,"td",22)(1206,"em")(1207,"strong"),t(1208,"(opcional)"),e()(),i(1209,"p"),t(1210,"Texto exibido quando n\xE3o houver dados encontrados na busca."),e()()(),i(1211,"tr",14)(1212,"td",15)(1213,"div",23)(1214,"span",24),t(1215," placeholderSearch"),l(1216,"br"),e()()(),i(1217,"td",19)(1218,"code",25),t(1219,"string"),e()(),i(1220,"td",22)(1221,"em")(1222,"strong"),t(1223,"(opcional)"),e()(),i(1224,"p"),t(1225,"Texto do "),i(1226,"em"),t(1227,"placeholder"),e(),t(1228," do campo de busca."),e()()(),i(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),t(1233," selectAll"),l(1234,"br"),e()()(),i(1235,"td",19)(1236,"code",25),t(1237,"string"),e()(),i(1238,"td",22)(1239,"em")(1240,"strong"),t(1241,"(opcional)"),e()(),i(1242,"p"),t(1243,"Texto exibido no bot\xE3o de selecionar todos."),e()()(),i(1244,"tr",14)(1245,"td",15)(1246,"div",23)(1247,"span",24),t(1248," selectItem"),l(1249,"br"),e()()(),i(1250,"td",19)(1251,"code",25),t(1252,"string"),e()(),i(1253,"td",22)(1254,"em")(1255,"strong"),t(1256,"(opcional)"),e()(),i(1257,"p"),t(1258,"Texto exibido na propriedade placeholder."),e()()()(),i(1259,"h4",41)(1260,"code",5),t(1261,"PoMultiselectOption"),e()(),i(1262,"div",2)(1263,"p"),t(1264,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),e()(),i(1265,"h4",10),t(1266,"Propriedades"),e(),i(1267,"table",11)(1268,"tr",12)(1269,"th",13),t(1270,"Nome"),e(),i(1271,"th",13),t(1272,"Tipo"),e(),i(1273,"th",13),t(1274,"Descri\xE7\xE3o"),e()(),i(1275,"tr",14)(1276,"td",15)(1277,"div",23)(1278,"span",24),t(1279," label"),l(1280,"br"),e()()(),i(1281,"td",19)(1282,"code",25),t(1283,"string"),e()(),i(1284,"td",22)(1285,"p"),t(1286,"Label exibido nos itens da lista."),e()()(),i(1287,"tr",14)(1288,"td",15)(1289,"div",23)(1290,"span",24),t(1291," value"),l(1292,"br"),e()()(),i(1293,"td",19)(1294,"code",25),t(1295,"string "),e(),i(1296,"code",27),t(1297," number"),e()(),i(1298,"td",22)(1299,"p"),t(1300,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()(),i(1301,"h3"),t(1302,"Enums"),e(),i(1303,"h4",4)(1304,"code",5),t(1305,"PoMultiselectFilterMode"),e()(),i(1306,"div",2)(1307,"p"),t(1308,"Define o tipo de busca usado no po-multiselect."),e()(),i(1309,"h4",10),t(1310,"Propriedades"),e(),i(1311,"table",11)(1312,"tr",12)(1313,"th",13),t(1314,"Nome"),e(),i(1315,"th",13),t(1316,"Descri\xE7\xE3o"),e()(),i(1317,"tr",14)(1318,"td",15)(1319,"div",23)(1320,"span",24),t(1321," startsWith"),l(1322,"br"),e()()(),i(1323,"td",22)(1324,"p"),t(1325,"Verifica se o texto "),i(1326,"em"),t(1327,"inicia"),e(),t(1328," com o valor pesquisado."),e()()(),i(1329,"tr",14)(1330,"td",15)(1331,"div",23)(1332,"span",24),t(1333," contains"),l(1334,"br"),e()()(),i(1335,"td",22)(1336,"p"),t(1337,"Verifica se o texto "),i(1338,"em"),t(1339,"cont\xE9m"),e(),t(1340," o valor pesquisado."),e()()(),i(1341,"tr",14)(1342,"td",15)(1343,"div",23)(1344,"span",24),t(1345," endsWith"),l(1346,"br"),e()()(),i(1347,"td",22)(1348,"p"),t(1349,"Verifica se o texto "),i(1350,"em"),t(1351,"finaliza"),e(),t(1352," com o valor pesquisado."),e()()()()())},dependencies:[x],encapsulation:2})}return o})();var Ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(ne(be),ne(he))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-multiselect-doc"),e(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),e()()()),a&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Ce,y,C,Pe,we,Ve,Oe,ke,qe,Be,We],encapsulation:2})}return o})();var ut=[{path:"",component:Ne}],He=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=Q({imports:[le.forChild(ut),le]})}return o})();var ci=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=Y({type:o});static \u0275inj=Q({imports:[xe,He]})}return o})();export{ci as DocPoMultiselectModule};
