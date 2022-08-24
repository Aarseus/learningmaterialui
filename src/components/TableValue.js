import { Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import {handleDelete} from '../mainpages/Signin'
import {clearData} from '../mainpages/Signin'

const TableValue = (props) => {
  return (
    
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
          {props.value.map((element) => {
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
                  <IconButton color="primary">
                    <DeleteIcon onClick={() => handleDelete(element)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default TableValue
