import MovieCard from '@/components/MovieCard';
import { useState, useEffect } from 'react';

function CategoryMovieList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY');
      const json = await response.json();
      const categories = JSON.parse(JSON.stringify(json));
      setCategories(categories.genres || []);
      setSelectedCategory(categories.genres[0] || { id: null, name: 'Popular' });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let endpoint = '';
      if (selectedCategory.id) {
        endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=${selectedCategory.id}`;
      } else {
        endpoint = 'https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY';
      }
      const response = await fetch(endpoint);
      const json = await response.json();
      const movies = JSON.parse(JSON.stringify(json));
      setMovies(movies.results);
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
        {categories && categories.genres && categories.genres.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleCategoryChange(category)}>{category.name}</button>
          </li>
        ))}
      </ul>
      <h2>{selectedCategory && selectedCategory.name} Movies</h2>
      <ul>
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
      </ul>
    </div>
  );
}

export default CategoryMovieList;
