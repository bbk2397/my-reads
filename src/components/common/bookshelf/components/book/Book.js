import "./Book.css";
import BookShelfChanger from "./components/BookShelfChanger";
import * as  BooksAPI from "../../../../../BooksAPI";

const Book = ({ book, retrieveAllBooks }) => {
  const updateBookShelf = (book) => async (newShelf) => {
    await BooksAPI.update(book, newShelf);
    retrieveAllBooks();
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: book.width,
            height: book.height,
            backgroundImage: book.backgroundImage
          }}
        ></div>
        <BookShelfChanger
          selection={book.shelf}
          updateBookShelf={updateBookShelf(book)} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book; 
