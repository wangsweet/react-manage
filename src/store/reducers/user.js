import {handleActions} from "redux-actions";
import {userListTypes} from "actions/user/usersTypes"
const defaultState = {
    total:0,
    userList: JSON.parse(sessionStorage.getItem('userList'))||[]
}

export default handleActions({
    [userListTypes]:(state,action)=>{
        let listState = JSON.parse(JSON.stringify(state));
        listState.total = action.payload.total;
        listState.userList = action.payload.userList;
        return listState;
    }
},defaultState)