import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./pages/SearchContainer";
// import Saved from "./pages/saved";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

// updates
function App() {
  return (
    <Router>
       <div>
        <Nav />
        <Jumbotron />
        <Route exact path={["/", "/books"]}>
          <SearchContainer />
        </Route>
        {/* <Route exact path="/saved">
            <Saved />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
