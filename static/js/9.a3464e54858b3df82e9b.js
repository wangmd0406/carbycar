webpackJsonp([9],{JIn8:function(t,s){},"Pc/R":function(t,s){},fOmS:function(t,s){},iLlR:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("GRyI"),i=a("fWwj"),o=(i.a,{name:"slide",directives:{TransferDom:i.a},props:["imgList","position","height"],data:function(){return{imgClass:"img previewer-demo-img",list:[],options:{getThumbBoundsFn:function(t){var s=document.querySelectorAll(".previewer-demo-img")[t],a=window.pageYOffset||document.documentElement.scrollTop,e=s.getBoundingClientRect();return{x:e.left,y:e.top+a,w:e.width}}}}},created:function(){-1!==this.$route.path.indexOf("Home")&&(this.imgClass="home-img previewer-demo-img")},watch:{imgList:function(t){for(var s in t)this.list.push({msrc:t[s].imgUrl,src:t[s].imgUrl,w:640,h:640})}},methods:{show:function(t){this.$refs.previewer.show(t)}}}),n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"slide"},[a("swiper",{attrs:{height:t.height,"min-moving-distance":120,auto:"",loop:"","dots-position":t.position,"dots-class":"slide-dots"}},t._l(t.imgList,function(s,e){return a("swiper-item",{key:e},[a("img",{class:t.imgClass,attrs:{src:s.imgUrl||s,title:s.title||"",alt:""},on:{click:function(s){return t.show(e)}}})])}),1),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"pre"},[a("previewer",{ref:"previewer",attrs:{list:t.list,options:t.options}})],1)],1)},staticRenderFns:[]};var r=a("C7Lr")(o,n,!1,function(t){a("JIn8")},"data-v-02385b0c",null).exports,d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"go-back",on:{click:function(s){return t.$router.go(-1)}}},[a("span",{staticClass:"iconfont"},[t._v("")])])},staticRenderFns:[]};var c=a("C7Lr")({name:"goBack"},d,!1,function(t){a("fOmS")},"data-v-c475e2dc",null).exports,l=a("eX7A"),v=(l.a,{name:"goodsDetails",data:function(){return{pictureList:[],goodsData:{},count:0}},components:{slide:r,goBack:c,defaultBuyBar:l.a},methods:{add:function(){99!==this.count&&this.count++},less:function(){this.count--},getGoodsData:function(){var t=this;this.$axios.post("app/goods/goodsDetail?gid="+this.$route.params.id).then(function(s){if(t.goodsData=s.data.goodsMap,-1!==s.data.goodsMap.picture.indexOf(",")){var a=s.data.goodsMap.picture.split(",");for(var e in a)t.pictureList.push({imgUrl:a[e],title:""})}else t.pictureList.push({imgUrl:s.data.goodsMap.picture,title:""})})}},mounted:function(){this.getGoodsData()},created:function(){var t=this;this.$nextTick(function(){t.scroll=new e.a(t.$refs.goodsDetails,{click:!0})})}}),u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("goBack"),t._v(" "),a("div",{ref:"goodsDetails",staticClass:"goods-detail"},[a("div",[a("div",[a("div",{staticClass:"slide"},[a("slide",{attrs:{imgList:t.pictureList,height:"7.53rem",position:"center"}})],1),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"top vux-1px-b"},[a("div",{staticClass:"fl l"},[a("h1",[t._v(t._s(t.goodsData.name+" "+t.goodsData.standard+" "+t.goodsData.model))]),t._v(" "),a("h3",[t._v(t._s(t.goodsData.manufacturer)+" "+t._s(t.goodsData.standard)+"   "+t._s(t.goodsData.model))]),t._v(" "),a("h2",[t._v("￥"+t._s(t.goodsData.price))])]),t._v(" "),a("div",{staticClass:"fr r"},[a("div",[a("span",{directives:[{name:"show",rawName:"v-show",value:t.count,expression:"count"}],staticClass:"iconfont",on:{click:t.less}},[t._v("")]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.count,expression:"count"}]},[t._v(t._s(t.count))]),t._v(" "),a("span",{staticClass:"iconfont",on:{click:t.add}},[t._v("")])]),t._v(" "),a("span",[t._v("销量："+t._s(t.goodsData.salesVolume))])]),t._v(" "),a("div",{staticClass:"clear-fix"})]),t._v(" "),t._m(0),t._v(" "),a("ul",{staticClass:"middle vux-1px-b"},[a("li",{directives:[{name:"show",rawName:"v-show",value:t.goodsData.model,expression:"goodsData.model"}]},[t._v("\n              型号：\n              "),a("span",[t._v(t._s(t.goodsData.model))])]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.goodsData.standard,expression:"goodsData.standard"}]},[t._v("\n              规格：\n              "),a("span",[t._v(t._s(t.goodsData.standard))])]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.goodsData.brand,expression:"goodsData.brand"}]},[t._v("\n              品牌：\n              "),a("span",[t._v(t._s(t.goodsData.brand))])]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.goodsData.manufacturer,expression:"goodsData.manufacturer"}]},[t._v("\n              厂家：\n              "),a("span",[t._v(t._s(t.goodsData.manufacturer))])]),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.goodsData.weight,expression:"goodsData.weight"}]},[t._v("\n              毛重：\n              "),a("span",[t._v(t._s(t.goodsData.weight))])])]),t._v(" "),a("div",{staticClass:"bottom"},[a("h2",[t._v("商品描述")]),t._v(" "),a("p",[t._v(t._s(t.goodsData.describe))])])])])])]),t._v(" "),a("defaultBuyBar")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card vux-1px-b"},[s("span",{staticClass:"fl"},[this._v("领劵即可享受优惠")]),this._v(" "),s("span",{staticClass:"fr vux-1px"},[this._v("立即领劵")])])}]};var m=a("C7Lr")(v,u,!1,function(t){a("Pc/R")},"data-v-6e25ae9a",null);s.default=m.exports}});