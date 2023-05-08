import PopularMovie from "@/components/PopularMovie";
import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import CategoryList from "@/lib/get-categories";
import Category from "@/components/Category";



export default function Home( {movies,genres}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 ">
      <CategoryList/>
      <Category movie={genres}/>
      <PopularMovie 
        movies={movies.results}
      />
    </div>
  )
}

export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en`);
  const movies = api.data;

  const categoryApi = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en&with_genres=${category.id}`);
  const genres = categoryApi.data;
  return {
    props: {movies,genres}, revalidate:1
  }
}