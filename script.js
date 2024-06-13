//Function to store new books into an array
const myLibrary = ['Lord of the Rings', 'The Hobbit', 'Zaratustra'];

//Constructor to add new books
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            let info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
            return info;
        };
    }
}

//Function to add a book by the form
function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.querySelector('input[name="book-read"]:checked').value;
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook.info());
    showBooks();
    document.getElementById('book-form').reset();

    const dialog = document.querySelector("dialog");
    dialog.close();
}

//Add form event listener
const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', addBookToLibrary);


//Dialog modal to input new books
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#showDialogButton");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});


//Function to loop through the array
function showBooks() {
    const libraryList = document.getElementById('libraryList');
    libraryList.innerHTML = '';
    myLibrary.forEach(function(book, index) {
        const li = document.createElement('li');
        li.textContent = book;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Book';
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            showBooks();
        });
        li.appendChild(removeButton);
        libraryList.appendChild(li);
    });
}

showBooks();

