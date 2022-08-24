import { Typography, Card, CardContent, IconButton,TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber} from '../redux/actions/index'

const CounterComponent= () => {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()
  return (
    <>
   
    
    <div style={{marginTop:'100px',height:'80vh'}}>
   
      <Typography variant="h2" align="center">
        Increment/Decrement counter 
      </Typography>
      <Typography variant="h6" align="center">
        Using React and Redux
      </Typography>
      <Card style={{width:'500px',margin:'5% 30%'}}>
        <CardContent>
          <div className="container" style={{display:'flex',justifyContent:'space-evenly'}}>
            <div className="first">
              <IconButton aria-label="delete" color="primary" >
                <RemoveIcon onClick={()=>dispatch(decNumber())}  />
              </IconButton>
            </div>
            <div className="second">
              
              <TextField id="filled-basic" variant="filled" value={myState} style={{width:'50px'}} />

            </div>
            <div className="third">
              <IconButton
                aria-label="delete"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={()=>dispatch(incNumber())}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    </>
  );
};

export default CounterComponent;
