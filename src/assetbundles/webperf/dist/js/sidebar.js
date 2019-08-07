/*!
 * @project        Webperf
 * @name           sidebar.js
 * @author         Andrew Welch
 * @build          Tue, Aug 6, 2019 7:57 PM ET
 * @release        42bfb80266b1991d148bde00b41f10b99c4b1479 [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(u&&u(e);d.length;)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={7:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([96,0]),r()}({5:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var a=r(17),n=r.n(a),s=r(18),i=r.n(s),o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#00C800",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#FFFF00",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#C80000";n()(this,t),this.clr1=this.HexToRGB(e),this.clr2=this.HexToRGB(r),this.clr3=this.HexToRGB(a)}return i()(t,[{key:"RGBToHex",value:function(t,e,r){var a;return a=(t<<16|e<<8|r).toString(16).toUpperCase(),new Array(7-a.length).join("0")+a}},{key:"HexToRGB",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},{key:"colorFromPercentage",value:function(t){var e=this.clr1,r=this.clr2;t>=50&&(e=this.clr2,r=this.clr3,t-=50);var a=t/50,n=Math.round(e.r+a*(r.r-e.r)),s=Math.round(e.g+a*(r.g-e.g)),i=Math.round(e.b+a*(r.b-e.b));return"#"+this.RGBToHex(n,s,i)}}]),t}()},96:function(t,e,r){"use strict";r.r(e);var a=r(4),n=r.n(a),s=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"180px",type:"radialBar",options:this.chartOptions,series:this.series}})};s._withStripped=!0;var i=r(1),o=r.n(i),l=r(6),c=r.n(l),u=r(2),p=r.n(u),d=r(3),h=r.n(d),f=r(7),g=r.n(f),v=r(5);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(r,!0).forEach(function(e){c()(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b,S=function(t,e,r,a){for(var n="?",s=0,i=Object.keys(r);s<i.length;s++){var o=i[s];e=e+n+encodeURIComponent(o)+"="+encodeURIComponent(r[o]),n="&"}t.get(e).then(function(t){a&&a(t.data)}).catch(function(t){console.log(t)})},x={components:{apexcharts:g.a},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:(b=p()(o.a.mark(function t(){var e,r,a,n=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),r=this.column,0!==this.siteId&&(r+="/"+this.siteId),a={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,S(e,r,a,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>n.displayMaxValue&&(n.displayMaxValue=e),e=100*e/n.displayMaxValue;var r=n.triBlend.colorFromPercentage(e);n.chartOptions=y({},n.chartOptions,{},{colors:[r],plotOptions:{radialBar:{dataLabels:{value:{color:r}}}}}),n.series=[e]}});case 6:case"end":return t.stop()}},t,this)})),function(){return b.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;void 0!==this.$events&&this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-dashboard-radial-bar",fontFamily:"inherit",toolbar:{show:!1}},states:{hover:{filter:{type:"none",value:0}}},colors:["#000000"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{size:"65%"},track:{background:"#dae1e7",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1,fontSize:"16px",color:"#333",offsetY:100},value:{offsetY:6,fontSize:"18px",color:"#333",style:{cssClass:"apexcharts-datalabel-value"},formatter:function(e){return e=e*t.displayMaxValue/100,Number(e).toFixed(2)+"s"}}}}},labels:[this.title],title:{text:this.title,offsetY:20,align:"center",style:{color:"#606f7b",fontSize:"15px",cssClass:"apexcharts-title-text"}},stroke:{width:1,lineCap:"round"}},series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new v.a(this.fastColor,this.averageColor,this.slowColor)}}},C=r(0),w=Object(C.a)(x,s,[],!1,null,null,null);w.options.__file="src/assetbundles/webperf/src/vue/charts/common/SmallRadialBarChart.vue";var _=w.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simple-bar-chart-wrapper px-3 py-1"},[r("div",{staticClass:"clearafter py-1"},[r("div",{staticClass:"simple-bar-chart-label text-sm font-bold text-gray-600"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"simple-bar-chart-value text-sm font-bold text-gray-600"},[t._v(t._s(t.statFormatter(t.series[0])))])]),t._v(" "),r("div",{staticClass:"py-1"},[r("div",{staticClass:"simple-bar-chart-track rounded-full bg-gray-300"},[r("div",{staticClass:"simple-bar-line h-1 rounded-full",style:{width:t.series[0]+"%",backgroundColor:t.barColor}})])])])};O._withStripped=!0;var R=function(t,e,r,a){for(var n="?",s=0,i=Object.keys(r);s<i.length;s++){var o=i[s];e=e+n+encodeURIComponent(o)+"="+encodeURIComponent(r[o]),n="&"}t.get(e).then(function(t){a&&a(t.data)}).catch(function(t){console.log(t)})},j={components:{},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t=p()(o.a.mark(function t(){var e,r,a,n=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),r=this.column,0!==this.siteId&&(r+="/"+this.siteId),a={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,R(e,r,a,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>n.displayMaxValue&&(n.displayMaxValue=e),e=100*e/n.displayMaxValue,n.barColor=n.triBlend.colorFromPercentage(e),n.series=[e]}});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t){return t=t*this.displayMaxValue/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;void 0!==this.$events&&this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{barColor:"#000",series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new v.a(this.fastColor,this.averageColor,this.slowColor)}}},M=Object(C.a)(j,O,[],!1,null,null,null);M.options.__file="src/assetbundles/webperf/src/vue/charts/common/SmallSimpleBarChart.vue";var F=M.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field"},[t.samples>=100?r("div",{staticClass:"heading"},[r("p",{staticClass:"instructions"},[t._v("Average of "),r("strong",[t._v(t._s(t.formatNumber(t.samples)))]),t._v(" data sample"),1!==t.samples?r("span",[t._v("s")]):t._e(),t._v(".")])]):t._e(),t._v(" "),t.samples<100?r("p",{staticClass:"warning"},[t._v("Average of only "),r("strong",[t._v(t._s(t.formatNumber(t.samples)))]),t._v(" data sample"),1!==t.samples?r("span",[t._v("s")]):t._e(),t._v(".")]):t._e()])};P._withStripped=!0;var U=function(t,e,r,a){for(var n="?",s=0,i=Object.keys(r);s<i.length;s++){var o=i[s];e=e+n+encodeURIComponent(o)+"="+encodeURIComponent(r[o]),n="&"}t.get(e).then(function(t){a&&a(t.data)}).catch(function(t){console.log(t)})},k={components:{},props:{start:String,end:String,column:String,displayDevModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},subject:{type:String,default:""},siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t=p()(o.a.mark(function t(){var e,r,a,n=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),r=this.column,0!==this.siteId&&(r+="/"+this.siteId),a={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,U(e,r,a,function(t){void 0!==t.cnt&&(n.samples=t.cnt)});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},formatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created:function(){this.getSeriesData()},mounted:function(){var t=this;void 0!==this.$events&&this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{samples:0,displayEnd:this.end,displayMaxValue:this.maxValue}}},I=Object(C.a)(k,P,[],!1,null,null,null);I.options.__file="src/assetbundles/webperf/src/vue/common/SmallSamplePaneFooter.vue";var B=I.exports;new n.a({el:"#cp-nav-content",components:{"small-radial-bar-chart":_,"small-simple-bar-chart":F,"small-sample-pane-footer":B},data:{},mounted:function(){}})}});
//# sourceMappingURL=sidebar.js.map