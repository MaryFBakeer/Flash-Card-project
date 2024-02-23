const router = require('express').Router();
const MainPage = require('../../components/MainPage');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  res.send(res.renderComponent(MainPage));
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password, score: 0 });
    if (user) {
      res.app.locals.user = user;
      res.redirect('/themes');
      return;
    }

    res.status(400).json({ error: 'Не все поля заполнены' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
