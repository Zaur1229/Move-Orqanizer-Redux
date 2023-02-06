import {
  ADD_MOVIE,
  ADD_MOVIES,
  ADD_SAVED,
  DELETE_FAVORITE,
} from "../constants";

const initialState = {
  favoriteMovies: [
    // { imdbID: "tt0068646", Title: "The Godfather", Year: 1972 },
    // { imdbID: "tt0068647", Title: "The Godfather", Year: 1973 },
    // { imdbID: "tt0068647", Title: "The Godfather", Year: 1974 },
  ],
  allMovies: [],
  savedMovies: [],
};

const moviesReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case ADD_MOVIES:
      return { ...state, allMovies: action.payload };
    case ADD_SAVED:
      return { ...state, savedMovies: [...state.savedMovies, action.payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter((x) => {
          return x.imdbID != action.payload;
        }),
      };
    default:
      return state;
  }
};

export default moviesReducer;
