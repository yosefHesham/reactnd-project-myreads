import PropTypes from "prop-types"
import React from "react";

import Books from "./books"
const BookShelf = (props) => {
  const{ shelfTitle, books,updateBook} = props
   
  return (  <div className="bookshelf">
  <h2 className="bookshelf-title">{shelfTitle}</h2>
  <div className="bookshelf-books">
    <Books books={books} updateBook={updateBook}/>
  </div>
</div>)
}

BookShelf.propTypes = {
  books: PropTypes.instanceOf(Array),
  shelfTitle: PropTypes.string,
  updateBook: PropTypes.func
}

export default BookShelf