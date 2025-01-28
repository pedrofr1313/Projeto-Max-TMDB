
import React from 'react'
import Carousel from '../components/Carousel'

import { useState , useEffect} from 'react'
import CardCarousel from '../components/CardCarousel'
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const Filme = () => {
  const filtroUpcoming ='movie/upcoming'
  const filtroPopular = 'movie/popular'
const [topMovies, setTopMovies] = useState([]);
const getTopratedMovies =async (url) =>
{
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    setTopMovies(data.results);
}

useEffect(() =>
{
const Url = `${moviesURL}movie/upcoming?${apiKey}`
getTopratedMovies(Url);

},[])

console.log(topMovies)

  return (
    <body className='body'>
       <div className="Home">
        <Carousel dados={topMovies} tipo="Movie"/>
        
        </div>
        
    <div className='card-carousel'>
   
    <CardCarousel
          filtro={filtroUpcoming}
          titulo="Upcoming "
          sliderId="slider-filmes"
        />
        <CardCarousel
          filtro={filtroPopular}
          titulo="Popular"
          sliderId="slider-series"
        />
    </div>
    
    </body>
       
   
    
  )
}

export default Filme