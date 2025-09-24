import{o as y,p as Y}from"./chunk-QBCDRFNO.js";import{Ga as K,La as q,P as Q,R as U,Ra as B,Wa as X,mb as J,v as O,yb as v,zb as C}from"./chunk-3RSXW52V.js";import{Bb as P,Ca as _,Cc as V,Dc as L,Ec as W,Fc as F,Gc as z,Ka as n,La as t,M as N,Ma as a,Qa as D,Ra as x,T as s,Tc as j,U as u,Vc as G,Xc as H,ab as I,bb as e,db as w,fb as b,gb as E,hb as g,ia as m,ja as A,kb as M,pa as h,qa as k,za as S}from"./chunk-4WWO4UYO.js";var Z=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&a(0,"po-number",0)},dependencies:[q],encapsulation:2})}return l})();var pe=l=>({"docs-sample-code-tabs":l}),ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-basic/sample-po-number-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-basic"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,pe,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,Z],encapsulation:2})}return l})();var te=(()=>{class l{additionalHelpTooltip;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-labs"]],standalone:!1,decls:23,vars:41,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=D();n(0,"po-number",1),g("ngModelChange",function(o){return s(p),E(i.number,o)||(i.number=o),u(o)}),x("p-blur",function(){return s(p),u(i.changeEvent("p-blur"))})("p-change",function(){return s(p),u(i.changeEvent("p-change"))})("p-change-model",function(){return s(p),u(i.changeEvent("p-change-model"))})("p-keydown",function(){return s(p),u(i.changeEvent("p-keydown"))}),t(),a(1,"hr"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(o){return s(p),E(i.label,o)||(i.label=o),u(o)}),t(),n(9,"po-input",6),g("ngModelChange",function(o){return s(p),E(i.help,o)||(i.help=o),u(o)}),t(),n(10,"po-input",7),g("ngModelChange",function(o){return s(p),E(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),u(o)}),t(),n(11,"po-input",8),g("ngModelChange",function(o){return s(p),E(i.placeholder,o)||(i.placeholder=o),u(o)}),t(),n(12,"po-input",9),g("ngModelChange",function(o){return s(p),E(i.messageErrorPattern,o)||(i.messageErrorPattern=o),u(o)}),t(),n(13,"po-number",10),g("ngModelChange",function(o){return s(p),E(i.min,o)||(i.min=o),u(o)}),t(),n(14,"po-number",11),g("ngModelChange",function(o){return s(p),E(i.minlength,o)||(i.minlength=o),u(o)}),t(),n(15,"po-number",12),g("ngModelChange",function(o){return s(p),E(i.max,o)||(i.max=o),u(o)}),t(),n(16,"po-number",13),g("ngModelChange",function(o){return s(p),E(i.maxlength,o)||(i.maxlength=o),u(o)}),t(),n(17,"po-number",14),g("ngModelChange",function(o){return s(p),E(i.step,o)||(i.step=o),u(o)}),t(),n(18,"po-select",15),g("ngModelChange",function(o){return s(p),E(i.icon,o)||(i.icon=o),u(o)}),t(),n(19,"po-checkbox-group",16),g("ngModelChange",function(o){return s(p),E(i.properties,o)||(i.properties=o),u(o)}),t(),n(20,"po-radio-group",17),g("ngModelChange",function(o){return s(p),E(i.size,o)||(i.size=o),u(o)}),t(),n(21,"div",2)(22,"po-button",18),x("p-click",function(){return s(p),u(i.restore())}),t()()()}r&2&&(b("ngModel",i.number),S("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),m(3),S("p-value",i.number),m(),S("p-value",i.event),m(4),b("ngModel",i.label),m(),b("ngModel",i.help),m(),b("ngModel",i.additionalHelpTooltip),m(),b("ngModel",i.placeholder),m(),b("ngModel",i.messageErrorPattern),m(),b("ngModel",i.min),m(),b("ngModel",i.minlength),m(),b("ngModel",i.max),m(),b("ngModel",i.maxlength),m(),b("ngModel",i.step),m(),b("ngModel",i.icon),S("p-options",i.iconOptions),m(),b("ngModel",i.properties),S("p-options",i.propertiesOptions),m(),b("ngModel",i.size),S("p-options",i.sizeOptions))},dependencies:[z,V,L,F,W,O,Q,U,K,q,B,X],encapsulation:2})}return l})();var ce=l=>({"docs-sample-code-tabs":l}),ne=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-labs/sample-po-number-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-number>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
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

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
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

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-labs"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,ce,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,te],encapsulation:2})}return l})();var ie=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-calculate"]],standalone:!1,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=D();n(0,"h3"),e(1,"Calculate Tax"),t(),a(2,"hr"),n(3,"form",null,0)(5,"div",1)(6,"po-number",2),g("ngModelChange",function(o){return s(p),E(i.price,o)||(i.price=o),u(o)}),t(),n(7,"po-number",3),g("ngModelChange",function(o){return s(p),E(i.quantity,o)||(i.quantity=o),u(o)}),t()(),n(8,"div")(9,"po-select",4),g("ngModelChange",function(o){return s(p),E(i.state,o)||(i.state=o),u(o)}),x("p-change",function(){return s(p),u(i.loadICMS())}),t(),n(10,"po-number",5),g("ngModelChange",function(o){return s(p),E(i.icms,o)||(i.icms=o),u(o)}),t(),n(11,"po-number",6),g("ngModelChange",function(o){return s(p),E(i.liquid,o)||(i.liquid=o),u(o)}),t(),n(12,"po-number",7),g("ngModelChange",function(o){return s(p),E(i.total,o)||(i.total=o),u(o)}),t()(),n(13,"div",1)(14,"po-button",8),x("p-click",function(){return s(p),u(i.calculate())}),t(),n(15,"po-button",9),x("p-click",function(){s(p);let o=I(4);return u(o.reset())}),t()()()}if(r&2){let p=I(4);m(6),b("ngModel",i.price),m(),b("ngModel",i.quantity),m(2),b("ngModel",i.state),S("p-options",i.statesOptions),m(),b("ngModel",i.icms),m(),b("ngModel",i.liquid),m(),b("ngModel",i.total),m(2),S("p-disabled",p.invalid),m(),S("p-disabled",p.invalid)}},dependencies:[z,V,L,F,W,O,q,B],encapsulation:2})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number - Calculate"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),t(),n(13,"pre",7),e(14,`<h3>Calculate Tax</h3>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-calculate"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel,""),m(),S("ngClass",M(4,ge,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,ie],encapsulation:2})}return l})();var ae=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=h({type:l,selectors:[["sample-po-number-doc"]],standalone:!1,decls:1242,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoNumberComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),a(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),a(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),a(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),a(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),a(210,"br"),e(211," O "),n(212,"code"),e(213,"po-number"),t(),e(214,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
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
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),a(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(251,"code"),e(252,"p-help"),t(),e(253,"."),t()()(),n(254,"tr",15)(255,"td",16)(256,"div",24)(257,"span",25),e(258," p-additional-help-tooltip"),a(259,"br"),t()(),n(260,"div",19),e(261,"Deprecated"),t()(),n(262,"td",20)(263,"code",26),e(264,"string"),t()(),n(265,"td",22),e(266,"-"),t(),n(267,"td",23)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),n(271,"p"),e(272,"Exibe um \xEDcone de ajuda adicional ao "),n(273,"code"),e(274,"p-help"),t(),e(275,`, com o texto desta propriedade no tooltip.
Se o evento `),n(276,"code"),e(277,"p-additional-help"),t(),e(278,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(279,"strong"),e(280,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(281,"blockquote")(282,"p"),e(283,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(284,"tr",15)(285,"td",16)(286,"div",24)(287,"span",25),e(288," p-append-in-body"),a(289,"br"),t()()(),n(290,"td",20)(291,"code",27),e(292,"boolean"),t()(),n(293,"td",22)(294,"p")(295,"code"),e(296,"false"),t()()(),n(297,"td",23)(298,"em")(299,"strong"),e(300,"(opcional)"),t()(),n(301,"p"),e(302,"Define que o tooltip ("),n(303,"code"),e(304,"p-additional-help-tooltip"),t(),e(305," e/ou "),n(306,"code"),e(307,"p-error-limit"),t(),e(308,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(309,"blockquote")(310,"p"),e(311,"Quando utilizado com "),n(312,"code"),e(313,"p-additional-help-tooltip"),t(),e(314,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(315,"tr",15)(316,"td",16)(317,"div",24)(318,"span",25),e(319," p-auto-focus"),a(320,"br"),t()()(),n(321,"td",20)(322,"code",27),e(323,"boolean"),t()(),n(324,"td",22)(325,"p")(326,"code"),e(327,"false"),t()()(),n(328,"td",23)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Aplica foco no elemento ao ser iniciado."),t(),n(334,"blockquote")(335,"p"),e(336,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(337,"tr",15)(338,"td",16)(339,"div",17)(340,"span",18),e(341," (p-blur)"),a(342,"br"),t()()(),n(343,"td",20)(344,"code",21),e(345,"EventEmitter"),t()(),n(346,"td",22),e(347,"-"),t(),n(348,"td",23)(349,"em")(350,"strong"),e(351,"(opcional)"),t()(),n(352,"p"),e(353,"Evento disparado ao sair do campo."),t()()(),n(354,"tr",15)(355,"td",16)(356,"div",17)(357,"span",18),e(358," (p-change)"),a(359,"br"),t()()(),n(360,"td",20)(361,"code",21),e(362,"EventEmitter"),t()(),n(363,"td",22),e(364,"-"),t(),n(365,"td",23)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),n(369,"p"),e(370,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(371,"tr",15)(372,"td",16)(373,"div",17)(374,"span",18),e(375," (p-change-model)"),a(376,"br"),t()()(),n(377,"td",20)(378,"code",21),e(379,"EventEmitter"),t()(),n(380,"td",22),e(381,"-"),t(),n(382,"td",23)(383,"em")(384,"strong"),e(385,"(opcional)"),t()(),n(386,"p"),e(387,"Evento disparado ao alterar valor do model."),t()()(),n(388,"tr",15)(389,"td",16)(390,"div",24)(391,"span",25),e(392,"p-clean"),a(393,"br"),t()()(),n(394,"td",20)(395,"code",27),e(396,"boolean"),t()(),n(397,"td",22),e(398,"-"),t(),n(399,"td",23)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),n(403,"p"),e(404,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(405,"tr",15)(406,"td",16)(407,"div",24)(408,"span",25),e(409,"p-disabled"),a(410,"br"),t()()(),n(411,"td",20)(412,"code",27),e(413,"boolean"),t()(),n(414,"td",22)(415,"p")(416,"code"),e(417,"false"),t()()(),n(418,"td",23)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),n(422,"p"),e(423,"Se verdadeiro, desabilita o campo."),t()()(),n(424,"tr",15)(425,"td",16)(426,"div",24)(427,"span",25),e(428," p-emit-all-changes"),a(429,"br"),t()()(),n(430,"td",20)(431,"code",27),e(432,"boolean"),t()(),n(433,"td",22)(434,"p")(435,"code"),e(436,"false"),t()()(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(443,"tr",15)(444,"td",16)(445,"div",17)(446,"span",18),e(447," (p-enter)"),a(448,"br"),t()()(),n(449,"td",20)(450,"code",21),e(451,"EventEmitter"),t()(),n(452,"td",22),e(453,"-"),t(),n(454,"td",23)(455,"em")(456,"strong"),e(457,"(opcional)"),t()(),n(458,"p"),e(459,"Evento disparado ao entrar do campo."),t()()(),n(460,"tr",15)(461,"td",16)(462,"div",24)(463,"span",25),e(464," p-error-async-properties"),a(465,"br"),t()()(),n(466,"td",20)(467,"code",28),e(468,"ErrorAsyncProperties"),t()(),n(469,"td",22),e(470,"-"),t(),n(471,"td",23)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),n(475,"p"),e(476,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(477,"code"),e(478,"Reactive Forms"),t(),e(479,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(480,"code"),e(481,"asyncValidators"),t(),e(482,"."),t()()(),n(483,"tr",15)(484,"td",16)(485,"div",24)(486,"span",25),e(487," p-error-limit"),a(488,"br"),t()()(),n(489,"td",20)(490,"code",27),e(491,"boolean"),t()(),n(492,"td",22)(493,"p")(494,"code"),e(495,"false"),t()()(),n(496,"td",23)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),n(500,"p"),e(501,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(502,"blockquote")(503,"p"),e(504,"Caso essa propriedade seja definida como "),n(505,"code"),e(506,"true"),t(),e(507,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(508,"tr",15)(509,"td",16)(510,"div",24)(511,"span",25),e(512," p-error-pattern"),a(513,"br"),t()()(),n(514,"td",20)(515,"code",26),e(516,"string"),t()(),n(517,"td",22),e(518,"-"),t(),n(519,"td",23)(520,"em")(521,"strong"),e(522,"(opcional)"),t()(),n(523,"p"),e(524,"Mensagem que ser\xE1 apresentada quando o "),n(525,"code"),e(526,"pattern"),t(),e(527," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(528,"blockquote")(529,"p"),e(530,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(531,"code"),e(532,"p-required-field-error-message"),t(),e(533," em conjunto."),t()()()(),n(534,"tr",15)(535,"td",16)(536,"div",24)(537,"span",25),e(538," p-help"),a(539,"br"),t()()(),n(540,"td",20)(541,"code",26),e(542,"string"),t()(),n(543,"td",22),e(544,"-"),t(),n(545,"td",23)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),n(549,"p"),e(550,"Texto de apoio do campo."),t()()(),n(551,"tr",15)(552,"td",16)(553,"div",24)(554,"span",25),e(555," p-icon"),a(556,"br"),t()()(),n(557,"td",20)(558,"code",26),e(559,"string "),t(),n(560,"code",29),e(561," TemplateRef<void>"),t()(),n(562,"td",22),e(563,"-"),t(),n(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),n(568,"p"),e(569,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(570,"p"),e(571,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(572,"a",30),e(573,"Biblioteca de \xEDcones"),t(),e(574,". conforme exemplo abaixo:"),t(),n(575,"pre")(576,"code"),e(577,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(578,"p"),e(579,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(580,"em"),e(581,"Font Awesome"),t(),e(582,", da seguinte forma:"),t(),n(583,"pre")(584,"code"),e(585,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(586,"p"),e(587,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(588,"code"),e(589,"TemplateRef"),t(),e(590,", conforme exemplo abaixo:"),t(),n(591,"pre")(592,"code"),e(593,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(594,"blockquote")(595,"p"),e(596,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(597,"code"),e(598,"font-size: inherit"),t(),e(599," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(600,"tr",15)(601,"td",16)(602,"div",17)(603,"span",18),e(604," (p-keydown)"),a(605,"br"),t()()(),n(606,"td",20)(607,"code",21),e(608,"EventEmitter"),t()(),n(609,"td",22),e(610,"-"),t(),n(611,"td",23)(612,"em")(613,"strong"),e(614,"(opcional)"),t()(),n(615,"p"),e(616,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(617,"code"),e(618,"KeyboardEvent"),t(),e(619," com informa\xE7\xF5es sobre a tecla."),t()()(),n(620,"tr",15)(621,"td",16)(622,"div",24)(623,"span",25),e(624," p-label"),a(625,"br"),t()()(),n(626,"td",20)(627,"code",26),e(628,"string"),t()(),n(629,"td",22),e(630,"-"),t(),n(631,"td",23)(632,"em")(633,"strong"),e(634,"(opcional)"),t()(),n(635,"p"),e(636,"R\xF3tulo do campo."),t()()(),n(637,"tr",15)(638,"td",16)(639,"div",24)(640,"span",25),e(641," p-label-text-wrap"),a(642,"br"),t()()(),n(643,"td",20)(644,"code",27),e(645,"boolean"),t()(),n(646,"td",22)(647,"p")(648,"code"),e(649,"false"),t()()(),n(650,"td",23)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),n(654,"p"),e(655,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(656,"code"),e(657,"p-label"),t(),e(658,". Quando "),n(659,"code"),e(660,"p-label-text-wrap"),t(),e(661,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(662,"tr",15)(663,"td",16)(664,"div",24)(665,"span",25),e(666,"p-mask"),a(667,"br"),t()()(),n(668,"td",20)(669,"code",26),e(670,"string"),t()(),n(671,"td",22),e(672,"-"),t(),n(673,"td",23)(674,"em")(675,"strong"),e(676,"(opcional)"),t()(),n(677,"p"),e(678,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(679,"tr",15)(680,"td",16)(681,"div",24)(682,"span",25),e(683,"p-mask-format-model"),a(684,"br"),t()()(),n(685,"td",20)(686,"code",27),e(687,"boolean"),t()(),n(688,"td",22)(689,"p")(690,"code"),e(691,"false"),t()()(),n(692,"td",23)(693,"em")(694,"strong"),e(695,"(opcional)"),t()(),n(696,"p"),e(697,"Indica se o "),n(698,"code"),e(699,"model"),t(),e(700," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(701,"tr",15)(702,"td",16)(703,"div",24)(704,"span",25),e(705," p-mask-no-length-validation"),a(706,"br"),t()()(),n(707,"td",20)(708,"code",27),e(709,"boolean"),t()(),n(710,"td",22)(711,"p")(712,"code"),e(713,"false"),t()()(),n(714,"td",23)(715,"p"),e(716,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(717,"code"),e(718,"minLength"),t(),e(719,") e m\xE1ximo ("),n(720,"code"),e(721,"maxLength"),t(),e(722,") do campo."),t(),n(723,"ul")(724,"li"),e(725,"Quando "),n(726,"code"),e(727,"true"),t(),e(728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(729,"li"),e(730,"Quando "),n(731,"code"),e(732,"false"),t(),e(733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(734,"blockquote")(735,"p"),e(736,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(737,"code"),e(738,"p-mask-format-model"),t(),e(739,"."),t()(),n(740,"p"),e(741,"Exemplo:"),t(),n(742,"pre")(743,"code"),e(744,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(745,"ul")(746,"li"),e(747,"Entrada: "),n(748,"code"),e(749,"123-456"),t(),e(750," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(751,"code"),e(752,"-"),t(),e(753,"."),t()()()(),n(754,"tr",15)(755,"td",16)(756,"div",24)(757,"span",25),e(758,"p-max"),a(759,"br"),t()()(),n(760,"td",20)(761,"code",31),e(762,"number"),t()(),n(763,"td",22),e(764,"-"),t(),n(765,"td",23)(766,"em")(767,"strong"),e(768,"(opcional)"),t()(),n(769,"p"),e(770,"Valor m\xE1ximo."),t(),n(771,"blockquote")(772,"p"),e(773,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(774,"code"),e(775,"p-step"),t(),e(776," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(777,"tr",15)(778,"td",16)(779,"div",24)(780,"span",25),e(781," p-maxlength"),a(782,"br"),t()()(),n(783,"td",20)(784,"code",31),e(785,"number"),t()(),n(786,"td",22),e(787,"-"),t(),n(788,"td",23)(789,"em")(790,"strong"),e(791,"(opcional)"),t()(),n(792,"p"),e(793,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),e(798,"p-min"),a(799,"br"),t()()(),n(800,"td",20)(801,"code",31),e(802,"number"),t()(),n(803,"td",22),e(804,"-"),t(),n(805,"td",23)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,"Valor m\xEDnimo."),t(),n(811,"blockquote")(812,"p"),e(813,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(814,"code"),e(815,"p-step"),t(),e(816," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(817,"tr",15)(818,"td",16)(819,"div",24)(820,"span",25),e(821," p-minlength"),a(822,"br"),t()()(),n(823,"td",20)(824,"code",31),e(825,"number"),t()(),n(826,"td",22),e(827,"-"),t(),n(828,"td",23)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),n(832,"p"),e(833,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(834,"tr",15)(835,"td",16)(836,"div",24)(837,"span",25),e(838," name"),a(839,"br"),t()()(),n(840,"td",20)(841,"code",26),e(842,"string"),t()(),n(843,"td",22),e(844,"-"),t(),n(845,"td",23)(846,"p"),e(847,"Nome e identificador do campo."),t()()(),n(848,"tr",15)(849,"td",16)(850,"div",24)(851,"span",25),e(852," p-no-autocomplete"),a(853,"br"),t()()(),n(854,"td",20)(855,"code",27),e(856,"boolean"),t()(),n(857,"td",22)(858,"p")(859,"code"),e(860,"false"),t()()(),n(861,"td",23)(862,"em")(863,"strong"),e(864,"(opcional)"),t()(),n(865,"p"),e(866,"Define a propriedade nativa "),n(867,"code"),e(868,"autocomplete"),t(),e(869," do campo como "),n(870,"code"),e(871,"off"),t(),e(872,"."),t(),n(873,"blockquote")(874,"p"),e(875,"No componente "),n(876,"code"),e(877,"po-password"),t(),e(878," ser\xE1 definido como "),n(879,"code"),e(880,"new-password"),t(),e(881,"."),t()(),n(882,"p"),e(883,"Nos componentes "),n(884,"code"),e(885,"po-password"),t(),e(886," e "),n(887,"code"),e(888,"po-login"),t(),e(889," o valor padr\xE3o ser\xE1 "),n(890,"code"),e(891,"true"),t(),e(892,"."),t()()(),n(893,"tr",15)(894,"td",16)(895,"div",24)(896,"span",25),e(897," p-optional"),a(898,"br"),t()()(),n(899,"td",20)(900,"code",27),e(901,"boolean"),t()(),n(902,"td",22)(903,"p")(904,"code"),e(905,"false"),t()()(),n(906,"td",23)(907,"em")(908,"strong"),e(909,"(opcional)"),t()(),n(910,"p"),e(911,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(912,"blockquote")(913,"p"),e(914,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(915,"ul")(916,"li"),e(917,"O campo conter "),n(918,"code"),e(919,"p-required"),t(),e(920,";"),t(),n(921,"li"),e(922,"N\xE3o possuir "),n(923,"code"),e(924,"p-help"),t(),e(925," e/ou "),n(926,"code"),e(927,"p-label"),t(),e(928,"."),t()()()(),n(929,"tr",15)(930,"td",16)(931,"div",24)(932,"span",25),e(933,"p-pattern"),a(934,"br"),t()()(),n(935,"td",20)(936,"code",26),e(937,"string"),t()(),n(938,"td",22),e(939,"-"),t(),n(940,"td",23)(941,"em")(942,"strong"),e(943,"(opcional)"),t()(),n(944,"p"),e(945,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(946,"code"),e(947,"(p-mask)"),t(),e(948,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(949,"tr",15)(950,"td",16)(951,"div",24)(952,"span",25),e(953," p-placeholder"),a(954,"br"),t()()(),n(955,"td",20)(956,"code",26),e(957,"string"),t()(),n(958,"td",22)(959,"p"),e(960,"''"),t()(),n(961,"td",23)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),n(965,"p"),e(966,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(967,"tr",15)(968,"td",16)(969,"div",24)(970,"span",25),e(971," p-helper"),a(972,"br"),t()()(),n(973,"td",20)(974,"code",32),e(975,"PoHelperOptions"),t()(),n(976,"td",22),e(977,"-"),t(),n(978,"td",23)(979,"em")(980,"strong"),e(981,"(opcional)"),t()(),n(982,"p"),e(983,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(984,"blockquote")(985,"p"),e(986,"Caso o "),n(987,"code"),e(988,"p-label"),t(),e(989,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(990,"code"),e(991,"p-additional-help-tooltip"),t(),e(992," e "),n(993,"code"),e(994,"p-additional-help"),t(),e(995,") ser\xE1 ignorado."),t()()()(),n(996,"tr",15)(997,"td",16)(998,"div",24)(999,"span",25),e(1e3,"p-readonly"),a(1001,"br"),t()()(),n(1002,"td",20)(1003,"code",27),e(1004,"boolean"),t()(),n(1005,"td",22),e(1006,"-"),t(),n(1007,"td",23)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),n(1011,"p"),e(1012,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1013,"tr",15)(1014,"td",16)(1015,"div",24)(1016,"span",25),e(1017,"p-required"),a(1018,"br"),t()()(),n(1019,"td",20)(1020,"code",27),e(1021,"boolean"),t()(),n(1022,"td",22)(1023,"p")(1024,"code"),e(1025,"false"),t()()(),n(1026,"td",23)(1027,"em")(1028,"strong"),e(1029,"(opcional)"),t()(),n(1030,"p"),e(1031,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1032,"blockquote")(1033,"p"),e(1034,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1035,"code"),e(1036,"(p-disabled)"),t(),e(1037,"."),t()()()(),n(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),e(1042," p-required-field-error-message"),a(1043,"br"),t()()(),n(1044,"td",20)(1045,"code",27),e(1046,"boolean"),t()(),n(1047,"td",22)(1048,"p")(1049,"code"),e(1050,"false"),t()()(),n(1051,"td",23)(1052,"em")(1053,"strong"),e(1054,"(opcional)"),t()(),n(1055,"p"),e(1056,"Exibe a mensagem setada na propriedade "),n(1057,"code"),e(1058,"p-error-pattern"),t(),e(1059," se o campo estiver vazio e for requerido."),t(),n(1060,"blockquote")(1061,"p"),e(1062,"Necess\xE1rio que a propriedade "),n(1063,"code"),e(1064,"p-required"),t(),e(1065," esteja habilitada."),t()()()(),n(1066,"tr",15)(1067,"td",16)(1068,"div",24)(1069,"span",25),e(1070," p-show-required"),a(1071,"br"),t()()(),n(1072,"td",20)(1073,"code",27),e(1074,"boolean"),t()(),n(1075,"td",22),e(1076,"-"),t(),n(1077,"td",23)(1078,"p"),e(1079,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1080,"blockquote")(1081,"p"),e(1082,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1083,"ul")(1084,"li"),e(1085,"N\xE3o possuir "),n(1086,"code"),e(1087,"p-help"),t(),e(1088," e/ou "),n(1089,"code"),e(1090,"p-label"),t(),e(1091,"."),t()()()(),n(1092,"tr",15)(1093,"td",16)(1094,"div",24)(1095,"span",25),e(1096," p-size"),a(1097,"br"),t()()(),n(1098,"td",20)(1099,"code",26),e(1100,"string"),t()(),n(1101,"td",22)(1102,"p")(1103,"code"),e(1104,"medium"),t()()(),n(1105,"td",23)(1106,"em")(1107,"strong"),e(1108,"(opcional)"),t()(),n(1109,"p"),e(1110,"Define o tamanho do componente:"),t(),n(1111,"ul")(1112,"li")(1113,"code"),e(1114,"small"),t(),e(1115,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1116,"li")(1117,"code"),e(1118,"medium"),t(),e(1119,": altura do input como 44px."),t()(),n(1120,"blockquote")(1121,"p"),e(1122,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1123,"code"),e(1124,"medium"),t(),e(1125,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1126,"a",33),e(1127,"po-theme"),t(),e(1128,"."),t()()()(),n(1129,"tr",15)(1130,"td",16)(1131,"div",24)(1132,"span",25),e(1133," p-step"),a(1134,"br"),t()()(),n(1135,"td",20)(1136,"code",26),e(1137,"string"),t()(),n(1138,"td",22)(1139,"p"),e(1140,"1"),t()(),n(1141,"td",23)(1142,"em")(1143,"strong"),e(1144,"(opcional)"),t()(),n(1145,"p"),e(1146,"Intervalo."),t()()(),n(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),e(1151," p-upper-case"),a(1152,"br"),t()()(),n(1153,"td",20)(1154,"code",27),e(1155,"boolean"),t()(),n(1156,"td",22),e(1157,"-"),t(),n(1158,"td",23)(1159,"p"),e(1160,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1161,"h3",11),e(1162,"M\xE9todos"),t(),n(1163,"table",34)(1164,"tr",15)(1165,"th",35)(1166,"div",24)(1167,"h4")(1168,"span",25),e(1169," focus "),t()()()()(),n(1170,"tr",23)(1171,"td",23)(1172,"p"),e(1173,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1174,"p"),e(1175,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1176,"pre")(1177,"code"),e(1178,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),a(1179,"br"),n(1180,"h3"),e(1181,"Interfaces"),t(),n(1182,"h4",36)(1183,"code",5),e(1184,"ErrorAsyncProperties"),t()(),n(1185,"div",2)(1186,"p"),e(1187,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1188,"h4",11),e(1189,"Propriedades"),t(),n(1190,"table",12)(1191,"tr",13)(1192,"th",14),e(1193,"Nome"),t(),n(1194,"th",14),e(1195,"Tipo"),t(),n(1196,"th",14),e(1197,"Descri\xE7\xE3o"),t()(),n(1198,"tr",15)(1199,"td",16)(1200,"div",24)(1201,"span",25),e(1202," errorAsync"),a(1203,"br"),t()()(),n(1204,"td",20)(1205,"code",37),e(1206,"(value) => Observable<boolean>"),t()(),n(1207,"td",23)(1208,"p"),e(1209,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1210,"code"),e(1211,"change"),t(),e(1212," ou "),n(1213,"code"),e(1214,"change-model"),t(),e(1215,", dependendo do valor da propriedade "),n(1216,"code"),e(1217,"triggerMode"),t(),e(1218,"."),t()()(),n(1219,"tr",15)(1220,"td",16)(1221,"div",24)(1222,"span",25),e(1223," triggerMode"),a(1224,"br"),t()()(),n(1225,"td",20)(1226,"code",38),e(1227,"'change' "),t(),n(1228,"code",39),e(1229," 'changeModel'"),t()(),n(1230,"td",23)(1231,"em")(1232,"strong"),e(1233,"(opcional)"),t()(),n(1234,"p"),e(1235,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1236,"code"),e(1237,"change"),t(),e(1238," ou "),n(1239,"code"),e(1240,"change-model"),t(),e(1241,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var le=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(A(j),A(G))};static \u0275cmp=h({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-number-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),t()()()),r&2&&(S("p-actions",i.actions),m(2),S("p-active",i.activeTab==="doc"),m(2),S("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[J,v,C,ee,ne,oe,ae],encapsulation:2})}return l})();var xe=[{path:"",component:le}],re=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[H.forChild(xe),H]})}return l})();var Re=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=k({type:l});static \u0275inj=N({imports:[Y,re]})}return l})();export{Re as DocPoNumberModule};
