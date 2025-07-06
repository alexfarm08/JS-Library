const myLibary = [];
let totalNumBooks = 0;

// BOOK CONSTRUCTOR
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("you must use the 'new' oporator to call this constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.id = crypto.randomUUID();
}

// ADD BOOKS TO ARRAY
function addBookToLibary(title, author, pages, read, myLibary) {
    // MAKES NEW BOOK OBJ WITH TITLE FOR NAME
    title = new Book(title, author, pages, read);

    //ADDS NEW BOOK TO LIBARY ARRAY
    myLibary.push(title)
}

addBookToLibary("harry potter1", "jk rolling", 255, "read", myLibary);
totalNumBooks++;
addBookToLibary("harry potter2", "jk rolling", 255, "read", myLibary);
totalNumBooks++;
addBookToLibary("harry potter3", "jk rolling", 255, "read", myLibary);
totalNumBooks++;


// LOOP OVER ARRAY AND DISPLAY BOOKS
function displayBooks(myLibary) {

    for(let i = 0; i < myLibary.length; i++) {
        console.log(myLibary[i]);

        const bookCards = document.createElement('div');

        const bookCardTitle = document.createElement('p');
        const bookCardAuthor = document.createElement('p');  
        const bookCardPages = document.createElement('p');  
        const bookCardRead = document.createElement('p'); 
        
        bookCardTitle.textContent = myLibary[i].title;
        bookCardAuthor.textContent = myLibary[i].author;
        bookCardPages.textContent = myLibary[i].pages;
        bookCardRead.textContent = myLibary[i].read;

        bookCards.appendChild(bookCardTitle);
        bookCards.appendChild(bookCardAuthor);
        bookCards.appendChild(bookCardPages);
        bookCards.appendChild(bookCardRead);

       const containetr = document.getElementById('containetr');

       containetr.appendChild(bookCards);

    }
}

displayBooks(myLibary);