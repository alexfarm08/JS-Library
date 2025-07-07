# JS-Library
A simple in-browser application that allows users to manage a library of books. Users can add new books, mark them as read or unread, and remove them from the library.

![screenshot](/imgs/Screenshot%202025-07-07%20at%207.16.03 AM.png)

# Project Structure
```
.
├── index.html         # HTML file with required elements and form
├── styles.css         # Optional styling for book cards and modal
└── main.js          # Main JavaScript logic
```

# Technologies Used
JavaScript (ES6+)
HTML5
DOM Manipulation

# How It Works

# Book Constructor
Creates a Book object with properties:
title
author
pages
read
id (generated via crypto.randomUUID())

`function Book(title, author, pages, read) { ... }`

# Adding Books
Triggered on form submission:

`addBookToLibrary(title, author, pages, read, myLibrary)`

The book is added to the myLibrary array and rendered as a card.

# Displaying Books
Each book is rendered as a div element with sub-elements for title, author, pages, and read status, along with "Read" and "Remove Book" buttons.

`function displayBooks(myLibrary) { ... }`

# Read Status Toggle
Clicking the Read button toggles the book’s read status between "Read" and "Not Read", both in the UI and in the array.

# Deleting a Book
Clicking the Remove Book button:

Removes the book from the myLibrary array.
Removes the corresponding book card from the DOM.

# Notes
This app is client-side only and does not store data persistently (unless extended with localStorage).

Button listeners for existing books are initialized at runtime but not dynamically managed for new elements (handled inline instead).