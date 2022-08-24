import { Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

const CalculatorComponent = () => {
    const myState=useSelector((state)=>state.calculation)
   const dispatch=useDispatch()

const[entryNo,setEntryNo]=useState('')

const[displayNo,setDisplayNo]=useState('')


//    handle functions 
   function handleAction(actionSymbol,actionName){
    console.log(entryNo)
   dispatch({
    type:actionName,
    payload:{
        number:entryNo
    }
   })
 setEntryNo('')
 setDisplayNo(displayNo+' '+actionSymbol)

}




function handleClear(){
    dispatch({
        type:'CLEAR'
    })
   setEntryNo('')
   setDisplayNo('')
}
const handleDisplay=(inputValue)=>{
    console.log(entryNo)
const stringValue= inputValue.toString();
    setEntryNo(entryNo +stringValue)
    console.log('55')
    console.log(entryNo)
    setDisplayNo(displayNo.concat( stringValue))
}






  return (
    <>
  



    <div style={{margin:'100px 0 '}}>
        
        <Typography variant='h3' style={{fontFamily:'monospace'}} align='center'>Calculator</Typography>
        <Card style={{width:'290px',position:'absolute',left:'42%',backgroundColor:'slategrey'}}>
       
            <Card style={{margin:'10px',backgroundColor:'silver',fontWeight:'500'}}>
                <CardContent align='right' style={{maxHeight:'30px',margin:'5px 0',display:'flex',justifyContent:'space-between'}}>
               
                <p id='pending'>{displayNo}</p>

                    <TextField id="filled-basic"  variant="filled" value={myState} style={{width:'50px'}} />
                   
                </CardContent>
            </Card>
            <div className="container" style={{display:'flex',justifyContent:'normal'}}>
                <Card sx={{margin:'0 10px',width:'50px'}} onClick={()=>handleDisplay(7)}><CardContent align='center'  style={{cursor:'pointer'}}>7</CardContent></Card>
                <Card sx={{margin:'0 10px',width:'50px'}} onClick={()=>handleDisplay(8)}><CardContent align='center' style={{cursor:'pointer'}}>8</CardContent></Card>
                <Card sx={{margin:'0 10px',width:'50px'}}onClick={()=>handleDisplay(9)}><CardContent align='center' style={{cursor:'pointer'}}>9</CardContent></Card>
                <Card style={{margin:'0 10px',width:'50px',backgroundColor:'red',color:'white'}} onClick={handleClear}><CardContent align='center' style={{cursor:'pointer'}}>AC</CardContent></Card>
            </div>
            <div className="container" style={{display:'flex',justifyContent:'normal'}}>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleDisplay(4)}><CardContent align='center' style={{cursor:'pointer'}}>4</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleDisplay(5)}><CardContent align='center' style={{cursor:'pointer'}}>5</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleDisplay(6)}><CardContent align='center' style={{cursor:'pointer'}}>6</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleAction(' * ','MULTIPLICATION')}><CardContent align='center' style={{cursor:'pointer'}}>*</CardContent></Card>
            </div>
            <div className="container" style={{display:'flex',justifyContent:'normal'}}>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleDisplay(1)}><CardContent align='center' style={{cursor:'pointer'}}>1</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleDisplay(2)}><CardContent align='center' style={{cursor:'pointer'}}>2</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleDisplay(3)}><CardContent align='center' style={{cursor:'pointer'}}>3</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleAction(' - ','SUBTRACTION')}><CardContent align='center' style={{cursor:'pointer'}}>-</CardContent></Card>
            </div>
            <div className="container" style={{display:'flex',justifyContent:'normal'}}>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleDisplay(0)}><CardContent align='center' style={{cursor:'pointer'}}>0</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}}><CardContent align='center' style={{cursor:'pointer'}}>.</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} onClick={()=>handleAction(' + ','ADD')}><CardContent align='center' style={{cursor:'pointer'}}>+</CardContent></Card>
                <Card sx={{margin:'10px 10px',width:'50px'}} ><CardContent align='center' style={{cursor:'pointer'}} >=</CardContent></Card>
            </div>
        
        </Card>
 </div>

    </>
  )
}

export default CalculatorComponent
