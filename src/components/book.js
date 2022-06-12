import React from "react";

const Book = (props) => {
  const {title, author, image} = props;
  const bgImage = `url(${image})`
  console.log(bgImage)
  console.log(image)

  return (<div className="book">
  <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bgImage }}></div>
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
  <div className="book-title">{title}</div>
  <div className="book-authors">{author}</div>
</div>)
}

export default Book