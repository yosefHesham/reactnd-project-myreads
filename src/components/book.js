import PropTypes from "prop-types"
import React from "react";

const options = [
  {
    value: "currentlyReading",
    text: "Currently Reading",
  },
  {
    value: "wantToRead",
    text: "Want To Read",
  },
  {
    value: "read",
    text: "read",
  },
  {
    value: "none",
    text: "None",
  },
];

/*
When you click on an option:
1- remove the book from the currentshelf
2- put it in the new selected shelf
*/

const Book = (props) => {
  const { id, title, authors, image, shelf,  updateBook } = props;
  const bgImage = `url(${image})`;
 
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage: bgImage }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={(e) =>  {
              updateBook(id, e.target.value) }}
            defaultValue={shelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.join(" and ")}</div>
    </div>
  );
};

Book.propTypes = {
  authors: PropTypes.instanceOf(Array),
  id: PropTypes.string,
  image: PropTypes.string,
  selectedBooks:PropTypes.instanceOf(Array),
  shelf: PropTypes.string,
  title: PropTypes.string,
  updateBook: PropTypes.func
}
Book.defaultProps = {
  authors:[]
}

export default Book;
