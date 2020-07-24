

import React, { Component } from 'react';
import '../src/component/style.css';
import SearchMovies from "../src/component/searchMovies";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Harry Movie Search App</h1>
        <SearchMovies/>
      </div>
    )
  }
}

