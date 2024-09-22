import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/users'; // gives access to 'actions and 'types' from 'actions/users.js'
import * as api from '../api/users';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generator Functions can't be called and expect each line to run and then finish in one process.
// Generator Functions must always 'yield' values, when we hit the 'yield' keyword in a Generator Function, it returns a Value, but then it waits for us to instruct it to run again.
// We can have 1 'yield' or multiple 'yield' statements in a Generator Function, but we must call it in such a way that iterates through each 'yield' until there's no more code left to run in the Generator in which the Generator then terminates.
// In the context of REDUX SAGA, in vast majority of cases, we never actually terminate the Generator function.

// call - allows us for exapmple, to call a Promise, and call it sequentially, so we're just waiting for it to resolve. (no need to write any Callbacks or anything like that)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fork (example) - We have our main process. If we fork, if we call fork within our main process, we actually create a child process and we can do that any number of times. We can create, we can fork and create child processes within other child processes.
// In the context of Redux saga, we have our main, we have our root saga. So this would be one our root saga and all our watcher sagas will be forked from this root saga. This would be fork one, for example, would be watch, get users, fork two would be.
// Watch Delete user's request. Fork three would be. Watch. Create user request and they will all be run in separate processes. So the point of fork is, if we've got separate processes running, all our watches, all our logic is nicely separated into these separate processes.
// So any errors that occur here, we can catch effectively and act upon without affecting these. These second and third processes. Also, we can run these in parallel so we're not waiting for get users.
// The watch gets users request saga to run before then, running the delete user's request saga, for example. We're running them all in parallel. If any errors that may occur in one process, one child process, is not going to affect any other of these child processes.

// Worker SAGA
// Generator Function 'function*'
function* getUsers() {
  try {
    const result = yield call(api.getUsers); // Example: once this call get 'users' resolves, it's going to assign the 'result' to this 'const result'
    console.log(result);
    //
    // any code here afterwards will be run once this call has resolved.
    //
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

// returning a forked process
const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
