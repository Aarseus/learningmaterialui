import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkboxvalidator from "./Checkboxvalidator";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Navbar from "../maincomponents/Navbar";
import Footer from "../maincomponents/Footer";

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
// const userDetails={
//   ...defaultState
// }

const Signin = () => {
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
    // console.log('name')
    return value;
  });

  //define usestate as array

  const [data, setData] = useState([]);

  //functional handle starts
  function handleSubmit() {
    alert("form submitted successfully");
    setFormValue(defaultState);
    setData([...data, formValue]);
  }
  console.log(data);

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
    console.log(formValue);
  }
  //clear data
  function clearData() {
    setData([defaultState]);
  }
//delete users
function handleDelete(newdelete){
  console.log(data)
  console.log('and')
  // console.log(data.filter(b=>b.user.email!=newdelete.user.email))
  setData(data.filter(b=>b.user.email!=newdelete.user.email))

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
  function tableView() {
    document.getElementById("tableid").style.display = "block";
  }
  return (
    <>
      

      <div style={{ display: "flex",marginTop:'100px' }}>
        <div style={{marginRight:'50px'}}>
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
              onClick={tableView}
            >
              See all users
            </Button>
          </ValidatorForm>
        </div>
        <div>
          {/* table starts */}
          <div id="tableid" style={{ display: "none" }}>
            <Typography variant="h2" textAlign={"center"}>
              UserList
            </Typography>
            <Button variant="contained" color="warning" onClick={clearData}>
              clear users
            </Button>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Username</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Password</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((element) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {element.user.username}
                        </TableCell>
                        <TableCell align="center">
                          {element.user.email}
                        </TableCell>
                        <TableCell align="center">
                          {element.user.password}
                        </TableCell>
                        <TableCell align="center">
                        <IconButton color="primary" ><DeleteIcon onClick={()=>handleDelete(element)} />
</IconButton>
                          
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

     
    </>
  );
};
export default Signin;
