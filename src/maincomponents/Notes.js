import { Button, Card, CardContent, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'




const defaultNotes={
        subject:'',
        content:''
    }



const Notes = () => {
    const [notedata,setNotedata]=useState([])

var [notevalue,setNotevalue]=useState(defaultNotes)

    function handleSubmit(){
        alert('new note added successfully')
        setNotevalue(defaultNotes)
        setNotedata([...notedata,notevalue])

    }
    console.log(notedata)

function handleChange(){
    console.log('status changes')
    setNotevalue({
        ...notevalue,subject:document.getElementById('subjectid').value,
        content:document.getElementById('contentid').value
    })
}
function handledelete(newval){
    setNotedata(notedata.filter(a=>a.subject!=newval.subject))
}



  return (
    <div style={{display:'flex',marginTop:'80px'}}>
          <Typography variant='h5'>NotesApp</Typography>   <div>
     
        
        <br />
    <Card sx={{ minWidth: 275 }}>
      <CardContent >   
         
            <Typography variant="body2">
          <TextField id='subjectid' label="Standard" variant="standard" onChange={handleChange} />
          <br />
          
          <TextareaAutosize
  aria-label="minimum height"
  minRows={7}
  placeholder="Minimum 3 rows"
  style={{ width: 200,margin:'10px 0' }}
  id="contentid"
  onChange={handleChange}
/>

<br />
        <Button variant='contained' color='success' onClick={handleSubmit}>
            Add New Note
        </Button>
        </Typography>
      </CardContent> 
   </Card>


   </div>


<br />
       <div style={{marginLeft:'50px'}}>
<br />
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          List of Notes
        </Typography>       
 
        <Typography variant="body2">
          <br />
         

         
                <Card sx={{minWidth:10,display:'flex',flexWrap:'wrap'}}>
                {   notedata.map((value)=>{
            return (
                <Card sx={{minWidth:5,margin:'10px'}}>
                <CardContent style={{margin:'10px',width:'100px',padding:'10px'}}>
                    
                    <Grid container spacing={2} xs={4} style={{padding:'10px',minWidth:'100px'}}>
                      
                    <Typography variant='h5' style={{margin:'10px 0'}}>
                    {value.subject}
                </Typography>
                <Typography variant='subtitle1' style={{margin:'10px 0'}}>
                {value.content}
            </Typography> 
         
            </Grid>
            <Button variant='contained' color='error' onClick={()=>handledelete(value)}>Delete</Button>
            </CardContent>
            </Card>
            
              )
          })  }
          </Card>
                
                
          
        </Typography>
      </CardContent>
    </Card>

    </div>
    </div> 
   
  )
}

export default Notes
