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

function addBookToLibrary() {
    // do stuff here
}