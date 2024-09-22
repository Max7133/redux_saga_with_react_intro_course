import UsersSagas from './users'; // the Array from sagas/users -> const usersSagas = [fork(watchGetUsersRequest)];
import { all } from 'redux-saga/effects';

// all - similiar to Promise.resolveAll but with Forked Processes (the forked sagas)

export default function* rootSaga() {
  // will allow all these forked processes to be created in parallel.
  yield all([
    // ...UsersSagas - creates a new Array from UsersSagas
    ...UsersSagas,
  ]);
}
