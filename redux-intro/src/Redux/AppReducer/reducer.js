import * as data from "./actionTypes";
import {loadData, saveData} from "../../utils/accessLocalStorage";


const initialState={
    counter: loadData("counter")||3,
    data: 10,
    todos:[],
    isLoading: false,
    isError: false,
};
const reducer = (oldState =initialState, action)=>{
  
     const {type,payload} =action;
    // console.log("Action is", action)
    switch(type){
        case data.INCREMENT:
            let newCountIncrement = oldState.counter + payload;
            saveData("counter",newCountIncrement)
    return {...oldState, counter: newCountIncrement}
        case data.DECREMENT:
            let newCountDecrement = oldState.counter + payload;
            saveData("counter",newCountDecrement)
    return {...oldState, counter: newCountDecrement}
        case data.GET_TODOS_REQUEST:
            return{
                ...oldState, 
                isLoading: true,
                isError: false,
            };
         case data.GET_TODOS_SUCESS:
                return{
                    ...oldState, 
                    isLoading: false,
                    isError: false,
                    todos: [...payload],
                }
          case data.GET_TODOS_FAILURE:
                    return{
                        ...oldState, 
                        isLoading: false,
                        isError: true,
                    }
    default:
            return oldState;
    };
}
export {reducer};