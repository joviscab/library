//Function to store new books into an array
const myLibrary = ['Lord of the Rings', 'The Hobbit', 'Zaratustra'];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
        return info
    };
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#showDialogButton");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});



//Function to loop through the array
function showBooks() {
    const libraryList = document.getElementById('libraryList');
    libraryList.innerHTML = '';
    myLibrary.forEach(function(book) {
        const li = document.createElement('li');
        li.textContent = book;
        libraryList.appendChild(li);
    });
}

showBooks();

