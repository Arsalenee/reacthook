import React, { useState } from 'react';
import MovieCard from './MovieCard';

function Filter({ movies }) {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  function handleTitleChange(e) {
    setFilterTitle(e.target.value);
  }

  function handleRatingChange(e) {
    setFilterRating(e.target.value);
  }

  const filteredMovies = movies.filter(movie => {
    if (filterTitle && !movie.title.toLowerCase().includes(filterTitle.toLowerCase())) {
      return false;
    }
    if (filterRating && movie.rating !== parseInt(filterRating)) {
      return false;
    }
    return true;
  });

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
      {filteredMovies.map(movie => (
        <MovieCard key={movie.title} title={movie.title} description={movie.description} posterURL={movie.posterURL} />))}
        </div>)}
export default Filter