import {BooksTypes} from "./booksTypes";
import {createAction} from "redux-actions";
import {booksListApi} from "api/books"


export const booksAsyncAction = (page,limit)=>{
    let booksAction = createAction(BooksTypes,data=>data);
    return async (dispatch)=>{
        let data = await booksListApi(page,limit);
        dispatch(booksAction(data.data.list))
    }
}