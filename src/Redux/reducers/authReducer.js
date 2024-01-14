const initialState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
      case 'LOGIN_USER':
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  