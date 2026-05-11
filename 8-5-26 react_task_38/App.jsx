import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Reducer from './Reduce'
import FocusInput from './FocusInput'
import PersistCounter from './PersistCounter'




function App() {

  return (
    <>  
      <Reducer/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FocusInput/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <PersistCounter/>
    </>
  )
}

export default App
