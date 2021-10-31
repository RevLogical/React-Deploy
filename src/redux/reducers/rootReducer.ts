import { Reducer, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

const rootReducer = (): Reducer => {
    return combineReducers({
        counter: counterReducer
    })
}

export default rootReducer;