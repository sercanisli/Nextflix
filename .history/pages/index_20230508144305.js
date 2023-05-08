import PopularMovie from "@/components/PopularMovie";
import CategoryMovieList from "@/lib/get-item";

export default function Home({ popularMovies }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY');
      const json = await response.json();
      const categories = JSON.parse(JSON.stringify(json));
      setCategories(categories.genres);
      setSelectedCategory(categories.genres[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (selectedCategory) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=${selectedCategory.id}`);
        const json = await response.json();
        const movies = JSON.parse(JSON.stringify(json));
        setMovies(movies.results);
      }
    }
    fetchData();
  }, [selectedCategory]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="bg-gray-700">
      <CategoryMovieList 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        movies={movies}
      />
      <PopularMovie movies={popularMovies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const api = await axios(`${baseUrl}/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe&language=en`);
  const popularMovies = api.data;

  return {
    props: { popularMovies },
    revalidate: 1
  }
}