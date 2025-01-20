import React from 'react'
import './styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
 <div className='navbar-container-left'>
 
     <img className='logo' src="/max.png" alt="logo" />
</div>

    <div className='navbar-container-center'>
    <h5><a href="#" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">Início</a></h5>
    <h5><a href="#" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">Séries</a></h5>
    <h5><a href="#" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">Filmes</a></h5>
    <h5><a href="#" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">Crianças & Família</a></h5>
    </div>

<div className='navbar-container-right'>
  <a href="" id="icon" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
  </a>

<a href="" id="icon"class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill " viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
</a>
<a href="" id="icon"class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
</a>

</div>
    </nav>
   
  )
}

export default Navbar