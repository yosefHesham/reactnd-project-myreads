
import React from 'react'
import BookShelf from './bookshelf'
import { Link } from 'react-router-dom'

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
const MainPage = () => {

  const [showSearchPage, setShowSearchPage] = React.useState(false);
  const booksOnShelf = Object.entries(bookList)

  return ( <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content" />
  <div> {booksOnShelf.map(bookOnShelf => <BookShelf key={bookOnShelf[0]} shelfTitle={bookOnShelf  [0]}  books={bookOnShelf[1]} />)} </div>
  <div className="open-search">
    <Link to="/searchPage"> Add a Book </Link>
  </div>
</div>)
}
 export default MainPage;