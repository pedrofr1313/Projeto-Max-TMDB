import React from 'react'
import './styles/CardCarousel.css'
import { useState , useEffect} from 'react'
import MovieCard from './MovieCard';
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const CardCarousel = ({filtro,titulo, sliderId}) => {
 
    const cont =0;
   
    

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
    const Url = `${moviesURL}${filtro}?${apiKey}`
    getTopratedMovies(Url);
    
    },[])


    useEffect(() => {
      if (topMovies.length > 0) {
        new Swiper(`#${sliderId} .card-wrapper`, {
          spaceBetween: 15,
          slidesPerView: 5,
          centeredSlides: true,
          navigation: {
            nextEl: `#${sliderId} .swiper-button-next`,
            prevEl: `#${sliderId} .swiper-button-prev`,
          },
          pagination: {
            el: `#${sliderId} .swiper-pagination`,
            clickable: true,
          },
          loop: true,
        });
      }
    }, [topMovies, sliderId]);
  
  return (
    <div id={sliderId} className='swiper'>
       <div className='titulo'>
            <h5>{titulo}</h5>

       </div> 
    <div className="card-wrapper">
    <div className='container swiper-wrapper'>
 
 {(topMovies.length > 0 && (() => {
  let cont = 0; // Inicializa o contador
  return topMovies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      image={movie.poster_path}
      cont={++cont} // Incrementa e passa o valor atualizado
      filtro={filtro==="movie/top_rated" ? 'movie/' : 'tv/'}
    />
  ));
})())}
      
    </div>
    </div>
   


  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
    </div>
  )
}

export default CardCarousel