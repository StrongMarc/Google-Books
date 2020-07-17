import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/styleNav.css";

function Nav() {

  const styles = {
    blueLetter: {
      color: 'MidnightBlue'
    },
    redLetter: {
      color: 'red'
    },
    orangeLetter: {
      color: 'orange'
    },
    greenLetter: {
      color: 'YellowGreen'
    }
  };

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary ">
  
      <Link className="navbar-brand" to="/">
      <span style={styles.blueLetter}> G</span>
          <span style={styles.redLetter}>o</span>
          <span style={styles.orangeLetter}>o</span>
          <span style={styles.blueLetter}>g</span>
          <span style={styles.greenLetter}>l</span>
          <span style={styles.redLetter}>e </span>
           Books
      </Link>
      <div>   
        <ul className="navbar-nav" to="/">
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
