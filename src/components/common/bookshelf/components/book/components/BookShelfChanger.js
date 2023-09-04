import "./BookShelfChanger.css";
import * as Constants from "../../../../constants";

const BookShelfChanger = ({ selection, updateBookShelf }) => {
  const selectShelfHandler = (e) => {
    const shelf = e.target.value;
    if (selection !== shelf) {
      updateBookShelf(shelf);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={selectShelfHandler} value={selection}>
        <option value={Constants.moveToId} disabled>
          Move to...
        </option>
        <option value={Constants.currentlyReadingShelfId}>Currently Reading</option>
        <option value={Constants.wantToReadShelfId}>Want to Read</option>
        <option value={Constants.readShelfId}>Read</option>
        <option value={Constants.noneShelfId}>None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger; 
