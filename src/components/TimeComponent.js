import { Typography } from '@mui/material'
import React from 'react'

const DateTick = (props) => {
var h=props.value.hour
var m=props.value.minute
var s=props.value.second
var y=props.value.year
var mon=props.value.month
var dateno=props.value.date
var today=props.value.day

 
function day(today){

  switch(today){
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
      case 2:
        return 'Tuesday' 
      case 3:
        return 'Wednesday'
        case 4:
          return 'Thursday'
        case 5:
          return 'Friday'
        case 6:
          return 'Saturday'
  }
}



  return (
    <div style={{marginTop:'100px',height:'80vh',marginLeft:'20%'}}>
      <Typography variant='h1' fontFamily={'monospace'} align='center'>DATE & TIME</Typography>
        <h1>The time right now is:</h1>
        
          <h1 style={{color:'red'}}>
            {h%12>10?'':'0'}{(h % 12)} : {m} : {s<10?'0':''}{s} {h>=12?'pm':'am'}

      
          </h1> 
           
      <h1>The date today is:</h1>
      <h1>{ y} / {mon<10?'0':''}{mon} / {dateno<10?'0':''}{dateno}</h1>
      <h1>The day is : {day(today)}</h1>
      
    </div>
  )
}

export default DateTick
