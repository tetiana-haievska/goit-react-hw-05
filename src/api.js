const API_KEY = "47e80e79d1184665403a849eb4f89fb3";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
  const data = await fetchData(url);
  return data?.results || [];
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  const data = await fetchData(url);
  return data?.results || [];
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  return await fetchData(url);
};

export const getMovieCast = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  const data = await fetchData(url);
  return data?.cast || [];
};

export const getMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  const data = await fetchData(url);
  return data?.results || [];
};
