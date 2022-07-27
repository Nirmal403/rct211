import {legacy_createStore} from "redux";
import {reducer} from "./reducer";

const store = legacy_createStore(reducer,{counter:5});

export {store};