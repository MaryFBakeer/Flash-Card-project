const router = require('express').Router();

// views

const mainRouter = require('./main.router.js');
// const booksViewRouter = require('./views/books.view.router');
// const authViewRouter = require('./views/auth.view.router');

// api

// const booksApiRouter = require('./api/books.api.router');
// const authApiRouter = require('./api/auth.api.router');

// route views

router.use('/', mainRouter);
// router.use('/auth', authViewRouter);
// router.use('/books', booksViewRouter);

// route api

// router.use('/api/auth', authApiRouter);
// router.use('/api/books', booksApiRouter);

module.exports = router;