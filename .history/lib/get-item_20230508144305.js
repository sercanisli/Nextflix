import PopularMovie from '@/components/PopularMovie';
import { useState, useEffect } from 'react';


function CategoryMovieList({ categories, selectedCategory, onCategoryChange, movies }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7727a1c97bc5205612f2769b66dcf4fe');
      const json = await response.json();
      const categories = JSON.parse(JSON.stringify(json));
      setCategories(categories.genres);
      setSelectedCategory(categories.genres[null]);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (selectedCategory) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7727a1c97bc5205612f2769b66dcf4fe&with_genres=${selectedCategory.id}`);
        const json = await response.json();
        const movies = JSON.parse(JSON.stringify(json));
        setMovies(movies.results);
      }
    }
    fetchData();
  }, [selectedCategory]);

  function handleCategoryChange(category) {
    onCategoryChange(category);
  }


  return (
    <div>
      <h1>Movie Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button className="" onClick={() => handleCategoryChange(category)}>{category.name}</button>
          </li>
        ))}
      </ul>
      <h2>{selectedCategory && selectedCategory.name} Movies</h2>
      
      <PopularMovie movies={movies}/>
    </div>
  );
}

export default CategoryMovieList;
