const libraryDisplay = document.getElementById('library-display');
const submit = document.getElementById('submit');
const addNewBookBtn = document.getElementById('add-new-book-btn');
const form = {
    author: document.getElementById('author'),
    title: document.getElementById('title'),
    numPages: document.getElementById('num-pages'),
    read: document.getElementById('read')
};
const modal = document.getElementById('modal');
let myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author,
    this.title = title,
    this.numPages = numPages,
    this.read = read
}

function createNewBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.innerHTML = `
            ${i + 1}. <br>
            Author: ${myLibrary[i].author}  <br>
            Title: ${myLibrary[i].title} <br>
            Number of Pages: ${myLibrary[i].numPages} <br>
            <button class="read-btn btn">${myLibrary[i].read}</button>
            <button class="delete-btn btn">Delete</button>`
        book.setAttribute("data-number", myLibrary.indexOf(myLibrary[i]))
        book.setAttribute("class", "book")
        libraryDisplay.appendChild(book);
    }
}

function clearLibraryDisplay() {
    libraryDisplay.innerHTML = '';
}

function deleteBook() {
    let deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(button => {
        button.addEventListener("click", (e) => {
            const bookIndex = e.target.parentElement.getAttribute("data-number");
            myLibrary.splice(bookIndex, 1);
            clearLibraryDisplay();
            displayBooks();
        });
    });
}

function readBook() {
    let readBtn = document.querySelectorAll('.read-btn')
    readBtn.forEach(button => {
        button.addEventListener("click", (e) => {
            const readValue = button.innerText
            if (readValue == "Read") {
                button.innerText = "Not Read";
            }
            else if (readValue == "Not Read") {
                button.innerText = "Read";
            }
        })
    })
}

function displayBooks() {
    createNewBook();
    deleteBook();
    readBook();
}

addNewBookBtn.addEventListener('click', () => {
    modal.showModal();
})

submit.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form from submitting
    let bookInfo = new Book(form.author.value, form.title.value, form.numPages.value, form.read.value);
    myLibrary.push(bookInfo);
    clearLibraryDisplay();
    displayBooks();
    modal.close();
})
