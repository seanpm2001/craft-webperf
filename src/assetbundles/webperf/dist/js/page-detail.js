/*!
 * @project        Webperf
 * @name           page-detail.js
 * @author         Andrew Welch
 * @build          Tue, Jan 29, 2019 4:12 PM ET
 * @release        f674b934176959dc49936eacac50559d503dc44e [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={3:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([173,1,0]),a()}({17:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"heading"},[a("p",{staticClass:"instructions"},[t._v("The "+t._s(t.subject)+" data is an "),a("em",[t._v("average")]),t._v(" of "),a("strong",[t._v(t._s(t.formatNumber(t.samples)))]),t._v(" data sample"),1!==t.samples?a("span",[t._v("s")]):t._e(),t._v(".")])]),t._v(" "),t.samples<100?a("p",{staticClass:"warning"},[t._v("Webperf has collected less than "),a("strong",[t._v("100")]),t._v(" data samples. The sample size is not statistically significant, so above averaged results may not be meaningful.")]):t._e(),t._v(" "),t.displayDevModeWarning?a("p",{staticClass:"warning"},[t._v("Craft performance will be slower than normal with "),a("code",[t._v("devMode")]),t._v(" enabled due to extensive logging and disabling of some caches. "),t._m(0)]):t._e()])};n._withStripped=!0;a(8),a(34),a(51),a(9),a(1),a(13),a(10),a(14);var r=a(2),i=a.n(r);function s(t,e,a,n,r,i,s){try{var o=t[i](s),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var o=function(t,e,a,n){for(var r="?",i=Object.keys(a),s=0;s<i.length;s++){var o=i[s];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},l={components:{},props:{start:String,end:String,column:String,displayDevModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},subject:{type:String,default:""},siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.column,0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,o(e,a,n,function(t){void 0!==t.cnt&&(r.samples=t.cnt)});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function o(t){s(i,n,r,o,l,"next",t)}function l(t){s(i,n,r,o,l,"throw",t)}o(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},formatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{samples:0,displayEnd:this.end,displayMaxValue:this.maxValue}}},c=a(0),u=Object(c.a)(l,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"field inline-block m-0"},[e("a",{staticClass:"notice go",attrs:{href:"https://craftcms.com/guides/what-dev-mode-does",target:"_blank"}},[this._v("Learn More")])])}],!1,null,null,null);u.options.__file="src/assetbundles/webperf/src/vue/SamplePaneFooter.vue";e.a=u.exports},173:function(t,e,a){"use strict";a.r(e);var n=a(4),r=a.n(n),i=a(27),s=a.n(i),o=a(38),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop",attrs:{infoTemplate:"Displaying {from} to {to} of {total} data samples"}}),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":"/webperf/tables/page-detail","per-page":20,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData,"vuetable:row-clicked":t.onRowClicked,"vuetable:loaded":t.onLoaded},scopedSlots:t._u([{key:"sample-date",fn:function(t){return[a("data-sample-date",{attrs:{date:t.rowData.dateCreated,url:t.rowData.url,query:t.rowData.query}})]}},{key:"sample-device",fn:function(t){return[a("data-sample-device",{attrs:{mobile:t.rowData.mobile,device:t.rowData.device}})]}},{key:"load-time-bar",fn:function(t){return[a("request-bar-chart",{attrs:{rowData:t.rowData}})]}}])}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo",attrs:{infoTemplate:"Displaying {from} to {to} of {total} data samples"}}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)};l._withStripped=!0;a(1);var c=[{name:"__slot:sample-date",sortField:"dateCreated",title:"Sample Date",titleClass:"text-left",dataClass:"text-left",width:"14%"},{name:"__slot:load-time-bar",sortField:"pageLoad",title:"Performance Timeline",titleClass:"center loadTimeBar",dataClass:"center",width:"20%"},{name:"craftDbCnt",sortField:"craftDbCnt",title:"Queries",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftTwigCnt",sortField:"craftTwigCnt",title:"Templates",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftOtherCnt",sortField:"craftOtherCnt",title:"Other",titleClass:"text-right",dataClass:"text-right",callback:"countFormatter",width:"6%"},{name:"craftTotalMemory",sortField:"craftTotalMemory",title:"Memory",titleClass:"text-right",dataClass:"text-right",callback:"memoryFormatter",width:"8%"},{name:"__slot:sample-device",sortField:"device",title:"Device",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"os",sortField:"os",title:"OS",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"browser",sortField:"browser",title:"Browser",titleClass:"text-left",dataClass:"text-left",width:"9%"},{name:"countryCode",sortField:"countryCode",title:"Country",titleClass:"text-left",dataClass:"text-left",width:"6%"},{name:"deleteLink",sortField:"deleteLink",title:"",titleClass:"text-center",dataClass:"text-center",callback:"deleteFormatter",width:"3%"},{name:"maxTotalPageLoad",visible:!1},{name:"domInteractive",visible:!1},{name:"firstContentfulPaint",visible:!1},{name:"firstPaint",visible:!1},{name:"firstByte",visible:!1},{name:"connect",visible:!1},{name:"dns",visible:!1},{name:"mobile",visible:!1}],u=a(53),d=a(37),f=a(36),p=a(41),h=a(3),v=a(35),g=a(44),b=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"cursor-default",attrs:{title:this.title}},[this._v(this._s(this.date))])};b._withStripped=!0;var m={name:"data-sample-date",props:{date:String,url:String,query:String},computed:{title:function(){var t="";return t+="Url: "+this.url,this.query&&(t+="\n\nQuery: "+this.query),t}}},y=a(0),C=Object(y.a)(m,b,[],!1,null,null,null);C.options.__file="src/assetbundles/webperf/src/vue/DataSampleDate.vue";var _=C.exports,w=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"cursor-default",class:this.className,attrs:{title:this.title}},[this._v(" "+this._s(this.device))])};w._withStripped=!0;var x={name:"data-sample-device",props:{device:String,mobile:Boolean},computed:{className:function(){var t="";return this.device&&void 0!==this.mobile&&(t=!0===this.mobile?"webperf-mobile-icon":"webperf-desktop-icon"),t},title:function(){var t="";return this.device&&void 0!==this.mobile&&(t=!0===this.mobile?"Mobile device":"Desktop device"),t}}},S=Object(y.a)(x,w,[],!1,null,null,null);S.options.__file="src/assetbundles/webperf/src/vue/DataSampleDevice.vue";var P=S.exports,k={components:{vuetable:u.a,"vuetable-pagination":d.a,"vuetable-pagination-info":f.a,"vuetable-filter-bar":p.a,"request-bar-chart":v.a,"page-result-cell":g.a,"data-sample-date":_,"data-sample-device":P},props:{start:String,end:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:{type:Number,default:1e4},pageUrl:String,siteId:{type:Number,default:0}},data:function(){return{moreParams:{siteId:this.siteId,pageUrl:this.pageUrl,start:this.start,end:this.end,filter:""},css:{tableClass:"data fullwidth webperf-page-detail",ascendingIcon:"menubtn webperf-menubtn-asc",descendingIcon:"menubtn webperf-menubtn-desc"},sortOrder:[{field:"__slot:load-time-bar",sortField:"pageLoad",direction:"desc"}],fields:c,triBlend:new h.a(this.fastColor,this.averageColor,this.slowColor)}},mounted:function(){var t=this;this.$events.$on("filter-set",function(e){return t.onFilterSet(e)}),this.$events.$on("filter-reset",function(e){return t.onFilterReset()}),this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},methods:{onFilterSet:function(t){this.moreParams.filter=t,this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams.filter="",this.$events.fire("refresh-table",this.$refs.vuetable)},onLoaded:function(){this.$events.fire("refresh-table-components",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},onRowClicked:function(t,e){},onChangeRange:function(t){this.moreParams.start=t.start,this.moreParams.end=t.end,this.$events.fire("refresh-table",this.$refs.vuetable)},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"},countFormatter:function(t){return Number(t).toFixed(0)},memoryFormatter:function(t){return Number(t/1048576).toFixed(2)+" Mb"},dateFormatter:function(t){return t},deleteFormatter:function(t){return""===t?"":'\n            <a class="delete icon" href="'.concat(t,'" title="Delete"></a>\n            ')}}},F=Object(y.a)(k,l,[],!1,null,null,null);F.options.__file="src/assetbundles/webperf/src/vue/PageDetailTable.vue";var O=F.exports,R=a(40),D=a(42),M=a(19),T=a(17),$=a(39);r.a.use(s.a);new r.a({el:"#cp-nav-content",components:{"page-detail-area-chart":o.a,"page-detail-table":O,"dashboard-radial-bar-chart":R.a,"dashboard-simple-bar-chart":D.a,"sample-range-picker":M.a,"sample-pane-footer":T.a,"recommendations-list":$.a},data:{},methods:{onTableRefresh:function(t){r.a.nextTick(function(){return t.refresh()})}},mounted:function(){var t=this;this.$events.$on("refresh-table",function(e){return t.onTableRefresh(e)})}})},19:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"readable inline-block"},[a("vue-ctk-date-time-picker",{attrs:{range:!0,"no-header":!0,"only-date":!0,"no-value-to-custom-elem":!0,"custom-shortcuts":t.customShortcuts,label:"Data Sample Date Range",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD",color:"dimgray","no-button":!0,"auto-close":!0},on:{input:function(e){t.onInput()}},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}},[a("button",{staticClass:"btn menubtn text-sm leading-normal text-left",staticStyle:{"min-width":"237px"},attrs:{type:"button","data-icon":"date",tabindex:"0",role:"combobox","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            "+t._s(t.dateRange.start)+" → "+t._s(t.dateRange.end)+"\n        ")])])],1)};n._withStripped=!0;var r=a(28),i=a.n(r),s=(a(68),{name:"sample-range-picker",components:{"vue-ctk-date-time-picker":i.a},data:function(){return{dateRange:{},customShortcuts:[{label:"Today",value:"day",isSelected:!1},{label:"Yesterday",value:"-day",isSelected:!1},{label:"This Month",value:"month",isSelected:!1},{label:"Last Month",value:"-month",isSelected:!1},{label:"This Year",value:"year",isSelected:!1},{label:"Last Year",value:"-year",isSelected:!1},{label:"Last 365 days",value:365,isSelected:!0}]}},methods:{onInput:function(){this.$events.fire("change-range",this.dateRange)}}}),o=a(0),l=Object(o.a)(s,n,[],!1,null,null,null);l.options.__file="src/assetbundles/webperf/src/vue/SampleRangePicker.vue";e.a=l.exports},3:function(t,e,a){"use strict";a.d(e,"a",function(){return r});a(34);function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#00C800",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#FFFF00",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#C80000";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clr1=this.HexToRGB(e),this.clr2=this.HexToRGB(a),this.clr3=this.HexToRGB(n)}var e,a,r;return e=t,(a=[{key:"RGBToHex",value:function(t,e,a){var n;return n=(t<<16|e<<8|a).toString(16).toUpperCase(),new Array(7-n.length).join("0")+n}},{key:"HexToRGB",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},{key:"colorFromPercentage",value:function(t){var e=this.clr1,a=this.clr2;t>=50&&(e=this.clr2,a=this.clr3,t-=50);var n=t/50,r=Math.round(e.r+n*(a.r-e.r)),i=Math.round(e.g+n*(a.g-e.g)),s=Math.round(e.b+n*(a.b-e.b));return"#"+this.RGBToHex(r,i,s)}}])&&n(e.prototype,a),r&&n(e,r),t}()},35:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-no-wrap"},["both"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Combined Frontend & Craft Beacon"}},[a("div",{staticClass:"w-2 h-2 bg-blue-dark rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-orange-dark rounded-full"})]):t._e(),t._v(" "),"frontend"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Frontend Beacon only"}},[a("div",{staticClass:"w-2 h-2 bg-blue-dark rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-transparent rounded-full"})]):t._e(),t._v(" "),"craft"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Craft Beacon only"}},[a("div",{staticClass:"w-2 h-2 bg-transparent rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-orange-dark rounded-full"})]):t._e(),t._v(" "),a("div",{staticClass:"flex-grow"},[a("request-bar-recursive",{attrs:{column:t.root.column,color:t.root.color,label:t.root.label,value:t.root.value,parentValue:t.root.parentValue,nodes:t.root.nodes}})],1),t._v(" "),a("div",{staticClass:"flex-shrink"},[t._v("\n        "+t._s(t.statFormatter(t.root.value))+"\n    ")])])};n._withStripped=!0;a(1);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-5",class:t.color,style:{width:t.value/t.parentValue*100+"%"},attrs:{title:t.label+" "+t.statFormatter(t.value)}},t._l(t.nodes,function(t){return a("request-bar-recursive",{key:t.column,attrs:{column:t.column,color:t.color,label:t.label,value:t.value,parentValue:t.parentValue,nodes:t.nodes}})}),1)};r._withStripped=!0;var i={name:"request-bar-recursive",props:{column:String,color:String,label:String,value:Number,parentValue:Number,nodes:Array},methods:{statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"}}},s=a(0),o=Object(s.a)(i,r,[],!1,null,null,null);o.options.__file="src/assetbundles/webperf/src/vue/RequestBarRecursive.vue";var l=o.exports,c=[{column:"pageLoad",color:"bg-blue-lighter",label:"Page Loaded"},{column:"domInteractive",color:"bg-blue-light",label:"DOM Interactive"},{column:"firstContentfulPaint",color:"bg-blue",label:"First Contentful Paint"},{column:"firstPaint",color:"bg-blue-dark",label:"First Paint"},{column:"firstByte",color:"bg-orange-light",label:"First Byte"},{column:"connect",color:"bg-orange",label:"Connect"},{column:"dns",color:"bg-orange-dark",label:"DNS Lookup"},{column:"craftTotalMs",color:"bg-red-light",label:"Craft Rendering"},{column:"craftTwigMs",color:"bg-red",label:"Twig Rendering"},{column:"craftDbMs",color:"bg-red-dark",label:"Database Queries"}],u={name:"request-bar-chart",components:{"request-bar-recursive":l},props:{rowData:Object},data:function(){return{root:void 0}},mounted:function(){var t=this;this.$events.$on("refresh-table-components",function(e){return t.onTableRefresh(e)})},created:function(){this.calculateNodes()},methods:{onTableRefresh:function(t){this.calculateNodes()},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"},calculateNodes:function(){var t=this;this.root=void 0,c.forEach(function(e){var a={column:e.column,color:e.color,label:e.label,value:parseFloat(t.rowData[e.column])||null,parentValue:parseFloat(t.rowData.maxTotalPageLoad)||null,nodes:void 0};if(a.value)if(t.root)for(var n=t.root;n;)!n.nodes||!n.value||a.value>n.value?(a.nodes=n.nodes,a.parentValue=n.parentValue||n.value,n.nodes=[a],n=a.nodes||void 0):n=n.nodes[0]||void 0;else t.root=a})}}},d=Object(s.a)(u,n,[],!1,null,null,null);d.options.__file="src/assetbundles/webperf/src/vue/RequestBarChart.vue";e.a=d.exports},36:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};n._withStripped=!0;a(51);var r={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-grey-dark"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(0),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/VuetablePaginationInfoMixin.vue";var o={mixins:[s.exports]},l=Object(i.a)(o,n,[],!1,null,null,null);l.options.__file="src/assetbundles/webperf/src/vue/VuetablePaginationInfo.vue";e.a=l.exports},37:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){t.loadPage(e)}}})]})]:[t._l(t.windowSize,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){t.loadPage(t.windowStart+e-1)}}})]})],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)};n._withStripped=!0;a(1);var r={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},i=a(0),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/VuetablePaginationMixin.vue";var o={mixins:[s.exports]},l=Object(i.a)(o,n,[],!1,null,null,null);l.options.__file="src/assetbundles/webperf/src/vue/VuetablePagination.vue";e.a=l.exports},38:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"450px",type:"area",options:this.chartOptions,series:this.series}})};n._withStripped=!0;a(45),a(8),a(9),a(1),a(13),a(10),a(14);var r=a(2),i=a.n(r),s=a(15);function o(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){l(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e,a,n,r,i,s){try{var o=t[i](s),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var u=function(t,e,a,n){for(var r="?",i=Object.keys(a),s=0;s<i.length;s++){var o=i[s];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},d={components:{apexcharts:a.n(s).a},props:{title:String,start:String,end:String,pageUrl:{type:String,default:""},siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.create({baseURL:"/webperf/charts/pages-area-chart/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a="",0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,u(e,a,n,function(t){if(void 0!==t[0]){var e=(a=[t[9].data],a.map(function(t){return Math.max.apply(null,t)}))[0];e=1e3*Math.ceil(e/1e3+.5),r.chartOptions=o({},r.chartOptions,{},{yaxis:{max:e,labels:{formatter:function(t){return r.statFormatter(t)}}},labels:t[0].labels}),r.series=t}var a});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(t){c(i,n,r,s,o,"next",t)}function o(t){c(i,n,r,s,o,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-pages-detail",toolbar:{show:!1},sparkline:{enabled:!1},animations:{enabled:!1}},tooltip:{enabled:!0,inverseOrder:!0,x:{show:!1}},colors:["#CC1F1A","#E3342F","#EF5753","#DE751F","#F6993F","#FAAD63","#2779BD","#3490DC","#6CB2EB","#BCDEFA"],stroke:{curve:"smooth",width:3},fill:{type:"solid",opacity:.9,gradient:{enabled:!1}},legend:{formatter:void 0,offsetX:0,offsetY:-10},xaxis:{labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},yaxis:{min:0,max:0,seriesName:"Time",labels:{formatter:function(e){return t.statFormatter(e)}}},labels:[],title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue}}},f=a(0),p=Object(f.a)(d,n,[],!1,null,null,null);p.options.__file="src/assetbundles/webperf/src/vue/PageDetailAreaChart.vue";e.a=p.exports},39:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.series.length?t._e():a("div",{staticClass:"text-3xl text-center py-10"},[t._v("\n        🎉 No recommendations found. Nice job!\n    ")]),t._v(" "),t._l(t.series,function(e){return a("div",[a("div",{staticClass:"field pb-4"},[a("p",{staticClass:"warning text-2xl leading-normal"},[a("span",{domProps:{innerHTML:t._s(e.summary)}})]),t._v(" "),a("div",{staticClass:"heading",staticStyle:{"padding-left":"26px"}},[a("p",{staticClass:"instructions text-xl leading-tight"},[a("span",{domProps:{innerHTML:t._s(e.detail)}}),t._v(" "),a("span",{staticClass:"field inline-block m-0"},[""!==e.learnMoreUrl?a("a",{staticClass:"go notice",attrs:{href:e.learnMoreUrl,target:"_blank",rel:"noopener,nofollow"}},[t._v("Learn More")]):t._e()])])])])])}),t._v(" "),a("sample-pane-footer",{attrs:{start:"start",end:"end",subject:"recommendations",column:"id","site-id":t.siteId,"display-dev-mode-warning":t.devModeWarning}})],2)};n._withStripped=!0;a(8),a(9),a(1),a(13),a(10),a(14);var r=a(2),i=a.n(r),s=a(17);function o(t,e,a,n,r,i,s){try{var o=t[i](s),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var l=function(t,e,a,n){for(var r="?",i=Object.keys(a),s=0;s<i.length;s++){var o=i[s];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},c={components:{"sample-pane-footer":s.a},props:{start:String,end:String,devModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.create({baseURL:"/webperf/recommendations/list/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a="",0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,l(e,a,n,function(t){void 0!==t[0]&&(r.series=t)});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(t){o(i,n,r,s,l,"next",t)}function l(t){o(i,n,r,s,l,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{series:[],displayStart:this.start,displayEnd:this.end}}},u=a(0),d=Object(u.a)(c,n,[],!1,null,null,null);d.options.__file="src/assetbundles/webperf/src/vue/RecommendationsList.vue";e.a=d.exports},40:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"300px",type:"radialBar",options:this.chartOptions,series:this.series}})};n._withStripped=!0;a(45),a(8),a(9),a(1),a(13),a(10),a(14);var r=a(2),i=a.n(r),s=a(15),o=a.n(s),l=a(3);function c(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){u(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function d(t,e,a,n,r,i,s){try{var o=t[i](s),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var f=function(t,e,a,n){for(var r="?",i=Object.keys(a),s=0;s<i.length;s++){var o=i[s];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},p={components:{apexcharts:o.a},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.column,0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,f(e,a,n,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>r.displayMaxValue&&(r.displayMaxValue=e),e=100*e/r.displayMaxValue;var a=r.triBlend.colorFromPercentage(e);r.chartOptions=c({},r.chartOptions,{},{colors:[a],plotOptions:{radialBar:{dataLabels:{value:{color:a}}}}}),r.series=[e]}});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(t){d(i,n,r,s,o,"next",t)}function o(t){d(i,n,r,s,o,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-dashboard-radial-bar",fontFamily:"inherit",toolbar:{show:!1}},states:{hover:{filter:{type:"none",value:0}}},colors:["#000000"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{size:"65%"},track:{background:"#f1f5f8",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1,fontSize:"16px",color:"#333",offsetY:100},value:{offsetY:10,fontSize:"40px",color:"#333",style:{cssClass:"apexcharts-datalabel-value"},formatter:function(e){return e=e*t.displayMaxValue/100,Number(e).toFixed(2)+"s"}}}}},labels:[this.title],title:{text:this.title,offsetY:18,align:"center",style:{fontSize:"16px",cssClass:"apexcharts-title-text"}},stroke:{width:1,lineCap:"round"}},series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new l.a(this.fastColor,this.averageColor,this.slowColor)}}},h=a(0),v=Object(h.a)(p,n,[],!1,null,null,null);v.options.__file="src/assetbundles/webperf/src/vue/DashboardRadialBarChart.vue";e.a=v.exports},41:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-grey-dark"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])};n._withStripped=!0;var r={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},i=a(0),s=Object(i.a)(r,n,[],!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/VuetableFilterBar.vue";e.a=s.exports},42:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simple-bar-chart-wrapper px-5 py-3"},[a("div",{staticClass:"clearafter py-2"},[a("div",{staticClass:"simple-bar-chart-label text-base font-bold"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value text-base font-bold"},[t._v(t._s(t.statFormatter(t.series[0])))])]),t._v(" "),a("div",{staticClass:"py-2"},[a("div",{staticClass:"simple-bar-chart-track rounded-full bg-grey-lighter"},[a("div",{staticClass:"simple-bar-line h-3 rounded-full",style:{width:t.series[0]+"%",backgroundColor:t.barColor}})])])])};n._withStripped=!0;a(8),a(9),a(1),a(13),a(10),a(14);var r=a(2),i=a.n(r),s=a(3);function o(t,e,a,n,r,i,s){try{var o=t[i](s),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var l=function(t,e,a,n){for(var r="?",i=Object.keys(a),s=0;s<i.length;s++){var o=i[s];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},c={components:{},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.column,0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,l(e,a,n,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>r.displayMaxValue&&(r.displayMaxValue=e),e=100*e/r.displayMaxValue,r.barColor=r.triBlend.colorFromPercentage(e),r.series=[e]}});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function s(t){o(i,n,r,s,l,"next",t)}function l(t){o(i,n,r,s,l,"throw",t)}s(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t){return t=t*this.displayMaxValue/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{barColor:"#000",series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new s.a(this.fastColor,this.averageColor,this.slowColor)}}},u=a(0),d=Object(u.a)(c,n,[],!1,null,null,null);d.options.__file="src/assetbundles/webperf/src/vue/DashboardSimpleBarChart.vue";e.a=d.exports},44:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"relative single-line-truncate-wrapper"},[a("div",{staticClass:"text-base font-normal truncate-label",staticStyle:{width:"100%",height:"20px"},attrs:{title:t.title}},[t.title?a("a",{staticStyle:{color:"rgb(26, 13, 171)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.title)+"\n            ")]):a("span",{staticClass:"text-grey-light"},[a("em",[t._v("Craft backend route")])])])]),t._v(" "),a("div",{staticClass:"relative single-line-truncate-wrapper"},[a("cite",{staticClass:"text-sm font-normal truncate-label single-line-truncate",staticStyle:{width:"100%"},attrs:{title:t.url}},[a("a",{staticClass:"hover:no-underline",staticStyle:{color:"rgb(0, 102, 33)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.url)+"\n            ")])])]),t._v(" "),a("div",{staticClass:"py-2"},[a("div",{staticClass:"simple-bar-chart-track rounded-full bg-grey-lighter"},[a("div",{staticClass:"simple-bar-line h-2 rounded-full",style:{width:t.width+"%",backgroundColor:t.color}})])])])};n._withStripped=!0;a(1);var r={name:"page-result-cell",props:{title:String,url:String,width:Number,color:String}},i=a(0),s=Object(i.a)(r,n,[],!1,null,null,null);s.options.__file="src/assetbundles/webperf/src/vue/PageResultCell.vue";e.a=s.exports}});
//# sourceMappingURL=page-detail.js.map