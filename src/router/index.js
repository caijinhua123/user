import VueRouter from 'vue-router'
import Vue from 'vue'
import 'nprogress/nprogress.css'
import {start,done,configure} from 'nprogress'
configure({
  trickleSpeed:20
})
Vue.use(VueRouter);//使用vue插件router//全局使用 
//路由懒加载
import set from '@/utils/title.js'

function delay(duration){
  return new Promise((ressolve) => { 
    setTimeout(() => {
      ressolve()
    }, duration);
   })
}

function getPagecomponent(fn){
  return async () => { 
    console.log('组件开始');
    start()
    if(process.env.NODE_ENV === 'development'){//开发者模式
      await delay(2000)
    }
    const res = await fn()
    console.log('加载结束');
    done()
    return res
    
   }
}

const router =new VueRouter({
  //配置信息
  routes:[
    {name:'Home', path:'/',component:getPagecomponent(()=>import('@/views/Home')),meta:{
      title:'主页'
    }},
    {name:'About', path:"/about",component:getPagecomponent(()=>import('@/views/About')),meta:{
      title:'关于我'
    }},
    {name:'Blog', path:"/Blog",component:getPagecomponent(()=>import('@/views/Blog')),meta:{
      title:'文章'
    }},
    {name:'CategoryBlog', path:"/Blog/cate/:categoryId",component:getPagecomponent(()=>import('@/views/Blog')),meta:{
      title:'文章详情'
    }},
    {name:'BlogDetail', path:"/Blog/api/blog/:id",component:getPagecomponent(()=>import('@/views/Blog/components')),meta:{
      title:'文章详情'
    }},
    {name:'Project', path:"/project",component:getPagecomponent(()=>import('@/views/Project')),meta:{
      title:'项目&&效果 '
    }},
    {name:'Message', path:"/message",component:getPagecomponent(()=>import('@/views/Message')),meta:{
      title:'留言板'
    }},
    {name:'NotFound', path:"*",component:getPagecomponent(()=>import('@/views/NotFound')),meta:{
      title:'404'
    }}
  ],
  mode:'hash'
})

router.afterEach((to,form,next) => {
  set.setRouter(to.meta.title)//路由守卫
 })
export default router;