import PopularMovie from "@/components/PopularMovie";
import { baseUrl, categoriesUrl } from "@/config/index";
import axios from "axios";
import CategoryList from "@/lib/get-categories";
import Category from "@/components/Category";
import CategoryMovieList from "@/lib/get-categories";
import Link from "next/link";



export default function Home( {movies}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 ">
      <CategoryList/>
    </div>
  )
}
export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=${process.env.API_KEY}&language=en`);
  const movies = api.data;

 
  return {
    props: {movies}, revalidate:1
  }
}