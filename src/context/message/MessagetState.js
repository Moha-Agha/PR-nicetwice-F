import React, { useReducer } from 'react';
import axios from 'axios';
import MessageContext from './messageContext';
import messageReducer from './messageReducer';
import {
  GET_MESSAGES,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  MESSAGE_ERROR
} from '../types';

const MessageState = props => {
  const initialState = {
    messages: null,
    error: null
  };

  const [state, dispatch] = useReducer(messageReducer, initialState);

  // Get Messages
  const getMessages = async () => {
    try {
      const res = await axios.get('/api/messages');

      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Message
  const addMessage = async message => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/messages', message, config);

      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      });
    } catch (err) {
      if (err.response.msg) {
        dispatch({
          type: MESSAGE_ERROR,
          payload: err.response.msg
        })
      }
    }
  };

  // Delete Message
  const deleteMessage = async id => {
    try {
      await axios.delete(`/api/messages/${id}`);

      dispatch({
        type: DELETE_MESSAGE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        error: state.error,
        getMessages,
        addMessage,
        deleteMessage
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;
