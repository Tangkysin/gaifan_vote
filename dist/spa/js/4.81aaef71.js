(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b03":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"row q-gutter-md q-pa-xl"},[null!=t.totalPointRank?i("div",{staticClass:"col-md-2 col-xs-10"},[i("span",{staticClass:"text-h6"},[t._v("评分总榜")]),i("q-list",{attrs:{bordered:"",separator:"",dense:""}},[t._l(t.totalPointRank,(function(e,s){return[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.gaifan_name))])],1),i("q-item-section",{attrs:{side:""}},[t._v(t._s(e.avg.toFixed(5))+"分 ")])],1)]}))],2)],1):t._e(),null!=t.heatRank?i("div",{staticClass:"col-md-2 col-xs-10"},[i("span",{staticClass:"text-h6"},[t._v("人气总榜")]),i("q-list",{attrs:{bordered:"",separator:"",dense:""}},[t._l(t.heatRank,(function(e,s){return[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.gaifan_name))])],1),i("q-item-section",{attrs:{side:""}},[t._v(t._s(e.userCount)+" ")])],1)]}))],2)],1):t._e(),null!=t.costPerformanceRank?i("div",{staticClass:"col-md-2 col-xs-10"},[i("span",{staticClass:"text-h6"},[t._v("性价比榜"),i("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[t._v("\n        来自 KopRL也想吃盖饭:mcg = 评分^2 / 价格^0.35 *3\n      ")])],1),i("q-list",{attrs:{bordered:"",separator:"",dense:""}},[t._l(t.costPerformanceRank,(function(e,s){return[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.gaifan_name))])],1),i("q-item-section",{attrs:{side:""}},[t._v(t._s(e.mcg.toFixed(2))+" ")])],1)]}))],2)],1):t._e(),i("div",{staticClass:"col-md-4 col-xs-12"},[i("div",{staticClass:"row"},[i("span",{staticClass:"text-h6"},[t._v("收录盖饭"+t._s(t.kindsNum)+"种,总共花费"+t._s(t.totalCost)+"元")])]),i("div",{staticClass:"row"},[i("q-card",{staticClass:"full-width",staticStyle:{height:"400px"},attrs:{flat:""}},[i("div",{staticClass:"full-height full-width",attrs:{id:"price_dist_div"}})])],1),i("div",{staticClass:"row"},[i("q-card",{staticClass:"full-width",staticStyle:{height:"400px"},attrs:{flat:""}},[i("div",{staticClass:"full-height full-width",attrs:{id:"price_point_dist_div"}})])],1)])])},a=[],r=(i("4e82"),i("313e")),n={name:"PageIndex",data(){return{totalPointRank:null,heatRank:null,costPerformanceRank:null,kindsNum:0,totalCost:0,priceDistmap:{},priceDistChart:null,pricePointDist:[],pricePointDistChart:null}},methods:{renderRank(t){this.totalPointRank=JSON.parse(JSON.stringify(t)),this.totalPointRank.sort(((t,e)=>e.avg-t.avg)),this.heatRank=JSON.parse(JSON.stringify(t)),this.heatRank.sort(((t,e)=>e.userCount-t.userCount)),this.costPerformanceRank=JSON.parse(JSON.stringify(t)),this.costPerformanceRank.sort(((t,e)=>e.mcg-t.mcg))},renderPriceDist(){let t=document.getElementById("price_dist_div");null==this.priceDistChart&&(this.priceDistChart=r["a"](t,{},{renderer:"canvas"}));let e=[],i=0;for(let a in this.priceDistmap)i=Math.max(i,this.priceDistmap[a]),e.push({value:this.priceDistmap[a],name:a+"元"});let s={title:{text:"价格分布",left:"center",top:20},tooltip:{trigger:"item"},series:[{name:"价格分布",type:"pie",radius:"55%",center:["50%","50%"],data:e.sort((function(t,e){return t.value-e.value})),label:{fontSize:14},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]};this.priceDistChart.setOption(s)},renderPricePointDist(){let t=document.getElementById("price_point_dist_div");null==this.pricePointDistChart&&(this.pricePointDistChart=r["a"](t,{},{renderer:"canvas"}));let e={title:{text:"价格评分分布",left:"center",top:20},xAxis:{scale:!0,name:"价格(元)"},yAxis:{scale:!0,name:"评分"},tooltip:{trigger:"item",formatter:"{c0}"},series:[{type:"scatter",data:this.pricePointDist}]};this.pricePointDistChart.setOption(e)}},mounted(){let t=this.$store.state.votedata.vote_data,e=[];for(let i in t){t[i].mcg=Math.pow(t[i].avg,2)/Math.pow(t[i].cost,.35)*3,e.push(t[i]),this.totalCost=this.totalCost+t[i].cost,this.priceDistmap[t[i].cost]?this.priceDistmap[t[i].cost]=this.priceDistmap[t[i].cost]+1:this.priceDistmap[t[i].cost]=1;let s=t[i].avg.toFixed(5);this.pricePointDist.push([t[i].cost,s,t[i].gaifan_name]),this.kindsNum+=1}this.renderRank(e),this.renderPriceDist(),this.renderPricePointDist()}},l=n,o=i("2877"),c=i("9989"),p=i("1c1c"),d=i("66e5"),m=i("4074"),h=i("0170"),u=i("05c0"),v=i("f09f"),_=i("714f"),f=i("eebe"),g=i.n(f),C=Object(o["a"])(l,s,a,!1,null,null,null);e["default"]=C.exports;g()(C,"components",{QPage:c["a"],QList:p["a"],QItem:d["a"],QItemSection:m["a"],QItemLabel:h["a"],QTooltip:u["a"],QCard:v["a"]}),g()(C,"directives",{Ripple:_["a"]})}}]);