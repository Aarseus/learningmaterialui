import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Facebook, Google, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 ,position:'absolute',bottom:'0',left:'0',width:'100%'}}>
      <AppBar position="static">
        <Toolbar style={{display:'flex'}}>
          
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Practicing Forms
          </Typography>
          <Typography variant='subtitle1' sx={{ flexGrow: 1 }}>copyright: aarseus</Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, flexGrow: 1,display:'flex'}}
          >
             <Facebook style={{margin:'0 20px'}}/>
            <Google style={{margin:'0 20px'}}/>
            <Twitter style={{margin:'0 20px'}}/>
    
           
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
