import Vue from "vue";
import style from './showMessage.module.less'
import Icon from '@/components/Icon/Icon.vue'
  /**
    获取某个组件渲染的Dom根元素
  */
//  comp组件，props数据(对象) 返回根元素
    function getComponentRootDom(comp, props){
        const vm = new Vue({
          render: h => h(comp, {props})
        })
        vm.$mount();
        return vm.$el;
      }
/**
 * @name: 
 * @test: test font
 * @msg: 
 * @param {*}消息内容，响应类型（info,error,success,warn）,消失的时间，容器,
 * @return {*}
 */
//  {content,type,container}
export default function({content='成功提交！',type='info',duration = 2000,container}) {
    const div =document.createElement('div')
    const icon = getComponentRootDom(Icon,{type});
    div.innerHTML = `<span>${icon.outerHTML}</span><div>${content}</div>`
    div.className=`${style.show}`
    div.classList.add(style[`show-${type}`])
    if(container){
      container.appendChild(div)
    }else{
      document.querySelector('body').appendChild(div)
    }
    div.style.opacity=1
    //一段时间后消失
    setTimeout(() => {
       
        div.style.opacity=0
        div.style.transform=' translate(-50%,-50%)  translateY(-25px)'
        setTimeout(() => { 
           document.querySelector(`.${style.show}`).remove() },duration)
    }, duration);
}