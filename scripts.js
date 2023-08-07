let libraryContainer = document.getElementById('library-container')

let myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author,
    this.title = title,
    this.numPages = numPages,
    this.read = read
}

let book1 = new Book("Tiffany", "How To Plants", 127, "read");
let book2 = new Book("Justin", "Planting Herbs", 389, "not read");

myLibrary.push(book1);
myLibrary.push(book2);

console.log(myLibrary);

let book = document.createElement("div");
for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    book.textContent = `Author: ${myLibrary.author}, Title: ${myLibrary[i].title}, Number of Pages: ${myLibrary[i].numPages}, Read: ${myLibrary[i].read}`
    libraryContainer.appendChild(book);
}


function addBookToLibrary() {
    // do stuff here
}