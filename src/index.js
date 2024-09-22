import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import reducers from './reducers'; // Importing combined reducers for the Redux store
import { Provider } from 'react-redux'; // Provider to give access to the Redux store
import { createStore } from 'redux'; // Function to create the Redux store

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3004';

// Create the Redux store using the combined reducers
const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with the Redux store provider and React Strict Mode for development checks
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
