import React from 'react'
import { useState } from 'react'
import FormInput from './FormInput'
import {loginFields} from "../constants/formFields"
import FormExtra from "../componenets/FormExtra"
import FormAction from "../componenets/FormAction"



const fields = loginFields;
let feildsState = {};
fields.forEach(field=>feildsState[field.id]='');

function Login() {
  const [loginSate, setLoginState] = useState(feildsState);

  const handleChange = (e) => {
    setLoginState({...loginFields,[e.target.id]:e.target.value})
  }

  const handleSubmit=(e) => {
    e.preventDefault();
    authenticateUser();
  }

  const authenticateUser = () => {

  }

  return (
    <form className='mt-8 space-y-6'>
      <div className='-space-y-px'>
        {
          fields.map(field => 
              <FormInput
              key={field.id}
              handleChange={handleChange}
              value={loginSate[field.id]}
              lableText={field.lableText}
              lableFor={field.lableFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}

              />
            )
        }
       
      </div>
      <FormExtra />
        <FormAction  handleSubmit={handleSubmit} text="Login"/>
    </form>
  )
}

export default Login