import React from "react";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Typography } from "@mui/material";
import Checkboxvalidator from "./Checkboxvalidator";


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
export default class Formtwo extends React.Component {
  state = {
    ...defaultState
  };
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      // console.log('pppppp')
      if (value !== this.state.user.password) {
        return false;
      }
      return true;
    });

    ValidatorForm.addValidationRule("isTruthy", (value) => {
      // console.log('name')
      return value;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
    ValidatorForm.removeValidationRule("isTruthy");
  }

  handleChange = (event) => {
    const  {user}  = this.state;
    
    // user[event.target.name] = event.target.value;
    // this.setState({ user,a:1 });

    this.setState({
        ...this.state,
        user:{
            ...this.state.user,
            [event.target.name]:event.target.value
        }
    })
  };

  handleSubmit = () => {
    console.log("submit button clicked");

  };
  //
clearform=()=>{
    console.log('clear button clicked')
    this.setState({...defaultState
   
})
    console.log(defaultState)
}

  checkboxcheck = (e) => {
    const newstate = {
      ...this.state,
      checkstatus: {
        check: !this.state.checkstatus.check,
      },
    };
    console.log(newstate);
    this.setState(newstate);
    // console.log(!this.state.checkstatus.check);
  };

  render() {
    const { user } = this.state;
    console.log(this.state)



    
    return (
      <ValidatorForm onSubmit={this.handleSubmit}>
        <Typography variant="h2">Form</Typography>
        <TextValidator
          label="User Name"
          onChange={this.handleChange}
          name="name"
          type="name"
          validators={["required"]}
          errorMessages={["This field is required"]}
          value={user.name}
        />
        <TextValidator
          label="Email"
          onChange={this.handleChange}
          name="email"
          type="email"
          validators={["required", "isEmail"]}
          errorMessages={["This field is required", "email is not valid"]}
          value={user.email}
        />
        <TextValidator
          label="Password"
          onChange={this.handleChange}
          name="password"
          type="password"
          validators={["required"]}
          errorMessages={["this field is required"]}
          value={user.password}
        />
        <TextValidator
          label="Repeat password"
          onChange={this.handleChange}
          name="repeatPassword"
          type="password"
          validators={["isPasswordMatch", "required"]}
          errorMessages={["password mismatch", "this field is required"]}
          value={user.repeatPassword}
        />
        <Checkboxvalidator
          id="checker"
          label="I accept the terms & conditions"
          validators={["isTruthy"]}
          errorMessages={["this field is required"]}
          checked={this.state.checkstatus.check}
          value={this.state.checkstatus.check}
          onChange={this.checkboxcheck}
        />

        <Button type="submit">Submit</Button>
        <Button type="button" onClick={this.clearform}>Clear</Button>
      </ValidatorForm>
    );
  }
}
