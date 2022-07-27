import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function MovieCard({movie}) {
    // console.log(props)
    const imagebaseUrl = 'https://image.tmdb.org/t/p/w500'
    const navigate = useNavigate()
  return (
    <div className='card'>
        {/* <Link to = {'/movie/' + movie.id} >
          <img src = {imagebaseUrl + movie.backdrop_path} className = 'poster' />
        </Link> */}
        <img 
          src = {imagebaseUrl + movie.backdrop_path} 
          className = 'poster'
          onClick = {() => navigate('/movie/' + movie.id)}
        />
        <p className='movieName'>
          {
              movie.title ? movie.title:'Loading...'
          }
        </p>
        
    </div>
  )
}

export default MovieCard