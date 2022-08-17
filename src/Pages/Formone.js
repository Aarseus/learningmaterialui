import React, { useState } from 'react'
import {Box, TextField, Typography,InputAdornment, FormControlLabel, Checkbox, Button } from '@mui/material'
import { Visibility } from '@mui/icons-material'
import { Stack } from '@mui/system'

const Formone = () => {
    var[pass,setPass]=useState('password')
    const handleChange=()=>{
        console.log('handleChange')
        setPass(pass==='text'?'password':'text')
    }
    var[name,setName]=useState('')
    var[email,setEmail]=useState('')
    var[country,setCountry]=useState('')
    var[phone,setPhone]=useState('')
    const handleinputchange=()=>{
    setName(document.getElementById('name').value)
    setEmail(document.getElementById('email').value)
    setCountry(document.getElementById('country').value)
    setPhone(document.getElementById('phone').value)
    }

  
  return (
    <div>
      <Box style={{background:'white'}} align='center' margin={'100px 200px'}>

        <Typography variant='h5' color={'primary'} marginBottom='10px'>Registration Form</Typography>
        <Stack>
            <TextField type='name' id='name' label='Name' variant='standard' color='success' onChange={handleinputchange} fullWidth />
            <TextField type='email' label='Email' variant='standard' id='email' color='success' onChange={handleinputchange} validator={[required]} fullWidth/>
            <TextField type='country' label='Country' variant='standard' color='success' id='country' onChange={handleinputchange} fullWidth/>
            <TextField type='phone' label='Phone' variant='standard' color='success' id='phone' onChange={handleinputchange} fullWidth/>
            <TextField label='password' type={pass} variant='standard' InputProps={{
                endAdornment:<InputAdornment position='end'><Visibility onClick={handleChange} cursor='pointer'/></InputAdornment>
            }}/>

            <FormControlLabel label='I accept  terms & conditions.' control={<Checkbox/>}/>

        </Stack>
        <Button variant='contained' color='success'>Create Account</Button>
        <Typography variant='subtitle2'>Already have an account? <Button variant='text'>Sign In</Button></Typography>
      </Box>


      <box>
        <label htmlFor="">Your name is {name} </label>
        <br/>
        <label htmlFor="">Your email is {email}</label>
        <br/>
        <label htmlFor="">You live in {country}</label>
        <br/>
        <label htmlFor="">Your phone number is {phone}</label>
        
      </box>
    </div>
  )
}

export default Formone
