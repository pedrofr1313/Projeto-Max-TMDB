import React from 'react'
import Carousel from '../components/Carousel'
import './styles/TelaFilme.css'

import { useState , useEffect} from 'react'
import CardCarousel from '../components/CardCarousel'
import { useParams, useLocation } from 'react-router-dom';
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageurl = import.meta.env.VITE_IMG;
import usePost from '../hooks/usePost';
import useDelete from '../hooks/useDelete'
import useGetByCodigo from '../hooks/useGetByCodigo'
const TelaFilme = () => {
    const { id } = useParams();
    const location =useLocation();
    const { postResponse, error, loading, postData } = usePost('http://localhost:8080/filme');
    const { response: deleteResponse, error: deleteError, loading: deleteLoading, deleteData } = useDelete('http://localhost:8080/filme');
    const { data: filme, errorGet, loadingGet, getData } = useGetByCodigo("http://localhost:8080/filme");

    const [isInWatchlist, setIsInWatchlist] = useState(false);
    const filtro = location.state?.filtro;
  const [Movie, setMovie] = useState(null);
  
  const getMovie =async (url) =>
  {
      const res = await fetch(url);
      const data = await res.json();
  
      console.log(data);
      setMovie(data);
    
 

      
  }


  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    console.log("Dados enviados para post:", filmeData);
    postData(filmeData);
   
  };

  useEffect(() => {
    if (postResponse !== null) {
      console.log("Resposta do POST:", postResponse);
      setIsInWatchlist(true); 
      console.log(postResponse)// Atualiza a UI quando o postResponse muda
    }
  }, [postResponse]);
  
  useEffect(() => {
    if (deleteResponse !== null) {
      console.log("Resposta do POST:", deleteResponse);
      setIsInWatchlist(false); 
      console.log(deleteResponse)// Atualiza a UI quando o postResponse muda
    }
  }, [deleteResponse]);

 
  
  const handleRemoveFromWatchlist = (e) => {
    e.preventDefault();
     deleteData(id);
  };

  console.log(filtro)
  const filmeData = {
    poster_path: Movie?.poster_path || "",
    codigo: Movie?.id || 0, 
    efilme: filtro==='movie/' ? true : false 
  };
  useEffect(() =>
  {
  const Url = `${moviesURL}${filtro}${id}?${apiKey}`
  console.log(Url)
  getMovie(Url);
  getData(id);
 

  },[])

  useEffect(() =>
  {
    if (filme && filme.id!=null) {
      setIsInWatchlist(true);
    } else {
      setIsInWatchlist(false);
    }
  }
  ,[filme])
  
  console.log(Movie)
  
 return (
  <body>
      <div className='div'>
         <div className="image-container">
         <img className='imagem' src={Movie && imageurl+Movie.backdrop_path} alt="" ></img>
         {Movie &&<h1 className="image-title">{( filtro==='tv/')? Movie.name : Movie.title}</h1>}
{Movie&& <p className='image-p'>{Movie.tagline} <br /> <br />

{isInWatchlist ? (
              <button type="button" onClick={handleRemoveFromWatchlist} className="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg> Remove from watchlist
              </button>
            ) : (
              <button type="button" onClick={handleAddToWatchlist} className="btn btn-outline-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg> Add to watchlist
              </button>
            )}
  </p>}
          </div>
          <div className="containe">

          <div className='info'>
            <h5 className='ti'>Description</h5>
          <p className='descricao'>{Movie && Movie.overview}</p>
          </div>

           <div className='more-info'>
           <p className='paragrafo-generos'>
      <strong>Genres:</strong> {Movie && Movie.genres && Movie.genres.map((genre, index) => (
        `${genre.name}${index < Movie.genres.length - 1 ? ', ' : ''}`
      ))}

    </p>
    <p className='paragrafo-generos'>
      <strong>Country:</strong> {Movie && Movie.origin_country && Movie.origin_country .map((country, index) => (
        `${country}${index < Movie.origin_country.length - 1 ? ', ' : ''}`
      ))}
      
    </p>
    {Movie &&<p className='paragrafo-date'>
      <strong>Release date:</strong> { filtro=="tv/" ? Movie.first_air_date : Movie.release_date}
      
    </p>}
    <p className='paragrafo-pc'>
      <strong>Production companies:</strong> {Movie && Movie.production_companies && Movie.production_companies .map((pc, index) => (
        `${pc.name}${index < Movie.production_companies.length - 1 ? ', ' : ''}`
      ))}
      
    </p>
   

           </div>

          </div>
          
        
     
      
      </div>
         
   
      
     </body>
      
    )
}

export default TelaFilme