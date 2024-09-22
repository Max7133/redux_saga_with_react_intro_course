import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/users'; // gives access to 'actions and 'types' from 'actions/users.js'

// Worker SAGA
// Generator Function 'function*'
function* getUsers() {
  try {
  } catch (e) {}
}

// Watcher SAGA - watches when one particular REDUX ACTION has been dispatched and then acts upon that 'action' by calling the Worker SAGA
// will watch for every time the getUsers request 'action' is dispatched
// Generator Function 'function*'
function* watchGetUsersRequest() {
  // 'getUsers' referes to the Worker SAGA
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}
