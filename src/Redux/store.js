import {combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import taskReducer from './reducers/taskReducer';
import authReducer from './reducers/authReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
