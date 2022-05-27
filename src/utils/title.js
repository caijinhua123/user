//网站标题控制
var routertitle='';
var sitetitle='';

function set(){
    if(!routertitle && !sitetitle){
        return 'loading'
    }else if(routertitle && !sitetitle){
        return routertitle
    }else if(!routertitle && sitetitle){
        return sitetitle
    }else{
        return routertitle+'-'+sitetitle
    }
}


export default {
    setRouter(name) {
        routertitle = name
        document.title =set()
    },
    setSite(name){
        sitetitle = name
        document.title =set()
    }
}