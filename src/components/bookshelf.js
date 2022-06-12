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

export default BookShelf