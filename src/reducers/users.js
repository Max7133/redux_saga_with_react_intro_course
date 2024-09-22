import { Types } from '../actions/users';

// Initial 'users' State
const INITIAL_STATE = {
  items: [],
};

// handle 'actions' that come through
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        // set the State Slice
        items: action.payload.items, // comes from actions/users.js export const getUsersSuccess = ({ items }) => ({...}}
      };
    }
    default: {
      return state;
    }
  }
}
