import { server } from '@/config';
import axios from 'axios';
import React from 'react'
import Image from "next/image";

export async function getStaticProps(idFromPaths) {
    const {id} = idFromPaths.params;
    const api = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movie = api.data;
  
    return {
      props: {movie}
    }
}

export async function getStaticPaths () {
    const api = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movies = api.data.results;
    const ids = movies.map(movie => movie.id);
    const paths = ids.map(id => ({params : {id:id.toString()}}))
    return {
      paths,
      fallback:false
    }
}

const Movie = ({movie}) => {
    console.log(movie);
  return (
    <div className="container max-w-4xl mx-auto pt-6 ">
        <div className="px-3">
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={250} height={300}/>
            <h1 className="font-bold text-xl my-2">{movie.title}</h1>
            <p className="text-gray-600 text-sm mt-4"> {movie.overview} </p>
            <p className="mt-5 text-gray-600 text-sm">Genres: 
                <span className="font-bold ">
                {movie.genres.map( genre => genre.name).join(', ')}
                </span>
                </p>
            <p className="text-gray-600 text-sm">
                Relase Date: <span className="font-bold">
                    {movie.release_date}
                </span>
            </p>
            <p className="text-gray-600 text-sm" >
                Vote Average: <span className="font-bold">{movie.vote_average.toFixed(1)} / 10 </span  >
                 Vote Count: <span className="font-bold">{movie.vote_count}</span> </p>
        </div>
    </div>
  )
}



export default Movie