/* eslint-disable quotes */

"use strict";

const express = require('express');

const bookController = require("../controllers/bookController");

const router = express.Router();
router.get("/books", bookController.getAllBooks);
router.post("/books", bookController.save);


