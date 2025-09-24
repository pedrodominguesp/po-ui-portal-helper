import{o as y,p as Le}from"./chunk-QBCDRFNO.js";import{Aa as Z,Ga as ke,Ia as q,K,P as fe,R as X,Ra as H,Sa as ye,Wa as N,mb as Pe,ta as Y,v as z,wa as Ce,yb as C,zb as k}from"./chunk-3RSXW52V.js";import{Bb as w,Ca as P,Cc as T,D as me,Dc as j,Ec as $,Fc as A,Ga as pe,Gc as I,Jc as Se,Ka as n,Kc as be,L as O,La as t,M as G,Ma as i,Mb as xe,Oc as ge,P as h,Qa as J,Ra as x,Sa as se,T as c,Tc as ve,U as E,Vc as he,Wa as ie,Xc as ae,Zb as V,a as U,ab as ue,bb as e,c as re,db as L,fb as b,gb as g,hb as v,ia as d,ib as D,ja as ne,jb as W,kb as F,o as te,pa as S,qa as Q,qb as ce,rb as Ee,va as de,za as u,zc as oe}from"./chunk-4WWO4UYO.js";var Fe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&i(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-lookup-basic"),t(),i(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,We,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Fe],encapsulation:2})}return a})();var _=(()=>{class a{httpClient=h(V);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=re(m,["filterParams","advancedFilters"]),s=U(U(U({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var qe=(()=>{class a{sampleFilterService=h(_);additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=Ce.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[D([_])],decls:26,vars:52,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=J();n(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),i(1,"hr"),n(2,"po-container",2)(3,"div",3),i(4,"po-info",4)(5,"po-info",5),t()(),i(6,"hr"),n(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),n(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),n(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),n(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),n(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),n(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),n(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),n(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),n(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),n(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),n(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),n(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),n(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),n(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),n(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),n(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[I,T,j,A,$,z,K,fe,X,ke,q,H,ye,N],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
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
    p-label="Additional Help"
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

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
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-labs"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Qe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,qe],encapsulation:2})}return a})();var $e=()=>({modalTitle:"Heroes available for mission"}),Te=(()=>{class a{service=h(_);notification=h(Y);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[D([_])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=J();n(0,"div",1),i(1,"po-info",2),t(),i(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),n(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),n(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ue(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",W(10,$e)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[I,T,j,A,$,z,q,H,N],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

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
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Xe,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Ze=()=>["nickname","label"],et=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service=h(_);notification=h(Y);formBuilder=h(ge);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,oe.required],vehicle:[null,oe.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[D([_])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(n(0,"div",0),i(1,"po-info",1),t(),i(2,"hr"),n(3,"form",2)(4,"div",0),i(5,"po-lookup",3)(6,"po-select",4),t(),n(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",W(7,Ze))("p-filter-service",o.service)("p-literals",W(8,et)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[I,T,j,Se,be,z,q,H,N],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
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
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero-reactive-form"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,nt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var le=(()=>{class a{http=h(V);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(te(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(te(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ot(a,ct){if(a&1&&(n(0,"div",0),i(1,"po-table",3),t()),a&2){let r=se();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Oe=(()=>{class a{filterService=h(le);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[D([le])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),i(2,"hr"),n(3,"div",0)(4,"po-lookup",2),ce(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),de(6,ot,2,4,"div",0)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),ie("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),ie("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),pe(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[T,A,X,q,Z,xe],encapsulation:2})}return a})();var lt=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
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
`),t(),n(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-sw-films"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,lt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var je=(()=>{class a{http=h(V);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(me("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ie=(()=>{class a{service=h(je);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),n(2,"po-container",2),i(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,K,q,Z],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
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
`),t(),n(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
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
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-multiple"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ie],encapsulation:2})}return a})();var He=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5248,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),n(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),n(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),n(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),n(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),n(36,"a",6),e(37,"modelo"),t(),e(38," como "),n(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),n(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),n(44,"code"),e(45,"po-select"),t(),e(46," ou o "),n(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),n(53,"p"),e(54,"Importante:"),t(),n(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),n(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),n(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),n(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),n(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),n(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),n(76,"th"),e(77,"Descri\xE7\xE3o"),t(),n(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),n(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),i(85,"td")(86,"td"),t(),n(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),n(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),n(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),n(100,"td"),e(101,"Tamanho da fonte"),t(),n(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),n(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),n(109,"td"),e(110,"Cor do texto no placeholder"),t(),n(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),n(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),n(118,"td"),e(119,"Cor principal do lookup"),t(),n(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),n(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),n(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),n(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),n(136,"td"),e(137,"Cor de background"),t(),n(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),n(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),n(145,"td"),e(146,"Cor do texto"),t(),n(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),n(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),n(154,"td"),e(155,"Cor principal do icone clear"),t(),n(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),n(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),i(163,"td")(164,"td"),t(),n(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),n(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),n(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),n(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),i(178,"td")(179,"td"),t(),n(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),n(184,"td"),e(185,"Cor principal no estado hover"),t(),n(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),n(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),n(193,"td"),e(194,"Cor de background no estado hover"),t(),n(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),n(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),i(202,"td")(203,"td"),t(),n(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),n(208,"td"),e(209,"Cor principal no estado de focus"),t(),n(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),n(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),n(217,"td"),e(218,"Cor do outline do estado de focus"),t(),n(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),n(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),i(226,"td")(227,"td"),t(),n(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),n(232,"td"),e(233,"Cor principal no estado disabled"),t(),n(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),n(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),n(241,"td"),e(242,"Cor de background no estado disabled"),t(),n(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),n(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),n(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),n(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),n(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),i(259,"td")(260,"td"),t(),n(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),n(265,"td"),e(266,"Cor de background no estado de requerido"),t(),n(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),n(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),n(273,"pre",11),e(274,`<po-lookup
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
`),t()(),n(275,"h4",12),e(276,"Propriedades"),t(),n(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),n(281,"th",15),e(282,"Tipo"),t(),n(283,"th",15),e(284,"Padr\xE3o"),t(),n(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),n(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),i(292,"br"),t()(),n(293,"div",20),e(294,"Deprecated"),t()(),n(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),n(298,"td",23),e(299,"-"),t(),n(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),n(304,"p"),e(305,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(306,"code"),e(307,"p-help"),t(),e(308,"."),t()()(),n(309,"tr",16)(310,"td",17)(311,"div",25)(312,"span",26),e(313," p-additional-help-tooltip"),i(314,"br"),t()(),n(315,"div",20),e(316,"Deprecated"),t()(),n(317,"td",21)(318,"code",27),e(319,"string"),t()(),n(320,"td",23),e(321,"-"),t(),n(322,"td",24)(323,"em")(324,"strong"),e(325,"(opcional)"),t()(),n(326,"p"),e(327,"Exibe um \xEDcone de ajuda adicional ao "),n(328,"code"),e(329,"p-help"),t(),e(330,`, com o texto desta propriedade no tooltip.
Se o evento `),n(331,"code"),e(332,"p-additional-help"),t(),e(333,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(334,"strong"),e(335,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(336,"blockquote")(337,"p"),e(338,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(339,"tr",16)(340,"td",17)(341,"div",25)(342,"span",26),e(343," p-advanced-filters"),i(344,"br"),t()()(),n(345,"td",21)(346,"code",28),e(347,"Array<PoLookupAdvancedFilter>"),t()(),n(348,"td",23),e(349,"-"),t(),n(350,"td",24)(351,"em")(352,"strong"),e(353,"(opcional)"),t()(),n(354,"p"),e(355,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(356,"blockquote")(357,"p"),e(358,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(359,"p"),e(360,"Exemplo de URL com busca avan\xE7ada:"),t(),n(361,"pre")(362,"code"),e(363,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),n(364,"p"),e(365,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),n(366,"pre")(367,"code"),e(368,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),n(369,"tr",16)(370,"td",17)(371,"div",25)(372,"span",26),e(373," p-append-in-body"),i(374,"br"),t()()(),n(375,"td",21)(376,"code",29),e(377,"boolean"),t()(),n(378,"td",23)(379,"p")(380,"code"),e(381,"false"),t()()(),n(382,"td",24)(383,"em")(384,"strong"),e(385,"(opcional)"),t()(),n(386,"p"),e(387,"Define que o tooltip ("),n(388,"code"),e(389,"p-additional-help-tooltip"),t(),e(390," e/ou "),n(391,"code"),e(392,"p-error-limit"),t(),e(393,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(394,"blockquote")(395,"p"),e(396,"Quando utilizado com "),n(397,"code"),e(398,"p-additional-help-tooltip"),t(),e(399,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(400,"tr",16)(401,"td",17)(402,"div",25)(403,"span",26),e(404," p-auto-focus"),i(405,"br"),t()()(),n(406,"td",21)(407,"code",29),e(408,"boolean"),t()(),n(409,"td",23)(410,"p")(411,"code"),e(412,"false"),t()()(),n(413,"td",24)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),n(417,"p"),e(418,"Aplica foco no elemento ao ser iniciado."),t(),n(419,"blockquote")(420,"p"),e(421,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(422,"tr",16)(423,"td",17)(424,"div",25)(425,"span",26),e(426," p-auto-height"),i(427,"br"),t()()(),n(428,"td",21)(429,"code",29),e(430,"boolean"),t()(),n(431,"td",23)(432,"p")(433,"code"),e(434,"false"),t()()(),n(435,"td",24)(436,"em")(437,"strong"),e(438,"(opcional)"),t()(),n(439,"p"),e(440,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),n(441,"tr",16)(442,"td",17)(443,"div",18)(444,"span",19),e(445," (p-change)"),i(446,"br"),t()()(),n(447,"td",21)(448,"code",22),e(449,"EventEmitter"),t()(),n(450,"td",23),e(451,"-"),t(),n(452,"td",24)(453,"em")(454,"strong"),e(455,"(opcional)"),t()(),n(456,"p"),e(457,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),n(458,"tr",16)(459,"td",17)(460,"div",18)(461,"span",19),e(462," (p-change-visible-columns)"),i(463,"br"),t()()(),n(464,"td",21)(465,"code",22),e(466,"EventEmitter"),t()(),n(467,"td",23),e(468,"-"),t(),n(469,"td",24)(470,"em")(471,"strong"),e(472,"(opcional)"),t()(),n(473,"p"),e(474,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(475,"p"),e(476,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(477,"tr",16)(478,"td",17)(479,"div",25)(480,"span",26),e(481," p-clean"),i(482,"br"),t()()(),n(483,"td",21)(484,"code",29),e(485,"boolean"),t()(),n(486,"td",23),e(487,"-"),t(),n(488,"td",24)(489,"p"),e(490,"Exibe um \xEDcone que permite limpar o campo."),t()()(),n(491,"tr",16)(492,"td",17)(493,"div",18)(494,"span",19),e(495," (p-restore-column-manager)"),i(496,"br"),t()()(),n(497,"td",21)(498,"code",22),e(499,"EventEmitter"),t()(),n(500,"td",23),e(501,"-"),t(),n(502,"td",24)(503,"em")(504,"strong"),e(505,"(opcional)"),t()(),n(506,"p"),e(507,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(508,"p"),e(509,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(510,"tr",16)(511,"td",17)(512,"div",25)(513,"span",26),e(514," p-columns"),i(515,"br"),t()()(),n(516,"td",21)(517,"code",30),e(518,"Array<PoLookupColumn>"),t()(),n(519,"td",23),e(520,"-"),t(),n(521,"td",24)(522,"em")(523,"strong"),e(524,"(opcional)"),t()(),n(525,"p"),e(526,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),n(527,"tr",16)(528,"td",17)(529,"div",25)(530,"span",26),e(531," p-disabled"),i(532,"br"),t()()(),n(533,"td",21)(534,"code",29),e(535,"boolean"),t()(),n(536,"td",23)(537,"p"),e(538,"false"),t()(),n(539,"td",24)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),n(543,"p"),e(544,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),e(549," p-error-limit"),i(550,"br"),t()()(),n(551,"td",21)(552,"code",29),e(553,"boolean"),t()(),n(554,"td",23)(555,"p")(556,"code"),e(557,"false"),t()()(),n(558,"td",24)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),n(562,"p"),e(563,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(564,"blockquote")(565,"p"),e(566,"Caso essa propriedade seja definida como "),n(567,"code"),e(568,"true"),t(),e(569,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(570,"tr",16)(571,"td",17)(572,"div",25)(573,"span",26),e(574," p-field-error-message"),i(575,"br"),t()()(),n(576,"td",21)(577,"code",27),e(578,"string"),t()(),n(579,"td",23),e(580,"-"),t(),n(581,"td",24)(582,"em")(583,"strong"),e(584,"(opcional)"),t()(),n(585,"p"),e(586,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(587,"blockquote")(588,"p"),e(589,"Necess\xE1rio que a propriedade "),n(590,"code"),e(591,"p-required"),t(),e(592," esteja habilitada."),t()()()(),n(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),e(597," p-field-format"),i(598,"br"),t()()(),n(599,"td",21)(600,"code",31),e(601,"((value) => string) "),t(),n(602,"code",32),e(603," Array<string>"),t()(),n(604,"td",23),e(605,"-"),t(),n(606,"td",24)(607,"em")(608,"strong"),e(609,"(opcional)"),t()(),n(610,"p"),e(611,"Formato de exibi\xE7\xE3o do campo."),t(),n(612,"p"),e(613,"Recebe uma fun\xE7\xE3o que deve retornar uma "),n(614,"em"),e(615,"string"),t(),e(616," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),n(617,"pre")(618,"code"),e(619,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),n(620,"blockquote")(621,"p"),e(622,"Esta propriedade sobrep\xF5e o valor da propriedade "),n(623,"code"),e(624,"p-field-label"),t(),e(625," na descri\xE7\xE3o do campo."),t()(),n(626,"p"),e(627,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),n(628,"pre")(629,"code"),e(630,`<po-lookup
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
`),t()(),n(631,"blockquote")(632,"p"),e(633,"Ser\xE1 utilizado "),n(634,"code"),e(635,"-"),t(),e(636," como separador."),t()()()(),n(637,"tr",16)(638,"td",17)(639,"div",25)(640,"span",26),e(641," p-field-label"),i(642,"br"),t()()(),n(643,"td",21)(644,"code",27),e(645,"string"),t()(),n(646,"td",23),e(647,"-"),t(),n(648,"td",24)(649,"p"),e(650,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),n(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),e(655," p-field-value"),i(656,"br"),t()()(),n(657,"td",21)(658,"code",27),e(659,"string"),t()(),n(660,"td",23),e(661,"-"),t(),n(662,"td",24)(663,"p"),e(664,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),n(665,"blockquote")(666,"p"),e(667,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),n(668,"tr",16)(669,"td",17)(670,"div",25)(671,"span",26),e(672," p-filter-params"),i(673,"br"),t()()(),n(674,"td",21)(675,"code",33),e(676,"any"),t()(),n(677,"td",23),e(678,"-"),t(),n(679,"td",24)(680,"em")(681,"strong"),e(682,"(opcional)"),t()(),n(683,"p"),e(684,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),n(685,"code"),e(686,"PoLookupFilter"),t(),e(687,"."),t()()(),n(688,"tr",16)(689,"td",17)(690,"div",25)(691,"span",26),e(692," p-filter-service"),i(693,"br"),t()()(),n(694,"td",21)(695,"code",27),e(696,"string "),t(),n(697,"code",34),e(698," PoLookupFilter"),t()(),n(699,"td",23),e(700,"-"),t(),n(701,"td",24)(702,"p"),e(703,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),n(704,"code"),e(705,"PoLookupFilter"),t(),e(706," ou uma URL."),t(),n(707,"p"),e(708,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),n(709,"pre")(710,"code"),e(711,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),n(712,"p"),e(713,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),n(714,"code"),e(715,"order"),t(),e(716,", por exemplo:"),t(),n(717,"ul")(718,"li")(719,"p"),e(720,"Coluna decrescente:"),t(),n(721,"pre")(722,"code"),e(723,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),n(724,"li")(725,"p"),e(726,"Coluna ascendente:"),t(),n(727,"pre")(728,"code"),e(729,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),n(730,"p"),e(731,"Se for definido a propriedade "),n(732,"code"),e(733,"p-filter-params"),t(),e(734,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),n(735,"code"),e(736,"{ age: 23 }"),t(),e(737," a URL ficaria:"),t(),n(738,"pre")(739,"code"),e(740,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),n(741,"p"),e(742,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),n(743,"pre")(744,"code"),e(745,`model = 1234;

GET url/1234
`),t()(),n(746,"p"),e(747,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),n(748,"pre")(749,"code"),e(750,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),n(751,"blockquote")(752,"p"),e(753,"Esta URL deve retornar e receber os dados no padr\xE3o de "),n(754,"a",7),e(755,"API do PO UI"),t(),e(756,` e utiliza os valores
definidos nas propriedades `),n(757,"code"),e(758,"p-field-label"),t(),e(759," e "),n(760,"code"),e(761,"p-field-value"),t(),e(762," para a constru\xE7\xE3o do "),n(763,"code"),e(764,"po-lookup"),t(),e(765,"."),t()(),n(766,"p"),e(767,"Caso o usu\xE1rio digite um valor e pressione a tecla "),n(768,"em"),e(769,"TAB"),t(),e(770,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),n(771,"a",35),e(772,"encodeURIComponent"),t(),e(773,`
e concatenado na URL da seguinte forma:`),t(),n(774,"pre")(775,"code"),e(776,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),n(777,"blockquote")(778,"p"),e(779,"Quando informado um servi\xE7o que implemente a interface "),n(780,"code"),e(781,"PoLookupFilter"),t(),e(782," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),n(783,"tr",16)(784,"td",17)(785,"div",25)(786,"span",26),e(787," p-help"),i(788,"br"),t()()(),n(789,"td",21)(790,"code",27),e(791,"string"),t()(),n(792,"td",23),e(793,"-"),t(),n(794,"td",24)(795,"em")(796,"strong"),e(797,"(opcional)"),t()(),n(798,"p"),e(799,"Texto de apoio do campo."),t()()(),n(800,"tr",16)(801,"td",17)(802,"div",25)(803,"span",26),e(804," p-hide-columns-manager"),i(805,"br"),t()()(),n(806,"td",21)(807,"code",29),e(808,"boolean"),t()(),n(809,"td",23)(810,"p")(811,"code"),e(812,"false"),t()()(),n(813,"td",24)(814,"em")(815,"strong"),e(816,"(opcional)"),t()(),n(817,"p"),e(818,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),n(819,"tr",16)(820,"td",17)(821,"div",25)(822,"span",26),e(823," p-infinite-scroll"),i(824,"br"),t()()(),n(825,"td",21)(826,"code",29),e(827,"boolean"),t()(),n(828,"td",23)(829,"p")(830,"code"),e(831,"false"),t()()(),n(832,"td",24)(833,"em")(834,"strong"),e(835,"(opcional)"),t()(),n(836,"p"),e(837,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),n(838,"tr",16)(839,"td",17)(840,"div",18)(841,"span",19),e(842," (p-keydown)"),i(843,"br"),t()()(),n(844,"td",21)(845,"code",22),e(846,"EventEmitter"),t()(),n(847,"td",23),e(848,"-"),t(),n(849,"td",24)(850,"em")(851,"strong"),e(852,"(opcional)"),t()(),n(853,"p"),e(854,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(855,"code"),e(856,"KeyboardEvent"),t(),e(857," com informa\xE7\xF5es sobre a tecla."),t()()(),n(858,"tr",16)(859,"td",17)(860,"div",25)(861,"span",26),e(862," p-label"),i(863,"br"),t()()(),n(864,"td",21)(865,"code",27),e(866,"string"),t()(),n(867,"td",23),e(868,"-"),t(),n(869,"td",24)(870,"em")(871,"strong"),e(872,"(opcional)"),t()(),n(873,"p"),e(874,"Label do campo."),t(),n(875,"blockquote")(876,"p"),e(877,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),n(878,"code"),e(879,"modalTitle"),t(),e(880," na propriedade "),n(881,"code"),e(882,"p-literals"),t(),e(883,"."),t()()()(),n(884,"tr",16)(885,"td",17)(886,"div",25)(887,"span",26),e(888," p-label-text-wrap"),i(889,"br"),t()()(),n(890,"td",21)(891,"code",29),e(892,"boolean"),t()(),n(893,"td",23)(894,"p")(895,"code"),e(896,"false"),t()()(),n(897,"td",24)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),n(901,"p"),e(902,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(903,"code"),e(904,"p-label"),t(),e(905,". Quando "),n(906,"code"),e(907,"p-label-text-wrap"),t(),e(908,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(909,"tr",16)(910,"td",17)(911,"div",25)(912,"span",26),e(913," p-literals"),i(914,"br"),t()()(),n(915,"td",21)(916,"code",36),e(917,"PoLookupLiterals"),t()(),n(918,"td",23),e(919,"-"),t(),n(920,"td",24)(921,"p"),e(922,"Objeto com as literais usadas no "),n(923,"code"),e(924,"po-lookup"),t(),e(925,"."),t(),n(926,"p"),e(927,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),n(928,"pre")(929,"code"),e(930,`const customLiterals: PoLookupLiterals = {
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
`),t()(),n(931,"p"),e(932,"Ou passando apenas as literais que deseja customizar:"),t(),n(933,"pre")(934,"code"),e(935,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),n(936,"p"),e(937,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(938,"pre")(939,"code"),e(940,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),n(941,"blockquote")(942,"p"),e(943,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(944,"a",37)(945,"code"),e(946,"PoI18nService"),t()(),e(947," ou do browser."),t()()()(),n(948,"tr",16)(949,"td",17)(950,"div",25)(951,"span",26),e(952," p-multiple"),i(953,"br"),t()()(),n(954,"td",21)(955,"code",29),e(956,"boolean"),t()(),n(957,"td",23)(958,"p")(959,"code"),e(960,"false"),t()()(),n(961,"td",24)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),n(965,"p"),e(966,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(967,"blockquote")(968,"p"),e(969,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),n(970,"code"),e(971,"[ 12345, 67890 ]"),t()()()()(),n(972,"tr",16)(973,"td",17)(974,"div",25)(975,"span",26),e(976," name"),i(977,"br"),t()()(),n(978,"td",21)(979,"code",27),e(980,"string"),t()(),n(981,"td",23),e(982,"-"),t(),n(983,"td",24)(984,"p"),e(985,"Nome e Id do componente."),t()()(),n(986,"tr",16)(987,"td",17)(988,"div",25)(989,"span",26),e(990," p-no-autocomplete"),i(991,"br"),t()()(),n(992,"td",21)(993,"code",29),e(994,"boolean"),t()(),n(995,"td",23)(996,"p")(997,"code"),e(998,"false"),t()()(),n(999,"td",24)(1e3,"em")(1001,"strong"),e(1002,"(opcional)"),t()(),n(1003,"p"),e(1004,"Define a propriedade nativa "),n(1005,"code"),e(1006,"autocomplete"),t(),e(1007," do campo como "),n(1008,"code"),e(1009,"off"),t(),e(1010,"."),t()()(),n(1011,"tr",16)(1012,"td",17)(1013,"div",18)(1014,"span",19),e(1015," (p-error)"),i(1016,"br"),t()()(),n(1017,"td",21)(1018,"code",22),e(1019,"EventEmitter"),t()(),n(1020,"td",23),e(1021,"-"),t(),n(1022,"td",24)(1023,"p"),e(1024,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),n(1025,"tr",16)(1026,"td",17)(1027,"div",25)(1028,"span",26),e(1029," p-optional"),i(1030,"br"),t()()(),n(1031,"td",21)(1032,"code",29),e(1033,"boolean"),t()(),n(1034,"td",23)(1035,"p")(1036,"code"),e(1037,"false"),t()()(),n(1038,"td",24)(1039,"em")(1040,"strong"),e(1041,"(opcional)"),t()(),n(1042,"p"),e(1043,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1044,"blockquote")(1045,"p"),e(1046,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1047,"ul")(1048,"li"),e(1049,"O campo conter "),n(1050,"code"),e(1051,"p-required"),t(),e(1052,";"),t(),n(1053,"li"),e(1054,"N\xE3o possuir "),n(1055,"code"),e(1056,"p-help"),t(),e(1057," e/ou "),n(1058,"code"),e(1059,"p-label"),t(),e(1060,"."),t()()()(),n(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),e(1065," p-placeholder"),i(1066,"br"),t()()(),n(1067,"td",21)(1068,"code",27),e(1069,"string"),t()(),n(1070,"td",23),e(1071,"-"),t(),n(1072,"td",24)(1073,"p"),e(1074,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),e(1079," p-helper"),i(1080,"br"),t()()(),n(1081,"td",21)(1082,"code",38),e(1083,"PoHelperOptions"),t()(),n(1084,"td",23),e(1085,"-"),t(),n(1086,"td",24)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),t()(),n(1090,"p"),e(1091,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(1092,"blockquote")(1093,"p"),e(1094,"Caso o "),n(1095,"code"),e(1096,"p-label"),t(),e(1097,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(1098,"code"),e(1099,"p-additional-help-tooltip"),t(),e(1100," e "),n(1101,"code"),e(1102,"p-additional-help"),t(),e(1103,") ser\xE1 ignorado."),t()()()(),n(1104,"tr",16)(1105,"td",17)(1106,"div",25)(1107,"span",26),e(1108," p-required"),i(1109,"br"),t()()(),n(1110,"td",21)(1111,"code",29),e(1112,"boolean"),t()(),n(1113,"td",23)(1114,"p")(1115,"code"),e(1116,"false"),t()()(),n(1117,"td",24)(1118,"em")(1119,"strong"),e(1120,"(opcional)"),t()(),n(1121,"p"),e(1122,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1123,"blockquote")(1124,"p"),e(1125,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1126,"code"),e(1127,"(p-disabled)"),t(),e(1128,"."),t()()()(),n(1129,"tr",16)(1130,"td",17)(1131,"div",18)(1132,"span",19),e(1133," (p-selected)"),i(1134,"br"),t()()(),n(1135,"td",21)(1136,"code",22),e(1137,"EventEmitter"),t()(),n(1138,"td",23),e(1139,"-"),t(),n(1140,"td",24)(1141,"em")(1142,"strong"),e(1143,"(opcional)"),t()(),n(1144,"p"),e(1145,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),n(1146,"tr",16)(1147,"td",17)(1148,"div",25)(1149,"span",26),e(1150," p-show-required"),i(1151,"br"),t()()(),n(1152,"td",21)(1153,"code",29),e(1154,"boolean"),t()(),n(1155,"td",23),e(1156,"-"),t(),n(1157,"td",24)(1158,"p"),e(1159,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),n(1160,"blockquote")(1161,"p"),e(1162,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1163,"ul")(1164,"li"),e(1165,"N\xE3o possuir "),n(1166,"code"),e(1167,"p-help"),t(),e(1168," e/ou "),n(1169,"code"),e(1170,"p-label"),t(),e(1171,"."),t()()()(),n(1172,"tr",16)(1173,"td",17)(1174,"div",25)(1175,"span",26),e(1176," p-size"),i(1177,"br"),t()()(),n(1178,"td",21)(1179,"code",27),e(1180,"string"),t()(),n(1181,"td",23)(1182,"p")(1183,"code"),e(1184,"medium"),t()()(),n(1185,"td",24)(1186,"em")(1187,"strong"),e(1188,"(opcional)"),t()(),n(1189,"p"),e(1190,"Define o tamanho do componente:"),t(),n(1191,"ul")(1192,"li")(1193,"code"),e(1194,"small"),t(),e(1195,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1196,"li")(1197,"code"),e(1198,"medium"),t(),e(1199,": altura do input como 44px."),t()(),n(1200,"blockquote")(1201,"p"),e(1202,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1203,"code"),e(1204,"medium"),t(),e(1205,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1206,"a",39),e(1207,"po-theme"),t(),e(1208,"."),t()()()(),n(1209,"tr",16)(1210,"td",17)(1211,"div",25)(1212,"span",26),e(1213," p-spacing"),i(1214,"br"),t()()(),n(1215,"td",21)(1216,"code",27),e(1217,"string"),t()(),n(1218,"td",23)(1219,"p")(1220,"code"),e(1221,"medium"),t()()(),n(1222,"td",24)(1223,"em")(1224,"strong"),e(1225,"(opcional)"),t()(),n(1226,"p"),e(1227,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),n(1228,"strong"),e(1229,"PoTableColumnSpacing"),t(),e(1230,"."),t(),n(1231,"blockquote")(1232,"p"),e(1233,"Em n\xEDvel de acessibilidade "),n(1234,"strong"),e(1235,"AA"),t(),e(1236,", caso o valor de "),n(1237,"code"),e(1238,"p-spacing"),t(),e(1239," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),n(1240,"code"),e(1241,"extraSmall"),t(),e(1242,`
nos seguintes cen\xE1rios:`),t(),n(1243,"ul")(1244,"li"),e(1245,"Quando o valor de "),n(1246,"code"),e(1247,"p-size"),t(),e(1248," for "),n(1249,"code"),e(1250,"small"),t(),e(1251,";"),t(),n(1252,"li"),e(1253,"Quando o valor padr\xE3o dos componentes for configurado como "),n(1254,"code"),e(1255,"small"),t(),e(1256,` no
`),n(1257,"a",39),e(1258,"servi\xE7o de tema"),t(),e(1259,"."),t()()()()(),n(1260,"tr",16)(1261,"td",17)(1262,"div",25)(1263,"span",26),e(1264," p-text-wrap"),i(1265,"br"),t()()(),n(1266,"td",21)(1267,"code",29),e(1268,"boolean"),t()(),n(1269,"td",23)(1270,"p")(1271,"code"),e(1272,"false"),t()()(),n(1273,"td",24)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),n(1277,"p"),e(1278,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),n(1279,"p"),e(1280,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),n(1281,"blockquote")(1282,"p"),e(1283,"Incompat\xEDvel com "),n(1284,"code"),e(1285,"virtual-scroll"),t(),e(1286,", que requer altura fixa nas linhas."),t()()()(),n(1287,"tr",16)(1288,"td",17)(1289,"div",25)(1290,"span",26),e(1291," p-virtual-scroll"),i(1292,"br"),t()()(),n(1293,"td",21)(1294,"code",29),e(1295,"boolean"),t()(),n(1296,"td",23)(1297,"p")(1298,"code"),e(1299,"true"),t()()(),n(1300,"td",24)(1301,"em")(1302,"strong"),e(1303,"(opcional)"),t()(),n(1304,"p"),e(1305,"Habilita o "),n(1306,"code"),e(1307,"virtual-scroll"),t(),e(1308,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),n(1309,"code"),e(1310,"virtual-scroll"),t(),e(1311," ser\xE1 ativado automaticamente."),t(),n(1312,"blockquote")(1313,"p"),e(1314,"Incompat\xEDvel com "),n(1315,"code"),e(1316,"p-text-wrap"),t(),e(1317," e "),n(1318,"code"),e(1319,"master-detail"),t(),e(1320,", pois o "),n(1321,"code"),e(1322,"virtual-scroll"),t(),e(1323," exige altura fixa nas linhas."),t()()()()(),n(1324,"h3",12),e(1325,"M\xE9todos"),t(),n(1326,"table",40)(1327,"tr",16)(1328,"th",41)(1329,"div",25)(1330,"h4")(1331,"span",26),e(1332," focus "),t()()()()(),n(1333,"tr",24)(1334,"td",24)(1335,"p"),e(1336,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1337,"p"),e(1338,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1339,"pre")(1340,"code"),e(1341,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),i(1342,"br"),n(1343,"h3"),e(1344,"Interfaces"),t(),n(1345,"h4",42)(1346,"code",5),e(1347,"PoLookupAdvancedFilter"),t()(),n(1348,"div",2)(1349,"p"),e(1350," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),n(1351,"h4",12),e(1352,"Propriedades"),t(),n(1353,"table",13)(1354,"tr",14)(1355,"th",15),e(1356,"Nome"),t(),n(1357,"th",15),e(1358,"Tipo"),t(),n(1359,"th",15),e(1360,"Descri\xE7\xE3o"),t()(),n(1361,"tr",16)(1362,"td",17)(1363,"div",25)(1364,"span",26),e(1365," advancedFilters"),i(1366,"br"),t()()(),n(1367,"td",21)(1368,"code",28),e(1369,"Array<PoLookupAdvancedFilter>"),t()(),n(1370,"td",24)(1371,"em")(1372,"strong"),e(1373,"(opcional)"),t()(),n(1374,"p"),e(1375,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(1376,"blockquote")(1377,"p"),e(1378,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(1379,"p"),e(1380,"Exemplo de URL com busca avan\xE7ada:"),t(),n(1381,"p")(1382,"code"),e(1383,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(1384,"p"),e(1385,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(1386,"p")(1387,"code"),e(1388,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(1389,"tr",16)(1390,"td",17)(1391,"div",25)(1392,"span",26),e(1393," appendBox"),i(1394,"br"),t()()(),n(1395,"td",21)(1396,"code",29),e(1397,"boolean"),t()(),n(1398,"td",24)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),n(1402,"p"),e(1403,"Define que o "),n(1404,"code"),e(1405,"listbox"),t(),e(1406," e/ou tooltip ("),n(1407,"code"),e(1408,"p-additional-help-tooltip"),t(),e(1409," e/ou "),n(1410,"code"),e(1411,"p-error-limit"),t(),e(1412,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(1413,"blockquote")(1414,"p"),e(1415,"Quando utilizado com "),n(1416,"code"),e(1417,"p-additional-help-tooltip"),t(),e(1418,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(1419,"tr",16)(1420,"td",17)(1421,"div",25)(1422,"span",26),e(1423," autoHeight"),i(1424,"br"),t()()(),n(1425,"td",21)(1426,"code",29),e(1427,"boolean"),t()(),n(1428,"td",24)(1429,"em")(1430,"strong"),e(1431,"(opcional)"),t()(),n(1432,"p"),e(1433,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(1434,"p")(1435,"strong"),e(1436,"Componentes compat\xEDveis:"),t(),n(1437,"code"),e(1438,"po-multiselect"),t(),e(1439,", "),n(1440,"code"),e(1441,"po-lookup"),t(),e(1442,"."),t()()(),n(1443,"tr",16)(1444,"td",17)(1445,"div",25)(1446,"span",26),e(1447," autoUpload"),i(1448,"br"),t()()(),n(1449,"td",21)(1450,"code",29),e(1451,"boolean"),t()(),n(1452,"td",24)(1453,"em")(1454,"strong"),e(1455,"(opcional)"),t()(),n(1456,"p"),e(1457,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(1458,"p")(1459,"strong"),e(1460,"Componente compat\xEDvel"),t(),e(1461,": "),n(1462,"code"),e(1463,"po-upload"),t()()()(),n(1464,"tr",16)(1465,"td",17)(1466,"div",25)(1467,"span",26),e(1468," booleanFalse"),i(1469,"br"),t()()(),n(1470,"td",21)(1471,"code",27),e(1472,"string"),t()(),n(1473,"td",24)(1474,"em")(1475,"strong"),e(1476,"(opcional)"),t()(),n(1477,"p"),e(1478,"Texto exibido quando o valor do componente for "),n(1479,"em"),e(1480,"false"),t(),e(1481,"."),t()()(),n(1482,"tr",16)(1483,"td",17)(1484,"div",25)(1485,"span",26),e(1486," booleanTrue"),i(1487,"br"),t()()(),n(1488,"td",21)(1489,"code",27),e(1490,"string"),t()(),n(1491,"td",24)(1492,"em")(1493,"strong"),e(1494,"(opcional)"),t()(),n(1495,"p"),e(1496,"Texto exibido quando o valor do componente for "),n(1497,"em"),e(1498,"true"),t(),e(1499,"."),t()()(),n(1500,"tr",16)(1501,"td",17)(1502,"div",25)(1503,"span",26),e(1504," changeOnEnter"),i(1505,"br"),t()()(),n(1506,"td",21)(1507,"code",29),e(1508,"boolean"),t()(),n(1509,"td",24)(1510,"em")(1511,"strong"),e(1512,"(opcional)"),t()(),n(1513,"p"),e(1514,"Indica que o evento "),n(1515,"code"),e(1516,"p-change"),t(),e(1517,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(1518,"code"),e(1519,"po-combo"),t(),e(1520,"."),t()()(),n(1521,"tr",16)(1522,"td",17)(1523,"div",25)(1524,"span",26),e(1525," changeVisibleColumns"),i(1526,"br"),t()()(),n(1527,"td",21)(1528,"code",43),e(1529,"Function"),t()(),n(1530,"td",24)(1531,"em")(1532,"strong"),e(1533,"(opcional)"),t()(),n(1534,"p"),e(1535,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(1536,"p"),e(1537,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1538,"p")(1539,"strong"),e(1540,"Componentes compat\xEDveis"),t(),e(1541,": "),n(1542,"code"),e(1543,"po-lookup"),t()()()(),n(1544,"tr",16)(1545,"td",17)(1546,"div",25)(1547,"span",26),e(1548," clean"),i(1549,"br"),t()()(),n(1550,"td",21)(1551,"code",29),e(1552,"boolean"),t()(),n(1553,"td",24)(1554,"em")(1555,"strong"),e(1556,"(opcional)"),t()(),n(1557,"p"),e(1558,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(1559,"p")(1560,"strong"),e(1561,"Componentes compat\xEDveis:"),t(),n(1562,"code"),e(1563,"po-datepicker"),t(),e(1564,", "),n(1565,"code"),e(1566,"po-datepicker-range"),t(),e(1567,", "),n(1568,"code"),e(1569,"po-input"),t(),e(1570,", "),n(1571,"code"),e(1572,"po-number"),t(),e(1573,", "),n(1574,"code"),e(1575,"po-decimal"),t(),e(1576,", "),n(1577,"code"),e(1578,"po-combo"),t(),e(1579,", "),n(1580,"code"),e(1581,"po-lookup"),t(),e(1582,", "),n(1583,"code"),e(1584,"po-password"),t()()()(),n(1585,"tr",16)(1586,"td",17)(1587,"div",25)(1588,"span",26),e(1589," columnRestoreManager"),i(1590,"br"),t()()(),n(1591,"td",21)(1592,"code",43),e(1593,"Function"),t()(),n(1594,"td",24)(1595,"em")(1596,"strong"),e(1597,"(opcional)"),t()(),n(1598,"p"),e(1599,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(1600,"p"),e(1601,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1602,"p")(1603,"strong"),e(1604,"Componentes compat\xEDveis"),t(),e(1605,": "),n(1606,"code"),e(1607,"po-lookup"),t()()()(),n(1608,"tr",16)(1609,"td",17)(1610,"div",25)(1611,"span",26),e(1612," columns"),i(1613,"br"),t()()(),n(1614,"td",21)(1615,"code",30),e(1616,"Array<PoLookupColumn> "),t(),n(1617,"code",44),e(1618," number"),t()(),n(1619,"td",24)(1620,"em")(1621,"strong"),e(1622,"(opcional)"),t()(),n(1623,"p"),e(1624,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(1625,"code"),e(1626,"searchService"),t(),e(1627,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(1628,"a",45)(1629,"code"),e(1630,"PoLookupColumn"),t()(),e(1631,"."),t(),n(1632,"blockquote")(1633,"p"),e(1634,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(1635,"em"),e(1636,"label"),t(),e(1637," e "),n(1638,"em"),e(1639,"value"),t(),e(1640,` para valores
de tela e do model respectivamente.`),t()(),n(1641,"p")(1642,"strong"),e(1643,"Componentes compat\xEDveis:"),t(),n(1644,"code"),e(1645,"po-radio-group"),t(),e(1646,", "),n(1647,"code"),e(1648,"po-lookup"),t(),e(1649,", "),n(1650,"code"),e(1651,"po-checkbox-group"),t(),e(1652,"."),t()()(),n(1653,"tr",16)(1654,"td",17)(1655,"div",25)(1656,"span",26),e(1657," container"),i(1658,"br"),t()()(),n(1659,"td",21)(1660,"code",27),e(1661,"string"),t()(),n(1662,"td",24)(1663,"em")(1664,"strong"),e(1665,"(opcional)"),t()(),n(1666,"p"),e(1667,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1668,"p"),e(1669,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1670,"tr",16)(1671,"td",17)(1672,"div",25)(1673,"span",26),e(1674," customAction"),i(1675,"br"),t()()(),n(1676,"td",21)(1677,"code",46),e(1678,"PoProgressAction"),t()(),n(1679,"td",24)(1680,"em")(1681,"strong"),e(1682,"(opcional)"),t()(),n(1683,"p"),e(1684,"Define uma a\xE7\xE3o personalizada no componente "),n(1685,"code"),e(1686,"po-upload"),t(),e(1687,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1688,"p")(1689,"strong"),e(1690,"Componente compat\xEDvel"),t(),e(1691,": "),n(1692,"code"),e(1693,"po-upload"),t(),e(1694,","),t(),n(1695,"p")(1696,"strong"),e(1697,"Exemplo de configura\xE7\xE3o"),t(),e(1698,":"),t(),n(1699,"pre")(1700,"code",47),e(1701,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1702,"tr",16)(1703,"td",17)(1704,"div",25)(1705,"span",26),e(1706," customActionClick"),i(1707,"br"),t()()(),n(1708,"td",21)(1709,"code",48),e(1710,"(file: PoUploadFile) => void"),t()(),n(1711,"td",24)(1712,"em")(1713,"strong"),e(1714,"(opcional)"),t()(),n(1715,"p"),e(1716,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1717,"code"),e(1718,"p-custom-action"),t(),e(1719,"."),t(),n(1720,"p")(1721,"strong"),e(1722,"Componente compat\xEDvel"),t(),e(1723,": "),n(1724,"code"),e(1725,"po-upload"),t(),e(1726,","),t(),n(1727,"p"),e(1728,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1729,"p")(1730,"strong"),e(1731,"Par\xE2metro do evento"),t(),e(1732,":"),t(),n(1733,"ul")(1734,"li")(1735,"code"),e(1736,"file"),t(),e(1737,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1738,"code"),e(1739,"PoUploadFile"),t(),e(1740," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1741,"p")(1742,"strong"),e(1743,"Exemplo de uso"),t(),e(1744,":"),t(),n(1745,"pre")(1746,"code",47),e(1747,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1748,"tr",16)(1749,"td",17)(1750,"div",25)(1751,"span",26),e(1752," debounceTime"),i(1753,"br"),t()()(),n(1754,"td",21)(1755,"code",44),e(1756,"number"),t()(),n(1757,"td",24)(1758,"em")(1759,"strong"),e(1760,"(opcional)"),t()(),n(1761,"p"),e(1762,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1763,"code"),e(1764,"p-filter-service"),t(),e(1765,")."),t(),n(1766,"p")(1767,"strong"),e(1768,"Componentes compat\xEDveis:"),t(),n(1769,"code"),e(1770,"po-combo"),t(),e(1771,", "),n(1772,"code"),e(1773,"po-multiselect"),t(),e(1774,"."),t()()(),n(1775,"tr",16)(1776,"td",17)(1777,"div",25)(1778,"span",26),e(1779," decimalsLength"),i(1780,"br"),t()()(),n(1781,"td",21)(1782,"code",44),e(1783,"number"),t()(),n(1784,"td",24)(1785,"em")(1786,"strong"),e(1787,"(opcional)"),t()(),n(1788,"p"),e(1789,"Quantidade m\xE1xima de casas decimais."),t(),n(1790,"blockquote")(1791,"p"),e(1792,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1793,"code"),e(1794,"type"),t(),e(1795," for "),n(1796,"em"),e(1797,"currency"),t(),e(1798," ou "),n(1799,"em"),e(1800,"decimal"),t(),e(1801,"."),t()()()(),n(1802,"tr",16)(1803,"td",17)(1804,"div",25)(1805,"span",26),e(1806," directory"),i(1807,"br"),t()()(),n(1808,"td",21)(1809,"code",29),e(1810,"boolean"),t()(),n(1811,"td",24)(1812,"em")(1813,"strong"),e(1814,"(opcional)"),t()(),n(1815,"p"),e(1816,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1817,"blockquote")(1818,"p"),e(1819,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1820,"blockquote")(1821,"p"),e(1822,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1823,"strong"),e(1824,"Internet Explorer"),t(),e(1825,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1826,"p")(1827,"strong"),e(1828,"Componente compat\xEDvel"),t(),e(1829,": "),n(1830,"code"),e(1831,"po-upload"),t()()()(),n(1832,"tr",16)(1833,"td",17)(1834,"div",25)(1835,"span",26),e(1836," disabled"),i(1837,"br"),t()()(),n(1838,"td",21)(1839,"code",29),e(1840,"boolean"),t()(),n(1841,"td",24)(1842,"em")(1843,"strong"),e(1844,"(opcional)"),t()(),n(1845,"p"),e(1846,"Desabilita o campo caso informar o valor "),n(1847,"em"),e(1848,"true"),t(),e(1849,"."),t()()(),n(1850,"tr",16)(1851,"td",17)(1852,"div",25)(1853,"span",26),e(1854," disabledInitFilter"),i(1855,"br"),t()()(),n(1856,"td",21)(1857,"code",29),e(1858,"boolean"),t()(),n(1859,"td",24)(1860,"em")(1861,"strong"),e(1862,"(opcional)"),t()(),n(1863,"p"),e(1864,"Desabilita o filtro inicial no servi\xE7o do "),n(1865,"code"),e(1866,"po-combo"),t(),e(1867,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1868,"tr",16)(1869,"td",17)(1870,"div",25)(1871,"span",26),e(1872," disabledTabFilter"),i(1873,"br"),t()()(),n(1874,"td",21)(1875,"code",29),e(1876,"boolean"),t()(),n(1877,"td",24)(1878,"em")(1879,"strong"),e(1880,"(opcional)"),t()(),n(1881,"p"),e(1882,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1883,"code"),e(1884,"po-combo"),t(),e(1885,"."),t()()(),n(1886,"tr",16)(1887,"td",17)(1888,"div",25)(1889,"span",26),e(1890," divider"),i(1891,"br"),t()()(),n(1892,"td",21)(1893,"code",27),e(1894,"string"),t()(),n(1895,"td",24)(1896,"em")(1897,"strong"),e(1898,"(opcional)"),t()(),n(1899,"p"),e(1900,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1901,"tr",16)(1902,"td",17)(1903,"div",25)(1904,"span",26),e(1905," dragDrop"),i(1906,"br"),t()()(),n(1907,"td",21)(1908,"code",29),e(1909,"boolean"),t()(),n(1910,"td",24)(1911,"em")(1912,"strong"),e(1913,"(opcional)"),t()(),n(1914,"p"),e(1915,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1916,"blockquote")(1917,"p"),e(1918,"Recomendamos utilizar apenas um "),n(1919,"code"),e(1920,"po-upload"),t(),e(1921," com esta funcionalidade por tela."),t()(),n(1922,"p")(1923,"strong"),e(1924,"Componente compat\xEDvel"),t(),e(1925,": "),n(1926,"code"),e(1927,"po-upload"),t()()()(),n(1928,"tr",16)(1929,"td",17)(1930,"div",25)(1931,"span",26),e(1932," dragDropHeight"),i(1933,"br"),t()()(),n(1934,"td",21)(1935,"code",44),e(1936,"number"),t()(),n(1937,"td",24)(1938,"em")(1939,"strong"),e(1940,"(opcional)"),t()(),n(1941,"p"),e(1942,"Define em "),n(1943,"em"),e(1944,"pixels"),t(),e(1945," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1946,"code"),e(1947,"160px"),t(),e(1948,"."),t(),n(1949,"blockquote")(1950,"p"),e(1951,"Esta propriedade funciona somente se a propriedade "),n(1952,"code"),e(1953,"p-drag-drop"),t(),e(1954," estiver habilitada."),t()(),n(1955,"p")(1956,"strong"),e(1957,"Componente compat\xEDvel"),t(),e(1958,": "),n(1959,"code"),e(1960,"po-upload"),t()()()(),n(1961,"tr",16)(1962,"td",17)(1963,"div",25)(1964,"span",26),e(1965," errorAsyncFunction"),i(1966,"br"),t()()(),n(1967,"td",21)(1968,"code",49),e(1969,"(value) => Observable<boolean>"),t()(),n(1970,"td",24)(1971,"em")(1972,"strong"),e(1973,"(opcional)"),t()(),n(1974,"p"),e(1975,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1976,"code"),e(1977,"change"),t(),e(1978," ou "),n(1979,"code"),e(1980,"change-model"),t(),e(1981,", dependendo do valor da propriedade "),n(1982,"code"),e(1983,"triggerMode"),t(),e(1984,"."),t(),n(1985,"blockquote")(1986,"p"),e(1987,"Retorna "),n(1988,"code"),e(1989,"Observable com o valor true"),t(),e(1990," para sinalizar o erro "),n(1991,"code"),e(1992,"false"),t(),e(1993," para indicar que n\xE3o h\xE1 erro."),t()(),n(1994,"p")(1995,"strong"),e(1996,"Componente compat\xEDvel"),t(),e(1997,": "),n(1998,"code"),e(1999,"po-datepicker"),t()()()(),n(2e3,"tr",16)(2001,"td",17)(2002,"div",25)(2003,"span",26),e(2004," errorAsyncProperties"),i(2005,"br"),t()()(),n(2006,"td",21)(2007,"code",50),e(2008,"ErrorAsyncProperties"),t()(),n(2009,"td",24)(2010,"em")(2011,"strong"),e(2012,"(opcional)"),t()(),n(2013,"p"),e(2014,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(2015,"p")(2016,"strong"),e(2017,"Componentes compat\xEDveis:"),t(),n(2018,"code"),e(2019,"po-input"),t(),e(2020,", "),n(2021,"code"),e(2022,"po-number"),t(),e(2023,", "),n(2024,"code"),e(2025,"po-decimal"),t(),e(2026,", "),n(2027,"code"),e(2028,"po-password"),t(),e(2029,"."),t()()(),n(2030,"tr",16)(2031,"td",17)(2032,"div",25)(2033,"span",26),e(2034," errorLimit"),i(2035,"br"),t()()(),n(2036,"td",21)(2037,"code",29),e(2038,"boolean"),t()(),n(2039,"td",24)(2040,"em")(2041,"strong"),e(2042,"(opcional)"),t()(),n(2043,"p"),e(2044,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(2045,"blockquote")(2046,"p"),e(2047,"Caso essa propriedade seja definida como "),n(2048,"code"),e(2049,"true"),t(),e(2050,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(2051,"p")(2052,"strong"),e(2053,"Componentes compat\xEDveis:"),t(),n(2054,"code"),e(2055,"po-checkbox-group"),t(),e(2056,", "),n(2057,"code"),e(2058,"po-combo"),t(),e(2059,", "),n(2060,"code"),e(2061,"po-datepicker"),t(),e(2062,", "),n(2063,"code"),e(2064,"po-datepicker-range"),t(),e(2065,", "),n(2066,"code"),e(2067,"po-decimal"),t(),e(2068,", "),n(2069,"code"),e(2070,"po-input"),t(),e(2071,", "),n(2072,"code"),e(2073,"po-lookup"),t(),e(2074,", "),n(2075,"code"),e(2076,"po-multiselect"),t(),e(2077,", "),n(2078,"code"),e(2079,"po-number"),t(),e(2080,", "),n(2081,"code"),e(2082,"po-password"),t(),e(2083,", "),n(2084,"code"),e(2085,"po-radio-group"),t(),e(2086,", "),n(2087,"code"),e(2088,"po-select"),t(),e(2089,", "),n(2090,"code"),e(2091,"po-switch"),t(),e(2092,", "),n(2093,"code"),e(2094,"po-textarea"),t(),e(2095,"."),t()()(),n(2096,"tr",16)(2097,"td",17)(2098,"div",25)(2099,"span",26),e(2100," errorMessage"),i(2101,"br"),t()()(),n(2102,"td",21)(2103,"code",27),e(2104,"string"),t()(),n(2105,"td",24)(2106,"em")(2107,"strong"),e(2108,"(opcional)"),t()(),n(2109,"p"),e(2110,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(2111,"p"),e(2112,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(2113,"ul")(2114,"li"),e(2115,"pattern;"),t(),n(2116,"li"),e(2117,"minValue;"),t(),n(2118,"li"),e(2119,"maxValue;"),t(),n(2120,"li"),e(2121,"required;"),t()(),n(2122,"blockquote")(2123,"p"),e(2124,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(2125,"code"),e(2126,"po-datepicker"),t(),e(2127,", "),n(2128,"code"),e(2129,"po-input"),t(),e(2130,", "),n(2131,"code"),e(2132,"po-number"),t(),e(2133,", "),n(2134,"code"),e(2135,"po-decimal"),t(),e(2136,", "),n(2137,"code"),e(2138,"po-password"),t(),e(2139,`, \xE9 necess\xE1rio que a propriedade
`),n(2140,"code"),e(2141,"requiredFieldErrorMessage"),t(),e(2142," esteja como "),n(2143,"code"),e(2144,"true"),t(),e(2145,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(2146,"code"),e(2147,"po-datepicker-range"),t(),e(2148,", "),n(2149,"code"),e(2150,"po-select"),t(),e(2151,", "),n(2152,"code"),e(2153,"po-checkbox-group"),t(),e(2154,", "),n(2155,"code"),e(2156,"po-radio-group"),t(),e(2157,", "),n(2158,"code"),e(2159,"po-multiselect"),t(),e(2160,", "),n(2161,"code"),e(2162,"po-combo"),t(),e(2163,`,
`),n(2164,"code"),e(2165,"po-lookup"),t(),e(2166," e "),n(2167,"code"),e(2168,"po-textarea"),t(),e(2169," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(2170,"code"),e(2171,"requiredFieldErrorMessage"),t(),e(2172,"."),t()(),n(2173,"p")(2174,"strong"),e(2175,"Componentes compat\xEDveis:"),t(),n(2176,"code"),e(2177,"po-checkbox-group"),t(),e(2178,", "),n(2179,"code"),e(2180,"po-combo"),t(),e(2181,", "),n(2182,"code"),e(2183,"po-datepicker"),t(),e(2184,", "),n(2185,"code"),e(2186,"po-datepicker-range"),t(),e(2187,", "),n(2188,"code"),e(2189,"po-decimal"),t(),e(2190,", "),n(2191,"code"),e(2192,"po-input"),t(),e(2193,", "),n(2194,"code"),e(2195,"po-lookup"),t(),e(2196,", "),n(2197,"code"),e(2198,"po-multiselect"),t(),e(2199,", "),n(2200,"code"),e(2201,"po-number"),t(),e(2202,", "),n(2203,"code"),e(2204,"po-password"),t(),e(2205,", "),n(2206,"code"),e(2207,"po-radio-group"),t(),e(2208,", "),n(2209,"code"),e(2210,"po-select"),t(),e(2211,", "),n(2212,"code"),e(2213,"po-switch"),t(),e(2214,", "),n(2215,"code"),e(2216,"po-textarea"),t(),e(2217,"."),t()()(),n(2218,"tr",16)(2219,"td",17)(2220,"div",25)(2221,"span",26),e(2222," fieldLabel"),i(2223,"br"),t()()(),n(2224,"td",21)(2225,"code",27),e(2226,"string"),t()(),n(2227,"td",24)(2228,"em")(2229,"strong"),e(2230,"(opcional)"),t()(),n(2231,"p"),e(2232,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(2233,"p"),e(2234,"O valor padr\xE3o \xE9: "),n(2235,"code"),e(2236,"label"),t(),e(2237,"."),t(),n(2238,"blockquote")(2239,"p"),e(2240,"Esta propriedade pode ser utilizada em conjunto com: "),n(2241,"code"),e(2242,"options"),t(),e(2243,", "),n(2244,"code"),e(2245,"optionsService"),t(),e(2246," e "),n(2247,"code"),e(2248,"searchService"),t(),e(2249,"."),t()()()(),n(2250,"tr",16)(2251,"td",17)(2252,"div",25)(2253,"span",26),e(2254," fieldValue"),i(2255,"br"),t()()(),n(2256,"td",21)(2257,"code",27),e(2258,"string"),t()(),n(2259,"td",24)(2260,"em")(2261,"strong"),e(2262,"(opcional)"),t()(),n(2263,"p"),e(2264,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(2265,"p"),e(2266,"O valor padr\xE3o \xE9: "),n(2267,"code"),e(2268,"value"),t(),e(2269,"."),t(),n(2270,"blockquote")(2271,"p"),e(2272,"Esta propriedade pode ser utilizada em conjunto com: "),n(2273,"code"),e(2274,"options"),t(),e(2275,", "),n(2276,"code"),e(2277,"optionsService"),t(),e(2278," e "),n(2279,"code"),e(2280,"searchService"),t(),e(2281,"."),t()()()(),n(2282,"tr",16)(2283,"td",17)(2284,"div",25)(2285,"span",26),e(2286," filterMinlength"),i(2287,"br"),t()()(),n(2288,"td",21)(2289,"code",44),e(2290,"number"),t()(),n(2291,"td",24)(2292,"em")(2293,"strong"),e(2294,"(opcional)"),t()(),n(2295,"p"),e(2296,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(2297,"code"),e(2298,"po-combo"),t(),e(2299,"."),t()()(),n(2300,"tr",16)(2301,"td",17)(2302,"div",25)(2303,"span",26),e(2304," filterMode"),i(2305,"br"),t()()(),n(2306,"td",21)(2307,"code",51),e(2308,"PoMultiselectFilterMode"),t()(),n(2309,"td",24)(2310,"em")(2311,"strong"),e(2312,"(opcional)"),t()(),n(2313,"p"),e(2314,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(2315,"code"),e(2316,"startsWith"),t(),e(2317,", "),n(2318,"code"),e(2319,"contains"),t(),e(2320," ou "),n(2321,"code"),e(2322,"endsWith"),t(),e(2323,"."),t(),n(2324,"blockquote")(2325,"p"),e(2326,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(2327,"p")(2328,"strong"),e(2329,"Componentes compat\xEDveis:"),t(),n(2330,"code"),e(2331,"po-multiselect"),t(),e(2332,"."),t()()(),n(2333,"tr",16)(2334,"td",17)(2335,"div",25)(2336,"span",26),e(2337," forceBooleanComponentType"),i(2338,"br"),t()()(),n(2339,"td",21)(2340,"code",52),e(2341,"ForceBooleanComponentEnum"),t()(),n(2342,"td",24)(2343,"em")(2344,"strong"),e(2345,"(opcional)"),t()(),n(2346,"p"),e(2347,"Valores aceitos:"),t(),n(2348,"ul")(2349,"li"),e(2350,"ForceBooleanComponentEnum.switch"),t(),n(2351,"li"),e(2352,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(2353,"tr",16)(2354,"td",17)(2355,"div",25)(2356,"span",26),e(2357," forceOptionsComponentType"),i(2358,"br"),t()()(),n(2359,"td",21)(2360,"code",53),e(2361,"ForceOptionComponentEnum"),t()(),n(2362,"td",24)(2363,"em")(2364,"strong"),e(2365,"(opcional)"),t()(),n(2366,"p"),e(2367,"pode ser utilizada em conjunto com a propriedade "),n(2368,"code"),e(2369,"options"),t(),e(2370," for\xE7ando o componente a renderizar um "),n(2371,"code"),e(2372,"po-select"),t(),e(2373," ou "),n(2374,"code"),e(2375,"po-radio-group"),t(),e(2376,"."),t(),n(2377,"p"),e(2378,"Valores aceitos:"),t(),n(2379,"ul")(2380,"li"),e(2381,"ForceOptionComponentEnum.radioGroup"),t(),n(2382,"li"),e(2383,"ForceOptionComponentEnum.select"),t()(),n(2384,"blockquote")(2385,"p"),e(2386,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(2387,"code"),e(2388,"optionsMulti"),t(),e(2389," e "),n(2390,"code"),e(2391,"optionsService"),t(),e(2392,"."),t()()()(),n(2393,"tr",16)(2394,"td",17)(2395,"div",25)(2396,"span",26),e(2397," formField"),i(2398,"br"),t()()(),n(2399,"td",21)(2400,"code",27),e(2401,"string"),t()(),n(2402,"td",24)(2403,"em")(2404,"strong"),e(2405,"(opcional)"),t()(),n(2406,"p"),e(2407,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(2408,"code"),e(2409,"url"),t(),e(2410,"."),t(),n(2411,"blockquote")(2412,"p"),e(2413,"O valor default \xE9 "),n(2414,"code"),e(2415,"files"),t()()(),n(2416,"p")(2417,"strong"),e(2418,"Componente compat\xEDvel"),t(),e(2419,": "),n(2420,"code"),e(2421,"po-upload"),t()()()(),n(2422,"tr",16)(2423,"td",17)(2424,"div",25)(2425,"span",26),e(2426," format"),i(2427,"br"),t()()(),n(2428,"td",21)(2429,"code",27),e(2430,"string "),t(),n(2431,"code",32),e(2432," Array<string>"),t()(),n(2433,"td",24)(2434,"em")(2435,"strong"),e(2436,"(opcional)"),t()(),n(2437,"p"),e(2438,"Formato de exibi\xE7\xE3o no campo."),t(),n(2439,"p"),e(2440,"Ao utilizar esta propriedade com o "),n(2441,"code"),e(2442,"type"),t(),n(2443,"em"),e(2444,"PoDynamicFieldType.Date"),t(),e(2445," ou "),n(2446,"em"),e(2447,"PoDynamicFieldType.DateTime"),t(),e(2448,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(2449,"p"),e(2450,"Valores v\xE1lidos:"),t(),n(2451,"ul")(2452,"li"),e(2453,"dd/mm/yyyy"),t(),n(2454,"li"),e(2455,"mm/dd/yyyy"),t(),n(2456,"li"),e(2457,"yyyy/mm/dd"),t()(),n(2458,"p"),e(2459,"Tamb\xE9m pode-se utilizar em conjunto com "),n(2460,"code"),e(2461,"searchService"),t(),e(2462,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(2463,"tr",16)(2464,"td",17)(2465,"div",25)(2466,"span",26),e(2467," formatModel"),i(2468,"br"),t()()(),n(2469,"td",21)(2470,"code",29),e(2471,"boolean"),t()(),n(2472,"td",24)(2473,"em")(2474,"strong"),e(2475,"(opcional)"),t()(),n(2476,"p"),e(2477,"Indica se o "),n(2478,"code"),e(2479,"model"),t(),e(2480," receber\xE1 o valor formatado pelas propriedades "),n(2481,"code"),e(2482,"p-label-on"),t(),e(2483," e "),n(2484,"code"),e(2485,"p-label-off"),t(),e(2486,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(2487,"p"),e(2488,"O valor padr\xE3o \xE9: "),n(2489,"code"),e(2490,"false"),t(),e(2491,"."),t(),n(2492,"blockquote")(2493,"p"),e(2494,"Esta propriedade est\xE1 disponivel apenas para o "),n(2495,"code"),e(2496,"swicth"),t(),e(2497,"."),t()()()(),n(2498,"tr",16)(2499,"td",17)(2500,"div",25)(2501,"span",26),e(2502," gridColumns"),i(2503,"br"),t()()(),n(2504,"td",21)(2505,"code",44),e(2506,"number"),t()(),n(2507,"td",24)(2508,"em")(2509,"strong"),e(2510,"(opcional)"),t()(),n(2511,"p"),e(2512,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(2513,"p"),e(2514,"Deve ser usado o sistema de "),n(2515,"strong"),e(2516,"grid"),t(),e(2517," do PO (1 ... 12 colunas)."),t(),n(2518,"blockquote")(2519,"p"),e(2520,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2521,"tr",16)(2522,"td",17)(2523,"div",25)(2524,"span",26),e(2525," gridLgColumns"),i(2526,"br"),t()()(),n(2527,"td",21)(2528,"code",44),e(2529,"number"),t()(),n(2530,"td",24)(2531,"em")(2532,"strong"),e(2533,"(opcional)"),t()(),n(2534,"p"),e(2535,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2536,"p"),e(2537,"Deve ser usado o sistema de "),n(2538,"strong"),e(2539,"grid"),t(),e(2540," do PO (1 ... 12 colunas)."),t(),n(2541,"blockquote")(2542,"p"),e(2543,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2544,"code"),e(2545,"gridColumns"),t(),e(2546,"."),t()()()(),n(2547,"tr",16)(2548,"td",17)(2549,"div",25)(2550,"span",26),e(2551," gridLgPull"),i(2552,"br"),t()()(),n(2553,"td",21)(2554,"code",44),e(2555,"number"),t()(),n(2556,"td",24)(2557,"em")(2558,"strong"),e(2559,"(opcional)"),t()(),n(2560,"p"),e(2561,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(2562,"p"),e(2563,"Deve ser usado o sistema de "),n(2564,"strong"),e(2565,"grid"),t(),e(2566," do PO (1 ... 11 colunas)."),t(),n(2567,"blockquote")(2568,"p"),e(2569,"Esta propriedade n\xE3o funciona com a propriedade "),n(2570,"code"),e(2571,"gridColumns"),t(),e(2572,". Deve-se especificar o tamanho da tela."),t()()()(),n(2573,"tr",16)(2574,"td",17)(2575,"div",25)(2576,"span",26),e(2577," gridMdColumns"),i(2578,"br"),t()()(),n(2579,"td",21)(2580,"code",44),e(2581,"number"),t()(),n(2582,"td",24)(2583,"em")(2584,"strong"),e(2585,"(opcional)"),t()(),n(2586,"p"),e(2587,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2588,"p"),e(2589,"Deve ser usado o sistema de "),n(2590,"strong"),e(2591,"grid"),t(),e(2592," do PO (1 ... 12 colunas)."),t(),n(2593,"blockquote")(2594,"p"),e(2595,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2596,"code"),e(2597,"gridColumns"),t(),e(2598,"."),t()()()(),n(2599,"tr",16)(2600,"td",17)(2601,"div",25)(2602,"span",26),e(2603," gridMdPull"),i(2604,"br"),t()()(),n(2605,"td",21)(2606,"code",44),e(2607,"number"),t()(),n(2608,"td",24)(2609,"em")(2610,"strong"),e(2611,"(opcional)"),t()(),n(2612,"p"),e(2613,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(2614,"p"),e(2615,"Deve ser usado o sistema de "),n(2616,"strong"),e(2617,"grid"),t(),e(2618," do PO (1 ... 11 colunas)."),t(),n(2619,"blockquote")(2620,"p"),e(2621,"Esta propriedade n\xE3o funciona com a propriedade "),n(2622,"code"),e(2623,"gridColumns"),t(),e(2624,". Deve-se especificar o tamanho da tela."),t()()()(),n(2625,"tr",16)(2626,"td",17)(2627,"div",25)(2628,"span",26),e(2629," gridSmColumns"),i(2630,"br"),t()()(),n(2631,"td",21)(2632,"code",44),e(2633,"number"),t()(),n(2634,"td",24)(2635,"em")(2636,"strong"),e(2637,"(opcional)"),t()(),n(2638,"p"),e(2639,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2640,"p"),e(2641,"Deve ser usado o sistema de "),n(2642,"strong"),e(2643,"grid"),t(),e(2644," do PO (1 ... 12 colunas)."),t(),n(2645,"blockquote")(2646,"p"),e(2647,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2648,"code"),e(2649,"gridColumns"),t(),e(2650,"."),t()()()(),n(2651,"tr",16)(2652,"td",17)(2653,"div",25)(2654,"span",26),e(2655," gridSmPull"),i(2656,"br"),t()()(),n(2657,"td",21)(2658,"code",44),e(2659,"number"),t()(),n(2660,"td",24)(2661,"em")(2662,"strong"),e(2663,"(opcional)"),t()(),n(2664,"p"),e(2665,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2666,"p"),e(2667,"Deve ser usado o sistema de "),n(2668,"strong"),e(2669,"grid"),t(),e(2670," do PO (1 ... 11 colunas)."),t(),n(2671,"blockquote")(2672,"p"),e(2673,"Esta propriedade n\xE3o funciona com a propriedade "),n(2674,"code"),e(2675,"gridColumns"),t(),e(2676,". Deve-se especificar o tamanho da tela."),t()()()(),n(2677,"tr",16)(2678,"td",17)(2679,"div",25)(2680,"span",26),e(2681," gridXlColumns"),i(2682,"br"),t()()(),n(2683,"td",21)(2684,"code",44),e(2685,"number"),t()(),n(2686,"td",24)(2687,"em")(2688,"strong"),e(2689,"(opcional)"),t()(),n(2690,"p"),e(2691,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2692,"p"),e(2693,"Deve ser usado o sistema de "),n(2694,"strong"),e(2695,"grid"),t(),e(2696," do PO (1 ... 12 colunas)."),t(),n(2697,"blockquote")(2698,"p"),e(2699,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2700,"code"),e(2701,"gridColumns"),t(),e(2702,"."),t()()()(),n(2703,"tr",16)(2704,"td",17)(2705,"div",25)(2706,"span",26),e(2707," gridXlPull"),i(2708,"br"),t()()(),n(2709,"td",21)(2710,"code",44),e(2711,"number"),t()(),n(2712,"td",24)(2713,"em")(2714,"strong"),e(2715,"(opcional)"),t()(),n(2716,"p"),e(2717,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2718,"p"),e(2719,"Deve ser usado o sistema de "),n(2720,"strong"),e(2721,"grid"),t(),e(2722," do PO (1 ... 11 colunas)."),t(),n(2723,"blockquote")(2724,"p"),e(2725,"Esta propriedade n\xE3o funciona com a propriedade "),n(2726,"code"),e(2727,"gridColumns"),t(),e(2728,". Deve-se especificar o tamanho da tela."),t()()()(),n(2729,"tr",16)(2730,"td",17)(2731,"div",25)(2732,"span",26),e(2733," headers"),i(2734,"br"),t()()(),n(2735,"td",21)(2736,"code",54),e(2737,"{ [name: string]: string "),t(),n(2738,"code",55),e(2739,` Array<string>;
}`),t()(),n(2740,"td",24)(2741,"em")(2742,"strong"),e(2743,"(opcional)"),t()(),n(2744,"p"),e(2745,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2746,"p")(2747,"strong"),e(2748,"Componente compat\xEDvel"),t(),e(2749,": "),n(2750,"code"),e(2751,"po-upload"),t()()()(),n(2752,"tr",16)(2753,"td",17)(2754,"div",25)(2755,"span",26),e(2756," help"),i(2757,"br"),t()()(),n(2758,"td",21)(2759,"code",27),e(2760,"string"),t()(),n(2761,"td",24)(2762,"em")(2763,"strong"),e(2764,"(opcional)"),t()(),n(2765,"p"),e(2766,"Texto de ajuda."),t()()(),n(2767,"tr",16)(2768,"td",17)(2769,"div",25)(2770,"span",26),e(2771," hideLabelStatus"),i(2772,"br"),t()()(),n(2773,"td",21)(2774,"code",29),e(2775,"boolean"),t()(),n(2776,"td",24)(2777,"em")(2778,"strong"),e(2779,"(opcional)"),t()(),n(2780,"p"),e(2781,"Indica se o status do "),n(2782,"code"),e(2783,"model"),t(),e(2784," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2785,"tr",16)(2786,"td",17)(2787,"div",25)(2788,"span",26),e(2789," hidePasswordPeek"),i(2790,"br"),t()()(),n(2791,"td",21)(2792,"code",29),e(2793,"boolean"),t()(),n(2794,"td",24)(2795,"em")(2796,"strong"),e(2797,"(opcional)"),t()(),n(2798,"p"),e(2799,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2800,"code"),e(2801,"po-password"),t(),e(2802,"."),t()()(),n(2803,"tr",16)(2804,"td",17)(2805,"div",25)(2806,"span",26),e(2807," hideRestrictionsInfo"),i(2808,"br"),t()()(),n(2809,"td",21)(2810,"code",29),e(2811,"boolean"),t()(),n(2812,"td",24)(2813,"em")(2814,"strong"),e(2815,"(opcional)"),t()(),n(2816,"p"),e(2817,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2818,"p")(2819,"strong"),e(2820,"Componente compat\xEDvel"),t(),e(2821,": "),n(2822,"code"),e(2823,"po-upload"),t()()()(),n(2824,"tr",16)(2825,"td",17)(2826,"div",25)(2827,"span",26),e(2828," hideSearch"),i(2829,"br"),t()()(),n(2830,"td",21)(2831,"code",29),e(2832,"boolean"),t()(),n(2833,"td",24)(2834,"em")(2835,"strong"),e(2836,"(opcional)"),t()(),n(2837,"p"),e(2838,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2839,"code"),e(2840,"po-multiselect"),t(),e(2841,"."),t()()(),n(2842,"tr",16)(2843,"td",17)(2844,"div",25)(2845,"span",26),e(2846," hideSelectAll"),i(2847,"br"),t()()(),n(2848,"td",21)(2849,"code",29),e(2850,"boolean"),t()(),n(2851,"td",24)(2852,"em")(2853,"strong"),e(2854,"(opcional)"),t()(),n(2855,"p"),e(2856,'Indica se o campo "Selecionar todos" do '),n(2857,"code"),e(2858,"po-multiselect"),t(),e(2859," ser\xE1 escondido."),t()()(),n(2860,"tr",16)(2861,"td",17)(2862,"div",25)(2863,"span",26),e(2864," hideSelectButton"),i(2865,"br"),t()()(),n(2866,"td",21)(2867,"code",29),e(2868,"boolean"),t()(),n(2869,"td",24)(2870,"em")(2871,"strong"),e(2872,"(opcional)"),t()(),n(2873,"p"),e(2874,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2875,"blockquote")(2876,"p"),e(2877,"Caso o valor definido seja "),n(2878,"code"),e(2879,"true"),t(),e(2880,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2881,"code"),e(2882,"selectFiles()"),t(),e(2883," para sele\xE7\xE3o de arquivos."),t()(),n(2884,"p")(2885,"strong"),e(2886,"Componente compat\xEDvel"),t(),e(2887,": "),n(2888,"code"),e(2889,"po-upload"),t()()()(),n(2890,"tr",16)(2891,"td",17)(2892,"div",25)(2893,"span",26),e(2894," hideSendButton"),i(2895,"br"),t()()(),n(2896,"td",21)(2897,"code",29),e(2898,"boolean"),t()(),n(2899,"td",24)(2900,"em")(2901,"strong"),e(2902,"(opcional)"),t()(),n(2903,"p"),e(2904,"Omite o bot\xE3o de envio de arquivos."),t(),n(2905,"blockquote")(2906,"p"),e(2907,"Caso o valor definido seja "),n(2908,"code"),e(2909,"true"),t(),e(2910,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2911,"code"),e(2912,"sendFiles()"),t(),e(2913," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2914,"p")(2915,"strong"),e(2916,"Componente compat\xEDvel"),t(),e(2917,": "),n(2918,"code"),e(2919,"po-upload"),t()()()(),n(2920,"tr",16)(2921,"td",17)(2922,"div",25)(2923,"span",26),e(2924," icon"),i(2925,"br"),t()()(),n(2926,"td",21)(2927,"code",27),e(2928,"string "),t(),n(2929,"code",56),e(2930," TemplateRef<void>"),t()(),n(2931,"td",24)(2932,"em")(2933,"strong"),e(2934,"(opcional)"),t()(),n(2935,"p"),e(2936,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2937,"blockquote")(2938,"p"),e(2939,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2940,"ul")(2941,"li"),e(2942,"Input;"),t(),n(2943,"li"),e(2944,"Number;"),t(),n(2945,"li"),e(2946,"Decimal;"),t(),n(2947,"li"),e(2948,"Combo;"),t(),n(2949,"li"),e(2950,"Password;"),t()(),n(2951,"blockquote")(2952,"p"),e(2953,"Veja a disponibilidade de \xEDcones em "),n(2954,"a",57),e(2955,"biblioteca de \xEDcones"),t(),e(2956,"."),t()()()(),n(2957,"tr",16)(2958,"td",17)(2959,"div",25)(2960,"span",26),e(2961," infiniteScroll"),i(2962,"br"),t()()(),n(2963,"td",21)(2964,"code",29),e(2965,"boolean"),t()(),n(2966,"td",24)(2967,"em")(2968,"strong"),e(2969,"(opcional)"),t()(),n(2970,"p"),e(2971,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2972,"p")(2973,"strong"),e(2974,"Componentes compat\xEDveis:"),t(),n(2975,"code"),e(2976,"po-combo"),t(),e(2977,", "),n(2978,"code"),e(2979,"po-lookup"),t(),e(2980,"."),t()()(),n(2981,"tr",16)(2982,"td",17)(2983,"div",25)(2984,"span",26),e(2985," infiniteScrollDistance"),i(2986,"br"),t()()(),n(2987,"td",21)(2988,"code",44),e(2989,"number"),t()(),n(2990,"td",24)(2991,"em")(2992,"strong"),e(2993,"(opcional)"),t()(),n(2994,"p"),e(2995,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2996,"strong"),e(2997,"Exemplos"),t(),n(2998,"code"),e(2999,"{ infiniteScrollDistance: 80 }"),t(),e(3e3,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(3001,"p")(3002,"strong"),e(3003,"Componente compat\xEDvel:"),t(),n(3004,"code"),e(3005,"po-combo"),t(),e(3006,"."),t()()(),n(3007,"tr",16)(3008,"td",17)(3009,"div",25)(3010,"span",26),e(3011," invalidValue"),i(3012,"br"),t()()(),n(3013,"td",21)(3014,"code",29),e(3015,"boolean"),t()(),n(3016,"td",24)(3017,"em")(3018,"strong"),e(3019,"(opcional)"),t()(),n(3020,"p"),e(3021,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(3022,"code"),e(3023,"p-field-error-message"),t(),e(3024,"."),t(),n(3025,"blockquote")(3026,"p"),e(3027,"Caso essa propriedade seja definida como "),n(3028,"code"),e(3029,"true"),t(),e(3030,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(3031,"p")(3032,"strong"),e(3033,"Componente compat\xEDvel"),t(),e(3034,": "),n(3035,"code"),e(3036,"po-switch"),t()()()(),n(3037,"tr",16)(3038,"td",17)(3039,"div",25)(3040,"span",26),e(3041," isoFormat"),i(3042,"br"),t()()(),n(3043,"td",21)(3044,"code",58),e(3045,"PoDatepickerIsoFormat"),t()(),n(3046,"td",24)(3047,"em")(3048,"strong"),e(3049,"(opcional)"),t()(),n(3050,"p"),e(3051,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(3052,"blockquote")(3053,"p"),e(3054,"Veja os valores v\xE1lidos no "),n(3055,"code"),e(3056,"enumPoDatepickerIsoFormat"),t(),e(3057,"."),t()(),n(3058,"p")(3059,"strong"),e(3060,"Componente compat\xEDvel:"),t(),e(3061," po-datepicker"),t()()(),n(3062,"tr",16)(3063,"td",17)(3064,"div",25)(3065,"span",26),e(3066," key"),i(3067,"br"),t()()(),n(3068,"td",21)(3069,"code",29),e(3070,"boolean"),t()(),n(3071,"td",24)(3072,"em")(3073,"strong"),e(3074,"(opcional)"),t()(),n(3075,"p"),e(3076,"Identificador"),t()()(),n(3077,"tr",16)(3078,"td",17)(3079,"div",25)(3080,"span",26),e(3081," keydown"),i(3082,"br"),t()()(),n(3083,"td",21)(3084,"code",43),e(3085,"Function"),t()(),n(3086,"td",24)(3087,"em")(3088,"strong"),e(3089,"(opcional)"),t()(),n(3090,"p"),e(3091,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(3092,"code"),e(3093,"KeyboardEvent"),t(),e(3094," com informa\xE7\xF5es sobre a tecla."),t()()(),n(3095,"tr",16)(3096,"td",17)(3097,"div",25)(3098,"span",26),e(3099," label"),i(3100,"br"),t()()(),n(3101,"td",21)(3102,"code",27),e(3103,"string"),t()(),n(3104,"td",24)(3105,"em")(3106,"strong"),e(3107,"(opcional)"),t()(),n(3108,"p"),e(3109,"R\xF3tulo do campo exibido."),t(),n(3110,"p"),e(3111,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(3112,"code"),e(3113,"label"),t(),e(3114," o valor da propriedade "),n(3115,"code"),e(3116,"property"),t(),e(3117," com a primeira letra em mai\xFAsculo."),t()()(),n(3118,"tr",16)(3119,"td",17)(3120,"div",25)(3121,"span",26),e(3122," labelPosition"),i(3123,"br"),t()()(),n(3124,"td",21)(3125,"code",59),e(3126,"PoSwitchLabelPosition"),t()(),n(3127,"td",24)(3128,"em")(3129,"strong"),e(3130,"(opcional)"),t()(),n(3131,"p"),e(3132,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(3133,"blockquote")(3134,"p"),e(3135,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(3136,"tr",16)(3137,"td",17)(3138,"div",25)(3139,"span",26),e(3140," listboxControlPosition"),i(3141,"br"),t()()(),n(3142,"td",21)(3143,"code",60),e(3144,"'top' "),t(),n(3145,"code",61),e(3146," 'bottom'"),t()(),n(3147,"td",24)(3148,"em")(3149,"strong"),e(3150,"(opcional)"),t()(),n(3151,"p"),e(3152,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(3153,"code"),e(3154,"listbox"),t(),e(3155," em rela\xE7\xE3o ao campo ("),n(3156,"code"),e(3157,"top"),t(),e(3158," ou "),n(3159,"code"),e(3160,"bottom"),t(),e(3161,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(3162,"p")(3163,"strong"),e(3164,"Componentes compat\xEDveis:"),t(),n(3165,"code"),e(3166,"po-multiselect"),t(),e(3167,", "),n(3168,"code"),e(3169,"po-combo"),t(),e(3170,"."),t()()(),n(3171,"tr",16)(3172,"td",17)(3173,"div",25)(3174,"span",26),e(3175," literals"),i(3176,"br"),t()()(),n(3177,"td",21)(3178,"code",36),e(3179,"PoLookupLiterals "),t(),n(3180,"code",62),e(3181," PoMultiselectLiterals "),t(),n(3182,"code",63),e(3183," PoComboLiterals "),t(),n(3184,"code",64),e(3185," PoDatepickerRangeLiterals "),t(),n(3186,"code",65),e(3187," PoUploadLiterals"),t()(),n(3188,"td",24)(3189,"em")(3190,"strong"),e(3191,"(opcional)"),t()(),n(3192,"p"),e(3193,"Objeto com as literais usadas para os seguintes componentes: "),n(3194,"code"),e(3195,"po-lookup"),t(),e(3196,", "),n(3197,"code"),e(3198,"po-multiselect"),t(),e(3199,", "),n(3200,"code"),e(3201,"po-combo"),t(),e(3202," e "),n(3203,"code"),e(3204,"po-datepicker-range"),t(),e(3205,"."),t(),n(3206,"blockquote")(3207,"p"),e(3208,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(3209,"p")(3210,"strong"),e(3211,"Componentes compat\xEDveis:"),t(),n(3212,"code"),e(3213,"po-lookup"),t(),e(3214,", "),n(3215,"code"),e(3216,"po-multiselect"),t(),e(3217,", "),n(3218,"code"),e(3219,"po-combo"),t(),e(3220,", "),n(3221,"code"),e(3222,"po-datepicker-range"),t()()()(),n(3223,"tr",16)(3224,"td",17)(3225,"div",25)(3226,"span",26),e(3227," locale"),i(3228,"br"),t()()(),n(3229,"td",21)(3230,"code",27),e(3231,"string"),t()(),n(3232,"td",24)(3233,"em")(3234,"strong"),e(3235,"(opcional)"),t()(),n(3236,"p"),e(3237,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(3238,"a",66)(3239,"code"),e(3240,"I18n"),t()()(),n(3241,"p"),e(3242,`Exemplo de utiliza\xE7\xE3o:
`),n(3243,"code"),e(3244,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),n(3245,"blockquote")(3246,"p"),e(3247,"Para ver quais linguagens suportadas acesse "),n(3248,"a",66)(3249,"code"),e(3250,"I18n"),t()(),e(3251,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(3252,"tr",16)(3253,"td",17)(3254,"div",25)(3255,"span",26),e(3256," mask"),i(3257,"br"),t()()(),n(3258,"td",21)(3259,"code",27),e(3260,"string"),t()(),n(3261,"td",24)(3262,"em")(3263,"strong"),e(3264,"(opcional)"),t()(),n(3265,"p"),e(3266,"M\xE1scara para o campo."),t(),n(3267,"p")(3268,"strong"),e(3269,"Componentes compat\xEDveis:"),t(),n(3270,"code"),e(3271,"po-input"),t(),e(3272,"."),t(),n(3273,"blockquote")(3274,"p"),e(3275,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(3276,"code"),e(3277,"type: time"),t(),e(3278,"."),t()()()(),n(3279,"tr",16)(3280,"td",17)(3281,"div",25)(3282,"span",26),e(3283," maskFormatModel"),i(3284,"br"),t()()(),n(3285,"td",21)(3286,"code",29),e(3287,"boolean"),t()(),n(3288,"td",24)(3289,"em")(3290,"strong"),e(3291,"(opcional)"),t()(),n(3292,"p"),e(3293,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(3294,"code"),e(3295,"false"),t(),e(3296,"."),t(),n(3297,"p")(3298,"strong"),e(3299,"Componentes compat\xEDveis:"),t(),n(3300,"code"),e(3301,"po-input"),t(),e(3302,"."),t(),n(3303,"blockquote")(3304,"p"),e(3305,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(3306,"code"),e(3307,"type: time"),t(),e(3308,"."),t()()()(),n(3309,"tr",16)(3310,"td",17)(3311,"div",25)(3312,"span",26),e(3313," maxLength"),i(3314,"br"),t()()(),n(3315,"td",21)(3316,"code",44),e(3317,"number"),t()(),n(3318,"td",24)(3319,"em")(3320,"strong"),e(3321,"(opcional)"),t()(),n(3322,"p"),e(3323,"Tamanho m\xE1ximo de caracteres."),t(),n(3324,"p")(3325,"strong"),e(3326,"Componentes compat\xEDveis:"),t(),n(3327,"code"),e(3328,"po-input"),t(),e(3329,", "),n(3330,"code"),e(3331,"po-number"),t(),e(3332,", "),n(3333,"code"),e(3334,"po-decimal"),t(),e(3335,", "),n(3336,"code"),e(3337,"po-textarea"),t(),e(3338,", "),n(3339,"code"),e(3340,"po-password"),t(),e(3341,"."),t()()(),n(3342,"tr",16)(3343,"td",17)(3344,"div",25)(3345,"span",26),e(3346," maxValue"),i(3347,"br"),t()()(),n(3348,"td",21)(3349,"code",27),e(3350,"string "),t(),n(3351,"code",44),e(3352," number"),t()(),n(3353,"td",24)(3354,"em")(3355,"strong"),e(3356,"(opcional)"),t()(),n(3357,"p"),e(3358,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(3359,"em"),e(3360,"number"),t(),e(3361,", "),n(3362,"em"),e(3363,"date"),t(),e(3364," ou "),n(3365,"em"),e(3366,"dateTime"),t(),e(3367,"."),t(),n(3368,"p")(3369,"strong"),e(3370,"Componentes compat\xEDveis:"),t(),n(3371,"code"),e(3372,"po-datepicker"),t(),e(3373,", "),n(3374,"code"),e(3375,"po-datepicker-range"),t(),e(3376,", "),n(3377,"code"),e(3378,"po-number"),t(),e(3379,", "),n(3380,"code"),e(3381,"po-decimal"),t()()()(),n(3382,"tr",16)(3383,"td",17)(3384,"div",25)(3385,"span",26),e(3386," minLength"),i(3387,"br"),t()()(),n(3388,"td",21)(3389,"code",44),e(3390,"number"),t()(),n(3391,"td",24)(3392,"em")(3393,"strong"),e(3394,"(opcional)"),t()(),n(3395,"p"),e(3396,"Tamanho m\xEDnimo de caracteres."),t(),n(3397,"p")(3398,"strong"),e(3399,"Componentes compat\xEDveis:"),t(),n(3400,"code"),e(3401,"po-input"),t(),e(3402,", "),n(3403,"code"),e(3404,"po-number"),t(),e(3405,", "),n(3406,"code"),e(3407,"po-decimal"),t(),e(3408,", "),n(3409,"code"),e(3410,"po-textarea"),t(),e(3411,", "),n(3412,"code"),e(3413,"po-password"),t(),e(3414,"."),t()()(),n(3415,"tr",16)(3416,"td",17)(3417,"div",25)(3418,"span",26),e(3419," minValue"),i(3420,"br"),t()()(),n(3421,"td",21)(3422,"code",27),e(3423,"string "),t(),n(3424,"code",44),e(3425," number"),t()(),n(3426,"td",24)(3427,"em")(3428,"strong"),e(3429,"(opcional)"),t()(),n(3430,"p"),e(3431,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(3432,"em"),e(3433,"number"),t(),e(3434,", "),n(3435,"em"),e(3436,"date"),t(),e(3437," ou "),n(3438,"em"),e(3439,"dateTime"),t(),e(3440,"."),t(),n(3441,"p")(3442,"strong"),e(3443,"Componentes compat\xEDveis:"),t(),n(3444,"code"),e(3445,"po-datepicker"),t(),e(3446,", "),n(3447,"code"),e(3448,"po-datepicker-range"),t(),e(3449,", "),n(3450,"code"),e(3451,"po-number"),t(),e(3452,", "),n(3453,"code"),e(3454,"po-decimal"),t()()()(),n(3455,"tr",16)(3456,"td",17)(3457,"div",25)(3458,"span",26),e(3459," multiple"),i(3460,"br"),t()()(),n(3461,"td",21)(3462,"code",29),e(3463,"boolean"),t()(),n(3464,"td",24)(3465,"em")(3466,"strong"),e(3467,"(opcional)"),t()(),n(3468,"p"),e(3469,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(3470,"p")(3471,"strong"),e(3472,"Componente compat\xEDvel:"),t(),n(3473,"code"),e(3474,"po-lookup"),t(),e(3475,", "),n(3476,"code"),e(3477,"po-upload"),t()()()(),n(3478,"tr",16)(3479,"td",17)(3480,"div",25)(3481,"span",26),e(3482," noAutocomplete"),i(3483,"br"),t()()(),n(3484,"td",21)(3485,"code",29),e(3486,"boolean"),t()(),n(3487,"td",24)(3488,"em")(3489,"strong"),e(3490,"(opcional)"),t()(),n(3491,"p"),e(3492,"Define a propriedade nativa "),n(3493,"code"),e(3494,"autocomplete"),t(),e(3495," do campo como off."),t(),n(3496,"p")(3497,"strong"),e(3498,"Componentes compat\xEDveis:"),t(),n(3499,"code"),e(3500,"po-datepicker"),t(),e(3501,", "),n(3502,"code"),e(3503,"po-datepicker-range"),t(),e(3504,", "),n(3505,"code"),e(3506,"po-input"),t(),e(3507,", "),n(3508,"code"),e(3509,"po-number"),t(),e(3510,", "),n(3511,"code"),e(3512,"po-decimal"),t(),e(3513,", "),n(3514,"code"),e(3515,"po-lookup"),t(),e(3516,", "),n(3517,"code"),e(3518,"po-password"),t()()()(),n(3519,"tr",16)(3520,"td",17)(3521,"div",25)(3522,"span",26),e(3523," offsetColumns"),i(3524,"br"),t()()(),n(3525,"td",21)(3526,"code",44),e(3527,"number"),t()(),n(3528,"td",24)(3529,"em")(3530,"strong"),e(3531,"(opcional)"),t()(),n(3532,"p"),e(3533,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(3534,"p"),e(3535,"Deve ser usado o sistema de "),n(3536,"strong"),e(3537,"grid"),t(),e(3538," do PO (1 ... 12 colunas)."),t(),n(3539,"blockquote")(3540,"p"),e(3541,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(3542,"tr",16)(3543,"td",17)(3544,"div",25)(3545,"span",26),e(3546," offsetLgColumns"),i(3547,"br"),t()()(),n(3548,"td",21)(3549,"code",44),e(3550,"number"),t()(),n(3551,"td",24)(3552,"em")(3553,"strong"),e(3554,"(opcional)"),t()(),n(3555,"p"),e(3556,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(3557,"p"),e(3558,"Deve ser usado o sistema de "),n(3559,"strong"),e(3560,"grid"),t(),e(3561," do PO (1 ... 12 colunas)."),t(),n(3562,"blockquote")(3563,"p"),e(3564,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3565,"code"),e(3566,"offsetColumns"),t(),e(3567,"."),t()()()(),n(3568,"tr",16)(3569,"td",17)(3570,"div",25)(3571,"span",26),e(3572," offsetMdColumns"),i(3573,"br"),t()()(),n(3574,"td",21)(3575,"code",44),e(3576,"number"),t()(),n(3577,"td",24)(3578,"em")(3579,"strong"),e(3580,"(opcional)"),t()(),n(3581,"p"),e(3582,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(3583,"p"),e(3584,"Deve ser usado o sistema de "),n(3585,"strong"),e(3586,"grid"),t(),e(3587," do PO (1 ... 12 colunas)."),t(),n(3588,"blockquote")(3589,"p"),e(3590,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3591,"code"),e(3592,"offsetColumns"),t(),e(3593,"."),t()()()(),n(3594,"tr",16)(3595,"td",17)(3596,"div",25)(3597,"span",26),e(3598," offsetSmColumns"),i(3599,"br"),t()()(),n(3600,"td",21)(3601,"code",44),e(3602,"number"),t()(),n(3603,"td",24)(3604,"em")(3605,"strong"),e(3606,"(opcional)"),t()(),n(3607,"p"),e(3608,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(3609,"p"),e(3610,"Deve ser usado o sistema de "),n(3611,"strong"),e(3612,"grid"),t(),e(3613," do PO (1 ... 12 colunas)."),t(),n(3614,"blockquote")(3615,"p"),e(3616,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3617,"code"),e(3618,"offsetColumns"),t(),e(3619,"."),t()()()(),n(3620,"tr",16)(3621,"td",17)(3622,"div",25)(3623,"span",26),e(3624," offsetXlColumns"),i(3625,"br"),t()()(),n(3626,"td",21)(3627,"code",44),e(3628,"number"),t()(),n(3629,"td",24)(3630,"em")(3631,"strong"),e(3632,"(opcional)"),t()(),n(3633,"p"),e(3634,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(3635,"p"),e(3636,"Deve ser usado o sistema de "),n(3637,"strong"),e(3638,"grid"),t(),e(3639," do PO (1 ... 12 colunas)."),t(),n(3640,"blockquote")(3641,"p"),e(3642,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3643,"code"),e(3644,"offsetColumns"),t(),e(3645,"."),t()()()(),n(3646,"tr",16)(3647,"td",17)(3648,"div",25)(3649,"span",26),e(3650," onError"),i(3651,"br"),t()()(),n(3652,"td",21)(3653,"code",43),e(3654,"Function"),t()(),n(3655,"td",24)(3656,"em")(3657,"strong"),e(3658,"(opcional)"),t()(),n(3659,"p"),e(3660,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3661,"blockquote")(3662,"p"),e(3663,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3664,"code"),e(3665,"HttpErrorResponse"),t(),e(3666,"."),t()(),n(3667,"p")(3668,"strong"),e(3669,"Componente compat\xEDvel"),t(),e(3670,": "),n(3671,"code"),e(3672,"po-upload"),t()()()(),n(3673,"tr",16)(3674,"td",17)(3675,"div",25)(3676,"span",26),e(3677," onSuccess"),i(3678,"br"),t()()(),n(3679,"td",21)(3680,"code",43),e(3681,"Function"),t()(),n(3682,"td",24)(3683,"em")(3684,"strong"),e(3685,"(opcional)"),t()(),n(3686,"p"),e(3687,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3688,"blockquote")(3689,"p"),e(3690,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3691,"code"),e(3692,"HttpResponse"),t(),e(3693,"."),t()(),n(3694,"p")(3695,"strong"),e(3696,"Componente compat\xEDvel"),t(),e(3697,": "),n(3698,"code"),e(3699,"po-upload"),t()()()(),n(3700,"tr",16)(3701,"td",17)(3702,"div",25)(3703,"span",26),e(3704," onUpload"),i(3705,"br"),t()()(),n(3706,"td",21)(3707,"code",43),e(3708,"Function"),t()(),n(3709,"td",24)(3710,"em")(3711,"strong"),e(3712,"(opcional)"),t()(),n(3713,"p"),e(3714,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3715,"pre")(3716,"code"),e(3717,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3718,"p")(3719,"strong"),e(3720,"Componente compat\xEDvel"),t(),e(3721,": "),n(3722,"code"),e(3723,"po-upload"),t()()()(),n(3724,"tr",16)(3725,"td",17)(3726,"div",25)(3727,"span",26),e(3728," optional"),i(3729,"br"),t()()(),n(3730,"td",21)(3731,"code",29),e(3732,"boolean"),t()(),n(3733,"td",24)(3734,"em")(3735,"strong"),e(3736,"(opcional)"),t()(),n(3737,"p"),e(3738,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3739,"blockquote")(3740,"p"),e(3741,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3742,"ul")(3743,"li"),e(3744,"O campo for "),n(3745,"code"),e(3746,"required"),t(),e(3747,", ou;"),t(),n(3748,"li"),e(3749,"N\xE3o possuir "),n(3750,"code"),e(3751,"help"),t(),e(3752," e "),n(3753,"code"),e(3754,"label"),t(),e(3755,"."),t()()()(),n(3756,"tr",16)(3757,"td",17)(3758,"div",25)(3759,"span",26),e(3760," options"),i(3761,"br"),t()()(),n(3762,"td",21)(3763,"code",32),e(3764,"Array<string> "),t(),n(3765,"code",67),e(3766," Array<PoSelectOption> "),t(),n(3767,"code",68),e(3768," Array<PoMultiselectOption> "),t(),n(3769,"code",69),e(3770," Array<PoCheckboxGroupOption> "),t(),n(3771,"code",70),e(3772," Array<any>"),t()(),n(3773,"td",24)(3774,"em")(3775,"strong"),e(3776,"(opcional)"),t()(),n(3777,"p"),e(3778,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3779,"p")(3780,"strong"),e(3781,"Componentes compat\xEDveis:"),t(),n(3782,"code"),e(3783,"po-select"),t(),e(3784,", "),n(3785,"code"),e(3786,"po-radio-group"),t(),e(3787,", "),n(3788,"code"),e(3789,"po-checkbox-group"),t(),e(3790,", "),n(3791,"code"),e(3792,"po-multiselect"),t(),e(3793,"."),t()()(),n(3794,"tr",16)(3795,"td",17)(3796,"div",25)(3797,"span",26),e(3798," optionsMulti"),i(3799,"br"),t()()(),n(3800,"td",21)(3801,"code",29),e(3802,"boolean"),t()(),n(3803,"td",24)(3804,"em")(3805,"strong"),e(3806,"(opcional)"),t()(),n(3807,"p"),e(3808,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3809,"tr",16)(3810,"td",17)(3811,"div",25)(3812,"span",26),e(3813," optionsService"),i(3814,"br"),t()()(),n(3815,"td",21)(3816,"code",27),e(3817,"string "),t(),n(3818,"code",71),e(3819," PoComboFilter "),t(),n(3820,"code",72),e(3821," PoMultiselectFilter"),t()(),n(3822,"td",24)(3823,"em")(3824,"strong"),e(3825,"(opcional)"),t()(),n(3826,"p"),e(3827,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3828,"strong"),e(3829,"Importante"),t()(),n(3830,"blockquote")(3831,"p"),e(3832,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3833,"a",7),e(3834,"guia de API do PO UI"),t(),e(3835,"."),t()()()(),n(3836,"tr",16)(3837,"td",17)(3838,"div",25)(3839,"span",26),e(3840," order"),i(3841,"br"),t()()(),n(3842,"td",21)(3843,"code",44),e(3844,"number"),t()(),n(3845,"td",24)(3846,"em")(3847,"strong"),e(3848,"(opcional)"),t()(),n(3849,"p"),e(3850,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3851,"p"),e(3852,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3853,"p")(3854,"code"),e(3855,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3856,"p"),e(3857,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3858,"code"),e(3859,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3860,"p"),e(3861,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3862,"p"),e(3863,"Campos sem "),n(3864,"code"),e(3865,"order"),t(),e(3866,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3867,"tr",16)(3868,"td",17)(3869,"div",25)(3870,"span",26),e(3871," params"),i(3872,"br"),t()()(),n(3873,"td",21)(3874,"code",33),e(3875,"any"),t()(),n(3876,"td",24)(3877,"em")(3878,"strong"),e(3879,"(opcional)"),t()(),n(3880,"p"),e(3881,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3882,"code"),e(3883,"po-lookup"),t(),e(3884,` e
`),n(3885,"code"),e(3886,"po-combo"),t(),e(3887,"."),t(),n(3888,"p"),e(3889,"Por exemplo, para o par\xE2metro "),n(3890,"code"),e(3891,"{ age: 23 }"),t(),e(3892," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3893,"p")(3894,"code"),e(3895,"url + ?age=23&filter=Peter"),t()()()(),n(3896,"tr",16)(3897,"td",17)(3898,"div",25)(3899,"span",26),e(3900," pattern"),i(3901,"br"),t()()(),n(3902,"td",21)(3903,"code",27),e(3904,"string"),t()(),n(3905,"td",24)(3906,"em")(3907,"strong"),e(3908,"(opcional)"),t()(),n(3909,"p"),e(3910,"Regex para valida\xE7\xE3o do campo."),t(),n(3911,"p")(3912,"strong"),e(3913,"Componentes compat\xEDveis:"),t(),n(3914,"code"),e(3915,"po-input"),t(),e(3916,", "),n(3917,"code"),e(3918,"po-password"),t(),e(3919,"."),t()()(),n(3920,"tr",16)(3921,"td",17)(3922,"div",25)(3923,"span",26),e(3924," placeholder"),i(3925,"br"),t()()(),n(3926,"td",21)(3927,"code",27),e(3928,"string"),t()(),n(3929,"td",24)(3930,"em")(3931,"strong"),e(3932,"(opcional)"),t()(),n(3933,"p"),e(3934,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3935,"tr",16)(3936,"td",17)(3937,"div",25)(3938,"span",26),e(3939," placeholderSearch"),i(3940,"br"),t()()(),n(3941,"td",21)(3942,"code",27),e(3943,"string"),t()(),n(3944,"td",24)(3945,"em")(3946,"strong"),e(3947,"(opcional)"),t()(),n(3948,"p"),e(3949,"Placeholder do campo de pesquisa do "),n(3950,"code"),e(3951,"po-multiselect"),t(),e(3952,"."),t(),n(3953,"blockquote")(3954,"p"),e(3955,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3956,"tr",16)(3957,"td",17)(3958,"div",25)(3959,"span",26),e(3960," property"),i(3961,"br"),t()()(),n(3962,"td",21)(3963,"code",27),e(3964,"string"),t()(),n(3965,"td",24)(3966,"p"),e(3967,"Nome de refer\xEAncia do campo."),t()()(),n(3968,"tr",16)(3969,"td",17)(3970,"div",25)(3971,"span",26),e(3972," range"),i(3973,"br"),t()()(),n(3974,"td",21)(3975,"code",29),e(3976,"boolean"),t()(),n(3977,"td",24)(3978,"em")(3979,"strong"),e(3980,"(opcional)"),t()(),n(3981,"p"),e(3982,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3983,"blockquote")(3984,"p"),e(3985,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3986,"tr",16)(3987,"td",17)(3988,"div",25)(3989,"span",26),e(3990," readonly"),i(3991,"br"),t()()(),n(3992,"td",21)(3993,"code",29),e(3994,"boolean"),t()(),n(3995,"td",24)(3996,"em")(3997,"strong"),e(3998,"(opcional)"),t()(),n(3999,"p"),e(4e3,"Indica que o campo ser\xE1 somente leitura."),t(),n(4001,"p")(4002,"strong"),e(4003,"Componentes compat\xEDveis:"),t(),n(4004,"code"),e(4005,"po-datepicker"),t(),e(4006,", "),n(4007,"code"),e(4008,"po-datepicker-range"),t(),e(4009,", "),n(4010,"code"),e(4011,"po-input"),t(),e(4012,", "),n(4013,"code"),e(4014,"po-number"),t(),e(4015,", "),n(4016,"code"),e(4017,"po-decimal"),t(),e(4018,", "),n(4019,"code"),e(4020,"po-select"),t(),e(4021,", "),n(4022,"code"),e(4023,"po-textarea"),t(),e(4024,", "),n(4025,"code"),e(4026,"po-password"),t()()()(),n(4027,"tr",16)(4028,"td",17)(4029,"div",25)(4030,"span",26),e(4031," removeInitialFilter"),i(4032,"br"),t()()(),n(4033,"td",21)(4034,"code",29),e(4035,"boolean"),t()(),n(4036,"td",24)(4037,"em")(4038,"strong"),e(4039,"(opcional)"),t()(),n(4040,"p"),e(4041,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(4042,"blockquote")(4043,"p"),e(4044,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(4045,"p")(4046,"strong"),e(4047,"Componente compat\xEDvel"),t(),e(4048,": "),n(4049,"code"),e(4050,"po-combo"),t()()()(),n(4051,"tr",16)(4052,"td",17)(4053,"div",25)(4054,"span",26),e(4055," required"),i(4056,"br"),t()()(),n(4057,"td",21)(4058,"code",29),e(4059,"boolean"),t()(),n(4060,"td",24)(4061,"em")(4062,"strong"),e(4063,"(opcional)"),t()(),n(4064,"p"),e(4065,"Define a obrigatoriedade do campo."),t()()(),n(4066,"tr",16)(4067,"td",17)(4068,"div",25)(4069,"span",26),e(4070," requiredFieldErrorMessage"),i(4071,"br"),t()()(),n(4072,"td",21)(4073,"code",29),e(4074,"boolean"),t()(),n(4075,"td",24)(4076,"em")(4077,"strong"),e(4078,"(opcional)"),t()(),n(4079,"p"),e(4080,"Exibe a mensagem setada na propriedade "),n(4081,"code"),e(4082,"errorMessage"),t(),e(4083," se o campo estiver vazio e for requerido."),t(),n(4084,"blockquote")(4085,"p"),e(4086,"Necess\xE1rio que a propriedade "),n(4087,"code"),e(4088,"required"),t(),e(4089," esteja habilitada."),t()(),n(4090,"p")(4091,"strong"),e(4092,"Componentes compat\xEDveis:"),t(),n(4093,"code"),e(4094,"po-datepicker"),t(),e(4095,", "),n(4096,"code"),e(4097,"po-input"),t(),e(4098,", "),n(4099,"code"),e(4100,"po-number"),t(),e(4101,", "),n(4102,"code"),e(4103,"po-decimal"),t(),e(4104,", "),n(4105,"code"),e(4106,"po-password"),t(),e(4107,"."),t()()(),n(4108,"tr",16)(4109,"td",17)(4110,"div",25)(4111,"span",26),e(4112," restrictions"),i(4113,"br"),t()()(),n(4114,"td",21)(4115,"code",73),e(4116,"PoUploadFileRestrictions"),t()(),n(4117,"td",24)(4118,"em")(4119,"strong"),e(4120,"(opcional)"),t()(),n(4121,"p"),e(4122,"Objeto que segue a defini\xE7\xE3o da interface "),n(4123,"code"),e(4124,"PoUploadFileRestrictions"),t(),e(4125,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(4126,"p")(4127,"strong"),e(4128,"Componente compat\xEDvel"),t(),e(4129,": "),n(4130,"code"),e(4131,"po-upload"),t()()()(),n(4132,"tr",16)(4133,"td",17)(4134,"div",25)(4135,"span",26),e(4136," rows"),i(4137,"br"),t()()(),n(4138,"td",21)(4139,"code",44),e(4140,"number"),t()(),n(4141,"td",24)(4142,"em")(4143,"strong"),e(4144,"(opcional)"),t()(),n(4145,"p"),e(4146,"Quantidade de linhas exibidas no "),n(4147,"code"),e(4148,"po-textarea"),t(),e(4149,"."),t()()(),n(4150,"tr",16)(4151,"td",17)(4152,"div",25)(4153,"span",26),e(4154," searchService"),i(4155,"br"),t()()(),n(4156,"td",21)(4157,"code",27),e(4158,"string "),t(),n(4159,"code",34),e(4160," PoLookupFilter"),t()(),n(4161,"td",24)(4162,"em")(4163,"strong"),e(4164,"(opcional)"),t()(),n(4165,"p"),e(4166,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(4167,"code"),e(4168,"columns"),t(),e(4169,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(4170,"strong"),e(4171,"Importante:"),t()(),n(4172,"blockquote")(4173,"p"),e(4174,"Caso utilizar a propriedade "),n(4175,"code"),e(4176,"optionsService"),t(),e(4177,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(4178,"a",7),e(4179,"guia de API do PO UI"),t(),e(4180,"."),t()()()(),n(4181,"tr",16)(4182,"td",17)(4183,"div",25)(4184,"span",26),e(4185," secret"),i(4186,"br"),t()()(),n(4187,"td",21)(4188,"code",29),e(4189,"boolean"),t()(),n(4190,"td",24)(4191,"em")(4192,"strong"),e(4193,"(opcional)"),t()(),n(4194,"p"),e(4195,"Esconde a informa\xE7\xE3o estilo "),n(4196,"em"),e(4197,"password"),t(),e(4198,", pode ser utilizado quando o tipo de dado for "),n(4199,"em"),e(4200,"string"),t(),e(4201,"."),t()()(),n(4202,"tr",16)(4203,"td",17)(4204,"div",25)(4205,"span",26),e(4206," showRequired"),i(4207,"br"),t()()(),n(4208,"td",21)(4209,"code",29),e(4210,"boolean"),t()(),n(4211,"td",24)(4212,"em")(4213,"strong"),e(4214,"(opcional)"),t()(),n(4215,"p"),e(4216,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(4217,"blockquote")(4218,"p"),e(4219,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(4220,"ul")(4221,"li"),e(4222,"N\xE3o possuir "),n(4223,"code"),e(4224,"p-help"),t(),e(4225," e/ou "),n(4226,"code"),e(4227,"p-label"),t(),e(4228,"."),t()()()(),n(4229,"tr",16)(4230,"td",17)(4231,"div",25)(4232,"span",26),e(4233," size"),i(4234,"br"),t()()(),n(4235,"td",21)(4236,"code",27),e(4237,"string"),t()(),n(4238,"td",24)(4239,"em")(4240,"strong"),e(4241,"(opcional)"),t()(),n(4242,"p"),e(4243,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(4244,"ul")(4245,"li")(4246,"code"),e(4247,"small"),t(),e(4248,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(4249,"li")(4250,"code"),e(4251,"medium"),t(),e(4252,": aplica a medida medium de cada componente."),t(),n(4253,"li")(4254,"code"),e(4255,"large"),t(),e(4256,": aplica a medida large de cada componente (dispon\xEDvel para "),n(4257,"code"),e(4258,"po-checkbox"),t(),e(4259," e "),n(4260,"code"),e(4261,"po-radio-group"),t(),e(4262,")."),n(4263,"blockquote")(4264,"p"),e(4265,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(4266,"code"),e(4267,"medium"),t(),e(4268,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(4269,"a",39),e(4270,"po-theme"),t(),e(4271,"."),t()()()()()(),n(4272,"tr",16)(4273,"td",17)(4274,"div",25)(4275,"span",26),e(4276," sort"),i(4277,"br"),t()()(),n(4278,"td",21)(4279,"code",29),e(4280,"boolean"),t()(),n(4281,"td",24)(4282,"em")(4283,"strong"),e(4284,"(opcional)"),t()(),n(4285,"p"),e(4286,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(4287,"p")(4288,"strong"),e(4289,"Componentes compat\xEDveis:"),t(),n(4290,"code"),e(4291,"po-combo"),t(),e(4292,", po-multiselect"),t()()(),n(4293,"tr",16)(4294,"td",17)(4295,"div",25)(4296,"span",26),e(4297," step"),i(4298,"br"),t()()(),n(4299,"td",21)(4300,"code",44),e(4301,"number"),t()(),n(4302,"td",24)(4303,"em")(4304,"strong"),e(4305,"(opcional)"),t()(),n(4306,"p"),e(4307,"Intervalo utilizado no "),n(4308,"code"),e(4309,"po-number"),t(),e(4310,"."),t()()(),n(4311,"tr",16)(4312,"td",17)(4313,"div",25)(4314,"span",26),e(4315," thousandMaxlength"),i(4316,"br"),t()()(),n(4317,"td",21)(4318,"code",44),e(4319,"number"),t()(),n(4320,"td",24)(4321,"em")(4322,"strong"),e(4323,"(opcional)"),t()(),n(4324,"p"),e(4325,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(4326,"blockquote")(4327,"p"),e(4328,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(4329,"code"),e(4330,"type"),t(),e(4331," for "),n(4332,"em"),e(4333,"currency"),t(),e(4334," ou "),n(4335,"em"),e(4336,"decimal"),t(),e(4337,"."),t()()()(),n(4338,"tr",16)(4339,"td",17)(4340,"div",25)(4341,"span",26),e(4342," type"),i(4343,"br"),t()()(),n(4344,"td",21)(4345,"code",27),e(4346,"string "),t(),n(4347,"code",74),e(4348," PoDynamicFieldType"),t()(),n(4349,"td",24)(4350,"em")(4351,"strong"),e(4352,"(opcional)"),t()(),n(4353,"p"),e(4354,"Tipo do valor campo."),t(),n(4355,"p"),e(4356,"Valores v\xE1lidos:"),t(),n(4357,"ul")(4358,"li")(4359,"code"),e(4360,"boolean"),t(),e(4361,": Valores "),n(4362,"em"),e(4363,"booleanos"),t(),e(4364,"."),t(),n(4365,"li")(4366,"code"),e(4367,"currency"),t(),e(4368,": Valores monet\xE1rios."),t(),n(4369,"li")(4370,"code"),e(4371,"decimal"),t(),e(4372,": Valores decimais."),t(),n(4373,"li")(4374,"code"),e(4375,"date"),t(),e(4376,": Valores de datas."),n(4377,"ul")(4378,"li"),e(4379,"Aceita os tipos "),n(4380,"strong"),e(4381,"string"),t(),e(4382," e "),n(4383,"strong"),e(4384,"Date"),t(),e(4385,` padr\xE3o do Javascript,
por exemplo: `),n(4386,"code"),e(4387,"'2017-11-28'"),t(),e(4388," ou "),n(4389,"code"),e(4390,"new Date(2017, 10, 28)"),t(),e(4391,"."),t()()(),n(4392,"li")(4393,"code"),e(4394,"dateTime"),t(),e(4395,": Valor de data com hor\xE1rio."),n(4396,"ul")(4397,"li"),e(4398,"Aceita o tipo "),n(4399,"em"),e(4400,"string"),t(),e(4401," no formato "),n(4402,"strong"),e(4403,"ISO-8601"),t(),e(4404," extendido "),n(4405,"strong"),e(4406,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4407,`
e o tipo `),n(4408,"strong"),e(4409,"Date"),t(),e(4410," padr\xE3o do Javascript, por exemplo: "),n(4411,"code"),e(4412,"'2017-11-28T00:00:00-02:00'"),t(),e(4413," ou "),n(4414,"code"),e(4415,"new Date(2017, 10, 28)"),t(),e(4416,"."),t()()(),n(4417,"li")(4418,"code"),e(4419,"number"),t(),e(4420,": Valores num\xE9ricos."),t(),n(4421,"li")(4422,"code"),e(4423,"string"),t(),e(4424,": Textos."),t(),n(4425,"li")(4426,"code"),e(4427,"time"),t(),e(4428,": Valor do hor\xE1rio."),n(4429,"ul")(4430,"li"),e(4431,"Aceita o tipo "),n(4432,"strong"),e(4433,"string"),t(),e(4434," nos formatos "),n(4435,"strong"),e(4436,"'HH:mm:ss'"),t(),e(4437," ou "),n(4438,"strong"),e(4439,"'HH:mm:ss.ffffff'"),t(),e(4440,", por exemplo: "),n(4441,"code"),e(4442,"'23:12:45'"),t(),e(4443,"."),t()()()()()(),n(4444,"tr",16)(4445,"td",17)(4446,"div",25)(4447,"span",26),e(4448," url"),i(4449,"br"),t()()(),n(4450,"td",21)(4451,"code",27),e(4452,"string"),t()(),n(4453,"td",24)(4454,"em")(4455,"strong"),e(4456,"(opcional)"),t()(),n(4457,"p"),e(4458,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(4459,"p")(4460,"strong"),e(4461,"Componente compat\xEDvel"),t(),e(4462,": "),n(4463,"code"),e(4464,"po-upload"),t()()()(),n(4465,"tr",16)(4466,"td",17)(4467,"div",25)(4468,"span",26),e(4469," validate"),i(4470,"br"),t()()(),n(4471,"td",21)(4472,"code",27),e(4473,"string "),t(),n(4474,"code",43),e(4475," Function"),t()(),n(4476,"td",24)(4477,"em")(4478,"strong"),e(4479,"(opcional)"),t()(),n(4480,"p"),e(4481,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(4482,"strong"),e(4483,"mudan\xE7as do campo"),t(),e(4484,"."),t(),n(4485,"ul")(4486,"li"),e(4487,"A propriedade aceita os seguintes tipos:"),t()(),n(4488,"ul")(4489,"li")(4490,"strong"),e(4491,"String"),t(),e(4492,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(4493,"code"),e(4494,"POST"),t(),e(4495,"."),t(),n(4496,"li")(4497,"strong"),e(4498,"Function"),t(),e(4499,": M\xE9todo que ser\xE1 executado."),t()(),n(4500,"p"),e(4501,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(4502,"code"),e(4503,"PoDynamicFormFieldChanged"),t(),e(4504,":"),t(),n(4505,"p")(4506,"code"),e(4507,"{ property: 'property name', value: 'new value' }"),t()(),n(4508,"p"),e(4509,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(4510,"a",75),e(4511,"PoDynamicFormFieldValidation"),t(),e(4512,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(4513,"pre")(4514,"code"),e(4515,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(4516,"p"),e(4517,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(4518,"code"),e(4519,"bind"),t(),e(4520,`, por exemplo:
`),n(4521,"code"),e(4522,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(4523,"tr",16)(4524,"td",17)(4525,"div",25)(4526,"span",26),e(4527," visible"),i(4528,"br"),t()()(),n(4529,"td",21)(4530,"code",29),e(4531,"boolean"),t()(),n(4532,"td",24)(4533,"em")(4534,"strong"),e(4535,"(opcional)"),t()(),n(4536,"p"),e(4537,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(4538,"h4",42)(4539,"code",5),e(4540,"PoLookupColumn"),t()(),n(4541,"div",2)(4542,"p"),e(4543,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),n(4544,"h4",12),e(4545,"Propriedades"),t(),n(4546,"table",13)(4547,"tr",14)(4548,"th",15),e(4549,"Nome"),t(),n(4550,"th",15),e(4551,"Tipo"),t(),n(4552,"th",15),e(4553,"Descri\xE7\xE3o"),t()(),n(4554,"tr",16)(4555,"td",17)(4556,"div",25)(4557,"span",26),e(4558," fieldLabel"),i(4559,"br"),t()()(),n(4560,"td",21)(4561,"code",29),e(4562,"boolean"),t()(),n(4563,"td",24)(4564,"em")(4565,"strong"),e(4566,"(opcional)"),t()(),n(4567,"p"),e(4568,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),n(4569,"p"),e(4570,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),n(4571,"p"),e(4572,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),n(4573,"code"),e(4574,"p-field-format"),t(),e(4575," ou "),n(4576,"code"),e(4577,"p-field-label"),t(),e(4578," forem configurados no componente."),t()()(),n(4579,"tr",16)(4580,"td",17)(4581,"div",25)(4582,"span",26),e(4583," format"),i(4584,"br"),t()()(),n(4585,"td",21)(4586,"code",27),e(4587,"string"),t()(),n(4588,"td",24)(4589,"em")(4590,"strong"),e(4591,"(opcional)"),t()(),n(4592,"p"),e(4593,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),n(4594,"ul")(4595,"li"),e(4596,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),n(4597,"li"),e(4598,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),n(4599,"tr",16)(4600,"td",17)(4601,"div",25)(4602,"span",26),e(4603," label"),i(4604,"br"),t()()(),n(4605,"td",21)(4606,"code",27),e(4607,"string"),t()(),n(4608,"td",24)(4609,"em")(4610,"strong"),e(4611,"(opcional)"),t()(),n(4612,"p"),e(4613,"Texto para t\xEDtulo da coluna."),t(),n(4614,"p"),e(4615,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(4616,"em"),e(4617,"label"),t(),e(4618," o valor da propriedade "),n(4619,"em"),e(4620,"property"),t(),e(4621," com a primeira letra em mai\xFAsculo."),t()()(),n(4622,"tr",16)(4623,"td",17)(4624,"div",25)(4625,"span",26),e(4626," property"),i(4627,"br"),t()()(),n(4628,"td",21)(4629,"code",27),e(4630,"string"),t()(),n(4631,"td",24)(4632,"em")(4633,"strong"),e(4634,"(opcional)"),t()(),n(4635,"p"),e(4636,"Nome identificador da coluna."),t()()(),n(4637,"tr",16)(4638,"td",17)(4639,"div",25)(4640,"span",26),e(4641," type"),i(4642,"br"),t()()(),n(4643,"td",21)(4644,"code",27),e(4645,"string"),t()(),n(4646,"td",24)(4647,"em")(4648,"strong"),e(4649,"(opcional)"),t()(),n(4650,"p"),e(4651,"Tipo da coluna:"),t(),n(4652,"ul")(4653,"li"),e(4654,"string (padr\xE3o): textos"),t(),n(4655,"li"),e(4656,"number: valores num\xE9ricos"),t(),n(4657,"li"),e(4658,"date: data"),t(),n(4659,"li"),e(4660,"currency: valores monet\xE1rios"),t(),n(4661,"li"),e(4662,"dateTime: data e hora"),t()()()(),n(4663,"tr",16)(4664,"td",17)(4665,"div",25)(4666,"span",26),e(4667," width"),i(4668,"br"),t()()(),n(4669,"td",21)(4670,"code",27),e(4671,"string"),t()(),n(4672,"td",24)(4673,"em")(4674,"strong"),e(4675,"(opcional)"),t()(),n(4676,"p"),e(4677,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),n(4678,"h4",42)(4679,"code",5),e(4680,"PoLookupFilter"),t()(),n(4681,"div",2)(4682,"p"),e(4683,"Define o tipo de busca utilizado no po-lookup."),t()(),n(4684,"h4",12),e(4685,"M\xE9todos"),t(),n(4686,"table",40)(4687,"tr",16)(4688,"th",41)(4689,"div",25)(4690,"h4")(4691,"span",26),e(4692," getFilteredItems "),t()()()()(),n(4693,"tr",24)(4694,"td",24)(4695,"p"),e(4696,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),n(4697,"em"),e(4698,"Observable"),t(),e(4699," com a resposta da API no formato da interface "),n(4700,"code"),e(4701,"PoLookupResponseApi"),t(),e(4702,"."),t()()()(),n(4703,"h5")(4704,"b"),e(4705,"Par\xE2metros"),t()(),n(4706,"table",13)(4707,"tr",14)(4708,"th",15),e(4709,"Nome"),t(),n(4710,"th",15),e(4711,"Tipo"),t(),n(4712,"th",15),e(4713,"Descri\xE7\xE3o"),t()(),n(4714,"tr",16)(4715,"td",17),e(4716," params"),t(),n(4717,"td",21)(4718,"code",76),e(4719," PoLookupFilteredItemsParams "),t()(),n(4720,"td",24)(4721,"p"),e(4722,"Objeto enviado por par\xE2metro que implementa a interface "),n(4723,"code"),e(4724,"PoLookupFilteredItemsParams"),t(),e(4725,"."),t()()()(),i(4726,"br"),n(4727,"table",40)(4728,"tr",16)(4729,"th",41)(4730,"div",25)(4731,"h4")(4732,"span",26),e(4733," getObjectByValue "),t()()()()(),n(4734,"tr",24)(4735,"td",24)(4736,"p"),e(4737,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),n(4738,"p"),e(4739,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),n(4740,"h5")(4741,"b"),e(4742,"Par\xE2metros"),t()(),n(4743,"table",13)(4744,"tr",14)(4745,"th",15),e(4746,"Nome"),t(),n(4747,"th",15),e(4748,"Tipo"),t(),n(4749,"th",15),e(4750,"Descri\xE7\xE3o"),t()(),n(4751,"tr",16)(4752,"td",17),e(4753," value"),t(),n(4754,"td",21)(4755,"code",27),e(4756," string "),t(),n(4757,"code",70),e(4758," Array<any> "),t()(),n(4759,"td",24)(4760,"p"),e(4761,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),n(4762,"tr",16)(4763,"td",17),e(4764," filterParams"),t(),n(4765,"td",21)(4766,"code",76),e(4767," any "),t()(),n(4768,"td",24)(4769,"p"),e(4770,"Valor informado atrav\xE9s da propriedade "),n(4771,"code"),e(4772,"p-filter-params"),t(),e(4773,"."),t()()()(),i(4774,"br"),n(4775,"h4",42)(4776,"code",5),e(4777,"PoLookupFilteredItemsParams"),t()(),n(4778,"div",2)(4779,"p"),e(4780,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),n(4781,"code"),e(4782,"getFilteredItems"),t(),e(4783,"."),t()(),n(4784,"h4",12),e(4785,"Propriedades"),t(),n(4786,"table",13)(4787,"tr",14)(4788,"th",15),e(4789,"Nome"),t(),n(4790,"th",15),e(4791,"Tipo"),t(),n(4792,"th",15),e(4793,"Descri\xE7\xE3o"),t()(),n(4794,"tr",16)(4795,"td",17)(4796,"div",25)(4797,"span",26),e(4798," advancedFilters"),i(4799,"br"),t()()(),n(4800,"td",21)(4801,"code",77),e(4802,`{ [key: string]: any;
}`),t()(),n(4803,"td",24)(4804,"em")(4805,"strong"),e(4806,"(opcional)"),t()(),n(4807,"p"),e(4808,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),n(4809,"tr",16)(4810,"td",17)(4811,"div",25)(4812,"span",26),e(4813," filter"),i(4814,"br"),t()()(),n(4815,"td",21)(4816,"code",27),e(4817,"string"),t()(),n(4818,"td",24)(4819,"em")(4820,"strong"),e(4821,"(opcional)"),t()(),n(4822,"p"),e(4823,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),n(4824,"tr",16)(4825,"td",17)(4826,"div",25)(4827,"span",26),e(4828," filterParams"),i(4829,"br"),t()()(),n(4830,"td",21)(4831,"code",33),e(4832,"any"),t()(),n(4833,"td",24)(4834,"em")(4835,"strong"),e(4836,"(opcional)"),t()(),n(4837,"p"),e(4838,"Valor informado atrav\xE9s da propriedade "),n(4839,"code"),e(4840,"p-filter-params"),t(),e(4841,"."),t()()(),n(4842,"tr",16)(4843,"td",17)(4844,"div",25)(4845,"span",26),e(4846," order"),i(4847,"br"),t()()(),n(4848,"td",21)(4849,"code",27),e(4850,"string"),t()(),n(4851,"td",24)(4852,"em")(4853,"strong"),e(4854,"(opcional)"),t()(),n(4855,"p"),e(4856,"Coluna que est\xE1 sendo ordenada na tabela."),t(),n(4857,"ul")(4858,"li"),e(4859,"Coluna decrescente ser\xE1 informada da seguinte forma: "),n(4860,"code"),e(4861,"-<colunaOrdenada>"),t(),e(4862,", por exemplo "),n(4863,"code"),e(4864,"-name"),t(),e(4865,"."),t(),n(4866,"li"),e(4867,"Coluna ascendente ser\xE1 informada da seguinte forma: "),n(4868,"code"),e(4869,"<colunaOrdenada>"),t(),e(4870,", por exemplo "),n(4871,"code"),e(4872,"name"),t(),e(4873,"."),t()()()(),n(4874,"tr",16)(4875,"td",17)(4876,"div",25)(4877,"span",26),e(4878," page"),i(4879,"br"),t()()(),n(4880,"td",21)(4881,"code",44),e(4882,"number"),t()(),n(4883,"td",24)(4884,"em")(4885,"strong"),e(4886,"(opcional)"),t()(),n(4887,"p"),e(4888,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),n(4889,"tr",16)(4890,"td",17)(4891,"div",25)(4892,"span",26),e(4893," pageSize"),i(4894,"br"),t()()(),n(4895,"td",21)(4896,"code",44),e(4897,"number"),t()(),n(4898,"td",24)(4899,"em")(4900,"strong"),e(4901,"(opcional)"),t()(),n(4902,"p"),e(4903,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),n(4904,"h4",42)(4905,"code",5),e(4906,"PoLookupLiterals"),t()(),n(4907,"div",2)(4908,"p"),e(4909,"Interface para defini\xE7\xE3o das literais usadas no "),n(4910,"code"),e(4911,"po-lookup"),t(),e(4912,"."),t()(),n(4913,"h4",12),e(4914,"Propriedades"),t(),n(4915,"table",13)(4916,"tr",14)(4917,"th",15),e(4918,"Nome"),t(),n(4919,"th",15),e(4920,"Tipo"),t(),n(4921,"th",15),e(4922,"Descri\xE7\xE3o"),t()(),n(4923,"tr",16)(4924,"td",17)(4925,"div",25)(4926,"span",26),e(4927," clean"),i(4928,"br"),t()()(),n(4929,"td",21)(4930,"code",27),e(4931,"string"),t()(),n(4932,"td",24)(4933,"em")(4934,"strong"),e(4935,"(opcional)"),t()(),n(4936,"p"),e(4937,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),n(4938,"tr",16)(4939,"td",17)(4940,"div",25)(4941,"span",26),e(4942," modalAdvancedSearch"),i(4943,"br"),t()()(),n(4944,"td",21)(4945,"code",27),e(4946,"string"),t()(),n(4947,"td",24)(4948,"em")(4949,"strong"),e(4950,"(opcional)"),t()(),n(4951,"p"),e(4952,"Texto do link de busca avan\xE7ada."),t(),n(4953,"p"),e(4954,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),n(4955,"tr",16)(4956,"td",17)(4957,"div",25)(4958,"span",26),e(4959," modalAdvancedSearchPrimaryActionLabel"),i(4960,"br"),t()()(),n(4961,"td",21)(4962,"code",27),e(4963,"string"),t()(),n(4964,"td",24)(4965,"em")(4966,"strong"),e(4967,"(opcional)"),t()(),n(4968,"p"),e(4969,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),n(4970,"tr",16)(4971,"td",17)(4972,"div",25)(4973,"span",26),e(4974," modalAdvancedSearchSecondaryActionLabel"),i(4975,"br"),t()()(),n(4976,"td",21)(4977,"code",27),e(4978,"string"),t()(),n(4979,"td",24)(4980,"em")(4981,"strong"),e(4982,"(opcional)"),t()(),n(4983,"p"),e(4984,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),n(4985,"tr",16)(4986,"td",17)(4987,"div",25)(4988,"span",26),e(4989," modalAdvancedSearchTitle"),i(4990,"br"),t()()(),n(4991,"td",21)(4992,"code",27),e(4993,"string"),t()(),n(4994,"td",24)(4995,"em")(4996,"strong"),e(4997,"(opcional)"),t()(),n(4998,"p"),e(4999,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),n(5e3,"tr",16)(5001,"td",17)(5002,"div",25)(5003,"span",26),e(5004," modalDisclaimerGroupTitle"),i(5005,"br"),t()()(),n(5006,"td",21)(5007,"code",27),e(5008,"string"),t()(),n(5009,"td",24)(5010,"em")(5011,"strong"),e(5012,"(opcional)"),t()(),n(5013,"p"),e(5014,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),n(5015,"tr",16)(5016,"td",17)(5017,"div",25)(5018,"span",26),e(5019," modalPlaceholder"),i(5020,"br"),t()()(),n(5021,"td",21)(5022,"code",27),e(5023,"string"),t()(),n(5024,"td",24)(5025,"em")(5026,"strong"),e(5027,"(opcional)"),t()(),n(5028,"p"),e(5029,"Texto exibido no placeholder do input da modal."),t()()(),n(5030,"tr",16)(5031,"td",17)(5032,"div",25)(5033,"span",26),e(5034," modalPrimaryActionLabel"),i(5035,"br"),t()()(),n(5036,"td",21)(5037,"code",27),e(5038,"string"),t()(),n(5039,"td",24)(5040,"em")(5041,"strong"),e(5042,"(opcional)"),t()(),n(5043,"p"),e(5044,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),n(5045,"tr",16)(5046,"td",17)(5047,"div",25)(5048,"span",26),e(5049," modalSecondaryActionLabel"),i(5050,"br"),t()()(),n(5051,"td",21)(5052,"code",27),e(5053,"string"),t()(),n(5054,"td",24)(5055,"em")(5056,"strong"),e(5057,"(opcional)"),t()(),n(5058,"p"),e(5059,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),n(5060,"tr",16)(5061,"td",17)(5062,"div",25)(5063,"span",26),e(5064," modalTableLoadMoreData"),i(5065,"br"),t()()(),n(5066,"td",21)(5067,"code",27),e(5068,"string"),t()(),n(5069,"td",24)(5070,"em")(5071,"strong"),e(5072,"(opcional)"),t()(),n(5073,"p"),e(5074,"Label do "),n(5075,"code"),e(5076,"button"),t(),e(5077," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),n(5078,"tr",16)(5079,"td",17)(5080,"div",25)(5081,"span",26),e(5082," modalTableLoadingData"),i(5083,"br"),t()()(),n(5084,"td",21)(5085,"code",27),e(5086,"string"),t()(),n(5087,"td",24)(5088,"em")(5089,"strong"),e(5090,"(opcional)"),t()(),n(5091,"p"),e(5092,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),n(5093,"tr",16)(5094,"td",17)(5095,"div",25)(5096,"span",26),e(5097," modalTableNoColumns"),i(5098,"br"),t()()(),n(5099,"td",21)(5100,"code",27),e(5101,"string"),t()(),n(5102,"td",24)(5103,"em")(5104,"strong"),e(5105,"(opcional)"),t()(),n(5106,"p"),e(5107,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),n(5108,"tr",16)(5109,"td",17)(5110,"div",25)(5111,"span",26),e(5112," modalTableNoData"),i(5113,"br"),t()()(),n(5114,"td",21)(5115,"code",27),e(5116,"string"),t()(),n(5117,"td",24)(5118,"em")(5119,"strong"),e(5120,"(opcional)"),t()(),n(5121,"p"),e(5122,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),n(5123,"tr",16)(5124,"td",17)(5125,"div",25)(5126,"span",26),e(5127," modalTitle"),i(5128,"br"),t()()(),n(5129,"td",21)(5130,"code",27),e(5131,"string"),t()(),n(5132,"td",24)(5133,"em")(5134,"strong"),e(5135,"(opcional)"),t()(),n(5136,"p"),e(5137,"Texto exibido no t\xEDtulo da modal."),t()()(),n(5138,"tr",16)(5139,"td",17)(5140,"div",25)(5141,"span",26),e(5142," search"),i(5143,"br"),t()()(),n(5144,"td",21)(5145,"code",27),e(5146,"string"),t()(),n(5147,"td",24)(5148,"em")(5149,"strong"),e(5150,"(opcional)"),t()(),n(5151,"p"),e(5152,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),n(5153,"h4",42)(5154,"code",5),e(5155,"PoLookupResponseApi"),t()(),n(5156,"div",2)(5157,"p"),e(5158,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),n(5159,"h4",12),e(5160,"Propriedades"),t(),n(5161,"table",13)(5162,"tr",14)(5163,"th",15),e(5164,"Nome"),t(),n(5165,"th",15),e(5166,"Tipo"),t(),n(5167,"th",15),e(5168,"Descri\xE7\xE3o"),t()(),n(5169,"tr",16)(5170,"td",17)(5171,"div",25)(5172,"span",26),e(5173," hasNext"),i(5174,"br"),t()()(),n(5175,"td",21)(5176,"code",29),e(5177,"boolean"),t()(),n(5178,"td",24)(5179,"p"),e(5180,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),n(5181,"tr",16)(5182,"td",17)(5183,"div",25)(5184,"span",26),e(5185," items"),i(5186,"br"),t()()(),n(5187,"td",21)(5188,"code",78),e(5189,"Array<object>"),t()(),n(5190,"td",24)(5191,"p"),e(5192,"Lista de itens retornados."),t()()()(),n(5193,"h3"),e(5194,"Enums"),t(),n(5195,"h4",4)(5196,"code",5),e(5197,"PoTableColumnSpacing"),t()(),n(5198,"div",2)(5199,"p"),e(5200,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),n(5201,"strong"),e(5202,"p-spacing"),t(),e(5203,") do po-table."),t()(),n(5204,"h4",12),e(5205,"Propriedades"),t(),n(5206,"table",13)(5207,"tr",14)(5208,"th",15),e(5209,"Nome"),t(),n(5210,"th",15),e(5211,"Descri\xE7\xE3o"),t()(),n(5212,"tr",16)(5213,"td",17)(5214,"div",25)(5215,"span",26),e(5216," ExtraSmall"),i(5217,"br"),t()()(),n(5218,"td",24)(5219,"p"),e(5220,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 1rem (horizontal)."),t()()(),n(5221,"tr",16)(5222,"td",17)(5223,"div",25)(5224,"span",26),e(5225," Small"),i(5226,"br"),t()()(),n(5227,"td",24)(5228,"p"),e(5229,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),n(5230,"tr",16)(5231,"td",17)(5232,"div",25)(5233,"span",26),e(5234," Medium"),i(5235,"br"),t()()(),n(5236,"td",24)(5237,"p"),e(5238,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),n(5239,"tr",16)(5240,"td",17)(5241,"div",25)(5242,"span",26),e(5243," Large"),i(5244,"br"),t()()(),n(5245,"td",24)(5246,"p"),e(5247,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Ne=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ne(ve),ne(he))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-lookup-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Pe,C,k,we,Me,_e,Ae,Ve,ze,He],encapsulation:2})}return a})();var ut=[{path:"",component:Ne}],Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[ae.forChild(ut),ae]})}return a})();var Mn=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=Q({type:a});static \u0275inj=G({imports:[Le,Be]})}return a})();export{Mn as DocPoLookupModule};
