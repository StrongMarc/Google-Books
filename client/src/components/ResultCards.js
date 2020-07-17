import React from "react";
import "./styles/styleRestults.css";
import Card from './Card';
import noImage from "../images/noImage.PNG"

function ResultCards(props) {
  // console.log(props)
  console.log(props.results)
  
  // const noThumbnail = props.results.volumeInfo.filter(image => !image.imageLinks);
  // console.log(noThumbnail)
  return (
    <div className="container">
      <div className="row">
        {props.results.map((card, i) => (
          <Card 
          title={card.volumeInfo.title}
          authors={card.volumeInfo.authors}
          description={card.volumeInfo.description}
          image={card.volumeInfo.imageLinks.thumbnail}
          link={card.volumeInfo.infoLink}
          key={card.id}/>
        ))}
      </div>
      
    </div>
  );
}

export default ResultCards;
