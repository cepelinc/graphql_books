import gql from 'graphql-tag';

const BOOKS_QUERY = gql`
 {
  books{ 
  	bookId,
    title,
    author,
    price
  }
}
`
const BOOK_QUERY = gql`
 {
  books{ 
  	bookId,
    title,
    author,
    price
  }
}
`
export {
    BOOKS_QUERY,
    BOOK_QUERY,
  }