import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrement, handleIncrement } from "../Redux/AppReducer/action";
// import { store } from "./Redux/store";

const Counter = () => {

    const counter = useSelector((store) => store.Appreducer.counter);
// const data = useSelector((state)=>state.data);
const dispatch = useDispatch();
// console.log("I am rendering")


  // const { dispatch } = store;
  // const { counter } = store.getState();
  // const [local, setLocal] = useState(0);

  // store.subscribe(() => {
  //   // console.log("State after dispatch", store.getState());
  //   setLocal((prev) => prev + 1);
  // });

  return (
    <div>
          <h1 className="h1">Counter: {counter}</h1>
      <button className="decrement"
       onClick={() => 
       dispatch(handleDecrement())
      }
       >-</button>
      <button className="increment" 
      onClick={() => 
        dispatch(handleIncrement())}
      >+</button>
    </div>
  )
}

export default Counter