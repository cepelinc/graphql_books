import React, { Component } from 'react'
import PropTypes from 'prop-types';
import client from '../../client';

// queries
import { BOOK_QUERY, EDIT_BOOK, CREATE_BOOK } from '../../graphql/book';
import { BOOKS_QUERY } from '../../graphql/books'

// components
import { Mutation } from 'react-apollo';
import Form from './Form'

// constants
const CREATE = 'create';
const EDIT  = 'edit';

class BookDetail extends Component{
  state={
      title: '',
      price: null,
      author: ''
  }

  static propTypes = {
      mode: PropTypes.string,
      bookId: PropTypes.number,
      history: PropTypes.object,
  }

  async componentDidMount(){
      let { mode, bookId } = this.props.match.params;
      if(mode === EDIT){
      bookId = parseInt(bookId);
      const result = await client.query({query: BOOK_QUERY, variables: {bookId}, fetchPolicy: 'no-cache'})
      this.setState({
          ...this.state,
          ...result.data.book
      })
    }
  }

  handleInput = (e, input) => {
      const { value } = e.target;
      this.setState({
          ...this.state,
          [input]: value
      })
  }

  updateCache = (cache, { data: {editBook, createBook} }) => {
      const { history } = this.props;
      const { mode } = this.props.match.params
      const { books } = cache.readQuery({query: BOOKS_QUERY})
      const update = mode === EDIT 
          ? [...books.filter(book=> book.bookId !== editBook.bookId), editBook]
          : [...books, createBook];

      cache.writeQuery({
          query: BOOKS_QUERY,
          data: {
              books: update
          }
      })
      history.push('/books')
  }

  render(){
    const { params } = this.props.match;
    return(        
      <div className={'container pt-5'}>
        <h3 className={'pb-5'}>{params.mode === EDIT ? 'Edit book' : 'Create book'}</h3>
        <div className={'row justify-content-center'}>
          <Mutation 
            mutation={ params.mode === EDIT ? EDIT_BOOK : CREATE_BOOK}
            update={this.updateCache}
          >
            {editCreateBook =>  (
              <Form {...this.state} {...params} editCreateBook={editCreateBook} handleInput={this.handleInput} constants={{EDIT, CREATE}}/>
            )} 
          </Mutation>      
        </div>        
      </div>
      )
}};

export default BookDetail;