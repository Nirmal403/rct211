import "./App.css";
import { useState } from "react";
import { handleDecrement, handleIncrement } from "./Redux/action";
import { store } from "./Redux/store";

function App() {
  const { dispatch } = store;
  const { counter } = store.getState();
  const [local, setLocal] = useState(0);

  store.subscribe(() => {
    // console.log("State after dispatch", store.getState());
    setLocal((prev) => prev + 1);
  });
 
  return (
    <div className="App">
      <h1 className="h1">Counter: {counter}</h1>
      <button className="decrement" onClick={() => dispatch(handleDecrement())}>-</button>
      <button className="increment" onClick={() => dispatch(handleIncrement())}>+</button>
     
    </div>
  );
}

export default App;
