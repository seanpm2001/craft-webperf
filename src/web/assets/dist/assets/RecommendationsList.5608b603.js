import{n as i,b as o}from"./vendor.6a8d211c.js";import{S as l}from"./SamplePaneFooter.c88f08be.js";var d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e.series.length?e._e():t("div",{staticClass:"text-3xl text-center py-10"},[e._v(" \u{1F389} No recommendations found. Nice job! ")]),e._l(e.series,function(a){return t("div",[t("div",{staticClass:"field pb-4"},[t("p",{staticClass:"warning text-2xl leading-normal"},[t("span",{domProps:{innerHTML:e._s(a.summary)}})]),t("div",{staticClass:"heading",staticStyle:{"padding-left":"26px"}},[t("p",{staticClass:"instructions text-xl leading-tight"},[t("span",{domProps:{innerHTML:e._s(a.detail)}}),t("span",{staticClass:"field inline-block m-0"},[a.learnMoreUrl!==""?t("a",{staticClass:"go notice",attrs:{href:a.learnMoreUrl,target:"_blank",rel:"noopener,nofollow"}},[e._v("Learn More")]):e._e()])])])])])}),t("sample-pane-footer",{attrs:{start:"start",end:"end",subject:"recommendations",column:"id","page-url":e.pageUrl,"site-id":e.siteId,"display-dev-mode-warning":e.devModeWarning}})],2)},p=[];const c=e=>({baseURL:e,headers:{"X-Requested-With":"XMLHttpRequest"}}),u=(e,s,t,a)=>{e.get(s,{params:t}).then(n=>{a&&a(n.data)}).catch(n=>{console.log(n)})},g={components:{"sample-pane-footer":l},props:{start:String,end:String,devModeWarning:{type:Boolean,default:!1},pageUrl:{type:String,default:""},siteId:{type:Number,default:0},apiUrl:{type:String,default:""}},methods:{getSeriesData:async function(){const e=o.create(c(this.apiUrl));let s={start:this.displayStart,end:this.displayEnd,pageUrl:this.pageUrl,siteId:this.siteId};await u(e,"",s,t=>{t[0]!==void 0&&(this.series=t)})},onChangeRange(e){this.displayStart=e.start,this.displayEnd=e.end,this.getSeriesData()}},created(){this.getSeriesData()},mounted(){this.$events.$on("change-range",e=>this.onChangeRange(e))},data:function(){return{series:[],displayStart:this.start,displayEnd:this.end}}},r={};var h=i(g,d,p,!1,m,null,null,null);function m(e){for(let s in r)this[s]=r[s]}var v=function(){return h.exports}();export{v as R};
//# sourceMappingURL=RecommendationsList.5608b603.js.map
