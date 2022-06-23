import{n as l,d as p,_ as c}from"./vendor.d298d7b0.js";import{E as u}from"./ErrorsDetailAreaChart.27ff2418.js";import{V as m,a as v,b as g,P as h}from"./PageResultCell.9bead252.js";import{R as b}from"./RequestBarChart.cc701873.js";import{D as _}from"./DataSampleDate.822e2357.js";import{D as C}from"./DataSampleDevice.9c89c782.js";import{R as y,S as w}from"./SimpleBarChart.24f64a98.js";import{S as F}from"./SampleRangePicker.21b89632.js";import{S as x}from"./SamplePaneFooter.d8765632.js";import"./tri-color-blend.3ecffd12.js";var S=[{name:"__slot:error-date",sortField:"dateCreated",title:"Error Date",titleClass:"text-left",dataClass:"text-left align-top",width:"15%"},{name:"__slot:error-sample",sortField:"pageErrors",title:"Errors",titleClass:"text-left",dataClass:"text-left align-top",width:"42%"},{name:"__slot:sample-device",sortField:"device",title:"Device",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"os",sortField:"os",title:"OS",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"browser",sortField:"browser",title:"Browser",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"countryCode",sortField:"countryCode",title:"Country",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center align-top",callback:"deleteFormatter",width:"3%"},{name:"maxTotalPageLoad",visible:!1},{name:"domInteractive",visible:!1},{name:"firstContentfulPaint",visible:!1},{name:"firstPaint",visible:!1},{name:"firstByte",visible:!1},{name:"connect",visible:!1},{name:"dns",visible:!1},{name:"mobile",visible:!1}],D=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.parsedErrors?t("div",[e.type==="craft"?t("div",[t("h4",{staticClass:"text-red-300 m-0"},[e._v(" Craft Errors: ")]),e._l(e.parsedErrors,function(a,i){return t("div",{key:i},[t("div",{staticClass:"field text-sm font-normal inline-block pt-2"},[t("p",{staticClass:"warning display-block",class:[a.level==="error"?"webperf-error-color":""]},[e._v(" "+e._s(e.uppercaseFirstChar(a.level))+" \u2192 "+e._s(a.message)+" ")]),t("p",{staticClass:"m-0 text-gray-600"},[e._v(" From \u2192 "+e._s(a.category)+" ")])])])})],2):e.type==="boomerang"?t("div",[t("h4",{staticClass:"text-green-300 m-0"},[e._v(" JavaScript Errors: ")]),e._l(e.parsedErrors,function(a,i){return t("div",{key:i},[t("div",{staticClass:"field text-sm font-normal inline-block pt-2"},[t("p",{staticClass:"warning display-block webperf-error-color"},[e._v(" Error \u2192 "+e._s(a.t)+" "+e._s(a.c)+" "+e._s(a.m)+" "+e._s(a.x)+" ")]),t("p",{staticClass:"m-0 text-gray-600"},[e._v(" Stack Trace \u2192 "),t("ul",{staticClass:"list-reset"},e._l(a.f,function(s,f){return t("li",{key:f,staticClass:"text-gray-600 pl-2"},[e._v(" "+e._s(s.l)+":"+e._s(s.c)+" "+e._s(s.f)+" "+e._s(s.w)+" "+e._s(s.wo)+" ")])}),0)])])])})],2):e._e()]):t("div",[t("span",[t("code",[e._v(" "+e._s(e.pageErrors)+" ")])])])])},$=[];const P={name:"ErrorSample",props:{pageErrors:{type:String,default:""},type:{type:String,default:""}},data:function(){return{parsedErrors:void 0}},mounted(){try{this.parsedErrors=JSON.parse(this.pageErrors)}catch(e){console.log(e.message)}},methods:{uppercaseFirstChar(e){return e.charAt(0).toUpperCase()+e.slice(1)}}},o={};var E=l(P,D,$,!1,k,null,null,null);function k(e){for(let r in o)this[r]=o[r]}var R=function(){return E.exports}(),T=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"py-4"},[t("vuetable-filter-bar"),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfoTop",attrs:{"info-template":"Displaying {from} to {to} of {total} data samples"}}),t("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":e.onChangePage}})],1),t("div",{staticClass:"overflow-x-auto overflow-y-hidden"},[t("vuetable",{ref:"vuetable",attrs:{"api-url":e.apiUrl,"append-params":e.moreParams,css:e.css,fields:e.fields,"per-page":20,"sort-order":e.sortOrder},on:{"vuetable:pagination-data":e.onPaginationData,"vuetable:row-clicked":e.onRowClicked,"vuetable:loaded":e.onLoaded},scopedSlots:e._u([{key:"error-date",fn:function(a){return[t("data-sample-date",{attrs:{date:a.rowData.dateCreated,query:a.rowData.query,url:a.rowData.url}})]}},{key:"error-sample",fn:function(a){return[t("error-sample",{attrs:{"page-errors":a.rowData.pageErrors,type:a.rowData.type}})]}},{key:"sample-device",fn:function(a){return[t("data-sample-device",{attrs:{device:a.rowData.device,mobile:a.rowData.mobile}})]}},{key:"load-time-bar",fn:function(a){return[t("request-bar-chart",{attrs:{"row-data":a.rowData}})]}}])})],1),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfo",attrs:{"info-template":"Displaying {from} to {to} of {total} data samples"}}),t("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)},j=[];const I={components:{vuetable:p,"vuetable-pagination":m,"vuetable-pagination-info":v,"vuetable-filter-bar":g,"request-bar-chart":b,"page-result-cell":h,"data-sample-date":_,"data-sample-device":C,"error-sample":R},props:{start:{type:String,default:""},end:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:{type:Number,default:1e4},pageUrl:{type:String,default:""},siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId,pageUrl:this.pageUrl,start:this.start,end:this.end,filter:""},css:{tableClass:"data fullwidth webperf-page-detail",ascendingIcon:"menubtn webperf-menubtn-asc",descendingIcon:"menubtn webperf-menubtn-desc"},sortOrder:[{field:"__slot:error-date",sortField:"dateCreated",direction:"desc"}],fields:S}},mounted(){this.$events.$on("filter-set",e=>this.onFilterSet(e)),this.$events.$on("filter-reset",()=>this.onFilterReset()),this.$events.$on("change-range",e=>this.onChangeRange(e))},methods:{onFilterSet(e){this.moreParams.filter=e,this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.moreParams.filter="",this.$events.fire("refresh-table",this.$refs.vuetable)},onLoaded(){this.$events.fire("refresh-table-components",this.$refs.vuetable)},onPaginationData(e){this.$refs.paginationTop.setPaginationData(e),this.$refs.paginationInfoTop.setPaginationData(e),this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage(e){this.$refs.vuetable.changePage(e)},onRowClicked(){console.log()},onChangeRange(e){this.moreParams.start=e.start,this.moreParams.end=e.end,this.$events.fire("refresh-table",this.$refs.vuetable)},statFormatter(e){return Number(e/1e3).toFixed(2)+"s"},countFormatter(e){return Number(e).toFixed(0)},memoryFormatter(e){return Number(e/(1024*1024)).toFixed(2)+" Mb"},dateFormatter(e){return e},deleteFormatter(e){return e===""?"":`
                <a class="delete icon" href="${e}" title="Delete"></a>
                `}}},d={};var B=l(I,T,j,!1,V,null,null,null);function V(e){for(let r in d)this[r]=d[r]}var q=function(){return B.exports}();const n=window.Vue;n.use(c);new n({el:"#cp-nav-content",components:{ErrorsDetailAreaChart:u,ErrorsDetailTable:q,RadialBarChart:y,SimpleBarChart:w,SampleRangePicker:F,SamplePaneFooter:x},mounted(){this.$events.$on("refresh-table",e=>this.onTableRefresh(e))},methods:{onTableRefresh(e){n.nextTick(()=>e.refresh())}}});
//# sourceMappingURL=errors-detail.6f6977bd.js.map