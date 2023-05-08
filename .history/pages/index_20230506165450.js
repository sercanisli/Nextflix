
import PopularMovie from "@/components/PopularMovie";
import { server } from "@/config/index";
import axios from "axios";



export default function Home( {movies}) {
  console.log(movies);
  return (
    <div >
      <PopularMovie 
        movies={movies.result}
      />
    </div>
  )
}

export async function getStaticProps() {
  const api = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = api.data;

  return {
    props: {movies}
  }
}