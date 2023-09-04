import { useState, useEffect } from "react";
import Found from "./found/Found";
import * as  BooksAPI from "../../BooksAPI";
import { noneShelfId } from "../common/constants";
import Bar from "./bar/Bar";
import NoBook from "../common/noBook/NoBook";
import RetrievingBooks from "../common/retrievingBooks/RetrievingBooks";

import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState('');
  const [foundBooks, setFoundBooks] = useState([]);
  const [shelvedBooks, setShelvedBooks] = useState([]);
  const [searchNo, setSearchNo] = useState('');
  const [isRetrievingFoundBooks, setIsRetrievingFoundBooks] = useState(false);
  const [isRetrievingShelvedBooks, setIsRetrievingShelvedBooks] = useState(false);

  useEffect(() => {
    if (search.length > 0) {
      const getFoundBooks = async () => {
        const res = await BooksAPI.search(search);
        setFoundBooks(res.error ? [] : res);
        setIsRetrievingFoundBooks(false);
      };

      setIsRetrievingFoundBooks(true)
      getFoundBooks();
    }
  }, [search, searchNo]);

  useEffect(() => {
    if (search.length > 0) {
      const getShelvedBooks = async () => {
        const res = await BooksAPI.getAll();
        setShelvedBooks(res.error ? [] : res);
        setIsRetrievingShelvedBooks(false);
      };

      setIsRetrievingShelvedBooks(true);
      getShelvedBooks();
    }
  }, [search, searchNo]);

  const handleSearchTextChange = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearchNo(searchNo + 1);
    setSearch(searchText);
  };

  const handleShelfChange = () => {
    setSearchNo(searchNo + 1);
  };

  const allBooks = foundBooks.map(foundBook => {
    const book = shelvedBooks.find(shelvedBook => shelvedBook.id === foundBook.id);
    return book ?? foundBook;
  });

  const allBookWithShelfSet = allBooks.map(
    book => book.shelf ? book : { ...book, shelf: noneShelfId });

  if (search.length === 0) {
    return (
      <div className="search-books">
        <Bar handleSearchTextChange={handleSearchTextChange} />
      </div>
    );
  }

  if (isRetrievingFoundBooks || isRetrievingShelvedBooks) {
    return (
      <div className="search-books">
        <Bar handleSearchTextChange={handleSearchTextChange} />
        <RetrievingBooks />
      </div>
    );
  }

  return (
    <div className="search-books">
      <Bar handleSearchTextChange={handleSearchTextChange} />
      {
        foundBooks.length > 0 ?
          <Found
            allBooks={allBookWithShelfSet}
            handleShelfChange={handleShelfChange}
          />
          :
          <NoBook />
      }
    </div>
  );
};

export default Search; 
