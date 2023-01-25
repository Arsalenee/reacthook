import React, { useState } from 'react';

const AddMovieModal = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={newMovie.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={newMovie.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Poster URL:
        <input type="text" name="posterURL" value={newMovie.posterURL} onChange={handleChange} />
      </label>
      <br />
      <label>
        Rating:
        <input type="number" name="rating" value={newMovie.rating} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieModal;



