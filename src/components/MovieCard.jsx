import React from 'react'

const MovieCard = ({movie:
  {title, poster_path, release_date, vote_average, vote_count, original_language}
}) => {
  return (
    <div className="movie-card">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/No-Poster-Portrait.png"} alt={title} />
      <div className="mt-4">
        <h3 className="text-white font-bold text-base line-clamp-2">{title}</h3>
        <div className="content">
          <p className="rating">
            <img src="Star.svg" alt="Star" />
            <span>{vote_average ? vote_average.toFixed(1) : "N/A"} ({vote_count ? vote_count : "N/A"} votes)</span>
          </p>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">{release_date ? new Date(release_date).getFullYear() : "N/A"}</p>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
