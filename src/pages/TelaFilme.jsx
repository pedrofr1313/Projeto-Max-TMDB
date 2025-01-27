import React from 'react'
import Carousel from '../components/Carousel'
import './styles/TelaFilme.css'

import { useState , useEffect} from 'react'
import CardCarousel from '../components/CardCarousel'
import { useParams, useLocation } from 'react-router-dom';
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageurl = import.meta.env.VITE_IMG;
const TelaFilme = () => {
    const { id } = useParams();
    const location =useLocation();

    const filtro = location.state?.filtro;
  const [Movie, setMovie] = useState(null);
  const getMovie =async (url) =>
  {
      const res = await fetch(url);
      const data = await res.json();
  
      console.log(data);
      setMovie(data);
  }
  
  useEffect(() =>
  {
  const Url = `${moviesURL}${filtro}${id}?${apiKey}`
  console.log(Url)
  getMovie(Url);
  
  },[])
  
  console.log(Movie)
  
 return (
      <body className='body'>
         <div className="image-container">
         <img className='imagem' src={Movie && imageurl+Movie.backdrop_path} alt="" ></img>
         {Movie &&<h1 className="image-title">{( filtro==='tv/')? Movie.name : Movie.title} <br /><button type="button" class="btn btn-outline-light"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg> Add to watchlist</button></h1>}
          
          </div>
          <h1>Descrição</h1>
     
      
      </body>
         
     
      
    )
}

export default TelaFilme