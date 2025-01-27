import React from 'react'
import './styles/MovieCard.css'
import {Link} from 'react-router-dom'

const MovieCard = ({id,image,cont,filtro}) => {

    const imageurl = import.meta.env.VITE_IMG;
  return (
    <div className='movie-card swiper-slide'>
      
      
       <Link to={`/movie/${id}`} state={{filtro:filtro}}><img src={imageurl+image}alt="" className='img'></img></Link> 
     
    </div>
  )
}

export default MovieCard