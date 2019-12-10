import http from "utils/request";

export const userListApi = ()=>http({
    method:"get",
    url:"/ajax/users/userList"
})