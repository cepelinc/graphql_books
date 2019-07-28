import React from 'react';
import PropTypes from 'prop-types';

// components
import { Link } from 'react-router-dom'

const Form = ({title, author, price, bookId, mode, editCreateBook, handleInput, constants: { EDIT, CREATE }}) => (
  <form className={'col-md-6 cokl-md-offset-3'} 
    onSubmit={(e)=> {
        e.preventDefault();
        let variables = { title, author, price };
        variables = mode === CREATE ? variables : {...variables, bookId}
        editCreateBook({variables}
    )}}
  >
    <fieldset>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input value={title } onChange={(e) => handleInput(e, 'title')} type="text" className="form-control" id="title" placeholder="Enter title"/>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input value={author} onChange={(e) => handleInput(e, 'author')} type="text" className="form-control" id="author" placeholder="Enter author"/>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input value={price} onChange={(e) => handleInput(e, 'price')} type="number" className="form-control" id="price" placeholder="Enter price" step={0.01}/>
      </div>
    </fieldset>
    <div className={'row justify-content-center'}>
      <button type="submit" className="btn btn-primary mr-2">{mode === EDIT ? 'Edit' : 'Create'}</button>
      <Link to={'/books'} className="btn btn-secondary ml-2">Cancel</Link>
    </div>
  </form>
)

Form.propTypes = {
  title: PropTypes.string, 
  author: PropTypes.string,
  price: PropTypes.number,
  bookId: PropTypes.number,
  mode: PropTypes.string,
  editCreateBook: PropTypes.func,
  handleInput: PropTypes.func
}

export default Form