/*!
 * @project        Webperf
 * @name           page-detail.js
 * @author         Andrew Welch
 * @build          Sun, Jan 20, 2019 6:56 PM ET
 * @release        e364613b1708d4b40286d02fe0ae535e405bbcf2 [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var n,s,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],r[s]&&f.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={2:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([163,0]),a()}({163:function(t,e,a){"use strict";a.r(e);var n=a(3),r=a.n(n),i=a(21),s=a.n(i),l=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"200px",type:"area",options:this.chartOptions,series:this.series}})};l._withStripped=!0;a(12),a(20),a(17),a(1);var o=a(4),c=a.n(o),u=a(11);function d(t,e,a,n,r,i,s){try{var l=t[i](s),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(n,r)}var f=function(t,e,a){t.get(e).then(function(t){a&&a(t.data)}).catch(function(t){console.log(t)})},h={components:{apexcharts:a.n(u).a},props:{title:String,subTitle:String,range:String,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.a.create({baseURL:"/retour/charts/dashboard/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.range,0!==this.siteId&&(a+="/"+this.siteId),t.next=5,f(e,a,function(t){var e,a=Object.assign({},n.chartOptions);void 0!==t[0]&&(a.yaxis.max=Math.round((e=[t[0].data],e.map(function(t){return Math.max.apply(null,t)}))[0]+1.5),a.labels=t[0].labels,n.chartOptions=a,n.series=t)});case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(t){d(i,n,r,s,l,"next",t)}function l(t){d(i,n,r,s,l,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}()},created:function(){this.getSeriesData()},mounted:function(){},data:function(){return{chartOptions:{chart:{id:"vuechart-dashboard",toolbar:{show:!1},sparkline:{enabled:!0}},colors:["#008FFB","#DCE6EC"],stroke:{curve:"straight",width:3},fill:{opacity:.2,gradient:{enabled:!0}},xaxis:{crosshairs:{width:1}},labels:[],yaxis:{min:0,max:0},title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}},subtitle:{text:this.subTitle,offsetX:0,style:{fontSize:"14px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}]}}},p=a(0),v=Object(p.a)(h,l,[],!1,null,null,null);v.options.__file="src/assetbundles/webperf/src/vue/PageDetailAreaChart.vue";var b=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":"/webperf/tables/page-detail","per-page":20,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData,"vuetable:row-clicked":t.onRowClicked,"vuetable:loaded":t.onLoaded},scopedSlots:t._u([{key:"load-time-bar",fn:function(t){return[a("request-bar-chart",{attrs:{rowData:t.rowData}})]}}])}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)};g._withStripped=!0;var m=[{name:"dateUpdated",sortField:"dateUpdated",title:"Sample Date",titleClass:"text-left",dataClass:"text-left",callback:"dateFormatter",width:"14%"},{name:"__slot:load-time-bar",sortField:"totalPageLoad",title:"Request Timeline",titleClass:"center loadTimeBar",dataClass:"center",width:"20%"},{name:"craftDbCnt",sortField:"craftDbCnt",title:"Queries",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftTwigCnt",sortField:"craftTwigCnt",title:"Templates",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftOtherCnt",sortField:"craftOtherCnt",title:"Other",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftTotalMemory",sortField:"craftTotalMemory",title:"Memory",titleClass:"text-right",dataClass:"text-right",callback:"memoryFormatter",width:"8%"},{name:"device",sortField:"device",title:"Device",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"os",sortField:"os",title:"OS",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"browser",sortField:"browser",title:"Browser",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"countryCode",sortField:"countryCode",title:"Country",titleClass:"text-left",dataClass:"text-left",width:"6%"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteFormatter",width:"3%"},{name:"maxTotalPageLoad",visible:!1},{name:"domInteractive",visible:!1},{name:"firstContentfulPaint",visible:!1},{name:"firstPaint",visible:!1},{name:"firstByte",visible:!1},{name:"connect",visible:!1},{name:"dns",visible:!1}],C=a(41),x=a(30),w=a(29),y=a(35),_=a(2),P=a(28),F=a(34),S={components:{vuetable:C.a,"vuetable-pagination":x.a,"vuetable-pagination-info":w.a,"vuetable-filter-bar":y.a,"request-bar-chart":P.a,"page-result-cell":F.a},props:{fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:{type:Number,default:1e4},pageUrl:String,siteId:{type:Number,default:0}},data:function(){return{moreParams:{pageUrl:this.pageUrl,siteId:this.siteId},css:{tableClass:"data fullwidth webperf-page-detail",ascendingIcon:"menubtn webperf-menubtn-asc",descendingIcon:"menubtn webperf-menubtn-desc"},sortOrder:[{field:"__slot:load-time-bar",sortField:"totalPageLoad",direction:"desc"}],fields:m,triBlend:new _.a(this.fastColor,this.averageColor,this.slowColor)}},mounted:function(){var t=this;this.$events.$on("filter-set",function(e){return t.onFilterSet(e)}),this.$events.$on("filter-reset",function(e){return t.onFilterReset()})},methods:{onFilterSet:function(t){this.moreParams={siteId:this.siteId,pageUrl:this.pageUrl,filter:t},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams={pageUrl:this.pageUrl,siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onLoaded:function(){this.$events.fire("refresh-table-components",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},onRowClicked:function(t,e){console.log(t)},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"},countFormatter:function(t){return Number(t).toFixed(0)},memoryFormatter:function(t){return Number(t/1048576).toFixed(2)+" Mb"},dateFormatter:function(t){return t},deleteFormatter:function(t){return""===t?"":'\n            <a class="delete icon" href="'.concat(t,'" title="Delete"></a>\n            ')}}},k=Object(p.a)(S,g,[],!1,null,null,null);k.options.__file="src/assetbundles/webperf/src/vue/PageDetailTable.vue";var O=k.exports,D=a(32),T=a(31);r.a.use(s.a);new r.a({el:"#cp-nav-content",components:{"page-detail-area-chart":b,"page-detail-table":O,"dashboard-radial-bar-chart":D.a,"dashboard-simple-bar-chart":T.a},data:{},methods:{onTableRefresh:function(t){r.a.nextTick(function(){return t.refresh()})}},mounted:function(){var t=this;this.$events.$on("refresh-table",function(e){return t.onTableRefresh(e)})}})},2:function(t,e,a){"use strict";a.d(e,"a",function(){return r});a(56);function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#00C800",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#FFFF00",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#C80000";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clr1=this.HexToRGB(e),this.clr2=this.HexToRGB(a),this.clr3=this.HexToRGB(n)}var e,a,r;return e=t,(a=[{key:"RGBToHex",value:function(t,e,a){var n;return n=(t<<16|e<<8|a).toString(16).toUpperCase(),new Array(7-n.length).join("0")+n}},{key:"HexToRGB",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},{key:"colorFromPercentage",value:function(t){var e=this.clr1,a=this.clr2;t>=50&&(e=this.clr2,a=this.clr3,t-=50);var n=t/50,r=Math.round(e.r+n*(a.r-e.r)),i=Math.round(e.g+n*(a.g-e.g)),s=Math.round(e.b+n*(a.b-e.b));return"#"+this.RGBToHex(r,i,s)}}])&&n(e.prototype,a),r&&n(e,r),t}()},28:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-no-wrap"},["both"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Combined Frontend & Craft Beacon"}},[a("div",{staticClass:"w-2 h-2 bg-blue-dark rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-orange-dark rounded-full"})]):t._e(),t._v(" "),"frontend"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Frontend Beacon only"}},[a("div",{staticClass:"w-2 h-2 bg-blue-dark rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-transparent rounded-full"})]):t._e(),t._v(" "),"craft"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Craft Beacon only"}},[a("div",{staticClass:"w-2 h-2 bg-transparent rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-orange-dark rounded-full"})]):t._e(),t._v(" "),a("div",{staticClass:"flex-grow"},[a("request-bar-recursive",{attrs:{column:t.root.column,color:t.root.color,label:t.root.label,value:t.root.value,parentValue:t.root.parentValue,nodes:t.root.nodes}})],1),t._v(" "),a("div",{staticClass:"flex-shrink"},[t._v("\n        "+t._s(t.statFormatter(t.root.value))+"\n    ")])])};n._withStripped=!0;a(1);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-5",class:t.color,style:{width:t.value/t.parentValue*100+"%"},attrs:{title:t.label+" "+t.statFormatter(t.value)}},t._l(t.nodes,function(t){return a("request-bar-recursive",{attrs:{column:t.column,color:t.color,label:t.label,value:t.value,parentValue:t.parentValue,nodes:t.nodes}})}),1)};r._withStripped=!0;var i={name:"request-bar-recursive",props:{column:String,color:String,label:String,value:Number,parentValue:Number,nodes:Array},methods:{statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"}}},s=a(0),l=Object(s.a)(i,r,[],!1,null,null,null);l.options.__file="src/assetbundles/webperf/src/vue/RequestBarRecursive.vue";var o=l.exports,c=[{column:"totalPageLoad",color:"bg-blue-dark",label:"Page Loaded"},{column:"domInteractive",color:"bg-blue",label:"DOM Interactive"},{column:"firstContentfulPaint",color:"bg-blue-light",label:"First Contentful Paint"},{column:"firstPaint",color:"bg-blue-lighter",label:"First Paint"},{column:"firstByte",color:"bg-orange-dark",label:"First Byte"},{column:"connect",color:"bg-orange",label:"Connect"},{column:"dns",color:"bg-orange-light",label:"DNS Lookup"},{column:"craftTotalMs",color:"bg-red-dark",label:"Craft Rendering"},{column:"craftTwigMs",color:"bg-red",label:"Twig Rendering"},{column:"craftDbMs",color:"bg-red-light",label:"Database Queries"}],u={name:"request-bar-chart",components:{"request-bar-recursive":o},props:{rowData:Object},data:function(){return{root:void 0}},mounted:function(){var t=this;this.$events.$on("refresh-table-components",function(e){return t.onTableRefresh(e)})},created:function(){this.calculateNodes()},methods:{onTableRefresh:function(t){this.calculateNodes()},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"},calculateNodes:function(){var t=this;this.root=void 0,c.forEach(function(e){var a={column:e.column,color:e.color,label:e.label,value:parseFloat(t.rowData[e.column])||null,parentValue:parseFloat(t.rowData.maxTotalPageLoad)||null,nodes:void 0};if(a.value)if(t.root)for(var n=t.root;n;)!n.nodes||!n.value||a.value>n.value?(a.nodes=n.nodes,a.parentValue=n.parentValue,n.nodes=[a],n=a.nodes||void 0):n=n.nodes[0]||void 0;else t.root=a})}}},d=Object(s.a)(u,n,[],!1,null,null,null);d.options.__file="src/assetbundles/webperf/src/vue/RequestBarChart.vue";e.a=d.exports},29:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};n._withStripped=!0;a(79);var r={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-grey-dark"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(0),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/VuetablePaginationInfoMixin.vue";var l={mixins:[s.exports]},o=Object(i.a)(l,n,[],!1,null,null,null);o.options.__file="src/assetbundles/webperf/src/vue/VuetablePaginationInfo.vue";e.a=o.exports},30:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){t.loadPage(e)}}})]})]:[t._l(t.windowSize,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){t.loadPage(t.windowStart+e-1)}}})]})],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)};n._withStripped=!0;a(1);var r={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(0),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/VuetablePaginationMixin.vue";var l={mixins:[s.exports]},o=Object(i.a)(l,n,[],!1,null,null,null);o.options.__file="src/assetbundles/webperf/src/vue/VuetablePagination.vue";e.a=o.exports},31:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simple-bar-chart-wrapper px-5 py-3"},[a("div",{staticClass:"clearafter py-2"},[a("div",{staticClass:"simple-bar-chart-label text-base font-bold"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value text-base font-bold"},[t._v(t._s(t.statFormatter(t.series[0])))])]),t._v(" "),a("div",{staticClass:"py-2"},[a("div",{staticClass:"simple-bar-chart-track rounded-full bg-grey-lighter"},[a("div",{staticClass:"simple-bar-line h-3 rounded-full",style:{width:t.series[0]+"%",backgroundColor:t.barColor}})])])])};n._withStripped=!0;a(12),a(20),a(17),a(1);var r=a(4),i=a.n(r),s=a(2);function l(t,e,a,n,r,i,s){try{var l=t[i](s),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(n,r)}var o=function(t,e,a){t.get(e).then(function(t){a&&a(t.data)}).catch(function(t){console.log(t)})},c={components:{},props:{title:String,days:{type:Number,default:30},column:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.displayDays+"/"+this.column,0!==this.siteId&&(a+="/"+this.siteId),t.next=5,o(e,a,function(t){Object.assign({},n.chartOptions);if(void 0!==t[0]){var e=t[0]/1e3;e>n.displayMaxValue&&(n.displayMaxValue=e),e=100*e/n.displayMaxValue,n.barColor=n.triBlend.colorFromPercentage(e),n.series=[e]}});case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(t){l(i,n,r,s,o,"next",t)}function o(t){l(i,n,r,s,o,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayDays=t,this.getSeriesData()},statFormatter:function(t){return t=t*this.displayMaxValue/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)}),setInterval(function(){},3e3)},data:function(){return{barColor:"#000",series:[0],displayDays:this.days,displayMaxValue:this.maxValue,triBlend:new s.a(this.fastColor,this.averageColor,this.slowColor)}}},u=a(0),d=Object(u.a)(c,n,[],!1,null,null,null);d.options.__file="src/assetbundles/webperf/src/vue/DashboardSimpleBarChart.vue";e.a=d.exports},32:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"300px",type:"radialBar",options:this.chartOptions,series:this.series}})};n._withStripped=!0;a(12),a(20),a(17),a(1);var r=a(4),i=a.n(r),s=a(11),l=a.n(s),o=a(2);function c(t,e,a,n,r,i,s){try{var l=t[i](s),o=l.value}catch(t){return void a(t)}l.done?e(o):Promise.resolve(o).then(n,r)}var u=function(t,e,a){t.get(e).then(function(t){a&&a(t.data)}).catch(function(t){console.log(t)})},d={components:{apexcharts:l.a},props:{title:String,days:{type:Number,default:30},column:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.displayDays+"/"+this.column,0!==this.siteId&&(a+="/"+this.siteId),t.next=5,u(e,a,function(t){var e=Object.assign({},n.chartOptions);if(void 0!==t[0]){var a=t[0]/1e3;a>n.displayMaxValue&&(n.displayMaxValue=a),a=100*a/n.displayMaxValue;var r=n.triBlend.colorFromPercentage(a);e.colors=[r],e.plotOptions.radialBar.dataLabels.value.color=r,n.chartOptions=e,n.series=[a]}});case 5:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(t){c(i,n,r,s,l,"next",t)}function l(t){c(i,n,r,s,l,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayDays=t,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)}),setInterval(function(){},3e3)},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-dashboard-radial-bar",fontFamily:"inherit",toolbar:{show:!1}},states:{hover:{filter:{type:"none",value:0}}},colors:["#000000"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{size:"65%"},track:{background:"#f1f5f8",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1,fontSize:"16px",color:"#333",offsetY:100},value:{offsetY:10,fontSize:"40px",color:"#333",style:{cssClass:"apexcharts-datalabel-value"},formatter:function(e){return e=e*t.displayMaxValue/100,Number(e).toFixed(2)+"s"}}}}},labels:[this.title],title:{text:this.title,offsetY:18,align:"center",style:{fontSize:"16px",cssClass:"apexcharts-title-text"}},stroke:{width:1,lineCap:"round"}},series:[0],displayDays:this.days,displayMaxValue:this.maxValue,triBlend:new o.a(this.fastColor,this.averageColor,this.slowColor)}}},f=a(0),h=Object(f.a)(d,n,[],!1,null,null,null);h.options.__file="src/assetbundles/webperf/src/vue/DashboardRadialBarChart.vue";e.a=h.exports},34:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"relative single-line-truncate-wrapper"},[a("div",{staticClass:"text-base font-normal truncate-label",staticStyle:{color:"rgb(26, 13, 171)",width:"100%",height:"20px"},attrs:{title:t.title}},[t.title?a("span",[t._v(t._s(t.title))]):a("span",{staticClass:"text-grey-light"},[a("em",[t._v("Craft backend route")])])])]),t._v(" "),a("div",{staticClass:"relative single-line-truncate-wrapper"},[a("cite",{staticClass:"text-sm font-normal truncate-label single-line-truncate",staticStyle:{color:"rgb(0, 102, 33)",width:"100%"},attrs:{title:t.url}},[t._v("\n            "+t._s(t.url)+"\n        ")])]),t._v(" "),a("div",{staticClass:"py-2"},[a("div",{staticClass:"simple-bar-chart-track rounded-full bg-grey-lighter"},[a("div",{staticClass:"simple-bar-line h-2 rounded-full",style:{width:t.width+"%",backgroundColor:t.color}})])])])};n._withStripped=!0;a(1);var r={name:"page-result-cell",props:{title:String,url:String,width:Number,color:String}},i=a(0),s=Object(i.a)(r,n,[],!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/PageResultCell.vue";e.a=s.exports},35:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-grey-dark"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])};n._withStripped=!0;var r={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},i=a(0),s=Object(i.a)(r,n,[],!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/VuetableFilterBar.vue";e.a=s.exports}});
//# sourceMappingURL=page-detail.js.map