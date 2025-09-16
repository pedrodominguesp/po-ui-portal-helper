import{o as w,p as ae}from"./chunk-7QXRNAIE.js";import{Ga as O,P as te,R as M,Ra as H,Wa as ne,mb as ie,sa as oe,v as ee,yb as x,zb as C}from"./chunk-DJTNC6KO.js";import{Bb as P,Ca as _,Cc as G,Dc as F,Ec as A,Fc as W,Gc as L,Jc as J,Ka as o,Kc as X,La as t,M as k,Ma as a,Oc as Y,P as Q,Qa as q,Ra as g,T as u,Tc as Z,U as c,Vc as $,Xc as j,ab as D,bb as e,db as y,fb as h,gb as S,hb as f,ia as p,ja as z,jb as I,kb as T,lb as K,pa as b,qa as V,za as s,zc as B}from"./chunk-4WWO4UYO.js";var fe=()=>({label:"Option 1",value:"1"}),ve=()=>({label:"Option 2",value:"2"}),xe=(i,Se)=>[i,Se],le=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&a(0,"po-radio-group",0),r&2&&s("p-options",K(3,xe,I(1,fe),I(2,ve)))},dependencies:[M],encapsulation:2})}return i})();var we=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Basic"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-basic"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,we,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,le],encapsulation:2})}return i})();var de=(()=>{class i{additionalHelpTooltip;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.additionalHelpTooltip="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:!1,decls:26,vars:30,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=q();o(0,"po-radio-group",2),f("ngModelChange",function(l){return u(m),S(n.radioGroup,l)||(n.radioGroup=l),c(l)}),g("p-change",function(){return u(m),c(n.changeEvent("p-change"))})("p-keydown",function(){return u(m),c(n.changeEvent("p-keydown"))}),t(),a(1,"hr"),o(2,"div",3),a(3,"po-info",4)(4,"po-info",5),t(),a(5,"hr"),o(6,"form",null,0)(8,"div",3)(9,"po-input",6),f("ngModelChange",function(l){return u(m),S(n.option.label,l)||(n.option.label=l),c(l)}),t(),o(10,"po-input",7),f("ngModelChange",function(l){return u(m),S(n.option.value,l)||(n.option.value=l),c(l)}),t(),o(11,"po-switch",8),f("ngModelChange",function(l){return u(m),S(n.option.disabled,l)||(n.option.disabled=l),c(l)}),t()(),o(12,"div",3)(13,"po-button",9),g("p-click",function(){u(m);let l=D(7);return n.addOption(),c(l.reset())}),t()()(),a(14,"hr"),o(15,"form",null,1)(17,"po-input",10),f("ngModelChange",function(l){return u(m),S(n.label,l)||(n.label=l),c(l)}),t(),o(18,"po-input",11),f("ngModelChange",function(l){return u(m),S(n.help,l)||(n.help=l),c(l)}),t(),o(19,"po-input",12),f("ngModelChange",function(l){return u(m),S(n.additionalHelpTooltip,l)||(n.additionalHelpTooltip=l),c(l)}),t(),o(20,"po-input",13),f("ngModelChange",function(l){return u(m),S(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),c(l)}),t(),o(21,"po-radio-group",14),f("ngModelChange",function(l){return u(m),S(n.columns,l)||(n.columns=l),c(l)}),t(),o(22,"po-checkbox-group",15),f("ngModelChange",function(l){return u(m),S(n.properties,l)||(n.properties=l),c(l)}),t(),o(23,"po-radio-group",16),f("ngModelChange",function(l){return u(m),S(n.size,l)||(n.size=l),c(l)}),t(),o(24,"div",3)(25,"po-button",17),g("click",function(){return u(m),D(16).reset(),c(n.restore())}),t()()()}if(r&2){let m=D(7);h("ngModel",n.radioGroup),s("p-additional-help-tooltip",n.additionalHelpTooltip)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap")),p(3),s("p-value",n.radioGroup),p(),s("p-value",n.event),p(5),h("ngModel",n.option.label),p(),h("ngModel",n.option.value),p(),h("ngModel",n.option.disabled),p(2),s("p-disabled",m.invalid),p(4),h("ngModel",n.label),p(),h("ngModel",n.help),p(),h("ngModel",n.additionalHelpTooltip),p(),h("ngModel",n.fieldErrorMessage),p(),h("ngModel",n.columns),s("p-options",n.columnOptions),p(),h("ngModel",n.properties),s("p-options",n.propertiesOptions),p(),h("ngModel",n.size),s("p-options",n.sizesOptions)}},dependencies:[L,G,F,W,A,ee,te,M,O,oe,ne],encapsulation:2})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Labs"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-radio-group>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<hr />

