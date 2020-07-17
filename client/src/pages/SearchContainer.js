import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultCards from "../components/ResultCards";
import API from "../utils/API";

// see activity 20
class SearchContainer extends Component {
  
  state = {
    search: "",
    results: []
  };

   componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.search(query)
      // .then(res => this.setState({ results: res.data.results, copyResults: res.data.results}))
      .then(res => this.setState({ results: res.data.items },
      () => console.log(this.state.results)))  
      .catch(err => console.log(err));
  };

  // gets name and value from SearchForm
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value  //search:value
    });
    
    console.log(this.state.results)
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    this.searchBooks(this.state.search);
  };
  
  removeBook = (id) => {
    console.log(this.state.results)
    const newBooks = this.state.results.filter(book => book.id !== id)
    this.setState({ results: newBooks});
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <ResultCards 
          results={this.state.results} 
          removeBook={this.removeBook}
          />
      </div>
    );
  }
}

export default SearchContainer;