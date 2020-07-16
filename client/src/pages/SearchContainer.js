import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import API from "../utils/API";

// see activity 20
class SearchContainer extends Component {
  
  state = {
    search: "",
    results: [],
    copyResults: [],
  };

   componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.search(query)
      // .then(res => this.setState({ results: res.data.results, copyResults: res.data.results}))
      .then(res => this.setState({ results: res.data.items, copyResults:res.data.items },
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
    // filters to compare the value is in either first or last name
    // const employee = this.state.copyResults.filter(employee => {
    //   return employee.name.first.toLowerCase().includes(value.toLowerCase())  ||
    //   employee.name.last.toLowerCase().includes(value.toLowerCase())
    // })
    // this.setState({results: employee})
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search)
    this.searchBooks(this.state.search);
  };

  removeBook = (id) => {
    console.log(this.state.results)
    const newBooks = this.state.results.filter(book => book.id != id)
    this.setState({ results: newBooks});
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <ResultList 
          results={this.state.results} 
          removeBook={this.removeBook}
          />
      </div>
    );
  }
}

export default SearchContainer;