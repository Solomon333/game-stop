import React from 'react'
import { signupFields } from '../constants/formFields'
import FormInput from './FormInput'
import { useState } from 'react'
import FormAction from './FormAction';

const fields = signupFields; 
let fieldsState = {}
fields.forEach(field=>fieldsState[field.id]="")


function Signup() {
const [signupState, setSignupState] = useState(fieldsState);

const handleChange = (e) => {
  setSignupState({...signupFields,[e.target.id]:[e.target.value]});
}

const handleSubmit = (e) => {
  e.preventDefult();
  console.oog(signupState)
  createAccount()
}

const createAccount=()=> {

}
  return (
    <form>
      <div>
      { 
        fields.map(field => 
        <FormInput 
        key={field.id}
        handleChange={handleChange}
        value={signupState[fields.id]}
        lableFor={field.lableFor}
        lableText={field.lableText}
        id={field.id}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        isRequired={field.isRequired}
       
        />
        )
      }
      <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  )
}

export default Signup