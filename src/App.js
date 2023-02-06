import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";

import store from './redux/store';

import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Route path="/" exact component={MainPage} />
          <Route path="/list/:id" exact component={ListPage} />
        </div>
      </Provider>
    );
  }
}

export default App;
