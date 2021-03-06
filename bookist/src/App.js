import React, { Component } from 'react'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import data from './Components/data'
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      books: data,
      shelf: []
    };

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filter = this.filter.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  addToShelf(addedBook){
   this.setState({ shelf: [...this.state.shelf, addedBook] })
   
  }

  clearShelf(){
  this.setState({ shelf: []})  
  }

  filter(input){
    let filteredbook = this.state.books.filter((book) => {
      return book.title.includes(input)
    })
    this.setState({ books: filteredbook })
  }

  resetSearch(){
    this.setState({ books: data })
  }
 
  render(){

    return (
      <div className="App">
      <Header />
    
      <SearchBar filter={this.filter} reset={this.resetSearch}/>
      <div className= 'bookz-n-shelfz'>
      <BookList books={this.state.books} addToShelf={this.addToShelf} />
      <Shelf shelf={this.state.shelf} clear={this.clearShelf}/>
      </div>
      </div>
    );
  }
}

export default App;
