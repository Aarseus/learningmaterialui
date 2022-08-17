import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Typography } from "@mui/material";
import Checkboxvalidator from "./Checkboxvalidator";
const defaultState={
    user: {
        username: "",
        password: "",
        repeatPassword: "",
        email: "",
      },
      checkstatus: {
        check: false,
      },


}

const FormFive = () => {
    const state={
        ...defaultState
    }
    
    var[formValue,setFormValue]=useState(defaultState)
console.log(formValue)


function handleSubmit(error){
    console.log('submit clicked')
    console.log(formValue)
    
}
function handleEmailChange(){
    console.log('email changed')
    setFormValue({
        ...formValue,
            user:{
                email:document.getElementById('email').value
            }
        }
    )
}
function handlePasswordChange(event){
    console.log('password changed')
    setFormValue({
        ...formValue,
        user:{
            password:document.getElementById('password').value
        }
    })
}

function handleNameChange(event){
    console.log('name changed')

    setFormValue(
            {
                ...formValue,
                user:{
                    username: document.getElementById('username').value,
                    ...formValue

                }
            }
        )
        console.log(formValue)

    // const {user}=state
    // setFormValue({...state,
    // user:{
    //     ...state.user,
    //     [event.target.name]:event.target.value
    // }})
}
function handleRepeatChange(){
    console.log('repeat password changed')
    setFormValue({
        ...formValue,
        user:{
            repeatPassword:document.getElementById('repeatpass').value
        }
    })
}
function clearform(){
    console.log('form cleared')
    setFormValue({
        ...defaultState
    })
    ValidatorForm.reset()
}
function checkboxcheck(){
    console.log('checkbox toggle clicked')
    setFormValue({
        ...formValue,
        checkstatus:{
            check: !document.getElementById('checker').value
        }
    })
}

  return (
    <ValidatorForm onSubmit={handleSubmit} onError={(error)=>{
        console.log(error)
    }}>
    <Typography variant="h2">Form</Typography>
    <TextValidator
      label="User Name"
      onChange={handleNameChange}
      name="username"
      id='username'
      type="name"
      validators={["required"]}
      errorMessages={["This field is required"]}
      value={formValue.user.name}
    />
    <TextValidator
      label="Email"
      onChange={handleEmailChange}
      name="email"
      type="email"
      id='email'
      validators={["required", "isEmail"]}
      errorMessages={["This field is required", "email is not valid"]}
      value={defaultState.user.email}
    />
    <TextValidator
      label="Password"
      onChange={handlePasswordChange}
      name="password"
      id='password'
      type="password"
      validators={["required"]}
      errorMessages={["this field is required"]}
      value={defaultState.user.password}
    />
    <TextValidator
      label="Repeat password"
      onChange={handleRepeatChange}
      name="repeatPassword"
      id='repeatpass'
      type="password"
      validators={[ "required"]}
      errorMessages={["this field is required" ]}
      value={defaultState.user.repeatPassword}
    />
    <Checkboxvalidator
          id="checker"
          label="I accept the terms & conditions"
          validators={["required"]}
          errorMessages={["this field is required"]}
          checked={state.checkstatus.check}
          value={state.checkstatus.check}
          onChange={checkboxcheck}
        />

    <Button  type="submit" variant='contained' color='success'>Submit</Button>
    <Button  type="button" onClick={clearform} variant='contained' color='warning'>Clear</Button>
  </ValidatorForm>
);
}



export default FormFive
