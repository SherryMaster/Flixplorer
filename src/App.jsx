import Search from "./components/Search.jsx";
import {useEffect, useState} from "react";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import {useDebounce} from "react-use";
import {getTrendingMovies, updateSearchTerm} from "./appwrite.js";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [trendingLoading, setTrendingLoading] = useState(true);
  const [trendingError, setTrendingError] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([])

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  )

  const fetchMovies = async (query = "") =>{
    setLoading(true);
    setError("");
    try {
      const endpoint = query ?
        `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
        `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.Response === "False"){
        setError(data.Error || "Error Fetching Movies, Try again Later!");
        setMovies([]);
      }
      setMovies(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchTerm(query, data.results[0]);
      }
    } catch (e) {
      console.log(`Error Fetching movies: ${e}`);
      setError("Error Fetching Movies, Try again Later!")
    } finally {
      setLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
    try{
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
      setTrendingLoading(false);
    } catch (e) {
      console.log(`Error Fetching trending movies: ${e}`);
      setTrendingError("Error Fetching Trending Movies, Try again Later!");
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm).then(r => r);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <div className="flex flex-row items-center m-auto">
            <img src="logo.svg" alt="Logo" className="w-28 mr-0"/>
            <h1 className="ml-0">FlixPlorer</h1>
          </div>
          <img src="hero-img.png" alt="Hero Banner" className="mt-4 w-100" />
          <h1>Find <span className="text-gradient">Movies</span> You Will Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <section className="trending">
          <h2>Trending Searches</h2>
          { trendingLoading ? (
            <Spinner />
          ) : trendingError ? (
            <p className="text-red-500">{trendingError}</p>
          ) :
            trendingMovies.length > 0 && (
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.posterUrl} alt={movie.searchTerm} />
                </li>
              ))}
            </ul>
            )
          }
        </section>

        <section className="all-movies">
          <h2>All Movies</h2>
          {loading ? (
            <Spinner />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )
          }
        </section>
      </div>
    </>
  )
}

export default App
