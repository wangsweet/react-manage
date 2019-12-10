import {createAction} from "redux-actions";
import {userListApi} from "api/user"
import {userListTypes} from "./usersTypes"
export const userListAsyncAction = ()=>{
    let userListAction = createAction(userListTypes,(total,userList)=>({total,userList}))
    return async (dispatch)=>{
        let data = await userListApi();
        sessionStorage.setItem("total",data.data.data[1]);
        sessionStorage.setItem("userList",JSON.stringify(data.data.data[0]))
        dispatch(userListAction(data.data.data[1],data.data.data[0]))
    }
}