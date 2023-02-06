import React, { Component } from "react";
import "./MovieItem.css";

import { useDispatch } from "react-redux";
import { addFavoriteMovieAction } from "../../redux/movie/actions";

const MovieItem = ({ imdbID, Title, Year, Poster }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFavoriteMovieAction({ imdbID, Title, Year, Poster }));
  };

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button
          onClick={handleClick}
          type="button"
          className="movie-item__add-button"
        >
          Добавить в список
        </button>
      </div>
    </article>
  );
};

export default MovieItem;
