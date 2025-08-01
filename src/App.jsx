import { Route, BrowserRouter, Routes } from 'react-router'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route index  element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App