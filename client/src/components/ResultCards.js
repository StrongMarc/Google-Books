import React from "react";
import "./styles/styleRestults.css";
import noImage from "../images/noImage.PNG"

function ResultCards(props) {
  // console.log(props)
  console.log(props.results)
  
  // const noThumbnail = props.results.volumeInfo.filter(image => !image.imageLinks);
  // console.log(noThumbnail)
  return (
    <div className="container">
      <div className="row">
        {props.results.map((result, i) => (
          <div className="card" key={result.id}>
            <div className="card-body">
              <h4 className="card-title"> 
                <a href={result.volumeInfo.infoLink}>{result.volumeInfo.title}</a>
              </h4>
              {/* <p class="card-text">Written by {result.volumeInfo.authors + ((result.volumeInfo.authors.length-1) > i ? "-- , -- " : "")}</p> */}
              {/* <p class="card-text">Written by {result.volumeInfo.authors}</p> */}
              <p className="card-text">Written by {result.volumeInfo.authors.join(", ")}</p>
              <div className="row no-gutters">
                <div className="col-md-2">
                  <div className="img-container">
                    {/* <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail === false ? result.volumeInfo.imageLinks.thumbnail : noImage }/> */}
                    {/* <img alt={result.volumeInfo.title} className="img-fluid" src={ noImage }/> */}
                    <img alt={result.volumeInfo.title} className="img-fluid" src={ result.volumeInfo.imageLinks.thumbnail }/>
                  </div>
                </div>
                <div className="col-md-10">
                  <h5 className="card-text">{result.volumeInfo.description}</h5>
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

export default ResultCards;
