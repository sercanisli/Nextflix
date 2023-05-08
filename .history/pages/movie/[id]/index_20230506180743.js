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
            <Image src={`https://image.tmbd.org/t/p/original${movie.backdrop_path}`} width={100} height={60}/>
        </div>
    </div>
  )
}



export default Movie