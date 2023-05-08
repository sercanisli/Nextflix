import axios from 'axios';
import React from 'react'

export async function getStaticProps() {
    const api = await axios(`${server}/640146?api_key=${process.env.API_KEY}&language=en-US&page=1`)
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
    <div>Movie Detail</div>
  )
}



export default Movie