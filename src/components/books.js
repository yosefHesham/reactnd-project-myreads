import React from "react";

import Book from "./book";

const Books = (props) => {

  const {books} = props;

  return (<ol className="books-grid">
      {books.map(book => <li key={book.id}>{<Book title={book.title} author={book.author} image={book.imageLinks.thumbnail}/>}</li>)}
     
  </ol>)
}

export default Books;