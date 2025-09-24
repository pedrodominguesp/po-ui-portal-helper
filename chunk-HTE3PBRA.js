import{o as C,p as oe}from"./chunk-QBCDRFNO.js";import{Ea as M,Ga as ee,La as L,P as Z,R as $,Ra as te,Wa as ne,mb as ie,v as H,yb as v,zb as y}from"./chunk-3RSXW52V.js";import{Bb as _,Ca as w,Cc as W,Dc as T,Ec as z,Fc as N,Gc as q,Jc as U,Ka as n,Kc as J,La as t,M as F,Ma as o,Oc as K,P as G,Qa as O,Ra as g,T as s,Tc as X,U as c,Vc as Y,Xc as I,ab as Q,bb as e,db as D,fb as h,gb as b,hb as S,ia as m,ja as A,kb as P,pa as x,qa as B,za as E,zc as V}from"./chunk-4WWO4UYO.js";var ae=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&o(0,"po-decimal",0)},dependencies:[M],encapsulation:2})}return l})();var Se=l=>({"docs-sample-code-tabs":l}),le=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,Se,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,ae],encapsulation:2})}return l})();var me=(()=>{class l{additionalHelpTooltip;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.additionalHelpTooltip="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs"]],standalone:!1,decls:23,vars:44,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=O();n(0,"po-decimal",1),S("ngModelChange",function(a){return s(d),b(i.decimal,a)||(i.decimal=a),c(a)}),g("p-blur",function(){return s(d),c(i.changeEvent("p-blur"))})("p-change",function(){return s(d),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(d),c(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(d),c(i.changeEvent("p-keydown"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"po-input",5),S("ngModelChange",function(a){return s(d),b(i.label,a)||(i.label=a),c(a)}),t(),n(9,"po-input",6),S("ngModelChange",function(a){return s(d),b(i.help,a)||(i.help=a),c(a)}),t(),n(10,"po-input",7),S("ngModelChange",function(a){return s(d),b(i.additionalHelpTooltip,a)||(i.additionalHelpTooltip=a),c(a)}),t(),n(11,"po-input",8),S("ngModelChange",function(a){return s(d),b(i.placeholder,a)||(i.placeholder=a),c(a)}),t(),n(12,"po-input",9),S("ngModelChange",function(a){return s(d),b(i.errorPattern,a)||(i.errorPattern=a),c(a)}),t(),n(13,"po-select",10),S("ngModelChange",function(a){return s(d),b(i.icon,a)||(i.icon=a),c(a)}),t(),n(14,"po-number",11),S("ngModelChange",function(a){return s(d),b(i.min,a)||(i.min=a),c(a)}),t(),n(15,"po-number",12),S("ngModelChange",function(a){return s(d),b(i.max,a)||(i.max=a),c(a)}),t(),n(16,"po-select",13),S("ngModelChange",function(a){return s(d),b(i.locale,a)||(i.locale=a),c(a)}),t(),n(17,"po-number",14),S("ngModelChange",function(a){return s(d),b(i.decimalsLength,a)||(i.decimalsLength=a),c(a)}),t(),n(18,"po-number",15),S("ngModelChange",function(a){return s(d),b(i.thousandMaxlength,a)||(i.thousandMaxlength=a),c(a)}),t(),n(19,"po-checkbox-group",16),S("ngModelChange",function(a){return s(d),b(i.properties,a)||(i.properties=a),c(a)}),t(),n(20,"po-radio-group",17),S("ngModelChange",function(a){return s(d),b(i.size,a)||(i.size=a),c(a)}),t(),n(21,"div",2)(22,"po-button",18),g("p-click",function(){return s(d),c(i.restore())}),t()()()}r&2&&(h("ngModel",i.decimal),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),E("p-value",i.decimal),m(),E("p-value",i.event),m(4),h("ngModel",i.label),m(),h("ngModel",i.help),m(),h("ngModel",i.additionalHelpTooltip),m(),h("ngModel",i.placeholder),m(),h("ngModel",i.errorPattern),m(),h("ngModel",i.icon),E("p-options",i.iconOptions),m(),h("ngModel",i.min),m(),h("ngModel",i.max),m(),h("ngModel",i.locale),E("p-options",i.localeOptions),m(),h("ngModel",i.decimalsLength),E("p-max",i.maxDecimalsLength),m(),h("ngModel",i.thousandMaxlength),E("p-max",i.maxThousandMaxlength),m(),h("ngModel",i.properties),E("p-options",i.propertiesOptions),m(),h("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[q,W,T,N,z,H,Z,$,M,ee,L,te,ne],encapsulation:2})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-decimal>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

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

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
  </po-number>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-labs"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,ve,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,me],encapsulation:2})}return l})();var pe=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let p=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/p;this.hourlyWage=r}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:!1,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=O();n(0,"form",null,0)(2,"div",1),e(3,"Calculate hourly wage"),t(),o(4,"hr"),n(5,"div",2)(6,"po-number",3),S("ngModelChange",function(a){return s(d),b(i.weekHours,a)||(i.weekHours=a),c(a)}),t(),n(7,"po-number",4),S("ngModelChange",function(a){return s(d),b(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),c(a)}),t()(),n(8,"div",2)(9,"po-number",5),S("ngModelChange",function(a){return s(d),b(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),c(a)}),t(),n(10,"po-decimal",6),S("ngModelChange",function(a){return s(d),b(i.salary,a)||(i.salary=a),c(a)}),g("p-change",function(){return s(d),c(i.calculate())}),t()(),n(11,"div",2)(12,"po-decimal",7),S("ngModelChange",function(a){return s(d),b(i.hourlyWage,a)||(i.hourlyWage=a),c(a)}),t()(),n(13,"div",2)(14,"po-button",8),g("p-click",function(){s(d);let a=Q(1);return c(a.reset())}),t(),n(15,"po-button",9),g("p-click",function(){return s(d),c(i.calculate())}),t()()()}r&2&&(m(6),h("ngModel",i.weekHours),m(),h("ngModel",i.workingDaysPerWeek),m(2),h("ngModel",i.quantityDaysPerMonth),m(),h("ngModel",i.salary),m(2),h("ngModel",i.hourlyWage),m(3),E("p-disabled",!i.hourlyWage))},dependencies:[q,W,T,N,z,H,M,L],encapsulation:2})}return l})();var we=l=>({"docs-sample-code-tabs":l}),se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <hr />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,we,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,pe],encapsulation:2})}return l})();var ce=(()=>{class l{formBuilder=G(K);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,V.required],salary:[null,V.required],weekHours:[null,V.required],workingDaysPerWeek:[null,V.required]})}calculate(){let{weekHours:p,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:d}=this.formCalculateHourlyWage.value,u=p/r*i,a=d/u;this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:!1,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),e(2,"Calculate hourly wage"),t(),o(3,"hr"),n(4,"div",2),o(5,"po-number",3)(6,"po-number",4),t(),n(7,"div",2),o(8,"po-number",5),n(9,"po-decimal",6),g("p-change",function(){return i.calculate()}),t()(),n(10,"div",2),o(11,"po-decimal",7),t(),n(12,"div",2)(13,"po-button",8),g("p-click",function(){return i.formCalculateHourlyWage.reset()}),t(),n(14,"po-button",9),g("p-click",function(){return i.calculate()}),t()()()),r&2&&(E("formGroup",i.formCalculateHourlyWage),m(14),E("p-disabled",i.formCalculateHourlyWage.invalid))},dependencies:[q,W,T,U,J,H,M,L],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),ue=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage Reactive Form"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <hr />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  formCalculateHourlyWage: UntypedFormGroup;

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage-reactive-form"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),E("ngClass",P(4,_e,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,ce],encapsulation:2})}return l})();var Ee=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-doc"]],standalone:!1,decls:1353,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDecimalComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," - O "),n(212,"code"),e(213,"po-decimal"),t(),e(214," \xE9 um "),n(215,"em"),e(216,"input"),t(),e(217," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),t(),n(218,"ul")(219,"li"),e(220,"Aceita apenas n\xFAmeros;"),t(),n(221,"li"),e(222,"Utiliza ',' como separador de decimal;"),t(),n(223,"li"),e(224,"Utiliza '.' para separa\xE7\xE3o de milhar;"),t(),n(225,"li"),e(226,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),t()(),n(227,"blockquote")(228,"p")(229,"strong"),e(230,"Importante:"),t(),e(231,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),n(232,"code"),e(233,"32 bits"),t(),e(234,`, e para que os valores comportem-se devidamente,
o `),n(235,"code"),e(236,"po-decimal"),t(),e(237,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),n(238,"code"),e(239,"p-decimals-length"),t(),e(240," e "),n(241,"code"),e(242,"p-thousand-maxlength"),t(),e(243,"."),t()()(),n(244,"div",8)(245,"h4",9),e(246,"Seletor"),t(),n(247,"pre",10),e(248,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-decimals-length="number"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-locale="string"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),t()(),n(249,"h4",11),e(250,"Propriedades"),t(),n(251,"table",12)(252,"tr",13)(253,"th",14),e(254,"Nome"),t(),n(255,"th",14),e(256,"Tipo"),t(),n(257,"th",14),e(258,"Padr\xE3o"),t(),n(259,"th",14),e(260,"Descri\xE7\xE3o"),t()(),n(261,"tr",15)(262,"td",16)(263,"div",17)(264,"span",18),e(265," (p-additional-help)"),o(266,"br"),t()(),n(267,"div",19),e(268,"Deprecated"),t()(),n(269,"td",20)(270,"code",21),e(271,"EventEmitter"),t()(),n(272,"td",22),e(273,"-"),t(),n(274,"td",23)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),n(278,"p"),e(279,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(280,"code"),e(281,"p-help"),t(),e(282,"."),t()()(),n(283,"tr",15)(284,"td",16)(285,"div",24)(286,"span",25),e(287," p-additional-help-tooltip"),o(288,"br"),t()(),n(289,"div",19),e(290,"Deprecated"),t()(),n(291,"td",20)(292,"code",26),e(293,"string"),t()(),n(294,"td",22),e(295,"-"),t(),n(296,"td",23)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,"Exibe um \xEDcone de ajuda adicional ao "),n(302,"code"),e(303,"p-help"),t(),e(304,`, com o texto desta propriedade no tooltip.
Se o evento `),n(305,"code"),e(306,"p-additional-help"),t(),e(307,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(308,"strong"),e(309,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(310,"blockquote")(311,"p"),e(312,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(313,"tr",15)(314,"td",16)(315,"div",24)(316,"span",25),e(317," p-append-in-body"),o(318,"br"),t()()(),n(319,"td",20)(320,"code",27),e(321,"boolean"),t()(),n(322,"td",22)(323,"p")(324,"code"),e(325,"false"),t()()(),n(326,"td",23)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),n(330,"p"),e(331,"Define que o tooltip ("),n(332,"code"),e(333,"p-additional-help-tooltip"),t(),e(334," e/ou "),n(335,"code"),e(336,"p-error-limit"),t(),e(337,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(338,"blockquote")(339,"p"),e(340,"Quando utilizado com "),n(341,"code"),e(342,"p-additional-help-tooltip"),t(),e(343,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(344,"tr",15)(345,"td",16)(346,"div",24)(347,"span",25),e(348," p-auto-focus"),o(349,"br"),t()()(),n(350,"td",20)(351,"code",27),e(352,"boolean"),t()(),n(353,"td",22)(354,"p")(355,"code"),e(356,"false"),t()()(),n(357,"td",23)(358,"em")(359,"strong"),e(360,"(opcional)"),t()(),n(361,"p"),e(362,"Aplica foco no elemento ao ser iniciado."),t(),n(363,"blockquote")(364,"p"),e(365,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(366,"tr",15)(367,"td",16)(368,"div",17)(369,"span",18),e(370," (p-blur)"),o(371,"br"),t()()(),n(372,"td",20)(373,"code",21),e(374,"EventEmitter"),t()(),n(375,"td",22),e(376,"-"),t(),n(377,"td",23)(378,"em")(379,"strong"),e(380,"(opcional)"),t()(),n(381,"p"),e(382,"Evento disparado ao sair do campo."),t()()(),n(383,"tr",15)(384,"td",16)(385,"div",17)(386,"span",18),e(387," (p-change)"),o(388,"br"),t()()(),n(389,"td",20)(390,"code",21),e(391,"EventEmitter"),t()(),n(392,"td",22),e(393,"-"),t(),n(394,"td",23)(395,"em")(396,"strong"),e(397,"(opcional)"),t()(),n(398,"p"),e(399,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(400,"tr",15)(401,"td",16)(402,"div",17)(403,"span",18),e(404," (p-change-model)"),o(405,"br"),t()()(),n(406,"td",20)(407,"code",21),e(408,"EventEmitter"),t()(),n(409,"td",22),e(410,"-"),t(),n(411,"td",23)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),n(415,"p"),e(416,"Evento disparado ao alterar valor do model."),t()()(),n(417,"tr",15)(418,"td",16)(419,"div",24)(420,"span",25),e(421,"p-clean"),o(422,"br"),t()()(),n(423,"td",20)(424,"code",27),e(425,"boolean"),t()(),n(426,"td",22),e(427,"-"),t(),n(428,"td",23)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(434,"tr",15)(435,"td",16)(436,"div",24)(437,"span",25),e(438," p-decimals-length"),o(439,"br"),t()()(),n(440,"td",20)(441,"code",28),e(442,"number"),t()(),n(443,"td",22)(444,"p")(445,"code"),e(446,"2"),t()()(),n(447,"td",23)(448,"em")(449,"strong"),e(450,"(opcional)"),t()(),n(451,"p"),e(452,"Quantidade m\xE1xima de casas decimais."),t(),n(453,"blockquote")(454,"p")(455,"strong"),e(456,"Importante:"),t()()(),n(457,"ul")(458,"li"),e(459,"O valor m\xE1ximo permitido \xE9 15;"),t(),n(460,"li"),e(461,"A soma total de "),n(462,"code"),e(463,"p-decimals-length"),t(),e(464," com "),n(465,"code"),e(466,"p-thousand-maxlength"),t(),e(467," limita-se \xE0 16;"),t(),n(468,"li"),e(469,"Esta propriedade sobrep\xF5e apenas o valor "),n(470,"strong"),e(471,"padr\xE3o"),t(),e(472," de "),n(473,"code"),e(474,"p-thousand-maxlength"),t(),e(475,";"),t(),n(476,"li"),e(477,"Caso "),n(478,"code"),e(479,"p-thousand-maxlength"),t(),e(480," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),t()()()(),n(481,"tr",15)(482,"td",16)(483,"div",24)(484,"span",25),e(485,"p-disabled"),o(486,"br"),t()()(),n(487,"td",20)(488,"code",27),e(489,"boolean"),t()(),n(490,"td",22)(491,"p")(492,"code"),e(493,"false"),t()()(),n(494,"td",23)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),n(498,"p"),e(499,"Se verdadeiro, desabilita o campo."),t()()(),n(500,"tr",15)(501,"td",16)(502,"div",24)(503,"span",25),e(504," p-emit-all-changes"),o(505,"br"),t()()(),n(506,"td",20)(507,"code",27),e(508,"boolean"),t()(),n(509,"td",22)(510,"p")(511,"code"),e(512,"false"),t()()(),n(513,"td",23)(514,"em")(515,"strong"),e(516,"(opcional)"),t()(),n(517,"p"),e(518,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(519,"tr",15)(520,"td",16)(521,"div",17)(522,"span",18),e(523," (p-enter)"),o(524,"br"),t()()(),n(525,"td",20)(526,"code",21),e(527,"EventEmitter"),t()(),n(528,"td",22),e(529,"-"),t(),n(530,"td",23)(531,"em")(532,"strong"),e(533,"(opcional)"),t()(),n(534,"p"),e(535,"Evento disparado ao entrar do campo."),t()()(),n(536,"tr",15)(537,"td",16)(538,"div",24)(539,"span",25),e(540," p-error-async-properties"),o(541,"br"),t()()(),n(542,"td",20)(543,"code",29),e(544,"ErrorAsyncProperties"),t()(),n(545,"td",22),e(546,"-"),t(),n(547,"td",23)(548,"em")(549,"strong"),e(550,"(opcional)"),t()(),n(551,"p"),e(552,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(553,"code"),e(554,"Reactive Forms"),t(),e(555,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(556,"code"),e(557,"asyncValidators"),t(),e(558,"."),t()()(),n(559,"tr",15)(560,"td",16)(561,"div",24)(562,"span",25),e(563," p-error-limit"),o(564,"br"),t()()(),n(565,"td",20)(566,"code",27),e(567,"boolean"),t()(),n(568,"td",22)(569,"p")(570,"code"),e(571,"false"),t()()(),n(572,"td",23)(573,"em")(574,"strong"),e(575,"(opcional)"),t()(),n(576,"p"),e(577,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(578,"blockquote")(579,"p"),e(580,"Caso essa propriedade seja definida como "),n(581,"code"),e(582,"true"),t(),e(583,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(584,"tr",15)(585,"td",16)(586,"div",24)(587,"span",25),e(588," p-error-pattern"),o(589,"br"),t()()(),n(590,"td",20)(591,"code",26),e(592,"string"),t()(),n(593,"td",22),e(594,"-"),t(),n(595,"td",23)(596,"em")(597,"strong"),e(598,"(opcional)"),t()(),n(599,"p"),e(600,"Mensagem que ser\xE1 apresentada quando o "),n(601,"code"),e(602,"pattern"),t(),e(603," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(604,"blockquote")(605,"p"),e(606,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(607,"code"),e(608,"p-required-field-error-message"),t(),e(609," em conjunto."),t()()()(),n(610,"tr",15)(611,"td",16)(612,"div",24)(613,"span",25),e(614," p-help"),o(615,"br"),t()()(),n(616,"td",20)(617,"code",26),e(618,"string"),t()(),n(619,"td",22),e(620,"-"),t(),n(621,"td",23)(622,"em")(623,"strong"),e(624,"(opcional)"),t()(),n(625,"p"),e(626,"Texto de apoio do campo."),t()()(),n(627,"tr",15)(628,"td",16)(629,"div",24)(630,"span",25),e(631," p-icon"),o(632,"br"),t()()(),n(633,"td",20)(634,"code",26),e(635,"string "),t(),n(636,"code",30),e(637," TemplateRef<void>"),t()(),n(638,"td",22),e(639,"-"),t(),n(640,"td",23)(641,"em")(642,"strong"),e(643,"(opcional)"),t()(),n(644,"p"),e(645,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(646,"p"),e(647,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(648,"a",31),e(649,"Biblioteca de \xEDcones"),t(),e(650,". conforme exemplo abaixo:"),t(),n(651,"pre")(652,"code"),e(653,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(654,"p"),e(655,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(656,"em"),e(657,"Font Awesome"),t(),e(658,", da seguinte forma:"),t(),n(659,"pre")(660,"code"),e(661,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(662,"p"),e(663,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(664,"code"),e(665,"TemplateRef"),t(),e(666,", conforme exemplo abaixo:"),t(),n(667,"pre")(668,"code"),e(669,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(670,"blockquote")(671,"p"),e(672,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(673,"code"),e(674,"font-size: inherit"),t(),e(675," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(676,"tr",15)(677,"td",16)(678,"div",17)(679,"span",18),e(680," (p-keydown)"),o(681,"br"),t()()(),n(682,"td",20)(683,"code",21),e(684,"EventEmitter"),t()(),n(685,"td",22),e(686,"-"),t(),n(687,"td",23)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),n(691,"p"),e(692,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(693,"code"),e(694,"KeyboardEvent"),t(),e(695," com informa\xE7\xF5es sobre a tecla."),t()()(),n(696,"tr",15)(697,"td",16)(698,"div",24)(699,"span",25),e(700," p-label"),o(701,"br"),t()()(),n(702,"td",20)(703,"code",26),e(704,"string"),t()(),n(705,"td",22),e(706,"-"),t(),n(707,"td",23)(708,"em")(709,"strong"),e(710,"(opcional)"),t()(),n(711,"p"),e(712,"R\xF3tulo do campo."),t()()(),n(713,"tr",15)(714,"td",16)(715,"div",24)(716,"span",25),e(717," p-label-text-wrap"),o(718,"br"),t()()(),n(719,"td",20)(720,"code",27),e(721,"boolean"),t()(),n(722,"td",22)(723,"p")(724,"code"),e(725,"false"),t()()(),n(726,"td",23)(727,"em")(728,"strong"),e(729,"(opcional)"),t()(),n(730,"p"),e(731,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(732,"code"),e(733,"p-label"),t(),e(734,". Quando "),n(735,"code"),e(736,"p-label-text-wrap"),t(),e(737,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(738,"tr",15)(739,"td",16)(740,"div",24)(741,"span",25),e(742," p-locale"),o(743,"br"),t()()(),n(744,"td",20)(745,"code",26),e(746,"string"),t()(),n(747,"td",22),e(748,"-"),t(),n(749,"td",23)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),n(753,"p"),e(754,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(755,"a",32)(756,"code"),e(757,"I18n"),t()()(),n(758,"blockquote")(759,"p"),e(760,"Para ver quais linguagens suportadas acesse "),n(761,"a",32)(762,"code"),e(763,"I18n"),t()()()()()(),n(764,"tr",15)(765,"td",16)(766,"div",24)(767,"span",25),e(768,"p-mask"),o(769,"br"),t()()(),n(770,"td",20)(771,"code",26),e(772,"string"),t()(),n(773,"td",22),e(774,"-"),t(),n(775,"td",23)(776,"em")(777,"strong"),e(778,"(opcional)"),t()(),n(779,"p"),e(780,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(781,"tr",15)(782,"td",16)(783,"div",24)(784,"span",25),e(785,"p-mask-format-model"),o(786,"br"),t()()(),n(787,"td",20)(788,"code",27),e(789,"boolean"),t()(),n(790,"td",22)(791,"p")(792,"code"),e(793,"false"),t()()(),n(794,"td",23)(795,"em")(796,"strong"),e(797,"(opcional)"),t()(),n(798,"p"),e(799,"Indica se o "),n(800,"code"),e(801,"model"),t(),e(802," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(803,"tr",15)(804,"td",16)(805,"div",24)(806,"span",25),e(807," p-mask-no-length-validation"),o(808,"br"),t()()(),n(809,"td",20)(810,"code",27),e(811,"boolean"),t()(),n(812,"td",22)(813,"p")(814,"code"),e(815,"false"),t()()(),n(816,"td",23)(817,"p"),e(818,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(819,"code"),e(820,"minLength"),t(),e(821,") e m\xE1ximo ("),n(822,"code"),e(823,"maxLength"),t(),e(824,") do campo."),t(),n(825,"ul")(826,"li"),e(827,"Quando "),n(828,"code"),e(829,"true"),t(),e(830,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(831,"li"),e(832,"Quando "),n(833,"code"),e(834,"false"),t(),e(835,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(836,"blockquote")(837,"p"),e(838,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(839,"code"),e(840,"p-mask-format-model"),t(),e(841,"."),t()(),n(842,"p"),e(843,"Exemplo:"),t(),n(844,"pre")(845,"code"),e(846,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(847,"ul")(848,"li"),e(849,"Entrada: "),n(850,"code"),e(851,"123-456"),t(),e(852," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(853,"code"),e(854,"-"),t(),e(855,"."),t()()()(),n(856,"tr",15)(857,"td",16)(858,"div",24)(859,"span",25),e(860," p-max"),o(861,"br"),t()()(),n(862,"td",20)(863,"code",28),e(864,"number"),t()(),n(865,"td",22),e(866,"-"),t(),n(867,"td",23)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),n(871,"p"),e(872,"Valor m\xE1ximo."),t()()(),n(873,"tr",15)(874,"td",16)(875,"div",24)(876,"span",25),e(877," p-maxlength"),o(878,"br"),t()()(),n(879,"td",20)(880,"code",28),e(881,"number"),t()(),n(882,"td",22),e(883,"-"),t(),n(884,"td",23)(885,"em")(886,"strong"),e(887,"(opcional)"),t()(),n(888,"p"),e(889,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(890,"tr",15)(891,"td",16)(892,"div",24)(893,"span",25),e(894," p-min"),o(895,"br"),t()()(),n(896,"td",20)(897,"code",28),e(898,"number"),t()(),n(899,"td",22),e(900,"-"),t(),n(901,"td",23)(902,"em")(903,"strong"),e(904,"(opcional)"),t()(),n(905,"p"),e(906,"Valor m\xEDnimo."),t()()(),n(907,"tr",15)(908,"td",16)(909,"div",24)(910,"span",25),e(911," p-minlength"),o(912,"br"),t()()(),n(913,"td",20)(914,"code",28),e(915,"number"),t()(),n(916,"td",22),e(917,"-"),t(),n(918,"td",23)(919,"em")(920,"strong"),e(921,"(opcional)"),t()(),n(922,"p"),e(923,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(924,"tr",15)(925,"td",16)(926,"div",24)(927,"span",25),e(928," name"),o(929,"br"),t()()(),n(930,"td",20)(931,"code",26),e(932,"string"),t()(),n(933,"td",22),e(934,"-"),t(),n(935,"td",23)(936,"p"),e(937,"Nome e identificador do campo."),t()()(),n(938,"tr",15)(939,"td",16)(940,"div",24)(941,"span",25),e(942," p-no-autocomplete"),o(943,"br"),t()()(),n(944,"td",20)(945,"code",27),e(946,"boolean"),t()(),n(947,"td",22)(948,"p")(949,"code"),e(950,"false"),t()()(),n(951,"td",23)(952,"em")(953,"strong"),e(954,"(opcional)"),t()(),n(955,"p"),e(956,"Define a propriedade nativa "),n(957,"code"),e(958,"autocomplete"),t(),e(959," do campo como "),n(960,"code"),e(961,"off"),t(),e(962,"."),t(),n(963,"blockquote")(964,"p"),e(965,"No componente "),n(966,"code"),e(967,"po-password"),t(),e(968," ser\xE1 definido como "),n(969,"code"),e(970,"new-password"),t(),e(971,"."),t()(),n(972,"p"),e(973,"Nos componentes "),n(974,"code"),e(975,"po-password"),t(),e(976," e "),n(977,"code"),e(978,"po-login"),t(),e(979," o valor padr\xE3o ser\xE1 "),n(980,"code"),e(981,"true"),t(),e(982,"."),t()()(),n(983,"tr",15)(984,"td",16)(985,"div",24)(986,"span",25),e(987," p-optional"),o(988,"br"),t()()(),n(989,"td",20)(990,"code",27),e(991,"boolean"),t()(),n(992,"td",22)(993,"p")(994,"code"),e(995,"false"),t()()(),n(996,"td",23)(997,"em")(998,"strong"),e(999,"(opcional)"),t()(),n(1e3,"p"),e(1001,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1002,"blockquote")(1003,"p"),e(1004,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1005,"ul")(1006,"li"),e(1007,"O campo conter "),n(1008,"code"),e(1009,"p-required"),t(),e(1010,";"),t(),n(1011,"li"),e(1012,"N\xE3o possuir "),n(1013,"code"),e(1014,"p-help"),t(),e(1015," e/ou "),n(1016,"code"),e(1017,"p-label"),t(),e(1018,"."),t()()()(),n(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),e(1023,"p-pattern"),o(1024,"br"),t()()(),n(1025,"td",20)(1026,"code",26),e(1027,"string"),t()(),n(1028,"td",22),e(1029,"-"),t(),n(1030,"td",23)(1031,"em")(1032,"strong"),e(1033,"(opcional)"),t()(),n(1034,"p"),e(1035,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1036,"code"),e(1037,"(p-mask)"),t(),e(1038,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1039,"tr",15)(1040,"td",16)(1041,"div",24)(1042,"span",25),e(1043," p-placeholder"),o(1044,"br"),t()()(),n(1045,"td",20)(1046,"code",26),e(1047,"string"),t()(),n(1048,"td",22)(1049,"p"),e(1050,"''"),t()(),n(1051,"td",23)(1052,"em")(1053,"strong"),e(1054,"(opcional)"),t()(),n(1055,"p"),e(1056,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1057,"tr",15)(1058,"td",16)(1059,"div",24)(1060,"span",25),e(1061," p-helper"),o(1062,"br"),t()()(),n(1063,"td",20)(1064,"code",33),e(1065,"PoHelperOptions"),t()(),n(1066,"td",22),e(1067,"-"),t(),n(1068,"td",23)(1069,"em")(1070,"strong"),e(1071,"(opcional)"),t()(),n(1072,"p"),e(1073,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(1074,"blockquote")(1075,"p"),e(1076,"Caso o "),n(1077,"code"),e(1078,"p-label"),t(),e(1079,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(1080,"code"),e(1081,"p-additional-help-tooltip"),t(),e(1082," e "),n(1083,"code"),e(1084,"p-additional-help"),t(),e(1085,") ser\xE1 ignorado."),t()()()(),n(1086,"tr",15)(1087,"td",16)(1088,"div",24)(1089,"span",25),e(1090,"p-readonly"),o(1091,"br"),t()()(),n(1092,"td",20)(1093,"code",27),e(1094,"boolean"),t()(),n(1095,"td",22),e(1096,"-"),t(),n(1097,"td",23)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),n(1101,"p"),e(1102,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1103,"tr",15)(1104,"td",16)(1105,"div",24)(1106,"span",25),e(1107,"p-required"),o(1108,"br"),t()()(),n(1109,"td",20)(1110,"code",27),e(1111,"boolean"),t()(),n(1112,"td",22)(1113,"p")(1114,"code"),e(1115,"false"),t()()(),n(1116,"td",23)(1117,"em")(1118,"strong"),e(1119,"(opcional)"),t()(),n(1120,"p"),e(1121,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1122,"blockquote")(1123,"p"),e(1124,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1125,"code"),e(1126,"(p-disabled)"),t(),e(1127,"."),t()()()(),n(1128,"tr",15)(1129,"td",16)(1130,"div",24)(1131,"span",25),e(1132," p-required-field-error-message"),o(1133,"br"),t()()(),n(1134,"td",20)(1135,"code",27),e(1136,"boolean"),t()(),n(1137,"td",22)(1138,"p")(1139,"code"),e(1140,"false"),t()()(),n(1141,"td",23)(1142,"em")(1143,"strong"),e(1144,"(opcional)"),t()(),n(1145,"p"),e(1146,"Exibe a mensagem setada na propriedade "),n(1147,"code"),e(1148,"p-error-pattern"),t(),e(1149," se o campo estiver vazio e for requerido."),t(),n(1150,"blockquote")(1151,"p"),e(1152,"Necess\xE1rio que a propriedade "),n(1153,"code"),e(1154,"p-required"),t(),e(1155," esteja habilitada."),t()()()(),n(1156,"tr",15)(1157,"td",16)(1158,"div",24)(1159,"span",25),e(1160," p-show-required"),o(1161,"br"),t()()(),n(1162,"td",20)(1163,"code",27),e(1164,"boolean"),t()(),n(1165,"td",22),e(1166,"-"),t(),n(1167,"td",23)(1168,"p"),e(1169,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1170,"blockquote")(1171,"p"),e(1172,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1173,"ul")(1174,"li"),e(1175,"N\xE3o possuir "),n(1176,"code"),e(1177,"p-help"),t(),e(1178," e/ou "),n(1179,"code"),e(1180,"p-label"),t(),e(1181,"."),t()()()(),n(1182,"tr",15)(1183,"td",16)(1184,"div",24)(1185,"span",25),e(1186," p-size"),o(1187,"br"),t()()(),n(1188,"td",20)(1189,"code",26),e(1190,"string"),t()(),n(1191,"td",22)(1192,"p")(1193,"code"),e(1194,"medium"),t()()(),n(1195,"td",23)(1196,"em")(1197,"strong"),e(1198,"(opcional)"),t()(),n(1199,"p"),e(1200,"Define o tamanho do componente:"),t(),n(1201,"ul")(1202,"li")(1203,"code"),e(1204,"small"),t(),e(1205,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1206,"li")(1207,"code"),e(1208,"medium"),t(),e(1209,": altura do input como 44px."),t()(),n(1210,"blockquote")(1211,"p"),e(1212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1213,"code"),e(1214,"medium"),t(),e(1215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1216,"a",34),e(1217,"po-theme"),t(),e(1218,"."),t()()()(),n(1219,"tr",15)(1220,"td",16)(1221,"div",24)(1222,"span",25),e(1223," p-thousand-maxlength"),o(1224,"br"),t()()(),n(1225,"td",20)(1226,"code",28),e(1227,"number"),t()(),n(1228,"td",22)(1229,"p")(1230,"code"),e(1231,"13"),t()()(),n(1232,"td",23)(1233,"em")(1234,"strong"),e(1235,"(opcional)"),t()(),n(1236,"p"),e(1237,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),t(),n(1238,"blockquote")(1239,"p")(1240,"strong"),e(1241,"Importante:"),t()()(),n(1242,"ul")(1243,"li"),e(1244,"O valor m\xE1ximo permitido \xE9 13;"),t(),n(1245,"li"),e(1246,"A soma total de "),n(1247,"code"),e(1248,"p-decimals-length"),t(),e(1249," com "),n(1250,"code"),e(1251,"p-thousand-maxlength"),t(),e(1252," limita-se \xE0 16;"),t(),n(1253,"li"),e(1254,"Esta propriedade sobrep\xF5e o valor definido em "),n(1255,"code"),e(1256,"p-decimals-length"),t(),e(1257,"."),t()()()(),n(1258,"tr",15)(1259,"td",16)(1260,"div",24)(1261,"span",25),e(1262," p-upper-case"),o(1263,"br"),t()()(),n(1264,"td",20)(1265,"code",27),e(1266,"boolean"),t()(),n(1267,"td",22),e(1268,"-"),t(),n(1269,"td",23)(1270,"p"),e(1271,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1272,"h3",11),e(1273,"M\xE9todos"),t(),n(1274,"table",35)(1275,"tr",15)(1276,"th",36)(1277,"div",24)(1278,"h4")(1279,"span",25),e(1280," focus "),t()()()()(),n(1281,"tr",23)(1282,"td",23)(1283,"p"),e(1284,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1285,"p"),e(1286,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1287,"pre")(1288,"code"),e(1289,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1290,"br"),n(1291,"h3"),e(1292,"Interfaces"),t(),n(1293,"h4",37)(1294,"code",5),e(1295,"ErrorAsyncProperties"),t()(),n(1296,"div",2)(1297,"p"),e(1298,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1299,"h4",11),e(1300,"Propriedades"),t(),n(1301,"table",12)(1302,"tr",13)(1303,"th",14),e(1304,"Nome"),t(),n(1305,"th",14),e(1306,"Tipo"),t(),n(1307,"th",14),e(1308,"Descri\xE7\xE3o"),t()(),n(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),e(1313," errorAsync"),o(1314,"br"),t()()(),n(1315,"td",20)(1316,"code",38),e(1317,"(value) => Observable<boolean>"),t()(),n(1318,"td",23)(1319,"p"),e(1320,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1321,"code"),e(1322,"change"),t(),e(1323," ou "),n(1324,"code"),e(1325,"change-model"),t(),e(1326,", dependendo do valor da propriedade "),n(1327,"code"),e(1328,"triggerMode"),t(),e(1329,"."),t()()(),n(1330,"tr",15)(1331,"td",16)(1332,"div",24)(1333,"span",25),e(1334," triggerMode"),o(1335,"br"),t()()(),n(1336,"td",20)(1337,"code",39),e(1338,"'change' "),t(),n(1339,"code",40),e(1340," 'changeModel'"),t()(),n(1341,"td",23)(1342,"em")(1343,"strong"),e(1344,"(opcional)"),t()(),n(1345,"p"),e(1346,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1347,"code"),e(1348,"change"),t(),e(1349," ou "),n(1350,"code"),e(1351,"change-model"),t(),e(1352,"."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var ge=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(A(X),A(Y))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-decimal-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),t()()()),r&2&&(E("p-actions",i.actions),m(2),E("p-active",i.activeTab==="doc"),m(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ie,v,y,le,de,se,ue,Ee],encapsulation:2})}return l})();var We=[{path:"",component:ge}],he=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=B({type:l});static \u0275inj=F({imports:[I.forChild(We),I]})}return l})();var rt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=B({type:l});static \u0275inj=F({imports:[oe,he]})}return l})();export{rt as DocPoDecimalModule};
