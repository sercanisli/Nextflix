import PopularMovie from "@/components/PopularMovie";
import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import CategoryMovieList from "@/lib/get-item";



export default function Category( {movies}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 " >
            <CategoryMovieList/>
    </div>
  )
}
