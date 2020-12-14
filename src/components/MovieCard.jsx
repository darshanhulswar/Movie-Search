import React from "react";
import "./MovieCard.css";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
        alt=""
      />

      <h1 className="movie-title">{props.movie.title}</h1>
      <p>{props.movie.overview}</p>
    </div>
  );
}
