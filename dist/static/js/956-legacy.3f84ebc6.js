"use strict";(self["webpackChunkhello_world1"]=self["webpackChunkhello_world1"]||[]).push([[956],{3956:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{scopedSlots:t._u([{key:"main",fn:function(){return[n("div",{ref:"main",staticClass:"project-container main"},[t._l(t.data.data,(function(e){return n("div",{key:e.id,staticClass:"project-item"},[n("a",{attrs:{href:e.url?e.url:"javascript:alert('该项目无法通过外网访问')",target:e.url?"_blank":"_self"}},[n("img",{directives:[{name:"Lazy",rawName:"v-Lazy",value:"/static/upload/2022-5-18-16-30-43-823-fe811.jpg",expression:"'/static/upload/2022-5-18-16-30-43-823-fe811.jpg'"}],staticClass:"thumb"})]),n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:e.url?e.url:"javascript:alert('该项目无法通过外网访问')",target:e.url?"_blank":"_self"}},[t._v(" "+t._s(e.name)+" ")])]),e.github?n("a",{staticClass:"github",attrs:{target:"_blank",href:e.github}},[t._v(" github ")]):t._e(),t._l(e.description,(function(e,s){return n("p",{key:s},[t._v(" "+t._s(e)+" ")])}))],2)])})),0===t.data.length&&!1===t.loading?n("Empty"):t._e()],2)]},proxy:!0}])})},a=[],r=n(6294),i=n(7088),l=n(5549),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty_canontianer"},[n("Icon",{attrs:{type:"empty"}}),n("span",[t._v(" "+t._s(t.text)+" ")])],1)},c=[],u=n(7590),f={name:"Empty",components:{Icon:u.Z},props:{text:{type:String,default:"无数据"}}},p=f,h=n(3736),d=(0,h.Z)(p,o,c,!1,null,"79982834",null),m=d.exports,_={mixins:[(0,i.Z)("main")],beforeCreate:function(){this.$store.dispatch("project/fetchProject")},computed:(0,r.mapState)("project",["loading","data"]),components:{Layout:l.Z,Empty:m}},v=_,b=(0,h.Z)(v,s,a,!1,null,"519b54fa",null),g=b.exports},7088:function(t,e,n){function s(t){return{beforeDestroy:function(){this.$eventBus.$emit("busScroll"),this.$eventBus.$off("setMainScroll",this.handleScroll)},mounted:function(){console.log(this.$refs[t]),this.$refs[t].addEventListener("scroll",this.Eventbus)},created:function(){this.$eventBus.$on("setMainScroll",this.handleScroll)},methods:{handleScroll:function(e){console.log("返回顶部"),this.$refs[t].scrollTop=e},Eventbus:function(){this.$eventBus.$emit("busScroll",this.$refs[t])}}}}n.d(e,{Z:function(){return s}})}}]);