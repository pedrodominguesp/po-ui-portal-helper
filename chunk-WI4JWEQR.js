import{o as x,p as Se}from"./chunk-7QXRNAIE.js";import{Ga as j,P as de,R,Ra as M,V as me,Wa as D,a as re,mb as ue,q as se,sa as ce,v as N,yb as C,zb as y}from"./chunk-DJTNC6KO.js";import{Bb as T,Ca as _,Cc as V,Dc as B,Ec as W,Fc as k,Gc as z,Ka as t,L as $,La as e,M as G,Ma as l,P as L,Qa as F,Ra as E,T as u,Tc as le,U as S,Vc as pe,Wa as te,Xc as Y,Zb as ae,ab as q,bb as n,cb as U,db as w,fb as g,gb as b,hb as h,ia as s,ib as ne,ja as J,jb as Q,kb as P,lb as ie,pa as v,qa as I,va as ee,wb as oe,za as c}from"./chunk-4WWO4UYO.js";var Te=()=>({label:"Option 1",value:"1"}),Me=()=>({label:"Option 2",value:"2"}),Oe=(a,H)=>[a,H],ge=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&l(0,"po-select",0),p&2&&c("p-options",ie(3,Oe,Q(1,Te),Q(2,Me)))},dependencies:[M],encapsulation:2})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Basic"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-basic/sample-po-select-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-basic"),e(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ve,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{cdr=L(oe);additionalHelpTooltip;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size="medium"}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex(Z=>Z.label===i&&"options"in Z);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs"]],standalone:!1,decls:33,vars:35,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=F();t(0,"po-select",2),h("ngModelChange",function(o){return u(m),b(i.select,o)||(i.select=o),S(o)}),E("p-blur",function(){return u(m),S(i.changeEvent("p-blur"))})("p-change",function(){return u(m),S(i.changeEvent("p-change"))})("p-change-model",function(){return u(m),S(i.changeEvent("p-change-model"))})("p-enter",function(){return u(m),S(i.changeEvent("p-enter"))})("p-keydown",function(){return u(m),S(i.changeEvent("p-keydown"))}),e(),l(1,"hr"),t(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),t(6,"form",null,0),l(8,"po-divider",6),t(9,"div",3)(10,"po-switch",7),E("p-change",function(o){return u(m),S(i.restoreSwitch(o))}),h("ngModelChange",function(o){return u(m),b(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),S(o)}),e(),t(11,"po-select",8),h("ngModelChange",function(o){return u(m),b(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),S(o)}),E("p-change",function(){return u(m),S(i.optionsGroupSelection())}),e(),t(12,"po-input",9),h("ngModelChange",function(o){return u(m),b(i.optionsGroup,o)||(i.optionsGroup=o),S(o)}),e()(),l(13,"po-divider",10),t(14,"div",3)(15,"po-input",11),h("ngModelChange",function(o){return u(m),b(i.option.label,o)||(i.option.label=o),S(o)}),e(),t(16,"po-input",12),h("ngModelChange",function(o){return u(m),b(i.option.value,o)||(i.option.value=o),S(o)}),e()(),t(17,"div",3)(18,"po-button",13),E("p-click",function(){return u(m),S(i.addOption())}),e()()(),l(19,"hr"),t(20,"form",null,1)(22,"po-input",14),h("ngModelChange",function(o){return u(m),b(i.label,o)||(i.label=o),S(o)}),e(),t(23,"po-input",15),h("ngModelChange",function(o){return u(m),b(i.help,o)||(i.help=o),S(o)}),e(),t(24,"po-input",16),h("ngModelChange",function(o){return u(m),b(i.additionalHelpTooltip,o)||(i.additionalHelpTooltip=o),S(o)}),e(),t(25,"po-input",17),h("ngModelChange",function(o){return u(m),b(i.placeholder,o)||(i.placeholder=o),S(o)}),e(),t(26,"po-input",18),h("ngModelChange",function(o){return u(m),b(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),S(o)}),e(),t(27,"po-checkbox-group",19),h("ngModelChange",function(o){return u(m),b(i.properties,o)||(i.properties=o),S(o)}),e(),t(28,"po-radio-group",20),h("ngModelChange",function(o){return u(m),b(i.size,o)||(i.size=o),S(o)}),e(),t(29,"div",3)(30,"div",21)(31,"po-button",22),E("p-click",function(){return u(m),S(i.restore())}),e()()(),l(32,"form"),e()}if(p&2){let m=q(7);g("ngModel",i.select),c("p-additional-help-tooltip",i.additionalHelpTooltip)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),s(3),c("p-value",i.select),s(),c("p-value",i.event),s(6),g("ngModel",i.selectOptionGroupSwitch),s(),g("ngModel",i.selectedOptionsGroup),c("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),s(),g("ngModel",i.optionsGroup),c("p-disabled",!i.selectOptionGroupSwitch),s(3),g("ngModel",i.option.label),s(),g("ngModel",i.option.value),s(2),c("p-disabled",m.invalid),s(4),g("ngModel",i.label),s(),g("ngModel",i.help),s(),g("ngModel",i.additionalHelpTooltip),s(),g("ngModel",i.placeholder),s(),g("ngModel",i.fieldErrorMessage),s(),g("ngModel",i.properties),c("p-options",i.propertiesOptions),s(),g("ngModel",i.size),c("p-options",i.sizeOptions)}},dependencies:[z,V,B,k,W,N,re,de,R,j,M,ce,D],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Labs"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-labs/sample-po-select-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
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
</po-select>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  additionalHelpTooltip: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
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
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-labs"),e(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,qe,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,Ee],encapsulation:2})}return a})();var X=(()=>{class a{http=L(ae);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=$({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ie(a,H){if(a&1&&(t(0,"div",17),l(1,"po-avatar",18),t(2,"div",19)(3,"div",20),n(4),e(),t(5,"div",21),n(6),e()()()),a&2){let r=H.$implicit;s(),te("p-src","https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png"),s(3),U(r.label),s(2),U(r.value)}}var fe=(()=>{class a{sampleService=L(X);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name=""}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF"}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state)})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:!1,features:[ne([X])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=F();t(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),h("ngModelChange",function(o){return u(m),b(i.documentType,o)||(i.documentType=o),S(o)}),E("p-change",function(o){return u(m),S(i.changeType(o))}),e(),t(4,"po-input",4),h("ngModelChange",function(o){return u(m),b(i.document,o)||(i.document=o),S(o)}),e()(),t(5,"div",2)(6,"po-input",5),h("ngModelChange",function(o){return u(m),b(i.name,o)||(i.name=o),S(o)}),e(),t(7,"po-input",6),h("ngModelChange",function(o){return u(m),b(i.address,o)||(i.address=o),S(o)}),e()(),t(8,"div",2)(9,"po-select",7),h("ngModelChange",function(o){return u(m),b(i.state,o)||(i.state=o),S(o)}),E("p-change",function(){return u(m),S(i.onChangeState())}),ee(10,Ie,7,4,"ng-template",8),e(),t(11,"po-select",9),h("ngModelChange",function(o){return u(m),b(i.city,o)||(i.city=o),S(o)}),e()(),t(12,"div",2)(13,"po-button",10),E("p-click",function(){u(m);let o=q(15);return S(o.open())}),e()()(),t(14,"po-modal",11,1)(16,"div",2),l(17,"po-info",12)(18,"po-info",13),e(),l(19,"hr"),t(20,"div",2),l(21,"po-info",13)(22,"po-info",14),e(),l(23,"hr"),t(24,"div",2),l(25,"po-info",15)(26,"po-info",16),e()()}if(p&2){let m=q(1);s(3),g("ngModel",i.documentType),c("p-options",i.options),s(),g("ngModel",i.document),c("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),s(2),g("ngModel",i.name),c("p-label",i.nameLabel),s(),g("ngModel",i.address),s(2),g("ngModel",i.state),c("p-options",i.stateOptions),s(2),g("ngModel",i.city),c("p-options",i.cityOptions),s(2),c("p-disabled",m.invalid),s(4),c("p-value",i.documentType),s(),c("p-label",i.documentLabel)("p-value",i.document),s(3),c("p-label",i.nameLabel)("p-value",i.name),s(),c("p-value",i.address),s(3),c("p-value",i.getStateByValue(i.state)),s(),c("p-value",i.getCityByValue(i.city))}},dependencies:[z,V,B,k,W,se,N,R,j,M,D,me],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"]})}return a})();var Be=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select - Customer registration"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),e(),t(13,"pre",7),n(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styles: [
    \`
      .sample-select-option-template-container {
        display: inline-flex;
        align-items: flex-start;
        width: 100%;
      }

      .sample-select-option-template-margin {
        margin: 5px;
      }

      .sample-select-option-template-label {
        font-size: 16px;
      }

      .sample-select-option-template-value {
        font-size: 12px;
        text-transform: uppercase;
      }
    \`
  ],
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  private sampleService = inject(SamplePoSelectCustomerRegistrationService);

  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),e(),t(21,"label",6),n(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),e(),t(23,"pre",9),n(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-select-customer-registration"),e(),l(27,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Be,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,fe],encapsulation:2})}return a})();var ye=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies"]],standalone:!1,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(t(0,"po-select",0),h("ngModelChange",function(d){return b(i.select,d)||(i.select=d),d}),e(),t(1,"po-info",1),h("p-valueChange",function(d){return b(i.select,d)||(i.select=d),d}),e(),t(2,"div",2)(3,"po-select",3),E("p-change",function(d){return i.onChange(d)}),h("ngModelChange",function(d){return b(i.fieldLabel,d)||(i.fieldLabel=d),d}),e(),t(4,"po-select",4),E("p-change",function(d){return i.onChange(d)}),h("ngModelChange",function(d){return b(i.fieldValue,d)||(i.fieldValue=d),d}),e()()),p&2&&(g("ngModel",i.select),c("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),s(),g("p-value",i.select),s(2),c("p-options",i.labels),g("ngModel",i.fieldLabel),s(),c("p-options",i.values),g("ngModel",i.fieldValue))},dependencies:[V,k,M,D],encapsulation:2})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Select Companies"),e(),t(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-select-companies/sample-po-select-companies.component.html"),e(),t(13,"pre",7),n(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-select-companies"),e(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),w(" ",i.sampleCodeButtonLabel,""),s(),c("ngClass",P(4,Ne,i.hideSampleCodeTabs)))},dependencies:[T,x,C,y,ye],encapsulation:2})}return a})();var _e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-doc"]],standalone:!1,decls:908,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoSelectComponent"),e()(),t(21,"div",2)(22,"p"),n(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),e(),t(24,"blockquote")(25,"p"),n(26,"Ao passar um valor para o "),t(27,"em"),n(28,"model"),e(),n(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),t(30,"code"),n(31,"undefined"),e(),n(32,"."),e()(),t(33,"p"),n(34,"Tamb\xE9m existe a possibilidade de utilizar um "),t(35,"em"),n(36,"template"),e(),n(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),t(38,"strong")(39,"a",6),n(40,"p-combo-option-template"),e()(),n(41,"."),e(),t(42,"blockquote")(43,"p"),n(44,"Obs: o template "),t(45,"strong")(46,"a",7),n(47,"p-select-option-template"),e()(),n(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),e()(),t(49,"h4"),n(50,"Tokens customiz\xE1veis"),e(),t(51,"p"),n(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(53,"blockquote")(54,"p"),n(55,"Para maiores informa\xE7\xF5es, acesse o guia "),t(56,"a",8),n(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(58,"."),e()(),t(59,"table")(60,"thead")(61,"tr")(62,"th"),n(63,"Propriedade"),e(),t(64,"th"),n(65,"Descri\xE7\xE3o"),e(),t(66,"th"),n(67,"Valor Padr\xE3o"),e()()(),t(68,"tbody")(69,"tr")(70,"td")(71,"strong"),n(72,"Default Values"),e()(),l(73,"td")(74,"td"),e(),t(75,"tr")(76,"td")(77,"code"),n(78,"--font-family"),e()(),t(79,"td"),n(80,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(81,"td")(82,"code"),n(83,"var(--font-family-theme)"),e()()(),t(84,"tr")(85,"td")(86,"code"),n(87,"--font-size"),e()(),t(88,"td"),n(89,"Tamanho da fonte"),e(),t(90,"td")(91,"code"),n(92,"var(--font-size-default)"),e()()(),t(93,"tr")(94,"td")(95,"code"),n(96,"--text-color-empty"),e()(),t(97,"td"),n(98,"Cor do placeholder"),e(),t(99,"td")(100,"code"),n(101,"var(--color-neutral-light-30)"),e()()(),t(102,"tr")(103,"td")(104,"code"),n(105,"--color"),e()(),t(106,"td"),n(107,"Cor da borda"),e(),t(108,"td")(109,"code"),n(110,"var(--color-neutral-dark-70)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--background"),e()(),t(115,"td"),n(116,"Cor de background"),e(),t(117,"td")(118,"code"),n(119,"var(--color-neutral-light-05)"),e()()(),t(120,"tr")(121,"td")(122,"code"),n(123,"--text-color"),e()(),t(124,"td"),n(125,"Cor do texto"),e(),t(126,"td")(127,"code"),n(128,"var(--color-neutral-dark-90)"),e()()(),t(129,"tr")(130,"td")(131,"code"),n(132,"--padding-horizontal"),e()(),t(133,"td"),n(134,"Preenchimento horizontal"),e(),t(135,"td")(136,"code"),n(137,"0.5em"),e()()(),t(138,"tr")(139,"td")(140,"code"),n(141,"--padding-vertical"),e()(),t(142,"td"),n(143,"Preenchimento vertical"),e(),t(144,"td")(145,"code"),n(146,"0.7em"),e()()(),t(147,"tr")(148,"td")(149,"strong"),n(150,"Hover"),e()(),l(151,"td")(152,"td"),e(),t(153,"tr")(154,"td")(155,"code"),n(156,"--color-hover"),e()(),t(157,"td"),n(158,"Cor principal no estado hover"),e(),t(159,"td")(160,"code"),n(161,"var(--color-brand-01-dark)"),e()()(),t(162,"tr")(163,"td")(164,"code"),n(165,"--background-hover"),e()(),t(166,"td"),n(167,"Cor de background no estado hover"),e(),t(168,"td")(169,"code"),n(170,"var(--color-brand-01-lighter)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Focused"),e()(),l(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--outline-color-focused"),e()(),t(181,"td"),n(182,"Cor do outline do estado de focus"),e(),t(183,"td")(184,"code"),n(185,"var(--color-action-focus)"),e()()(),t(186,"tr")(187,"td")(188,"code"),n(189,"--color-focused"),e()(),t(190,"td"),n(191,"Cor da borda no estado de focus"),e(),t(192,"td")(193,"code"),n(194,"var(--color-action-default)"),e()()(),t(195,"tr")(196,"td")(197,"strong"),n(198,"Disabled"),e()(),l(199,"td")(200,"td"),e(),t(201,"tr")(202,"td")(203,"code"),n(204,"--color-disabled"),e()(),t(205,"td"),n(206,"Cor principal no estado disabled"),e(),t(207,"td")(208,"code"),n(209,"var(--color-neutral-light-30)"),e()()(),t(210,"tr")(211,"td")(212,"code"),n(213,"--background-color-disabled"),e(),n(214,"\xA0"),e(),t(215,"td"),n(216,"Cor de background no estado disabled"),e(),t(217,"td")(218,"code"),n(219,"var(--color-neutral-light-20)"),e()()()()()(),t(220,"div",9)(221,"h4",10),n(222,"Seletor"),e(),t(223,"pre",11),n(224,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-helper="PoHelperOptions"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),e()(),t(225,"h4",12),n(226,"Propriedades"),e(),t(227,"table",13)(228,"tr",14)(229,"th",15),n(230,"Nome"),e(),t(231,"th",15),n(232,"Tipo"),e(),t(233,"th",15),n(234,"Padr\xE3o"),e(),t(235,"th",15),n(236,"Descri\xE7\xE3o"),e()(),t(237,"tr",16)(238,"td",17)(239,"div",18)(240,"span",19),n(241," (p-additional-help)"),l(242,"br"),e()(),t(243,"div",20),n(244,"Deprecated"),e()(),t(245,"td",21)(246,"code",22),n(247,"EventEmitter"),e()(),t(248,"td",23),n(249,"-"),e(),t(250,"td",24)(251,"em")(252,"strong"),n(253,"(opcional)"),e()(),t(254,"p"),n(255,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(256,"code"),n(257,"p-help"),e(),n(258,"."),e()()(),t(259,"tr",16)(260,"td",17)(261,"div",25)(262,"span",26),n(263," p-additional-help-tooltip"),l(264,"br"),e()(),t(265,"div",20),n(266,"Deprecated"),e()(),t(267,"td",21)(268,"code",27),n(269,"string"),e()(),t(270,"td",23),n(271,"-"),e(),t(272,"td",24)(273,"em")(274,"strong"),n(275,"(opcional)"),e()(),t(276,"p"),n(277,"Exibe um \xEDcone de ajuda adicional ao "),t(278,"code"),n(279,"p-help"),e(),n(280,`, com o texto desta propriedade no tooltip.
