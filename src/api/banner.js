import request from './request.js'

export async  function getBanners(){
    const resp =await request.get('/api/banner')
    if (!resp) {
        // showMessage({content:'提交错误',type:'error',duration:2000,container:document.body})
        return
    }
    // showMessage({content:resp.msg,type:'info',duration:2000,container:document.body})
    // console.log(resp.data);
    return resp.data
}