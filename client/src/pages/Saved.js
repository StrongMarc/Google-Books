// import React, { useEffect, useState } from "react";
// import SearchForm from "../components/SearchForm";
// import ResultCards from "../components/ResultCards";
// import API from "../utils/API";

// // see activity 4
// function Saved () {
//   const [book, setBook] = useState({})

//   // const {id} = useParams()  // add
//   useEffect(() => {
//     // API.getBook(/* book id should be passed here */)
//     API.getBooks()  // change
//       .then(res => setBook({ results: res.data },
//       () => console.log(this.state.results)))
//       .catch(err => console.log(err));
//   }, [])
  
//   // removeBook = (id) => {
//   //   console.log(this.state.results)
//   //   const newBooks = this.state.results.filter(book => book.id !== id)
//   //   this.setState({ results: newBooks});
//   // }

//     return (
//       <div>
//         <ResultCards 
//           results={this.state.results} 
//           // removeBook={this.removeBook}
//           />
//       </div>
//     );
// }

// export default Saved;