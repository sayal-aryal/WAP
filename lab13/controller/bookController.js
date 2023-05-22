const Book = require('../model/book');

exports.save = (req, res, next) => {
    const addedBook = new Book(null,req.body.title, req.body.isbn, req.body.publishedDate, req.body.author).save();
    res.status(201).json(addedBook);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Book.getAll());
}

exports.getById = (req, res, next) => {
    res.status(200).json(Book.getById(req.params.id));
}

exports.deleteById = (req, res, next) => {
    res.json(Book.deleteById(req.params.id));
}

exports.edit = (req, res, next) => {
const editedBook= new Book(req.body.id, req.body.title, req.body.isbn, req.body.publishedDate, req.body.author).edit(req.params.id); 
res.json(editedBook);
}