import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = ({movie}) => {
  return (
    <Link href={`movie/${movie.id}`}>
      <div>
        <div className="bg-white shadow-sm rounded-md cursor-pointer items-stretch h-full justify-items-center " >
          <Image 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={250} height={300}
                className="rounden-t-md"
            />
            <div className="px-6  py-2">
              <div className="font-bold text-xl mb-1" >{movie.title}</div>
              <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
            </div>
        </div>
          
      </div>
    </Link>
  )
}

export default MovieCard