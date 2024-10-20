
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Employee from './pages/Employee'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
   <Header/>
     <Routes>
     <Route  path="/" element={< Home/>} />
     <Route  path="/employees" element={<Employee />} />
     
     </Routes>
      <Footer/>
    </>
  )
}

export default App
