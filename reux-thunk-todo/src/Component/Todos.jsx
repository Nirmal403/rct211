import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoInput from './TodoInput';
import { getTasks } from '../Redux/action';

const Todo = () => {

  const dispatch = useDispatch();
  const taskData = useSelector(store=>store.todos);

  useEffect(()=>{
    dispatch(getTasks);
  },[])

  return (
    <div>
      <h1>Todo</h1>
      <TodoInput/>
      {taskData?.length >0 && 
        taskData?.map((item)=>(
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default Todo