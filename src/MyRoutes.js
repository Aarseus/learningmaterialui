import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './maincomponents/Footer'
import Navbar from './maincomponents/Navbar'
import Homepage from './mainpages/Homepage'
import Signin from './mainpages/Signin'
import Users from './mainpages/Users'
import Error from './mainpages/Error'
import Notepad from './mainpages/Notepad'
import Counter from './mainpages/Counter'

const MyRoutes = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/notes' element={<Notepad/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
        
      
    </Router>
  )
}

export default MyRoutes
