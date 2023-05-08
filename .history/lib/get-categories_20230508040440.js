import { useState, useEffect } from 'react';
import MovieCard from '@/components/MovieCard';

function CategoryMovieList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7727a1c97bc5205612f2769b66dcf4fe');
      const json = await response.json();
      const categories = JSON.parse(JSON.stringify(json));
      setCategories(categories.genres);
      setSelectedCategory(categories.genres[null]);
    console.log(categories)

    }
    fetchData();
  }, []);

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

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div>
      <h1>Movie Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button className="" onClick={() => handleCategoryChange(category)}><a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white">Button Text</span>
</span>
</a>{category.name}</button>
          </li>
        ))}
      </ul>
      <h2>{selectedCategory && selectedCategory.name} Movies</h2>
        <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
        <h1 className="text-white text-2xl mt-8 mb-5 " >Popular Movie</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 content-stretch">
            {movies.map(movie => <MovieCard
                movie={movie}
                key={movie.id}
            /> 
            ) }
        </div>
    </div>
    </div>
  );
}

export default CategoryMovieList;
