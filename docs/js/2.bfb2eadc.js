(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"8b24":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",{staticClass:"row justify-around q-pt-md"},[e("div",{staticClass:"col-md-3 col-xs-10 cloumn q-gutter-y-sm"},[e("q-scroll-area",{staticStyle:{height:"800px"},attrs:{"bar-style":{right:"1px",borderRadius:"1px",width:"2px",opacity:1}}},t._l(t.conf,(function(o,i){return e("div",{key:i},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){return t.clickItem(o.id)}}},[e("q-item-section",[e("q-item-label",[t._v(t._s(o.gaifan_name))]),e("q-item-label",{attrs:{caption:""}},[t._v(t._s(o.date))])],1),e("q-item-section",{attrs:{side:""}},[t._v("\n            人气"+t._s(o.userCount)+" 得分"+t._s(o.avg.toFixed(5))+"\n          ")])],1)],1)})),0)],1),e("div",{staticClass:"col-md-8"},[t.$q.platform.is.desktop?e("q-card",{staticStyle:{height:"600px"},attrs:{flat:""}},[e("div",{staticClass:"full-height full-width",attrs:{id:"vote_detail_div"}})]):t._e()],1),e("q-dialog",{attrs:{"no-backdrop-dismiss":""},model:{value:t.showingChart,callback:function(o){t.showingChart=o},expression:"showingChart"}},[e("q-card",{staticStyle:{width:"90vw",height:"400px"}},[e("q-card-section",{staticClass:"row items-center"},[e("div",{staticStyle:{width:"400px",height:"300px"},attrs:{id:"vote_detail_div_mobile"}})]),e("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"关闭",flat:""}})],1)],1)],1)],1)},a=[],n=(e("4e82"),e("ba35")),s=e("313e"),u={name:"PageIndex",data(){return{conf:null,voteDetailChart:null,voteDetailChartMobile:null,showingChart:!1}},methods:{fetchData(){for(let t=0;t<this.conf.length;t++)this.conf[t].vote_url&&this.$axios.get(this.conf[t].vote_url,{}).then((o=>{let e=o.data.data;this.conf[t].userCount=e.userCount,this.conf[t].voteDetailList=[],this.conf[t].totalPoint=0;for(let i=0;i<e.voteDetailList.length;i++){let o=e.voteDetailList[i],a={};a.sort=o.sort,a.content=o.content,a.optionVoteCount=o.optionVoteCount,this.conf[t].voteDetailList.push(a),this.conf[t].totalPoint=this.conf[t].totalPoint+this.getContentPoint(o.content)*o.optionVoteCount}this.conf[t].avg=this.conf[t].totalPoint/this.conf[t].userCount,this.$store.commit("votedata/update_vote_data",{key:this.conf[t].id,value:this.conf[t]})})).catch((t=>{console.error(t)}))},getContentPoint(t){return t.indexOf("十")>-1||t.indexOf("10")>-1?10:t.indexOf("一")>-1||t.indexOf("1")>-1?1:t.indexOf("二")>-1||t.indexOf("2")>-1?2:t.indexOf("三")>-1||t.indexOf("3")>-1?3:t.indexOf("四")>-1||t.indexOf("4")>-1?4:t.indexOf("五")>-1||t.indexOf("5")>-1?5:t.indexOf("六")>-1||t.indexOf("6")>-1?6:t.indexOf("七")>-1||t.indexOf("7")>-1?7:t.indexOf("八")>-1||t.indexOf("8")>-1?8:t.indexOf("九")>-1||t.indexOf("9")>-1?9:0},clickItem(t){this.$q.platform.is.mobile&&(this.showingChart=!0);let o=this.$store.state.votedata.vote_data[t];if(o){let t=o.voteDetailList,e=new Array(t.length),i=new Array(t.length);t.forEach((t=>{e[t.sort-1]=t.content,i[t.sort-1]=t.optionVoteCount}));let a={title:{show:!0,text:o.gaifan_name+" ("+o.cost+"元)",link:o.origin_url,subtext:"总投票人数:"+o.userCount+" (点击查看原帖)",sublink:o.origin_url},xAxis:{type:"category",data:e},yAxis:{type:"value",axisLabel:{rotate:0}},series:[{data:i,type:"bar",label:{show:!0,position:"top"},showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]};if(this.$q.platform.is.mobile){a.yAxis.axisLabel.rotate=60;let t=this;setTimeout((()=>{let o=document.getElementById("vote_detail_div_mobile");t.voteDetailChartMobile=null,t.voteDetailChartMobile=s["a"](o,{},{renderer:"canvas"}),t.voteDetailChartMobile.setOption(a)}),100)}else{let t=document.getElementById("vote_detail_div");null==this.voteDetailChart&&(this.voteDetailChart=s["a"](t,{},{renderer:"canvas"})),this.voteDetailChart.setOption(a)}}}},mounted(){this.conf=n,this.fetchData()}},l=u,r=e("2877"),b=e("9989"),p=e("4983"),h=e("66e5"),d=e("4074"),m=e("0170"),v=e("f09f"),c=e("24e8"),g=e("a370"),_=e("4b7e"),f=e("9c40"),C=e("714f"),I=e("7f67"),y=e("eebe"),P=e.n(y),x=Object(r["a"])(l,i,a,!1,null,null,null);o["default"]=x.exports;P()(x,"components",{QPage:b["a"],QScrollArea:p["a"],QItem:h["a"],QItemSection:d["a"],QItemLabel:m["a"],QCard:v["a"],QDialog:c["a"],QCardSection:g["a"],QCardActions:_["a"],QBtn:f["a"]}),P()(x,"directives",{Ripple:C["a"],ClosePopup:I["a"]})},ba35:function(t){t.exports=JSON.parse('[{"id":43,"day":43,"title":"吃遍盖饭第四十三天","gaifan_name":"小炒腊肉盖饭","date":"2021-04-26","cost":16,"origin_url":"https://bbs.hupu.com/42527334.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10413654","userCount":0,"totalPoint":0,"avg":0},{"id":42,"day":42,"title":"吃遍盖饭第四十二天","gaifan_name":"咖喱鸡块盖饭","date":"2021-04-25","cost":16,"origin_url":"https://bbs.hupu.com/42509613.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10412950","userCount":0,"totalPoint":0,"avg":0},{"id":41,"day":41,"title":"吃遍盖饭第四十一天","gaifan_name":"大葱鸡蛋盖饭","date":"2021-04-24","cost":11,"origin_url":"https://bbs.hupu.com/42492363.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10412326","userCount":0,"totalPoint":0,"avg":0},{"id":40,"day":40,"title":"吃遍盖饭第四十天","gaifan_name":"麻辣香锅盖饭","date":"2021-04-23","cost":16,"origin_url":"https://bbs.hupu.com/42473878.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10411599","userCount":0,"totalPoint":0,"avg":0},{"id":39,"day":39,"title":"吃遍盖饭第三十九天","gaifan_name":"杭椒肉片盖饭","date":"2021-04-22","cost":15,"origin_url":"https://bbs.hupu.com/42453831.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10410747","userCount":0,"totalPoint":0,"avg":0},{"id":38,"day":38,"title":"吃遍盖饭第三十八天","gaifan_name":"麻辣鱼豆腐盖饭","date":"2021-04-21","cost":11,"origin_url":"https://bbs.hupu.com/42432361.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10410015","userCount":0,"totalPoint":0,"avg":0},{"id":37,"day":37,"title":"吃遍盖饭第三十七天","gaifan_name":"豆角红烧肉盖饭","date":"2021-04-20","cost":16,"origin_url":"https://bbs.hupu.com/42410579.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10409117","userCount":0,"totalPoint":0,"avg":0},{"id":36,"day":36,"title":"吃遍盖饭第三十六天","gaifan_name":"鱼香肉丝盖饭","date":"2021-04-19","cost":11,"origin_url":"https://bbs.hupu.com/42387151.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10408180","userCount":0,"totalPoint":0,"avg":0},{"id":35,"day":35,"title":"吃遍盖饭第三十五天","gaifan_name":"鱼香肝尖盖饭","date":"2021-04-18","cost":11,"origin_url":"https://bbs.hupu.com/42360160.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10407321","userCount":0,"totalPoint":0,"avg":0},{"id":34,"day":34,"title":"吃遍盖饭第三十四天","gaifan_name":"辣子鸡丁盖饭","date":"2021-04-17","cost":11,"origin_url":"https://bbs.hupu.com/42341668.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10406626","userCount":0,"totalPoint":0,"avg":0},{"id":33,"day":33,"title":"吃遍盖饭第三十三天","gaifan_name":"麻辣鸡脆骨盖饭","date":"2021-04-16","cost":12,"origin_url":"https://bbs.hupu.com/42322921.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10405874","userCount":0,"totalPoint":0,"avg":0},{"id":33,"day":33,"title":"吃遍盖饭第三十三天","gaifan_name":"麻辣鸡脆骨盖饭","date":"2021-04-16","cost":12,"origin_url":"https://bbs.hupu.com/42322921.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10405874","userCount":0,"totalPoint":0,"avg":0},{"id":32,"day":32,"title":"吃遍盖饭第三十二天","gaifan_name":"尖椒鸡蛋盖饭","date":"2021-04-15","cost":16,"origin_url":"https://bbs.hupu.com/42302989.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10405011","userCount":0,"totalPoint":0,"avg":0},{"id":31,"day":31,"title":"吃遍盖饭第三十一天","gaifan_name":"尖椒土豆片盖饭","date":"2021-04-14","cost":11,"origin_url":"https://bbs.hupu.com/42284329.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10404350","userCount":0,"totalPoint":0,"avg":0},{"id":30,"day":30,"title":"吃遍盖饭第三十天","gaifan_name":"尖椒鸡蛋盖饭","date":"2021-04-13","cost":11,"origin_url":"https://bbs.hupu.com/42261873.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10403438","userCount":0,"totalPoint":0,"avg":0},{"id":29,"day":29,"title":"吃遍盖饭第二十九天","gaifan_name":"肉沫茄子盖饭","date":"2021-04-12","cost":12,"origin_url":"https://bbs.hupu.com/42243401.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10402639","userCount":0,"totalPoint":0,"avg":0},{"id":28,"day":28,"title":"吃遍盖饭第二十八天","gaifan_name":"红烧带鱼盖饭","date":"2021-04-11","cost":16,"origin_url":"https://bbs.hupu.com/42223443.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10401806","userCount":0,"totalPoint":0,"avg":0},{"id":27,"day":27,"title":"吃遍盖饭第二十七天","gaifan_name":"蟹子腐竹盖饭","date":"2021-04-10","cost":11,"origin_url":"https://bbs.hupu.com/42200392.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10400964","userCount":0,"totalPoint":0,"avg":0},{"id":26,"day":26,"title":"吃遍盖饭第二十六天","gaifan_name":"尖椒肉片盖饭","date":"2021-04-09","cost":14,"origin_url":"https://bbs.hupu.com/42183881.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10400309","userCount":0,"totalPoint":0,"avg":0},{"id":25,"day":25,"title":"吃遍盖饭第二十五天","gaifan_name":"孜然土豆片盖饭","date":"2021-04-08","cost":10,"origin_url":"https://bbs.hupu.com/42163440.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10399342","userCount":0,"totalPoint":0,"avg":0},{"id":24,"day":24,"title":"吃遍盖饭第二十四天","gaifan_name":"红烧排骨盖饭","date":"2021-04-07","cost":25,"origin_url":"https://bbs.hupu.com/42143068.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10398503","userCount":0,"totalPoint":0,"avg":0},{"id":23,"day":23,"title":"吃遍盖饭第二十三天","gaifan_name":"宫保鸡丁盖饭","date":"2021-04-06","cost":11,"origin_url":"https://bbs.hupu.com/42123376.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10397803","userCount":0,"totalPoint":0,"avg":0},{"id":22,"day":22,"title":"吃遍盖饭第二十二天","gaifan_name":"红烧鱼块盖饭","date":"2021-04-05","cost":16,"origin_url":"https://bbs.hupu.com/42105554.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10397060","userCount":0,"totalPoint":0,"avg":0},{"id":21,"day":21,"title":"吃遍盖饭第二十一天","gaifan_name":"孜然鸡心盖饭","date":"2021-04-04","cost":13,"origin_url":"https://bbs.hupu.com/42088441.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10396230","userCount":0,"totalPoint":0,"avg":0},{"id":20,"day":20,"title":"吃遍盖饭第二十天","gaifan_name":"韭菜鸡蛋盖饭","date":"2021-04-03","cost":11,"origin_url":"https://bbs.hupu.com/42072714.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10395539","userCount":0,"totalPoint":0,"avg":0},{"id":19,"day":19,"title":"吃遍盖饭第十九天","gaifan_name":"干煸鱿鱼盖饭","date":"2021-04-02","cost":16,"origin_url":"https://bbs.hupu.com/42053352.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10394786","userCount":0,"totalPoint":0,"avg":0},{"id":18,"day":18,"title":"吃遍盖饭第十八天","gaifan_name":"京酱肉丝盖饭","date":"2021-04-01","cost":16,"origin_url":"https://bbs.hupu.com/42032870.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10394026","userCount":0,"totalPoint":0,"avg":0},{"id":17,"day":17,"title":"吃遍盖饭第十七天","gaifan_name":"尖椒回锅肉盖饭","date":"2021-03-31","cost":16,"origin_url":"https://bbs.hupu.com/42014166.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10393305","userCount":0,"totalPoint":0,"avg":0},{"id":16,"day":16,"title":"吃遍盖饭第十六天","gaifan_name":"土豆红烧肉盖饭","date":"2021-03-30","cost":16,"origin_url":"https://bbs.hupu.com/41996478.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10392533","userCount":0,"totalPoint":0,"avg":0},{"id":15,"day":15,"title":"吃遍盖饭第十五天","gaifan_name":"肉沫粉条盖饭","date":"2021-03-29","cost":11,"origin_url":"https://bbs.hupu.com/41976402.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10391779","userCount":0,"totalPoint":0,"avg":0},{"id":14,"day":14,"title":"吃遍盖饭第十四天","gaifan_name":"小炒腰花盖饭","date":"2021-03-28","cost":16,"origin_url":"https://bbs.hupu.com/41954879.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10390985","userCount":0,"totalPoint":0,"avg":0},{"id":13,"day":13,"title":"吃遍盖饭第十三天","gaifan_name":"麻婆豆腐盖饭","date":"2021-03-26","cost":10,"origin_url":"https://bbs.hupu.com/41916200.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10389587","userCount":0,"totalPoint":0,"avg":0},{"id":12,"day":12,"title":"吃遍盖饭第十二天","gaifan_name":"地三鲜盖饭","date":"2021-03-25","cost":11,"origin_url":"https://bbs.hupu.com/41890160.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10388898","userCount":0,"totalPoint":0,"avg":0},{"id":11,"day":11,"title":"吃遍盖饭第十一天","gaifan_name":"孜然羊肉盖饭","date":"2021-03-24","cost":18,"origin_url":"https://bbs.hupu.com/41867808.html","vote_url":"https://bbs.mobileapi.hupu.com/3/7.5.2/bbsintapi/vote/v1/getVoteInfo?voteId=10388080","userCount":0,"totalPoint":0,"avg":0},{"id":10,"day":10,"title":"吃遍盖饭第十天","gaifan_name":"红烧肥肠盖饭","date":"2021-03-23","cost":16,"origin_url":"https://bbs.hupu.com/41848907.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":9,"day":9,"title":"吃遍盖饭第九天","gaifan_name":"泡椒牛柳盖饭","date":"2021-03-22","cost":18,"origin_url":"https://bbs.hupu.com/41830564.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":8,"day":8,"title":"吃遍盖饭第八天","gaifan_name":"土豆鸡块盖饭","date":"2021-03-21","cost":16,"origin_url":"https://bbs.hupu.com/41810978.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":7,"day":7,"title":"吃遍盖饭第七天","gaifan_name":"重庆辣子鸡盖饭","date":"2021-03-20","cost":16,"origin_url":"https://bbs.hupu.com/41789367.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":6,"day":6,"title":"吃遍盖饭第六天","gaifan_name":"麻辣鸡块盖饭","date":"2021-03-19","cost":16,"origin_url":"https://bbs.hupu.com/41768267.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":5,"day":5,"title":"吃遍盖饭第五天","gaifan_name":"红烧茄子盖饭","date":"2021-12-27","cost":10,"origin_url":"https://bbs.hupu.com/40014264.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":4,"day":4,"title":"吃遍盖饭第四天","gaifan_name":"木须肉丝盖饭","date":"2021-12-26","cost":10,"origin_url":"https://bbs.hupu.com/39995340.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":3,"day":3,"title":"吃遍盖饭第三天","gaifan_name":"土豆牛肉丁盖饭","date":"2021-12-25","cost":15,"origin_url":"https://bbs.hupu.com/39975984.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":2,"day":2,"title":"吃遍盖饭第二天","gaifan_name":"糖醋里脊盖饭","date":"2021-12-24","cost":16,"origin_url":"https://bbs.hupu.com/39957739.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0},{"id":1,"day":1,"title":"吃遍盖饭第一天","gaifan_name":"咖喱鸡丁盖饭","date":"2021-12-23","cost":11,"origin_url":"https://bbs.hupu.com/39946480.html","vote_url":"","userCount":0,"totalPoint":0,"avg":0}]')}}]);