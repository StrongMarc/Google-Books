import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./pages/SearchContainer";
// import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

// updates
function App() {
  return (
    <Router>
       <div>
        <Nav />
        <Jumbotron />
        <Route exact path="/">
          <SearchContainer />
        </Route>
        {/* <Route exact path="/books">
            <Saved />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
