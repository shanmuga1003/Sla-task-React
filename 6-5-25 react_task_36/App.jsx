import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './Button'
import Header from './Header'
import UserCard from './UserCard'
import Layout from './Layout'


function App() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return (
    <>  
      <Layout>
      <Button
        label="Click Me"
        onClick={handleClick}
      />
      <br />
      <br />
      <UserCard name = "Shanmuga Priyan" age="23" />
      <br />
      <UserCard name = "John Cena" age="50"/>
    </Layout>
    </>
  )
}

export default App
