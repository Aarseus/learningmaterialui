import { Grid } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { nanoid } from 'nanoid'

const Homepagemain = () => {
    //=> "V1StGXR8_Z5jdHi6B-myT"
    
    const projectList=[
        {
            id:nanoid(),
            name:'SignUp',
            image:'https://www.positronx.io/wp-content/uploads/2019/09/react-login-ui-6748-01.png',
            route:'/signin',
        },{
            id:nanoid(),
            name:'Notes',
            image:'https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX',
            route:'/notes',
        },{
            id:nanoid(),
            name:'Counter',
            image:'https://4.imimg.com/data4/AJ/AQ/MY-13106999/token-500x500.jpg',
            route:'/counter',
        },{
            id:nanoid(),
            name:'Date & Time',
            image:' https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/date_time.png',
            route:'/time',
        },{
            id:nanoid(),
            name:'Users',
            image:'https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png',
            route:'/users',
        },
        {
            id:nanoid(),
            name:'Calculator',
            image:'https://www.kindpng.com/picc/m/284-2843938_calculator-brokerage-clipart-calculation-firm-transparent-calculator-illustration.png',
            route:'/calculator',
        },
        {
            id:nanoid(),
            name:'Resume Builder',
            image:'https://www.kindpng.com/picc/m/238-2384326_marketing-clipart-investment-portfolio-portfolio-management-png-free.png',
            route:'/resume',
        }

    ]
  return (
    <>
    <Navbar/>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{margin:'100px 0'}}>
  {projectList.map((element) => (
   
   <Grid item xs={2} sm={4} md={4} key={element.id}>
    {console.log(element.id)}
      <Link to={element.route} style={{textDecoration:'none'}}>
   <Grid style={{width:'200px',margin:'10px 20px',height:'300px',cursor:'pointer',position:'relative'}}>
      <Grid item>
     <img src={element.image} style={{maxWidth:'100%',maxHeight:'100%'}} alt="" />
     </Grid>
      <Grid item align='center' style={{position:'absolute',bottom:'0'}}>
        <h1>{element.name}</h1>
      </Grid>
    </Grid>
</Link>

    </Grid>
  ))}
</Grid>

      <Footer/>
    </>
  )
}

export default Homepagemain
