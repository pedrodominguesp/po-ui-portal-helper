import{o as C,p as ae}from"./chunk-QBCDRFNO.js";import{Aa as z,Fb as j,Ga as ie,P as ee,R as te,Wa as ne,mb as oe,ra as O,sa as T,ta as W,v as V,yb as w,zb as x}from"./chunk-3RSXW52V.js";import{Bb as M,Ca as P,Cc as F,Dc as L,Ec as q,Fc as I,Gc as D,Jc as Q,Ka as i,Kc as J,La as t,M as A,Ma as a,Oc as X,P as B,Qa as H,Ra as u,T as h,Tc as Z,U as b,Vc as $,Xc as K,bb as e,cb as R,db as y,fb as f,gb as g,hb as E,ia as p,ja as U,kb as _,pa as c,qa as N,za as m}from"./chunk-4WWO4UYO.js";var le=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(l,n){l&1&&a(0,"po-switch",0)},dependencies:[T],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-basic"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Ee,n.hideSampleCodeTabs)))},dependencies:[M,C,w,x,le],encapsulation:2})}return o})();var de=(()=>{class o{additionalHelpTooltip;event;fieldErrorMessage;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:O.Left},{label:"Right",value:O.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"},{value:"errorLimit",label:"Limit Error Message"},{value:"invalidValue",label:"Invalid Value is On/True"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0,this.fieldErrorMessage=""}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs"]],standalone:!1,decls:19,vars:28,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-error-limit","p-field-error-message","p-format-model","p-help","p-hide-label-status","p-invalid-value","p-label","p-label-off","p-label-on","p-label-position","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=H();i(0,"po-switch",1),E("ngModelChange",function(r){return h(s),g(n.switch,r)||(n.switch=r),b(r)}),u("p-change",function(){return h(s),b(n.changeEvent("p-change"))})("p-keydown",function(){return h(s),b(n.changeEvent("p-keydown"))}),t(),a(1,"hr"),i(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"hr"),i(6,"form",null,0)(8,"po-input",5),E("ngModelChange",function(r){return h(s),g(n.label,r)||(n.label=r),b(r)}),t(),i(9,"po-input",6),E("ngModelChange",function(r){return h(s),g(n.help,r)||(n.help=r),b(r)}),t(),i(10,"po-input",7),E("ngModelChange",function(r){return h(s),g(n.additionalHelpTooltip,r)||(n.additionalHelpTooltip=r),b(r)}),t(),i(11,"po-input",8),E("ngModelChange",function(r){return h(s),g(n.labelOff,r)||(n.labelOff=r),b(r)}),t(),i(12,"po-input",9),E("ngModelChange",function(r){return h(s),g(n.labelOn,r)||(n.labelOn=r),b(r)}),t(),i(13,"po-input",10),E("ngModelChange",function(r){return h(s),g(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),b(r)}),t(),i(14,"po-radio-group",11),E("ngModelChange",function(r){return h(s),g(n.labelPosition,r)||(n.labelPosition=r),b(r)}),t(),i(15,"po-checkbox-group",12),E("ngModelChange",function(r){return h(s),g(n.properties,r)||(n.properties=r),b(r)}),t(),i(16,"po-radio-group",13),E("ngModelChange",function(r){return h(s),g(n.size,r)||(n.size=r),b(r)}),t(),i(17,"div",2)(18,"po-button",14),u("p-click",function(){return h(s),b(n.restore())}),t()()()}l&2&&(f("ngModel",n.switch),m("p-additional-help-tooltip",n.additionalHelpTooltip)("p-disabled",n.properties.includes("disabled"))("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-field-error-message",n.fieldErrorMessage)("p-format-model",n.properties.includes("formatModel"))("p-help",n.help)("p-hide-label-status",n.properties.includes("hideLabelStatus"))("p-invalid-value",n.properties==null?null:n.properties.includes("invalidValue"))("p-label",n.label)("p-label-off",n.labelOff)("p-label-on",n.labelOn)("p-label-position",n.labelPosition)("p-size",n.size),p(3),m("p-value",n.switch),p(),m("p-value",n.event),p(4),f("ngModel",n.label),p(),f("ngModel",n.help),p(),f("ngModel",n.additionalHelpTooltip),p(),f("ngModel",n.labelOff),p(),f("ngModel",n.labelOn),p(),f("ngModel",n.fieldErrorMessage),p(),f("ngModel",n.labelPosition),m("p-options",n.labelPositionOptions),p(),f("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),f("ngModel",n.size),m("p-options",n.sizeOptions))},dependencies:[D,F,L,I,q,V,ee,te,ie,T,ne],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-field-error-message]="fieldErrorMessage"
  [p-format-model]="properties.includes('formatModel')"
  [p-help]="help"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-invalid-value]="properties?.includes('invalidValue')"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-switch>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOff"
    [(ngModel)]="labelOff"
    p-help="Text displayed when PO Switch is set to 'false'"
    p-label="Label Off"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOn"
    [(ngModel)]="labelOn"
    p-help="Text displayed when PO Switch is set to 'true'"
    p-label="Label On"
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

  <po-radio-group
    class="po-lg-6"
    name="labelPosition"
    [(ngModel)]="labelPosition"
    p-label="Label Position"
    [p-options]="labelPositionOptions"
  >
  </po-radio-group>

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
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  fieldErrorMessage: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  size: string;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'invalidValue', label: 'Invalid Value is On/True' }
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
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.size = 'medium';
    this.switch = undefined;
    this.fieldErrorMessage = '';
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-labs"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,xe,n.hideSampleCodeTabs)))},dependencies:[M,C,w,x,de],encapsulation:2})}return o})();var se=(()=>{class o{poNotification=B(W);labelPosition=O.Left;serviceFee=!1;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order"]],standalone:!1,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){if(l&1){let s=H();i(0,"div",1)(1,"po-widget",2)(2,"form",null,0),a(4,"po-table",3),i(5,"po-switch",4),E("ngModelChange",function(r){return h(s),g(n.serviceFee,r)||(n.serviceFee=r),b(r)}),u("p-change",function(){return h(s),b(n.addServiceFee())}),t(),i(6,"div",5)(7,"div",6),e(8,"Total value"),t(),i(9,"span",7),e(10,"R$"),t(),i(11,"span",8),e(12),t()(),i(13,"div",1)(14,"po-button",9),u("p-click",function(){return h(s),b(n.confirm())}),t()()()()()}l&2&&(p(4),m("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),f("ngModel",n.serviceFee),m("p-label-position",n.labelPosition),p(7),R(n.totalAmount))},dependencies:[D,F,L,I,q,V,T,z,j],encapsulation:2})}return o})();var ye=o=>({"docs-sample-code-tabs":o}),ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order/sample-po-switch-order.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon an an-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  private poNotification = inject(PoNotificationService);

  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ye,n.hideSampleCodeTabs)))},dependencies:[M,C,w,x,se],encapsulation:2})}return o})();var ue=(()=>{class o{poNotification=B(W);formBuilder=B(X);formOrderSummary;labelPosition=O.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let d=this.formOrderSummary.get("serviceFee").value,l=1.1;this.totalAmount=d?parseFloat((this.totalAmount*l).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form"]],standalone:!1,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"po-widget",1)(2,"form",2),a(3,"po-table",3),i(4,"po-switch",4),u("p-change",function(){return n.addServiceFee()}),t(),i(5,"div",5)(6,"div",6),e(7,"Total value"),t(),i(8,"span",7),e(9,"R$"),t(),i(10,"span",8),e(11),t()(),i(12,"div",0)(13,"po-button",9),u("p-click",function(){return n.confirm()}),t()()()()()),l&2&&(p(2),m("formGroup",n.formOrderSummary),p(),m("p-columns",n.columns)("p-items",n.items)("p-hide-table-search",!1),p(),m("p-label-position",n.labelPosition),p(7),R(n.totalAmount))},dependencies:[D,F,L,Q,J,V,T,z,j],encapsulation:2})}return o})();var Te=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary Reactive Form"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),a(22,"sample-po-switch-order-reactive-form"),t(),a(23,"hr")),l&2&&(p(5),P("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Te,n.hideSampleCodeTabs)))},dependencies:[M,C,w,x,ue],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-switch-doc"]],standalone:!1,decls:741,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoSwitchComponent"),t()(),i(21,"div",2)(22,"p"),e(23," O componente "),i(24,"code"),e(25,"po-switch"),t(),e(26," \xE9 um "),i(27,"a",6),e(28,"checkbox"),t(),e(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),t(),i(30,"p"),e(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),t(),i(32,"p"),e(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),t(),i(34,"blockquote")(35,"p"),e(36,"O componente n\xE3o altera o valor incial informado no "),i(37,"em"),e(38,"model"),t(),e(39,", portanto indica-se inicializa-lo caso ter necessidade."),t()(),i(40,"h4"),e(41,"Boas pr\xE1ticas"),t(),i(42,"ul")(43,"li"),e(44,"Evite "),i(45,"code"),e(46,"labels"),t(),e(47," extensos que quebram o layout do "),i(48,"code"),e(49,"po-switch"),t(),e(50,", use "),i(51,"code"),e(52,"labels"),t(),e(53," diretos, curtos e intuitivos."),t()(),i(54,"h4"),e(55,"Acessibilidade tratada no componente"),t(),i(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),i(58,"ul")(59,"li"),e(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),i(61,"a",7),e(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),t()(),i(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),i(65,"a",8),e(66,"WCAG 2.4.12: Focus Appearance"),t()()(),i(67,"h4"),e(68,"Tokens customiz\xE1veis"),t(),i(69,"p"),e(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(71,"blockquote")(72,"p"),e(73,"Para maiores informa\xE7\xF5es, acesse o guia "),i(74,"a",9),e(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(76,"."),t()(),i(77,"table")(78,"thead")(79,"tr")(80,"th"),e(81,"Propriedade"),t(),i(82,"th"),e(83,"Descri\xE7\xE3o"),t(),i(84,"th"),e(85,"Valor Padr\xE3o"),t()()(),i(86,"tbody")(87,"tr")(88,"td")(89,"strong"),e(90,"Unchecked"),t()(),a(91,"td")(92,"td"),t(),i(93,"tr")(94,"td")(95,"code"),e(96,"--color-unchecked"),t()(),i(97,"td"),e(98,"Cor principal no estado desmarcado"),t(),i(99,"td")(100,"code"),e(101,"var(--color-neutral-light-00)"),t()()(),i(102,"tr")(103,"td")(104,"code"),e(105,"--border-color"),t()(),i(106,"td"),e(107,"Cor da borda"),t(),i(108,"td")(109,"code"),e(110,"var(--color-neutral-dark-70)"),t()()(),i(111,"tr")(112,"td")(113,"code"),e(114,"--track-unchecked"),t()(),i(115,"td"),e(116,"Cor principal da faixa no estado desmarcado"),t(),i(117,"td")(118,"code"),e(119,"var(--color-neutral-light-20)"),t()()(),i(120,"tr")(121,"td")(122,"strong"),e(123,"Checked"),t()(),a(124,"td")(125,"td"),t(),i(126,"tr")(127,"td")(128,"code"),e(129,"--color-checked"),t()(),i(130,"td"),e(131,"Cor principal no estado selecionado"),t(),i(132,"td")(133,"code"),e(134,"var(--color-action-default)"),t()()(),i(135,"tr")(136,"td")(137,"code"),e(138,"--track-checked"),t()(),i(139,"td"),e(140,"Cor da faixa no estado selecionado"),t(),i(141,"td")(142,"code"),e(143,"var(--color-brand-01-light)"),t()()(),i(144,"tr")(145,"td")(146,"strong"),e(147,"Hover"),t()(),a(148,"td")(149,"td"),t(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-unchecked-hover"),t()(),i(154,"td"),e(155,"Cor principal no estado hover desmarcado"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-pressed)"),t()()(),i(159,"tr")(160,"td")(161,"code"),e(162,"--color-checked-hover"),t()(),i(163,"td"),e(164,"Cor principal no estado hover marcado"),t(),i(165,"td")(166,"code"),e(167,"var(--color-action-pressed)"),t()()(),i(168,"tr")(169,"td")(170,"strong"),e(171,"Focused"),t()(),a(172,"td")(173,"td"),t(),i(174,"tr")(175,"td")(176,"code"),e(177,"--outline-color-focused"),t()(),i(178,"td"),e(179,"Cor do outline do estado de focus"),t(),i(180,"td")(181,"code"),e(182,"var(--color-action-focus)"),t()()(),i(183,"tr")(184,"td")(185,"strong"),e(186,"Disabled"),t()(),a(187,"td")(188,"td"),t(),i(189,"tr")(190,"td")(191,"code"),e(192,"--color-unchecked-disabled"),t()(),i(193,"td"),e(194,"Cor principal do disabled no estado desmarcado"),t(),i(195,"td")(196,"code"),e(197,"var(--color-neutral-light-20)"),t()()(),i(198,"tr")(199,"td")(200,"code"),e(201,"--color-checked-disabled"),t()(),i(202,"td"),e(203,"Cor principal do disabled no estado marcado"),t(),i(204,"td")(205,"code"),e(206,"var(--color-action-disabled)"),t()()()()()(),i(207,"div",10)(208,"h4",11),e(209,"Seletor"),t(),i(210,"pre",12),e(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    p-invalid-value="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    name="string"
    p-helper="PoHelperOptions"
    p-size="string" >
</po-switch>
`),t()(),i(212,"h4",13),e(213,"Propriedades"),t(),i(214,"table",14)(215,"tr",15)(216,"th",16),e(217,"Nome"),t(),i(218,"th",16),e(219,"Tipo"),t(),i(220,"th",16),e(221,"Padr\xE3o"),t(),i(222,"th",16),e(223,"Descri\xE7\xE3o"),t()(),i(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),e(228," (p-additional-help)"),a(229,"br"),t()(),i(230,"div",21),e(231,"Deprecated"),t()(),i(232,"td",22)(233,"code",23),e(234,"EventEmitter"),t()(),i(235,"td",24),e(236,"-"),t(),i(237,"td",25)(238,"em")(239,"strong"),e(240,"(opcional)"),t()(),i(241,"p"),e(242,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(243,"code"),e(244,"p-help"),t(),e(245,"."),t()()(),i(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),e(250," p-additional-help-tooltip"),a(251,"br"),t()(),i(252,"div",21),e(253,"Deprecated"),t()(),i(254,"td",22)(255,"code",28),e(256,"string"),t()(),i(257,"td",24),e(258,"-"),t(),i(259,"td",25)(260,"em")(261,"strong"),e(262,"(opcional)"),t()(),i(263,"p"),e(264,"Exibe um \xEDcone de ajuda adicional ao "),i(265,"code"),e(266,"p-help"),t(),e(267,`, com o texto desta propriedade no tooltip.
Se o evento `),i(268,"code"),e(269,"p-additional-help"),t(),e(270,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(271,"strong"),e(272,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(273,"blockquote")(274,"p"),e(275,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(276,"tr",17)(277,"td",18)(278,"div",26)(279,"span",27),e(280," p-append-in-body"),a(281,"br"),t()()(),i(282,"td",22)(283,"code",29),e(284,"boolean"),t()(),i(285,"td",24)(286,"p")(287,"code"),e(288,"false"),t()()(),i(289,"td",25)(290,"em")(291,"strong"),e(292,"(opcional)"),t()(),i(293,"p"),e(294,"Define que o tooltip ("),i(295,"code"),e(296,"p-additional-help-tooltip"),t(),e(297," e/ou "),i(298,"code"),e(299,"p-error-limit"),t(),e(300,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(301,"blockquote")(302,"p"),e(303,"Quando utilizado com "),i(304,"code"),e(305,"p-additional-help-tooltip"),t(),e(306,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(307,"tr",17)(308,"td",18)(309,"div",19)(310,"span",20),e(311," (p-change)"),a(312,"br"),t()()(),i(313,"td",22)(314,"code",23),e(315,"EventEmitter"),t()(),i(316,"td",24),e(317,"-"),t(),i(318,"td",25)(319,"em")(320,"strong"),e(321,"(opcional)"),t()(),i(322,"p"),e(323,"Evento disparado ao alterar valor do campo."),t()()(),i(324,"tr",17)(325,"td",18)(326,"div",26)(327,"span",27),e(328," p-disabled"),a(329,"br"),t()()(),i(330,"td",22)(331,"code",29),e(332,"boolean"),t()(),i(333,"td",24)(334,"p")(335,"code"),e(336,"false"),t()()(),i(337,"td",25)(338,"em")(339,"strong"),e(340,"(opcional)"),t()(),i(341,"p"),e(342,"Indica se o campo ser\xE1 desabilitado."),t()()(),i(343,"tr",17)(344,"td",18)(345,"div",26)(346,"span",27),e(347," p-error-limit"),a(348,"br"),t()()(),i(349,"td",22)(350,"code",29),e(351,"boolean"),t()(),i(352,"td",24)(353,"p")(354,"code"),e(355,"false"),t()()(),i(356,"td",25)(357,"em")(358,"strong"),e(359,"(opcional)"),t()(),i(360,"p"),e(361,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(362,"blockquote")(363,"p"),e(364,"Caso essa propriedade seja definida como "),i(365,"code"),e(366,"true"),t(),e(367,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(368,"tr",17)(369,"td",18)(370,"div",26)(371,"span",27),e(372," p-field-error-message"),a(373,"br"),t()()(),i(374,"td",22)(375,"code",28),e(376,"string"),t()(),i(377,"td",24),e(378,"-"),t(),i(379,"td",25)(380,"em")(381,"strong"),e(382,"(opcional)"),t()(),i(383,"p"),e(384,"Exibe a mensagem de erro configurada quando o campo estiver desligado(off/false)."),t()()(),i(385,"tr",17)(386,"td",18)(387,"div",26)(388,"span",27),e(389," p-format-model"),a(390,"br"),t()()(),i(391,"td",22)(392,"code",29),e(393,"boolean"),t()(),i(394,"td",24)(395,"p")(396,"code"),e(397,"false"),t()()(),i(398,"td",25)(399,"em")(400,"strong"),e(401,"(opcional)"),t()(),i(402,"p"),e(403,"Indica se o "),i(404,"code"),e(405,"model"),t(),e(406," receber\xE1 o valor formatado pelas propriedades "),i(407,"code"),e(408,"p-label-on"),t(),e(409," e "),i(410,"code"),e(411,"p-label-off"),t(),e(412,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(413,"blockquote")(414,"p"),e(415,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(416,"code"),e(417,"false"),t(),e(418,"."),t()()()(),i(419,"tr",17)(420,"td",18)(421,"div",26)(422,"span",27),e(423," p-help"),a(424,"br"),t()()(),i(425,"td",22)(426,"code",28),e(427,"string"),t()(),i(428,"td",24),e(429,"-"),t(),i(430,"td",25)(431,"p"),e(432,"Texto de apoio para o campo."),t()()(),i(433,"tr",17)(434,"td",18)(435,"div",26)(436,"span",27),e(437," p-hide-label-status"),a(438,"br"),t()()(),i(439,"td",22)(440,"code",29),e(441,"boolean"),t()(),i(442,"td",24)(443,"p")(444,"code"),e(445,"false"),t()()(),i(446,"td",25)(447,"em")(448,"strong"),e(449,"(opcional)"),t()(),i(450,"p"),e(451,"Indica se o status do "),i(452,"code"),e(453,"model"),t(),e(454," ser\xE1 escondido visualmente ao lado do switch."),t(),i(455,"blockquote")(456,"p"),e(457,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(458,"code"),e(459,"false"),t(),e(460,"."),t()()()(),i(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),e(465," p-invalid-value"),a(466,"br"),t()()(),i(467,"td",22)(468,"code",29),e(469,"boolean"),t()(),i(470,"td",24)(471,"p")(472,"code"),e(473,"false"),t()()(),i(474,"td",25)(475,"em")(476,"strong"),e(477,"(opcional)"),t()(),i(478,"p"),e(479,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(480,"code"),e(481,"p-field-error-message"),t(),e(482,"."),t(),i(483,"blockquote")(484,"p"),e(485,"Caso essa propriedade seja definida como "),i(486,"code"),e(487,"true"),t(),e(488,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()()()(),i(489,"tr",17)(490,"td",18)(491,"div",19)(492,"span",20),e(493," (p-keydown)"),a(494,"br"),t()()(),i(495,"td",22)(496,"code",23),e(497,"EventEmitter"),t()(),i(498,"td",24),e(499,"-"),t(),i(500,"td",25)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),i(504,"p"),e(505,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(506,"code"),e(507,"KeyboardEvent"),t(),e(508," com informa\xE7\xF5es sobre a tecla."),t()()(),i(509,"tr",17)(510,"td",18)(511,"div",26)(512,"span",27),e(513," p-label"),a(514,"br"),t()()(),i(515,"td",22)(516,"code",28),e(517,"string"),t()(),i(518,"td",24),e(519,"-"),t(),i(520,"td",25)(521,"p"),e(522,"R\xF3tulo exibido pelo componente."),t()()(),i(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),e(527," p-label-off"),a(528,"br"),t()()(),i(529,"td",22)(530,"code",28),e(531,"string"),t()(),i(532,"td",24)(533,"p")(534,"code"),e(535,"false"),t()()(),i(536,"td",25)(537,"p"),e(538,"Texto exibido quando o valor do componente for "),i(539,"code"),e(540,"false"),t(),e(541,"."),t()()(),i(542,"tr",17)(543,"td",18)(544,"div",26)(545,"span",27),e(546," p-label-on"),a(547,"br"),t()()(),i(548,"td",22)(549,"code",28),e(550,"string"),t()(),i(551,"td",24)(552,"p")(553,"code"),e(554,"true"),t()()(),i(555,"td",25)(556,"p"),e(557,"Texto exibido quando o valor do componente for "),i(558,"code"),e(559,"true"),t(),e(560,"."),t()()(),i(561,"tr",17)(562,"td",18)(563,"div",26)(564,"span",27),e(565," p-label-position"),a(566,"br"),t()()(),i(567,"td",22)(568,"code",30),e(569,"PoSwitchLabelPosition"),t()(),i(570,"td",24),e(571,"-"),t(),i(572,"td",25)(573,"em")(574,"strong"),e(575,"(opcional)"),t()(),i(576,"p"),e(577,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),t(),i(578,"blockquote")(579,"p"),e(580,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(581,"tr",17)(582,"td",18)(583,"div",26)(584,"span",27),e(585," name"),a(586,"br"),t()()(),i(587,"td",22)(588,"code",28),e(589,"string"),t()(),i(590,"td",24),e(591,"-"),t(),i(592,"td",25)(593,"p"),e(594,"Nome do componente."),t()()(),i(595,"tr",17)(596,"td",18)(597,"div",26)(598,"span",27),e(599," p-helper"),a(600,"br"),t()()(),i(601,"td",22)(602,"code",31),e(603,"PoHelperOptions"),t()(),i(604,"td",24),e(605,"-"),t(),i(606,"td",25)(607,"em")(608,"strong"),e(609,"(opcional)"),t()(),i(610,"p"),e(611,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(612,"blockquote")(613,"p"),e(614,"Caso o "),i(615,"code"),e(616,"p-label"),t(),e(617,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),i(618,"code"),e(619,"p-additional-help-tooltip"),t(),e(620," e "),i(621,"code"),e(622,"p-additional-help"),t(),e(623,") ser\xE1 ignorado."),t()()()(),i(624,"tr",17)(625,"td",18)(626,"div",26)(627,"span",27),e(628," p-size"),a(629,"br"),t()()(),i(630,"td",22)(631,"code",28),e(632,"string"),t()(),i(633,"td",24)(634,"p")(635,"code"),e(636,"medium"),t()()(),i(637,"td",25)(638,"em")(639,"strong"),e(640,"(opcional)"),t()(),i(641,"p"),e(642,"Define o tamanho do componente:"),t(),i(643,"ul")(644,"li")(645,"code"),e(646,"small"),t(),e(647,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(648,"li")(649,"code"),e(650,"medium"),t(),e(651,": altura de 24px."),t()(),i(652,"blockquote")(653,"p"),e(654,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(655,"code"),e(656,"medium"),t(),e(657,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(658,"a",32),e(659,"po-theme"),t(),e(660,"."),t()()()()(),i(661,"h3",13),e(662,"M\xE9todos"),t(),i(663,"table",33)(664,"tr",17)(665,"th",34)(666,"div",26)(667,"h4")(668,"span",27),e(669," showAdditionalHelp "),t()()()()(),i(670,"tr",25)(671,"td",25)(672,"p"),e(673,"M\xE9todo que exibe "),i(674,"code"),e(675,"p-additionalHelpTooltip"),t(),e(676," ou executa a a\xE7\xE3o definida em "),i(677,"code"),e(678,"p-additionalHelp"),t(),e(679,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(680,"code"),e(681,"p-keydown"),t(),e(682,"."),t(),i(683,"pre")(684,"code"),e(685,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),i(686,"pre")(687,"code"),e(688,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(689,"br"),i(690,"table",33)(691,"tr",17)(692,"th",34)(693,"div",26)(694,"h4")(695,"span",27),e(696," focus "),t()()()()(),i(697,"tr",25)(698,"td",25)(699,"p"),e(700,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(701,"p"),e(702,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(703,"pre")(704,"code"),e(705,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),t()()()()(),a(706,"br"),i(707,"h3"),e(708,"Enums"),t(),i(709,"h4",4)(710,"code",5),e(711,"PoSwitchLabelPosition"),t()(),i(712,"div",2)(713,"p"),e(714,"Enum para posicionar o label do valor do po-switch."),t()(),i(715,"h4",13),e(716,"Propriedades"),t(),i(717,"table",14)(718,"tr",15)(719,"th",16),e(720,"Nome"),t(),i(721,"th",16),e(722,"Descri\xE7\xE3o"),t()(),i(723,"tr",17)(724,"td",18)(725,"div",26)(726,"span",27),e(727," Right"),a(728,"br"),t()()(),i(729,"td",25)(730,"p"),e(731,"Posiciona o label do lado esquerdo do switch."),t()()(),i(732,"tr",17)(733,"td",18)(734,"div",26)(735,"span",27),e(736," Left"),a(737,"br"),t()()(),i(738,"td",25)(739,"p"),e(740,"Posiciona o label do lado direito do switch."),t()()()()())},dependencies:[C],encapsulation:2})}return o})();var Se=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(U(Z),U($))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-switch-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),t()()()),l&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[oe,w,x,re,me,ce,he,be],encapsulation:2})}return o})();var Fe=[{path:"",component:Se}],fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=N({type:o});static \u0275inj=A({imports:[K.forChild(Fe),K]})}return o})();var ut=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=N({type:o});static \u0275inj=A({imports:[ae,fe]})}return o})();export{ut as DocPoSwitchModule};
