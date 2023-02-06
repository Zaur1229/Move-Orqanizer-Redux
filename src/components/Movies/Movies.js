import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { useState } from "react";
import store from "../../redux/store";

import { useSelector } from "react-redux";
import { getAllMoviesSelector } from "../../redux/movie/selectors";

const Movies = function () {
  let [movies, setMovies] = useState([]);

  const data = useSelector(getAllMoviesSelector);
  movies = data;
  //   useEffect(() => {
  //     const state = store.getState();
  //     setMovies(state.movies);
  //   }, [])

  return (
    <ul className="movies">
      {movies?.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
