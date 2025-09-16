import{o as y,p as ie}from"./chunk-7QXRNAIE.js";import{Ga as Y,Ha as L,La as $,Ma as ee,P as J,R as K,V as F,Wa as te,mb as ne,ta as X,v as V,yb as v,zb as C}from"./chunk-DJTNC6KO.js";import{$a as I,Bb as M,Ca as w,Cc as D,Dc as j,Ec as G,Fc as z,Gc as Q,Ka as n,La as t,M as q,Ma as o,P as O,Qa as N,Ra as x,T as c,Tc as U,U as u,Vc as Z,Xc as W,Za as R,_a as H,bb as e,db as P,fb as S,gb as b,hb as h,ia as p,ja as A,kb as _,pa as g,qa as k,za as E}from"./chunk-4WWO4UYO.js";var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","login","p-label","PO Login"]],template:function(l,i){l&1&&o(0,"po-login",0)},dependencies:[L],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-basic/sample-po-login-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-login name="login" p-label="PO Login"> </po-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-basic/sample-po-login-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-login-basic',
  templateUrl: './sample-po-login-basic.component.html',
  standalone: false
})
export class SamplePoLoginBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-basic"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,ge,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,oe],encapsulation:2})}return a})();var re=(()=>{class a{additionalHelpTooltip;errorPattern;event;help;label;login;maxlength;minlength;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.errorPattern="",this.event="",this.label=void 0,this.login="",this.help=void 0,this.maxlength=void 0,this.minlength=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs"]],standalone:!1,decls:20,vars:34,consts:[["f","ngForm"],["name","login",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-help","Ex.: Required field","p-label","Error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let d=N();n(0,"po-login",1),h("ngModelChange",function(r){return c(d),b(i.login,r)||(i.login=r),u(r)}),x("p-blur",function(){return c(d),u(i.changeEvent("p-blur"))})("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return c(d),b(i.label,r)||(i.label=r),u(r)}),t(),n(9,"po-input",6),h("ngModelChange",function(r){return c(d),b(i.help,r)||(i.help=r),u(r)}),t(),n(10,"po-input",7),h("ngModelChange",function(r){return c(d),b(i.placeholder,r)||(i.placeholder=r),u(r)}),t(),n(11,"po-input",8),h("ngModelChange",function(r){return c(d),b(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),u(r)}),t(),n(12,"po-input",9),h("ngModelChange",function(r){return c(d),b(i.pattern,r)||(i.pattern=r),u(r)}),t(),n(13,"po-input",10),h("ngModelChange",function(r){return c(d),b(i.errorPattern,r)||(i.errorPattern=r),u(r)}),t(),n(14,"po-number",11),h("ngModelChange",function(r){return c(d),b(i.minlength,r)||(i.minlength=r),u(r)}),t(),n(15,"po-number",12),h("ngModelChange",function(r){return c(d),b(i.maxlength,r)||(i.maxlength=r),u(r)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(r){return c(d),b(i.properties,r)||(i.properties=r),u(r)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(r){return c(d),b(i.size,r)||(i.size=r),u(r)}),t(),n(18,"div",2)(19,"po-button",15),x("p-click",function(){return c(d),u(i.restore())}),t()()()}l&2&&(S("ngModel",i.login),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),E("p-value",i.login),p(),E("p-value",i.event),p(4),S("ngModel",i.label),p(),S("ngModel",i.help),p(),S("ngModel",i.placeholder),p(),S("ngModel",i.additionalHelpTooltip),p(),S("ngModel",i.pattern),p(),S("ngModel",i.errorPattern),p(),S("ngModel",i.minlength),p(),S("ngModel",i.maxlength),p(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),p(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[Q,D,j,z,G,V,J,K,Y,L,$,te],encapsulation:2})}return a})();var xe=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-labs/sample-po-login-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-login
  name="login"
  [(ngModel)]="login"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-login>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="login"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder">
  </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="errorPattern"
    [(ngModel)]="errorPattern"
    p-clean
    p-help="Ex.: Required field"
    p-label="Error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-labs/sample-po-login-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-labs',
  templateUrl: './sample-po-login-labs.component.html',
  standalone: false
})
export class SamplePoLoginLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  login: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

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
    this.errorPattern = '';
    this.event = '';

    this.label = undefined;
    this.login = '';

    this.help = undefined;

    this.maxlength = undefined;
    this.minlength = undefined;

    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-labs"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,xe,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,re],encapsulation:2})}return a})();var de=(()=>{class a{poNotification=O(X);poModal;userLogin;userPassword;primaryAction={label:"Confirm",action:()=>{this.confirmAction()}};openModal(){this.poModal.open()}cleanForm(){this.userLogin="",this.userPassword=""}confirmAction(){this.userLogin&&this.userPassword&&(this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`),this.poModal.close(),this.cleanForm())}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm"]],viewQuery:function(l,i){if(l&1&&R(F,7),l&2){let d;H(d=I())&&(i.poModal=d.first)}},standalone:!1,decls:7,vars:3,consts:[[1,"po-text-center"],[1,"po-font-subtitle"],["p-label","Confirm Identity",3,"p-click"],["p-hide-close","true","p-size","auto","p-title","Confirm your identity",3,"p-primary-action"],["name","userLogin","p-clean","","p-label","User","p-maxlength","40","p-placeholder","domain\\user","p-required","",3,"ngModelChange","ngModel"],["name","userPassword","p-clean","","p-label","Password","p-placeholder","Enter your password","p-required","",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"div",1),e(2," To gain a 25% discount on your purchases, confirm your identity with your username and password! "),t(),n(3,"po-button",2),x("p-click",function(){return i.openModal()}),t()(),n(4,"po-modal",3)(5,"po-login",4),h("ngModelChange",function(s){return b(i.userLogin,s)||(i.userLogin=s),s}),t(),n(6,"po-password",5),h("ngModelChange",function(s){return b(i.userPassword,s)||(i.userPassword=s),s}),t()()),l&2&&(p(4),E("p-primary-action",i.primaryAction),p(),S("ngModel",i.userLogin),p(),S("ngModel",i.userPassword))},dependencies:[D,z,V,L,ee,F],encapsulation:2})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login - Confirm Identity"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-confirm/sample-po-login-confirm.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-subtitle">
    To gain a 25% discount on your purchases, confirm your identity with your username and password!
  </div>

  <po-button p-label="Confirm Identity" (p-click)="openModal()"> </po-button>
