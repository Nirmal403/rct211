import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import {reducer as AppReducer} from "../Redux/AppReducer/reducer";
import {reducer as AuthReducer} from "../Redux/AuthReducer/reducer"


const rootReducer = combineReducers({AppReducer,AuthReducer})

const logger1 = (store)=> (next) => (action)=>{
    console.log("Dispatching action 1 - a", action);
    const val = next(action);
    console.log("After val 2-a" ,val);
    return val;
};

const logger2 = (store)=> (next) => (action)=>{
    console.log("Dispatching action 2 - b", action);
    const val = next(action);
    console.log("After val 2-b" ,val);
    return val;
};


const store = legacy_createStore(
    rootReducer,
    applyMiddleware(logger1, logger2)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};