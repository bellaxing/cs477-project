/* eslint-disable quotes */
"use strict";
const Book = require('../models/book');
module.exports.getAllBooks = (req, res, next) => {
    res.status(200).json(Book.getAll());
  };
  exports.save = (req, res, next) => {
    
    const book = new Book(
      
      req.body.title,
      req.body.price,
      req.body.description
    );
    res.json(book.save());
  };