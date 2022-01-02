import{n as i,d as o,_ as d}from"./vendor.6a8d211c.js";import{E as f}from"./ErrorsDetailAreaChart.8008259f.js";import{V as c,a as p,b as m,P as u}from"./PageResultCell.a819acb2.js";import{R as v}from"./RequestBarChart.ca2f7fb8.js";import{D as b}from"./DataSampleDate.94853f61.js";import{D as h}from"./DataSampleDevice.fabeb357.js";import{R as g,S as _}from"./SimpleBarChart.cada778d.js";import{S as C}from"./SampleRangePicker.0e02f7a5.js";import{S as w}from"./SamplePaneFooter.c88f08be.js";import"./tri-color-blend.3ecffd12.js";var y=[{name:"__slot:error-date",sortField:"dateCreated",title:"Error Date",titleClass:"text-left",dataClass:"text-left align-top",width:"15%"},{name:"__slot:error-sample",sortField:"pageErrors",title:"Errors",titleClass:"text-left",dataClass:"text-left align-top",width:"42%"},{name:"__slot:sample-device",sortField:"device",title:"Device",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"os",sortField:"os",title:"OS",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"browser",sortField:"browser",title:"Browser",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"countryCode",sortField:"countryCode",title:"Country",titleClass:"text-left",dataClass:"text-left align-top",width:"10%"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center align-top",callback:"deleteFormatter",width:"3%"},{name:"maxTotalPageLoad",visible:!1},{name:"domInteractive",visible:!1},{name:"firstContentfulPaint",visible:!1},{name:"firstPaint",visible:!1},{name:"firstByte",visible:!1},{name:"connect",visible:!1},{name:"dns",visible:!1},{name:"mobile",visible:!1}],F=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.parsedErrors?t("div",[e.type==="craft"?t("div",[t("h4",{staticClass:"text-red-300 m-0"},[e._v("Craft Errors:")]),e._l(e.parsedErrors,function(a){return t("div",[t("div",{staticClass:"field text-sm font-normal inline-block pt-2"},[t("p",{staticClass:"warning display-block",class:[a.level==="error"?"webperf-error-color":""]},[e._v(" "+e._s(e.uppercaseFirstChar(a.level))+" \u2192 "+e._s(a.message)+" ")]),t("p",{staticClass:"m-0 text-gray-600"},[e._v(" From \u2192 "+e._s(a.category)+" ")])])])})],2):e.type==="boomerang"?t("div",[t("h4",{staticClass:"text-green-300 m-0"},[e._v("JavaScript Errors:")]),e._l(e.parsedErrors,function(a){return t("div",[t("div",{staticClass:"field text-sm font-normal inline-block pt-2"},[t("p",{staticClass:"warning display-block webperf-error-color"},[e._v(" Error \u2192 "+e._s(a.t)+" "+e._s(a.c)+" "+e._s(a.m)+" "+e._s(a.x)+" ")]),t("p",{staticClass:"m-0 text-gray-600"},[e._v(" Stack Trace \u2192 "),t("ul",{staticClass:"list-reset"},e._l(a.f,function(s){return t("li",{staticClass:"text-gray-600 pl-2"},[e._v(" "+e._s(s.l)+":"+e._s(s.c)+" "+e._s(s.f)+" "+e._s(s.w)+" "+e._s(s.wo)+" ")])}),0)])])])})],2):e._e()]):t("div",[t("span",[t("code",[e._v(" "+e._s(e.pageErrors)+" ")])])])])},x=[];const S={name:"error-sample",props:{pageErrors:String,type:String},data:function(){return{parsedErrors:void 0}},methods:{uppercaseFirstChar(e){return e.charAt(0).toUpperCase()+e.slice(1)}},mounted(){try{this.parsedErrors=JSON.parse(this.pageErrors)}catch(e){console.log(e.message)}}},n={};var D=i(S,F,x,!1,$,null,null,null);function $(e){for(let r in n)this[r]=n[r]}var P=function(){return D.exports}(),E=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"py-4"},[t("vuetable-filter-bar"),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfoTop",attrs:{infoTemplate:"Displaying {from} to {to} of {total} data samples"}}),t("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":e.onChangePage}})],1),t("div",{staticClass:"overflow-x-auto overflow-y-hidden"},[t("vuetable",{ref:"vuetable",attrs:{"api-url":e.apiUrl,"per-page":20,fields:e.fields,css:e.css,"sort-order":e.sortOrder,"append-params":e.moreParams},on:{"vuetable:pagination-data":e.onPaginationData,"vuetable:row-clicked":e.onRowClicked,"vuetable:loaded":e.onLoaded},scopedSlots:e._u([{key:"error-date",fn:function(a){return[t("data-sample-date",{attrs:{date:a.rowData.dateCreated,url:a.rowData.url,query:a.rowData.query}})]}},{key:"error-sample",fn:function(a){return[t("error-sample",{attrs:{"page-errors":a.rowData.pageErrors,type:a.rowData.type}})]}},{key:"sample-device",fn:function(a){return[t("data-sample-device",{attrs:{mobile:a.rowData.mobile,device:a.rowData.device}})]}},{key:"load-time-bar",fn:function(a){return[t("request-bar-chart",{attrs:{rowData:a.rowData}})]}}])})],1),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfo",attrs:{infoTemplate:"Displaying {from} to {to} of {total} data samples"}}),t("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)},k=[];const R={components:{vuetable:o,"vuetable-pagination":c,"vuetable-pagination-info":p,"vuetable-filter-bar":m,"request-bar-chart":v,"page-result-cell":u,"data-sample-date":b,"data-sample-device":h,"error-sample":P},props:{start:String,end:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:{type:Number,default:1e4},pageUrl:String,siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId,pageUrl:this.pageUrl,start:this.start,end:this.end,filter:""},css:{tableClass:"data fullwidth webperf-page-detail",ascendingIcon:"menubtn webperf-menubtn-asc",descendingIcon:"menubtn webperf-menubtn-desc"},sortOrder:[{field:"__slot:error-date",sortField:"dateCreated",direction:"desc"}],fields:y}},mounted(){this.$events.$on("filter-set",e=>this.onFilterSet(e)),this.$events.$on("filter-reset",e=>this.onFilterReset()),this.$events.$on("change-range",e=>this.onChangeRange(e))},methods:{onFilterSet(e){this.moreParams.filter=e,this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.moreParams.filter="",this.$events.fire("refresh-table",this.$refs.vuetable)},onLoaded(){this.$events.fire("refresh-table-components",this.$refs.vuetable)},onPaginationData(e){this.$refs.paginationTop.setPaginationData(e),this.$refs.paginationInfoTop.setPaginationData(e),this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage(e){this.$refs.vuetable.changePage(e)},onRowClicked(e,r){},onChangeRange(e){this.moreParams.start=e.start,this.moreParams.end=e.end,this.$events.fire("refresh-table",this.$refs.vuetable)},statFormatter(e){return Number(e/1e3).toFixed(2)+"s"},countFormatter(e){return Number(e).toFixed(0)},memoryFormatter(e){return Number(e/(1024*1024)).toFixed(2)+" Mb"},dateFormatter(e){return e},deleteFormatter(e){return e===""?"":`
            <a class="delete icon" href="${e}" title="Delete"></a>
            `}}},l={};var T=i(R,E,k,!1,j,null,null,null);function j(e){for(let r in l)this[r]=l[r]}var I=function(){return T.exports}();Vue.use(d);new Vue({el:"#cp-nav-content",components:{"errors-detail-area-chart":f,"errors-detail-table":I,"radial-bar-chart":g,"simple-bar-chart":_,"sample-range-picker":C,"sample-pane-footer":w},data:{},methods:{onTableRefresh(e){Vue.nextTick(()=>e.refresh())}},mounted(){this.$events.$on("refresh-table",e=>this.onTableRefresh(e))}});
//# sourceMappingURL=errors-detail.7ce4939d.js.map
