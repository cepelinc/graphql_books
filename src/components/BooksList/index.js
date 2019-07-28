import React, { Component } from 'react';

// components
import BookCard from '../BookCard'
import SelectedBooks from './SelectedBooks';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

// queries
import { BOOKS_QUERY } from '../../graphql/books';

class BooksList extends Component{

  state = {
    selected: [],
  }
  
  handleSelect = (e, book) => {
    const checked = e.target.checked;
    const { selected } = this.state;
    const booksSelected = checked ? [...selected, book] : selected.filter(b=> b.bookId !== book.bookId);
    this.setState({
      ...this.state,
      selected: booksSelected
    })
  }
  render() {
    const { selected } = this.state;
    return(
      <div className={'container'}>
        <SelectedBooks 
          totalSelected={selected.length}
          totalPrice = {selected.reduce((a, b) => a + b.price, 0).toFixed(2)}
        />        
        <Link to={'/book/create'} className="btn btn-primary m-3">Add new book</Link>
      <div className={'card-deck'}>
        <Query query={BOOKS_QUERY} >
          {({loading, error, data}) =>{
            if(loading) return <h4>Loading data...</h4>
            if(error) return console.log(error);
            return data.books.map(book => (
              <BookCard
                key={book.bookId} 
                {...book} 
                handleSelect={this.handleSelect}
                selected={selected.some(selected => selected.bookId === book.bookId)}
                />
            ))
          }}        
        </Query>
      </div>
  </div>)}
}

export default BooksList


  