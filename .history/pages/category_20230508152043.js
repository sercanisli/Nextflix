import CategoryMovieList from "@/lib/get-item";



export default function Category( {movies}) {
  console.log(movies);
  return (
    <div className="bg-gray-700 " >
            <CategoryMovieList/>
    </div>
  )
}
