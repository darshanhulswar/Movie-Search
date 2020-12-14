import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./SearchMovies.css";

export default function SearchMovie() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=78f955e7a4150a3c5dbb12c3aaa6f8e1&language=en-US&query=${query}&page=1&include_adult=false`;

      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.results);
      setMovies(data.results);
      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="i.e. Jurassic Park"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {movies.map((movie) => (
        <MovieCard
          movie={{ ...movie }}
          // title={movie.title}
          key={movie.id}
          // img={movie.poster_path}
        />
      ))}
    </>
  );
}
