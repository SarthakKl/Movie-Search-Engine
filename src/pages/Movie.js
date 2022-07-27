import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieById } from '../utils/tmdbApi'
import {useEffect, useState} from 'react'

function Movie() {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
  const params = useParams()  
  
  const [movie, setMovie] = useState(null)
  
  async function fetchMovies(){
    const  movie = await fetchMovieById(params.id)
    console.log(movie)
    setMovie(movie)
  }
  useEffect(()=>{
    fetchMovies()
  }, [])
  return (
    <div className = 'MovieParent'>
      {movie && 
        <div>
          <h1 style = {{textAlign:'center'}}>{movie.title}</h1>
            <div className = 'ImageCover'></div>
            <img 
              className = 'Image'
              src = {imageBaseUrl + movie.backdrop_path} 
              alt = "Image Poster"
            />
              <p>{movie.overview}</p>
        </div>
            
      }  
    </div>
  )
}

export default Movie