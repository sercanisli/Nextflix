import PopularMovie from "@/components/PopularMovie";
import { baseUrl } from "@/config/index";
import axios from "axios";



export default function Home( {movies}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 ">
      <PopularMovie 
        movies={movies.results}
      />
    </div>
  )
}

export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = api.data;

  const data = await axios(``)

  return {
    props: {movies}
  }
}