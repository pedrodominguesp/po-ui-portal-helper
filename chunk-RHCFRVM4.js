import{o as P,p as ee}from"./chunk-QBCDRFNO.js";import{$ as O,Ga as J,La as K,Ma as k,P as Y,R as Z,Wa as X,mb as $,v as A,yb as f,zb as v}from"./chunk-3RSXW52V.js";import{Bb as M,Ca as C,Cc as V,Dc as F,Ec as z,Fc as N,Gc as R,Ka as n,La as t,M as q,Ma as o,P as I,Qa as L,Ra as x,T as m,Tc as Q,U as c,Vc as U,Xc as B,ab as j,bb as e,db as y,fb as g,gb as b,hb as h,ia as d,ib as G,ja as W,kb as _,pa as S,qa as D,za as u}from"./chunk-4WWO4UYO.js";var te=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&o(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var ce=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-basic"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,ce,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,te],encapsulation:2})}return a})();var oe=(()=>{class a{additionalHelpTooltip;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(s){this.event=s}restore(){this.additionalHelpTooltip="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:20,vars:35,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=L();n(0,"po-password",1),h("ngModelChange",function(r){return m(p),b(i.password,r)||(i.password=r),c(r)}),x("p-blur",function(){return m(p),c(i.changeEvent("p-blur"))})("p-change",function(){return m(p),c(i.changeEvent("p-change"))})("p-change-model",function(){return m(p),c(i.changeEvent("p-change-model"))})("p-enter",function(){return m(p),c(i.changeEvent("p-enter"))})("p-keydown",function(){return m(p),c(i.changeEvent("p-keydown"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"hr"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return m(p),b(i.label,r)||(i.label=r),c(r)}),t(),n(9,"po-input",6),h("ngModelChange",function(r){return m(p),b(i.help,r)||(i.help=r),c(r)}),t(),n(10,"po-input",7),h("ngModelChange",function(r){return m(p),b(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),c(r)}),t(),n(11,"po-input",8),h("ngModelChange",function(r){return m(p),b(i.placeholder,r)||(i.placeholder=r),c(r)}),t(),n(12,"po-input",9),h("ngModelChange",function(r){return m(p),b(i.errorPattern,r)||(i.errorPattern=r),c(r)}),t(),n(13,"po-input",10),h("ngModelChange",function(r){return m(p),b(i.pattern,r)||(i.pattern=r),c(r)}),t(),n(14,"po-number",11),h("ngModelChange",function(r){return m(p),b(i.minlength,r)||(i.minlength=r),c(r)}),t(),n(15,"po-number",12),h("ngModelChange",function(r){return m(p),b(i.maxlength,r)||(i.maxlength=r),c(r)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(r){return m(p),b(i.properties,r)||(i.properties=r),c(r)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(r){return m(p),b(i.size,r)||(i.size=r),c(r)}),t(),n(18,"div",2)(19,"po-button",15),x("p-click",function(){return m(p),c(i.restore())}),t()()()}l&2&&(g("ngModel",i.password),u("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),d(3),u("p-value",i.password),d(),u("p-value",i.event),d(4),g("ngModel",i.label),d(),g("ngModel",i.help),d(),g("ngModel",i.additionalHelpTooltip),d(),g("ngModel",i.placeholder),d(),g("ngModel",i.errorPattern),d(),g("ngModel",i.pattern),d(),g("ngModel",i.minlength),d(),g("ngModel",i.maxlength),d(),g("ngModel",i.properties),u("p-options",i.propertiesOptions),d(),g("ngModel",i.size),u("p-options",i.sizeOptions))},dependencies:[R,V,F,N,z,A,Y,Z,J,K,k,X],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
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
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-password>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-labs"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,ge,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,oe],encapsulation:2})}return a})();var re=(()=>{class a{poAlert=I(O);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[G([O])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=L();n(0,"form",null,0)(2,"po-password",1),h("ngModelChange",function(r){return m(p),b(i.currentPassword,r)||(i.currentPassword=r),c(r)}),t(),n(3,"po-password",2),h("ngModelChange",function(r){return m(p),b(i.newPassword,r)||(i.newPassword=r),c(r)}),t(),n(4,"po-password",3),h("ngModelChange",function(r){return m(p),b(i.confirmNewPassword,r)||(i.confirmNewPassword=r),c(r)}),t(),n(5,"div",4)(6,"po-button",5),x("p-click",function(){return m(p),c(i.setPassword())}),t()()()}if(l&2){let p=j(1);d(2),g("ngModel",i.currentPassword),u("p-help",i.help),d(),g("ngModel",i.newPassword),u("p-disabled",i.currentPassword!==i.password),d(),g("ngModel",i.confirmNewPassword),u("p-disabled",i.currentPassword!==i.password),d(2),u("p-disabled",p.invalid)}},dependencies:[R,V,F,N,z,A,k],encapsulation:2})}return a})();var xe=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-reset"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,xe,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,re],encapsulation:2})}return a})();var de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:1197,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoPasswordComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-password"),t(),e(214," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(251,"code"),e(252,"p-help"),t(),e(253,"."),t()()(),n(254,"tr",15)(255,"td",16)(256,"div",24)(257,"span",25),e(258," p-additional-help-tooltip"),o(259,"br"),t()(),n(260,"div",19),e(261,"Deprecated"),t()(),n(262,"td",20)(263,"code",26),e(264,"string"),t()(),n(265,"td",22),e(266,"-"),t(),n(267,"td",23)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),n(271,"p"),e(272,"Exibe um \xEDcone de ajuda adicional ao "),n(273,"code"),e(274,"p-help"),t(),e(275,`, com o texto desta propriedade no tooltip.
Se o evento `),n(276,"code"),e(277,"p-additional-help"),t(),e(278,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(279,"strong"),e(280,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(281,"blockquote")(282,"p"),e(283,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(284,"tr",15)(285,"td",16)(286,"div",24)(287,"span",25),e(288," p-append-in-body"),o(289,"br"),t()()(),n(290,"td",20)(291,"code",27),e(292,"boolean"),t()(),n(293,"td",22)(294,"p")(295,"code"),e(296,"false"),t()()(),n(297,"td",23)(298,"em")(299,"strong"),e(300,"(opcional)"),t()(),n(301,"p"),e(302,"Define que o tooltip ("),n(303,"code"),e(304,"p-additional-help-tooltip"),t(),e(305," e/ou "),n(306,"code"),e(307,"p-error-limit"),t(),e(308,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(309,"blockquote")(310,"p"),e(311,"Quando utilizado com "),n(312,"code"),e(313,"p-additional-help-tooltip"),t(),e(314,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(315,"tr",15)(316,"td",16)(317,"div",24)(318,"span",25),e(319," p-auto-focus"),o(320,"br"),t()()(),n(321,"td",20)(322,"code",27),e(323,"boolean"),t()(),n(324,"td",22)(325,"p")(326,"code"),e(327,"false"),t()()(),n(328,"td",23)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Aplica foco no elemento ao ser iniciado."),t(),n(334,"blockquote")(335,"p"),e(336,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(337,"tr",15)(338,"td",16)(339,"div",17)(340,"span",18),e(341," (p-blur)"),o(342,"br"),t()()(),n(343,"td",20)(344,"code",21),e(345,"EventEmitter"),t()(),n(346,"td",22),e(347,"-"),t(),n(348,"td",23)(349,"em")(350,"strong"),e(351,"(opcional)"),t()(),n(352,"p"),e(353,"Evento disparado ao sair do campo."),t()()(),n(354,"tr",15)(355,"td",16)(356,"div",17)(357,"span",18),e(358," (p-change)"),o(359,"br"),t()()(),n(360,"td",20)(361,"code",21),e(362,"EventEmitter"),t()(),n(363,"td",22),e(364,"-"),t(),n(365,"td",23)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),n(369,"p"),e(370,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(371,"tr",15)(372,"td",16)(373,"div",17)(374,"span",18),e(375," (p-change-model)"),o(376,"br"),t()()(),n(377,"td",20)(378,"code",21),e(379,"EventEmitter"),t()(),n(380,"td",22),e(381,"-"),t(),n(382,"td",23)(383,"em")(384,"strong"),e(385,"(opcional)"),t()(),n(386,"p"),e(387,"Evento disparado ao alterar valor do model."),t()()(),n(388,"tr",15)(389,"td",16)(390,"div",24)(391,"span",25),e(392,"p-clean"),o(393,"br"),t()()(),n(394,"td",20)(395,"code",27),e(396,"boolean"),t()(),n(397,"td",22),e(398,"-"),t(),n(399,"td",23)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),n(403,"p"),e(404,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(405,"tr",15)(406,"td",16)(407,"div",24)(408,"span",25),e(409,"p-disabled"),o(410,"br"),t()()(),n(411,"td",20)(412,"code",27),e(413,"boolean"),t()(),n(414,"td",22)(415,"p")(416,"code"),e(417,"false"),t()()(),n(418,"td",23)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),n(422,"p"),e(423,"Se verdadeiro, desabilita o campo."),t()()(),n(424,"tr",15)(425,"td",16)(426,"div",24)(427,"span",25),e(428," p-emit-all-changes"),o(429,"br"),t()()(),n(430,"td",20)(431,"code",27),e(432,"boolean"),t()(),n(433,"td",22)(434,"p")(435,"code"),e(436,"false"),t()()(),n(437,"td",23)(438,"em")(439,"strong"),e(440,"(opcional)"),t()(),n(441,"p"),e(442,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(443,"tr",15)(444,"td",16)(445,"div",17)(446,"span",18),e(447," (p-enter)"),o(448,"br"),t()()(),n(449,"td",20)(450,"code",21),e(451,"EventEmitter"),t()(),n(452,"td",22),e(453,"-"),t(),n(454,"td",23)(455,"em")(456,"strong"),e(457,"(opcional)"),t()(),n(458,"p"),e(459,"Evento disparado ao entrar do campo."),t()()(),n(460,"tr",15)(461,"td",16)(462,"div",24)(463,"span",25),e(464," p-error-async-properties"),o(465,"br"),t()()(),n(466,"td",20)(467,"code",28),e(468,"ErrorAsyncProperties"),t()(),n(469,"td",22),e(470,"-"),t(),n(471,"td",23)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),n(475,"p"),e(476,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(477,"code"),e(478,"Reactive Forms"),t(),e(479,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(480,"code"),e(481,"asyncValidators"),t(),e(482,"."),t()()(),n(483,"tr",15)(484,"td",16)(485,"div",24)(486,"span",25),e(487," p-error-limit"),o(488,"br"),t()()(),n(489,"td",20)(490,"code",27),e(491,"boolean"),t()(),n(492,"td",22)(493,"p")(494,"code"),e(495,"false"),t()()(),n(496,"td",23)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),n(500,"p"),e(501,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(502,"blockquote")(503,"p"),e(504,"Caso essa propriedade seja definida como "),n(505,"code"),e(506,"true"),t(),e(507,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(508,"tr",15)(509,"td",16)(510,"div",24)(511,"span",25),e(512," p-error-pattern"),o(513,"br"),t()()(),n(514,"td",20)(515,"code",26),e(516,"string"),t()(),n(517,"td",22),e(518,"-"),t(),n(519,"td",23)(520,"em")(521,"strong"),e(522,"(opcional)"),t()(),n(523,"p"),e(524,"Mensagem que ser\xE1 apresentada quando o "),n(525,"code"),e(526,"pattern"),t(),e(527," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(528,"blockquote")(529,"p"),e(530,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(531,"code"),e(532,"p-required-field-error-message"),t(),e(533," em conjunto."),t()()()(),n(534,"tr",15)(535,"td",16)(536,"div",24)(537,"span",25),e(538," p-help"),o(539,"br"),t()()(),n(540,"td",20)(541,"code",26),e(542,"string"),t()(),n(543,"td",22),e(544,"-"),t(),n(545,"td",23)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),n(549,"p"),e(550,"Texto de apoio do campo."),t()()(),n(551,"tr",15)(552,"td",16)(553,"div",24)(554,"span",25),e(555," p-hide-password-peek"),o(556,"br"),t()()(),n(557,"td",20)(558,"code",27),e(559,"boolean"),t()(),n(560,"td",22)(561,"p")(562,"code"),e(563,"false"),t()()(),n(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),n(568,"p"),e(569,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(570,"tr",15)(571,"td",16)(572,"div",24)(573,"span",25),e(574," p-icon"),o(575,"br"),t()()(),n(576,"td",20)(577,"code",26),e(578,"string "),t(),n(579,"code",29),e(580," TemplateRef<void>"),t()(),n(581,"td",22),e(582,"-"),t(),n(583,"td",23)(584,"em")(585,"strong"),e(586,"(opcional)"),t()(),n(587,"p"),e(588,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(589,"p"),e(590,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(591,"a",30),e(592,"Biblioteca de \xEDcones"),t(),e(593,". conforme exemplo abaixo:"),t(),n(594,"pre")(595,"code"),e(596,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(597,"p"),e(598,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(599,"em"),e(600,"Font Awesome"),t(),e(601,", da seguinte forma:"),t(),n(602,"pre")(603,"code"),e(604,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(605,"p"),e(606,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(607,"code"),e(608,"TemplateRef"),t(),e(609,", conforme exemplo abaixo:"),t(),n(610,"pre")(611,"code"),e(612,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(613,"blockquote")(614,"p"),e(615,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(616,"code"),e(617,"font-size: inherit"),t(),e(618," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(619,"tr",15)(620,"td",16)(621,"div",17)(622,"span",18),e(623," (p-keydown)"),o(624,"br"),t()()(),n(625,"td",20)(626,"code",21),e(627,"EventEmitter"),t()(),n(628,"td",22),e(629,"-"),t(),n(630,"td",23)(631,"em")(632,"strong"),e(633,"(opcional)"),t()(),n(634,"p"),e(635,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(636,"code"),e(637,"KeyboardEvent"),t(),e(638," com informa\xE7\xF5es sobre a tecla."),t()()(),n(639,"tr",15)(640,"td",16)(641,"div",24)(642,"span",25),e(643," p-label"),o(644,"br"),t()()(),n(645,"td",20)(646,"code",26),e(647,"string"),t()(),n(648,"td",22),e(649,"-"),t(),n(650,"td",23)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),n(654,"p"),e(655,"R\xF3tulo do campo."),t()()(),n(656,"tr",15)(657,"td",16)(658,"div",24)(659,"span",25),e(660," p-label-text-wrap"),o(661,"br"),t()()(),n(662,"td",20)(663,"code",27),e(664,"boolean"),t()(),n(665,"td",22)(666,"p")(667,"code"),e(668,"false"),t()()(),n(669,"td",23)(670,"em")(671,"strong"),e(672,"(opcional)"),t()(),n(673,"p"),e(674,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(675,"code"),e(676,"p-label"),t(),e(677,". Quando "),n(678,"code"),e(679,"p-label-text-wrap"),t(),e(680,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(681,"tr",15)(682,"td",16)(683,"div",24)(684,"span",25),e(685,"p-mask"),o(686,"br"),t()()(),n(687,"td",20)(688,"code",26),e(689,"string"),t()(),n(690,"td",22),e(691,"-"),t(),n(692,"td",23)(693,"em")(694,"strong"),e(695,"(opcional)"),t()(),n(696,"p"),e(697,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(698,"tr",15)(699,"td",16)(700,"div",24)(701,"span",25),e(702,"p-mask-format-model"),o(703,"br"),t()()(),n(704,"td",20)(705,"code",27),e(706,"boolean"),t()(),n(707,"td",22)(708,"p")(709,"code"),e(710,"false"),t()()(),n(711,"td",23)(712,"em")(713,"strong"),e(714,"(opcional)"),t()(),n(715,"p"),e(716,"Indica se o "),n(717,"code"),e(718,"model"),t(),e(719," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(720,"tr",15)(721,"td",16)(722,"div",24)(723,"span",25),e(724," p-mask-no-length-validation"),o(725,"br"),t()()(),n(726,"td",20)(727,"code",27),e(728,"boolean"),t()(),n(729,"td",22)(730,"p")(731,"code"),e(732,"false"),t()()(),n(733,"td",23)(734,"p"),e(735,"Define se os caracteres especiais da m\xE1scara devem ser ignorados ao validar os comprimentos m\xEDnimo ("),n(736,"code"),e(737,"minLength"),t(),e(738,") e m\xE1ximo ("),n(739,"code"),e(740,"maxLength"),t(),e(741,") do campo."),t(),n(742,"ul")(743,"li"),e(744,"Quando "),n(745,"code"),e(746,"true"),t(),e(747,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(748,"li"),e(749,"Quando "),n(750,"code"),e(751,"false"),t(),e(752,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(753,"blockquote")(754,"p"),e(755,"Ser\xE1 ignorado essa propriedade , caso esteja utilizando junto com a propriedade "),n(756,"code"),e(757,"p-mask-format-model"),t(),e(758,"."),t()(),n(759,"p"),e(760,"Exemplo:"),t(),n(761,"pre")(762,"code"),e(763,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(764,"ul")(765,"li"),e(766,"Entrada: "),n(767,"code"),e(768,"123-456"),t(),e(769," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(770,"code"),e(771,"-"),t(),e(772,"."),t()()()(),n(773,"tr",15)(774,"td",16)(775,"div",24)(776,"span",25),e(777," p-maxlength"),o(778,"br"),t()()(),n(779,"td",20)(780,"code",31),e(781,"number"),t()(),n(782,"td",22),e(783,"-"),t(),n(784,"td",23)(785,"em")(786,"strong"),e(787,"(opcional)"),t()(),n(788,"p"),e(789,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),e(794," p-minlength"),o(795,"br"),t()()(),n(796,"td",20)(797,"code",31),e(798,"number"),t()(),n(799,"td",22),e(800,"-"),t(),n(801,"td",23)(802,"em")(803,"strong"),e(804,"(opcional)"),t()(),n(805,"p"),e(806,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),e(811," name"),o(812,"br"),t()()(),n(813,"td",20)(814,"code",26),e(815,"string"),t()(),n(816,"td",22),e(817,"-"),t(),n(818,"td",23)(819,"p"),e(820,"Nome e identificador do campo."),t()()(),n(821,"tr",15)(822,"td",16)(823,"div",24)(824,"span",25),e(825," p-no-autocomplete"),o(826,"br"),t()()(),n(827,"td",20)(828,"code",27),e(829,"boolean"),t()(),n(830,"td",22)(831,"p")(832,"code"),e(833,"false"),t()()(),n(834,"td",23)(835,"em")(836,"strong"),e(837,"(opcional)"),t()(),n(838,"p"),e(839,"Define a propriedade nativa "),n(840,"code"),e(841,"autocomplete"),t(),e(842," do campo como "),n(843,"code"),e(844,"off"),t(),e(845,"."),t(),n(846,"blockquote")(847,"p"),e(848,"No componente "),n(849,"code"),e(850,"po-password"),t(),e(851," ser\xE1 definido como "),n(852,"code"),e(853,"new-password"),t(),e(854,"."),t()(),n(855,"p"),e(856,"Nos componentes "),n(857,"code"),e(858,"po-password"),t(),e(859," e "),n(860,"code"),e(861,"po-login"),t(),e(862," o valor padr\xE3o ser\xE1 "),n(863,"code"),e(864,"true"),t(),e(865,"."),t()()(),n(866,"tr",15)(867,"td",16)(868,"div",24)(869,"span",25),e(870," p-optional"),o(871,"br"),t()()(),n(872,"td",20)(873,"code",27),e(874,"boolean"),t()(),n(875,"td",22)(876,"p")(877,"code"),e(878,"false"),t()()(),n(879,"td",23)(880,"em")(881,"strong"),e(882,"(opcional)"),t()(),n(883,"p"),e(884,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(885,"blockquote")(886,"p"),e(887,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(888,"ul")(889,"li"),e(890,"O campo conter "),n(891,"code"),e(892,"p-required"),t(),e(893,";"),t(),n(894,"li"),e(895,"N\xE3o possuir "),n(896,"code"),e(897,"p-help"),t(),e(898," e/ou "),n(899,"code"),e(900,"p-label"),t(),e(901,"."),t()()()(),n(902,"tr",15)(903,"td",16)(904,"div",24)(905,"span",25),e(906,"p-pattern"),o(907,"br"),t()()(),n(908,"td",20)(909,"code",26),e(910,"string"),t()(),n(911,"td",22),e(912,"-"),t(),n(913,"td",23)(914,"em")(915,"strong"),e(916,"(opcional)"),t()(),n(917,"p"),e(918,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(919,"code"),e(920,"(p-mask)"),t(),e(921,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(922,"tr",15)(923,"td",16)(924,"div",24)(925,"span",25),e(926," p-placeholder"),o(927,"br"),t()()(),n(928,"td",20)(929,"code",26),e(930,"string"),t()(),n(931,"td",22)(932,"p"),e(933,"''"),t()(),n(934,"td",23)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),n(938,"p"),e(939,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(940,"tr",15)(941,"td",16)(942,"div",24)(943,"span",25),e(944," p-helper"),o(945,"br"),t()()(),n(946,"td",20)(947,"code",32),e(948,"PoHelperOptions"),t()(),n(949,"td",22),e(950,"-"),t(),n(951,"td",23)(952,"em")(953,"strong"),e(954,"(opcional)"),t()(),n(955,"p"),e(956,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(957,"blockquote")(958,"p"),e(959,"Caso o "),n(960,"code"),e(961,"p-label"),t(),e(962,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(963,"code"),e(964,"p-additional-help-tooltip"),t(),e(965," e "),n(966,"code"),e(967,"p-additional-help"),t(),e(968,") ser\xE1 ignorado."),t()()()(),n(969,"tr",15)(970,"td",16)(971,"div",24)(972,"span",25),e(973,"p-readonly"),o(974,"br"),t()()(),n(975,"td",20)(976,"code",27),e(977,"boolean"),t()(),n(978,"td",22),e(979,"-"),t(),n(980,"td",23)(981,"em")(982,"strong"),e(983,"(opcional)"),t()(),n(984,"p"),e(985,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(986,"tr",15)(987,"td",16)(988,"div",24)(989,"span",25),e(990,"p-required"),o(991,"br"),t()()(),n(992,"td",20)(993,"code",27),e(994,"boolean"),t()(),n(995,"td",22)(996,"p")(997,"code"),e(998,"false"),t()()(),n(999,"td",23)(1e3,"em")(1001,"strong"),e(1002,"(opcional)"),t()(),n(1003,"p"),e(1004,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1005,"blockquote")(1006,"p"),e(1007,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1008,"code"),e(1009,"(p-disabled)"),t(),e(1010,"."),t()()()(),n(1011,"tr",15)(1012,"td",16)(1013,"div",24)(1014,"span",25),e(1015," p-required-field-error-message"),o(1016,"br"),t()()(),n(1017,"td",20)(1018,"code",27),e(1019,"boolean"),t()(),n(1020,"td",22)(1021,"p")(1022,"code"),e(1023,"false"),t()()(),n(1024,"td",23)(1025,"em")(1026,"strong"),e(1027,"(opcional)"),t()(),n(1028,"p"),e(1029,"Exibe a mensagem setada na propriedade "),n(1030,"code"),e(1031,"p-error-pattern"),t(),e(1032," se o campo estiver vazio e for requerido."),t(),n(1033,"blockquote")(1034,"p"),e(1035,"Necess\xE1rio que a propriedade "),n(1036,"code"),e(1037,"p-required"),t(),e(1038," esteja habilitada."),t()()()(),n(1039,"tr",15)(1040,"td",16)(1041,"div",24)(1042,"span",25),e(1043," p-show-required"),o(1044,"br"),t()()(),n(1045,"td",20)(1046,"code",27),e(1047,"boolean"),t()(),n(1048,"td",22),e(1049,"-"),t(),n(1050,"td",23)(1051,"p"),e(1052,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1053,"blockquote")(1054,"p"),e(1055,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1056,"ul")(1057,"li"),e(1058,"N\xE3o possuir "),n(1059,"code"),e(1060,"p-help"),t(),e(1061," e/ou "),n(1062,"code"),e(1063,"p-label"),t(),e(1064,"."),t()()()(),n(1065,"tr",15)(1066,"td",16)(1067,"div",24)(1068,"span",25),e(1069," p-size"),o(1070,"br"),t()()(),n(1071,"td",20)(1072,"code",26),e(1073,"string"),t()(),n(1074,"td",22)(1075,"p")(1076,"code"),e(1077,"medium"),t()()(),n(1078,"td",23)(1079,"em")(1080,"strong"),e(1081,"(opcional)"),t()(),n(1082,"p"),e(1083,"Define o tamanho do componente:"),t(),n(1084,"ul")(1085,"li")(1086,"code"),e(1087,"small"),t(),e(1088,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1089,"li")(1090,"code"),e(1091,"medium"),t(),e(1092,": altura do input como 44px."),t()(),n(1093,"blockquote")(1094,"p"),e(1095,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1096,"code"),e(1097,"medium"),t(),e(1098,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1099,"a",33),e(1100,"po-theme"),t(),e(1101,"."),t()()()(),n(1102,"tr",15)(1103,"td",16)(1104,"div",24)(1105,"span",25),e(1106," p-upper-case"),o(1107,"br"),t()()(),n(1108,"td",20)(1109,"code",27),e(1110,"boolean"),t()(),n(1111,"td",22),e(1112,"-"),t(),n(1113,"td",23)(1114,"p"),e(1115,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1116,"h3",11),e(1117,"M\xE9todos"),t(),n(1118,"table",34)(1119,"tr",15)(1120,"th",35)(1121,"div",24)(1122,"h4")(1123,"span",25),e(1124," focus "),t()()()()(),n(1125,"tr",23)(1126,"td",23)(1127,"p"),e(1128,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1129,"p"),e(1130,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1131,"pre")(1132,"code"),e(1133,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1134,"br"),n(1135,"h3"),e(1136,"Interfaces"),t(),n(1137,"h4",36)(1138,"code",5),e(1139,"ErrorAsyncProperties"),t()(),n(1140,"div",2)(1141,"p"),e(1142,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1143,"h4",11),e(1144,"Propriedades"),t(),n(1145,"table",12)(1146,"tr",13)(1147,"th",14),e(1148,"Nome"),t(),n(1149,"th",14),e(1150,"Tipo"),t(),n(1151,"th",14),e(1152,"Descri\xE7\xE3o"),t()(),n(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),e(1157," errorAsync"),o(1158,"br"),t()()(),n(1159,"td",20)(1160,"code",37),e(1161,"(value) => Observable<boolean>"),t()(),n(1162,"td",23)(1163,"p"),e(1164,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1165,"code"),e(1166,"change"),t(),e(1167," ou "),n(1168,"code"),e(1169,"change-model"),t(),e(1170,", dependendo do valor da propriedade "),n(1171,"code"),e(1172,"triggerMode"),t(),e(1173,"."),t()()(),n(1174,"tr",15)(1175,"td",16)(1176,"div",24)(1177,"span",25),e(1178," triggerMode"),o(1179,"br"),t()()(),n(1180,"td",20)(1181,"code",38),e(1182,"'change' "),t(),n(1183,"code",39),e(1184," 'changeModel'"),t()(),n(1185,"td",23)(1186,"em")(1187,"strong"),e(1188,"(opcional)"),t()(),n(1189,"p"),e(1190,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1191,"code"),e(1192,"change"),t(),e(1193," ou "),n(1194,"code"),e(1195,"change-model"),t(),e(1196,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var pe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,l){this.route=s,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let l=s.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(W(Q),W(U))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),l&2&&(u("p-actions",i.actions),d(2),u("p-active",i.activeTab==="doc"),d(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[$,f,v,ie,ae,le,de],encapsulation:2})}return a})();var ve=[{path:"",component:pe}],se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=q({imports:[B.forChild(ve),B]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=q({imports:[ee,se]})}return a})();export{Ze as DocPoPasswordModule};
