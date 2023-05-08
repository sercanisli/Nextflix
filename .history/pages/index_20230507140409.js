import PopularMovie from "@/components/PopularMovie";
import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import Category from "@/components/Category";



export default function Home( {movies, categories}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 ">
      <Category 
        categories = {categories.results}
      />
      <PopularMovie 
        movies={movies.results}
      />
    </div>
  )
}

export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = api.data;

  /*const data = await axios(`${categoriesUrl}/movie/list`)
  const categories = data.data;*/

  return {
    props: {movies, /*categories*/}
  }
}