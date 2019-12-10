import {userLoginTypes} from "./loginType";
import {createAction} from "redux-actions";
import {loginApi} from "api/login"
import {message} from "antd"
export const loginAsyncAction = (username,password)=>{
    let loginAction = createAction(userLoginTypes,data=>data)
   
    return async (dispatch)=>{
        let data = await loginApi(username,password);

        if(data.data.code == 1){
            message.success("登陆成功",1.5)
            sessionStorage.setItem("userInfo",JSON.stringify({name:data.data.data.name,urlPic:data.data.data.urlPic}))
            dispatch(loginAction(data.data.data));

            return data.data.code;
        }else{
            message.error(data.data.info)
        }


        
    }
}