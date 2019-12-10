import {booksAsyncAction} from "actions/books/booksAsyncAction"
export const mapStateToProps = (state)=>({
    booksList:state.books.booksList
})

export const mapDispatchToProps = (dispatch) =>({
        handleGetBooksList(page,limit){
            dispatch(booksAsyncAction(page,limit))
        }
})