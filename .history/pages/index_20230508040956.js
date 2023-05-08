import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import CategoryMovieList from "@/lib/get-categories";
import PopularMovie from "@/components/PopularMovie";




export default function Home( {movies}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 ">
      <CategoryMovieList/>
    </div>
  )
}
