import React, { useState, useContext, useEffect } from "react";

import AlertContext from '../../shared/alert/alertContext';
import ContactContext from './context/contactContext';

import Input from "../../shared/forms/input/Input";
import Textarea from "../../shared/forms/textarea/Textarea";
import Button from "../../shared/forms/button/Button";

import BackTo from "../../shared/button/BackTo";
import UiLoading from "../../shared/uiLoading/UiLoading";
import Preloader from '../../shared/preloader/Preloader'


const Contact = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { addContact,messageIsSent } = contactContext;

  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);

  const [messageItems, setMessageItems] = useState({
    name: '',
    companyName: '',
    service: '',
    phone: '',
    email: '',
    information: ''
  });

  const { name, companyName, service, phone, email, information } = messageItems;

  const onChange = e =>setMessageItems({ ...messageItems, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
      //validation befor submit
   if (name === '' || service === '' || email === '') {
      setAlert('Please fill in all fields', 'error');} 
      setStep(2)
    addContact(messageItems);
  };

  useEffect(() => {
    if(messageIsSent === true)setStep(1) 
 }, [messageIsSent]);

  const switchStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className='contact-us_message'>

              <span className='contact-us_icon-success'><i className='aicon-direct'></i></span>
              <h1 className="contact-us_success">Danke dir<br /> Wir werden uns bald<br /> bei dir melden</h1>

            </div>
          </>
        )
        case 2:
          return (
            <Preloader/>
          )
      default:
        return (
          <>
            <form onSubmit={onSubmit} className='contact-us_message' >

              <p>Hallo Mohammad,</p>
              <div className="message-item">
                <span className=' message-item_title_1 '>mein Name ist</span>
                <Input
                  id='name'
                  type='text'
                  name='name'
                  value={name}
                  onChange={onChange}
                  placeholder='Vor- und Nachname*'
                  required='required'
                  classs=' message-item_input_1 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_2 '>Ich arbeite bei </span>
                <Input
                  id='companyName'
                  type='text'
                  name='companyName'
                  value={companyName}
                  onChange={onChange}
                  placeholder='Unternehmensname'
                  classs=' message-item_input_2 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_3 '>und ich brauche deine Hilfe für</span>
                <Input
                  id='service'
                  type='text'
                  name='service'
                  value={service}
                  onChange={onChange}
                  placeholder='Art des Projekts*'
                  classs=' message-item_input_2 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_4 '>Du kannst mich unter dieser</span>
                <Input
                  id='phone'
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={onChange}
                  placeholder='Telefonnummer'
                  classs='  message-item_input_4 '
                />
              </div>
              <div className="message-item">
                <span className=' message-item_title_5 '>erreichen oder einfach per E-Mail</span>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  placeholder='E-Mail adresse*'
                  required='required'
                  classs='  message-item_input_5 '
                />
              </div>
              <div className="message-item">
                <Textarea
                  id='information'
                  name='information'
                  value={information}
                  onChange={onChange}
                  placeholder='Weitere Informationen'
                  classs='  message-item_input_5 '
                />
              </div>

              <p>Dankeschön.</p>

              <Button
                type='submit'
                value='SENDEN'
              />
            </form >
          </>
        )

    }
  };


  return (
    <UiLoading>
      <div className="container">
        <BackTo to='/' title='Zurück zum Home' />
        <div id="contact" className="contact-us">
          <h1 className="contact-us_title">sag mir, was du brauchst</h1>
          <span className="contact-us_subtitle">Was du wirklich brauchst.</span>
          {switchStep()}
          <p className="city-name">HAMBURG</p>
        </div>
      </div>
    </UiLoading>
  );
};

export default Contact;
