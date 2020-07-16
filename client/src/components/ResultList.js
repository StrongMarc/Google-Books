import React from "react";
import "./styles/styleRestults.css";

function ResultList(props) {
  // console.log(props)
  console.log(props.results)
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  // https://mdbootstrap.com/docs/react/utilities/vertical-align/
  
  return (
    <div className="container">
      <div className="row">
        {props.results.map(result => (
          <div className="card" key={result.id}>
            <div class="card-body">
              <h4 class="card-title"> 
                <a href={result.volumeInfo.infoLink}>{result.volumeInfo.title}</a>
              </h4>
              <p class="card-text">Written by {result.volumeInfo.authors}</p>
              <div className="row no-gutters">
                <div className="col-md-2">
                  <div className="img-container">
                    <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail}/>
                  </div>
                </div>
                <div className="col-md-10">
                  {/* <div className="card-body"> */}
                    <h5 className="card-title">{result.volumeInfo.description}</h5>
                  {/* </div> */}
                </div>
              </div>
              <button className="saved" >Saved</button>
              <button className="remove" onClick={() => props.removeBook(result.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ResultList;
