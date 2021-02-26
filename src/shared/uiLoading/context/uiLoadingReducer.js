import {
  TRUE_UILOADING,
  FALSE_UILOADING
} from './types';


export default (state, action) => {
  switch (action.type) {
    case TRUE_UILOADING:
      return {
        ...state,
        uiLoading: true
      };
    case FALSE_UILOADING:
      return {
        ...state,
        uiLoading: false
      };
    default:
      return state;
  }
};
