import {handleActions} from "redux-actions";
import {userLoginTypes} from "actions/login/loginType"
const defaultState = {
    userInfo:JSON.parse(sessionStorage.getItem('userList'))||{}
}

export default handleActions({
    [userLoginTypes]:(state,action)=>{
        let userState = Object.assign({},state);
        userState.userInfo = {name:action.payload.name,urlPic:action.payload.urlPic}
        return userState;
    }
},defaultState)