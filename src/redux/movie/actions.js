import {
  ADD_MOVIE,
  ADD_MOVIES,
  ADD_SAVED,
  DELETE_FAVORITE,
} from "../constants";

export const addFavoriteMovieAction = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});
export const addAllMovieAction = (movies) => ({
  type: ADD_MOVIES,
  payload: movies,
});
export const addSavedMovieAction = (movies) => ({
  type: ADD_SAVED,
  payload: movies,
});

export const addClearFavoriteMovie = (favorites) => ({
  type: DELETE_FAVORITE,
  payload: favorites,
});
