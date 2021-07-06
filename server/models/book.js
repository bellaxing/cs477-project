/* eslint-disable id-length */
/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
"use strict";

let books = [];
module.exports = class Book {
  constructor(name, price, publishDate) {
    this.name = name;
    this.price = price;
    this.publishDate = publishDate;
  }

  static getAll() {
    return books;
  }
};
