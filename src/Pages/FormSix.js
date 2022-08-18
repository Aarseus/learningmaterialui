import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Checkboxvalidator from "./Checkboxvalidator";

const defaultState={
    user: {
        username: "",
        password: "",
        repeatPassword: "",
        email: "",
      },
      checkstatus: {
        check: true,
      },
}

const FormSix = () => {
 
    var[formValue,setFormValue]=useState(defaultState)
    // console.log(formValue)

//validation rules addition
ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
    // console.log('pppppp')
    if (value !== formValue.user.password) {
      return false;
    }
    return true;
  });
  ValidatorForm.addValidationRule("namevalidator", (value) => {
    // console.log('pppppp')
    if (value.length<4) {
      return false;
    }
    return true;
  });






function handleSubmit(){
    console.log('submit clicked')
    console.log(formValue)
    alert('formsubmitted successfully')
    setFormValue(defaultState)
    
}


function handleChange(){
    console.log('status changes')
    setFormValue({
        ...formValue,
            user:{
                
                username: document.getElementById('username').value,
                email:document.getElementById('email').value,
                password:document.getElementById('password').value,
                repeatPassword:document.getElementById('repeatpass').value

            }
        }
    )
    console.log(formValue)
}

// function handlePasswordChange(){
//     console.log('password changed')
//     setFormValue({
//         ...formValue,
//         user:{
//             ...formValue.user,
//             password:document.getElementById('password').value
//         }
//     })
//     console.log(formValue)
// }

// function handleNameChange(){

//     setFormValue(
//             {
//                 ...formValue,
//                 user:{
//                     ...formValue.user,
//                     username: document.getElementById('username').value,
                    

//                 }
//             }
//         )
//        console.log(formValue)
// }
// function handleRepeatChange(){
//     console.log('repeat password status changed')
//     setFormValue({
//         ...formValue,
//         user:{
//             ...formValue.user,
//             repeatPassword:document.getElementById('repeatpass').value
//         }
//     })
//     console.log(formValue)
// }
function clearform(){
    console.log('form cleared')
    setFormValue({
        ...defaultState
        
    })
    console.log(formValue)

}

function checkboxcheck(){
    console.log('checkbox toggle clicked')
    
    setFormValue({
        ...formValue,
        checkstatus:{
            check:!formValue.checkstatus.check
        }
    })
   
}
// console.log(formValue.checkstatus.check)

  return (
    <>
   
    <ValidatorForm onSubmit={handleSubmit} onError={(error)=>{
        console.log(error)
    }}>
    <Typography variant="h2">Form</Typography>
    <TextValidator
      label="User Name"
      onChange={handleChange}
      name="username"
      id='username'
      type="name"
      validators={["required",'namevalidator']}
      errorMessages={["This field is required",'username must be atleast 4 character long']}
      value={formValue.user.username}
    />
    <TextValidator
      label="Email"
      onChange={handleChange}
      name="email"
      type="email"
      id='email'
      validators={["required", "isEmail"]}
      errorMessages={["This field is required", "email is not valid"]}
      value={formValue.user.email}
    />
    <TextValidator
      label="Password"
      onChange={handleChange}
      name="password"
      id='password'
      type="password"
      validators={["required"]}
      errorMessages={["this field is required"]}
      value={formValue.user.password}
    />
    <TextValidator
      label="Repeat password"
      onChange={handleChange}
      name="repeatPassword"
      id='repeatpass'
      type="password"
      validators={[ "required",'isPasswordMatch']}
      errorMessages={["this field is required",'password mismatch' ]}
      value={formValue.user.repeatPassword}
    />
    <Checkboxvalidator
          id="checker"
          label="I accept the terms & conditions"
          validators={["required"]}
          errorMessages={["this field is required"]}
          checked={formValue.checkstatus.check}
          value={formValue.checkstatus.check}
          onChange={checkboxcheck}
        />
        

    <Button  type="submit" variant='contained' color='success'>Submit</Button>
    <Button  type="button" onClick={clearform} variant='contained' color='warning'>Clear</Button>
  </ValidatorForm>


  <hr />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>a</TableCell>
              <TableCell align="center">b</TableCell>
              <TableCell align="center">c</TableCell>

            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>




  </>
);
}



export default FormSix
