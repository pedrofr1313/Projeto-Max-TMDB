import React from 'react'
import useGetAll from '../hooks/useGetAll';
import './styles/Watchlist.css'
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
const Watchlist = () => {
 
  const {data, error, loading, getAll} = useGetAll("http://localhost:8080/filme")
  const [watchlist, setWatchlist] = useState([])
  useEffect(() => {
  getAll()
  
  },[])

 useEffect(() =>
{
if(data!=null)
{
  setWatchlist(data)
  console.log(watchlist)
}
},[data])

  return (
    <body className='body'>
      <div className="container-titulo">
        <h2>My watchlist</h2>
      </div>
      <div className="container-watchlist">
 {(watchlist.length > 0 && (() => {
  return watchlist.map((movie) => (
    <MovieCard
      key={movie.codigo}
      id={movie.codigo}
      image={movie.poster_path}
      // Incrementa e passa o valor atualizado
      filtro={movie.efilme ?'movie/' : 'tv/'}
    />
  ));
})())}
    </div>
    </body>
  )
    
    
}

export default Watchlist