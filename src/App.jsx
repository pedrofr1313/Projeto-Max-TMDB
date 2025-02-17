import { useState } from 'react'

import NavBar from './components/Navbar'
import Home from './pages/Home'
import Filme from './pages/Filme'
import TelaFilme from './pages/TelaFilme'
import TvShows from './pages/TvShows'
import Watchlist from './pages/Watchlist'
import Search from './pages/Search'
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
      <Route path='/TvShows' element={<TvShows/>} />
      <Route path="/movie/:id" element={<TelaFilme/>}/>
      <Route path="/watchList" element={<Watchlist/>}/>
      <Route path="/search" element={<Search/>}/>
      
      
    </Routes>
   </BrowserRouter>
 
    </div>
   
   
  )
}

export default App
