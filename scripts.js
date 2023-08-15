const libraryContainer = document.getElementById('library-container');
const newBookBtn = document.getElementById('new-book-btn');
let data = document.querySelectorAll('input');
let newData = [];
// const formAuthor = document.getElementById('author');
// const formTitle = document.getElementById('title');
// const formNumPages = document.getElementById('num-pages');
// const formRead = document.getElementById('read');

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

let book = document.createElement("div");
function addBookToLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        book = document.createElement("div");
        book.innerHTML = `
    ${i + 1}. <br>
    Author: ${myLibrary[i].author}  <br>
    Title: ${myLibrary[i].title} <br>
    Number of Pages: ${myLibrary[i].numPages} <br>
    Read: ${myLibrary[i].read}`
        libraryContainer.appendChild(book);
    }
}

newBookBtn.addEventListener("click", (e) => {
    let book = []
    e.preventDefault();
    newData = Array.from(data)
    book = Book(newData[0].value, newData[1], newData[2], newData[3])
    console.log(newData)
    myLibrary.push(book);
    addBookToLibrary();
})


console.log(data[0].textContent)