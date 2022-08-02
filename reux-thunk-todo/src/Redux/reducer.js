import * as types from "./actionTypes";

const state={
    todos:[],
    isLoading:false,
    isError:false
}

export const reducer=(oldState=state,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.GET_TODO_REQUEST:
            return ({...oldState,isLoading:true})
        case types.GET_TODO_SUCCESS:
            return ({...oldState,todos:payload,isLoading:false})
        case types.GET_TODO_FAILURE:
            return ({...oldState,isError:true})
        case types.ADD_TODO_REQUEST:
            return ({...oldState,isLoading:true});
        case types.ADD_TODO_SUCCESS:
            return ({...oldState,todos:[...oldState.todos,payload],isLoading:false})
        case types.ADD_TODO_FAILURE:
            return ({...oldState,isError:true})
        default:
            return oldState;
    }
}