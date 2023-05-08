import PopularMovie from "@/components/PopularMovie";
import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import CategoryList from "@/lib/get-categories";
import Category from "@/components/Category";



export default function Home( {movies,categories}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 ">
      <CategoryList/>
      <PopularMovie 
        movies={movies.results}
        categories={categories.results}
      />
    </div>
  )
}
export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en`);
  const movies = api.data;

  const categoryApi = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en-US&with_genres=${genres.id}`);
  const categories = categoryApi.data;

  return {
    props: {movies, categories}, revalidate:1
  }
}