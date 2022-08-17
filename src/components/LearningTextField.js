import { Stack, TextField,InputAdornment} from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
const LearningTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
            <TextField label='Outlined' variant='outlined'/>
            <TextField label='Filled' variant='filled'/>
            <TextField label='Standard' variant='standard'/>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label='small secondary' size='small' color='secondary' variant='outlined'/>
            <TextField label='Filled'  size='small' color='secondary' variant='filled'/>
            <TextField label='Standard'  size='small' color='secondary' variant='standard'/>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label='Form Input' required/>
            <TextField label='Password' type={'password'} helperText='donot share your password to anyone'/>
            <TextField label='Standard'  size='small' color='secondary' variant='standard'/>
        </Stack>



        <Stack direction={'row'} spacing={2}>
            <TextField label='Amount' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='weight' InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
            }}/>

        </Stack>

        <Stack direction={'row'} spacing={2}>
  
        <TextField label='Password' type={'password'} InputProps={{
                endAdornment:<InputAdornment position='end'><Visibility/></InputAdornment>
            }}/>

        </Stack>
    </Stack>
  )
}

export default LearningTextField
