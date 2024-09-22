import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducers from './reducers'; // Combines all reducers from the Redux Store (which handle state changes) into one root reducer
import { Provider } from 'react-redux'; // Makes the Redux store available to the entire app
import { createStore, applyMiddleware } from 'redux'; // createStore creates the Redux store, applyMiddleware is used to add middleware
import createSagaMiddleware from 'redux-saga'; // Creates the Saga middleware used to handle side effects in Redux
import rootSaga from './sagas'; // Root saga where all the sagas (side effects) are managed

//axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3004';

// Create the Saga middleware
// This middleware is used to manage asynchronous actions (side effects) in Redux,
// like making API calls or waiting for dispatched actions.
// Sagas allow better handling of side effects by yielding effects (like API calls)
// in a controlled, testable way, rather than using traditional promises or thunks.
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the combined reducers and apply the Saga middleware.
// applyMiddleware is used to enhance the store with middleware like Saga, which listens for dispatched actions
// and runs side effects accordingly.
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// Run the root saga that controls all the side-effect logic
// sagaMiddleware.run(rootSaga) initializes the saga middleware and starts the root saga,
// which watches for actions like 'GET_USERS_REQUEST' and triggers the appropriate worker saga
// (e.g., fetching users from an API).
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in the Provider
// Provider is a higher-order component from react-redux that makes the Redux store available
// to all components in the app, so they can access and update the global state via `connect()` or `useSelector()`.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
