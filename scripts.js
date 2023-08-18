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
const closeModalBtn = document.getElementById('close-btn');
let myLibrary = [];

function Book(author, title, numPages, read) {
    this.author = author,
        this.title = title,
        this.numPages = numPages,
        this.read = read
}

function addBookToDisplay(book, index) {
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `
            <div><span class="book-header">Author:</span> ${book.author}</div>
            <div><span class="book-header">Title:</span> ${book.title}</div>
            <div><span class="book-header">Number of Pages:</span> ${book.numPages}</div>
            <button class="read-btn btn">${book.read}</button>
            <button class="delete-btn btn">Delete</button>`;
    bookElement.setAttribute("data-number", index);
    bookElement.setAttribute("class", "book");

    let readButton = bookElement.querySelector(".read-btn");


    if(form.read.value == "Read") {
        readButton.style.backgroundColor = "#8360c3";
    }
    else  {
        readButton.style.backgroundColor = "#2ebf91";
    }

    
    readButton.addEventListener("click", () => {
        if (readButton.innerText == "Read") {
            readButton.innerText = "Not Read";
            readButton.style.backgroundColor = "#2ebf91";
        }
        else if (readButton.innerText == "Not Read") {
            readButton.innerText = "Read";
            readButton.style.backgroundColor = "#8360c3";
        }
    });

    bookElement.querySelector(".delete-btn").addEventListener("click", () => deleteBook(bookElement, index));
    libraryDisplay.appendChild(bookElement);
}

function clearModal() {
    form.author.value = '';
    form.title.value = '';
    form.numPages.value = '';
    if (form.read.value = "Not Read") form.read.value = "Read";
}

function deleteBook(bookElement, index) {
    myLibrary.splice(index, 1);
    libraryDisplay.removeChild(bookElement);
}

addNewBookBtn.addEventListener('click', () => {
    modal.showModal();
    clearModal();
    console.log(myLibrary)
})

closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevents modal (dialog element in HTML) from clearning books in library when button is clicked
    modal.close()
})

submit.addEventListener("click", (e) => {
    e.preventDefault(); // prevents form from trying to submit
    modal.close();
    let bookInfo = new Book(form.author.value, form.title.value, form.numPages.value, form.read.value);
    myLibrary.push(bookInfo);
    addBookToDisplay(bookInfo, myLibrary.length - 1);
});