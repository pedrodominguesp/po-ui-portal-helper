import{o as k,p as ae}from"./chunk-7QXRNAIE.js";import{Ga as te,La as oe,P as M,R as $,Wa as ne,mb as ie,sa as W,ta as ee,v as B,yb as C,zb as v}from"./chunk-DJTNC6KO.js";import{Bb as _,Ca as w,Cc as L,Dc as q,Ec as V,Fc as F,Gc as A,Ka as o,La as t,M as G,Ma as i,P as R,Pb as X,Qa as D,Ra as S,T as c,Tc as Y,U as u,Vc as Z,Xc as j,ab as Q,bb as e,db as y,fb as x,gb as g,hb as E,ia as r,ja as N,jb as z,kb as P,lb as U,pa as h,qa as O,qb as J,rb as K,za as s}from"./chunk-4WWO4UYO.js";var xe=()=>({value:"1",label:"Option 1"}),ge=()=>({value:"2",label:"Option 2"}),Ee=(a,he)=>[a,he],le=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&i(0,"po-checkbox-group",0),p&2&&s("p-options",U(3,Ee,z(1,xe),z(2,ge)))},dependencies:[M],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-basic"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,fe,n.hideSampleCodeTabs)))},dependencies:[_,k,C,v,le],encapsulation:2})}return a})();var re=(()=>{class a{additionalHelpTooltip;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:!1,decls:26,vars:33,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=D();o(0,"po-checkbox-group",2),E("ngModelChange",function(l){return c(d),g(n.checkboxGroup,l)||(n.checkboxGroup=l),u(l)}),S("p-change",function(){return c(d),u(n.changeEvent("p-change"))})("p-keydown",function(){return c(d),u(n.changeEvent("p-keydown"))}),t(),i(1,"hr"),o(2,"div",3),i(3,"po-info",4),J(4,"json"),i(5,"po-info",5),t(),i(6,"hr"),o(7,"form",null,0)(9,"po-input",6),E("ngModelChange",function(l){return c(d),g(n.option.value,l)||(n.option.value=l),u(l)}),t(),o(10,"po-input",7),E("ngModelChange",function(l){return c(d),g(n.option.label,l)||(n.option.label=l),u(l)}),t(),o(11,"po-switch",8),E("ngModelChange",function(l){return c(d),g(n.option.disabled,l)||(n.option.disabled=l),u(l)}),t(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return c(d),u(n.addOption())}),t()()(),i(14,"hr"),o(15,"form",null,1)(17,"po-input",10),E("ngModelChange",function(l){return c(d),g(n.label,l)||(n.label=l),u(l)}),t(),o(18,"po-input",11),E("ngModelChange",function(l){return c(d),g(n.help,l)||(n.help=l),u(l)}),t(),o(19,"po-input",12),E("ngModelChange",function(l){return c(d),g(n.additionalHelpTooltip,l)||(n.additionalHelpTooltip=l),u(l)}),t(),o(20,"po-input",13),E("ngModelChange",function(l){return c(d),g(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),u(l)}),t(),o(21,"po-checkbox-group",14),E("ngModelChange",function(l){return c(d),g(n.properties,l)||(n.properties=l),u(l)}),t(),o(22,"po-radio-group",15),E("ngModelChange",function(l){return c(d),g(n.columns,l)||(n.columns=l),u(l)}),t(),o(23,"po-radio-group",16),E("ngModelChange",function(l){return c(d),g(n.size,l)||(n.size=l),u(l)}),t(),o(24,"div",3)(25,"po-button",17),S("p-click",function(){return c(d),u(n.restore())}),t()()()}if(p&2){let d=Q(8);x("ngModel",n.checkboxGroup),s("p-additional-help-tooltip",n.additionalHelpTooltip)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-size",n.size),r(3),s("p-value",K(4,31,n.checkboxGroup)),r(2),s("p-value",n.event),r(4),x("ngModel",n.option.value),r(),x("ngModel",n.option.label),r(),x("ngModel",n.option.disabled),r(2),s("p-disabled",d.invalid),r(4),x("ngModel",n.label),r(),x("ngModel",n.help),r(),x("ngModel",n.additionalHelpTooltip),r(),x("ngModel",n.fieldErrorMessage),r(),x("ngModel",n.properties),s("p-options",n.propertiesOptions),r(),x("ngModel",n.columns),s("p-options",n.columnOptions),r(),x("ngModel",n.size),s("p-options",n.sizeOptions)}},dependencies:[A,L,q,F,V,B,M,$,te,W,ne,X],encapsulation:2})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
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
    p-label="Additional Help Tooltip"
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
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
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

  addOption() {
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-labs"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,we,n.hideSampleCodeTabs)))},dependencies:[_,k,C,v,re],encapsulation:2})}return a})();var me=(()=>{class a{poNotification=R(ee);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!")}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:!1,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let d=D();o(0,"div",1),e(1,"Password Rules"),t(),i(2,"hr"),o(3,"form",null,0)(5,"div",2),i(6,"po-checkbox-group",3),t(),i(7,"hr"),o(8,"div",2),i(9,"po-checkbox-group",4),t(),i(10,"hr"),o(11,"div",2)(12,"po-switch",5),E("ngModelChange",function(l){return c(d),g(n.expiration,l)||(n.expiration=l),u(l)}),t(),i(13,"po-number",6),t(),o(14,"div",2)(15,"po-switch",7),E("ngModelChange",function(l){return c(d),g(n.attempts,l)||(n.attempts=l),u(l)}),t(),o(16,"po-number",8),E("ngModelChange",function(l){return c(d),g(n.maxAttempts,l)||(n.maxAttempts=l),u(l)}),t()(),o(17,"div",2)(18,"po-button",9),S("p-click",function(){return c(d),u(n.confirm())}),t()()()}p&2&&(r(6),s("p-options",n.systemOptions),r(3),s("p-options",n.auditOptions),r(3),x("ngModel",n.expiration),r(),s("p-disabled",!n.expiration),r(2),x("ngModel",n.attempts),r(),x("ngModel",n.maxAttempts),s("p-disabled",!n.attempts))},dependencies:[A,L,q,F,V,B,M,oe,W],encapsulation:2})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group \u2013 Security policy"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-font-subtitle">Password Rules</div>

