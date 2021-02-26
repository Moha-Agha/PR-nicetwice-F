import React, { useReducer } from 'react';
import UiLoadingContext from './uiLoadingContext';
import uiLoadingReducer from './uiLoadingReducer';
import {
  TRUE_UILOADING,
  FALSE_UILOADING
} from './types';

const UiLoadingState = props => {
  const initialState = {
    uiLoading: null
  };

  const [state, dispatch] = useReducer(uiLoadingReducer, initialState);

  // UiLoading false
  const UiLoadingFalse = () => {
    dispatch({ type: FALSE_UILOADING });
  };
  // UiLoading true
  const UiLoadingTrue = () => {
    dispatch({ type: TRUE_UILOADING });
  };

  return (
    <UiLoadingContext.Provider
      value={{
        uiLoading: state.uiLoading,
        UiLoadingFalse,
        UiLoadingTrue
      }}
    >
      {props.children}
    </UiLoadingContext.Provider>
  );
};

export default UiLoadingState;
