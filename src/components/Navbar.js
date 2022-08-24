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
      <AppBar position="static" style={{backgroundColor:'#607d8b'}}>
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
            MyPage
          </Typography>
          {/* <Button color="inherit"><Link to='/login'>Login</Link></Button> */}
          <Link to={'/'} style={{textDecoration:'none'}}><Button color='inherit' variant='filled' style={{marginRight:'5px',color:'white'}}>Home</Button> </Link>
          <Link to={'/notes'} style={{textDecoration:'none'}}><Button color='inherit' variant=' filled' style={{marginRight:'5px',color:'white'}}>Add notes</Button> </Link>
          <Link to={'/counter'} style={{textDecoration:'none'}}><Button color='inherit' variant=' filled' style={{marginRight:'5px',color:'white'}}>Counter</Button> </Link>
          <Link to={'/time'} style={{textDecoration:'none'}}><Button color='inherit' variant=' filled' style={{marginRight:'5px',color:'white'}}>Date & Time</Button> </Link>
          <Link to={'/resume'} style={{textDecoration:'none'}}><Button color='inherit' variant=' filled' style={{marginRight:'5px',color:'white'}}>Resume Builder</Button> </Link>
          <Link to={'/signin'} style={{textDecoration:'none'}}><Button color='inherit' variant=' filled'style={{marginRight:'5px',color:'white'}}> SignUp  </Button></Link>
          <Link to={'/login'} style={{textDecoration:'none'}}><Button color='success' variant=' filled'style={{marginRight:'5px',color:'white',backgroundColor:'green'}}> SignIn  </Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
