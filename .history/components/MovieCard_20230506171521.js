import React from 'react'
import Image from 'next/image'

const MovieCard = ({movie}) => {
  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image 
            src={`https://api.themoviedb.org/3/movie${movie.poster_path}`} width={700} height={800}
            className="rounden-t-md"
        />
    </div>
  )
}

export default MovieCard