import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoFailure, addTodoRequest, getTasks, addTodoSuccess } from '../Redux/action';
import axios from "axios";

const TodoInput = () => {
  
  const [currentTask,setCurrentTask] = useState("");

  const dispatch = useDispatch()

  const handleClick=()=>{
    const payload={title:currentTask,status:false};
    dispatch(addTodoRequest());
    axios.post("http://localhost:8080/data",payload)
    .then(()=>dispatch(getTasks))
    .catch((e)=>dispatch(addTodoFailure()))
  }

  return (
    <div>
      <h3>TodoInput</h3>
      <input type="text" placeholder='Add Task Here' onChange={(e)=>setCurrentTask(e.target.value)} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput