import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signin from './pages/Signin'
import Users from './pages/Users'
import Error from './pages/Error'
import Notepad from './pages/Notepad'
import Counter from './pages/Counter'
import Time from './pages/Time'
import Login from './pages/Login'
import Calculator from './pages/Calculator'
import Resume from './pages/Resume'
import Homepagemain from './pages/Homepagemain'

const MyRoutes = () => {
  return (
    <Router>
     
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/notes' element={<Notepad/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/time' element={<Time/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/homepage' element={<Homepagemain/>}/>
            
            
        </Routes>
        
        
      
    </Router>
    
  )
}

export default MyRoutes
