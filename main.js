const myLibrary = [];
let totalNumBooks = 0;
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;

// BOOK CONSTRUCTOR
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("you must use the 'new' operator to call this constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.id = crypto.randomUUID();
}

// ADD BOOKS TO ARRAY
function addBookToLibrary(title, author, pages, read, myLibrary) {
    // MAKES NEW BOOK OBJ WITH TITLE FOR NAME
    title = new Book(title, author, pages, read);

    //ADDS NEW BOOK TO LIBRARY ARRAY
    myLibrary.push(title)
}

addBookToLibrary("harry potter1", "jk rolling", 255, "Read", myLibrary);
totalNumBooks++;
addBookToLibrary("harry potter2", "jk rolling", 255, "Read", myLibrary);
totalNumBooks++;
addBookToLibrary("harry potter3", "jk rolling", 255, "Read", myLibrary);
totalNumBooks++;


// LOOP OVER ARRAY AND DISPLAY BOOKS
function displayBooks(myLibrary) {

    for(let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);

        const bookCards = document.createElement('div');

        const bookCardTitle = document.createElement('p');
        const bookCardAuthor = document.createElement('p');  
        const bookCardPages = document.createElement('p');  
        const bookCardRead = document.createElement('p');
        bookCardRead.setAttribute('id', `readText${i}`);
        const readBtn = document.createElement('button');
        const deleteBookBtn = document.createElement('button');
        deleteBookBtn.setAttribute('id', `deleteBookBtn${i}`);
        readBtn.setAttribute('id', `readBtn${i}`); 
        
        bookCardTitle.textContent = myLibrary[i].title;
        bookCardAuthor.textContent = myLibrary[i].author;
        bookCardPages.textContent = myLibrary[i].pages;
        bookCardRead.textContent = myLibrary[i].read;
        deleteBookBtn.innerText = "Remove Book";
        readBtn.innerText = "Read";

        bookCards.appendChild(bookCardTitle);
        bookCards.appendChild(bookCardAuthor);
        bookCards.appendChild(bookCardPages);
        bookCards.appendChild(bookCardRead);
        bookCards.appendChild(deleteBookBtn);
        bookCards.appendChild(readBtn);
        bookCards.setAttribute('id', `${myLibrary[i].id}`);

       const container = document.getElementById('container');

       container.appendChild(bookCards);

    }
}

const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector("dialog + #addBooks");
const closeForm = document.querySelector("dialog #submit");

//OPENS MODAL 
addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

// TAKES FORM INPUT AND MAKES NEW BOOK AND DISPLAYS NEW BOOK
document.getElementById("submit").onclick = function() {
    bookTitle = document.getElementById("titleInput").value;
    bookAuthor = document.getElementById("authorInput").value;
    bookPages = document.getElementById("pagesInput").value;
    if (document.getElementById("readInput").checked) {
        bookRead = "Read";
    }
    else {
        bookRead = "Not Read"
    }
    
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead, myLibrary);
    
    for(let i = 0; i < myLibrary.length; i++) {
        if (i == myLibrary.length - 1) {
            console.log(myLibrary[i]);

            const bookCards = document.createElement('div');

            const bookCardTitle = document.createElement('p');
            const bookCardAuthor = document.createElement('p');  
            const bookCardPages = document.createElement('p');  
            const bookCardRead = document.createElement('p');
            bookCardRead.setAttribute('id', `readText${i}`);
            const readBtn = document.createElement('button');
            const deleteBookBtn = document.createElement('button');
            deleteBookBtn.setAttribute('id', `deleteBookBtn${i}`);
            readBtn.setAttribute('id', `readBtn${i}`); 
            
            bookCardTitle.textContent = myLibrary[i].title;
            bookCardAuthor.textContent = myLibrary[i].author;
            bookCardPages.textContent = myLibrary[i].pages;
            bookCardRead.textContent = myLibrary[i].read;
            deleteBookBtn.innerText = "Remove Book";
            readBtn.innerText = "Read";

            bookCards.appendChild(bookCardTitle);
            bookCards.appendChild(bookCardAuthor);
            bookCards.appendChild(bookCardPages);
            bookCards.appendChild(bookCardRead);
            bookCards.appendChild(deleteBookBtn);
            bookCards.appendChild(readBtn);
            bookCards.setAttribute('id', `${myLibrary[i].id}`);

            const container = document.getElementById('container');

            container.appendChild(bookCards);
        }
    }
    
}

// CLOSES MODAL 
closeForm.addEventListener("click", () => {
    dialog.close();
})

displayBooks(myLibrary);

//LOOP ADDS EVENT LISTENER TO ALL DELETE BUTTONS
for (let j = 0; j < myLibrary.length; j++) {
    const deletebtn = document.getElementById(`deleteBookBtn${j}`);
    deletebtn.addEventListener('click', () => {
        const deleteIndex = document.getElementById(`${myLibrary[j].id}`)
        console.log(deleteIndex);
        myLibrary.splice((j), 1);
        console.log(myLibrary);
        deleteIndex.parentNode.removeChild(deleteIndex);
    });
}

//LOOP ADDS EVENT LISTENER TO ALL READ BUTTONS
for (let k = 0; k < myLibrary.length; k++) {
    const btnRead = document.getElementById(`readBtn${k}`);
    btnRead.addEventListener('click', () => {
        const changeReadText = document.getElementById(`readText${k}`);
        if (myLibrary[k].read === "Read") {
            myLibrary[k].read = "Not Read";
            changeReadText.textContent = "Not Read";
        }
        else if (myLibrary[k].read === "Not Read") {
            myLibrary[k].read = "Read";
            changeReadText.textContent = "Read";
        }
        console.log(myLibrary[k].read);
    });
}