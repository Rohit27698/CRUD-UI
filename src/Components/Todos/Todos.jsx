import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

const Todos = () => {
  const [tasks, setTask] = useState([])
    const fetchData=async()=>{
      const token = localStorage.getItem("token")
      await fetch("http://localhost:30001/todos", {
          method : "GET",
          headers : {
              "content-type" : "application/json",
              "Authorization" : `Bearer ${token}`
          },
      })
      .then((res) => res.json())
      .then((res) =>setTask(res.todos))
    }
    useEffect(() => {
      fetchData();
       
       }, [])
    
  const handleDelete = async(_id) => {
    try {
      const token = localStorage.getItem("token")
      await fetch(`http://localhost:30001/todos/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${token}`
        },
      });

      alert('Todo Deleted successfully');
      fetchData();


    } catch (error) {
      console.error('Error Deleting todo', error.message);
    }
    
  };

  const handleCompleted = async(_id,status) => {
    if(status===false){
      try {
        const token = localStorage.getItem("token")
        await fetch(`http://localhost:30001/todos/${_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
          },
         
          body: JSON.stringify({status:true}),
        });
        fetchData();
  
  
      } catch (error) {
        console.error('Error Updating todo', error.message);
      }
    }else{
      try {
        const token = localStorage.getItem("token")
        await fetch(`http://localhost:30001/todos/${_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
          },
         
          body: JSON.stringify({status:false}),
        });
        fetchData();
  
  
      } catch (error) {
        console.error('Error Updating todo', error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-purple-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {tasks?.map((todo) => (
        <TodoCard
          key={todo._id}
          _id={todo._id} 
          title={todo.title}
          status={todo.status}
          description={todo.description}
          onDelete={handleDelete}
          onCompleted={handleCompleted}
          todo={todo}
        />
      ))}
      </div>
      
    </div>
  );
};

export default Todos;
