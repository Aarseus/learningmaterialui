import React, { useEffect, useState } from 'react'
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

const Formfour = () => {
    const state={
        ...defaultState
    }
    
    var[formValue,setFormValue]=useState(defaultState)
console.log(formValue)


function handleSubmit(error){
    console.log('submit clicked')
    
}

function handleChange(event){
    console.log('save changes')

    setFormValue(
            {
                ...formValue,
                checkstatus:{
                    check:true
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
function clearform(){
    console.log('form cleared')
    
}
function checkboxcheck(){
    console.log('checkbox toggle clicked')
}

  return (
    <ValidatorForm onSubmit={handleSubmit} onError={(error)=>{
        console.log(error)
    }}>
    <Typography variant="h2">Form</Typography>
    <TextValidator
      label="User Name"
      onChange={handleChange}
      name="username"
      type="name"
      validators={["required"]}
      errorMessages={["This field is required"]}
      value={defaultState.user.name}
    />
    <TextValidator
      label="Email"
      onChange={handleChange}
      name="email"
      type="email"
      validators={["required", "isEmail"]}
      errorMessages={["This field is required", "email is not valid"]}
      value={defaultState.user.email}
    />
    <TextValidator
      label="Password"
      onChange={handleChange}
      name="password"
      type="password"
      validators={["required"]}
      errorMessages={["this field is required"]}
      value={defaultState.user.password}
    />
    <TextValidator
      label="Repeat password"
      onChange={handleChange}
      name="repeatPassword"
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



export default Formfour
