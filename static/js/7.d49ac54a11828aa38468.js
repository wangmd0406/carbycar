webpackJsonp([7],{OOBF:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("WnnS"),i=(o.a,{name:"codeLogin",data:function(){return{logInfo:{logNum:"",code:""},codeStatus:{title:"获取验证码",class:"icon-r fl",showBtn:!0}}},components:{imgBtnsSlots:o.a},methods:{login:function(){this.reg.checkMobile(this.logInfo.logNum)?""===this.logInfo.code?this.$vux.toast.show({text:"<br/>请输入验证码",type:"warn",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"}):this.userLogin(this.logInfo.logNum,this.logInfo.code):this.$vux.toast.show({text:"<br/>请检查手机号",type:"warn",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"})},getCode:function(){var t=this;this.reg.checkMobile(this.logInfo.logNum)?this.$axios.get("app/reg_send_code?mobile="+this.logInfo.logNum).then(function(s){t.$vux.toast.show({text:"<br/>获取成功",type:"success",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"}),t.codeStatus.showBtn=!1,t.codeStatus.class="icon-r fl disabled";var e=60,o=setInterval(function(){t.codeStatus.title=e+"s后重新获取",-1===--e&&(clearInterval(o),t.codeStatus.title="获取验证码",t.codeStatus.showBtn=!0,t.codeStatus.class="icon-r fl")},1e3)}):this.$vux.toast.show({text:"<br/>请检查手机号",type:"warn",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"})}}}),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"vux-1px-b"},[e("x-header",{attrs:{"left-options":{backText:""}}},[t._v("验证码登录")])],1),t._v(" "),e("div",{staticClass:"main"},[e("imgBtnsSlots",{on:{login:t.login}},[e("div",{staticClass:"slots"},[e("div",{staticClass:"inputs vux-1px-b"},[e("div",{staticClass:"icon fl"},[e("span",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"input fl"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.logInfo.logNum,expression:"logInfo.logNum"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.logInfo.logNum},on:{input:function(s){s.target.composing||t.$set(t.logInfo,"logNum",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"inputs vux-1px-b"},[e("div",{staticClass:"icon fl"},[e("span",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"input fl"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.logInfo.code,expression:"logInfo.code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.logInfo.code},on:{input:function(s){s.target.composing||t.$set(t.logInfo,"code",s.target.value)}}})]),t._v(" "),e("div",{class:t.codeStatus.class},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.codeStatus.showBtn,expression:"codeStatus.showBtn"}],on:{click:t.getCode}},[t._v(t._s(t.codeStatus.title))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.codeStatus.showBtn,expression:"!codeStatus.showBtn"}]},[t._v(t._s(t.codeStatus.title))])])])])])],1)])},staticRenderFns:[]};var a=e("C7Lr")(i,n,!1,function(t){e("zCSB")},"data-v-1a33b065",null);s.default=a.exports},WHao:function(t,s,e){t.exports=e.p+"static/img/c_lo_head.0c95cc0.png"},WnnS:function(t,s,e){"use strict";var o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"main"},[t._m(0),t._v(" "),t._t("default"),t._v(" "),e("div",{staticClass:"btn"},[e("x-button",{attrs:{type:"primary"},nativeOn:{click:function(s){return t.login(s)}}},[t._v("确认")])],1)],2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img"},[s("img",{attrs:{src:e("WHao"),alt:""}})])}]};var i=e("C7Lr")({name:"imgBtnsSlots",methods:{login:function(){this.$emit("login")}}},o,!1,function(t){e("zDho")},"data-v-40e0542e",null);s.a=i.exports},zCSB:function(t,s){},zDho:function(t,s){}});