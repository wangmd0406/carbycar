webpackJsonp([14],{FYRG:function(o,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={name:"forgetPwd",data:function(){return{showPwd:{show:!1,code:"&#xe652;",inputType:"password",class:"iconfont"},showPwdAgain:{show:!1,code:"&#xe652;",inputType:"password",class:"iconfont"},logInfo:{phoneNum:"",code:"",logPwd:"",logPwdAgain:""},codeStatus:{title:"获取验证码",class:"icon-r code fl",showBtn:!0}}},computed:{logPwd:function(){return this.logInfo.logPwd},logPwdAgain:function(){return this.logInfo.logPwdAgain}},watch:{logPwd:function(o,t){this.showPwd.show=""!==o},logPwdAgain:function(o,t){this.showPwdAgain.show=""!==o}},methods:{submit:function(){var o=this;this.logInfo.logPwd!==this.logInfo.logPwdAgain?this.$vux.toast.show({text:"<br/>两次密码不同",type:"warn",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"}):""===this.logInfo.phoneNum||""===this.logInfo.code?this.$vux.toast.show({text:"<br/>请将信息填写完整",type:"warn",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"}):this.$axios.post("app/recovePassword?username="+this.logInfo.phoneNum+"&password="+this.logInfo.logPwd+"&affirmPassword="+this.logInfo.logPwdAgain+"&code="+this.logInfo.code).then(function(t){o.$vux.toast.show({text:"密码重置成功",type:"success",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"});var s=setTimeout(function(){clearTimeout(s),o.userLogin(o.logInfo.phoneNum,o.logInfo.logPwd)},1500)})},getCode:function(){var o=this;this.reg.checkMobile(this.logInfo.phoneNum)?this.$axios.post("app/recovePasswordSenMsg?phoneNumber="+this.logInfo.phoneNum).then(function(t){o.$vux.toast.show({text:"<br/>获取成功",type:"success",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"}),o.codeStatus.showBtn=!1,o.codeStatus.class="icon-r fl";var s=60,e=setInterval(function(){o.codeStatus.title="("+s+"s)",-1===--s&&(clearInterval(e),o.codeStatus.title="获取验证码",o.codeStatus.showBtn=!0,o.codeStatus.class="icon-r code fl")},1e3)}):this.$vux.toast.show({text:"<br/>请检查手机号",type:"warn",position:"middle",isShowMask:!0,time:1500,width:"2.7rem"})},clearPwd:function(o){o?this.logInfo.logPwd="":this.logInfo.logPwdAgain="",o?this.defaultShowPwd(!0):this.defaultShowPwd(!1)},activeShowPwd:function(o){if(o){if("text"===this.showPwd.inputType)return void this.defaultShowPwd(o);this.showPwd.code="&#xe648;",this.showPwd.inputType="text",this.showPwd.class="iconfont active"}else{if("text"===this.showPwdAgain.inputType)return void this.defaultShowPwd(o);this.showPwdAgain.code="&#xe648;",this.showPwdAgain.inputType="text",this.showPwdAgain.class="iconfont active"}},defaultShowPwd:function(o){o?(this.showPwd.code="&#xe652;",this.showPwd.inputType="password",this.showPwd.class="iconfont"):(this.showPwdAgain.code="&#xe652;",this.showPwdAgain.inputType="password",this.showPwdAgain.class="iconfont")}}},n={render:function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("div",[s("div",{staticClass:"vux-1px-b"},[s("x-header",{attrs:{"left-options":{backText:""}}},[o._v("找回密码")])],1),o._v(" "),s("div",{staticClass:"slots"},[s("div",{staticClass:"inputs vux-1px-b"},[o._m(0),o._v(" "),s("div",{staticClass:"input fl"},[s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.phoneNum,expression:"logInfo.phoneNum"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:o.logInfo.phoneNum},on:{input:function(t){t.target.composing||o.$set(o.logInfo,"phoneNum",t.target.value)}}})])]),o._v(" "),s("div",{staticClass:"inputs vux-1px-b"},[o._m(1),o._v(" "),s("div",{staticClass:"input fl"},[s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.code,expression:"logInfo.code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:o.logInfo.code},on:{input:function(t){t.target.composing||o.$set(o.logInfo,"code",t.target.value)}}})]),o._v(" "),s("div",{class:o.codeStatus.class},[s("span",{directives:[{name:"show",rawName:"v-show",value:o.codeStatus.showBtn,expression:"codeStatus.showBtn"}],staticClass:"code-tit",on:{click:o.getCode}},[o._v("获取验证码")]),o._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!o.codeStatus.showBtn,expression:"!codeStatus.showBtn"}],staticClass:"code-tit"},[o._v(o._s(o.codeStatus.title))])])]),o._v(" "),s("div",{staticClass:"inputs vux-1px-b",staticStyle:{"margin-top":".6rem"}},[o._m(2),o._v(" "),s("div",{staticClass:"input fl"},["checkbox"===o.showPwd.inputType?s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.logPwd,expression:"logInfo.logPwd"}],attrs:{placeholder:"请输入6-20位字符密码",type:"checkbox"},domProps:{checked:Array.isArray(o.logInfo.logPwd)?o._i(o.logInfo.logPwd,null)>-1:o.logInfo.logPwd},on:{change:function(t){var s=o.logInfo.logPwd,e=t.target,n=!!e.checked;if(Array.isArray(s)){var i=o._i(s,null);e.checked?i<0&&o.$set(o.logInfo,"logPwd",s.concat([null])):i>-1&&o.$set(o.logInfo,"logPwd",s.slice(0,i).concat(s.slice(i+1)))}else o.$set(o.logInfo,"logPwd",n)}}}):"radio"===o.showPwd.inputType?s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.logPwd,expression:"logInfo.logPwd"}],attrs:{placeholder:"请输入6-20位字符密码",type:"radio"},domProps:{checked:o._q(o.logInfo.logPwd,null)},on:{change:function(t){return o.$set(o.logInfo,"logPwd",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.logPwd,expression:"logInfo.logPwd"}],attrs:{placeholder:"请输入6-20位字符密码",type:o.showPwd.inputType},domProps:{value:o.logInfo.logPwd},on:{input:function(t){t.target.composing||o.$set(o.logInfo,"logPwd",t.target.value)}}})]),o._v(" "),s("div",{staticClass:"icon-r fl"},[s("span",{directives:[{name:"show",rawName:"v-show",value:o.showPwd.show,expression:"showPwd.show"}],class:o.showPwd.class,domProps:{innerHTML:o._s(o.showPwd.code)},on:{click:function(t){return o.activeShowPwd(!0)}}}),o._v("\n         \n        "),s("span",{directives:[{name:"show",rawName:"v-show",value:o.showPwd.show,expression:"showPwd.show"}],staticClass:"iconfont",on:{click:function(t){return o.clearPwd(!0)}}},[o._v("")])])]),o._v(" "),s("div",{staticClass:"inputs vux-1px-b"},[o._m(3),o._v(" "),s("div",{staticClass:"input fl"},["checkbox"===o.showPwdAgain.inputType?s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.logPwdAgain,expression:"logInfo.logPwdAgain"}],attrs:{placeholder:"请再次输入密码",type:"checkbox"},domProps:{checked:Array.isArray(o.logInfo.logPwdAgain)?o._i(o.logInfo.logPwdAgain,null)>-1:o.logInfo.logPwdAgain},on:{change:function(t){var s=o.logInfo.logPwdAgain,e=t.target,n=!!e.checked;if(Array.isArray(s)){var i=o._i(s,null);e.checked?i<0&&o.$set(o.logInfo,"logPwdAgain",s.concat([null])):i>-1&&o.$set(o.logInfo,"logPwdAgain",s.slice(0,i).concat(s.slice(i+1)))}else o.$set(o.logInfo,"logPwdAgain",n)}}}):"radio"===o.showPwdAgain.inputType?s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.logPwdAgain,expression:"logInfo.logPwdAgain"}],attrs:{placeholder:"请再次输入密码",type:"radio"},domProps:{checked:o._q(o.logInfo.logPwdAgain,null)},on:{change:function(t){return o.$set(o.logInfo,"logPwdAgain",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:o.logInfo.logPwdAgain,expression:"logInfo.logPwdAgain"}],attrs:{placeholder:"请再次输入密码",type:o.showPwdAgain.inputType},domProps:{value:o.logInfo.logPwdAgain},on:{input:function(t){t.target.composing||o.$set(o.logInfo,"logPwdAgain",t.target.value)}}})]),o._v(" "),s("div",{staticClass:"icon-r fl"},[s("span",{directives:[{name:"show",rawName:"v-show",value:o.showPwdAgain.show,expression:"showPwdAgain.show"}],class:o.showPwdAgain.class,domProps:{innerHTML:o._s(o.showPwdAgain.code)},on:{click:function(t){return o.activeShowPwd(!1)}}}),o._v("\n         \n        "),s("span",{directives:[{name:"show",rawName:"v-show",value:o.showPwdAgain.show,expression:"showPwdAgain.show"}],staticClass:"iconfont",on:{click:function(t){return o.clearPwd(!1)}}},[o._v("")])])])]),o._v(" "),s("div",{staticClass:"clear-fix"}),o._v(" "),s("div",{staticClass:"btn"},[s("x-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return o.submit(t)}}},[o._v("确认")])],1)])},staticRenderFns:[function(){var o=this.$createElement,t=this._self._c||o;return t("div",{staticClass:"icon fl"},[t("span",{staticClass:"iconfont"},[this._v("")])])},function(){var o=this.$createElement,t=this._self._c||o;return t("div",{staticClass:"icon fl"},[t("span",{staticClass:"iconfont"},[this._v("")])])},function(){var o=this.$createElement,t=this._self._c||o;return t("div",{staticClass:"icon fl"},[t("span",{staticClass:"iconfont"},[this._v("")])])},function(){var o=this.$createElement,t=this._self._c||o;return t("div",{staticClass:"icon fl"},[t("span",{staticClass:"iconfont"},[this._v("")])])}]};var i=s("C7Lr")(e,n,!1,function(o){s("rdl2")},"data-v-d776c30c",null);t.default=i.exports},rdl2:function(o,t){}});