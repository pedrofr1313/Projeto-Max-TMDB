import React from 'react'
import {useState, useEffect} from "react"
import "./styles/Search.css"
import MovieCard from '../components/MovieCard';
import useGetSearch from '../hooks/useGetSearch'
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY;
const Search = () => {
    const [search, setsearch] = useState("")
    const {data, error, loading, getSearch } = useGetSearch(`${searchURL}?${apiKey}&query=`)
 useEffect(() => {
   if(search!="")
   {
console.log("deu certo")
getSearch(search)
console.log(data)
   }

 },[search])

    const handleSubmit = (e) =>
    {
        e.preventDefault()
       
    }
  return (
    <body>

       <div className="container-search">
  <form className="form-container" onSubmit={handleSubmit}>
    <div className="input-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="search-icon"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>

      <input
        className="searchBar"
        type="text"
        placeholder="Find movies, shows, and more"
        onChange={(e) => setsearch(e.target.value)}
        value={search}
      />
    </div>
  </form>
</div>

<div className='cards-container'>
{(data && data.results && data.results.length >0&& (() => {
  return data?.results?.map((movie) => (
    (movie.poster_path&&
    <MovieCard
      key={movie.id}
      id={movie.id}
      image={movie.poster_path}
      // Incrementa e passa o valor atualizado
      filtro='movie/' 
    />
  )));
})())
}
</div>

   
    </body>
    
  )
}

export default Search