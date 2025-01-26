import React from 'react'
import './styles/Carousel.css'

const imageurl = import.meta.env.VITE_IMG;
const Carousel = ({dados}) => {
    console.log(dados)
   // console.log(dados[0].poster_path)
  return (
   
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={dados.length>0 &&(imageurl+dados[4].backdrop_path)} className="imagem" alt="..."></img>
      <div class="carousel-caption  d-flex flex-column justify-content-center align-items-start">
      <h1>{dados.length>0 && (dados[4].title)}</h1>
      <p className='w-50 left-align'>{dados.length>0 && (dados[4].overview)}</p>
        </div>
    </div>
    <div className="carousel-item ">
      <img src={dados.length>0 &&(imageurl+dados[1].backdrop_path)}  className="imagem" alt="..."></img>
      <div class="carousel-caption  d-flex flex-column justify-content-center align-items-start ">
        <h1>{dados.length>0 && (dados[1].title)}</h1>
        <p className='w-50 left-align'>{dados.length>0 && (dados[1].overview)}</p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={dados.length>0 &&(imageurl+dados[6].backdrop_path)}  className="imagem" alt="..."></img>
      <div class="carousel-caption  d-flex flex-column justify-content-center align-items-start">
      <h1>{dados.length>0 && (dados[6].title)}</h1>
      <p className='w-50 left-align'>{dados.length>0 && (dados[6].overview)}</p>
      </div>
    </div>
  </div>
  <div className="botaoesq">
  <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  </div>
  
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>     
  )
}

export default Carousel