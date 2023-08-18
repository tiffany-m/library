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
            <div><span class="book-header">Author:</span> ${myLibrary[i].author}</div>
            <div><span class="book-header">Title:</span> ${myLibrary[i].title}</div>
            <div><span class="book-header">Number of Pages:</span> ${myLibrary[i].numPages}</div>
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
                button.style.backgroundColor = "#2ebf91";
            }
            else if (readValue == "Not Read") {
                button.innerText = "Read";
                button.style.backgroundColor = "#8360c3";
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
