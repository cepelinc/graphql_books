import React  from 'react'
import PropTypes from 'prop-types';

const SelectedBooks = ({totalSelected, totalPrice}) => (
<div className={'pt-3'}>
  <span className={'col-md-6'}>Selected:  {totalSelected}</span>
  <span className={'col-md-6'}>Total price: {'\u00A3'} {totalPrice}</span>
</div>
)

SelectedBooks.propTypes = {
  totalSelected: PropTypes.number,
  totalPrice: PropTypes.string,
}
export default SelectedBooks;
