import React from 'react'
import Image from 'next/image'

const MovieCard = ({movie}) => {
  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={700} height={800}
            className='rounden-t-md'
        />
    </div>
  )
}

export default MovieCard