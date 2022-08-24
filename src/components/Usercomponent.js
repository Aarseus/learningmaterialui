import { Button,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const Usercomponent = () => {
    const myUsers=useSelector((state)=>state.userManipulation)
    // const value=[...myUsers.userlist]
    console.log(myUsers)
      //delete users
  // function handleDelete(newdelete) {
  //   console.log(data);
  //   console.log("and");
  //   setData(data.filter((b) => b.user.email !== newdelete.user.email));
  // }

 const dispatch=useDispatch()
function handleDelete(data){
  dispatch({
    type:'REMOVE_USERS',
    payload:data
        })
//   console.log('passing value')
//  console.log(data)

}
    
  return (
    <>

             {/* table starts */}
      <div style={{marginTop:'100px'}}>
            <Typography variant="h2" textAlign={"center"}>
              UserList
            </Typography>
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
                   <TableCell align='center'>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {/* {console.log('the value of myuser is ')}
                    {console.log(value)} */}
                    
                  {myUsers.userlist.map((element) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {element.username}
                        </TableCell>
                        <TableCell align="center">
                          {element.email}
                        </TableCell>
                        <TableCell align="center">
                          {element.password}
                        </TableCell>
                        <TableCell align='center'>
                          <DeleteIcon style={{cursor:'pointer',color:'crimson'}} onClick={()=>handleDelete(element)}/>
                        </TableCell>
                        

                       
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <Button variant='contained'><Link to={'/signin'} style={{textDecoration:'none',color:'white'}}>Back to Form</Link></Button>


      
    </>
  )
}

export default Usercomponent
