import React from 'react'
import './styles/Navbar.css'
import {Link} from 'react-router-dom'
import{useState, useEffect} from 'react'
const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120); // Define como true se a rolagem for maior que 0
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${isScrolled ? '' : 'transparent'}`}>
 <div className='navbar-container-left'>
 
     <img className='logo' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fbef0ad-821e-42ff-bd50-c54a0742abc7/dfudrq1-f161a753-d067-4c18-84f6-ca87785a41fe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmYmVmMGFkLTgyMWUtNDJmZi1iZDUwLWM1NGEwNzQyYWJjN1wvZGZ1ZHJxMS1mMTYxYTc1My1kMDY3LTRjMTgtODRmNi1jYTg3Nzg1YTQxZmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6vm5FkCJYrsG9Qh3xfbV0LMEi43AbT5cqqJinwJSLZM" alt="logo" />
    
</div>

    <div className='navbar-container-center'>
    <h5><Link to="/" href="#" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">Home</Link></h5>
    <h5><Link to="/TvShows"href="#" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">TV Shows</Link></h5>
    <h5><Link to="/Filmes" href="#" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">Movies</Link></h5>

    </div>

<div className='navbar-container-right'>
  <Link to="/search" href="" id="icon" class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
  </Link>

<Link to="/watchlist" href=""  id="icon"class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill " viewBox="0 0 16 16">
  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
</svg>
</Link>
<Link to="https://github.com/pedrofr1313/Projeto-Max-TMDB"href="" id="icon"class="link-light link-opacity-75 link-opacity-100-hover link-offset-8 link-underline-opacity-0 link-underline-opacity-100-hover">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
</Link>

</div>
    </nav>
   
  )
}

export default Navbar