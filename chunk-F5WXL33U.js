import{o as T,p as de}from"./chunk-QBCDRFNO.js";import{Fa as J,Ga as W,La as me,P as re,R as pe,Sa as q,V as _,Wa as A,mb as B,v as le,yb as C,zb as v}from"./chunk-3RSXW52V.js";import{$a as N,Bb as P,Ca as w,Cc as k,Dc as D,Ec as K,Fc as L,Ga as G,Gc as F,Jc as te,Ka as t,Kc as ne,La as e,M as R,Ma as o,Oc as ie,P as ee,Qa as U,Ra as f,Sa as Q,T as c,Tc as oe,U as u,Vc as ae,Xc as Z,Za as j,_a as O,bb as n,db as y,fb as b,gb as h,hb as x,ia as p,ja as Y,kb as M,pa as g,qa as H,va as z,za as s,zc as I}from"./chunk-4WWO4UYO.js";var se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&o(0,"po-textarea",0)},dependencies:[q],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea Basic"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-textarea-basic"),e(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,ye,i.hideSampleCodeTabs)))},dependencies:[P,T,C,v,se],encapsulation:2})}return a})();var Ee=(()=>{class a{additionalHelpTooltip;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-labs"]],standalone:!1,decls:20,vars:31,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let d=U();t(0,"po-textarea",1),x("ngModelChange",function(l){return c(d),h(i.textarea,l)||(i.textarea=l),u(l)}),f("p-blur",function(){return c(d),u(i.changeEvent("p-blur"))})("p-change",function(){return c(d),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(d),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(d),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(d),u(i.changeEvent("p-keydown"))}),e(),o(1,"hr"),t(2,"div",2),o(3,"po-info",3)(4,"po-info",4),e(),o(5,"hr"),t(6,"form",null,0)(8,"po-input",5),x("ngModelChange",function(l){return c(d),h(i.label,l)||(i.label=l),u(l)}),e(),t(9,"po-input",6),x("ngModelChange",function(l){return c(d),h(i.help,l)||(i.help=l),u(l)}),e(),t(10,"po-input",7),x("ngModelChange",function(l){return c(d),h(i.additionalHelpTooltip,l)||(i.additionalHelpTooltip=l),u(l)}),e(),t(11,"po-input",8),x("ngModelChange",function(l){return c(d),h(i.placeholder,l)||(i.placeholder=l),u(l)}),e(),t(12,"po-input",9),x("ngModelChange",function(l){return c(d),h(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),u(l)}),e(),t(13,"po-number",10),x("ngModelChange",function(l){return c(d),h(i.rows,l)||(i.rows=l),u(l)}),e(),t(14,"po-number",11),x("ngModelChange",function(l){return c(d),h(i.minlength,l)||(i.minlength=l),u(l)}),e(),t(15,"po-number",12),x("ngModelChange",function(l){return c(d),h(i.maxlength,l)||(i.maxlength=l),u(l)}),e(),t(16,"po-checkbox-group",13),x("ngModelChange",function(l){return c(d),h(i.properties,l)||(i.properties=l),u(l)}),e(),t(17,"po-radio-group",14),x("ngModelChange",function(l){return c(d),h(i.size,l)||(i.size=l),u(l)}),e(),t(18,"div",2)(19,"po-button",15),f("p-click",function(){return c(d),u(i.restore())}),e()()()}r&2&&(b("ngModel",i.textarea),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),p(3),s("p-value",i.textarea),p(),s("p-value",i.event),p(4),b("ngModel",i.label),p(),b("ngModel",i.help),p(),b("ngModel",i.additionalHelpTooltip),p(),b("ngModel",i.placeholder),p(),b("ngModel",i.fieldErrorMessage),p(),b("ngModel",i.rows),p(),b("ngModel",i.minlength),p(),b("ngModel",i.maxlength),p(),b("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),b("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[F,k,D,L,K,le,re,pe,W,me,q,A],encapsulation:2})}return a})();var _e=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea Labs"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-textarea>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

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
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>

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
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  size: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
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

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-textarea-labs"),e(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,_e,i.hideSampleCodeTabs)))},dependencies:[P,T,C,v,Ee],encapsulation:2})}return a})();var Ve=["formEmail"];function ke(a,Te){if(a&1&&(t(0,"div")(1,"div",8),o(2,"po-info",13),e(),o(3,"hr"),e()),a&2){let m=Q();p(2),s("p-value",m.cc)}}var be=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&(j(Ve,7),j(_,7)),r&2){let d;O(d=N())&&(i.formEmail=d.first),O(d=N())&&(i.poModal=d.first)}},standalone:!1,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let d=U();t(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),x("ngModelChange",function(l){return c(d),h(i.from,l)||(i.from=l),u(l)}),e(),t(4,"po-email",3),x("ngModelChange",function(l){return c(d),h(i.to,l)||(i.to=l),u(l)}),e(),t(5,"po-email",4),x("ngModelChange",function(l){return c(d),h(i.cc,l)||(i.cc=l),u(l)}),e(),t(6,"po-input",5),x("ngModelChange",function(l){return c(d),h(i.subject,l)||(i.subject=l),u(l)}),e(),t(7,"po-textarea",6),x("ngModelChange",function(l){return c(d),h(i.emailText,l)||(i.emailText=l),u(l)}),e()()(),t(8,"po-modal",7)(9,"div",8),o(10,"po-info",9)(11,"po-info",10),e(),o(12,"hr"),z(13,ke,4,1,"div"),t(14,"div",8),o(15,"po-info",11),e(),o(16,"hr"),t(17,"div",8)(18,"po-textarea",12),x("ngModelChange",function(l){return c(d),h(i.emailText,l)||(i.emailText=l),u(l)}),e()()()}r&2&&(s("p-actions",i.getPageAction()),p(3),b("ngModel",i.from),p(),b("ngModel",i.to),p(),b("ngModel",i.cc),p(),b("ngModel",i.subject),p(),b("ngModel",i.emailText),p(),s("p-primary-action",i.primaryAction),p(2),s("p-value",i.from),p(),s("p-value",i.to),p(2),G(i.cc!==""?13:-1),p(2),s("p-value",i.subject),p(3),b("ngModel",i.emailText))},dependencies:[F,k,D,L,K,J,W,q,A,_,B],encapsulation:2})}return a})();var Le=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea - Email"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <hr />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <hr />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-textarea-email"),e(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Le,i.hideSampleCodeTabs)))},dependencies:[P,T,C,v,be],encapsulation:2})}return a})();function We(a,Te){if(a&1&&(t(0,"div")(1,"div",8),o(2,"po-info",13),e(),o(3,"hr"),e()),a&2){let m=Q();p(2),s("p-value",m.formEmail.get("cc").value)}}var xe=(()=>{class a{formBuilder=ee(ie);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,I.required],to:[null,I.required],emailText:[null,I.required],subject:[null,I.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&j(_,7),r&2){let d;O(d=N())&&(i.poModal=d.first)}},standalone:!1,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(t(0,"po-page-default",0)(1,"form",1),o(2,"po-email",2)(3,"po-email",3)(4,"po-email",4)(5,"po-input",5)(6,"po-textarea",6),e()(),t(7,"po-modal",7)(8,"div",8),o(9,"po-info",9)(10,"po-info",10),e(),o(11,"hr"),z(12,We,4,1,"div"),t(13,"div",8),o(14,"po-info",11),e(),o(15,"hr"),t(16,"div",8),o(17,"po-textarea",12),e()()),r&2&&(s("p-actions",i.getPageAction()),p(),s("formGroup",i.formEmail),p(6),s("p-primary-action",i.primaryAction),p(2),s("p-value",i.formEmail.get("from").value),p(),s("p-value",i.formEmail.get("to").value),p(2),G(i.formEmail.get("cc").value?12:-1),p(2),s("p-value",i.formEmail.get("subject").value),p(3),s("ngModel",i.formEmail.get("emailText").value))},dependencies:[F,k,D,L,te,ne,J,W,q,A,_,B],encapsulation:2})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Textarea - Email Reactive Form"),e(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),e(),t(13,"pre",7),n(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <hr />

  @if (formEmail.get('cc').value) {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
      </div>
      <hr />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-textarea-email-reactive-form"),e(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",M(4,Be,i.hideSampleCodeTabs)))},dependencies:[P,T,C,v,xe],encapsulation:2})}return a})();var Se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-textarea-doc"]],standalone:!1,decls:742,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoTextareaComponent"),e()(),t(21,"div",2)(22,"p"),n(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),e(),t(24,"p"),n(25,"Importante:"),e(),t(26,"ul")(27,"li"),n(28,"A propriedade "),t(29,"code"),n(30,"name"),e(),n(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),t(32,"code"),n(33,"model"),e(),n(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),t(35,"em"),n(36,"Angular"),e(),n(37,", onde ser\xE1 necess\xE1rio informar o atributo "),t(38,"code"),n(39,"name"),e(),n(40," ou o atributo "),t(41,"code"),n(42,'[ngModelOptions]="{standalone: true}"'),e(),n(43,", por exemplo:"),e()(),t(44,"pre")(45,"code"),n(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),e()(),t(47,"h4"),n(48,"Acessibilidade tratada no componente"),e(),t(49,"p"),n(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),e(),t(51,"ul")(52,"li"),n(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),t(54,"a",6),n(55,"WCAG 4.1.2: Name, Role, Value"),e()(),t(56,"li"),n(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),t(58,"a",7),n(59,"WCAG 2.4.12: Focus Appearance)"),e()(),t(60,"li"),n(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),t(62,"a",8),n(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),e()()(),t(64,"h4"),n(65,"Tokens customiz\xE1veis"),e(),t(66,"p"),n(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(68,"blockquote")(69,"p"),n(70,"Para maiores informa\xE7\xF5es, acesse o guia "),t(71,"a",9),n(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(73,"."),e()(),t(74,"table")(75,"thead")(76,"tr")(77,"th"),n(78,"Propriedade"),e(),t(79,"th"),n(80,"Descri\xE7\xE3o"),e(),t(81,"th"),n(82,"Valor Padr\xE3o"),e()()(),t(83,"tbody")(84,"tr")(85,"td")(86,"strong"),n(87,"Default Values"),e()(),o(88,"td")(89,"td"),e(),t(90,"tr")(91,"td")(92,"code"),n(93,"--font-family"),e()(),t(94,"td"),n(95,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(96,"td")(97,"code"),n(98,"var(--font-family-theme)"),e()()(),t(99,"tr")(100,"td")(101,"code"),n(102,"--font-size"),e()(),t(103,"td"),n(104,"Tamanho da fonte"),e(),t(105,"td")(106,"code"),n(107,"var(--font-size-default)"),e()()(),t(108,"tr")(109,"td")(110,"code"),n(111,"--text-color-placeholder"),e()(),t(112,"td"),n(113,"Cor do texto placeholder"),e(),t(114,"td")(115,"code"),n(116,"var(--color-neutral-light-30)"),e()()(),t(117,"tr")(118,"td")(119,"code"),n(120,"--color"),e()(),t(121,"td"),n(122,"Cor pincipal do campo"),e(),t(123,"td")(124,"code"),n(125,"var(--color-neutral-dark-70)"),e()()(),t(126,"tr")(127,"td")(128,"code"),n(129,"--background"),e()(),t(130,"td"),n(131,"Cor de background"),e(),t(132,"td")(133,"code"),n(134,"var(--color-neutral-light-05)"),e()()()()()(),t(135,"div",10)(136,"h4",11),n(137,"Seletor"),e(),t(138,"pre",12),n(139,`<po-textarea
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean"
    p-size="string" >
</po-textarea>
`),e()(),t(140,"h4",13),n(141,"Propriedades"),e(),t(142,"table",14)(143,"tr",15)(144,"th",16),n(145,"Nome"),e(),t(146,"th",16),n(147,"Tipo"),e(),t(148,"th",16),n(149,"Padr\xE3o"),e(),t(150,"th",16),n(151,"Descri\xE7\xE3o"),e()(),t(152,"tr",17)(153,"td",18)(154,"div",19)(155,"span",20),n(156," (p-additional-help)"),o(157,"br"),e()(),t(158,"div",21),n(159,"Deprecated"),e()(),t(160,"td",22)(161,"code",23),n(162,"EventEmitter"),e()(),t(163,"td",24),n(164,"-"),e(),t(165,"td",25)(166,"em")(167,"strong"),n(168,"(opcional)"),e()(),t(169,"p"),n(170,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(171,"code"),n(172,"p-help"),e(),n(173,"."),e()()(),t(174,"tr",17)(175,"td",18)(176,"div",26)(177,"span",27),n(178," p-additional-help-tooltip"),o(179,"br"),e()(),t(180,"div",21),n(181,"Deprecated"),e()(),t(182,"td",22)(183,"code",28),n(184,"string"),e()(),t(185,"td",24),n(186,"-"),e(),t(187,"td",25)(188,"em")(189,"strong"),n(190,"(opcional)"),e()(),t(191,"p"),n(192,"Exibe um \xEDcone de ajuda adicional ao "),t(193,"code"),n(194,"p-help"),e(),n(195,`, com o texto desta propriedade no tooltip.
Se o evento `),t(196,"code"),n(197,"p-additional-help"),e(),n(198,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(199,"strong"),n(200,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(201,"blockquote")(202,"p"),n(203,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(204,"tr",17)(205,"td",18)(206,"div",26)(207,"span",27),n(208," p-append-in-body"),o(209,"br"),e()()(),t(210,"td",22)(211,"code",29),n(212,"boolean"),e()(),t(213,"td",24)(214,"p")(215,"code"),n(216,"false"),e()()(),t(217,"td",25)(218,"em")(219,"strong"),n(220,"(opcional)"),e()(),t(221,"p"),n(222,"Define que o tooltip ("),t(223,"code"),n(224,"p-additional-help-tooltip"),e(),n(225," e/ou "),t(226,"code"),n(227,"p-error-limit"),e(),n(228,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),e(),t(229,"blockquote")(230,"p"),n(231,"Quando utilizado com "),t(232,"code"),n(233,"p-additional-help-tooltip"),e(),n(234,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(235,"tr",17)(236,"td",18)(237,"div",26)(238,"span",27),n(239," p-auto-focus"),o(240,"br"),e()()(),t(241,"td",22)(242,"code",29),n(243,"boolean"),e()(),t(244,"td",24)(245,"p")(246,"code"),n(247,"false"),e()()(),t(248,"td",25)(249,"em")(250,"strong"),n(251,"(opcional)"),e()(),t(252,"p"),n(253,"Aplica foco no elemento ao ser iniciado."),e(),t(254,"blockquote")(255,"p"),n(256,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(257,"tr",17)(258,"td",18)(259,"div",19)(260,"span",20),n(261," (p-blur)"),o(262,"br"),e()()(),t(263,"td",22)(264,"code",23),n(265,"EventEmitter"),e()(),t(266,"td",24),n(267,"-"),e(),t(268,"td",25)(269,"em")(270,"strong"),n(271,"(opcional)"),e()(),t(272,"p"),n(273,"Evento disparado ao sair do campo."),e()()(),t(274,"tr",17)(275,"td",18)(276,"div",19)(277,"span",20),n(278," (p-change)"),o(279,"br"),e()()(),t(280,"td",22)(281,"code",23),n(282,"EventEmitter"),e()(),t(283,"td",24),n(284,"-"),e(),t(285,"td",25)(286,"em")(287,"strong"),n(288,"(opcional)"),e()(),t(289,"p"),n(290,"Evento disparado ao alterar valor e deixar o campo."),e()()(),t(291,"tr",17)(292,"td",18)(293,"div",19)(294,"span",20),n(295," (p-change-model)"),o(296,"br"),e()()(),t(297,"td",22)(298,"code",23),n(299,"EventEmitter"),e()(),t(300,"td",24),n(301,"-"),e(),t(302,"td",25)(303,"em")(304,"strong"),n(305,"(opcional)"),e()(),t(306,"p"),n(307,"Evento disparado ao alterar valor do model."),e()()(),t(308,"tr",17)(309,"td",18)(310,"div",26)(311,"span",27),n(312," p-disabled"),o(313,"br"),e()()(),t(314,"td",22)(315,"code",29),n(316,"boolean"),e()(),t(317,"td",24)(318,"p")(319,"code"),n(320,"false"),e()()(),t(321,"td",25)(322,"em")(323,"strong"),n(324,"(opcional)"),e()(),t(325,"p"),n(326,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(327,"tr",17)(328,"td",18)(329,"div",19)(330,"span",20),n(331," (p-enter)"),o(332,"br"),e()()(),t(333,"td",22)(334,"code",23),n(335,"EventEmitter"),e()(),t(336,"td",24),n(337,"-"),e(),t(338,"td",25)(339,"em")(340,"strong"),n(341,"(opcional)"),e()(),t(342,"p"),n(343,"Evento disparado ao entrar do campo."),e()()(),t(344,"tr",17)(345,"td",18)(346,"div",26)(347,"span",27),n(348," p-error-limit"),o(349,"br"),e()()(),t(350,"td",22)(351,"code",29),n(352,"boolean"),e()(),t(353,"td",24)(354,"p")(355,"code"),n(356,"false"),e()()(),t(357,"td",25)(358,"em")(359,"strong"),n(360,"(opcional)"),e()(),t(361,"p"),n(362,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(363,"blockquote")(364,"p"),n(365,"Caso essa propriedade seja definida como "),t(366,"code"),n(367,"true"),e(),n(368,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(369,"tr",17)(370,"td",18)(371,"div",26)(372,"span",27),n(373," p-field-error-message"),o(374,"br"),e()()(),t(375,"td",22)(376,"code",28),n(377,"string"),e()(),t(378,"td",24),n(379,"-"),e(),t(380,"td",25)(381,"em")(382,"strong"),n(383,"(opcional)"),e()(),t(384,"p"),n(385,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(386,"blockquote")(387,"p"),n(388,"Necess\xE1rio que a propriedade "),t(389,"code"),n(390,"p-required"),e(),n(391," esteja habilitada."),e()()()(),t(392,"tr",17)(393,"td",18)(394,"div",26)(395,"span",27),n(396," p-help"),o(397,"br"),e()()(),t(398,"td",22)(399,"code",28),n(400,"string"),e()(),t(401,"td",24),n(402,"-"),e(),t(403,"td",25)(404,"em")(405,"strong"),n(406,"(opcional)"),e()(),t(407,"p"),n(408,"Texto de apoio do campo."),e()()(),t(409,"tr",17)(410,"td",18)(411,"div",19)(412,"span",20),n(413," (p-keydown)"),o(414,"br"),e()()(),t(415,"td",22)(416,"code",23),n(417,"EventEmitter"),e()(),t(418,"td",24),n(419,"-"),e(),t(420,"td",25)(421,"em")(422,"strong"),n(423,"(opcional)"),e()(),t(424,"p"),n(425,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(426,"code"),n(427,"KeyboardEvent"),e(),n(428," com informa\xE7\xF5es sobre a tecla."),e()()(),t(429,"tr",17)(430,"td",18)(431,"div",26)(432,"span",27),n(433," p-label"),o(434,"br"),e()()(),t(435,"td",22)(436,"code",28),n(437,"string"),e()(),t(438,"td",24),n(439,"-"),e(),t(440,"td",25)(441,"em")(442,"strong"),n(443,"(opcional)"),e()(),t(444,"p"),n(445,"Label do campo."),e()()(),t(446,"tr",17)(447,"td",18)(448,"div",26)(449,"span",27),n(450," p-label-text-wrap"),o(451,"br"),e()()(),t(452,"td",22)(453,"code",29),n(454,"boolean"),e()(),t(455,"td",24)(456,"p")(457,"code"),n(458,"false"),e()()(),t(459,"td",25)(460,"em")(461,"strong"),n(462,"(opcional)"),e()(),t(463,"p"),n(464,"Habilita a quebra autom\xE1tica do texto da propriedade "),t(465,"code"),n(466,"p-label"),e(),n(467,". Quando "),t(468,"code"),n(469,"p-label-text-wrap"),e(),n(470,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),e()()(),t(471,"tr",17)(472,"td",18)(473,"div",26)(474,"span",27),n(475," p-maxlength"),o(476,"br"),e()()(),t(477,"td",22)(478,"code",30),n(479,"number"),e()(),t(480,"td",24),n(481,"-"),e(),t(482,"td",25)(483,"em")(484,"strong"),n(485,"(opcional)"),e()(),t(486,"p"),n(487,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),e()()(),t(488,"tr",17)(489,"td",18)(490,"div",26)(491,"span",27),n(492," p-minlength"),o(493,"br"),e()()(),t(494,"td",22)(495,"code",30),n(496,"number"),e()(),t(497,"td",24),n(498,"-"),e(),t(499,"td",25)(500,"em")(501,"strong"),n(502,"(opcional)"),e()(),t(503,"p"),n(504,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),e()()(),t(505,"tr",17)(506,"td",18)(507,"div",26)(508,"span",27),n(509," name"),o(510,"br"),e()()(),t(511,"td",22)(512,"code",28),n(513,"string"),e()(),t(514,"td",24),n(515,"-"),e(),t(516,"td",25)(517,"p"),n(518,"Nome e Id do componente."),e()()(),t(519,"tr",17)(520,"td",18)(521,"div",26)(522,"span",27),n(523," p-optional"),o(524,"br"),e()()(),t(525,"td",22)(526,"code",29),n(527,"boolean"),e()(),t(528,"td",24)(529,"p")(530,"code"),n(531,"false"),e()()(),t(532,"td",25)(533,"em")(534,"strong"),n(535,"(opcional)"),e()(),t(536,"p"),n(537,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(538,"blockquote")(539,"p"),n(540,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(541,"ul")(542,"li"),n(543,"O campo conter "),t(544,"code"),n(545,"p-required"),e(),n(546,";"),e(),t(547,"li"),n(548,"N\xE3o possuir "),t(549,"code"),n(550,"p-help"),e(),n(551," e/ou "),t(552,"code"),n(553,"p-label"),e(),n(554,"."),e()()()(),t(555,"tr",17)(556,"td",18)(557,"div",26)(558,"span",27),n(559," p-placeholder"),o(560,"br"),e()()(),t(561,"td",22)(562,"code",28),n(563,"string"),e()(),t(564,"td",24),n(565,"-"),e(),t(566,"td",25)(567,"p"),n(568,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),e()()(),t(569,"tr",17)(570,"td",18)(571,"div",26)(572,"span",27),n(573," p-helper"),o(574,"br"),e()()(),t(575,"td",22)(576,"code",31),n(577,"PoHelperOptions"),e()(),t(578,"td",24),n(579,"-"),e(),t(580,"td",25)(581,"em")(582,"strong"),n(583,"(opcional)"),e()(),t(584,"p"),n(585,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),e(),t(586,"blockquote")(587,"p"),n(588,"Caso o "),t(589,"code"),n(590,"p-label"),e(),n(591,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),t(592,"code"),n(593,"p-additional-help-tooltip"),e(),n(594," e "),t(595,"code"),n(596,"p-additional-help"),e(),n(597,") ser\xE1 ignorado."),e()()()(),t(598,"tr",17)(599,"td",18)(600,"div",26)(601,"span",27),n(602," p-readonly"),o(603,"br"),e()()(),t(604,"td",22)(605,"code",29),n(606,"boolean"),e()(),t(607,"td",24)(608,"p")(609,"code"),n(610,"false"),e()()(),t(611,"td",25)(612,"em")(613,"strong"),n(614,"(opcional)"),e()(),t(615,"p"),n(616,"Indica que o campo ser\xE1 somente leitura."),e()()(),t(617,"tr",17)(618,"td",18)(619,"div",26)(620,"span",27),n(621," p-required"),o(622,"br"),e()()(),t(623,"td",22)(624,"code",29),n(625,"boolean"),e()(),t(626,"td",24)(627,"p")(628,"code"),n(629,"false"),e()()(),t(630,"td",25)(631,"em")(632,"strong"),n(633,"(opcional)"),e()(),t(634,"p"),n(635,"Define que o campo ser\xE1 obrigat\xF3rio."),e(),t(636,"blockquote")(637,"p"),n(638,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),t(639,"code"),n(640,"(p-disabled)"),e(),n(641,"."),e()()()(),t(642,"tr",17)(643,"td",18)(644,"div",26)(645,"span",27),n(646," p-rows"),o(647,"br"),e()()(),t(648,"td",22)(649,"code",30),n(650,"number"),e()(),t(651,"td",24)(652,"p")(653,"code"),n(654,"3"),e()()(),t(655,"td",25)(656,"em")(657,"strong"),n(658,"(opcional)"),e()(),t(659,"p"),n(660,"Indica a quantidade de linhas que ser\xE3o exibidas."),e()()(),t(661,"tr",17)(662,"td",18)(663,"div",26)(664,"span",27),n(665," p-show-required"),o(666,"br"),e()()(),t(667,"td",22)(668,"code",29),n(669,"boolean"),e()(),t(670,"td",24),n(671,"-"),e(),t(672,"td",25)(673,"p"),n(674,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(675,"blockquote")(676,"p"),n(677,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(678,"ul")(679,"li"),n(680,"N\xE3o possuir "),t(681,"code"),n(682,"p-help"),e(),n(683," e/ou "),t(684,"code"),n(685,"p-label"),e(),n(686,"."),e()()()(),t(687,"tr",17)(688,"td",18)(689,"div",26)(690,"span",27),n(691," p-size"),o(692,"br"),e()()(),t(693,"td",22)(694,"code",28),n(695,"string"),e()(),t(696,"td",24)(697,"p")(698,"code"),n(699,"medium"),e()()(),t(700,"td",25)(701,"em")(702,"strong"),n(703,"(opcional)"),e()(),t(704,"p"),n(705,"Define o tamanho do componente:"),e(),t(706,"ul")(707,"li")(708,"code"),n(709,"small"),e(),n(710," (dispon\xEDvel apenas para acessibilidade AA)"),e(),t(711,"li")(712,"code"),n(713,"medium"),e()()(),t(714,"blockquote")(715,"p"),n(716,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(717,"code"),n(718,"medium"),e(),n(719,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(720,"a",32),n(721,"po-theme"),e(),n(722,"."),e()()()()(),t(723,"h3",13),n(724,"M\xE9todos"),e(),t(725,"table",33)(726,"tr",17)(727,"th",34)(728,"div",26)(729,"h4")(730,"span",27),n(731," focus "),e()()()()(),t(732,"tr",25)(733,"td",25)(734,"p"),n(735,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(736,"p"),n(737,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(738,"pre")(739,"code"),n(740,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),e()()()()(),o(741,"br"),e())},dependencies:[T],encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(Y(oe),Y(ae))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-textarea-doc"),e(),t(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),e()()()),r&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[B,C,v,ce,ge,he,fe,Se],encapsulation:2})}return a})();var Ne=[{path:"",component:Ce}],ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[Z.forChild(Ne),Z]})}return a})();var St=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=H({type:a});static \u0275inj=R({imports:[de,ve]})}return a})();export{St as DocPoTextareaModule};