Se o evento `),t(281,"code"),n(282,"p-additional-help"),e(),n(283,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(284,"strong"),n(285,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(286,"blockquote")(287,"p"),n(288,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(289,"tr",16)(290,"td",17)(291,"div",25)(292,"span",26),n(293," p-append-in-body"),l(294,"br"),e()()(),t(295,"td",21)(296,"code",28),n(297,"boolean"),e()(),t(298,"td",23)(299,"p")(300,"code"),n(301,"false"),e()()(),t(302,"td",24)(303,"em")(304,"strong"),n(305,"(opcional)"),e()(),t(306,"p"),n(307,"Define que o tooltip ("),t(308,"code"),n(309,"p-additional-help-tooltip"),e(),n(310," e/ou "),t(311,"code"),n(312,"p-error-limit"),e(),n(313,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),e(),t(314,"blockquote")(315,"p"),n(316,"Quando utilizado com "),t(317,"code"),n(318,"p-additional-help-tooltip"),e(),n(319,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(320,"tr",16)(321,"td",17)(322,"div",18)(323,"span",19),n(324," (p-blur)"),l(325,"br"),e()()(),t(326,"td",21)(327,"code",22),n(328,"EventEmitter"),e()(),t(329,"td",23),n(330,"-"),e(),t(331,"td",24)(332,"em")(333,"strong"),n(334,"(opcional)"),e()(),t(335,"p"),n(336,"Evento disparado ao sair do campo."),e()()(),t(337,"tr",16)(338,"td",17)(339,"div",18)(340,"span",19),n(341," (p-change)"),l(342,"br"),e()()(),t(343,"td",21)(344,"code",22),n(345,"EventEmitter"),e()(),t(346,"td",23),n(347,"-"),e(),t(348,"td",24)(349,"em")(350,"strong"),n(351,"(opcional)"),e()(),t(352,"p"),n(353,"Evento disparado ao alterar valor do campo."),e()()(),t(354,"tr",16)(355,"td",17)(356,"div",25)(357,"span",26),n(358," p-disabled"),l(359,"br"),e()()(),t(360,"td",21)(361,"code",28),n(362,"boolean"),e()(),t(363,"td",23)(364,"p")(365,"code"),n(366,"false"),e()()(),t(367,"td",24)(368,"em")(369,"strong"),n(370,"(opcional)"),e()(),t(371,"p"),n(372,"Indica se o campo ser\xE1 desabilitado."),e()()(),t(373,"tr",16)(374,"td",17)(375,"div",25)(376,"span",26),n(377," p-error-limit"),l(378,"br"),e()()(),t(379,"td",21)(380,"code",28),n(381,"boolean"),e()(),t(382,"td",23)(383,"p")(384,"code"),n(385,"false"),e()()(),t(386,"td",24)(387,"em")(388,"strong"),n(389,"(opcional)"),e()(),t(390,"p"),n(391,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(392,"blockquote")(393,"p"),n(394,"Caso essa propriedade seja definida como "),t(395,"code"),n(396,"true"),e(),n(397,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(398,"tr",16)(399,"td",17)(400,"div",25)(401,"span",26),n(402," p-field-error-message"),l(403,"br"),e()()(),t(404,"td",21)(405,"code",27),n(406,"string"),e()(),t(407,"td",23),n(408,"-"),e(),t(409,"td",24)(410,"em")(411,"strong"),n(412,"(opcional)"),e()(),t(413,"p"),n(414,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(415,"blockquote")(416,"p"),n(417,"Necess\xE1rio que a propriedade "),t(418,"code"),n(419,"p-required"),e(),n(420," esteja habilitada."),e()()()(),t(421,"tr",16)(422,"td",17)(423,"div",25)(424,"span",26),n(425," p-field-label"),l(426,"br"),e()()(),t(427,"td",21)(428,"code",27),n(429,"string"),e()(),t(430,"td",23)(431,"p")(432,"code"),n(433,"label"),e()()(),t(434,"td",24)(435,"em")(436,"strong"),n(437,"(opcional)"),e()(),t(438,"p"),n(439,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(440,"code"),n(441,"p-options"),e(),n(442,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e()()(),t(443,"tr",16)(444,"td",17)(445,"div",25)(446,"span",26),n(447," p-field-value"),l(448,"br"),e()()(),t(449,"td",21)(450,"code",27),n(451,"string"),e()(),t(452,"td",23)(453,"p")(454,"code"),n(455,"value"),e()()(),t(456,"td",24)(457,"em")(458,"strong"),n(459,"(opcional)"),e()(),t(460,"p"),n(461,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(462,"code"),n(463,"p-options"),e(),n(464,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e()()(),t(465,"tr",16)(466,"td",17)(467,"div",25)(468,"span",26),n(469," p-help"),l(470,"br"),e()()(),t(471,"td",21)(472,"code",27),n(473,"string"),e()(),t(474,"td",23),n(475,"-"),e(),t(476,"td",24)(477,"p"),n(478,"Texto de apoio para o campo."),e()()(),t(479,"tr",16)(480,"td",17)(481,"div",18)(482,"span",19),n(483," (p-keydown)"),l(484,"br"),e()()(),t(485,"td",21)(486,"code",22),n(487,"EventEmitter"),e()(),t(488,"td",23),n(489,"-"),e(),t(490,"td",24)(491,"em")(492,"strong"),n(493,"(opcional)"),e()(),t(494,"p"),n(495,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(496,"code"),n(497,"KeyboardEvent"),e(),n(498," com informa\xE7\xF5es sobre a tecla."),e()()(),t(499,"tr",16)(500,"td",17)(501,"div",25)(502,"span",26),n(503," p-label"),l(504,"br"),e()()(),t(505,"td",21)(506,"code",27),n(507,"string"),e()(),t(508,"td",23),n(509,"-"),e(),t(510,"td",24)(511,"p"),n(512,"R\xF3tulo exibido pelo componente."),e()()(),t(513,"tr",16)(514,"td",17)(515,"div",25)(516,"span",26),n(517," p-label-text-wrap"),l(518,"br"),e()()(),t(519,"td",21)(520,"code",28),n(521,"boolean"),e()(),t(522,"td",23)(523,"p")(524,"code"),n(525,"false"),e()()(),t(526,"td",24)(527,"em")(528,"strong"),n(529,"(opcional)"),e()(),t(530,"p"),n(531,"Habilita a quebra autom\xE1tica do texto da propriedade "),t(532,"code"),n(533,"p-label"),e(),n(534,". Quando "),t(535,"code"),n(536,"p-label-text-wrap"),e(),n(537,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),e()()(),t(538,"tr",16)(539,"td",17)(540,"div",25)(541,"span",26),n(542," name"),l(543,"br"),e()()(),t(544,"td",21)(545,"code",27),n(546,"string"),e()(),t(547,"td",23),n(548,"-"),e(),t(549,"td",24)(550,"p"),n(551,"Nome do componente."),e()()(),t(552,"tr",16)(553,"td",17)(554,"div",18)(555,"span",19),n(556," (ngModelChange)"),l(557,"br"),e()()(),t(558,"td",21)(559,"code",22),n(560,"EventEmitter"),e()(),t(561,"td",23),n(562,"-"),e(),t(563,"td",24)(564,"em")(565,"strong"),n(566,"(opcional)"),e()(),t(567,"p"),n(568,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),t(569,"p"),n(570,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(571,"code"),n(572,"strictTemplates"),e(),n(573,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),t(574,"pre")(575,"code"),n(576,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),e()()()(),t(577,"tr",16)(578,"td",17)(579,"div",25)(580,"span",26),n(581," p-optional"),l(582,"br"),e()()(),t(583,"td",21)(584,"code",28),n(585,"boolean"),e()(),t(586,"td",23)(587,"p")(588,"code"),n(589,"false"),e()()(),t(590,"td",24)(591,"em")(592,"strong"),n(593,"(opcional)"),e()(),t(594,"p"),n(595,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(596,"blockquote")(597,"p"),n(598,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(599,"ul")(600,"li"),n(601,"O campo conter "),t(602,"code"),n(603,"p-required"),e(),n(604,";"),e(),t(605,"li"),n(606,"N\xE3o possuir "),t(607,"code"),n(608,"p-help"),e(),n(609," e/ou "),t(610,"code"),n(611,"p-label"),e(),n(612,"."),e()()()(),t(613,"tr",16)(614,"td",17)(615,"div",25)(616,"span",26),n(617," p-options"),l(618,"br"),e()()(),t(619,"td",21)(620,"code",29),n(621,"any[]"),e()(),t(622,"td",23),n(623,"-"),e(),t(624,"td",24)(625,"p"),n(626,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),t(627,"code"),n(628,"PoSelectOption"),e(),n(629,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),t(630,"code"),n(631,"PoSelectOptionGroup"),e(),n(632,"."),e(),t(633,"p"),n(634,"Caso esta lista estiver vazia, o model ser\xE1 "),t(635,"code"),n(636,"undefined"),e(),n(637,"."),e(),t(638,"blockquote")(639,"p"),n(640,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(641,"pre")(642,"code"),n(643,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),e()(),t(644,"blockquote")(645,"p"),n(646,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),t(647,"code"),n(648,"options"),e(),n(649," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),e()(),t(650,"pre")(651,"code"),n(652,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),e()(),t(653,"p"),n(654,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),e()()(),t(655,"tr",16)(656,"td",17)(657,"div",25)(658,"span",26),n(659," p-placeholder"),l(660,"br"),e()()(),t(661,"td",21)(662,"code",27),n(663,"string"),e()(),t(664,"td",23),n(665,"-"),e(),t(666,"td",24)(667,"em")(668,"strong"),n(669,"(opcional)"),e()(),t(670,"p"),n(671,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),e()()(),t(672,"tr",16)(673,"td",17)(674,"div",25)(675,"span",26),n(676," p-helper"),l(677,"br"),e()()(),t(678,"td",21)(679,"code",30),n(680,"PoHelperOptions"),e()(),t(681,"td",23),n(682,"-"),e(),t(683,"td",24)(684,"em")(685,"strong"),n(686,"(opcional)"),e()(),t(687,"p"),n(688,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),e(),t(689,"blockquote")(690,"p"),n(691,"Caso o "),t(692,"code"),n(693,"p-label"),e(),n(694,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),t(695,"code"),n(696,"p-additional-help-tooltip"),e(),n(697," e "),t(698,"code"),n(699,"p-additional-help"),e(),n(700,") ser\xE1 ignorado."),e()()()(),t(701,"tr",16)(702,"td",17)(703,"div",25)(704,"span",26),n(705," p-readonly"),l(706,"br"),e()()(),t(707,"td",21)(708,"code",28),n(709,"boolean"),e()(),t(710,"td",23)(711,"p")(712,"code"),n(713,"false"),e()()(),t(714,"td",24)(715,"em")(716,"strong"),n(717,"(opcional)"),e()(),t(718,"p"),n(719,"Indica que o campo ser\xE1 somente para leitura."),e()()(),t(720,"tr",16)(721,"td",17)(722,"div",25)(723,"span",26),n(724," p-required"),l(725,"br"),e()()(),t(726,"td",21)(727,"code",28),n(728,"boolean"),e()(),t(729,"td",23)(730,"p")(731,"code"),n(732,"false"),e()()(),t(733,"td",24)(734,"em")(735,"strong"),n(736,"(opcional)"),e()(),t(737,"p"),n(738,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),t(739,"tr",16)(740,"td",17)(741,"div",25)(742,"span",26),n(743," p-show-required"),l(744,"br"),e()()(),t(745,"td",21)(746,"code",28),n(747,"boolean"),e()(),t(748,"td",23),n(749,"-"),e(),t(750,"td",24)(751,"p"),n(752,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(753,"blockquote")(754,"p"),n(755,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(756,"ul")(757,"li"),n(758,"N\xE3o possuir "),t(759,"code"),n(760,"p-help"),e(),n(761," e/ou "),t(762,"code"),n(763,"p-label"),e(),n(764,"."),e()()()(),t(765,"tr",16)(766,"td",17)(767,"div",25)(768,"span",26),n(769," p-size"),l(770,"br"),e()()(),t(771,"td",21)(772,"code",27),n(773,"string"),e()(),t(774,"td",23)(775,"p")(776,"code"),n(777,"medium"),e()()(),t(778,"td",24)(779,"em")(780,"strong"),n(781,"(opcional)"),e()(),t(782,"p"),n(783,"Define o tamanho do componente:"),e(),t(784,"ul")(785,"li")(786,"code"),n(787,"small"),e(),n(788,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(789,"li")(790,"code"),n(791,"medium"),e(),n(792,": altura do input como 44px."),e()(),t(793,"blockquote")(794,"p"),n(795,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(796,"code"),n(797,"medium"),e(),n(798,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(799,"a",31),n(800,"po-theme"),e(),n(801,"."),e()()()()(),t(802,"h3",12),n(803,"M\xE9todos"),e(),t(804,"table",32)(805,"tr",16)(806,"th",33)(807,"div",25)(808,"h4")(809,"span",26),n(810," focus "),e()()()()(),t(811,"tr",24)(812,"td",24)(813,"p"),n(814,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(815,"p"),n(816,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(817,"pre")(818,"code"),n(819,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),e()()()()(),l(820,"br"),t(821,"h3"),n(822,"Interfaces"),e(),t(823,"h4",34)(824,"code",5),n(825,"PoSelectOptionGroup"),e()(),t(826,"div",2)(827,"p"),n(828,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),t(829,"code"),n(830,"PoSelectOption"),e(),n(831,"."),e()(),t(832,"h4",12),n(833,"Propriedades"),e(),t(834,"table",13)(835,"tr",14)(836,"th",15),n(837,"Nome"),e(),t(838,"th",15),n(839,"Tipo"),e(),t(840,"th",15),n(841,"Descri\xE7\xE3o"),e()(),t(842,"tr",16)(843,"td",17)(844,"div",25)(845,"span",26),n(846," label"),l(847,"br"),e()()(),t(848,"td",21)(849,"code",27),n(850,"string"),e()(),t(851,"td",24)(852,"p"),n(853,"Label para denominar o nome do grupo."),e()()(),t(854,"tr",16)(855,"td",17)(856,"div",25)(857,"span",26),n(858," options"),l(859,"br"),e()()(),t(860,"td",21)(861,"code",35),n(862,"Array<PoSelectOption>"),e()(),t(863,"td",24)(864,"p"),n(865,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),e()()()(),t(866,"h4",34)(867,"code",5),n(868,"PoSelectOption"),e()(),t(869,"div",2)(870,"p"),n(871,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),e()(),t(872,"h4",12),n(873,"Propriedades"),e(),t(874,"table",13)(875,"tr",14)(876,"th",15),n(877,"Nome"),e(),t(878,"th",15),n(879,"Tipo"),e(),t(880,"th",15),n(881,"Descri\xE7\xE3o"),e()(),t(882,"tr",16)(883,"td",17)(884,"div",25)(885,"span",26),n(886," label"),l(887,"br"),e()()(),t(888,"td",21)(889,"code",27),n(890,"string"),e()(),t(891,"td",24)(892,"p"),n(893,"Label a ser utilizada nos itens da lista."),e()()(),t(894,"tr",16)(895,"td",17)(896,"div",25)(897,"span",26),n(898," value"),l(899,"br"),e()()(),t(900,"td",21)(901,"code",27),n(902,"string "),e(),t(903,"code",36),n(904," number"),e()(),t(905,"td",24)(906,"p"),n(907,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()()())},dependencies:[x],encapsulation:2})}return a})();var we=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(J(le),J(pe))};static \u0275cmp=v({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-select-doc"),e(),t(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),e()()()),p&2&&(c("p-actions",i.actions),s(2),c("p-active",i.activeTab==="doc"),s(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,C,y,be,ve,Ce,xe,_e],encapsulation:2})}return a})();var Ae=[{path:"",component:we}],Pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=I({type:a});static \u0275inj=G({imports:[Y.forChild(Ae),Y]})}return a})();var Tt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=I({type:a});static \u0275inj=G({imports:[Se,Pe]})}return a})();export{Tt as DocPoSelectModule};
