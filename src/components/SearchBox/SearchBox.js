import React, { useState } from "react";
import "./SearchBox.css";

import { useDispatch } from "react-redux";
import { addAllMovieAction } from "../../redux/movie/actions";

const SearchBox = function () {
  const dispatch = useDispatch();

  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();

    fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=5636c888&page=1`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addAllMovieAction(response.Search ?? []));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
