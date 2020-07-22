import React, { useEffect, useState } from "react";
import ResultCards from "../components/ResultCards";
import API from "../utils/API";

// see activity 4
function Books () {
  const [book, setBook] = useState([])

  // const {id} = useParams()  // add
  useEffect(() => {
    // API.getBook(/* book id should be passed here */)
    API.getBooks()  // change
      .then(res => setBook( res.data ),
      () => console.log(this.state.book))
      .catch(err => console.log(err));
  }, [])
  
  // removeBook = (id) => {
  //   console.log(this.state.results)
  //   const newBooks = this.state.results.filter(book => book.id !== id)
  //   this.setState({ results: newBooks});
  // }

    return (
      <div>
        <ResultCards 
          results={book} 
          // removeBook={this.removeBook}
          />
      </div>
    );
}

export default Books;