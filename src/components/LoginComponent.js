import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useDispatch } from "react-redux";
  
  const LoginComponent= () => {
    const dispatch = useDispatch();
  
    function handlelogin() {
      dispatch({
        type: "LOGIN",
        payload: {
          email: document.getElementById("email").value,
          // password:document.getElementById('password').value
        },
      });
    }
    return (
      <>

        <div style={{ marginTop: "100px" }}>
          <Typography fontFamily={"monospace"} variant="h1" align="center">
            find my detail
          </Typography>
          <Card sx={{ width: "500px", margin: "100px 20%" }}>
            <CardContent>
              <TextField
                id="email"
                label="email"
                variant="outlined"
                sx={{ margin: "10px" }}
              />
              {/* <TextField id="password" label="Password" variant="outlined"  sx={{margin:'10px'}}  /> */}
              <Button
                variant="contained"
                color="success"
                sx={{ margin: "10px" }}
                onClick={handlelogin}
              >
                Submit
              </Button>
            </CardContent>
            {/* <p id>The username is {data.username}. Email is {data.email} . password is {data.password}</p> */}
          </Card>
        </div>
    
      </>
    );
  };
  
  export default LoginComponent;
  