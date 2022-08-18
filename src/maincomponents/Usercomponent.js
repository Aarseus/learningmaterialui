import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import { listUser } from '../redux/actions';
import{useDispatch} from 'react'


const Usercomponent = () => {

  const dispatch=useDispatch()


  return (
    <div style={{margin:'100px 0'}}>
        <Typography variant='h2' textAlign={'center'}>UserList</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Username</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
{/* {dataSource.formValue.user.username} */}
            
              </TableCell>
              <TableCell align="center">b</TableCell>
              <TableCell align="center">c</TableCell>

            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>

      
    </div>
  )
}

export default Usercomponent
