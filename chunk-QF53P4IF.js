import{o as E,p as J}from"./chunk-7QXRNAIE.js";import{Ga as G,I as V,J as W,K as R,R as N,a as I,mb as U,v as j,y as T,yb as S,z as F,zb as f}from"./chunk-DJTNC6KO.js";import{Bb as y,Ca as b,Cc as z,Fc as L,Ka as o,La as t,M as w,Ma as a,Ra as c,Tc as B,Vc as q,Xc as O,bb as e,db as g,fb as v,gb as C,hb as x,ia as r,ja as M,jb as _,kb as P,lb as D,pa as d,qa as k,za as s}from"./chunk-4WWO4UYO.js";var K=(()=>{class n{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.",type:"help",eventOnClick:this.emitClick.bind(this),footerAction:{label:"Clique aqui para saber mais",action:this.footerAction.bind(this)}};footerAction(){alert("Footer action clicked")}emitClick(p){console.log("Helper clicked",p)}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-helper-basic"]],standalone:!1,decls:1,vars:1,consts:[["p-size","medium",3,"p-helper"]],template:function(l,i){l&1&&a(0,"po-helper",0),l&2&&s("p-helper",i.poHelper)},dependencies:[T],encapsulation:2})}return n})();var pe=n=>({"docs-sample-code-tabs":n}),X=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-helper-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Basic"),t(),o(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-helper [p-helper]="poHelper" p-size="medium"></po-helper>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-basic/sample-po-helper-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-basic',
  templateUrl: './sample-po-helper-basic.component.html',
  standalone: false
})
export class SamplePoHelperBasicComponent {
  poHelper: PoHelperOptions = {
    title: 'PO Helper Basic',
    content:
      'Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio.',
    type: 'help',
    eventOnClick: this.emitClick.bind(this),
    footerAction: {
      label: 'Clique aqui para saber mais',
      action: this.footerAction.bind(this)
    }
  };

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  emitClick(event: Event) {
    console.log('Helper clicked', event);
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-basic"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,pe,i.hideSampleCodeTabs)))},dependencies:[y,E,S,f,K],encapsulation:2})}return n})();var me=()=>({label:"Help",value:"help"}),se=()=>({label:"Info",value:"info"}),Y=(n,le)=>[n,le],de=()=>({label:"Medium",value:"medium"}),ce=()=>({label:"Small",value:"small"}),Z=(()=>{class n{helperSize=F.Medium;helperOptions={title:"",content:"",type:"help",eventOnClick:this.emitClick.bind(this)};footerTitle="";footerAction(){alert("Footer action clicked")}emitClick(p){console.log("Helper clicked",p)}setFooterTitle(p){p.length===0?(this.footerTitle="",delete this.helperOptions.footerAction):this.helperOptions.footerAction={label:this.footerTitle,action:this.footerAction.bind(this)}}reset(){this.helperOptions={title:"",content:"",type:"help",eventOnClick:this.emitClick.bind(this)},this.helperSize=F.Medium,this.footerTitle=""}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-helper-labs"]],standalone:!1,decls:14,vars:19,consts:[[3,"p-helper","p-size"],[1,"po-row"],["name","title","p-clean","","p-label","T\xEDtulo do Helper",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","type","p-clean","","p-label","Conte\xFAdo do Helper",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","T\xEDtulo do Footer",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","type","p-columns","4","p-label","Type",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-12","po-md-12",3,"p-click"]],template:function(l,i){l&1&&(a(0,"po-helper",0),o(1,"div",1)(2,"po-input",2),x("ngModelChange",function(m){return C(i.helperOptions.title,m)||(i.helperOptions.title=m),m}),t(),o(3,"po-input",3),x("ngModelChange",function(m){return C(i.helperOptions.content,m)||(i.helperOptions.content=m),m}),t()(),o(4,"div",1)(5,"po-input",4),x("ngModelChange",function(m){return C(i.footerTitle,m)||(i.footerTitle=m),m}),c("ngModelChange",function(m){return i.setFooterTitle(m)}),t()(),a(6,"po-divider"),o(7,"div",1)(8,"po-radio-group",5),x("ngModelChange",function(m){return C(i.helperOptions.type,m)||(i.helperOptions.type=m),m}),t()(),o(9,"div",1)(10,"po-radio-group",6),x("ngModelChange",function(m){return C(i.helperSize,m)||(i.helperSize=m),m}),t()(),a(11,"po-divider"),o(12,"div",1)(13,"po-button",7),c("p-click",function(){return i.reset()}),t()()),l&2&&(s("p-helper",i.helperOptions)("p-size",i.helperSize),r(2),v("ngModel",i.helperOptions.title),r(),v("ngModel",i.helperOptions.content),r(2),v("ngModel",i.footerTitle),r(3),v("ngModel",i.helperOptions.type),s("p-options",D(11,Y,_(9,me),_(10,se))),r(2),v("ngModel",i.helperSize),s("p-options",D(16,Y,_(14,de),_(15,ce))))},dependencies:[z,L,j,I,N,G,T],encapsulation:2})}return n})();var he=n=>({"docs-sample-code-tabs":n}),$=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-helper-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Labs"),t(),o(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize"></po-helper>

