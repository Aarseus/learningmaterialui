import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Facebook, Google, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        // bottom:0,
        left: "0",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "#607d8b", display: "flex",flexWrap:'wrap' }}
      >
       
          <div className="subContainer">
           
              <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                MasterApp
              </Typography>
            
          </div>

          <div className="subContainer" style={{ display: "block" }} sx={{flex:1}}>
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              This app contains various mini projects that can be used while
              learning react js
            </Typography>
            <Typography variant="subtitle2" align="center" sx={{ flexGrow: 1 }}>
              @copyright: Aarseus inc, 2022
            </Typography>
          </div>

          <div className="subContainer" sx={{flex:1}}>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, pariatur!
            </Typography>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>

            <IconButton color="inherit">
              <Google />
            </IconButton>

            <IconButton color="inherit">
              <Twitter />
            </IconButton>
          </div>
    
      </AppBar>
    </Box>
  );
}
