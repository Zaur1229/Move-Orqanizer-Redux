export const getFavoritMoviesSelector = (store) =>
  store.moviesReducer.favoriteMovies;
export const getAllMoviesSelector = (store) => store.moviesReducer.allMovies;
export const getSavedMoviesSelector = (store) =>
  store.moviesReducer.savedMovies;
