/* eslint-disable id-length */
/* eslint-disable quotes */
/* eslint-disable require-jsdoc */
"use strict";
let books = [];
module.exports = class Book {

    constructor(title, price, description) {
        
        this.title = title;
        this.price = price;
        this.description = description;
      }
      static getAll() {
        return books;
      }



}