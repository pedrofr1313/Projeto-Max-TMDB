import React from 'react'
import Carousel from '../components/Carousel'
import './styles/Home.css'
import { useState , useEffect} from 'react'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const Home = () => {

const [topMovies, setTopMovies] = useState([]);
const getTopratedMovies = async (url) =>
{
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}

useEffect(() =>
{
const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
getTopratedMovies(topRatedUrl);

},[])



  return (
    <div className='home'><Carousel></Carousel>
    </div>
    
  )
}

export default Home