<div class="po-row">
  <po-input class="po-lg-6 po-md-6" name="title" [(ngModel)]="helperOptions.title" p-clean p-label="T\xEDtulo do Helper">
  </po-input>
  <po-input
    class="po-lg-6 po-md-6"
    name="type"
    [(ngModel)]="helperOptions.content"
    p-clean
    p-label="Conte\xFAdo do Helper"
  >
  </po-input>
</div>

<div class="po-row">
  <po-input
    class="po-lg-6 po-md-6"
    name="footerTitle"
    [(ngModel)]="footerTitle"
    (ngModelChange)="setFooterTitle($event)"
    p-clean
    p-label="T\xEDtulo do Footer"
  >
  </po-input>
</div>
<po-divider></po-divider>
<div class="po-row">
  <po-radio-group
    name="type"
    class="po-md-12 po-lg-12"
    p-columns="4"
    p-label="Type"
    [(ngModel)]="helperOptions.type"
    [p-options]="[
      { label: 'Help', value: 'help' },
      { label: 'Info', value: 'info' }
    ]"
  >
  </po-radio-group>
</div>

<div class="po-row">
  <po-radio-group
    class="po-md-12 po-lg-12"
    name="size"
    [(ngModel)]="helperSize"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="[
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' }
    ]"
  >
  </po-radio-group>
</div>
<po-divider></po-divider>
<div class="po-row">
  <po-button class="po-md-12 po-md-12" p-label="Reset" (p-click)="reset()"></po-button>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-labs/sample-po-helper-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions, PoHelperSize } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-labs',
  templateUrl: './sample-po-helper-labs.component.html',
  standalone: false
})
export class SamplePoHelperLabsComponent {
  helperSize: PoHelperSize = PoHelperSize.Medium;

  helperOptions: PoHelperOptions = {
    title: '',
    content: '',
    type: 'help',
    eventOnClick: this.emitClick.bind(this)
  };

  footerTitle: string = '';

