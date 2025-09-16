import{o as y,p as Le}from"./chunk-7QXRNAIE.js";import{Aa as Z,Ga as ke,Ia as q,K,P as fe,R as X,Ra as H,Sa as ye,Wa as N,mb as Pe,ta as Y,v as z,wa as Ce,yb as C,zb as k}from"./chunk-DJTNC6KO.js";import{Bb as w,Ca as P,Cc as T,D as me,Dc as V,Ec as $,Fc as A,Ga as pe,Gc as I,Jc as Se,Ka as i,Kc as be,L as O,La as t,M as G,Ma as n,Mb as xe,Oc as ge,P as h,Qa as J,Ra as x,Sa as se,T as c,Tc as ve,U as E,Vc as he,Wa as ne,Xc as ae,Zb as j,a as U,ab as ue,bb as e,c as re,db as L,fb as b,gb as g,hb as v,ia as d,ib as _,ja as ie,jb as W,kb as F,o as te,pa as S,qa as Q,qb as ce,rb as Ee,va as de,za as u,zc as oe}from"./chunk-4WWO4UYO.js";var Fe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,We,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Fe],encapsulation:2})}return a})();var D=(()=>{class a{httpClient=h(j);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=re(m,["filterParams","advancedFilters"]),s=U(U(U({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var qe=(()=>{class a{sampleFilterService=h(D);additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Ce.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[_([D])],decls:26,vars:52,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=J();i(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),n(1,"hr"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"hr"),i(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),i(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),i(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),i(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),i(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),i(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),i(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),i(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),i(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),i(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),i(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),i(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),i(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),i(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),i(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),i(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[I,T,V,A,$,z,K,fe,X,ke,q,H,ye,N],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-lookup>

<hr />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
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

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  additionalHelpTooltip: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Qe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,qe],encapsulation:2})}return a})();var $e=()=>({modalTitle:"Heroes available for mission"}),Te=(()=>{class a{service=h(D);notification=h(Y);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[_([D])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=J();i(0,"div",1),n(1,"po-info",2),t(),n(2,"hr"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),i(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),i(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ue(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",W(10,$e)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[I,T,V,A,$,z,q,H,N],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Xe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Ze=()=>["nickname","label"],et=()=>({modalTitle:"Heroes available for mission"}),_e=(()=>{class a{service=h(D);notification=h(Y);formBuilder=h(ge);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,oe.required],vehicle:[null,oe.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[_([D])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"hr"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",W(7,Ze))("p-filter-service",o.service)("p-literals",W(8,et)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[I,T,V,Se,be,z,q,H,N],encapsulation:2})}return a})();var it=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,it,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,_e],encapsulation:2})}return a})();var le=(()=>{class a{http=h(j);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(te(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(te(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ot(a,ct){if(a&1&&(i(0,"div",0),n(1,"po-table",3),t()),a&2){let r=se();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Oe=(()=>{class a{filterService=h(le);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[_([le])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),n(2,"hr"),i(3,"div",0)(4,"po-lookup",2),ce(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),de(6,ot,2,4,"div",0)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),ne("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),ne("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),pe(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[T,A,X,q,Z,xe],encapsulation:2})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<hr />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,lt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var Ve=(()=>{class a{http=h(j);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(me("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ie=(()=>{class a{service=h(Ve);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,K,q,Z],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ie],encapsulation:2})}return a})();var He=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5289,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),i(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),i(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),i(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),i(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),i(36,"a",6),e(37,"modelo"),t(),e(38," como "),i(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),i(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),i(44,"code"),e(45,"po-select"),t(),e(46," ou o "),i(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),i(53,"p"),e(54,"Importante:"),t(),i(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),i(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),i(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),i(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),i(275,"h4",12),e(276,"Propriedades"),t(),i(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),i(281,"th",15),e(282,"Tipo"),t(),i(283,"th",15),e(284,"Padr\xE3o"),t(),i(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),n(292,"br"),t()(),i(293,"div",20),e(294,"Deprecated"),t()(),i(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),i(298,"td",23),e(299,"-"),t(),i(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),i(304,"p"),e(305,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(306,"code"),e(307,"p-help"),t(),e(308,"."),t()()(),i(309,"tr",16)(310,"td",17)(311,"div",25)(312,"span",26),e(313," p-additional-help-tooltip"),n(314,"br"),t()(),i(315,"div",20),e(316,"Deprecated"),t()(),i(317,"td",21)(318,"code",27),e(319,"string"),t()(),i(320,"td",23),e(321,"-"),t(),i(322,"td",24)(323,"em")(324,"strong"),e(325,"(opcional)"),t()(),i(326,"p"),e(327,"Exibe um \xEDcone de ajuda adicional ao "),i(328,"code"),e(329,"p-help"),t(),e(330,`, com o texto desta propriedade no tooltip.
Se o evento `),i(331,"code"),e(332,"p-additional-help"),t(),e(333,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(334,"strong"),e(335,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(336,"blockquote")(337,"p"),e(338,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(339,"tr",16)(340,"td",17)(341,"div",25)(342,"span",26),e(343," p-advanced-filters"),n(344,"br"),t()()(),i(345,"td",21)(346,"code",28),e(347,"Array<PoLookupAdvancedFilter>"),t()(),i(348,"td",23),e(349,"-"),t(),i(350,"td",24)(351,"em")(352,"strong"),e(353,"(opcional)"),t()(),i(354,"p"),e(355,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(356,"blockquote")(357,"p"),e(358,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(359,"p"),e(360,"Exemplo de URL com busca avan\xE7ada:"),t(),i(361,"pre")(362,"code"),e(363,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),i(364,"p"),e(365,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(366,"pre")(367,"code"),e(368,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),i(369,"tr",16)(370,"td",17)(371,"div",25)(372,"span",26),e(373," p-append-in-body"),n(374,"br"),t()()(),i(375,"td",21)(376,"code",29),e(377,"boolean"),t()(),i(378,"td",23)(379,"p")(380,"code"),e(381,"false"),t()()(),i(382,"td",24)(383,"em")(384,"strong"),e(385,"(opcional)"),t()(),i(386,"p"),e(387,"Define que o tooltip ("),i(388,"code"),e(389,"p-additional-help-tooltip"),t(),e(390," e/ou "),i(391,"code"),e(392,"p-error-limit"),t(),e(393,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(394,"blockquote")(395,"p"),e(396,"Quando utilizado com "),i(397,"code"),e(398,"p-additional-help-tooltip"),t(),e(399,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(400,"tr",16)(401,"td",17)(402,"div",25)(403,"span",26),e(404," p-auto-focus"),n(405,"br"),t()()(),i(406,"td",21)(407,"code",29),e(408,"boolean"),t()(),i(409,"td",23)(410,"p")(411,"code"),e(412,"false"),t()()(),i(413,"td",24)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),i(417,"p"),e(418,"Aplica foco no elemento ao ser iniciado."),t(),i(419,"blockquote")(420,"p"),e(421,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(422,"tr",16)(423,"td",17)(424,"div",25)(425,"span",26),e(426," p-auto-height"),n(427,"br"),t()()(),i(428,"td",21)(429,"code",29),e(430,"boolean"),t()(),i(431,"td",23)(432,"p")(433,"code"),e(434,"false"),t()()(),i(435,"td",24)(436,"em")(437,"strong"),e(438,"(opcional)"),t()(),i(439,"p"),e(440,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(441,"tr",16)(442,"td",17)(443,"div",18)(444,"span",19),e(445," (p-change)"),n(446,"br"),t()()(),i(447,"td",21)(448,"code",22),e(449,"EventEmitter"),t()(),i(450,"td",23),e(451,"-"),t(),i(452,"td",24)(453,"em")(454,"strong"),e(455,"(opcional)"),t()(),i(456,"p"),e(457,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(458,"tr",16)(459,"td",17)(460,"div",18)(461,"span",19),e(462," (p-change-visible-columns)"),n(463,"br"),t()()(),i(464,"td",21)(465,"code",22),e(466,"EventEmitter"),t()(),i(467,"td",23),e(468,"-"),t(),i(469,"td",24)(470,"em")(471,"strong"),e(472,"(opcional)"),t()(),i(473,"p"),e(474,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(475,"p"),e(476,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(477,"tr",16)(478,"td",17)(479,"div",25)(480,"span",26),e(481," p-clean"),n(482,"br"),t()()(),i(483,"td",21)(484,"code",29),e(485,"boolean"),t()(),i(486,"td",23),e(487,"-"),t(),i(488,"td",24)(489,"p"),e(490,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(491,"tr",16)(492,"td",17)(493,"div",18)(494,"span",19),e(495," (p-restore-column-manager)"),n(496,"br"),t()()(),i(497,"td",21)(498,"code",22),e(499,"EventEmitter"),t()(),i(500,"td",23),e(501,"-"),t(),i(502,"td",24)(503,"em")(504,"strong"),e(505,"(opcional)"),t()(),i(506,"p"),e(507,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(508,"p"),e(509,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(510,"tr",16)(511,"td",17)(512,"div",25)(513,"span",26),e(514," p-columns"),n(515,"br"),t()()(),i(516,"td",21)(517,"code",30),e(518,"Array<PoLookupColumn>"),t()(),i(519,"td",23),e(520,"-"),t(),i(521,"td",24)(522,"em")(523,"strong"),e(524,"(opcional)"),t()(),i(525,"p"),e(526,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(527,"tr",16)(528,"td",17)(529,"div",25)(530,"span",26),e(531," p-disabled"),n(532,"br"),t()()(),i(533,"td",21)(534,"code",29),e(535,"boolean"),t()(),i(536,"td",23)(537,"p"),e(538,"false"),t()(),i(539,"td",24)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),i(543,"p"),e(544,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),e(549," p-error-limit"),n(550,"br"),t()()(),i(551,"td",21)(552,"code",29),e(553,"boolean"),t()(),i(554,"td",23)(555,"p")(556,"code"),e(557,"false"),t()()(),i(558,"td",24)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),i(562,"p"),e(563,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(564,"blockquote")(565,"p"),e(566,"Caso essa propriedade seja definida como "),i(567,"code"),e(568,"true"),t(),e(569,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(570,"tr",16)(571,"td",17)(572,"div",25)(573,"span",26),e(574," p-field-error-message"),n(575,"br"),t()()(),i(576,"td",21)(577,"code",27),e(578,"string"),t()(),i(579,"td",23),e(580,"-"),t(),i(581,"td",24)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),i(585,"p"),e(586,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(587,"blockquote")(588,"p"),e(589,"Necess\xE1rio que a propriedade "),i(590,"code"),e(591,"p-required"),t(),e(592," esteja habilitada."),t()()()(),i(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),e(597," p-field-format"),n(598,"br"),t()()(),i(599,"td",21)(600,"code",31),e(601,"((value) => string) "),t(),i(602,"code",32),e(603," Array<string>"),t()(),i(604,"td",23),e(605,"-"),t(),i(606,"td",24)(607,"em")(608,"strong"),e(609,"(opcional)"),t()(),i(610,"p"),e(611,"Formato de exibi\xE7\xE3o do campo."),t(),i(612,"p"),e(613,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(614,"em"),e(615,"string"),t(),e(616," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(617,"pre")(618,"code"),e(619,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),i(620,"blockquote")(621,"p"),e(622,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(623,"code"),e(624,"p-field-label"),t(),e(625," na descri\xE7\xE3o do campo."),t()(),i(626,"p"),e(627,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(628,"pre")(629,"code"),e(630,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),i(631,"blockquote")(632,"p"),e(633,"Ser\xE1 utilizado "),i(634,"code"),e(635,"-"),t(),e(636," como separador."),t()()()(),i(637,"tr",16)(638,"td",17)(639,"div",25)(640,"span",26),e(641," p-field-label"),n(642,"br"),t()()(),i(643,"td",21)(644,"code",27),e(645,"string"),t()(),i(646,"td",23),e(647,"-"),t(),i(648,"td",24)(649,"p"),e(650,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),e(655," p-field-value"),n(656,"br"),t()()(),i(657,"td",21)(658,"code",27),e(659,"string"),t()(),i(660,"td",23),e(661,"-"),t(),i(662,"td",24)(663,"p"),e(664,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(665,"blockquote")(666,"p"),e(667,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(668,"tr",16)(669,"td",17)(670,"div",25)(671,"span",26),e(672," p-filter-params"),n(673,"br"),t()()(),i(674,"td",21)(675,"code",33),e(676,"any"),t()(),i(677,"td",23),e(678,"-"),t(),i(679,"td",24)(680,"em")(681,"strong"),e(682,"(opcional)"),t()(),i(683,"p"),e(684,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(685,"code"),e(686,"PoLookupFilter"),t(),e(687,"."),t()()(),i(688,"tr",16)(689,"td",17)(690,"div",25)(691,"span",26),e(692," p-filter-service"),n(693,"br"),t()()(),i(694,"td",21)(695,"code",27),e(696,"string "),t(),i(697,"code",34),e(698," PoLookupFilter"),t()(),i(699,"td",23),e(700,"-"),t(),i(701,"td",24)(702,"p"),e(703,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(704,"code"),e(705,"PoLookupFilter"),t(),e(706," ou uma URL."),t(),i(707,"p"),e(708,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(709,"pre")(710,"code"),e(711,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(712,"p"),e(713,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(714,"code"),e(715,"order"),t(),e(716,", por exemplo:"),t(),i(717,"ul")(718,"li")(719,"p"),e(720,"Coluna decrescente:"),t(),i(721,"pre")(722,"code"),e(723,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),i(724,"li")(725,"p"),e(726,"Coluna ascendente:"),t(),i(727,"pre")(728,"code"),e(729,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),i(730,"p"),e(731,"Se for definido a propriedade "),i(732,"code"),e(733,"p-filter-params"),t(),e(734,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(735,"code"),e(736,"{ age: 23 }"),t(),e(737," a URL ficaria:"),t(),i(738,"pre")(739,"code"),e(740,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(741,"p"),e(742,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(743,"pre")(744,"code"),e(745,`model = 1234;

GET url/1234
`),t()(),i(746,"p"),e(747,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(748,"pre")(749,"code"),e(750,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(751,"blockquote")(752,"p"),e(753,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(754,"a",7),e(755,"API do PO UI"),t(),e(756,` e utiliza os valores
definidos nas propriedades `),i(757,"code"),e(758,"p-field-label"),t(),e(759," e "),i(760,"code"),e(761,"p-field-value"),t(),e(762," para a constru\xE7\xE3o do "),i(763,"code"),e(764,"po-lookup"),t(),e(765,"."),t()(),i(766,"p"),e(767,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(768,"em"),e(769,"TAB"),t(),e(770,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(771,"a",35),e(772,"encodeURIComponent"),t(),e(773,`
e concatenado na URL da seguinte forma:`),t(),i(774,"pre")(775,"code"),e(776,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(777,"blockquote")(778,"p"),e(779,"Quando informado um servi\xE7o que implemente a interface "),i(780,"code"),e(781,"PoLookupFilter"),t(),e(782," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(783,"tr",16)(784,"td",17)(785,"div",25)(786,"span",26),e(787," p-help"),n(788,"br"),t()()(),i(789,"td",21)(790,"code",27),e(791,"string"),t()(),i(792,"td",23),e(793,"-"),t(),i(794,"td",24)(795,"em")(796,"strong"),e(797,"(opcional)"),t()(),i(798,"p"),e(799,"Texto de apoio do campo."),t()()(),i(800,"tr",16)(801,"td",17)(802,"div",25)(803,"span",26),e(804," p-hide-columns-manager"),n(805,"br"),t()()(),i(806,"td",21)(807,"code",29),e(808,"boolean"),t()(),i(809,"td",23)(810,"p")(811,"code"),e(812,"false"),t()()(),i(813,"td",24)(814,"em")(815,"strong"),e(816,"(opcional)"),t()(),i(817,"p"),e(818,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(819,"tr",16)(820,"td",17)(821,"div",25)(822,"span",26),e(823," p-infinite-scroll"),n(824,"br"),t()()(),i(825,"td",21)(826,"code",29),e(827,"boolean"),t()(),i(828,"td",23)(829,"p")(830,"code"),e(831,"false"),t()()(),i(832,"td",24)(833,"em")(834,"strong"),e(835,"(opcional)"),t()(),i(836,"p"),e(837,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(838,"tr",16)(839,"td",17)(840,"div",18)(841,"span",19),e(842," (p-keydown)"),n(843,"br"),t()()(),i(844,"td",21)(845,"code",22),e(846,"EventEmitter"),t()(),i(847,"td",23),e(848,"-"),t(),i(849,"td",24)(850,"em")(851,"strong"),e(852,"(opcional)"),t()(),i(853,"p"),e(854,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(855,"code"),e(856,"KeyboardEvent"),t(),e(857," com informa\xE7\xF5es sobre a tecla."),t()()(),i(858,"tr",16)(859,"td",17)(860,"div",25)(861,"span",26),e(862," p-label"),n(863,"br"),t()()(),i(864,"td",21)(865,"code",27),e(866,"string"),t()(),i(867,"td",23),e(868,"-"),t(),i(869,"td",24)(870,"em")(871,"strong"),e(872,"(opcional)"),t()(),i(873,"p"),e(874,"Label do campo."),t(),i(875,"blockquote")(876,"p"),e(877,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(878,"code"),e(879,"modalTitle"),t(),e(880," na propriedade "),i(881,"code"),e(882,"p-literals"),t(),e(883,"."),t()()()(),i(884,"tr",16)(885,"td",17)(886,"div",25)(887,"span",26),e(888," p-label-text-wrap"),n(889,"br"),t()()(),i(890,"td",21)(891,"code",29),e(892,"boolean"),t()(),i(893,"td",23)(894,"p")(895,"code"),e(896,"false"),t()()(),i(897,"td",24)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),i(901,"p"),e(902,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(903,"code"),e(904,"p-label"),t(),e(905,". Quando "),i(906,"code"),e(907,"p-label-text-wrap"),t(),e(908,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(909,"tr",16)(910,"td",17)(911,"div",25)(912,"span",26),e(913," p-literals"),n(914,"br"),t()()(),i(915,"td",21)(916,"code",36),e(917,"PoLookupLiterals"),t()(),i(918,"td",23),e(919,"-"),t(),i(920,"td",24)(921,"p"),e(922,"Objeto com as literais usadas no "),i(923,"code"),e(924,"po-lookup"),t(),e(925,"."),t(),i(926,"p"),e(927,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(928,"pre")(929,"code"),e(930,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),t()(),i(931,"p"),e(932,"Ou passando apenas as literais que deseja customizar:"),t(),i(933,"pre")(934,"code"),e(935,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(936,"p"),e(937,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(938,"pre")(939,"code"),e(940,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(941,"blockquote")(942,"p"),e(943,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(944,"a",37)(945,"code"),e(946,"PoI18nService"),t()(),e(947," ou do browser."),t()()()(),i(948,"tr",16)(949,"td",17)(950,"div",25)(951,"span",26),e(952," p-multiple"),n(953,"br"),t()()(),i(954,"td",21)(955,"code",29),e(956,"boolean"),t()(),i(957,"td",23)(958,"p")(959,"code"),e(960,"false"),t()()(),i(961,"td",24)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),i(965,"p"),e(966,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(967,"blockquote")(968,"p"),e(969,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(970,"code"),e(971,"[ 12345, 67890 ]"),t()()()()(),i(972,"tr",16)(973,"td",17)(974,"div",25)(975,"span",26),e(976," name"),n(977,"br"),t()()(),i(978,"td",21)(979,"code",27),e(980,"string"),t()(),i(981,"td",23),e(982,"-"),t(),i(983,"td",24)(984,"p"),e(985,"Nome e Id do componente."),t()()(),i(986,"tr",16)(987,"td",17)(988,"div",25)(989,"span",26),e(990," p-no-autocomplete"),n(991,"br"),t()()(),i(992,"td",21)(993,"code",29),e(994,"boolean"),t()(),i(995,"td",23)(996,"p")(997,"code"),e(998,"false"),t()()(),i(999,"td",24)(1e3,"em")(1001,"strong"),e(1002,"(opcional)"),t()(),i(1003,"p"),e(1004,"Define a propriedade nativa "),i(1005,"code"),e(1006,"autocomplete"),t(),e(1007," do campo como "),i(1008,"code"),e(1009,"off"),t(),e(1010,"."),t()()(),i(1011,"tr",16)(1012,"td",17)(1013,"div",18)(1014,"span",19),e(1015," (p-error)"),n(1016,"br"),t()()(),i(1017,"td",21)(1018,"code",22),e(1019,"EventEmitter"),t()(),i(1020,"td",23),e(1021,"-"),t(),i(1022,"td",24)(1023,"p"),e(1024,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(1025,"tr",16)(1026,"td",17)(1027,"div",25)(1028,"span",26),e(1029," p-optional"),n(1030,"br"),t()()(),i(1031,"td",21)(1032,"code",29),e(1033,"boolean"),t()(),i(1034,"td",23)(1035,"p")(1036,"code"),e(1037,"false"),t()()(),i(1038,"td",24)(1039,"em")(1040,"strong"),e(1041,"(opcional)"),t()(),i(1042,"p"),e(1043,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1044,"blockquote")(1045,"p"),e(1046,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1047,"ul")(1048,"li"),e(1049,"O campo conter "),i(1050,"code"),e(1051,"p-required"),t(),e(1052,";"),t(),i(1053,"li"),e(1054,"N\xE3o possuir "),i(1055,"code"),e(1056,"p-help"),t(),e(1057," e/ou "),i(1058,"code"),e(1059,"p-label"),t(),e(1060,"."),t()()()(),i(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),e(1065," p-placeholder"),n(1066,"br"),t()()(),i(1067,"td",21)(1068,"code",27),e(1069,"string"),t()(),i(1070,"td",23),e(1071,"-"),t(),i(1072,"td",24)(1073,"p"),e(1074,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),e(1079," p-helper"),n(1080,"br"),t()()(),i(1081,"td",21)(1082,"code",38),e(1083,"PoHelperOptions"),t()(),i(1084,"td",23),e(1085,"-"),t(),i(1086,"td",24)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),t()(),i(1090,"p"),e(1091,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(1092,"blockquote")(1093,"p"),e(1094,"Caso o "),i(1095,"code"),e(1096,"p-label"),t(),e(1097,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),i(1098,"code"),e(1099,"p-additional-help-tooltip"),t(),e(1100," e "),i(1101,"code"),e(1102,"p-additional-help"),t(),e(1103,") ser\xE1 ignorado."),t()()()(),i(1104,"tr",16)(1105,"td",17)(1106,"div",25)(1107,"span",26),e(1108," p-required"),n(1109,"br"),t()()(),i(1110,"td",21)(1111,"code",29),e(1112,"boolean"),t()(),i(1113,"td",23)(1114,"p")(1115,"code"),e(1116,"false"),t()()(),i(1117,"td",24)(1118,"em")(1119,"strong"),e(1120,"(opcional)"),t()(),i(1121,"p"),e(1122,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1123,"blockquote")(1124,"p"),e(1125,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1126,"code"),e(1127,"(p-disabled)"),t(),e(1128,"."),t()()()(),i(1129,"tr",16)(1130,"td",17)(1131,"div",18)(1132,"span",19),e(1133," (p-selected)"),n(1134,"br"),t()()(),i(1135,"td",21)(1136,"code",22),e(1137,"EventEmitter"),t()(),i(1138,"td",23),e(1139,"-"),t(),i(1140,"td",24)(1141,"em")(1142,"strong"),e(1143,"(opcional)"),t()(),i(1144,"p"),e(1145,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1146,"tr",16)(1147,"td",17)(1148,"div",25)(1149,"span",26),e(1150," p-show-required"),n(1151,"br"),t()()(),i(1152,"td",21)(1153,"code",29),e(1154,"boolean"),t()(),i(1155,"td",23),e(1156,"-"),t(),i(1157,"td",24)(1158,"p"),e(1159,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1160,"blockquote")(1161,"p"),e(1162,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1163,"ul")(1164,"li"),e(1165,"N\xE3o possuir "),i(1166,"code"),e(1167,"p-help"),t(),e(1168," e/ou "),i(1169,"code"),e(1170,"p-label"),t(),e(1171,"."),t()()()(),i(1172,"tr",16)(1173,"td",17)(1174,"div",25)(1175,"span",26),e(1176," p-size"),n(1177,"br"),t()()(),i(1178,"td",21)(1179,"code",27),e(1180,"string"),t()(),i(1181,"td",23)(1182,"p")(1183,"code"),e(1184,"medium"),t()()(),i(1185,"td",24)(1186,"em")(1187,"strong"),e(1188,"(opcional)"),t()(),i(1189,"p"),e(1190,"Define o tamanho do componente:"),t(),i(1191,"ul")(1192,"li")(1193,"code"),e(1194,"small"),t(),e(1195,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1196,"li")(1197,"code"),e(1198,"medium"),t(),e(1199,": altura do input como 44px."),t()(),i(1200,"blockquote")(1201,"p"),e(1202,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1203,"code"),e(1204,"medium"),t(),e(1205,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1206,"a",39),e(1207,"po-theme"),t(),e(1208,"."),t()()()(),i(1209,"tr",16)(1210,"td",17)(1211,"div",25)(1212,"span",26),e(1213," p-spacing"),n(1214,"br"),t()()(),i(1215,"td",21)(1216,"code",27),e(1217,"string"),t()(),i(1218,"td",23)(1219,"p")(1220,"code"),e(1221,"medium"),t()()(),i(1222,"td",24)(1223,"em")(1224,"strong"),e(1225,"(opcional)"),t()(),i(1226,"p"),e(1227,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),i(1228,"strong"),e(1229,"PoTableColumnSpacing"),t(),e(1230,"."),t(),i(1231,"blockquote")(1232,"p"),e(1233,"Em n\xEDvel de acessibilidade "),i(1234,"strong"),e(1235,"AA"),t(),e(1236,", caso o valor de "),i(1237,"code"),e(1238,"p-spacing"),t(),e(1239," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1240,"code"),e(1241,"extraSmall"),t(),e(1242,`
nos seguintes cen\xE1rios:`),t(),i(1243,"ul")(1244,"li"),e(1245,"Quando o valor de "),i(1246,"code"),e(1247,"p-size"),t(),e(1248," for "),i(1249,"code"),e(1250,"small"),t(),e(1251,";"),t(),i(1252,"li"),e(1253,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1254,"code"),e(1255,"small"),t(),e(1256,` no
`),i(1257,"a",39),e(1258,"servi\xE7o de tema"),t(),e(1259,"."),t()()()()(),i(1260,"tr",16)(1261,"td",17)(1262,"div",25)(1263,"span",26),e(1264," p-text-wrap"),n(1265,"br"),t()()(),i(1266,"td",21)(1267,"code",29),e(1268,"boolean"),t()(),i(1269,"td",23)(1270,"p")(1271,"code"),e(1272,"false"),t()()(),i(1273,"td",24)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1279,"p"),e(1280,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1281,"blockquote")(1282,"p"),e(1283,"Incompat\xEDvel com "),i(1284,"code"),e(1285,"virtual-scroll"),t(),e(1286,", que requer altura fixa nas linhas."),t()()()(),i(1287,"tr",16)(1288,"td",17)(1289,"div",25)(1290,"span",26),e(1291," p-virtual-scroll"),n(1292,"br"),t()()(),i(1293,"td",21)(1294,"code",29),e(1295,"boolean"),t()(),i(1296,"td",23)(1297,"p")(1298,"code"),e(1299,"true"),t()()(),i(1300,"td",24)(1301,"em")(1302,"strong"),e(1303,"(opcional)"),t()(),i(1304,"p"),e(1305,"Habilita o "),i(1306,"code"),e(1307,"virtual-scroll"),t(),e(1308,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1309,"code"),e(1310,"virtual-scroll"),t(),e(1311," ser\xE1 ativado automaticamente."),t(),i(1312,"blockquote")(1313,"p"),e(1314,"Incompat\xEDvel com "),i(1315,"code"),e(1316,"p-text-wrap"),t(),e(1317," e "),i(1318,"code"),e(1319,"master-detail"),t(),e(1320,", pois o "),i(1321,"code"),e(1322,"virtual-scroll"),t(),e(1323," exige altura fixa nas linhas."),t()()()()(),i(1324,"h3",12),e(1325,"M\xE9todos"),t(),i(1326,"table",40)(1327,"tr",16)(1328,"th",41)(1329,"div",25)(1330,"h4")(1331,"span",26),e(1332," focus "),t()()()()(),i(1333,"tr",24)(1334,"td",24)(1335,"p"),e(1336,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1337,"p"),e(1338,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1339,"pre")(1340,"code"),e(1341,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1342,"br"),i(1343,"h3"),e(1344,"Interfaces"),t(),i(1345,"h4",42)(1346,"code",5),e(1347,"PoLookupAdvancedFilter"),t()(),i(1348,"div",2)(1349,"p"),e(1350," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1351,"h4",12),e(1352,"Propriedades"),t(),i(1353,"table",13)(1354,"tr",14)(1355,"th",15),e(1356,"Nome"),t(),i(1357,"th",15),e(1358,"Tipo"),t(),i(1359,"th",15),e(1360,"Descri\xE7\xE3o"),t()(),i(1361,"tr",16)(1362,"td",17)(1363,"div",25)(1364,"span",26),e(1365," additionalHelp"),n(1366,"br"),t()()(),i(1367,"td",21)(1368,"code",43),e(1369,"Function"),t()(),i(1370,"td",24)(1371,"em")(1372,"strong"),e(1373,"(opcional)"),t()(),i(1374,"p"),e(1375,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(1376,"code"),e(1377,"p-help"),t(),e(1378,"."),t()()(),i(1379,"tr",16)(1380,"td",17)(1381,"div",25)(1382,"span",26),e(1383," additionalHelpTooltip"),n(1384,"br"),t()()(),i(1385,"td",21)(1386,"code",27),e(1387,"string"),t()(),i(1388,"td",24)(1389,"em")(1390,"strong"),e(1391,"(opcional)"),t()(),i(1392,"p"),e(1393,"Exibe um \xEDcone de ajuda adicional ao "),i(1394,"code"),e(1395,"p-help"),t(),e(1396,`, com o texto desta propriedade no tooltip.
Se o evento `),i(1397,"code"),e(1398,"p-additional-help"),t(),e(1399,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(1400,"strong"),e(1401,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),i(1402,"tr",16)(1403,"td",17)(1404,"div",25)(1405,"span",26),e(1406," advancedFilters"),n(1407,"br"),t()()(),i(1408,"td",21)(1409,"code",28),e(1410,"Array<PoLookupAdvancedFilter>"),t()(),i(1411,"td",24)(1412,"em")(1413,"strong"),e(1414,"(opcional)"),t()(),i(1415,"p"),e(1416,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1417,"blockquote")(1418,"p"),e(1419,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1420,"p"),e(1421,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1422,"p")(1423,"code"),e(1424,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1425,"p"),e(1426,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1427,"p")(1428,"code"),e(1429,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1430,"tr",16)(1431,"td",17)(1432,"div",25)(1433,"span",26),e(1434," appendBox"),n(1435,"br"),t()()(),i(1436,"td",21)(1437,"code",29),e(1438,"boolean"),t()(),i(1439,"td",24)(1440,"em")(1441,"strong"),e(1442,"(opcional)"),t()(),i(1443,"p"),e(1444,"Define que o "),i(1445,"code"),e(1446,"listbox"),t(),e(1447," e/ou tooltip ("),i(1448,"code"),e(1449,"p-additional-help-tooltip"),t(),e(1450," e/ou "),i(1451,"code"),e(1452,"p-error-limit"),t(),e(1453,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1454,"blockquote")(1455,"p"),e(1456,"Quando utilizado com "),i(1457,"code"),e(1458,"p-additional-help-tooltip"),t(),e(1459,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(1460,"tr",16)(1461,"td",17)(1462,"div",25)(1463,"span",26),e(1464," autoHeight"),n(1465,"br"),t()()(),i(1466,"td",21)(1467,"code",29),e(1468,"boolean"),t()(),i(1469,"td",24)(1470,"em")(1471,"strong"),e(1472,"(opcional)"),t()(),i(1473,"p"),e(1474,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1475,"p")(1476,"strong"),e(1477,"Componentes compat\xEDveis:"),t(),i(1478,"code"),e(1479,"po-multiselect"),t(),e(1480,", "),i(1481,"code"),e(1482,"po-lookup"),t(),e(1483,"."),t()()(),i(1484,"tr",16)(1485,"td",17)(1486,"div",25)(1487,"span",26),e(1488," autoUpload"),n(1489,"br"),t()()(),i(1490,"td",21)(1491,"code",29),e(1492,"boolean"),t()(),i(1493,"td",24)(1494,"em")(1495,"strong"),e(1496,"(opcional)"),t()(),i(1497,"p"),e(1498,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1499,"p")(1500,"strong"),e(1501,"Componente compat\xEDvel"),t(),e(1502,": "),i(1503,"code"),e(1504,"po-upload"),t()()()(),i(1505,"tr",16)(1506,"td",17)(1507,"div",25)(1508,"span",26),e(1509," booleanFalse"),n(1510,"br"),t()()(),i(1511,"td",21)(1512,"code",27),e(1513,"string"),t()(),i(1514,"td",24)(1515,"em")(1516,"strong"),e(1517,"(opcional)"),t()(),i(1518,"p"),e(1519,"Texto exibido quando o valor do componente for "),i(1520,"em"),e(1521,"false"),t(),e(1522,"."),t()()(),i(1523,"tr",16)(1524,"td",17)(1525,"div",25)(1526,"span",26),e(1527," booleanTrue"),n(1528,"br"),t()()(),i(1529,"td",21)(1530,"code",27),e(1531,"string"),t()(),i(1532,"td",24)(1533,"em")(1534,"strong"),e(1535,"(opcional)"),t()(),i(1536,"p"),e(1537,"Texto exibido quando o valor do componente for "),i(1538,"em"),e(1539,"true"),t(),e(1540,"."),t()()(),i(1541,"tr",16)(1542,"td",17)(1543,"div",25)(1544,"span",26),e(1545," changeOnEnter"),n(1546,"br"),t()()(),i(1547,"td",21)(1548,"code",29),e(1549,"boolean"),t()(),i(1550,"td",24)(1551,"em")(1552,"strong"),e(1553,"(opcional)"),t()(),i(1554,"p"),e(1555,"Indica que o evento "),i(1556,"code"),e(1557,"p-change"),t(),e(1558,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1559,"code"),e(1560,"po-combo"),t(),e(1561,"."),t()()(),i(1562,"tr",16)(1563,"td",17)(1564,"div",25)(1565,"span",26),e(1566," changeVisibleColumns"),n(1567,"br"),t()()(),i(1568,"td",21)(1569,"code",43),e(1570,"Function"),t()(),i(1571,"td",24)(1572,"em")(1573,"strong"),e(1574,"(opcional)"),t()(),i(1575,"p"),e(1576,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1577,"p"),e(1578,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1579,"p")(1580,"strong"),e(1581,"Componentes compat\xEDveis"),t(),e(1582,": "),i(1583,"code"),e(1584,"po-lookup"),t()()()(),i(1585,"tr",16)(1586,"td",17)(1587,"div",25)(1588,"span",26),e(1589," clean"),n(1590,"br"),t()()(),i(1591,"td",21)(1592,"code",29),e(1593,"boolean"),t()(),i(1594,"td",24)(1595,"em")(1596,"strong"),e(1597,"(opcional)"),t()(),i(1598,"p"),e(1599,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1600,"p")(1601,"strong"),e(1602,"Componentes compat\xEDveis:"),t(),i(1603,"code"),e(1604,"po-datepicker"),t(),e(1605,", "),i(1606,"code"),e(1607,"po-datepicker-range"),t(),e(1608,", "),i(1609,"code"),e(1610,"po-input"),t(),e(1611,", "),i(1612,"code"),e(1613,"po-number"),t(),e(1614,", "),i(1615,"code"),e(1616,"po-decimal"),t(),e(1617,", "),i(1618,"code"),e(1619,"po-combo"),t(),e(1620,", "),i(1621,"code"),e(1622,"po-lookup"),t(),e(1623,", "),i(1624,"code"),e(1625,"po-password"),t()()()(),i(1626,"tr",16)(1627,"td",17)(1628,"div",25)(1629,"span",26),e(1630," columnRestoreManager"),n(1631,"br"),t()()(),i(1632,"td",21)(1633,"code",43),e(1634,"Function"),t()(),i(1635,"td",24)(1636,"em")(1637,"strong"),e(1638,"(opcional)"),t()(),i(1639,"p"),e(1640,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1641,"p"),e(1642,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1643,"p")(1644,"strong"),e(1645,"Componentes compat\xEDveis"),t(),e(1646,": "),i(1647,"code"),e(1648,"po-lookup"),t()()()(),i(1649,"tr",16)(1650,"td",17)(1651,"div",25)(1652,"span",26),e(1653," columns"),n(1654,"br"),t()()(),i(1655,"td",21)(1656,"code",30),e(1657,"Array<PoLookupColumn> "),t(),i(1658,"code",44),e(1659," number"),t()(),i(1660,"td",24)(1661,"em")(1662,"strong"),e(1663,"(opcional)"),t()(),i(1664,"p"),e(1665,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1666,"code"),e(1667,"searchService"),t(),e(1668,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1669,"a",45)(1670,"code"),e(1671,"PoLookupColumn"),t()(),e(1672,"."),t(),i(1673,"blockquote")(1674,"p"),e(1675,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1676,"em"),e(1677,"label"),t(),e(1678," e "),i(1679,"em"),e(1680,"value"),t(),e(1681,` para valores
de tela e do model respectivamente.`),t()(),i(1682,"p")(1683,"strong"),e(1684,"Componentes compat\xEDveis:"),t(),i(1685,"code"),e(1686,"po-radio-group"),t(),e(1687,", "),i(1688,"code"),e(1689,"po-lookup"),t(),e(1690,", "),i(1691,"code"),e(1692,"po-checkbox-group"),t(),e(1693,"."),t()()(),i(1694,"tr",16)(1695,"td",17)(1696,"div",25)(1697,"span",26),e(1698," container"),n(1699,"br"),t()()(),i(1700,"td",21)(1701,"code",27),e(1702,"string"),t()(),i(1703,"td",24)(1704,"em")(1705,"strong"),e(1706,"(opcional)"),t()(),i(1707,"p"),e(1708,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1709,"p"),e(1710,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1711,"tr",16)(1712,"td",17)(1713,"div",25)(1714,"span",26),e(1715," customAction"),n(1716,"br"),t()()(),i(1717,"td",21)(1718,"code",46),e(1719,"PoProgressAction"),t()(),i(1720,"td",24)(1721,"em")(1722,"strong"),e(1723,"(opcional)"),t()(),i(1724,"p"),e(1725,"Define uma a\xE7\xE3o personalizada no componente "),i(1726,"code"),e(1727,"po-upload"),t(),e(1728,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1729,"p")(1730,"strong"),e(1731,"Componente compat\xEDvel"),t(),e(1732,": "),i(1733,"code"),e(1734,"po-upload"),t(),e(1735,","),t(),i(1736,"p")(1737,"strong"),e(1738,"Exemplo de configura\xE7\xE3o"),t(),e(1739,":"),t(),i(1740,"pre")(1741,"code",47),e(1742,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1743,"tr",16)(1744,"td",17)(1745,"div",25)(1746,"span",26),e(1747," customActionClick"),n(1748,"br"),t()()(),i(1749,"td",21)(1750,"code",48),e(1751,"(file: PoUploadFile) => void"),t()(),i(1752,"td",24)(1753,"em")(1754,"strong"),e(1755,"(opcional)"),t()(),i(1756,"p"),e(1757,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1758,"code"),e(1759,"p-custom-action"),t(),e(1760,"."),t(),i(1761,"p")(1762,"strong"),e(1763,"Componente compat\xEDvel"),t(),e(1764,": "),i(1765,"code"),e(1766,"po-upload"),t(),e(1767,","),t(),i(1768,"p"),e(1769,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1770,"p")(1771,"strong"),e(1772,"Par\xE2metro do evento"),t(),e(1773,":"),t(),i(1774,"ul")(1775,"li")(1776,"code"),e(1777,"file"),t(),e(1778,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1779,"code"),e(1780,"PoUploadFile"),t(),e(1781," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1782,"p")(1783,"strong"),e(1784,"Exemplo de uso"),t(),e(1785,":"),t(),i(1786,"pre")(1787,"code",47),e(1788,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),e(1793," debounceTime"),n(1794,"br"),t()()(),i(1795,"td",21)(1796,"code",44),e(1797,"number"),t()(),i(1798,"td",24)(1799,"em")(1800,"strong"),e(1801,"(opcional)"),t()(),i(1802,"p"),e(1803,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1804,"code"),e(1805,"p-filter-service"),t(),e(1806,")."),t(),i(1807,"p")(1808,"strong"),e(1809,"Componentes compat\xEDveis:"),t(),i(1810,"code"),e(1811,"po-combo"),t(),e(1812,", "),i(1813,"code"),e(1814,"po-multiselect"),t(),e(1815,"."),t()()(),i(1816,"tr",16)(1817,"td",17)(1818,"div",25)(1819,"span",26),e(1820," decimalsLength"),n(1821,"br"),t()()(),i(1822,"td",21)(1823,"code",44),e(1824,"number"),t()(),i(1825,"td",24)(1826,"em")(1827,"strong"),e(1828,"(opcional)"),t()(),i(1829,"p"),e(1830,"Quantidade m\xE1xima de casas decimais."),t(),i(1831,"blockquote")(1832,"p"),e(1833,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1834,"code"),e(1835,"type"),t(),e(1836," for "),i(1837,"em"),e(1838,"currency"),t(),e(1839," ou "),i(1840,"em"),e(1841,"decimal"),t(),e(1842,"."),t()()()(),i(1843,"tr",16)(1844,"td",17)(1845,"div",25)(1846,"span",26),e(1847," directory"),n(1848,"br"),t()()(),i(1849,"td",21)(1850,"code",29),e(1851,"boolean"),t()(),i(1852,"td",24)(1853,"em")(1854,"strong"),e(1855,"(opcional)"),t()(),i(1856,"p"),e(1857,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1858,"blockquote")(1859,"p"),e(1860,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1861,"blockquote")(1862,"p"),e(1863,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1864,"strong"),e(1865,"Internet Explorer"),t(),e(1866,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1867,"p")(1868,"strong"),e(1869,"Componente compat\xEDvel"),t(),e(1870,": "),i(1871,"code"),e(1872,"po-upload"),t()()()(),i(1873,"tr",16)(1874,"td",17)(1875,"div",25)(1876,"span",26),e(1877," disabled"),n(1878,"br"),t()()(),i(1879,"td",21)(1880,"code",29),e(1881,"boolean"),t()(),i(1882,"td",24)(1883,"em")(1884,"strong"),e(1885,"(opcional)"),t()(),i(1886,"p"),e(1887,"Desabilita o campo caso informar o valor "),i(1888,"em"),e(1889,"true"),t(),e(1890,"."),t()()(),i(1891,"tr",16)(1892,"td",17)(1893,"div",25)(1894,"span",26),e(1895," disabledInitFilter"),n(1896,"br"),t()()(),i(1897,"td",21)(1898,"code",29),e(1899,"boolean"),t()(),i(1900,"td",24)(1901,"em")(1902,"strong"),e(1903,"(opcional)"),t()(),i(1904,"p"),e(1905,"Desabilita o filtro inicial no servi\xE7o do "),i(1906,"code"),e(1907,"po-combo"),t(),e(1908,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1909,"tr",16)(1910,"td",17)(1911,"div",25)(1912,"span",26),e(1913," disabledTabFilter"),n(1914,"br"),t()()(),i(1915,"td",21)(1916,"code",29),e(1917,"boolean"),t()(),i(1918,"td",24)(1919,"em")(1920,"strong"),e(1921,"(opcional)"),t()(),i(1922,"p"),e(1923,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1924,"code"),e(1925,"po-combo"),t(),e(1926,"."),t()()(),i(1927,"tr",16)(1928,"td",17)(1929,"div",25)(1930,"span",26),e(1931," divider"),n(1932,"br"),t()()(),i(1933,"td",21)(1934,"code",27),e(1935,"string"),t()(),i(1936,"td",24)(1937,"em")(1938,"strong"),e(1939,"(opcional)"),t()(),i(1940,"p"),e(1941,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(1942,"tr",16)(1943,"td",17)(1944,"div",25)(1945,"span",26),e(1946," dragDrop"),n(1947,"br"),t()()(),i(1948,"td",21)(1949,"code",29),e(1950,"boolean"),t()(),i(1951,"td",24)(1952,"em")(1953,"strong"),e(1954,"(opcional)"),t()(),i(1955,"p"),e(1956,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(1957,"blockquote")(1958,"p"),e(1959,"Recomendamos utilizar apenas um "),i(1960,"code"),e(1961,"po-upload"),t(),e(1962," com esta funcionalidade por tela."),t()(),i(1963,"p")(1964,"strong"),e(1965,"Componente compat\xEDvel"),t(),e(1966,": "),i(1967,"code"),e(1968,"po-upload"),t()()()(),i(1969,"tr",16)(1970,"td",17)(1971,"div",25)(1972,"span",26),e(1973," dragDropHeight"),n(1974,"br"),t()()(),i(1975,"td",21)(1976,"code",44),e(1977,"number"),t()(),i(1978,"td",24)(1979,"em")(1980,"strong"),e(1981,"(opcional)"),t()(),i(1982,"p"),e(1983,"Define em "),i(1984,"em"),e(1985,"pixels"),t(),e(1986," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(1987,"code"),e(1988,"160px"),t(),e(1989,"."),t(),i(1990,"blockquote")(1991,"p"),e(1992,"Esta propriedade funciona somente se a propriedade "),i(1993,"code"),e(1994,"p-drag-drop"),t(),e(1995," estiver habilitada."),t()(),i(1996,"p")(1997,"strong"),e(1998,"Componente compat\xEDvel"),t(),e(1999,": "),i(2e3,"code"),e(2001,"po-upload"),t()()()(),i(2002,"tr",16)(2003,"td",17)(2004,"div",25)(2005,"span",26),e(2006," errorAsyncFunction"),n(2007,"br"),t()()(),i(2008,"td",21)(2009,"code",49),e(2010,"(value) => Observable<boolean>"),t()(),i(2011,"td",24)(2012,"em")(2013,"strong"),e(2014,"(opcional)"),t()(),i(2015,"p"),e(2016,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(2017,"code"),e(2018,"change"),t(),e(2019," ou "),i(2020,"code"),e(2021,"change-model"),t(),e(2022,", dependendo do valor da propriedade "),i(2023,"code"),e(2024,"triggerMode"),t(),e(2025,"."),t(),i(2026,"blockquote")(2027,"p"),e(2028,"Retorna "),i(2029,"code"),e(2030,"Observable com o valor true"),t(),e(2031," para sinalizar o erro "),i(2032,"code"),e(2033,"false"),t(),e(2034," para indicar que n\xE3o h\xE1 erro."),t()(),i(2035,"p")(2036,"strong"),e(2037,"Componente compat\xEDvel"),t(),e(2038,": "),i(2039,"code"),e(2040,"po-datepicker"),t()()()(),i(2041,"tr",16)(2042,"td",17)(2043,"div",25)(2044,"span",26),e(2045," errorAsyncProperties"),n(2046,"br"),t()()(),i(2047,"td",21)(2048,"code",50),e(2049,"ErrorAsyncProperties"),t()(),i(2050,"td",24)(2051,"em")(2052,"strong"),e(2053,"(opcional)"),t()(),i(2054,"p"),e(2055,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(2056,"p")(2057,"strong"),e(2058,"Componentes compat\xEDveis:"),t(),i(2059,"code"),e(2060,"po-input"),t(),e(2061,", "),i(2062,"code"),e(2063,"po-number"),t(),e(2064,", "),i(2065,"code"),e(2066,"po-decimal"),t(),e(2067,", "),i(2068,"code"),e(2069,"po-password"),t(),e(2070,"."),t()()(),i(2071,"tr",16)(2072,"td",17)(2073,"div",25)(2074,"span",26),e(2075," errorLimit"),n(2076,"br"),t()()(),i(2077,"td",21)(2078,"code",29),e(2079,"boolean"),t()(),i(2080,"td",24)(2081,"em")(2082,"strong"),e(2083,"(opcional)"),t()(),i(2084,"p"),e(2085,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2086,"blockquote")(2087,"p"),e(2088,"Caso essa propriedade seja definida como "),i(2089,"code"),e(2090,"true"),t(),e(2091,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2092,"p")(2093,"strong"),e(2094,"Componentes compat\xEDveis:"),t(),i(2095,"code"),e(2096,"po-checkbox-group"),t(),e(2097,", "),i(2098,"code"),e(2099,"po-combo"),t(),e(2100,", "),i(2101,"code"),e(2102,"po-datepicker"),t(),e(2103,", "),i(2104,"code"),e(2105,"po-datepicker-range"),t(),e(2106,", "),i(2107,"code"),e(2108,"po-decimal"),t(),e(2109,", "),i(2110,"code"),e(2111,"po-input"),t(),e(2112,", "),i(2113,"code"),e(2114,"po-lookup"),t(),e(2115,", "),i(2116,"code"),e(2117,"po-multiselect"),t(),e(2118,", "),i(2119,"code"),e(2120,"po-number"),t(),e(2121,", "),i(2122,"code"),e(2123,"po-password"),t(),e(2124,", "),i(2125,"code"),e(2126,"po-radio-group"),t(),e(2127,", "),i(2128,"code"),e(2129,"po-select"),t(),e(2130,", "),i(2131,"code"),e(2132,"po-switch"),t(),e(2133,", "),i(2134,"code"),e(2135,"po-textarea"),t(),e(2136,"."),t()()(),i(2137,"tr",16)(2138,"td",17)(2139,"div",25)(2140,"span",26),e(2141," errorMessage"),n(2142,"br"),t()()(),i(2143,"td",21)(2144,"code",27),e(2145,"string"),t()(),i(2146,"td",24)(2147,"em")(2148,"strong"),e(2149,"(opcional)"),t()(),i(2150,"p"),e(2151,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2152,"p"),e(2153,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2154,"ul")(2155,"li"),e(2156,"pattern;"),t(),i(2157,"li"),e(2158,"minValue;"),t(),i(2159,"li"),e(2160,"maxValue;"),t(),i(2161,"li"),e(2162,"required;"),t()(),i(2163,"blockquote")(2164,"p"),e(2165,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2166,"code"),e(2167,"po-datepicker"),t(),e(2168,", "),i(2169,"code"),e(2170,"po-input"),t(),e(2171,", "),i(2172,"code"),e(2173,"po-number"),t(),e(2174,", "),i(2175,"code"),e(2176,"po-decimal"),t(),e(2177,", "),i(2178,"code"),e(2179,"po-password"),t(),e(2180,`, \xE9 necess\xE1rio que a propriedade
`),i(2181,"code"),e(2182,"requiredFieldErrorMessage"),t(),e(2183," esteja como "),i(2184,"code"),e(2185,"true"),t(),e(2186,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2187,"code"),e(2188,"po-datepicker-range"),t(),e(2189,", "),i(2190,"code"),e(2191,"po-select"),t(),e(2192,", "),i(2193,"code"),e(2194,"po-checkbox-group"),t(),e(2195,", "),i(2196,"code"),e(2197,"po-radio-group"),t(),e(2198,", "),i(2199,"code"),e(2200,"po-multiselect"),t(),e(2201,", "),i(2202,"code"),e(2203,"po-combo"),t(),e(2204,`,
`),i(2205,"code"),e(2206,"po-lookup"),t(),e(2207," e "),i(2208,"code"),e(2209,"po-textarea"),t(),e(2210," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2211,"code"),e(2212,"requiredFieldErrorMessage"),t(),e(2213,"."),t()(),i(2214,"p")(2215,"strong"),e(2216,"Componentes compat\xEDveis:"),t(),i(2217,"code"),e(2218,"po-checkbox-group"),t(),e(2219,", "),i(2220,"code"),e(2221,"po-combo"),t(),e(2222,", "),i(2223,"code"),e(2224,"po-datepicker"),t(),e(2225,", "),i(2226,"code"),e(2227,"po-datepicker-range"),t(),e(2228,", "),i(2229,"code"),e(2230,"po-decimal"),t(),e(2231,", "),i(2232,"code"),e(2233,"po-input"),t(),e(2234,", "),i(2235,"code"),e(2236,"po-lookup"),t(),e(2237,", "),i(2238,"code"),e(2239,"po-multiselect"),t(),e(2240,", "),i(2241,"code"),e(2242,"po-number"),t(),e(2243,", "),i(2244,"code"),e(2245,"po-password"),t(),e(2246,", "),i(2247,"code"),e(2248,"po-radio-group"),t(),e(2249,", "),i(2250,"code"),e(2251,"po-select"),t(),e(2252,", "),i(2253,"code"),e(2254,"po-switch"),t(),e(2255,", "),i(2256,"code"),e(2257,"po-textarea"),t(),e(2258,"."),t()()(),i(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),e(2263," fieldLabel"),n(2264,"br"),t()()(),i(2265,"td",21)(2266,"code",27),e(2267,"string"),t()(),i(2268,"td",24)(2269,"em")(2270,"strong"),e(2271,"(opcional)"),t()(),i(2272,"p"),e(2273,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2274,"p"),e(2275,"O valor padr\xE3o \xE9: "),i(2276,"code"),e(2277,"label"),t(),e(2278,"."),t(),i(2279,"blockquote")(2280,"p"),e(2281,"Esta propriedade pode ser utilizada em conjunto com: "),i(2282,"code"),e(2283,"options"),t(),e(2284,", "),i(2285,"code"),e(2286,"optionsService"),t(),e(2287," e "),i(2288,"code"),e(2289,"searchService"),t(),e(2290,"."),t()()()(),i(2291,"tr",16)(2292,"td",17)(2293,"div",25)(2294,"span",26),e(2295," fieldValue"),n(2296,"br"),t()()(),i(2297,"td",21)(2298,"code",27),e(2299,"string"),t()(),i(2300,"td",24)(2301,"em")(2302,"strong"),e(2303,"(opcional)"),t()(),i(2304,"p"),e(2305,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2306,"p"),e(2307,"O valor padr\xE3o \xE9: "),i(2308,"code"),e(2309,"value"),t(),e(2310,"."),t(),i(2311,"blockquote")(2312,"p"),e(2313,"Esta propriedade pode ser utilizada em conjunto com: "),i(2314,"code"),e(2315,"options"),t(),e(2316,", "),i(2317,"code"),e(2318,"optionsService"),t(),e(2319," e "),i(2320,"code"),e(2321,"searchService"),t(),e(2322,"."),t()()()(),i(2323,"tr",16)(2324,"td",17)(2325,"div",25)(2326,"span",26),e(2327," filterMinlength"),n(2328,"br"),t()()(),i(2329,"td",21)(2330,"code",44),e(2331,"number"),t()(),i(2332,"td",24)(2333,"em")(2334,"strong"),e(2335,"(opcional)"),t()(),i(2336,"p"),e(2337,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2338,"code"),e(2339,"po-combo"),t(),e(2340,"."),t()()(),i(2341,"tr",16)(2342,"td",17)(2343,"div",25)(2344,"span",26),e(2345," filterMode"),n(2346,"br"),t()()(),i(2347,"td",21)(2348,"code",51),e(2349,"PoMultiselectFilterMode"),t()(),i(2350,"td",24)(2351,"em")(2352,"strong"),e(2353,"(opcional)"),t()(),i(2354,"p"),e(2355,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2356,"code"),e(2357,"startsWith"),t(),e(2358,", "),i(2359,"code"),e(2360,"contains"),t(),e(2361," ou "),i(2362,"code"),e(2363,"endsWith"),t(),e(2364,"."),t(),i(2365,"blockquote")(2366,"p"),e(2367,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2368,"p")(2369,"strong"),e(2370,"Componentes compat\xEDveis:"),t(),i(2371,"code"),e(2372,"po-multiselect"),t(),e(2373,"."),t()()(),i(2374,"tr",16)(2375,"td",17)(2376,"div",25)(2377,"span",26),e(2378," forceBooleanComponentType"),n(2379,"br"),t()()(),i(2380,"td",21)(2381,"code",52),e(2382,"ForceBooleanComponentEnum"),t()(),i(2383,"td",24)(2384,"em")(2385,"strong"),e(2386,"(opcional)"),t()(),i(2387,"p"),e(2388,"Valores aceitos:"),t(),i(2389,"ul")(2390,"li"),e(2391,"ForceBooleanComponentEnum.switch"),t(),i(2392,"li"),e(2393,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2394,"tr",16)(2395,"td",17)(2396,"div",25)(2397,"span",26),e(2398," forceOptionsComponentType"),n(2399,"br"),t()()(),i(2400,"td",21)(2401,"code",53),e(2402,"ForceOptionComponentEnum"),t()(),i(2403,"td",24)(2404,"em")(2405,"strong"),e(2406,"(opcional)"),t()(),i(2407,"p"),e(2408,"pode ser utilizada em conjunto com a propriedade "),i(2409,"code"),e(2410,"options"),t(),e(2411," for\xE7ando o componente a renderizar um "),i(2412,"code"),e(2413,"po-select"),t(),e(2414," ou "),i(2415,"code"),e(2416,"po-radio-group"),t(),e(2417,"."),t(),i(2418,"p"),e(2419,"Valores aceitos:"),t(),i(2420,"ul")(2421,"li"),e(2422,"ForceOptionComponentEnum.radioGroup"),t(),i(2423,"li"),e(2424,"ForceOptionComponentEnum.select"),t()(),i(2425,"blockquote")(2426,"p"),e(2427,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2428,"code"),e(2429,"optionsMulti"),t(),e(2430," e "),i(2431,"code"),e(2432,"optionsService"),t(),e(2433,"."),t()()()(),i(2434,"tr",16)(2435,"td",17)(2436,"div",25)(2437,"span",26),e(2438," formField"),n(2439,"br"),t()()(),i(2440,"td",21)(2441,"code",27),e(2442,"string"),t()(),i(2443,"td",24)(2444,"em")(2445,"strong"),e(2446,"(opcional)"),t()(),i(2447,"p"),e(2448,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2449,"code"),e(2450,"url"),t(),e(2451,"."),t(),i(2452,"blockquote")(2453,"p"),e(2454,"O valor default \xE9 "),i(2455,"code"),e(2456,"files"),t()()(),i(2457,"p")(2458,"strong"),e(2459,"Componente compat\xEDvel"),t(),e(2460,": "),i(2461,"code"),e(2462,"po-upload"),t()()()(),i(2463,"tr",16)(2464,"td",17)(2465,"div",25)(2466,"span",26),e(2467," format"),n(2468,"br"),t()()(),i(2469,"td",21)(2470,"code",27),e(2471,"string "),t(),i(2472,"code",32),e(2473," Array<string>"),t()(),i(2474,"td",24)(2475,"em")(2476,"strong"),e(2477,"(opcional)"),t()(),i(2478,"p"),e(2479,"Formato de exibi\xE7\xE3o no campo."),t(),i(2480,"p"),e(2481,"Ao utilizar esta propriedade com o "),i(2482,"code"),e(2483,"type"),t(),i(2484,"em"),e(2485,"PoDynamicFieldType.Date"),t(),e(2486," ou "),i(2487,"em"),e(2488,"PoDynamicFieldType.DateTime"),t(),e(2489,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2490,"p"),e(2491,"Valores v\xE1lidos:"),t(),i(2492,"ul")(2493,"li"),e(2494,"dd/mm/yyyy"),t(),i(2495,"li"),e(2496,"mm/dd/yyyy"),t(),i(2497,"li"),e(2498,"yyyy/mm/dd"),t()(),i(2499,"p"),e(2500,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2501,"code"),e(2502,"searchService"),t(),e(2503,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),i(2504,"tr",16)(2505,"td",17)(2506,"div",25)(2507,"span",26),e(2508," formatModel"),n(2509,"br"),t()()(),i(2510,"td",21)(2511,"code",29),e(2512,"boolean"),t()(),i(2513,"td",24)(2514,"em")(2515,"strong"),e(2516,"(opcional)"),t()(),i(2517,"p"),e(2518,"Indica se o "),i(2519,"code"),e(2520,"model"),t(),e(2521," receber\xE1 o valor formatado pelas propriedades "),i(2522,"code"),e(2523,"p-label-on"),t(),e(2524," e "),i(2525,"code"),e(2526,"p-label-off"),t(),e(2527,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2528,"p"),e(2529,"O valor padr\xE3o \xE9: "),i(2530,"code"),e(2531,"false"),t(),e(2532,"."),t(),i(2533,"blockquote")(2534,"p"),e(2535,"Esta propriedade est\xE1 disponivel apenas para o "),i(2536,"code"),e(2537,"swicth"),t(),e(2538,"."),t()()()(),i(2539,"tr",16)(2540,"td",17)(2541,"div",25)(2542,"span",26),e(2543," gridColumns"),n(2544,"br"),t()()(),i(2545,"td",21)(2546,"code",44),e(2547,"number"),t()(),i(2548,"td",24)(2549,"em")(2550,"strong"),e(2551,"(opcional)"),t()(),i(2552,"p"),e(2553,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2554,"p"),e(2555,"Deve ser usado o sistema de "),i(2556,"strong"),e(2557,"grid"),t(),e(2558," do PO (1 ... 12 colunas)."),t(),i(2559,"blockquote")(2560,"p"),e(2561,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2562,"tr",16)(2563,"td",17)(2564,"div",25)(2565,"span",26),e(2566," gridLgColumns"),n(2567,"br"),t()()(),i(2568,"td",21)(2569,"code",44),e(2570,"number"),t()(),i(2571,"td",24)(2572,"em")(2573,"strong"),e(2574,"(opcional)"),t()(),i(2575,"p"),e(2576,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2577,"p"),e(2578,"Deve ser usado o sistema de "),i(2579,"strong"),e(2580,"grid"),t(),e(2581," do PO (1 ... 12 colunas)."),t(),i(2582,"blockquote")(2583,"p"),e(2584,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2585,"code"),e(2586,"gridColumns"),t(),e(2587,"."),t()()()(),i(2588,"tr",16)(2589,"td",17)(2590,"div",25)(2591,"span",26),e(2592," gridLgPull"),n(2593,"br"),t()()(),i(2594,"td",21)(2595,"code",44),e(2596,"number"),t()(),i(2597,"td",24)(2598,"em")(2599,"strong"),e(2600,"(opcional)"),t()(),i(2601,"p"),e(2602,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2603,"p"),e(2604,"Deve ser usado o sistema de "),i(2605,"strong"),e(2606,"grid"),t(),e(2607," do PO (1 ... 11 colunas)."),t(),i(2608,"blockquote")(2609,"p"),e(2610,"Esta propriedade n\xE3o funciona com a propriedade "),i(2611,"code"),e(2612,"gridColumns"),t(),e(2613,". Deve-se especificar o tamanho da tela."),t()()()(),i(2614,"tr",16)(2615,"td",17)(2616,"div",25)(2617,"span",26),e(2618," gridMdColumns"),n(2619,"br"),t()()(),i(2620,"td",21)(2621,"code",44),e(2622,"number"),t()(),i(2623,"td",24)(2624,"em")(2625,"strong"),e(2626,"(opcional)"),t()(),i(2627,"p"),e(2628,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2629,"p"),e(2630,"Deve ser usado o sistema de "),i(2631,"strong"),e(2632,"grid"),t(),e(2633," do PO (1 ... 12 colunas)."),t(),i(2634,"blockquote")(2635,"p"),e(2636,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2637,"code"),e(2638,"gridColumns"),t(),e(2639,"."),t()()()(),i(2640,"tr",16)(2641,"td",17)(2642,"div",25)(2643,"span",26),e(2644," gridMdPull"),n(2645,"br"),t()()(),i(2646,"td",21)(2647,"code",44),e(2648,"number"),t()(),i(2649,"td",24)(2650,"em")(2651,"strong"),e(2652,"(opcional)"),t()(),i(2653,"p"),e(2654,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2655,"p"),e(2656,"Deve ser usado o sistema de "),i(2657,"strong"),e(2658,"grid"),t(),e(2659," do PO (1 ... 11 colunas)."),t(),i(2660,"blockquote")(2661,"p"),e(2662,"Esta propriedade n\xE3o funciona com a propriedade "),i(2663,"code"),e(2664,"gridColumns"),t(),e(2665,". Deve-se especificar o tamanho da tela."),t()()()(),i(2666,"tr",16)(2667,"td",17)(2668,"div",25)(2669,"span",26),e(2670," gridSmColumns"),n(2671,"br"),t()()(),i(2672,"td",21)(2673,"code",44),e(2674,"number"),t()(),i(2675,"td",24)(2676,"em")(2677,"strong"),e(2678,"(opcional)"),t()(),i(2679,"p"),e(2680,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2681,"p"),e(2682,"Deve ser usado o sistema de "),i(2683,"strong"),e(2684,"grid"),t(),e(2685," do PO (1 ... 12 colunas)."),t(),i(2686,"blockquote")(2687,"p"),e(2688,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2689,"code"),e(2690,"gridColumns"),t(),e(2691,"."),t()()()(),i(2692,"tr",16)(2693,"td",17)(2694,"div",25)(2695,"span",26),e(2696," gridSmPull"),n(2697,"br"),t()()(),i(2698,"td",21)(2699,"code",44),e(2700,"number"),t()(),i(2701,"td",24)(2702,"em")(2703,"strong"),e(2704,"(opcional)"),t()(),i(2705,"p"),e(2706,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2707,"p"),e(2708,"Deve ser usado o sistema de "),i(2709,"strong"),e(2710,"grid"),t(),e(2711," do PO (1 ... 11 colunas)."),t(),i(2712,"blockquote")(2713,"p"),e(2714,"Esta propriedade n\xE3o funciona com a propriedade "),i(2715,"code"),e(2716,"gridColumns"),t(),e(2717,". Deve-se especificar o tamanho da tela."),t()()()(),i(2718,"tr",16)(2719,"td",17)(2720,"div",25)(2721,"span",26),e(2722," gridXlColumns"),n(2723,"br"),t()()(),i(2724,"td",21)(2725,"code",44),e(2726,"number"),t()(),i(2727,"td",24)(2728,"em")(2729,"strong"),e(2730,"(opcional)"),t()(),i(2731,"p"),e(2732,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2733,"p"),e(2734,"Deve ser usado o sistema de "),i(2735,"strong"),e(2736,"grid"),t(),e(2737," do PO (1 ... 12 colunas)."),t(),i(2738,"blockquote")(2739,"p"),e(2740,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2741,"code"),e(2742,"gridColumns"),t(),e(2743,"."),t()()()(),i(2744,"tr",16)(2745,"td",17)(2746,"div",25)(2747,"span",26),e(2748," gridXlPull"),n(2749,"br"),t()()(),i(2750,"td",21)(2751,"code",44),e(2752,"number"),t()(),i(2753,"td",24)(2754,"em")(2755,"strong"),e(2756,"(opcional)"),t()(),i(2757,"p"),e(2758,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2759,"p"),e(2760,"Deve ser usado o sistema de "),i(2761,"strong"),e(2762,"grid"),t(),e(2763," do PO (1 ... 11 colunas)."),t(),i(2764,"blockquote")(2765,"p"),e(2766,"Esta propriedade n\xE3o funciona com a propriedade "),i(2767,"code"),e(2768,"gridColumns"),t(),e(2769,". Deve-se especificar o tamanho da tela."),t()()()(),i(2770,"tr",16)(2771,"td",17)(2772,"div",25)(2773,"span",26),e(2774," headers"),n(2775,"br"),t()()(),i(2776,"td",21)(2777,"code",54),e(2778,"{ [name: string]: string "),t(),i(2779,"code",55),e(2780,` Array<string>;
}`),t()(),i(2781,"td",24)(2782,"em")(2783,"strong"),e(2784,"(opcional)"),t()(),i(2785,"p"),e(2786,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2787,"p")(2788,"strong"),e(2789,"Componente compat\xEDvel"),t(),e(2790,": "),i(2791,"code"),e(2792,"po-upload"),t()()()(),i(2793,"tr",16)(2794,"td",17)(2795,"div",25)(2796,"span",26),e(2797," help"),n(2798,"br"),t()()(),i(2799,"td",21)(2800,"code",27),e(2801,"string"),t()(),i(2802,"td",24)(2803,"em")(2804,"strong"),e(2805,"(opcional)"),t()(),i(2806,"p"),e(2807,"Texto de ajuda."),t()()(),i(2808,"tr",16)(2809,"td",17)(2810,"div",25)(2811,"span",26),e(2812," hideLabelStatus"),n(2813,"br"),t()()(),i(2814,"td",21)(2815,"code",29),e(2816,"boolean"),t()(),i(2817,"td",24)(2818,"em")(2819,"strong"),e(2820,"(opcional)"),t()(),i(2821,"p"),e(2822,"Indica se o status do "),i(2823,"code"),e(2824,"model"),t(),e(2825," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2826,"tr",16)(2827,"td",17)(2828,"div",25)(2829,"span",26),e(2830," hidePasswordPeek"),n(2831,"br"),t()()(),i(2832,"td",21)(2833,"code",29),e(2834,"boolean"),t()(),i(2835,"td",24)(2836,"em")(2837,"strong"),e(2838,"(opcional)"),t()(),i(2839,"p"),e(2840,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2841,"code"),e(2842,"po-password"),t(),e(2843,"."),t()()(),i(2844,"tr",16)(2845,"td",17)(2846,"div",25)(2847,"span",26),e(2848," hideRestrictionsInfo"),n(2849,"br"),t()()(),i(2850,"td",21)(2851,"code",29),e(2852,"boolean"),t()(),i(2853,"td",24)(2854,"em")(2855,"strong"),e(2856,"(opcional)"),t()(),i(2857,"p"),e(2858,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2859,"p")(2860,"strong"),e(2861,"Componente compat\xEDvel"),t(),e(2862,": "),i(2863,"code"),e(2864,"po-upload"),t()()()(),i(2865,"tr",16)(2866,"td",17)(2867,"div",25)(2868,"span",26),e(2869," hideSearch"),n(2870,"br"),t()()(),i(2871,"td",21)(2872,"code",29),e(2873,"boolean"),t()(),i(2874,"td",24)(2875,"em")(2876,"strong"),e(2877,"(opcional)"),t()(),i(2878,"p"),e(2879,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2880,"code"),e(2881,"po-multiselect"),t(),e(2882,"."),t()()(),i(2883,"tr",16)(2884,"td",17)(2885,"div",25)(2886,"span",26),e(2887," hideSelectAll"),n(2888,"br"),t()()(),i(2889,"td",21)(2890,"code",29),e(2891,"boolean"),t()(),i(2892,"td",24)(2893,"em")(2894,"strong"),e(2895,"(opcional)"),t()(),i(2896,"p"),e(2897,'Indica se o campo "Selecionar todos" do '),i(2898,"code"),e(2899,"po-multiselect"),t(),e(2900," ser\xE1 escondido."),t()()(),i(2901,"tr",16)(2902,"td",17)(2903,"div",25)(2904,"span",26),e(2905," hideSelectButton"),n(2906,"br"),t()()(),i(2907,"td",21)(2908,"code",29),e(2909,"boolean"),t()(),i(2910,"td",24)(2911,"em")(2912,"strong"),e(2913,"(opcional)"),t()(),i(2914,"p"),e(2915,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2916,"blockquote")(2917,"p"),e(2918,"Caso o valor definido seja "),i(2919,"code"),e(2920,"true"),t(),e(2921,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2922,"code"),e(2923,"selectFiles()"),t(),e(2924," para sele\xE7\xE3o de arquivos."),t()(),i(2925,"p")(2926,"strong"),e(2927,"Componente compat\xEDvel"),t(),e(2928,": "),i(2929,"code"),e(2930,"po-upload"),t()()()(),i(2931,"tr",16)(2932,"td",17)(2933,"div",25)(2934,"span",26),e(2935," hideSendButton"),n(2936,"br"),t()()(),i(2937,"td",21)(2938,"code",29),e(2939,"boolean"),t()(),i(2940,"td",24)(2941,"em")(2942,"strong"),e(2943,"(opcional)"),t()(),i(2944,"p"),e(2945,"Omite o bot\xE3o de envio de arquivos."),t(),i(2946,"blockquote")(2947,"p"),e(2948,"Caso o valor definido seja "),i(2949,"code"),e(2950,"true"),t(),e(2951,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2952,"code"),e(2953,"sendFiles()"),t(),e(2954," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(2955,"p")(2956,"strong"),e(2957,"Componente compat\xEDvel"),t(),e(2958,": "),i(2959,"code"),e(2960,"po-upload"),t()()()(),i(2961,"tr",16)(2962,"td",17)(2963,"div",25)(2964,"span",26),e(2965," icon"),n(2966,"br"),t()()(),i(2967,"td",21)(2968,"code",27),e(2969,"string "),t(),i(2970,"code",56),e(2971," TemplateRef<void>"),t()(),i(2972,"td",24)(2973,"em")(2974,"strong"),e(2975,"(opcional)"),t()(),i(2976,"p"),e(2977,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(2978,"blockquote")(2979,"p"),e(2980,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(2981,"ul")(2982,"li"),e(2983,"Input;"),t(),i(2984,"li"),e(2985,"Number;"),t(),i(2986,"li"),e(2987,"Decimal;"),t(),i(2988,"li"),e(2989,"Combo;"),t(),i(2990,"li"),e(2991,"Password;"),t()(),i(2992,"blockquote")(2993,"p"),e(2994,"Veja a disponibilidade de \xEDcones em "),i(2995,"a",57),e(2996,"biblioteca de \xEDcones"),t(),e(2997,"."),t()()()(),i(2998,"tr",16)(2999,"td",17)(3e3,"div",25)(3001,"span",26),e(3002," infiniteScroll"),n(3003,"br"),t()()(),i(3004,"td",21)(3005,"code",29),e(3006,"boolean"),t()(),i(3007,"td",24)(3008,"em")(3009,"strong"),e(3010,"(opcional)"),t()(),i(3011,"p"),e(3012,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(3013,"p")(3014,"strong"),e(3015,"Componentes compat\xEDveis:"),t(),i(3016,"code"),e(3017,"po-combo"),t(),e(3018,", "),i(3019,"code"),e(3020,"po-lookup"),t(),e(3021,"."),t()()(),i(3022,"tr",16)(3023,"td",17)(3024,"div",25)(3025,"span",26),e(3026," infiniteScrollDistance"),n(3027,"br"),t()()(),i(3028,"td",21)(3029,"code",44),e(3030,"number"),t()(),i(3031,"td",24)(3032,"em")(3033,"strong"),e(3034,"(opcional)"),t()(),i(3035,"p"),e(3036,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(3037,"strong"),e(3038,"Exemplos"),t(),i(3039,"code"),e(3040,"{ infiniteScrollDistance: 80 }"),t(),e(3041,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(3042,"p")(3043,"strong"),e(3044,"Componente compat\xEDvel:"),t(),i(3045,"code"),e(3046,"po-combo"),t(),e(3047,"."),t()()(),i(3048,"tr",16)(3049,"td",17)(3050,"div",25)(3051,"span",26),e(3052," invalidValue"),n(3053,"br"),t()()(),i(3054,"td",21)(3055,"code",29),e(3056,"boolean"),t()(),i(3057,"td",24)(3058,"em")(3059,"strong"),e(3060,"(opcional)"),t()(),i(3061,"p"),e(3062,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(3063,"code"),e(3064,"p-field-error-message"),t(),e(3065,"."),t(),i(3066,"blockquote")(3067,"p"),e(3068,"Caso essa propriedade seja definida como "),i(3069,"code"),e(3070,"true"),t(),e(3071,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(3072,"p")(3073,"strong"),e(3074,"Componente compat\xEDvel"),t(),e(3075,": "),i(3076,"code"),e(3077,"po-switch"),t()()()(),i(3078,"tr",16)(3079,"td",17)(3080,"div",25)(3081,"span",26),e(3082," isoFormat"),n(3083,"br"),t()()(),i(3084,"td",21)(3085,"code",58),e(3086,"PoDatepickerIsoFormat"),t()(),i(3087,"td",24)(3088,"em")(3089,"strong"),e(3090,"(opcional)"),t()(),i(3091,"p"),e(3092,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(3093,"blockquote")(3094,"p"),e(3095,"Veja os valores v\xE1lidos no "),i(3096,"code"),e(3097,"enumPoDatepickerIsoFormat"),t(),e(3098,"."),t()(),i(3099,"p")(3100,"strong"),e(3101,"Componente compat\xEDvel:"),t(),e(3102," po-datepicker"),t()()(),i(3103,"tr",16)(3104,"td",17)(3105,"div",25)(3106,"span",26),e(3107," key"),n(3108,"br"),t()()(),i(3109,"td",21)(3110,"code",29),e(3111,"boolean"),t()(),i(3112,"td",24)(3113,"em")(3114,"strong"),e(3115,"(opcional)"),t()(),i(3116,"p"),e(3117,"Identificador"),t()()(),i(3118,"tr",16)(3119,"td",17)(3120,"div",25)(3121,"span",26),e(3122," keydown"),n(3123,"br"),t()()(),i(3124,"td",21)(3125,"code",43),e(3126,"Function"),t()(),i(3127,"td",24)(3128,"em")(3129,"strong"),e(3130,"(opcional)"),t()(),i(3131,"p"),e(3132,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3133,"code"),e(3134,"KeyboardEvent"),t(),e(3135," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3136,"tr",16)(3137,"td",17)(3138,"div",25)(3139,"span",26),e(3140," label"),n(3141,"br"),t()()(),i(3142,"td",21)(3143,"code",27),e(3144,"string"),t()(),i(3145,"td",24)(3146,"em")(3147,"strong"),e(3148,"(opcional)"),t()(),i(3149,"p"),e(3150,"R\xF3tulo do campo exibido."),t(),i(3151,"p"),e(3152,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3153,"code"),e(3154,"label"),t(),e(3155," o valor da propriedade "),i(3156,"code"),e(3157,"property"),t(),e(3158," com a primeira letra em mai\xFAsculo."),t()()(),i(3159,"tr",16)(3160,"td",17)(3161,"div",25)(3162,"span",26),e(3163," labelPosition"),n(3164,"br"),t()()(),i(3165,"td",21)(3166,"code",59),e(3167,"PoSwitchLabelPosition"),t()(),i(3168,"td",24)(3169,"em")(3170,"strong"),e(3171,"(opcional)"),t()(),i(3172,"p"),e(3173,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3174,"blockquote")(3175,"p"),e(3176,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3177,"tr",16)(3178,"td",17)(3179,"div",25)(3180,"span",26),e(3181," listboxControlPosition"),n(3182,"br"),t()()(),i(3183,"td",21)(3184,"code",60),e(3185,"'top' "),t(),i(3186,"code",61),e(3187," 'bottom'"),t()(),i(3188,"td",24)(3189,"em")(3190,"strong"),e(3191,"(opcional)"),t()(),i(3192,"p"),e(3193,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(3194,"code"),e(3195,"listbox"),t(),e(3196," em rela\xE7\xE3o ao campo ("),i(3197,"code"),e(3198,"top"),t(),e(3199," ou "),i(3200,"code"),e(3201,"bottom"),t(),e(3202,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(3203,"p")(3204,"strong"),e(3205,"Componentes compat\xEDveis:"),t(),i(3206,"code"),e(3207,"po-multiselect"),t(),e(3208,", "),i(3209,"code"),e(3210,"po-combo"),t(),e(3211,"."),t()()(),i(3212,"tr",16)(3213,"td",17)(3214,"div",25)(3215,"span",26),e(3216," literals"),n(3217,"br"),t()()(),i(3218,"td",21)(3219,"code",36),e(3220,"PoLookupLiterals "),t(),i(3221,"code",62),e(3222," PoMultiselectLiterals "),t(),i(3223,"code",63),e(3224," PoComboLiterals "),t(),i(3225,"code",64),e(3226," PoDatepickerRangeLiterals "),t(),i(3227,"code",65),e(3228," PoUploadLiterals"),t()(),i(3229,"td",24)(3230,"em")(3231,"strong"),e(3232,"(opcional)"),t()(),i(3233,"p"),e(3234,"Objeto com as literais usadas para os seguintes componentes: "),i(3235,"code"),e(3236,"po-lookup"),t(),e(3237,", "),i(3238,"code"),e(3239,"po-multiselect"),t(),e(3240,", "),i(3241,"code"),e(3242,"po-combo"),t(),e(3243," e "),i(3244,"code"),e(3245,"po-datepicker-range"),t(),e(3246,"."),t(),i(3247,"blockquote")(3248,"p"),e(3249,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3250,"p")(3251,"strong"),e(3252,"Componentes compat\xEDveis:"),t(),i(3253,"code"),e(3254,"po-lookup"),t(),e(3255,", "),i(3256,"code"),e(3257,"po-multiselect"),t(),e(3258,", "),i(3259,"code"),e(3260,"po-combo"),t(),e(3261,", "),i(3262,"code"),e(3263,"po-datepicker-range"),t()()()(),i(3264,"tr",16)(3265,"td",17)(3266,"div",25)(3267,"span",26),e(3268," locale"),n(3269,"br"),t()()(),i(3270,"td",21)(3271,"code",27),e(3272,"string"),t()(),i(3273,"td",24)(3274,"em")(3275,"strong"),e(3276,"(opcional)"),t()(),i(3277,"p"),e(3278,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),i(3279,"a",66)(3280,"code"),e(3281,"I18n"),t()()(),i(3282,"p"),e(3283,`Exemplo de utiliza\xE7\xE3o:
`),i(3284,"code"),e(3285,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),i(3286,"blockquote")(3287,"p"),e(3288,"Para ver quais linguagens suportadas acesse "),i(3289,"a",66)(3290,"code"),e(3291,"I18n"),t()(),e(3292,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(3293,"tr",16)(3294,"td",17)(3295,"div",25)(3296,"span",26),e(3297," mask"),n(3298,"br"),t()()(),i(3299,"td",21)(3300,"code",27),e(3301,"string"),t()(),i(3302,"td",24)(3303,"em")(3304,"strong"),e(3305,"(opcional)"),t()(),i(3306,"p"),e(3307,"M\xE1scara para o campo."),t(),i(3308,"p")(3309,"strong"),e(3310,"Componentes compat\xEDveis:"),t(),i(3311,"code"),e(3312,"po-input"),t(),e(3313,"."),t(),i(3314,"blockquote")(3315,"p"),e(3316,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3317,"code"),e(3318,"type: time"),t(),e(3319,"."),t()()()(),i(3320,"tr",16)(3321,"td",17)(3322,"div",25)(3323,"span",26),e(3324," maskFormatModel"),n(3325,"br"),t()()(),i(3326,"td",21)(3327,"code",29),e(3328,"boolean"),t()(),i(3329,"td",24)(3330,"em")(3331,"strong"),e(3332,"(opcional)"),t()(),i(3333,"p"),e(3334,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3335,"code"),e(3336,"false"),t(),e(3337,"."),t(),i(3338,"p")(3339,"strong"),e(3340,"Componentes compat\xEDveis:"),t(),i(3341,"code"),e(3342,"po-input"),t(),e(3343,"."),t(),i(3344,"blockquote")(3345,"p"),e(3346,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3347,"code"),e(3348,"type: time"),t(),e(3349,"."),t()()()(),i(3350,"tr",16)(3351,"td",17)(3352,"div",25)(3353,"span",26),e(3354," maxLength"),n(3355,"br"),t()()(),i(3356,"td",21)(3357,"code",44),e(3358,"number"),t()(),i(3359,"td",24)(3360,"em")(3361,"strong"),e(3362,"(opcional)"),t()(),i(3363,"p"),e(3364,"Tamanho m\xE1ximo de caracteres."),t(),i(3365,"p")(3366,"strong"),e(3367,"Componentes compat\xEDveis:"),t(),i(3368,"code"),e(3369,"po-input"),t(),e(3370,", "),i(3371,"code"),e(3372,"po-number"),t(),e(3373,", "),i(3374,"code"),e(3375,"po-decimal"),t(),e(3376,", "),i(3377,"code"),e(3378,"po-textarea"),t(),e(3379,", "),i(3380,"code"),e(3381,"po-password"),t(),e(3382,"."),t()()(),i(3383,"tr",16)(3384,"td",17)(3385,"div",25)(3386,"span",26),e(3387," maxValue"),n(3388,"br"),t()()(),i(3389,"td",21)(3390,"code",27),e(3391,"string "),t(),i(3392,"code",44),e(3393," number"),t()(),i(3394,"td",24)(3395,"em")(3396,"strong"),e(3397,"(opcional)"),t()(),i(3398,"p"),e(3399,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3400,"em"),e(3401,"number"),t(),e(3402,", "),i(3403,"em"),e(3404,"date"),t(),e(3405," ou "),i(3406,"em"),e(3407,"dateTime"),t(),e(3408,"."),t(),i(3409,"p")(3410,"strong"),e(3411,"Componentes compat\xEDveis:"),t(),i(3412,"code"),e(3413,"po-datepicker"),t(),e(3414,", "),i(3415,"code"),e(3416,"po-datepicker-range"),t(),e(3417,", "),i(3418,"code"),e(3419,"po-number"),t(),e(3420,", "),i(3421,"code"),e(3422,"po-decimal"),t()()()(),i(3423,"tr",16)(3424,"td",17)(3425,"div",25)(3426,"span",26),e(3427," minLength"),n(3428,"br"),t()()(),i(3429,"td",21)(3430,"code",44),e(3431,"number"),t()(),i(3432,"td",24)(3433,"em")(3434,"strong"),e(3435,"(opcional)"),t()(),i(3436,"p"),e(3437,"Tamanho m\xEDnimo de caracteres."),t(),i(3438,"p")(3439,"strong"),e(3440,"Componentes compat\xEDveis:"),t(),i(3441,"code"),e(3442,"po-input"),t(),e(3443,", "),i(3444,"code"),e(3445,"po-number"),t(),e(3446,", "),i(3447,"code"),e(3448,"po-decimal"),t(),e(3449,", "),i(3450,"code"),e(3451,"po-textarea"),t(),e(3452,", "),i(3453,"code"),e(3454,"po-password"),t(),e(3455,"."),t()()(),i(3456,"tr",16)(3457,"td",17)(3458,"div",25)(3459,"span",26),e(3460," minValue"),n(3461,"br"),t()()(),i(3462,"td",21)(3463,"code",27),e(3464,"string "),t(),i(3465,"code",44),e(3466," number"),t()(),i(3467,"td",24)(3468,"em")(3469,"strong"),e(3470,"(opcional)"),t()(),i(3471,"p"),e(3472,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3473,"em"),e(3474,"number"),t(),e(3475,", "),i(3476,"em"),e(3477,"date"),t(),e(3478," ou "),i(3479,"em"),e(3480,"dateTime"),t(),e(3481,"."),t(),i(3482,"p")(3483,"strong"),e(3484,"Componentes compat\xEDveis:"),t(),i(3485,"code"),e(3486,"po-datepicker"),t(),e(3487,", "),i(3488,"code"),e(3489,"po-datepicker-range"),t(),e(3490,", "),i(3491,"code"),e(3492,"po-number"),t(),e(3493,", "),i(3494,"code"),e(3495,"po-decimal"),t()()()(),i(3496,"tr",16)(3497,"td",17)(3498,"div",25)(3499,"span",26),e(3500," multiple"),n(3501,"br"),t()()(),i(3502,"td",21)(3503,"code",29),e(3504,"boolean"),t()(),i(3505,"td",24)(3506,"em")(3507,"strong"),e(3508,"(opcional)"),t()(),i(3509,"p"),e(3510,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3511,"p")(3512,"strong"),e(3513,"Componente compat\xEDvel:"),t(),i(3514,"code"),e(3515,"po-lookup"),t(),e(3516,", "),i(3517,"code"),e(3518,"po-upload"),t()()()(),i(3519,"tr",16)(3520,"td",17)(3521,"div",25)(3522,"span",26),e(3523," noAutocomplete"),n(3524,"br"),t()()(),i(3525,"td",21)(3526,"code",29),e(3527,"boolean"),t()(),i(3528,"td",24)(3529,"em")(3530,"strong"),e(3531,"(opcional)"),t()(),i(3532,"p"),e(3533,"Define a propriedade nativa "),i(3534,"code"),e(3535,"autocomplete"),t(),e(3536," do campo como off."),t(),i(3537,"p")(3538,"strong"),e(3539,"Componentes compat\xEDveis:"),t(),i(3540,"code"),e(3541,"po-datepicker"),t(),e(3542,", "),i(3543,"code"),e(3544,"po-datepicker-range"),t(),e(3545,", "),i(3546,"code"),e(3547,"po-input"),t(),e(3548,", "),i(3549,"code"),e(3550,"po-number"),t(),e(3551,", "),i(3552,"code"),e(3553,"po-decimal"),t(),e(3554,", "),i(3555,"code"),e(3556,"po-lookup"),t(),e(3557,", "),i(3558,"code"),e(3559,"po-password"),t()()()(),i(3560,"tr",16)(3561,"td",17)(3562,"div",25)(3563,"span",26),e(3564," offsetColumns"),n(3565,"br"),t()()(),i(3566,"td",21)(3567,"code",44),e(3568,"number"),t()(),i(3569,"td",24)(3570,"em")(3571,"strong"),e(3572,"(opcional)"),t()(),i(3573,"p"),e(3574,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3575,"p"),e(3576,"Deve ser usado o sistema de "),i(3577,"strong"),e(3578,"grid"),t(),e(3579," do PO (1 ... 12 colunas)."),t(),i(3580,"blockquote")(3581,"p"),e(3582,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3583,"tr",16)(3584,"td",17)(3585,"div",25)(3586,"span",26),e(3587," offsetLgColumns"),n(3588,"br"),t()()(),i(3589,"td",21)(3590,"code",44),e(3591,"number"),t()(),i(3592,"td",24)(3593,"em")(3594,"strong"),e(3595,"(opcional)"),t()(),i(3596,"p"),e(3597,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3598,"p"),e(3599,"Deve ser usado o sistema de "),i(3600,"strong"),e(3601,"grid"),t(),e(3602," do PO (1 ... 12 colunas)."),t(),i(3603,"blockquote")(3604,"p"),e(3605,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3606,"code"),e(3607,"offsetColumns"),t(),e(3608,"."),t()()()(),i(3609,"tr",16)(3610,"td",17)(3611,"div",25)(3612,"span",26),e(3613," offsetMdColumns"),n(3614,"br"),t()()(),i(3615,"td",21)(3616,"code",44),e(3617,"number"),t()(),i(3618,"td",24)(3619,"em")(3620,"strong"),e(3621,"(opcional)"),t()(),i(3622,"p"),e(3623,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3624,"p"),e(3625,"Deve ser usado o sistema de "),i(3626,"strong"),e(3627,"grid"),t(),e(3628," do PO (1 ... 12 colunas)."),t(),i(3629,"blockquote")(3630,"p"),e(3631,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3632,"code"),e(3633,"offsetColumns"),t(),e(3634,"."),t()()()(),i(3635,"tr",16)(3636,"td",17)(3637,"div",25)(3638,"span",26),e(3639," offsetSmColumns"),n(3640,"br"),t()()(),i(3641,"td",21)(3642,"code",44),e(3643,"number"),t()(),i(3644,"td",24)(3645,"em")(3646,"strong"),e(3647,"(opcional)"),t()(),i(3648,"p"),e(3649,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3650,"p"),e(3651,"Deve ser usado o sistema de "),i(3652,"strong"),e(3653,"grid"),t(),e(3654," do PO (1 ... 12 colunas)."),t(),i(3655,"blockquote")(3656,"p"),e(3657,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3658,"code"),e(3659,"offsetColumns"),t(),e(3660,"."),t()()()(),i(3661,"tr",16)(3662,"td",17)(3663,"div",25)(3664,"span",26),e(3665," offsetXlColumns"),n(3666,"br"),t()()(),i(3667,"td",21)(3668,"code",44),e(3669,"number"),t()(),i(3670,"td",24)(3671,"em")(3672,"strong"),e(3673,"(opcional)"),t()(),i(3674,"p"),e(3675,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3676,"p"),e(3677,"Deve ser usado o sistema de "),i(3678,"strong"),e(3679,"grid"),t(),e(3680," do PO (1 ... 12 colunas)."),t(),i(3681,"blockquote")(3682,"p"),e(3683,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3684,"code"),e(3685,"offsetColumns"),t(),e(3686,"."),t()()()(),i(3687,"tr",16)(3688,"td",17)(3689,"div",25)(3690,"span",26),e(3691," onError"),n(3692,"br"),t()()(),i(3693,"td",21)(3694,"code",43),e(3695,"Function"),t()(),i(3696,"td",24)(3697,"em")(3698,"strong"),e(3699,"(opcional)"),t()(),i(3700,"p"),e(3701,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3702,"blockquote")(3703,"p"),e(3704,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3705,"code"),e(3706,"HttpErrorResponse"),t(),e(3707,"."),t()(),i(3708,"p")(3709,"strong"),e(3710,"Componente compat\xEDvel"),t(),e(3711,": "),i(3712,"code"),e(3713,"po-upload"),t()()()(),i(3714,"tr",16)(3715,"td",17)(3716,"div",25)(3717,"span",26),e(3718," onSuccess"),n(3719,"br"),t()()(),i(3720,"td",21)(3721,"code",43),e(3722,"Function"),t()(),i(3723,"td",24)(3724,"em")(3725,"strong"),e(3726,"(opcional)"),t()(),i(3727,"p"),e(3728,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3729,"blockquote")(3730,"p"),e(3731,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3732,"code"),e(3733,"HttpResponse"),t(),e(3734,"."),t()(),i(3735,"p")(3736,"strong"),e(3737,"Componente compat\xEDvel"),t(),e(3738,": "),i(3739,"code"),e(3740,"po-upload"),t()()()(),i(3741,"tr",16)(3742,"td",17)(3743,"div",25)(3744,"span",26),e(3745," onUpload"),n(3746,"br"),t()()(),i(3747,"td",21)(3748,"code",43),e(3749,"Function"),t()(),i(3750,"td",24)(3751,"em")(3752,"strong"),e(3753,"(opcional)"),t()(),i(3754,"p"),e(3755,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3756,"pre")(3757,"code"),e(3758,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3759,"p")(3760,"strong"),e(3761,"Componente compat\xEDvel"),t(),e(3762,": "),i(3763,"code"),e(3764,"po-upload"),t()()()(),i(3765,"tr",16)(3766,"td",17)(3767,"div",25)(3768,"span",26),e(3769," optional"),n(3770,"br"),t()()(),i(3771,"td",21)(3772,"code",29),e(3773,"boolean"),t()(),i(3774,"td",24)(3775,"em")(3776,"strong"),e(3777,"(opcional)"),t()(),i(3778,"p"),e(3779,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3780,"blockquote")(3781,"p"),e(3782,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3783,"ul")(3784,"li"),e(3785,"O campo for "),i(3786,"code"),e(3787,"required"),t(),e(3788,", ou;"),t(),i(3789,"li"),e(3790,"N\xE3o possuir "),i(3791,"code"),e(3792,"help"),t(),e(3793," e "),i(3794,"code"),e(3795,"label"),t(),e(3796,"."),t()()()(),i(3797,"tr",16)(3798,"td",17)(3799,"div",25)(3800,"span",26),e(3801," options"),n(3802,"br"),t()()(),i(3803,"td",21)(3804,"code",32),e(3805,"Array<string> "),t(),i(3806,"code",67),e(3807," Array<PoSelectOption> "),t(),i(3808,"code",68),e(3809," Array<PoMultiselectOption> "),t(),i(3810,"code",69),e(3811," Array<PoCheckboxGroupOption> "),t(),i(3812,"code",70),e(3813," Array<any>"),t()(),i(3814,"td",24)(3815,"em")(3816,"strong"),e(3817,"(opcional)"),t()(),i(3818,"p"),e(3819,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3820,"p")(3821,"strong"),e(3822,"Componentes compat\xEDveis:"),t(),i(3823,"code"),e(3824,"po-select"),t(),e(3825,", "),i(3826,"code"),e(3827,"po-radio-group"),t(),e(3828,", "),i(3829,"code"),e(3830,"po-checkbox-group"),t(),e(3831,", "),i(3832,"code"),e(3833,"po-multiselect"),t(),e(3834,"."),t()()(),i(3835,"tr",16)(3836,"td",17)(3837,"div",25)(3838,"span",26),e(3839," optionsMulti"),n(3840,"br"),t()()(),i(3841,"td",21)(3842,"code",29),e(3843,"boolean"),t()(),i(3844,"td",24)(3845,"em")(3846,"strong"),e(3847,"(opcional)"),t()(),i(3848,"p"),e(3849,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3850,"tr",16)(3851,"td",17)(3852,"div",25)(3853,"span",26),e(3854," optionsService"),n(3855,"br"),t()()(),i(3856,"td",21)(3857,"code",27),e(3858,"string "),t(),i(3859,"code",71),e(3860," PoComboFilter "),t(),i(3861,"code",72),e(3862," PoMultiselectFilter"),t()(),i(3863,"td",24)(3864,"em")(3865,"strong"),e(3866,"(opcional)"),t()(),i(3867,"p"),e(3868,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3869,"strong"),e(3870,"Importante"),t()(),i(3871,"blockquote")(3872,"p"),e(3873,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3874,"a",7),e(3875,"guia de API do PO UI"),t(),e(3876,"."),t()()()(),i(3877,"tr",16)(3878,"td",17)(3879,"div",25)(3880,"span",26),e(3881," order"),n(3882,"br"),t()()(),i(3883,"td",21)(3884,"code",44),e(3885,"number"),t()(),i(3886,"td",24)(3887,"em")(3888,"strong"),e(3889,"(opcional)"),t()(),i(3890,"p"),e(3891,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3892,"p"),e(3893,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3894,"p")(3895,"code"),e(3896,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3897,"p"),e(3898,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3899,"code"),e(3900,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3901,"p"),e(3902,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3903,"p"),e(3904,"Campos sem "),i(3905,"code"),e(3906,"order"),t(),e(3907,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3908,"tr",16)(3909,"td",17)(3910,"div",25)(3911,"span",26),e(3912," params"),n(3913,"br"),t()()(),i(3914,"td",21)(3915,"code",33),e(3916,"any"),t()(),i(3917,"td",24)(3918,"em")(3919,"strong"),e(3920,"(opcional)"),t()(),i(3921,"p"),e(3922,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3923,"code"),e(3924,"po-lookup"),t(),e(3925,` e
`),i(3926,"code"),e(3927,"po-combo"),t(),e(3928,"."),t(),i(3929,"p"),e(3930,"Por exemplo, para o par\xE2metro "),i(3931,"code"),e(3932,"{ age: 23 }"),t(),e(3933," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3934,"p")(3935,"code"),e(3936,"url + ?age=23&filter=Peter"),t()()()(),i(3937,"tr",16)(3938,"td",17)(3939,"div",25)(3940,"span",26),e(3941," pattern"),n(3942,"br"),t()()(),i(3943,"td",21)(3944,"code",27),e(3945,"string"),t()(),i(3946,"td",24)(3947,"em")(3948,"strong"),e(3949,"(opcional)"),t()(),i(3950,"p"),e(3951,"Regex para valida\xE7\xE3o do campo."),t(),i(3952,"p")(3953,"strong"),e(3954,"Componentes compat\xEDveis:"),t(),i(3955,"code"),e(3956,"po-input"),t(),e(3957,", "),i(3958,"code"),e(3959,"po-password"),t(),e(3960,"."),t()()(),i(3961,"tr",16)(3962,"td",17)(3963,"div",25)(3964,"span",26),e(3965," placeholder"),n(3966,"br"),t()()(),i(3967,"td",21)(3968,"code",27),e(3969,"string"),t()(),i(3970,"td",24)(3971,"em")(3972,"strong"),e(3973,"(opcional)"),t()(),i(3974,"p"),e(3975,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(3976,"tr",16)(3977,"td",17)(3978,"div",25)(3979,"span",26),e(3980," placeholderSearch"),n(3981,"br"),t()()(),i(3982,"td",21)(3983,"code",27),e(3984,"string"),t()(),i(3985,"td",24)(3986,"em")(3987,"strong"),e(3988,"(opcional)"),t()(),i(3989,"p"),e(3990,"Placeholder do campo de pesquisa do "),i(3991,"code"),e(3992,"po-multiselect"),t(),e(3993,"."),t(),i(3994,"blockquote")(3995,"p"),e(3996,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(3997,"tr",16)(3998,"td",17)(3999,"div",25)(4e3,"span",26),e(4001," property"),n(4002,"br"),t()()(),i(4003,"td",21)(4004,"code",27),e(4005,"string"),t()(),i(4006,"td",24)(4007,"p"),e(4008,"Nome de refer\xEAncia do campo."),t()()(),i(4009,"tr",16)(4010,"td",17)(4011,"div",25)(4012,"span",26),e(4013," range"),n(4014,"br"),t()()(),i(4015,"td",21)(4016,"code",29),e(4017,"boolean"),t()(),i(4018,"td",24)(4019,"em")(4020,"strong"),e(4021,"(opcional)"),t()(),i(4022,"p"),e(4023,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(4024,"blockquote")(4025,"p"),e(4026,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(4027,"tr",16)(4028,"td",17)(4029,"div",25)(4030,"span",26),e(4031," readonly"),n(4032,"br"),t()()(),i(4033,"td",21)(4034,"code",29),e(4035,"boolean"),t()(),i(4036,"td",24)(4037,"em")(4038,"strong"),e(4039,"(opcional)"),t()(),i(4040,"p"),e(4041,"Indica que o campo ser\xE1 somente leitura."),t(),i(4042,"p")(4043,"strong"),e(4044,"Componentes compat\xEDveis:"),t(),i(4045,"code"),e(4046,"po-datepicker"),t(),e(4047,", "),i(4048,"code"),e(4049,"po-datepicker-range"),t(),e(4050,", "),i(4051,"code"),e(4052,"po-input"),t(),e(4053,", "),i(4054,"code"),e(4055,"po-number"),t(),e(4056,", "),i(4057,"code"),e(4058,"po-decimal"),t(),e(4059,", "),i(4060,"code"),e(4061,"po-select"),t(),e(4062,", "),i(4063,"code"),e(4064,"po-textarea"),t(),e(4065,", "),i(4066,"code"),e(4067,"po-password"),t()()()(),i(4068,"tr",16)(4069,"td",17)(4070,"div",25)(4071,"span",26),e(4072," removeInitialFilter"),n(4073,"br"),t()()(),i(4074,"td",21)(4075,"code",29),e(4076,"boolean"),t()(),i(4077,"td",24)(4078,"em")(4079,"strong"),e(4080,"(opcional)"),t()(),i(4081,"p"),e(4082,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4083,"blockquote")(4084,"p"),e(4085,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4086,"p")(4087,"strong"),e(4088,"Componente compat\xEDvel"),t(),e(4089,": "),i(4090,"code"),e(4091,"po-combo"),t()()()(),i(4092,"tr",16)(4093,"td",17)(4094,"div",25)(4095,"span",26),e(4096," required"),n(4097,"br"),t()()(),i(4098,"td",21)(4099,"code",29),e(4100,"boolean"),t()(),i(4101,"td",24)(4102,"em")(4103,"strong"),e(4104,"(opcional)"),t()(),i(4105,"p"),e(4106,"Define a obrigatoriedade do campo."),t()()(),i(4107,"tr",16)(4108,"td",17)(4109,"div",25)(4110,"span",26),e(4111," requiredFieldErrorMessage"),n(4112,"br"),t()()(),i(4113,"td",21)(4114,"code",29),e(4115,"boolean"),t()(),i(4116,"td",24)(4117,"em")(4118,"strong"),e(4119,"(opcional)"),t()(),i(4120,"p"),e(4121,"Exibe a mensagem setada na propriedade "),i(4122,"code"),e(4123,"errorMessage"),t(),e(4124," se o campo estiver vazio e for requerido."),t(),i(4125,"blockquote")(4126,"p"),e(4127,"Necess\xE1rio que a propriedade "),i(4128,"code"),e(4129,"required"),t(),e(4130," esteja habilitada."),t()(),i(4131,"p")(4132,"strong"),e(4133,"Componentes compat\xEDveis:"),t(),i(4134,"code"),e(4135,"po-datepicker"),t(),e(4136,", "),i(4137,"code"),e(4138,"po-input"),t(),e(4139,", "),i(4140,"code"),e(4141,"po-number"),t(),e(4142,", "),i(4143,"code"),e(4144,"po-decimal"),t(),e(4145,", "),i(4146,"code"),e(4147,"po-password"),t(),e(4148,"."),t()()(),i(4149,"tr",16)(4150,"td",17)(4151,"div",25)(4152,"span",26),e(4153," restrictions"),n(4154,"br"),t()()(),i(4155,"td",21)(4156,"code",73),e(4157,"PoUploadFileRestrictions"),t()(),i(4158,"td",24)(4159,"em")(4160,"strong"),e(4161,"(opcional)"),t()(),i(4162,"p"),e(4163,"Objeto que segue a defini\xE7\xE3o da interface "),i(4164,"code"),e(4165,"PoUploadFileRestrictions"),t(),e(4166,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4167,"p")(4168,"strong"),e(4169,"Componente compat\xEDvel"),t(),e(4170,": "),i(4171,"code"),e(4172,"po-upload"),t()()()(),i(4173,"tr",16)(4174,"td",17)(4175,"div",25)(4176,"span",26),e(4177," rows"),n(4178,"br"),t()()(),i(4179,"td",21)(4180,"code",44),e(4181,"number"),t()(),i(4182,"td",24)(4183,"em")(4184,"strong"),e(4185,"(opcional)"),t()(),i(4186,"p"),e(4187,"Quantidade de linhas exibidas no "),i(4188,"code"),e(4189,"po-textarea"),t(),e(4190,"."),t()()(),i(4191,"tr",16)(4192,"td",17)(4193,"div",25)(4194,"span",26),e(4195," searchService"),n(4196,"br"),t()()(),i(4197,"td",21)(4198,"code",27),e(4199,"string "),t(),i(4200,"code",34),e(4201," PoLookupFilter"),t()(),i(4202,"td",24)(4203,"em")(4204,"strong"),e(4205,"(opcional)"),t()(),i(4206,"p"),e(4207,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4208,"code"),e(4209,"columns"),t(),e(4210,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4211,"strong"),e(4212,"Importante:"),t()(),i(4213,"blockquote")(4214,"p"),e(4215,"Caso utilizar a propriedade "),i(4216,"code"),e(4217,"optionsService"),t(),e(4218,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4219,"a",7),e(4220,"guia de API do PO UI"),t(),e(4221,"."),t()()()(),i(4222,"tr",16)(4223,"td",17)(4224,"div",25)(4225,"span",26),e(4226," secret"),n(4227,"br"),t()()(),i(4228,"td",21)(4229,"code",29),e(4230,"boolean"),t()(),i(4231,"td",24)(4232,"em")(4233,"strong"),e(4234,"(opcional)"),t()(),i(4235,"p"),e(4236,"Esconde a informa\xE7\xE3o estilo "),i(4237,"em"),e(4238,"password"),t(),e(4239,", pode ser utilizado quando o tipo de dado for "),i(4240,"em"),e(4241,"string"),t(),e(4242,"."),t()()(),i(4243,"tr",16)(4244,"td",17)(4245,"div",25)(4246,"span",26),e(4247," showRequired"),n(4248,"br"),t()()(),i(4249,"td",21)(4250,"code",29),e(4251,"boolean"),t()(),i(4252,"td",24)(4253,"em")(4254,"strong"),e(4255,"(opcional)"),t()(),i(4256,"p"),e(4257,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4258,"blockquote")(4259,"p"),e(4260,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4261,"ul")(4262,"li"),e(4263,"N\xE3o possuir "),i(4264,"code"),e(4265,"p-help"),t(),e(4266," e/ou "),i(4267,"code"),e(4268,"p-label"),t(),e(4269,"."),t()()()(),i(4270,"tr",16)(4271,"td",17)(4272,"div",25)(4273,"span",26),e(4274," size"),n(4275,"br"),t()()(),i(4276,"td",21)(4277,"code",27),e(4278,"string"),t()(),i(4279,"td",24)(4280,"em")(4281,"strong"),e(4282,"(opcional)"),t()(),i(4283,"p"),e(4284,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4285,"ul")(4286,"li")(4287,"code"),e(4288,"small"),t(),e(4289,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4290,"li")(4291,"code"),e(4292,"medium"),t(),e(4293,": aplica a medida medium de cada componente."),t(),i(4294,"li")(4295,"code"),e(4296,"large"),t(),e(4297,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4298,"code"),e(4299,"po-checkbox"),t(),e(4300," e "),i(4301,"code"),e(4302,"po-radio-group"),t(),e(4303,")."),i(4304,"blockquote")(4305,"p"),e(4306,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4307,"code"),e(4308,"medium"),t(),e(4309,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4310,"a",39),e(4311,"po-theme"),t(),e(4312,"."),t()()()()()(),i(4313,"tr",16)(4314,"td",17)(4315,"div",25)(4316,"span",26),e(4317," sort"),n(4318,"br"),t()()(),i(4319,"td",21)(4320,"code",29),e(4321,"boolean"),t()(),i(4322,"td",24)(4323,"em")(4324,"strong"),e(4325,"(opcional)"),t()(),i(4326,"p"),e(4327,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4328,"p")(4329,"strong"),e(4330,"Componentes compat\xEDveis:"),t(),i(4331,"code"),e(4332,"po-combo"),t(),e(4333,", po-multiselect"),t()()(),i(4334,"tr",16)(4335,"td",17)(4336,"div",25)(4337,"span",26),e(4338," step"),n(4339,"br"),t()()(),i(4340,"td",21)(4341,"code",44),e(4342,"number"),t()(),i(4343,"td",24)(4344,"em")(4345,"strong"),e(4346,"(opcional)"),t()(),i(4347,"p"),e(4348,"Intervalo utilizado no "),i(4349,"code"),e(4350,"po-number"),t(),e(4351,"."),t()()(),i(4352,"tr",16)(4353,"td",17)(4354,"div",25)(4355,"span",26),e(4356," thousandMaxlength"),n(4357,"br"),t()()(),i(4358,"td",21)(4359,"code",44),e(4360,"number"),t()(),i(4361,"td",24)(4362,"em")(4363,"strong"),e(4364,"(opcional)"),t()(),i(4365,"p"),e(4366,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4367,"blockquote")(4368,"p"),e(4369,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4370,"code"),e(4371,"type"),t(),e(4372," for "),i(4373,"em"),e(4374,"currency"),t(),e(4375," ou "),i(4376,"em"),e(4377,"decimal"),t(),e(4378,"."),t()()()(),i(4379,"tr",16)(4380,"td",17)(4381,"div",25)(4382,"span",26),e(4383," type"),n(4384,"br"),t()()(),i(4385,"td",21)(4386,"code",27),e(4387,"string "),t(),i(4388,"code",74),e(4389," PoDynamicFieldType"),t()(),i(4390,"td",24)(4391,"em")(4392,"strong"),e(4393,"(opcional)"),t()(),i(4394,"p"),e(4395,"Tipo do valor campo."),t(),i(4396,"p"),e(4397,"Valores v\xE1lidos:"),t(),i(4398,"ul")(4399,"li")(4400,"code"),e(4401,"boolean"),t(),e(4402,": Valores "),i(4403,"em"),e(4404,"booleanos"),t(),e(4405,"."),t(),i(4406,"li")(4407,"code"),e(4408,"currency"),t(),e(4409,": Valores monet\xE1rios."),t(),i(4410,"li")(4411,"code"),e(4412,"decimal"),t(),e(4413,": Valores decimais."),t(),i(4414,"li")(4415,"code"),e(4416,"date"),t(),e(4417,": Valores de datas."),i(4418,"ul")(4419,"li"),e(4420,"Aceita os tipos "),i(4421,"strong"),e(4422,"string"),t(),e(4423," e "),i(4424,"strong"),e(4425,"Date"),t(),e(4426,` padr\xE3o do Javascript,
por exemplo: `),i(4427,"code"),e(4428,"'2017-11-28'"),t(),e(4429," ou "),i(4430,"code"),e(4431,"new Date(2017, 10, 28)"),t(),e(4432,"."),t()()(),i(4433,"li")(4434,"code"),e(4435,"dateTime"),t(),e(4436,": Valor de data com hor\xE1rio."),i(4437,"ul")(4438,"li"),e(4439,"Aceita o tipo "),i(4440,"em"),e(4441,"string"),t(),e(4442," no formato "),i(4443,"strong"),e(4444,"ISO-8601"),t(),e(4445," extendido "),i(4446,"strong"),e(4447,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4448,`
e o tipo `),i(4449,"strong"),e(4450,"Date"),t(),e(4451," padr\xE3o do Javascript, por exemplo: "),i(4452,"code"),e(4453,"'2017-11-28T00:00:00-02:00'"),t(),e(4454," ou "),i(4455,"code"),e(4456,"new Date(2017, 10, 28)"),t(),e(4457,"."),t()()(),i(4458,"li")(4459,"code"),e(4460,"number"),t(),e(4461,": Valores num\xE9ricos."),t(),i(4462,"li")(4463,"code"),e(4464,"string"),t(),e(4465,": Textos."),t(),i(4466,"li")(4467,"code"),e(4468,"time"),t(),e(4469,": Valor do hor\xE1rio."),i(4470,"ul")(4471,"li"),e(4472,"Aceita o tipo "),i(4473,"strong"),e(4474,"string"),t(),e(4475," nos formatos "),i(4476,"strong"),e(4477,"'HH:mm:ss'"),t(),e(4478," ou "),i(4479,"strong"),e(4480,"'HH:mm:ss.ffffff'"),t(),e(4481,", por exemplo: "),i(4482,"code"),e(4483,"'23:12:45'"),t(),e(4484,"."),t()()()()()(),i(4485,"tr",16)(4486,"td",17)(4487,"div",25)(4488,"span",26),e(4489," url"),n(4490,"br"),t()()(),i(4491,"td",21)(4492,"code",27),e(4493,"string"),t()(),i(4494,"td",24)(4495,"em")(4496,"strong"),e(4497,"(opcional)"),t()(),i(4498,"p"),e(4499,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4500,"p")(4501,"strong"),e(4502,"Componente compat\xEDvel"),t(),e(4503,": "),i(4504,"code"),e(4505,"po-upload"),t()()()(),i(4506,"tr",16)(4507,"td",17)(4508,"div",25)(4509,"span",26),e(4510," validate"),n(4511,"br"),t()()(),i(4512,"td",21)(4513,"code",27),e(4514,"string "),t(),i(4515,"code",43),e(4516," Function"),t()(),i(4517,"td",24)(4518,"em")(4519,"strong"),e(4520,"(opcional)"),t()(),i(4521,"p"),e(4522,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4523,"strong"),e(4524,"mudan\xE7as do campo"),t(),e(4525,"."),t(),i(4526,"ul")(4527,"li"),e(4528,"A propriedade aceita os seguintes tipos:"),t()(),i(4529,"ul")(4530,"li")(4531,"strong"),e(4532,"String"),t(),e(4533,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4534,"code"),e(4535,"POST"),t(),e(4536,"."),t(),i(4537,"li")(4538,"strong"),e(4539,"Function"),t(),e(4540,": M\xE9todo que ser\xE1 executado."),t()(),i(4541,"p"),e(4542,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4543,"code"),e(4544,"PoDynamicFormFieldChanged"),t(),e(4545,":"),t(),i(4546,"p")(4547,"code"),e(4548,"{ property: 'property name', value: 'new value' }"),t()(),i(4549,"p"),e(4550,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4551,"a",75),e(4552,"PoDynamicFormFieldValidation"),t(),e(4553,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4554,"pre")(4555,"code"),e(4556,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4557,"p"),e(4558,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4559,"code"),e(4560,"bind"),t(),e(4561,`, por exemplo:
`),i(4562,"code"),e(4563,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4564,"tr",16)(4565,"td",17)(4566,"div",25)(4567,"span",26),e(4568," visible"),n(4569,"br"),t()()(),i(4570,"td",21)(4571,"code",29),e(4572,"boolean"),t()(),i(4573,"td",24)(4574,"em")(4575,"strong"),e(4576,"(opcional)"),t()(),i(4577,"p"),e(4578,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4579,"h4",42)(4580,"code",5),e(4581,"PoLookupColumn"),t()(),i(4582,"div",2)(4583,"p"),e(4584,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4585,"h4",12),e(4586,"Propriedades"),t(),i(4587,"table",13)(4588,"tr",14)(4589,"th",15),e(4590,"Nome"),t(),i(4591,"th",15),e(4592,"Tipo"),t(),i(4593,"th",15),e(4594,"Descri\xE7\xE3o"),t()(),i(4595,"tr",16)(4596,"td",17)(4597,"div",25)(4598,"span",26),e(4599," fieldLabel"),n(4600,"br"),t()()(),i(4601,"td",21)(4602,"code",29),e(4603,"boolean"),t()(),i(4604,"td",24)(4605,"em")(4606,"strong"),e(4607,"(opcional)"),t()(),i(4608,"p"),e(4609,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4610,"p"),e(4611,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4612,"p"),e(4613,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4614,"code"),e(4615,"p-field-format"),t(),e(4616," ou "),i(4617,"code"),e(4618,"p-field-label"),t(),e(4619," forem configurados no componente."),t()()(),i(4620,"tr",16)(4621,"td",17)(4622,"div",25)(4623,"span",26),e(4624," format"),n(4625,"br"),t()()(),i(4626,"td",21)(4627,"code",27),e(4628,"string"),t()(),i(4629,"td",24)(4630,"em")(4631,"strong"),e(4632,"(opcional)"),t()(),i(4633,"p"),e(4634,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4635,"ul")(4636,"li"),e(4637,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4638,"li"),e(4639,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4640,"tr",16)(4641,"td",17)(4642,"div",25)(4643,"span",26),e(4644," label"),n(4645,"br"),t()()(),i(4646,"td",21)(4647,"code",27),e(4648,"string"),t()(),i(4649,"td",24)(4650,"em")(4651,"strong"),e(4652,"(opcional)"),t()(),i(4653,"p"),e(4654,"Texto para t\xEDtulo da coluna."),t(),i(4655,"p"),e(4656,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4657,"em"),e(4658,"label"),t(),e(4659," o valor da propriedade "),i(4660,"em"),e(4661,"property"),t(),e(4662," com a primeira letra em mai\xFAsculo."),t()()(),i(4663,"tr",16)(4664,"td",17)(4665,"div",25)(4666,"span",26),e(4667," property"),n(4668,"br"),t()()(),i(4669,"td",21)(4670,"code",27),e(4671,"string"),t()(),i(4672,"td",24)(4673,"em")(4674,"strong"),e(4675,"(opcional)"),t()(),i(4676,"p"),e(4677,"Nome identificador da coluna."),t()()(),i(4678,"tr",16)(4679,"td",17)(4680,"div",25)(4681,"span",26),e(4682," type"),n(4683,"br"),t()()(),i(4684,"td",21)(4685,"code",27),e(4686,"string"),t()(),i(4687,"td",24)(4688,"em")(4689,"strong"),e(4690,"(opcional)"),t()(),i(4691,"p"),e(4692,"Tipo da coluna:"),t(),i(4693,"ul")(4694,"li"),e(4695,"string (padr\xE3o): textos"),t(),i(4696,"li"),e(4697,"number: valores num\xE9ricos"),t(),i(4698,"li"),e(4699,"date: data"),t(),i(4700,"li"),e(4701,"currency: valores monet\xE1rios"),t(),i(4702,"li"),e(4703,"dateTime: data e hora"),t()()()(),i(4704,"tr",16)(4705,"td",17)(4706,"div",25)(4707,"span",26),e(4708," width"),n(4709,"br"),t()()(),i(4710,"td",21)(4711,"code",27),e(4712,"string"),t()(),i(4713,"td",24)(4714,"em")(4715,"strong"),e(4716,"(opcional)"),t()(),i(4717,"p"),e(4718,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4719,"h4",42)(4720,"code",5),e(4721,"PoLookupFilter"),t()(),i(4722,"div",2)(4723,"p"),e(4724,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4725,"h4",12),e(4726,"M\xE9todos"),t(),i(4727,"table",40)(4728,"tr",16)(4729,"th",41)(4730,"div",25)(4731,"h4")(4732,"span",26),e(4733," getFilteredItems "),t()()()()(),i(4734,"tr",24)(4735,"td",24)(4736,"p"),e(4737,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4738,"em"),e(4739,"Observable"),t(),e(4740," com a resposta da API no formato da interface "),i(4741,"code"),e(4742,"PoLookupResponseApi"),t(),e(4743,"."),t()()()(),i(4744,"h5")(4745,"b"),e(4746,"Par\xE2metros"),t()(),i(4747,"table",13)(4748,"tr",14)(4749,"th",15),e(4750,"Nome"),t(),i(4751,"th",15),e(4752,"Tipo"),t(),i(4753,"th",15),e(4754,"Descri\xE7\xE3o"),t()(),i(4755,"tr",16)(4756,"td",17),e(4757," params"),t(),i(4758,"td",21)(4759,"code",76),e(4760," PoLookupFilteredItemsParams "),t()(),i(4761,"td",24)(4762,"p"),e(4763,"Objeto enviado por par\xE2metro que implementa a interface "),i(4764,"code"),e(4765,"PoLookupFilteredItemsParams"),t(),e(4766,"."),t()()()(),n(4767,"br"),i(4768,"table",40)(4769,"tr",16)(4770,"th",41)(4771,"div",25)(4772,"h4")(4773,"span",26),e(4774," getObjectByValue "),t()()()()(),i(4775,"tr",24)(4776,"td",24)(4777,"p"),e(4778,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4779,"p"),e(4780,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4781,"h5")(4782,"b"),e(4783,"Par\xE2metros"),t()(),i(4784,"table",13)(4785,"tr",14)(4786,"th",15),e(4787,"Nome"),t(),i(4788,"th",15),e(4789,"Tipo"),t(),i(4790,"th",15),e(4791,"Descri\xE7\xE3o"),t()(),i(4792,"tr",16)(4793,"td",17),e(4794," value"),t(),i(4795,"td",21)(4796,"code",27),e(4797," string "),t(),i(4798,"code",70),e(4799," Array<any> "),t()(),i(4800,"td",24)(4801,"p"),e(4802,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4803,"tr",16)(4804,"td",17),e(4805," filterParams"),t(),i(4806,"td",21)(4807,"code",76),e(4808," any "),t()(),i(4809,"td",24)(4810,"p"),e(4811,"Valor informado atrav\xE9s da propriedade "),i(4812,"code"),e(4813,"p-filter-params"),t(),e(4814,"."),t()()()(),n(4815,"br"),i(4816,"h4",42)(4817,"code",5),e(4818,"PoLookupFilteredItemsParams"),t()(),i(4819,"div",2)(4820,"p"),e(4821,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4822,"code"),e(4823,"getFilteredItems"),t(),e(4824,"."),t()(),i(4825,"h4",12),e(4826,"Propriedades"),t(),i(4827,"table",13)(4828,"tr",14)(4829,"th",15),e(4830,"Nome"),t(),i(4831,"th",15),e(4832,"Tipo"),t(),i(4833,"th",15),e(4834,"Descri\xE7\xE3o"),t()(),i(4835,"tr",16)(4836,"td",17)(4837,"div",25)(4838,"span",26),e(4839," advancedFilters"),n(4840,"br"),t()()(),i(4841,"td",21)(4842,"code",77),e(4843,`{ [key: string]: any;
}`),t()(),i(4844,"td",24)(4845,"em")(4846,"strong"),e(4847,"(opcional)"),t()(),i(4848,"p"),e(4849,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4850,"tr",16)(4851,"td",17)(4852,"div",25)(4853,"span",26),e(4854," filter"),n(4855,"br"),t()()(),i(4856,"td",21)(4857,"code",27),e(4858,"string"),t()(),i(4859,"td",24)(4860,"em")(4861,"strong"),e(4862,"(opcional)"),t()(),i(4863,"p"),e(4864,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4865,"tr",16)(4866,"td",17)(4867,"div",25)(4868,"span",26),e(4869," filterParams"),n(4870,"br"),t()()(),i(4871,"td",21)(4872,"code",33),e(4873,"any"),t()(),i(4874,"td",24)(4875,"em")(4876,"strong"),e(4877,"(opcional)"),t()(),i(4878,"p"),e(4879,"Valor informado atrav\xE9s da propriedade "),i(4880,"code"),e(4881,"p-filter-params"),t(),e(4882,"."),t()()(),i(4883,"tr",16)(4884,"td",17)(4885,"div",25)(4886,"span",26),e(4887," order"),n(4888,"br"),t()()(),i(4889,"td",21)(4890,"code",27),e(4891,"string"),t()(),i(4892,"td",24)(4893,"em")(4894,"strong"),e(4895,"(opcional)"),t()(),i(4896,"p"),e(4897,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(4898,"ul")(4899,"li"),e(4900,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(4901,"code"),e(4902,"-<colunaOrdenada>"),t(),e(4903,", por exemplo "),i(4904,"code"),e(4905,"-name"),t(),e(4906,"."),t(),i(4907,"li"),e(4908,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(4909,"code"),e(4910,"<colunaOrdenada>"),t(),e(4911,", por exemplo "),i(4912,"code"),e(4913,"name"),t(),e(4914,"."),t()()()(),i(4915,"tr",16)(4916,"td",17)(4917,"div",25)(4918,"span",26),e(4919," page"),n(4920,"br"),t()()(),i(4921,"td",21)(4922,"code",44),e(4923,"number"),t()(),i(4924,"td",24)(4925,"em")(4926,"strong"),e(4927,"(opcional)"),t()(),i(4928,"p"),e(4929,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(4930,"tr",16)(4931,"td",17)(4932,"div",25)(4933,"span",26),e(4934," pageSize"),n(4935,"br"),t()()(),i(4936,"td",21)(4937,"code",44),e(4938,"number"),t()(),i(4939,"td",24)(4940,"em")(4941,"strong"),e(4942,"(opcional)"),t()(),i(4943,"p"),e(4944,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(4945,"h4",42)(4946,"code",5),e(4947,"PoLookupLiterals"),t()(),i(4948,"div",2)(4949,"p"),e(4950,"Interface para defini\xE7\xE3o das literais usadas no "),i(4951,"code"),e(4952,"po-lookup"),t(),e(4953,"."),t()(),i(4954,"h4",12),e(4955,"Propriedades"),t(),i(4956,"table",13)(4957,"tr",14)(4958,"th",15),e(4959,"Nome"),t(),i(4960,"th",15),e(4961,"Tipo"),t(),i(4962,"th",15),e(4963,"Descri\xE7\xE3o"),t()(),i(4964,"tr",16)(4965,"td",17)(4966,"div",25)(4967,"span",26),e(4968," clean"),n(4969,"br"),t()()(),i(4970,"td",21)(4971,"code",27),e(4972,"string"),t()(),i(4973,"td",24)(4974,"em")(4975,"strong"),e(4976,"(opcional)"),t()(),i(4977,"p"),e(4978,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(4979,"tr",16)(4980,"td",17)(4981,"div",25)(4982,"span",26),e(4983," modalAdvancedSearch"),n(4984,"br"),t()()(),i(4985,"td",21)(4986,"code",27),e(4987,"string"),t()(),i(4988,"td",24)(4989,"em")(4990,"strong"),e(4991,"(opcional)"),t()(),i(4992,"p"),e(4993,"Texto do link de busca avan\xE7ada."),t(),i(4994,"p"),e(4995,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(4996,"tr",16)(4997,"td",17)(4998,"div",25)(4999,"span",26),e(5e3," modalAdvancedSearchPrimaryActionLabel"),n(5001,"br"),t()()(),i(5002,"td",21)(5003,"code",27),e(5004,"string"),t()(),i(5005,"td",24)(5006,"em")(5007,"strong"),e(5008,"(opcional)"),t()(),i(5009,"p"),e(5010,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5011,"tr",16)(5012,"td",17)(5013,"div",25)(5014,"span",26),e(5015," modalAdvancedSearchSecondaryActionLabel"),n(5016,"br"),t()()(),i(5017,"td",21)(5018,"code",27),e(5019,"string"),t()(),i(5020,"td",24)(5021,"em")(5022,"strong"),e(5023,"(opcional)"),t()(),i(5024,"p"),e(5025,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5026,"tr",16)(5027,"td",17)(5028,"div",25)(5029,"span",26),e(5030," modalAdvancedSearchTitle"),n(5031,"br"),t()()(),i(5032,"td",21)(5033,"code",27),e(5034,"string"),t()(),i(5035,"td",24)(5036,"em")(5037,"strong"),e(5038,"(opcional)"),t()(),i(5039,"p"),e(5040,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(5041,"tr",16)(5042,"td",17)(5043,"div",25)(5044,"span",26),e(5045," modalDisclaimerGroupTitle"),n(5046,"br"),t()()(),i(5047,"td",21)(5048,"code",27),e(5049,"string"),t()(),i(5050,"td",24)(5051,"em")(5052,"strong"),e(5053,"(opcional)"),t()(),i(5054,"p"),e(5055,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(5056,"tr",16)(5057,"td",17)(5058,"div",25)(5059,"span",26),e(5060," modalPlaceholder"),n(5061,"br"),t()()(),i(5062,"td",21)(5063,"code",27),e(5064,"string"),t()(),i(5065,"td",24)(5066,"em")(5067,"strong"),e(5068,"(opcional)"),t()(),i(5069,"p"),e(5070,"Texto exibido no placeholder do input da modal."),t()()(),i(5071,"tr",16)(5072,"td",17)(5073,"div",25)(5074,"span",26),e(5075," modalPrimaryActionLabel"),n(5076,"br"),t()()(),i(5077,"td",21)(5078,"code",27),e(5079,"string"),t()(),i(5080,"td",24)(5081,"em")(5082,"strong"),e(5083,"(opcional)"),t()(),i(5084,"p"),e(5085,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(5086,"tr",16)(5087,"td",17)(5088,"div",25)(5089,"span",26),e(5090," modalSecondaryActionLabel"),n(5091,"br"),t()()(),i(5092,"td",21)(5093,"code",27),e(5094,"string"),t()(),i(5095,"td",24)(5096,"em")(5097,"strong"),e(5098,"(opcional)"),t()(),i(5099,"p"),e(5100,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(5101,"tr",16)(5102,"td",17)(5103,"div",25)(5104,"span",26),e(5105," modalTableLoadMoreData"),n(5106,"br"),t()()(),i(5107,"td",21)(5108,"code",27),e(5109,"string"),t()(),i(5110,"td",24)(5111,"em")(5112,"strong"),e(5113,"(opcional)"),t()(),i(5114,"p"),e(5115,"Label do "),i(5116,"code"),e(5117,"button"),t(),e(5118," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(5119,"tr",16)(5120,"td",17)(5121,"div",25)(5122,"span",26),e(5123," modalTableLoadingData"),n(5124,"br"),t()()(),i(5125,"td",21)(5126,"code",27),e(5127,"string"),t()(),i(5128,"td",24)(5129,"em")(5130,"strong"),e(5131,"(opcional)"),t()(),i(5132,"p"),e(5133,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(5134,"tr",16)(5135,"td",17)(5136,"div",25)(5137,"span",26),e(5138," modalTableNoColumns"),n(5139,"br"),t()()(),i(5140,"td",21)(5141,"code",27),e(5142,"string"),t()(),i(5143,"td",24)(5144,"em")(5145,"strong"),e(5146,"(opcional)"),t()(),i(5147,"p"),e(5148,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(5149,"tr",16)(5150,"td",17)(5151,"div",25)(5152,"span",26),e(5153," modalTableNoData"),n(5154,"br"),t()()(),i(5155,"td",21)(5156,"code",27),e(5157,"string"),t()(),i(5158,"td",24)(5159,"em")(5160,"strong"),e(5161,"(opcional)"),t()(),i(5162,"p"),e(5163,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(5164,"tr",16)(5165,"td",17)(5166,"div",25)(5167,"span",26),e(5168," modalTitle"),n(5169,"br"),t()()(),i(5170,"td",21)(5171,"code",27),e(5172,"string"),t()(),i(5173,"td",24)(5174,"em")(5175,"strong"),e(5176,"(opcional)"),t()(),i(5177,"p"),e(5178,"Texto exibido no t\xEDtulo da modal."),t()()(),i(5179,"tr",16)(5180,"td",17)(5181,"div",25)(5182,"span",26),e(5183," search"),n(5184,"br"),t()()(),i(5185,"td",21)(5186,"code",27),e(5187,"string"),t()(),i(5188,"td",24)(5189,"em")(5190,"strong"),e(5191,"(opcional)"),t()(),i(5192,"p"),e(5193,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(5194,"h4",42)(5195,"code",5),e(5196,"PoLookupResponseApi"),t()(),i(5197,"div",2)(5198,"p"),e(5199,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(5200,"h4",12),e(5201,"Propriedades"),t(),i(5202,"table",13)(5203,"tr",14)(5204,"th",15),e(5205,"Nome"),t(),i(5206,"th",15),e(5207,"Tipo"),t(),i(5208,"th",15),e(5209,"Descri\xE7\xE3o"),t()(),i(5210,"tr",16)(5211,"td",17)(5212,"div",25)(5213,"span",26),e(5214," hasNext"),n(5215,"br"),t()()(),i(5216,"td",21)(5217,"code",29),e(5218,"boolean"),t()(),i(5219,"td",24)(5220,"p"),e(5221,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(5222,"tr",16)(5223,"td",17)(5224,"div",25)(5225,"span",26),e(5226," items"),n(5227,"br"),t()()(),i(5228,"td",21)(5229,"code",78),e(5230,"Array<object>"),t()(),i(5231,"td",24)(5232,"p"),e(5233,"Lista de itens retornados."),t()()()(),i(5234,"h3"),e(5235,"Enums"),t(),i(5236,"h4",4)(5237,"code",5),e(5238,"PoTableColumnSpacing"),t()(),i(5239,"div",2)(5240,"p"),e(5241,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),i(5242,"strong"),e(5243,"p-spacing"),t(),e(5244,") do po-table."),t()(),i(5245,"h4",12),e(5246,"Propriedades"),t(),i(5247,"table",13)(5248,"tr",14)(5249,"th",15),e(5250,"Nome"),t(),i(5251,"th",15),e(5252,"Descri\xE7\xE3o"),t()(),i(5253,"tr",16)(5254,"td",17)(5255,"div",25)(5256,"span",26),e(5257," ExtraSmall"),n(5258,"br"),t()()(),i(5259,"td",24)(5260,"p"),e(5261,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 1rem (horizontal)."),t()()(),i(5262,"tr",16)(5263,"td",17)(5264,"div",25)(5265,"span",26),e(5266," Small"),n(5267,"br"),t()()(),i(5268,"td",24)(5269,"p"),e(5270,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),i(5271,"tr",16)(5272,"td",17)(5273,"div",25)(5274,"span",26),e(5275," Medium"),n(5276,"br"),t()()(),i(5277,"td",24)(5278,"p"),e(5279,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(5280,"tr",16)(5281,"td",17)(5282,"div",25)(5283,"span",26),e(5284," Large"),n(5285,"br"),t()()(),i(5286,"td",24)(5287,"p"),e(5288,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Ne=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ie(ve),ie(he))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Pe,C,k,we,Me,De,Ae,je,ze,He],encapsulation:2})}return a})();var ut=[{path:"",component:Ne}],Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[ae.forChild(ut),ae]})}return a})();var qi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[Le,Be]})}return a})();export{qi as DocPoLookupModule};
