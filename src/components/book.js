import React from "react";


const Book = (props) => {
  const {id, title, author, image,shelf,selectedBooks} = props;
  const bgImage = `url(${image})`
const selectedBook = selectedBooks?selectedBooks.find(book => book.id === id) : null;
  return (<div className="book">
  <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bgImage }}></div>
    <div className="book-shelf-changer">
      <select defaultValue={selectedBook? selectedBook.shelf:  shelf}>
        <option   value="move" disabled>Move to...</option>
        <option   value="currentlyReading">Currently Reading</option>
        <option   value="wantToRead">Want to Read</option>
        <option   value="read">Read</option>
        <option  value="none">None</option>
      </select>
    </div>
  </div>
  <div className="book-title">{title}</div>
  <div className="book-authors">{author}</div>
</div>)
}

export default Book