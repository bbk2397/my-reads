import { Link } from "react-router-dom";
import "./Bar.css";

const Bar = ({ handleSearchTextChange }) => {
  return (
    <div className="search-books-bar">
      <Link
        className="close-search"
        to="/"
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={handleSearchTextChange}
        />
      </div>
    </div>
  )
};

export default Bar;
