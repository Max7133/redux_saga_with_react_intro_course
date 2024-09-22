import { combineReducers } from 'redux';
import UsersReducer from './users';

// combining Reducers
export default combineReducers({
  users: UsersReducer(),
});
