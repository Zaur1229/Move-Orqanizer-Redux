import React, { useEffect } from "react";
import "./ListPage.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { getSavedMoviesSelector } from "../../redux/movie/selectors";

const ListPage = function () {
  //const queryParameters = new URLSearchParams(window.location.search)
  //const id = queryParameters.get("id")
  //const name = queryParameters.get("name")
  let { id } = useParams();

  let [title, setTitle] = useState("Мой список");
  let [movies, setMovies] = useState([
    //{ title: "The Godfather", year: 1972, imdbID: "tt0068646" },
  ]);

  // const data = useSelector(getSavedMoviesSelector);
  // console.log(data ?? "empty");
  // movies = data.filter((x) => x.id === id);

  useEffect(() => {
    const items = allStorage("saved");
    items.forEach((item) => {
      const list = JSON.parse(item);
      if (list.id === id) {
        setTitle(list.title);
        movies = list.movies;
        setMovies(movies);
        return;
      }
    });
  }, []);

  function allStorage(keyInclude) {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      if (keyInclude) {
        if (keys[i].includes(keyInclude)) {
          values.push(localStorage.getItem(keys[i]));
        }
      } else values.push(localStorage.getItem(keys[i]));
    }
    return values;
  }

  return (
    <div className="list-page">
      <h1 className="list-page__title">{title}</h1>
      <ul>
        {movies?.map((item) => {
          const link = `https://www.imdb.com/title/${item.imdbID}/`;
          return (
            <li key={item.imdbID}>
              <a href={link} target="_blank">
                {item.Title} ({item.Year})
              </a>
            </li>
          );
        })}
      </ul>
      <br />
      <hr />
      <Link to="/">Back</Link>
    </div>
  );
};

export default ListPage;
