import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import BookShelf from "./components/bookshelf";

const bookList = {
  "Want To Read":[
    {id:1,
      title:"The Hobbit",
      author:"JRR Token"
    
    },
    {id:2,
      title:"Harry potter",
      author:"JRR Token"
    
    },
    

  ],
  "Currenty Reading":[
    {id:3,
      title:"LOTR",
      author:"JRR Token"
    
    },
    {id:4,
      title:"Fantastic beasts",
      author:"JRR Token"
    
    },
  ],
  "Read":[
    {id:5,
      title:"LOTR",
      author:"JRR Token"
    
    },
    {id:6,
      title:"Fantastic beasts",
      author:"JRR Token"
    
    },
  ]

}
const BooksApp = () => {
  const [showSearchPage, setShowSearchPage] = React.useState(false);
  const booksOnShelf = Object.entries(bookList)

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => setShowSearchPage(false)}
            >
              Close
            </button>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input type="text" placeholder="Search by title or author" />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content" />
          <div> {booksOnShelf.map(bookOnShelf => <BookShelf key={bookOnShelf[0]} shelfTitle={bookOnShelf[0]}  books={bookOnShelf[1]} />)} </div>
          <div className="open-search">
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksApp;
