import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./pages/SearchContainer";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

// updates
function App() {
  return (
    <Router>
       <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/">
            <SearchContainer />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
