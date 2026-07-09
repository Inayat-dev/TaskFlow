import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import UserContext from './context/UserContext'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const [user, setUser] = useState({
    isLoggedIn: false,
    ID : null,
  })
  const [users, setUsers] = useState([
    {
      ID: 1,
      username: 'inayat',
      password: 'inayat123'
    }
  ])

  
  const [task, setTask] = useState([
    
  ])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login context={{user,users, setUser, setUsers}} />} />
        <Route path="/" element={<Login context={{user,users, setUser, setUsers}} />} />
        <Route path="/home" element={<UserContext.Provider value={{ user, setUser, task, setTask, users }}><Home /></UserContext.Provider>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
