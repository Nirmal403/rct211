import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Counter from "./Component/Counter";
import {Todos} from "./Component/Todos"
import { loginSuccess, loginFailure , loginRequest} from "./Redux/AuthReducer/action";
function App() {
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth =useSelector((store)=>store.AuthReducer.isAuth);

  const handleLogin = () => {
    if (useremail) {
      const payload = {
        email: useremail,
        password,
      };
      dispatch(loginRequest());
      axios
        .post("https://reqres.in/api/login", payload)
        .then((r) =>{
          console.log(r.data);
            return dispatch(loginSuccess(r.data));
        })
        .catch((e) => dispatch(loginFailure(e)));
    }
  };
  return (
    <div className="App">
      <Counter />
      <div>
        <input
          placeholder="email"
          type="email"
          value={useremail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleLogin}>LOGIN</button>
      </div>

      {/* <TodoInput /> */}
      {isAuth && <Todos />}
    </div>
  );
}

export default App;
