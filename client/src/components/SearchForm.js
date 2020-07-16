import React from "react";

function SearchForm(props) {
  console.log(props)
  
  // if (props.search.length>0) {
  //   console.log(props.search[0].gender)
  // }
  
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search">Book</label>
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a book topic"
            id="search"
            value={props.search}
            onChange={props.handleInputChange}
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
          {/* <h3>Type {props.search}</h3> */}
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
