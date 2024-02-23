const router = require('express').Router();
const { default: Page404 } = require('../../components/Page404');

router.get('/', async (req, res) => {
  try {
    res.send(
      res.renderComponent(Page404, {
        img: 'https://64.media.tumblr.com/tumblr_lz2ufhclZj1r4mh0bo1_r1_400.gifv',
      }),
    );
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
