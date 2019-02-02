/*!
 * @project        Webperf
 * @name           dashboard.js
 * @author         Andrew Welch
 * @build          Sat, Feb 2, 2019 9:56 PM ET
 * @release        1dbdcadcfc157616d47dfc8eec97360363b5e200 [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);p.length;)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={2:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([174,1,0]),a()}({10:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"heading"},[a("p",{staticClass:"instructions"},[t._v("The "+t._s(t.subject)+" data is an "),a("em",[t._v("average")]),t._v(" of "),a("strong",[t._v(t._s(t.formatNumber(t.samples)))]),t._v(" data sample"),1!==t.samples?a("span",[t._v("s")]):t._e(),t._v(".")])]),t._v(" "),t.samples<100?a("p",{staticClass:"warning"},[t._v("Webperf has collected less than "),a("strong",[t._v("100")]),t._v(" data samples. The sample size is not statistically significant, so above averaged results may not be meaningful.")]):t._e(),t._v(" "),t.displayDevModeWarning?a("p",{staticClass:"warning"},[t._v("Craft performance will be slower than normal with "),a("code",[t._v("devMode")]),t._v(" enabled due to extensive logging and disabling of some caches. "),t._m(0)]):t._e()])};n._withStripped=!0;a(6),a(25),a(26),a(7),a(1),a(8),a(5),a(9);var r=a(2),s=a.n(r);function i(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var o=function(t,e,a,n){for(var r="?",s=Object.keys(a),i=0;i<s.length;i++){var o=s[i];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},l={components:{},props:{start:String,end:String,column:String,displayDevModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},subject:{type:String,default:""},siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.column,0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,o(e,a,n,function(t){void 0!==t.cnt&&(r.samples=t.cnt)});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var s=t.apply(e,a);function o(t){i(s,n,r,o,l,"next",t)}function l(t){i(s,n,r,o,l,"throw",t)}o(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},formatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{samples:0,displayEnd:this.end,displayMaxValue:this.maxValue}}},c=a(0),u=Object(c.a)(l,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"field inline-block m-0"},[e("a",{staticClass:"notice go",attrs:{href:"https://craftcms.com/guides/what-dev-mode-does",target:"_blank"}},[this._v("Learn More")])])}],!1,null,null,null);u.options.__file="src/assetbundles/webperf/src/vue/common/SamplePaneFooter.vue";e.a=u.exports},12:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"readable inline-block"},[a("vue-ctk-date-time-picker",{attrs:{range:!0,"no-header":!0,"only-date":!0,"no-value-to-custom-elem":!0,"custom-shortcuts":t.customShortcuts,label:"Data Sample Date Range",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD",color:"dimgray","no-button":!0,"auto-close":!0},on:{input:function(e){t.onInput()}},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}},[a("button",{staticClass:"btn menubtn text-sm leading-normal text-left",staticStyle:{"min-width":"237px"},attrs:{type:"button","data-icon":"date",tabindex:"0",role:"combobox","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            "+t._s(t.dateRange.start)+" → "+t._s(t.dateRange.end)+"\n        ")])])],1)};n._withStripped=!0;var r=a(23),s=a.n(r),i=(a(47),{name:"sample-range-picker",components:{"vue-ctk-date-time-picker":s.a},data:function(){return{dateRange:{},customShortcuts:[{label:"Today",value:"day",isSelected:!1},{label:"Yesterday",value:"-day",isSelected:!1},{label:"This Month",value:"month",isSelected:!1},{label:"Last Month",value:"-month",isSelected:!1},{label:"This Year",value:"year",isSelected:!1},{label:"Last Year",value:"-year",isSelected:!1},{label:"Last 365 days",value:365,isSelected:!0}]}},methods:{onInput:function(){this.$events.fire("change-range",this.dateRange)}}}),o=a(0),l=Object(o.a)(i,n,[],!1,null,null,null);l.options.__file="src/assetbundles/webperf/src/vue/common/SampleRangePicker.vue";e.a=l.exports},174:function(t,e,a){"use strict";a.r(e);var n=a(3),r=a.n(n),s=a(22),i=a.n(s),o=function(){var t=this.$createElement;return(this._self._c||t)("main")};o._withStripped=!0;var l=a(92),c=a.n(l);r.a.use(c.a);var u={mounted:function(){var t=this;this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout(function(){t.$confetti.stop()},5e3)},methods:{}},d=a(0),p=Object(d.a)(u,o,[],!1,null,null,null);p.options.__file="src/assetbundles/webperf/src/vue/common/Confetti.vue";var f=p.exports,h=a(28),v=a(29),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"px-3 py-3"},[a("div",{staticClass:"text-left text-base font-bold px-2 pt-2"},[t._v("\n        Slowest pages\n    ")]),t._v(" "),t._l(t.series,function(e){return a("div",{staticClass:"file-list-wrapper p-2"},[a("dashboard-file-list-cell",{attrs:{title:e.title,url:e.url,"detail-page-url":e.detailPageUrl,data:t.statFormatter(e.data,e.maxValue),cnt:e.cnt,width:e.data,color:e.barColor}})],1)})],2)};g._withStripped=!0;a(6),a(7),a(1),a(8),a(5),a(9);var m=a(2),b=a.n(m),y=a(4),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{click:function(e){t.redirectTo(t.detailPageUrl)}}},[a("div",{staticClass:"clearafter pb-1"},[a("div",{staticClass:"simple-bar-chart-label text-base font-normal truncate-label",staticStyle:{width:"90%"},attrs:{title:t.title}},[t.title?a("a",{staticStyle:{color:"rgb(26, 13, 171)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.title)+"\n            ")]):a("span",{staticClass:"text-grey-light"},[a("em",[t._v("Craft backend route")])])]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value"},[a("sample-size-warning",{attrs:{sample:t.cnt}})],1)]),t._v(" "),a("div",{staticClass:"clearafter pb-1"},[a("cite",{staticClass:"simple-bar-chart-label text-sm font-normal truncate-label",staticStyle:{width:"80%"},attrs:{title:t.url}},[a("a",{staticClass:"hover:no-underline",staticStyle:{color:"rgb(0, 102, 33)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.url)+"\n            ")])]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value text-sm font-bold"},[t._v(t._s(t.data))])]),t._v(" "),a("div",{staticClass:"py-1"},[a("div",{staticClass:"file-list-chart-track rounded-full bg-grey-lighter"},[a("div",{staticClass:"simple-bar-line h-2 rounded-full",style:{width:t.width+"%",backgroundColor:t.color}})])])])};_._withStripped=!0;var S={name:"dashboard-file-list-cell",components:{SampleSizeWarning:a(48).a},props:{title:String,url:String,detailPageUrl:String,data:String,cnt:Number,width:Number,color:String},methods:{redirectTo:function(t){window.location.href=t}}},w=Object(d.a)(S,_,[],!1,null,null,null);w.options.__file="src/assetbundles/webperf/src/vue/charts/dashboard/DashboardFileListCell.vue";var C=w.exports;function x(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var R=function(t,e,a,n){for(var r="?",s=Object.keys(a),i=0;i<s.length;i++){var o=s[i];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},k={name:"dashboard-file-list",components:{"dashboard-file-list-cell":C},props:{start:String,end:String,column:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},limit:{type:Number,default:3},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=b.a.create({baseURL:"/webperf/charts/dashboard-slowest-pages/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.column+"/"+this.limit,0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd},t.next=6,R(e,a,n,function(t){t.forEach(function(t,e,a){var n=t.avg/1e3,s=r.maxValue;n>s&&(s=n),n=100*n/s,a[e].data=n,a[e].maxValue=s,a[e].barColor=r.triBlend.colorFromPercentage(n)}),r.series=t});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var s=t.apply(e,a);function i(t){x(s,n,r,i,o,"next",t)}function o(t){x(s,n,r,i,o,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t,e){return t=t*e/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{series:[],displayStart:this.start,displayEnd:this.end,triBlend:new y.a(this.fastColor,this.averageColor,this.slowColor)}}},O=Object(d.a)(k,g,[],!1,null,null,null);O.options.__file="src/assetbundles/webperf/src/vue/charts/dashboard/DashboardFileList.vue";var M=O.exports,P=a(12),j=a(10),U=a(31);r.a.use(i.a);new r.a({el:"#cp-nav-content",components:{confetti:f,"radial-bar-chart":h.a,"simple-bar-chart":v.a,"dashboard-file-list":M,"sample-range-picker":P.a,"sample-pane-footer":j.a,"recommendations-list":U.a},data:{},mounted:function(){}})},28:function(t,e,a){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"300px",type:"radialBar",options:this.chartOptions,series:this.series}})};n._withStripped=!0;a(33),a(6),a(7),a(1),a(8),a(5),a(9);var r=a(2),s=a.n(r),i=a(13),o=a.n(i),l=a(4);function c(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){u(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function d(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var p=function(t,e,a,n){for(var r="?",s=Object.keys(a),i=0;i<s.length;i++){var o=s[i];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},f={components:{apexcharts:o.a},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.column,0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,p(e,a,n,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>r.displayMaxValue&&(r.displayMaxValue=e),e=100*e/r.displayMaxValue;var a=r.triBlend.colorFromPercentage(e);r.chartOptions=c({},r.chartOptions,{},{colors:[a],plotOptions:{radialBar:{dataLabels:{value:{color:a}}}}}),r.series=[e]}});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var s=t.apply(e,a);function i(t){d(s,n,r,i,o,"next",t)}function o(t){d(s,n,r,i,o,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-dashboard-radial-bar",fontFamily:"inherit",toolbar:{show:!1}},states:{hover:{filter:{type:"none",value:0}}},colors:["#000000"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{size:"65%"},track:{background:"#f1f5f8",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1,fontSize:"16px",color:"#333",offsetY:100},value:{offsetY:10,fontSize:"40px",color:"#333",style:{cssClass:"apexcharts-datalabel-value"},formatter:function(e){return e=e*t.displayMaxValue/100,Number(e).toFixed(2)+"s"}}}}},labels:[this.title],title:{text:this.title,offsetY:18,align:"center",style:{fontSize:"16px",cssClass:"apexcharts-title-text"}},stroke:{width:1,lineCap:"round"}},series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new l.a(this.fastColor,this.averageColor,this.slowColor)}}},h=a(0),v=Object(h.a)(f,n,[],!1,null,null,null);v.options.__file="src/assetbundles/webperf/src/vue/charts/common/RadialBarChart.vue";e.a=v.exports},29:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simple-bar-chart-wrapper px-5 py-3"},[a("div",{staticClass:"clearafter py-2"},[a("div",{staticClass:"simple-bar-chart-label text-base font-bold"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value text-base font-bold"},[t._v(t._s(t.statFormatter(t.series[0])))])]),t._v(" "),a("div",{staticClass:"py-2"},[a("div",{staticClass:"simple-bar-chart-track rounded-full bg-grey-lighter"},[a("div",{staticClass:"simple-bar-line h-3 rounded-full",style:{width:t.series[0]+"%",backgroundColor:t.barColor}})])])])};n._withStripped=!0;a(6),a(7),a(1),a(8),a(5),a(9);var r=a(2),s=a.n(r),i=a(4);function o(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var l=function(t,e,a,n){for(var r="?",s=Object.keys(a),i=0;i<s.length;i++){var o=s[i];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},c={components:{},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a=this.column,0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,l(e,a,n,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>r.displayMaxValue&&(r.displayMaxValue=e),e=100*e/r.displayMaxValue,r.barColor=r.triBlend.colorFromPercentage(e),r.series=[e]}});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var s=t.apply(e,a);function i(t){o(s,n,r,i,l,"next",t)}function l(t){o(s,n,r,i,l,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t){return t=t*this.displayMaxValue/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{barColor:"#000",series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new i.a(this.fastColor,this.averageColor,this.slowColor)}}},u=a(0),d=Object(u.a)(c,n,[],!1,null,null,null);d.options.__file="src/assetbundles/webperf/src/vue/charts/common/SimpleBarChart.vue";e.a=d.exports},31:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.series.length?t._e():a("div",{staticClass:"text-3xl text-center py-10"},[t._v("\n        🎉 No recommendations found. Nice job!\n    ")]),t._v(" "),t._l(t.series,function(e){return a("div",[a("div",{staticClass:"field pb-4"},[a("p",{staticClass:"warning text-2xl leading-normal"},[a("span",{domProps:{innerHTML:t._s(e.summary)}})]),t._v(" "),a("div",{staticClass:"heading",staticStyle:{"padding-left":"26px"}},[a("p",{staticClass:"instructions text-xl leading-tight"},[a("span",{domProps:{innerHTML:t._s(e.detail)}}),t._v(" "),a("span",{staticClass:"field inline-block m-0"},[""!==e.learnMoreUrl?a("a",{staticClass:"go notice",attrs:{href:e.learnMoreUrl,target:"_blank",rel:"noopener,nofollow"}},[t._v("Learn More")]):t._e()])])])])])}),t._v(" "),a("sample-pane-footer",{attrs:{start:"start",end:"end",subject:"recommendations",column:"id","page-url":t.pageUrl,"site-id":t.siteId,"display-dev-mode-warning":t.devModeWarning}})],2)};n._withStripped=!0;a(6),a(7),a(1),a(8),a(5),a(9);var r=a(2),s=a.n(r),i=a(10);function o(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}var l=function(t,e,a,n){for(var r="?",s=Object.keys(a),i=0;i<s.length;i++){var o=s[i];e=e+r+encodeURIComponent(o)+"="+encodeURIComponent(a[o]),r="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},c={components:{"sample-pane-footer":i.a},props:{start:String,end:String,devModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,a,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.a.create({baseURL:"/webperf/recommendations/list/",headers:{"X-Requested-With":"XMLHttpRequest"}}),a="",0!==this.siteId&&(a+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,l(e,a,n,function(t){void 0!==t[0]&&(r.series=t)});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,a=arguments;return new Promise(function(n,r){var s=t.apply(e,a);function i(t){o(s,n,r,i,l,"next",t)}function l(t){o(s,n,r,i,l,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{series:[],displayStart:this.start,displayEnd:this.end}}},u=a(0),d=Object(u.a)(c,n,[],!1,null,null,null);d.options.__file="src/assetbundles/webperf/src/vue/common/RecommendationsList.vue";e.a=d.exports},4:function(t,e,a){"use strict";a.d(e,"a",function(){return r});a(25);function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#00C800",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#FFFF00",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#C80000";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clr1=this.HexToRGB(e),this.clr2=this.HexToRGB(a),this.clr3=this.HexToRGB(n)}var e,a,r;return e=t,(a=[{key:"RGBToHex",value:function(t,e,a){var n;return n=(t<<16|e<<8|a).toString(16).toUpperCase(),new Array(7-n.length).join("0")+n}},{key:"HexToRGB",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},{key:"colorFromPercentage",value:function(t){var e=this.clr1,a=this.clr2;t>=50&&(e=this.clr2,a=this.clr3,t-=50);var n=t/50,r=Math.round(e.r+n*(a.r-e.r)),s=Math.round(e.g+n*(a.g-e.g)),i=Math.round(e.b+n*(a.b-e.b));return"#"+this.RGBToHex(r,s,i)}}])&&n(e.prototype,a),r&&n(e,r),t}()},48:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field webperf-tooltip text-sm font-normal inline-block"},[t.sample<100?a("p",{staticClass:"warning display-block"},[t._v(" ")]):t._e(),t._v(" "),a("span",{staticClass:"webperf-tooltiptext webperf-sample-tooltip"},[t._v("\n        Only "+t._s(t.sample)+" data sample"),1!==t.sample?a("span",[t._v("s")]):t._e(),t._v(".\n    ")])])};n._withStripped=!0;a(1);var r={name:"sample-size-warning",props:{sample:Number}},s=a(0),i=Object(s.a)(r,n,[],!1,null,null,null);i.options.__file="src/assetbundles/webperf/src/vue/common/SampleSizeWarning.vue";e.a=i.exports}});
//# sourceMappingURL=dashboard.js.map