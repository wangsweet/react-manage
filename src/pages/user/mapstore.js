import {userListAsyncAction} from "actions/user/userAsyncAction"
export const mapStateToProps = (state)=>({
    total:state.user.total,
    userList:state.user.userList
})

export const mapDispatchToProps = (dispatch)=>({
        handleUserList(){
            dispatch(userListAsyncAction())
        }
})