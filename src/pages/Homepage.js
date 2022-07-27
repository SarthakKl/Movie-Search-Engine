import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { fetchMovieForSearch, getApi } from '../utils/tmdbApi'

function Homepage() {
  const [movies, setMovies] = useState([])
  const [searched, setSearch] = useState("")
  
  const [a, b] = [4, 5]
  console.log(a, b)
  async function fetchMovies(){
    const data = await getApi('/trending/all/day')
    if(data.length == 0)
    {
      alert("Data Fetching failed")
    }
    setMovies(data)
    console.log(data)
  }
  async function searchMovie(){
    // const getMovies 
    const data = await fetchMovieForSearch(searched)
    // console.log(getMovies)
    setMovies(data.results)
  }
  useEffect(()=>{
    fetchMovies()
  }, [])
  return (
    <div >
      <div className = 'header'>
        <h2 className = 'title'>SneakPeek</h2>
        <div className = 'searchBar'>
          <input 
            type = 'text'   
            className='inputBar'  
            placeholder='Search Movie'
            onChange = {(e) => {
              setSearch(e.target.value)
              if(e.target.value == '') fetchMovies()
            }}
            onKeyPress = {(e) =>{
              if(e.code === 'Enter') searchMovie()
            }}
          />
          {/*You can't do functional call here because when page will render for first
          time then onClick will automatically get called. So to avoid this, we can
          can define a function like this-> onClick = {() => {searchMovie()}}, or
          you can call the function defined using reference. */}
          
          <button onClick = {searchMovie} >Search</button>
        </div>
        
      </div>
      <div className = 'Sections'>
        <div></div>
      </div>    
      <div className='moviesContainer'>
       {
          movies.map((movie)=>{
            return <MovieCard movie = {movie} key = {movie.id}/>
          })
        } 
      </div>
      
    </div>
  )
}

export default Homepage