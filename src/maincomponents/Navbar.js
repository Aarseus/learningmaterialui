import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1,position:'absolute',top:'0',left:'0',width:'100%'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Practice
          </Typography>
          {/* <Button color="inherit"><Link to='/login'>Login</Link></Button> */}
          <Link to={'/'}><Button color='inherit' variant='contained' style={{marginRight:'5px'}}>Home</Button> </Link>
          <Link to={'/notes'}><Button color='inherit' variant='contained' style={{marginRight:'5px'}}>Add notes</Button> </Link>
          <Link to={'/counter'}><Button color='inherit' variant='contained' style={{marginRight:'5px'}}>Counter</Button> </Link>
          <Link to={'/signin'}><Button color='inherit' variant='contained'> Signin  </Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
