import http from "utils/request";

export const booksListApi = (page,limit)=>http({
    method:"get",
    url:"/ajax/books/booksList",
    data:{
        page,
        limit
    }
})


export const booksListUpdate = (id,booksAuth,booksName,booksPrice,booksStatus,booksLogo)=>http({
    method:"post",
    url:"/ajax/books/modify",
    data:{
        booksAuth,
        booksName,
        booksPrice,
        booksStatus,
        booksLogo,
        id
    }
})


export const booksListDel = (id)=>http({
    method:"get",
    url:"/ajax/books/delete",
    data:{
        id
    }
})