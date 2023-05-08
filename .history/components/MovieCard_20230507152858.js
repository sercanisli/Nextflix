import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = ({movie}) => {
  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer items-stretch h-full justify-items-center " >
      <Link href={`movie/${movie.id}`}>
        <div className="content-stretch">
          <div >
            <Image 
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={250} height={300}
                  className="rounden-t-md"
              />
              </div>
              <div className="px-6  py-2  border-2 border-solid " >
                <div className="font-bold text-xl mb-1" >{movie.title}</div>
                <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
              </div>
        </div>
        
      </Link>
      
    </div>

  )
}

export default MovieCard