import{o as f,p as ee}from"./chunk-QBCDRFNO.js";import{Ga as Z,I as K,J as Q,K as X,R as Y,a as U,mb as $,v as J,y as T,yb as S,z as L,zb as E}from"./chunk-3RSXW52V.js";import{Bb as y,Ca as b,Cc as W,Fc as R,Ga as V,Ka as o,La as t,M as w,Ma as a,Qa as j,Ra as u,Sa as D,T as k,Tc as N,U as O,Vc as G,Xc as z,bb as e,db as g,fb as v,gb as C,hb as x,ia as r,ja as F,jb as _,kb as P,lb as A,pa as s,qa as M,va as I,za as m}from"./chunk-4WWO4UYO.js";var te=(()=>{class n{poHelper={title:"PO Helper Basic",content:"Este \xE9 um helper de exemplo. Voc\xEA pode colocar qualquer informa\xE7\xE3o que desejar aqui, como dicas de uso, explica\xE7\xF5es sobre funcionalidades, ou qualquer outro conte\xFAdo relevante para ajudar o usu\xE1rio."};static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"p-helper"]],template:function(l,i){l&1&&a(0,"po-helper",0),l&2&&m("p-helper",i.poHelper)},dependencies:[T],encapsulation:2})}return n})();var ue=n=>({"docs-sample-code-tabs":n}),ne=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Basic"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-basic/sample-po-helper-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-helper [p-helper]="poHelper"></po-helper>
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
  };
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-basic"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,ue,i.hideSampleCodeTabs)))},dependencies:[y,f,S,E,te],encapsulation:2})}return n})();var Se=()=>({label:"Help",value:"help"}),Ee=()=>({label:"Info",value:"info"}),ie=(n,q)=>[n,q],fe=()=>({label:"Medium",value:"medium"}),be=()=>({label:"Small",value:"small"});function ge(n,q){if(n&1){let p=j();o(0,"po-input",8),x("ngModelChange",function(i){k(p);let c=D();return C(c.footerTitle,i)||(c.footerTitle=i),O(i)}),u("ngModelChange",function(i){k(p);let c=D();return O(c.setFooterTitle(i))}),t()}if(n&2){let p=D();v("ngModel",p.footerTitle)}}var le=(()=>{class n{helperSize=L.Medium;helperOptions={title:"",content:"",type:"help",eventOnClick:this.emitClick.bind(this)};footerTitle="";footerAction(){alert("Footer action clicked")}emitClick(p){console.log("Helper clicked",p)}setFooterTitle(p){p.length===0?(this.footerTitle="",delete this.helperOptions.footerAction):this.helperOptions.footerAction={label:this.footerTitle,action:this.footerAction.bind(this)}}reset(){this.helperOptions={title:"",content:"",type:"help",eventOnClick:this.emitClick.bind(this)},this.helperSize=L.Medium,this.footerTitle=""}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-labs"]],standalone:!1,decls:14,vars:19,consts:[[3,"p-helper","p-size"],[1,"po-row"],["name","title","p-clean","","p-label","T\xEDtulo do Helper",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","type","p-clean","","p-label","Conte\xFAdo do Helper",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","footerTitle","p-clean","","p-label","T\xEDtulo do Footer",1,"po-lg-6","po-md-6",3,"ngModel"],["name","type","p-columns","4","p-label","Type",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-12","po-md-12",3,"p-click"],["name","footerTitle","p-clean","","p-label","T\xEDtulo do Footer",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(a(0,"po-helper",0),o(1,"div",1)(2,"po-input",2),x("ngModelChange",function(d){return C(i.helperOptions.title,d)||(i.helperOptions.title=d),d}),t(),o(3,"po-input",3),x("ngModelChange",function(d){return C(i.helperOptions.content,d)||(i.helperOptions.content=d),d}),t()(),o(4,"div",1),I(5,ge,1,1,"po-input",4),t(),a(6,"po-divider"),o(7,"div",1)(8,"po-radio-group",5),x("ngModelChange",function(d){return C(i.helperOptions.type,d)||(i.helperOptions.type=d),d}),t()(),o(9,"div",1)(10,"po-radio-group",6),x("ngModelChange",function(d){return C(i.helperSize,d)||(i.helperSize=d),d}),t()(),a(11,"po-divider"),o(12,"div",1)(13,"po-button",7),u("p-click",function(){return i.reset()}),t()()),l&2&&(m("p-helper",i.helperOptions)("p-size",i.helperSize),r(2),v("ngModel",i.helperOptions.title),r(),v("ngModel",i.helperOptions.content),r(2),V(i.helperOptions.type==="help"?5:-1),r(3),v("ngModel",i.helperOptions.type),m("p-options",A(11,ie,_(9,Se),_(10,Ee))),r(2),v("ngModel",i.helperSize),m("p-options",A(16,ie,_(14,fe),_(15,be))))},dependencies:[W,R,J,U,Y,Z,T],encapsulation:2})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Labs"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-labs/sample-po-helper-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-helper [p-helper]="helperOptions" [p-size]="helperSize"></po-helper>

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
  @if(helperOptions.type === 'help') {
    <po-input class="po-lg-6 po-md-6" name="footerTitle" [(ngModel)]="footerTitle" (ngModelChange)="setFooterTitle($event)"
      p-clean p-label="T\xEDtulo do Footer">
    </po-input>
  }
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
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-labs"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,Ce,i.hideSampleCodeTabs)))},dependencies:[y,f,S,E,le],encapsulation:2})}return n})();var pe=(()=>{class n{helperOptions={title:"Sales Performance Overview",content:"This section provides insights into employee turnover rate and sales performance. Hover over the chart for more details.",type:"info"};type=K.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:!0};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-sales-performance"]],standalone:!1,decls:8,vars:4,consts:[[1,"po-row"],[1,"po-font-title","po-mb-3"],[3,"p-helper"],[1,"po-lg-12"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"]],template:function(l,i){l&1&&(o(0,"po-container")(1,"div",0)(2,"div",1),e(3,"Sales Performance"),t(),a(4,"po-helper",2),t(),o(5,"div",0)(6,"div",3),a(7,"po-chart",4),t()()()),l&2&&(r(4),m("p-helper",i.helperOptions),r(3),m("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover))},dependencies:[Q,X,T],encapsulation:2})}return n})();var ye=n=>({"docs-sample-code-tabs":n}),re=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-sales-performance-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Helper Sales Performance"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-helper-sales-performance/sample-po-helper-sales-performance.component.html"),t(),o(13,"pre",7),e(14,`<po-container>
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
`),t()()()()(),o(21,"div",10),a(22,"sample-po-helper-sales-performance"),t(),a(23,"hr")),l&2&&(r(5),b("po-icon "+i.sampleCodeButtonIcon),r(),g(" ",i.sampleCodeButtonLabel,""),r(),m("ngClass",P(4,ye,i.hideSampleCodeTabs)))},dependencies:[y,f,S,E,pe],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-helper-doc"]],standalone:!1,decls:428,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-html"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoHelperSize"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","{","label:","string;","action:","Function;","}"],["pan","",1,"docs-api-property-type","'info'"],["pan","",1,"docs-api-property-type","'help'"]],template:function(l,i){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoHelperModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-helper"),t()(),o(7,"h3",3),e(8,"Componente"),t(),o(9,"h4",4)(10,"code",5),e(11,"PoHelperComponent"),t()(),o(12,"div",2)(13,"p"),e(14,"O componente "),o(15,"code"),e(16,"po-helper"),t(),e(17," exibe um \xEDcone de ajuda ou informa\xE7\xE3o ao lado de campos, bot\xF5es ou outros elementos, permitindo ao usu\xE1rio acessar conte\xFAdos explicativos em um popover."),t(),o(18,"p"),e(19,"Principais funcionalidades:"),t(),o(20,"ul")(21,"li"),e(22,"Exibe \xEDcone de ajuda ("),o(23,"code"),e(24,"help"),t(),e(25,") ou informa\xE7\xE3o ("),o(26,"code"),e(27,"info"),t(),e(28,") conforme configura\xE7\xE3o."),t(),o(29,"li"),e(30,"Permite definir t\xEDtulo, conte\xFAdo e a\xE7\xF5es no popover via propriedade "),o(31,"code"),e(32,"p-helper"),t(),e(33,"."),t(),o(34,"li"),e(35,"Suporte a acessibilidade: navega\xE7\xE3o por teclado, atributos ARIA e leitura do conte\xFAdo por leitores de tela."),t(),o(36,"li"),e(37,"Controle do tamanho do componente via propriedade "),o(38,"code"),e(39,"p-size"),t(),e(40," ("),o(41,"code"),e(42,"small"),t(),e(43," ou "),o(44,"code"),e(45,"medium"),t(),e(46,")."),t(),o(47,"li"),e(48,"Permite customizar a\xE7\xF5es no rodap\xE9 do popover."),t()(),o(49,"p"),e(50,"Exemplo de uso:"),t(),o(51,"pre")(52,"code",6),e(53,`<po-helper
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
`),t()(),o(70,"blockquote")(71,"p")(72,"strong"),e(73,"Importante:"),t(),e(74," A propriedade "),o(75,"code"),e(76,"footerAction"),t(),e(77," n\xE3o pode ser utilizada quando o tipo do helper for "),o(78,"code"),e(79,"info"),t(),e(80,", pois o \xEDcone de informa\xE7\xE3o \xE9 destinado apenas para exibir informa\xE7\xF5es est\xE1ticas sem a\xE7\xF5es adicionais."),t()(),o(81,"h4"),e(82,"Tokens customiz\xE1veis"),t(),o(83,"p"),e(84,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(85,"blockquote")(86,"p"),e(87,"Para maiores informa\xE7\xF5es, acesse o guia "),o(88,"a",8),e(89,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(90,"."),t()(),o(91,"table")(92,"thead")(93,"tr")(94,"th"),e(95,"Propriedade"),t(),o(96,"th"),e(97,"Descri\xE7\xE3o"),t(),o(98,"th"),e(99,"Valor Padr\xE3o"),t()()(),o(100,"tbody")(101,"tr")(102,"td")(103,"code"),e(104,"--color"),t()(),o(105,"td"),e(106,"Cor principal do \xEDcone"),t(),o(107,"td")(108,"code"),e(109,"var(--color-action-default)"),t()()(),o(110,"tr")(111,"td")(112,"code"),e(113,"--color-hover"),t()(),o(114,"td"),e(115,"Cor principal do \xEDcone no estado hover"),t(),o(116,"td")(117,"code"),e(118,"var(--color-action-hover)"),t()()(),o(119,"tr")(120,"td")(121,"code"),e(122,"--background-hover"),t()(),o(123,"td"),e(124,"Cor de background no estado hover"),t(),o(125,"td")(126,"code"),e(127,"var(--color-brand-01-lighter)"),t()()(),o(128,"tr")(129,"td")(130,"code"),e(131,"--border-color-hover"),t()(),o(132,"td"),e(133,"Cor da borda no estado hover"),t(),o(134,"td")(135,"code"),e(136,"var(--color-brand-01-darkest)"),t()()(),o(137,"tr")(138,"td")(139,"code"),e(140,"--background-pressed"),t()(),o(141,"td"),e(142,"Cor de background no estado de pressionado\xA0"),t(),o(143,"td")(144,"code"),e(145,"var(--color-brand-01-light)"),t()()(),o(146,"tr")(147,"td")(148,"code"),e(149,"--color-disabled"),t()(),o(150,"td"),e(151,"Cor principal no estado disabled"),t(),o(152,"td")(153,"code"),e(154,"var(--color-action-disabled)"),t()()()()()(),o(155,"div",9)(156,"h4",10),e(157,"Seletor"),t(),o(158,"pre",11),e(159,`<po-helper
    p-disabled="boolean"
    p-helper="PoHelperOptions | string"
    p-size="PoHelperSize | string" >
</po-helper>
`),t()(),o(160,"h4",12),e(161,"Propriedades"),t(),o(162,"table",13)(163,"tr",14)(164,"th",15),e(165,"Nome"),t(),o(166,"th",15),e(167,"Tipo"),t(),o(168,"th",15),e(169,"Padr\xE3o"),t(),o(170,"th",15),e(171,"Descri\xE7\xE3o"),t()(),o(172,"tr",16)(173,"td",17)(174,"div",18)(175,"span",19),e(176," p-disabled"),a(177,"br"),t()()(),o(178,"td",20)(179,"code",21),e(180,"boolean"),t()(),o(181,"td",22)(182,"p")(183,"code"),e(184,"false"),t()()(),o(185,"td",23)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),o(189,"p"),e(190,"Indica se o helper deve ser exibido no estado desativado, desabilitando intera\xE7\xF5es do usu\xE1rio."),t()()(),o(191,"tr",16)(192,"td",17)(193,"div",18)(194,"span",19),e(195," p-helper"),a(196,"br"),t()()(),o(197,"td",20)(198,"code",24),e(199,"PoHelperOptions "),t(),o(200,"code",25),e(201," string"),t()(),o(202,"td",22),e(203,"-"),t(),o(204,"td",23)(205,"em")(206,"strong"),e(207,"(opcional)"),t()(),o(208,"p"),e(209,"Define o conte\xFAdo e as op\xE7\xF5es do popover de ajuda/informa\xE7\xE3o."),t(),o(210,"p"),e(211,"Aceita uma string simples (exibida como conte\xFAdo) ou um objeto do tipo "),o(212,"code"),e(213,"PoHelperOptions"),t(),e(214," para configura\xE7\xE3o avan\xE7ada:"),t(),o(215,"ul")(216,"li")(217,"code"),e(218,"title"),t(),e(219,": T\xEDtulo do popover."),t(),o(220,"li")(221,"code"),e(222,"content"),t(),e(223,": Conte\xFAdo explicativo exibido no popover."),t(),o(224,"li")(225,"code"),e(226,"type"),t(),e(227,": Tipo do \xEDcone ("),o(228,"code"),e(229,"help"),t(),e(230," ou "),o(231,"code"),e(232,"info"),t(),e(233,")."),t(),o(234,"li")(235,"code"),e(236,"eventOnClick"),t(),e(237,": Fun\xE7\xE3o chamada ao clicar no \xEDcone."),t(),o(238,"li")(239,"code"),e(240,"footerAction"),t(),e(241,": Objeto com "),o(242,"code"),e(243,"label"),t(),e(244," e "),o(245,"code"),e(246,"action"),t(),e(247," para a\xE7\xE3o customizada no rodap\xE9 do popover."),t()(),o(248,"p"),e(249,"Exemplo de uso:"),t(),o(250,"pre")(251,"code",6),e(252,`<po-helper p-helper="Texto explicativo"></po-helper>
<po-helper [p-helper]="{ title: 'Ajuda', content: 'Texto', type: 'help' }"></po-helper>
`),t()()()(),o(253,"tr",16)(254,"td",17)(255,"div",18)(256,"span",19),e(257," p-size"),a(258,"br"),t()()(),o(259,"td",20)(260,"code",26),e(261,"PoHelperSize "),t(),o(262,"code",25),e(263," string"),t()(),o(264,"td",22)(265,"p")(266,"code"),e(267,"PoHelperSize.Medium"),t()()(),o(268,"td",23)(269,"em")(270,"strong"),e(271,"(opcional)"),t()(),o(272,"p"),e(273,"Define o tamanho do componente:"),t(),o(274,"ul")(275,"li")(276,"code"),e(277,"small"),t(),e(278,": altura do \xEDcone com seu valor de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(279,"li")(280,"code"),e(281,"medium"),t(),e(282,": altura do \xEDcone com seu valor de 24px."),t()(),o(283,"blockquote")(284,"p"),e(285,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(286,"code"),e(287,"medium"),t(),e(288,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(289,"a",27),e(290,"po-theme"),t(),e(291,"."),t()()()()(),o(292,"h3"),e(293,"Interfaces"),t(),o(294,"h4",28)(295,"code",5),e(296,"PoHelperOptions"),t()(),o(297,"div",2)(298,"p")(299,"em"),e(300,"Interface"),t(),e(301," que define as op\xE7\xF5es de configura\xE7\xE3o do componente po-helper."),t(),o(302,"p"),e(303,"Permite customizar o conte\xFAdo, t\xEDtulo, tipo do \xEDcone, modo de abertura do popover, a\xE7\xF5es customizadas e eventos."),t()(),o(304,"h4",12),e(305,"Propriedades"),t(),o(306,"table",13)(307,"tr",14)(308,"th",15),e(309,"Nome"),t(),o(310,"th",15),e(311,"Tipo"),t(),o(312,"th",15),e(313,"Descri\xE7\xE3o"),t()(),o(314,"tr",16)(315,"td",17)(316,"div",18)(317,"span",19),e(318," content"),a(319,"br"),t()()(),o(320,"td",20)(321,"code",25),e(322,"string"),t()(),o(323,"td",23)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),o(327,"p"),e(328,"Texto explicativo exibido no popover."),t()()(),o(329,"tr",16)(330,"td",17)(331,"div",18)(332,"span",19),e(333," eventOnClick"),a(334,"br"),t()()(),o(335,"td",20)(336,"code",29),e(337,"Function"),t()(),o(338,"td",23)(339,"em")(340,"strong"),e(341,"(opcional)"),t()(),o(342,"p"),e(343,"Evento disparado ao clicar no \xEDcone do helper."),t()()(),o(344,"tr",16)(345,"td",17)(346,"div",18)(347,"span",19),e(348," footerAction"),a(349,"br"),t()()(),o(350,"td",20)(351,"code",30),e(352,`{ label: string; action: Function;
}`),t()(),o(353,"td",23)(354,"em")(355,"strong"),e(356,"(opcional)"),t()(),o(357,"p"),e(358,"A\xE7\xE3o customizada exibida no rodap\xE9 do popover."),t(),o(359,"p"),e(360,"Deve ser um objeto com as propriedades:"),t(),o(361,"ul")(362,"li")(363,"code"),e(364,"label"),t(),e(365,": Texto do bot\xE3o."),t(),o(366,"li")(367,"code"),e(368,"action"),t(),e(369,": Fun\xE7\xE3o executada ao clicar no bot\xE3o."),t()(),o(370,"p"),e(371,"Exemplo:"),t(),o(372,"pre")(373,"code",7),e(374,`{ label: 'Saiba mais', action: this.footerAction.bind(this)) }
`),t()()()(),o(375,"tr",16)(376,"td",17)(377,"div",18)(378,"span",19),e(379," size"),a(380,"br"),t()()(),o(381,"td",20)(382,"code",25),e(383,"string"),t()(),o(384,"td",23)(385,"em")(386,"strong"),e(387,"(opcional)"),t()(),o(388,"p"),e(389,"Tamanho do componente definido dinamicamente."),t()()(),o(390,"tr",16)(391,"td",17)(392,"div",18)(393,"span",19),e(394," title"),a(395,"br"),t()()(),o(396,"td",20)(397,"code",25),e(398,"string"),t()(),o(399,"td",23)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),o(403,"p"),e(404,"T\xEDtulo do helper exibido no popover."),t()()(),o(405,"tr",16)(406,"td",17)(407,"div",18)(408,"span",19),e(409," type"),a(410,"br"),t()()(),o(411,"td",20)(412,"code",31),e(413,"'info' "),t(),o(414,"code",32),e(415," 'help'"),t()(),o(416,"td",23)(417,"em")(418,"strong"),e(419,"(opcional)"),t()(),o(420,"p"),e(421,"Tipo do \xEDcone exibido: "),o(422,"code"),e(423,"info"),t(),e(424," ou "),o(425,"code"),e(426,"help"),t(),e(427,"."),t()()()()())},dependencies:[f],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||n)(F(N),F(G))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Helper",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-helper-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-helper-basic-view")(6,"sample-po-helper-labs-view")(7,"sample-po-helper-sales-performance-view"),t()()()),l&2&&(m("p-actions",i.actions),r(2),m("p-active",i.activeTab==="doc"),r(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[$,S,E,ne,ae,re,me],encapsulation:2})}return n})();var _e=[{path:"",component:se}],de=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=M({type:n});static \u0275inj=w({imports:[z.forChild(_e),z]})}return n})();var et=(()=>{class n{static \u0275fac=function(l){return new(l||n)};static \u0275mod=M({type:n});static \u0275inj=w({imports:[ee,de]})}return n})();export{et as DocPoHelperModule};
