import React from "react";
import "./Favorites.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getFavoritMoviesSelector } from "../../redux/movie/selectors";
import { addClearFavoriteMovie } from "../../redux/movie/actions";

const Favorites = function () {
  const dispatch = useDispatch();

  const clearFavorite = (id) => {
    dispatch(addClearFavoriteMovie(id));
  };

  const [saved, setSaved] = useState(false);
  const [title, setTitle] = useState("Мой список");
  let [movies, setMovies] = useState([]);
  let [curId, setCurId] = useState(0);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const data = useSelector(getFavoritMoviesSelector);
  movies = data;

  const onSaveClick = () => {
    curId = CreateUUID();
    setCurId(curId);
    const obj = { id: curId, title: title, movies: movies };
    const json = JSON.stringify(obj);
    localStorage.setItem("saved" + curId, json);
    setSaved(true);
  };

  function CreateUUID() {
    return "xxxxxxxx-xxxx-rzxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  return (
    <div className="favorites">
      <input
        value={title}
        className="favorites__name"
        onChange={onTitleChange}
      />
      <ul className="favorites__list">
        {movies?.map((item) => {
          return (
            <li key={item.id}>
              {item.Title} ({item.Year}){" "}
              <button onClick={() => clearFavorite(item.imdbID)}>X</button>
            </li>
          );
        })}
      </ul>
      {saved ? (
        <Link to={`/list/${curId}`}>Link</Link>
      ) : (
        <button onClick={onSaveClick} type="button" className="favorites__save">
          Сохранить список
        </button>
      )}
    </div>
  );
};

export default Favorites;