<hr />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <hr />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <hr />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  private poNotification = inject(PoNotificationService);

  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-password-policy"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,_e,n.hideSampleCodeTabs)))},dependencies:[_,k,C,v,me],encapsulation:2})}return a})();var ce=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:!1,decls:750,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox-group"),t(),e(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),t(),o(27,"blockquote")(28,"p"),e(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),o(30,"a",6)(31,"strong"),e(32,"PO Radio Group"),t()(),e(33,"."),t()(),o(34,"p"),e(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),t(),o(36,"pre")(37,"code"),e(38,`favorites = ['PO', 'Angular'];
`),t()(),o(39,"p"),e(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),o(41,"code"),e(42,"null"),t(),e(43,"), ou seja, nem marcado ("),o(44,"code"),e(45,"true"),t(),e(46,") e nem desmarcado ("),o(47,"code"),e(48,"false"),t(),e(49,`),
deve setar a propriedade `),o(50,"code"),e(51,"p-indeterminate"),t(),e(52," como "),o(53,"code"),e(54,"true"),t(),e(55,"."),t(),o(56,"p"),e(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),t(),o(58,"pre")(59,"code"),e(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),t()()(),o(61,"div",7)(62,"h4",8),e(63,"Seletor"),t(),o(64,"pre",9),e(65,`<po-checkbox-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-helper="PoHelperOptions"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),t()(),o(66,"h4",10),e(67,"Propriedades"),t(),o(68,"table",11)(69,"tr",12)(70,"th",13),e(71,"Nome"),t(),o(72,"th",13),e(73,"Tipo"),t(),o(74,"th",13),e(75,"Padr\xE3o"),t(),o(76,"th",13),e(77,"Descri\xE7\xE3o"),t()(),o(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),e(82," (p-additional-help)"),i(83,"br"),t()(),o(84,"div",18),e(85,"Deprecated"),t()(),o(86,"td",19)(87,"code",20),e(88,"EventEmitter"),t()(),o(89,"td",21),e(90,"-"),t(),o(91,"td",22)(92,"em")(93,"strong"),e(94,"(opcional)"),t()(),o(95,"p"),e(96,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(97,"code"),e(98,"p-help"),t(),e(99,"."),t()()(),o(100,"tr",14)(101,"td",15)(102,"div",23)(103,"span",24),e(104," p-additional-help-tooltip"),i(105,"br"),t()(),o(106,"div",18),e(107,"Deprecated"),t()(),o(108,"td",19)(109,"code",25),e(110,"string"),t()(),o(111,"td",21),e(112,"-"),t(),o(113,"td",22)(114,"em")(115,"strong"),e(116,"(opcional)"),t()(),o(117,"p"),e(118,"Exibe um \xEDcone de ajuda adicional ao "),o(119,"code"),e(120,"p-help"),t(),e(121,`, com o texto desta propriedade no tooltip.
Se o evento `),o(122,"code"),e(123,"p-additional-help"),t(),e(124,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(125,"strong"),e(126,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(127,"blockquote")(128,"p"),e(129,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),o(130,"tr",14)(131,"td",15)(132,"div",23)(133,"span",24),e(134," p-append-in-body"),i(135,"br"),t()()(),o(136,"td",19)(137,"code",26),e(138,"boolean"),t()(),o(139,"td",21)(140,"p")(141,"code"),e(142,"false"),t()()(),o(143,"td",22)(144,"em")(145,"strong"),e(146,"(opcional)"),t()(),o(147,"p"),e(148,"Define que o tooltip ("),o(149,"code"),e(150,"p-additional-help-tooltip"),t(),e(151," e/ou "),o(152,"code"),e(153,"p-error-limit"),t(),e(154,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(155,"blockquote")(156,"p"),e(157,"Quando utilizado com "),o(158,"code"),e(159,"p-additional-help-tooltip"),t(),e(160,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(161,"tr",14)(162,"td",15)(163,"div",23)(164,"span",24),e(165," p-auto-focus"),i(166,"br"),t()()(),o(167,"td",19)(168,"code",26),e(169,"boolean"),t()(),o(170,"td",21)(171,"p")(172,"code"),e(173,"false"),t()()(),o(174,"td",22)(175,"em")(176,"strong"),e(177,"(opcional)"),t()(),o(178,"p"),e(179,"Aplica foco no elemento ao ser iniciado."),t(),o(180,"blockquote")(181,"p"),e(182,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(183,"tr",14)(184,"td",15)(185,"div",16)(186,"span",17),e(187," (p-change)"),i(188,"br"),t()()(),o(189,"td",19)(190,"code",20),e(191,"EventEmitter"),t()(),o(192,"td",21),e(193,"-"),t(),o(194,"td",22)(195,"em")(196,"strong"),e(197,"(opcional)"),t()(),o(198,"p"),e(199,"Evento disparado ao alterar valor do campo"),t()()(),o(200,"tr",14)(201,"td",15)(202,"div",23)(203,"span",24),e(204," p-columns"),i(205,"br"),t()()(),o(206,"td",19)(207,"code",27),e(208,"number"),t()(),o(209,"td",21)(210,"p")(211,"code"),e(212,"2"),t()()(),o(213,"td",22)(214,"em")(215,"strong"),e(216,"(opcional)"),t()(),o(217,"p"),e(218,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),o(219,"em"),e(220,"checkbox"),t(),e(221,"."),t(),o(222,"ul")(223,"li"),e(224,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(225,"code"),e(226,"1"),t(),e(227," e "),o(228,"code"),e(229,"4"),t(),e(230," colunas."),t(),o(231,"li"),e(232,"Para resolu\xE7\xE3o "),o(233,"code"),e(234,"sm"),t(),e(235," a colunagem invariavelmente passa para "),o(236,"code"),e(237,"1"),t(),e(238," coluna."),t(),o(239,"li"),e(240,"Quando se trata de resolu\xE7\xE3o "),o(241,"code"),e(242,"md"),t(),e(243," e o valor estabelecido para colunas for superior a "),o(244,"code"),e(245,"2"),t(),e(246,`,
o `),o(247,"em"),e(248,"grid system"),t(),e(249," ser\xE1 composto por "),o(250,"code"),e(251,"2"),t(),e(252," colunas."),t(),o(253,"li"),e(254,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),o(255,"code"),e(256,"1"),t(),e(257," coluna para op\xE7\xF5es com textos grandes."),t()()()(),o(258,"tr",14)(259,"td",15)(260,"div",23)(261,"span",24),e(262," p-disabled"),i(263,"br"),t()()(),o(264,"td",19)(265,"code",26),e(266,"boolean"),t()(),o(267,"td",21)(268,"p")(269,"code"),e(270,"false"),t()()(),o(271,"td",22)(272,"em")(273,"strong"),e(274,"(opcional)"),t()(),o(275,"p"),e(276,"Desabilita todos os itens do checkbox."),t()()(),o(277,"tr",14)(278,"td",15)(279,"div",23)(280,"span",24),e(281," p-error-limit"),i(282,"br"),t()()(),o(283,"td",19)(284,"code",26),e(285,"boolean"),t()(),o(286,"td",21)(287,"p")(288,"code"),e(289,"false"),t()()(),o(290,"td",22)(291,"em")(292,"strong"),e(293,"(opcional)"),t()(),o(294,"p"),e(295,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(296,"blockquote")(297,"p"),e(298,"Caso essa propriedade seja definida como "),o(299,"code"),e(300,"true"),t(),e(301,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(302,"tr",14)(303,"td",15)(304,"div",23)(305,"span",24),e(306," p-field-error-message"),i(307,"br"),t()()(),o(308,"td",19)(309,"code",25),e(310,"string"),t()(),o(311,"td",21),e(312,"-"),t(),o(313,"td",22)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),o(317,"p"),e(318,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(319,"blockquote")(320,"p"),e(321,"Necess\xE1rio que a propriedade "),o(322,"code"),e(323,"p-required"),t(),e(324," esteja habilitada."),t()()()(),o(325,"tr",14)(326,"td",15)(327,"div",23)(328,"span",24),e(329," p-help"),i(330,"br"),t()()(),o(331,"td",19)(332,"code",25),e(333,"string"),t()(),o(334,"td",21),e(335,"-"),t(),o(336,"td",22)(337,"em")(338,"strong"),e(339,"(opcional)"),t()(),o(340,"p"),e(341,"Texto de apoio do campo"),t()()(),o(342,"tr",14)(343,"td",15)(344,"div",23)(345,"span",24),e(346," p-indeterminate"),i(347,"br"),t()()(),o(348,"td",19)(349,"code",26),e(350,"boolean"),t()(),o(351,"td",21)(352,"p")(353,"code"),e(354,"false"),t()()(),o(355,"td",22)(356,"em")(357,"strong"),e(358,"(opcional)"),t()(),o(359,"p"),e(360,"Caso exista a necessidade de usar o valor indeterminado ("),o(361,"code"),e(362,"null"),t(),e(363,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),o(364,"code"),e(365,"p-indeterminate"),t(),e(366," como "),o(367,"code"),e(368,"true"),t(),e(369,", por padr\xE3o essa propriedade vem desabilitada ("),o(370,"code"),e(371,"false"),t(),e(372,")."),t(),o(373,"p"),e(374,"Quando essa propriedade \xE9 setada como "),o(375,"code"),e(376,"true"),t(),e(377,", o "),o(378,"em"),e(379,"po-checkbox-group"),t(),e(380,` passa a devolver um objeto completo para o
`),o(381,"code"),e(382,"ngModel"),t(),e(383,", diferente do array que cont\xE9m apenas os valores selecionados."),t()()(),o(384,"tr",14)(385,"td",15)(386,"div",16)(387,"span",17),e(388," (p-keydown)"),i(389,"br"),t()()(),o(390,"td",19)(391,"code",20),e(392,"EventEmitter"),t()(),o(393,"td",21),e(394,"-"),t(),o(395,"td",22)(396,"em")(397,"strong"),e(398,"(opcional)"),t()(),o(399,"p"),e(400,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(401,"code"),e(402,"KeyboardEvent"),t(),e(403," com informa\xE7\xF5es sobre a tecla."),t()()(),o(404,"tr",14)(405,"td",15)(406,"div",23)(407,"span",24),e(408," p-label"),i(409,"br"),t()()(),o(410,"td",19)(411,"code",25),e(412,"string"),t()(),o(413,"td",21),e(414,"-"),t(),o(415,"td",22)(416,"em")(417,"strong"),e(418,"(opcional)"),t()(),o(419,"p"),e(420,"Label do campo"),t()()(),o(421,"tr",14)(422,"td",15)(423,"div",23)(424,"span",24),e(425," p-label-text-wrap"),i(426,"br"),t()()(),o(427,"td",19)(428,"code",26),e(429,"boolean"),t()(),o(430,"td",21)(431,"p")(432,"code"),e(433,"false"),t()()(),o(434,"td",22)(435,"em")(436,"strong"),e(437,"(opcional)"),t()(),o(438,"p"),e(439,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(440,"code"),e(441,"p-label"),t(),e(442,". Quando "),o(443,"code"),e(444,"p-label-text-wrap"),t(),e(445,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),e(450," name"),i(451,"br"),t()()(),o(452,"td",19)(453,"code",25),e(454,"string"),t()(),o(455,"td",21),e(456,"-"),t(),o(457,"td",22)(458,"p"),e(459,"Nome dos checkboxes"),t()()(),o(460,"tr",14)(461,"td",15)(462,"div",16)(463,"span",17),e(464," (ngModelChange)"),i(465,"br"),t()()(),o(466,"td",19)(467,"code",20),e(468,"EventEmitter"),t()(),o(469,"td",21),e(470,"-"),t(),o(471,"td",22)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),o(475,"p"),e(476,"Fun\xE7\xE3o para atualizar o "),o(477,"code"),e(478,"ngModel"),t(),e(479," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(480,"p"),e(481,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(482,"code"),e(483,"strictTemplates"),t(),e(484,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(485,"pre")(486,"code"),e(487,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),t()()()(),o(488,"tr",14)(489,"td",15)(490,"div",23)(491,"span",24),e(492," p-optional"),i(493,"br"),t()()(),o(494,"td",19)(495,"code",26),e(496,"boolean"),t()(),o(497,"td",21)(498,"p")(499,"code"),e(500,"false"),t()()(),o(501,"td",22)(502,"em")(503,"strong"),e(504,"(opcional)"),t()(),o(505,"p"),e(506,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(507,"blockquote")(508,"p"),e(509,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(510,"ul")(511,"li"),e(512,"O campo conter "),o(513,"code"),e(514,"p-required"),t(),e(515,";"),t(),o(516,"li"),e(517,"N\xE3o possuir "),o(518,"code"),e(519,"p-help"),t(),e(520," e/ou "),o(521,"code"),e(522,"p-label"),t(),e(523,"."),t()()()(),o(524,"tr",14)(525,"td",15)(526,"div",23)(527,"span",24),e(528," p-options"),i(529,"br"),t()()(),o(530,"td",19)(531,"code",28),e(532,"PoCheckboxGroupOption[]"),t()(),o(533,"td",21),e(534,"-"),t(),o(535,"td",22)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),o(539,"p"),e(540,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),t()()(),o(541,"tr",14)(542,"td",15)(543,"div",23)(544,"span",24),e(545," p-helper"),i(546,"br"),t()()(),o(547,"td",19)(548,"code",29),e(549,"PoHelperOptions"),t()(),o(550,"td",21),e(551,"-"),t(),o(552,"td",22)(553,"em")(554,"strong"),e(555,"(opcional)"),t()(),o(556,"p"),e(557,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),o(558,"blockquote")(559,"p"),e(560,"Caso o "),o(561,"code"),e(562,"p-label"),t(),e(563,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),o(564,"code"),e(565,"p-additional-help-tooltip"),t(),e(566," e "),o(567,"code"),e(568,"p-additional-help"),t(),e(569,") ser\xE1 ignorado."),t()()()(),o(570,"tr",14)(571,"td",15)(572,"div",23)(573,"span",24),e(574," p-required"),i(575,"br"),t()()(),o(576,"td",19)(577,"code",26),e(578,"boolean"),t()(),o(579,"td",21)(580,"p")(581,"code"),e(582,"false"),t()()(),o(583,"td",22)(584,"em")(585,"strong"),e(586,"(opcional)"),t()(),o(587,"p"),e(588,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(589,"tr",14)(590,"td",15)(591,"div",23)(592,"span",24),e(593," p-show-required"),i(594,"br"),t()()(),o(595,"td",19)(596,"code",26),e(597,"boolean"),t()(),o(598,"td",21),e(599,"-"),t(),o(600,"td",22)(601,"p"),e(602,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(603,"blockquote")(604,"p"),e(605,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(606,"ul")(607,"li"),e(608,"N\xE3o possuir "),o(609,"code"),e(610,"p-help"),t(),e(611," e/ou "),o(612,"code"),e(613,"p-label"),t(),e(614,"."),t()()()(),o(615,"tr",14)(616,"td",15)(617,"div",23)(618,"span",24),e(619," p-size"),i(620,"br"),t()()(),o(621,"td",19)(622,"code",25),e(623,"string"),t()(),o(624,"td",21)(625,"p")(626,"code"),e(627,"medium"),t()()(),o(628,"td",22)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),o(632,"p"),e(633,"Define o tamanho dos checkboxes do componente:"),t(),o(634,"ul")(635,"li")(636,"code"),e(637,"small"),t(),e(638,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(639,"li")(640,"code"),e(641,"medium"),t(),e(642,": 24x24."),t()(),o(643,"blockquote")(644,"p"),e(645,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(646,"code"),e(647,"medium"),t(),e(648,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(649,"a",30),e(650,"po-theme"),t(),e(651,"."),t()()()()(),o(652,"h3",10),e(653,"M\xE9todos"),t(),o(654,"table",31)(655,"tr",14)(656,"th",32)(657,"div",23)(658,"h4")(659,"span",24),e(660," focus "),t()()()()(),o(661,"tr",22)(662,"td",22)(663,"p"),e(664,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(665,"p"),e(666,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(667,"pre")(668,"code"),e(669,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),i(670,"br"),o(671,"h3"),e(672,"Interfaces"),t(),o(673,"h4",33)(674,"code",5),e(675,"PoCheckboxGroupOption"),t()(),o(676,"div",2)(677,"p"),e(678,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),t()(),o(679,"h4",10),e(680,"Propriedades"),t(),o(681,"table",11)(682,"tr",12)(683,"th",13),e(684,"Nome"),t(),o(685,"th",13),e(686,"Tipo"),t(),o(687,"th",13),e(688,"Descri\xE7\xE3o"),t()(),o(689,"tr",14)(690,"td",15)(691,"div",23)(692,"span",24),e(693," disabled"),i(694,"br"),t()()(),o(695,"td",19)(696,"code",26),e(697,"boolean"),t()(),o(698,"td",22)(699,"em")(700,"strong"),e(701,"(opcional)"),t()(),o(702,"p"),e(703,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),t(),o(704,"p"),e(705,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),t()()(),o(706,"tr",14)(707,"td",15)(708,"div",23)(709,"span",24),e(710," label"),i(711,"br"),t()()(),o(712,"td",19)(713,"code",25),e(714,"string"),t()(),o(715,"td",22)(716,"p"),e(717,"Texto exibido para o usu\xE1rio ao lado do checkbox."),t()()(),o(718,"tr",14)(719,"td",15)(720,"div",23)(721,"span",24),e(722," value"),i(723,"br"),t()()(),o(724,"td",19)(725,"code",25),e(726,"string"),t()(),o(727,"td",22)(728,"p"),e(729,"Valor retornado no model."),t(),o(730,"p"),e(731,"\xC9 poss\xEDvel usar os valores "),o(732,"code"),e(733,"true"),t(),e(734," e "),o(735,"code"),e(736,"false"),t(),e(737,", caso a propriedade "),o(738,"code"),e(739,"p-indeterminate"),t(),e(740," esteja setada como "),o(741,"code"),e(742,"true"),t(),e(743,`
passa a aceitar `),o(744,"code"),e(745,"null"),t(),e(746," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),o(747,"code"),e(748,"false"),t(),e(749,"."),t()()()()())},dependencies:[k],encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(N(Y),N(Z))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),i(3,"sample-po-checkbox-group-doc"),t(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),i(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),t()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ie,C,v,pe,de,se,ce],encapsulation:2})}return a})();var Ge=[{path:"",component:ue}],be=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=G({imports:[j.forChild(Ge),j]})}return a})();var nt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=G({imports:[ae,be]})}return a})();export{nt as DocPoCheckboxGroupModule};
