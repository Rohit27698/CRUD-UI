import React, {  useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../context/TodoContexProvider';

const EditTodo = () => {
  const {setTodo ,todo}=useContext(TodoContext)
  const nav = useNavigate();

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.checked,
    });
  };

  const handleUpdateTodo = async () => {
    try {
      const token = localStorage.getItem("token")
      await fetch(`http://localhost:30001/todos/${todo._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${token}`
        },
       
        body: JSON.stringify({status:todo.status,title:todo.title,description:todo.description}),

      });
      nav('/')

    } catch (error) {
      console.error('Error Updating todo', error.message);
    }
  };

  return (
    <div className="min-h-screen  justify-center bg-purple-900 p-20">
         <div className="max-w-md mx-auto mt-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Todo</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={todo.description}
            onChange={handleInputChange}
            required
            rows="4"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Status:
          </label>
          <input
            type="checkbox"
            name="status"
            checked={todo.status}
            onChange={handleCheckboxChange}
            className="mt-1 p-2"
          />
        </div>
        <button
          type="button"
          onClick={handleUpdateTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Update Todo
        </button>
      </form>
    </div>

    </div>
   
  );
};

export default EditTodo;
