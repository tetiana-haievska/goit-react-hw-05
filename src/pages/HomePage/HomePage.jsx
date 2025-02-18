import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.error);
  }, []);
  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
