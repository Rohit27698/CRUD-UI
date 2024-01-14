import axios from "axios";

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('/tasks');
    dispatch({ type: 'FETCH_TASKS', payload: response.data });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    const response = await axios.post('/tasks', taskData);
    dispatch({ type: 'ADD_TASK', payload: response.data });
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`/tasks/${taskId}`);
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
