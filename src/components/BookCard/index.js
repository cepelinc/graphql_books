import React from 'react';
import PropTypes from 'prop-types';

// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// icons
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const BookCard = ({bookId, title, author, price, handleSelect, selected }) => (
<div className={'col-md-3'}>
  <div className="card bg-light mb-3" style={{'maxWidth': '20rem'}}>
    <div className="card-header">
      <div className="row">
        <h6 className={'col-md-10'}>{author}</h6>
          <div className="custom-control custom-checkbox col-md-2}">
            <input onChange={(e)=>handleSelect(e, {bookId, price})} type="checkbox" className="custom-control-input" id={`book${bookId}`} checked={selected}/>
            <label className="custom-control-label" htmlFor={`book${bookId}`}></label>
          </div>
      </div>
    </div>
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{`Product Id: ${bookId}`}</p>
      <p className="card-text">Just {'\u00A3'} {`${price}`}</p>
      <Link to={`/book/edit/${bookId}`}> 
        <FontAwesomeIcon className={'float-right'} icon={faEdit} />
      </Link> 
    </div>
  </div>
</div>
)

BookCard.propTypes = {
  bookId: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  handleSelect: PropTypes.func,
  selected: PropTypes.bool,

}
export default BookCard

