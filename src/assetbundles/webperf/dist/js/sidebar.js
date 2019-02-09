/*!
 * @project        Webperf
 * @name           sidebar.js
 * @author         Andrew Welch
 * @build          Sat, Feb 9, 2019 4:34 AM ET
 * @release        4a90d173c59056b60c5c073c913f9cc742752ed8 [develop]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var n,i,o=e[0],l=e[1],u=e[2],d=0,p=[];d<o.length;d++)i=o[d],a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(c&&c(e);p.length;)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={8:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;s.push([175,0]),r()}({175:function(t,e,r){"use strict";r.r(e);var n=r(3),a=r.n(n),s=function(){var t=this.$createElement;return(this._self._c||t)("apexcharts",{attrs:{width:"100%",height:"180px",type:"radialBar",options:this.chartOptions,series:this.series}})};s._withStripped=!0;r(27),r(6),r(7),r(1),r(8),r(5),r(9);var i=r(2),o=r.n(i),l=r(10),u=r.n(l),c=r(4);function d(t){for(var e=1;e<arguments.length;e++)if(e%2){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){p(t,e,r[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t,e,r,n,a,s,i){try{var o=t[s](i),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(n,a)}var f=function(t,e,r,n){for(var a="?",s=Object.keys(r),i=0;i<s.length;i++){var o=s[i];e=e+a+encodeURIComponent(o)+"="+encodeURIComponent(r[o]),a="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},v={components:{apexcharts:u.a},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,r,n,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),r=this.column,0!==this.siteId&&(r+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,f(e,r,n,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>a.displayMaxValue&&(a.displayMaxValue=e),e=100*e/a.displayMaxValue;var r=a.triBlend.colorFromPercentage(e);a.chartOptions=d({},a.chartOptions,{},{colors:[r],plotOptions:{radialBar:{dataLabels:{value:{color:r}}}}}),a.series=[e]}});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function i(t){h(s,n,a,i,o,"next",t)}function o(t){h(s,n,a,i,o,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-dashboard-radial-bar",fontFamily:"inherit",toolbar:{show:!1}},states:{hover:{filter:{type:"none",value:0}}},colors:["#000000"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{size:"65%"},track:{background:"#dae1e7",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1,fontSize:"16px",color:"#333",offsetY:100},value:{offsetY:6,fontSize:"18px",color:"#333",style:{cssClass:"apexcharts-datalabel-value"},formatter:function(e){return e=e*t.displayMaxValue/100,Number(e).toFixed(2)+"s"}}}}},labels:[this.title],title:{text:this.title,offsetY:20,align:"center",style:{color:"#606f7b",fontSize:"15px",cssClass:"apexcharts-title-text"}},stroke:{width:1,lineCap:"round"}},series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new c.a(this.fastColor,this.averageColor,this.slowColor)}}},g=r(0),m=Object(g.a)(v,s,[],!1,null,null,null);m.options.__file="src/assetbundles/webperf/src/vue/charts/common/SmallRadialBarChart.vue";var y=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"simple-bar-chart-wrapper px-3 py-1"},[r("div",{staticClass:"clearafter py-1"},[r("div",{staticClass:"simple-bar-chart-label text-sm font-bold text-grey-darker"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"simple-bar-chart-value text-sm font-bold text-grey-darker"},[t._v(t._s(t.statFormatter(t.series[0])))])]),t._v(" "),r("div",{staticClass:"py-1"},[r("div",{staticClass:"simple-bar-chart-track rounded-full bg-grey-light"},[r("div",{staticClass:"simple-bar-line h-1 rounded-full",style:{width:t.series[0]+"%",backgroundColor:t.barColor}})])])])};function S(t,e,r,n,a,s,i){try{var o=t[s](i),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(n,a)}b._withStripped=!0;var x=function(t,e,r,n){for(var a="?",s=Object.keys(r),i=0;i<s.length;i++){var o=s[i];e=e+a+encodeURIComponent(o)+"="+encodeURIComponent(r[o]),a="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},w={components:{},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,r,n,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),r=this.column,0!==this.siteId&&(r+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,x(e,r,n,function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>a.displayMaxValue&&(a.displayMaxValue=e),e=100*e/a.displayMaxValue,a.barColor=a.triBlend.colorFromPercentage(e),a.series=[e]}});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function i(t){S(s,n,a,i,o,"next",t)}function o(t){S(s,n,a,i,o,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t){return t=t*this.displayMaxValue/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{barColor:"#000",series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new c.a(this.fastColor,this.averageColor,this.slowColor)}}},C=Object(g.a)(w,b,[],!1,null,null,null);C.options.__file="src/assetbundles/webperf/src/vue/charts/common/SmallSimpleBarChart.vue";var _=C.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"field"},[t.samples>=100?r("div",{staticClass:"heading"},[r("p",{staticClass:"instructions"},[t._v("Average of "),r("strong",[t._v(t._s(t.formatNumber(t.samples)))]),t._v(" data sample"),1!==t.samples?r("span",[t._v("s")]):t._e(),t._v(".")])]):t._e(),t._v(" "),t.samples<100?r("p",{staticClass:"warning"},[t._v("Average of only "),r("strong",[t._v(t._s(t.formatNumber(t.samples)))]),t._v(" data sample"),1!==t.samples?r("span",[t._v("s")]):t._e(),t._v(".")]):t._e()])};R._withStripped=!0;r(22),r(26);function O(t,e,r,n,a,s,i){try{var o=t[s](i),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(n,a)}var j=function(t,e,r,n){for(var a="?",s=Object.keys(r),i=0;i<s.length;i++){var o=s[i];e=e+a+encodeURIComponent(o)+"="+encodeURIComponent(r[o]),a="&"}t.get(e).then(function(t){n&&n(t.data)}).catch(function(t){console.log(t)})},P={components:{},props:{start:String,end:String,column:String,displayDevModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},subject:{type:String,default:""},siteId:{type:Number,default:0}},methods:{getSeriesData:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,r,n,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.create({baseURL:"/webperf/charts/dashboard-stats-average/",headers:{"X-Requested-With":"XMLHttpRequest"}}),r=this.column,0!==this.siteId&&(r+="/"+this.siteId),n={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl},t.next=6,j(e,r,n,function(t){void 0!==t.cnt&&(a.samples=t.cnt)});case 6:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function i(t){O(s,n,a,i,o,"next",t)}function o(t){O(s,n,a,i,o,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}(),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},formatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",function(e){return t.onChangeRange(e)})},data:function(){return{samples:0,displayEnd:this.end,displayMaxValue:this.maxValue}}},M=Object(g.a)(P,R,[],!1,null,null,null);M.options.__file="src/assetbundles/webperf/src/vue/common/SmallSamplePaneFooter.vue";var k=M.exports;new a.a({el:"#cp-nav-content",components:{"small-radial-bar-chart":y,"small-simple-bar-chart":_,"small-sample-pane-footer":k},data:{},mounted:function(){}})},4:function(t,e,r){"use strict";r.d(e,"a",function(){return a});r(22);function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#00C800",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#FFFF00",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#C80000";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clr1=this.HexToRGB(e),this.clr2=this.HexToRGB(r),this.clr3=this.HexToRGB(n)}var e,r,a;return e=t,(r=[{key:"RGBToHex",value:function(t,e,r){var n;return n=(t<<16|e<<8|r).toString(16).toUpperCase(),new Array(7-n.length).join("0")+n}},{key:"HexToRGB",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},{key:"colorFromPercentage",value:function(t){var e=this.clr1,r=this.clr2;t>=50&&(e=this.clr2,r=this.clr3,t-=50);var n=t/50,a=Math.round(e.r+n*(r.r-e.r)),s=Math.round(e.g+n*(r.g-e.g)),i=Math.round(e.b+n*(r.b-e.b));return"#"+this.RGBToHex(a,s,i)}}])&&n(e.prototype,r),a&&n(e,a),t}()}});
//# sourceMappingURL=sidebar.js.map