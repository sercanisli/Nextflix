import axios from "@/axios";
import { server } from "@/config/index";



export default function Home( {movies}) {
  console.log(movies);
  return (
    <div >
      <h1 className="text-2xl text-center font-bold">
 
      </h1>
    </div>
  )
}

export async function getStaticProps() {
  const api = await axios(`${server}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = api.data;

  return {
    props: {movies}
  }
}