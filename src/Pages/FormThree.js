import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Typography } from "@mui/material";
import Checkboxvalidator from "./Checkboxvalidator";
// import { render } from '@testing-library/react';

const defaultState={
    user: {
        name: "",
        password: "",
        repeatPassword: "",
        email: "",
      },
      checkstatus: {
        check: false,
      },
}

const FormThree = () => {
   var[input,setInput]=useState(defaultState)
const state={
    ...defaultState
};

ValidatorForm.addValidationRule('isPasswordMatch',(value)=>{
    if (value !== this.state.user.password) {
        return false;
      }
      return true;
});
ValidatorForm.addValidationRule("isTruthy", (value) => {
    // console.log('name')
    return value;
  });

  function handleChange(event){
    const  {user}  = state;
    
    // user[event.target.name] = event.target.value;
    // this.setState({ user,a:1 });

     setInput({
        ...state,
        user:{
            ...state.user,
            [event.target.name]:event.target.value
        }
    })
  };
  function handleSubmit(){
    console.log("submit button clicked");

  };
  function clearform(){
    console.log('clear button clicked')
    this.setState({...defaultState})
    console.log(defaultState)
  }

  function checkboxcheck(){
    const newstate = {
        ...state,
        checkstatus: {
          check: !state.checkstatus.check,
        },
      };
      console.log(newstate);
      setInput(newstate);
  }

 
  return (
    <ValidatorForm onSubmit={handleSubmit}>
        <Typography variant='h2'>Form</Typography>
        <TextValidator label="User Name"
          onChange={handleChange()}
          name="name"
          type="name"
          validators={["required"]}
          errorMessages={["This field is required"]}
          value={input.name}
        />
          <TextValidator
          label="Email"
          onChange={handleChange()}
          name="email"
          type="email"
          validators={["required", "isEmail"]}
          errorMessages={["This field is required", "email is not valid"]}
          value={input.email}
        />
             <TextValidator
          label="Password"
          onChange={handleChange()}
          name="password"
          type="password"
          validators={["required"]}
          errorMessages={["this field is required"]}
          value={input.password}
        />
            <TextValidator
          label="Repeat password"
          onChange={handleChange()}
          name="repeatPassword"
          type="password"
          validators={["isPasswordMatch", "required"]}
          errorMessages={["password mismatch", "this field is required"]}
          value={input.repeatPassword}
        />
        <Checkboxvalidator
          id="checker"
          label="I accept the terms & conditions"
          validators={["isTruthy"]}
          errorMessages={["this field is required"]}
          checked={state.checkstatus.check}
          value={state.checkstatus.check}
          onChange={checkboxcheck()}
        />
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={clearform()}>Clear</Button>
    </ValidatorForm>
  )
}

export default FormThree
