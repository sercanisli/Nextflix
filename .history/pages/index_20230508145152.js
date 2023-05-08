import PopularMovie from "@/components/PopularMovie";
import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import CategoryMovieList from "@/lib/get-item";



export default function Home( {movies}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 " >
            <CategoryMovieList/>
            <div className="text-white text-2xl mt-8 mb-5 " >
                PopularMovie
                <PopularMovie movies={movies.results}/>
                
            </div>
          

    </div>
  )
}
export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe&language=en`);
  const movies = api.data;

 
  return {
    props: {movies}, revalidate:1
  }
}