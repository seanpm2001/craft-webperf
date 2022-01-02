import{n as s,d as l,_ as n}from"./vendor.6a8d211c.js";import{P as o}from"./PerformanceDetailAreaChart.09e41373.js";import{V as d,a as m,b as f,P as c}from"./PageResultCell.a819acb2.js";import{T as u}from"./tri-color-blend.3ecffd12.js";import{R as p}from"./RequestBarChart.ca2f7fb8.js";import{D as h}from"./DataSampleDate.94853f61.js";import{D as b}from"./DataSampleDevice.fabeb357.js";import{R as g,S as v}from"./SimpleBarChart.cada778d.js";import{S as C}from"./SampleRangePicker.0e02f7a5.js";import{S as F}from"./SamplePaneFooter.c88f08be.js";import{R as w}from"./RecommendationsList.5608b603.js";var P=[{name:"__slot:sample-date",sortField:"dateCreated",title:"Sample Date",titleClass:"text-left",dataClass:"text-left",width:"14%"},{name:"__slot:load-time-bar",sortField:"pageLoad",title:"Performance Timeline",titleClass:"center loadTimeBar",dataClass:"center",width:"20%"},{name:"craftDbCnt",sortField:"craftDbCnt",title:"Queries",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftTwigCnt",sortField:"craftTwigCnt",title:"Templates",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftOtherCnt",sortField:"craftOtherCnt",title:"Other",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftTotalMemory",sortField:"craftTotalMemory",title:"Memory",titleClass:"text-right",dataClass:"text-right",callback:"memoryFormatter",width:"8%"},{name:"__slot:sample-device",sortField:"device",title:"Device",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"os",sortField:"os",title:"OS",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"browser",sortField:"browser",title:"Browser",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"countryCode",sortField:"countryCode",title:"Country",titleClass:"text-left",dataClass:"text-left",width:"6%"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteFormatter",width:"3%"},{name:"maxTotalPageLoad",visible:!1},{name:"domInteractive",visible:!1},{name:"firstContentfulPaint",visible:!1},{name:"firstPaint",visible:!1},{name:"firstByte",visible:!1},{name:"connect",visible:!1},{name:"dns",visible:!1},{name:"mobile",visible:!1}],D=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"py-4"},[t("vuetable-filter-bar"),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfoTop",attrs:{infoTemplate:"Displaying {from} to {to} of {total} data samples"}}),t("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":e.onChangePage}})],1),t("div",{staticClass:"overflow-x-auto overflow-y-hidden"},[t("vuetable",{ref:"vuetable",attrs:{"api-url":e.apiUrl,"per-page":20,fields:e.fields,css:e.css,"sort-order":e.sortOrder,"append-params":e.moreParams},on:{"vuetable:pagination-data":e.onPaginationData,"vuetable:row-clicked":e.onRowClicked,"vuetable:loaded":e.onLoaded},scopedSlots:e._u([{key:"sample-date",fn:function(a){return[t("data-sample-date",{attrs:{date:a.rowData.dateCreated,url:a.rowData.url,query:a.rowData.query}})]}},{key:"sample-device",fn:function(a){return[t("data-sample-device",{attrs:{mobile:a.rowData.mobile,device:a.rowData.device}})]}},{key:"load-time-bar",fn:function(a){return[t("request-bar-chart",{attrs:{rowData:a.rowData}})]}}])})],1),t("div",{staticClass:"vuetable-pagination clearafter"},[t("vuetable-pagination-info",{ref:"paginationInfo",attrs:{infoTemplate:"Displaying {from} to {to} of {total} data samples"}}),t("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)},x=[];const _={components:{vuetable:l,"vuetable-pagination":d,"vuetable-pagination-info":m,"vuetable-filter-bar":f,"request-bar-chart":p,"page-result-cell":c,"data-sample-date":h,"data-sample-device":b},props:{start:String,end:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:{type:Number,default:1e4},pageUrl:String,siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId,pageUrl:this.pageUrl,start:this.start,end:this.end,filter:""},css:{tableClass:"data fullwidth webperf-page-detail",ascendingIcon:"menubtn webperf-menubtn-asc",descendingIcon:"menubtn webperf-menubtn-desc"},sortOrder:[{field:"__slot:load-time-bar",sortField:"pageLoad",direction:"desc"}],fields:P,triBlend:new u(this.fastColor,this.averageColor,this.slowColor)}},mounted(){this.$events.$on("filter-set",e=>this.onFilterSet(e)),this.$events.$on("filter-reset",e=>this.onFilterReset()),this.$events.$on("change-range",e=>this.onChangeRange(e))},methods:{onFilterSet(e){this.moreParams.filter=e,this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.moreParams.filter="",this.$events.fire("refresh-table",this.$refs.vuetable)},onLoaded(){this.$events.fire("refresh-table-components",this.$refs.vuetable)},onPaginationData(e){this.$refs.paginationTop.setPaginationData(e),this.$refs.paginationInfoTop.setPaginationData(e),this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage(e){this.$refs.vuetable.changePage(e)},onRowClicked(e,r){},onChangeRange(e){this.moreParams.start=e.start,this.moreParams.end=e.end,this.$events.fire("refresh-table",this.$refs.vuetable)},statFormatter(e){return Number(e/1e3).toFixed(2)+"s"},countFormatter(e){return Number(e).toFixed(0)},memoryFormatter(e){return Number(e/(1024*1024)).toFixed(2)+" Mb"},dateFormatter(e){return e},deleteFormatter(e){return e===""?"":`
            <a class="delete icon" href="${e}" title="Delete"></a>
            `}}},i={};var S=s(_,D,x,!1,y,null,null,null);function y(e){for(let r in i)this[r]=i[r]}var T=function(){return S.exports}();Vue.use(n);new Vue({el:"#cp-nav-content",components:{"performance-detail-area-chart":o,"performance-detail-table":T,"radial-bar-chart":g,"simple-bar-chart":v,"sample-range-picker":C,"sample-pane-footer":F,"recommendations-list":w},data:{},methods:{onTableRefresh(e){Vue.nextTick(()=>e.refresh())}},mounted(){this.$events.$on("refresh-table",e=>this.onTableRefresh(e))}});
//# sourceMappingURL=performance-detail.c1f5a444.js.map
