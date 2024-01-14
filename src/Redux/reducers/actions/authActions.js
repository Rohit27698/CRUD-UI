import axios from "axios";


export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/register', userData);
    dispatch({ type: 'REGISTER_USER', payload: response.data });
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/login', userData);
    dispatch({ type: 'LOGIN_USER', payload: response.data });
  } catch (error) {
    console.error('Error logging in user:', error);
  }
};
