import gql from 'graphql-tag';

const BOOK_QUERY = gql`
  query Book($bookId: Int!) {
    book(bookId: $bookId) {      
    title
    author
    price
    }
  }
  `
  const EDIT_BOOK = gql`
  mutation editBook(
  $bookId: Int!,
  $title: String!
	$author: String!,
  $price: Float!
) {
  editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
    bookId
    title
    author
    price
  }
},
`
const CREATE_BOOK = gql`
  mutation createBook(
  $title: String!
	$author: String!,
  $price: Float!
) {
  createBook(title: $title, author: $author, price: $price) {
    title
    author
    price
    bookId
  }
},
`

export {
    BOOK_QUERY,
    EDIT_BOOK,
    CREATE_BOOK
  }