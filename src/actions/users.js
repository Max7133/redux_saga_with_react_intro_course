// Action Types
export const Types = {
  GET_USERS_REQUEST: 'users/get_users_request',
  GET_USERS_SUCCESS: 'users/get_users_success',
};

// Actions
export const getUsersRequest = () => ({
  // returns the Type
  type: Types.GET_USERS_REQUEST,
});

// Actions
// Takes in an Object with the Key { items } <- The Array of 'users' that Ill pass in when calling the GET_USERS_SUCCESS
export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  // setting 'payload' Obj to 'items'
  payload: {
    items,
  },
});
