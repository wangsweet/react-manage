import axios from "axios";

const server =axios.create({
    timeout:5000,
    //baseUrl:"",
    widthCredentials:true
})

//请求的拦截 

server.interceptors.request.use((config)=>{
    if(config.method==="get"){
        config.params={...config.data};
    }
    return config;
    //config.header["content-type"]="application/json"
},(err)=>{
   return Promise.reject(err);
})

//响应拦截

server.interceptors.response.use((res)=>{
    if(res.status===200){
        return res.data;
    }
})

export default server;