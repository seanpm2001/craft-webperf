/*!
 * @project        webperf
 * @name           commons.js
 * @author         Andrew Welch
 * @build          Thu Apr 01 2021 20:09:13 GMT+0000 (Coordinated Universal Time)
 * @copyright      Copyright (c) 2021 ©2020 nystudio107.com
 *
 */
(self.webpackChunkwebperf=self.webpackChunkwebperf||[]).push([[351],{1177:function(t,e,a){"use strict";a.d(e,{Z:function(){return l}});a(9600),a(1539),a(4916),a(9714);var n=a(4575),s=a.n(n),r=a(3913),i=a.n(r),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#00C800",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#FFFF00",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#C80000";s()(this,t),this.clr1=this.HexToRGB(e),this.clr2=this.HexToRGB(a),this.clr3=this.HexToRGB(n)}return i()(t,[{key:"RGBToHex",value:function(t,e,a){var n;return n=(t<<16|e<<8|a).toString(16).toUpperCase(),new Array(7-n.length).join("0")+n}},{key:"HexToRGB",value:function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}},{key:"colorFromPercentage",value:function(t){var e=this.clr1,a=this.clr2;t>=50&&(e=this.clr2,a=this.clr3,t-=50);var n=t/50,s=Math.round(e.r+n*(a.r-e.r)),r=Math.round(e.g+n*(a.g-e.g)),i=Math.round(e.b+n*(a.b-e.b));return"#"+this.RGBToHex(s,r,i)}}]),t}()},8930:function(t,e,a){"use strict";a.d(e,{Z:function(){return b}});a(1249),a(9653);var n=a(7757),s=a.n(n),r=a(9713),i=a.n(r),l=(a(5666),a(8926)),o=a.n(l),c=a(9669),u=a.n(c),d=a(7166);function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h,g=function(t){return t.map((function(t){return Math.max.apply(null,t)}))},v=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.log(t)}))},m={components:{apexcharts:a.n(d)()},props:{title:String,start:String,end:String,pageUrl:{type:String,default:""},siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:(h=o()(s().mark((function t(){var e,a,n=this;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),a={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl,siteId:this.siteId},t.next=4,v(e,"",a,(function(t){if(void 0!==t[0]){var e=g([t[0].data])[0],a=g([t[1].data])[0],s=e>a?e:a;n.chartOptions=f(f({},n.chartOptions),{yaxis:{min:0,max:s,tickAmount:s>10?10:s,labels:{formatter:function(t){return Math.round(t)}}},xaxis:{categories:t[0].labels,type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},labels:t[0].labels}),n.series=t}}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},data:function(){return{chartOptions:{chart:{id:"vuechart-pages-detail",toolbar:{show:!1},sparkline:{enabled:!1},animations:{enabled:!1}},tooltip:{enabled:!0,inverseOrder:!0,x:{show:!1}},colors:["#1F9D55","#CC1F1A"],stroke:{curve:"smooth",width:3},fill:{type:"solid",opacity:.5,gradient:{enabled:!1}},legend:{formatter:void 0,offsetX:0,offsetY:-10},xaxis:{labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},yaxis:{min:0,max:0,seriesName:"Errors",tickAmount:1,labels:{formatter:function(t){return Math.round(t)}}},labels:[],title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue}}},b=(0,a(1900).Z)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexcharts",{attrs:{width:"100%",height:"450px",type:"area",options:t.chartOptions,series:t.series}})}),[],!1,null,null,null).exports},8376:function(t,e,a){"use strict";a.d(e,{Z:function(){return y}});a(9653),a(6977);var n=a(7757),s=a.n(n),r=a(9713),i=a.n(r),l=(a(5666),a(8926)),o=a.n(l),c=a(9669),u=a.n(c),d=a(7166),p=a.n(d),f=a(1177);function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v,m=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.log(t)}))},b={components:{apexcharts:p()},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:(v=o()(s().mark((function t(){var e,a,n=this;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),a={column:this.column,start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl,siteId:this.siteId},t.next=4,m(e,"",a,(function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>n.displayMaxValue&&(n.displayMaxValue=e),e=100*e/n.displayMaxValue;var a=n.triBlend.colorFromPercentage(e);n.chartOptions=g(g({},n.chartOptions),{colors:[a],plotOptions:{radialBar:{dataLabels:{value:{color:a}}}}}),n.series=[e]}}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;void 0!==this.$events&&this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-dashboard-radial-bar",fontFamily:"inherit",toolbar:{show:!1}},states:{hover:{filter:{type:"none",value:0}}},colors:["#000000"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{size:"65%"},track:{background:"#f1f5f8",strokeWidth:"97%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1,fontSize:"16px",color:"#333",offsetY:100},value:{offsetY:10,fontSize:"40px",color:"#333",style:{cssClass:"apexcharts-datalabel-value"},formatter:function(e){return e=e*t.displayMaxValue/100,Number(e).toFixed(2)+"s"}}}}},labels:[this.title],title:{text:this.title,offsetY:18,align:"center",style:{fontSize:"16px",cssClass:"apexcharts-title-text"}},stroke:{width:1,lineCap:"round"}},series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new f.Z(this.fastColor,this.averageColor,this.slowColor)}}},y=(0,a(1900).Z)(b,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexcharts",{attrs:{width:"100%",height:"300px",type:"radialBar",options:t.chartOptions,series:t.series}})}),[],!1,null,null,null).exports},9885:function(t,e,a){"use strict";a.d(e,{Z:function(){return o}});a(9554),a(9653),a(6977);var n={name:"request-bar-recursive",props:{column:String,color:String,label:String,value:Number,parentValue:Number,nodes:Array},methods:{statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"}}},s=a(1900),r=(0,s.Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-5",class:t.color,style:{width:t.value/t.parentValue*100+"%"},attrs:{title:t.label+" "+t.statFormatter(t.value)}},t._l(t.nodes,(function(t){return a("request-bar-recursive",{key:t.column,attrs:{column:t.column,color:t.color,label:t.label,value:t.value,parentValue:t.parentValue,nodes:t.nodes}})})),1)}),[],!1,null,null,null).exports,i=[{column:"pageLoad",color:"bg-blue-200",label:"Page Loaded"},{column:"domInteractive",color:"bg-blue-400",label:"DOM Interactive"},{column:"firstContentfulPaint",color:"bg-blue-500",label:"First Contentful Paint"},{column:"firstPaint",color:"bg-blue-700",label:"First Paint"},{column:"firstByte",color:"bg-orange-400",label:"First Byte"},{column:"connect",color:"bg-orange-500",label:"Connect"},{column:"dns",color:"bg-orange-700",label:"DNS Lookup"},{column:"craftTotalMs",color:"bg-red-400",label:"Craft Rendering"},{column:"craftTwigMs",color:"bg-red-500",label:"Twig Rendering"},{column:"craftDbMs",color:"bg-red-700",label:"Database Queries"}],l={name:"request-bar-chart",components:{"request-bar-recursive":r},props:{rowData:Object},data:function(){return{root:void 0}},mounted:function(){var t=this;void 0!==this.$events&&this.$events.$on("refresh-table-components",(function(e){return t.onTableRefresh(e)}))},created:function(){this.calculateNodes()},methods:{onTableRefresh:function(t){this.calculateNodes()},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"},calculateNodes:function(){var t=this;this.root=void 0,i.forEach((function(e){var a={column:e.column,color:e.color,label:e.label,value:parseFloat(t.rowData[e.column])||null,parentValue:parseFloat(t.rowData.maxTotalPageLoad)||null,nodes:void 0};if(a.value)if(t.root)for(var n=t.root;n;)!n.nodes||!n.value||a.value>n.value?(a.nodes=n.nodes,a.parentValue=n.parentValue||n.value,n.nodes=[a],n=a.nodes||void 0):n=n.nodes[0]||void 0;else t.root=a}))}}},o=(0,s.Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-no-wrap"},["both"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Combined Frontend & Craft Beacon"}},[a("div",{staticClass:"w-2 h-2 bg-blue-700 rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-orange-700 rounded-full"})]):t._e(),t._v(" "),"frontend"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Frontend Beacon only"}},[a("div",{staticClass:"w-2 h-2 bg-blue-700 rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-transparent rounded-full"})]):t._e(),t._v(" "),"craft"===t.rowData.type?a("div",{staticClass:"flex-shrink",attrs:{title:"Craft Beacon only"}},[a("div",{staticClass:"w-2 h-2 bg-transparent rounded-full mb-1"}),t._v(" "),a("div",{staticClass:"w-2 h-2 bg-orange-700 rounded-full"})]):t._e(),t._v(" "),a("div",{staticClass:"flex-grow"},[a("request-bar-recursive",{attrs:{column:t.root.column,color:t.root.color,label:t.root.label,value:t.root.value,parentValue:t.root.parentValue,nodes:t.root.nodes}})],1),t._v(" "),a("div",{staticClass:"flex-shrink"},[t._v("\n        "+t._s(t.statFormatter(t.root.value))+"\n    ")])])}),[],!1,null,null,null).exports},9275:function(t,e,a){"use strict";a.d(e,{Z:function(){return f}});a(9653),a(6977);var n,s=a(7757),r=a.n(s),i=(a(5666),a(8926)),l=a.n(i),o=a(9669),c=a.n(o),u=a(1177),d=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.log(t)}))},p={components:{},props:{title:String,start:String,end:String,column:String,pageUrl:{type:String,default:""},fastColor:{type:String,default:"#00C800"},averageColor:{type:String,default:"#FFFF00"},slowColor:{type:String,default:"#C80000"},maxValue:Number,siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:(n=l()(r().mark((function t(){var e,a,n=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),a={column:this.column,start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl,siteId:this.siteId},t.next=4,d(e,"",a,(function(t){if(void 0!==t.avg){var e=t.avg/1e3;e>n.displayMaxValue&&(n.displayMaxValue=e),e=100*e/n.displayMaxValue,n.barColor=n.triBlend.colorFromPercentage(e),n.series=[e]}}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t){return t=t*this.displayMaxValue/100,Number(t).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;void 0!==this.$events&&this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},data:function(){return{barColor:"#000",series:[0],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue,triBlend:new u.Z(this.fastColor,this.averageColor,this.slowColor)}}},f=(0,a(1900).Z)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"simple-bar-chart-wrapper px-5 py-3"},[a("div",{staticClass:"clearafter py-2"},[a("div",{staticClass:"simple-bar-chart-label text-base font-bold"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"simple-bar-chart-value text-base font-bold"},[t._v(t._s(t.statFormatter(t.series[0])))])]),t._v(" "),a("div",{staticClass:"py-2"},[a("div",{staticClass:"simple-bar-chart-track rounded-full bg-gray-200"},[a("div",{staticClass:"simple-bar-line h-3 rounded-full",style:{width:t.series[0]+"%",backgroundColor:t.barColor}})])])])}),[],!1,null,null,null).exports},8571:function(t,e,a){"use strict";a.d(e,{Z:function(){return m}});a(1249),a(9653),a(6977);var n=a(7757),s=a.n(n),r=a(9713),i=a.n(r),l=(a(5666),a(8926)),o=a.n(l),c=a(9669),u=a.n(c),d=a(7166);function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h,g=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.log(t)}))},v={components:{apexcharts:a.n(d)()},props:{title:String,start:String,end:String,pageUrl:{type:String,default:""},siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:(h=o()(s().mark((function t(){var e,a,n=this;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),a={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl,siteId:this.siteId},t.next=4,g(e,"",a,(function(t){if(void 0!==t[0]){var e=(a=[t[9].data],a.map((function(t){return Math.max.apply(null,t)})))[0];e=1e3*Math.ceil(e/1e3),n.chartOptions=f(f({},n.chartOptions),{yaxis:{min:0,max:e,labels:{formatter:function(t){return n.statFormatter(t)}}},xaxis:{categories:t[0].labels,type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},labels:t[0].labels}),n.series=t}var a}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},statFormatter:function(t){return Number(t/1e3).toFixed(2)+"s"}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},data:function(){var t=this;return{chartOptions:{chart:{id:"vuechart-pages-detail",toolbar:{show:!1},sparkline:{enabled:!1},animations:{enabled:!1}},dataLabels:{enabled:!1},tooltip:{enabled:!0,inverseOrder:!0,x:{show:!1}},colors:["#CC1F1A","#E3342F","#EF5753","#DE751F","#F6993F","#FAAD63","#2779BD","#3490DC","#6CB2EB","#BCDEFA"],stroke:{curve:"smooth",width:3},fill:{type:"solid",opacity:.9,gradient:{enabled:!1}},legend:{formatter:void 0,offsetX:0,offsetY:-10},xaxis:{type:"category",labels:{show:!1,minHeight:"20px"},crosshairs:{width:1}},yaxis:{min:0,max:0,seriesName:"Time",labels:{formatter:function(e){return t.statFormatter(e)}}},labels:[],title:{text:this.title,offsetX:0,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title"}}},series:[{name:"empty",data:[0]}],displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue}}},m=(0,a(1900).Z)(v,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("apexcharts",{attrs:{width:"100%",height:"450px",type:"area",options:t.chartOptions,series:t.series}})}),[],!1,null,null,null).exports},7732:function(t,e,a){"use strict";a.d(e,{Z:function(){return f}});a(9653);var n,s=a(7757),r=a.n(s),i=(a(5666),a(8926)),l=a.n(i),o=a(9669),c=a.n(o),u=a(651),d=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.log(t)}))},p={components:{"sample-pane-footer":u.Z},props:{start:String,end:String,devModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:(n=l()(r().mark((function t(){var e,a,n=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),a={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl,siteId:this.siteId},t.next=4,d(e,"",a,(function(t){void 0!==t[0]&&(n.series=t)}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},data:function(){return{series:[],displayStart:this.start,displayEnd:this.end}}},f=(0,a(1900).Z)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.series.length?t._e():a("div",{staticClass:"text-3xl text-center py-10"},[t._v("\n        🎉 No recommendations found. Nice job!\n    ")]),t._v(" "),t._l(t.series,(function(e){return a("div",[a("div",{staticClass:"field pb-4"},[a("p",{staticClass:"warning text-2xl leading-normal"},[a("span",{domProps:{innerHTML:t._s(e.summary)}})]),t._v(" "),a("div",{staticClass:"heading",staticStyle:{"padding-left":"26px"}},[a("p",{staticClass:"instructions text-xl leading-tight"},[a("span",{domProps:{innerHTML:t._s(e.detail)}}),t._v(" "),a("span",{staticClass:"field inline-block m-0"},[""!==e.learnMoreUrl?a("a",{staticClass:"go notice",attrs:{href:e.learnMoreUrl,target:"_blank",rel:"noopener,nofollow"}},[t._v("Learn More")]):t._e()])])])])])})),t._v(" "),a("sample-pane-footer",{attrs:{start:"start",end:"end",subject:"recommendations",column:"id","page-url":t.pageUrl,"site-id":t.siteId,"display-dev-mode-warning":t.devModeWarning}})],2)}),[],!1,null,null,null).exports},651:function(t,e,a){"use strict";a.d(e,{Z:function(){return p}});a(9653),a(1539),a(4916),a(9714),a(5306);var n,s=a(7757),r=a.n(s),i=(a(5666),a(8926)),l=a.n(i),o=a(9669),c=a.n(o),u=function(t,e,a,n){t.get(e,{params:a}).then((function(t){n&&n(t.data)})).catch((function(t){console.log(t)}))},d={components:{},props:{start:String,end:String,column:String,displayDevModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},subject:{type:String,default:""},siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:(n=l()(r().mark((function t(){var e,a,n=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c().create({baseURL:this.apiUrl,headers:{"X-Requested-With":"XMLHttpRequest"}}),a={column:this.column,start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl,siteId:this.siteId},t.next=4,u(e,"",a,(function(t){void 0!==t.cnt&&(n.samples=t.cnt)}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),onChangeRange:function(t){this.displayStart=t.start,this.displayEnd=t.end,this.getSeriesData()},formatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created:function(){this.getSeriesData()},mounted:function(){var t=this;this.$events.$on("change-range",(function(e){return t.onChangeRange(e)}))},data:function(){return{samples:0,displayStart:this.start,displayEnd:this.end,displayMaxValue:this.maxValue}}},p=(0,a(1900).Z)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("div",{staticClass:"heading"},[a("p",{staticClass:"instructions"},[t._v("The "+t._s(t.subject)+" data is an "),a("em",[t._v("average")]),t._v(" of "),a("strong",[t._v(t._s(t.formatNumber(t.samples)))]),t._v(" data sample"),1!==t.samples?a("span",[t._v("s")]):t._e(),t._v(".")])]),t._v(" "),t.samples<100?a("p",{staticClass:"warning"},[t._v("Webperf has collected less than "),a("strong",[t._v("100")]),t._v(" data samples. The sample size is not statistically significant, so above averaged results may not be meaningful.")]):t._e(),t._v(" "),t.displayDevModeWarning?a("p",{staticClass:"warning"},[t._v("Craft performance will be slower than normal with "),a("code",[t._v("devMode")]),t._v(" enabled due to extensive logging and disabling of some caches. "),t._m(0)]):t._e()])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"field inline-block m-0"},[a("a",{staticClass:"notice go",attrs:{href:"https://craftcms.com/guides/what-dev-mode-does",target:"_blank"}},[t._v("Learn More")])])}],!1,null,null,null).exports},1470:function(t,e,a){"use strict";a.d(e,{Z:function(){return r}});var n=a(6831),s={name:"sample-range-picker",components:{"vue-ctk-date-time-picker":a.n(n)()},data:function(){return{dateRange:{},customShortcuts:[{key:"today",label:"Today",value:"day"},{key:"yesterday",label:"Yesterday",value:"-day"},{key:"thisMonth",label:"This Month",value:"month"},{key:"lastMonth",label:"Last Month",value:"-month"},{key:"thisYear",label:"This Year",value:"year"},{key:"lastYear",label:"Last Year",value:"-year"},{key:"last365Days",label:"Last 365 days",value:365}]}},methods:{onInput:function(){this.$events.fire("change-range",this.dateRange)}}},r=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"readable inline-block"},[a("vue-ctk-date-time-picker",{attrs:{range:!0,"no-header":!0,"only-date":!0,"no-value-to-custom-elem":!0,"custom-shortcuts":t.customShortcuts,shortcut:"last365Days",label:"Data Sample Date Range",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD",color:"dimgray","no-button":!0,"auto-close":!0},on:{input:function(e){return t.onInput()}},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}},[a("button",{staticClass:"btn menubtn text-sm leading-normal text-left",staticStyle:{"min-width":"237px"},attrs:{type:"button","data-icon":"date",tabindex:"0",role:"combobox","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            "+t._s(t.dateRange.start)+" → "+t._s(t.dateRange.end)+"\n        ")])])],1)}),[],!1,null,null,null).exports},2531:function(t,e,a){"use strict";a.d(e,{Z:function(){return s}});a(9653);var n={name:"sample-size-warning",props:{sample:Number}},s=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field webperf-tooltip text-sm font-normal inline-block"},[t.sample<100?a("p",{staticClass:"warning display-block"},[t._v(" ")]):t._e(),t._v(" "),a("span",{staticClass:"webperf-tooltiptext webperf-sample-tooltip"},[t._v("\n        Only "+t._s(t.sample)+" data sample"),1!==t.sample?a("span",[t._v("s")]):t._e(),t._v(".\n    ")])])}),[],!1,null,null,null).exports},5312:function(t,e,a){"use strict";a.d(e,{Z:function(){return s}});var n={name:"data-sample-date",props:{date:String,url:String,query:String},computed:{title:function(){var t="";return t+="Url: "+this.url,this.query&&(t+="\n\nQuery: "+this.query),t}}},s=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"cursor-default",attrs:{title:t.title}},[t._v(t._s(t.date))])}),[],!1,null,null,null).exports},5393:function(t,e,a){"use strict";a.d(e,{Z:function(){return s}});var n={name:"data-sample-device",props:{device:String,mobile:Boolean},computed:{className:function(){var t="";return this.device&&void 0!==this.mobile&&(t=!0===this.mobile?"webperf-mobile-icon":"webperf-desktop-icon"),t},title:function(){var t="";return this.device&&void 0!==this.mobile&&(t=!0===this.mobile?"Mobile device":"Desktop device"),t}}},s=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"cursor-default",class:t.className,attrs:{title:t.title}},[t._v(" "+t._s(t.device))])}),[],!1,null,null,null).exports},208:function(t,e,a){"use strict";a.d(e,{Z:function(){return s}});a(9653);var n={name:"page-result-cell",props:{title:String,url:String,width:Number,color:String}},s=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"relative single-line-truncate-wrapper"},[a("div",{staticClass:"text-base font-normal truncate-label",staticStyle:{width:"100%",height:"20px"},attrs:{title:t.title}},[t.title?a("a",{staticStyle:{color:"rgb(26, 13, 171)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.title)+"\n            ")]):a("span",{staticClass:"text-gray-300"},[a("em",[t._v("Craft backend route")])])])]),t._v(" "),a("div",{staticClass:"relative single-line-truncate-wrapper"},[a("cite",{staticClass:"text-sm font-normal truncate-label single-line-truncate",staticStyle:{width:"100%"},attrs:{title:t.url}},[a("a",{staticClass:"hover:no-underline",staticStyle:{color:"rgb(0, 102, 33)"},attrs:{href:t.url,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("\n                "+t._s(t.url)+"\n            ")])])]),t._v(" "),t.width?a("div",{staticClass:"py-2"},[a("div",{staticClass:"simple-bar-chart-track rounded-full bg-gray-200"},[a("div",{staticClass:"simple-bar-line h-2 rounded-full",style:{width:t.width+"%",backgroundColor:t.color}})])]):t._e()])}),[],!1,null,null,null).exports},5515:function(t,e,a){"use strict";a.d(e,{Z:function(){return s}});var n={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},s=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-gray-600"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])}),[],!1,null,null,null).exports},286:function(t,e,a){"use strict";a.d(e,{Z:function(){return i}});a(9653);var n={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},s=a(1900),r={mixins:[(0,s.Z)(n,undefined,undefined,!1,null,null,null).exports]},i=(0,s.Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){return t.loadPage(e)}}})]}))]:[t._l(t.windowSize,(function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){return t.loadPage(t.windowStart+e-1)}}})]}))],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)}),[],!1,null,null,null).exports},8889:function(t,e,a){"use strict";a.d(e,{Z:function(){return i}});a(4916),a(5306);var n={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-gray-600"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},s=a(1900),r={mixins:[(0,s.Z)(n,undefined,undefined,!1,null,null,null).exports]},i=(0,s.Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["vuetable-pagination-info",t.css.infoClass],domProps:{innerHTML:t._s(t.paginationInfo)}})}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=commons.js.map