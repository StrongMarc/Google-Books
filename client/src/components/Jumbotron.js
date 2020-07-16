import React from "react";

// https://github.com/why-jay/center-aligning-jumbotron/blob/master/index.jsx
const styles = {
  jumbotronStyle: {
    background: "Gainsboro",
    textAlign: 'center',
  },
  textStyle: {
    color: 'blue'
  },
  blueLetter: {
    color: 'blue'
  },
  redLetter: {
    color: 'red'
  },
  orangeLetter: {
    color: 'orange'
  },
  greenLetter: {
    color: 'green'
  }
};

function Jumbotron() {

  return (
    <div>
      <header className="jumbotron" style={styles.jumbotronStyle}>
        <h1 className="display-4">(React)
          <span style={styles.blueLetter}> G</span>
          <span style={styles.redLetter}>o</span>
          <span style={styles.orangeLetter}>o</span>
          <span style={styles.blueLetter}>g</span>
          <span style={styles.greenLetter}>l</span>
          <span style={styles.redLetter}>e </span>
          Books Search
        </h1>
        <p className="lead" style={styles.textStyle}>Search for and Save Books of Interest</p>
      </header>
    </div>

  );
}

export default Jumbotron;