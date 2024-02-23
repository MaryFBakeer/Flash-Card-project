const router = require('express').Router();
const { default: Page404 } = require('../../components/Page404');

router.get('/', async (req, res) => {
  try {
    res.send(
      res.renderComponent(Page404, {
        img: 'https://cdn.dribbble.com/users/6856/screenshots/879850/404-01.gif',
      })
    );
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
