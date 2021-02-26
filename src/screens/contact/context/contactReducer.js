import {
  ADD_CONTACT,
  CONTACT_ERROR
} from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contact:  [action.payload],
        messageIsSent: true
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
