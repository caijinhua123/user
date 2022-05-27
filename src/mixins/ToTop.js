export default function(dom){
    return {
        beforeDestroy(){//销毁组件后
            // console.log("销毁");
            
            this.$eventBus.$emit('busScroll')//触发销毁top
    
             this.$eventBus.$off("setMainScroll", this.handleScroll);
        },
        mounted(){
            console.log(this.$refs[dom]);
            this.$refs[dom].addEventListener('scroll',this.Eventbus)
        
        },
        created(){
            //监听//监听到后执行事件
            //函数防抖
            //监听回到顶部事件
            this.$eventBus.$on("setMainScroll", this.handleScroll);
        },
        methods:{
            handleScroll(to){
                console.log('返回顶部');
                this.$refs[dom].scrollTop  = to
            },
            Eventbus(){
                // console.log("监听中");
                //触发事件.事件总线
                this.$eventBus.$emit('busScroll',this.$refs[dom])
                
            },
        }
    }
}