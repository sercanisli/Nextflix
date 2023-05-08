import PopularMovie from '@/components/PopularMovie';
import CategoryMovieList from '@/lib/get-item';
import { useState, useEffect } from 'react';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7727a1c97bc5205612f2769b66dcf4fe');
      const json = await response.json();
      const popularMovies = JSON.parse(JSON.stringify(json));
      setMovies(popularMovies.results);
    }
    fetchPopularMovies();
  }, []);

  useEffect(() => {
    async function fetchMoviesByCategory() {
      if (selectedCategory) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7727a1c97bc5205612f2769b66dcf4fe&with_genres=${selectedCategory.id}`);
        const json = await response.json();
        const movies = JSON.parse(JSON.stringify(json));
        setMovies(movies.results);
      }
    }
    fetchMoviesByCategory();
  }, [selectedCategory]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div>
      {selectedCategory ? (
        <CategoryMovieList movies={movies} category={selectedCategory.name} handleCategoryChange={handleCategoryChange} />
      ) : (
        <PopularMovie movies={movies} handleCategoryChange={handleCategoryChange} />
      )}
    </div>
  );
}