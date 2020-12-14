import React from "react";
import "./MovieCard.css";

export default function MovieCard(props) {
  return (
    <div className="movie-card">
      {props.movie.title}
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
        alt=""
      />
    </div>
  );
}
