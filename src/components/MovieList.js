import React, { useState } from "react";

import MovieCard from "./MovieCard";
function MovieList({ movies }) {
  // const [movies, setMovies] = useState([]);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
