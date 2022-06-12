import React from "react";
import BookShelf from "./bookshelf";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";

const getAllBooks = async (setBooks) => {
  const result = await getAll();
  const currentlyReading =  result.filter((book) =>
  book.shelf === "currentlyReading"
  );
  const wantToRead = result.filter((book) =>
  book.shelf === "wantToRead"
  );
  const read = result.filter((book) =>
  book.shelf === "read"
  );
  setBooks({WantToRead: wantToRead,
    CurrentyReading: currentlyReading,
    Read:read,})
  
}
const MainPage = () => {
  const [bookList, setBookList] = React.useState({
    WantToRead: [],
    CurrentyReading: [],
    Read: [],
  });
  React.useEffect( () => {
   getAllBooks(setBookList)
   
  
  }, []);
  const booksOnShelf = Object.entries(bookList);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content" />
      <div>
        {" "}
        {booksOnShelf.map((bookOnShelf) => (
          <BookShelf
            key={bookOnShelf[0]}
            shelfTitle={bookOnShelf[0]}
            books={bookOnShelf[1]}
          />
        ))}{" "}
      </div>
      <Link className="open-search" to="/searchPage">
              <button >Add a book</button>
            </Link>
    </div>
  );
};
export default MainPage;
