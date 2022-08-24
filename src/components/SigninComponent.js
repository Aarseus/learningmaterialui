import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkboxvalidator from "./Checkboxvalidator";
import {Typography} from "@mui/material";
import { useDispatch } from 'react-redux'


const defaultState = {
  user: {
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  },
  checkstatus: {
    check: true,
  },
};


const SigninComponent = () => {
  const dispatch=useDispatch()
  //defining usestate
  var [formValue, setFormValue] = useState(defaultState);

  //validation rules addition
  ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
    if (value !== formValue.user.password) {
      return false;
    }
    return true;
  });
  ValidatorForm.addValidationRule("namevalidator", (value) => {
    if (value.length < 4) {
      return false;
    }
    return true;
  });
  ValidatorForm.addValidationRule("isTruthy", (value) => {
 
    return value;
  });

  //define usestate as array

 

  //functional handle starts
  function handleSubmit() {
    alert("form submitted successfully");
    dispatch({
      type:'ADD_USERS',
      payload:{
              username:document.getElementById('username').value,
              email:document.getElementById('email').value,
              password:document.getElementById('password').value
              }
          })
          setFormValue({
            ...defaultState,
          });
  }

  function handleChange() {
    console.log("status changes");
    setFormValue({
      ...formValue,
      user: {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        repeatPassword: document.getElementById("repeatpass").value,
      },
    });
  }

  //clear form
  function clearform() {
    console.log("form cleared");
    setFormValue({
      ...defaultState,
    });
  }

  //checkbox toggle
  function checkboxcheck() {
    console.log("checkbox toggle clicked");

    setFormValue({
      ...formValue,
      checkstatus: {
        check: !formValue.checkstatus.check,
      },
    });
  }
 
  return (
    <>
      <div style={{ margin:"100px 50px"}}>
        <ValidatorForm
          style={{ marginLeft: "200px", width: "400px", height: "550px" }}
          id={"validatorForm"}
          onSubmit={handleSubmit}
          onError={(error) => {
            console.log(error);
          }}
        >
          <Typography variant="h2" color={"darkblue"}>
            Signin Form
          </Typography>
          <TextValidator
            label="User Name"
            onChange={handleChange}
            name="username"
            id="username"
            type="name"
            validators={["required", "namevalidator"]}
            errorMessages={[
              "This field is required",
              "username must be atleast 4 character long",
            ]}
            value={formValue.user.username}
            fullWidth
          />
          <TextValidator
            label="Email"
            onChange={handleChange}
            name="email"
            type="email"
            id="email"
            validators={["required", "isEmail"]}
            errorMessages={["This field is required", "email is not valid"]}
            value={formValue.user.email}
            fullWidth
          />
          <TextValidator
            label="Password"
            onChange={handleChange}
            name="password"
            id="password"
            type="password"
            validators={["required"]}
            errorMessages={["this field is required"]}
            value={formValue.user.password}
            fullWidth
          />
          <TextValidator
            label="Repeat password"
            onChange={handleChange}
            name="repeatPassword"
            id="repeatpass"
            type="password"
            validators={["required", "isPasswordMatch"]}
            errorMessages={["this field is required", "password mismatch"]}
            value={formValue.user.repeatPassword}
            fullWidth
          />
          <Checkboxvalidator
            id="checker"
            label="I accept the terms & conditions"
            validators={["isTruthy"]}
            errorMessages={["this field is required"]}
            checked={formValue.checkstatus.check}
            value={formValue.checkstatus.check}
            onChange={checkboxcheck}
            fullWidth
          />

          <Button type="submit" variant="contained" color="success" fullWidth>
            Submit
          </Button>
          <Button
            type="button"
            onClick={clearform}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Clear
          </Button>
          <br />
          <Button
            type="button"
            variant="contained"
            color="warning"
            style={{ margin: "5px 0" }}
            fullWidth
            >
              <Link to='/users' style={{textDecoration:'none',color:'white'}}> See all users</Link>
           
          </Button>
        </ValidatorForm>
      </div>
      
     
    </>
  );
};
export default SigninComponent;
