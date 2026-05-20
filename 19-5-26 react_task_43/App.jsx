import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'
import Navbar from './Navbar'
import ButtonGroup from './ButtonGroup'
import ReuseableComponents from './ReuseableComponents'




function App() {

  

  return (
    // <>
    // <Card/>
    // <Navbar/>
    // <ButtonGroup/>
    // </>
    <div className="flex gap-4 p-10">

      <ReuseableComponents variant="primary">
        Login
      </ReuseableComponents>

      <ReuseableComponents variant="danger">
        Delete
      </ReuseableComponents>

      <ReuseableComponents variant="success">
        Submit
      </ReuseableComponents>

    </div>
  )
}

export default App
