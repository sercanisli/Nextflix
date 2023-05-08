import PopularMovie from "@/components/PopularMovie";
import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import Category from "@/components/Category";
import CategoryList from "@/lib/get-categories";



export default function Home( {movies}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 ">
      <CategoryList/>
      <PopularMovie 
        movies={movies.results}
      />
    </div>
  )
}

export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en&with_genres=28`)
  const movies = api.data;

  

  return {
    props: {movies}, revalidate:1
  }
}