  footerAction() {
    alert(\`Footer action clicked\`);
  }

  emitClick(event: Event) {
    console.log('Helper clicked', event);
  }

  setFooterTitle(title: string) {
    if (title.length === 0) {
      this.footerTitle = '';
      delete this.helperOptions.footerAction;
    } else {
      this.helperOptions.footerAction = {
        label: this.footerTitle,
        action: this.footerAction.bind(this)
      };
    }
  }

  reset() {
    this.helperOptions = {
      title: '',
      content: '',
      type: 'help',
      eventOnClick: this.emitClick.bind(this)
    };
    this.helperSize = PoHelperSize.Medium;
    this.footerTitle = '';
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-labs"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,he,i.hideSampleCodeTabs)))},dependencies:[y,E,S,f,Z],encapsulation:2})}return n})();var ee=(()=>{class n{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into employee turnover rate and sales performance. Hover over the chart for more details.",type:"info"};type=V.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:!0};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-helper-sales-performance"]],standalone:!1,decls:8,vars:4,consts:[[1,"po-row"],[1,"po-font-title","po-mb-3"],[3,"p-helper"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(o(0,"po-container")(1,"div",0)(2,"div",1),e(3,"Sales Performance"),t(),a(4,"po-helper",2),t(),o(5,"div",0)(6,"div",3),a(7,"po-chart",4),t()()()),l&2&&(r(4),s("p-helper",i.helperOptions),r(3),s("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover))},dependencies:[W,R,T],encapsulation:2})}return n})();var Ee=n=>({"docs-sample-code-tabs":n}),te=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-helper-sales-performance-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Sales Performance"),t(),o(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),t(),o(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <div class="po-font-title po-mb-3">Sales Performance</div>
    <po-helper [p-helper]="helperOptions"></po-helper>
  </div>
  <div class="po-row">
    <div class="po-lg-12">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
  </div>
</po-container>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoHelperOptions, PoChartType, PoChartOptions, PoChartSerie } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-helper-sales-performance',
  templateUrl: './sample-po-helper-sales-performance.component.html',
  standalone: false
})
export class SamplePoHelperSalesPerformanceComponent {
  helperOptions: PoHelperOptions = {
    title: 'Sales Performance Overview',
    content:
      'This section provides insights into employee turnover rate and sales performance. Hover over the chart for more details.',
    type: 'info'
  };

  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-sales-performance"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),s("ngClass",P(4,Ee,i.hideSampleCodeTabs)))},dependencies:[y,E,S,f,ee],encapsulation:2})}return n})();var oe=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-helper-doc"]],standalone:!1,decls:415,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoHelperSize"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHelperModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-helper"),t()(),o(7,"h3",3),e(8,"Componente"),t(),o(9,"h4",4)(10,"code",5),e(11,"PoHelperComponent"),t()(),o(12,"div",2)(13,"p"),e(14,"O componente "),o(15,"code"),e(16,"po-helper"),t(),e(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),t(),o(18,"p"),e(19,"Principais funcionalidades:"),t(),o(20,"ul")(21,"li"),e(22,"Exibe \xEDcone de ajuda ("),o(23,"code"),e(24,"help"),t(),e(25,") ou informa\xE7\xE3o ("),o(26,"code"),e(27,"info"),t(),e(28,") conforme configura\xE7\xE3o."),t(),o(29,"li"),e(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),o(31,"code"),e(32,"p-helper"),t(),e(33,"."),t(),o(34,"li"),e(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),t(),o(36,"li"),e(37,"Controle do tamanho do componente via propriedade "),o(38,"code"),e(39,"p-size"),t(),e(40," ("),o(41,"code"),e(42,"small"),t(),e(43," ou "),o(44,"code"),e(45,"medium"),t(),e(46,")."),t(),o(47,"li"),e(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),t()(),o(49,"p"),e(50,"Exemplo de uso:"),t(),o(51,"pre")(52,"code",6),e(53,`<po-helper
  [p-helper]="{ title: 'Ajuda', content: 'Texto explicativo', type: 'help' }"
  [p-size]="'medium'"
></po-helper>
`),t()(),o(54,"p"),e(55,"Tamb\xE9m \xE9 poss\xEDvel passar apenas uma string para o conte\xFAdo:"),t(),o(56,"pre")(57,"code",6),e(58,`<po-helper p-helper="Texto explicativo"></po-helper>
`),t()(),o(59,"p"),e(60,"A propriedade "),o(61,"code"),e(62,"p-helper"),t(),e(63," aceita um objeto do tipo "),o(64,"code"),e(65,"PoHelperOptions"),t(),e(66,":"),t(),o(67,"pre")(68,"code",7),e(69,`interface PoHelperOptions {
  title?: string;
  content: string;
  type?: 'help' | 'info';
  eventOnClick?: Function;
  footerAction?: { label: string; action: Function };
}
`),t()(),o(70,"h4"),e(71,"Tokens customiz\xE1veis"),t(),o(72,"p"),e(73,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(74,"blockquote")(75,"p"),e(76,"Para maiores informa\xE7\xF5es, acesse o guia "),o(77,"a",8),e(78,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(79,"."),t()(),o(80,"table")(81,"thead")(82,"tr")(83,"th"),e(84,"Propriedade"),t(),o(85,"th"),e(86,"Descri\xE7\xE3o"),t(),o(87,"th"),e(88,"Valor Padr\xE3o"),t()()(),o(89,"tbody")(90,"tr")(91,"td")(92,"code"),e(93,"--color"),t()(),o(94,"td"),e(95,"Cor principal do \xEDcone"),t(),o(96,"td")(97,"code"),e(98,"var(--color-action-default)"),t()()(),o(99,"tr")(100,"td")(101,"code"),e(102,"--color-hover"),t()(),o(103,"td"),e(104,"Cor principal do \xEDcone no estado hover"),t(),o(105,"td")(106,"code"),e(107,"var(--color-action-hover)"),t()()(),o(108,"tr")(109,"td")(110,"code"),e(111,"--background-hover"),t()(),o(112,"td"),e(113,"Cor de background no estado hover"),t(),o(114,"td")(115,"code"),e(116,"var(--color-brand-01-lighter)"),t()()(),o(117,"tr")(118,"td")(119,"code"),e(120,"--border-color-hover"),t()(),o(121,"td"),e(122,"Cor da borda no estado hover"),t(),o(123,"td")(124,"code"),e(125,"var(--color-brand-01-darkest)"),t()()(),o(126,"tr")(127,"td")(128,"code"),e(129,"--background-pressed"),t()(),o(130,"td"),e(131,"Cor de background no estado de pressionado\xA0"),t(),o(132,"td")(133,"code"),e(134,"var(--color-brand-01-light)"),t()()(),o(135,"tr")(136,"td")(137,"code"),e(138,"--color-disabled"),t()(),o(139,"td"),e(140,"Cor principal no estado disabled"),t(),o(141,"td")(142,"code"),e(143,"var(--color-action-disabled)"),t()()()()()(),o(144,"div",9)(145,"h4",10),e(146,"Seletor"),t(),o(147,"pre",11),e(148,`<po-helper
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="PoHelperSize" >
</po-helper>
`),t()(),o(149,"h4",12),e(150,"Propriedades"),t(),o(151,"table",13)(152,"tr",14)(153,"th",15),e(154,"Nome"),t(),o(155,"th",15),e(156,"Tipo"),t(),o(157,"th",15),e(158,"Padr\xE3o"),t(),o(159,"th",15),e(160,"Descri\xE7\xE3o"),t()(),o(161,"tr",16)(162,"td",17)(163,"div",18)(164,"span",19),e(165," p-disabled"),a(166,"br"),t()()(),o(167,"td",20)(168,"code",21),e(169,"boolean"),t()(),o(170,"td",22)(171,"p")(172,"code"),e(173,"false"),t()()(),o(174,"td",23)(175,"em")(176,"strong"),e(177,"(opcional)"),t()(),o(178,"p"),e(179,"Indica se o helper est\xE1 desativado."),t()()(),o(180,"tr",16)(181,"td",17)(182,"div",18)(183,"span",19),e(184," p-helper"),a(185,"br"),t()()(),o(186,"td",20)(187,"code",24),e(188,"PoHelperOptions "),t(),o(189,"code",25),e(190," string"),t()(),o(191,"td",22),e(192,"-"),t(),o(193,"td",23)(194,"em")(195,"strong"),e(196,"(opcional)"),t()(),o(197,"p"),e(198,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),t(),o(199,"p"),e(200,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),o(201,"code"),e(202,"PoHelperOptions"),t(),e(203," para configura\xE7\xE3o avan\xE7ada:"),t(),o(204,"ul")(205,"li")(206,"code"),e(207,"title"),t(),e(208,": T\xEDtulo do popover."),t(),o(209,"li")(210,"code"),e(211,"content"),t(),e(212,": Conte\xFAdo explicativo exibido no popover."),t(),o(213,"li")(214,"code"),e(215,"type"),t(),e(216,": Tipo do \xEDcone ("),o(217,"code"),e(218,"help"),t(),e(219," ou "),o(220,"code"),e(221,"info"),t(),e(222,")."),t(),o(223,"li")(224,"code"),e(225,"eventOnClick"),t(),e(226,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),t(),o(227,"li")(228,"code"),e(229,"footerAction"),t(),e(230,": Objeto com "),o(231,"code"),e(232,"label"),t(),e(233," e "),o(234,"code"),e(235,"action"),t(),e(236," para a\xE7\xE3o customizada no rodap\xE9 do popover."),t()(),o(237,"p"),e(238,"Exemplo de uso:"),t(),o(239,"pre")(240,"code",6),e(241,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'info' }"></po-helper>
`),t()()()(),o(242,"tr",16)(243,"td",17)(244,"div",18)(245,"span",19),e(246," p-size"),a(247,"br"),t()()(),o(248,"td",20)(249,"code",26),e(250,"PoHelperSize"),t()(),o(251,"td",22)(252,"p")(253,"code"),e(254,"PoHelperSize.Medium"),t()()(),o(255,"td",23)(256,"em")(257,"strong"),e(258,"(opcional)"),t()(),o(259,"p"),e(260,"Define o tamanho do componente:"),t(),o(261,"ul")(262,"li")(263,"code"),e(264,"small"),t(),e(265,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(266,"li")(267,"code"),e(268,"medium"),t(),e(269,": altura do \xEDcone com seu valor de 24px."),t()(),o(270,"blockquote")(271,"p"),e(272,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(273,"code"),e(274,"medium"),t(),e(275,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(276,"a",27),e(277,"po-theme"),t(),e(278,"."),t()()()()(),o(279,"h3"),e(280,"Interfaces"),t(),o(281,"h4",28)(282,"code",5),e(283,"PoHelperOptions"),t()(),o(284,"div",2)(285,"p")(286,"em"),e(287,"Interface"),t(),e(288," que define as op\xE7\xF5es de configura\xE7\xE3o do componente po-helper."),t(),o(289,"p"),e(290,"Permite customizar o conte\xFAdo, t\xEDtulo, tipo do \xEDcone, modo de abertura do popover, a\xE7\xF5es customizadas e eventos."),t()(),o(291,"h4",12),e(292,"Propriedades"),t(),o(293,"table",13)(294,"tr",14)(295,"th",15),e(296,"Nome"),t(),o(297,"th",15),e(298,"Tipo"),t(),o(299,"th",15),e(300,"Descri\xE7\xE3o"),t()(),o(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),e(305," content"),a(306,"br"),t()()(),o(307,"td",20)(308,"code",25),e(309,"string"),t()(),o(310,"td",23)(311,"em")(312,"strong"),e(313,"(opcional)"),t()(),o(314,"p"),e(315,"Texto explicativo exibido no popover."),t()()(),o(316,"tr",16)(317,"td",17)(318,"div",18)(319,"span",19),e(320," eventOnClick"),a(321,"br"),t()()(),o(322,"td",20)(323,"code",29),e(324,"Function"),t()(),o(325,"td",23)(326,"em")(327,"strong"),e(328,"(opcional)"),t()(),o(329,"p"),e(330,"Evento disparado ao clicar no \xEDcone do helper."),t()()(),o(331,"tr",16)(332,"td",17)(333,"div",18)(334,"span",19),e(335," footerAction"),a(336,"br"),t()()(),o(337,"td",20)(338,"code",30),e(339,`{ label: string; action: Function;
}`),t()(),o(340,"td",23)(341,"em")(342,"strong"),e(343,"(opcional)"),t()(),o(344,"p"),e(345,"A\xE7\xE3o customizada exibida no rodap\xE9 do popover."),t(),o(346,"p"),e(347,"Deve ser um objeto com as propriedades:"),t(),o(348,"ul")(349,"li")(350,"code"),e(351,"label"),t(),e(352,": Texto do bot\xE3o."),t(),o(353,"li")(354,"code"),e(355,"action"),t(),e(356,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),t()(),o(357,"p"),e(358,"Exemplo:"),t(),o(359,"pre")(360,"code",7),e(361,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),t()()()(),o(362,"tr",16)(363,"td",17)(364,"div",18)(365,"span",19),e(366," size"),a(367,"br"),t()()(),o(368,"td",20)(369,"code",25),e(370,"string"),t()(),o(371,"td",23)(372,"em")(373,"strong"),e(374,"(opcional)"),t()(),o(375,"p"),e(376,"Tamanho do componente definido dinamicamente."),t()()(),o(377,"tr",16)(378,"td",17)(379,"div",18)(380,"span",19),e(381," title"),a(382,"br"),t()()(),o(383,"td",20)(384,"code",25),e(385,"string"),t()(),o(386,"td",23)(387,"em")(388,"strong"),e(389,"(opcional)"),t()(),o(390,"p"),e(391,"T\xEDtulo do helper exibido no popover."),t()()(),o(392,"tr",16)(393,"td",17)(394,"div",18)(395,"span",19),e(396," type"),a(397,"br"),t()()(),o(398,"td",20)(399,"code",31),e(400,"'info' "),t(),o(401,"code",32),e(402," 'help'"),t()(),o(403,"td",23)(404,"em")(405,"strong"),e(406,"(opcional)"),t()(),o(407,"p"),e(408,"Tipo do \xEDcone exibido: "),o(409,"code"),e(410,"info"),t(),e(411," ou "),o(412,"code"),e(413,"help"),t(),e(414,"."),t()()()()())},dependencies:[E],encapsulation:2})}return n})();var ne=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||n)(M(B),M(q))};static \u0275cmp=d({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-helper-doc"),t(),o(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),t()()()),l&2&&(s("p-actions",i.actions),r(2),s("p-active",i.activeTab==="doc"),r(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[U,S,f,X,$,te,oe],encapsulation:2})}return n})();var ve=[{path:"",component:ne}],ie=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=k({type:n});static \u0275inj=w({imports:[O.forChild(ve),O]})}return n})();var Je=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=k({type:n});static \u0275inj=w({imports:[J,ie]})}return n})();export{Je as DocPoHelperModule};
