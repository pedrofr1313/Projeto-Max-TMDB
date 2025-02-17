import React from 'react'
import Carousel from '../components/Carousel'
import './styles/Home.css'
import { useState , useEffect} from 'react'
import CardCarousel from '../components/CardCarousel'
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const Home = () => {

  const filtroTopMovies ='movie/top_rated'
  const filtroTopTv = 'movie/now_playing'
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
  console.log(apiKey)
const Url = `${moviesURL}movie/popular?${apiKey}`
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
          filtro={filtroTopMovies}
          titulo="Top rated movies"
          sliderId="slider-filmes"
        />
        <CardCarousel
          filtro={filtroTopTv}
          titulo="Currently on theatres"
          sliderId="slider-series"
        />
    </div>
    
    </body>
       
   
    
  )
}

export default Home