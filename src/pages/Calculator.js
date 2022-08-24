import React from 'react'
import CalculatorComponent from '../components/CalculatorComponent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Calculator = () => {
  return (
    <div>
        <Navbar/>
        <CalculatorComponent/>
        <Footer/>
      
    </div>
  )
}

export default Calculator
