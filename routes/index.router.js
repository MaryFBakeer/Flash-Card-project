const router = require('express').Router();

// views

const mainRouter = require('./views/main.router');
const themesViewRouter = require('./views/themes.view.router');
const quizePageRouter = require('./views/quizePage.router.view');

// api

// const booksApiRouter = require('./api/books.api.router');
// const authApiRouter = require('./api/auth.api.router');

// route views

router.use('/', mainRouter);
router.use('/themes', themesViewRouter);
router.use('/themes', quizePageRouter);

// route api

// router.use('/api/auth', authApiRouter);
// router.use('/api/books', booksApiRouter);

module.exports = router;
