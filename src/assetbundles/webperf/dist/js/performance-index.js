/*!
 * @project        webperf
 * @name           performance-index.js
 * @author         Andrew Welch
 * @build          Wed Mar 03 2021 05:08:17 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 ©2020 nystudio107.com
 *
 */
(self.webpackChunkwebperf=self.webpackChunkwebperf||[]).push([[79],{9164:function(t,e,a){"use strict";var n=a(7495),i=(a(7327),a(9653),a(6977),[{name:"__slot:page-listing-display",sortField:"url",title:"Page",titleClass:"center pageListingDisplay",dataClass:"center",width:"30%"},{name:"__slot:load-time-bar",sortField:"pageLoad",title:"Performance Timeline",titleClass:"center loadTimeBar",dataClass:"center",width:"20%"},{name:"craftDbCnt",sortField:"craftDbCnt",title:"Queries",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"9%"},{name:"craftTwigCnt",sortField:"craftTwigCnt",title:"Templates",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"9%"},{name:"craftOtherCnt",sortField:"craftOtherCnt",title:"Other",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"9%"},{name:"craftTotalMemory",sortField:"craftTotalMemory",title:"Memory",titleClass:"text-right",dataClass:"text-right",callback:"memoryFormatter",width:"9%"},{name:"__slot:data-samples",sortField:"cnt",title:"Samples",titleClass:"text-center",dataClass:"text-center",callback:"countFormatter",width:"9%"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteFormatter",width:"5%"},{name:"maxTotalPageLoad",visible:!1},{name:"domInteractive",visible:!1},{name:"firstContentfulPaint",visible:!1},{name:"firstPaint",visible:!1},{name:"firstByte",visible:!1},{name:"connect",visible:!1},{name:"dns",visible:!1}]),r=a(6545),o=a(286),s=a(8889),l=a(5515),c=a(1177),f=a(9885),u=a(208),d=a(2531),m={components:{vuetable:r.Z,"vuetable-pagination":o.Z,"vuetable-pagination-info":s.Z,"vuetable-filter-bar":l.Z,"request-bar-chart":f.Z,"page-result-cell":u.Z,"sample-size-warning":d.Z},props:{start:String,end:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:{type:Number,default:1e4},siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},data:function(){return{moreParams:{siteId:this.siteId,start:this.start,end:this.end,filter:""},css:{tableClass:"data fullwidth webperf-pages-index",ascendingIcon:"menubtn webperf-menubtn-asc",descendingIcon:"menubtn webperf-menubtn-desc"},sortOrder:[{field:"__slot:load-time-bar",sortField:"pageLoad",direction:"desc"}],fields:i,triBlend:new c.Z(this.fastColor,this.averageColor,this.slowColor)}},mounted:function(){var t=this;this.$events.$on("filter-set",(function(e){return t.onFilterSet(e)})),this.$events.$on("filter-reset",(function(e){return t.onFilterReset()})),this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},methods:{onFilterSet:function(t){this.moreParams.filter=t,this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams.filter="",this.$events.fire("refresh-table",this.$refs.vuetable)},onLoaded:function(){this.$events.fire("refresh-table-components",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},onRowClicked:function(t,e){t.detailPageUrl.length&&(window.location.href=t.detailPageUrl)},onChangeRange:function(t){this.moreParams.start=t.start,this.moreParams.end=t.end,this.$events.fire("refresh-table",this.$refs.vuetable)},computeWidth:function(t,e){var a=t/e*100;return a>100&&(a=100),a},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"},countFormatter:function(t){return Number(t).toFixed(0)},memoryFormatter:function(t){return Number(t/1048576).toFixed(2)+" Mb"},deleteFormatter:function(t){return""===t?"":'\n            <a class="delete icon" href="'.concat(t,'" title="Delete"></a>\n            ')}}},g=(0,a(1900).Z)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop",attrs:{infoTemplate:"Displaying {from} to {to} of {total} pages"}}),t._v(" "),t._v('/vuetable-pagination:change-page="onChangePage"\n        >')],1),t._v(" "),a("div",{staticClass:"overflow-x-auto overflow-y-hidden",scopedSlots:t._u([{key:"page-listing-display",fn:function(e){return[a("page-result-cell",{attrs:{title:e.rowData.title,url:e.rowData.url,width:t.computeWidth(e.rowData.pageLoad,t.maxValue),color:t.triBlend.colorFromPercentage(e.rowData.pageLoad/t.maxValue*100)}})]}},{key:"load-time-bar",fn:function(t){return[a("request-bar-chart",{attrs:{rowData:t.rowData}})]}},{key:"data-samples",fn:function(e){return[a("sample-size-warning",{attrs:{sample:e.rowData.cnt}}),t._v("\n                "+t._s(e.rowData.cnt)+"\n            ")]}}])},[t._v('/vuetable:pagination-data="onPaginationData"\n                  @/vuetable:row-clicked="onRowClicked"\n                  @/vuetable:loaded="onLoaded"\n        >\n            ')]),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo",attrs:{infoTemplate:"Displaying {from} to {to} of {total} pages"}}),t._v(" "),t._v('/vuetable-pagination:change-page="onChangePage"\n        >')],1)],1)}),[],!1,null,null,null).exports,h=a(1470),p=a(8571),b=a(7732);Vue.use(n.Z);new Vue({el:"#cp-nav-content",components:{"performance-index-table":g,"sample-range-picker":h.Z,"performance-detail-area-chart":p.Z,"recommendations-list":b.Z},data:{},methods:{onTableRefresh:function(t){Vue.nextTick((function(){return t.refresh()}))}},mounted:function(){var t=this;this.$events.$on("refresh-table",(function(e){return t.onTableRefresh(e)}))}})}},0,[[9164,666,216,351]]]);
//# sourceMappingURL=performance-index.js.map