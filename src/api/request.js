import axios from 'axios'
//拦截请求的响应后执行的动作（响应拦截）
axios.interceptors.response.use((resp) => { 
    // console.log(resp);
    if(resp.data.code!==0){
        return null
    }else{
        return resp.data
    }

 });
 const request =axios
export default request