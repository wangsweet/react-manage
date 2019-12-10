import {BooksTypes} from "actions/books/booksTypes"
import {handleActions} from "redux-actions";

const defaultState = {
    booksList:[]
}

export default handleActions({
    [BooksTypes]:(state,action)=>{
        let booksState = JSON.parse(JSON.stringify(state));
        booksState.booksList = action.payload;
        return booksState;
    }
},defaultState);