import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
const LearningSelect = () => {
    const[country,setCountry]=useState('')
const handleChange=(event)=>{
    setCountry(event.target.value)
}
  return (
    
      <Box width={'250px'}>
        <TextField label='Select Country'onChange={handleChange} value={country}  select fullWidth>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
      </Box>
  
  )
}

export default LearningSelect
