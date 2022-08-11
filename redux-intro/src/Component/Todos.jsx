import React from 'react'
import TodoInput from './TodoInput';
import axios from "axios";
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { todoSuccess, todoFailure, todosRequest } from '../Redux/action';

export const Todos = () => {

const dispatch = useDispatch();
const {todos,isLoading,isError} =useSelector
((store)=>{
    return{
        todos:store.todos,
        isLoading: store.isLoading,
        isError: store.isError,
    };
    
    },shallowEqual);

const getTodos =() =>{

    dispatch(todosRequest());
       return axios
        .get("http://localhost:8080/todos")
        .then((r)=>{
            dispatch(todoSuccess(r.data));
        })
        .catch((e)=>{
            dispatch(todoFailure());
        });
    };

    const addTodos =(payload) =>{
        dispatch(addTodoRequest());
        return axios 
        .post("http://localhost:8080/todos",payload)
        .then((r)=>{
            dispatch(addTodoSuccess())
        })
        .catch((e)=>{
            console.log(e);
            dispatch(addTodoFailure())
        })
    }

    useEffect(()=>{
        getTodos();
    },[]);
  return (
    <div>
        <h1>Todos</h1>
        <TodoInput addTodos={addTodos}/>
    </div>
  );
};

