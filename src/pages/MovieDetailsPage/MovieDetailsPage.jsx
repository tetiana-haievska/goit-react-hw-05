import { useState, useEffect, useRef } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      <h1>{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
        }
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Genres: {movie.genres.map((g) => g.name).join(", ")}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
