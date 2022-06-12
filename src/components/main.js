import React from "react";
import BookShelf from "./bookshelf";
import { Link } from "react-router-dom";
import { getAll, update } from "../BooksAPI";

const getAllBooks = async (setBooks) => {
  const result = await getAll();
  const currentlyReading = result.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = result.filter((book) => book.shelf === "wantToRead");
  const read = result.filter((book) => book.shelf === "read");
  setBooks({
    allBooks: result,
    wantToRead: wantToRead,
    currentlyReading: currentlyReading,
    read: read,
  });
};
const MainPage = () => {
  const [bookList, setBookList] = React.useState({
    wantToRead: [],
    currentlyReading: [],
    read: [],
    allBooks: [],
  });

  const moveBook = (bookId,shelf) => {
    const {allBooks} = bookList
    allBooks.find(book => book.id === bookId).shelf = shelf;
    const reading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wannaRead = allBooks.filter((book) => book.shelf === "wantToRead");
    const readed = allBooks.filter((book) => book.shelf === "read");
    setBookList({
      allBooks: allBooks,
      wantToRead: wannaRead,
      currentlyReading: reading,
      read: readed,
    });

  };
  const updateBook = async (book, targetShelf) => {
    moveBook(book,targetShelf)
    await update(book, targetShelf);
  };
  React.useEffect(() => {
    getAllBooks(setBookList);
  }, []);


  const { wantToRead,  currentlyReading, read } = bookList;

  const booksOnShelf = Object.entries({
    "Currently Reading": currentlyReading,
    "Want To Read": wantToRead,
    Read: read,
  });
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
            updateBook={updateBook}
          />
        ))}{" "}
      </div>
      <Link className="open-search" to="/searchPage">
        <button>Add a book</button>
      </Link>
    </div>
  );
};
export default MainPage;
