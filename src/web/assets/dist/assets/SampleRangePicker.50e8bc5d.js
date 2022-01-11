import{n as o,c as s}from"./vendor.6a8d211c.js";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"readable inline-block"},[a("vue-ctk-date-time-picker",{attrs:{"auto-close":!0,"custom-shortcuts":e.customShortcuts,"no-button":!0,"no-header":!0,"no-value-to-custom-elem":!0,"only-date":!0,range:!0,color:"dimgray",format:"YYYY-MM-DD",formatted:"YYYY-MM-DD",label:"Data Sample Date Range",shortcut:"last365Days"},on:{input:function(n){return e.onInput()}},model:{value:e.dateRange,callback:function(n){e.dateRange=n},expression:"dateRange"}},[a("button",{staticClass:"btn menubtn text-sm leading-normal text-left",staticStyle:{"min-width":"237px"},attrs:{"aria-expanded":"false","aria-haspopup":"true","data-icon":"date",role:"combobox",tabindex:"0",type:"button"}},[e._v(" "+e._s(e.dateRange.start)+" \u2192 "+e._s(e.dateRange.end)+" ")])])],1)},u=[];const c={name:"SampleRangePicker",components:{"vue-ctk-date-time-picker":s},data(){return{dateRange:{},customShortcuts:[{key:"today",label:"Today",value:"day"},{key:"yesterday",label:"Yesterday",value:"-day"},{key:"thisMonth",label:"This Month",value:"month"},{key:"lastMonth",label:"Last Month",value:"-month"},{key:"thisYear",label:"This Year",value:"year"},{key:"lastYear",label:"Last Year",value:"-year"},{key:"last365Days",label:"Last 365 days",value:365}]}},methods:{onInput(){this.$events.fire("change-range",this.dateRange)}}},r={};var i=o(c,l,u,!1,d,null,null,null);function d(e){for(let t in r)this[t]=r[t]}var v=function(){return i.exports}();export{v as S};
//# sourceMappingURL=SampleRangePicker.50e8bc5d.js.map
