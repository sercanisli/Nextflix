import PopularMovie from "@/components/PopularMovie";
import CategoryMovieList from "@/lib/get-item";

export default function Home({ movies }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7727a1c97bc5205612f2769b66dcf4fe');
      const json = await response.json();
      const categories = JSON.parse(JSON.stringify(json));
      setCategories(categories.genres);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-700">
      {categories.length > 0 ? <CategoryMovieList categories={categories} /> : <PopularMovie movies={movies.results} />}
    </div>
  )
}
