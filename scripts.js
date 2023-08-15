const libraryDisplay = document.getElementById('library-display');
const newBookBtn = document.getElementById('new-book-btn');
let data = document.querySelectorAll('input');
const formAuthor = document.getElementById('author');
const formTitle = document.getElementById('title');
const formNumPages = document.getElementById('num-pages');
const formRead = document.getElementById('read');
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal-btn');

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

openModalBtn.addEventListener('click', () => {
    modal.showModal();
})

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");

        book.innerHTML = `
            ${i + 1}. <br>
            Author: ${myLibrary[i].author}  <br>
            Title: ${myLibrary[i].title} <br>
            Number of Pages: ${myLibrary[i].numPages} <br>
            Read: ${myLibrary[i].read}`
        libraryDisplay.appendChild(book);
    }
}

newBookBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form from submitting
    console.log(formAuthor.value, formTitle.value, formNumPages.value)
    let bookInfo = new Book(`${formAuthor.value}`, `${formTitle.value}`, `${formNumPages.value}`, `${formRead.value}`);
    myLibrary.push(bookInfo);
    console.log(myLibrary)
    libraryDisplay.innerHTML = '';  // Clear out the current books
    displayBooks();
    modal.close();
})

    displayBooks();