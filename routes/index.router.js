const router = require('express').Router();

// views

const mainRouter = require('./views/main.router');
const themesViewRouter = require('./views/themes.view.router');
const quizePageRouter = require('./views/quizePage.router.view');

// api
const quizeApiRouter = require('./api/apiQuize.route');
// const authApiRouter = require('./api/auth.api.router');
router.use('/api', quizeApiRouter);

// route views

router.use('/', mainRouter);
router.use('/themes', themesViewRouter);
router.use('/questions', quizePageRouter);

// route api

// router.use('/api/auth', authApiRouter);
// router.use('/api/books', booksApiRouter);

module.exports = router;
