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

function addBookToLibary(title, author, pages, read, totalNumBooks, myLibary) {
    // MAKES NEW BOOK OBJ WITH TITLE FOR NAME
    title = new Book(title, author, pages, read);

    //ADDS NEW BOOK TO LIBARY ARRAY
    myLibary.push(title)
}