import "./Bookshelf.css";
import BookshelfTitle from "./components/BookshelfTitle";
import Book from "./components/book/Book";

const Bookshelf = ({ shelfDetails, retrieveAllBooks, isTitle = true }) => {
  return (
    <div className="bookshelf">
      {
        isTitle ? <BookshelfTitle title={shelfDetails.title} /> : ''
      }
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            shelfDetails.books.map(book =>
              <li key={book.id}>
                <Book
                  book={book}
                  retrieveAllBooks={retrieveAllBooks}
                />
              </li>
            )}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf; 
