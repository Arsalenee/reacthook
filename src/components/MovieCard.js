import React from "react";
import './card.css'
function MovieCard({ title, description, posterURL, rating,trailerURL }) {
  return (
    <div>
      <img className="img" src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p className="para">{description}</p>
      <p className="rating">Rating: {rating}</p>
      {/* <iframe
        width="560"
        height="315"
        src={trailerURL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
      <button className="button">see details</button>
    </div>
  );
}

export default MovieCard;
