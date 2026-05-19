import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Users from './Users'
import UserDetails from './UserDetails'


function App() {

  

  return (
    <>
    <nav>
      <Link to="/">Home</Link> {' | '}
      <Link to="/About">About</Link> {' | '}
      <Link to="/Users">Users</Link> {' | '}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Users' element={<Users/>}/>
      <Route path="/users/:id/Uname/:name" element={<UserDetails />} />
    </Routes>
    </>
  )
}

export default App
