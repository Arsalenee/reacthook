import React, { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovieModal from "./components/modal";
import Filter from "./components/Filter";



function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Man from Toronto",
      description: "Action/Comédie",
      posterURL:
        "https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfxgGluO8tGw6B2MGxnAMPK3Yv-AFR7UD9rH50mVD2cXmO8j-j_pEktM278hSC5_rx60GFNcmQxA6A9c9QGEg_D4gNhpzj0uqIgsHXwAZd2CnEl-yj4LlWbTNIckLxlMABV-jA.jpg?r=09c",
      rating: 4,
      trailerURL: 'https://www.youtube.com/embed/urqy8DrcGBs'
    },
    {
      title: "Red Notice",
      description: "Action/Comédie",
      posterURL:
        "https://i.ytimg.com/an/xrtrnLbWTZ8/11997846855782410512_mq.jpg?v=61710534",
      rating: 3,
      

    },
    {
      title: "Hustle",
      description: "Sport/Drame",
      posterURL:
        "https://fr.web.img2.acsta.net/pictures/22/05/11/09/48/5078099.jpg",
      rating: 5,
    },
  ]);
  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  function handleTitleChange(e) {
    setFilterTitle(e.target.value);
  }

  function handleRatingChange(e) {
    setFilterRating(e.target.value);
  }
  const filteredMovies = movies.filter((movie) => {
    if (
      filterTitle &&
      !movie.title.toLowerCase().includes(filterTitle.toLowerCase())
    ) {
      return false;
    }
    if (filterRating && movie.rating == Number(filterRating)) {
      return false;
    }
    return true;
  });
  console.log(filteredMovies)
    return (
    <div>
      <Filter
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
        filterTitle={filterTitle}
        filterRating={filterRating}
      />
      <AddMovieModal addMovie={addMovie} />
      <MovieList movies={movies.filter((movie)=>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && movie.rating >=filterRating
        
        )} />
    </div>
  );
}

export default App;