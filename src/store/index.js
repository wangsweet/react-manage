import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import login from "./reducers/login"
import books from "./reducers/books"
import user from "./reducers/user"
import {composeWithDevTools} from "redux-devtools-extension"

const reducers = combineReducers({
    login,books,user
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;