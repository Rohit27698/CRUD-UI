import { useState } from 'react';
// import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status:false
  });
  const nav=useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token")
      // console.log(formData)
      await fetch('https://puce-ant-tutu.cyclic.app/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      alert('Todo added successfully');

      setFormData({
        title: '',
        description: '',
      });

      nav("/todo")
    } catch (error) {
      console.error('Error adding todo', error.message);
    }

  };

  return (
    <div className="min-h-screen p-20 justify-center bg-purple-900" >
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-neutral-200 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Todo</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:shadow-outline-purple"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
