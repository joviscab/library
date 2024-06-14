//Books array
const myLibrary = [
    {title: 'Lord of the Rings', author: 'J. R. R. Tolkien', pages: '1216', read: 'no'},
    {title: 'The Hobbit', author: 'J. R. R. Tolkien', pages: '368', read: 'yes'},
    {title: 'Thus Spoke Zarathustra', author: 'F. Nietzsche', pages: '352', read: 'no'},
    ];

//Function to loop through the array
function showBooks() {
    const libraryList = document.getElementById('libraryList');
    libraryList.innerHTML = '';
    myLibrary.forEach(function(book, index) {
        const li = document.createElement('li');
        li.textContent = `${book.title}, by ${book.author}, with ${book.pages} pages. The book was read: ${book.read}.`;
        const markReadButton = document.createElement('button');
        markReadButton.textContent = book.read === 'yes' ? 'Mark as unread' : 'Mark as read';
        markReadButton.addEventListener("click", () => {
            if (myLibrary[index].read === "yes") {
                myLibrary[index].read = 'no';
                markReadButton.textContent = 'Mark as read';
            } else {
                myLibrary[index].read = 'yes';
                markReadButton.textContent = 'Mark as unread';
            }
                showBooks();
        });
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Book';
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            showBooks();
        });
        li.appendChild(removeButton);
        li.appendChild(markReadButton);
        libraryList.appendChild(li);
    });
}

showBooks();
   
//Constructor to add new books
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function () {
            let info = `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
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
    myLibrary.push(newBook);
    showBooks();
    document.getElementById('book-form').reset();

    const dialog = document.querySelector("dialog");
    dialog.close();
}

//Function to mark a book as read





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


