import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
import SearchContainer from "./pages/SearchContainer";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

// updates
function App() {
  return (
    <Router>
       <div>
        <Nav />
        <Route exact path={["/", "/books"]}>
          <SearchContainer />
        </Route>
      </div>
    ></Router>
  );
}

export default App;
