import React from 'react'
import MovieCard from '../MovieCards/MovieCard'
import './movielist.css'

const MovieList = ({movie, deleteMov}) => {
  console.log("movies", movie)
  return (
    <div className='ML' >
        {movie.map((elm)=><MovieCard elm={elm} deleteMov={deleteMov}/>)}
    </div>
  )
}

export default MovieList