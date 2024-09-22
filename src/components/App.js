import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects the App component to the Redux store to access state and dispatch actions
import { getUsersRequest } from '../actions/users'; // Importing the action creator that dispatches the 'GET_USERS_REQUEST' action

class App extends Component {
  // Constructor method runs when the component is initialized
  // Used here to dispatch the 'getUsersRequest' action when the component is created
  constructor(props) {
    super(props);

    // Dispatching the getUsersRequest action immediately when the component is constructed
    // 'this.props.getUsersRequest()' is available because of the 'connect' function
    this.props.getUsersRequest();
  }

  render() {
    return <div>Test App</div>;
  }
}
// Calling the getUsers request Redux Action
// The connect function links this component to the Redux store
// 'null' is passed as the first argument because this component doesn't need to access any part of the Redux state
// The second argument is an object of action creators to map to props, so 'this.props.getUsersRequest' will dispatch the 'getUsersRequest' action
export default connect(null, {
  getUsersRequest,
})(App);
