import PropTypes from "prop-types"
import React from "react";

import Book from "./book";

const Books = (props) => {
  const { books, updateBook } = props;

  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          {
            <Book
              title={book.title}
              authors={book.authors}
              image={!book.imageLinks ? "" : book.imageLinks.thumbnail}
              shelf={book.shelf}
              id={book.id}
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
  selectedBooks: PropTypes.instanceOf(Array),
  updateBook: PropTypes.func.isRequired
}

export default Books;
