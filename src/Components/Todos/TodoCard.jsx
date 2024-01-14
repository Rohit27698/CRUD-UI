import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import EditTodo from './EditTodo';
import { TodoContext } from '../../context/TodoContexProvider';

const TodoCard = ({ _id, title, description, onDelete, onCompleted, status, todo }) => {
  const { addTodo } = useContext(TodoContext)
  const nav = useNavigate()
  const handleEdit = () => {
    addTodo(todo)
    nav('/edit')
  }
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 mt-4" >
      <div onClick={handleEdit}>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => onDelete(_id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
        {
          status ? <button
            onClick={() => onCompleted(_id, status)}
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Completed
          </button> : <button
            onClick={() => onCompleted(_id, status)}
            className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Not Completed
          </button>
        }
      </div>
    </div>
  );
};

export default TodoCard;
