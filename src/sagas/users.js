import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/users'; // gives access to 'actions and 'types' from 'actions/users.js'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generator Functions can't be called and expect each line to run and then finish in one process.
// Generator Functions must always 'yield' values, when we hit the 'yield' keyword in a Generator Function, it returns a Value, but then it waits for us to instruct it to run again.
// We can have 1 'yield' or multiple 'yield' statements in a Generator Function, but we must call it in such a way that iterates through each 'yield' until there's no more code left to run in the Generator in which the Generator then terminates.
// In the context of REDUX SAGA, in vast majority of cases, we never actually terminate the Generator function.

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
  // under the hood, this 'takeEvery' is running a while (true) loop, it's constantly waiting and wacthing for whatever action we pass in
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}
