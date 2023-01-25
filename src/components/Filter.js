import React, { useState } from "react";
import MovieCard from "./MovieCard";

function Filter({
  handleTitleChange,
  filterTitle,
  handleRatingChange,
  filterRating,
}) {
  return (
    <div>
      <label>
        Title:
        <input type="text" value={filterTitle} onChange={handleTitleChange} />
      </label>
      <label>
        Rating:
        <input type="text" value={filterRating} onChange={handleRatingChange} />
      </label>
      {/* {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.title}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
        />
      ))} */}
    </div>
  );
}
export default Filter;
