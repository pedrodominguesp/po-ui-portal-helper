import{o as y,p as we}from"./chunk-7QXRNAIE.js";import{Fb as Z,Ga as B,La as ge,Oa as M,P as ue,Pa as he,R as ce,Ra as xe,Sa as K,V as Ee,Wa as X,c as me,mb as fe,sa as be,ta as Se,ub as ve,v as O,wb as Ce,yb as w,zb as _}from"./chunk-DJTNC6KO.js";import{$a as k,Ba as te,Bb as C,Ca as P,Cc as V,Dc as R,Ec as z,Fc as A,Ga as Y,Gc as j,Jc as le,Ka as n,Kc as re,La as t,M as I,Ma as o,Nc as pe,P as Q,Pb as ae,Qa as T,Ra as b,Sa as H,T as m,Tc as de,U as u,Vc as se,Xc as ee,Za as D,_a as U,ab as L,bb as e,db as F,fb as S,gb as g,hb as h,ia as s,ja as $,jb as ne,kb as v,pa as x,qa as G,qb as ie,rb as oe,va as J,za as E}from"./chunk-4WWO4UYO.js";var _e=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[M],encapsulation:2})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),ye=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,Oe,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,_e],encapsulation:2})}return l})();function We(l,Ae){if(l&1&&(n(0,"div")(1,"po-widget",21)(2,"form",22),o(3,"po-input",23)(4,"po-select",24)(5,"po-select",25)(6,"po-switch",26)(7,"po-switch",27),t()()()),l&2){let p=H();s(2),E("formGroup",p.actionForm),s(2),E("p-options",p.iconOptions),s(),E("p-options",p.typeOptions)}}var Fe=(()=>{class l{fb=Q(pe);additionalHelpTooltip;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(p=>{this.updateAction(p)})}updateAction(p){this.action=p}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onChangeHeaders(p){try{this.headers=JSON.parse(p)}catch{this.headers=void 0}}onChangeExtension(){let p=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:p})}onChangeMaxFiles(p){this.restrictions=Object.assign({},this.restrictions,{maxFiles:p})}onChangeMaxSize(p){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(p)})}onChangeMinSize(p){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(p)})}restore(){this.additionalHelpTooltip="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.size="medium"}getValueInBytes(p){return 1048576*p}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:28,vars:47,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","ngModel","p-additional-help-tooltip","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-multiple","p-optional","p-required","p-show-required","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let d=T();n(0,"po-upload",1),h("ngModelChange",function(a){return m(d),g(i.upload,a)||(i.upload=a),u(a)}),b("p-custom-action-click",function(){return m(d),u(i.changeEvent("p-custom-action-click"))})("p-error",function(){return m(d),u(i.changeEvent("p-error"))})("p-keydown",function(){return m(d),u(i.changeEvent("p-keydown"))})("p-success",function(){return m(d),u(i.changeEvent("p-success"))})("p-upload",function(){return m(d),u(i.changeEvent("p-upload"))}),t(),o(1,"hr"),n(2,"div",2),o(3,"po-info",3),ie(4,"json"),o(5,"po-info",4),t(),o(6,"hr"),n(7,"div",2)(8,"form",null,0)(10,"po-input",5),h("ngModelChange",function(a){return m(d),g(i.allowedExtensions,a)||(i.allowedExtensions=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeExtension())}),t(),n(11,"po-number",6),h("ngModelChange",function(a){return m(d),g(i.maxFiles,a)||(i.maxFiles=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxFiles(i.maxFiles))}),t(),n(12,"po-number",7),h("ngModelChange",function(a){return m(d),g(i.dragDropHeight,a)||(i.dragDropHeight=a),u(a)}),t(),n(13,"po-number",8),h("ngModelChange",function(a){return m(d),g(i.minSize,a)||(i.minSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMinSize(i.minSize))}),t(),n(14,"po-number",9),h("ngModelChange",function(a){return m(d),g(i.maxSize,a)||(i.maxSize=a),u(a)}),b("p-change",function(){return m(d),u(i.onChangeMaxSize(i.maxSize))}),t(),o(15,"hr"),n(16,"po-input",10),h("ngModelChange",function(a){return m(d),g(i.label,a)||(i.label=a),u(a)}),t(),n(17,"po-input",11),h("ngModelChange",function(a){return m(d),g(i.help,a)||(i.help=a),u(a)}),t(),n(18,"po-input",12),h("ngModelChange",function(a){return m(d),g(i.additionalHelpTooltip,a)||(i.additionalHelpTooltip=a),u(a)}),t(),n(19,"po-input",13),h("ngModelChange",function(a){return m(d),g(i.formField,a)||(i.formField=a),u(a)}),t(),n(20,"po-input",14),h("ngModelChange",function(a){return m(d),g(i.url,a)||(i.url=a),u(a)}),t(),n(21,"po-input",15),h("ngModelChange",function(a){return m(d),g(i.headersLabs,a)||(i.headersLabs=a),u(a)}),b("p-change",function(a){return m(d),u(i.onChangeHeaders(a))}),t(),n(22,"po-input",16),h("ngModelChange",function(a){return m(d),g(i.literals,a)||(i.literals=a),u(a)}),b("p-change",function(){return m(d),u(i.changeLiterals())}),t(),n(23,"po-checkbox-group",17),h("ngModelChange",function(a){return m(d),g(i.properties,a)||(i.properties=a),u(a)}),t(),J(24,We,8,3,"div"),n(25,"po-radio-group",18),h("ngModelChange",function(a){return m(d),g(i.size,a)||(i.size=a),u(a)}),t(),n(26,"div",19)(27,"po-button",20),b("p-click",function(){return m(d),u(i.restore())}),t()()()()}r&2&&(S("ngModel",i.upload),E("p-additional-help-tooltip",i.additionalHelpTooltip)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),s(3),E("p-value",oe(4,45,i.upload)),s(2),E("p-value",i.event),s(5),S("ngModel",i.allowedExtensions),s(),S("ngModel",i.maxFiles),s(),S("ngModel",i.dragDropHeight),s(),S("ngModel",i.minSize),s(),S("ngModel",i.maxSize),s(2),S("ngModel",i.label),s(),S("ngModel",i.help),s(),S("ngModel",i.additionalHelpTooltip),s(),S("ngModel",i.formField),s(),S("ngModel",i.url),s(),S("ngModel",i.headersLabs),s(),S("ngModel",i.literals),s(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),s(),Y(i.properties.includes("showCustomAction")?24:-1),s(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[j,V,R,A,z,le,re,O,ue,ce,B,ge,xe,M,be,X,Z,ae],encapsulation:2})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Me=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
>
</po-upload>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <hr />

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

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    @if (properties.includes('showCustomAction')) {
      <div>
        <po-widget p-title="Action Button">
          <form [formGroup]="actionForm" class="po-row">
            <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
            <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
            <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
            <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
            <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
          </form>
        </po-widget>
      </div>
    }

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

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  additionalHelpTooltip: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor() {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,Ne,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Fe],encapsulation:2})}return l})();var Qe=["formOpportunity"],Ge=()=>({maxFileSize:"204800"}),qe=(()=>{class l{poNotification=Q(Se);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&D(Qe,7),r&2){let d;U(d=k())&&(i.formOpportunity=d.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let d=T();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),h("ngModelChange",function(a){return m(d),g(i.name,a)||(i.name=a),u(a)}),t()(),n(4,"div",1)(5,"po-textarea",3),h("ngModelChange",function(a){return m(d),g(i.biograph,a)||(i.biograph=a),u(a)}),t()(),n(6,"div",1)(7,"po-url",4),h("ngModelChange",function(a){return m(d),g(i.linkedin,a)||(i.linkedin=a),u(a)}),t()(),n(8,"div",1)(9,"po-upload",5),h("ngModelChange",function(a){return m(d),g(i.resume,a)||(i.resume=a),u(a)}),b("p-error",function(){return m(d),u(i.resumeUploadError())})("p-success",function(){return m(d),u(i.resumeUploadSuccess())}),t()(),n(10,"div",1)(11,"po-button",6),b("p-click",function(){return m(d),u(i.apply())}),t()()()}if(r&2){let d=L(1);s(3),S("ngModel",i.name),s(2),S("ngModel",i.biograph),s(2),S("ngModel",i.linkedin),s(2),S("ngModel",i.resume),E("p-restrictions",ne(6,Ge)),s(2),E("p-disabled",d.invalid||!i.uploadedResume)}},dependencies:[j,V,R,A,z,O,B,K,M,he],encapsulation:2})}return l})();var Ye=l=>({"docs-sample-code-tabs":l}),Te=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,Ye,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,qe],encapsulation:2})}return l})();var Xe=["upload"],Ze=["stepper"],$e=["submitForm"],et=["sucessData"],tt=l=>({"po-invisible":l});function nt(l,Ae){if(l&1){let p=T();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),n(7,"po-button",31),b("p-click",function(){m(p);let i=H();return u(i.confirmSubmit())}),t()()}if(l&2){let p=H();s(4),E("p-value",p.project[0].name||"N/D"),s(),E("p-value",p.title||"N/D"),s(),E("p-value",p.description||"N/D")}}var De=(()=>{class l{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&(D(Xe,7),D(Ze,7),D($e,7),D(et,7)),r&2){let d;U(d=k())&&(i.upload=d.first),U(d=k())&&(i.stepper=d.first),U(d=k())&&(i.submitForm=d.first),U(d=k())&&(i.sucessData=d.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let d=T();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVER!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),b("p-click",function(){m(d);let a=L(2);return u(a.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),b("click",function(){m(d);let a=L(32);return u(a.selectFiles())}),t(),n(27,"po-icon",19),b("click",function(){m(d);let a=L(32);return u(a.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),h("ngModelChange",function(a){return m(d),g(i.project,a)||(i.project=a),u(a)}),t()(),n(33,"div",4)(34,"po-input",22),h("ngModelChange",function(a){return m(d),g(i.title,a)||(i.title=a),u(a)}),t()(),n(35,"div",4)(36,"po-textarea",23),h("ngModelChange",function(a){return m(d),g(i.description,a)||(i.description=a),u(a)}),t()(),n(37,"div",8)(38,"po-button",24),b("p-click",function(){return m(d),u(i.submitProject())}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),J(41,nt,8,3,"div",8),t()()()(),n(42,"po-modal",26,3)(44,"div",4)(45,"p",27),e(46,"Project successfully submited!"),t()()()}r&2&&(s(13),E("p-can-active-next-step",i.canSubmitProject.bind(i)),s(14),E("ngClass",v(13,tt,i.project.length<1)),s(2),te("po-invisible",i.project.length<1),s(2),S("ngModel",i.project),E("p-restrictions",i.restrictions),s(3),S("ngModel",i.title),E("p-disabled",i.project.length<1),s(2),S("ngModel",i.description),E("p-disabled",i.project.length<1),s(2),E("p-disabled",i.canSubmitProject()),s(3),Y(i.canSubmitProject()?41:-1),s(),E("p-primary-action",i.confirm))},dependencies:[C,j,V,R,A,z,O,B,K,M,me,X,Ee,ve,Ce,Z],encapsulation:2})}return l})();var ot=l=>({"docs-sample-code-tabs":l}),Ue=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVER!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        @if (canSubmitProject()) {
          <div class="tht-row">
            <div class="po-sm-12">
              <p class="po-font-text-large">Confirm informations</p>
            </div>
            <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>
            <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
          </div>
        }
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,ot,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,De],encapsulation:2})}return l})();var ke=(()=>{class l{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(p){if(!p.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(p.rawFile)}downloadFile(p){let r=URL.createObjectURL(p),i=document.createElement("a");i.href=r,i.download=p.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),b("p-custom-action-click",function(c){return i.onCustomActionClick(c)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&E("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[M],encapsulation:2})}return l})();var rt=l=>({"docs-sample-code-tabs":l}),Le=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(s(5),P("po-icon "+i.sampleCodeButtonIcon),s(),F(" ",i.sampleCodeButtonLabel,""),s(),E("ngClass",v(4,rt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ke],encapsulation:2})}return l})();var Ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:1620,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),t()()(),n(40,"div",6)(41,"h4",7),e(42,"Seletor"),t(),n(43,"pre",8),e(44,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoUploadLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-error)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),t()(),n(45,"h4",9),e(46,"Propriedades"),t(),n(47,"table",10)(48,"tr",11)(49,"th",12),e(50,"Nome"),t(),n(51,"th",12),e(52,"Tipo"),t(),n(53,"th",12),e(54,"Padr\xE3o"),t(),n(55,"th",12),e(56,"Descri\xE7\xE3o"),t()(),n(57,"tr",13)(58,"td",14)(59,"div",15)(60,"span",16),e(61," (p-additional-help)"),o(62,"br"),t()(),n(63,"div",17),e(64,"Deprecated"),t()(),n(65,"td",18)(66,"code",19),e(67,"EventEmitter"),t()(),n(68,"td",20),e(69,"-"),t(),n(70,"td",21)(71,"em")(72,"strong"),e(73,"(opcional)"),t()(),n(74,"p"),e(75,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(76,"code"),e(77,"p-help"),t(),e(78,"."),t()()(),n(79,"tr",13)(80,"td",14)(81,"div",22)(82,"span",23),e(83," p-additional-help-tooltip"),o(84,"br"),t()(),n(85,"div",17),e(86,"Deprecated"),t()(),n(87,"td",18)(88,"code",24),e(89,"string"),t()(),n(90,"td",20),e(91,"-"),t(),n(92,"td",21)(93,"em")(94,"strong"),e(95,"(opcional)"),t()(),n(96,"p"),e(97,"Exibe um \xEDcone de ajuda adicional ao "),n(98,"code"),e(99,"p-help"),t(),e(100,`, com o texto desta propriedade no tooltip.
Se o evento `),n(101,"code"),e(102,"p-additional-help"),t(),e(103,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(104,"strong"),e(105,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(106,"blockquote")(107,"p"),e(108,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),n(109,"tr",13)(110,"td",14)(111,"div",22)(112,"span",23),e(113," p-append-in-body"),o(114,"br"),t()()(),n(115,"td",18)(116,"code",25),e(117,"boolean"),t()(),n(118,"td",20)(119,"p")(120,"code"),e(121,"false"),t()()(),n(122,"td",21)(123,"em")(124,"strong"),e(125,"(opcional)"),t()(),n(126,"p"),e(127,"Define que o tooltip ("),n(128,"code"),e(129,"p-additional-help-tooltip"),t(),e(130,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(131,"blockquote")(132,"p"),e(133,"Quando utilizado com "),n(134,"code"),e(135,"p-additional-help-tooltip"),t(),e(136,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(137,"tr",13)(138,"td",14)(139,"div",22)(140,"span",23),e(141," p-auto-focus"),o(142,"br"),t()()(),n(143,"td",18)(144,"code",25),e(145,"boolean"),t()(),n(146,"td",20)(147,"p")(148,"code"),e(149,"false"),t()()(),n(150,"td",21)(151,"em")(152,"strong"),e(153,"(opcional)"),t()(),n(154,"p"),e(155,"Aplica foco no elemento ao ser iniciado."),t(),n(156,"blockquote")(157,"p"),e(158,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(159,"tr",13)(160,"td",14)(161,"div",22)(162,"span",23),e(163," p-auto-upload"),o(164,"br"),t()()(),n(165,"td",18)(166,"code",25),e(167,"boolean"),t()(),n(168,"td",20)(169,"p")(170,"code"),e(171,"false"),t()()(),n(172,"td",21)(173,"em")(174,"strong"),e(175,"(opcional)"),t()(),n(176,"p"),e(177,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(178,"blockquote")(179,"p"),e(180,"Esta propriedade funciona somente se a propriedade "),n(181,"code"),e(182,"p-url"),t(),e(183," tiver um valor atribu\xEDdo."),t()()()(),n(184,"tr",13)(185,"td",14)(186,"div",22)(187,"span",23),e(188," p-custom-action"),o(189,"br"),t()()(),n(190,"td",18)(191,"code",26),e(192,"PoProgressAction"),t()(),n(193,"td",20),e(194,"-"),t(),n(195,"td",21)(196,"em")(197,"strong"),e(198,"(opcional)"),t()(),n(199,"p"),e(200,"Define uma a\xE7\xE3o personalizada no componente "),n(201,"code"),e(202,"po-upload"),t(),e(203,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(204,"p"),e(205,"A a\xE7\xE3o deve implementar a interface "),n(206,"strong"),e(207,"PoProgressAction"),t(),e(208,", permitindo configurar propriedades como:"),t(),n(209,"ul")(210,"li")(211,"code"),e(212,"label"),t(),e(213,": Texto do bot\xE3o."),t(),n(214,"li")(215,"code"),e(216,"icon"),t(),e(217,": \xCDcone a ser exibido no bot\xE3o."),t(),n(218,"li")(219,"code"),e(220,"type"),t(),e(221,": Tipo de bot\xE3o (ex.: "),n(222,"code"),e(223,"danger"),t(),e(224," ou "),n(225,"code"),e(226,"default"),t(),e(227,")."),t(),n(228,"li")(229,"code"),e(230,"disabled"),t(),e(231,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(232,"li")(233,"code"),e(234,"visible"),t(),e(235,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(236,"p")(237,"strong"),e(238,"Exemplo de uso:"),t()(),n(239,"pre")(240,"code",27),e(241,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(242,"pre")(243,"code",28),e(244,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),t()()()(),n(245,"tr",13)(246,"td",14)(247,"div",15)(248,"span",16),e(249," (p-custom-action-click)"),o(250,"br"),t()()(),n(251,"td",18)(252,"code",19),e(253,"EventEmitter"),t()(),n(254,"td",20),e(255,"-"),t(),n(256,"td",21)(257,"em")(258,"strong"),e(259,"(opcional)"),t()(),n(260,"p"),e(261,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(262,"code"),e(263,"p-custom-action"),t(),e(264,"."),t(),n(265,"p"),e(266,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(267,"p")(268,"strong"),e(269,"Exemplo de uso:"),t()(),n(270,"pre")(271,"code",27),e(272,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(273,"pre")(274,"code",28),e(275,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),t()()()(),n(276,"tr",13)(277,"td",14)(278,"div",22)(279,"span",23),e(280," p-directory"),o(281,"br"),t()()(),n(282,"td",18)(283,"code",25),e(284,"boolean"),t()(),n(285,"td",20)(286,"p")(287,"code"),e(288,"false"),t()()(),n(289,"td",21)(290,"em")(291,"strong"),e(292,"(opcional)"),t()(),n(293,"p"),e(294,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(295,"blockquote")(296,"p"),e(297,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(298,"blockquote")(299,"p"),e(300,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(301,"strong"),e(302,"Internet Explorer"),t(),e(303,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(304,"tr",13)(305,"td",14)(306,"div",22)(307,"span",23),e(308," p-disabled"),o(309,"br"),t()()(),n(310,"td",18)(311,"code",25),e(312,"boolean"),t()(),n(313,"td",20),e(314,"-"),t(),n(315,"td",21)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),n(319,"p"),e(320,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(321,"tr",13)(322,"td",14)(323,"div",22)(324,"span",23),e(325," p-disabled-remove-file"),o(326,"br"),t()()(),n(327,"td",18)(328,"code",25),e(329,"boolean"),t()(),n(330,"td",20)(331,"p")(332,"code"),e(333,"false"),t()()(),n(334,"td",21)(335,"em")(336,"strong"),e(337,"(opcional)"),t()(),n(338,"p"),e(339,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(340,"tr",13)(341,"td",14)(342,"div",22)(343,"span",23),e(344," p-drag-drop"),o(345,"br"),t()()(),n(346,"td",18)(347,"code",25),e(348,"boolean"),t()(),n(349,"td",20)(350,"p")(351,"code"),e(352,"false"),t()()(),n(353,"td",21)(354,"em")(355,"strong"),e(356,"(opcional)"),t()(),n(357,"p"),e(358,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(359,"blockquote")(360,"p"),e(361,"Recomendamos utilizar apenas um "),n(362,"code"),e(363,"po-upload"),t(),e(364," com esta funcionalidade por tela."),t()()()(),n(365,"tr",13)(366,"td",14)(367,"div",22)(368,"span",23),e(369," p-drag-drop-height"),o(370,"br"),t()()(),n(371,"td",18)(372,"code",29),e(373,"number"),t()(),n(374,"td",20)(375,"p")(376,"code"),e(377,"320"),t()()(),n(378,"td",21)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),n(382,"p"),e(383,"Define em "),n(384,"em"),e(385,"pixels"),t(),e(386," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(387,"code"),e(388,"160px"),t(),e(389,"."),t(),n(390,"blockquote")(391,"p"),e(392,"Esta propriedade funciona somente se a propriedade "),n(393,"code"),e(394,"p-drag-drop"),t(),e(395," estiver habilitada."),t()()()(),n(396,"tr",13)(397,"td",14)(398,"div",22)(399,"span",23),e(400," p-restrictions"),o(401,"br"),t()()(),n(402,"td",18)(403,"code",30),e(404,"PoUploadFileRestrictions"),t()(),n(405,"td",20),e(406,"-"),t(),n(407,"td",21)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),n(411,"p"),e(412,"Objeto que segue a defini\xE7\xE3o da interface "),n(413,"code"),e(414,"PoUploadFileRestrictions"),t(),e(415,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(416,"tr",13)(417,"td",14)(418,"div",22)(419,"span",23),e(420," p-form-field"),o(421,"br"),t()()(),n(422,"td",18)(423,"code",24),e(424,"string"),t()(),n(425,"td",20)(426,"p")(427,"code"),e(428,"files"),t()()(),n(429,"td",21)(430,"em")(431,"strong"),e(432,"(opcional)"),t()(),n(433,"p"),e(434,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(435,"code"),e(436,"p-url"),t(),e(437,"."),t()()(),n(438,"tr",13)(439,"td",14)(440,"div",22)(441,"span",23),e(442," p-headers"),o(443,"br"),t()()(),n(444,"td",18)(445,"code",31),e(446,"{ [name: string]: string "),t(),n(447,"code",32),e(448,` Array<string>;
}`),t()(),n(449,"td",20),e(450,"-"),t(),n(451,"td",21)(452,"p"),e(453,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(454,"tr",13)(455,"td",14)(456,"div",22)(457,"span",23),e(458," p-help"),o(459,"br"),t()()(),n(460,"td",18)(461,"code",24),e(462,"string"),t()(),n(463,"td",20),e(464,"-"),t(),n(465,"td",21)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),n(469,"p"),e(470,"Texto de apoio para o campo."),t()()(),n(471,"tr",13)(472,"td",14)(473,"div",22)(474,"span",23),e(475," p-hide-restrictions-info"),o(476,"br"),t()()(),n(477,"td",18)(478,"code",25),e(479,"boolean"),t()(),n(480,"td",20)(481,"p")(482,"code"),e(483,"false"),t()()(),n(484,"td",21)(485,"em")(486,"strong"),e(487,"(opcional)"),t()(),n(488,"p"),e(489,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(490,"tr",13)(491,"td",14)(492,"div",22)(493,"span",23),e(494," p-hide-select-button"),o(495,"br"),t()()(),n(496,"td",18)(497,"code",25),e(498,"boolean"),t()(),n(499,"td",20)(500,"p")(501,"code"),e(502,"false"),t()()(),n(503,"td",21)(504,"em")(505,"strong"),e(506,"(opcional)"),t()(),n(507,"p"),e(508,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(509,"blockquote")(510,"p"),e(511,"Caso o valor definido seja "),n(512,"code"),e(513,"true"),t(),e(514,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(515,"code"),e(516,"selectFiles()"),t(),e(517," para sele\xE7\xE3o de arquivos."),t()()()(),n(518,"tr",13)(519,"td",14)(520,"div",22)(521,"span",23),e(522," p-hide-send-button"),o(523,"br"),t()()(),n(524,"td",18)(525,"code",25),e(526,"boolean"),t()(),n(527,"td",20)(528,"p")(529,"code"),e(530,"false"),t()()(),n(531,"td",21)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),n(535,"p"),e(536,"Omite o bot\xE3o de envio de arquivos."),t(),n(537,"blockquote")(538,"p"),e(539,"Caso o valor definido seja "),n(540,"code"),e(541,"true"),t(),e(542,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(543,"code"),e(544,"sendFiles()"),t(),e(545," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(546,"tr",13)(547,"td",14)(548,"div",22)(549,"span",23),e(550," p-multiple"),o(551,"br"),t()()(),n(552,"td",18)(553,"code",25),e(554,"boolean"),t()(),n(555,"td",20),e(556,"-"),t(),n(557,"td",21)(558,"em")(559,"strong"),e(560,"(opcional)"),t()(),n(561,"p"),e(562,"Define se pode selecionar mais de um arquivo."),t(),n(563,"blockquote")(564,"p"),e(565,"Se utilizada a "),n(566,"code"),e(567,"p-directory"),t(),e(568,", habilita-se automaticamente esta propriedade."),t()()()(),n(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),e(573," (p-keydown)"),o(574,"br"),t()()(),n(575,"td",18)(576,"code",19),e(577,"EventEmitter"),t()(),n(578,"td",20),e(579,"-"),t(),n(580,"td",21)(581,"em")(582,"strong"),e(583,"(opcional)"),t()(),n(584,"p"),e(585,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(586,"code"),e(587,"KeyboardEvent"),t(),e(588," com informa\xE7\xF5es sobre a tecla."),t()()(),n(589,"tr",13)(590,"td",14)(591,"div",22)(592,"span",23),e(593," p-label"),o(594,"br"),t()()(),n(595,"td",18)(596,"code",24),e(597,"string"),t()(),n(598,"td",20),e(599,"-"),t(),n(600,"td",21)(601,"em")(602,"strong"),e(603,"(opcional)"),t()(),n(604,"p"),e(605,"R\xF3tulo do campo."),t()()(),n(606,"tr",13)(607,"td",14)(608,"div",22)(609,"span",23),e(610," p-label-text-wrap"),o(611,"br"),t()()(),n(612,"td",18)(613,"code",25),e(614,"boolean"),t()(),n(615,"td",20)(616,"p")(617,"code"),e(618,"false"),t()()(),n(619,"td",21)(620,"em")(621,"strong"),e(622,"(opcional)"),t()(),n(623,"p"),e(624,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(625,"code"),e(626,"p-label"),t(),e(627,". Quando "),n(628,"code"),e(629,"p-label-text-wrap"),t(),e(630,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(631,"tr",13)(632,"td",14)(633,"div",22)(634,"span",23),e(635," p-literals"),o(636,"br"),t()()(),n(637,"td",18)(638,"code",33),e(639,"PoUploadLiterals"),t()(),n(640,"td",20),e(641,"-"),t(),n(642,"td",21)(643,"em")(644,"strong"),e(645,"(opcional)"),t()(),n(646,"p"),e(647,"Objeto com as literais usadas no "),n(648,"code"),e(649,"po-upload"),t(),e(650,"."),t(),n(651,"p"),e(652,"Existem duas maneiras de customizar o componente:"),t(),n(653,"ul")(654,"li"),e(655,"passando um objeto implementando a interface "),n(656,"code"),e(657,"PoUploadLiterals"),t(),e(658," com todas as literais dispon\xEDveis;"),t(),n(659,"li"),e(660,"passando apenas as literais que deseja customizar:"),n(661,"pre")(662,"code"),e(663,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),t()()()(),n(664,"p"),e(665,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(666,"pre")(667,"code"),e(668,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),t()(),n(669,"blockquote")(670,"p"),e(671,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(672,"em"),e(673,"browser"),t(),e(674," (pt, en, es, ru)."),t()()()(),n(675,"tr",13)(676,"td",14)(677,"div",22)(678,"span",23),e(679," name"),o(680,"br"),t()()(),n(681,"td",18)(682,"code",24),e(683,"string"),t()(),n(684,"td",20),e(685,"-"),t(),n(686,"td",21)(687,"p"),e(688,"Define o valor do atributo "),n(689,"code"),e(690,"name"),t(),e(691," do componente."),t()()(),n(692,"tr",13)(693,"td",14)(694,"div",15)(695,"span",16),e(696," (ngModelChange)"),o(697,"br"),t()()(),n(698,"td",18)(699,"code",19),e(700,"EventEmitter"),t()(),n(701,"td",20),e(702,"-"),t(),n(703,"td",21)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),n(707,"p"),e(708,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(709,"em"),e(710,"tag"),t(),n(711,"code"),e(712,"form"),t(),e(713,"."),t(),n(714,"p"),e(715,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(716,"code"),e(717,"strictTemplates"),t(),e(718,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(719,"pre")(720,"code"),e(721,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),t()()()(),n(722,"tr",13)(723,"td",14)(724,"div",15)(725,"span",16),e(726," (p-error)"),o(727,"br"),t()()(),n(728,"td",18)(729,"code",19),e(730,"EventEmitter"),t()(),n(731,"td",20),e(732,"-"),t(),n(733,"td",21)(734,"em")(735,"strong"),e(736,"(opcional)"),t()(),n(737,"p"),e(738,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(739,"blockquote")(740,"p"),e(741,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(742,"code"),e(743,"HttpErrorResponse"),t(),e(744,"."),t()()()(),n(745,"tr",13)(746,"td",14)(747,"div",15)(748,"span",16),e(749," (p-success)"),o(750,"br"),t()()(),n(751,"td",18)(752,"code",19),e(753,"EventEmitter"),t()(),n(754,"td",20),e(755,"-"),t(),n(756,"td",21)(757,"em")(758,"strong"),e(759,"(opcional)"),t()(),n(760,"p"),e(761,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(762,"blockquote")(763,"p"),e(764,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(765,"code"),e(766,"HttpResponse"),t(),e(767,"."),t()()()(),n(768,"tr",13)(769,"td",14)(770,"div",15)(771,"span",16),e(772," (p-upload)"),o(773,"br"),t()()(),n(774,"td",18)(775,"code",19),e(776,"EventEmitter"),t()(),n(777,"td",20),e(778,"-"),t(),n(779,"td",21)(780,"em")(781,"strong"),e(782,"(opcional)"),t()(),n(783,"p"),e(784,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(785,"blockquote")(786,"p"),e(787,"data, nesta propriedade pode ser informado algum dado"),t()(),n(788,"pre")(789,"code"),e(790,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(791,"blockquote")(792,"p"),e(793,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(794,"code"),e(795,"data"),t(),e(796,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(797,"pre")(798,"code"),e(799,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),t()()()(),n(800,"tr",13)(801,"td",14)(802,"div",22)(803,"span",23),e(804," p-optional"),o(805,"br"),t()()(),n(806,"td",18)(807,"code",25),e(808,"boolean"),t()(),n(809,"td",20)(810,"p")(811,"code"),e(812,"false"),t()()(),n(813,"td",21)(814,"em")(815,"strong"),e(816,"(opcional)"),t()(),n(817,"p"),e(818,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(819,"blockquote")(820,"p"),e(821,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(822,"ul")(823,"li"),e(824,"O campo conter "),n(825,"code"),e(826,"p-required"),t(),e(827,";"),t(),n(828,"li"),e(829,"N\xE3o possuir "),n(830,"code"),e(831,"p-help"),t(),e(832," e/ou "),n(833,"code"),e(834,"p-label"),t(),e(835,"."),t()()()(),n(836,"tr",13)(837,"td",14)(838,"div",22)(839,"span",23),e(840," p-helper"),o(841,"br"),t()()(),n(842,"td",18)(843,"code",34),e(844,"PoHelperOptions"),t()(),n(845,"td",20),e(846,"-"),t(),n(847,"td",21)(848,"em")(849,"strong"),e(850,"(opcional)"),t()(),n(851,"p"),e(852,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),n(853,"blockquote")(854,"p"),e(855,"Caso o "),n(856,"code"),e(857,"p-label"),t(),e(858,` n\xE3o esteja definido, o componente po-helper n\xE3o ser\xE1 exibido.
Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional (`),n(859,"code"),e(860,"p-additional-help-tooltip"),t(),e(861," e "),n(862,"code"),e(863,"p-additional-help"),t(),e(864,") ser\xE1 ignorado."),t()()()(),n(865,"tr",13)(866,"td",14)(867,"div",22)(868,"span",23),e(869," p-required"),o(870,"br"),t()()(),n(871,"td",18)(872,"code",25),e(873,"boolean"),t()(),n(874,"td",20)(875,"p")(876,"code"),e(877,"false"),t()()(),n(878,"td",21)(879,"em")(880,"strong"),e(881,"(opcional)"),t()(),n(882,"p"),e(883,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(884,"tr",13)(885,"td",14)(886,"div",22)(887,"span",23),e(888," p-required-url"),o(889,"br"),t()()(),n(890,"td",18)(891,"code",25),e(892,"boolean"),t()(),n(893,"td",20)(894,"p")(895,"code"),e(896,"true"),t()()(),n(897,"td",21)(898,"em")(899,"strong"),e(900,"(opcional)"),t()(),n(901,"p"),e(902,"Define se a propriedade "),n(903,"code"),e(904,"p-url"),t(),e(905," \xE9 obrigat\xF3ria."),t(),n(906,"p"),e(907,"Caso a propriedade seja definida como "),n(908,"code"),e(909,"false"),t(),e(910,":"),t(),n(911,"ul")(912,"li"),e(913,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(914,"code"),e(915,"p-url"),t(),e(916," definida."),t(),n(917,"li"),e(918,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(919,"code"),e(920,"p-url"),t(),e(921," seja definida."),t()(),n(922,"blockquote")(923,"p"),e(924,"Se utilizada com a propriedade "),n(925,"code"),e(926,"p-auto-upload"),t(),e(927," definida como "),n(928,"code"),e(929,"true"),t(),e(930," ser\xE1 necess\xE1rio definir a propriedade "),n(931,"code"),e(932,"p-url"),t(),e(933,"."),t()()()(),n(934,"tr",13)(935,"td",14)(936,"div",22)(937,"span",23),e(938," p-show-required"),o(939,"br"),t()()(),n(940,"td",18)(941,"code",25),e(942,"boolean"),t()(),n(943,"td",20),e(944,"-"),t(),n(945,"td",21)(946,"p"),e(947,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(948,"blockquote")(949,"p"),e(950,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(951,"ul")(952,"li"),e(953,"N\xE3o possuir "),n(954,"code"),e(955,"p-help"),t(),e(956," e/ou "),n(957,"code"),e(958,"p-label"),t(),e(959,"."),t()()()(),n(960,"tr",13)(961,"td",14)(962,"div",22)(963,"span",23),e(964," p-size"),o(965,"br"),t()()(),n(966,"td",18)(967,"code",24),e(968,"string"),t()(),n(969,"td",20)(970,"p")(971,"code"),e(972,"medium"),t()()(),n(973,"td",21)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),n(977,"p"),e(978,"Define o tamanho e as a\xE7\xF5es do componente:"),t(),n(979,"ul")(980,"li")(981,"code"),e(982,"small"),t(),e(983,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(984,"li")(985,"code"),e(986,"medium"),t(),e(987,": altura do button como 44px."),t()(),n(988,"blockquote")(989,"p"),e(990,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(991,"code"),e(992,"medium"),t(),e(993,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(994,"a",35),e(995,"po-theme"),t(),e(996,"."),t()()()(),n(997,"tr",13)(998,"td",14)(999,"div",22)(1e3,"span",23),e(1001," p-url"),o(1002,"br"),t()()(),n(1003,"td",18)(1004,"code",24),e(1005,"string"),t()(),n(1006,"td",20),e(1007,"-"),t(),n(1008,"td",21)(1009,"p"),e(1010,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(1011,"h3",9),e(1012,"M\xE9todos"),t(),n(1013,"table",36)(1014,"tr",13)(1015,"th",37)(1016,"div",22)(1017,"h4")(1018,"span",23),e(1019," clear "),t()()()()(),n(1020,"tr",21)(1021,"td",21)(1022,"p"),e(1023,"M\xE9todo respons\xE1vel por "),n(1024,"strong"),e(1025,"limpar"),t(),e(1026," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1027,"br"),n(1028,"table",36)(1029,"tr",13)(1030,"th",37)(1031,"div",22)(1032,"h4")(1033,"span",23),e(1034," focus "),t()()()()(),n(1035,"tr",21)(1036,"td",21)(1037,"p"),e(1038,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1039,"p"),e(1040,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1041,"pre")(1042,"code"),e(1043,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),t()()()()(),o(1044,"br"),n(1045,"table",36)(1046,"tr",13)(1047,"th",37)(1048,"div",22)(1049,"h4")(1050,"span",23),e(1051," selectFiles "),t()()()()(),n(1052,"tr",21)(1053,"td",21)(1054,"p"),e(1055,"M\xE9todo respons\xE1vel por "),n(1056,"strong"),e(1057,"abrir"),t(),e(1058," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(1059,"br"),n(1060,"table",36)(1061,"tr",13)(1062,"th",37)(1063,"div",22)(1064,"h4")(1065,"span",23),e(1066," sendFiles "),t()()()()(),n(1067,"tr",21)(1068,"td",21)(1069,"p"),e(1070,"M\xE9todo respons\xE1vel por "),n(1071,"strong"),e(1072,"enviar"),t(),e(1073," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1074,"br"),n(1075,"h3"),e(1076,"Interfaces"),t(),n(1077,"h4",38)(1078,"code",5),e(1079,"PoUploadFileRestrictions"),t()(),n(1080,"div",2)(1081,"p"),e(1082,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(1083,"h4",9),e(1084,"Propriedades"),t(),n(1085,"table",10)(1086,"tr",11)(1087,"th",12),e(1088,"Nome"),t(),n(1089,"th",12),e(1090,"Tipo"),t(),n(1091,"th",12),e(1092,"Descri\xE7\xE3o"),t()(),n(1093,"tr",13)(1094,"td",14)(1095,"div",22)(1096,"span",23),e(1097," allowedExtensions"),o(1098,"br"),t()()(),n(1099,"td",18)(1100,"code",39),e(1101,"Array<string>"),t()(),n(1102,"td",21)(1103,"em")(1104,"strong"),e(1105,"(opcional)"),t()(),n(1106,"p"),e(1107,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(1108,"pre")(1109,"code"),e(1110,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),t()()()(),n(1111,"tr",13)(1112,"td",14)(1113,"div",22)(1114,"span",23),e(1115," maxFileSize"),o(1116,"br"),t()()(),n(1117,"td",18)(1118,"code",29),e(1119,"number"),t()(),n(1120,"td",21)(1121,"em")(1122,"strong"),e(1123,"(opcional)"),t()(),n(1124,"p"),e(1125,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(1126,"p"),e(1127,"Deve ser informado um valor em "),n(1128,"em"),e(1129,"bytes"),t(),e(1130,", por exemplo: "),n(1131,"code"),e(1132,"31457280"),t(),e(1133," (30MB)."),t(),n(1134,"blockquote")(1135,"p"),e(1136,"Por padr\xE3o o valor \xE9 "),n(1137,"code"),e(1138,"30 MB"),t(),e(1139,"."),t()()()(),n(1140,"tr",13)(1141,"td",14)(1142,"div",22)(1143,"span",23),e(1144," maxFiles"),o(1145,"br"),t()()(),n(1146,"td",18)(1147,"code",29),e(1148,"number"),t()(),n(1149,"td",21)(1150,"em")(1151,"strong"),e(1152,"(opcional)"),t()(),n(1153,"p"),e(1154,"Quantidade m\xE1xima de arquivos para o "),n(1155,"em"),e(1156,"upload"),t(),e(1157,"."),t(),n(1158,"blockquote")(1159,"p"),e(1160,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(1161,"code"),e(1162,"p-multiple"),t(),e(1163," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(1164,"tr",13)(1165,"td",14)(1166,"div",22)(1167,"span",23),e(1168," minFileSize"),o(1169,"br"),t()()(),n(1170,"td",18)(1171,"code",29),e(1172,"number"),t()(),n(1173,"td",21)(1174,"em")(1175,"strong"),e(1176,"(opcional)"),t()(),n(1177,"p"),e(1178,"Tamanho m\xEDnimo em "),n(1179,"em"),e(1180,"bytes"),t(),e(1181," do arquivo que ser\xE1 enviado ao servidor."),t(),n(1182,"blockquote")(1183,"p"),e(1184,"Por padr\xE3o o valor \xE9 "),n(1185,"code"),e(1186,"0"),t(),e(1187,"."),t()()()()(),n(1188,"h4",38)(1189,"code",5),e(1190,"PoUploadLiterals"),t()(),n(1191,"div",2)(1192,"p"),e(1193,"Interface para defini\xE7\xE3o das literais usadas no "),n(1194,"code"),e(1195,"po-upload"),t(),e(1196,"."),t()(),n(1197,"h4",9),e(1198,"Propriedades"),t(),n(1199,"table",10)(1200,"tr",11)(1201,"th",12),e(1202,"Nome"),t(),n(1203,"th",12),e(1204,"Tipo"),t(),n(1205,"th",12),e(1206,"Descri\xE7\xE3o"),t()(),n(1207,"tr",13)(1208,"td",14)(1209,"div",22)(1210,"span",23),e(1211," dragFilesHere"),o(1212,"br"),t()()(),n(1213,"td",18)(1214,"code",24),e(1215,"string"),t()(),n(1216,"td",21)(1217,"em")(1218,"strong"),e(1219,"(opcional)"),t()(),n(1220,"p"),e(1221,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1222,"code"),e(1223,"p-drag-drop"),t(),e(1224,"."),t()()(),n(1225,"tr",13)(1226,"td",14)(1227,"div",22)(1228,"span",23),e(1229," dragFoldersHere"),o(1230,"br"),t()()(),n(1231,"td",18)(1232,"code",24),e(1233,"string"),t()(),n(1234,"td",21)(1235,"em")(1236,"strong"),e(1237,"(opcional)"),t()(),n(1238,"p"),e(1239,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1240,"code"),e(1241,"p-drag-drop"),t(),e(1242,"."),t()()(),n(1243,"tr",13)(1244,"td",14)(1245,"div",22)(1246,"span",23),e(1247," dropFilesHere"),o(1248,"br"),t()()(),n(1249,"td",18)(1250,"code",24),e(1251,"string"),t()(),n(1252,"td",21)(1253,"em")(1254,"strong"),e(1255,"(opcional)"),t()(),n(1256,"p"),e(1257,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1258,"code"),e(1259,"p-drag-drop"),t()()()(),n(1260,"tr",13)(1261,"td",14)(1262,"div",22)(1263,"span",23),e(1264," dropFoldersHere"),o(1265,"br"),t()()(),n(1266,"td",18)(1267,"code",24),e(1268,"string"),t()(),n(1269,"td",21)(1270,"em")(1271,"strong"),e(1272,"(opcional)"),t()(),n(1273,"p"),e(1274,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1275,"code"),e(1276,"p-drag-drop"),t(),e(1277,"."),t()()(),n(1278,"tr",13)(1279,"td",14)(1280,"div",22)(1281,"span",23),e(1282," errorOccurred"),o(1283,"br"),t()()(),n(1284,"td",18)(1285,"code",24),e(1286,"string"),t()(),n(1287,"td",21)(1288,"em")(1289,"strong"),e(1290,"(opcional)"),t()(),n(1291,"p"),e(1292,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1293,"tr",13)(1294,"td",14)(1295,"div",22)(1296,"span",23),e(1297," files"),o(1298,"br"),t()()(),n(1299,"td",18)(1300,"code",24),e(1301,"string"),t()(),n(1302,"td",21)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),n(1306,"p"),e(1307,"Par\xE2metro "),n(1308,"em"),e(1309,"files"),t(),e(1310," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1311,"em"),e(1312,"dragDrop"),t(),e(1313,"."),t()()(),n(1314,"tr",13)(1315,"td",14)(1316,"div",22)(1317,"span",23),e(1318," folders"),o(1319,"br"),t()()(),n(1320,"td",18)(1321,"code",24),e(1322,"string"),t()(),n(1323,"td",21)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),t()(),n(1327,"p"),e(1328,"Par\xE2metro "),n(1329,"em"),e(1330,"folders"),t(),e(1331," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1332,"em"),e(1333,"dragDrop"),t(),e(1334,"."),t()()(),n(1335,"tr",13)(1336,"td",14)(1337,"div",22)(1338,"span",23),e(1339," invalidDropArea"),o(1340,"br"),t()()(),n(1341,"td",18)(1342,"code",24),e(1343,"string"),t()(),n(1344,"td",21)(1345,"em")(1346,"strong"),e(1347,"(opcional)"),t()(),n(1348,"p"),e(1349,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1350,"em"),e(1351,"dragDrop"),t(),e(1352,"."),t()()(),n(1353,"tr",13)(1354,"td",14)(1355,"div",22)(1356,"span",23),e(1357," selectFile"),o(1358,"br"),t()()(),n(1359,"td",18)(1360,"code",24),e(1361,"string"),t()(),n(1362,"td",21)(1363,"em")(1364,"strong"),e(1365,"(opcional)"),t()(),n(1366,"p"),e(1367,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(1368,"tr",13)(1369,"td",14)(1370,"div",22)(1371,"span",23),e(1372," selectFiles"),o(1373,"br"),t()()(),n(1374,"td",18)(1375,"code",24),e(1376,"string"),t()(),n(1377,"td",21)(1378,"em")(1379,"strong"),e(1380,"(opcional)"),t()(),n(1381,"p"),e(1382,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1383,"code"),e(1384,"p-multiple"),t(),e(1385,"."),t()()(),n(1386,"tr",13)(1387,"td",14)(1388,"div",22)(1389,"span",23),e(1390," selectFilesOnComputer"),o(1391,"br"),t()()(),n(1392,"td",18)(1393,"code",24),e(1394,"string"),t()(),n(1395,"td",21)(1396,"em")(1397,"strong"),e(1398,"(opcional)"),t()(),n(1399,"p"),e(1400,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1401,"em"),e(1402,"dragDrop"),t(),e(1403,"."),t()()(),n(1404,"tr",13)(1405,"td",14)(1406,"div",22)(1407,"span",23),e(1408," selectFolder"),o(1409,"br"),t()()(),n(1410,"td",18)(1411,"code",24),e(1412,"string"),t()(),n(1413,"td",21)(1414,"em")(1415,"strong"),e(1416,"(opcional)"),t()(),n(1417,"p"),e(1418,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(1419,"code"),e(1420,"p-directory"),t(),e(1421,"."),t()()(),n(1422,"tr",13)(1423,"td",14)(1424,"div",22)(1425,"span",23),e(1426," selectFolderOnComputer"),o(1427,"br"),t()()(),n(1428,"td",18)(1429,"code",24),e(1430,"string"),t()(),n(1431,"td",21)(1432,"em")(1433,"strong"),e(1434,"(opcional)"),t()(),n(1435,"p"),e(1436,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(1437,"em"),e(1438,"dragDrop"),t(),e(1439,"."),t()()(),n(1440,"tr",13)(1441,"td",14)(1442,"div",22)(1443,"span",23),e(1444," sentWithSuccess"),o(1445,"br"),t()()(),n(1446,"td",18)(1447,"code",24),e(1448,"string"),t()(),n(1449,"td",21)(1450,"em")(1451,"strong"),e(1452,"(opcional)"),t()(),n(1453,"p"),e(1454,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(1455,"tr",13)(1456,"td",14)(1457,"div",22)(1458,"span",23),e(1459," startSending"),o(1460,"br"),t()()(),n(1461,"td",18)(1462,"code",24),e(1463,"string"),t()(),n(1464,"td",21)(1465,"em")(1466,"strong"),e(1467,"(opcional)"),t()(),n(1468,"p"),e(1469,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()()(),n(1470,"h4",38)(1471,"code",5),e(1472,"PoProgressAction"),t()(),n(1473,"div",2)(1474,"p"),e(1475,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(1476,"h4",9),e(1477,"Propriedades"),t(),n(1478,"table",10)(1479,"tr",11)(1480,"th",12),e(1481,"Nome"),t(),n(1482,"th",12),e(1483,"Tipo"),t(),n(1484,"th",12),e(1485,"Descri\xE7\xE3o"),t()(),n(1486,"tr",13)(1487,"td",14)(1488,"div",22)(1489,"span",23),e(1490," disabled"),o(1491,"br"),t()()(),n(1492,"td",18)(1493,"code",25),e(1494,"boolean "),t(),n(1495,"code",40),e(1496," Function"),t()(),n(1497,"td",21)(1498,"em")(1499,"strong"),e(1500,"(opcional)"),t()(),n(1501,"p"),e(1502,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(1503,"p"),e(1504,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(1505,"tr",13)(1506,"td",14)(1507,"div",22)(1508,"span",23),e(1509," icon"),o(1510,"br"),t()()(),n(1511,"td",18)(1512,"code",24),e(1513,"string "),t(),n(1514,"code",41),e(1515," TemplateRef<void>"),t()(),n(1516,"td",21)(1517,"em")(1518,"strong"),e(1519,"(opcional)"),t()(),n(1520,"p"),e(1521,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(1522,"p"),e(1523,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(1524,"a",42),e(1525,"Biblioteca de \xEDcones"),t(),e(1526,". conforme exemplo abaixo:"),t(),n(1527,"pre")(1528,"code"),e(1529,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(1530,"p"),e(1531,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(1532,"pre")(1533,"code"),e(1534,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(1535,"p"),e(1536,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(1537,"code"),e(1538,"TemplateRef"),t(),e(1539,`, conforme exemplo abaixo:
component.html:`),t(),n(1540,"pre")(1541,"code"),e(1542,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(1543,"p"),e(1544,"component.ts:"),t(),n(1545,"pre")(1546,"code"),e(1547,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(1548,"tr",13)(1549,"td",14)(1550,"div",22)(1551,"span",23),e(1552," label"),o(1553,"br"),t()()(),n(1554,"td",18)(1555,"code",24),e(1556,"string"),t()(),n(1557,"td",21)(1558,"em")(1559,"strong"),e(1560,"(opcional)"),t()(),n(1561,"p"),e(1562,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(1563,"tr",13)(1564,"td",14)(1565,"div",22)(1566,"span",23),e(1567," type"),o(1568,"br"),t()()(),n(1569,"td",18)(1570,"code",24),e(1571,"string"),t()(),n(1572,"td",21)(1573,"em")(1574,"strong"),e(1575,"(opcional)"),t()(),n(1576,"p"),e(1577,"Define a cor do item, sendo "),n(1578,"code"),e(1579,"default"),t(),e(1580," o padr\xE3o."),t(),n(1581,"p"),e(1582,"Valores v\xE1lidos:"),t(),n(1583,"ul")(1584,"li")(1585,"code"),e(1586,"default"),t()(),n(1587,"li")(1588,"code"),e(1589,"danger"),t(),e(1590," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(1591,"tr",13)(1592,"td",14)(1593,"div",22)(1594,"span",23),e(1595," visible"),o(1596,"br"),t()()(),n(1597,"td",18)(1598,"code",25),e(1599,"boolean "),t(),n(1600,"code",40),e(1601," Function"),t()(),n(1602,"td",21)(1603,"em")(1604,"strong"),e(1605,"(opcional)"),t()(),n(1606,"p"),e(1607,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(1608,"blockquote")(1609,"p"),e(1610,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(1611,"p"),e(1612,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(1613,"ul")(1614,"li")(1615,"p"),e(1616,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(1617,"li")(1618,"p"),e(1619,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[y],encapsulation:2})}return l})();var Re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)($(de),$(se))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view"),t()()()),r&2&&(E("p-actions",i.actions),s(2),E("p-active",i.activeTab==="doc"),s(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[fe,w,_,ye,Me,Te,Ue,Le,Ve],encapsulation:2})}return l})();var st=[{path:"",component:Re}],ze=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=I({imports:[ee.forChild(st),ee]})}return l})();var Yt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=G({type:l});static \u0275inj=I({imports:[we,ze]})}return l})();export{Yt as DocPoUploadModule};
