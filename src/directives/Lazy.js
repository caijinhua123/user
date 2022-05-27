import eventBus from '@/utils/eventBus'
import Debounce from "@/utils/Debounce"

eventBus.$eventBus.$on('busScroll',Debounce(handleLazy))

let doms =[]

function setDom(item) {//处理单个dom
    if(item.dom.getBoundingClientRect().top >-item.dom.clientHeight
    && item.dom.getBoundingClientRect().top < window.innerHeight){
        //添加地址并且移除数组
        item.dom.src = item.src
        // doms.splice(doms.indexOf(item),1)
        doms=doms.filter((i) => i!==item)
    }
}

function handleLazy(){
    // console.log('触发了事件');
    // console.log(doms);
    for (const dom of doms) {
        setDom(dom)
    }
}
import imgurlconfig from "@/utils/imgurlconfig"
export default {
    inserted:(el,binding) => { 
        const domone ={
            dom:el,
            src:imgurlconfig()+binding.value
        };
        doms.push(domone)
        setDom(domone)
     },
    unbind:()=>{
        doms=[]
    }

}