import { useState, useEffect } from 'react';
import Image from 'next/image'

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
      setSelectedCategory(categories.genres[0]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (selectedCategory && selectedCategory.id) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7727a1c97bc5205612f2769b66dcf4fe&with_genres=${selectedCategory.id}`);
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
    <div>
      <h1>Movie Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleCategoryChange(category)}>{category.name}</button>
          </li>
        ))}
      </ul>
      <h2>{selectedCategory && selectedCategory.name} Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Image 
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={250} height={300}
                  className="rounden-t-md"
              />
            <p>Title: {movie.title}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryMovieList;
