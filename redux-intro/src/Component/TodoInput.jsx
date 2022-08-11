import React,{useState} from 'react'

const TodoInput = () => {

  const [currentTodo,setCurrentTodo] =useState("");

  const changeHandler=(e)=>{
    setCurrentTodo(e.target.value);
  }
  const addTodoHandler=()=>{
    
  }
  return (
    <div>
        <input placeholder='add todo'
        vale={currentTodo}
        onChange={changeHandler}
        />
        <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  )
}

export default TodoInput