<form #propertiesForm="ngForm">
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

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-labs"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,Te,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,de],encapsulation:2})}return i})();var se=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:!1,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=q();o(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),f("ngModelChange",function(l){return u(m),S(n.language,l)||(n.language=l),c(l)}),g("p-change",function(l){return u(m),c(n.changeLanguage(l))}),t(),o(4,"po-select",3),f("ngModelChange",function(l){return u(m),S(n.original,l)||(n.original=l),c(l)}),g("p-change",function(l){return u(m),c(n.changeLanguage(l))}),t(),o(5,"po-input",4),f("ngModelChange",function(l){return u(m),S(n.translated,l)||(n.translated=l),c(l)}),t()()()}r&2&&(p(3),h("ngModel",n.language),s("p-options",n.languageOptions),p(),h("ngModel",n.original),s("p-options",n.optionsList),p(),h("ngModel",n.translated))},dependencies:[L,G,F,W,A,M,O,H],encapsulation:2})}return i})();var Re=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),t(),o(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,Re,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,se],encapsulation:2})}return i})();var ce=(()=>{class i{formBuilder=Q(Y);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",B.required],original:[void 0,B.required],translated:[void 0,B.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:!1,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(o(0,"form",0)(1,"div",1)(2,"po-radio-group",2),g("p-change",function(){return n.changeLanguage()}),t(),o(3,"po-select",3),g("p-change",function(){return n.changeLanguage()}),t(),a(4,"po-input",4),t()()),r&2&&(s("formGroup",n.translatorForm),p(2),s("p-options",n.languageOptions),p(),s("p-options",n.optionsList))},dependencies:[L,G,F,J,X,M,O,H],encapsulation:2})}return i})();var Le=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator Reactive Form"),t(),o(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),t(),o(13,"pre",7),e(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator-reactive-form"),t(),a(23,"hr")),r&2&&(p(5),_("po-icon "+n.sampleCodeButtonIcon),p(),y(" ",n.sampleCodeButtonLabel,""),p(),s("ngClass",T(4,Le,n.hideSampleCodeTabs)))},dependencies:[P,w,x,C,ce],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:!1,decls:797,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoRadioGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-radio-group"),t(),e(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),o(27,"a",6)(28,"strong"),e(29,"po-combo"),t()(),e(30," ou "),o(31,"a",7)(32,"strong"),e(33,"po-select"),t()(),e(34,"."),t(),o(35,"p"),e(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),o(37,"a",8)(38,"strong"),e(39,"po-checkbox-group"),t()(),e(40,"."),t(),o(41,"blockquote")(42,"p"),e(43,"Ao passar um valor para o "),o(44,"em"),e(45,"model"),t(),e(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),o(47,"code"),e(48,"undefined"),t(),e(49,"."),t()(),o(50,"h4"),e(51,"Acessibilidade tratada no componente interno "),o(52,"code"),e(53,"po-radio"),t(),e(54,":"),t(),o(55,"p"),e(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(57,"ul")(58,"li"),e(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(60,"a",9),e(61,"WCAG 4.1.2: Name, Role, Value"),t()(),o(62,"li"),e(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),o(64,"a",10),e(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()(),o(66,"li"),e(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),o(68,"a",11),e(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),t()(),o(70,"li"),e(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(72,"a",12),e(73,"(WCAG 2.4.12: Focus Appearance"),t()()(),o(74,"p"),e(75,"Conforme documenta\xE7\xE3o em: "),o(76,"a",13),e(77,"https://doc.animaliads.io/docs/components/radio"),t()(),o(78,"h4"),e(79,"Tokens customiz\xE1veis"),t(),o(80,"p"),e(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(82,"br"),e(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),o(84,"code"),e(85,"po-radio"),t(),e(86," que comp\xF5em o grupo de op\xE7\xF5es. "),a(87,"br"),e(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),o(89,"code"),e(90,"po-radio"),t(),e(91," em vez do pr\xF3prio "),o(92,"code"),e(93,"po-radio-group"),t(),e(94,"."),t(),o(95,"blockquote")(96,"p"),e(97,"Para maiores informa\xE7\xF5es, acesse o guia "),o(98,"a",14),e(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(100,"."),t()(),o(101,"table")(102,"thead")(103,"tr")(104,"th"),e(105,"Propriedade"),t(),o(106,"th"),e(107,"Descri\xE7\xE3o"),t(),o(108,"th"),e(109,"Valor Padr\xE3o"),t()()(),o(110,"tbody")(111,"tr")(112,"td")(113,"strong"),e(114,"Default Values"),t()(),a(115,"td")(116,"td"),t(),o(117,"tr")(118,"td")(119,"code"),e(120,"--border-color"),t()(),o(121,"td"),e(122,"Cor da borda"),t(),o(123,"td")(124,"code"),e(125,"var(--color-neutral-dark-70)"),t()()(),o(126,"tr")(127,"td")(128,"strong"),e(129,"Hover"),t()(),a(130,"td")(131,"td"),t(),o(132,"tr")(133,"td")(134,"code"),e(135,"--shadow-color-hover"),t()(),o(136,"td"),e(137,"Cor da sombra no estado hover"),t(),o(138,"td")(139,"code"),e(140,"var(--color-brand-01-lighter)"),t()()(),o(141,"tr")(142,"td")(143,"code"),e(144,"--color-hover"),t()(),o(145,"td"),e(146,"Cor principal no estado hover"),t(),o(147,"td")(148,"code"),e(149,"var(--color-brand-01-dark)"),t()()(),o(150,"tr")(151,"td")(152,"strong"),e(153,"Focused"),t()(),a(154,"td")(155,"td"),t(),o(156,"tr")(157,"td")(158,"code"),e(159,"--outline-color-focused"),t()(),o(160,"td"),e(161,"Cor do outline do estado de focus"),t(),o(162,"td")(163,"code"),e(164,"var(--color-brand-01-darkest)"),t()()(),o(165,"tr")(166,"td")(167,"strong"),e(168,"checked"),t()(),a(169,"td")(170,"td"),t(),o(171,"tr")(172,"td")(173,"code"),e(174,"--color-unchecked"),t()(),o(175,"td"),e(176,"Cor quando n\xE3o selecionado"),t(),o(177,"td")(178,"code"),e(179,"var(--color-neutral-light-00)"),t()()(),o(180,"tr")(181,"td")(182,"code"),e(183,"--color-checked"),t()(),o(184,"td"),e(185,"Cor quando selecionado"),t(),o(186,"td")(187,"code"),e(188,"var(--color-action-default)"),t()()(),o(189,"tr")(190,"td")(191,"strong"),e(192,"Disabled"),t()(),a(193,"td")(194,"td"),t(),o(195,"tr")(196,"td")(197,"code"),e(198,"--color-unchecked-disabled"),t()(),o(199,"td"),e(200,"Cor pricipal quando n\xE3o selecionado no estado disabled"),t(),o(201,"td")(202,"code"),e(203,"var(--color-neutral-light-30)"),t()()(),o(204,"tr")(205,"td")(206,"code"),e(207,"--color-checked-disabled"),t()(),o(208,"td"),e(209,"Cor pricipal quando selecionado no estado disabled"),t(),o(210,"td")(211,"code"),e(212,"var(--color-neutral-dark-70)"),t()()()()()(),o(213,"div",15)(214,"h4",16),e(215,"Seletor"),t(),o(216,"pre",17),e(217,`<po-radio-group
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
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),t()(),o(218,"h4",18),e(219,"Propriedades"),t(),o(220,"table",19)(221,"tr",20)(222,"th",21),e(223,"Nome"),t(),o(224,"th",21),e(225,"Tipo"),t(),o(226,"th",21),e(227,"Padr\xE3o"),t(),o(228,"th",21),e(229,"Descri\xE7\xE3o"),t()(),o(230,"tr",22)(231,"td",23)(232,"div",24)(233,"span",25),e(234," (p-additional-help)"),a(235,"br"),t()(),o(236,"div",26),e(237,"Deprecated"),t()(),o(238,"td",27)(239,"code",28),e(240,"EventEmitter"),t()(),o(241,"td",29),e(242,"-"),t(),o(243,"td",30)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),o(247,"p"),e(248,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),o(249,"code"),e(250,"p-help"),t(),e(251,"."),t()()(),o(252,"tr",22)(253,"td",23)(254,"div",31)(255,"span",32),e(256," p-additional-help-tooltip"),a(257,"br"),t()(),o(258,"div",26),e(259,"Deprecated"),t()(),o(260,"td",27)(261,"code",33),e(262,"string"),t()(),o(263,"td",29),e(264,"-"),t(),o(265,"td",30)(266,"em")(267,"strong"),e(268,"(opcional)"),t()(),o(269,"p"),e(270,"Exibe um \xEDcone de ajuda adicional ao "),o(271,"code"),e(272,"p-help"),t(),e(273,`, com o texto desta propriedade no tooltip.
Se o evento `),o(274,"code"),e(275,"p-additional-help"),t(),e(276,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),o(277,"strong"),e(278,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(279,"blockquote")(280,"p"),e(281,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),o(282,"tr",22)(283,"td",23)(284,"div",31)(285,"span",32),e(286," p-append-in-body"),a(287,"br"),t()()(),o(288,"td",27)(289,"code",34),e(290,"boolean"),t()(),o(291,"td",29)(292,"p")(293,"code"),e(294,"false"),t()()(),o(295,"td",30)(296,"em")(297,"strong"),e(298,"(opcional)"),t()(),o(299,"p"),e(300,"Define que o tooltip ("),o(301,"code"),e(302,"p-additional-help-tooltip"),t(),e(303," e/ou "),o(304,"code"),e(305,"p-error-limit"),t(),e(306,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(307,"blockquote")(308,"p"),e(309,"Quando utilizado com "),o(310,"code"),e(311,"p-additional-help-tooltip"),t(),e(312,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),o(313,"tr",22)(314,"td",23)(315,"div",31)(316,"span",32),e(317," p-auto-focus"),a(318,"br"),t()()(),o(319,"td",27)(320,"code",34),e(321,"boolean"),t()(),o(322,"td",29)(323,"p")(324,"code"),e(325,"false"),t()()(),o(326,"td",30)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),o(330,"p"),e(331,"Aplica foco no elemento ao ser iniciado."),t(),o(332,"blockquote")(333,"p"),e(334,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(335,"tr",22)(336,"td",23)(337,"div",24)(338,"span",25),e(339," (p-change)"),a(340,"br"),t()()(),o(341,"td",27)(342,"code",28),e(343,"EventEmitter"),t()(),o(344,"td",29),e(345,"-"),t(),o(346,"td",30)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),o(350,"p"),e(351,"Evento ao alterar valor do campo."),t()()(),o(352,"tr",22)(353,"td",23)(354,"div",31)(355,"span",32),e(356," p-columns"),a(357,"br"),t()()(),o(358,"td",27)(359,"code",35),e(360,"number"),t()(),o(361,"td",29)(362,"p")(363,"code"),e(364,"2"),t()()(),o(365,"td",30)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),o(369,"p"),e(370,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),t(),o(371,"p")(372,"strong"),e(373,"Considera\xE7\xF5es:"),t()(),o(374,"ul")(375,"li"),e(376,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(377,"code"),e(378,"1"),t(),e(379," e "),o(380,"code"),e(381,"4"),t(),e(382," colunas."),t(),o(383,"li"),e(384,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),o(385,"ul")(386,"li")(387,"code"),e(388,"sm"),t(),e(389,": "),o(390,"code"),e(391,"1"),t()(),o(392,"li")(393,"code"),e(394,"md"),t(),e(395,": "),o(396,"code"),e(397,"2"),t()()()()()()(),o(398,"tr",22)(399,"td",23)(400,"div",31)(401,"span",32),e(402," p-disabled"),a(403,"br"),t()()(),o(404,"td",27)(405,"code",34),e(406,"boolean"),t()(),o(407,"td",29)(408,"p")(409,"code"),e(410,"false"),t()()(),o(411,"td",30)(412,"em")(413,"strong"),e(414,"(opcional)"),t()(),o(415,"p"),e(416,"Indica que o campo ser\xE1 desabilitado."),t()()(),o(417,"tr",22)(418,"td",23)(419,"div",31)(420,"span",32),e(421," p-error-limit"),a(422,"br"),t()()(),o(423,"td",27)(424,"code",34),e(425,"boolean"),t()(),o(426,"td",29)(427,"p")(428,"code"),e(429,"false"),t()()(),o(430,"td",30)(431,"em")(432,"strong"),e(433,"(opcional)"),t()(),o(434,"p"),e(435,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(436,"blockquote")(437,"p"),e(438,"Caso essa propriedade seja definida como "),o(439,"code"),e(440,"true"),t(),e(441,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(442,"tr",22)(443,"td",23)(444,"div",31)(445,"span",32),e(446," p-field-error-message"),a(447,"br"),t()()(),o(448,"td",27)(449,"code",33),e(450,"string"),t()(),o(451,"td",29),e(452,"-"),t(),o(453,"td",30)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),o(457,"p"),e(458,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(459,"blockquote")(460,"p"),e(461,"Necess\xE1rio que a propriedade "),o(462,"code"),e(463,"p-required"),t(),e(464," esteja habilitada."),t()()()(),o(465,"tr",22)(466,"td",23)(467,"div",31)(468,"span",32),e(469," p-help"),a(470,"br"),t()()(),o(471,"td",27)(472,"code",33),e(473,"string"),t()(),o(474,"td",29),e(475,"-"),t(),o(476,"td",30)(477,"em")(478,"strong"),e(479,"(opcional)"),t()(),o(480,"p"),e(481,"Texto de apoio do campo."),t()()(),o(482,"tr",22)(483,"td",23)(484,"div",24)(485,"span",25),e(486," (p-keydown)"),a(487,"br"),t()()(),o(488,"td",27)(489,"code",28),e(490,"EventEmitter"),t()(),o(491,"td",29),e(492,"-"),t(),o(493,"td",30)(494,"em")(495,"strong"),e(496,"(opcional)"),t()(),o(497,"p"),e(498,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(499,"code"),e(500,"KeyboardEvent"),t(),e(501," com informa\xE7\xF5es sobre a tecla."),t()()(),o(502,"tr",22)(503,"td",23)(504,"div",31)(505,"span",32),e(506," p-label"),a(507,"br"),t()()(),o(508,"td",27)(509,"code",33),e(510,"string"),t()(),o(511,"td",29),e(512,"-"),t(),o(513,"td",30)(514,"em")(515,"strong"),e(516,"(opcional)"),t()(),o(517,"p"),e(518,"Label do campo."),t()()(),o(519,"tr",22)(520,"td",23)(521,"div",31)(522,"span",32),e(523," p-label-text-wrap"),a(524,"br"),t()()(),o(525,"td",27)(526,"code",34),e(527,"boolean"),t()(),o(528,"td",29)(529,"p")(530,"code"),e(531,"false"),t()()(),o(532,"td",30)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),o(536,"p"),e(537,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(538,"code"),e(539,"p-label"),t(),e(540,". Quando "),o(541,"code"),e(542,"p-label-text-wrap"),t(),e(543,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(544,"tr",22)(545,"td",23)(546,"div",31)(547,"span",32),e(548," name"),a(549,"br"),t()()(),o(550,"td",27)(551,"code",33),e(552,"string"),t()(),o(553,"td",29),e(554,"-"),t(),o(555,"td",30)(556,"p"),e(557,"Nome das op\xE7\xF5es."),t()()(),o(558,"tr",22)(559,"td",23)(560,"div",31)(561,"span",32),e(562," p-optional"),a(563,"br"),t()()(),o(564,"td",27)(565,"code",34),e(566,"boolean"),t()(),o(567,"td",29)(568,"p")(569,"code"),e(570,"false"),t()()(),o(571,"td",30)(572,"em")(573,"strong"),e(574,"(opcional)"),t()(),o(575,"p"),e(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(577,"blockquote")(578,"p"),e(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(580,"ul")(581,"li"),e(582,"O campo conter "),o(583,"code"),e(584,"p-required"),t(),e(585,";"),t(),o(586,"li"),e(587,"N\xE3o possuir "),o(588,"code"),e(589,"p-help"),t(),e(590," e/ou "),o(591,"code"),e(592,"p-label"),t(),e(593,"."),t()()()(),o(594,"tr",22)(595,"td",23)(596,"div",31)(597,"span",32),e(598," p-options"),a(599,"br"),t()()(),o(600,"td",27)(601,"code",36),e(602,"PoRadioGroupOption[]"),t()(),o(603,"td",29),e(604,"-"),t(),o(605,"td",30)(606,"p"),e(607,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),t()()(),o(608,"tr",22)(609,"td",23)(610,"div",31)(611,"span",32),e(612," p-helper"),a(613,"br"),t()()(),o(614,"td",27)(615,"code",37),e(616,"PoHelperOptions"),t()(),o(617,"td",29),e(618,"-"),t(),o(619,"td",30)(620,"em")(621,"strong"),e(622,"(opcional)"),t()(),o(623,"p"),e(624,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),o(625,"blockquote")(626,"p"),e(627,"Caso o "),o(628,"code"),e(629,"p-label"),t(),e(630,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),o(631,"code"),e(632,"p-additional-help-tooltip"),t(),e(633," e "),o(634,"code"),e(635,"p-additional-help"),t(),e(636,") ser\xE1 ignorado."),t()()()(),o(637,"tr",22)(638,"td",23)(639,"div",31)(640,"span",32),e(641," p-required"),a(642,"br"),t()()(),o(643,"td",27)(644,"code",34),e(645,"boolean"),t()(),o(646,"td",29)(647,"p")(648,"code"),e(649,"false"),t()()(),o(650,"td",30)(651,"em")(652,"strong"),e(653,"(opcional)"),t()(),o(654,"p"),e(655,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(656,"tr",22)(657,"td",23)(658,"div",31)(659,"span",32),e(660," p-show-required"),a(661,"br"),t()()(),o(662,"td",27)(663,"code",34),e(664,"boolean"),t()(),o(665,"td",29),e(666,"-"),t(),o(667,"td",30)(668,"p"),e(669,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(670,"blockquote")(671,"p"),e(672,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(673,"ul")(674,"li"),e(675,"N\xE3o possuir "),o(676,"code"),e(677,"p-help"),t(),e(678," e/ou "),o(679,"code"),e(680,"p-label"),t(),e(681,"."),t()()()(),o(682,"tr",22)(683,"td",23)(684,"div",31)(685,"span",32),e(686," p-size"),a(687,"br"),t()()(),o(688,"td",27)(689,"code",33),e(690,"string"),t()(),o(691,"td",29)(692,"p")(693,"code"),e(694,"medium"),t()()(),o(695,"td",30)(696,"em")(697,"strong"),e(698,"(opcional)"),t()(),o(699,"p"),e(700,"Define o tamanho dos radios do componente:"),t(),o(701,"ul")(702,"li")(703,"code"),e(704,"small"),t(),e(705,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(706,"li")(707,"code"),e(708,"medium"),t(),e(709,": 24x24."),t()(),o(710,"blockquote")(711,"p"),e(712,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(713,"code"),e(714,"medium"),t(),e(715,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(716,"a",38),e(717,"po-theme"),t(),e(718,"."),t()()()()(),o(719,"h3",18),e(720,"M\xE9todos"),t(),o(721,"table",39)(722,"tr",22)(723,"th",40)(724,"div",31)(725,"h4")(726,"span",32),e(727," focus "),t()()()()(),o(728,"tr",30)(729,"td",30)(730,"p"),e(731,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(732,"p"),e(733,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(734,"pre")(735,"code"),e(736,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),t()()()()(),a(737,"br"),o(738,"h3"),e(739,"Interfaces"),t(),o(740,"h4",41)(741,"code",5),e(742,"PoRadioGroupOption"),t()(),o(743,"div",2)(744,"p"),e(745,"Interface para as a\xE7\xF5es do componente po-radio-group."),t()(),o(746,"h4",18),e(747,"Propriedades"),t(),o(748,"table",19)(749,"tr",20)(750,"th",21),e(751,"Nome"),t(),o(752,"th",21),e(753,"Tipo"),t(),o(754,"th",21),e(755,"Descri\xE7\xE3o"),t()(),o(756,"tr",22)(757,"td",23)(758,"div",31)(759,"span",32),e(760," disabled"),a(761,"br"),t()()(),o(762,"td",27)(763,"code",34),e(764,"boolean"),t()(),o(765,"td",30)(766,"em")(767,"strong"),e(768,"(opcional)"),t()(),o(769,"p"),e(770,"Desabilita o radio."),t()()(),o(771,"tr",22)(772,"td",23)(773,"div",31)(774,"span",32),e(775," label"),a(776,"br"),t()()(),o(777,"td",27)(778,"code",33),e(779,"string"),t()(),o(780,"td",30)(781,"p"),e(782,"Texto do radio."),t()()(),o(783,"tr",22)(784,"td",23)(785,"div",31)(786,"span",32),e(787," value"),a(788,"br"),t()()(),o(789,"td",27)(790,"code",33),e(791,"string "),t(),o(792,"code",35),e(793," number"),t()(),o(794,"td",30)(795,"p"),e(796,"Valor do radio."),t()()()()())},dependencies:[w],encapsulation:2})}return i})();var Ee=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(z(Z),z($))};static \u0275cmp=b({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-radio-group-doc"),t(),o(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),t()()()),r&2&&(s("p-actions",n.actions),p(2),s("p-active",n.activeTab==="doc"),p(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ie,x,C,re,me,ue,ge,be],encapsulation:2})}return i})();var Ve=[{path:"",component:Ee}],he=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=V({type:i});static \u0275inj=k({imports:[j.forChild(Ve),j]})}return i})();var ut=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=V({type:i});static \u0275inj=k({imports:[ae,he]})}return i})();export{ut as DocPoRadioGroupModule};
