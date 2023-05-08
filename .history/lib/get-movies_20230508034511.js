function MovieList() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
          if (selectedCategory && selectedCategory.id) {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=7727a1c97bc5205612f2769b66dcf4fe&with_genres=${selectedCategory.id}`);
            const json = await response.json();
            const movies = JSON.parse(JSON.stringify(json));
            setMovies(movies.results);
            console.log(movies)
          }
        }
        fetchData();
      }, [selectedCategory]);
}

export default MovieList;
