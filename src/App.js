//destructure or use props
// const Pet = (props) => { React.createElement("h1", {}, name ) }
import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import { Details } from "./Details";
//reach router will choose the most specific route, react-router will render both specific and non specific routes


const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to='/'>Adopt Me! </Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
