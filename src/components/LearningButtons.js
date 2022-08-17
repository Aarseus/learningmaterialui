import React from "react";
import { Stack, Button, Typography,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material";
import {Send,Mail,LocationOn,Google,Facebook,LinkedIn,FormatBold,FormatItalic,FormatUnderlined} from '@mui/icons-material';

const LearningButtons = () => {
  return (
    <Stack spacing={4}>
        <Typography variant="h3">Button Types</Typography>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
        <Typography variant="h3">Button colors</Typography>
        <Stack spacing={2} direction={"row"}>
            
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
        <Typography variant="h3">Button Sizes</Typography>
      <Stack spacing={2} direction={"row"}>
      <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
           Medium
          </Button>
          <Button variant="contained" size="large">
           Large
          </Button>
         </Stack>
 <Typography variant="h3">Icons in button</Typography>
          <Stack spacing={2} direction='row'>
            <Button variant="contained" color='success' startIcon={<Send/>}/>
            <Button variant="contained" color='success' startIcon={<LocationOn/>}/>
            <Button variant="contained" color='success' startIcon={<Mail/>}/>
            <Button variant="contained" color='success' startIcon={<Google/>}/>
            <Button variant="contained" color='success' startIcon={<Facebook/>}/>
            <Button variant='contained' color='success' startIcon={<LinkedIn/>}/>
    
          </Stack>
          <Typography variant="h3">Icons Button</Typography>
          <Stack spacing={2} direction='row'>
            <IconButton color="primary" size="medium">
                <Send/> <Facebook/>
            </IconButton>
            </Stack>
            <Typography variant="h3">Button Group</Typography>

<Stack direction={'row'}>
    <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary">
        <Button>left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
    </ButtonGroup>
</Stack>

<Typography variant="h3">Toggle Button</Typography>

<Stack direction={'row'}>
    <ToggleButtonGroup aria-label="text-formatting">
        <ToggleButton><FormatBold/></ToggleButton>
        <ToggleButton><FormatItalic/></ToggleButton>
        <ToggleButton><FormatUnderlined/></ToggleButton>
    </ToggleButtonGroup>



</Stack>


      </Stack>
   
  );
};

export default LearningButtons;
