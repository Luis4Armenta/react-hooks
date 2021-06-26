import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import './effects.css'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;
  
  useEffect(() => {
    // console.log('hey!');
  }, []);

  useEffect(() => {
    // console.log('FormState Cambió');
  }, [formState]);

  useEffect(() => {
    // console.log('Email Cambió');
  }, [email]);

  const handdleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }
  
  return (
    <div>
      <h1>useEffec</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handdleInputChange }/>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="example@email.com"
          autoComplete="off"
          value={ email }
          onChange={ handdleInputChange }/>
      </div>

      { (name === '123') && <Message /> }
    </div>
  )
}
