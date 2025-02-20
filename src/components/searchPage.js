import React from "react";
import { Link } from "react-router-dom";
import { getAll, search,update} from "../BooksAPI";
import Books from "./books";

const showResult = async (searchField, setResult) => {
  try {
    const result = await search(searchField);
    if (result.error) {
      setResult([]);
    } else {
      setResult(result || []);
    }
  } catch (e) {
    console.log(e);
  }
};

const SearchPage = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearchField = (value) => {
    setSearchValue(value);
  };
  const [result, setResult] = React.useState([]);

  React.useEffect(
    () => {
      if (searchValue.length !== 0 && searchValue) {
        showResult(searchValue, setResult);
      } else {
        setResult([]);
      }
    },
    [searchValue]
  );
    const [selectedBooks, setSelectedBooks] = React.useState([])
  React.useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await getAll();
      setSelectedBooks(allBooks)
      
    };
    getAllBooks();
  }, []);
  const updateBook = async (bookId,shelf) => {
    result.find(book => book.id === bookId).shelf = shelf;
    setResult(result)
    await update(bookId,shelf)
  }
  const searchBooks = result.map((searchedBook) => {
    const myBook = selectedBooks.filter((myBook) => myBook.id === searchedBook.id)[0];
    searchedBook.shelf = myBook ? myBook.shelf : "none";
    return searchedBook;
    });
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchValue}
            onChange={(e) => handleSearchField(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <Books books={searchBooks} selectedBooks = {selectedBooks} updateBook={updateBook} />
      </div>
    </div>
  );
};
export default SearchPage;
