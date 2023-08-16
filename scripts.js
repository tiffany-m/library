const libraryDisplay = document.getElementById('library-display');
const submit = document.getElementById('submit');
const addNewBookBtn = document.getElementById('add-new-book-btn');
const formAuthor = document.getElementById('author');
const formTitle = document.getElementById('title');
const formNumPages = document.getElementById('num-pages');
const formRead = document.getElementById('read');
const modal = document.getElementById('modal');
let myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author,
    this.title = title,
    this.numPages = numPages,
    this.read = read
}

function displayBooks() {
    // create new div with book added
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.innerHTML = `
            ${i + 1}. <br>
            Author: ${myLibrary[i].author}  <br>
            Title: ${myLibrary[i].title} <br>
            Number of Pages: ${myLibrary[i].numPages} <br>
            <button class="read-btn">${myLibrary[i].read}</button>
            <button class="delete-btn">Delete</button>`
        book.setAttribute("data-number", myLibrary.indexOf(myLibrary[i]))
        book.setAttribute("class", "book")
        libraryDisplay.appendChild(book);
    }

    // delete button
    let deleteBtn = document.querySelectorAll('.delete-btn');
    deleteBtn.forEach(button => {
        button.addEventListener("click", (e) => {
            const bookIndex = e.target.parentElement.getAttribute("data-number");
            myLibrary.splice(bookIndex, 1);
            libraryDisplay.innerHTML = '';
            displayBooks();
        });
    });

    // read button
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

addNewBookBtn.addEventListener('click', () => {
    modal.showModal();
})

submit.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form from submitting
    let bookInfo = new Book(formAuthor.value, formTitle.value, formNumPages.value, formRead.value);
    myLibrary.push(bookInfo);
    libraryDisplay.innerHTML = '';
    displayBooks();
    modal.close();
})
