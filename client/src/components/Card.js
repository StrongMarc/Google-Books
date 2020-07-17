import React from "react";
import "./styles/styleRestults.css";
import noImage from "../images/noImage.PNG"

function Card(props) {
  // console.log(props)
  console.log(props.results)
  
  // const noThumbnail = props.results.volumeInfo.filter(image => !image.imageLinks);
  // console.log(noThumbnail)
  return (
    <div className="card" key={props.id}>
      <div class="card-body">
        <h4 class="card-title"> 
          <a href={props.link}>{props.title}</a>
        </h4>
        {/* <p class="card-text">Written by {result.volumeInfo.authors + ((result.volumeInfo.authors.length-1) > i ? "-- , -- " : "")}</p> */}
        {/* <p class="card-text">Written by {result.volumeInfo.authors}</p> */}
        <p class="card-text">Written by {props.authors.join(", ")}</p>
        <div className="row no-gutters">
          <div className="col-md-2">
            <div className="img-container">
              {/* <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail === false ? result.volumeInfo.imageLinks.thumbnail : noImage }/> */}
              {/* <img alt={result.volumeInfo.title} className="img-fluid" src={ noImage }/> */}
              <img alt={props.title} className="img-fluid" src={props.image}/>
            </div>
          </div>
          <div className="col-md-10">
            <h6 className="card-text">{props.description}</h6>
          </div>
        </div>
        <button className="saved" >Saved</button>
        <button className="remove" onClick={() => props.removeBook(props.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Card;