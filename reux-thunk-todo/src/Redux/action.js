import * as types from "./actionTypes";
import axios from "axios";

export const getTodoRequest = ()=>({type:types.GET_TODO_REQUEST});
export const getTodoSuccess=(payload)=>({type:types.GET_TODO_SUCCESS,payload});
export const getTodoFailure=()=>({type:types.GET_TODO_FAILURE});

export const addTodoRequest = ()=>({type:types.ADD_TODO_REQUEST});
export const addTodoSuccess=(payload)=>({type:types.ADD_TODO_SUCCESS,payload});
export const addTodoFailure=()=>({type:types.ADD_TODO_FAILURE});

export const getTasks=(dispatch)=>{
    dispatch(getTodoRequest());
    axios.get("http://localhost:8080/data")
    .then((r)=>dispatch(getTodoSuccess(r.data)))
    .catch((e)=>dispatch(getTodoFailure()))
  }