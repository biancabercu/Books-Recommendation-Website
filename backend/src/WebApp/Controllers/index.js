const Router = require('express').Router();
const fs = require("fs");
const { parse } = require("csv-parse");
const path = require('path');
const coolPath = path.join(__dirname, 'Books.csv');

const {
    authorizeAndExtractTokenAsync
} = require('../Filters/JWTFilter.js');

const AuthorsController = require('./AuthorsController.js');
const UsersController = require('./UsersController.js');
const RolesController = require('./RolesController.js');
const BooksController = require('./BooksController.js');
const PublishersController = require('./PublishersController.js');
const MoviesController = require('./MoviesController.js');
const TicketsController = require('./TicketsController.js');
const RoomsController = require('./RoomsController.js');
const QAController = require('./QAController.js');
/**
 * TODO import controllers
 */
 Router.use('/v1/qa', authorizeAndExtractTokenAsync, QAController);
Router.use('/v1/rooms', authorizeAndExtractTokenAsync, RoomsController);
Router.use('/v1/movies', authorizeAndExtractTokenAsync, MoviesController);
Router.use('/v1/tickets', authorizeAndExtractTokenAsync, TicketsController);
Router.use('/v1/authors', authorizeAndExtractTokenAsync, AuthorsController);
Router.use('/v1/books', authorizeAndExtractTokenAsync, BooksController);
Router.use('/v1/publishers', authorizeAndExtractTokenAsync, PublishersController);

Router.use('/v1/users', UsersController);
Router.use('/v1/roles', authorizeAndExtractTokenAsync, RolesController);
const data = [];
fs.createReadStream(coolPath)
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function (row) {
    // 👇 push the object row into the array
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    // 👇 log the result array
    //console.log("parsed csv data:");
    //console.log(data);
  });
/**
 * TODO add controllers to main router
 */

module.exports = Router;