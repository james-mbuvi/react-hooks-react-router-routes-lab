import React from "react";
import { movies } from "../data";
  
  function Movies() {
    return (
      <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h1>{movie.title}</h1>
            <h2>{movie.time}</h2>
            <div>
              <ul>
                {movie.genres.map((genre, idx) => (
                  <li key={idx}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Movies;
  


