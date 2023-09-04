import "./List.css";
import { Link } from "react-router-dom";
import * as  BooksAPI from "../../BooksAPI";
import { useState, useEffect } from "react";
import Bookshelves from "../common/bookshelves/Bookshelves";
import NoBook from "../common/noBook/NoBook";
import RetrievingBooks from "../common/retrievingBooks/RetrievingBooks";


const List = () => {
  const [books, setBooks] = useState([]);
  const [shelfChangeOperationNo, setShelfChangeOperationNo] = useState(0);
  const [isRetrievingBooks, setIsRetrievingBooks] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res.error ? [] : res);
      setIsRetrievingBooks(false);
    };

    setIsRetrievingBooks(true);
    getBooks();
  }, [shelfChangeOperationNo]);

  const retrieveAllBooks = () => setShelfChangeOperationNo(shelfChangeOperationNo + 1);

  if (isRetrievingBooks) {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <RetrievingBooks />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      {
        books.length > 0 ?
          <Bookshelves
            allBooks={books}
            retrieveAllBooks={retrieveAllBooks}
          />
          :
          <NoBook />
      }

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default List;
