import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ScreenPage } from './pages/ScreenPage'
import { RegisterPage } from './pages/RegisterPage'
import { Login } from './pages/Login'
import { Suscriptions } from './pages/Suscriptions'
import { Operation } from './components/Operation'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ScreenPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/suscriptions' element={<Suscriptions />} />
      <Route path='/operations' element={<Operation />} />
    </Routes>
  )
}

export default App
