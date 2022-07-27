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
        <div className='movieHeader'>
          <h1 style = {{textAlign:'center',  color:'wheat'}}>{movie.title}</h1>
            {/* <div className = 'ImageCover'></div> */}
            
            <div className = 'movieDetails'>
              <div>
                <p>Overview<br/>{movie.overview}</p>
                <p style = {{marginTop:'10px'}}>
                  <span>Genre: </span>{
                  movie.genres.map((genre)=>{
                    return <span>{genre.name}, </span>
                  })}
                </p>
                <p style = {{marginTop:'10px'}}>
                  <span>Release Date: </span>{movie.release_date}
                </p>
              </div>
              <img 
                className = 'movieImage'
                src = {imageBaseUrl + movie.backdrop_path} 
                alt = "Image Poster"
              />
              </div>
              
        </div>
            
      }  
    </div>
  )
}

export default Movie