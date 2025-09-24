import{o as b,p as W}from"./chunk-QBCDRFNO.js";import{Kb as N,Za as C,mb as J,ta as j,v as M,yb as x,zb as S}from"./chunk-3RSXW52V.js";import{$a as _,Bb as h,Ca as y,Ka as n,L as D,La as t,M as P,Ma as i,P as g,Qa as w,Ra as c,T as q,Tc as K,U as k,Vc as X,Xc as O,Za as R,_a as U,ab as v,bb as e,db as f,ia as d,ib as A,ja as L,jb as H,kb as E,pa as s,qa as T,za as p}from"./chunk-4WWO4UYO.js";var re=()=>({property:"name",required:!0,showRequired:!0}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,l){a&1&&i(0,"po-dynamic-form",0),a&2&&p("p-fields",E(2,le,H(1,re)))},dependencies:[C],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),Q=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,de,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,G],encapsulation:2})}return o})();var I=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Z=(()=>{class o{poNotification=g(j);registerService=g(I);person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:N.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[A([I])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let z=v(1);return l.poNotification.success("Data saved successfully!"),k(z.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);

  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,ce,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,Z],encapsulation:2})}return o})();var B=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ee=["dynamicForm"],ee=(()=>{class o{poNotification=g(j);registerService=g(B);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:N.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:r=>{console.log("Iniciar download para o arquivo:",r.name)}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,l){if(a&1&&R(Ee,7),a&2){let m;U(m=_())&&(l.dynamicForm=m.first)}},standalone:!1,features:[A([B])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let z=v(1);return l.poNotification.success("Data saved successfully!"),k(z.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,Se,l.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ee],encapsulation:2})}return o})();var ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4334,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),n(20,"h4",9),e(21,"Propriedades"),t(),n(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),n(26,"th",12),e(27,"Tipo"),t(),n(28,"th",12),e(29,"Padr\xE3o"),t(),n(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),n(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),i(37,"br"),t()()(),n(38,"td",17)(39,"code",18),e(40,"string"),t()(),n(41,"td",19),e(42,"-"),t(),n(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),n(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),n(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),n(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),i(57,"br"),t()()(),n(58,"td",17)(59,"code",18),e(60,"string"),t()(),n(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),n(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),n(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),n(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),n(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),i(94,"br"),t()()(),n(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),n(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),n(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),n(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),n(108,"blockquote")(109,"p"),e(110,"Ex: "),n(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),n(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),n(115,"ul")(116,"li"),e(117,"Caso o "),n(118,"em"),e(119,"type"),t(),e(120," informado seja "),n(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),n(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),n(127,"li"),e(128,"Caso o "),n(129,"em"),e(130,"type"),t(),e(131," informado seja "),n(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),n(135,"em"),e(136,"mask"),t(),e(137," ou "),n(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),n(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),n(144,"em"),e(145,"mask"),t(),e(146," ou "),n(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),n(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),n(153,"li"),e(154,"Caso o "),n(155,"em"),e(156,"type"),t(),e(157," informado seja "),n(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),n(161,"em"),e(162,"mask"),t(),e(163," ou "),n(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),n(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),n(170,"em"),e(171,"mask"),t(),e(172," ou "),n(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),n(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),n(179,"li"),e(180,"Caso a lista possua a propriedade "),n(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),n(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),n(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),n(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),n(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),n(195,"code"),e(196,"po-select"),t(),e(197," ou, "),n(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),n(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),n(204,"li"),e(205,"Caso o "),n(206,"em"),e(207,"type"),t(),e(208," informado seja "),n(209,"em"),e(210,"date"),t(),e(211," ou "),n(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),n(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),n(218,"li"),e(219,"Caso seja informado a propriedade "),n(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),n(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),n(226,"li"),e(227,"Caso o "),n(228,"em"),e(229,"type"),t(),e(230," informado seja "),n(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),n(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),n(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),n(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),n(243,"li"),e(244,"Caso a lista possua a propriedade "),n(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),n(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),n(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),n(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),n(257,"li"),e(258,"Caso seja informada a propriedade "),n(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),n(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),n(265,"li"),e(266,"Caso o "),n(267,"em"),e(268,"type"),t(),e(269," informado seja "),n(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),n(273,"code"),e(274,"po-input"),t(),e(275,"."),n(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),n(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),n(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),n(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),i(290,"br"),t()()(),n(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),n(294,"td",19),e(295,"-"),t(),n(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),n(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),n(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),n(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),n(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),n(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),n(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),n(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),n(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),n(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),n(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),n(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),i(338,"br"),t()()(),n(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),n(342,"td",19),e(343,"-"),t(),n(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),n(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),n(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),n(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),i(361,"br"),t()()(),n(362,"td",17)(363,"code",18),e(364,"string "),t(),n(365,"code",29),e(366," Function"),t()(),n(367,"td",19),e(368,"-"),t(),n(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),n(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),n(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),n(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),n(385,"code"),e(386,"POST"),t(),e(387,"."),t(),n(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),n(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),n(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),n(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),n(402,"p"),e(403,"Por exemplo:"),t(),n(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),n(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),n(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),n(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),i(420,"br"),t()()(),n(421,"td",17)(422,"code",18),e(423,"string "),t(),n(424,"code",29),e(425," Function"),t()(),n(426,"td",19),e(427,"-"),t(),n(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),n(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),n(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),n(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),n(447,"code"),e(448,"POST"),t(),e(449,"."),t(),n(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),n(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),n(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),n(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),n(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),n(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),n(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),n(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),n(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),n(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),n(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),i(488,"br"),t()()(),n(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),n(492,"td",19),e(493,"-"),t(),n(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),n(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),n(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),i(505,"br"),t()()(),n(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),n(509,"td",19),e(510,"-"),t(),n(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),n(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),n(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),n(519,"ul")(520,"li"),e(521,"po-input"),t(),n(522,"li"),e(523,"po-number"),t(),n(524,"li"),e(525,"po-decimal"),t(),n(526,"li"),e(527,"po-textarea"),t(),n(528,"li"),e(529,"po-password"),t()(),n(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),n(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),n(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),i(540,"br"),t()()(),n(541,"td",17)(542,"code",33),e(543,"any"),t()(),n(544,"td",19),e(545,"-"),t(),n(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),n(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),n(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),n(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),n(557,"blockquote")(558,"p"),e(559,"Ex: "),n(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),n(562,"h3",9),e(563,"M\xE9todos"),t(),n(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),n(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),n(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),n(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),n(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),n(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),n(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),n(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),n(593,"th",12),e(594,"Tipo"),t(),n(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),n(597,"tr",13)(598,"td",14),e(599," property"),t(),n(600,"td",17)(601,"code",37),e(602," string "),t()(),n(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),n(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),i(609,"br"),n(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),n(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),n(621,"code"),e(622,"additionalHelpTooltip"),t(),e(623," ou executa a a\xE7\xE3o definida em "),n(624,"code"),e(625,"additionalHelp"),t(),e(626,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(627,"code"),e(628,"keydown"),t(),e(629,"."),t(),n(630,"pre")(631,"code"),e(632,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   additionalHelpTooltip: 'Mensagem de ajuda complementar.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),n(633,"h5")(634,"b"),e(635,"Par\xE2metros"),t()(),n(636,"table",10)(637,"tr",11)(638,"th",12),e(639,"Nome"),t(),n(640,"th",12),e(641,"Tipo"),t(),n(642,"th",12),e(643,"Descri\xE7\xE3o"),t()(),n(644,"tr",13)(645,"td",14),e(646," property"),t(),n(647,"td",17)(648,"code",37),e(649," string "),t()(),n(650,"td",20)(651,"p"),e(652,"Identificador da coluna."),t()()()(),i(653,"br"),n(654,"h3"),e(655,"Interfaces"),t(),n(656,"h4",38)(657,"code",5),e(658,"PoDynamicFormField"),t()(),n(659,"div",2)(660,"p"),e(661," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(662,"h4",9),e(663,"Propriedades"),t(),n(664,"table",10)(665,"tr",11)(666,"th",12),e(667,"Nome"),t(),n(668,"th",12),e(669,"Tipo"),t(),n(670,"th",12),e(671,"Descri\xE7\xE3o"),t()(),n(672,"tr",13)(673,"td",14)(674,"div",15)(675,"span",16),e(676," advancedFilters"),i(677,"br"),t()()(),n(678,"td",17)(679,"code",39),e(680,"Array<PoLookupAdvancedFilter>"),t()(),n(681,"td",20)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),n(685,"p"),e(686,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(687,"blockquote")(688,"p"),e(689,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(690,"p"),e(691,"Exemplo de URL com busca avan\xE7ada:"),t(),n(692,"p")(693,"code"),e(694,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(695,"p"),e(696,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(697,"p")(698,"code"),e(699,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(700,"tr",13)(701,"td",14)(702,"div",15)(703,"span",16),e(704," appendBox"),i(705,"br"),t()()(),n(706,"td",17)(707,"code",28),e(708,"boolean"),t()(),n(709,"td",20)(710,"em")(711,"strong"),e(712,"(opcional)"),t()(),n(713,"p"),e(714,"Define que o "),n(715,"code"),e(716,"listbox"),t(),e(717," e/ou tooltip ("),n(718,"code"),e(719,"p-additional-help-tooltip"),t(),e(720," e/ou "),n(721,"code"),e(722,"p-error-limit"),t(),e(723,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(724,"blockquote")(725,"p"),e(726,"Quando utilizado com "),n(727,"code"),e(728,"p-additional-help-tooltip"),t(),e(729,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(730,"tr",13)(731,"td",14)(732,"div",15)(733,"span",16),e(734," autoHeight"),i(735,"br"),t()()(),n(736,"td",17)(737,"code",28),e(738,"boolean"),t()(),n(739,"td",20)(740,"em")(741,"strong"),e(742,"(opcional)"),t()(),n(743,"p"),e(744,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(745,"p")(746,"strong"),e(747,"Componentes compat\xEDveis:"),t(),n(748,"code"),e(749,"po-multiselect"),t(),e(750,", "),n(751,"code"),e(752,"po-lookup"),t(),e(753,"."),t()()(),n(754,"tr",13)(755,"td",14)(756,"div",15)(757,"span",16),e(758," autoUpload"),i(759,"br"),t()()(),n(760,"td",17)(761,"code",28),e(762,"boolean"),t()(),n(763,"td",20)(764,"em")(765,"strong"),e(766,"(opcional)"),t()(),n(767,"p"),e(768,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(769,"p")(770,"strong"),e(771,"Componente compat\xEDvel"),t(),e(772,": "),n(773,"code"),e(774,"po-upload"),t()()()(),n(775,"tr",13)(776,"td",14)(777,"div",15)(778,"span",16),e(779," booleanFalse"),i(780,"br"),t()()(),n(781,"td",17)(782,"code",18),e(783,"string"),t()(),n(784,"td",20)(785,"em")(786,"strong"),e(787,"(opcional)"),t()(),n(788,"p"),e(789,"Texto exibido quando o valor do componente for "),n(790,"em"),e(791,"false"),t(),e(792,"."),t()()(),n(793,"tr",13)(794,"td",14)(795,"div",15)(796,"span",16),e(797," booleanTrue"),i(798,"br"),t()()(),n(799,"td",17)(800,"code",18),e(801,"string"),t()(),n(802,"td",20)(803,"em")(804,"strong"),e(805,"(opcional)"),t()(),n(806,"p"),e(807,"Texto exibido quando o valor do componente for "),n(808,"em"),e(809,"true"),t(),e(810,"."),t()()(),n(811,"tr",13)(812,"td",14)(813,"div",15)(814,"span",16),e(815," changeOnEnter"),i(816,"br"),t()()(),n(817,"td",17)(818,"code",28),e(819,"boolean"),t()(),n(820,"td",20)(821,"em")(822,"strong"),e(823,"(opcional)"),t()(),n(824,"p"),e(825,"Indica que o evento "),n(826,"code"),e(827,"p-change"),t(),e(828,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(829,"code"),e(830,"po-combo"),t(),e(831,"."),t()()(),n(832,"tr",13)(833,"td",14)(834,"div",15)(835,"span",16),e(836," changeVisibleColumns"),i(837,"br"),t()()(),n(838,"td",17)(839,"code",29),e(840,"Function"),t()(),n(841,"td",20)(842,"em")(843,"strong"),e(844,"(opcional)"),t()(),n(845,"p"),e(846,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(847,"p"),e(848,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(849,"p")(850,"strong"),e(851,"Componentes compat\xEDveis"),t(),e(852,": "),n(853,"code"),e(854,"po-lookup"),t()()()(),n(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),e(859," clean"),i(860,"br"),t()()(),n(861,"td",17)(862,"code",28),e(863,"boolean"),t()(),n(864,"td",20)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),n(868,"p"),e(869,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(870,"p")(871,"strong"),e(872,"Componentes compat\xEDveis:"),t(),n(873,"code"),e(874,"po-datepicker"),t(),e(875,", "),n(876,"code"),e(877,"po-datepicker-range"),t(),e(878,", "),n(879,"code"),e(880,"po-input"),t(),e(881,", "),n(882,"code"),e(883,"po-number"),t(),e(884,", "),n(885,"code"),e(886,"po-decimal"),t(),e(887,", "),n(888,"code"),e(889,"po-combo"),t(),e(890,", "),n(891,"code"),e(892,"po-lookup"),t(),e(893,", "),n(894,"code"),e(895,"po-password"),t()()()(),n(896,"tr",13)(897,"td",14)(898,"div",15)(899,"span",16),e(900," columnRestoreManager"),i(901,"br"),t()()(),n(902,"td",17)(903,"code",29),e(904,"Function"),t()(),n(905,"td",20)(906,"em")(907,"strong"),e(908,"(opcional)"),t()(),n(909,"p"),e(910,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(911,"p"),e(912,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(913,"p")(914,"strong"),e(915,"Componentes compat\xEDveis"),t(),e(916,": "),n(917,"code"),e(918,"po-lookup"),t()()()(),n(919,"tr",13)(920,"td",14)(921,"div",15)(922,"span",16),e(923," columns"),i(924,"br"),t()()(),n(925,"td",17)(926,"code",40),e(927,"Array<PoLookupColumn> "),t(),n(928,"code",41),e(929," number"),t()(),n(930,"td",20)(931,"em")(932,"strong"),e(933,"(opcional)"),t()(),n(934,"p"),e(935,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(936,"code"),e(937,"searchService"),t(),e(938,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(939,"a",42)(940,"code"),e(941,"PoLookupColumn"),t()(),e(942,"."),t(),n(943,"blockquote")(944,"p"),e(945,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(946,"em"),e(947,"label"),t(),e(948," e "),n(949,"em"),e(950,"value"),t(),e(951,` para valores
de tela e do model respectivamente.`),t()(),n(952,"p")(953,"strong"),e(954,"Componentes compat\xEDveis:"),t(),n(955,"code"),e(956,"po-radio-group"),t(),e(957,", "),n(958,"code"),e(959,"po-lookup"),t(),e(960,", "),n(961,"code"),e(962,"po-checkbox-group"),t(),e(963,"."),t()()(),n(964,"tr",13)(965,"td",14)(966,"div",15)(967,"span",16),e(968," container"),i(969,"br"),t()()(),n(970,"td",17)(971,"code",18),e(972,"string"),t()(),n(973,"td",20)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),n(977,"p"),e(978,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(979,"p"),e(980,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(981,"tr",13)(982,"td",14)(983,"div",15)(984,"span",16),e(985," customAction"),i(986,"br"),t()()(),n(987,"td",17)(988,"code",43),e(989,"PoProgressAction"),t()(),n(990,"td",20)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),n(994,"p"),e(995,"Define uma a\xE7\xE3o personalizada no componente "),n(996,"code"),e(997,"po-upload"),t(),e(998,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(999,"p")(1e3,"strong"),e(1001,"Componente compat\xEDvel"),t(),e(1002,": "),n(1003,"code"),e(1004,"po-upload"),t(),e(1005,","),t(),n(1006,"p")(1007,"strong"),e(1008,"Exemplo de configura\xE7\xE3o"),t(),e(1009,":"),t(),n(1010,"pre")(1011,"code",44),e(1012,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1013,"tr",13)(1014,"td",14)(1015,"div",15)(1016,"span",16),e(1017," customActionClick"),i(1018,"br"),t()()(),n(1019,"td",17)(1020,"code",45),e(1021,"(file: PoUploadFile) => void"),t()(),n(1022,"td",20)(1023,"em")(1024,"strong"),e(1025,"(opcional)"),t()(),n(1026,"p"),e(1027,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1028,"code"),e(1029,"p-custom-action"),t(),e(1030,"."),t(),n(1031,"p")(1032,"strong"),e(1033,"Componente compat\xEDvel"),t(),e(1034,": "),n(1035,"code"),e(1036,"po-upload"),t(),e(1037,","),t(),n(1038,"p"),e(1039,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1040,"p")(1041,"strong"),e(1042,"Par\xE2metro do evento"),t(),e(1043,":"),t(),n(1044,"ul")(1045,"li")(1046,"code"),e(1047,"file"),t(),e(1048,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1049,"code"),e(1050,"PoUploadFile"),t(),e(1051," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1052,"p")(1053,"strong"),e(1054,"Exemplo de uso"),t(),e(1055,":"),t(),n(1056,"pre")(1057,"code",44),e(1058,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1059,"tr",13)(1060,"td",14)(1061,"div",15)(1062,"span",16),e(1063," debounceTime"),i(1064,"br"),t()()(),n(1065,"td",17)(1066,"code",41),e(1067,"number"),t()(),n(1068,"td",20)(1069,"em")(1070,"strong"),e(1071,"(opcional)"),t()(),n(1072,"p"),e(1073,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1074,"code"),e(1075,"p-filter-service"),t(),e(1076,")."),t(),n(1077,"p")(1078,"strong"),e(1079,"Componentes compat\xEDveis:"),t(),n(1080,"code"),e(1081,"po-combo"),t(),e(1082,", "),n(1083,"code"),e(1084,"po-multiselect"),t(),e(1085,"."),t()()(),n(1086,"tr",13)(1087,"td",14)(1088,"div",15)(1089,"span",16),e(1090," decimalsLength"),i(1091,"br"),t()()(),n(1092,"td",17)(1093,"code",41),e(1094,"number"),t()(),n(1095,"td",20)(1096,"em")(1097,"strong"),e(1098,"(opcional)"),t()(),n(1099,"p"),e(1100,"Quantidade m\xE1xima de casas decimais."),t(),n(1101,"blockquote")(1102,"p"),e(1103,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1104,"code"),e(1105,"type"),t(),e(1106," for "),n(1107,"em"),e(1108,"currency"),t(),e(1109," ou "),n(1110,"em"),e(1111,"decimal"),t(),e(1112,"."),t()()()(),n(1113,"tr",13)(1114,"td",14)(1115,"div",15)(1116,"span",16),e(1117," directory"),i(1118,"br"),t()()(),n(1119,"td",17)(1120,"code",28),e(1121,"boolean"),t()(),n(1122,"td",20)(1123,"em")(1124,"strong"),e(1125,"(opcional)"),t()(),n(1126,"p"),e(1127,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1128,"blockquote")(1129,"p"),e(1130,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1131,"blockquote")(1132,"p"),e(1133,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1134,"strong"),e(1135,"Internet Explorer"),t(),e(1136,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1137,"p")(1138,"strong"),e(1139,"Componente compat\xEDvel"),t(),e(1140,": "),n(1141,"code"),e(1142,"po-upload"),t()()()(),n(1143,"tr",13)(1144,"td",14)(1145,"div",15)(1146,"span",16),e(1147," disabled"),i(1148,"br"),t()()(),n(1149,"td",17)(1150,"code",28),e(1151,"boolean"),t()(),n(1152,"td",20)(1153,"em")(1154,"strong"),e(1155,"(opcional)"),t()(),n(1156,"p"),e(1157,"Desabilita o campo caso informar o valor "),n(1158,"em"),e(1159,"true"),t(),e(1160,"."),t()()(),n(1161,"tr",13)(1162,"td",14)(1163,"div",15)(1164,"span",16),e(1165," disabledInitFilter"),i(1166,"br"),t()()(),n(1167,"td",17)(1168,"code",28),e(1169,"boolean"),t()(),n(1170,"td",20)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),n(1174,"p"),e(1175,"Desabilita o filtro inicial no servi\xE7o do "),n(1176,"code"),e(1177,"po-combo"),t(),e(1178,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1179,"tr",13)(1180,"td",14)(1181,"div",15)(1182,"span",16),e(1183," disabledTabFilter"),i(1184,"br"),t()()(),n(1185,"td",17)(1186,"code",28),e(1187,"boolean"),t()(),n(1188,"td",20)(1189,"em")(1190,"strong"),e(1191,"(opcional)"),t()(),n(1192,"p"),e(1193,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1194,"code"),e(1195,"po-combo"),t(),e(1196,"."),t()()(),n(1197,"tr",13)(1198,"td",14)(1199,"div",15)(1200,"span",16),e(1201," divider"),i(1202,"br"),t()()(),n(1203,"td",17)(1204,"code",18),e(1205,"string"),t()(),n(1206,"td",20)(1207,"em")(1208,"strong"),e(1209,"(opcional)"),t()(),n(1210,"p"),e(1211,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1212,"tr",13)(1213,"td",14)(1214,"div",15)(1215,"span",16),e(1216," dragDrop"),i(1217,"br"),t()()(),n(1218,"td",17)(1219,"code",28),e(1220,"boolean"),t()(),n(1221,"td",20)(1222,"em")(1223,"strong"),e(1224,"(opcional)"),t()(),n(1225,"p"),e(1226,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1227,"blockquote")(1228,"p"),e(1229,"Recomendamos utilizar apenas um "),n(1230,"code"),e(1231,"po-upload"),t(),e(1232," com esta funcionalidade por tela."),t()(),n(1233,"p")(1234,"strong"),e(1235,"Componente compat\xEDvel"),t(),e(1236,": "),n(1237,"code"),e(1238,"po-upload"),t()()()(),n(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),e(1243," dragDropHeight"),i(1244,"br"),t()()(),n(1245,"td",17)(1246,"code",41),e(1247,"number"),t()(),n(1248,"td",20)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),t()(),n(1252,"p"),e(1253,"Define em "),n(1254,"em"),e(1255,"pixels"),t(),e(1256," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1257,"code"),e(1258,"160px"),t(),e(1259,"."),t(),n(1260,"blockquote")(1261,"p"),e(1262,"Esta propriedade funciona somente se a propriedade "),n(1263,"code"),e(1264,"p-drag-drop"),t(),e(1265," estiver habilitada."),t()(),n(1266,"p")(1267,"strong"),e(1268,"Componente compat\xEDvel"),t(),e(1269,": "),n(1270,"code"),e(1271,"po-upload"),t()()()(),n(1272,"tr",13)(1273,"td",14)(1274,"div",15)(1275,"span",16),e(1276," errorAsyncFunction"),i(1277,"br"),t()()(),n(1278,"td",17)(1279,"code",46),e(1280,"(value) => Observable<boolean>"),t()(),n(1281,"td",20)(1282,"em")(1283,"strong"),e(1284,"(opcional)"),t()(),n(1285,"p"),e(1286,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1287,"code"),e(1288,"change"),t(),e(1289," ou "),n(1290,"code"),e(1291,"change-model"),t(),e(1292,", dependendo do valor da propriedade "),n(1293,"code"),e(1294,"triggerMode"),t(),e(1295,"."),t(),n(1296,"blockquote")(1297,"p"),e(1298,"Retorna "),n(1299,"code"),e(1300,"Observable com o valor true"),t(),e(1301," para sinalizar o erro "),n(1302,"code"),e(1303,"false"),t(),e(1304," para indicar que n\xE3o h\xE1 erro."),t()(),n(1305,"p")(1306,"strong"),e(1307,"Componente compat\xEDvel"),t(),e(1308,": "),n(1309,"code"),e(1310,"po-datepicker"),t()()()(),n(1311,"tr",13)(1312,"td",14)(1313,"div",15)(1314,"span",16),e(1315," errorAsyncProperties"),i(1316,"br"),t()()(),n(1317,"td",17)(1318,"code",47),e(1319,"ErrorAsyncProperties"),t()(),n(1320,"td",20)(1321,"em")(1322,"strong"),e(1323,"(opcional)"),t()(),n(1324,"p"),e(1325,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1326,"p")(1327,"strong"),e(1328,"Componentes compat\xEDveis:"),t(),n(1329,"code"),e(1330,"po-input"),t(),e(1331,", "),n(1332,"code"),e(1333,"po-number"),t(),e(1334,", "),n(1335,"code"),e(1336,"po-decimal"),t(),e(1337,", "),n(1338,"code"),e(1339,"po-password"),t(),e(1340,"."),t()()(),n(1341,"tr",13)(1342,"td",14)(1343,"div",15)(1344,"span",16),e(1345," errorLimit"),i(1346,"br"),t()()(),n(1347,"td",17)(1348,"code",28),e(1349,"boolean"),t()(),n(1350,"td",20)(1351,"em")(1352,"strong"),e(1353,"(opcional)"),t()(),n(1354,"p"),e(1355,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1356,"blockquote")(1357,"p"),e(1358,"Caso essa propriedade seja definida como "),n(1359,"code"),e(1360,"true"),t(),e(1361,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1362,"p")(1363,"strong"),e(1364,"Componentes compat\xEDveis:"),t(),n(1365,"code"),e(1366,"po-checkbox-group"),t(),e(1367,", "),n(1368,"code"),e(1369,"po-combo"),t(),e(1370,", "),n(1371,"code"),e(1372,"po-datepicker"),t(),e(1373,", "),n(1374,"code"),e(1375,"po-datepicker-range"),t(),e(1376,", "),n(1377,"code"),e(1378,"po-decimal"),t(),e(1379,", "),n(1380,"code"),e(1381,"po-input"),t(),e(1382,", "),n(1383,"code"),e(1384,"po-lookup"),t(),e(1385,", "),n(1386,"code"),e(1387,"po-multiselect"),t(),e(1388,", "),n(1389,"code"),e(1390,"po-number"),t(),e(1391,", "),n(1392,"code"),e(1393,"po-password"),t(),e(1394,", "),n(1395,"code"),e(1396,"po-radio-group"),t(),e(1397,", "),n(1398,"code"),e(1399,"po-select"),t(),e(1400,", "),n(1401,"code"),e(1402,"po-switch"),t(),e(1403,", "),n(1404,"code"),e(1405,"po-textarea"),t(),e(1406,"."),t()()(),n(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),e(1411," errorMessage"),i(1412,"br"),t()()(),n(1413,"td",17)(1414,"code",18),e(1415,"string"),t()(),n(1416,"td",20)(1417,"em")(1418,"strong"),e(1419,"(opcional)"),t()(),n(1420,"p"),e(1421,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1422,"p"),e(1423,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1424,"ul")(1425,"li"),e(1426,"pattern;"),t(),n(1427,"li"),e(1428,"minValue;"),t(),n(1429,"li"),e(1430,"maxValue;"),t(),n(1431,"li"),e(1432,"required;"),t()(),n(1433,"blockquote")(1434,"p"),e(1435,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1436,"code"),e(1437,"po-datepicker"),t(),e(1438,", "),n(1439,"code"),e(1440,"po-input"),t(),e(1441,", "),n(1442,"code"),e(1443,"po-number"),t(),e(1444,", "),n(1445,"code"),e(1446,"po-decimal"),t(),e(1447,", "),n(1448,"code"),e(1449,"po-password"),t(),e(1450,`, \xE9 necess\xE1rio que a propriedade
`),n(1451,"code"),e(1452,"requiredFieldErrorMessage"),t(),e(1453," esteja como "),n(1454,"code"),e(1455,"true"),t(),e(1456,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1457,"code"),e(1458,"po-datepicker-range"),t(),e(1459,", "),n(1460,"code"),e(1461,"po-select"),t(),e(1462,", "),n(1463,"code"),e(1464,"po-checkbox-group"),t(),e(1465,", "),n(1466,"code"),e(1467,"po-radio-group"),t(),e(1468,", "),n(1469,"code"),e(1470,"po-multiselect"),t(),e(1471,", "),n(1472,"code"),e(1473,"po-combo"),t(),e(1474,`,
`),n(1475,"code"),e(1476,"po-lookup"),t(),e(1477," e "),n(1478,"code"),e(1479,"po-textarea"),t(),e(1480," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1481,"code"),e(1482,"requiredFieldErrorMessage"),t(),e(1483,"."),t()(),n(1484,"p")(1485,"strong"),e(1486,"Componentes compat\xEDveis:"),t(),n(1487,"code"),e(1488,"po-checkbox-group"),t(),e(1489,", "),n(1490,"code"),e(1491,"po-combo"),t(),e(1492,", "),n(1493,"code"),e(1494,"po-datepicker"),t(),e(1495,", "),n(1496,"code"),e(1497,"po-datepicker-range"),t(),e(1498,", "),n(1499,"code"),e(1500,"po-decimal"),t(),e(1501,", "),n(1502,"code"),e(1503,"po-input"),t(),e(1504,", "),n(1505,"code"),e(1506,"po-lookup"),t(),e(1507,", "),n(1508,"code"),e(1509,"po-multiselect"),t(),e(1510,", "),n(1511,"code"),e(1512,"po-number"),t(),e(1513,", "),n(1514,"code"),e(1515,"po-password"),t(),e(1516,", "),n(1517,"code"),e(1518,"po-radio-group"),t(),e(1519,", "),n(1520,"code"),e(1521,"po-select"),t(),e(1522,", "),n(1523,"code"),e(1524,"po-switch"),t(),e(1525,", "),n(1526,"code"),e(1527,"po-textarea"),t(),e(1528,"."),t()()(),n(1529,"tr",13)(1530,"td",14)(1531,"div",15)(1532,"span",16),e(1533," fieldLabel"),i(1534,"br"),t()()(),n(1535,"td",17)(1536,"code",18),e(1537,"string"),t()(),n(1538,"td",20)(1539,"em")(1540,"strong"),e(1541,"(opcional)"),t()(),n(1542,"p"),e(1543,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1544,"p"),e(1545,"O valor padr\xE3o \xE9: "),n(1546,"code"),e(1547,"label"),t(),e(1548,"."),t(),n(1549,"blockquote")(1550,"p"),e(1551,"Esta propriedade pode ser utilizada em conjunto com: "),n(1552,"code"),e(1553,"options"),t(),e(1554,", "),n(1555,"code"),e(1556,"optionsService"),t(),e(1557," e "),n(1558,"code"),e(1559,"searchService"),t(),e(1560,"."),t()()()(),n(1561,"tr",13)(1562,"td",14)(1563,"div",15)(1564,"span",16),e(1565," fieldValue"),i(1566,"br"),t()()(),n(1567,"td",17)(1568,"code",18),e(1569,"string"),t()(),n(1570,"td",20)(1571,"em")(1572,"strong"),e(1573,"(opcional)"),t()(),n(1574,"p"),e(1575,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1576,"p"),e(1577,"O valor padr\xE3o \xE9: "),n(1578,"code"),e(1579,"value"),t(),e(1580,"."),t(),n(1581,"blockquote")(1582,"p"),e(1583,"Esta propriedade pode ser utilizada em conjunto com: "),n(1584,"code"),e(1585,"options"),t(),e(1586,", "),n(1587,"code"),e(1588,"optionsService"),t(),e(1589," e "),n(1590,"code"),e(1591,"searchService"),t(),e(1592,"."),t()()()(),n(1593,"tr",13)(1594,"td",14)(1595,"div",15)(1596,"span",16),e(1597," filterMinlength"),i(1598,"br"),t()()(),n(1599,"td",17)(1600,"code",41),e(1601,"number"),t()(),n(1602,"td",20)(1603,"em")(1604,"strong"),e(1605,"(opcional)"),t()(),n(1606,"p"),e(1607,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1608,"code"),e(1609,"po-combo"),t(),e(1610,"."),t()()(),n(1611,"tr",13)(1612,"td",14)(1613,"div",15)(1614,"span",16),e(1615," filterMode"),i(1616,"br"),t()()(),n(1617,"td",17)(1618,"code",48),e(1619,"PoMultiselectFilterMode"),t()(),n(1620,"td",20)(1621,"em")(1622,"strong"),e(1623,"(opcional)"),t()(),n(1624,"p"),e(1625,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1626,"code"),e(1627,"startsWith"),t(),e(1628,", "),n(1629,"code"),e(1630,"contains"),t(),e(1631," ou "),n(1632,"code"),e(1633,"endsWith"),t(),e(1634,"."),t(),n(1635,"blockquote")(1636,"p"),e(1637,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1638,"p")(1639,"strong"),e(1640,"Componentes compat\xEDveis:"),t(),n(1641,"code"),e(1642,"po-multiselect"),t(),e(1643,"."),t()()(),n(1644,"tr",13)(1645,"td",14)(1646,"div",15)(1647,"span",16),e(1648," forceBooleanComponentType"),i(1649,"br"),t()()(),n(1650,"td",17)(1651,"code",49),e(1652,"ForceBooleanComponentEnum"),t()(),n(1653,"td",20)(1654,"em")(1655,"strong"),e(1656,"(opcional)"),t()(),n(1657,"p"),e(1658,"Valores aceitos:"),t(),n(1659,"ul")(1660,"li"),e(1661,"ForceBooleanComponentEnum.switch"),t(),n(1662,"li"),e(1663,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1664,"tr",13)(1665,"td",14)(1666,"div",15)(1667,"span",16),e(1668," forceOptionsComponentType"),i(1669,"br"),t()()(),n(1670,"td",17)(1671,"code",50),e(1672,"ForceOptionComponentEnum"),t()(),n(1673,"td",20)(1674,"em")(1675,"strong"),e(1676,"(opcional)"),t()(),n(1677,"p"),e(1678,"pode ser utilizada em conjunto com a propriedade "),n(1679,"code"),e(1680,"options"),t(),e(1681," for\xE7ando o componente a renderizar um "),n(1682,"code"),e(1683,"po-select"),t(),e(1684," ou "),n(1685,"code"),e(1686,"po-radio-group"),t(),e(1687,"."),t(),n(1688,"p"),e(1689,"Valores aceitos:"),t(),n(1690,"ul")(1691,"li"),e(1692,"ForceOptionComponentEnum.radioGroup"),t(),n(1693,"li"),e(1694,"ForceOptionComponentEnum.select"),t()(),n(1695,"blockquote")(1696,"p"),e(1697,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1698,"code"),e(1699,"optionsMulti"),t(),e(1700," e "),n(1701,"code"),e(1702,"optionsService"),t(),e(1703,"."),t()()()(),n(1704,"tr",13)(1705,"td",14)(1706,"div",15)(1707,"span",16),e(1708," formField"),i(1709,"br"),t()()(),n(1710,"td",17)(1711,"code",18),e(1712,"string"),t()(),n(1713,"td",20)(1714,"em")(1715,"strong"),e(1716,"(opcional)"),t()(),n(1717,"p"),e(1718,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1719,"code"),e(1720,"url"),t(),e(1721,"."),t(),n(1722,"blockquote")(1723,"p"),e(1724,"O valor default \xE9 "),n(1725,"code"),e(1726,"files"),t()()(),n(1727,"p")(1728,"strong"),e(1729,"Componente compat\xEDvel"),t(),e(1730,": "),n(1731,"code"),e(1732,"po-upload"),t()()()(),n(1733,"tr",13)(1734,"td",14)(1735,"div",15)(1736,"span",16),e(1737," format"),i(1738,"br"),t()()(),n(1739,"td",17)(1740,"code",18),e(1741,"string "),t(),n(1742,"code",32),e(1743," Array<string>"),t()(),n(1744,"td",20)(1745,"em")(1746,"strong"),e(1747,"(opcional)"),t()(),n(1748,"p"),e(1749,"Formato de exibi\xE7\xE3o no campo."),t(),n(1750,"p"),e(1751,"Ao utilizar esta propriedade com o "),n(1752,"code"),e(1753,"type"),t(),n(1754,"em"),e(1755,"PoDynamicFieldType.Date"),t(),e(1756," ou "),n(1757,"em"),e(1758,"PoDynamicFieldType.DateTime"),t(),e(1759,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1760,"p"),e(1761,"Valores v\xE1lidos:"),t(),n(1762,"ul")(1763,"li"),e(1764,"dd/mm/yyyy"),t(),n(1765,"li"),e(1766,"mm/dd/yyyy"),t(),n(1767,"li"),e(1768,"yyyy/mm/dd"),t()(),n(1769,"p"),e(1770,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1771,"code"),e(1772,"searchService"),t(),e(1773,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1774,"tr",13)(1775,"td",14)(1776,"div",15)(1777,"span",16),e(1778," formatModel"),i(1779,"br"),t()()(),n(1780,"td",17)(1781,"code",28),e(1782,"boolean"),t()(),n(1783,"td",20)(1784,"em")(1785,"strong"),e(1786,"(opcional)"),t()(),n(1787,"p"),e(1788,"Indica se o "),n(1789,"code"),e(1790,"model"),t(),e(1791," receber\xE1 o valor formatado pelas propriedades "),n(1792,"code"),e(1793,"p-label-on"),t(),e(1794," e "),n(1795,"code"),e(1796,"p-label-off"),t(),e(1797,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1798,"p"),e(1799,"O valor padr\xE3o \xE9: "),n(1800,"code"),e(1801,"false"),t(),e(1802,"."),t(),n(1803,"blockquote")(1804,"p"),e(1805,"Esta propriedade est\xE1 disponivel apenas para o "),n(1806,"code"),e(1807,"swicth"),t(),e(1808,"."),t()()()(),n(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),e(1813," gridColumns"),i(1814,"br"),t()()(),n(1815,"td",17)(1816,"code",41),e(1817,"number"),t()(),n(1818,"td",20)(1819,"em")(1820,"strong"),e(1821,"(opcional)"),t()(),n(1822,"p"),e(1823,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1824,"p"),e(1825,"Deve ser usado o sistema de "),n(1826,"strong"),e(1827,"grid"),t(),e(1828," do PO (1 ... 12 colunas)."),t(),n(1829,"blockquote")(1830,"p"),e(1831,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1832,"tr",13)(1833,"td",14)(1834,"div",15)(1835,"span",16),e(1836," gridLgColumns"),i(1837,"br"),t()()(),n(1838,"td",17)(1839,"code",41),e(1840,"number"),t()(),n(1841,"td",20)(1842,"em")(1843,"strong"),e(1844,"(opcional)"),t()(),n(1845,"p"),e(1846,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1847,"p"),e(1848,"Deve ser usado o sistema de "),n(1849,"strong"),e(1850,"grid"),t(),e(1851," do PO (1 ... 12 colunas)."),t(),n(1852,"blockquote")(1853,"p"),e(1854,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1855,"code"),e(1856,"gridColumns"),t(),e(1857,"."),t()()()(),n(1858,"tr",13)(1859,"td",14)(1860,"div",15)(1861,"span",16),e(1862," gridLgPull"),i(1863,"br"),t()()(),n(1864,"td",17)(1865,"code",41),e(1866,"number"),t()(),n(1867,"td",20)(1868,"em")(1869,"strong"),e(1870,"(opcional)"),t()(),n(1871,"p"),e(1872,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1873,"p"),e(1874,"Deve ser usado o sistema de "),n(1875,"strong"),e(1876,"grid"),t(),e(1877," do PO (1 ... 11 colunas)."),t(),n(1878,"blockquote")(1879,"p"),e(1880,"Esta propriedade n\xE3o funciona com a propriedade "),n(1881,"code"),e(1882,"gridColumns"),t(),e(1883,". Deve-se especificar o tamanho da tela."),t()()()(),n(1884,"tr",13)(1885,"td",14)(1886,"div",15)(1887,"span",16),e(1888," gridMdColumns"),i(1889,"br"),t()()(),n(1890,"td",17)(1891,"code",41),e(1892,"number"),t()(),n(1893,"td",20)(1894,"em")(1895,"strong"),e(1896,"(opcional)"),t()(),n(1897,"p"),e(1898,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1899,"p"),e(1900,"Deve ser usado o sistema de "),n(1901,"strong"),e(1902,"grid"),t(),e(1903," do PO (1 ... 12 colunas)."),t(),n(1904,"blockquote")(1905,"p"),e(1906,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1907,"code"),e(1908,"gridColumns"),t(),e(1909,"."),t()()()(),n(1910,"tr",13)(1911,"td",14)(1912,"div",15)(1913,"span",16),e(1914," gridMdPull"),i(1915,"br"),t()()(),n(1916,"td",17)(1917,"code",41),e(1918,"number"),t()(),n(1919,"td",20)(1920,"em")(1921,"strong"),e(1922,"(opcional)"),t()(),n(1923,"p"),e(1924,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1925,"p"),e(1926,"Deve ser usado o sistema de "),n(1927,"strong"),e(1928,"grid"),t(),e(1929," do PO (1 ... 11 colunas)."),t(),n(1930,"blockquote")(1931,"p"),e(1932,"Esta propriedade n\xE3o funciona com a propriedade "),n(1933,"code"),e(1934,"gridColumns"),t(),e(1935,". Deve-se especificar o tamanho da tela."),t()()()(),n(1936,"tr",13)(1937,"td",14)(1938,"div",15)(1939,"span",16),e(1940," gridSmColumns"),i(1941,"br"),t()()(),n(1942,"td",17)(1943,"code",41),e(1944,"number"),t()(),n(1945,"td",20)(1946,"em")(1947,"strong"),e(1948,"(opcional)"),t()(),n(1949,"p"),e(1950,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1951,"p"),e(1952,"Deve ser usado o sistema de "),n(1953,"strong"),e(1954,"grid"),t(),e(1955," do PO (1 ... 12 colunas)."),t(),n(1956,"blockquote")(1957,"p"),e(1958,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1959,"code"),e(1960,"gridColumns"),t(),e(1961,"."),t()()()(),n(1962,"tr",13)(1963,"td",14)(1964,"div",15)(1965,"span",16),e(1966," gridSmPull"),i(1967,"br"),t()()(),n(1968,"td",17)(1969,"code",41),e(1970,"number"),t()(),n(1971,"td",20)(1972,"em")(1973,"strong"),e(1974,"(opcional)"),t()(),n(1975,"p"),e(1976,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(1977,"p"),e(1978,"Deve ser usado o sistema de "),n(1979,"strong"),e(1980,"grid"),t(),e(1981," do PO (1 ... 11 colunas)."),t(),n(1982,"blockquote")(1983,"p"),e(1984,"Esta propriedade n\xE3o funciona com a propriedade "),n(1985,"code"),e(1986,"gridColumns"),t(),e(1987,". Deve-se especificar o tamanho da tela."),t()()()(),n(1988,"tr",13)(1989,"td",14)(1990,"div",15)(1991,"span",16),e(1992," gridXlColumns"),i(1993,"br"),t()()(),n(1994,"td",17)(1995,"code",41),e(1996,"number"),t()(),n(1997,"td",20)(1998,"em")(1999,"strong"),e(2e3,"(opcional)"),t()(),n(2001,"p"),e(2002,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2003,"p"),e(2004,"Deve ser usado o sistema de "),n(2005,"strong"),e(2006,"grid"),t(),e(2007," do PO (1 ... 12 colunas)."),t(),n(2008,"blockquote")(2009,"p"),e(2010,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2011,"code"),e(2012,"gridColumns"),t(),e(2013,"."),t()()()(),n(2014,"tr",13)(2015,"td",14)(2016,"div",15)(2017,"span",16),e(2018," gridXlPull"),i(2019,"br"),t()()(),n(2020,"td",17)(2021,"code",41),e(2022,"number"),t()(),n(2023,"td",20)(2024,"em")(2025,"strong"),e(2026,"(opcional)"),t()(),n(2027,"p"),e(2028,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2029,"p"),e(2030,"Deve ser usado o sistema de "),n(2031,"strong"),e(2032,"grid"),t(),e(2033," do PO (1 ... 11 colunas)."),t(),n(2034,"blockquote")(2035,"p"),e(2036,"Esta propriedade n\xE3o funciona com a propriedade "),n(2037,"code"),e(2038,"gridColumns"),t(),e(2039,". Deve-se especificar o tamanho da tela."),t()()()(),n(2040,"tr",13)(2041,"td",14)(2042,"div",15)(2043,"span",16),e(2044," headers"),i(2045,"br"),t()()(),n(2046,"td",17)(2047,"code",51),e(2048,"{ [name: string]: string "),t(),n(2049,"code",52),e(2050,` Array<string>;
}`),t()(),n(2051,"td",20)(2052,"em")(2053,"strong"),e(2054,"(opcional)"),t()(),n(2055,"p"),e(2056,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2057,"p")(2058,"strong"),e(2059,"Componente compat\xEDvel"),t(),e(2060,": "),n(2061,"code"),e(2062,"po-upload"),t()()()(),n(2063,"tr",13)(2064,"td",14)(2065,"div",15)(2066,"span",16),e(2067," help"),i(2068,"br"),t()()(),n(2069,"td",17)(2070,"code",18),e(2071,"string"),t()(),n(2072,"td",20)(2073,"em")(2074,"strong"),e(2075,"(opcional)"),t()(),n(2076,"p"),e(2077,"Texto de ajuda."),t()()(),n(2078,"tr",13)(2079,"td",14)(2080,"div",15)(2081,"span",16),e(2082," hideLabelStatus"),i(2083,"br"),t()()(),n(2084,"td",17)(2085,"code",28),e(2086,"boolean"),t()(),n(2087,"td",20)(2088,"em")(2089,"strong"),e(2090,"(opcional)"),t()(),n(2091,"p"),e(2092,"Indica se o status do "),n(2093,"code"),e(2094,"model"),t(),e(2095," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2096,"tr",13)(2097,"td",14)(2098,"div",15)(2099,"span",16),e(2100," hidePasswordPeek"),i(2101,"br"),t()()(),n(2102,"td",17)(2103,"code",28),e(2104,"boolean"),t()(),n(2105,"td",20)(2106,"em")(2107,"strong"),e(2108,"(opcional)"),t()(),n(2109,"p"),e(2110,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2111,"code"),e(2112,"po-password"),t(),e(2113,"."),t()()(),n(2114,"tr",13)(2115,"td",14)(2116,"div",15)(2117,"span",16),e(2118," hideRestrictionsInfo"),i(2119,"br"),t()()(),n(2120,"td",17)(2121,"code",28),e(2122,"boolean"),t()(),n(2123,"td",20)(2124,"em")(2125,"strong"),e(2126,"(opcional)"),t()(),n(2127,"p"),e(2128,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2129,"p")(2130,"strong"),e(2131,"Componente compat\xEDvel"),t(),e(2132,": "),n(2133,"code"),e(2134,"po-upload"),t()()()(),n(2135,"tr",13)(2136,"td",14)(2137,"div",15)(2138,"span",16),e(2139," hideSearch"),i(2140,"br"),t()()(),n(2141,"td",17)(2142,"code",28),e(2143,"boolean"),t()(),n(2144,"td",20)(2145,"em")(2146,"strong"),e(2147,"(opcional)"),t()(),n(2148,"p"),e(2149,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2150,"code"),e(2151,"po-multiselect"),t(),e(2152,"."),t()()(),n(2153,"tr",13)(2154,"td",14)(2155,"div",15)(2156,"span",16),e(2157," hideSelectAll"),i(2158,"br"),t()()(),n(2159,"td",17)(2160,"code",28),e(2161,"boolean"),t()(),n(2162,"td",20)(2163,"em")(2164,"strong"),e(2165,"(opcional)"),t()(),n(2166,"p"),e(2167,'Indica se o campo "Selecionar todos" do '),n(2168,"code"),e(2169,"po-multiselect"),t(),e(2170," ser\xE1 escondido."),t()()(),n(2171,"tr",13)(2172,"td",14)(2173,"div",15)(2174,"span",16),e(2175," hideSelectButton"),i(2176,"br"),t()()(),n(2177,"td",17)(2178,"code",28),e(2179,"boolean"),t()(),n(2180,"td",20)(2181,"em")(2182,"strong"),e(2183,"(opcional)"),t()(),n(2184,"p"),e(2185,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2186,"blockquote")(2187,"p"),e(2188,"Caso o valor definido seja "),n(2189,"code"),e(2190,"true"),t(),e(2191,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2192,"code"),e(2193,"selectFiles()"),t(),e(2194," para sele\xE7\xE3o de arquivos."),t()(),n(2195,"p")(2196,"strong"),e(2197,"Componente compat\xEDvel"),t(),e(2198,": "),n(2199,"code"),e(2200,"po-upload"),t()()()(),n(2201,"tr",13)(2202,"td",14)(2203,"div",15)(2204,"span",16),e(2205," hideSendButton"),i(2206,"br"),t()()(),n(2207,"td",17)(2208,"code",28),e(2209,"boolean"),t()(),n(2210,"td",20)(2211,"em")(2212,"strong"),e(2213,"(opcional)"),t()(),n(2214,"p"),e(2215,"Omite o bot\xE3o de envio de arquivos."),t(),n(2216,"blockquote")(2217,"p"),e(2218,"Caso o valor definido seja "),n(2219,"code"),e(2220,"true"),t(),e(2221,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2222,"code"),e(2223,"sendFiles()"),t(),e(2224," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2225,"p")(2226,"strong"),e(2227,"Componente compat\xEDvel"),t(),e(2228,": "),n(2229,"code"),e(2230,"po-upload"),t()()()(),n(2231,"tr",13)(2232,"td",14)(2233,"div",15)(2234,"span",16),e(2235," icon"),i(2236,"br"),t()()(),n(2237,"td",17)(2238,"code",18),e(2239,"string "),t(),n(2240,"code",53),e(2241," TemplateRef<void>"),t()(),n(2242,"td",20)(2243,"em")(2244,"strong"),e(2245,"(opcional)"),t()(),n(2246,"p"),e(2247,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2248,"blockquote")(2249,"p"),e(2250,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2251,"ul")(2252,"li"),e(2253,"Input;"),t(),n(2254,"li"),e(2255,"Number;"),t(),n(2256,"li"),e(2257,"Decimal;"),t(),n(2258,"li"),e(2259,"Combo;"),t(),n(2260,"li"),e(2261,"Password;"),t()(),n(2262,"blockquote")(2263,"p"),e(2264,"Veja a disponibilidade de \xEDcones em "),n(2265,"a",54),e(2266,"biblioteca de \xEDcones"),t(),e(2267,"."),t()()()(),n(2268,"tr",13)(2269,"td",14)(2270,"div",15)(2271,"span",16),e(2272," infiniteScroll"),i(2273,"br"),t()()(),n(2274,"td",17)(2275,"code",28),e(2276,"boolean"),t()(),n(2277,"td",20)(2278,"em")(2279,"strong"),e(2280,"(opcional)"),t()(),n(2281,"p"),e(2282,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2283,"p")(2284,"strong"),e(2285,"Componentes compat\xEDveis:"),t(),n(2286,"code"),e(2287,"po-combo"),t(),e(2288,", "),n(2289,"code"),e(2290,"po-lookup"),t(),e(2291,"."),t()()(),n(2292,"tr",13)(2293,"td",14)(2294,"div",15)(2295,"span",16),e(2296," infiniteScrollDistance"),i(2297,"br"),t()()(),n(2298,"td",17)(2299,"code",41),e(2300,"number"),t()(),n(2301,"td",20)(2302,"em")(2303,"strong"),e(2304,"(opcional)"),t()(),n(2305,"p"),e(2306,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2307,"strong"),e(2308,"Exemplos"),t(),n(2309,"code"),e(2310,"{ infiniteScrollDistance: 80 }"),t(),e(2311,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2312,"p")(2313,"strong"),e(2314,"Componente compat\xEDvel:"),t(),n(2315,"code"),e(2316,"po-combo"),t(),e(2317,"."),t()()(),n(2318,"tr",13)(2319,"td",14)(2320,"div",15)(2321,"span",16),e(2322," invalidValue"),i(2323,"br"),t()()(),n(2324,"td",17)(2325,"code",28),e(2326,"boolean"),t()(),n(2327,"td",20)(2328,"em")(2329,"strong"),e(2330,"(opcional)"),t()(),n(2331,"p"),e(2332,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(2333,"code"),e(2334,"p-field-error-message"),t(),e(2335,"."),t(),n(2336,"blockquote")(2337,"p"),e(2338,"Caso essa propriedade seja definida como "),n(2339,"code"),e(2340,"true"),t(),e(2341,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(2342,"p")(2343,"strong"),e(2344,"Componente compat\xEDvel"),t(),e(2345,": "),n(2346,"code"),e(2347,"po-switch"),t()()()(),n(2348,"tr",13)(2349,"td",14)(2350,"div",15)(2351,"span",16),e(2352," isoFormat"),i(2353,"br"),t()()(),n(2354,"td",17)(2355,"code",55),e(2356,"PoDatepickerIsoFormat"),t()(),n(2357,"td",20)(2358,"em")(2359,"strong"),e(2360,"(opcional)"),t()(),n(2361,"p"),e(2362,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2363,"blockquote")(2364,"p"),e(2365,"Veja os valores v\xE1lidos no "),n(2366,"code"),e(2367,"enumPoDatepickerIsoFormat"),t(),e(2368,"."),t()(),n(2369,"p")(2370,"strong"),e(2371,"Componente compat\xEDvel:"),t(),e(2372," po-datepicker"),t()()(),n(2373,"tr",13)(2374,"td",14)(2375,"div",15)(2376,"span",16),e(2377," key"),i(2378,"br"),t()()(),n(2379,"td",17)(2380,"code",28),e(2381,"boolean"),t()(),n(2382,"td",20)(2383,"em")(2384,"strong"),e(2385,"(opcional)"),t()(),n(2386,"p"),e(2387,"Identificador"),t()()(),n(2388,"tr",13)(2389,"td",14)(2390,"div",15)(2391,"span",16),e(2392," keydown"),i(2393,"br"),t()()(),n(2394,"td",17)(2395,"code",29),e(2396,"Function"),t()(),n(2397,"td",20)(2398,"em")(2399,"strong"),e(2400,"(opcional)"),t()(),n(2401,"p"),e(2402,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(2403,"code"),e(2404,"KeyboardEvent"),t(),e(2405," com informa\xE7\xF5es sobre a tecla."),t()()(),n(2406,"tr",13)(2407,"td",14)(2408,"div",15)(2409,"span",16),e(2410," label"),i(2411,"br"),t()()(),n(2412,"td",17)(2413,"code",18),e(2414,"string"),t()(),n(2415,"td",20)(2416,"em")(2417,"strong"),e(2418,"(opcional)"),t()(),n(2419,"p"),e(2420,"R\xF3tulo do campo exibido."),t(),n(2421,"p"),e(2422,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2423,"code"),e(2424,"label"),t(),e(2425," o valor da propriedade "),n(2426,"code"),e(2427,"property"),t(),e(2428," com a primeira letra em mai\xFAsculo."),t()()(),n(2429,"tr",13)(2430,"td",14)(2431,"div",15)(2432,"span",16),e(2433," labelPosition"),i(2434,"br"),t()()(),n(2435,"td",17)(2436,"code",56),e(2437,"PoSwitchLabelPosition"),t()(),n(2438,"td",20)(2439,"em")(2440,"strong"),e(2441,"(opcional)"),t()(),n(2442,"p"),e(2443,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2444,"blockquote")(2445,"p"),e(2446,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2447,"tr",13)(2448,"td",14)(2449,"div",15)(2450,"span",16),e(2451," listboxControlPosition"),i(2452,"br"),t()()(),n(2453,"td",17)(2454,"code",57),e(2455,"'top' "),t(),n(2456,"code",58),e(2457," 'bottom'"),t()(),n(2458,"td",20)(2459,"em")(2460,"strong"),e(2461,"(opcional)"),t()(),n(2462,"p"),e(2463,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(2464,"code"),e(2465,"listbox"),t(),e(2466," em rela\xE7\xE3o ao campo ("),n(2467,"code"),e(2468,"top"),t(),e(2469," ou "),n(2470,"code"),e(2471,"bottom"),t(),e(2472,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(2473,"p")(2474,"strong"),e(2475,"Componentes compat\xEDveis:"),t(),n(2476,"code"),e(2477,"po-multiselect"),t(),e(2478,", "),n(2479,"code"),e(2480,"po-combo"),t(),e(2481,"."),t()()(),n(2482,"tr",13)(2483,"td",14)(2484,"div",15)(2485,"span",16),e(2486," literals"),i(2487,"br"),t()()(),n(2488,"td",17)(2489,"code",59),e(2490,"PoLookupLiterals "),t(),n(2491,"code",60),e(2492," PoMultiselectLiterals "),t(),n(2493,"code",61),e(2494," PoComboLiterals "),t(),n(2495,"code",62),e(2496," PoDatepickerRangeLiterals "),t(),n(2497,"code",63),e(2498," PoUploadLiterals"),t()(),n(2499,"td",20)(2500,"em")(2501,"strong"),e(2502,"(opcional)"),t()(),n(2503,"p"),e(2504,"Objeto com as literais usadas para os seguintes componentes: "),n(2505,"code"),e(2506,"po-lookup"),t(),e(2507,", "),n(2508,"code"),e(2509,"po-multiselect"),t(),e(2510,", "),n(2511,"code"),e(2512,"po-combo"),t(),e(2513," e "),n(2514,"code"),e(2515,"po-datepicker-range"),t(),e(2516,"."),t(),n(2517,"blockquote")(2518,"p"),e(2519,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2520,"p")(2521,"strong"),e(2522,"Componentes compat\xEDveis:"),t(),n(2523,"code"),e(2524,"po-lookup"),t(),e(2525,", "),n(2526,"code"),e(2527,"po-multiselect"),t(),e(2528,", "),n(2529,"code"),e(2530,"po-combo"),t(),e(2531,", "),n(2532,"code"),e(2533,"po-datepicker-range"),t()()()(),n(2534,"tr",13)(2535,"td",14)(2536,"div",15)(2537,"span",16),e(2538," locale"),i(2539,"br"),t()()(),n(2540,"td",17)(2541,"code",18),e(2542,"string"),t()(),n(2543,"td",20)(2544,"em")(2545,"strong"),e(2546,"(opcional)"),t()(),n(2547,"p"),e(2548,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(2549,"a",64)(2550,"code"),e(2551,"I18n"),t()()(),n(2552,"p"),e(2553,`Exemplo de utiliza\xE7\xE3o:
`),n(2554,"code"),e(2555,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),n(2556,"blockquote")(2557,"p"),e(2558,"Para ver quais linguagens suportadas acesse "),n(2559,"a",64)(2560,"code"),e(2561,"I18n"),t()(),e(2562,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2563,"tr",13)(2564,"td",14)(2565,"div",15)(2566,"span",16),e(2567," mask"),i(2568,"br"),t()()(),n(2569,"td",17)(2570,"code",18),e(2571,"string"),t()(),n(2572,"td",20)(2573,"em")(2574,"strong"),e(2575,"(opcional)"),t()(),n(2576,"p"),e(2577,"M\xE1scara para o campo."),t(),n(2578,"p")(2579,"strong"),e(2580,"Componentes compat\xEDveis:"),t(),n(2581,"code"),e(2582,"po-input"),t(),e(2583,"."),t(),n(2584,"blockquote")(2585,"p"),e(2586,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2587,"code"),e(2588,"type: time"),t(),e(2589,"."),t()()()(),n(2590,"tr",13)(2591,"td",14)(2592,"div",15)(2593,"span",16),e(2594," maskFormatModel"),i(2595,"br"),t()()(),n(2596,"td",17)(2597,"code",28),e(2598,"boolean"),t()(),n(2599,"td",20)(2600,"em")(2601,"strong"),e(2602,"(opcional)"),t()(),n(2603,"p"),e(2604,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2605,"code"),e(2606,"false"),t(),e(2607,"."),t(),n(2608,"p")(2609,"strong"),e(2610,"Componentes compat\xEDveis:"),t(),n(2611,"code"),e(2612,"po-input"),t(),e(2613,"."),t(),n(2614,"blockquote")(2615,"p"),e(2616,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2617,"code"),e(2618,"type: time"),t(),e(2619,"."),t()()()(),n(2620,"tr",13)(2621,"td",14)(2622,"div",15)(2623,"span",16),e(2624," maxLength"),i(2625,"br"),t()()(),n(2626,"td",17)(2627,"code",41),e(2628,"number"),t()(),n(2629,"td",20)(2630,"em")(2631,"strong"),e(2632,"(opcional)"),t()(),n(2633,"p"),e(2634,"Tamanho m\xE1ximo de caracteres."),t(),n(2635,"p")(2636,"strong"),e(2637,"Componentes compat\xEDveis:"),t(),n(2638,"code"),e(2639,"po-input"),t(),e(2640,", "),n(2641,"code"),e(2642,"po-number"),t(),e(2643,", "),n(2644,"code"),e(2645,"po-decimal"),t(),e(2646,", "),n(2647,"code"),e(2648,"po-textarea"),t(),e(2649,", "),n(2650,"code"),e(2651,"po-password"),t(),e(2652,"."),t()()(),n(2653,"tr",13)(2654,"td",14)(2655,"div",15)(2656,"span",16),e(2657," maxValue"),i(2658,"br"),t()()(),n(2659,"td",17)(2660,"code",18),e(2661,"string "),t(),n(2662,"code",41),e(2663," number"),t()(),n(2664,"td",20)(2665,"em")(2666,"strong"),e(2667,"(opcional)"),t()(),n(2668,"p"),e(2669,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2670,"em"),e(2671,"number"),t(),e(2672,", "),n(2673,"em"),e(2674,"date"),t(),e(2675," ou "),n(2676,"em"),e(2677,"dateTime"),t(),e(2678,"."),t(),n(2679,"p")(2680,"strong"),e(2681,"Componentes compat\xEDveis:"),t(),n(2682,"code"),e(2683,"po-datepicker"),t(),e(2684,", "),n(2685,"code"),e(2686,"po-datepicker-range"),t(),e(2687,", "),n(2688,"code"),e(2689,"po-number"),t(),e(2690,", "),n(2691,"code"),e(2692,"po-decimal"),t()()()(),n(2693,"tr",13)(2694,"td",14)(2695,"div",15)(2696,"span",16),e(2697," minLength"),i(2698,"br"),t()()(),n(2699,"td",17)(2700,"code",41),e(2701,"number"),t()(),n(2702,"td",20)(2703,"em")(2704,"strong"),e(2705,"(opcional)"),t()(),n(2706,"p"),e(2707,"Tamanho m\xEDnimo de caracteres."),t(),n(2708,"p")(2709,"strong"),e(2710,"Componentes compat\xEDveis:"),t(),n(2711,"code"),e(2712,"po-input"),t(),e(2713,", "),n(2714,"code"),e(2715,"po-number"),t(),e(2716,", "),n(2717,"code"),e(2718,"po-decimal"),t(),e(2719,", "),n(2720,"code"),e(2721,"po-textarea"),t(),e(2722,", "),n(2723,"code"),e(2724,"po-password"),t(),e(2725,"."),t()()(),n(2726,"tr",13)(2727,"td",14)(2728,"div",15)(2729,"span",16),e(2730," minValue"),i(2731,"br"),t()()(),n(2732,"td",17)(2733,"code",18),e(2734,"string "),t(),n(2735,"code",41),e(2736," number"),t()(),n(2737,"td",20)(2738,"em")(2739,"strong"),e(2740,"(opcional)"),t()(),n(2741,"p"),e(2742,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2743,"em"),e(2744,"number"),t(),e(2745,", "),n(2746,"em"),e(2747,"date"),t(),e(2748," ou "),n(2749,"em"),e(2750,"dateTime"),t(),e(2751,"."),t(),n(2752,"p")(2753,"strong"),e(2754,"Componentes compat\xEDveis:"),t(),n(2755,"code"),e(2756,"po-datepicker"),t(),e(2757,", "),n(2758,"code"),e(2759,"po-datepicker-range"),t(),e(2760,", "),n(2761,"code"),e(2762,"po-number"),t(),e(2763,", "),n(2764,"code"),e(2765,"po-decimal"),t()()()(),n(2766,"tr",13)(2767,"td",14)(2768,"div",15)(2769,"span",16),e(2770," multiple"),i(2771,"br"),t()()(),n(2772,"td",17)(2773,"code",28),e(2774,"boolean"),t()(),n(2775,"td",20)(2776,"em")(2777,"strong"),e(2778,"(opcional)"),t()(),n(2779,"p"),e(2780,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2781,"p")(2782,"strong"),e(2783,"Componente compat\xEDvel:"),t(),n(2784,"code"),e(2785,"po-lookup"),t(),e(2786,", "),n(2787,"code"),e(2788,"po-upload"),t()()()(),n(2789,"tr",13)(2790,"td",14)(2791,"div",15)(2792,"span",16),e(2793," noAutocomplete"),i(2794,"br"),t()()(),n(2795,"td",17)(2796,"code",28),e(2797,"boolean"),t()(),n(2798,"td",20)(2799,"em")(2800,"strong"),e(2801,"(opcional)"),t()(),n(2802,"p"),e(2803,"Define a propriedade nativa "),n(2804,"code"),e(2805,"autocomplete"),t(),e(2806," do campo como off."),t(),n(2807,"p")(2808,"strong"),e(2809,"Componentes compat\xEDveis:"),t(),n(2810,"code"),e(2811,"po-datepicker"),t(),e(2812,", "),n(2813,"code"),e(2814,"po-datepicker-range"),t(),e(2815,", "),n(2816,"code"),e(2817,"po-input"),t(),e(2818,", "),n(2819,"code"),e(2820,"po-number"),t(),e(2821,", "),n(2822,"code"),e(2823,"po-decimal"),t(),e(2824,", "),n(2825,"code"),e(2826,"po-lookup"),t(),e(2827,", "),n(2828,"code"),e(2829,"po-password"),t()()()(),n(2830,"tr",13)(2831,"td",14)(2832,"div",15)(2833,"span",16),e(2834," offsetColumns"),i(2835,"br"),t()()(),n(2836,"td",17)(2837,"code",41),e(2838,"number"),t()(),n(2839,"td",20)(2840,"em")(2841,"strong"),e(2842,"(opcional)"),t()(),n(2843,"p"),e(2844,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2845,"p"),e(2846,"Deve ser usado o sistema de "),n(2847,"strong"),e(2848,"grid"),t(),e(2849," do PO (1 ... 12 colunas)."),t(),n(2850,"blockquote")(2851,"p"),e(2852,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2853,"tr",13)(2854,"td",14)(2855,"div",15)(2856,"span",16),e(2857," offsetLgColumns"),i(2858,"br"),t()()(),n(2859,"td",17)(2860,"code",41),e(2861,"number"),t()(),n(2862,"td",20)(2863,"em")(2864,"strong"),e(2865,"(opcional)"),t()(),n(2866,"p"),e(2867,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2868,"p"),e(2869,"Deve ser usado o sistema de "),n(2870,"strong"),e(2871,"grid"),t(),e(2872," do PO (1 ... 12 colunas)."),t(),n(2873,"blockquote")(2874,"p"),e(2875,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2876,"code"),e(2877,"offsetColumns"),t(),e(2878,"."),t()()()(),n(2879,"tr",13)(2880,"td",14)(2881,"div",15)(2882,"span",16),e(2883," offsetMdColumns"),i(2884,"br"),t()()(),n(2885,"td",17)(2886,"code",41),e(2887,"number"),t()(),n(2888,"td",20)(2889,"em")(2890,"strong"),e(2891,"(opcional)"),t()(),n(2892,"p"),e(2893,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2894,"p"),e(2895,"Deve ser usado o sistema de "),n(2896,"strong"),e(2897,"grid"),t(),e(2898," do PO (1 ... 12 colunas)."),t(),n(2899,"blockquote")(2900,"p"),e(2901,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2902,"code"),e(2903,"offsetColumns"),t(),e(2904,"."),t()()()(),n(2905,"tr",13)(2906,"td",14)(2907,"div",15)(2908,"span",16),e(2909," offsetSmColumns"),i(2910,"br"),t()()(),n(2911,"td",17)(2912,"code",41),e(2913,"number"),t()(),n(2914,"td",20)(2915,"em")(2916,"strong"),e(2917,"(opcional)"),t()(),n(2918,"p"),e(2919,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2920,"p"),e(2921,"Deve ser usado o sistema de "),n(2922,"strong"),e(2923,"grid"),t(),e(2924," do PO (1 ... 12 colunas)."),t(),n(2925,"blockquote")(2926,"p"),e(2927,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2928,"code"),e(2929,"offsetColumns"),t(),e(2930,"."),t()()()(),n(2931,"tr",13)(2932,"td",14)(2933,"div",15)(2934,"span",16),e(2935," offsetXlColumns"),i(2936,"br"),t()()(),n(2937,"td",17)(2938,"code",41),e(2939,"number"),t()(),n(2940,"td",20)(2941,"em")(2942,"strong"),e(2943,"(opcional)"),t()(),n(2944,"p"),e(2945,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2946,"p"),e(2947,"Deve ser usado o sistema de "),n(2948,"strong"),e(2949,"grid"),t(),e(2950," do PO (1 ... 12 colunas)."),t(),n(2951,"blockquote")(2952,"p"),e(2953,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2954,"code"),e(2955,"offsetColumns"),t(),e(2956,"."),t()()()(),n(2957,"tr",13)(2958,"td",14)(2959,"div",15)(2960,"span",16),e(2961," onError"),i(2962,"br"),t()()(),n(2963,"td",17)(2964,"code",29),e(2965,"Function"),t()(),n(2966,"td",20)(2967,"em")(2968,"strong"),e(2969,"(opcional)"),t()(),n(2970,"p"),e(2971,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(2972,"blockquote")(2973,"p"),e(2974,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(2975,"code"),e(2976,"HttpErrorResponse"),t(),e(2977,"."),t()(),n(2978,"p")(2979,"strong"),e(2980,"Componente compat\xEDvel"),t(),e(2981,": "),n(2982,"code"),e(2983,"po-upload"),t()()()(),n(2984,"tr",13)(2985,"td",14)(2986,"div",15)(2987,"span",16),e(2988," onSuccess"),i(2989,"br"),t()()(),n(2990,"td",17)(2991,"code",29),e(2992,"Function"),t()(),n(2993,"td",20)(2994,"em")(2995,"strong"),e(2996,"(opcional)"),t()(),n(2997,"p"),e(2998,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(2999,"blockquote")(3e3,"p"),e(3001,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3002,"code"),e(3003,"HttpResponse"),t(),e(3004,"."),t()(),n(3005,"p")(3006,"strong"),e(3007,"Componente compat\xEDvel"),t(),e(3008,": "),n(3009,"code"),e(3010,"po-upload"),t()()()(),n(3011,"tr",13)(3012,"td",14)(3013,"div",15)(3014,"span",16),e(3015," onUpload"),i(3016,"br"),t()()(),n(3017,"td",17)(3018,"code",29),e(3019,"Function"),t()(),n(3020,"td",20)(3021,"em")(3022,"strong"),e(3023,"(opcional)"),t()(),n(3024,"p"),e(3025,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3026,"pre")(3027,"code"),e(3028,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3029,"p")(3030,"strong"),e(3031,"Componente compat\xEDvel"),t(),e(3032,": "),n(3033,"code"),e(3034,"po-upload"),t()()()(),n(3035,"tr",13)(3036,"td",14)(3037,"div",15)(3038,"span",16),e(3039," optional"),i(3040,"br"),t()()(),n(3041,"td",17)(3042,"code",28),e(3043,"boolean"),t()(),n(3044,"td",20)(3045,"em")(3046,"strong"),e(3047,"(opcional)"),t()(),n(3048,"p"),e(3049,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3050,"blockquote")(3051,"p"),e(3052,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3053,"ul")(3054,"li"),e(3055,"O campo for "),n(3056,"code"),e(3057,"required"),t(),e(3058,", ou;"),t(),n(3059,"li"),e(3060,"N\xE3o possuir "),n(3061,"code"),e(3062,"help"),t(),e(3063," e "),n(3064,"code"),e(3065,"label"),t(),e(3066,"."),t()()()(),n(3067,"tr",13)(3068,"td",14)(3069,"div",15)(3070,"span",16),e(3071," options"),i(3072,"br"),t()()(),n(3073,"td",17)(3074,"code",32),e(3075,"Array<string> "),t(),n(3076,"code",65),e(3077," Array<PoSelectOption> "),t(),n(3078,"code",66),e(3079," Array<PoMultiselectOption> "),t(),n(3080,"code",67),e(3081," Array<PoCheckboxGroupOption> "),t(),n(3082,"code",68),e(3083," Array<any>"),t()(),n(3084,"td",20)(3085,"em")(3086,"strong"),e(3087,"(opcional)"),t()(),n(3088,"p"),e(3089,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3090,"p")(3091,"strong"),e(3092,"Componentes compat\xEDveis:"),t(),n(3093,"code"),e(3094,"po-select"),t(),e(3095,", "),n(3096,"code"),e(3097,"po-radio-group"),t(),e(3098,", "),n(3099,"code"),e(3100,"po-checkbox-group"),t(),e(3101,", "),n(3102,"code"),e(3103,"po-multiselect"),t(),e(3104,"."),t()()(),n(3105,"tr",13)(3106,"td",14)(3107,"div",15)(3108,"span",16),e(3109," optionsMulti"),i(3110,"br"),t()()(),n(3111,"td",17)(3112,"code",28),e(3113,"boolean"),t()(),n(3114,"td",20)(3115,"em")(3116,"strong"),e(3117,"(opcional)"),t()(),n(3118,"p"),e(3119,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3120,"tr",13)(3121,"td",14)(3122,"div",15)(3123,"span",16),e(3124," optionsService"),i(3125,"br"),t()()(),n(3126,"td",17)(3127,"code",18),e(3128,"string "),t(),n(3129,"code",69),e(3130," PoComboFilter "),t(),n(3131,"code",70),e(3132," PoMultiselectFilter"),t()(),n(3133,"td",20)(3134,"em")(3135,"strong"),e(3136,"(opcional)"),t()(),n(3137,"p"),e(3138,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3139,"strong"),e(3140,"Importante"),t()(),n(3141,"blockquote")(3142,"p"),e(3143,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3144,"a",71),e(3145,"guia de API do PO UI"),t(),e(3146,"."),t()()()(),n(3147,"tr",13)(3148,"td",14)(3149,"div",15)(3150,"span",16),e(3151," order"),i(3152,"br"),t()()(),n(3153,"td",17)(3154,"code",41),e(3155,"number"),t()(),n(3156,"td",20)(3157,"em")(3158,"strong"),e(3159,"(opcional)"),t()(),n(3160,"p"),e(3161,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3162,"p"),e(3163,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3164,"p")(3165,"code"),e(3166,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3167,"p"),e(3168,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3169,"code"),e(3170,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3171,"p"),e(3172,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3173,"p"),e(3174,"Campos sem "),n(3175,"code"),e(3176,"order"),t(),e(3177,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3178,"tr",13)(3179,"td",14)(3180,"div",15)(3181,"span",16),e(3182," params"),i(3183,"br"),t()()(),n(3184,"td",17)(3185,"code",33),e(3186,"any"),t()(),n(3187,"td",20)(3188,"em")(3189,"strong"),e(3190,"(opcional)"),t()(),n(3191,"p"),e(3192,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3193,"code"),e(3194,"po-lookup"),t(),e(3195,` e
`),n(3196,"code"),e(3197,"po-combo"),t(),e(3198,"."),t(),n(3199,"p"),e(3200,"Por exemplo, para o par\xE2metro "),n(3201,"code"),e(3202,"{ age: 23 }"),t(),e(3203," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3204,"p")(3205,"code"),e(3206,"url + ?age=23&filter=Peter"),t()()()(),n(3207,"tr",13)(3208,"td",14)(3209,"div",15)(3210,"span",16),e(3211," pattern"),i(3212,"br"),t()()(),n(3213,"td",17)(3214,"code",18),e(3215,"string"),t()(),n(3216,"td",20)(3217,"em")(3218,"strong"),e(3219,"(opcional)"),t()(),n(3220,"p"),e(3221,"Regex para valida\xE7\xE3o do campo."),t(),n(3222,"p")(3223,"strong"),e(3224,"Componentes compat\xEDveis:"),t(),n(3225,"code"),e(3226,"po-input"),t(),e(3227,", "),n(3228,"code"),e(3229,"po-password"),t(),e(3230,"."),t()()(),n(3231,"tr",13)(3232,"td",14)(3233,"div",15)(3234,"span",16),e(3235," placeholder"),i(3236,"br"),t()()(),n(3237,"td",17)(3238,"code",18),e(3239,"string"),t()(),n(3240,"td",20)(3241,"em")(3242,"strong"),e(3243,"(opcional)"),t()(),n(3244,"p"),e(3245,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3246,"tr",13)(3247,"td",14)(3248,"div",15)(3249,"span",16),e(3250," placeholderSearch"),i(3251,"br"),t()()(),n(3252,"td",17)(3253,"code",18),e(3254,"string"),t()(),n(3255,"td",20)(3256,"em")(3257,"strong"),e(3258,"(opcional)"),t()(),n(3259,"p"),e(3260,"Placeholder do campo de pesquisa do "),n(3261,"code"),e(3262,"po-multiselect"),t(),e(3263,"."),t(),n(3264,"blockquote")(3265,"p"),e(3266,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3267,"tr",13)(3268,"td",14)(3269,"div",15)(3270,"span",16),e(3271," property"),i(3272,"br"),t()()(),n(3273,"td",17)(3274,"code",18),e(3275,"string"),t()(),n(3276,"td",20)(3277,"p"),e(3278,"Nome de refer\xEAncia do campo."),t()()(),n(3279,"tr",13)(3280,"td",14)(3281,"div",15)(3282,"span",16),e(3283," range"),i(3284,"br"),t()()(),n(3285,"td",17)(3286,"code",28),e(3287,"boolean"),t()(),n(3288,"td",20)(3289,"em")(3290,"strong"),e(3291,"(opcional)"),t()(),n(3292,"p"),e(3293,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3294,"blockquote")(3295,"p"),e(3296,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3297,"tr",13)(3298,"td",14)(3299,"div",15)(3300,"span",16),e(3301," readonly"),i(3302,"br"),t()()(),n(3303,"td",17)(3304,"code",28),e(3305,"boolean"),t()(),n(3306,"td",20)(3307,"em")(3308,"strong"),e(3309,"(opcional)"),t()(),n(3310,"p"),e(3311,"Indica que o campo ser\xE1 somente leitura."),t(),n(3312,"p")(3313,"strong"),e(3314,"Componentes compat\xEDveis:"),t(),n(3315,"code"),e(3316,"po-datepicker"),t(),e(3317,", "),n(3318,"code"),e(3319,"po-datepicker-range"),t(),e(3320,", "),n(3321,"code"),e(3322,"po-input"),t(),e(3323,", "),n(3324,"code"),e(3325,"po-number"),t(),e(3326,", "),n(3327,"code"),e(3328,"po-decimal"),t(),e(3329,", "),n(3330,"code"),e(3331,"po-select"),t(),e(3332,", "),n(3333,"code"),e(3334,"po-textarea"),t(),e(3335,", "),n(3336,"code"),e(3337,"po-password"),t()()()(),n(3338,"tr",13)(3339,"td",14)(3340,"div",15)(3341,"span",16),e(3342," removeInitialFilter"),i(3343,"br"),t()()(),n(3344,"td",17)(3345,"code",28),e(3346,"boolean"),t()(),n(3347,"td",20)(3348,"em")(3349,"strong"),e(3350,"(opcional)"),t()(),n(3351,"p"),e(3352,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(3353,"blockquote")(3354,"p"),e(3355,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(3356,"p")(3357,"strong"),e(3358,"Componente compat\xEDvel"),t(),e(3359,": "),n(3360,"code"),e(3361,"po-combo"),t()()()(),n(3362,"tr",13)(3363,"td",14)(3364,"div",15)(3365,"span",16),e(3366," required"),i(3367,"br"),t()()(),n(3368,"td",17)(3369,"code",28),e(3370,"boolean"),t()(),n(3371,"td",20)(3372,"em")(3373,"strong"),e(3374,"(opcional)"),t()(),n(3375,"p"),e(3376,"Define a obrigatoriedade do campo."),t()()(),n(3377,"tr",13)(3378,"td",14)(3379,"div",15)(3380,"span",16),e(3381," requiredFieldErrorMessage"),i(3382,"br"),t()()(),n(3383,"td",17)(3384,"code",28),e(3385,"boolean"),t()(),n(3386,"td",20)(3387,"em")(3388,"strong"),e(3389,"(opcional)"),t()(),n(3390,"p"),e(3391,"Exibe a mensagem setada na propriedade "),n(3392,"code"),e(3393,"errorMessage"),t(),e(3394," se o campo estiver vazio e for requerido."),t(),n(3395,"blockquote")(3396,"p"),e(3397,"Necess\xE1rio que a propriedade "),n(3398,"code"),e(3399,"required"),t(),e(3400," esteja habilitada."),t()(),n(3401,"p")(3402,"strong"),e(3403,"Componentes compat\xEDveis:"),t(),n(3404,"code"),e(3405,"po-datepicker"),t(),e(3406,", "),n(3407,"code"),e(3408,"po-input"),t(),e(3409,", "),n(3410,"code"),e(3411,"po-number"),t(),e(3412,", "),n(3413,"code"),e(3414,"po-decimal"),t(),e(3415,", "),n(3416,"code"),e(3417,"po-password"),t(),e(3418,"."),t()()(),n(3419,"tr",13)(3420,"td",14)(3421,"div",15)(3422,"span",16),e(3423," restrictions"),i(3424,"br"),t()()(),n(3425,"td",17)(3426,"code",72),e(3427,"PoUploadFileRestrictions"),t()(),n(3428,"td",20)(3429,"em")(3430,"strong"),e(3431,"(opcional)"),t()(),n(3432,"p"),e(3433,"Objeto que segue a defini\xE7\xE3o da interface "),n(3434,"code"),e(3435,"PoUploadFileRestrictions"),t(),e(3436,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3437,"p")(3438,"strong"),e(3439,"Componente compat\xEDvel"),t(),e(3440,": "),n(3441,"code"),e(3442,"po-upload"),t()()()(),n(3443,"tr",13)(3444,"td",14)(3445,"div",15)(3446,"span",16),e(3447," rows"),i(3448,"br"),t()()(),n(3449,"td",17)(3450,"code",41),e(3451,"number"),t()(),n(3452,"td",20)(3453,"em")(3454,"strong"),e(3455,"(opcional)"),t()(),n(3456,"p"),e(3457,"Quantidade de linhas exibidas no "),n(3458,"code"),e(3459,"po-textarea"),t(),e(3460,"."),t()()(),n(3461,"tr",13)(3462,"td",14)(3463,"div",15)(3464,"span",16),e(3465," searchService"),i(3466,"br"),t()()(),n(3467,"td",17)(3468,"code",18),e(3469,"string "),t(),n(3470,"code",73),e(3471," PoLookupFilter"),t()(),n(3472,"td",20)(3473,"em")(3474,"strong"),e(3475,"(opcional)"),t()(),n(3476,"p"),e(3477,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3478,"code"),e(3479,"columns"),t(),e(3480,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3481,"strong"),e(3482,"Importante:"),t()(),n(3483,"blockquote")(3484,"p"),e(3485,"Caso utilizar a propriedade "),n(3486,"code"),e(3487,"optionsService"),t(),e(3488,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3489,"a",71),e(3490,"guia de API do PO UI"),t(),e(3491,"."),t()()()(),n(3492,"tr",13)(3493,"td",14)(3494,"div",15)(3495,"span",16),e(3496," secret"),i(3497,"br"),t()()(),n(3498,"td",17)(3499,"code",28),e(3500,"boolean"),t()(),n(3501,"td",20)(3502,"em")(3503,"strong"),e(3504,"(opcional)"),t()(),n(3505,"p"),e(3506,"Esconde a informa\xE7\xE3o estilo "),n(3507,"em"),e(3508,"password"),t(),e(3509,", pode ser utilizado quando o tipo de dado for "),n(3510,"em"),e(3511,"string"),t(),e(3512,"."),t()()(),n(3513,"tr",13)(3514,"td",14)(3515,"div",15)(3516,"span",16),e(3517," showRequired"),i(3518,"br"),t()()(),n(3519,"td",17)(3520,"code",28),e(3521,"boolean"),t()(),n(3522,"td",20)(3523,"em")(3524,"strong"),e(3525,"(opcional)"),t()(),n(3526,"p"),e(3527,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3528,"blockquote")(3529,"p"),e(3530,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3531,"ul")(3532,"li"),e(3533,"N\xE3o possuir "),n(3534,"code"),e(3535,"p-help"),t(),e(3536," e/ou "),n(3537,"code"),e(3538,"p-label"),t(),e(3539,"."),t()()()(),n(3540,"tr",13)(3541,"td",14)(3542,"div",15)(3543,"span",16),e(3544," size"),i(3545,"br"),t()()(),n(3546,"td",17)(3547,"code",18),e(3548,"string"),t()(),n(3549,"td",20)(3550,"em")(3551,"strong"),e(3552,"(opcional)"),t()(),n(3553,"p"),e(3554,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(3555,"ul")(3556,"li")(3557,"code"),e(3558,"small"),t(),e(3559,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(3560,"li")(3561,"code"),e(3562,"medium"),t(),e(3563,": aplica a medida medium de cada componente."),t(),n(3564,"li")(3565,"code"),e(3566,"large"),t(),e(3567,": aplica a medida large de cada componente (dispon\xEDvel para "),n(3568,"code"),e(3569,"po-checkbox"),t(),e(3570," e "),n(3571,"code"),e(3572,"po-radio-group"),t(),e(3573,")."),n(3574,"blockquote")(3575,"p"),e(3576,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(3577,"code"),e(3578,"medium"),t(),e(3579,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(3580,"a",21),e(3581,"po-theme"),t(),e(3582,"."),t()()()()()(),n(3583,"tr",13)(3584,"td",14)(3585,"div",15)(3586,"span",16),e(3587," sort"),i(3588,"br"),t()()(),n(3589,"td",17)(3590,"code",28),e(3591,"boolean"),t()(),n(3592,"td",20)(3593,"em")(3594,"strong"),e(3595,"(opcional)"),t()(),n(3596,"p"),e(3597,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3598,"p")(3599,"strong"),e(3600,"Componentes compat\xEDveis:"),t(),n(3601,"code"),e(3602,"po-combo"),t(),e(3603,", po-multiselect"),t()()(),n(3604,"tr",13)(3605,"td",14)(3606,"div",15)(3607,"span",16),e(3608," step"),i(3609,"br"),t()()(),n(3610,"td",17)(3611,"code",41),e(3612,"number"),t()(),n(3613,"td",20)(3614,"em")(3615,"strong"),e(3616,"(opcional)"),t()(),n(3617,"p"),e(3618,"Intervalo utilizado no "),n(3619,"code"),e(3620,"po-number"),t(),e(3621,"."),t()()(),n(3622,"tr",13)(3623,"td",14)(3624,"div",15)(3625,"span",16),e(3626," thousandMaxlength"),i(3627,"br"),t()()(),n(3628,"td",17)(3629,"code",41),e(3630,"number"),t()(),n(3631,"td",20)(3632,"em")(3633,"strong"),e(3634,"(opcional)"),t()(),n(3635,"p"),e(3636,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3637,"blockquote")(3638,"p"),e(3639,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3640,"code"),e(3641,"type"),t(),e(3642," for "),n(3643,"em"),e(3644,"currency"),t(),e(3645," ou "),n(3646,"em"),e(3647,"decimal"),t(),e(3648,"."),t()()()(),n(3649,"tr",13)(3650,"td",14)(3651,"div",15)(3652,"span",16),e(3653," type"),i(3654,"br"),t()()(),n(3655,"td",17)(3656,"code",18),e(3657,"string "),t(),n(3658,"code",74),e(3659," PoDynamicFieldType"),t()(),n(3660,"td",20)(3661,"em")(3662,"strong"),e(3663,"(opcional)"),t()(),n(3664,"p"),e(3665,"Tipo do valor campo."),t(),n(3666,"p"),e(3667,"Valores v\xE1lidos:"),t(),n(3668,"ul")(3669,"li")(3670,"code"),e(3671,"boolean"),t(),e(3672,": Valores "),n(3673,"em"),e(3674,"booleanos"),t(),e(3675,"."),t(),n(3676,"li")(3677,"code"),e(3678,"currency"),t(),e(3679,": Valores monet\xE1rios."),t(),n(3680,"li")(3681,"code"),e(3682,"decimal"),t(),e(3683,": Valores decimais."),t(),n(3684,"li")(3685,"code"),e(3686,"date"),t(),e(3687,": Valores de datas."),n(3688,"ul")(3689,"li"),e(3690,"Aceita os tipos "),n(3691,"strong"),e(3692,"string"),t(),e(3693," e "),n(3694,"strong"),e(3695,"Date"),t(),e(3696,` padr\xE3o do Javascript,
por exemplo: `),n(3697,"code"),e(3698,"'2017-11-28'"),t(),e(3699," ou "),n(3700,"code"),e(3701,"new Date(2017, 10, 28)"),t(),e(3702,"."),t()()(),n(3703,"li")(3704,"code"),e(3705,"dateTime"),t(),e(3706,": Valor de data com hor\xE1rio."),n(3707,"ul")(3708,"li"),e(3709,"Aceita o tipo "),n(3710,"em"),e(3711,"string"),t(),e(3712," no formato "),n(3713,"strong"),e(3714,"ISO-8601"),t(),e(3715," extendido "),n(3716,"strong"),e(3717,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3718,`
e o tipo `),n(3719,"strong"),e(3720,"Date"),t(),e(3721," padr\xE3o do Javascript, por exemplo: "),n(3722,"code"),e(3723,"'2017-11-28T00:00:00-02:00'"),t(),e(3724," ou "),n(3725,"code"),e(3726,"new Date(2017, 10, 28)"),t(),e(3727,"."),t()()(),n(3728,"li")(3729,"code"),e(3730,"number"),t(),e(3731,": Valores num\xE9ricos."),t(),n(3732,"li")(3733,"code"),e(3734,"string"),t(),e(3735,": Textos."),t(),n(3736,"li")(3737,"code"),e(3738,"time"),t(),e(3739,": Valor do hor\xE1rio."),n(3740,"ul")(3741,"li"),e(3742,"Aceita o tipo "),n(3743,"strong"),e(3744,"string"),t(),e(3745," nos formatos "),n(3746,"strong"),e(3747,"'HH:mm:ss'"),t(),e(3748," ou "),n(3749,"strong"),e(3750,"'HH:mm:ss.ffffff'"),t(),e(3751,", por exemplo: "),n(3752,"code"),e(3753,"'23:12:45'"),t(),e(3754,"."),t()()()()()(),n(3755,"tr",13)(3756,"td",14)(3757,"div",15)(3758,"span",16),e(3759," url"),i(3760,"br"),t()()(),n(3761,"td",17)(3762,"code",18),e(3763,"string"),t()(),n(3764,"td",20)(3765,"em")(3766,"strong"),e(3767,"(opcional)"),t()(),n(3768,"p"),e(3769,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3770,"p")(3771,"strong"),e(3772,"Componente compat\xEDvel"),t(),e(3773,": "),n(3774,"code"),e(3775,"po-upload"),t()()()(),n(3776,"tr",13)(3777,"td",14)(3778,"div",15)(3779,"span",16),e(3780," validate"),i(3781,"br"),t()()(),n(3782,"td",17)(3783,"code",18),e(3784,"string "),t(),n(3785,"code",29),e(3786," Function"),t()(),n(3787,"td",20)(3788,"em")(3789,"strong"),e(3790,"(opcional)"),t()(),n(3791,"p"),e(3792,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3793,"strong"),e(3794,"mudan\xE7as do campo"),t(),e(3795,"."),t(),n(3796,"ul")(3797,"li"),e(3798,"A propriedade aceita os seguintes tipos:"),t()(),n(3799,"ul")(3800,"li")(3801,"strong"),e(3802,"String"),t(),e(3803,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3804,"code"),e(3805,"POST"),t(),e(3806,"."),t(),n(3807,"li")(3808,"strong"),e(3809,"Function"),t(),e(3810,": M\xE9todo que ser\xE1 executado."),t()(),n(3811,"p"),e(3812,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3813,"code"),e(3814,"PoDynamicFormFieldChanged"),t(),e(3815,":"),t(),n(3816,"p")(3817,"code"),e(3818,"{ property: 'property name', value: 'new value' }"),t()(),n(3819,"p"),e(3820,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3821,"a",75),e(3822,"PoDynamicFormFieldValidation"),t(),e(3823,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3824,"pre")(3825,"code"),e(3826,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(3827,"p"),e(3828,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3829,"code"),e(3830,"bind"),t(),e(3831,`, por exemplo:
`),n(3832,"code"),e(3833,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3834,"tr",13)(3835,"td",14)(3836,"div",15)(3837,"span",16),e(3838," visible"),i(3839,"br"),t()()(),n(3840,"td",17)(3841,"code",28),e(3842,"boolean"),t()(),n(3843,"td",20)(3844,"em")(3845,"strong"),e(3846,"(opcional)"),t()(),n(3847,"p"),e(3848,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3849,"h4",38)(3850,"code",5),e(3851,"PoDynamicFormLoad"),t()(),n(3852,"div",2)(3853,"p"),i(3854,"a",76),t(),n(3855,"p"),e(3856,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3857,"h4",9),e(3858,"Propriedades"),t(),n(3859,"table",10)(3860,"tr",11)(3861,"th",12),e(3862,"Nome"),t(),n(3863,"th",12),e(3864,"Tipo"),t(),n(3865,"th",12),e(3866,"Descri\xE7\xE3o"),t()(),n(3867,"tr",13)(3868,"td",14)(3869,"div",15)(3870,"span",16),e(3871," fields"),i(3872,"br"),t()()(),n(3873,"td",17)(3874,"code",22),e(3875,"Array<PoDynamicFormField>"),t()(),n(3876,"td",20)(3877,"em")(3878,"strong"),e(3879,"(opcional)"),t()(),n(3880,"p"),e(3881,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3882,"blockquote")(3883,"p"),e(3884,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3885,"tr",13)(3886,"td",14)(3887,"div",15)(3888,"span",16),e(3889," focus"),i(3890,"br"),t()()(),n(3891,"td",17)(3892,"code",18),e(3893,"string"),t()(),n(3894,"td",20)(3895,"em")(3896,"strong"),e(3897,"(opcional)"),t()(),n(3898,"p"),e(3899,"Nome do campo que receber\xE1 o foco."),t(),n(3900,"p"),e(3901,"Exemplo:"),t(),n(3902,"pre")(3903,"code"),e(3904,`focus: 'name'
`),t()()()(),n(3905,"tr",13)(3906,"td",14)(3907,"div",15)(3908,"span",16),e(3909," value"),i(3910,"br"),t()()(),n(3911,"td",17)(3912,"code",33),e(3913,"any"),t()(),n(3914,"td",20)(3915,"em")(3916,"strong"),e(3917,"(opcional)"),t()(),n(3918,"p"),e(3919,"Objeto contendo os novos valores."),t(),n(3920,"p"),e(3921,"Exemplo:"),t(),n(3922,"pre")(3923,"code"),e(3924,`{
  name: 'new name',
  age: 10
}
`),t()(),n(3925,"blockquote")(3926,"p"),e(3927,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3928,"h4",38)(3929,"code",5),e(3930,"PoDynamicFormFieldChanged"),t()(),n(3931,"div",2)(3932,"p"),e(3933,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(3934,"h4",9),e(3935,"Propriedades"),t(),n(3936,"table",10)(3937,"tr",11)(3938,"th",12),e(3939,"Nome"),t(),n(3940,"th",12),e(3941,"Tipo"),t(),n(3942,"th",12),e(3943,"Descri\xE7\xE3o"),t()(),n(3944,"tr",13)(3945,"td",14)(3946,"div",15)(3947,"span",16),e(3948," property"),i(3949,"br"),t()()(),n(3950,"td",17)(3951,"code",18),e(3952,"string"),t()(),n(3953,"td",20)(3954,"p"),e(3955,"Valor da propriedade do campo."),t()()(),n(3956,"tr",13)(3957,"td",14)(3958,"div",15)(3959,"span",16),e(3960," value"),i(3961,"br"),t()()(),n(3962,"td",17)(3963,"code",33),e(3964,"any"),t()(),n(3965,"td",20)(3966,"p"),e(3967,"Novo valor do campo."),t()()()(),n(3968,"h4",38)(3969,"code",5),e(3970,"PoDynamicFormFieldValidation"),t()(),n(3971,"div",2)(3972,"p"),i(3973,"a",77),t(),n(3974,"p"),e(3975,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(3976,"h4",9),e(3977,"Propriedades"),t(),n(3978,"table",10)(3979,"tr",11)(3980,"th",12),e(3981,"Nome"),t(),n(3982,"th",12),e(3983,"Tipo"),t(),n(3984,"th",12),e(3985,"Descri\xE7\xE3o"),t()(),n(3986,"tr",13)(3987,"td",14)(3988,"div",15)(3989,"span",16),e(3990," field"),i(3991,"br"),t()()(),n(3992,"td",17)(3993,"code",78),e(3994,"PoDynamicFormField"),t()(),n(3995,"td",20)(3996,"em")(3997,"strong"),e(3998,"(opcional)"),t()(),n(3999,"p"),e(4e3,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(4001,"blockquote")(4002,"p"),e(4003,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(4004,"tr",13)(4005,"td",14)(4006,"div",15)(4007,"span",16),e(4008," focus"),i(4009,"br"),t()()(),n(4010,"td",17)(4011,"code",28),e(4012,"boolean"),t()(),n(4013,"td",20)(4014,"em")(4015,"strong"),e(4016,"(opcional)"),t()(),n(4017,"p"),e(4018,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(4019,"tr",13)(4020,"td",14)(4021,"div",15)(4022,"span",16),e(4023," value"),i(4024,"br"),t()()(),n(4025,"td",17)(4026,"code",33),e(4027,"any"),t()(),n(4028,"td",20)(4029,"em")(4030,"strong"),e(4031,"(opcional)"),t()(),n(4032,"p"),e(4033,"Novo valor do campo"),t()()()(),n(4034,"h4",38)(4035,"code",5),e(4036,"PoDynamicFormValidation"),t()(),n(4037,"div",2)(4038,"p"),i(4039,"a",79),t(),n(4040,"p"),e(4041,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(4042,"h4",9),e(4043,"Propriedades"),t(),n(4044,"table",10)(4045,"tr",11)(4046,"th",12),e(4047,"Nome"),t(),n(4048,"th",12),e(4049,"Tipo"),t(),n(4050,"th",12),e(4051,"Descri\xE7\xE3o"),t()(),n(4052,"tr",13)(4053,"td",14)(4054,"div",15)(4055,"span",16),e(4056," fields"),i(4057,"br"),t()()(),n(4058,"td",17)(4059,"code",22),e(4060,"Array<PoDynamicFormField>"),t()(),n(4061,"td",20)(4062,"em")(4063,"strong"),e(4064,"(opcional)"),t()(),n(4065,"p"),e(4066,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4067,"blockquote")(4068,"p"),e(4069,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(4070,"tr",13)(4071,"td",14)(4072,"div",15)(4073,"span",16),e(4074," focus"),i(4075,"br"),t()()(),n(4076,"td",17)(4077,"code",18),e(4078,"string"),t()(),n(4079,"td",20)(4080,"em")(4081,"strong"),e(4082,"(opcional)"),t()(),n(4083,"p"),e(4084,"Nome do campo que receber\xE1 o foco."),t(),n(4085,"p"),e(4086,"Exemplo:"),t(),n(4087,"pre")(4088,"code"),e(4089,`focus: 'name'
`),t()()()(),n(4090,"tr",13)(4091,"td",14)(4092,"div",15)(4093,"span",16),e(4094," value"),i(4095,"br"),t()()(),n(4096,"td",17)(4097,"code",33),e(4098,"any"),t()(),n(4099,"td",20)(4100,"em")(4101,"strong"),e(4102,"(opcional)"),t()(),n(4103,"p"),e(4104,"Objeto contendo os novos valores."),t(),n(4105,"p"),e(4106,"Exemplo:"),t(),n(4107,"pre")(4108,"code"),e(4109,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4110,"blockquote")(4111,"p"),e(4112,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4113,"h4",38)(4114,"code",5),e(4115,"ErrorAsyncProperties"),t()(),n(4116,"div",2)(4117,"p"),e(4118,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(4119,"h4",9),e(4120,"Propriedades"),t(),n(4121,"table",10)(4122,"tr",11)(4123,"th",12),e(4124,"Nome"),t(),n(4125,"th",12),e(4126,"Tipo"),t(),n(4127,"th",12),e(4128,"Descri\xE7\xE3o"),t()(),n(4129,"tr",13)(4130,"td",14)(4131,"div",15)(4132,"span",16),e(4133," errorAsync"),i(4134,"br"),t()()(),n(4135,"td",17)(4136,"code",46),e(4137,"(value) => Observable<boolean>"),t()(),n(4138,"td",20)(4139,"p"),e(4140,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(4141,"code"),e(4142,"change"),t(),e(4143," ou "),n(4144,"code"),e(4145,"change-model"),t(),e(4146,", dependendo do valor da propriedade "),n(4147,"code"),e(4148,"triggerMode"),t(),e(4149,"."),t()()(),n(4150,"tr",13)(4151,"td",14)(4152,"div",15)(4153,"span",16),e(4154," triggerMode"),i(4155,"br"),t()()(),n(4156,"td",17)(4157,"code",80),e(4158,"'change' "),t(),n(4159,"code",81),e(4160," 'changeModel'"),t()(),n(4161,"td",20)(4162,"em")(4163,"strong"),e(4164,"(opcional)"),t()(),n(4165,"p"),e(4166,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(4167,"code"),e(4168,"change"),t(),e(4169," ou "),n(4170,"code"),e(4171,"change-model"),t(),e(4172,"."),t()()()(),n(4173,"h3"),e(4174,"Enums"),t(),n(4175,"h4",4)(4176,"code",5),e(4177,"ForceBooleanComponentEnum"),t()(),n(4178,"div",2)(4179,"p"),e(4180,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4181,"h4",9),e(4182,"Propriedades"),t(),n(4183,"table",10)(4184,"tr",11)(4185,"th",12),e(4186,"Nome"),t(),n(4187,"th",12),e(4188,"Descri\xE7\xE3o"),t()(),n(4189,"tr",13)(4190,"td",14)(4191,"div",15)(4192,"span",16),e(4193," switch"),i(4194,"br"),t()()(),n(4195,"td",20)(4196,"p"),e(4197,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(4198,"tr",13)(4199,"td",14)(4200,"div",15)(4201,"span",16),e(4202," checkbox"),i(4203,"br"),t()()(),n(4204,"td",20)(4205,"p"),e(4206,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(4207,"h4",4)(4208,"code",5),e(4209,"ForceOptionComponentEnum"),t()(),n(4210,"div",2)(4211,"p"),e(4212,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4213,"h4",9),e(4214,"Propriedades"),t(),n(4215,"table",10)(4216,"tr",11)(4217,"th",12),e(4218,"Nome"),t(),n(4219,"th",12),e(4220,"Descri\xE7\xE3o"),t()(),n(4221,"tr",13)(4222,"td",14)(4223,"div",15)(4224,"span",16),e(4225," radioGroup"),i(4226,"br"),t()()(),n(4227,"td",20)(4228,"p"),e(4229,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(4230,"tr",13)(4231,"td",14)(4232,"div",15)(4233,"span",16),e(4234," select"),i(4235,"br"),t()()(),n(4236,"td",20)(4237,"p"),e(4238,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(4239,"h4",4)(4240,"code",5),e(4241,"PoDynamicFieldType"),t()(),n(4242,"div",2)(4243,"p"),e(4244,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(4245,"h4",9),e(4246,"Propriedades"),t(),n(4247,"table",10)(4248,"tr",11)(4249,"th",12),e(4250,"Nome"),t(),n(4251,"th",12),e(4252,"Descri\xE7\xE3o"),t()(),n(4253,"tr",13)(4254,"td",14)(4255,"div",15)(4256,"span",16),e(4257," Boolean"),i(4258,"br"),t()()(),n(4259,"td",20)(4260,"p"),e(4261,"Valor booleano."),t()()(),n(4262,"tr",13)(4263,"td",14)(4264,"div",15)(4265,"span",16),e(4266," Currency"),i(4267,"br"),t()()(),n(4268,"td",20)(4269,"p"),e(4270,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4271,"tr",13)(4272,"td",14)(4273,"div",15)(4274,"span",16),e(4275," Decimal"),i(4276,"br"),t()()(),n(4277,"td",20)(4278,"p"),e(4279,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4280,"tr",13)(4281,"td",14)(4282,"div",15)(4283,"span",16),e(4284," Date"),i(4285,"br"),t()()(),n(4286,"td",20)(4287,"p"),e(4288,"Valor para data."),t()()(),n(4289,"tr",13)(4290,"td",14)(4291,"div",15)(4292,"span",16),e(4293," DateTime"),i(4294,"br"),t()()(),n(4295,"td",20)(4296,"p"),e(4297,"Valor para data e hora."),t()()(),n(4298,"tr",13)(4299,"td",14)(4300,"div",15)(4301,"span",16),e(4302," Time"),i(4303,"br"),t()()(),n(4304,"td",20)(4305,"p"),e(4306,"Utilizado para informar/exibir hora."),t()()(),n(4307,"tr",13)(4308,"td",14)(4309,"div",15)(4310,"span",16),e(4311," Number"),i(4312,"br"),t()()(),n(4313,"td",20)(4314,"p"),e(4315,"Valor num\xE9rico."),t()()(),n(4316,"tr",13)(4317,"td",14)(4318,"div",15)(4319,"span",16),e(4320," String"),i(4321,"br"),t()()(),n(4322,"td",20)(4323,"p"),e(4324,"Texto."),t()()(),n(4325,"tr",13)(4326,"td",14)(4327,"div",15)(4328,"span",16),e(4329," Upload"),i(4330,"br"),t()()(),n(4331,"td",20)(4332,"p"),e(4333,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[b],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(L(K),L(X))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",l.actions),d(2),p("p-active",l.activeTab==="doc"),d(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[J,x,S,Q,$,te,ne],encapsulation:2})}return o})();var ye=[{path:"",component:ie}],oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[O.forChild(ye),O]})}return o})();var et=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[W,oe]})}return o})();export{et as DocPoDynamicFormModule};
