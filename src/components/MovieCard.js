
import React from 'react';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div>
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default MovieCard;