import React from "react";

import Book from "./book";

const Books = (props) => {

  const {books, selectedBooks} = props;

  return (<ol className="books-grid">
      {books.map(book => <li key={book.id}>{<Book title={book.title} author={book.author} image={!book.imageLinks? "" :book.imageLinks.thumbnail} shelf={book.shelf} id={book.id} selectedBooks={selectedBooks}/>}</li>)}
     
  </ol>)
}

export default Books;