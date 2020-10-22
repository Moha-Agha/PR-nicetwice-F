import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';


import Input from '../../components/uiElements/forms/Input';
import Button from '../../components/uiElements/forms/Button';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push('/');
      props.backToMenu()
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'error');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    < >
      <div className="back-arrow" onClick={props.backToMenu}><i className="aicon-left-arrow"> </i> zurück zum Menü </div>
      <h3>Account Login</h3>
      <form onSubmit={onSubmit}>
        <div >
          <Input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='Email'
            required='required'
          />
        </div>
        <div className='form-group'>
          <Input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            placeholder='Password'
            required='required'
          />

        </div>
        <Button
          type='submit'
          value='Login'
          className=''
        />
      </form>
    </>
  );
};

export default Login;
