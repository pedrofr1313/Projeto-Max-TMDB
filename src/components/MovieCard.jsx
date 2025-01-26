import React from 'react'
import './styles/MovieCard.css'


const MovieCard = ({id,image,cont}) => {

    const imageurl = import.meta.env.VITE_IMG;
  return (
    <div className='movie-card swiper-slide'>
      
      
        <img src={imageurl+image}alt="" className='img'></img>
     
    </div>
  )
}

export default MovieCard