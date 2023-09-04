import "./Found.css";
import * as Constants from "../../common/constants";
import { groupByShelfCollection } from "../../common/functions";
import Bookshelf from "../../common/bookshelf/Bookshelf";
import Bookshelves from "../../common/bookshelves/Bookshelves";

const Found = ({ allBooks, handleShelfChange }) => {
  const allShelvedBooks = groupByShelfCollection(allBooks,
    Constants.currentlyReadingShelfId,
    Constants.wantToReadShelfId,
    Constants.readShelfId
  );

  const noneBookshelf = {
    id: 4,
    title: Constants.noneShelfTitle,
    books: groupByShelfCollection(allBooks, Constants.noneShelfId)
  };

  if (allBooks.length > 0) {
    if (allShelvedBooks.length > 0) {
      return (
        <div className="search-books-results">
          <div className="list-books-content">
            <Bookshelves
              allBooks={allShelvedBooks}
              retrieveAllBooks={handleShelfChange}
            />

            <Bookshelf
              key={noneBookshelf.id}
              shelfDetails={noneBookshelf}
              retrieveAllBooks={handleShelfChange}
            />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="search-books-results">
          <div className="list-books-content">
            <Bookshelf
              key={noneBookshelf.id}
              shelfDetails={noneBookshelf}
              retrieveAllBooks={handleShelfChange}
              isTitle={false}
            />
          </div>
        </div>
      );
    }
  }
};

export default Found;