</div>

<po-modal p-hide-close="true" p-size="auto" p-title="Confirm your identity" [p-primary-action]="primaryAction">
  <po-login
    name="userLogin"
    [(ngModel)]="userLogin"
    p-clean
    p-label="User"
    p-maxlength="40"
    p-placeholder="domain\\user"
    p-required
  >
  </po-login>

  <po-password
    name="userPassword"
    [(ngModel)]="userPassword"
    p-clean
    p-label="Password"
    p-placeholder="Enter your password"
    p-required
  >
  </po-password>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-confirm/sample-po-login-confirm.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-confirm',
  templateUrl: './sample-po-login-confirm.component.html',
  standalone: false
})
export class SamplePoLoginConfirmComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  userLogin: string;
  userPassword: string;

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(\`Discount successfully applied to user \${this.userLogin}!\`);

      this.poModal.close();
      this.cleanForm();
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-confirm"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,Ce,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,de],encapsulation:2})}return a})();var se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-doc"]],standalone:!1,decls:1178,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLoginComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-login"),t(),e(214," \xE9 um input espec\xEDfico para login. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-login
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
</po-login>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(251,"code"),e(252,"p-help"),t(),e(253,"."),t()()(),n(254,"tr",15)(255,"td",16)(256,"div",24)(257,"span",25),e(258," p-additional-help-tooltip"),o(259,"br"),t()(),n(260,"div",19),e(261,"Deprecated"),t()(),n(262,"td",20)(263,"code",26),e(264,"string"),t()(),n(265,"td",22),e(266,"-"),t(),n(267,"td",23)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),n(271,"p"),e(272,"Exibe um \xEDcone de ajuda adicional ao "),n(273,"code"),e(274,"p-help"),t(),e(275,`, com o texto desta propriedade no tooltip.
Se o evento `),n(276,"code"),e(277,"p-additional-help"),t(),e(278,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(279,"strong"),e(280,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(281,"blockquote")(282,"p"),e(283,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(284,"tr",15)(285,"td",16)(286,"div",24)(287,"span",25),e(288," p-append-in-body"),o(289,"br"),t()()(),n(290,"td",20)(291,"code",27),e(292,"boolean"),t()(),n(293,"td",22)(294,"p")(295,"code"),e(296,"false"),t()()(),n(297,"td",23)(298,"em")(299,"strong"),e(300,"(opcional)"),t()(),n(301,"p"),e(302,"Define que o tooltip ("),n(303,"code"),e(304,"p-additional-help-tooltip"),t(),e(305," e/ou "),n(306,"code"),e(307,"p-error-limit"),t(),e(308,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(309,"blockquote")(310,"p"),e(311,"Quando utilizado com "),n(312,"code"),e(313,"p-additional-help-tooltip"),t(),e(314,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(315,"tr",15)(316,"td",16)(317,"div",24)(318,"span",25),e(319," p-auto-focus"),o(320,"br"),t()()(),n(321,"td",20)(322,"code",27),e(323,"boolean"),t()(),n(324,"td",22)(325,"p")(326,"code"),e(327,"false"),t()()(),n(328,"td",23)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Aplica foco no elemento ao ser iniciado."),t(),n(334,"blockquote")(335,"p"),e(336,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(337,"tr",15)(338,"td",16)(339,"div",17)(340,"span",18),e(341," (p-blur)"),o(342,"br"),t()()(),n(343,"td",20)(344,"code",21),e(345,"EventEmitter"),t()(),n(346,"td",22),e(347,"-"),t(),n(348,"td",23)(349,"em")(350,"strong"),e(351,"(opcional)"),t()(),n(352,"p"),e(353,"Evento disparado ao sair do campo."),t()()(),n(354,"tr",15)(355,"td",16)(356,"div",17)(357,"span",18),e(358," (p-change)"),o(359,"br"),t()()(),n(360,"td",20)(361,"code",21),e(362,"EventEmitter"),t()(),n(363,"td",22),e(364,"-"),t(),n(365,"td",23)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),n(369,"p"),e(370,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(371,"tr",15)(372,"td",16)(373,"div",17)(374,"span",18),e(375," (p-change-model)"),o(376,"br"),t()()(),n(377,"td",20)(378,"code",21),e(379,"EventEmitter"),t()(),n(380,"td",22),e(381,"-"),t(),n(382,"td",23)(383,"em")(384,"strong"),e(385,"(opcional)"),t()(),n(386,"p"),e(387,"Evento disparado ao alterar valor do model."),t()()(),n(388,"tr",15)(389,"td",16)(390,"div",24)(391,"span",25),e(392,"p-clean"),o(393,"br"),t()()(),n(394,"td",20)(395,"code",27),e(396,"boolean"),t()(),n(397,"td",22),e(398,"-"),t(),n(399,"td",23)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),n(403,"p"),e(404,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(405,"tr",15)(406,"td",16)(407,"div",24)(408,"span",25),e(409,"p-disabled"),o(410,"br"),t()()(),n(411,"td",20)(412,"code",27),e(413,"boolean"),t()(),n(414,"td",22)(415,"p")(416,"code"),e(417,"false"),t()()(),n(418,"td",23)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),n(422,"p"),e(423,"Se verdadeiro, desabilita o campo."),t()()(),n(424,"tr",15)(425,"td",16)(426,"div",24)(427,"span",25),e(428," p-emit-all-changes"),o(429,"br"),t()()(),n(430,"td",20)(431,"code",27),e(432,"boolean"),t()(),n(433,"td",22)(434,"p")(435,"code"),e(436,"false"),t()()(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(443,"tr",15)(444,"td",16)(445,"div",17)(446,"span",18),e(447," (p-enter)"),o(448,"br"),t()()(),n(449,"td",20)(450,"code",21),e(451,"EventEmitter"),t()(),n(452,"td",22),e(453,"-"),t(),n(454,"td",23)(455,"em")(456,"strong"),e(457,"(opcional)"),t()(),n(458,"p"),e(459,"Evento disparado ao entrar do campo."),t()()(),n(460,"tr",15)(461,"td",16)(462,"div",24)(463,"span",25),e(464," p-error-async-properties"),o(465,"br"),t()()(),n(466,"td",20)(467,"code",28),e(468,"ErrorAsyncProperties"),t()(),n(469,"td",22),e(470,"-"),t(),n(471,"td",23)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),n(475,"p"),e(476,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(477,"code"),e(478,"Reactive Forms"),t(),e(479,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(480,"code"),e(481,"asyncValidators"),t(),e(482,"."),t()()(),n(483,"tr",15)(484,"td",16)(485,"div",24)(486,"span",25),e(487," p-error-limit"),o(488,"br"),t()()(),n(489,"td",20)(490,"code",27),e(491,"boolean"),t()(),n(492,"td",22)(493,"p")(494,"code"),e(495,"false"),t()()(),n(496,"td",23)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),n(500,"p"),e(501,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(502,"blockquote")(503,"p"),e(504,"Caso essa propriedade seja definida como "),n(505,"code"),e(506,"true"),t(),e(507,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(508,"tr",15)(509,"td",16)(510,"div",24)(511,"span",25),e(512," p-error-pattern"),o(513,"br"),t()()(),n(514,"td",20)(515,"code",26),e(516,"string"),t()(),n(517,"td",22),e(518,"-"),t(),n(519,"td",23)(520,"em")(521,"strong"),e(522,"(opcional)"),t()(),n(523,"p"),e(524,"Mensagem que ser\xE1 apresentada quando o "),n(525,"code"),e(526,"pattern"),t(),e(527," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(528,"blockquote")(529,"p"),e(530,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(531,"code"),e(532,"p-required-field-error-message"),t(),e(533," em conjunto."),t()()()(),n(534,"tr",15)(535,"td",16)(536,"div",24)(537,"span",25),e(538," p-help"),o(539,"br"),t()()(),n(540,"td",20)(541,"code",26),e(542,"string"),t()(),n(543,"td",22),e(544,"-"),t(),n(545,"td",23)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),n(549,"p"),e(550,"Texto de apoio do campo."),t()()(),n(551,"tr",15)(552,"td",16)(553,"div",24)(554,"span",25),e(555," p-icon"),o(556,"br"),t()()(),n(557,"td",20)(558,"code",26),e(559,"string "),t(),n(560,"code",29),e(561," TemplateRef<void>"),t()(),n(562,"td",22),e(563,"-"),t(),n(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),n(568,"p"),e(569,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(570,"p"),e(571,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(572,"a",30),e(573,"Biblioteca de \xEDcones"),t(),e(574,". conforme exemplo abaixo:"),t(),n(575,"pre")(576,"code"),e(577,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(578,"p"),e(579,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(580,"em"),e(581,"Font Awesome"),t(),e(582,", da seguinte forma:"),t(),n(583,"pre")(584,"code"),e(585,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(586,"p"),e(587,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(588,"code"),e(589,"TemplateRef"),t(),e(590,", conforme exemplo abaixo:"),t(),n(591,"pre")(592,"code"),e(593,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(594,"blockquote")(595,"p"),e(596,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(597,"code"),e(598,"font-size: inherit"),t(),e(599," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(600,"tr",15)(601,"td",16)(602,"div",17)(603,"span",18),e(604," (p-keydown)"),o(605,"br"),t()()(),n(606,"td",20)(607,"code",21),e(608,"EventEmitter"),t()(),n(609,"td",22),e(610,"-"),t(),n(611,"td",23)(612,"em")(613,"strong"),e(614,"(opcional)"),t()(),n(615,"p"),e(616,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(617,"code"),e(618,"KeyboardEvent"),t(),e(619," com informa\xE7\xF5es sobre a tecla."),t()()(),n(620,"tr",15)(621,"td",16)(622,"div",24)(623,"span",25),e(624," p-label"),o(625,"br"),t()()(),n(626,"td",20)(627,"code",26),e(628,"string"),t()(),n(629,"td",22),e(630,"-"),t(),n(631,"td",23)(632,"em")(633,"strong"),e(634,"(opcional)"),t()(),n(635,"p"),e(636,"R\xF3tulo do campo."),t()()(),n(637,"tr",15)(638,"td",16)(639,"div",24)(640,"span",25),e(641," p-label-text-wrap"),o(642,"br"),t()()(),n(643,"td",20)(644,"code",27),e(645,"boolean"),t()(),n(646,"td",22)(647,"p")(648,"code"),e(649,"false"),t()()(),n(650,"td",23)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),n(654,"p"),e(655,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(656,"code"),e(657,"p-label"),t(),e(658,". Quando "),n(659,"code"),e(660,"p-label-text-wrap"),t(),e(661,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(662,"tr",15)(663,"td",16)(664,"div",24)(665,"span",25),e(666,"p-mask"),o(667,"br"),t()()(),n(668,"td",20)(669,"code",26),e(670,"string"),t()(),n(671,"td",22),e(672,"-"),t(),n(673,"td",23)(674,"em")(675,"strong"),e(676,"(opcional)"),t()(),n(677,"p"),e(678,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(679,"tr",15)(680,"td",16)(681,"div",24)(682,"span",25),e(683,"p-mask-format-model"),o(684,"br"),t()()(),n(685,"td",20)(686,"code",27),e(687,"boolean"),t()(),n(688,"td",22)(689,"p")(690,"code"),e(691,"false"),t()()(),n(692,"td",23)(693,"em")(694,"strong"),e(695,"(opcional)"),t()(),n(696,"p"),e(697,"Indica se o "),n(698,"code"),e(699,"model"),t(),e(700," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(701,"tr",15)(702,"td",16)(703,"div",24)(704,"span",25),e(705," p-mask-no-length-validation"),o(706,"br"),t()()(),n(707,"td",20)(708,"code",27),e(709,"boolean"),t()(),n(710,"td",22)(711,"p")(712,"code"),e(713,"false"),t()()(),n(714,"td",23)(715,"p"),e(716,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(717,"code"),e(718,"minLength"),t(),e(719,") e m\xE1ximo ("),n(720,"code"),e(721,"maxLength"),t(),e(722,") do campo."),t(),n(723,"ul")(724,"li"),e(725,"Quando "),n(726,"code"),e(727,"true"),t(),e(728,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(729,"li"),e(730,"Quando "),n(731,"code"),e(732,"false"),t(),e(733,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(734,"blockquote")(735,"p"),e(736,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(737,"code"),e(738,"p-mask-format-model"),t(),e(739,"."),t()(),n(740,"p"),e(741,"Exemplo:"),t(),n(742,"pre")(743,"code"),e(744,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(745,"ul")(746,"li"),e(747,"Entrada: "),n(748,"code"),e(749,"123-456"),t(),e(750," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(751,"code"),e(752,"-"),t(),e(753,"."),t()()()(),n(754,"tr",15)(755,"td",16)(756,"div",24)(757,"span",25),e(758," p-maxlength"),o(759,"br"),t()()(),n(760,"td",20)(761,"code",31),e(762,"number"),t()(),n(763,"td",22),e(764,"-"),t(),n(765,"td",23)(766,"em")(767,"strong"),e(768,"(opcional)"),t()(),n(769,"p"),e(770,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(771,"tr",15)(772,"td",16)(773,"div",24)(774,"span",25),e(775," p-minlength"),o(776,"br"),t()()(),n(777,"td",20)(778,"code",31),e(779,"number"),t()(),n(780,"td",22),e(781,"-"),t(),n(782,"td",23)(783,"em")(784,"strong"),e(785,"(opcional)"),t()(),n(786,"p"),e(787,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(788,"tr",15)(789,"td",16)(790,"div",24)(791,"span",25),e(792," name"),o(793,"br"),t()()(),n(794,"td",20)(795,"code",26),e(796,"string"),t()(),n(797,"td",22),e(798,"-"),t(),n(799,"td",23)(800,"p"),e(801,"Nome e identificador do campo."),t()()(),n(802,"tr",15)(803,"td",16)(804,"div",24)(805,"span",25),e(806," p-no-autocomplete"),o(807,"br"),t()()(),n(808,"td",20)(809,"code",27),e(810,"boolean"),t()(),n(811,"td",22)(812,"p")(813,"code"),e(814,"false"),t()()(),n(815,"td",23)(816,"em")(817,"strong"),e(818,"(opcional)"),t()(),n(819,"p"),e(820,"Define a propriedade nativa "),n(821,"code"),e(822,"autocomplete"),t(),e(823," do campo como "),n(824,"code"),e(825,"off"),t(),e(826,"."),t(),n(827,"blockquote")(828,"p"),e(829,"No componente "),n(830,"code"),e(831,"po-password"),t(),e(832," ser\xE1 definido como "),n(833,"code"),e(834,"new-password"),t(),e(835,"."),t()(),n(836,"p"),e(837,"Nos componentes "),n(838,"code"),e(839,"po-password"),t(),e(840," e "),n(841,"code"),e(842,"po-login"),t(),e(843," o valor padr\xE3o ser\xE1 "),n(844,"code"),e(845,"true"),t(),e(846,"."),t()()(),n(847,"tr",15)(848,"td",16)(849,"div",24)(850,"span",25),e(851," p-optional"),o(852,"br"),t()()(),n(853,"td",20)(854,"code",27),e(855,"boolean"),t()(),n(856,"td",22)(857,"p")(858,"code"),e(859,"false"),t()()(),n(860,"td",23)(861,"em")(862,"strong"),e(863,"(opcional)"),t()(),n(864,"p"),e(865,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(866,"blockquote")(867,"p"),e(868,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(869,"ul")(870,"li"),e(871,"O campo conter "),n(872,"code"),e(873,"p-required"),t(),e(874,";"),t(),n(875,"li"),e(876,"N\xE3o possuir "),n(877,"code"),e(878,"p-help"),t(),e(879," e/ou "),n(880,"code"),e(881,"p-label"),t(),e(882,"."),t()()()(),n(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),e(887,"p-pattern"),o(888,"br"),t()()(),n(889,"td",20)(890,"code",26),e(891,"string"),t()(),n(892,"td",22),e(893,"-"),t(),n(894,"td",23)(895,"em")(896,"strong"),e(897,"(opcional)"),t()(),n(898,"p"),e(899,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(900,"code"),e(901,"(p-mask)"),t(),e(902,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(903,"tr",15)(904,"td",16)(905,"div",24)(906,"span",25),e(907," p-placeholder"),o(908,"br"),t()()(),n(909,"td",20)(910,"code",26),e(911,"string"),t()(),n(912,"td",22)(913,"p"),e(914,"''"),t()(),n(915,"td",23)(916,"em")(917,"strong"),e(918,"(opcional)"),t()(),n(919,"p"),e(920,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(921,"tr",15)(922,"td",16)(923,"div",24)(924,"span",25),e(925," p-helper"),o(926,"br"),t()()(),n(927,"td",20)(928,"code",32),e(929,"PoHelperOptions"),t()(),n(930,"td",22),e(931,"-"),t(),n(932,"td",23)(933,"em")(934,"strong"),e(935,"(opcional)"),t()(),n(936,"p"),e(937,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(938,"blockquote")(939,"p"),e(940,"Caso o "),n(941,"code"),e(942,"p-label"),t(),e(943,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(944,"code"),e(945,"p-additional-help-tooltip"),t(),e(946," e "),n(947,"code"),e(948,"p-additional-help"),t(),e(949,") ser\xE1 ignorado."),t()()()(),n(950,"tr",15)(951,"td",16)(952,"div",24)(953,"span",25),e(954,"p-readonly"),o(955,"br"),t()()(),n(956,"td",20)(957,"code",27),e(958,"boolean"),t()(),n(959,"td",22),e(960,"-"),t(),n(961,"td",23)(962,"em")(963,"strong"),e(964,"(opcional)"),t()(),n(965,"p"),e(966,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(967,"tr",15)(968,"td",16)(969,"div",24)(970,"span",25),e(971,"p-required"),o(972,"br"),t()()(),n(973,"td",20)(974,"code",27),e(975,"boolean"),t()(),n(976,"td",22)(977,"p")(978,"code"),e(979,"false"),t()()(),n(980,"td",23)(981,"em")(982,"strong"),e(983,"(opcional)"),t()(),n(984,"p"),e(985,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(986,"blockquote")(987,"p"),e(988,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(989,"code"),e(990,"(p-disabled)"),t(),e(991,"."),t()()()(),n(992,"tr",15)(993,"td",16)(994,"div",24)(995,"span",25),e(996," p-required-field-error-message"),o(997,"br"),t()()(),n(998,"td",20)(999,"code",27),e(1e3,"boolean"),t()(),n(1001,"td",22)(1002,"p")(1003,"code"),e(1004,"false"),t()()(),n(1005,"td",23)(1006,"em")(1007,"strong"),e(1008,"(opcional)"),t()(),n(1009,"p"),e(1010,"Exibe a mensagem setada na propriedade "),n(1011,"code"),e(1012,"p-error-pattern"),t(),e(1013," se o campo estiver vazio e for requerido."),t(),n(1014,"blockquote")(1015,"p"),e(1016,"Necess\xE1rio que a propriedade "),n(1017,"code"),e(1018,"p-required"),t(),e(1019," esteja habilitada."),t()()()(),n(1020,"tr",15)(1021,"td",16)(1022,"div",24)(1023,"span",25),e(1024," p-show-required"),o(1025,"br"),t()()(),n(1026,"td",20)(1027,"code",27),e(1028,"boolean"),t()(),n(1029,"td",22),e(1030,"-"),t(),n(1031,"td",23)(1032,"p"),e(1033,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1034,"blockquote")(1035,"p"),e(1036,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1037,"ul")(1038,"li"),e(1039,"N\xE3o possuir "),n(1040,"code"),e(1041,"p-help"),t(),e(1042," e/ou "),n(1043,"code"),e(1044,"p-label"),t(),e(1045,"."),t()()()(),n(1046,"tr",15)(1047,"td",16)(1048,"div",24)(1049,"span",25),e(1050," p-size"),o(1051,"br"),t()()(),n(1052,"td",20)(1053,"code",26),e(1054,"string"),t()(),n(1055,"td",22)(1056,"p")(1057,"code"),e(1058,"medium"),t()()(),n(1059,"td",23)(1060,"em")(1061,"strong"),e(1062,"(opcional)"),t()(),n(1063,"p"),e(1064,"Define o tamanho do componente:"),t(),n(1065,"ul")(1066,"li")(1067,"code"),e(1068,"small"),t(),e(1069,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1070,"li")(1071,"code"),e(1072,"medium"),t(),e(1073,": altura do input como 44px."),t()(),n(1074,"blockquote")(1075,"p"),e(1076,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1077,"code"),e(1078,"medium"),t(),e(1079,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1080,"a",33),e(1081,"po-theme"),t(),e(1082,"."),t()()()(),n(1083,"tr",15)(1084,"td",16)(1085,"div",24)(1086,"span",25),e(1087," p-upper-case"),o(1088,"br"),t()()(),n(1089,"td",20)(1090,"code",27),e(1091,"boolean"),t()(),n(1092,"td",22),e(1093,"-"),t(),n(1094,"td",23)(1095,"p"),e(1096,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1097,"h3",11),e(1098,"M\xE9todos"),t(),n(1099,"table",34)(1100,"tr",15)(1101,"th",35)(1102,"div",24)(1103,"h4")(1104,"span",25),e(1105," focus "),t()()()()(),n(1106,"tr",23)(1107,"td",23)(1108,"p"),e(1109,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1110,"p"),e(1111,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1112,"pre")(1113,"code"),e(1114,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1115,"br"),n(1116,"h3"),e(1117,"Interfaces"),t(),n(1118,"h4",36)(1119,"code",5),e(1120,"ErrorAsyncProperties"),t()(),n(1121,"div",2)(1122,"p"),e(1123,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1124,"h4",11),e(1125,"Propriedades"),t(),n(1126,"table",12)(1127,"tr",13)(1128,"th",14),e(1129,"Nome"),t(),n(1130,"th",14),e(1131,"Tipo"),t(),n(1132,"th",14),e(1133,"Descri\xE7\xE3o"),t()(),n(1134,"tr",15)(1135,"td",16)(1136,"div",24)(1137,"span",25),e(1138," errorAsync"),o(1139,"br"),t()()(),n(1140,"td",20)(1141,"code",37),e(1142,"(value) => Observable<boolean>"),t()(),n(1143,"td",23)(1144,"p"),e(1145,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1146,"code"),e(1147,"change"),t(),e(1148," ou "),n(1149,"code"),e(1150,"change-model"),t(),e(1151,", dependendo do valor da propriedade "),n(1152,"code"),e(1153,"triggerMode"),t(),e(1154,"."),t()()(),n(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),e(1159," triggerMode"),o(1160,"br"),t()()(),n(1161,"td",20)(1162,"code",38),e(1163,"'change' "),t(),n(1164,"code",39),e(1165," 'changeModel'"),t()(),n(1166,"td",23)(1167,"em")(1168,"strong"),e(1169,"(opcional)"),t()(),n(1170,"p"),e(1171,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1172,"code"),e(1173,"change"),t(),e(1174," ou "),n(1175,"code"),e(1176,"change-model"),t(),e(1177,"."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(A(U),A(Z))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-login-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-login-basic-view")(6,"sample-po-login-labs-view")(7,"sample-po-login-confirm-view"),t()()()),l&2&&(E("p-actions",i.actions),p(2),E("p-active",i.activeTab==="doc"),p(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ne,v,C,le,pe,me,se],encapsulation:2})}return a})();var Pe=[{path:"",component:ce}],ue=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=q({imports:[W.forChild(Pe),W]})}return a})();var et=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=q({imports:[ie,ue]})}return a})();export{et as DocPoLoginModule};
