import MovieCard from '@/components/MovieCard';
import { useState, useEffect } from 'react';


function CategoryMovieList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
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
    setSelectedCategory(category);
  }


  return (
    <div>
      <div className="">
        <table>

        {categories.map((category) => (
          <tr key={category.id} >
            <th className="grid grid-cols-4 gap-4">
              <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleCategoryChange(category)}>
              {category.name}
              </button>
            </th>
            
          </tr>
        ))}
        </table>
      </div>
      
        
      <h2><span className="text-white text-2xl mt-8 mb-5 "  >{selectedCategory && selectedCategory.name} Movies</span> </h2>
      <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
        <h1 className="text-white text-2xl mt-8 mb-5 " ></h1>
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
