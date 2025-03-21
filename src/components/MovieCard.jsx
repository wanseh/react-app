import React from "react";

function MovieCard({
  movie: {
    title,
    overview,
    vote_average,
    poster_path,
    release_date,
    original_language,
  },
}) {
  return (
    <li className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "./no-movie.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
          </div>
          <span className="dot">•</span>
          <p className="lang">{original_language}</p>
          <span className="dot">•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
