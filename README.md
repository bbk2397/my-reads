# MyReads Project

In the first section I am going to tell you the sequence of steps you have to execute so that you can start the project.

## To start the project

1. run the next npm commmand: `npm install`
  - why? In order to install all the project dependencies
2. run the next npm command: `npm start`
  - why? In order to start the development server

## File structure and comments

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── package-lock.json # generated
├── node_modules # after running `npm install`
├── yarn.lock # generated
├── public
│   ├── favicon.ico # React icon.
│   └── index.html
└── src
    ├── components
        ├── common
          ├── bookshelf
            ├── components
              ├── book
                ├── components
                  ├── icons
                    ├── arrow-drop-down.svg
                  ├── BookShelfChanger.css
                  ├── BookShelfChanger.js
                ├── Book.css
                ├── Book.js
              ├── BookshelfTitle.css
              ├── BookshelfTitle.js
            ├── Bookshelf.css
            ├── Bookshelf.js
          ├── bookshelves
            ├── Bookshelves.css
            ├── Bookshelves.js
          ├── noBook
            ├── NoBook.css
            ├── NoBook.js
          ├── retrievingBooks
            ├── RetrievingBooks.css
            ├── RetrievingBooks.js
          ├── constants.js
          ├── functions.js
        ├── list
          ├── icons
            ├── add.svg
          ├── List.css
          ├── List.js
        ├── search
          ├── bar
            ├── icons
              ├── arrow-back.svg
            ├── Bar.css
            ├── Bar.js
          ├── found
            ├── Found.css
            ├── Found.js
          ├── Search.css
          ├── Search.js
    ├── App.css # Other styles this app.
    ├── App.js # The root of the app.
    ├── BooksAPI.js # A JavaScript API for the backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

## Backend Server

A backend server to develop against. The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- It is also possible to receive error which is handled in the app (see Search.js)

## Only two pages: main page and search

There are only two page: the main page (if you are on /) and the search page (if you are on /search). One can navigate from the main page to the search page by pressing on the + icon, and navigate from the search page to the main page by pressing on the back arrow (an arrow pointing to the left located at the top-left of the search page). The changes from one page are reflected on the other and vice-versa.

## More on the main page

The main page contains also the title MyRead at the top on a green background and 3 shelves: 1. `Currently Reading`, 2. `Want to Read`, and 3. `Read`. The user can move every book from one shelf to another or just remove it from these shelves by selecting `None` for that book. When navigate to this page, i.e. to /, until the books will be retrieved from the backend, there will be a message indicating that the books are being retrieved. This message is also displayed for the short period of time it is required to retrieve the books after a book was removed from a shelved (removed either from all shelves or removed in order to be added to another shelf). If the book retrieval operation does not return any book, an informative message indicating precisely that will be displayed. If the page is reloaded, the same content as the the one before reloading will be displayed indicating book data persistence.

## More on the search page

In addition to the left arrow that can be used to navigate back to the main page, there is also a search bar which is at the top, to the right of the mentioned left arrow. While the input text in this bar is empty, then no book will be displayed, and this is the case even after some text was introduced and afterwards completely deleted. If no book was found, a message indicating that will be displayed. If all found books were from the category `None`, no shelf title will be displayed, but if at least one book is on one of the 3 shelves (`Currently Reading`, `Want to Read`, `Read`), then all 3 shelves will be displayed and there will also be a `None` section. If a book is moved from a shelf to another (or to `None`), the books are retrieved again. While the books are being retrieved, an informative message indicating that is displayed.

## General observations about code organization

The App component implements the routing and uses the List and Search components. There are the List component (see the /search directory; this is loaded if you navigate to /), the Search component (see the /list directory; this is loaded if you navigate to /search), and those components that are common (see the /common directory) to these two components along with the common code constants, functions). The styling code (CSS) is grouped per component. Every icon used in a component is in an /icons directory which is found at the same level with the CSS and JS files of that component.

## General observations on the Search component

The Search component has the Found and Bar components, but also the common components NoBook, RetrievingBooks. The Found component uses common components Bookshelves and Bookshelf.

## General observations on the List component

The List component has only uses only common components such as Bookshelves, NoBook, and RetrievingBooks.



## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Contributing

This repository will not accept contributions. For now, its development will be continued only by myself.

 
