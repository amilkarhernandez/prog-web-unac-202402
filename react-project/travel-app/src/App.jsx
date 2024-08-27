import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Autentication } from './pages/Autentication'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Autentication />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
