import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  CONTACT_ERROR
} from './types';

import {API} from '../../../utils/variables'

const ContactState = props => {
  const initialState = {
    contact: null,
    messageIsSent: false,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

 // Add Contact
  const addContact = async message => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(`${API}/messages`, message, config);

      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (err) {
      if (err.response.msg) {
        dispatch({
          type: CONTACT_ERROR,
          payload: err.response.msg
        })
      }
    }
  };


  return (
    <ContactContext.Provider
      value={{
        contact: state.contact,
        messageIsSent: state.messageIsSent,
        error: state.error,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
