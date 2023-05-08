import React from 'react'
import MovieCard from './MovieCard'

const Category = ({genre}) => {
  return (
    <div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 content-stretch">
            {genre.map(movie => <MovieCard
                movie={movie}
                key={movie.id}
            /> 
            ) }
        </div>
    </div>
  )
}

export default Category