/*!
 * @project        webperf
 * @name           dashboard.js
 * @author         Andrew Welch
 * @build          Thu Apr 01 2021 20:09:13 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 ©2020 nystudio107.com
 *
 */
(self.webpackChunkwebperf=self.webpackChunkwebperf||[]).push([[966],{4876:function(t,e,a){"use strict";var r=a(7495),n=a(6268),l=a.n(n);Vue.use(l());var i,s={mounted:function(){var t=this;this.$confetti.start({shape:"rect",colors:["DodgerBlue","OliveDrab","Gold","pink","SlateBlue","lightblue","Violet","PaleGreen","SteelBlue","SandyBrown","Chocolate","Crimson"]}),setTimeout((function(){t.$confetti.stop()}),5e3)},methods:{}},o=a(1900),c=(0,o.Z)(s,(function(){var t=this.$createElement;return(this._self._c||t)("main")}),[],!1,null,null,null).exports,u=a(8376),d=a(9275),p=(a(9554),a(9653),a(6977),a(4747),a(7757)),f=a.n(p),h=(a(5666),a(8926)),m=a.n(h),g=a(9669),b=a.n(g),v=a(1177),C={name:"dashboard-file-list-cell",components:{SampleSizeWarning:a(2531).Z},props:{title:String,url:String,detailPageUrl:String,data:String,cnt:Number,width:Number,color:String},methods:{redirectTo:function(t){window.location.href=t}}},S=(0,o.Z)(C,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{click:function(e){return t.redirectTo(t.detailPageUrl)}}},[a("div",{staticClass:"clearafter pb-1"},[a("div",{staticClass:"simple-bar-chart-label text-base font-normal truncate-label",staticStyle:{width:"90%"},attrs:{title:t.title}},[t.title?a("a",{staticStyle:{color:"rgb(26, 13, 171)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.title)+"\n            ")]):a("span",{staticClass:"text-gray-300"},[a("em",[t._v("Craft backend route")])])]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value"},[a("sample-size-warning",{attrs:{sample:t.cnt}})],1)]),t._v(" "),a("div",{staticClass:"clearafter pb-1"},[a("cite",{staticClass:"simple-bar-chart-label text-sm font-normal truncate-label",staticStyle:{width:"80%"},attrs:{title:t.url}},[a("a",{staticClass:"hover:no-underline",staticStyle:{color:"rgb(0, 102, 33)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.url)+"\n            ")])]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value text-sm font-bold"},[t._v(t._s(t.data))])]),t._v(" "),a("div",{staticClass:"py-1"},[a("div",{staticClass:"file-list-chart-track rounded-full bg-gray-200"},[a("div",{staticClass:"simple-bar-line h-2 rounded-full",style:{width:t.width+"%",backgroundColor:t.color}})])])])}),[],!1,null,null,null).exports,y=function(t,e,a,r){t.get(e,{params:a}).then((function(t){r&&r(t.data)})).catch((function(t){console.log(t)}))},w={name:"dashboard-file-list",components:{"dashboard-file-list-cell":S},props:{start:String,end:String,column:String,fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},limit:{type:Number,default:3},maxValue:Number,siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:(i=m()(f().mark((function t(){var e,a,r=this;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=b().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),a={column:this.column,start:this.displayStart,end:this.displayEnd,siteId:this.siteId},t.next=4,y(e,"",a,(function(t){t.forEach((function(t,e,a){var n=t.avg/1e3,l=r.maxValue;n>l&&(l=n),n=100*n/l,a[e].data=n,a[e].maxValue=l,a[e].barColor=r.triBlend.colorFromPercentage(n)})),r.series=t}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t,e){return t=t*e/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},data:function(){return{series:[],displayStart:this.start,displayEnd:this.end,triBlend:new v.Z(this.fastColor,this.averageColor,this.slowColor)}}},_=(0,o.Z)(w,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"px-3 py-3"},[a("div",{staticClass:"text-left text-base font-bold px-2 pt-2"},[t._v("\n        Slowest pages\n    ")]),t._v(" "),t._l(t.series,(function(e){return a("div",{staticClass:"file-list-wrapper p-2"},[a("dashboard-file-list-cell",{attrs:{title:e.title,url:e.url,"detail-page-url":e.detailPageUrl,data:t.statFormatter(e.data,e.maxValue),cnt:e.cnt,width:e.data,color:e.barColor}})],1)}))],2)}),[],!1,null,null,null).exports,x=a(1470),k=a(651),Z=a(7732);Vue.use(r.Z);new Vue({el:"#cp-nav-content",components:{confetti:c,"radial-bar-chart":u.Z,"simple-bar-chart":d.Z,"dashboard-file-list":_,"sample-range-picker":x.Z,"sample-pane-footer":k.Z,"recommendations-list":Z.Z},data:{},mounted:function(){}})}},0,[[4876,666,216,351]]]);
//# sourceMappingURL=dashboard.js.map