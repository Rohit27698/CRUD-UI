import React, { createContext, useState } from 'react'
export const TodoContext=createContext()
export const TodoContexProvider = ({children}) => {
  const [todo, setTodo] = useState({})
  const addTodo=(payload)=>{
    setTodo(payload)
  }
  const deleteTodo=(payload)=>{
    setTodo({})
  }
  return (
    <TodoContext.Provider value={{addTodo,deleteTodo,todo,setTodo}}>
      {children}
    </TodoContext.Provider>
  )
}
