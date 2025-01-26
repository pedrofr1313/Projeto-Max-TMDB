import { useState } from 'react'

import NavBar from './components/Navbar'
import Home from './pages/Home'
import Filme from './pages/Filme'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
<BrowserRouter>
    <NavBar/>

    <Routes>
      <Route element={<App/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/Filmes" element={<Filme/>}/>
      
      
    </Routes>
   </BrowserRouter>
 
    </div>
   
   
  )
}

export default App
