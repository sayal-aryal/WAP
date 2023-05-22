let db = [];
let counter = 0;

module.exports = class Book {
    constructor(id, title, isbn, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save() {
        this.id = ++counter; //start with 1;
        db.push(this);
        return this;
    }

    static getAll() {
        return db;
    }

    static getById(id) {
        return db.find(book => book.id == id);
    }

    edit(id) {
        const index = db.findIndex(book => book.id == id);

        if (index > -1) {
            db.splice(index, 1, this);
            return this;
        }
        // return this;

    }

    static getAll() {
        return db;
    }

    static deleteById(id) {
        const index = db.findIndex(book => book.id == id);
        const deletedBook = db[index];
        db.splice(index, 1);
        return deletedBook;
    }

}