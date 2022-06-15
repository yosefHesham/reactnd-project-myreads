import PropTypes from "prop-types"
import React from "react";

import Book from "./book";

const Books = (props) => {
  const { books, selectedBooks, updateBook } = props;

  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          {
            <Book
              title={book.title}
              author={book.author}
              image={!book.imageLinks ? "" : book.imageLinks.thumbnail}
              shelf={book.shelf}
              id={book.id}
              selectedBooks={selectedBooks}
              updateBook={updateBook}
            />
          }
        </li>
      ))}
    </ol>
  );
};

Books.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  selectedBooks: PropTypes.instanceOf(Array).isRequired,
  updateBook: PropTypes.func.isRequired
}

export default Books;
