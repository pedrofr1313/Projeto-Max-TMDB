import React from 'react'
import './styles/Carousel.css'
import {Link} from 'react-router-dom'
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
      <Link type="button" id='botao' state={{filtro:"movie/"}} class="btn btn-outline-light" to={dados.length>0 &&`/movie/${dados[4].id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg> More info</Link>
        </div>
    </div>
    <div className="carousel-item ">
      <img src={dados.length>0 &&(imageurl+dados[1].backdrop_path)}  className="imagem" alt="..."></img>
      <div class="carousel-caption  d-flex flex-column justify-content-center align-items-start ">
        <h1>{dados.length>0 && (dados[1].title)}</h1>
        <p className='w-50 left-align'>{dados.length>0 && (dados[1].overview)}</p>
        <Link type="button" state={{filtro:"movie/"}} id='botao' class="btn btn-outline-light" to={dados.length>0 &&`/movie/${dados[1].id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg> More info</Link>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={dados.length>0 &&(imageurl+dados[0].backdrop_path)}  className="imagem" alt="..."></img>
      <div class="carousel-caption  d-flex flex-column justify-content-center align-items-start">
      <h1>{dados.length>0 && (dados[0].title)}</h1>
      <p className='w-50 left-align'>{dados.length>0 && (dados[0].overview)}</p>
      <Link type="button" state={{filtro:"movie/"}} id='botao' class="btn btn-outline-light" to={dados.length>0 &&`/movie/${dados[0].id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg> More info</Link>
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