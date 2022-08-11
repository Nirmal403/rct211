import * as data from "./actionTypes";

const handleIncrement = () => {
  return { type: data.INCREMENT, payload: 1};
};
const handleDecrement = () => {
  return { type: data.DECREMENT, payload: 1 };
};

const todosRequest=()=>{
  return{
    type: data.GET_TODOS_REQUEST,
  }
}
const todoSuccess=(payload)=>{
  return{
    type: data.GET_TODOS_REQUEST,
    payload,
  }
}
const todosFailure=()=>{
  return{
    type: data.GET_TODOS_REQUEST,
  }
}

export { handleIncrement, handleDecrement, todoSuccess, todosFailure, todosRequest };
