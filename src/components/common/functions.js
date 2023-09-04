import { noneShelfId } from "./constants";

export const groupByShelfCollection = (books, ...shelfCollection) =>
  books.filter(book => shelfCollection.includes(book.shelf)).map(book => {
    return {
      id: book.id,
      width: 130,
      height: 200,
      backgroundImage: book.imageLinks ? 
        `url(${book.imageLinks.smallThumbnail})` :
        book.backgroundImage,
      title: book.title,
      authors: book.authors,
      isbn: book.industryIdentifiers,
      shelf: book.shelf ?? noneShelfId
    };
  }); 
