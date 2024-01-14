const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'DELETE_TASK':
      return state.filter((task) => task._id !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;
