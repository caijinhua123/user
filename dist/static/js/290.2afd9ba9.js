"use strict";(self["webpackChunkhello_world1"]=self["webpackChunkhello_world1"]||[]).push([[290],{829:function(t,e,n){n.d(e,{Z:function(){return y}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Form",t._g({},t.$listeners)),n("Comment",{attrs:{postcomment:t.postcomment,getComment:t.getComment,iscommentLoad:t.iscommentLoad}})],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{ref:"sumb",on:{submit:function(e){return e.preventDefault(),t.postForm.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",attrs:{type:"text",maxlength:"10",placeholder:"请填写昵称"},domProps:{value:t.name},on:{input:[function(e){e.target.composing||(t.name=e.target.value)},t.clear]}}),n("span",{staticClass:"name_number"},[t._v(t._s(t.name.length)+"/10")]),n("p",[t._v(t._s(t.errName))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"content",attrs:{maxlength:"300",placeholder:"请填写评论"},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.clear]}},[t._v(t._s(t.content))]),n("span",{staticClass:"content_number"},[t._v(t._s(t.content.length)+"/300")]),n("p",[t._v(t._s(t.errcontent))]),n("button",{staticClass:"submit",attrs:{disabled:t.isLoad}},[t._v("提交")])])},i=[],r={components:{},data(){return{name:"",content:"",errName:"",errcontent:"",isLoad:!1}},methods:{postForm(t){""!==this.name?""!==this.content?(this.isLoad=!0,this.$emit("submit",this.name,this.content,(()=>{showMessage({content:"成功发表",type:"info",duration:1e3,container:this.$refs.sumb}),this.name="",this.content="",this.isLoad=!1}))):this.errcontent="请填写内容":this.errName="请填写昵称"},clear(){this.errcontent="",this.errName=""}}},m=r,c=n(736),l=(0,c.Z)(m,o,i,!1,null,"eac89b7e",null),u=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.getComment&&t.getComment.data&&t.getComment.data.rows?n("ul",{staticClass:"data-list-container"},[t._l(t.getComment.data.rows,(function(e){return n("li",[n("Header",{attrs:{src:e.avatar,size:44}}),n("div",{staticClass:"data"},[n("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),n("div",{staticClass:"content"},[t._v(t._s(e.content))]),n("div",{staticClass:"time"},[t._v(t._s(t.Creatdata(e.createDate,!0)))])])],1)})),t.iscommentLoad?n("div",{staticClass:"load"},[t.iscommentLoad?n("Load"):t._e()],1):t._e()],2):t._e()},h=[],p=n(441),f=n(786),g=n(832),v={components:{Header:p.Z,Load:g.Z},data(){return{url:"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg"}},props:{getComment:{Array:Array,default:[]},iscommentLoad:{}},methods:{Creatdata:f.Z}},$=v,_=(0,c.Z)($,d,h,!1,null,"3b0322f9",null),C=_.exports,L={components:{Form:u,Comment:C},props:{postcomment:{Array:Array,default:[]},getComment:{Array:Array,default:[]},iscommentLoad:{}}},b=L,S=(0,c.Z)(b,s,a,!1,null,null,null),y=S.exports},832:function(t,e,n){n.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("img",{attrs:{src:n(5)}})},a=[],o={},i=o,r=n(736),m=(0,r.Z)(i,s,a,!1,null,"565a1370",null),c=m.exports},290:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{scopedSlots:t._u([{key:"main",fn:function(){return[n("div",{ref:"main",staticClass:"main"},[t.isLoad?n("Blogcomment",t._g({attrs:{iscommentLoad:t.iscommentLoad,postcomment:t.postcomment,getComment:t.data,id:"Blogcomment"}},{submit:t.handle})):t._e()],1)]},proxy:!0}])})},a=[],o=n(829),i=n(294),r=n(88),m=n(549),c={mixins:[(0,r.Z)("main")],components:{Blogcomment:o.Z,Layout:m.Z},data(){return{isLoad:!1,commentData:{},iscommentLoad:!1,postcomment:{}}},computed:{...(0,i.mapState)("message",["data","loading","postloading"])},async beforeCreate(){await this.$store.dispatch("message/getmessage"),this.isLoad=!0},mounted(){this.$refs.main.addEventListener("scroll",this.eventbus),this.$eventBus.$on("bottom",this.handled)},methods:{async handle(t,e,n){await this.$store.dispatch("message/postmessage",{id:t,contant:e}),n()},eventbus(){if(this.$refs.main.scrollHeight>=this.$refs.main.scrollTop+this.$refs.main.clientHeight-10&&this.$refs.main.scrollHeight<=this.$refs.main.scrollTop+this.$refs.main.clientHeight+10){if(this.iscommentLoad)return;console.log("到达底部"),this.iscommentLoad=!0,this.$eventBus.$emit("bottom",this.$refs.main)}},async handled(){console.log(1111),await this.$store.dispatch("message/postmessage",this.postcomment),this.iscommentLoad=!1}}},l=c,u=n(736),d=(0,u.Z)(l,s,a,!1,null,"9e600e68",null),h=d.exports},88:function(t,e,n){function s(t){return{beforeDestroy(){this.$eventBus.$emit("busScroll"),this.$eventBus.$off("setMainScroll",this.handleScroll)},mounted(){console.log(this.$refs[t]),this.$refs[t].addEventListener("scroll",this.Eventbus)},created(){this.$eventBus.$on("setMainScroll",this.handleScroll)},methods:{handleScroll(e){console.log("返回顶部"),this.$refs[t].scrollTop=e},Eventbus(){this.$eventBus.$emit("busScroll",this.$refs[t])}}}}n.d(e,{Z:function(){return s}})},786:function(t,e,n){function s(t,e=!1){const n=new Date(+t),s=(n.getMonth()+1).toString().padStart(2,"0"),a=n.getDate().toString().padStart(2,"0");if(e){const t=n.getHours().toString().padStart(2,"0"),e=n.getMinutes().toString().padStart(2,"0"),o=n.getSeconds().toString().padStart(2,"0");return`${n.getFullYear()}-${s}-${a} ${t}:${e}:${o}`}return`${n.getFullYear()}-${s}-${a}`}n.d(e,{Z:function(){return s}})},5:function(t,e,n){t.exports=n.p+"static/img/loading.89007415.svg"}}]);