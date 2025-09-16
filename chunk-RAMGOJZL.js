import{o as w,p as pe}from"./chunk-7QXRNAIE.js";import{Fa as oe,Ga as F,La as R,P as te,Pa as ae,R as ne,Ra as le,V as ie,Wa as A,mb as re,v as z,yb as C,zb as y}from"./chunk-DJTNC6KO.js";import{$a as U,Bb as k,Ca as P,Cc as V,Dc as L,Ec as Z,Fc as K,Gc as N,Jc as X,Ka as n,Kc as J,La as t,M as q,Ma as o,Oc as Y,P as H,Qa as D,Ra as S,T as u,Tc as $,U as c,Vc as ee,Xc as B,Za as j,_a as G,ab as Q,bb as e,db as _,fb as h,gb as x,hb as v,ia as p,ja as W,kb as M,pa as b,qa as I,za as s,zc as g}from"./chunk-4WWO4UYO.js";var me=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&o(0,"po-input",0)},dependencies:[F],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,ve,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,me],encapsulation:2})}return a})();var ue=(()=>{class a{additionalHelpTooltip;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"maskFormatModel",label:"Formatted Model"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.input=void 0,this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:22,vars:42,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let m=D();n(0,"po-input",1),v("ngModelChange",function(l){return u(m),x(i.input,l)||(i.input=l),c(l)}),S("p-blur",function(){return u(m),c(i.changeEvent("p-blur"))})("p-change",function(){return u(m),c(i.changeEvent("p-change"))})("p-change-model",function(){return u(m),c(i.changeEvent("p-change-model"))})("p-enter",function(){return u(m),c(i.changeEvent("p-enter"))})("p-keydown",function(){return u(m),c(i.changeEvent("p-keydown"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"po-input",5),v("ngModelChange",function(l){return u(m),x(i.label,l)||(i.label=l),c(l)}),t(),n(9,"po-input",6),v("ngModelChange",function(l){return u(m),x(i.help,l)||(i.help=l),c(l)}),t(),n(10,"po-input",7),v("ngModelChange",function(l){return u(m),x(i.additionalHelpTooltip,l)||(i.additionalHelpTooltip=l),c(l)}),t(),n(11,"po-input",8),v("ngModelChange",function(l){return u(m),x(i.placeholder,l)||(i.placeholder=l),c(l)}),t(),n(12,"po-input",9),v("ngModelChange",function(l){return u(m),x(i.errorPattern,l)||(i.errorPattern=l),c(l)}),t(),n(13,"po-input",10),v("ngModelChange",function(l){return u(m),x(i.mask,l)||(i.mask=l),c(l)}),t(),n(14,"po-input",11),v("ngModelChange",function(l){return u(m),x(i.pattern,l)||(i.pattern=l),c(l)}),t(),n(15,"po-number",12),v("ngModelChange",function(l){return u(m),x(i.minlength,l)||(i.minlength=l),c(l)}),t(),n(16,"po-number",13),v("ngModelChange",function(l){return u(m),x(i.maxlength,l)||(i.maxlength=l),c(l)}),t(),n(17,"po-select",14),v("ngModelChange",function(l){return u(m),x(i.icon,l)||(i.icon=l),c(l)}),t(),n(18,"po-checkbox-group",15),v("ngModelChange",function(l){return u(m),x(i.properties,l)||(i.properties=l),c(l)}),t(),n(19,"po-radio-group",16),v("ngModelChange",function(l){return u(m),x(i.size,l)||(i.size=l),c(l)}),t(),n(20,"div",2)(21,"po-button",17),S("p-click",function(){return u(m),Q(7).reset(),c(i.restore())}),t()()()}r&2&&(h("ngModel",i.input),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),p(3),s("p-value",i.input),p(),s("p-value",i.event),p(4),h("ngModel",i.label),p(),h("ngModel",i.help),p(),h("ngModel",i.additionalHelpTooltip),p(),h("ngModel",i.placeholder),p(),h("ngModel",i.errorPattern),p(),h("ngModel",i.mask),p(),h("ngModel",i.pattern),p(),h("ngModel",i.minlength),p(),h("ngModel",i.maxlength),p(),h("ngModel",i.icon),s("p-options",i.iconOptions),p(),h("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),h("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[N,V,L,K,Z,z,te,ne,F,R,le,A],encapsulation:2})}return a})();var we=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties?.includes('clean')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-mask]="mask"
  [p-mask-format-model]="properties?.includes('maskFormatModel')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="properties?.includes('required')"
  [p-required-field-error-message]="properties?.includes('requiredFieldErrorMessage')"
  [p-readonly]="properties?.includes('readonly')"
  [p-upper-case]="properties?.includes('uppercase')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-mask-no-length-validation]="properties?.includes('maskNoLengthValidation')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-input>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

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
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="mask"
    [(ngModel)]="mask"
    p-clean
    p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
    p-label="Mask"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
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
    this.input = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,we,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,ue],encapsulation:2})}return a})();var _e=["reactiveFormData"],Ee=(()=>{class a{fb=H(Y);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",g.compose([g.required,g.minLength(5),g.maxLength(30)])],address:["",g.compose([g.required,g.minLength(5),g.maxLength(50)])],number:["",g.compose([g.required,g.min(1),g.max(99999)])],email:["",g.required],website:["",g.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&j(_e,7),r&2){let m;G(m=U())&&(i.reactiveFormModal=m.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){if(r&1){let m=D();n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),S("p-click",function(){return u(m),c(i.saveForm())}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"hr"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"hr"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()}r&2&&(s("formGroup",i.reactiveForm),p(10),s("p-disabled",!i.reactiveForm.valid),p(),s("p-primary-action",i.modalPrimaryAction),p(3),s("p-value",i.reactiveForm.controls.name.value),p(3),s("p-value",i.reactiveForm.controls.address.value),p(),s("p-value",i.reactiveForm.controls.number.value),p(3),s("p-value",i.reactiveForm.controls.email.value),p(),s("p-value",i.reactiveForm.controls.website.value))},dependencies:[N,V,L,X,J,z,oe,F,R,ae,A,ie],encapsulation:2})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  private fb = inject(UntypedFormBuilder);

  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor() {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,ke,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,Ee],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:1173,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoInputComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),o(209,"br"),t(),n(210,"div",8)(211,"h4",9),e(212,"Seletor"),t(),n(213,"pre",10),e(214,`<po-input
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
    p-maxlength="number"
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
    p-upper-case="boolean" >
</po-input>
`),t()(),n(215,"h4",11),e(216,"Propriedades"),t(),n(217,"table",12)(218,"tr",13)(219,"th",14),e(220,"Nome"),t(),n(221,"th",14),e(222,"Tipo"),t(),n(223,"th",14),e(224,"Padr\xE3o"),t(),n(225,"th",14),e(226,"Descri\xE7\xE3o"),t()(),n(227,"tr",15)(228,"td",16)(229,"div",17)(230,"span",18),e(231," (p-additional-help)"),o(232,"br"),t()(),n(233,"div",19),e(234,"Deprecated"),t()(),n(235,"td",20)(236,"code",21),e(237,"EventEmitter"),t()(),n(238,"td",22),e(239,"-"),t(),n(240,"td",23)(241,"em")(242,"strong"),e(243,"(opcional)"),t()(),n(244,"p"),e(245,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(246,"code"),e(247,"p-help"),t(),e(248,"."),t()()(),n(249,"tr",15)(250,"td",16)(251,"div",24)(252,"span",25),e(253," p-additional-help-tooltip"),o(254,"br"),t()(),n(255,"div",19),e(256,"Deprecated"),t()(),n(257,"td",20)(258,"code",26),e(259,"string"),t()(),n(260,"td",22),e(261,"-"),t(),n(262,"td",23)(263,"em")(264,"strong"),e(265,"(opcional)"),t()(),n(266,"p"),e(267,"Exibe um \xEDcone de ajuda adicional ao "),n(268,"code"),e(269,"p-help"),t(),e(270,`, com o texto desta propriedade no tooltip.
Se o evento `),n(271,"code"),e(272,"p-additional-help"),t(),e(273,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(274,"strong"),e(275,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(276,"blockquote")(277,"p"),e(278,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(279,"tr",15)(280,"td",16)(281,"div",24)(282,"span",25),e(283," p-append-in-body"),o(284,"br"),t()()(),n(285,"td",20)(286,"code",27),e(287,"boolean"),t()(),n(288,"td",22)(289,"p")(290,"code"),e(291,"false"),t()()(),n(292,"td",23)(293,"em")(294,"strong"),e(295,"(opcional)"),t()(),n(296,"p"),e(297,"Define que o tooltip ("),n(298,"code"),e(299,"p-additional-help-tooltip"),t(),e(300," e/ou "),n(301,"code"),e(302,"p-error-limit"),t(),e(303,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(304,"blockquote")(305,"p"),e(306,"Quando utilizado com "),n(307,"code"),e(308,"p-additional-help-tooltip"),t(),e(309,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(310,"tr",15)(311,"td",16)(312,"div",24)(313,"span",25),e(314," p-auto-focus"),o(315,"br"),t()()(),n(316,"td",20)(317,"code",27),e(318,"boolean"),t()(),n(319,"td",22)(320,"p")(321,"code"),e(322,"false"),t()()(),n(323,"td",23)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),n(327,"p"),e(328,"Aplica foco no elemento ao ser iniciado."),t(),n(329,"blockquote")(330,"p"),e(331,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(332,"tr",15)(333,"td",16)(334,"div",17)(335,"span",18),e(336," (p-blur)"),o(337,"br"),t()()(),n(338,"td",20)(339,"code",21),e(340,"EventEmitter"),t()(),n(341,"td",22),e(342,"-"),t(),n(343,"td",23)(344,"em")(345,"strong"),e(346,"(opcional)"),t()(),n(347,"p"),e(348,"Evento disparado ao sair do campo."),t()()(),n(349,"tr",15)(350,"td",16)(351,"div",17)(352,"span",18),e(353," (p-change)"),o(354,"br"),t()()(),n(355,"td",20)(356,"code",21),e(357,"EventEmitter"),t()(),n(358,"td",22),e(359,"-"),t(),n(360,"td",23)(361,"em")(362,"strong"),e(363,"(opcional)"),t()(),n(364,"p"),e(365,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(366,"tr",15)(367,"td",16)(368,"div",17)(369,"span",18),e(370," (p-change-model)"),o(371,"br"),t()()(),n(372,"td",20)(373,"code",21),e(374,"EventEmitter"),t()(),n(375,"td",22),e(376,"-"),t(),n(377,"td",23)(378,"em")(379,"strong"),e(380,"(opcional)"),t()(),n(381,"p"),e(382,"Evento disparado ao alterar valor do model."),t()()(),n(383,"tr",15)(384,"td",16)(385,"div",24)(386,"span",25),e(387,"p-clean"),o(388,"br"),t()()(),n(389,"td",20)(390,"code",27),e(391,"boolean"),t()(),n(392,"td",22),e(393,"-"),t(),n(394,"td",23)(395,"em")(396,"strong"),e(397,"(opcional)"),t()(),n(398,"p"),e(399,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(400,"tr",15)(401,"td",16)(402,"div",24)(403,"span",25),e(404,"p-disabled"),o(405,"br"),t()()(),n(406,"td",20)(407,"code",27),e(408,"boolean"),t()(),n(409,"td",22)(410,"p")(411,"code"),e(412,"false"),t()()(),n(413,"td",23)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),n(417,"p"),e(418,"Se verdadeiro, desabilita o campo."),t()()(),n(419,"tr",15)(420,"td",16)(421,"div",24)(422,"span",25),e(423," p-emit-all-changes"),o(424,"br"),t()()(),n(425,"td",20)(426,"code",27),e(427,"boolean"),t()(),n(428,"td",22)(429,"p")(430,"code"),e(431,"false"),t()()(),n(432,"td",23)(433,"em")(434,"strong"),e(435,"(opcional)"),t()(),n(436,"p"),e(437,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(438,"tr",15)(439,"td",16)(440,"div",17)(441,"span",18),e(442," (p-enter)"),o(443,"br"),t()()(),n(444,"td",20)(445,"code",21),e(446,"EventEmitter"),t()(),n(447,"td",22),e(448,"-"),t(),n(449,"td",23)(450,"em")(451,"strong"),e(452,"(opcional)"),t()(),n(453,"p"),e(454,"Evento disparado ao entrar do campo."),t()()(),n(455,"tr",15)(456,"td",16)(457,"div",24)(458,"span",25),e(459," p-error-async-properties"),o(460,"br"),t()()(),n(461,"td",20)(462,"code",28),e(463,"ErrorAsyncProperties"),t()(),n(464,"td",22),e(465,"-"),t(),n(466,"td",23)(467,"em")(468,"strong"),e(469,"(opcional)"),t()(),n(470,"p"),e(471,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(472,"code"),e(473,"Reactive Forms"),t(),e(474,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(475,"code"),e(476,"asyncValidators"),t(),e(477,"."),t()()(),n(478,"tr",15)(479,"td",16)(480,"div",24)(481,"span",25),e(482," p-error-limit"),o(483,"br"),t()()(),n(484,"td",20)(485,"code",27),e(486,"boolean"),t()(),n(487,"td",22)(488,"p")(489,"code"),e(490,"false"),t()()(),n(491,"td",23)(492,"em")(493,"strong"),e(494,"(opcional)"),t()(),n(495,"p"),e(496,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(497,"blockquote")(498,"p"),e(499,"Caso essa propriedade seja definida como "),n(500,"code"),e(501,"true"),t(),e(502,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(503,"tr",15)(504,"td",16)(505,"div",24)(506,"span",25),e(507," p-error-pattern"),o(508,"br"),t()()(),n(509,"td",20)(510,"code",26),e(511,"string"),t()(),n(512,"td",22),e(513,"-"),t(),n(514,"td",23)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,"Mensagem que ser\xE1 apresentada quando o "),n(520,"code"),e(521,"pattern"),t(),e(522," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(523,"blockquote")(524,"p"),e(525,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(526,"code"),e(527,"p-required-field-error-message"),t(),e(528," em conjunto."),t()()()(),n(529,"tr",15)(530,"td",16)(531,"div",24)(532,"span",25),e(533," p-help"),o(534,"br"),t()()(),n(535,"td",20)(536,"code",26),e(537,"string"),t()(),n(538,"td",22),e(539,"-"),t(),n(540,"td",23)(541,"em")(542,"strong"),e(543,"(opcional)"),t()(),n(544,"p"),e(545,"Texto de apoio do campo."),t()()(),n(546,"tr",15)(547,"td",16)(548,"div",24)(549,"span",25),e(550," p-icon"),o(551,"br"),t()()(),n(552,"td",20)(553,"code",26),e(554,"string "),t(),n(555,"code",29),e(556," TemplateRef<void>"),t()(),n(557,"td",22),e(558,"-"),t(),n(559,"td",23)(560,"em")(561,"strong"),e(562,"(opcional)"),t()(),n(563,"p"),e(564,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(565,"p"),e(566,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(567,"a",30),e(568,"Biblioteca de \xEDcones"),t(),e(569,". conforme exemplo abaixo:"),t(),n(570,"pre")(571,"code"),e(572,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(573,"p"),e(574,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(575,"em"),e(576,"Font Awesome"),t(),e(577,", da seguinte forma:"),t(),n(578,"pre")(579,"code"),e(580,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(581,"p"),e(582,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(583,"code"),e(584,"TemplateRef"),t(),e(585,", conforme exemplo abaixo:"),t(),n(586,"pre")(587,"code"),e(588,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(589,"blockquote")(590,"p"),e(591,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(592,"code"),e(593,"font-size: inherit"),t(),e(594," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(595,"tr",15)(596,"td",16)(597,"div",17)(598,"span",18),e(599," (p-keydown)"),o(600,"br"),t()()(),n(601,"td",20)(602,"code",21),e(603,"EventEmitter"),t()(),n(604,"td",22),e(605,"-"),t(),n(606,"td",23)(607,"em")(608,"strong"),e(609,"(opcional)"),t()(),n(610,"p"),e(611,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(612,"code"),e(613,"KeyboardEvent"),t(),e(614," com informa\xE7\xF5es sobre a tecla."),t()()(),n(615,"tr",15)(616,"td",16)(617,"div",24)(618,"span",25),e(619," p-label"),o(620,"br"),t()()(),n(621,"td",20)(622,"code",26),e(623,"string"),t()(),n(624,"td",22),e(625,"-"),t(),n(626,"td",23)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),n(630,"p"),e(631,"R\xF3tulo do campo."),t()()(),n(632,"tr",15)(633,"td",16)(634,"div",24)(635,"span",25),e(636," p-label-text-wrap"),o(637,"br"),t()()(),n(638,"td",20)(639,"code",27),e(640,"boolean"),t()(),n(641,"td",22)(642,"p")(643,"code"),e(644,"false"),t()()(),n(645,"td",23)(646,"em")(647,"strong"),e(648,"(opcional)"),t()(),n(649,"p"),e(650,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(651,"code"),e(652,"p-label"),t(),e(653,". Quando "),n(654,"code"),e(655,"p-label-text-wrap"),t(),e(656,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(657,"tr",15)(658,"td",16)(659,"div",24)(660,"span",25),e(661,"p-mask"),o(662,"br"),t()()(),n(663,"td",20)(664,"code",26),e(665,"string"),t()(),n(666,"td",22),e(667,"-"),t(),n(668,"td",23)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),n(672,"p"),e(673,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(674,"tr",15)(675,"td",16)(676,"div",24)(677,"span",25),e(678,"p-mask-format-model"),o(679,"br"),t()()(),n(680,"td",20)(681,"code",27),e(682,"boolean"),t()(),n(683,"td",22)(684,"p")(685,"code"),e(686,"false"),t()()(),n(687,"td",23)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),n(691,"p"),e(692,"Indica se o "),n(693,"code"),e(694,"model"),t(),e(695," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(696,"tr",15)(697,"td",16)(698,"div",24)(699,"span",25),e(700," p-mask-no-length-validation"),o(701,"br"),t()()(),n(702,"td",20)(703,"code",27),e(704,"boolean"),t()(),n(705,"td",22)(706,"p")(707,"code"),e(708,"false"),t()()(),n(709,"td",23)(710,"p"),e(711,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(712,"code"),e(713,"minLength"),t(),e(714,") e m\xE1ximo ("),n(715,"code"),e(716,"maxLength"),t(),e(717,") do campo."),t(),n(718,"ul")(719,"li"),e(720,"Quando "),n(721,"code"),e(722,"true"),t(),e(723,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(724,"li"),e(725,"Quando "),n(726,"code"),e(727,"false"),t(),e(728,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(729,"blockquote")(730,"p"),e(731,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(732,"code"),e(733,"p-mask-format-model"),t(),e(734,"."),t()(),n(735,"p"),e(736,"Exemplo:"),t(),n(737,"pre")(738,"code"),e(739,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(740,"ul")(741,"li"),e(742,"Entrada: "),n(743,"code"),e(744,"123-456"),t(),e(745," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(746,"code"),e(747,"-"),t(),e(748,"."),t()()()(),n(749,"tr",15)(750,"td",16)(751,"div",24)(752,"span",25),e(753," p-maxlength"),o(754,"br"),t()()(),n(755,"td",20)(756,"code",31),e(757,"number"),t()(),n(758,"td",22),e(759,"-"),t(),n(760,"td",23)(761,"em")(762,"strong"),e(763,"(opcional)"),t()(),n(764,"p"),e(765,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(766,"tr",15)(767,"td",16)(768,"div",24)(769,"span",25),e(770," p-minlength"),o(771,"br"),t()()(),n(772,"td",20)(773,"code",31),e(774,"number"),t()(),n(775,"td",22),e(776,"-"),t(),n(777,"td",23)(778,"em")(779,"strong"),e(780,"(opcional)"),t()(),n(781,"p"),e(782,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(783,"tr",15)(784,"td",16)(785,"div",24)(786,"span",25),e(787," name"),o(788,"br"),t()()(),n(789,"td",20)(790,"code",26),e(791,"string"),t()(),n(792,"td",22),e(793,"-"),t(),n(794,"td",23)(795,"p"),e(796,"Nome e identificador do campo."),t()()(),n(797,"tr",15)(798,"td",16)(799,"div",24)(800,"span",25),e(801," p-no-autocomplete"),o(802,"br"),t()()(),n(803,"td",20)(804,"code",27),e(805,"boolean"),t()(),n(806,"td",22)(807,"p")(808,"code"),e(809,"false"),t()()(),n(810,"td",23)(811,"em")(812,"strong"),e(813,"(opcional)"),t()(),n(814,"p"),e(815,"Define a propriedade nativa "),n(816,"code"),e(817,"autocomplete"),t(),e(818," do campo como "),n(819,"code"),e(820,"off"),t(),e(821,"."),t(),n(822,"blockquote")(823,"p"),e(824,"No componente "),n(825,"code"),e(826,"po-password"),t(),e(827," ser\xE1 definido como "),n(828,"code"),e(829,"new-password"),t(),e(830,"."),t()(),n(831,"p"),e(832,"Nos componentes "),n(833,"code"),e(834,"po-password"),t(),e(835," e "),n(836,"code"),e(837,"po-login"),t(),e(838," o valor padr\xE3o ser\xE1 "),n(839,"code"),e(840,"true"),t(),e(841,"."),t()()(),n(842,"tr",15)(843,"td",16)(844,"div",24)(845,"span",25),e(846," p-optional"),o(847,"br"),t()()(),n(848,"td",20)(849,"code",27),e(850,"boolean"),t()(),n(851,"td",22)(852,"p")(853,"code"),e(854,"false"),t()()(),n(855,"td",23)(856,"em")(857,"strong"),e(858,"(opcional)"),t()(),n(859,"p"),e(860,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(861,"blockquote")(862,"p"),e(863,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(864,"ul")(865,"li"),e(866,"O campo conter "),n(867,"code"),e(868,"p-required"),t(),e(869,";"),t(),n(870,"li"),e(871,"N\xE3o possuir "),n(872,"code"),e(873,"p-help"),t(),e(874," e/ou "),n(875,"code"),e(876,"p-label"),t(),e(877,"."),t()()()(),n(878,"tr",15)(879,"td",16)(880,"div",24)(881,"span",25),e(882,"p-pattern"),o(883,"br"),t()()(),n(884,"td",20)(885,"code",26),e(886,"string"),t()(),n(887,"td",22),e(888,"-"),t(),n(889,"td",23)(890,"em")(891,"strong"),e(892,"(opcional)"),t()(),n(893,"p"),e(894,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(895,"code"),e(896,"(p-mask)"),t(),e(897,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(898,"tr",15)(899,"td",16)(900,"div",24)(901,"span",25),e(902," p-placeholder"),o(903,"br"),t()()(),n(904,"td",20)(905,"code",26),e(906,"string"),t()(),n(907,"td",22)(908,"p"),e(909,"''"),t()(),n(910,"td",23)(911,"em")(912,"strong"),e(913,"(opcional)"),t()(),n(914,"p"),e(915,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),e(920," p-helper"),o(921,"br"),t()()(),n(922,"td",20)(923,"code",32),e(924,"PoHelperOptions"),t()(),n(925,"td",22),e(926,"-"),t(),n(927,"td",23)(928,"em")(929,"strong"),e(930,"(opcional)"),t()(),n(931,"p"),e(932,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(933,"blockquote")(934,"p"),e(935,"Caso o "),n(936,"code"),e(937,"p-label"),t(),e(938,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(939,"code"),e(940,"p-additional-help-tooltip"),t(),e(941," e "),n(942,"code"),e(943,"p-additional-help"),t(),e(944,") ser\xE1 ignorado."),t()()()(),n(945,"tr",15)(946,"td",16)(947,"div",24)(948,"span",25),e(949,"p-readonly"),o(950,"br"),t()()(),n(951,"td",20)(952,"code",27),e(953,"boolean"),t()(),n(954,"td",22),e(955,"-"),t(),n(956,"td",23)(957,"em")(958,"strong"),e(959,"(opcional)"),t()(),n(960,"p"),e(961,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(962,"tr",15)(963,"td",16)(964,"div",24)(965,"span",25),e(966,"p-required"),o(967,"br"),t()()(),n(968,"td",20)(969,"code",27),e(970,"boolean"),t()(),n(971,"td",22)(972,"p")(973,"code"),e(974,"false"),t()()(),n(975,"td",23)(976,"em")(977,"strong"),e(978,"(opcional)"),t()(),n(979,"p"),e(980,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(981,"blockquote")(982,"p"),e(983,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(984,"code"),e(985,"(p-disabled)"),t(),e(986,"."),t()()()(),n(987,"tr",15)(988,"td",16)(989,"div",24)(990,"span",25),e(991," p-required-field-error-message"),o(992,"br"),t()()(),n(993,"td",20)(994,"code",27),e(995,"boolean"),t()(),n(996,"td",22)(997,"p")(998,"code"),e(999,"false"),t()()(),n(1e3,"td",23)(1001,"em")(1002,"strong"),e(1003,"(opcional)"),t()(),n(1004,"p"),e(1005,"Exibe a mensagem setada na propriedade "),n(1006,"code"),e(1007,"p-error-pattern"),t(),e(1008," se o campo estiver vazio e for requerido."),t(),n(1009,"blockquote")(1010,"p"),e(1011,"Necess\xE1rio que a propriedade "),n(1012,"code"),e(1013,"p-required"),t(),e(1014," esteja habilitada."),t()()()(),n(1015,"tr",15)(1016,"td",16)(1017,"div",24)(1018,"span",25),e(1019," p-show-required"),o(1020,"br"),t()()(),n(1021,"td",20)(1022,"code",27),e(1023,"boolean"),t()(),n(1024,"td",22),e(1025,"-"),t(),n(1026,"td",23)(1027,"p"),e(1028,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1029,"blockquote")(1030,"p"),e(1031,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1032,"ul")(1033,"li"),e(1034,"N\xE3o possuir "),n(1035,"code"),e(1036,"p-help"),t(),e(1037," e/ou "),n(1038,"code"),e(1039,"p-label"),t(),e(1040,"."),t()()()(),n(1041,"tr",15)(1042,"td",16)(1043,"div",24)(1044,"span",25),e(1045," p-size"),o(1046,"br"),t()()(),n(1047,"td",20)(1048,"code",26),e(1049,"string"),t()(),n(1050,"td",22)(1051,"p")(1052,"code"),e(1053,"medium"),t()()(),n(1054,"td",23)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),t()(),n(1058,"p"),e(1059,"Define o tamanho do componente:"),t(),n(1060,"ul")(1061,"li")(1062,"code"),e(1063,"small"),t(),e(1064,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1065,"li")(1066,"code"),e(1067,"medium"),t(),e(1068,": altura do input como 44px."),t()(),n(1069,"blockquote")(1070,"p"),e(1071,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1072,"code"),e(1073,"medium"),t(),e(1074,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1075,"a",33),e(1076,"po-theme"),t(),e(1077,"."),t()()()(),n(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),e(1082," p-upper-case"),o(1083,"br"),t()()(),n(1084,"td",20)(1085,"code",27),e(1086,"boolean"),t()(),n(1087,"td",22),e(1088,"-"),t(),n(1089,"td",23)(1090,"p"),e(1091,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1092,"h3",11),e(1093,"M\xE9todos"),t(),n(1094,"table",34)(1095,"tr",15)(1096,"th",35)(1097,"div",24)(1098,"h4")(1099,"span",25),e(1100," focus "),t()()()()(),n(1101,"tr",23)(1102,"td",23)(1103,"p"),e(1104,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1105,"p"),e(1106,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1107,"pre")(1108,"code"),e(1109,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1110,"br"),n(1111,"h3"),e(1112,"Interfaces"),t(),n(1113,"h4",36)(1114,"code",5),e(1115,"ErrorAsyncProperties"),t()(),n(1116,"div",2)(1117,"p"),e(1118,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1119,"h4",11),e(1120,"Propriedades"),t(),n(1121,"table",12)(1122,"tr",13)(1123,"th",14),e(1124,"Nome"),t(),n(1125,"th",14),e(1126,"Tipo"),t(),n(1127,"th",14),e(1128,"Descri\xE7\xE3o"),t()(),n(1129,"tr",15)(1130,"td",16)(1131,"div",24)(1132,"span",25),e(1133," errorAsync"),o(1134,"br"),t()()(),n(1135,"td",20)(1136,"code",37),e(1137,"(value) => Observable<boolean>"),t()(),n(1138,"td",23)(1139,"p"),e(1140,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1141,"code"),e(1142,"change"),t(),e(1143," ou "),n(1144,"code"),e(1145,"change-model"),t(),e(1146,", dependendo do valor da propriedade "),n(1147,"code"),e(1148,"triggerMode"),t(),e(1149,"."),t()()(),n(1150,"tr",15)(1151,"td",16)(1152,"div",24)(1153,"span",25),e(1154," triggerMode"),o(1155,"br"),t()()(),n(1156,"td",20)(1157,"code",38),e(1158,"'change' "),t(),n(1159,"code",39),e(1160," 'changeModel'"),t()(),n(1161,"td",23)(1162,"em")(1163,"strong"),e(1164,"(opcional)"),t()(),n(1165,"p"),e(1166,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1167,"code"),e(1168,"change"),t(),e(1169," ou "),n(1170,"code"),e(1171,"change-model"),t(),e(1172,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var Se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(W($),W(ee))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[re,C,y,se,ce,be,ge],encapsulation:2})}return a})();var qe=[{path:"",component:Se}],he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=I({type:a});static \u0275inj=q({imports:[B.forChild(qe),B]})}return a})();var at=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=I({type:a});static \u0275inj=q({imports:[pe,he]})}return a})();export{at as DocPoInputModule};
