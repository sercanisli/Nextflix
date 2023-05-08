import React from 'react'
import MovieCard from './MovieCard'

const Category = ({genres}) => {
  return (
    <div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 content-stretch">
            {genres.map(genre => <MovieCard
                genre={genre}
                key={genre.id}
            /> 
            ) }
        </div>
    </div>
  )
}

export default Category