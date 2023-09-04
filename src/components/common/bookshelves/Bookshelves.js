import "./Bookshelves.css";
import * as Constants from "../../common/constants";
import Bookshelf from "../../common/bookshelf/Bookshelf";
import { groupByShelfCollection } from "../functions";

const Bookshelves = ({ allBooks, retrieveAllBooks }) => {
  const bookshelves = [
    {
      id: 1,
      title: Constants.currentlyReadingShelfTitle,
      books: groupByShelfCollection(allBooks, Constants.currentlyReadingShelfId)
    },
    {
      id: 2,
      title: Constants.wantToReadShelfTitle,
      books: groupByShelfCollection(allBooks, Constants.wantToReadShelfId)
    },
    {
      id: 3,
      title: Constants.readShelfTitle,
      books: groupByShelfCollection(allBooks, Constants.readShelfId)
    }
  ];

  return (
    <div className="list-books-content">
      {
        bookshelves.map(shelf =>
          <Bookshelf
            key={shelf.id}
            shelfDetails={shelf}
            retrieveAllBooks={retrieveAllBooks}
          />
        )
      }
    </div>
  );
};

export default Bookshelves; 
