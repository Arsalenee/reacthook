import React from 'react';
import { useHistory } from 'react-router-dom';

function MoviePage({ movie }) {
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe src={movie.trailerURL} title={movie.title} />
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default MoviePage;